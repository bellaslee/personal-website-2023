import React from "react";

export default function Footer({ font }) {
  return (
    <footer className={font.className}>
      <ul>
        <li>
          <a href="https://www.goodreads.com/bellalee_" className="fancy">
            Goodreads
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/bellasylee/" className="fancy">
            LinkedIn
          </a>
        </li>
        <li>
          <a href="https://github.com/bellaslee" className="fancy">
            Github
          </a>
        </li>
      </ul>
      <div>♡</div>
      <p>Constructive feedback is welcome and appreciated. You can reach me at bella (at) bellalee (dot) com.</p>
      <p>
        &copy; Bella Lee 2023
      </p>
    </footer>
  )
}