// @ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
    useEffect(() => {
        const handleResize = () => {
            const screenWidth = window.innerWidth;
            const heroImgs = document.querySelectorAll('.bannerimage');
            heroImgs.forEach(img => {
                const dsrc = img.getAttribute('data-dsrc');
                const msrc = img.getAttribute('data-msrc');
                const newSrc = (screenWidth < 1025 && msrc) ? msrc : dsrc;
                if (newSrc && img.getAttribute('src') !== newSrc) {
                    img.setAttribute('src', newSrc);
                }
            });
        };
        handleResize();
        window.addEventListener('resize', handleResize);

        if ((window as any).AOS) {
            (window as any).AOS.init({ duration: 1200, once: true });
        }

        

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="content-wrapper">
            <Header />
             
 

<div >
    <div className="sfContentBlock sf-Long-text" ><section className="content-section bannerless-top"><div className="container"><div className="row"><div className="col-sm-12"><div className="section-title">Data Privacy Policy</div></div><div className="col-sm-12"><div className="desc"><p><strong>Last updated: 4 May 2026</strong></p><p>Modon Holding PSC, together with its subsidiaries and affiliates
                        (&ldquo;<strong>Modon</strong>&rdquo;,
 &ldquo;<strong>we</strong>&rdquo;,
 &ldquo;<strong>our</strong>&rdquo;, or
                        &ldquo;<strong>us</strong>&rdquo;) is committed to protecting and
                        respecting your privacy and personal data in accordance with
                        applicable data protection laws.
                    </p><p>This Privacy Policy (&ldquo;<strong>Policy</strong>&rdquo;) sets out
                        the basis on which we collect, use, disclose, and otherwise process
                        your personal data when you interact with us, whether through our
                        websites, mobile applications, in person or otherwise.
                    </p><p>Modon acts as a "<strong>data controller</strong>" (or equivalent
                        term under applicable law) in relation to the personal data that we
                        collect and process. This means that we are responsible for, and
                        determine the purposes and means of processing of your personal
                        data.
                    </p><p>We take your privacy very seriously and we encourage you read this
                        Policy carefully as it contains important information on:
                    </p><ol type="a"><li>the personal data we collect about you;</li><li>how we process your personal data;</li><li>with whom your personal data might be shared; and</li><li>the choices you have surrounding how we use information about you.
                        </li></ol><p>Our privacy practices are guided by a global framework, but certain
                        laws may require additional details in specific countries. If you
                        are located in one of these regions, please review the relevant
                        Regional Addendum, which forms part of this Policy.
                    </p></div></div></div></div><div className="faq-section py-4"><div className="container"><div className="row"><div className="col-sm-12">{/*  <div className="section-title">Frequently Asked Questions</div>  */}
 <div className="accordion faq-accordion" id="accordionExample"><div className="accordion-item"><div className="accordion-header"><button className="accordion-button valid collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-1" aria-expanded="false" aria-controls="collapse-1" aria-invalid="false">PERSONAL DATA WHICH WE COLLECT
                                </button></div><div id="collapse-1" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Personal data provided by you</span></strong>
 </div><strong><span style={{ textDecoration: 'underline' }}></span></strong>
 <p>We collect personal data directly from you when you
                                            interact with us. The nature of the data collected depends
                                            on your relationship with us:
                                        </p><table className="table table-bordered align-middle k-table" border="1" cellpadding="10" cellspacing="0" style={{ width: '100%', marginBottom: '20px' }}><thead><tr><th data-role="resizable">Your Relationship With Us
                                                    </th><th>How You Interact With Us (In Person, by email, by
                                                        phone, by messaging application or otherwise, as
                                                        applicable)
                                                    </th><th>Types of Data</th></tr></thead><tbody><tr><td rowspan="7">Customers / Prospective Customers</td><td>Are onboarded as a customer</td><td>Contact and personal information, such as full name,
                                                        nationality, postal address, email address,
                                                        telephone number, passport / national identification
                                                    </td></tr><tr><td>Purchase or make payments for any of our products or
                                                        services
                                                    </td><td>Financial information, such as bank account details
                                                        and payment history.
                                                    </td></tr><tr><td>Provide us with information to satisfy our KYC
                                                        process
                                                    </td><td>Identity verification information, including
                                                        passport / national identification copies, proof of
                                                        address, financial data, nationality
                                                    </td></tr><tr><td>Complete feedback or surveys</td><td>Preference and opinion data, such as opinions,
                                                        preferences, service experience
                                                    </td></tr><tr><td>Correspond with us in respect of any services you
                                                        procure from us
                                                    </td><td>Communication data, including full name, email
                                                        address, telephone number, communication records
                                                    </td></tr><tr><td>Register with us for marketing of our services
                                                    </td><td>Marketing preferences, including email address and
                                                        subscription preferences
                                                    </td></tr><tr><td>Correspond with us and we record your information
                                                        for quality control, training purposes and
                                                        improvement of our services
                                                    </td><td>Call and interaction records, such as telephone
                                                        number, call recordings, feedback
                                                    </td></tr><tr><td rowspan="5">Website Visitors and Users and Mobile Application
                                                        Users
                                                    </td><td>Register with us on our website and/or download our
                                                        mobile application
                                                    </td><td>Contact information, including full name, email
                                                        address, telephone number
                                                    </td></tr><tr><td>Purchase or make payments for any of our services
                                                    </td><td>Financial information, including credit card details
                                                        and billing address
                                                    </td></tr><tr><td>Contact us through our website and/or mobile
                                                        application / register interest
                                                    </td><td>Inquiry data, such as full name, email address,
                                                        telephone number, inquiry content
                                                    </td></tr><tr><td>Complete customer feedback or surveys</td><td>Preference and opinion data, including opinions,
                                                        preferences
                                                    </td></tr><tr><td>Use our website (cookies, analytics) and/or mobile
                                                        application
                                                    </td><td>Technical and usage data, including, but not limited
                                                        to, IP address, device type, browser type, location
                                                        data, browsing behaviour
                                                    </td></tr><tr><td rowspan="5">Prospective Employees </td><td>Provide us with your CV / apply for a job</td><td>Employment and contact information, such as full
                                                        name, email address, telephone number, nationality,
                                                        employment history, education history
                                                    </td></tr><tr><td>Apply for a job with us via our website or other
                                                        channels
                                                    </td><td>Application data, including CV, cover letter,
                                                        references, passport / national identification
                                                        copies
                                                    </td></tr><tr><td>Participate in interviews or assessments</td><td>Assessment data, such as interview notes, assessment
                                                        results
                                                    </td></tr><tr><td>Correspond with us during the recruitment process
                                                    </td><td>Communication data, including email address,
                                                        telephone number, communication records
                                                    </td></tr><tr><td>Background checks and sanctions searches</td><td>Background data, including criminal conviction
                                                        information, sanctions screening results
                                                    </td></tr><tr><td rowspan="1">Employees / Suppliers / Secondees / Facility Users / Customers (including existing and prospective)</td><td>When accessing Modon facilities or premises or applications</td><td>Information derived from an individual&rsquo;s physical characteristics such as facial features and fingerprints</td></tr><tr><td rowspan="4">Suppliers</td><td>Are being onboarded as a supplier</td><td>Contact information, including full name, postal
                                                        address, telephone number
                                                    </td></tr><tr><td>Provide us with information necessary to enable us
                                                        to pay for your services
                                                    </td><td>Financial information, including bank account
                                                        details, tax identification number (where relevant)
                                                    </td></tr><tr><td>Correspond with us in respect of any product or
                                                        services we procure from you
                                                    </td><td>Communication data, such as email address, telephone
                                                        number, communication records
                                                    </td></tr><tr><td>Background checks and sanction searches</td><td>Background data such as criminal conviction
                                                        information, sanctions screening results
                                                    </td></tr></tbody></table><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Personal data provided by third parties</span></strong>
 </div><p>In certain circumstances, we may receive information about
                                            you from third party sources. This may include:
                                        </p><ul><li>Background checks providers: including criminal record
                                                checks, credit bureau credit history checks, sanctions
                                                screening, and verification of identity and employment
                                                history.
                                            </li><li>Recruitment agencies or job platforms: providing CVs,
                                                application details, and references for prospective
                                                employees.
                                            </li><li>Event partners or co-hosts: sharing registration details
                                                or participation data for events you attend.
                                            </li><li>Payment processors and financial institutions:
                                                confirming transaction details and payment verification.
                                            </li><li>Publicly available sources: such as corporate
                                                registries, professional networking platforms, or
                                                government databases.
                                            </li><li>Channel aggregators, such as travel agencies and travel
                                                websites.
                                            </li><li>Real estate brokers.</li><li>Our affiliated entities.</li></ul><p>We will combine this data with the information we already
                                            hold about you to help us provide our services in
                                            accordance with your requirements, improve and personalise
                                            our services to you, fulfil our contractual obligations,
                                            comply with legal and regulatory requirements, verify your
                                            identity and eligibility for certain services or roles,
                                            and ensure the accuracy and completeness of our records.
                                        </p><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Personal data about other individuals</span></strong>
 </div><p>If you provide us with personal data about another
                                            individual (for example, a colleague, family member, or
                                            business contact), you confirm that the other person has
                                            appointed you to act on his/her behalf. By submitting such
                                            information, you confirm that:
                                        </p><ol type="a"><li>you have informed the individual about this Policy;
                                            </li><li>the individual has given you permission to share their
                                                personal data with us; and
                                            </li></ol><p>where required, the individual has provided express
                                            consent for the processing and sharing of their personal
                                            data by us. You ensure that any personal data you provide
                                            on behalf of another person is accurate and complete.
                                        </p><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Monitoring and recording communications</span></strong>
 </div><p>We may monitor and record communications with you (such as
                                            telephone conversations and emails) for the purpose of
                                            quality assurance, training, fraud prevention and
                                            compliance activities.
                                        </p><p>Such monitoring and recording is carried out in accordance
                                            with applicable data protection laws. Where required, we
                                            will inform you at the time of communication that
                                            recording is taking place. We rely on our legitimate
                                            interests or legal obligations as the lawful basis for
                                            this processing, where available, and we ensure that your
                                            rights and freedoms are appropriately protected.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button valid collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-2" aria-expanded="false" aria-controls="collapse-1" aria-invalid="false">HOW WE USE YOUR PERSONAL DATA AND THE LEGAL BASES FOR THESE
                                    USES
                                </button></div><div id="collapse-2" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Overview</span></strong>
 </div><p>We collect information about you so that we can:</p><ol type="a"><li>identify you and provide and manage any services you
                                                request from us;
                                            </li><li>respond to your enquiries;</li><li>process your purchases;</li><li>detect and prevent fraud;</li><li>comply with our legal and regulatory obligations (for
                                                example, AML obligations);
                                            </li><li>investigate complaints made;</li><li>undertake marketing;</li><li>customise our website and its content to your particular
                                                preferences;
                                            </li><li>make or defend against complaints or formal legal claims
                                                and proceedings;
                                            </li><li>make or safeguard our position in respect of any actual
                                                or potential insurance claims;
                                            </li><li>notify you of any changes to our website or to our
                                                services that may affect you;
                                            </li><li>improve our services and ensure quality control;</li><li>conduct customer profiling and segmentation to better
                                                tailor our offerings;
                                            </li><li>ensure the security of our systems, premises, and
                                                personnel; and
                                            </li><li>facilitate the recruitment and onboarding process for
                                                candidates.
                                            </li></ol><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Marketing</span></strong>
 </div><p>We may send you information by post, email, telephone,
                                            text message (SMS) or whatsapp message about our products,
                                            services and special offers which may be of interest to
                                            you.
                                        </p><p>We will only send you marketing messages (or share your
                                            details with the third parties for marketing purposes)
                                            when you have provided your consent, typically by ticking
                                            the relevant box when you are submitting your personal
                                            data.
                                        </p><p>You can withdraw your consent and opt out at of receiving
                                            marketing communications any time by using the unsubscribe
                                            options provided in our messages, of if the communication
                                            does not contain such an option, email us at
                                            <a href="mailto:dpo@modon.com">dpo@modon.com</a>.
 </p><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Credit checking</span></strong>
 </div><p>We may do a credit check on you:</p><ol type="a"><li>so that we can make credit decisions about you; and
                                            </li><li>to prevent and detect fraud and money laundering.</li></ol><p>Our search will be recorded on the files of the credit
                                            reference agency.
                                        </p><p>We may also disclose information about how you conduct
                                            your account to credit reference agencies and your
                                            information may be linked to records relating to other
                                            people living at the same address with whom you are
                                            financially linked.
                                        </p><p>Other credit businesses may use your information to:</p><ol type="a"><li>make credit decisions about you and the people with whom
                                                you are financially associated;
                                            </li><li>trace debtors; and</li><li>prevent and detect fraud and money laundering.</li></ol><p>If you provide false or inaccurate information to us and
                                            we suspect fraud, we will record this.
                                        </p><p>If you want to see your credit file, please contact us.
                                        </p><div className="desc-subtitle"><strong><span style={{ textDecoration: 'underline' }}>Legal bases</span></strong>
 </div><p>We process your personal data under one or more of the
                                            following legal bases, as permitted by applicable data
                                            protection laws:
                                        </p><ul><li><strong>Performance of a contract:</strong> where
                                                processing is necessary to deliver services you have
                                                requested or to take steps before entering into a
                                                contract (e.g. preparing or executing a property sale or
                                                lease agreement or confirming a hospitality booking).
                                            </li><li><strong>Compliance with legal obligations:</strong>
 where we are required to process data to meet regulatory
                                                or statutory requirements (e.g. conducting anti-money
                                                laundering checks, maintaining accounting records,
                                                complying with employment laws during recruitment).
                                            </li><li><strong>Legitimate interests:</strong> where available,
                                                where processing is necessary for our business
                                                operations, provided your rights and freedoms do not
                                                override those interests (e.g. improving our services,
                                                monitoring communications for quality assurance,
                                                securing our systems and premises, and managing
                                                insurance claims).
                                            </li><li><strong>Consent:</strong> where you have given us clear
                                                permission to process your data for specific purposes
                                                (e.g. marketing, certain recruitment activities).
                                            </li></ul><p>In the cases where we need your consent to hold and
                                            process your personal data, we will ask you to check a box
                                            on any form requiring consent. You may withdraw your
                                            consent at any time by contacting us as set in the
                                            &ldquo;Contact Us&rdquo; section.
                                        </p><p>If you choose not to provide certain personal data when
                                            requested, we may be unable to offer you access to
                                            specific services, respond to your enquiries, process
                                            transactions, or fulfil other functions that rely on that
                                            information. In some cases, this may also prevent us from
                                            complying with our legal obligations, such as verifying
                                            identity for anti-money laundering purposes or ensuring
                                            the security of our systems and operations.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-3" aria-expanded="true" aria-controls="collapse-1">WHEN WE MIGHT SHARE YOUR PERSONAL DATA WITH THIRD PARTIES
                                </button></div><div id="collapse-3" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>For the purposes of delivering our services, we may
                                            disclose your personal data to:
                                        </p><ol type="a"><li>our agents and service providers, including professional
                                                service providers such as law firms, accountants,
                                                auditors, recruitment agencies, IT support and/or
                                                solution providers, marketing agencies, and customer
                                                service platforms, who help us deliver our services and
                                                operate our business efficiently;
                                            </li><li>banks and payment processors, in connection with any
                                                payments to be made to or from you, including for
                                                property transactions, hospitality bookings, event
                                                registrations, or supplier payments;
                                            </li><li>law enforcement agencies, regulators, and government
                                                authorities, where required to comply with legal
                                                obligations or in connection with any investigation to
                                                help prevent unlawful activity, fraud, or breaches of
                                                applicable laws;
                                            </li><li>insurers and insurance brokers, in respect of any
                                                claims, complaints, or incidents involving you or our
                                                business operations;
                                            </li><li>our business partners, including joint venture partners
                                                and other service providers, hospitality affiliates, and
                                                media production collaborators, where necessary to
                                                deliver services or where you have registered interest
                                                or consented to such sharing;
                                            </li><li>credit reference agencies, where we conduct credit
                                                checks or report account conduct, as outlined in the
                                                Credit checking section above;
                                            </li><li>event organisers and venue operators, where you register
                                                or attend events hosted or co-hosted by us;
                                            </li><li>property agents, brokers, and developers, where you
                                                engage with us in relation to real estate transactions
                                                or services;
                                            </li><li>corporate buyers or sellers, in the event of a merger,
                                                acquisition, or sale of part or all of our business,
                                                where personal data may be transferred as part of the
                                                transaction;
                                            </li><li>third-party platforms and social media providers, where
                                                you interact with us via social media or digital
                                                channels, subject to your privacy settings and the
                                                platform&rsquo;s terms; and
                                            </li><li>data analytics and profiling providers, where we use
                                                tools to better understand customer preferences and
                                                improve our offerings, subject to appropriate safeguards
                                                and, where required, your consent.
                                            </li></ol></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-4" aria-expanded="true" aria-controls="collapse-1">HOW WE KEEP YOUR PERSONAL DATA SECURE
                                </button></div><div id="collapse-4" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>To protect your information we have policies and
                                            procedures in place to make sure that only authorised
                                            personnel can access the information, that information is
                                            handled and stored in a secure and sensible manner, and
                                            that all systems that can access the information have the
                                            necessary security measures in place. To accomplish this,
                                            all employees, contractors and sub-contractors have roles
                                            and responsibilities defined in those policies and
                                            procedures.
                                        </p><p>To make sure all employees, contractors and
                                            sub-contractors understand these responsibilities they are
                                            provided the necessary training and resources they need.
                                        </p><p>In additional to these operational measures, we also use a
                                            range of technologies and security systems to reinforce
                                            the policies.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-5" aria-expanded="true" aria-controls="collapse-1">HOW LONG DO WE KEEP YOUR PERSONAL DATA
                                </button></div><div id="collapse-5" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>We will only retain your personal data for as long as
                                            necessary to fulfil the purposes for which we collected it
                                            for, including for the purposes of satisfying any legal,
                                            accounting or reporting requirements.
                                        </p><p>To determine the appropriate retention period for personal
                                            data, we consider the amount, nature, and sensitivity of
                                            the personal data, the potential risk of harm from
                                            unauthorised use or disclosure of your personal data, the
                                            purposes for which we process your personal data and
                                            whether we can achieve such purposes through other means,
                                            and the applicable legal requirements.
                                        </p><p>Thereafter, we will securely delete your personal data
                                            unless we are required by law to retain your personal data
                                            for a longer period or unless we require it to continue
                                            providing you with the services you acquire from us.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-6" aria-expanded="true" aria-controls="collapse-1">INTERNATIONAL TRANSFERS OF YOUR PERSONAL DATA
                                </button></div><div id="collapse-6" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>We may need to transfer and store your personal data
                                            outside of your jurisdiction, including to countries that
                                            may not offer the same level of data protection as your
                                            home jurisdiction.
                                        </p><p>Where necessary, we will only transfer your personal data
                                            outside the country in which you are residing on one of
                                            the following bases:
                                        </p><ul><li>you have expressly consented to the international
                                                transfer;
                                            </li><li>the country/jurisdiction where we send the personal data
                                                is providing an adequate level of protection for
                                                personal data as approved by the relevant data
                                                regulator, or the laws are substantially similar or
                                                serve the same purpose as applicable data protection
                                                law, or the transfer is required or authorised by
                                                applicable law or in connection with any legal
                                                proceedings (as applicable) in the relevant
                                                jurisdiction;
                                            </li><li>the third party to which the data is transferred has
                                                provided appropriate safeguards that ensure the security
                                                of your personal data, in line with applicable laws and,
                                                in any event, the third party to which the data is
                                                transferred will ensure that it has maintained
                                                reasonable security practices and procedures as required
                                                by law;
                                            </li><li>the transfer is necessary for us to perform a contract
                                                with you (e.g. sale or lease agreements); or
                                            </li><li>as otherwise permitted in accordance with applicable
                                                laws.
                                            </li></ul><p>Where available, you may obtain a copy of the relevant
                                            data transfer mechanisms that we have put in place under
                                            which your personal data is transferred outside the
                                            country in which you are residing by contacting us using
                                            the information set out in the &ldquo;Contact Us&rdquo;
                                            section below.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-7" aria-expanded="true" aria-controls="collapse-1">YOUR RIGHTS
                                </button></div><div id="collapse-7" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>Depending on your jurisdiction, you may have the following
                                            rights:
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to access information we hold on you</span>
 </div><p>At any point you can contact us to request the information
                                            we hold on you as well as why we have that information,
                                            who has access to the information and where we got the
                                            information.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to correct and update the information we hold
                                                on you</span>
 </div><p>If the data we hold on you is out of date, incomplete or
                                            incorrect, you can inform us and we will ensure that it is
                                            updated.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to have your information erased</span>
 </div><p>If you feel that we should no longer be using your data or
                                            that we are illegally using your data, you can request
                                            that we erase the data we hold. When we receive your
                                            request, we will confirm whether the data has been deleted
                                            or tell you the reason why it cannot be deleted.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to block your data</span>
 </div><p>You have the right to request us temporarily or
                                            permanently to stop processing all or some of your
                                            personal data. Upon receiving the request, we will contact
                                            you to tell you if we are able to comply or if we have
                                            grounds to continue. If data is no longer processed, we
                                            may continue to hold your data to comply with your other
                                            rights.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to object to processing of your data</span>
 </div><p>At any time, you have the right to object to us processing
                                            your personal data for certain types of processing, for
                                            example, where it is based exclusively on our legitimate
                                            interests.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to ask us to stop contacting you with direct
                                                marketing</span>
 </div><p>You have the right to request that we stop contacting you
                                            with direct marketing communications. For further
                                            information, see &ldquo;Marketing&rdquo; in the section on
                                            &ldquo;How We Use Your Personal Data and the Legal Bases
                                            for These Uses&rdquo;.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to data portability</span>
 </div><p>You have the right to receive or transmit your data in a
                                            machine-readable and structured format (otherwise known as
                                            &ldquo;data portability&rdquo;). You may request the
                                            receipt or transmission of your personal data to another
                                            organisation.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>The right to complain</span>
 </div><p>You can make a complaint to us by contacting us via
                                            dpo@modon.com or to the relevant data regulator in your
                                            country.
                                        </p><p>If you choose to exercise any of your rights, we will
                                            respond as soon as reasonably possible and in line with
                                            applicable data protection laws. If your request is
                                            particularly complex, we will notify you and keep you
                                            updated.
                                        </p><p>In order to process any of the requests listed above, we
                                            may need to verify your identity for your security. In
                                            such cases your response will be necessary for you to
                                            exercise this right. If you wish to exercise your rights,
                                            please contact us via the communication channels set out
                                            in the &ldquo;Contact Us&rdquo; section of this Policy.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-8" aria-expanded="true" aria-controls="collapse-1">COOKIES AND TRACKING
                                </button></div><div id="collapse-8" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>Use of cookies</span>
 </div><p>A cookie is a small text file which is placed onto your
                                            computer (or other electronic device) when you access our
                                            website. We use cookies on this website to:
                                        </p><ol type="a"><li>recognise you whenever you visit this website (this
                                                speeds up your access to the website as you do not have
                                                to log in each time);
                                            </li><li>obtain information about your preferences, online
                                                movements and use of the internet;
                                            </li><li>carry out research and statistical analysis to help
                                                improve our content, products and services and to help
                                                us better understand our customer requirements and
                                                interests;
                                            </li><li>target our marketing and advertising campaigns more
                                                effectively by providing interest-based advertisements
                                                that are personalised to your interests; and
                                            </li><li>make your online experience more efficient and
                                                enjoyable.
                                            </li></ol><p>In most cases we will need your consent in order to use
                                            cookies on this website. The exception is where the cookie
                                            is essential in order for us to provide you with a product
                                            or service you have requested.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>Consent to cookies</span>
 </div><p>If you visit our website when your browser is set to
                                            accept cookies, we will interpret this as an indication
                                            that you consent to our use of cookies and other similar
                                            technologies as described in this Policy. If you change
                                            your mind in the future about letting us use cookies, you
                                            can modify the settings of your browser to reject cookies
                                            or disable cookies completely.
                                        </p><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>Description of cookies</span>
 </div><p>The table below provides some information on the cookies
                                            which we use on our website:
                                        </p><table className="table table-bordered align-middle k-table" border="1" cellpadding="10" cellspacing="0" style={{ width: '100%', marginBottom: '20px' }}><thead><tr><th>Cookie Type</th><th>Description</th></tr></thead><tbody><tr><td>Essential/Necessary</td><td>Cookies that are required to enable website
                                                        functionality, fix bugs, and ensure security of the
                                                        website. These cookies do not identify you as an
                                                        individual.
                                                    </td></tr><tr><td>Functional</td><td>Cookies that allow us to provide you with a more
                                                        personalised online experience, as they permit our
                                                        website to &lsquo;remember&rsquo; the choices you
                                                        make (such as the region you are in etc). If such
                                                        cookies are rejected, it may reduce website
                                                        functionality.
                                                    </td></tr><tr><td>Performance/Analytical</td><td>Cookies that provide us with information regarding
                                                        the areas of the website visited and any issues
                                                        encountered such as error messages. Such cookies
                                                        track how you interact with the website and assist
                                                        us in improving website performance. Unless stated
                                                        otherwise, these cookies do not identify you.
                                                    </td></tr><tr><td>Targeting/Marketing</td><td>Cookies utilised in the delivery of advertisements
                                                        tailored to your interest areas. Such cookies are
                                                        typically placed by advertising networks with our
                                                        permission.
                                                    </td></tr></tbody></table><div className="desc-subtitle"><span style={{ textDecoration: 'underline' }}>Turning off cookies</span>
 </div><p>If you do not want to accept cookies, you can change your
                                            browser settings so that cookies are not accepted. If you
                                            do this, please be aware that you may lose some of the
                                            functionality of our website.
                                        </p><div className="desc-subtitle"><strong>Artificial Intelligence (AI)</strong>
 </div><p>To provide improved services, we may use AI to process
                                            data (including personal data). At all times during our
                                            usage of AI, all data is protected in accordance with
                                            relevant data protection laws.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-9" aria-expanded="true" aria-controls="collapse-1">CONTACT US
                                </button></div><div id="collapse-9" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>If you have any queries about this Policy, need further
                                            information or wish to lodge a complaint you can use the
                                            details below to contact us:
                                        </p><ul><li><strong>Email: </strong><a href="mailto:dpo@modon.com">dpo@modon.com</a>
 </li><li><strong>Address: </strong>Modon Holding Data Protection
                                                Officer, Floor 22, Al Maryah Tower, Abu Dhabi Global
                                                Market Square, Al Maryah Island, PO Box 3190, Abu Dhabi,
                                                UAE
                                            </li></ul></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-10" aria-expanded="true" aria-controls="collapse-1">CHANGES TO THIS POLICY
                                </button></div><div id="collapse-10" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><p>We may change this Policy from time to time. Where
                                            necessary, we will notify you of any significant changes
                                            on our website. All changes are effective from the date of
                                            publication unless otherwise noted.
                                        </p></div></div></div></div><div className="accordion-item"><div className="accordion-header"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse-11" aria-expanded="true" aria-controls="collapse-1">REGIONAL ADDENDUM
                                </button></div><div id="collapse-11" className="accordion-collapse collapse" data-bs-parent="#accordionExample"><div className="accordion-body"><div className="desc"><div className="desc-subtitle"><strong>European Union or United Kingdom</strong>
 </div><p>If you are located in the European Union (EU) or the
                                            United Kingdom (UK), your personal data is processed by
                                            the relevant Modon entity in that jurisdiction.
                                        </p><p>Where personal data is transferred outside the EU or UK,
                                            such transfers are subject to additional safeguards in
                                            accordance with the EU General Data Protection Regulation
                                            (GDPR) and the UK GDPR. In particular:
                                        </p><ul><li>For transfers from the EU, we rely on the European
                                                Commission&rsquo;s Standard Contractual Clauses (SCCs)
                                                where the destination country does not benefit from an
                                                adequacy decision.
                                            </li><li>For transfers from the UK, we use either the UK
                                                International Data Transfer Agreement (IDTA) or the UK
                                                Addendum to the EU SCCs, as approved by the UK
                                                Information Commissioner&rsquo;s Office, depending on
                                                the nature of the transfer and the parties involved.
                                            </li></ul><p>You may request further information about these
                                            safeguards, or obtain a copy of the relevant transfer
                                            mechanism, by contacting us using the details provided in
                                            the &ldquo;Contact Us&rdquo; section of this Policy.
                                        </p><p>You have the right to make a complaint to the relevant
                                            supervisory authority in your jurisdiction in the EEA or
                                            to make a complaint to the UK Information
                                            Commissioner&rsquo;s Office.
                                        </p><div className="desc-subtitle"><strong>Kingdom of Saudi Arabia</strong>
 </div><p>If you are located in Saudi Arabia, your personal data is
                                            processed by Modon Holding PSC.
                                        </p><p>You have the right to make a complaint to the competent
                                            authority, and complaints can be submitted via the
                                            National Data Governance Platform: sdaia.gov.sa.
                                        </p></div></div></div></div></div></div></div></div></div></section></div>
</div> 
            <Footer />
        </div>
    );
}
