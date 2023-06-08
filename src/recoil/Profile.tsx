import { useRecoilValue } from 'recoil'
import { userState } from './recoil_state'
import { UserDataType } from '../App'

function Profile() {
  const userData: UserDataType = useRecoilValue(userState)
  const { user, loading } = userData
  return (
    <>
      <div className='profile'>
        <h3>Profile Component</h3>
        <div className='profile-img'>
          {loading && <div>Loading...</div>}
          {!loading && !user && (
            <img src='src/assets/empty_user.png' alt='empty user' />
          )}
          {!loading && user && (
            <img src={`${user?.picture.large}`} alt='empty user' />
          )}
        </div>
        {user && (
          <div>
            <div>gender: {user.gender}</div>
            <div>
              name: {user.name.first} {user.name.last}
            </div>
            <div>email: {user.email}</div>
          </div>
        )}
      </div>
    </>
  )
}

export default Profile
