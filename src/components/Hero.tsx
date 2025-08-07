'use client';

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/video-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Capa oscura encima del video para mejorar el contraste */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Contenido del Hero */}
      <div className="relative z-20 flex flex-col items-start justify-center h-full px-6 md:px-20 pt-24 text-white">
        <h1 className="text-4xl md:text-7xl font-bold">Elite Phones</h1>
        <h2 className="text-xl md:text-3xl font-light mt-4">
          Celulares y productos de elite.
        </h2>
      </div>
    </section>
  );
}
