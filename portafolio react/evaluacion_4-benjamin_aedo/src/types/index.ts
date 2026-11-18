
export type Theme = "light" | "dark";


export interface Profile {
  name: string;
  career: string;
  university: string;
  academicLevel: string;
  description: string;
  introduction: string;
  image: string;
  imageAlt: string;
}


export interface Skill {
  id: number;
  name: string;
}


export interface Project {
  id: number;
  number: string;
  category: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: string[];
}


export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}


export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}


export interface ApiState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}
