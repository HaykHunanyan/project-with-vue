<template>
  <CCardBody>
    <div class="card_body_circle">
      <AppCyrcle />
      <CCardText> Completed appointments </CCardText>
    </div>
    <div>
      <MonthList />
      <ItemList />
    </div>
  </CCardBody>
</template>

<script>
import AppCyrcle from '../AppCyrcle/AppCyrcle'
import MonthList from './MonthList'
import ItemList from './ItemList'
export default {
  name: 'CardBody',
  components: { AppCyrcle, MonthList, ItemList },
}
</script>
