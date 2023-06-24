import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import Logo from '../Logo'
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

export default function Header(){
    return(
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>       
      </HeaderContainer>
    )
}
