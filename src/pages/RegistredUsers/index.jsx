import DefaultButton from "../../components/Button"
import BackgroundGradient from "../../components/BackgroundIMG"
import BackgroundPage from "../../components/Container"
import UsersImage from '../../assets/users.png'
import api from '../../services/api.js'
import { useEffect, useState } from "react"
import Title from "../../components/Title/index.jsx"
import { UsersContainer, CardUsers, TrashIcon, AvatarUser } from "./style.js"
import Trash from '../../assets/trash.svg'
import { useNavigate } from "react-router-dom"
import ConfirmationModal from "../../components/DeletConfirm/index.jsx"



function RegistredUsers() {

    // modal de confirmação de delecao
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()

    const [idToDelete, setIdToDelete] = useState()

    // função para deletar usuário
    async function deletUser(id) {
        const response = await api.delete(`/usuarios/${id}`)
        console.log(response.data)
        alert(response.data.message)

        const updatedUsers = userList.filter(userList => userList.id !== id)
        setUserList(updatedUsers)
    }



    const [userList, setUserList] = useState([])
    useEffect(() => {

        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUserList(data)
        }

        getUsers()
    }, [])



    return (
        <div>
            <BackgroundPage>
                <BackgroundGradient>
                    <img src={UsersImage} alt="imagem-usuarios" />
                </BackgroundGradient>
                <Title>Usuários registrados</Title>
                <UsersContainer>
                    {userList.map((user => (
                        <CardUsers key={user.id}>
                            <AvatarUser src={`https://avatar.iran.liara.run/public?username=${user.id}`} />
                            <div>
                                <h3>{user.name}</h3>
                                <p>{user.age}</p>
                                <p>{user.email}</p>
                            </div>
                            <TrashIcon src={Trash} alt='icone-lixeira' 
                                onClick={() => {
                                setModal(true)
                                setIdToDelete(user.id)
                                
                                }} />

                        </CardUsers>
                    )))}
                </UsersContainer>
                <DefaultButton type="button" onClick={() => navigate('/')}>Voltar</DefaultButton>
            </BackgroundPage>
            <ConfirmationModal isOpen={modal} onCancel={() => setModal(false)} onConfirm={() => {
                deletUser(idToDelete)
                setModal(false)
                }} />
        </div>
    )
}

export default RegistredUsers