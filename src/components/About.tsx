const About = () => {
  const skills = [
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "AWS",
  ];

  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-wide">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <p className="text-small mb-4">About</p>
            <h2 className="heading-section mb-6">
              Crafting experiences at the intersection of code and creativity
            </h2>
            <div className="space-y-4 text-body">
              <p>
                With over a decade of experience in software development, I specialize
                in building scalable web applications and intuitive user interfaces.
                My approach combines technical excellence with thoughtful design.
              </p>
              <p>
                When I'm not coding, you'll find me exploring the Pacific Northwest
                with my camera, capturing landscapes and the quiet beauty of everyday moments.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium mb-4">Technologies I work with</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] bg-muted rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
