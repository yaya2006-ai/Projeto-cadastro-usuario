import { useEffect, useState, useRef } from 'react'
import './style.css'
import Trash from '../../assets/trash.svg'
import API from '../../serveices/API';


function Home() {
  const [users, setUsers] = useState([])


  // Referências para os inputs
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef()


  // Função para bus  car usuários na API
  async function getUsers() {
    const usersFromAPI = await API.get('/usuarios')

    setUsers(usersFromAPI.data)

  }


  // Função para criar um novo usuário
  async function createUsers() {
    await API.post('/usuarios', {
      name: inputName.current.value,
      age: inputAge.current.value,
      email: inputEmail.current.value
    })
    getUsers()
  }


  // Função para deletar um usuário
  async function deleteUsers(id) {
    await API.delete(`/usuarios/${id}`)

    getUsers()
  }


  // useEffect para carregar os usuários ao montar o componente
  useEffect(() => {
    getUsers()
  }, [])


  // Renderização do componente
  return (

    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="nome" type="text" ref={inputName} />
        <input placeholder="Idade" name="idade" type="number" ref={inputAge} />
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail} />
        <button type="button" onClick={createUsers}>Cadastrar</button>
      </form>

      {users.map(user => (  // Mapeia e exibe cada usuário e apaga ao clicar no botão
        <div key={user.id} className='user-card'>
          <div>
            <p>Nome: <span>{user.name}</span></p>
            <p>Idade: <span>{user.age}</span></p>
            <p>Email: <span>{user.email}</span></p>
          </div>
          <button onClick={() => deleteUsers(user.id)}> 
            <img src={Trash} alt="Lata de lixo" />
          </button>
        </div>
      ))
      }

    </div>



  )
}

export default Home
