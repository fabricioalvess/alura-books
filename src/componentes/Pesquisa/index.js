import { useEffect, useState } from "react"
import Input from "../Input"
import styled from "styled-components"
import { getLivros } from "../../servicos/livros"
import {postFavorito} from "../../servicos/favoritos"
import img from "../../imagens/livro.png"

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg,#002f52 35%, #326589 165%);
    color:#fff;
    text-align: center;
    padding:85px 0;
    min-height: 270px;
    width: 100%;
`
const Titulo = styled.h2`
    color:#fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`
const SubTitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`
const Resultado = styled.div`
    height:auto;
    display:flex;
    justify-content:center;
    align-items:center;
    margin-bottom:20px;
    cursor:pointer;
        p{
            width:200px;
        }
        img{
            width:100px;
        }
        &:hover{
            border:1px solid white;
        }
`
export default function Pesquisa(){

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    const [ livros, setLivros] = useState([])

    useEffect(()=>{fetchLivros()},[])

    async function fetchLivros(){
        const livrosApi = await getLivros()
        setLivros(livrosApi)
    }
    async function insertFavorito(id){
        await postFavorito(id)
    }
    return(
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <SubTitulo>Encontre seu livro em nossa estante.</SubTitulo>
            <Input
                placeholder="Escreva sua proxima leitura."
                onBlur={(evento)=>{
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter(
                        livro => livro.nome.includes(textoDigitado)
                    )
                    setLivrosPesquisados(resultadoPesquisa)

                }} 
            />
          {
            livrosPesquisados.map( livro =>(
                <Resultado onClick={()=> insertFavorito(livro.id)}>
                   <img src={img} alt='livro'/>
                    <p>{livro.nome}</p>
                </Resultado>
            ))
          }
        </PesquisaContainer>
    )
}

