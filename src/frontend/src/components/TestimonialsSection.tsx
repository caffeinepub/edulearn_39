import { useTestimonials } from "@/hooks/useQueries";
import { Star } from "lucide-react";
import { motion } from "motion/react";
import type { Testimonial } from "../backend.d";

const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

const FALLBACK_TESTIMONIALS: Testimonial[] = [
  {
    studentName: "Sarah Mitchell",
    courseName: "Complete Python Bootcamp",
    rating: BigInt(5),
    quote:
      "EduLearn completely transformed my career. The Python course was incredibly well-structured, and the instructor's explanations made complex concepts feel simple.",
    avatar: "",
  },
  {
    studentName: "James Okonkwo",
    courseName: "UI/UX Design Masterclass",
    rating: BigInt(5),
    quote:
      "The quality of instruction here is unmatched. I landed my first design job just 3 months after completing the UI/UX course. Highly recommended!",
    avatar: "",
  },
  {
    studentName: "Priya Sharma",
    courseName: "Machine Learning A-Z",
    rating: BigInt(5),
    quote:
      "The machine learning course is comprehensive and practical. The hands-on projects gave me the confidence to tackle real-world ML problems.",
    avatar: "",
  },
];

const AVATAR_COLORS = [
  "bg-primary text-primary-foreground",
  "bg-deep-blue text-white",
  "bg-gold text-white",
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {STAR_KEYS.map((k, i) => (
        <Star
          key={k}
          className={`w-4 h-4 ${i < rating ? "fill-gold text-gold" : "text-border"}`}
        />
      ))}
    </div>
  );
}

function TestimonialCard({
  testimonial,
  index,
}: { testimonial: Testimonial; index: number }) {
  const initials = testimonial.studentName
    .split(" ")
    .map((n) => n[0])
    .join("");
  const colorClass = AVATAR_COLORS[index % AVATAR_COLORS.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      data-ocid={`testimonials.item.${index + 1}`}
      className="bg-white rounded-2xl p-8 shadow-card border border-border flex flex-col gap-4"
    >
      <StarRating rating={Number(testimonial.rating)} />
      <p className="text-foreground/80 text-sm leading-relaxed italic flex-1">
        &ldquo;{testimonial.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2 border-t border-border">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm ${colorClass}`}
        >
          {initials}
        </div>
        <div>
          <p className="font-display font-semibold text-sm text-foreground">
            {testimonial.studentName}
          </p>
          <p className="text-xs text-muted-foreground">
            {testimonial.courseName}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  const { data: backendTestimonials } = useTestimonials();
  const testimonials =
    backendTestimonials && backendTestimonials.length > 0
      ? backendTestimonials
      : FALLBACK_TESTIMONIALS;

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            What Our Students Say
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Join thousands of learners who have transformed their careers with
            EduLearn.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <TestimonialCard key={t.studentName} testimonial={t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
