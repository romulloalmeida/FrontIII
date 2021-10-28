const Greeting = ({user}) => {
    const greeting = () => {
    if(user.lastName === '01'){
      return  `${user.firstName} ${user.lastName}`
    }
    return 'Outra turma'
}
    return <h1> Olá, {greeting()}!</h1>
}

export default Greeting;