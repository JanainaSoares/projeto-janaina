import Header from '../component/Header'

import { useState } from "react"

import styles from '../styles/pages/contato.module.css'

import contato from '../assets/contato.png'

import database from '../service/firebase'
import { ref, push, set } from 'firebase/database'

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
  
  const messageListRef = ref(database, 'mensagem') // cria uma colecao no db do firebase
  const newMessageRef = push(messageListRef) // nova mensagem e enviar para a nossa colecao "mensagens"
  set(newMessageRef, {
    nome: nome,
    email: email,
    texto: mensagem
  })

  setNome('')
  setEmail('')
  setMensagem('')
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
        <form className={styles.form} onSubmit={handleSubmit}>
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