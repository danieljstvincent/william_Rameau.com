import { Link } from 'react-router-dom'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Greatness Through <span className="highlight">Persecution</span>
            </h1>
            <p className="hero-subtitle">By William Rameau</p>
            <p className="hero-description">
              Black Athletes' Moment of Will for Overcoming Racism and Hardship
            </p>
            <p className="hero-foreword">
              Foreword by <strong>GEO DERICE</strong><br />
              Afterword by <strong>JEANNIE ORTEGA LAW & PASTOR RENN LAW</strong>
            </p>
            <div className="hero-buttons">
              <a 
                href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Order Your Copy Now
              </a>
              <Link to="/about-book" className="btn btn-secondary">
                Learn More
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="book-3d">
              <img 
                src="/3d_book.png" 
                alt="Greatness Through Persecution Book Cover" 
              />
              <div className="book-shadow"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <h2 className="section-title">A Story of Triumph</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">📖</div>
              <h3>Inspiring Stories</h3>
              <p>Discover the untold moments of will that defined Black athletes in their fight against racism</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">💪</div>
              <h3>Overcoming Adversity</h3>
              <p>Learn how perseverance and determination can transform hardship into greatness</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏆</div>
              <h3>Legacy of Excellence</h3>
              <p>Celebrate the achievements that paved the way for future generations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <div className="about-preview-text">
              <h2>About the Author</h2>
              <h3>William Rameau</h3>
              <p>
                William Rameau is an author and the host and producer of the "Sports Urban Legend" 
                podcast, which has been running for 600 episodes and counting discussing all things 
                sports, entertainment, wrestling, and pop culture.
              </p>
              <p>
                When he is not sharing his love for sports, Will can be found mentoring tomorrow's 
                leaders by incorporating life lessons that bridge the gap between amazing sports 
                moments and the real world. Will currently resides in New York City and is an avid 
                fan of his beloved New York teams.
              </p>
              <Link to="/about-will" className="btn btn-primary">
                Read More About Will
              </Link>
            </div>
            <div className="about-preview-image">
              <img 
                src="/william-rameau.jpg" 
                alt="William Rameau" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="container">
          <h2>Get Your Copy Today</h2>
          <p>Join readers who are discovering the inspiring stories of triumph over adversity</p>
          <a 
            href="https://www.paypal.com/ncp/payment/VUA7MCMMHZ29G" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn btn-primary btn-large"
          >
            Purchase Now via PayPal
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home

