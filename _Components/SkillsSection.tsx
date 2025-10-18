import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database } from "lucide-react";

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      color: "from-sky-500 to-sky-600",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML", "CSS", "Tailwind CSS", "Responsive Design","Angular"]
    },

    {
      title: "Backend",
      icon: Server,
      color: "from-emerald-500 to-emerald-600",
      skills: ["Java", "Python3","Node.js", "Express","PHP","C/C++", "MongoDB", "SQL", "PostgreSQL", "RESTful APIs", "Django", "FastAPI"]
    },
    {
      title: "Data & Tools",
      icon: Database,
      color: "from-purple-500 to-purple-600",
      skills: ["Grafana", "Prometheus", "Loki","Flutter","Spark","Script Bash", "Node Exporter", "Rasa", "RabbitMQ","OpenMP","MapReduce","Pandas", "NumPy", "scikit-learn","AWS","JUnit", "Docker", "Git", "Linux", "Jenkins", "Ansible"]
    }
  ];

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-emerald-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
              className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-6`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.2 + skillIndex * 0.05 }}
                  >
                    <Badge 
                      variant="secondary" 
                      className="px-4 py-2 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md transition-all cursor-default text-sm font-medium"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}