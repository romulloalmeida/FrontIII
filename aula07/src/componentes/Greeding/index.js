const Greeting = ({user}) => {
    const greeting = () => {
    return `${user.firstName} ${user.lastName}`
}
    return <h1> Olá, {greeting()}!</h1>
}

export default Greeting;