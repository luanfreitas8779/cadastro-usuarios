import { InputName, Titulo, Input, InputContainer, Form, Container } from "./styles.js"
import UsersImage from '../../assets/users.png'
import { useRef } from "react"
import api from '../../services/api.js'
import DefaultButton from '../../components/Button'
import BackgroundGradient from "../../components/BackgroundIMG"
import BackgroundPage from "../../components/Container/index.jsx"
import { useNavigate } from "react-router-dom"
import Title from "../../components/Title/index.jsx"


function App() {

  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()

  const navigate = useNavigate()

  async function registerNewUser() {
    const res = await api.post('/usuarios', {
      email: inputEmail.current.value,
      age: parseInt(inputAge.current.value),
      name: inputName.current.value

    })
    if (res.status == 201) {
      alert('Usuário criado com sucesso!')
    } else {
      alert('Falha ao cadastrar usuário. Verifique as informações')
    }
    
  }

  return (
    <BackgroundPage>
      <BackgroundGradient>
        <img src={UsersImage} alt="imagem-usuarios" />
      </BackgroundGradient>

      <Form>
        <Title>Cadastrar Usuário</Title>
        <InputContainer>


          <div>
            <InputName >
              Nome<span> *</span>
            </InputName>
            <Input type="string" placeholder="Nome do usuário" required ref={inputName} />
          </div>

          <div>
            <InputName >
              Idade<span> *</span>
            </InputName>
            <Input type="number" placeholder="Idade do usuário" required ref={inputAge} />
          </div>

        </InputContainer>

        <div style={{ width: '100%' }}>
          <InputName>
            E-mail<span> *</span>
          </InputName>
          <Input type="email" placeholder="E-mail do usuário" required ref={inputEmail} />
        </div>

        <DefaultButton type='button' onClick={registerNewUser} theme="primary">Cadastrar usuário</DefaultButton>

      </Form>

      <DefaultButton type='button' onClick={() => navigate('/usuarios-registrados')}>Lista de usuários</DefaultButton>
    </BackgroundPage>
  )
}

export default App
