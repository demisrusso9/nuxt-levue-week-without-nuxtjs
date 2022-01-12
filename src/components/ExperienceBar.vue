<script lang="ts" setup>
  import { user, currentXpPercentage } from '@/store/challenges'
</script>

<template>
  <header class="pb-10 flex items-center">
    <p class="text-sm">{{ user.xp.start }} xp</p>

    <div class="relative mx-4 lg:mx-6 flex-1 bg-gray-50 h-1 rounded-md">
      <div class="absolute bg-green-400 h-2" :style="{ width: `${currentXpPercentage()}%` }">
        <p class="absolute text-sm -right-4 top-2 w-max">
          {{ `${user.xp.current}` }} xp {{ currentXpPercentage() }} %
        </p>
      </div>
    </div>

    <p class="text-sm">{{ user.xp.end }} xp</p>
  </header>
</template>
