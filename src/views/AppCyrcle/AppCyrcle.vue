<template>
  <div class="cyrcle">
    <div class="outer">
      <div class="inner">
        <div id="number">{{ percent }}%</div>
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="160px"
      height="160px"
    >
      <defs>
        <linearGradient id="GradientColor">
          <stop offset="0%" stop-color="#60b058" />
          <stop offset="60%" stop-color="#b0d4e2" />
        </linearGradient>
      </defs>
      <circle cx="80" cy="80" r="70" stroke-linecap="round" id="circle" />
    </svg>
  </div>
</template>

<style lang="scss">
@import './CyrcleWrapper.scss';
circle {
  stroke-dashoffset: v-bind(strokeDashoffset);
}
</style>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'AppCyrcle',
  setup() {
    const store = useStore()
    return {
      percent: computed(() => store.state.percent),
      strokeDashoffset: computed(() => store.state.strokeDashoffset),
    }
  },
}
</script>
