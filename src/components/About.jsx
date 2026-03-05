export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Image */}
          <div className="scroll-reveal h-full">
            <div className="relative h-full">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern Office Design"
                className="rounded-2xl shadow-xl w-full h-full object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-sky-500 text-white p-6 rounded-2xl shadow-lg hidden md:block">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-sm">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="scroll-reveal flex flex-col justify-center">
            <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Shopfitting Solutions Intl
            </h2>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Shopfitting Solutions Intl is a specialist design and delivery business focused on creating modular,
                cost-effective retail environments that are efficient to manufacture, transport, and install. We combine
                strong retail design principles with smart construction methodologies to help clients achieve
                high-quality outcomes without the cost and complexity of traditional shopfitting.
              </p>
              <p>
                Using cutting-edge design, documentation, and digital drafting technologies, we develop retail interiors
                as a series of coordinated modular components. These components are value-engineered, standardised where
                appropriate, and designed to be manufactured offshore, then imported as complete kits ready for
                streamlined on-site installation.
              </p>
              <p>
                We work across a broad range of retail sectors, partnering closely with retailers, builders, and
                developers to deliver interiors that are flexible, scalable, and repeatable across multiple locations.
              </p>
              <p>
                At every stage, we focus on practical design solutions that deliver commercial value—balancing
                aesthetics, durability, compliance, and cost.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-100">
              {[
                { value: '500+', label: 'Projects' },
                { value: '98%', label: 'Satisfaction' },
                { value: '10yr', label: 'Warranty' },
              ].map(({ value, label }) => (
                <div key={label} className="text-center">
                  <div className="text-2xl font-bold text-sky-600">{value}</div>
                  <div className="text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
