import React from 'react'
import { Container, Header, Title, Logo} from '../../styles/admin'

const Admin: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo src="img/key.png" />
                <Title>Agendamento</Title>
            </Header>
        </Container>
    )
}

export default Admin
