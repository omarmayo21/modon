import nodemailer from 'nodemailer';
import { google } from 'googleapis';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Log all submitted fields for debugging (in Vercel logs)
        console.log('Received Form Submission:', req.body);

        // Vercel automatically parses application/x-www-form-urlencoded into req.body
        const body = req.body || {};
        const {
            first_name,
            last_name,
            email,
            PhoneNumber,
            mobile,
            CountryName,
            '00NVH000003TdQr': countryCode,
            '00NVH000002y6iv': countryOfResidence,
            '00NVH00000303CJ': preferredContactTime,
            '00NHp00000lQiTk': nationality,
            '00NHp00000lQiTv': purposeOfUse,
            '00NVH000003Z6wv': brandCompany,
            '00NHp00000tWW0R': project,
            lead_source: leadSource,
            consentCheck,
            '00NHp00000rkes6': utmSource,
            '00NVH000004mXYr': utmMedium,
            '00NHp00000rkeyC': utmCampaign,
            '00NVH000005PrKn': utmUrl,
            redirectUrl,
            Submit
        } = body;

        // Build HTML Email Content
        let htmlContent = `
            <h2>New Lead Registration</h2>

            <h3>Lead Information</h3>
            <hr />
            ${first_name ? `<p><strong>First Name:</strong> ${first_name}</p>` : ''}
            ${last_name ? `<p><strong>Last Name:</strong> ${last_name}</p>` : ''}
            ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
            <p><strong>Mobile:</strong> ${countryCode ? countryCode + ' ' : ''}${mobile || PhoneNumber || 'N/A'}</p>
            ${countryCode ? `<p><strong>Country Code:</strong> ${countryCode}</p>` : ''}
            ${mobile ? `<p><strong>National Mobile:</strong> ${mobile}</p>` : ''}
            ${countryOfResidence ? `<p><strong>Country of Residence:</strong> ${countryOfResidence}</p>` : ''}
            ${preferredContactTime ? `<p><strong>Preferred Contact Time:</strong> ${preferredContactTime}</p>` : ''}
            ${nationality ? `<p><strong>Nationality:</strong> ${nationality}</p>` : ''}
            ${purposeOfUse ? `<p><strong>Purpose of Use:</strong> ${purposeOfUse}</p>` : ''}

            <br />
            <h3>Tracking & Campaign</h3>
            <hr />
            ${brandCompany ? `<p><strong>Brand/Company:</strong> ${brandCompany}</p>` : ''}
            ${project ? `<p><strong>Project:</strong> ${project}</p>` : ''}
            ${leadSource ? `<p><strong>Lead Source:</strong> ${leadSource}</p>` : ''}
            ${consentCheck ? `<p><strong>Consent:</strong> ${consentCheck === 'on' ? 'Yes' : consentCheck}</p>` : ''}

            <br />
            <h3>UTM Parameters</h3>
            <hr />
            ${utmSource ? `<p><strong>UTM Source:</strong> ${utmSource}</p>` : ''}
            ${utmMedium ? `<p><strong>UTM Medium:</strong> ${utmMedium}</p>` : ''}
            ${utmCampaign ? `<p><strong>UTM Campaign:</strong> ${utmCampaign}</p>` : ''}
            ${utmUrl ? `<p><strong>UTM URL:</strong> ${utmUrl}</p>` : ''}
        `;

        // Check for any unknown/unmapped fields and list them at the bottom
        const knownFields = [
            'first_name', 'last_name', 'email', 'PhoneNumber', 'mobile', 'CountryName',
            '00NVH000003TdQr', '00NVH000002y6iv', '00NVH00000303CJ', '00NHp00000lQiTk', '00NHp00000lQiTv',
            '00NVH000003Z6wv', '00NHp00000tWW0R', 'lead_source', 'consentCheck',
            '00NHp00000rkes6', '00NVH000004mXYr', '00NHp00000rkeyC', '00NVH000005PrKn',
            'redirectUrl', 'Submit'
        ];

        let hasUnknownFields = false;
        let unknownFieldsHtml = `<br /><h3>Other Fields</h3><hr />`;
        
        for (const [key, value] of Object.entries(body)) {
            if (!knownFields.includes(key) && value) {
                hasUnknownFields = true;
                unknownFieldsHtml += `<p><strong>Unknown Tracking Field (${key}):</strong> ${value}</p>`;
            }
        }

        if (hasUnknownFields) {
            htmlContent += unknownFieldsHtml;
        }

        // Configure Nodemailer Transport
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST || 'smtp.gmail.com',
            port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Send Email
        await transporter.sendMail({
            from: process.env.EMAIL_FROM || process.env.SMTP_USER,
            to: process.env.EMAIL_TO || process.env.SMTP_USER,
            subject: 'New Lead Submission - Modon',
            html: htmlContent,
        });

        console.log('Email sent successfully!');

        // ---- Google Sheets Integration ----
        const sheetId = process.env.GOOGLE_SHEET_ID;
        const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
        const privateKey = process.env.GOOGLE_PRIVATE_KEY;

        if (sheetId && clientEmail && privateKey) {
            try {
                // Initialize Auth
                const auth = new google.auth.GoogleAuth({
                    credentials: {
                        client_email: clientEmail,
                        private_key: privateKey.replace(/\\n/g, '\n')
                    },
                    scopes: ['https://www.googleapis.com/auth/spreadsheets']
                });

                const sheets = google.sheets({ version: 'v4', auth });

                // 1. Fetch spreadsheet metadata to get the first sheet's title
                const meta = await sheets.spreadsheets.get({ spreadsheetId: sheetId });
                const firstSheetTitle = meta.data.sheets[0].properties.title;

                // 2. Prepare the row data with exactly the 9 requested fields
                const row = [
                    first_name || '',
                    last_name || '',
                    email || '',
                    `${countryCode ? countryCode + ' ' : ''}${mobile || PhoneNumber || ''}`.trim(),
                    countryOfResidence || '',
                    preferredContactTime || '',
                    nationality || '',
                    purposeOfUse || '',
                    project || ''
                ];

                // 3. Append to the first sheet
                await sheets.spreadsheets.values.append({
                    spreadsheetId: sheetId,
                    range: `${firstSheetTitle}!A:A`, // A broad range allows appending to the bottom
                    valueInputOption: 'USER_ENTERED',
                    requestBody: {
                        values: [row]
                    }
                });

                console.log('Lead appended to Google Sheets successfully!');
            } catch (sheetError) {
                console.error('Error appending to Google Sheets:', sheetError);
                // Halt conversion if Google Sheets fails
                const referer = req.headers.referer;
                if (referer) {
                    const separator = referer.includes('?') ? '&' : '?';
                    return res.redirect(302, `${referer}${separator}lead_error=1&error_type=google_sheets_failed`);
                }
                return res.status(500).json({ error: 'Google Sheets Error' });
            }
        }
        // ---- End Google Sheets Integration ----

        // Redirect safely to the success page as per standard form submission behavior
        if (redirectUrl) {
            const separator = redirectUrl.includes('?') ? '&' : '?';
            return res.redirect(302, `${redirectUrl}${separator}lead_success=1`);
        } else {
            return res.status(200).send('Form submitted successfully, but no redirectUrl was provided.');
        }
    } catch (error) {
        console.error('Error handling form submission:', error);
        const referer = req.headers.referer;
        if (referer) {
            const separator = referer.includes('?') ? '&' : '?';
            return res.redirect(302, `${referer}${separator}lead_error=1&error_type=server_error`);
        }
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
