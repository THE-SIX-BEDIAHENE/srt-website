/**
 * @typedef {Object} Job
 * @property {string} id
 * @property {string} title
 * @property {string} department
 * @property {'internship' | 'apprenticeship' | 'full-time'} type
 * @property {string} location
 * @property {string} schedule
 * @property {string} description
 * @property {string[]} qualifications
 * @property {string} postedDate
 */

// Example usage:
const job = {
  id: "123",
  title: "Software Developer Intern",
  department: "Engineering",
  type: "internship",
  location: "Remote",
  schedule: "Full-Time",
  description: "Work on frontend and backend tasks.",
  qualifications: ["JavaScript", "Teamwork"],
  postedDate: "2025-05-20"
};
