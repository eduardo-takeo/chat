import React from 'react'

import { Main, Messages } from './styles'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'

function Chat() {
    return (
        <Main>
            <Sidebar />
            <Messages>
                <Header />
            </Messages>
        </Main>
    )
}

export default Chat
