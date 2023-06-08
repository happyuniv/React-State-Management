import { atom } from 'recoil'

const userState = atom({
  key: 'User',
  default: {
    user: null,
    loading: false,
  },
})

export { userState }
