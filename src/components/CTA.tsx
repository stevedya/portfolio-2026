import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container-wide">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-small mb-4">Let's Work Together</p>
          <h2 className="heading-display mb-6">
            Have a project in mind?
          </h2>
          <p className="text-body mb-10 max-w-xl mx-auto">
            I'm always interested in hearing about new projects, creative ideas,
            or opportunities to be part of your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link href="/contact" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                View GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
