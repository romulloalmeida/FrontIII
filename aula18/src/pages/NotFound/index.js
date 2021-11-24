import {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'

export default function NotFound() {
  let [contador, setContador] = useState(5);

  const navigate = useNavigate();
  useEffect(() =>{
    const parar = setTimeout(() => {
      setContador(--contador)
      }, 1000)
    setTimeout(() => {
      navigate('/')
    },5000);

    return() => {
      clearTimeout(parar);
    }
  })
  
  

    return (
      <>
        <h2>404 nada por aqui</h2>
        <h3 >Redirecionando em {contador} segundos</h3>
      </>
    )

}
