import './estilo.css'
import perfilSvg from '../../imagens/perfil.svg'
import sacolaSvg from '../../imagens/sacola.svg'
const icones = [perfilSvg, sacolaSvg]
function IconesHeader(){
    return(
        <ul className='icones'>
        {
          icones.map((icone)=>(
            <li className='icone'><img src={icone}></img></li>
          ))
        }
    </ul>
    )
}
export default IconesHeader