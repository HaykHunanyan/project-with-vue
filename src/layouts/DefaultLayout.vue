<template>
  <CContainer>
    <AppHeader />
    <div>
      <router-view />
    </div>
  </CContainer>
</template>
<script>
import AppHeader from '@/components/AppHeader/AppHeader'

export default {
  name: 'Default Layout',
  components: {
    AppHeader,
  },
}
</script>
