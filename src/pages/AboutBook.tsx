import './AboutBook.css'

const AboutBook = () => {
  return (
    <div className="about-book">
      <section className="page-hero">
        <div className="container">
          <h1>About the Book</h1>
          <p className="subtitle">Greatness Through Persecution</p>
        </div>
      </section>

      <section className="book-details">
        <div className="container">
          <div className="book-details-grid">
            <div className="book-cover-section">
              <img 
                src="/book-cover.jpsdfg.png" 
                alt="Greatness Through Persecution Book Cover" 
                className="book-cover-large"
              />
              <a 
                href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary btn-large"
              >
                Buy Now
              </a>
            </div>

            <div className="book-info">
              <h2>A Powerful Testament to Resilience</h2>
              <p className="book-description">
                "Greatness Through Persecution" chronicles the extraordinary journeys of Black 
                athletes who defied the odds and overcame systemic racism to achieve greatness 
                in their respective sports. This compelling narrative explores the moments of 
                will, determination, and courage that defined an era and inspired generations.
              </p>

              <div className="book-highlights">
                <h3>What You'll Discover:</h3>
                <ul>
                  <li>
                    <strong>Untold Stories:</strong> Deep dives into the personal struggles and 
                    triumphs of legendary Black athletes
                  </li>
                  <li>
                    <strong>Historical Context:</strong> Understanding the social and political 
                    climate that shaped their journeys
                  </li>
                  <li>
                    <strong>Moments of Will:</strong> The defining decisions and actions that 
                    transformed adversity into achievement
                  </li>
                  <li>
                    <strong>Lasting Impact:</strong> How these pioneers changed sports and society 
                    forever
                  </li>
                  <li>
                    <strong>Life Lessons:</strong> Applicable wisdom for overcoming modern-day 
                    challenges
                  </li>
                </ul>
              </div>

              <div className="book-credits">
                <h3>Featured Voices</h3>
                <div className="credit-item">
                  <strong>Foreword by GEO DERICE</strong>
                  <p>Setting the stage for an inspiring journey through sports history</p>
                </div>
                <div className="credit-item">
                  <strong>Afterword by JEANNIE ORTEGA LAW & PASTOR RENN LAW</strong>
                  <p>Reflections on legacy and the continuing fight for equality</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="book-themes">
        <div className="container">
          <h2 className="section-title">Core Themes</h2>
          <div className="themes-grid">
            <div className="theme-card">
              <h3>Perseverance</h3>
              <p>
                Explore how unwavering determination in the face of overwhelming obstacles 
                became the cornerstone of athletic and personal success.
              </p>
            </div>
            <div className="theme-card">
              <h3>Breaking Barriers</h3>
              <p>
                Witness the courage it took to be first, to challenge the status quo, and 
                to open doors for those who would follow.
              </p>
            </div>
            <div className="theme-card">
              <h3>Excellence Despite Adversity</h3>
              <p>
                Discover how these athletes achieved greatness not in spite of their struggles, 
                but by transforming hardship into fuel for success.
              </p>
            </div>
            <div className="theme-card">
              <h3>Legacy & Inspiration</h3>
              <p>
                Understand how these stories continue to inspire and empower new generations 
                to pursue their dreams relentlessly.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <h2 className="section-title">What Readers Are Saying</h2>
          <div className="testimonials-grid">
            <div className="testimonial">
              <p className="quote">
                "A must-read for anyone interested in sports history and the ongoing fight 
                for equality. William Rameau masterfully weaves together powerful narratives 
                that inspire and educate."
              </p>
              <p className="author">- Sports Enthusiast</p>
            </div>
            <div className="testimonial">
              <p className="quote">
                "This book opened my eyes to stories I never knew. It's not just about sports—
                it's about humanity, perseverance, and the triumph of the human spirit."
              </p>
              <p className="author">- History Teacher</p>
            </div>
            <div className="testimonial">
              <p className="quote">
                "Greatness Through Persecution is inspiring, educational, and deeply moving. 
                A powerful tribute to those who paved the way."
              </p>
              <p className="author">- Book Club Reader</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Ready to Be Inspired?</h2>
          <p>Order your copy today and discover these remarkable stories</p>
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

export default AboutBook

