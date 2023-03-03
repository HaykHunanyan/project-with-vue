<template>
  <CCard>
    <CardHeader />
    <CCollapse :visible="cardVisible">
      <CardBody />
    </CCollapse>
  </CCard>
</template>

<style lang="scss">
@import './AppCardWrapper.scss';
</style>
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import CardHeader from './CardHeader'
import CardBody from './CardBody'

export default {
  name: 'AppCard',
  components: {
    CardHeader,
    CardBody,
  },
  setup() {
    const store = useStore()
    return {
      cardVisible: computed(() => store.state.cardVisible),
    }
  },
}
</script>
