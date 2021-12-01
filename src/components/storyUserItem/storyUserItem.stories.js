import storyUserItem from './storyUserItem.vue'

export default {
  title: 'storyUserItem',
  components: { storyUserItem },
  argTypes: {
    onPress: {
      action: 'onPress',
      description: 'after press'
    }
  }
}

export const defaultView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <storyUserItem 
      avatar="https://picsum.photos/100/100"
      username="some nickname"
    />
  `
})
defaultView.story = {
  name: 'Стори'
}
