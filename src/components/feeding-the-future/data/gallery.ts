
interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Students_creating_permaculture_garden.jpg?v=1746604321",
    alt: "Students creating permaculture garden",
    className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Sustainable_farming_demonstration.jpg?v=1746604401",
    alt: "Sustainable farming demonstration",
    className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Seedling_cultivation.jpg?v=1746604456",
    alt: "Seedling cultivation",
    className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Community_engagement.jpg?v=1746604509",
    alt: "Community engagement",
    className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/School_garden_projects.jpg?v=1746604557",
    alt: "School garden projects",
    className: "col-span-12 md:col-span-6 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Urban_farming_techniques.jpg?v=1746604614",
    alt: "Urban farming techniques",
    className: "col-span-12 md:col-span-6 h-64 overflow-hidden rounded-lg"
  }
];
