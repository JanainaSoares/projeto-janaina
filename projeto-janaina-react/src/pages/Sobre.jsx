import Header from "../component/Header"

import chef from '../assets/chef.png'

import styles from '../styles/pages/sobre.module.css'

const Sobre = () => {
  return (
    <>
      <Header title="Sobre nós" image={chef} />
      <div className={styles.sobreContainer}>
      <h3 className={styles.sobreTitulo}>Bem-vindo(a) ao Receitas do Fla & da Jana! </h3>
      <p>Somos apaixonados pela gastronomia e compartilhamos o amor pela culinária.</p>
      <p>Nosso objetivo é reunir os amantes da comida de todas as partes do mundo, proporcionando um espaço onde todos possam descobrir, criar e compartilhar receitas incríveis. </p>
      <p>Nossa Missão, e acredita que a comida vai muito além de uma necessidade básica; é uma forma de arte, uma expressão cultural e uma maneira de se conectar com outras pessoas.</p>
      <p>Temos como missão inspirar os amantes da cozinha de todos os níveis a explorar novos sabores, experimente pratos de diferentes culturas e aprimore suas habilidades culinárias. </p>
      <p>O que oferecemos </p>
      <p>**Uma Diversidade de Receitas** <br/>
        Desde as mais elaboradas a mais simples e fácil execução. Navegue por uma vasta coleção de receitas selecionadas cuidadosamente, desde clássicos reconfortantes até pratos exóticos e inovadores.</p>
        </div>
    </>
  )
}

export default Sobre