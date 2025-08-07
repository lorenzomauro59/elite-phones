'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const navItems = [
  { label: 'NOTICIAS', href: '/noticias' },
  { label: 'CONTACTO', href: '/contacto' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-md bg-black/20' : 'bg-transparent'
      }`}
    >
      <nav className="w-full flex items-center justify-between px-4 py-4 relative">
        {/* Logo */}
        <Link href="/" className="flex items-center z-50">
          <Image
            src="/logo-elite.png"
            alt="Elite Phones"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Links - Desktop */}
        <ul className="hidden md:flex gap-6 text-sm md:text-base uppercase tracking-wider text-white absolute left-1/2 transform -translate-x-1/2">
          {/* Dropdown */}
          <li
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <button className="hover:opacity-80 transition-opacity duration-300 cursor-pointer">
              PRODUCTOS
            </button>
            <AnimatePresence>
              {dropdownOpen && (
                <motion.ul
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 bg-black/70 backdrop-blur-md text-white py-2 px-4 rounded-md text-left min-w-[150px] z-50 "
                >
                  <li>
                    <Link
                      href="#nuevos"
                      className="block py-2 hover:opacity-80 transition-opacity duration-300 uppercase cursor-pointer"
                    >
                      NUEVOS
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/productos-usados"
                      className="block py-2 hover:opacity-80 transition-opacity duration-300 uppercase cursor-pointer"
                    >
                      USADOS
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* Otros links */}
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="hover:opacity-80 transition-opacity duration-300 cursor-pointer"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Menu Hamburguesa - Mobile */}
        <div className="md:hidden z-50 cursor-pointer">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="cursor-pointer relative w-6 h-6 flex flex-col justify-center items-center cursor-pointer"
          >
            {menuOpen ? (
              <span className="text-white text-2xl leading-none ">&times;</span>
            ) : (
              <>
                <span className="w-full h-0.5 bg-white block mb-1"></span>
                <span className="w-full h-0.5 bg-white block"></span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-lg flex flex-col items-start px-6 pt-40 gap-6 z-40 text-white text-lg uppercase tracking-wide"
            >
              {/* Dropdown en mobile */}
              <div>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="mb-2 hover:opacity-80 cursor-pointer transition-opacity duration-300"
                >
                  PRODUCTOS
                </button>
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="ml-2 pl-2 border-l border-white flex flex-col gap-2 text-left"
                    >
                      <Link
                        href="/#nuevos"
                        className="hover:opacity-80"
                        onClick={() => {
                          setMenuOpen(false)
                          setDropdownOpen(false)
                        }}
                      >
                        NUEVOS
                      </Link>
                      <Link
                        href="/productos-usados"
                        className="hover:opacity-80"
                        onClick={() => {
                          setMenuOpen(false)
                          setDropdownOpen(false)
                        }}
                      >
                        USADOS
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Otros links */}
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:opacity-80 "
                >
                  {item.label}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
