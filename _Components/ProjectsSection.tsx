import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Site Monitoring Platform",
      description: "Application Python/Django pour surveiller les sites web, certificats SSL, et d'autres éléments critiques des sites en temps réel.",
      image: "./monitoring.png",
      tags: ["Python", "Django"],
    },
    {
      title: "AskMia - University Chatbot",
      description: "Chatbot universitaire développé avec Rasa, SQL et technologies web, permettant aux étudiants d'obtenir des réponses personnalisées aux questions fréquentes.",
      image: "./chatbot.png",
      tags: ["Rasa", "YAML", "SQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Server Management & Automation Interface",
      description: "Interface web en MERN stack et infrastructure d'automatisation des serveurs avec Ansible, Grafana, Prometheus et Node Exporter.",
      image: "./automatisation.png",
      tags: ["Ansible", "MERN", "Grafana", "Prometheus", "Node Exporter", "Bash", "RabbitMQ"],
    },
    {
      title: "Intelligent Cybersecurity & Supervision Platform",
      description: "Plateforme de supervision et cybersécurité combinant automatisation, visualisation de logs et interaction en langage naturel via interface web.",
      image: "./security.png",
      tags: ["Python", "FastAPI", "React.js", "Ansible", "Filebeat", "Grafana", "Prometheus", "Loki", "Rasa", "Docker", "Linux","Node Exporter"],
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Projets réalisés
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-emerald-600 mx-auto rounded-full"></div>
          
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden group h-full flex flex-col">
                <div className="relative overflow-hidden aspect-[16/10] rounded-t-2xl bg-gray-100 animate-pulse">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <p className="text-gray-600 mb-4 flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-gradient-to-r from-sky-50 to-emerald-50 text-gray-700 border border-sky-200/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
