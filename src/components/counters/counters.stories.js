import counters from './counters.vue'

export default {
  title: 'counters',
  components: { counters }
}

export const defaultView = () => ({
  components: {
    counters
  },
  template: `
    <counters 
      stars=1
    forks=1
    />
  `
})
defaultView.story = {
  name: 'Звезды и форки'
}
