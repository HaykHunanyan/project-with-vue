<template>
  <CCardHeader>
    <div>
      <h4>Your Progress</h4>
      <h6>{{ completeCount }} steps to complete</h6>
    </div>
    <div @click="$store.commit('toggleCard')">hide</div>
  </CCardHeader>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { STATUS } from '../../constants/status'

export default {
  name: 'CardHeader',
  setup() {
    const store = useStore()
    return {
      cardVisible: computed(() => store.state.cardVisible),
      completeCount: computed(
        () =>
          store.state.itemList.filter(
            (el) => el.status.text === STATUS.booked.text,
          )?.length,
      ),
    }
  },
}
</script>
