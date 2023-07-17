import CampoTexto from '../CampoTexto'
import './Formulario.css'
const Formulario = () => {
    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados do pet que você deseja doar</h2>
                <CampoTexto label="Tipo" placeholder="O seu pet é um cão, um gato, um páss..." />
                <CampoTexto label="Nome" placeholder="Digite nome do pet" />
                <CampoTexto label="Raça" placeholder="Digite a raça do pet" />
                <CampoTexto label="Imagem" placeholder="Digite o endereço da imagem" />
            </form>
        </section>
    )

}

export default Formulario