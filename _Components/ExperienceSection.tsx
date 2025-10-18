import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Stagiaire en DevOps et Développement Web",
      company: "Mobelite",
      location: "Monastir, Tunisie",
      period: "Février 2023 - Mai 2023",
      description:
        "Développement d'une interface web en MERN Stack et mise en place d'une infrastructure d’automatisation de gestion des serveurs avec Ansible. Automatisation des tâches via des scripts Bash déclenchant des playbooks Ansible pour le contrôle à distance et le déploiement avec Docker. Ce projet a permis d’optimiser le temps de travail de l’équipe et d’améliorer la productivité globale.",
      technologies: ["MERN Stack", "Ansible", "Docker", "Bash", "Prometheus", "Grafana", "RabbitMQ", "node_exporter"]
    },
    {
      title: "Stagiaire en Développement Web",
      company: "Mobelite",
      location: "Monastir, Tunisie",
      period: "Juin 2022 - Juillet 2022",
      description:
        "Développement d’une application de monitoring des sites web et de vérification continue des certificats SSL avec Python3. L’outil a permis de renforcer la sécurité des serveurs internes et d’assurer une supervision fiable des services en ligne de l’entreprise.",
      technologies: ["Python", "Flask", "SSL", "APIs"]
    },
    {
      title: "Assistante saisonnière",
      company: "Tunisie Telecom",
      location: "Tunis, Tunisie",
      period: "Juin 2020 - Août 2020",
      description:
        "Participation à la gestion des paiements et au suivi des factures clients. Développement de compétences en communication, en résolution de problèmes et en travail d’équipe dans un environnement professionnel exigeant.",
      technologies: ["Gestion", "Communication", "Service client", "Organisation"]
    }
  ];



return (
  <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
    <div className="max-w-4xl mx-auto"> {/* Réduction de la largeur pour centrage plus net */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Expérience
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-emerald-600 mx-auto rounded-full"></div>
      </motion.div>

      <div className="relative">
        {/* Ligne verticale centrée */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-600 via-emerald-600 to-purple-600 transform -translate-x-1/2"></div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto md:w-[80%] text-left"
            >
              {/* Point de la timeline */}
              <div className="absolute left-1/2 top-0 w-4 h-4 rounded-full bg-gradient-to-br from-sky-600 to-emerald-600 border-4 border-white shadow-lg transform -translate-x-1/2"></div>

              {/* Carte de l'expérience */}
              <div className="mt-6 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center gap-2 mb-2 text-sky-600 flex-wrap justify-center md:justify-start">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-medium">{exp.period}</span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-1 text-center md:text-left">
                  {exp.title}
                </h3>

                <div className="flex items-center gap-2 mb-4 text-gray-600 justify-center md:justify-start">
                  <Briefcase className="w-4 h-4" />
                  <span className="font-medium">{exp.company}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm">{exp.location}</span>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed text-justify">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

}