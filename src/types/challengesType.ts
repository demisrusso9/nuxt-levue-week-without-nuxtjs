export type Challenges = {
  level: number
  xp: XP
  completedChallenges: number
  currentChallengeIndex: number
  isLevelUpModalOpen: boolean
  allChallenges: Challenge[]
}

type XP = {
  current: number
  start: number
  end: number
}

type Challenge = {
  type: string
  description: string
  amount: number
}

export type Cookie = {
  level: number
  xp: XP
  completedChallenges: number
}
