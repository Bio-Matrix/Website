import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const teamMembers = [
  {
    src: "/images/team_25_26/Fingl_Paul.jpg",
    alt: "Paul Fingl",
    name: "Paul Fingl",
    project: "Rare Diseases",
    studyProgram: "B. Sc. Bioinformatics",
    roleTag: "Co-Director"
  },
    {
    src: "/images/team_25_26/Mathis_Fabian.jpg",
    alt: "Fabian Mathis",
    name: "Fabian Mathis",
    project: "Rare Diseases",
    studyProgram: "M. Sc. Bioinformatics",
    roleTag: "Co-Director"
  },
  {
    src: "/images/team_25_26/Kuhn_Julia.jpg",
    alt: "Julia Kuhn",
    name: "Julia Kuhn",
    project: "Rare Diseases",
    studyProgram: "M.Sc. Bioinformatics"
  },
  {
    src: "/images/team_25_26/Hermann_Billy.jpg",
    alt: "Billy Hermann",
    name: "Billy Hermann",
    project: "Rare Diseases",
    studyProgram: "M.Sc. Mathematics",
  },
  {
    src: "/images/team_25_26/Klemm_Fabian.jpg",
    alt: "Fabian Klemm",
    name: "Fabian Klemm",
    project: "Rare Diseases",
    studyProgram: "M.Sc. Mathematics",
  },
  {
    src: "/images/team_25_26/Gordin_Maximilian.jpg",
    alt: "Maximilian Gordin",
    name: "Maximilian Gordin",
    project: "Rare Diseases",
    studyProgram: "M.Sc. Mathematics in Data Science",
  },
  {
    src: "/images/team_25_26/Fahmy_Mariam.JPG",
    alt: "Mariam Fahmy",
    name: "Mariam Fahmy",
    project: "Rare Diseases",
    studyProgram: "M.Sc.",
  },
  {
    src: "/images/team_25_26/Hintz_Leo.jpg",
    alt: "Leo Hintz",
    name: "Leo Hintz",
    project: "RNA Folding",
    studyProgram: "B.Sc. Computer Science",
    roleTag: "Team Lead"
  },
  {
    src: "/images/team_25_26/Morin_Simon.jpg",
    alt: "Simon Morin",
    name: "Simon Morin",
    project: "RNA Folding",
    studyProgram: "B.Sc. Computer Science",
  },
    {
    src: "/images/team_25_26/Tardini_Marco.jpeg",
    alt: "Marco Tardini",
    name: "Marco Tardini",
    project: "Project Management & Operations",
    studyProgram: "M.Sc.",
  },


]