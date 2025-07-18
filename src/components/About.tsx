import { Card, CardContent } from './ui/card'
import { Target, Heart, Users, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence in Education",
      description: "We maintain the highest standards in language instruction with certified native speakers and proven methodologies."
    },
    {
      icon: Heart,
      title: "Cultural Immersion",
      description: "Beyond language skills, we provide deep cultural understanding through authentic experiences and traditions."
    },
    {
      icon: Users,
      title: "Personalized Learning",
      description: "Every student receives tailored instruction that adapts to their learning style, pace, and goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We blend traditional teaching methods with modern technology for an engaging learning experience."
    }
  ]

  const team = [
    {
      name: "Yuki Tanaka",
      role: "Japanese Language Director",
      specialty: "JLPT Preparation & Business Japanese",
      image: "YT"
    },
    {
      name: "Li Wei",
      role: "Mandarin Language Director", 
      specialty: "HSK Certification & Cultural Studies",
      image: "LW"
    },
    {
      name: "Sarah Johnson",
      role: "English Language Director",
      specialty: "IELTS/TOEFL & Corporate Training",
      image: "SJ"
    },
    {
      name: "David Chen",
      role: "Corporate Training Manager",
      specialty: "Business Communication & Cross-cultural Training",
      image: "DC"
    }
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            About Hanami Language Centre
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the belief that language learning should be both effective and enjoyable, 
            we've been helping students achieve their linguistic goals for over a decade.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-white rounded-2xl p-8 mb-16 shadow-sm border border-gray-100">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                To bridge cultures and open opportunities through exceptional language education. 
                We believe that mastering a language is not just about grammar and vocabulary—it's 
                about understanding people, cultures, and perspectives.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you're an individual seeking personal growth or a business expanding globally, 
                we provide the tools, knowledge, and cultural insights needed for success.
              </p>
            </div>
            <div className="relative">
              <div className="w-full h-64 bg-gradient-to-br from-brand-primary/10 to-brand-secondary/10 rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🌸</div>
                  <div className="text-2xl font-bold text-brand-secondary">Hanami</div>
                  <div className="text-gray-600">Flower Viewing • New Beginnings</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-brand-primary" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Expert Team</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                    {member.image}
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h4>
                  <p className="text-brand-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About