import { Mail, Phone, Users, Award, Briefcase } from "lucide-react";

export function Team() {
  const leadership = [
    {
      name: "Wonder Chinhuru",
      role: "Executive Director",
      qualification: "MSc in Disaster Risk Reduction and Livelihoods Management",
      experience: "10+ years in community resilience",
      phone: "0772 978 904",
      email: "wonderchinhuru@gmail.com",
    },
    {
      name: "Godfrey Madyauta",
      role: "Programs Director",
      qualification: "MSc Climate Change and Sustainable Development",
      experience: "8+ years in Monitoring and Evaluation, Humanitarian and Resilience programs",
      phone: "0778 934 153",
      email: "madyautagodfrey@gmail.com",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 to-green-900 text-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl mb-4 md:mb-6">Our Team</h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-green-100 max-w-3xl">
            Experienced professionals combining local expertise with national standards to drive scalable impact
          </p>
        </div>
      </section>

      {/* Team Overview */}
      <section className="py-8 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Team Composition</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Our diverse team brings together technical expertise, field experience, and community knowledge
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
              <div className="text-5xl mb-3">8</div>
              <div className="text-lg">Full-time Staff</div>
              <div className="text-sm text-green-100 mt-2">Including Field Coordinators</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
              <div className="text-5xl mb-3">20</div>
              <div className="text-lg">Community Volunteers</div>
              <div className="text-sm text-green-100 mt-2">Active in disaster-prone areas</div>
            </div>
            <div className="bg-gradient-to-br from-green-600 to-green-700 text-white p-8 rounded-lg text-center">
              <div className="text-5xl mb-3">10+</div>
              <div className="text-lg">Years Experience</div>
              <div className="text-sm text-green-100 mt-2">Leadership expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-8 md:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-3 md:mb-4">Leadership Team</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Meet the experienced leaders guiding RSZ's strategic direction and program implementation
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white p-6 md:p-8 rounded-lg shadow-lg border border-gray-200">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <div className="w-16 h-16 md:w-20 md:h-20 bg-green-600 rounded-full flex items-center justify-center text-white text-2xl md:text-3xl flex-shrink-0">
                    {leader.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl mb-1">{leader.name}</h3>
                    <p className="text-green-600 font-semibold text-sm md:text-base">{leader.role}</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Award className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Qualification</div>
                      <p className="text-gray-800">{leader.qualification}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Briefcase className="text-green-600 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <div className="text-sm text-gray-600 mb-1">Experience</div>
                      <p className="text-gray-800">{leader.experience}</p>
                    </div>
                  </div>
                  <div className="border-t border-gray-200 pt-4 space-y-2">
                    <div className="flex items-center gap-3 text-gray-700">
                      <Phone size={18} className="text-green-600" />
                      <span>{leader.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-700">
                      <Mail size={18} className="text-green-600" />
                      <a href={`mailto:${leader.email}`} className="text-green-600 hover:text-green-700">
                        {leader.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl mb-4">Team Expertise</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team brings diverse technical skills and field experience across multiple sectors
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Users,
                title: "Field Coordinators",
                description: "Experienced staff managing community-level program implementation",
              },
              {
                icon: Briefcase,
                title: "Technical Specialists",
                description: "Experts in disaster risk reduction, climate resilience, and MEL",
              },
              {
                icon: Award,
                title: "Program Staff",
                description: "Professionals in humanitarian response, agriculture, and community development",
              },
              {
                icon: Users,
                title: "Community Volunteers",
                description: "Local champions supporting resilience initiatives in their communities",
              },
            ].map((expertise, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <expertise.icon className="text-green-600" size={24} />
                </div>
                <h3 className="text-xl mb-3">{expertise.title}</h3>
                <p className="text-gray-700">{expertise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl mb-6">Our Team's Commitment</h2>
            <p className="text-lg text-gray-700 mb-6">
              RSZ leadership and team combine local expertise with national standards to drive scalable impact. We are committed to:
            </p>
            <div className="grid sm:grid-cols-2 gap-6 text-left">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3 text-green-600">Community-Centered Approach</h3>
                <p className="text-gray-700">
                  Working alongside communities to co-design and implement solutions that enhance dignity and ownership
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3 text-green-600">Continuous Learning</h3>
                <p className="text-gray-700">
                  Investing in professional development and staying current with best practices in disaster resilience
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3 text-green-600">Inclusive Leadership</h3>
                <p className="text-gray-700">
                  Promoting diversity, gender equality, and representation in all levels of our organization
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl mb-3 text-green-600">Accountability & Results</h3>
                <p className="text-gray-700">
                  Delivering measurable impact through data-driven programming and transparent resource management
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
