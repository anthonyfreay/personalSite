import React from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '../../Util/PageHeader/PageHeader';
import Navbar from '../../Util/Navbar/Navbar';
import Footer from '../../Util/Footer/Footer';
import ContactForm from '../../Util/ContactForm/ContactForm';
import ContactStyle from './ContactStyle.module.css';

const Contact = () => {
    return (
        <div className={ContactStyle.container}>
            <Helmet>
                <title>Contact | Anthony Freay</title>
                <meta name="description" content="Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." />
                <link rel="canonical" href="https://anthonyfreay.com/contact" />

                <meta property="og:title" content="Contact | Anthony Freay" />
                <meta property="og:description" content="Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." />
                <meta property="og:image" content="https://anthonyfreay.com/me/A7406500.jpg" />
                <meta property="og:url" content="https://anthonyfreay.com/contact" />

                <meta name="twitter:title" content="Contact | Anthony Freay" />
                <meta name="twitter:description" content="Contact Anthony Freay for photography, software engineering, or design inquiries. Based in NYC and available for freelance projects." />
                <meta name="twitter:image" content="https://anthonyfreay.com/me/A7406500.jpg" />
            </Helmet>
            <PageHeader title="Contact | Anthony Freay" />
            <Navbar activePage={'contact'} />
            <div className={ContactStyle.mainContent}>
                <div className={ContactStyle.bioContainer}>
                    <div className={ContactStyle.leftColumn}>
                        <div className={ContactStyle.bioImage}>
                            <img src="/me/A7406500.jpg" alt="Anthony Freay" className={ContactStyle.profileImage} />
                        </div>
                    </div>
                    <div className={ContactStyle.rightColumn}>
                        <div className={ContactStyle.bioDescription}>
                            <p className={ContactStyle.intro}>
                                <b>Anthony Freay</b> (he/they) is a <b>New York-based</b> multi-faceted creative, specializing in: <br /><b>software engineering, photography, and design.</b>
                            </p>

                            <p className={ContactStyle.ethos}>Anthony's work focuses on collaboration and attention to detail to create authentic and clean imagery.</p>

                            <p className={ContactStyle.location}>
                                Anthony is currently booking. For professional inquiries, please use the form or reach out directly via email.
                            </p>
                        </div>
                        <div className={ContactStyle.formContainer}>
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
            <Footer activePage={"contact"} />
        </div>
    );
};

export default Contact;

