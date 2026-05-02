
import React from 'react';

const PartnerTimeline = () => {
  return (
    <section className="py-20 bg-dragon-beige">
      <div className="container-wide">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="section-heading">How Our Partnership Works</h2>
          <p className="text-lg text-dragon-gray">
            A simple, transparent process designed to create mutual success and lasting impact.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-9 md:left-1/2 top-0 h-full w-1 bg-dragon opacity-20 md:transform md:-translate-x-1/2"></div>
          
          <div className="space-y-12 md:space-y-24">
            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row">
              <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-dragon text-white rounded-full h-10 w-10 min-w-6 flex items-center justify-center z-10 font-bold">1</div>
              <div className="pl-20 md:w-1/2 md:pl-0 md:pr-16">
                <h3 className="text-xl font-bold text-dragon-dark mb-2">Initial Consultation</h3>
                <p className="text-dragon-gray">We'll meet to understand your business, clients, and how our experiences can complement your offerings.</p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row">
              <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-dragon text-white rounded-full h-10 w-10 min-w-6 flex items-center justify-center z-10 font-bold">2</div>
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="pl-20 md:w-1/2 md:pl-16">
                <h3 className="text-xl font-bold text-dragon-dark mb-2">Partnership Agreement</h3>
                <p className="text-dragon-gray">We'll establish a clear profit-sharing structure and outline responsibilities for both parties.</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row">
              <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-dragon text-white rounded-full h-10 w-10 min-w-6 flex items-center justify-center z-10 font-bold">3</div>
              <div className="pl-20 md:w-1/2 md:pl-0 md:pr-16">
                <h3 className="text-xl font-bold text-dragon-dark mb-2">Integration & Training</h3>
                <p className="text-dragon-gray">We'll provide comprehensive training and marketing materials to help you promote our programs effectively.</p>
              </div>
              <div className="hidden md:block md:w-1/2"></div>
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row">
              <div className="absolute left-4 md:left-1/2 top-4 md:transform md:-translate-x-1/2 bg-dragon text-white rounded-full h-10 w-10 min-w-6 flex items-center justify-center z-10 font-bold">4</div>
              <div className="md:w-1/2 hidden md:block"></div>
              <div className="pl-20 md:w-1/2 md:pl-16">
                <h3 className="text-xl font-bold text-dragon-dark mb-2">Launch & Grow</h3>
                <p className="text-dragon-gray">Begin offering our programs to your clients with our full support, then scale as demand increases.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnerTimeline;
