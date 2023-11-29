import { useState } from 'react'
import './App.css'
import Input from './components/Input'

function App() {
  const [password, setPassword] = useState("")
  const [copyPassword, setCopyPassword] = useState("Copiar")
  const [custonSize, setCustonSize] = useState(12) 
  const [showInput, setShowInput] = useState(false)

  const passwordSize = showInput ? custonSize : 8

  const generete = () => {
    const characters = "'1234567890-=!@#$%¨&*()_+qwertyuiop[asdfghjklç~]zxcvbnm,.;/QWERTYUIOP{ASDFGHJKLÇ^}ZXCVBNM<>:?"

    let newPassword = ""
    for (let i = 0; i < passwordSize; i++) {
      const position = Math.floor(Math.random() * characters.length) 
      newPassword += characters[position]
    }
    setPassword(newPassword)
    setCopyPassword("Copiar")
  }

  const CopyToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    setCopyPassword("Copiado!")
  }


  return (
    <div className='container'>
      <h1>Gerador de senhas</h1>
      <div className="container-custon">
        {showInput ? (
          <div className='input'>
          <label htmlFor="passwordSize"></label>
          <Input  
            passwordSize={custonSize} 
            setPasswordSize={setCustonSize} 
          />
        </div>
        ) : 
        <div className='input'>
          <input 
            value={custonSize}
            onChange={(ev) => setCustonSize(ev.target.value)}
            disabled
          />
        </div>
        }
        <div>
          <label htmlFor="showIput">Customizar tamanho</label>
          <input 
            type="checkbox" 
            id='showIput' 
            value={showInput}
            onChange={() => setShowInput(currentState => !currentState)}
          />
        </div>
      </div>
      
      <button onClick={generete}>Gerar Senha de {passwordSize} caracteres</button>
      <button onClick={CopyToClipboard}>{copyPassword}</button>
      <div>{password}</div>
    </div>
  )
}

export default App
