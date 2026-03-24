import { motion } from "motion/react";

const STATS = [
  { value: "50,000+", label: "Active Students" },
  { value: "500+", label: "Expert Courses" },
  { value: "200+", label: "Instructors" },
  { value: "95%", label: "Satisfaction Rate" },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-border">
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="text-center"
            >
              <p className="font-display text-3xl font-extrabold text-primary">
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
