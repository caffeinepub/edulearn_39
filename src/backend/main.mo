import Map "mo:core/Map";
import Text "mo:core/Text";
import Nat "mo:core/Nat";
import List "mo:core/List";
import Runtime "mo:core/Runtime";
import Iter "mo:core/Iter";
import Order "mo:core/Order";

actor {
  // Types
  type Course = {
    title : Text;
    description : Text;
    category : Text;
    instructor : Text;
    duration : Nat;
    price : Nat;
    difficulty : Text;
    thumbnail : Text;
    enrollmentCount : Nat;
    isFeatured : Bool;
  };

  type Testimonial = {
    studentName : Text;
    quote : Text;
    rating : Nat;
    avatar : Text;
    courseName : Text;
  };

  // Course comparison module
  module Course {
    public func compare(course1 : Course, course2 : Course) : Order.Order {
      Text.compare(course1.title, course2.title);
    };
  };

  // Persistent data structures
  let courses = Map.empty<Text, Course>();
  let testimonials = List.empty<Testimonial>();

  // Helper function to get course
  func getCourseInternal(title : Text) : Course {
    switch (courses.get(title)) {
      case (null) { Runtime.trap("Course not found") };
      case (?course) { course };
    };
  };

  // Initialize seed data
  do {
    let seedCourses = [
      {
        title = "Introduction to Programming";
        description = "Learn the basics of programming using Python.";
        category = "Programming";
        instructor = "Alice Smith";
        duration = 40;
        price = 99;
        difficulty = "Beginner";
        thumbnail = "https://example.com/programming-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = true;
      },
      {
        title = "UX Design Fundamentals";
        description = "Discover core UX design principles and tools.";
        category = "Design";
        instructor = "Bob Johnson";
        duration = 30;
        price = 120;
        difficulty = "Intermediate";
        thumbnail = "https://example.com/ux-design-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = true;
      },
      {
        title = "Business Analytics";
        description = "Learn data analysis techniques for business.";
        category = "Business";
        instructor = "Carla Brown";
        duration = 50;
        price = 150;
        difficulty = "Advanced";
        thumbnail = "https://example.com/business-analytics-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = false;
      },
      {
        title = "Calculus 101";
        description = "Master fundamental concepts in calculus.";
        category = "Math";
        instructor = "David Lee";
        duration = 60;
        price = 90;
        difficulty = "Beginner";
        thumbnail = "https://example.com/calculus-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = true;
      },
      {
        title = "Physics Mastery";
        description = "Deep dive into core physics concepts.";
        category = "Science";
        instructor = "Erica White";
        duration = 45;
        price = 110;
        difficulty = "Intermediate";
        thumbnail = "https://example.com/physics-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = false;
      },
      {
        title = "Learn Spanish";
        description = "Build a strong foundation in Spanish.";
        category = "Language";
        instructor = "Fernando Torres";
        duration = 35;
        price = 80;
        difficulty = "Beginner";
        thumbnail = "https://example.com/spanish-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = true;
      },
      {
        title = "Web Development Bootcamp";
        description = "Become a full stack web developer.";
        category = "Programming";
        instructor = "Grace Kim";
        duration = 70;
        price = 200;
        difficulty = "Advanced";
        thumbnail = "https://example.com/web-dev-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = false;
      },
      {
        title = "Graphic Design Essentials";
        description = "Master graphic design using modern tools.";
        category = "Design";
        instructor = "Hannah Martinez";
        duration = 25;
        price = 100;
        difficulty = "Intermediate";
        thumbnail = "https://example.com/graphic-design-thumbnail.jpg";
        enrollmentCount = 0;
        isFeatured = true;
      },
    ];

    for (course in seedCourses.values()) {
      courses.add(course.title, course);
    };

    let seedTestimonials = [
      {
        studentName = "John Doe";
        quote = "This programming course was fantastic! Highly recommend.";
        rating = 5;
        avatar = "https://example.com/john-avatar.jpg";
        courseName = "Introduction to Programming";
      },
      {
        studentName = "Emily Clark";
        quote = "The UX design course helped me land a new job!";
        rating = 4;
        avatar = "https://example.com/emily-avatar.jpg";
        courseName = "UX Design Fundamentals";
      },
      {
        studentName = "Mark Wilson";
        quote = "Great instructor and content in the business analytics course.";
        rating = 5;
        avatar = "https://example.com/mark-avatar.jpg";
        courseName = "Business Analytics";
      },
    ];

    for (testimonial in seedTestimonials.values()) {
      testimonials.add(testimonial);
    };
  };

  // Query functions
  public query func getAllCourses() : async [Course] {
    courses.values().toArray().sort();
  };

  public query func getCoursesByCategory(category : Text) : async [Course] {
    courses.values().toArray().filter(func(c) { c.category == category });
  };

  public query func getFeaturedCourses() : async [Course] {
    courses.values().toArray().filter(func(c) { c.isFeatured });
  };

  public query func getAllTestimonials() : async [Testimonial] {
    testimonials.toArray();
  };

  public query func getCategories() : async [Text] {
    ["Programming", "Design", "Business", "Math", "Science", "Language"];
  };

  public query func getCourse(title : Text) : async Course {
    getCourseInternal(title);
  };

  // Enrollment tracking
  public shared ({ caller }) func enrollInCourse(courseTitle : Text) : async () {
    let course = getCourseInternal(courseTitle);
    let updatedCourse = {
      title = course.title;
      description = course.description;
      category = course.category;
      instructor = course.instructor;
      duration = course.duration;
      price = course.price;
      difficulty = course.difficulty;
      thumbnail = course.thumbnail;
      enrollmentCount = course.enrollmentCount + 1;
      isFeatured = course.isFeatured;
    };
    courses.add(courseTitle, updatedCourse);
  };
};
