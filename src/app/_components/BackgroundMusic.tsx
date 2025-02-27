"use client";

import { useEffect, useRef, useState } from "react";

const BackgroundMusic: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [showPopup, setShowPopup] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  const startMusic = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.error("Erro ao reproduzir áudio:", err));
      setIsPlaying(true);
      setShowPopup(false); // Esconde o pop-up depois que tocar
    }
  };

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.error("Erro ao reproduzir áudio:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <>
      {/* Pop-up para confirmar a reprodução de áudio */}
      {showPopup && (
        <div style={{
          position: "fixed", top: 0, left: 0, width: "100%", height: "100%",
          background: "rgba(0, 0, 0, 0.8)", display: "flex",
          justifyContent: "center", alignItems: "center", zIndex: 1000
        }}>
          <div style={{
            background: "#fff", padding: "20px", borderRadius: "10px",
            textAlign: "center"
          }}>
            <p>Deseja ativar a música de fundo?</p>
            <button onClick={startMusic} style={{
              padding: "10px 20px", fontSize: "16px", borderRadius: "5px",
              border: "none", cursor: "pointer", backgroundColor: "#4CAF50",
              color: "#fff", marginRight: "10px"
            }}>
              Sim, Já é Carnaval 🎵
            </button>
            <button onClick={() => setShowPopup(false)} style={{
              padding: "10px 20px", fontSize: "16px", borderRadius: "5px",
              border: "none", cursor: "pointer", backgroundColor: "#ff4d4d",
              color: "#fff"
            }}>
              Não 🚫
            </button>
          </div>
        </div>
      )}

      {/* Player de Música */}
      <div style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 1000 }}>
        <audio ref={audioRef} loop>
          <source src="/musica.mp3" type="audio/mp3" />
          Seu navegador não suporta o elemento de áudio.
        </audio>
        <button
          onClick={togglePlay}
          style={{
            padding: "10px 15px",
            fontSize: "16px",
            borderRadius: "8px",
            border: "none",
            cursor: "pointer",
            backgroundColor: isPlaying ? "#ff4d4d" : "#4CAF50",
            color: "#fff",
          }}
        >
          {isPlaying ? "Pausar 🎵" : "Tocar ▶️"}
        </button>
      </div>
    </>
  );
};

export default BackgroundMusic;
