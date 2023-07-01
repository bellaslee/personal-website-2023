import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function Footer({ font }) {
  return (
    <footer className={font.className}>
      <ul>
        <li>Email</li>
        <li>
          <a href="https://www.linkedin.com/in/bellasylee/">
            Linkedin
          </a>
        </li>
        <li>
          <a href="https://github.com/bellaslee">
            Github
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon={faStar} size="xs" />
      <p>
        &copy; Bella Lee 2023
      </p>
    </footer>
  )
}