<script lang="ts" setup>
  import { computed, watch } from 'vue'
  import CountdownDigits from '@/components/CountdownDigits.vue'
  import {
    getMinutes,
    getSeconds,
    countdown,
    setTime,
    resetTime,
    setHasCompleted
  } from '@/store/countdown'

  let timeout: ReturnType<typeof setTimeout>

  function runCountdown(flag: boolean) {
    if (countdown.isActive && flag) {
      timeout = setTimeout(() => {
        setTime(countdown.time - 1)
      }, 1000)
    } else {
      clearTimeout(timeout)
    }
  }

  watch(
    () => countdown.isActive,
    (newValue: boolean) => {
      runCountdown(newValue)

      if (!newValue) resetTime()
    }
  )

  watch(
    () => countdown.time,
    (newValue: number) => {
      if (newValue > 0) return runCountdown(true)
      setHasCompleted(true)
    }
  )
</script>

<template>
  <div
    class="flex justify-center items-center mt-8 lg:mt-14 text-9xl text-gray-500 font-rajdhani"
  >
    <CountdownDigits :digits="getMinutes()" />
    <span class="bg-white px-2">:</span>
    <CountdownDigits :digits="getSeconds()" />
  </div>
</template>
