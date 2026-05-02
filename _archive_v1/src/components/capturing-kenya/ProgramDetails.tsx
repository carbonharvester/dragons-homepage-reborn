
import React from 'react';

const ProgramDetails = () => {
  return (
    <section className="py-16 bg-dragon-beige">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="section-heading">Program Details</h2>
          <p className="section-subheading">
            Everything you need to know about the Capturing Kenya summer program.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-3">Group Size & Staffing</h3>
              <p className="text-dragon-gray mb-2">
                Groups of 12-16 students ensure personalized attention and manageable logistics. 
                Each program is staffed with:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Expert photographer/videographer (lead instructor)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Kapes program coordinator</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Local guides with cultural and wildlife expertise</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Support staff (drivers, cooks for camping)</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-3">Equipment & Support</h3>
              <p className="text-dragon-gray mb-2">
                We provide the tools you need to capture Kenya's beauty:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Students bring personal cameras (DSLR/mirrorless or smartphone)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Tripods, basic lighting kits provided</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Laptops with Adobe Creative Cloud for editing</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Backup cameras available for emergencies</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-3">Safety & Support</h3>
              <p className="text-dragon-gray mb-2">
                Your safety is our top priority:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Comprehensive travel insurance</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Medical evacuation plans</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>24/7 support from Kapes staff</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Pre-trip safety briefings</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-dragon-dark mb-3">Program Inclusions</h3>
              <p className="text-dragon-gray mb-2">
                Your program fee covers:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Accommodation (guesthouses, tented camps, camping)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>All meals and transportation</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Activities (balloon rides, game drives, workshops)</span>
                </li>
                <li className="flex items-center">
                  <span className="bg-dragon rounded-full p-1 mr-2"></span>
                  <span>Community project contributions</span>
                </li>
              </ul>
              <p className="text-dragon-gray mt-2">
                <em>Not included: International flights and personal camera gear</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramDetails;
