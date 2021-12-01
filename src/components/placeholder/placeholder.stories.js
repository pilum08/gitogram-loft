import placeholder from './placeholder.vue'

export default {
  title: 'placeholder',
  component: placeholder
}

const template = () => ({
  components: { placeholder },
  template: '<placeholder />'
})

export const Default = template.bind({})
Default.story = {
  name: 'Без параграфов'
}

const templateWithParagraph = () => ({
  components: { placeholder },
  template: '<placeholder :paragraphs=2 />'
})

export const DefaultParagraph = templateWithParagraph.bind({})
DefaultParagraph.story = {
  name: 'С параграфами'
}
