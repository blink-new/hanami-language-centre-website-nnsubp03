import { Link } from 'react-router-dom'
import { Button } from './ui/button'
import { ArrowRight, Play, Users, Globe, Award } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-white via-pink-50/30 to-blue-50/30 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-brand-primary/10 rounded-full text-brand-primary text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Premium Language Education
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Master Languages with
              <span className="text-brand-primary block">Cultural Immersion</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Learn Japanese, Mandarin, and English through our innovative approach that combines 
              expert instruction with authentic cultural experiences. Perfect for individuals and businesses.
            </p>

            {/* Key Benefits */}
            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Users className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Teachers</div>
                  <div className="text-sm text-gray-600">Native speakers</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-secondary/10 rounded-lg flex items-center justify-center mr-3">
                  <Globe className="w-6 h-6 text-brand-secondary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Flexible Learning</div>
                  <div className="text-sm text-gray-600">Online & offline</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-primary/10 rounded-lg flex items-center justify-center mr-3">
                  <Award className="w-6 h-6 text-brand-primary" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Proven Results</div>
                  <div className="text-sm text-gray-600">95% success rate</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/courses">
                <Button 
                  size="lg" 
                  className="bg-brand-primary hover:bg-brand-primary/90 text-white px-8 py-4 text-lg w-full sm:w-auto"
                >
                  Explore Courses
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              
              <Link to="/contact">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-brand-secondary text-brand-secondary hover:bg-brand-secondary hover:text-white px-8 py-4 text-lg w-full sm:w-auto"
                >
                  <Play className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Visual */}
          <div className="relative animate-fade-in-up">
            <div className="relative">
              {/* Main Image Placeholder */}
              <div className="w-full h-96 bg-gradient-to-br from-brand-primary/20 to-brand-secondary/20 rounded-2xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Globe className="w-12 h-12 text-brand-primary" />
                  </div>
                  <div className="text-2xl font-bold text-brand-secondary mb-2">3 Languages</div>
                  <div className="text-gray-600">Japanese • Mandarin • English</div>
                </div>
              </div>

              {/* Floating Cards */}
              <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600 font-bold text-sm">日</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Japanese</div>
                    <div className="text-xs text-gray-500">N5 to N1 Levels</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-yellow-600 font-bold text-sm">中</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Mandarin</div>
                    <div className="text-xs text-gray-500">HSK 1-6 Levels</div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/2 -right-8 bg-white rounded-lg shadow-lg p-4 border border-gray-100">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-blue-600 font-bold text-sm">EN</span>
                  </div>
                  <div>
                    <div className="font-semibold text-sm">English</div>
                    <div className="text-xs text-gray-500">A1 to C2 Levels</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero