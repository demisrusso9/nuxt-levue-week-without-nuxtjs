<script lang="ts" setup>
  import { onMounted } from 'vue'
  import Profile from './components/Profile.vue'
  import CompletedChallenges from './components/CompletedChallenges.vue'
  import Countdown from './components/Countdown.vue'
  import ExperienceBar from './components/ExperienceBar.vue'

  import { countdown, setHasCompleted, setIsActive } from '@/store/countdown'
  import { playAudio, sendNotifications } from '@/utils/index'

  const setCountdownState = (flag: boolean) => {
    setIsActive(flag)
    setHasCompleted(false)
  }

  const getNewChallenge = () => {
    setHasCompleted(true)

    if (Notification?.permission === 'granted') {
      playAudio('../public/notification.mp3')
      sendNotifications('New Challenge!', {
        body: 'A new challenge has stated! Go complete it',
        icon: '../public/favicon.png'
      })
    }
  }

  onMounted(() => {
    'Notification' in window && Notification.requestPermission()
  })
</script>

<template>
  <div class="flex flex-col px-5 py-8 min-h-screen max-w-5xl mx-auto md:py-10 teste">
    <ExperienceBar />

    <section class="flex flex-col lg:flex-row flex-1 lg:flex-none lg:mt-16 sm:gap-x-10 md:gap-x-20">
      <div class="flex flex-col w-full lg:w-1/2">
        <Profile />
        <CompletedChallenges />
        <Countdown @completed="getNewChallenge" />

        <button v-if="countdown.hasCompleted" class="button completed" disabled>
          Cycle completed
        </button>

        <button
          v-else-if="countdown.isActive"
          class="button abandon"
          @click="setCountdownState(false)"
        >
          Abandon cycle
        </button>

        <button v-else class="button start" @click="setCountdownState(true)">Start cycle</button>
      </div>
    </section>
    <!-- <Countdown /> -->
  </div>
</template>
