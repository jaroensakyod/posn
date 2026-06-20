import { Lesson, LessonSection, ContentBlock } from './lessonTypes'
import { atomicStructure } from './lessons/atomic-structure'
import { chemicalBonding } from './lessons/chemical-bonding'
import { stoichiometry } from './lessons/stoichiometry'
import { statesOfMatter } from './lessons/states-of-matter'
import { solutions } from './lessons/solutions'
import { thermochemistry } from './lessons/thermochemistry'
import { kinetics } from './lessons/kinetics'
import { equilibrium } from './lessons/equilibrium'
import { acidBase } from './lessons/acid-base'
import { electrochemistry } from './lessons/electrochemistry'
import { organicChemistry } from './lessons/organic-chemistry'
import { analyticalChemistry } from './lessons/analytical-chemistry'

export type { Lesson, LessonSection, ContentBlock }

// Barrel of all chemistry lessons, keyed by topic id. Each topic lives in its own
// file under ./lessons/ for maintainability. Order follows the syllabus.
export const chemistryLessons: Record<string, Lesson> = {
  'atomic-structure': atomicStructure,
  'chemical-bonding': chemicalBonding,
  'stoichiometry': stoichiometry,
  'states-of-matter': statesOfMatter,
  'solutions': solutions,
  'thermochemistry': thermochemistry,
  'kinetics': kinetics,
  'equilibrium': equilibrium,
  'acid-base': acidBase,
  'electrochemistry': electrochemistry,
  'organic-chemistry': organicChemistry,
  'analytical-chemistry': analyticalChemistry,
}
