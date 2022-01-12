<script lang="ts" setup>
  import { user } from '@/store/challenges'
</script>

<template>
  <div
    class="
      flex
      justify-between
      items-center
      pb-5
      border-b-2 border-gray-100
      mt-8
      lg:mt-14
      font-medium
    "
  >
    <p class="text-lg">Completed Challenges</p>
    <p class="text-2xl">{{ user.completedChallenges }}</p>
  </div>
</template>
