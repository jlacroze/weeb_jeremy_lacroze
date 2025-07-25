import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import styles from "./Header.module.scss";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Groupe gauche : logo + liens */}
        <div className={styles.leftGroup}>
          <Link to="/" className={styles.logo}>
            weeb
          </Link>
          <div className={styles.desktopLinks}>
            <Link to="/" className={styles.link}>
              About Us
            </Link>
            <Link to="/contact" className={styles.link}>
              Contact
            </Link>
          </div>
        </div>

        {/* Groupe droite : login + bouton */}
        <div className={styles.desktopActions}>
          <Link to="/login" className={styles.link}>
            Log in
          </Link>
          <button className={styles.button}>Join Now</button>
        </div>

        {/* Mobile menu button */}
        <button
          className={styles.burger}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Fullscreen Menu */}
      <div className={`${styles.mobileMenu} ${isOpen ? styles.menuOpen : ""}`}>
        <nav className={styles.mobileNav}>
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className={styles.mobileLink}
          >
            About Us
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className={styles.mobileLink}
          >
            Contact
          </Link>
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className={styles.mobileLink}
          >
            Log in
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className={styles.mobileButton}
          >
            Join Now
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
