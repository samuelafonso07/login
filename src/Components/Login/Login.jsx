import React, { useState } from 'react'
import { motion } from 'framer-motion'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simular requisição
    setTimeout(() => {
      setLoading(false)
      alert(`Bem-vindo de volta, ${email || 'usuário'}!`)
    }, 900)
  }

  return (
    <div className="login-root">
      <div className="neon-bg" aria-hidden="true">
        <span className="blob b1" />
        <span className="blob b2" />
        <span className="blob b3" />
      </div>

      <motion.div
        className="login-card"
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: 'circOut' }}
      >
        <header className="card-header">
          <div className="logo">Programador<span>Samuel</span></div>
          <p className="subtitle">Entrar na sua conta</p>
        </header>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <input
              type="email"
              required
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Endereço de e-mail</span>
          </label>

          <label className="field">
            <input
              type="password"
              required
              placeholder=" "
              minLength={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Senha</span>
          </label>

          <div className="row between">
            <label className="remember">
              <input type="checkbox" /> Lembrar
            </label>
            <a className="forgot" href="#">Esqueci a senha</a>
          </div>

          <motion.button
            className="cta"
            type="submit"
            whileTap={{ scale: 0.98 }}
            whileHover={{ filter: 'brightness(1.08)' }}
            disabled={loading}
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </motion.button>
        </form>

        <footer className="card-footer">
          <small>Ou entre com</small>
          <div className="socials">
            <motion.button className="sbtn" whileTap={{ scale: 0.95 }}>Google</motion.button>
            <motion.button className="sbtn" whileTap={{ scale: 0.95 }}>GitHub</motion.button>
          </div>
        </footer>
      </motion.div>
    </div>
  )
}
