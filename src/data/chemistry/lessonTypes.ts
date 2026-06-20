// Shared lesson content types. Kept in their own module so per-topic lesson files
// can import them without creating an import cycle through the lessons barrel.
export interface ContentBlock {
  type: 'text' | 'math' | 'math-block' | 'example' | 'note' | 'formula-box' | 'heading' | 'list'
  content: string
  items?: string[]
  label?: string
}

export interface LessonSection {
  title: string
  blocks: ContentBlock[]
}

export interface Lesson {
  topicId: string
  sections: LessonSection[]
}
