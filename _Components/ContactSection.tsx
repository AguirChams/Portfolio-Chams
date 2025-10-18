"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { useState } from "react";
import {sendContactEmail } from "@/utils/sendEmail"

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsSubmitting(true);

		await sendContactEmail(formData);

		setIsSubmitting(false);
		setSubmitted(true);
		setFormData({ name: "", email: "", message: "" });

		setTimeout(() => setSubmitted(false), 3000);
	};

	const contactInfo = [
		{
			icon: Mail,
			title: "Email",
			value: "aguirchams68@gmail.com",
			link: "aguirchams68@gmail.com",
		},
		{
			icon: Phone,
			title: "Telephone",
			value: "+33763858285",
			link: "tel:+33763858285",
		},
		{
		icon: MapPin,
		title: "Localisation",
		value: "Vélizy-Villacoublay, France",
		link: null,
		},

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
						Prendre contact
					</h2>
					<div className="w-20 h-1 bg-gradient-to-r from-sky-600 to-emerald-600 mx-auto rounded-full"></div>
					
				</motion.div>

				<div className="grid lg:grid-cols-2 gap-12">
					{/* Contact Info */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="space-y-8"
					>
						<div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
							<h3 className="text-2xl font-bold mb-6 text-gray-900">
								Informations de contact
							</h3>
							<div className="space-y-6">
								{contactInfo.map((info, index) => (
									<motion.div
										key={info.title}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.1 }}
										className="flex items-center gap-4"
									>
										<div className="w-12 h-12 rounded-xl bg-gradient-to-br from-sky-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
											<info.icon className="w-6 h-6 text-white" />
										</div>
										<div>
											<p className="text-sm text-gray-500 font-medium">
												{info.title}
											</p>
											{info.link ? (
												<a
													href={info.link}
													className="text-gray-900 font-semibold hover:text-sky-600 transition-colors"
												>
													{info.value}
												</a>
											) : (
												<p className="text-gray-900 font-semibold">
													{info.value}
												</p>
											)}
										</div>
									</motion.div>
								))}
							</div>

							<div className="mt-8 pt-8 border-t border-gray-200">
								<p className="text-gray-600 mb-4 font-medium">
									Suivez-moi sur les réseaux sociaux
								</p>
								<div className="flex gap-4">
									<a
										href="https://github.com/AguirChams"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-xl bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all hover:scale-110"
									>
										<Github className="w-5 h-5 text-gray-700" />
									</a>
									<a
										href="https://www.linkedin.com/in/chams-aguir-11b6b3212/"
										target="_blank"
										rel="noopener noreferrer"
										className="w-12 h-12 rounded-xl bg-sky-100 hover:bg-sky-200 flex items-center justify-center transition-all hover:scale-110"
									>
										<Linkedin className="w-5 h-5 text-sky-600" />
									</a>
									
								</div>
							</div>
						</div>
					</motion.div>

					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<Card className="border-none shadow-xl bg-white/80 backdrop-blur-sm">
							<CardContent className="p-8">
								<form onSubmit={handleSubmit} className="space-y-6">
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Votre nom et prénom
										</label>
										<Input
											type="text"
											value={formData.name}
											onChange={(e) =>
												setFormData({ ...formData, name: e.target.value })
											}
											placeholder=""
											required
											className="bg-white border-gray-200 focus:border-sky-500 focus:ring-sky-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Adresse e-mail
										</label>
										<Input
											type="email"
											value={formData.email}
											onChange={(e) =>
												setFormData({ ...formData, email: e.target.value })
											}
											placeholder=""
											required
											className="bg-white border-gray-200 focus:border-sky-500 focus:ring-sky-500"
										/>
									</div>
									<div>
										<label className="block text-sm font-medium text-gray-700 mb-2">
											Message
										</label>
										<Textarea
											value={formData.message}
											onChange={(e) =>
												setFormData({ ...formData, message: e.target.value })
											}
											placeholder=""
											required
											rows={6}
											className="bg-white border-gray-200 focus:border-sky-500 focus:ring-sky-500 resize-none"
										/>
									</div>
									<Button
										type="submit"
										disabled={isSubmitting || submitted}
										className="w-full bg-gradient-to-r from-sky-600 to-emerald-600 hover:from-sky-700 hover:to-emerald-700 text-white py-6 text-lg"
									>
										{isSubmitting ? (
											"Sending..."
										) : submitted ? (
											"Message Sent! ✓"
										) : (
											<>
												Envoyer le message
												<Send className="ml-2 w-5 h-5" />
											</>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div>
				</div>
			</div>
		</div>
	);
}
