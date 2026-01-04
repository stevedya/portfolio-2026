import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const photos = [
  {
    id: 1,
    title: "Mountain Dawn",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Forest Mist",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Coastal Sunset",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Winter Lake",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&h=600&fit=crop",
  },
];

const FeaturedPhotos = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <p className="text-small mb-4">Photography</p>
            <h2 className="heading-section">Visual Stories</h2>
          </div>
          <Link
            href="/gallery"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline inline-flex items-center gap-2"
          >
            View full gallery
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {photos.map((photo) => (
            <Link
              key={photo.id}
              href="/gallery"
              className="group relative aspect-square overflow-hidden rounded-lg image-overlay"
            >
              <img
                src={photo.image}
                alt={photo.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-primary-foreground text-sm font-medium">
                    {photo.title}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedPhotos;
