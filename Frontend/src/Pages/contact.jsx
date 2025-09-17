import React from 'react';
import { Phone, Mail } from 'lucide-react';
import '../Styles/Contact.css';

export default function Contact() {
  return (
    <section className="contact-wrapper">
      <div className="contact-box">
        <h2 className="contact-heading">📞 Get in Touch</h2>
        <p className="contact-description">
          Need help or have questions? We're here for you 24/7.
        </p>

        <div className="contact-info">
          <div className="contact-row">
            <Phone className="contact-icon" />
            <div className="contact-text">
              <h4>Call Us</h4>
              <a href="tel:+18443134987">+1 844-313-4987</a>
            </div>
          </div>

          <div className="contact-row">
            <Mail className="contact-icon" />
            <div className="contact-text">
              <h4>Email</h4>
              <a href="mailto:CustomerSupport@SaffronGuru.com">
                CustomerSupport@SaffronGuru.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
