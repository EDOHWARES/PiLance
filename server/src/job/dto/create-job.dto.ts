export class CreateJobDto {
  jobTitle: string;
  category: string;
  projectDescription: string;
  requirements?: string;
  requiredSkills: string[];
  budgetType: string;
  budget: number;
  projectDuration: string;
  experienceLevel: string;
  projectFiles?: string[];
  screeningQuestions?: string[];
}