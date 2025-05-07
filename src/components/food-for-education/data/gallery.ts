
interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/55a9f399-0214-46a2-99d2-25dbc2cba06f.jpg?v=1746515494",
    alt: "Students working on sustainable farming project",
    className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/8aea54cf-37c5-43f0-8665-b4259a4acc7f.jpg?v=1746515558",
    alt: "Students learning about permaculture techniques",
    className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "/lovable-uploads/9754806b-a818-4c3f-bb62-aeffe98e97f5.png",
    alt: "Students working in garden",
    className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1280",
    alt: "Close-up of planting seedlings",
    className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
  }
];
