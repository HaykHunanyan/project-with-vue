<template>
  <div class="month_list">
    <div v-for="item in monthList" :key="item.id">
      {{ item.name }}
      <div
        v-for="(color, index) in item.status"
        :key="index"
        class="divider_count"
        :style="{ 'background-color': color }"
      ></div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'MonthList',
  setup() {
    const store = useStore()
    return {
      monthList: computed(() => store.state.monthList),
    }
  },
}
</script>
