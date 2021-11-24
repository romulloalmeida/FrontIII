import { Link } from 'react-router-dom';

export default function Repositorio ({id,full_name,name}) {

    return (
      <li key={id}>
        <Link to={`/${full_name}`}>{name}</Link>
      </li>
    )

}