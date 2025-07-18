import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { Button } from './ui/button'
import { Building2, Users, TrendingUp, Globe, CheckCircle, ArrowRight } from 'lucide-react'

const Corporate = () => {
  const services = [
    {
      icon: Building2,
      title: "On-site Training",
      description: "Bring our expert instructors to your office for convenient, focused language training sessions."
    },
    {
      icon: Users,
      title: "Team Building",
      description: "Combine language learning with team building activities that strengthen workplace relationships."
    },
    {
      icon: TrendingUp,
      title: "Skills Assessment",
      description: "Comprehensive evaluation of your team's current language abilities and customized improvement plans."
    },
    {
      icon: Globe,
      title: "Cultural Training",
      description: "Essential cultural insights and business etiquette for successful international communications."
    }
  ]

  const benefits = [
    "Improved international communication",
    "Enhanced global business opportunities",
    "Increased employee confidence",
    "Better client relationships",
    "Competitive advantage in global markets",
    "Flexible scheduling around work hours"
  ]

  const clients = [
    { name: "TechCorp International", industry: "Technology" },
    { name: "Global Finance Solutions", industry: "Finance" },
    { name: "MedTech Innovations", industry: "Healthcare" },
    { name: "International Trading Co.", industry: "Import/Export" },
    { name: "Consulting Partners LLC", industry: "Consulting" },
    { name: "Manufacturing Excellence", industry: "Manufacturing" }
  ]

  return (
    <section id="corporate" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Corporate Language Training
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empower your team with professional language skills that drive business success. 
            Our corporate programs are designed to meet your organization's specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-brand-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-brand-primary" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Benefits */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Why Choose Corporate Training?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              In today's global economy, multilingual teams have a significant competitive advantage. 
              Our corporate training programs are designed to deliver measurable results that impact your bottom line.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-3">
              Request Corporate Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Right: Program Details */}
          <div>
            <Card className="border-0 shadow-lg">
              <CardHeader className="bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
                <CardTitle className="text-2xl">Custom Training Programs</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Program Duration</h4>
                    <p className="text-gray-600">Flexible from 4 weeks to 12 months based on your needs</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Class Size</h4>
                    <p className="text-gray-600">Small groups (4-8 participants) for optimal learning</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Schedule Options</h4>
                    <p className="text-gray-600">Before work, lunch breaks, after hours, or weekend sessions</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Customization</h4>
                    <p className="text-gray-600">Industry-specific vocabulary and scenarios tailored to your business</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Progress Tracking</h4>
                    <p className="text-gray-600">Regular assessments and detailed progress reports</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Client Testimonial */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-16">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">💼</div>
            <blockquote className="text-2xl font-medium text-gray-900 mb-4">
              "Hanami's corporate training program transformed our team's ability to communicate with our Asian partners. 
              The ROI was evident within the first quarter."
            </blockquote>
            <div className="text-lg text-gray-600">
              — Jennifer Park, CEO of Global Tech Solutions
            </div>
          </div>
        </div>

        {/* Trusted Clients */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Trusted by Leading Companies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {clients.map((client, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 text-center hover:shadow-sm transition-shadow duration-300">
                <div className="font-semibold text-gray-900">{client.name}</div>
                <div className="text-sm text-gray-600">{client.industry}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Corporate