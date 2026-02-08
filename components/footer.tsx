"use client"

import { motion } from "framer-motion"
import { Heart } from "lucide-react"
import { AnimateIn } from "@/components/animate-in"

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto max-w-6xl px-6">
        <AnimateIn direction="up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="font-display text-xl font-bold uppercase tracking-wider text-foreground">
                TRIBE
              </span>
              <span className="text-primary font-display text-xs uppercase tracking-widest">
                Club
              </span>
            </div>
            <div className="flex items-center gap-4">
              <p className="text-xs text-muted-foreground">
                Running club de Santa Bárbara.
              </p>
              <a
                href="https://www.instagram.com/tribeclub__running/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram de TRIBE Club"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 flex justify-center">
            <div className="flex items-center gap-x-2 text-xs">
              <span className="text-muted-foreground">Made with</span>
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              >
                <Heart className="h-4 w-4 fill-red-500 text-red-500" />
              </motion.div>
              <span className="text-muted-foreground">by</span>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://lesteban.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary hover:underline hover:underline-offset-4 hover:transition-all hover:duration-300"
                >
                  LEstebanR
                </a>
              </motion.div>
            </div>
          </div>
        </AnimateIn>
      </div>
    </footer>
  )
}
