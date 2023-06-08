import { useState } from 'react'
import './App.css'

export type UserDataType = {
  user: {
    gender: string
    name: {
      first: string
      last: string
    }
    email: string
    picture: {
      large: string
    }
  } | null
  loading: boolean
}

/* base state */
// import Register from './base/Register'
// import Profile from './base/Profile'

// export default function App() {
//   const [userData, setUserData] = useState<UserDataType>({
//     user: null,
//     loading: false
//   })

//   return (
//     <div className="App">
//       <Register setUserData={setUserData} />
//       <Profile userData={userData} />
//     </div>
//   )
// }

/* global state */
/* ----------------- context ----------------- */
// import Register from './context/Register.tsx'
// import Profile from './context/Profile.tsx'
// import { UserContext } from './context/UserContext.ts'

// export default function App() {
//   const [userData, setUserData] = useState<UserDataType>({
//     user: null,
//     loading: false,
//   })

//   return (
//     <div className='App'>
//       <UserContext.Provider value={{ userData, setUserData }}>
//         <Register />
//         <Profile />
//       </UserContext.Provider>
//     </div>
//   )
// }
/* ----------------- redux ----------------- */
// import { Provider } from 'react-redux'
// import { store } from './redux/store'
// import Register from './redux/Register.tsx'
// import Profile from './redux/Profile.tsx'

// export default function App() {
//   return (
//     <Provider store={store}>
//       <div className='App'>
//         <Register />
//         <Profile />
//       </div>
//     </Provider>
//   )
// }
/* ----------------- recoil ----------------- */
// import { RecoilRoot } from 'recoil'
// import Register from './recoil/Register.tsx'
// import Profile from './recoil/Profile.tsx'

// export default function App() {
//   return (
//     <RecoilRoot>
//       <div className='App'>
//         <Register />
//         <Profile />
//       </div>
//     </RecoilRoot>
//   )
// }
/* ----------------- zustand ----------------- */
// import Register from './zustand/Register.tsx'
// import Profile from './zustand/Profile.tsx'

// export default function App() {
//   return (
//     <div className='App'>
//       <Register />
//       <Profile />
//     </div>
//   )
// }
