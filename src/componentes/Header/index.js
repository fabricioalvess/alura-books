import './estilo.css'

import OpcoesHeader from '../OpcoesHeader';
import IconesHeader from '../IconesHeader';
import Logo from '../Logo'
function Header(){
    return(
        <header className='App-header'>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>       
      </header>
    )
}
export default Header