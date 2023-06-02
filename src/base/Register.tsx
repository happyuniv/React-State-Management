import { UserDataType } from '../App'

type props = {
  setUserData: React.Dispatch<React.SetStateAction<UserDataType>>
}

function Register({ setUserData }: props) {
  async function handleRegister() {
    setUserData({ user: null, loading: true })
    const res = await fetch('https://randomuser.me/api/')
    const data = await res.json()
    setUserData({ user: data.results[0], loading: false })
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
