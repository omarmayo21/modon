import nodemailer from 'nodemailer';

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
            '00NVH000003TdQr': countryCode,
            '00NVH000002y6iv': countryOfResidence,
            '00NVH00000303CJ': preferredContactTime,
            '00NHp00000lQiTk': nationality,
            '00NHp00000lQiTv': purposeOfUse,
            retURL
        } = body;

        // Build HTML Email Content
        let htmlContent = `
            <h2>New Lead Registration</h2>
            <p><strong>First Name:</strong> ${first_name || 'N/A'}</p>
            <p><strong>Last Name:</strong> ${last_name || 'N/A'}</p>
            <p><strong>Email:</strong> ${email || 'N/A'}</p>
            <p><strong>Mobile (Input):</strong> ${PhoneNumber || 'N/A'}</p>
            <p><strong>Country Code:</strong> ${countryCode || 'N/A'}</p>
            <p><strong>Raw Mobile (Hidden):</strong> ${mobile || 'N/A'}</p>
            <p><strong>Country of Residence:</strong> ${countryOfResidence || 'N/A'}</p>
            <p><strong>Preferred Contact Time:</strong> ${preferredContactTime || 'N/A'}</p>
            <p><strong>Nationality:</strong> ${nationality || 'N/A'}</p>
            <p><strong>Purpose of Use:</strong> ${purposeOfUse || 'N/A'}</p>
            <br />
            <h3>Tracking & UTM Parameters</h3>
        `;

        // Dynamically add all fields just in case they aren't explicitly destructured above
        for (const [key, value] of Object.entries(body)) {
            // Skip retURL, oid, and fields we already added
            if (['retURL', 'oid', 'first_name', 'last_name', 'email', 'PhoneNumber', 'mobile', 
                 '00NVH000003TdQr', '00NVH000002y6iv', '00NVH00000303CJ', '00NHp00000lQiTk', '00NHp00000lQiTv'].includes(key)) {
                continue;
            }
            htmlContent += `<p><strong>${key}:</strong> ${value}</p>`;
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

        // Redirect safely to the success page as per standard form submission behavior
        if (retURL) {
            return res.redirect(302, retURL);
        } else {
            return res.status(200).send('Form submitted successfully, but no retURL was provided.');
        }
    } catch (error) {
        console.error('Error handling form submission:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
