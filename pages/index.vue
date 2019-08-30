<template>
  <div class="cover">
    <video
      autoplay="autoplay"
      preload="auto"
      playsinline
      muted="muted"
      loop="loop"
      poster
      class=""
    >
      <source :src="getRandomVideo()" type="video/mp4" />
    </video>
    <Menu class="bottom" />
  </div>
</template>

<script>
import Menu from '~/components/Menu.vue'
export default {
  components: {
    Menu
  },
  data() {
    return {
      videos: [
        'Axis-111-_3_Splurge-Qoma-Aleph-2_444.mp4',
        'Axis-111 _2_Splurge-Qoma-Aleph-2_444.mp4',
        'Qoma-Aleph_W2_onsdag_sett6.mp4'
      ]
    }
  },
  computed: {
    videoURL() {
      const i = Math.floor(Math.random() * 3)
      return `video/${this.videos[i]}`
    }
  },
  methods: {
    getRandomVideo() {
      const i = Math.floor(Math.random() * 3)
      console.info('i', i)
      return `video/${this.videos[i]}`
    }
  }
}
</script>

<style>
.cover > video {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  z-index: -1;
  overflow: hidden;
}
/* 
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
} */

/* .circle:hover {
  opacity: 1;
} */
/* 
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
} */
</style>
