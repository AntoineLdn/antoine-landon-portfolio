export default function ProjectsPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-4xl font-bold text-gray-100 mb-8">Projets</h1>
                    
                    <div className="bg-gray-100/10 backdrop-blur-lg rounded-2xl p-8 border border-gray-400/20">
                        <p className="text-xl text-gray-300 leading-relaxed">
                            Cette page est en cours de développement avec <strong className="text-orange-500">Next.js</strong> et <strong className="text-orange-500">TypeScript</strong>.
                        </p>
                        <p className="text-gray-400 mt-4">
                            Revenez bientôt pour découvrir mes projets !
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
