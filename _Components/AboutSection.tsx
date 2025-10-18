import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Code2, Users, Lightbulb } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function AboutSection() {
  const highlights = [
  {
    icon: GraduationCap,
    title: "Éducation",
    description: "Cycle ingénieur en informatique à Saint-Quentin-en-Yvelines",
    color: "from-sky-500 to-sky-600"
  },
  {
    icon: Code2,
    title: "Résolution de problèmes",
    description: "Esprit analytique et créatif",
    color: "from-emerald-500 to-emerald-600"
  },
  {
    icon: Users,
    title: "Travail d'équipe",
    description: "Collaborative et communicative",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Lightbulb,
    title: "Curiosité",
    description: "Toujours en quête d'apprentissage et de découverte",
    color: "from-amber-500 to-amber-600"
  }
];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Bio */}
          <motion.div
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="space-y-6"
>
<div className="space-y-4 text-gray-600 leading-relaxed">
  <p>
    Actuellement, je suis étudiante en <strong className="text-gray-800">ingénierie informatique</strong> à Saint-Quentin-en-Yvelines, où j’ai acquis une solide formation en développement, en automatisation et en gestion de projets techniques.
  </p>
  <p>
    Je m’intéresse particulièrement au domaine du <strong className="text-gray-800">DevSecOps</strong>, qui allie développement, sécurité et opérations. Mon objectif est de concevoir des pipelines sécurisés et intelligents permettant d’<strong className="text-gray-800">automatiser le déploiement, renforcer la sécurité et optimiser la supervision des systèmes</strong>.
  </p>
  <p>
    J’aime concevoir des outils capables de <strong className="text-gray-800">détecter les vulnérabilités, analyser les logs, surveiller les serveurs</strong> et d’aider les ingénieurs à anticiper les risques grâce à l’intelligence artificielle et à la data.
  </p>
  <p>
    Mon ambition est de développer des solutions <strong className="text-gray-800">fiables, performantes et sécurisées</strong>, favorisant la confiance et la productivité au sein des environnements DevOps.
  </p>
  <p>
    En dehors du code, j’aime explorer de nouvelles technologies, contribuer à des projets open source et suivre les dernières tendances en matière de <strong className="text-gray-800">cybersécurité et d’automatisation</strong>.
  </p>
</div>

</motion.div>

          {/* Right - Skills Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm group hover:-translate-y-1">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}