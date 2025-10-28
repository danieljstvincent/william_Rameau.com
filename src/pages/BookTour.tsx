import './BookTour.css'

const BookTour = () => {
  const events = [
    {
      date: 'TBA',
      title: 'Book Launch & Signing',
      location: 'New York City, NY',
      venue: 'To Be Announced',
      description: 'Join William for the official book launch celebration with Q&A and book signing.',
      status: 'upcoming'
    },
    {
      date: 'TBA',
      title: 'Author Talk & Discussion',
      location: 'Brooklyn, NY',
      venue: 'Local Bookstore',
      description: 'An intimate conversation about the book\'s themes and the stories behind the stories.',
      status: 'upcoming'
    },
    {
      date: 'TBA',
      title: 'Virtual Book Club',
      location: 'Online Event',
      venue: 'Zoom',
      description: 'Connect with readers worldwide for a virtual discussion and live Q&A session.',
      status: 'upcoming'
    }
  ]

  return (
    <div className="book-tour">
      <section className="page-hero">
        <div className="container">
          <h1>Book Tour</h1>
          <p className="subtitle">Meet Will & Get Your Book Signed</p>
        </div>
      </section>

      <section className="tour-intro">
        <div className="container">
          <div className="intro-content">
            <h2>Join Will on the Road</h2>
            <p>
              William Rameau is excited to meet readers, share stories, and discuss 
              "Greatness Through Persecution" at various venues. Whether in person or 
              virtually, these events offer a unique opportunity to dive deeper into 
              the book's themes and connect with fellow readers.
            </p>
            <p>
              More events will be announced soon! Check back regularly or follow Will on 
              social media for the latest updates on tour dates and locations.
            </p>
          </div>
        </div>
      </section>

      <section className="events-section">
        <div className="container">
          <h2 className="section-title">Upcoming Events</h2>
          <div className="events-list">
            {events.map((event, index) => (
              <div key={index} className="event-card">
                <div className="event-date">
                  <span className="date-text">{event.date}</span>
                  <span className={`status ${event.status}`}>
                    {event.status === 'upcoming' ? 'Coming Soon' : 'Confirmed'}
                  </span>
                </div>
                <div className="event-details">
                  <h3>{event.title}</h3>
                  <div className="event-location">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    <span>{event.location}</span>
                  </div>
                  <div className="event-venue">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                      <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82z"/>
                    </svg>
                    <span>{event.venue}</span>
                  </div>
                  <p className="event-description">{event.description}</p>
                  <button className="btn btn-secondary" disabled>
                    Details Coming Soon
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="livestream-section">
        <div className="container">
          <div className="livestream-card">
            <h2>Can't Make It in Person?</h2>
            <h3>Join Our Virtual Q&A Sessions</h3>
            <p>
              William hosts regular livestreams where he discusses the book, answers 
              questions, and shares behind-the-scenes stories about the writing process. 
              Meet Will and listen to him talk about his new book through virtual events!
            </p>
            <div className="livestream-info">
              <div className="info-item">
                <strong>Platform:</strong> Zoom & Social Media
              </div>
              <div className="info-item">
                <strong>Frequency:</strong> Monthly
              </div>
              <div className="info-item">
                <strong>Format:</strong> Q&A, Storytelling, and Book Signing
              </div>
            </div>
            <p className="cta-text">
              Follow Will on social media to get notified about upcoming virtual events!
            </p>
          </div>
        </div>
      </section>

      <section className="booking-section">
        <div className="container">
          <div className="booking-content">
            <h2>Book Will for Your Event</h2>
            <p>
              Interested in having William speak at your bookstore, library, school, 
              or organization? He's available for:
            </p>
            <ul className="booking-list">
              <li>Book signings and readings</li>
              <li>Author talks and Q&A sessions</li>
              <li>Workshops on sports history and overcoming adversity</li>
              <li>Podcast interviews and media appearances</li>
              <li>Virtual presentations for book clubs and organizations</li>
            </ul>
            <a href="/contact" className="btn btn-primary">
              Contact Will
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="container">
          <h2>Stay Updated</h2>
          <p>
            Be the first to know about new tour dates, virtual events, and exclusive content.
          </p>
          <p className="social-prompt">
            Follow Will on <a href="https://www.instagram.com/williamrameau/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a> and 
            <a href="https://linkedin.com/in/will-rameau-a0902aa5" target="_blank" rel="noopener noreferrer"> LinkedIn</a> for the latest updates!
          </p>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Your Copy Before the Event</h2>
          <p>Order now and bring your book to get it signed!</p>
          <a 
            href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Purchase Book
          </a>
        </div>
      </section>
    </div>
  )
}

export default BookTour

