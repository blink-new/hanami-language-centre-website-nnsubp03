import Courses from '../components/Courses'

export default function CoursesPage() {
  return (
    <div className="pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Language Courses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive selection of Japanese, Mandarin, and English courses. 
            Whether you're a beginner or looking to advance your skills, we have the perfect program for you.
          </p>
        </div>
      </div>
      <Courses />
    </div>
  )
}