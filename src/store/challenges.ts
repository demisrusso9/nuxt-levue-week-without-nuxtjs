import { reactive } from 'vue'
import { Challenges, Cookie } from '../types/challengesType'
import allChallenges from '@/assets/challenges/data.json'

const user = reactive<Challenges>({
  level: 0,
  xp: {
    current: 0,
    start: 0,
    end: 64
  },
  completedChallenges: 0,
  currentChallengeIndex: -1,
  isLevelUpModalOpen: false,
  allChallenges
})

const setCurrentChallengeIndex = (index: number) => {
  user.currentChallengeIndex = index
}

const setIsLevelUpModalOpen = (flag: boolean) => {
  user.isLevelUpModalOpen = flag
}

const setCompleteChallenge = (xpAmount: number) => {
  const remainingXp = user.xp.current + xpAmount - user.xp.end
  const experienceToNextLevel = Math.pow(user.level + 1 * 4, 2)
  const shouldLevelUp = user.xp.current + xpAmount >= user.xp.end

  user.completedChallenges++

  if (shouldLevelUp) {
    user.level++

    user.xp.current = remainingXp
    user.xp.start = 0
    user.xp.end = experienceToNextLevel
    user.isLevelUpModalOpen = true
    return
  }

  user.xp.current += xpAmount
}

const currentChallenge = () => {
  typeof user.allChallenges === 'number' ? user.allChallenges[user.currentChallengeIndex] : null
}

const challengesLength = () => user.allChallenges.length

const currentXpPercentage = () => {
  const percentage = (user.xp.current / user.xp.end) * 100
  return Number(percentage.toFixed(2))
}

const saveCookieData = (cookie: Cookie) => {
  user.level = cookie.level
  user.xp = cookie.xp
  user.completedChallenges = cookie.completedChallenges
}

export {
  user,
  setCurrentChallengeIndex,
  setIsLevelUpModalOpen,
  setCompleteChallenge,
  currentChallenge,
  challengesLength,
  currentXpPercentage,
  saveCookieData
}
