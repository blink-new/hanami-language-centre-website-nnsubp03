import About from '../components/About'

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Hanami Language Centre
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our story, mission, and the passionate team dedicated to helping you master new languages through cultural immersion and innovative teaching methods.
          </p>
        </div>
      </div>
      <About />
    </div>
  )
}