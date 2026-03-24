import { useQuery } from "@tanstack/react-query";
import type { Course, Testimonial } from "../backend.d";
import { useActor } from "./useActor";

export function useAllCourses() {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["courses"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllCourses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useFeaturedCourses() {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["courses", "featured"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getFeaturedCourses();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCoursesByCategory(category: string) {
  const { actor, isFetching } = useActor();
  return useQuery<Course[]>({
    queryKey: ["courses", "category", category],
    queryFn: async () => {
      if (!actor) return [];
      if (category === "All") return actor.getAllCourses();
      return actor.getCoursesByCategory(category);
    },
    enabled: !!actor && !isFetching,
  });
}

export function useTestimonials() {
  const { actor, isFetching } = useActor();
  return useQuery<Testimonial[]>({
    queryKey: ["testimonials"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllTestimonials();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useCategories() {
  const { actor, isFetching } = useActor();
  return useQuery<string[]>({
    queryKey: ["categories"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getCategories();
    },
    enabled: !!actor && !isFetching,
  });
}
