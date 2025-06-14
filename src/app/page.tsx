'use client'

import { Github, Mail, Code, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import ScrollAnimation from '@/components/ScrollAnimation'

export default function HomePage() {
  // Variants d'animation pour le hero (pas de scroll)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  const skills = ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'HTML/CSS', 'JavaScript']

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <motion.section 
          className="text-center mb-16"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <div className="mb-8">
            <motion.div 
              className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold text-gray-100 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              AL
            </motion.div>
            <motion.h1 
              className="text-5xl font-bold text-gray-100 mb-4"
              variants={itemVariants}
            >
              Antoine Landon
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-300 mb-6"
              variants={itemVariants}
            >
              Étudiant en BUT Informatique • Développeur Web • Développeur d'Applications
            </motion.p>
            <motion.div 
              className="flex justify-center space-x-6"
              variants={itemVariants}
            >
              <motion.a 
                href="mailto:antoinelandon.pro@outlook.fr" 
                className="text-gray-300 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={24} />
              </motion.a>
              <motion.a 
                href="https://github.com/AntoineLdn" 
                className="text-gray-300 hover:text-orange-500 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={24} />
              </motion.a>
            </motion.div>
          </div>
        </motion.section>

        {/* Status Section */}
        <ScrollAnimation variant="slideUp" delay={0.1}>
          <section className="max-w-4xl mx-auto mb-16">
            <motion.div 
              className="bg-gray-100/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-400/20"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center justify-center mb-6">
                <motion.div
                  animate={{ rotate: [0, -10, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                >
                  <Wrench className="text-orange-500 mr-3" size={32} />
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-100">Portfolio en développement</h2>
              </div>
              
              <div className="mb-6">
                <div className="flex justify-between text-sm text-gray-300 mb-2">
                  <span>Progression</span>
                  <span>25%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div 
                    className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "25%" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </div>
              </div>

              <p className="text-gray-300 text-center text-lg leading-relaxed">
                Ce portfolio est actuellement en construction avec <strong className="text-orange-500">Next.js</strong> et <strong className="text-orange-500">TypeScript</strong>. 
                Je travaille sur une version complète qui présentera mes projets, compétences et expériences.
              </p>
              
              <div className="mt-6 text-center">
                <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm">
                  <Code className="mr-2" size={16} />
                  Dernière mise à jour : Juin 2025
                </span>
              </div>
            </motion.div>
          </section>
        </ScrollAnimation>

        {/* Quick Skills */}
        <ScrollAnimation variant="slideUp" delay={0.2}>
          <section className="max-w-4xl mx-auto mb-16">
            <h3 className="text-2xl font-bold text-gray-100 text-center mb-8">Technologies maîtrisées</h3>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-6">
              {skills.map((skill, index) => (
                <ScrollAnimation key={skill} variant="scale" delay={index * 0.1}>
                  <motion.div
                    className="px-4 py-2 bg-gray-100/10 text-gray-100 rounded-full border border-gray-400/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-colors cursor-pointer"
                    whileHover={{ scale: 1.15, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    {skill}
                  </motion.div>
                </ScrollAnimation>
              ))}
            </div>  
          </section>
        </ScrollAnimation>

        {/* Quick Links */}
        <ScrollAnimation variant="slideRight" delay={0.1}>
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/about" className="group block">
                  <div className="border bg-gray-100/10 backdrop-blur-lg rounded-lg p-6 hover:border-orange-500 hover:shadow-sm transition-all border-gray-400/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-100">À propos</h3>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={20} />
                      </motion.div>
                    </div>
                    <p className="text-gray-300">
                      Découvrez mon parcours, mes études et mon expérience en développement.
                    </p>
                  </div>
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link href="/projects" className="group block">
                  <div className="border bg-gray-100/10 backdrop-blur-lg rounded-lg p-6 hover:border-orange-500 hover:shadow-sm transition-all border-gray-400/20">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-100">Projets</h3>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2, delay: 0.5 }}
                      >
                        <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={20} />
                      </motion.div>
                    </div>
                    <p className="text-gray-300">
                      Explorez mes réalisations et projets de développement web.
                    </p>
                  </div>
                </Link>
              </motion.div>
            </div>
          </section>
        </ScrollAnimation>

        {/* CTA Section - Animation au scroll */}
        <ScrollAnimation variant="scale" delay={0.2}>
          <section className="text-center">
            <motion.div 
              className="bg-gradient-to-r from-orange-500/20 to-gray-600/20 rounded-2xl p-8 border border-orange-500/30"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold text-gray-100 mb-4">Intéressé par mon travail ?</h3>
              <p className="text-gray-300 mb-6">
                N'hésitez pas à me contacter pour discuter de vos projets ou pour plus d'informations sur mon parcours.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="/contact" className="bg-orange-500 hover:bg-orange-600 text-gray-100 px-8 py-3 rounded-lg transition-colors inline-flex items-center space-x-2">
                  <Mail size={18} />
                  <span>Me contacter</span>
                </Link>
              </motion.div>
            </motion.div>
          </section>
        </ScrollAnimation>
      </div>
    </div>
  )
}

// Types TypeScript pour plus tard
type Skill = {
  name: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
}

type Project = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  url?: string;
  github?: string;
}