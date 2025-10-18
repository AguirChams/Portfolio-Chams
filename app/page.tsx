"use client";
import React, { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";

import HeroSection from "../_Components/HeroSection";
import AboutSection from "../_Components/AboutSection";
import SkillsSection from "../_Components/SkillsSection";
import ProjectsSection from "../_Components/ProjectsSection";
import ExperienceSection from "../_Components/ExperienceSection";
import ContactSection from "../_Components/ContactSection";
import Footer from "../_Components/Footer";

export default function Portfolio() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollYProgress } = useScroll();
	const scaleX = useSpring(scrollYProgress, {
		stiffness: 100,
		damping: 30,
		restDelta: 0.001,
	});

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

const navItems = [
  { id: "home", label: "Accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "contact", label: "Contact" },
];


	return (
		<div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-emerald-50">
			{/* Progress Bar */}
			<motion.div
				className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-emerald-400 origin-left z-50"
				style={{ scaleX }}
			/>

			{/* Navigation */}
			<nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex justify-between items-center h-16">
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							className="text-xl font-bold bg-gradient-to-r from-sky-600 to-emerald-600 bg-clip-text text-transparent"
						>
							Portfolio
						</motion.div>

						{/* Desktop Navigation */}
						<div className="hidden md:flex space-x-8">
							{navItems.map((item, index) => (
								<motion.button
									key={item.id}
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: index * 0.1 }}
									onClick={() => scrollToSection(item.id)}
									className="text-gray-700 hover:text-sky-600 transition-colors font-medium"
								>
									{item.label}
								</motion.button>
							))}
						</div>

						{/* Mobile Menu Button */}
						<button
							className="md:hidden"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
						>
							{isMenuOpen ? <X /> : <Menu />}
						</button>
					</div>
				</div>

				{/* Mobile Menu */}
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden bg-white border-t border-gray-200"
					>
						<div className="px-4 py-4 space-y-3">
							{navItems.map((item) => (
								<button
									key={item.id}
									onClick={() => scrollToSection(item.id)}
									className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-sky-50 rounded-lg transition-colors"
								>
									{item.label}
								</button>
							))}
						</div>
					</motion.div>
				)}
			</nav>

			{/* Main Content */}
			<div className="pt-16">
				<section id="home">
					<HeroSection
						onViewProjects={() => scrollToSection("projects")}
						onContact={() => scrollToSection("contact")}
					/>
				</section>
				<section id="about">
					<AboutSection />
				</section>
				<section id="skills">
					<SkillsSection />
				</section>
				<section id="projects">
					<ProjectsSection />
				</section>
				<section id="experience">
					<ExperienceSection />
				</section>
				<section id="contact">
					<ContactSection />
				</section>
				<Footer onNavigate={scrollToSection} />
			</div>
		</div>
	);
}
