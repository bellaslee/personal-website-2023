import React from "react";

export default function Footer({ font }) {
  return (
    <footer className={font.className}>
      <ul>
        <li>Email</li>
        <li>
          <a href="https://www.linkedin.com/in/bellasylee/" className="fancy">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/bellaslee" className="fancy">
            Github
          </a>
        </li>
      </ul>
      <div>♡</div>
      <p>
        &copy; Bella Lee 2023
      </p>
    </footer>
  )
}