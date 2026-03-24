import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCategories, useCoursesByCategory } from "@/hooks/useQueries";
import { Clock, Star, Users } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import type { Course } from "../backend.d";

const CATEGORY_COLORS: Record<string, string> = {
  Programming: "from-violet-500 to-indigo-600",
  Design: "from-pink-400 to-rose-500",
  Business: "from-amber-400 to-orange-500",
  Science: "from-emerald-400 to-teal-600",
  Default: "from-teal-400 to-cyan-600",
};

const SKELETON_KEYS = ["sk1", "sk2", "sk3", "sk4", "sk5", "sk6", "sk7", "sk8"];

const FALLBACK_COURSES: Course[] = [
  {
    title: "Complete Python Bootcamp: From Zero to Hero",
    category: "Programming",
    instructor: "Dr. Angela Yu",
    difficulty: "Beginner",
    duration: BigInt(3600 * 42),
    price: BigInt(4999),
    isFeatured: true,
    enrollmentCount: BigInt(12500),
    thumbnail: "",
    description: "Master Python 3 from basics to advanced topics.",
  },
  {
    title: "UI/UX Design Masterclass",
    category: "Design",
    instructor: "Micaela Garber",
    difficulty: "Intermediate",
    duration: BigInt(3600 * 28),
    price: BigInt(3999),
    isFeatured: true,
    enrollmentCount: BigInt(8400),
    thumbnail: "",
    description: "Design beautiful products users love.",
  },
  {
    title: "Digital Marketing Strategy",
    category: "Business",
    instructor: "Neil Patel",
    difficulty: "Beginner",
    duration: BigInt(3600 * 20),
    price: BigInt(2999),
    isFeatured: false,
    enrollmentCount: BigInt(6200),
    thumbnail: "",
    description: "Grow any business with digital marketing.",
  },
  {
    title: "Machine Learning A-Z",
    category: "Science",
    instructor: "Kirill Eremenko",
    difficulty: "Advanced",
    duration: BigInt(3600 * 55),
    price: BigInt(5999),
    isFeatured: true,
    enrollmentCount: BigInt(18900),
    thumbnail: "",
    description: "Learn machine learning and deep learning.",
  },
  {
    title: "React & TypeScript Fundamentals",
    category: "Programming",
    instructor: "Maximiliano Firtman",
    difficulty: "Intermediate",
    duration: BigInt(3600 * 35),
    price: BigInt(4499),
    isFeatured: false,
    enrollmentCount: BigInt(9100),
    thumbnail: "",
    description: "Build modern React apps with TypeScript.",
  },
  {
    title: "Graphic Design in Illustrator",
    category: "Design",
    instructor: "Lindsay Marsh",
    difficulty: "Beginner",
    duration: BigInt(3600 * 22),
    price: BigInt(3499),
    isFeatured: false,
    enrollmentCount: BigInt(5500),
    thumbnail: "",
    description: "Create stunning graphics from scratch.",
  },
  {
    title: "Financial Analysis & Modeling",
    category: "Business",
    instructor: "Chris Haroun",
    difficulty: "Intermediate",
    duration: BigInt(3600 * 18),
    price: BigInt(3999),
    isFeatured: false,
    enrollmentCount: BigInt(4300),
    thumbnail: "",
    description: "Excel at financial modeling and valuation.",
  },
  {
    title: "Data Science with Python & R",
    category: "Science",
    instructor: "Jose Portilla",
    difficulty: "Intermediate",
    duration: BigInt(3600 * 48),
    price: BigInt(5499),
    isFeatured: true,
    enrollmentCount: BigInt(14700),
    thumbnail: "",
    description: "Comprehensive data science bootcamp.",
  },
];

function CourseCard({ course, index }: { course: Course; index: number }) {
  const gradient = CATEGORY_COLORS[course.category] || CATEGORY_COLORS.Default;
  const hours = Math.floor(Number(course.duration) / 3600);
  const price = (Number(course.price) / 100).toFixed(2);
  const difficultyColor =
    {
      Beginner: "bg-emerald-100 text-emerald-700",
      Intermediate: "bg-amber-100 text-amber-700",
      Advanced: "bg-red-100 text-red-700",
    }[course.difficulty] ?? "bg-muted text-muted-foreground";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      data-ocid={`courses.item.${index + 1}`}
      className="group bg-white rounded-2xl shadow-card overflow-hidden border border-border hover:shadow-lg transition-shadow duration-300"
    >
      <div
        className={`h-40 bg-gradient-to-br ${gradient} relative flex items-end p-4`}
      >
        <Badge className={`text-xs font-semibold ${difficultyColor} border-0`}>
          {course.difficulty}
        </Badge>
        {course.isFeatured && (
          <Badge className="absolute top-3 right-3 bg-gold text-white text-xs border-0">
            ⭐ Featured
          </Badge>
        )}
      </div>

      <div className="p-5">
        <span className="text-xs font-semibold text-primary uppercase tracking-wide">
          {course.category}
        </span>
        <h3 className="font-display font-semibold text-sm text-foreground mt-1 mb-2 line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">
          {course.instructor}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {hours}h
          </span>
          <span className="flex items-center gap-1">
            <Users className="w-3 h-3" />
            {Number(course.enrollmentCount).toLocaleString()}
          </span>
          <span className="flex items-center gap-1 text-gold">
            <Star className="w-3 h-3 fill-gold" />
            4.8
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span className="font-display font-bold text-foreground">
            ${price}
          </span>
          <button
            type="button"
            data-ocid={`courses.primary_button.${index + 1}`}
            className="text-xs font-semibold text-primary hover:underline"
          >
            Enroll Now →
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const { data: backendCourses, isLoading } =
    useCoursesByCategory(activeCategory);
  const { data: backendCategories } = useCategories();

  const categories = [
    "All",
    ...(backendCategories?.length
      ? backendCategories
      : ["Programming", "Design", "Business", "Science"]),
  ];

  let courses: Course[] = [];
  if (isLoading) {
    courses = [];
  } else if (backendCourses && backendCourses.length > 0) {
    courses = backendCourses;
  } else {
    courses =
      activeCategory === "All"
        ? FALLBACK_COURSES
        : FALLBACK_COURSES.filter((c) => c.category === activeCategory);
  }

  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Explore Top Courses
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Discover thousands of courses taught by expert instructors. Start
            learning today.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              data-ocid="courses.tab"
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {isLoading ? (
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            data-ocid="courses.loading_state"
          >
            {SKELETON_KEYS.map((k) => (
              <div
                key={k}
                className="rounded-2xl overflow-hidden border border-border"
              >
                <Skeleton className="h-40 w-full" />
                <div className="p-5 space-y-2">
                  <Skeleton className="h-3 w-20" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-3 w-28" />
                </div>
              </div>
            ))}
          </div>
        ) : courses.length === 0 ? (
          <div
            className="text-center py-12 text-muted-foreground"
            data-ocid="courses.empty_state"
          >
            No courses found in this category.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course, i) => (
              <CourseCard key={course.title} course={course} index={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
