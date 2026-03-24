import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Course {
    title: string;
    duration: bigint;
    thumbnail: string;
    instructor: string;
    difficulty: string;
    description: string;
    isFeatured: boolean;
    category: string;
    price: bigint;
    enrollmentCount: bigint;
}
export interface Testimonial {
    studentName: string;
    quote: string;
    rating: bigint;
    courseName: string;
    avatar: string;
}
export interface backendInterface {
    enrollInCourse(courseTitle: string): Promise<void>;
    getAllCourses(): Promise<Array<Course>>;
    getAllTestimonials(): Promise<Array<Testimonial>>;
    getCategories(): Promise<Array<string>>;
    getCourse(title: string): Promise<Course>;
    getCoursesByCategory(category: string): Promise<Array<Course>>;
    getFeaturedCourses(): Promise<Array<Course>>;
}
