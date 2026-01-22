
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Terms of Service - Kapes Adventures"
        description="Terms of Service for Kapes Adventures LLC educational travel programs."
      />
      <Header />
      
      <main className="flex-1">
        <div className="bg-dragon-dark text-white py-16">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
            <p className="text-xl text-gray-300">Last updated: {new Date().toLocaleDateString()}</p>
          </div>
        </div>
        
        <div className="container-wide py-16">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Agreement to Terms</h2>
              <p className="mb-4">
                By accessing and using the services provided by Kapes Adventures LLC ("Company," "we," "our," or "us"), you agree to be bound by these Terms of Service ("Terms").
              </p>
              <p className="mb-4">
                Kapes Adventures LLC is a limited liability company established in the United Arab Emirates, providing educational travel programs primarily in Kenya.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Services</h2>
              <p className="mb-4">We provide educational travel programs including:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>School trips for K-12 educational institutions</li>
                <li>Summer abroad programs for students</li>
                <li>Multi-year curriculum programs</li>
                <li>Educator trips and professional development</li>
                <li>Adult educational travel programs</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Booking and Payment</h2>
              <h3 className="text-xl font-semibold mb-3 text-dragon">Reservations</h3>
              <p className="mb-4">
                All program bookings are subject to availability and confirmation. A deposit is required to secure your reservation.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-dragon">Payment Terms</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Full payment is due according to the payment schedule provided</li>
                <li>Late payments may result in program cancellation</li>
                <li>All payments are in USD unless otherwise specified</li>
                <li>Payment methods and processing fees may vary</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Cancellation and Refunds</h2>
              <h3 className="text-xl font-semibold mb-3 text-dragon">Participant Cancellation</h3>
              <ul className="list-disc pl-6 mb-4">
                <li>Cancellations must be made in writing</li>
                <li>Refund amounts depend on timing of cancellation</li>
                <li>Some fees may be non-refundable</li>
                <li>Travel insurance is strongly recommended</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-dragon">Company Cancellation</h3>
              <p className="mb-4">
                We reserve the right to cancel programs due to insufficient enrollment, safety concerns, or circumstances beyond our control. In such cases, we will provide a full refund or alternative program options.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Travel Requirements</h2>
              <h3 className="text-xl font-semibold mb-3 text-dragon">Documentation</h3>
              <p className="mb-4">Participants are responsible for obtaining:</p>
              <ul className="list-disc pl-6 mb-4">
                <li>Valid passport with appropriate expiration dates</li>
                <li>Required visas and permits</li>
                <li>Necessary vaccinations and health certificates</li>
                <li>Travel and medical insurance</li>
              </ul>
              
              <h3 className="text-xl font-semibold mb-3 text-dragon">Health and Safety</h3>
              <p className="mb-4">
                Participants must disclose any medical conditions or dietary restrictions. We reserve the right to exclude participants whose conditions may pose risks to themselves or others.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Liability and Responsibility</h2>
              <h3 className="text-xl font-semibold mb-3 text-dragon">Limitation of Liability</h3>
              <p className="mb-4">
                Kapes Adventures LLC acts as an intermediary and is not liable for acts or omissions of third-party service providers, natural disasters, political events, or other circumstances beyond our control.
              </p>
              
              <h3 className="text-xl font-semibold mb-3 text-dragon">Participant Responsibility</h3>
              <p className="mb-4">
                Participants are responsible for their personal belongings, compliance with local laws, and adherence to program guidelines and codes of conduct.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Intellectual Property</h2>
              <p className="mb-4">
                All content on our website, including text, images, logos, and program materials, is protected by intellectual property laws and remains the property of Kapes Adventures LLC.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Governing Law</h2>
              <p className="mb-4">
                These Terms are governed by the laws of the United Arab Emirates. Any disputes shall be resolved through the appropriate courts in the UAE.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Changes to Terms</h2>
              <p className="mb-4">
                We reserve the right to modify these Terms at any time. Updated Terms will be posted on our website with the revision date.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4 text-dragon-dark">Contact Information</h2>
              <p className="mb-4">
                For questions about these Terms of Service, please contact:
              </p>
              <p className="mb-2"><strong>Kapes Adventures LLC</strong></p>
              <p className="mb-2">Email: hello@kapesadventures.com</p>
              <p className="mb-4">United Arab Emirates</p>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;
