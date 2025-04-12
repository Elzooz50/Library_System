import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <div className="page5-container ">
      <div className="top-section">
        <div className="text-content">
          <h1>Special For</h1>
          <h2>Our Valid Users in our Community</h2>
          <p>
            Lorem ipsum is a dummy or placeholder text. Commonly used in graphic
            design, publishing, and web development to fill empty spaces in a
            layout that does not yet have content. Lorem ipsum is a dummy or
            placeholder text. Commonly used in graphic design, publishing, and
            web development to fill empty spaces in a layout that does not yet
            have content.
          </p>
          <button className="explore-button">Explore More →</button>
        </div>
        <div className="image-content">
          <img src="/src/assets/Rectangle 2.png" alt="Library" />
        </div>
      </div>
      <div className="bottom-section container">
        <div className="service-item">
          <img src="../assets/library servides.png" alt="Library Services" className="service-icon" />
          <p>Library Services</p>
        </div>
        <div className="service-item">
          <img src="../assets/library servides.png" alt="Learn & Explore" className="service-icon" />
          <p>Learn & Explore</p>
        </div>
        <div className="service-item">
          <img src="../assets/search.png" alt="Search & Browse" className="service-icon" />
          <p>Search & Browse</p>
        </div>
        <div className="service-item">
          <img src="../assets/Become Author.png" alt="Become Author" className="service-icon" />
          <p>Become Author</p>
        </div>
      </div>
    </div>
  )
}
