import './App.css';
import Logo from './componentes/Logo';
import perfilSvg from './imagens/perfil.svg'
import sacolaSvg from './imagens/sacola.svg'
const icones = [perfilSvg, sacolaSvg]
const textoOpcao = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Logo></Logo>
        <ul className='opcoes'>
          {textoOpcao.map((texto)=>(
            <li className='opcao'><p>{texto}</p></li>))}
        </ul>
        <ul className='icones'>
            {
              icones.map((icone)=>(
                <li className='icone'><img src={icone}></img></li>
              ))
            }
        </ul>
      </header>
    </div>

  );
}
export default App
