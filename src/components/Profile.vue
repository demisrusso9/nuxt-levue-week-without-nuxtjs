<script lang="ts" setup>
  import { user } from '@/store/challenges'
</script>

<template>
  <div class="flex items-center">
    <img
      src="https://github.com/demisrusso9.png"
      alt="Github Profile Photo"
      class="mr-6 w-20 h-20 rounded-full"
    />

    <div class="flex flex-col w-full">
      <strong class="text-black text-2xl">Demis Russo</strong>

      <p class="flex items-center">
        <img src="../assets/icons/level.svg" alt="Level" class="mr-2" />
        <span class="text-base">Level {{ user.level }}</span>
      </p>
    </div>
  </div>
</template>
