import { Github, Mail, Code, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="mb-8">
            <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-4xl font-bold text-gray-100 shadow-2xl">
              AL
            </div>
            <h1 className="text-5xl font-bold text-gray-100 mb-4">
              Antoine Landon
            </h1>
            <p className="text-xl text-gray-300 mb-6">
              Étudiant en BUT Informatique • Développeur Web • Développeur d'Applications
            </p>
            <div className="flex justify-center space-x-6">
              <a href="mailto:antoinelandon.pro@outlook.fr" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://github.com/AntoineLdn" className="text-gray-300 hover:text-orange-500 transition-colors">
                <Github size={24} />
              </a>
            </div>
          </div>
        </section>

        {/* Status Section */}
        <section className="max-w-4xl mx-auto mb-16">
          <div className="bg-gray-100/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-400/20">
            <div className="flex items-center justify-center mb-6">
              <Wrench className="text-orange-500 mr-3" size={32} />
              <h2 className="text-3xl font-bold text-gray-100">Portfolio en développement</h2>
            </div>
            
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-300 mb-2">
                <span>Progression</span>
                <span>25%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full w-[25%] animate-pulse"></div>
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
          </div>
        </section>

        {/* Quick Skills */}
        <section className="max-w-4xl mx-auto mb-16">
          <h3 className="text-2xl font-bold text-gray-100 text-center mb-8">Technologies maîtrisées</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['React', 'Vue.js', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'HTML/CSS', 'JavaScript'].map((skill) => (
              <span key={skill} className="px-4 py-2 bg-gray-100/10 text-gray-100 rounded-full border border-gray-400/20 hover:bg-orange-500/20 hover:border-orange-500/40 transition-colors">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/about" className="group">
              <div className="border bg-gray-100/10 backdrop-blur-lg rounded-lg p-6 hover:border-orange-500 hover:shadow-sm transition-all border-gray-400/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-100">À propos</h3>
                  <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={20} />
                </div>
                <p className="text-gray-300">
                  Découvrez mon parcours, mes études et mon expérience en développement.
                </p>
              </div>
            </Link>

            <Link href="/projects" className="group">
              <div className="border bg-gray-100/10 backdrop-blur-lg rounded-lg p-6 hover:border-orange-500 hover:shadow-sm transition-all border-gray-400/20">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-100">Projets</h3>
                  <ArrowRight className="text-gray-300 group-hover:text-orange-500 transition-colors" size={20} />
                </div>
                <p className="text-gray-300">
                  Explorez mes réalisations et projets de développement web.
                </p>
              </div>
            </Link>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-orange-500/20 to-gray-600/20 rounded-2xl p-8 border border-orange-500/30">
            <h3 className="text-2xl font-bold text-[{#f2f2f2] mb-4">Intéressé par mon travail ?</h3>
            <p className="text-gray-300 mb-6">
              N'hésitez pas à me contacter pour discuter de vos projets ou pour plus d'informations sur mon parcours.
            </p>
            <a 
              href="mailto:antoinelandon.pro@outlook.fr"
              className="inline-flex items-center space-x-2 bg-orange-500 text-[#f2f2f2] px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
            >
              <Mail size={18} />
              <span>Me contacter</span>
            </a>
          </div>
        </section>
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