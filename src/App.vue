<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#00796B',
      },
    }"
  >
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </a-config-provider>
</template>
