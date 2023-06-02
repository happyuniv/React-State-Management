import { useAppDispatch } from './hook'
import { registerUserEnd, registerUserStart } from './userSlice'

function Register() {
  const dispatch = useAppDispatch()

  async function handleRegister() {
    dispatch(registerUserStart())
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    dispatch(registerUserEnd(data.results[0]))
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
