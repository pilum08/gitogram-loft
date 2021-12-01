import { feeds } from '../pages/feeds/index'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { profile } from '../pages/profile'
import { followings } from '../pages/followings'
export default [{
  path: '/',
  component: feeds,
  name: 'feeds'
},
{
  path: '/stories',
  component: stories,
  name: 'stories'
},
{
  path: '/auth',
  component: auth,
  name: 'auth'
},
{
  path: '/profile',
  component: profile,
  name: 'profile'
},
{
  path: '/followings',
  component: followings,
  name: 'followings'
}]
