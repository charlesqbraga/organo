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
    return (
        <section className="formulario" >
            <form>
                <h2>Preencha os dados do pet que você deseja doar</h2>
                <ListaSuspensa label="Tipo" itens={times}/>
                <CampoTexto label="Nome" placeholder="Digite nome do pet" />
                <CampoTexto label="Raça" placeholder="Digite a raça do pet" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
                <Botao texto="Criar anúncio"/>
                
            </form>
        </section>
    )

}

export default Formulario