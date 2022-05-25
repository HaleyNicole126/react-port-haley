import React from "react";

const Footer = () => {
  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container">
        &copy;{new Date().getFullYear()} by Haley Schwenk
      </div>
      <div className="container">
        <ul className="flex-row space-between">
          <li>
            <a href="mailto: haleynicole126@gmail.com">Email</a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/haley-schwenk"
              target="_blank"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://github.com/HaleyNicole126" target="_blank">
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/hnicole126/" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
