export const UserGreeting = () => {
    const isLoggedIn = true

    return <div> {isLoggedIn ? 'Welcome User' : 'Guest, do you want to sign up?'}</div>

}