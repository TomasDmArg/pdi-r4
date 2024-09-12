/**
 * Represents a job experience in the portfolio
 */
export interface Job {
  title: string
  company: string
  period: string
  responsibilities: string[]
}

/**
 * Represents a set of skills in the portfolio
 */
export interface SkillSet {
  category: string
  skills: string[]
}
