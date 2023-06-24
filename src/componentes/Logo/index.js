import logo from '../../imagens/logo.svg'
import styled from 'styled-components'

const Imagem = styled.img`
  margin-right: 10px;
`
const LogoContainer = styled.div`
display: flex;
font-size:30px;
`

const PStyled = styled.p`
display:flex;
`
export default function Logo(){
    return(
        <LogoContainer>
          <Imagem 
          src={logo} 
          alt='logo'
         />
          <PStyled> <strong> Alura </strong> Books </PStyled>
        </LogoContainer>
    )
}