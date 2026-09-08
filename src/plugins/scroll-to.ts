import VueScrollTo from 'vue-scrollto'

export default {
  instance: VueScrollTo,
  options: {
    container: 'body',
    duration: 1250,
    easing: 'ease-in-out',
    cancelable: true,
  },
}
