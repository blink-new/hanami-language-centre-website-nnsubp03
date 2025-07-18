import { Card, CardContent } from './ui/card'
import { Star, Quote } from 'lucide-react'

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Manager",
      company: "Tech Solutions Inc.",
      course: "Japanese N3",
      rating: 5,
      text: "The cultural immersion approach at Hanami made all the difference. I not only learned Japanese but gained deep insights into business culture that helped me excel in my role with our Tokyo office.",
      image: "SM"
    },
    {
      name: "Carlos Rodriguez",
      role: "International Student",
      company: "University Graduate",
      course: "English C1",
      rating: 5,
      text: "Thanks to Hanami's IELTS preparation course, I achieved the score I needed for my master's program. The teachers were incredibly supportive and the materials were top-notch.",
      image: "CR"
    },
    {
      name: "Emma Thompson",
      role: "Business Consultant",
      company: "Global Consulting Group",
      course: "Mandarin HSK 4",
      rating: 5,
      text: "Learning Mandarin at Hanami opened up incredible opportunities for my consulting work in China. The business-focused curriculum was exactly what I needed.",
      image: "ET"
    },
    {
      name: "Michael Chen",
      role: "Software Engineer",
      company: "StartupTech",
      course: "Japanese N2",
      rating: 5,
      text: "The flexible online classes fit perfectly with my work schedule. I could practice with native speakers and improve my technical Japanese for my job at a Japanese tech company.",
      image: "MC"
    },
    {
      name: "Lisa Wang",
      role: "HR Director",
      company: "Multinational Corp",
      course: "Corporate English Training",
      rating: 5,
      text: "We chose Hanami for our team's English training program. The customized curriculum and professional approach exceeded our expectations. Highly recommended for corporate training.",
      image: "LW"
    },
    {
      name: "David Kim",
      role: "Entrepreneur",
      company: "E-commerce Startup",
      course: "Mandarin HSK 3",
      rating: 5,
      text: "The cultural insights I gained alongside language skills have been invaluable for expanding my business into Chinese markets. Hanami's approach is truly comprehensive.",
      image: "DK"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful language learners who have achieved their goals with Hanami Language Centre.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 h-full">
              <CardContent className="p-6 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-4">
                  <Quote className="w-8 h-8 text-brand-primary/30" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Student Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-brand-primary font-medium">{testimonial.course}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">2,500+</div>
              <div className="text-gray-600">Students Taught</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">12+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
              <div className="text-gray-600">Corporate Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials