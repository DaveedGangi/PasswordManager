import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './App.css'

import DataOfUser from './showingUserDetails/UseredData'

// const App = () => { }

const colorBackground = ['green', 'pink', 'yellow', 'red', 'orange']

class App extends Component {
  state = {
    count: 0,
    userList: [],
    Website: '',
    User: '',
    Password: '',
    searchField: '',
    tapToShowPassword: false,
  }

  Add = event => {
    event.preventDefault()
    const {Website, User, Password, count} = this.state
    const newList = {
      id: uuidv4(),
      website: Website,
      userName: User,
      password: Password,
      colors:
        colorBackground[Math.ceil(Math.random() * colorBackground.length - 1)],
    }

    this.setState(prevState => ({
      userList: [...prevState.userList, newList],
      Website: '',
      User: '',
      Password: '',
      count: count + 1,
    }))
  }

  WebSiteInput = event => {
    this.setState({Website: event.target.value})
  }

  UserNameInput = event => {
    this.setState({User: event.target.value})
  }

  PasswordUserInput = event => {
    this.setState({Password: event.target.value})
  }

  DeleteEachOne = id => {
    const {userList, count} = this.state
    const eliminate = userList.filter(each => each.id !== id)
    this.setState({userList: eliminate, count: count - 1})
  }

  eachWord = event => {
    this.setState({searchField: event.target.value})
  }

  showingPassword = () => {
    const {tapToShowPassword} = this.state
    this.setState({tapToShowPassword: !tapToShowPassword})
  }

  render() {
    const {
      count,
      userList,
      Website,
      User,
      Password,
      searchField,
      tapToShowPassword,
    } = this.state
    console.log(count)
    console.log(tapToShowPassword)
    const showBelow = userList.filter(each =>
      each.website.toLowerCase().includes(searchField.toLowerCase()),
    )
    console.log(showBelow.length)
    return (
      <div className="bgForUser">
        <div>
          <img
            className="LogoTop"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png "
            alt="app logo"
          />
        </div>

        <div className="topFlexItems">
          <div className="UserCredentials">
            <form onSubmit={this.Add}>
              <h1 className="CardPara">Add New Password</h1>

              <div className="WebInputs">
                <img
                  className="WebLogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                />

                <input
                  className="InputsWebSite"
                  value={Website}
                  placeholder="Enter Website"
                  onChange={this.WebSiteInput}
                  type="text"
                />
              </div>

              <div className="UserLogoInputField">
                <img
                  className="UserLogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                />
                <input
                  className="userNameInput"
                  value={User}
                  placeholder="Enter UserName"
                  onChange={this.UserNameInput}
                  type="text"
                />
              </div>

              <div className="PasswordFields">
                <img
                  className="passwordLogo"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                />
                <input
                  className="userPasswordInputs"
                  value={Password}
                  placeholder="Enter Password"
                  onChange={this.PasswordUserInput}
                  type="password"
                />
              </div>
              <div className="buttonAdder">
                <button className="AddingButton" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="orderingZero">
            <img
              className="topRightImage"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
              srcSet="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png,  https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
              alt="password manager"
            />
          </div>
        </div>

        <ul className="Ul">
          <div className="BottomLengthAndSearch">
            <div className="lengthShow">
              <h1 className="YourPassword">Your Passwords</h1>
              <p className="ShowingLength">{showBelow.length}</p>
            </div>

            <div className="SearchFiled">
              <img
                className="SearchLogo"
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
              />
              <input
                className="SearchFiledInput"
                placeholder="search"
                type="search"
                onChange={this.eachWord}
              />
            </div>
          </div>

          <hr />
          <div className="ending">
            <div className="checking">
              <input
                id="Check"
                className="CheckingBox"
                type="checkbox"
                onClick={this.showingPassword}
              />
              <label className="ShowPara" htmlFor="Check">
                Show passwords
              </label>
            </div>
          </div>

          <div className="ShowingBelow">
            {showBelow.map(each => (
              <DataOfUser
                eachElement={each}
                key={each.id}
                deletingUserData={this.DeleteEachOne}
                showThePassword={tapToShowPassword}
                coloring={this.BackgroundC}
              />
            ))}
          </div>

          <div className="BottomImage">
            {showBelow.length === 0 ? (
              <img
                className="PasswordsImageBottom"
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
              />
            ) : (
              ''
            )}

            <p className="NoPassword">
              {showBelow.length === 0 && 'No Passwords'}
            </p>
          </div>
        </ul>
      </div>
    )
  }
}
export default App
