import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const MediaConsentPolicy = () => {
  return (
    <>
      <SEO 
        title="Media Consent Policy | Kapes Adventures"
        description="Information about our photo and video policy for trip participants."
      />
      <div className="min-h-screen bg-gradient-to-b from-dragon-dark to-dragon py-12 px-4">
        <div className="container-wide max-w-4xl mx-auto">
          <Card className="border-dragon-yellow/20">
            <CardHeader>
              <CardTitle className="text-3xl font-academy text-dragon">
                Photo and Video Consent Policy
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-6 text-lg">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-dragon">Purpose of Media Collection</h2>
                <p>
                  During your trip with Kapes Adventures, our team may capture photos and videos 
                  of participants engaging in activities, cultural experiences, and educational programs.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-dragon">How We Use Media</h2>
                <p>
                  Photos and videos taken during the trip will be used exclusively for:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Marketing and promotional materials for Kapes Adventures</li>
                  <li>Website content and social media posts</li>
                  <li>Brochures, flyers, and other printed promotional materials</li>
                  <li>Educational presentations about our programs</li>
                  <li>Sharing the impact and experiences of our trips with prospective participants</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-dragon">Your Rights</h2>
                <p>
                  By providing consent, you grant Kapes Adventures permission to use these materials 
                  without compensation. All media remains the property of Kapes Adventures.
                </p>
                <p>
                  If you have concerns about specific photos or videos after the trip, please contact 
                  us and we will address your request promptly.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-dragon">Privacy and Safety</h2>
                <p>
                  We are committed to protecting the privacy and safety of all participants. We will:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Use images and videos respectfully and appropriately</li>
                  <li>Avoid sharing personal information such as full names or contact details in public posts</li>
                  <li>Remove or blur any content upon request from parents or guardians</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-dragon">Questions?</h2>
                <p>
                  If you have any questions about this policy, please contact us before completing 
                  your registration or at any time during or after your trip.
                </p>
              </section>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default MediaConsentPolicy;
