"use client";
import { useState, useEffect } from "react";
import styles from "./BookingModal.module.css";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [service, setService] = useState("Locação de Quadra");
  const [period, setPeriod] = useState("Noite (18h às 22h)");
  const [people, setPeople] = useState("4 pessoas (dupla)");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    const message = `Olá, equipe CTBT! Gostaria de fazer um agendamento:\n\n🎾 *Interesse:* ${service}\n⏰ *Período preferido:* ${period}\n👥 *Participantes:* ${people}\n\nQuais horários estão disponíveis?`;
    const url = `https://wa.me/5516997168587?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    onClose();
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Fechar janela"
        >
          ✕
        </button>

        <div className={styles.header}>
          <div className={styles.badge}>AGENDAMENTO RÁPIDO</div>
          <h3 id="modal-title" className={styles.title}>
            Personalize seu Horário
          </h3>
          <p className={styles.subtitle}>
            Escolha o que você procura e nossa recepção já vai te atender com as
            melhores informações disponíveis.
          </p>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>O que você deseja?</label>
          <div className={styles.optionsGrid}>
            {[
              "Locação de Quadra",
              "Aula Experimental",
              "Planos",
              "Evento ou Aniversário",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={`${styles.optionBtn} ${
                  service === item ? styles.optionActive : ""
                }`}
                onClick={() => setService(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Qual período do dia prefere?</label>
          <div className={styles.optionsGrid}>
            {[
              "Manhã (07h às 12h)",
              "Tarde (14h às 18h)",
              "Noite (18h às 22h)",
              "Fim de Semana",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={`${styles.optionBtn} ${
                  period === item ? styles.optionActive : ""
                }`}
                onClick={() => setPeriod(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.formGroup}>
          <label className={styles.label}>Quantas pessoas vão jogar?</label>
          <div className={styles.optionsGrid}>
            {[
              "Apenas eu (individual)",
              "2 a 4 pessoas (dupla)",
              "Grupo (5 a 8 pessoas)",
              "Evento grande (+10)",
            ].map((item) => (
              <button
                type="button"
                key={item}
                className={`${styles.optionBtn} ${
                  people === item ? styles.optionActive : ""
                }`}
                onClick={() => setPeople(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button
            type="button"
            className="btn-primary"
            style={{ width: "100%", padding: "0.95rem" }}
            onClick={handleConfirm}
          >
            Continuar no WhatsApp →
          </button>
          <p className={styles.disclaimer}>
            Você será direcionado diretamente ao WhatsApp oficial da recepção da
            arena.
          </p>
        </div>
      </div>
    </div>
  );
}
