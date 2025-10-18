import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

interface HeroSectionProps {
  onViewProjects: () => void;
  onContact: () => void;
}

export default function HeroSection({ onViewProjects, onContact }: HeroSectionProps) {
  return (
  <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
    {/* Éléments d’arrière-plan animés */}
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -top-40 -right-40 w-80 h-80 bg-sky-200/30 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl"
      />
    </div>

    <div className="max-w-6xl mx-auto relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Contenu gauche */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sky-600 font-medium mb-4 tracking-wider uppercase text-sm"
            >
              Bienvenue sur mon portfolio
            </motion.p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
                Bonjour, je suis Chams
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mt-4 text-gray-700">
              Étudiante en ingénierie informatique
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-xl text-gray-600 leading-relaxed"
          >
           Passionnée par la mise en place de <strong className="text-gray-800">solutions DevSecOps intelligentes</strong> intégrant l’automatisation, la sécurité et l’intelligence artificielle.  
Mon objectif est de rendre les processus de développement, de déploiement et de sécurisation <strong className="text-gray-800">plus simples, plus précis et plus fiables</strong>.

          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={onViewProjects}
              className="bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white px-8 py-6 text-lg group"
            >
              Voir mes projets
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onContact}
              className="border-2 border-gray-300 hover:border-sky-600 hover:text-sky-600 px-8 py-6 text-lg"
            >
              Me contacter
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 pt-4"
          >
            <a
              href="https://github.com/AguirChams"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <Github className="w-6 h-6 text-gray-700" />
            </a>
            <a
              href="https://www.linkedin.com/in/chams-aguir-11b6b3212/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:scale-110"
            >
              <Linkedin className="w-6 h-6 text-sky-600" />
            </a>
            
          </motion.div>
        </div>

        {/* Contenu droit - Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative"
        >
          <div className="relative w-full aspect-square max-w-lg mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-emerald-400 rounded-full blur-2xl opacity-20"></div>
            <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-full p-2 shadow-2xl">
              <img
                src="/chams.jpeg"
                alt="Photo de profil professionnelle"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            {/* Éléments flottants */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -right-10 bg-white rounded-2xl shadow-xl p-4"
            >
              <p className="text-sm font-semibold text-gray-700">Étudiante en ingénierie informatique</p>
              <p className="text-xs text-gray-500">DevSecOps</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute bottom-10 -left-10 bg-white rounded-2xl shadow-xl p-4"
            >
              <p className="text-sm font-semibold text-gray-700">Ingenieure en DevSecOps</p>
              <p className="text-xs text-gray-500">Ansible,IA,Jenkins,AWS,CI/CD</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </div>
);

}