import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[520px] flex items-center justify-center text-center overflow-hidden"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.58), rgba(0,0,0,0.58)), url('/assets/generated/hero-education.dim_1400x600.jpg') center/cover no-repeat`,
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-white text-sm font-medium mb-6 border border-primary/40">
            🎓 Over 500+ Expert-Led Courses
          </span>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Unlock Your Potential with{" "}
            <span className="text-primary">Expert-Led</span> Courses
          </h1>
          <p className="text-lg text-white/80 mb-8 max-w-xl mx-auto">
            Learn from world-class instructors, earn certifications, and advance
            your career at your own pace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              data-ocid="hero.primary_button"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 text-base font-semibold shadow-lg"
              onClick={() =>
                document
                  .getElementById("courses")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Browse Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              data-ocid="hero.secondary_button"
              className="rounded-full border-white/50 text-white bg-white/10 hover:bg-white/20 px-8 text-base"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60"
        animate={{ y: [0, 6, 0] }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 1.6,
          ease: "easeInOut",
        }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
