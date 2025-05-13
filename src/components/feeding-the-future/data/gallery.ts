
interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/School_Forest_Farm.jpg?v=1747108496",
    alt: "School Forest Farm",
    className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Plants_in_School.jpg?v=1747108517",
    alt: "Plants in School",
    className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Community_Farming_at_School.jpg?v=1747108539",
    alt: "Community Farming at School",
    className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://cdn.shopify.com/s/files/1/0777/3326/5724/files/Child_Farming_at_School.jpg?v=1747108562",
    alt: "Child Farming at School",
    className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
  }
];
