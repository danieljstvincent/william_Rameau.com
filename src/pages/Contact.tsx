import { useState } from 'react'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Create mailto link
    const mailtoLink = `mailto:info@greatnessthroughpersecution.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`
    window.location.href = mailtoLink
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="contact">
      <section className="page-hero">
        <div className="container">
          <h1>Contact Will</h1>
          <p className="subtitle">Get in Touch</p>
        </div>
      </section>

      <section className="contact-content">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <h2>Let's Connect</h2>
              <p>
                Whether you have questions about the book, want to book Will for an event, 
                or just want to share your thoughts, I'd love to hear from you!
              </p>

              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">📧</div>
                  <h3>Email</h3>
                  <p>info@greatnessthroughpersecution.com</p>
                </div>

                <div className="contact-method">
                  <div className="method-icon">📱</div>
                  <h3>Social Media</h3>
                  <div className="social-links-vertical">
                    <a 
                      href="https://www.instagram.com/williamrameau/?hl=en" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-item"
                    >
                      Instagram: @williamrameau
                    </a>
                    <a 
                      href="https://linkedin.com/in/will-rameau-a0902aa5" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-link-item"
                    >
                      LinkedIn: Will Rameau
                    </a>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="method-icon">🎙️</div>
                  <h3>Podcast</h3>
                  <p>Sports Urban Legend - 600+ episodes discussing sports, entertainment, and culture</p>
                </div>
              </div>

              <div className="response-time">
                <h3>Response Time</h3>
                <p>
                  Will personally reads and responds to messages. You can expect a reply 
                  within 2-3 business days.
                </p>
              </div>
            </div>

            <div className="contact-form-section">
              <h2>Send a Message</h2>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <select 
                    id="subject" 
                    name="subject" 
                    required
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject</option>
                    <option value="Book Inquiry">Book Inquiry</option>
                    <option value="Speaking Engagement">Speaking Engagement</option>
                    <option value="Media Request">Media Request</option>
                    <option value="Book Tour">Book Tour Event</option>
                    <option value="General Question">General Question</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={6} 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary btn-large">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="speaking-section">
        <div className="container">
          <h2>Speaking Engagements</h2>
          <p>
            William is available for speaking engagements, workshops, and panel discussions 
            on topics including:
          </p>
          <div className="topics-grid">
            <div className="topic">Sports History & Social Justice</div>
            <div className="topic">Overcoming Adversity</div>
            <div className="topic">Black Athletes & Cultural Impact</div>
            <div className="topic">Writing & Storytelling</div>
            <div className="topic">Podcasting & Media</div>
            <div className="topic">Mentorship & Leadership</div>
          </div>
          <p className="speaking-cta">
            To inquire about booking Will for your next event, please use the contact form above 
            with "Speaking Engagement" as the subject.
          </p>
        </div>
      </section>

      <section className="purchase-section">
        <div className="container">
          <h2>Get Your Copy</h2>
          <p>Order "Greatness Through Persecution" today</p>
          <a 
            href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Purchase via PayPal
          </a>
        </div>
      </section>
    </div>
  )
}

export default Contact

