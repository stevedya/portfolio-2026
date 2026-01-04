'use client'

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { X } from "lucide-react";

const photos = [
  {
    id: 1,
    title: "Mountain Dawn",
    location: "Mount Rainier, WA",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
    aspectClass: "md:col-span-2",
  },
  {
    id: 2,
    title: "Forest Mist",
    location: "Olympic National Park",
    image: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&h=600&fit=crop",
    aspectClass: "",
  },
  {
    id: 3,
    title: "Coastal Sunset",
    location: "Cannon Beach, OR",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop",
    aspectClass: "",
  },
  {
    id: 4,
    title: "Winter Lake",
    location: "Lake Chelan, WA",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&h=800&fit=crop",
    aspectClass: "md:col-span-2",
  },
  {
    id: 5,
    title: "Desert Bloom",
    location: "Eastern Washington",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
    aspectClass: "",
  },
  {
    id: 6,
    title: "Alpine Meadow",
    location: "North Cascades",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=600&fit=crop",
    aspectClass: "",
  },
  {
    id: 7,
    title: "Autumn Colors",
    location: "Leavenworth, WA",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop",
    aspectClass: "md:row-span-2",
  },
  {
    id: 8,
    title: "Pacific Coast",
    location: "Olympic Peninsula",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=600&fit=crop",
    aspectClass: "",
  },
  {
    id: 9,
    title: "Starry Night",
    location: "Mount Baker, WA",
    image: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&h=600&fit=crop",
    aspectClass: "",
  },
];

const Gallery = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 md:py-24">
          <div className="container-wide">
            <div className="max-w-2xl mb-12 md:mb-16">
              <p className="text-small mb-4">Photography</p>
              <h1 className="heading-display mb-6">Gallery</h1>
              <p className="text-body">
                Moments in time, they pass quickly, but through my lens, I try to hold onto them just a little longer. Over the years, I’ve been lucky enough to capture these fleeting memories alongside some amazing people, whether planned or unexpected. It’s not about perfection (though i try), but about finding beauty in the everyday, and maybe having a little fun along the way.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-3 md:gap-4">
              {photos.map((photo) => (
                <button
                  key={photo.id}
                  onClick={() => setSelectedPhoto(photo)}
                  className={`group relative overflow-hidden rounded-lg aspect-[4/3] ${photo.aspectClass}`}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="text-primary-foreground font-spectral text-lg mb-1">
                        {photo.title}
                      </h3>
                      <p className="text-primary-foreground/80 text-sm">
                        {photo.location}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Lightbox */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            className="absolute top-6 right-6 text-primary-foreground hover:text-primary-foreground/70 transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X className="h-8 w-8" />
          </button>
          <div className="max-w-5xl max-h-[90vh] animate-fade-up">
            <img
              src={selectedPhoto.image}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="mt-4 text-center">
              <h3 className="text-primary-foreground font-spectral text-xl">
                {selectedPhoto.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {selectedPhoto.location}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
