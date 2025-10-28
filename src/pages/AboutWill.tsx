import './AboutWill.css'

const AboutWill = () => {
  return (
    <div className="about-will">
      <section className="page-hero">
        <div className="container">
          <h1>About the Author</h1>
          <p className="subtitle">William Rameau</p>
        </div>
      </section>

      <section className="author-profile">
        <div className="container">
          <div className="author-grid">
            <div className="author-image-section">
              <img 
                src="/william-rameau.jpg" 
                alt="William Rameau" 
                className="author-photo"
              />
              <div className="author-social">
                <h3>Connect with Will</h3>
                <div className="social-buttons">
                  <a 
                    href="https://www.instagram.com/williamrameau/?hl=en" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn instagram"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                  <a 
                    href="https://linkedin.com/in/will-rameau-a0902aa5" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn linkedin"
                  >
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            <div className="author-bio">
              <h2>Storyteller, Podcaster, Author</h2>
              <p className="lead">
                William Rameau is a dynamic voice in sports media, dedicated to uncovering 
                the stories behind the headlines and celebrating the human spirit in athletics.
              </p>

              <div className="bio-section">
                <h3>His Journey</h3>
                <p>
                  William Rameau is an author and the host and producer of the "Sports Urban 
                  Legend" podcast, which has been running for 600 episodes and counting, 
                  discussing all things sports, entertainment, wrestling, and pop culture. 
                  His passion for storytelling and deep knowledge of sports history has made 
                  him a trusted voice in the community.
                </p>
                <p>
                  When he is not sharing his love for sports, Will can be found mentoring 
                  tomorrow's leaders by incorporating life lessons that bridge the gap between 
                  amazing sports moments and the real world. His unique approach combines 
                  historical context with modern-day applications, making complex topics 
                  accessible and inspiring to audiences of all ages.
                </p>
              </div>

              <div className="bio-section">
                <h3>Based in New York</h3>
                <p>
                  Will currently resides in New York City and is an avid fan of his beloved 
                  New York teams. The city's diverse culture and rich sports heritage continue 
                  to inspire his work and inform his perspective on the intersection of sports, 
                  society, and personal growth.
                </p>
              </div>

              <div className="bio-section">
                <h3>Mission & Vision</h3>
                <p>
                  Through his writing and podcasting, William aims to preserve important 
                  stories that might otherwise be forgotten, while also inspiring the next 
                  generation to pursue excellence with integrity. He believes that the lessons 
                  learned through sports—perseverance, teamwork, resilience—are universal 
                  principles that can transform lives and communities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="podcast-section">
        <div className="container">
          <h2 className="section-title">Sports Urban Legend Podcast</h2>
          <div className="podcast-info">
            <div className="podcast-description">
              <h3>600+ Episodes of Sports History & Culture</h3>
              <p>
                Join Will on his award-winning podcast where he dives deep into the urban 
                legends of sports, entertainment, wrestling, and pop culture. Each episode 
                brings you closer to the untold stories and fascinating moments that have 
                shaped our favorite games and athletes.
              </p>
              <div className="podcast-features">
                <div className="feature">
                  <span className="feature-icon">🎙️</span>
                  <span>In-depth interviews</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">📚</span>
                  <span>Historical deep dives</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">🎬</span>
                  <span>Pop culture analysis</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">💪</span>
                  <span>Inspirational stories</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="values-section">
        <div className="container">
          <h2 className="section-title">Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>Authenticity</h3>
              <p>
                Telling stories with honesty and integrity, staying true to the facts while 
                honoring the human experience.
              </p>
            </div>
            <div className="value-card">
              <h3>Education</h3>
              <p>
                Using sports as a lens to teach valuable life lessons and preserve important 
                historical narratives.
              </p>
            </div>
            <div className="value-card">
              <h3>Inspiration</h3>
              <p>
                Highlighting moments of triumph that motivate others to overcome their own 
                obstacles and pursue greatness.
              </p>
            </div>
            <div className="value-card">
              <h3>Community</h3>
              <p>
                Building bridges between generations and fostering dialogue around sports, 
                culture, and social progress.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container">
          <h2>Get Your Copy of Greatness Through Persecution</h2>
          <p>Support Will's work and discover these inspiring stories</p>
          <a 
            href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Order Now
          </a>
        </div>
      </section>
    </div>
  )
}

export default AboutWill

