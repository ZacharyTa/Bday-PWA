"use client";
import React, { useState, useEffect } from 'react';
import Card from "@/components/Card";
import Confetti from 'react-dom-confetti';

export default function Home() {
  const [confetti, setConfetti] = useState(false);

  useEffect(() => {
    setConfetti(true);
    const timer = setTimeout(() => setConfetti(false), 2000); // Confetti will disappear after 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const config = {
    angle: 90,
    spread: 360,
    startVelocity: 20,
    elementCount: 70,
    dragFriction: 0.12,
    duration: 3000,
    stagger: 3,
    width: "10px",
    height: "10px",
    perspective: "500px",
    colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Confetti active={ confetti } config={ config } />
      <div 
        onMouseEnter={() => setConfetti(true)} 
        onMouseLeave={() => setConfetti(false)}
        onTouchStart={() => setConfetti(true)} 
        onTouchEnd={() => setConfetti(false)}
      >
        <Card />
      </div>
    </main>
  );
}