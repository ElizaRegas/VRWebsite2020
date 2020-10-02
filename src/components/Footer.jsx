import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "../App.css";

const Footer = () => {
  return (
    <Router>
      <footer>
        <div class="landing footer">
          <div class="flex">
            <div class="copyrightText footerMargin">
              <p>© 2020 Valarie Regas</p>
            </div>
            <div class="icons">
              <ul class="flex">
                <li class="faIcons">
                  <Link href="#">
                    <i class="fab fa-facebook"></i>
                  </Link>
                </li>
                <li class="faIcons">
                  <Link href="#">
                    <i class="fab fa-google-plus-g"></i>
                  </Link>
                </li>
                <li class="faIcons">
                  <Link href="#">
                    <i class="fab fa-twitter"></i>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Router>
  );
};

export default Footer;
