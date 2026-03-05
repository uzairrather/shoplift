import { useState } from 'react';
import { Send, CheckCircle, Loader2 } from 'lucide-react';

const industries = [
  'Jewellery Store', 'Supermarket', 'Kiosk/Stand', 'Cafe/Restaurant',
  'Fashion Retail', 'Beauty/Wellness', 'Other Retail',
];

const budgets = [
  'Under $50,000', '$50,000 - $100,000', '$100,000 - $250,000',
  '$250,000 - $500,000', '$500,000+', 'Not sure yet',
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    industry: '', budget: '', location: '', message: '',
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setSubmitted(false);
    setForm({ name: '', email: '', phone: '', company: '', industry: '', budget: '', location: '', message: '' });
  };

  const inputClass =
    'w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all outline-none';

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 scroll-reveal">
          <span className="inline-block px-4 py-2 bg-sky-100 text-sky-700 rounded-full text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Request Your Free Quote
          </h2>
          <p className="text-lg text-gray-600">
            Tell us about your project and we'll provide a detailed, no-obligation quote. Our team
            typically responds within 24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto scroll-reveal">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-lg p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    className={inputClass} placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email" name="email" required value={form.email} onChange={handleChange}
                    className={inputClass} placeholder="john@company.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    className={inputClass} placeholder="04XX XXX XXX"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                  <input
                    type="text" name="company" value={form.company} onChange={handleChange}
                    className={inputClass} placeholder="Your Company Pty Ltd"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Industry Type *</label>
                  <select
                    name="industry" required value={form.industry} onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Select your industry</option>
                    {industries.map((i) => <option key={i} value={i}>{i}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Estimated Budget</label>
                  <select
                    name="budget" value={form.budget} onChange={handleChange}
                    className={`${inputClass} bg-white`}
                  >
                    <option value="">Select budget range</option>
                    {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Project Location *</label>
                  <input
                    type="text" name="location" required value={form.location} onChange={handleChange}
                    className={inputClass} placeholder="Suburb, State (e.g., Surry Hills, NSW)"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell Us About Your Project</label>
                  <textarea
                    name="message" rows={4} value={form.message} onChange={handleChange}
                    className={`${inputClass} resize-none`}
                    placeholder="Describe your project, timeline, and any specific requirements..."
                  />
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-sky-500 hover:bg-sky-600 disabled:opacity-70 text-white font-semibold rounded-full transition-colors flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <span>Submitting...</span>
                      <Loader2 className="w-5 h-5 animate-spin-custom" />
                    </>
                  ) : (
                    <>
                      <span>Request Free Quote</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                By submitting this form, you agree to our privacy policy. We'll never share your
                information with third parties.
              </p>
            </form>
          ) : (
            <div className="bg-white rounded-3xl shadow-lg p-12 text-center">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h2>
              <p className="text-lg text-gray-600 mb-8">
                We've received your enquiry and will get back to you within 24 hours. Our team is
                excited to discuss your project!
              </p>
              <button
                onClick={resetForm}
                className="px-8 py-4 bg-sky-500 hover:bg-sky-600 text-white font-semibold rounded-full transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
