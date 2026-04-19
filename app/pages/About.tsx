import { CheckCircle, Target, Eye } from "lucide-react";

export function About() {
  const principles = [
    {
      title: "Transparency",
      description: "We share clear budgets, progress, and outcomes with communities and stakeholders for full accountability.",
    },
    {
      title: "Inclusion",
      description: "We center women, persons with disabilities, young people and children in our programming, empower all members regardless of socio-economic status, and advance gender equality through equitable decision-making, leadership, and resource allocation.",
    },
    {
      title: "Innovation",
      description: "We blend Indigenous Knowledge Systems with scientific approaches to pilot, document, and scale low-cost, context-specific solutions.",
    },
    {
      title: "Diversity",
      description: "We embrace cultural, linguistic, gender, and livelihood diversity to leverage collective strengths in resilience-building.",
    },
    {
      title: "Accountability",
      description: "We use robust monitoring, community feedback, and priority-aligned decisions to ensure resources deliver impact.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">About RSZ</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-3xl">
            Established in 2020, we are a local non-governmental organisation committed to building community resilience across Zimbabwe.
          </p>
        </div>
      </section>

      {/* Organization Background */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl mb-4 md:mb-6">Organisation Background and Registration</h2>
            <p className="text-base md:text-lg text-gray-700 mb-4">
              Resilient Societies in Zimbabwe (RSZ) is a local non-governmental organisation established in 2020 under the Private Voluntary Organisations (PVO) Act [Chapter 17:05] of the Government of Zimbabwe.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              RSZ is registered as a domestic PVO (PVO 19/20), head-quartered in Mutare (Chikanga), Manicaland Province, and operates primarily in disaster-prone districts such as Chimanimani and Chipinge.
            </p>
            <p className="text-lg text-gray-700">
              Our scalable models are ready for expansion to other provinces, territories, and regionally to support resilience initiatives in disaster response and mitigation.
            </p>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="bg-white p-6 md:p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Eye className="text-green-600" size={24} />
                </div>
                <h2 className="text-3xl">Vision</h2>
              </div>
              <p className="text-lg text-gray-700">
                To lead in capacitating communities to respond effectively to livelihood shocks and stressors through sustainable, community-driven disaster mitigation, preparedness, response, and resilience-building.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <Target className="text-green-600" size={24} />
                </div>
                <h2 className="text-3xl">Mission</h2>
              </div>
              <p className="text-lg text-gray-700">
                To reduce community vulnerability and exposure to disasters by strengthening capacities for absorptive, adaptive, and transformative resilience. RSZ collaborates with governments, local institutions, established development structures, international bodies, and communities to deliver sustainable disaster mitigation and response solutions that enhance human dignity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Our Core Principles</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Five guiding principles shape all our interventions and ensure accountability to the communities we serve
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {principles.map((principle, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle className="text-green-600 flex-shrink-0 mt-1" size={24} />
                  <h3 className="text-xl">{principle.title}</h3>
                </div>
                <p className="text-gray-700">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mandate */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl mb-6">Our Mandate</h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                We center women, persons with disabilities, young people and children—while prioritizing the less privileged overall—to reduce economic and structural inequalities and promote gender equality.
              </p>
              <p>
                All community members play active roles in creating safe, habitable environments. RSZ contributes to national disaster management policy, provides consultancy services to Zimbabwe and global partners, and promotes inclusive interventions that build long-term resilience.
              </p>
              <p>
                RSZ leadership and team combine local expertise with national standards to drive scalable impact across all our programs and partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Organizational Structure */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6">Organizational Capacity</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-green-600 mb-2">8</div>
                <div className="text-lg">Full-time Staff</div>
                <div className="text-sm text-gray-600 mt-1">Including Field Coordinators</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-green-600 mb-2">20</div>
                <div className="text-lg">Community Volunteers</div>
                <div className="text-sm text-gray-600 mt-1">Active in the field</div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-4xl text-green-600 mb-2">10+</div>
                <div className="text-lg">Years Experience</div>
                <div className="text-sm text-gray-600 mt-1">Leadership expertise</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
