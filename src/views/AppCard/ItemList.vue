<template>
  <div class="items_list">
    <div v-for="item in itemList" :key="item.id" class="item">
      <text> {{ item.name }}</text>
      <div>
        <div class="status_text">
          <CIcon
            :icon="item.status.icon"
            :style="{ color: item.status.color }"
            size="xl"
          />
          <div :style="{ color: item.status.color }">
            {{ item.status.text }}
          </div>
        </div>
        <CDropdown>
          <CDropdownToggle :disabled="item.status.text == bookNow.text">
            <CIcon :icon="cilOptions" size="sm"
          /></CDropdownToggle>
          <CDropdownMenu>
            <CDropdownItem
              color="danger"
              @click="
                $store.commit('deleteItem', { id: item.id, month: item.date })
              "
              >Delete</CDropdownItem
            >
          </CDropdownMenu>
        </CDropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { CIcon } from '@coreui/icons-vue'
import { cilOptions } from '@coreui/icons'
import { STATUS } from '../../constants/status'
const { bookNow } = STATUS
export default {
  name: 'ItemList',
  components: { CIcon },
  setup() {
    const store = useStore()
    return {
      cilOptions,
      itemList: computed(() => store.state.itemList),
      bookNow,
    }
  },
}
</script>
