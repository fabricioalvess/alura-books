import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import Logo from '../Logo'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    justify-content: center;
`

export default function Header(){
    return(
        <HeaderContainer>
            <Link to="/">
                <Logo/>
            </Link>
            <OpcoesHeader/>
            <IconesHeader/>       
        </HeaderContainer>
    )
}
