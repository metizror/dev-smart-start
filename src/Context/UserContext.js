

import React, { Component } from 'react'

const UserContext = React.createContext()

class UserProvider extends Component {
    // Context state
    state = {
        user: {},
        loggedIn: false,
        isModalOpen: false
    }
    // Method to update state
    setUser = (user) => {
        console.log(user);
        this.setState((prevState) => ({ user }))
    }

    render() {
        const { children } = this.props
        const { user } = this.state
        const { setUser } = this

        return (
            <UserContext.Provider
                value={{
                    user,
                    setUser,
                }}
            >
                {children}
            </UserContext.Provider>
        )
    }
}

export default UserContext

export { UserProvider }