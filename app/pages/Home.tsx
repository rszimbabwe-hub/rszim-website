import { Link } from "react-router";
import { ArrowRight, Shield, Users, Lightbulb, Globe } from "lucide-react";
import { Seo } from "../components/Seo";

export function Home() {
  return (
    <div className="bg-white">
      <Seo
        title="Resilient Societies of Zimbabwe (RSZ)"
        description="RSZ empowers Zimbabwean communities to face disasters and livelihood shocks through sustainable mitigation, preparedness, and resilience programmes. Based in Mutare, Manicaland."
      />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-700 to-green-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 md:mb-6 leading-tight">
              Building Resilient Communities in Zimbabwe
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 text-green-100">
              Empowering communities to respond effectively to livelihood shocks and stressors through sustainable, community-driven solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-green-700 px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-green-50 transition-colors text-center"
              >
                Partner With Us
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-white/10 transition-colors text-center"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Shield className="text-green-600" size={24} />
              </div>
              <h2 className="text-xl md:text-2xl mb-3 md:mb-4">Our Vision</h2>
              <p className="text-gray-700 text-sm md:text-base">
                To lead in capacitating communities to respond effectively to livelihood shocks and stressors through sustainable, community-driven disaster mitigation, preparedness, response, and resilience-building.
              </p>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-green-100 rounded-lg flex items-center justify-center mb-3 md:mb-4">
                <Users className="text-green-600" size={24} />
              </div>
              <h2 className="text-xl md:text-2xl mb-3 md:mb-4">Our Mission</h2>
              <p className="text-gray-700 text-sm md:text-base">
                To reduce community vulnerability and exposure to disasters by strengthening capacities for absorptive, adaptive, and transformative resilience through collaboration with governments, local institutions, and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Thematic Focus Areas */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Our Focus Areas</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We work across multiple thematic areas to build comprehensive community resilience
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                title: "Disaster Mitigation & Early Warning",
                description: "Helping communities prepare for and respond to disasters through early warning systems and preparedness plans.",
                icon: Shield,
              },
              {
                title: "Climate-Resilient Livelihoods",
                description: "Supporting sustainable livelihoods and ecosystems that can withstand climate shocks.",
                icon: Globe,
              },
              {
                title: "Economic Strengthening",
                description: "Promoting economic empowerment and poverty eradication through sustainable initiatives.",
                icon: Lightbulb,
              },
              {
                title: "Gender-Inclusive Risk Reduction",
                description: "Centering women, persons with disabilities, and youth in all programming to advance equality.",
                icon: Users,
              },
              {
                title: "Community Engagement",
                description: "Building local capacity and strengthening community-led development structures.",
                icon: Users,
              },
              {
                title: "Innovation & Sustainability",
                description: "Blending Indigenous Knowledge Systems with scientific approaches for lasting solutions.",
                icon: Lightbulb,
              },
            ].map((area, index) => (
              <div key={index} className="bg-white p-5 md:p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <area.icon className="text-green-600 mb-3 md:mb-4" size={28} />
                <h3 className="text-lg md:text-xl mb-2 md:mb-3">{area.title}</h3>
                <p className="text-gray-600 text-sm md:text-base">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas of Operation */}
      <section className="py-8 md:py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 md:mb-6">Where We Work</h2>
              <p className="text-base md:text-lg text-gray-700 mb-4 md:mb-6">
                Headquartered in Mutare (Chikanga), Manicaland Province, RSZ operates primarily in disaster-prone districts such as Chimanimani and Chipinge, and in Mutare Rural and Mutare Urban.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Our scalable models are ready for expansion to other provinces, territories, and regionally to support resilience initiatives in disaster response and mitigation.
              </p>
              <Link
                to="/programs"
                className="inline-flex items-center gap-2 text-green-600 hover:text-green-700"
              >
                View Our Programs & Impact
                <ArrowRight size={20} />
              </Link>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl mb-4">Registration & Status</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  <span className="font-semibold">Registration:</span> PVO 19/20
                </p>
                <p>
                  <span className="font-semibold">Established:</span> 2020
                </p>
                <p>
                  <span className="font-semibold">Legal Status:</span> Registered under the Private Voluntary Organisations (PVO) Act [Chapter 17:05] of the Government of Zimbabwe
                </p>
                <p>
                  <span className="font-semibold">Headquarters:</span> Stand Number 2822, Mutare (Chikanga), Manicaland Province, Zimbabwe
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-4 md:mb-6">Ready to Partner With Us?</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8">
            Join us in building resilient communities across Zimbabwe and beyond
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg hover:bg-green-700 transition-colors"
          >
            Get in Touch
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
