import { createContext } from 'react'
import { UserDataType } from '../App'

type UserContextType = {
  userData: UserDataType
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>
}

const UserContext = createContext<UserContextType>({
  userData: {
    user: null,
    loading: false,
  },
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setUserData: () => {},
})

export { UserContext }
