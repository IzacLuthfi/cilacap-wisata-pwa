import React, { useState, useEffect } from "react";
import BackgroundPattern from "../components/splash/BackgroundPattern";
import FloatingElements from "../components/splash/FloatingElements";
import LogoContainer from "../components/splash/LogoContainer";
import TitleSection from "../components/splash/TitleSection";
import LoadingAnimation from "../components/splash/LoadingAnimation";
import Footer from "../components/splash/Footer";

export default function SplashScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Fade-in halus
    setTimeout(() => setFadeIn(true), 150);

    // Progress bar berjalan otomatis
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);

          // Tunggu sedikit, lalu fade out
          setTimeout(() => {
            setFadeOut(true);

            setTimeout(() => {
              setIsVisible(false);

              // Panggil halaman utama
              if (typeof onComplete === "function") {
                setTimeout(() => onComplete(), 200);
              }
            }, 600);
          }, 800);

          return 100;
        }

        return prev + 7;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center 
      bg-gradient-to-br from-blue-100 via-white to-blue-200 px-4 sm:px-6 
      transition-all duration-700 ease-out 
      ${!fadeIn ? "opacity-0 scale-95" : "opacity-100 scale-100"} 
      ${fadeOut ? "opacity-0 scale-105" : ""}`}
    >
      {/* Background Waves / Pattern */}
      <BackgroundPattern fadeOut={fadeOut} />

      {/* Floating Icons: 🌊 🏝️ 🐚 */}
      <FloatingElements fadeOut={fadeOut} />

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center 
        max-w-xs sm:max-w-lg w-full transition-all duration-700
        ${
          !fadeIn
            ? "opacity-0 translate-y-8"
            : "opacity-100 translate-y-0"
        } ${
          fadeOut ? "opacity-0 -translate-y-6" : ""
        }`}
      >
        {/* LOGO – Tema Cilacap */}
        <LogoContainer />

        {/* TITLE – Wisata Cilacap */}
        <TitleSection fadeIn={fadeIn} />

        {/* LOADING BAR */}
        <LoadingAnimation fadeIn={fadeIn} progress={progress} />
      </div>

      <Footer fadeOut={fadeOut} fadeIn={fadeIn} />
    </div>
  );
}
