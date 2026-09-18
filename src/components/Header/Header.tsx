"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`container ${styles.container}`}>
        <a href="#inicio" className={styles.logo}>
          <div className={styles.logoText}>
            <img
              src="/images/logo.png"
              alt="Logo CTBT"
              className={styles.logoImage}
            />
            <span className={styles.logoTitle}>CTBT</span>
          </div>
        </a>

        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}>
          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#arena" onClick={() => setIsMenuOpen(false)}>
            A Arena
          </a>
          <a href="#professores" onClick={() => setIsMenuOpen(false)}>
            Professores
          </a>
          <a href="#bar" onClick={() => setIsMenuOpen(false)}>
            Bar & Gastronomia
          </a>
          <a href="#depoimentos" onClick={() => setIsMenuOpen(false)}>
            Depoimentos
          </a>
          <a href="#localizacao" onClick={() => setIsMenuOpen(false)}>
            Localização
          </a>
        </nav>

        <div className={styles.actions}>
          <a
            href="https://wa.me/5516997168587"
            target="_blank"
            rel="noreferrer"
            className="btn-primary"
          >
            Agendar
          </a>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={isMenuOpen ? styles.barOpen1 : ""}></span>
            <span className={isMenuOpen ? styles.barOpen2 : ""}></span>
            <span className={isMenuOpen ? styles.barOpen3 : ""}></span>
          </button>
        </div>
      </div>
    </header>
  );
}
