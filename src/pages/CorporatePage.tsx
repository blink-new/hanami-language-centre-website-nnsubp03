import Corporate from '../components/Corporate'

export default function CorporatePage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Corporate Training Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with professional language training programs designed for businesses. 
            Enhance global communication and unlock new market opportunities.
          </p>
        </div>
      </div>
      <Corporate />
    </div>
  )
}