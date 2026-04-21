import { Layers, Building2, Handshake, TrendingUp } from "lucide-react";
import { Seo } from "../components/Seo";

export function WhatWeDo() {
  const thematicAreas = [
    {
      title: "Disaster Mitigation, Preparedness & Early Warning",
      description: "We enable communities to map hazards, co-design preparedness plans including early-warning systems, evacuation routes, contingency funds, and communication strategies, and implement risk-reduction activities fostering ownership and dignity.",
    },
    {
      title: "Climate-Resilient Livelihoods & Ecosystems",
      description: "Supporting communities to develop sustainable livelihoods that can withstand climate shocks while protecting and restoring local ecosystems for long-term resilience.",
    },
    {
      title: "Economic Strengthening & Poverty Eradication",
      description: "Promoting economic empowerment through social enterprises, micro-funds, and local revenue streams that ensure sustainability and reduce poverty at the community level.",
    },
    {
      title: "Gender-Inclusive Risk Reduction",
      description: "Centering women, persons with disabilities, young people, and children in all programming to advance gender equality through equitable decision-making, leadership, and resource allocation.",
    },
    {
      title: "Community Engagement & Capacity Strengthening",
      description: "Building local capacity and strengthening community-led development structures to support resilience initiatives at the grassroots level.",
    },
  ];

  const approaches = [
    {
      icon: Layers,
      title: "Community-Led Disaster Mitigation and Response",
      description: "We enable communities to map hazards, co-design preparedness plans (e.g., early-warning systems, evacuation routes, contingency funds, communication strategy), and implement risk-reduction activities fostering ownership and dignity.",
    },
    {
      icon: Building2,
      title: "Collaboration with Governments and Local Institutions",
      description: "We partner with Government of Zimbabwe entities (Civil Protection Units, line ministries), local institutions, and established development structures at national, provincial, district, ward, and village levels to integrate plans into frameworks, strengthen capacities, and contribute to policy.",
    },
    {
      icon: Handshake,
      title: "Partnerships with Local, National, and International Bodies",
      description: "We value partnerships with NGOs, CBOs, faith-based groups, academic institutions, and specialized actors (e.g., UN agencies, environmental NGOs, agricultural extensions, child-protection organizations and youth empowerment bodies) for multi-sectoral impact, knowledge sharing, and global consultancy services.",
    },
    {
      icon: TrendingUp,
      title: "Resource Mobilization and Sustainability",
      description: "We secure funding from donors, governments, CSR, and foundations, while promoting community co-investment and models like micro-funds, social enterprises, and local revenue streams to ensure sustainability and scalability.",
    },
  ];

  return (
    <div className="bg-white">
      <Seo
        title="What We Do | RSZ Zimbabwe"
        description="RSZ delivers disaster mitigation, early warning, climate-resilient livelihoods, economic strengthening, and partnerships with government, NGOs, and communities in Zimbabwe."
      />
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">What We Do</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-3xl">
            RSZ employs a participatory approach to disaster risk management, vulnerability reduction, and resilience-building
          </p>
        </div>
      </section>

      {/* Thematic Focus Areas */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Thematic Focus Areas</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our work spans five critical areas that build comprehensive community resilience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {thematicAreas.map((area, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white">{index + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xl mb-3">{area.title}</h3>
                    <p className="text-gray-700">{area.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Our Implementation Approach</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We value strategic partnerships with local institutions and established development structures
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {approaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <approach.icon className="text-green-600" size={28} />
                </div>
                <h3 className="text-2xl mb-4">{approach.title}</h3>
                <p className="text-gray-700">{approach.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staff Expertise */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Staff Expertise and Skills</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our team brings diverse technical expertise to deliver high-quality programs
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 max-w-5xl mx-auto">
            {[
              "Disaster Risk Reduction",
              "Climate Resilience (Mitigation & Adaptation)",
              "Food Security & Resilience Building",
              "Urban Resilience",
              "Humanitarian Response",
              "Agriculture Development",
              "Community Development",
              "Youth Programming",
              "Entrepreneurship/Business Development",
              "Nutrition and Health Programs",
              "Monitoring Evaluation Accountability and Learning",
              "Gender and Social Dynamics",
            ].map((skill, index) => (
              <div key={index} className="bg-green-50 px-4 py-3 rounded-lg text-center">
                <span className="text-gray-800">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values and Commitment */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6">Our Commitment</h2>
            <p className="text-lg text-gray-700 mb-4">
              Women, young people, persons with disabilities, and children are centered in all programming to advance gender equality. We work with traditional leaders, ward councillors, and established development structures to strengthen them in supporting resilience initiatives at community level.
            </p>
            <p className="text-lg text-gray-700">
              All community members play active roles in creating safe, habitable environments that enhance human dignity and build long-term resilience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
