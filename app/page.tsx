export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-lightGray">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-8 h-8 text-primary mr-3" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.54-3.13 8.79-7.5 9.93-.31.08-.63.13-.96.15-.33-.02-.65-.07-.96-.15C6.13 25.29 3 21.04 3 16.5V7.78l8-3.6z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            <span className="text-2xl font-semibold text-primary">BiYé</span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-mediumGray hover:text-primary transition-colors">Solutions</a>
            <a href="#technology" className="text-mediumGray hover:text-primary transition-colors">Technology</a>
            <a href="#about" className="text-mediumGray hover:text-primary transition-colors">About</a>
            <a href="#contact" className="text-mediumGray hover:text-primary transition-colors">Contact</a>
          </nav>
          <button className="bg-primary text-white px-6 py-2 rounded hover:bg-secondary transition-colors">
            Get Started
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-darkSlate mb-6 leading-tight">
            Professional Medical Solutions<br />for Women&apos;s Health
          </h1>
          <p className="text-xl text-mediumGray mb-12 max-w-3xl mx-auto leading-relaxed">
            Advanced FemTech and IoT accessibility devices designed with clinical precision
            and medical-grade reliability. Trusted by healthcare professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-secondary transition-colors shadow-sm">
              Schedule Consultation
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded text-lg font-medium hover:bg-primary hover:text-white transition-colors">
              View Clinical Data
            </button>
          </div>
        </div>
      </section>

      {/* Features/Solutions Section */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-darkSlate mb-4">
              Clinical-Grade Solutions
            </h2>
            <p className="text-lg text-mediumGray max-w-2xl mx-auto">
              Our medical device platform combines precision engineering with
              user-centered design for optimal health outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-8 rounded-lg border border-lightGray hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-darkSlate mb-3">
                Medical-Grade Security
              </h3>
              <p className="text-mediumGray leading-relaxed">
                HIPAA-compliant data protection with enterprise-level encryption
                ensuring patient privacy and regulatory compliance.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-8 rounded-lg border border-lightGray hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-darkSlate mb-3">
                Real-Time Monitoring
              </h3>
              <p className="text-mediumGray leading-relaxed">
                Continuous health tracking with clinical-grade sensors providing
                actionable insights for healthcare providers and patients.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-8 rounded-lg border border-lightGray hover:shadow-md transition-shadow">
              <div className="w-12 h-12 mb-6">
                <svg className="w-full h-full text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-darkSlate mb-3">
                Provider Integration
              </h3>
              <p className="text-mediumGray leading-relaxed">
                Seamless integration with existing EHR systems and clinical workflows
                for comprehensive patient care management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact/Form Section */}
      <section className="bg-white py-20 px-6 border-t border-lightGray">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-darkSlate mb-4">
              Request More Information
            </h2>
            <p className="text-mediumGray">
              Connect with our clinical team to learn more about our medical device solutions.
            </p>
          </div>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-darkSlate mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 border border-lightGray rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="John"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-darkSlate mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 border border-lightGray rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-darkSlate mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 border border-lightGray rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="john.doe@hospital.com"
              />
            </div>

            <div>
              <label htmlFor="organization" className="block text-sm font-medium text-darkSlate mb-2">
                Organization
              </label>
              <input
                type="text"
                id="organization"
                className="w-full px-4 py-3 border border-lightGray rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Medical Center Name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-darkSlate mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-3 border border-lightGray rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Tell us about your needs..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-primary text-white px-8 py-4 rounded text-lg font-medium hover:bg-secondary transition-colors"
            >
              Submit Request
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-lightGray py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-primary mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 2.18l8 3.6v8.72c0 4.54-3.13 8.79-7.5 9.93-.31.08-.63.13-.96.15-.33-.02-.65-.07-.96-.15C6.13 25.29 3 21.04 3 16.5V7.78l8-3.6z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
                <span className="text-xl font-semibold text-primary">BiYé</span>
              </div>
              <p className="text-sm text-mediumGray">
                Professional medical device solutions for women&apos;s health.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">Products</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">Medical Devices</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">IoT Solutions</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Software Platform</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">About Us</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Clinical Studies</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Compliance</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-darkSlate mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-mediumGray hover:text-primary">Documentation</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Contact</a></li>
                <li><a href="#" className="text-mediumGray hover:text-primary">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-lightGray pt-8">
            <p className="text-center text-sm text-mediumGray">
              © 2024 BiYé. All rights reserved. Medical device class information available upon request.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
