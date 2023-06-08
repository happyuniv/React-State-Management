import { useStore } from './store'

function Register() {
  const [registerUserStart, registerUserEnd] = useStore((state) => [
    state.registerUserStart,
    state.registerUserEnd,
  ])

  async function handleRegister() {
    registerUserStart()
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    registerUserEnd(data.results[0])
  }

  return (
    <>
      <div className='register'>
        <h3>Register Compoent</h3>
        <div className='profile-img'>
          <img src='src/assets/register_user.png' alt='register user' />
        </div>
        <button onClick={handleRegister}>Register User</button>
      </div>
    </>
  )
}

export default Register
