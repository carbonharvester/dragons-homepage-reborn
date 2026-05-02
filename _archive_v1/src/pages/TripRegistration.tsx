import TripParticipantForm from "@/components/trip-registration/TripParticipantForm";
import SEO from "@/components/SEO";

const TripRegistration = () => {
  return (
    <>
      <SEO 
        title="Trip Registration | Kapes Adventures"
        description="Register participants for your upcoming trip to Kenya. Securely submit required information including passport details and dietary requirements."
      />
      <TripParticipantForm />
    </>
  );
};

export default TripRegistration;
