import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function CTABand() {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-deep-blue rounded-3xl px-8 md:px-16 py-14 text-center relative overflow-hidden"
        >
          {/* Decorative circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/5" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-primary/20" />

          <div className="relative z-10">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Ready to begin?
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-white mb-4">
              Start Learning Today!
            </h2>
            <p className="text-white/70 max-w-md mx-auto mb-8 text-base">
              Join over 50,000 students already learning. Access premium courses
              and start building your future.
            </p>
            <Button
              size="lg"
              data-ocid="cta.primary_button"
              className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 font-semibold text-base shadow-lg gap-2"
            >
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
