<script lang="ts" setup>
  import { splitValue } from '@/utils'
  import { defineProps, ref, reactive, computed } from 'vue'

  const props = defineProps({
    digits: {
      type: Number,
      required: true
    }
  })

  const splittedDigits = computed(() => splitValue(props.digits))
</script>

<template>
  <p class="w-1/2 flex gap-x-1">
    <span
      v-for="(digit, idx) in splittedDigits"
      :key="idx"
      class="flex items-center justify-center py-3 w-1/2 bg-white rounded-md"
      >{{ digit }}</span
    >
  </p>
</template>
