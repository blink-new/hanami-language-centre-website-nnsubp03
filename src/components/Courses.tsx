import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Clock, Users, Monitor, MapPin, Star, ArrowRight } from 'lucide-react'

const Courses = () => {
  const courses = [
    {
      language: "Japanese",
      flag: "🇯🇵",
      color: "from-red-500 to-pink-500",
      levels: ["N5 (Beginner)", "N4 (Elementary)", "N3 (Intermediate)", "N2 (Upper-Int)", "N1 (Advanced)"],
      formats: [
        { type: "Group Classes", price: "$180/month", duration: "8 weeks", students: "6-8 students" },
        { type: "Private Lessons", price: "$80/hour", duration: "Flexible", students: "1-on-1" },
        { type: "Online Classes", price: "$150/month", duration: "8 weeks", students: "4-6 students" }
      ],
      features: ["JLPT Preparation", "Business Japanese", "Cultural Activities", "Conversation Practice"],
      popular: true
    },
    {
      language: "Mandarin",
      flag: "🇨🇳",
      color: "from-yellow-500 to-orange-500",
      levels: ["HSK 1 (Beginner)", "HSK 2 (Elementary)", "HSK 3 (Intermediate)", "HSK 4 (Upper-Int)", "HSK 5-6 (Advanced)"],
      formats: [
        { type: "Group Classes", price: "$170/month", duration: "8 weeks", students: "6-8 students" },
        { type: "Private Lessons", price: "$75/hour", duration: "Flexible", students: "1-on-1" },
        { type: "Online Classes", price: "$140/month", duration: "8 weeks", students: "4-6 students" }
      ],
      features: ["HSK Certification", "Business Chinese", "Calligraphy Classes", "Cultural Immersion"],
      popular: false
    },
    {
      language: "English",
      flag: "🇺🇸",
      color: "from-blue-500 to-indigo-500",
      levels: ["A1 (Beginner)", "A2 (Elementary)", "B1 (Intermediate)", "B2 (Upper-Int)", "C1-C2 (Advanced)"],
      formats: [
        { type: "Group Classes", price: "$160/month", duration: "8 weeks", students: "6-8 students" },
        { type: "Private Lessons", price: "$70/hour", duration: "Flexible", students: "1-on-1" },
        { type: "Online Classes", price: "$130/month", duration: "8 weeks", students: "4-6 students" }
      ],
      features: ["IELTS/TOEFL Prep", "Business English", "Academic Writing", "Conversation Club"],
      popular: false
    }
  ]

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Language Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive language programs designed for all skill levels. 
            Each course combines structured learning with cultural immersion.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {courses.map((course, index) => (
            <Card key={index} className={`relative border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden ${course.popular ? 'ring-2 ring-brand-primary' : ''}`}>
              {course.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-brand-primary text-white">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              
              <div className={`h-32 bg-gradient-to-r ${course.color} relative`}>
                <div className="absolute inset-0 bg-black/10"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">{course.flag}</div>
                    <h3 className="text-2xl font-bold">{course.language}</h3>
                  </div>
                </div>
              </div>

              <CardContent className="p-6">
                {/* Levels */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Available Levels</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.levels.map((level, levelIndex) => (
                      <Badge key={levelIndex} variant="secondary" className="text-xs">
                        {level}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Formats & Pricing */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Class Formats</h4>
                  <div className="space-y-3">
                    {course.formats.map((format, formatIndex) => (
                      <div key={formatIndex} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                        <div>
                          <div className="font-medium text-gray-900">{format.type}</div>
                          <div className="text-sm text-gray-600 flex items-center mt-1">
                            <Clock className="w-3 h-3 mr-1" />
                            {format.duration}
                            <Users className="w-3 h-3 ml-3 mr-1" />
                            {format.students}
                          </div>
                        </div>
                        <div className="text-brand-primary font-bold">{format.price}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Course Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {course.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-brand-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <Button className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white">
                  Enroll Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning Options */}
        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Flexible Learning Options</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start">
              <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <MapPin className="w-6 h-6 text-brand-primary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">In-Person Classes</h4>
                <p className="text-gray-600 mb-4">
                  Join our vibrant classroom environment in the heart of the city. Experience face-to-face 
                  interaction with instructors and fellow students.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Interactive group activities</li>
                  <li>• Cultural events and workshops</li>
                  <li>• Access to language library</li>
                  <li>• Networking opportunities</li>
                </ul>
              </div>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                <Monitor className="w-6 h-6 text-brand-secondary" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Online Classes</h4>
                <p className="text-gray-600 mb-4">
                  Learn from anywhere with our interactive online platform. Perfect for busy schedules 
                  and remote learners.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Live interactive sessions</li>
                  <li>• Recorded lessons for review</li>
                  <li>• Digital learning materials</li>
                  <li>• Virtual cultural activities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Courses