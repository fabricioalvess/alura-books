import './estilo.css'

const textoOpcao = ['CATEGORIA','FAVORITOS','MINHA ESTANTE']

function OpcoesHeader(){
    return(
        <ul className='opcoes'>
        {textoOpcao.map((texto)=>(
          <li className='opcao'><p>{texto}</p></li>))}
      </ul>
    )
}

export default OpcoesHeader