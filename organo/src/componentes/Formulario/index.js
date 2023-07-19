import Botao from '../Botao'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'
const Formulario = () => {

    const times = [
        'Gato',
        'Cachorro', 
        'Outros'
    ]

    const aoSalvar = (evento) => {
        evento.preventDefault()
        console.log('O form foi submetido')
    }
    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados do pet que você deseja doar</h2>
                <ListaSuspensa obrigatorio ={true} label="Tipo" itens={times}/>
                <CampoTexto obrigatorio ={true} label="Nome" placeholder="Digite nome do pet" />
                <CampoTexto obrigatorio ={true} label="Raça" placeholder="Digite a raça do pet" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <Botao>
                    Criar anúncio
                </Botao>
                
            </form>
        </section>
    )

}

export default Formulario