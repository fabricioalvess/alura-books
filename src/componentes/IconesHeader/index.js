import perfilSvg from '../../imagens/perfil.svg'
import sacolaSvg from '../../imagens/sacola.svg'
import styled from 'styled-components'

const icones = [perfilSvg, sacolaSvg]

const Icone = styled.li`
  margin-right:40px ;
  width: 25px;
`

const Icones = styled.ul`
  display: flex;
  align-items: center;
`

export default function IconesHeader(){
    return(
        <Icones>
        {
          icones.map((icone)=>(
            <Icone><img src={icone} alt='imagem'></img></Icone>
          ))
        }
    </Icones>
    )
}
