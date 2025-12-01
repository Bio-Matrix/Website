import { useEffect } from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!open) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.4)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClose}
    >
      <div
        style={{
          padding: "1.5rem",
          background: "white",
          borderRadius: "10px",
          minWidth: "260px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

import { useState } from "react";

export default function App() {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowModal(true);
  };

  return (
    <>
      <a href="#" onClick={handleClick}>
        Geplanter Link
      </a>

      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <h2>Funktion in Entwicklung</h2>
        <p>Dieser Bereich wird noch umgesetzt.</p>
        <button onClick={() => setShowModal(false)}>Schließen</button>
      </Modal>
    </>
  );
}
