import Header from "../component/Header"

import receita from '../assets/receita.png'

import styles from '../styles/pages/home.module.css'

const Home = () => {
  return (
    <>
      <Header title="Receitas do Fla & da Jana" image={receita} />
      <div className={styles.homeContainer}>
        <h2 className={styles.homeTitulo}>Bem-vindo ao nosso mundo culinário!</h2>
        <p>Seja bem-vindo(a) ao Receitas do Fla & da Jana, o seu destino definitivo para descobrir e explorar receitas incríveis! </p>
        <p>Aqui, você encontrará uma coleção diversificada de pratos deliciosos e fáceis de preparar que certamente agradarão a todos os paladares. </p>
        <p>Aventure-se na nossa cozinha e deixe sua criatividade culinária fluir! </p>
      </div>
    </>
  )
}

export default Home