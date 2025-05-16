import React from 'react';

const ContactSection = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Contact Us</h2>
                <p>If you have any questions or inquiries, feel free to reach out to us!</p>
                <div className="contact-info">
                    <h3>Contact Information</h3>
                    <p>Email: info@smpmaarifnudkuhwaru.sch.id</p>
                    <p>Phone: (0231) 123-456</p>
                    <p>Address: Jl. Raya Dukuhturu No. 123, Dukuhturu, Indonesia</p>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" required></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;