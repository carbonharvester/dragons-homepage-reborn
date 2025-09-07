import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import GlobalImpactTripScorecard from '@/components/GlobalImpactTripScorecard';
import { Button } from '@/components/ui/button';

const ImpactScorecard = () => {
  const pageUrl = 'https://missionkapes.com/impact-scorecard';
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Global Impact Trip Scorecard"
        description="Assess how impactful and ethical your school trips are, then get tailored recommendations and book a free consultation."
        ogUrl={pageUrl}
        canonicalUrl={pageUrl}
        keywords="Global Impact Trip Scorecard, school trip audit, educational travel assessment, ethical travel, Kapes Adventures"
      />
      <Header />
      <main>
        <header className="bg-gradient-to-br from-gray-50 to-gray-100">
          <div className="container-wide py-16 md:py-24">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Global Impact Trip Scorecard
              </h1>
              <p className="mt-4 text-lg text-gray-700">
                A quick, research-informed audit to gauge learning quality, ethics, and access in your school trips. Get your banded result with clear next steps.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#scorecard">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">Start the Scorecard</Button>
                </a>
                <Button asChild variant="secondary" className="bg-dragon-yellow text-dragon-dark hover:bg-dragon-yellow/90">
                  <a href="https://calendly.com/kapesuniforms/kapes-uniforms-consultation-clone" target="_blank" rel="noopener noreferrer">
                    Book a free consultation
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <section aria-labelledby="why-scorecard" className="py-12 md:py-16">
          <div className="container-wide grid md:grid-cols-3 gap-6">
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Evidence-led</h3>
              <p className="mt-2 text-gray-700">Built around learning goals, student voice, community partnership, and safeguarding best practices.</p>
            </article>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">Actionable</h3>
              <p className="mt-2 text-gray-700">Your result includes clear recommendations you can implement before the next cohort travels.</p>
            </article>
            <article className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900">No judgment</h3>
              <p className="mt-2 text-gray-700">Whether you land Red, Amber or Green, we’ll help you improve—and Green schools still love what we do at Kapes Adventures.</p>
            </article>
          </div>
        </section>

        <section id="scorecard" className="py-8">
          <div className="container-wide">
            <GlobalImpactTripScorecard />
          </div>
        </section>
      </main>
      <Footer />

      {/* Structured Data: FAQ */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        'mainEntity': [
          {
            '@type': 'Question',
            'name': 'What does the Global Impact Trip Scorecard measure?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'It assesses learning goals, student voice, community partnership, evidence of learning, culture and inclusion, equity and access, planet and ethics, and safety and care.'
            }
          },
          {
            '@type': 'Question',
            'name': 'How long does it take?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'Most schools complete it in under 10 minutes.'
            }
          },
          {
            '@type': 'Question',
            'name': 'What happens after I get my result?',
            'acceptedAnswer': {
              '@type': 'Answer',
              'text': 'You receive tailored recommendations and can book a free consultation with Kapes Adventures to plan improvements.'
            }
          }
        ]
      }) }} />
    </div>
  );
};

export default ImpactScorecard;
