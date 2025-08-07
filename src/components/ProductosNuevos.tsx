// app/components/CarrouselDestacados.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const productos = [
  {
    nombre: 'iPhone 16 Pro',
    imagen: '/productos/iphone16pro.jpg',
    descripcion:
      'El iPhone 16 Pro redefine el rendimiento con su nuevo chip A18, cámara avanzada y diseño elegante.',
  },
  {
    nombre: 'iPhone 16',
    imagen: '/productos/iphone16.jpg',
    descripcion:
      'El iPhone 16 ofrece un balance perfecto entre potencia, diseño y eficiencia con el nuevo iOS.',
  },
  {
    nombre: 'iPhone 16e',
    imagen: '/productos/iphone16e.jpg',
    descripcion:
      'Compacto y poderoso, el iPhone 16e es ideal para quienes buscan rendimiento sin comprometer tamaño.',
  },
  {
    nombre: 'iPhone 15',
    imagen: '/productos/iphone15.jpg',
    descripcion:
      'El iPhone 15 sigue siendo una opción premium con excelente cámara, batería y diseño.',
  },
]
export default function CarrouselDestacados() {
  return (
    <section className="w-full py-10 px-4 md:px-10 bg-black text-white">
      <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-center">
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
              <Image
                src={producto.imagen}
                alt={producto.nombre}
                width={400}
                height={400}
                className="w-full h-60 object-cover rounded-xl mb-4"
              />
              <h3 className="text-xl font-semibold mb-3">{producto.nombre}</h3>
              <div className="flex justify-between">
                <button className="px-4 py-2 text-sm rounded-full border border-white hover:bg-white hover:text-black transition">
                  Más info
                </button>
                <button className="px-4 py-2 text-sm rounded-full bg-violet-600 hover:bg-violet-700 transition">
                  Comprar
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
