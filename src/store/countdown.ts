import { ref, reactive } from 'vue'
import { Countdown } from '../types/countdownType'

const minutes = ref(0.05)

const countdown = reactive<Countdown>({
  time: minutes.value * 60,
  isActive: false,
  hasCompleted: false
})

const getSeconds = () => countdown.time % 60
const getMinutes = () => Math.floor(countdown.time / 60)

const setTime = (time: number) => (countdown.time = time)
const resetTime = () => (countdown.time = minutes.value * 60)
const setIsActive = (isActive: boolean) => (countdown.isActive = isActive)
const setHasCompleted = (completed: boolean) => (countdown.hasCompleted = completed)

export { countdown, getSeconds, getMinutes, setTime, resetTime, setIsActive, setHasCompleted }
