import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Imagem = styled.img`
  margin-right: 10px;
`
const LogoContainer = styled.div`
display: flex;
`
export default function Logo(){
    return(
        <LogoContainer>
          <Imagem 
          src={logo} 
          alt='logo'
         />
          <p><strong>Alura</strong> Books</p>
        </LogoContainer>
    )
}