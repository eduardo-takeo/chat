import React from 'react'

import { Main, Board } from './styles'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Messages from '../../components/Messages'

function Chat() {
    return (
        <Main>
            <Sidebar />
            <Board>
                <Header />
                <Messages />
            </Board>
        </Main>
    )
}

export default Chat
