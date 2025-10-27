import React from 'react';
import { motion } from 'framer-motion';

export default function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      {/* Subtle grid pattern using CSS gradients */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: '40px 40px',
          backgroundPosition: 'center',
        }}
      />

      {/* Animated soft blobs */}
      <motion.div
        aria-hidden
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl"
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden
        className="absolute -bottom-24 -right-24 h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/10 blur-3xl"
        animate={{ x: [0, -40, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}
