import React from 'react';
import { Phone, Mail } from 'lucide-react';
import '../Styles/Contact.css';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  return (
    <main className="contact-wrapper" aria-labelledby="contact-heading">
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Contact Us | Saffron Shield</title>
        <meta
          name="description"
          content="Need help? Contact Saffron Shield for 24/7 scam protection, IT support, and digital safety assistance. Call or email us anytime."
        />
        <link rel="canonical" href="https://saffronguru.com/contact" />
        {/* ✅ Schema Markup for Contact Page */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Saffron Shield",
              "url": "https://saffronguru.com",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1-844-313-4987",
                  "contactType": "Customer Support",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                },
                {
                  "@type": "ContactPoint",
                  "email": "CustomerSupport@SaffronGuru.com",
                  "contactType": "Customer Support",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Hindi"]
                }
              ]
            }
          })}
        </script>
      </Helmet>

      {/* ✅ Contact Box */}
      <section className="contact-box" role="region" aria-label="Contact Information">
        <h1 id="contact-heading" className="contact-heading">📞 Get in Touch</h1>
        <p className="contact-description">
          Need help or have questions? We're here for you 24/7.
        </p>

        <address className="contact-info">
          <article className="contact-row">
            <Phone className="contact-icon" aria-hidden="true" />
            <div className="contact-text">
              <h2>Call Us</h2>
              <a href="tel:+18443134987" aria-label="Call +1 844 313 4987">+1 844-313-4987</a>
            </div>
          </article>

          <article className="contact-row">
            <Mail className="contact-icon" aria-hidden="true" />
            <div className="contact-text">
              <h2>Email</h2>
              <a
                href="mailto:CustomerSupport@SaffronGuru.com"
                aria-label="Send email to CustomerSupport at Saffron Guru"
              >
                CustomerSupport@SaffronGuru.com
              </a>
            </div>
          </article>
        </address>
      </section>
    </main>
  );
}
