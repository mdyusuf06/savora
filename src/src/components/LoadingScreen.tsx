
import React, { useEffect, useState } from "react";
import logoIcon from "@/assets/logo-icon.png";

export const LoadingScreen = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-savora-navy animate-loading-fade-out" style={{ animationDelay: "2s" }}>
      <div className="relative flex flex-col items-center">
        <img 
          src={logoIcon} 
          alt="Savora Icon" 
          className="w-24 h-24 mb-6 object-contain animate-logo-reveal"
        />
        <div className="h-[1px] w-0 bg-savora-navy/20 animate-[width-expand_0.8s_ease-out_0.5s_forwards]" />
        <p className="mt-4 text-white text-sm tracking-[0.3em] font-medium uppercase opacity-0 animate-[fade-in_0.8s_ease-out_0.8s_forwards]">
          Gelato • Coffee • Happiness
        </p>
      </div>
    </div>
  );
};
