import { Award, CalendarCheck, GraduationCap } from "lucide-react";
import { motion } from "motion/react";

const FEATURES = [
  {
    icon: GraduationCap,
    title: "Expert Instructors",
    description:
      "Learn from industry-leading professionals with real-world experience and proven teaching methods.",
    color: "text-primary bg-primary/10",
  },
  {
    icon: CalendarCheck,
    title: "Flexible Learning",
    description:
      "Study at your own pace, on any device, anytime. Lifetime access to all course materials.",
    color: "text-deep-blue bg-deep-blue/10",
  },
  {
    icon: Award,
    title: "Certification",
    description:
      "Earn industry-recognized certificates upon completion to boost your career prospects.",
    color: "text-gold bg-gold/10",
  },
];

export default function WhyChooseSection() {
  return (
    <section id="features" className="py-20 bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Why Choose EduLearn?
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            We provide the best tools and resources to help you succeed in your
            learning journey.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-white rounded-2xl p-8 shadow-card text-center group hover:shadow-lg transition-shadow"
            >
              <div
                className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${feature.color} mb-5`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
