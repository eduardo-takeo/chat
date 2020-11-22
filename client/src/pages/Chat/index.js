import React from 'react'

import { Main, Board } from './styles'

import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header'
import Messages from '../../components/Messages'
import MessageInput from '../../components/MessageInput'

function Chat() {
    return (
        <Main>
            <Sidebar />
            <Board>
                <Header />
                <Messages />
                <MessageInput />
            </Board>
        </Main>
    )
}

export default Chat
