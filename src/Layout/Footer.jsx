import { Link } from "react-router-dom";
import styles from "./Footer.module.scss";
function Footer() {
  return (
    <footer className={styles.footer}>
      <Link to="/" className={styles.logo}>
        weeb
      </Link>
      <div className={styles.footerTop}>
        <ul>
          <li>
            <span>PRODUCT</span>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Overview</a>
          </li>
          <li>
            <a href="#">Browse</a>
          </li>
          <li>
            <a href="#">Accessibility</a>
          </li>
          <li>
            <a href="#">Five</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>SOLUTIONS</span>
          </li>
          <li>
            <a href="#">Brainstorming</a>
          </li>
          <li>
            <a href="#">Ideation</a>
          </li>
          <li>
            <a href="#">Wireframing</a>
          </li>
          <li>
            <a href="#">Research</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>RESOURCES</span>
          </li>
          <li>
            <a href="#">Help Center</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Tutorial</a>
          </li>
        </ul>
        <ul>
          <li>
            <span>COMPANY</span>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Press</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a href="#">Careers</a>
          </li>
        </ul>
      </div>
      <div className={styles.footerBottom}>
        <p className={styles.footerText}>
          @ 2025 Weeb, Inc. All rights reserved.
        </p>
        <ul>
          <li>
            <a href="#">
              <img src="assets/youtube.png" alt="Youtube" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/facebook.png" alt="Facebook" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/twitter.png" alt="Twitter" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/instagram.png" alt="Instagram" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="assets/linkedin.png" alt="LinkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
