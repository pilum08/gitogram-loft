import button from './button.vue'

export default {
  title: 'button',
  component: { button },
  argTypes: {
    hoverText: {
      control: { type: 'text' }
    },
    onPress: {
      action: 'onPress',
      description: 'after press'
    }
  }
}

const template = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" theme="gray" @onClick="args.onPress">Following</x-button>
  `
})

export const DefaultView = template.bind({})

DefaultView.story = {
  name: 'Серая тема'
}

DefaultView.args = {
  hoverText: 'Unfollow'
}

const templateGreen = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" theme="green" @onClick="args.onPress">Following</x-button>
  `
})

export const ViewGreen = templateGreen.bind({})

ViewGreen.story = {
  name: 'Зеленая тема'
}

ViewGreen.args = {
  hoverText: 'Unfollow'
}

const templateGreenLoad = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" theme="green" loading >Following</x-button>
  `
})

export const ViewGreenLoad = templateGreenLoad.bind({})

ViewGreenLoad.story = {
  name: 'Зеленая тема + спиннер'
}

ViewGreenLoad.args = {
  hoverText: 'Unfollow'
}

const templateGreenSmall = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" theme="green" isSmall @onClick="args.onPress">Following</x-button>
  `
})

export const ViewGreenLoadSmall = templateGreenSmall.bind({})

ViewGreenLoadSmall.story = {
  name: 'Зеленая тема, маленькая'
}

ViewGreenLoadSmall.args = {
  hoverText: 'Unfollow'
}

const templateDisabled = (args) => ({
  components: { xButton: button },
  data () {
    return { args }
  },
  template: `
    <x-button v-bind="args" theme="gray" isSmall >Following</x-button>
  `
})

export const ViewDisabled = templateDisabled.bind({})

ViewDisabled.story = {
  name: 'Неактивна'
}

ViewDisabled.args = {
  hoverText: 'Unfollow'
}
