import React, { useState, useEffect } from 'react'

import {
    Main,
    Container,
    Title
} from './styles'

import TextInput from '../../components/TextInput'
import Button from '../../components/Button'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLoginClick = () => {
        (username === 'admin' && password === '1234')
            ? console.log('autenticado')
            : console.log('não autorizado')
    }

    return (
        <Main>
            <Container>
                <Title>Chat App</Title>
                <TextInput placeholder="Username" type="text" onChange={setUsername} />
                <TextInput placeholder="Password" type="password" onChange={setPassword} />
                <Button value="Log in" color="neutral" onClick={handleLoginClick} />
            </Container>
        </Main>
    )
}

export default Login
