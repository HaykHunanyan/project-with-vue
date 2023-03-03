<template>
  <div class="header_title">2021 Wellness Plan</div>
  <CContainer fluid>
    <AppBreadcrumb />
  </CContainer>
</template>
<style lang="scss">
@import './AppHeaderWrapper.scss';
</style>
<script>
import AppBreadcrumb from '../AppBreadcrumb.vue'
export default {
  name: 'AppHeader',
  components: {
    AppBreadcrumb,
  },
}
</script>
