<template>
  <div class="bg-earth min-h-screen flex flex-col items-center justify-center">
    <div class="mb-12">
      <nuxt-link to="/axis" class="circle">
        O
      </nuxt-link>
    </div>

    <Menu />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Menu
  }
}
</script>

<style>
@keyframes pulse {
  0% {
    transform: scale(0.9);
    opacity: 0.6;
  }
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.9);
    opacity: 0.6;
  }
}

.circle {
  position: relative;
  display: block;
  width: 200px;
  height: 215px;
  border-color: #fff;
  border-width: 13px;
  border-radius: 100%;
  @apply text-earth;
  opacity: 0.5;
  z-index: 2;
  animation: pulse 7s infinite ease-in-out;
  /* transition: opacity 500ms; */
}

/* .circle:hover {
  opacity: 1;
} */

.circle::before {
  content: '<';
  display: block;
  z-index: -1;
  font-weight: 100;
  font-size: 25rem;
  position: absolute;
  top: -8.5rem;
  left: -8rem;
  line-height: 1;
  @apply text-red-darker;
}
.circle::after {
  content: '>';
  display: block;
  z-index: -1;
  font-weight: 100;
  font-size: 25rem;
  position: absolute;
  top: -8.5rem;
  left: 4rem;
  line-height: 1;
  @apply text-black;
}
</style>
