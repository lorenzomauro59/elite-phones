// app/components/CarrouselDestacados.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

type Producto = {
  nombre: string;
  imagen: string;
  descripcion: string;
};

const productos: Producto[] = [
  {
    nombre: "iPhone 16 Pro",
    imagen: "/productos/16proo.png",
    descripcion:
      "El iPhone 16 Pro redefine el rendimiento con su nuevo chip A18, cámara avanzada y diseño elegante.",
  },
  {
    nombre: "iPhone 16",
    imagen: "/productos/16.png",
    descripcion:
      "El iPhone 16 ofrece un balance perfecto entre potencia, diseño y eficiencia con el nuevo iOS.",
  },
  {
    nombre: "iPhone 16e",
    imagen: "/productos/16e.png",
    descripcion:
      "Compacto y poderoso, el iPhone 16e es ideal para quienes buscan rendimiento sin comprometer tamaño.",
  },
  {
    nombre: "iPhone 15",
    imagen: "/productos/15.png",
    descripcion:
      "El iPhone 15 sigue siendo una opción confiable con gran rendimiento y cámara de alta calidad.",
  },
];

export default function CarrouselDestacados() {
  const [modalOpen, setModalOpen] = useState(false);
  const [productoSeleccionado, setProductoSeleccionado] = useState<Producto | null>(null);

  const abrirModal = (producto: Producto) => {
    setProductoSeleccionado(producto);
    setModalOpen(true);
  };

  const cerrarModal = () => {
    setModalOpen(false);
    setProductoSeleccionado(null);
  };

  const irAWhatsApp = (producto: string) => {
    const mensaje = `Hola! Estoy interesado en el ${producto}`;
    window.open(`https://wa.me/5493412470337text=${encodeURIComponent(mensaje)}`, "_blank");
  };

  return (
    <section className="w-full py-10 px-4 md:px-10 bg-black text-white mt-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-left">
        Celulares destacados
      </h2>

      <div className="overflow-x-auto scrollbar-hide">
        <motion.div
          className="flex space-x-6 md:space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {productos.map((producto, index) => (
            <motion.div
              key={index}
              className="min-w-[80%] sm:min-w-[50%] md:min-w-[33%] lg:min-w-[25%] bg-neutral-900 rounded-2xl shadow-lg p-4 flex-shrink-0"
              whileHover={{ scale: 1.03 }}
            >
              <div className="flex justify-center items-center h-80 mb-4">
                <Image
                  src={producto.imagen}
                  alt={producto.nombre}
                  width={300}
                  height={500}
                  className="object-contain max-h-full"
                />
              </div>
              <h3 className="text-xl font-semibold mb-3">{producto.nombre}</h3>
              <div className="flex justify-between">
                <button
                  onClick={() => abrirModal(producto)}
                  className="px-4 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-black transition"
                >
                  Más info
                </button>
                <button
                  onClick={() => irAWhatsApp(producto.nombre)}
                  className="px-4 py-2 text-sm rounded-full bg-violet-600 hover:bg-violet-700 transition"
                >
                  Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {modalOpen && productoSeleccionado && (
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex justify-center items-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={cerrarModal}
          >
            <motion.div
              className="bg-neutral-900 p-6 rounded-2xl max-w-lg w-full relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // Evita cierre al click dentro
            >
              {/* Botón de cierre */}
              <button
                className="absolute top-4 right-4 text-white text-xl"
                onClick={cerrarModal}
              >
                ✕
              </button>

              <h3 className="text-2xl font-semibold mb-4">
                {productoSeleccionado.nombre}
              </h3>
              <p className="text-gray-300">{productoSeleccionado.descripcion}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
