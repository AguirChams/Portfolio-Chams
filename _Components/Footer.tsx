import React from "react";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

type FooterProps = {
	onNavigate: (sectionId: string) => void;
};

export default function Footer({ onNavigate }: FooterProps) {
const navLinks = [
  { id: "home", label: "Page d'accueil" },
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "contact", label: "Contact" },
];


	return (
		<footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				<div className="grid md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
							Chams Portfolio
						</h3>
						<p className="text-gray-400 leading-relaxed">
  Étudiante en ingénierie informatique, passionnée par le <strong>DevSecOps</strong> et le développement de solutions intelligentes visant à automatiser la sécurité, le déploiement et la supervision des serveurs.
</p>

					</div>

					{/* Quick Links */}
					<div>
						<h4 className="font-semibold text-lg mb-4">Liens rapides</h4>
						<ul className="space-y-2">
							{navLinks.map((link) => (
								<li key={link.id}>
									<button
										onClick={() => onNavigate(link.id)}
										className="text-gray-400 hover:text-sky-400 transition-colors"
									>
										{link.label}
									</button>
								</li>
							))}
						</ul>
					</div>

					{/* Social Links */}
					<div>
						<h4 className="font-semibold text-lg mb-4">Contact</h4>
						<div className="flex gap-4">
							<a
								href="https://github.com/AguirChams"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
							>
								<Github className="w-5 h-5" />
							</a>
							<a
								href="https://www.linkedin.com/in/chams-aguir-11b6b3212/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 rounded-lg bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all hover:scale-110"
							>
								<Linkedin className="w-5 h-5" />
							</a>
							
						</div>
						<p className="text-gray-400 mt-4 text-sm">
							aguirchams68@gmail.com
							<br />
							Vélizy-Villacoublay, France
						</p>
					</div>
				</div>

				{/* Copyright */}
				<div className="border-t border-gray-800 pt-8 text-center">
					<p className="text-gray-400 flex items-center justify-center gap-2">
						© 2025 Chams Portfolio. {" "} fait avec
						<Heart className="w-4 h-4 text-red-500" /> Par Chams Aguir.
					</p>
				</div>
			</div>

			
		</footer>
	);
}
