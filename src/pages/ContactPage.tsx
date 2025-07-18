import Contact from '../components/Contact'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start your language learning journey? Contact us today to learn more about our courses, 
            schedule a consultation, or visit our centre.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  )
}