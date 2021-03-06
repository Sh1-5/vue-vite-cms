<script setup lang="ts">
import { useStore } from 'vuex'
import { StoreType } from '@/store/types'
import { computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { pathMapMenu } from '@/utils/map-bread-crumb'

// 显示菜单
const store = useStore<StoreType>()
const userMenus = computed(() => store.state.login.userMenus)

// 折叠/展开菜单
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

// 路由跳转
const router = useRouter()
const emits = defineEmits(['itemClick'])
const handleMenuItemClick = (item: any) => {
  router.push(item.url)
  store.commit('addToAliveMenus', pathMapMenu(userMenus.value, item.url))
  emits('itemClick', item.url)
}

// 登录或刷新
const route = useRoute()
const activeIndex = computed(() =>
  String(pathMapMenu(userMenus.value, route.path).id)
)
onMounted(() => {
  store.commit('addToAliveMenus', pathMapMenu(userMenus.value, route.path))
})
</script>

<template>
  <div class="nav-menu">
    <div class="logo">
      <img class="img" src="@/assets/img/logo.svg" alt="logo" />
      <span class="title">vue-vite-cms</span>
    </div>
    <el-menu
      :collapse-transition="false"
      background-color="#001529"
      text-color="#b7bdc3"
      :default-active="activeIndex"
      :collapse="isCollapse"
    >
      <template v-for="item in userMenus">
        <template v-if="item.type === 1">
          <!-- 二级菜单 -->
          <el-sub-menu :index="item.id + ''">
            <!-- 遍历里面的item -->
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="item.icon.slice(7)"></component>
              </el-icon>
              <span class="name">{{ item.name }}</span>
            </template>
            <template v-for="subitem in item.children">
              <el-menu-item
                :index="subitem.id + ''"
                @click="handleMenuItemClick(subitem)"
              >
                <template #title>
                  <el-icon v-if="subitem.icon">
                    <component :is="subitem.icon.slice(7)"></component>
                  </el-icon>
                  <span class="subitem-name">{{ subitem.name }}</span>
                </template>
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <template v-else-if="item.type === 2">
          <el-menu-item
            :index="item.id + ''"
            @click="handleMenuItemClick(item)"
          >
            <template #title>
              <el-icon v-if="item.icon">
                <component :is="item.icon.slice(7)"></component>
              </el-icon>
              <span class="name">{{ item.name }}</span>
            </template>
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<style scoped lang="scss">
.nav-menu {
  height: 100%;
  user-select: none;

  .logo {
    height: 28px;
    padding: 12px 10px 8px 10px;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    .img {
      height: 100%;
      margin: 0 30px 0 8px;
    }

    .title {
      color: #fff;
      font-size: 16px;
      font-weight: 700;
    }
  }

  .el-menu {
    border-right: none;

    .el-menu-item {
      background-color: #0c2135;
    }

    .el-menu-item.is-active {
      background-color: #0a60bd;
      color: #fff;
    }

    .name {
      margin-left: 27px;
    }

    .subitem-name {
      margin-left: 36px;
    }
  }
}
</style>
