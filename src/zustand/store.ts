import { create } from 'zustand'
import { UserDataType } from '../App'

type State = UserDataType
type Action = {
  registerUserStart: () => void
  registerUserEnd: (user: UserDataType['user']) => void
}

const useStore = create<State & Action>((set) => ({
  user: null,
  loading: false,
  registerUserStart: () => set(() => ({ user: null, loading: true })),
  registerUserEnd: (_user) => set(() => ({ user: _user, loading: false })),
}))

export { useStore }
