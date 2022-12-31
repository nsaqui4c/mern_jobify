import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <Wrapper className='container full-page'>
        <img src='/not-found.svg' alt="page not found" className='img' />
        <h3>Ohh! page not found</h3>
        <p>we cant find the page you are looking for!!</p>
        <Link to='/'>Back Home</Link>
    </Wrapper>
  )
}

const Wrapper= styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content: center;
p{
    margin:0
}
h3{
    margin:0
}
a{
    color:var(--primary-500);
    padding:5px;
    border-radius: 25px;
    text-transform: capitalize;

    &:hover{
    color:white;
    background:var(--primary-500);
    padding:5px 8px;
   

}
}

`

export default Error