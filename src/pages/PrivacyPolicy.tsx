
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Privacy Policy - Kapes Adventures"
        description="Privacy Policy for Kapes Adventures LLC educational travel programs."
      />
      <Header />
      
      <main className="flex-1">
        <div className="bg-dragon-dark text-white py-16">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
            <p className="text-xl text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="container-wide py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Introduction</h2>
              <p className="mb-4">
                Kapes Adventures LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="mb-4">
                Kapes Adventures LLC is established in the United Arab Emirates and operates educational travel programs primarily in Kenya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Information We Collect</h2>
              <h3 className="text-xl font-semibold mb-3 text-dragon">Personal Information</h3>
              <p className="mb-4">We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Name, email address, and contact information</li>
                <li>Educational institution details</li>
                <li>Travel preferences and requirements</li>
                <li>Medical information necessary for travel safety</li>
                <li>Payment and billing information</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-dragon">Usage Information</h3>
              <p className="mb-4">We automatically collect certain information when you use our website:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>IP address and browser information</li>
                <li>Pages visited and time spent on our site</li>
                <li>Referring website information</li>
                <li>Device and operating system information</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Provide and improve our educational travel services</li>
                <li>Process applications and bookings</li>
                <li>Communicate with you about our programs</li>
                <li>Ensure traveler safety and meet legal requirements</li>
                <li>Send marketing communications (with your consent)</li>
                <li>Analyze website usage and improve user experience</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Information Sharing</h2>
              <p className="mb-4">We may share your information with:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Service providers who assist in our operations</li>
                <li>Educational institutions for program coordination</li>
                <li>Government authorities when required by law</li>
                <li>Emergency contacts in case of health or safety issues</li>
              </ul>
              <p className="mb-4">We do not sell or rent your personal information to third parties.</p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Data Security</h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Your Rights</h2>
              <p className="mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Withdraw consent for marketing communications</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Contact Us</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-2"><strong>Kapes Adventures LLC</strong></p>
              <p className="mb-2">Email: info@kapesadventures.com</p>
              <p className="mb-4">United Arab Emirates</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
