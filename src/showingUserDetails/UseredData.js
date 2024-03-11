import './userDataStyle.css'

const DataOfUser = props => {
  const {eachElement, deletingUserData, showThePassword} = props
  const {website, userName, password, id, colors} = eachElement
  const lengthOfWeb = website.length
  console.log(colors)
  const deleteUser = () => {
    deletingUserData(id)
  }
  return (
    <li className="listValues">
      <div className="EachUserData">
        <div>
          <p className={`rounding ${colors}`}>
            {lengthOfWeb > 1 && website[0].toUpperCase()}
          </p>
        </div>

        <div>
          <p>{website}</p>
          <p>{userName}</p>
          <p>
            {showThePassword ? (
              password
            ) : (
              <img
                className="PasswordImage"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
                alt="stars"
              />
            )}
          </p>
        </div>

        <button
          onClick={deleteUser}
          data-testid="delete"
          type="button"
          className="DeleteButton"
        >
          <img
            className="deleteImage"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default DataOfUser
