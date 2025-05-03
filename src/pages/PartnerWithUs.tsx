
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PartnerHero from '@/components/partner/PartnerHero';
import PartnerBenefits from '@/components/partner/PartnerBenefits';
import PartnerTimeline from '@/components/partner/PartnerTimeline';
import PartnerForm from '@/components/partner/PartnerForm';
import PartnerFAQ from '@/components/partner/PartnerFAQ';

const PartnerWithUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <PartnerHero />
        <PartnerBenefits />
        <PartnerTimeline />
        <PartnerForm />
        <PartnerFAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PartnerWithUs;
