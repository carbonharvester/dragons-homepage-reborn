
export interface PodcastEpisode {
  id: string;
  title: string;
  description: string;
  audioUrl: string;
  duration: string;
  date: string;
  image: string;
}

export const podcastEpisodes: PodcastEpisode[] = [
  {
    id: "ep1",
    title: "The Impact of Sustainable Travel on Local Communities",
    description: "In this episode, we explore how responsible travel can positively impact local communities in Kenya, featuring insights from community leaders and educators.",
    audioUrl: "https://example.com/podcast/ep1.mp3",
    duration: "45:32",
    date: "April 15, 2025",
    image: "/lovable-uploads/15e3c0c3-6461-43da-866c-88c8a2129885.png"
  },
  {
    id: "ep2",
    title: "Education Through Adventure: Student Stories",
    description: "Hear from students who have participated in our programs and how these experiences have shaped their perspectives on global issues and personal growth.",
    audioUrl: "https://example.com/podcast/ep2.mp3",
    duration: "38:45",
    date: "March 28, 2025",
    image: "/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png"
  },
  {
    id: "ep3",
    title: "Conservation Efforts in Kenya's Wildlife Reserves",
    description: "A deep dive into the current conservation efforts in Kenya's wildlife reserves and how educational programs are contributing to these initiatives.",
    audioUrl: "https://example.com/podcast/ep3.mp3",
    duration: "52:18",
    date: "March 10, 2025",
    image: "/lovable-uploads/fc764836-7162-400c-a486-00fe9d99f975.png"
  }
];
