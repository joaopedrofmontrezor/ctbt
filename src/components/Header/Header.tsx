"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Header.module.css";
import BookingModal from "../BookingModal/BookingModal";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${
        isMenuOpen ? styles.headerMenuOpen : ""
      }`}
    >
      <div className={`container ${styles.container}`}>
        <a
          href="#inicio"
          className={styles.logo}
          onClick={() => setIsMenuOpen(false)}
          aria-label="CTBT Início"
        >
          <div className={styles.logoText}>
            <Image
              src="/images/logo.png"
              alt="Logo CTBT"
              width={46}
              height={46}
              className={styles.logoImage}
              priority
            />
            <span className={styles.logoTitle}>CTBT</span>
          </div>
        </a>

        <div
          className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ""}`}
          onClick={() => setIsMenuOpen(false)}
          aria-hidden="true"
        />

        <nav
          className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ""}`}
          aria-label="Menu principal"
        >
          <div className={styles.navHeader}>
            <span className={styles.navMenuTitle}>Menu</span>
            <button
              className={styles.closeMenuBtn}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Fechar menu"
            >
              ✕
            </button>
          </div>

          <a href="#inicio" onClick={() => setIsMenuOpen(false)}>
            Início
          </a>
          <a href="#arena" onClick={() => setIsMenuOpen(false)}>
            A Arena
          </a>
          <a href="#planos" onClick={() => setIsMenuOpen(false)}>
            Planos & Aulas
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

          <div className={styles.mobileNavCta}>
            <button
              type="button"
              className="btn-primary"
              style={{ width: "100%" }}
              onClick={() => {
                setIsMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
            >
              Agendar Horário
            </button>
          </div>
        </nav>

        <div className={styles.actions}>
          <button
            type="button"
            onClick={() => setIsBookingModalOpen(true)}
            className={`btn-primary ${styles.headerCta}`}
          >
            Agendar
          </button>
          <button
            className={styles.hamburger}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={isMenuOpen}
          >
            <span className={isMenuOpen ? styles.barOpen1 : ""}></span>
            <span className={isMenuOpen ? styles.barOpen2 : ""}></span>
            <span className={isMenuOpen ? styles.barOpen3 : ""}></span>
          </button>
        </div>
      </div>

      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />
    </header>
  );
}
