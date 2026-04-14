// API Configuration
export const API_BASE_URL = process.env.REACT_APP_API_URL || "https://www.yuktisoftware.com";
export const API_ENDPOINT = `${API_BASE_URL}/api/workshops/register`;

// Available workshops
export const WORKSHOPS = [
  { id: 1, name: "The Art Of Multithreading", duration: "4 hours", level: "Beginner" },
  { id: 2, name: "Python FullStack Development", duration: "6 weeks", level: "Beginner" },
  { id: 3, name: "MERN Stack Development", duration: "8 weeks", level: "Intermediate" },
  { id: 4, name: "Data Analytics", duration: "5 weeks", level: "Beginner" },
  { id: 5, name: "Data Science", duration: "8 weeks", level: "Intermediate" },
  { id: 6, name: "Advanced Java", duration: "4 weeks", level: "Advanced" },
  { id: 7, name: "ReactJS Mastery", duration: "6 weeks", level: "Intermediate" },
  { id: 8, name: "AI/ML Fundamentals", duration: "7 weeks", level: "Intermediate" },
  { id: 9, name: "Cloud Computing with AWS", duration: "6 weeks", level: "Advanced" },
  { id: 10, name: "DevOps & Docker", duration: "5 weeks", level: "Advanced" },
  { id: 11, name: "Java FullStack Development", duration: "6 weeks", level: "Beginner" },
];

// Initial form state
export const INITIAL_FORM_DATA = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  workshopId: "",
  experience: "",
  semester: "",
  branch: "",
  comments: "",
};

// Form validation messages
export const VALIDATION_MESSAGES = {
  firstName: "Please enter your first name.",
  lastName: "Please enter your last name.",
  email: "Please enter a valid email address.",
  phoneNumber: "Please enter a valid 10-digit phone number.",
  workshopId: "Please select a workshop.",
  experience: "Please select your experience level.",
  semester: "Please select your semester.",
  branch: "Please select your branch.",
};

// Semester options
export const SEMESTER_OPTIONS = [
  { value: "1", label: "1st Semester" },
  { value: "2", label: "2nd Semester" },
  { value: "3", label: "3rd Semester" },
  { value: "4", label: "4th Semester" },
  { value: "5", label: "5th Semester" },
  { value: "6", label: "6th Semester" },
  { value: "7", label: "7th Semester" },
  { value: "8", label: "8th Semester" },
  { value: "other", label: "Other" },
];

// Branch options
export const BRANCH_OPTIONS = [
  { value: "cse", label: "Computer Science & Engineering (CSE)" },
  { value: "ece", label: "Electronics & Communication (ECE)" },
  { value: "it", label: "Information Technology (IT)" },
  { value: "me", label: "Mechanical Engineering (ME)" },
  { value: "ce", label: "Civil Engineering (CE)" },
  { value: "ee", label: "Electrical Engineering (EE)" },
  { value: "other", label: "Other" },
];

// Experience options
export const EXPERIENCE_OPTIONS = [
  { value: "beginner", label: "Beginner" },
  { value: "intermediate", label: "Intermediate" },
  { value: "advanced", label: "Advanced" },
];

// Benefits list
export const BENEFITS = [
  "Industry experts as instructors",
  "Hands-on practical training",
  "Certificate upon completion",
  "Career guidance & mentorship",
  "Flexible scheduling",
];
