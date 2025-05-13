
interface GalleryImage {
  src: string;
  alt: string;
  className: string;
}

export const galleryImages: GalleryImage[] = [
  {
    src: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?q=80&w=2070",
    alt: "Students working in permaculture garden",
    className: "col-span-12 md:col-span-8 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070",
    alt: "Urban farming techniques",
    className: "col-span-12 md:col-span-4 h-64 md:h-80 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=2070",
    alt: "Seedling cultivation",
    className: "col-span-12 md:col-span-4 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1626093781463-acd24c353534?q=80&w=2070",
    alt: "Community engagement",
    className: "col-span-12 md:col-span-8 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=2074",
    alt: "School garden projects",
    className: "col-span-12 md:col-span-6 h-64 overflow-hidden rounded-lg"
  },
  {
    src: "https://images.unsplash.com/photo-1569880153113-76e33fc52d5f?q=80&w=2070",
    alt: "Sustainable farming demonstration",
    className: "col-span-12 md:col-span-6 h-64 overflow-hidden rounded-lg"
  }
];
