'use client'

import { useState } from 'react'
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [submitError, setSubmitError] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setSubmitError('')
        
        try {
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            },
            body: JSON.stringify({
            access_key: '101b03bb-ce06-4cc8-b481-9e3e923985b3',
            subject: `Portfolio Contact: ${formData.subject}`, // Sujet personnalisé
            message: `
                            Bonjour Antoine,

                            Vous avez reçu un nouveau message via votre portfolio.

                            📅 Date: ${new Date().toLocaleDateString('fr-FR')} à ${new Date().toLocaleTimeString('fr-FR')}
                                        
                            De: ${formData.name} (${formData.email})
                            Message:
                            "${formData.message}"

                            Cordialement,
                            Système de contact automatique
                                    `.trim(),
                                    from_name: formData.name,
                                    // Champs supplémentaires pour Web3Forms
                                    botcheck: false
                                    })
                                })

        const result = await response.json()

        if (result.success) {
            setIsSubmitted(true)
            // Reset form après succès
            setTimeout(() => {
            setIsSubmitted(false)
            setFormData({ name: '', email: '', subject: '', message: '' })
            }, 4000)
        } else {
            throw new Error(result.message || 'Erreur lors de l\'envoi')
        }
        } catch (error) {
        console.error('Erreur:', error)
        setSubmitError('Erreur lors de l\'envoi. Veuillez réessayer.')
        } finally {
        setIsSubmitting(false)
        }
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
        <div className="container mx-auto px-4 py-16">
            {/* Header */}
            <ScrollAnimation variant="slideDown">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-100 mb-4">Contact</h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Une idée de projet ? Une question ? N'hésitez pas à me contacter !
                </p>
            </div>
            </ScrollAnimation>

            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <ScrollAnimation variant="slideRight">
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-100 mb-6 text-center md:text-left">Restons en contact</h2>
                        <p className="text-gray-300 leading-relaxed mb-6 text-center md:text-left">
                        Je suis toujours ouvert aux nouvelles opportunités et aux projets intéressants. 
                        Que ce soit pour un stage, un projet collaboratif ou simplement pour échanger 
                        sur le développement web, n'hésitez pas !
                        </p>
                    </div>

                        <div className="flex flex-row space-x-6 sm:flex-col sm:space-x-0 sm:space-y-4 justify-center md:justify-start items-center sm:items-start">
                            <motion.a 
                            href="mailto:antoinelandon.pro@outlook.fr"
                            className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                            whileHover={{ scale: 1.02, x: 10 }}
                        >
                        <Mail size={20} />
                            <span className="hidden sm:inline">antoinelandon.pro@outlook.fr</span>
                            <span className="sm:hidden">Email</span>
                        </motion.a>
                        
                        <motion.a 
                        href="https://github.com/AntoineLdn"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-3 text-gray-300 hover:text-orange-500 transition-colors"
                        whileHover={{ scale: 1.02, x: 10 }}
                        >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                        </svg>
                            <span>GitHub</span>
                        </motion.a>
                    </div>
                    
                    <div className="bg-gray-100/10 backdrop-blur-lg rounded-xl p-6 border border-gray-400/20">
                        <h3 className="text-lg font-semibold text-gray-100 mb-3">Réponse rapide</h3>
                        <p className="text-gray-300 text-sm">
                        Je réponds généralement dans les 24h. Pour les demandes urgentes, 
                        n'hésitez pas à me contacter directement par email.
                        </p>
                    </div>
                </div>
            </ScrollAnimation>

            {/* Formulaire de contact */}
            <ScrollAnimation variant="slideUp">
                <div className="bg-gray-100/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-400/20">
                {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nom complet
                        </label>
                        <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                            placeholder="Votre nom"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email
                        </label>
                        <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                            placeholder="votre.email@example.com"
                        />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Sujet
                        </label>
                        <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                        placeholder="Sujet de votre message"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                        </label>
                        <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={5}
                            className="w-full pl-10 pr-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg text-gray-100 placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none"
                            placeholder="Votre message..."
                        />
                        </div>
                    </div>

                    <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-orange-500 hover:bg-orange-600 disabled:bg-gray-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    >
                        {isSubmitting ? (
                        <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                            <span>Envoi en cours...</span>
                        </>
                        ) : (
                        <>
                            <Send size={18} />
                            <span>Envoyer le message</span>
                        </>
                        )}
                    </motion.button>

                    {/* Message d'erreur */}
                    {submitError && (
                        <motion.div 
                        className="flex items-center space-x-2 text-red-400 bg-red-500/10 border border-red-500/20 rounded-lg p-3"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        >
                        <AlertCircle size={18} />
                        <span className="text-sm">{submitError}</span>
                        </motion.div>
                    )}
                    </form>
                ) : (
                    <motion.div 
                    className="text-center py-8"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    >
                    <CheckCircle className="mx-auto text-green-500 mb-4" size={48} />
                    <h3 className="text-xl font-semibold text-gray-100 mb-2">Message envoyé !</h3>
                    <p className="text-gray-300">
                        Merci pour votre message. Je vous répondrai dans les plus brefs délais.
                    </p>
                    </motion.div>
                )}
                </div>
            </ScrollAnimation>
            </div>
        </div>
        </div>
    )
}