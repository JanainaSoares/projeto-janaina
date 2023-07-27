import Header from '../component/Header'

import { useState } from "react"

import styles from '../styles/pages/contato.module.css'

import contato from '../assets/contato.png'


const Contato = () => {
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [mensagem, setMensagem] = useState ('')

function handleInputNome(e) {
  setNome(e.target.value)
}

function handleInputEmail(e) {
  setEmail(e.target.value)
}

function handleInputMensagem(e) {
  setMensagem(e.target.value)
}

function handleSubmit(e) {
  e.preventDefault()
  console.log(nome, email, mensagem)
}

  return (
    <>
      <Header 
      title="Deixa seu recado" image={contato}
      />
      <div className={styles.contatoTitulo}>
        <h3>Iremos adorar receber um recado ou ate mesmo uma receita de familia...</h3>
        <h3>afinal boas receitas sempre devem ser compartilhadas...</h3>
      </div>
      <div>
        <form className={styles.form} onSubmit={()=>{}}>
          <input
            className={styles.formInput}
            typt="text"
            placeholder="Digite seu nome"
            onChange={handleInputNome}
            value={nome}
          />
          <input
          className={styles.formInput}
            typt="email"
            placeholder="Digite seu email"
            onChange={handleInputEmail}
            value={email}
          />
          <textarea
          className={styles.formInput}
            placeholder="Digite sua mensagem"
            onChange={handleInputMensagem}
            value={mensagem}
          />
          <button 
          className={styles.formButton}
          type="submit">Enviar mensagem
          </button>
        </form>
      </div>
    </>
  )
}

export default Contato