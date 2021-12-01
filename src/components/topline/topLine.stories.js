import topLine from './topline.vue'

export default {
  title: 'topLine',
  components: { topLine }
}

export const defaultView = () => ({
  components: {
    topLine
  },
  template: `
    <topLine>
        <template #headline>
            <h1>Some text</h1>
        </template>
        <template #content>
            <h1>Some text1</h1>
        </template>
    </topLine>
  `
})
defaultView.story = {
  name: 'Шапка'
}
