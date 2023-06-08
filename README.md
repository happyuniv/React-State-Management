# React-State-Management
Simple profile state management example that compares base state with context, redux, recoil, zustand (feat. random user api)
<br/>
<br/>

#### All(base/context/redux/recoil/zustand) implement same feature:
<br/>
<br/>

![profile](https://github.com/happyuniv/React-State-Management/assets/97126757/2b86677e-65df-4e08-babc-54c2b1ac9b17)

<br/>
<br/>

### Install dependecies & Run on localhost
```
npm i
npm run dev
```

#### you can comment/uncomment to excute one of the state tools
```
/* ----------------- recoil ----------------- */
import { RecoilRoot } from 'recoil'
import Register from './recoil/Register.tsx'
import Profile from './recoil/Profile.tsx'

export default function App() {
  return (
    <RecoilRoot>
      <div className='App'>
        <Register />
        <Profile />
      </div>
    </RecoilRoot>
  )
}
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
```
