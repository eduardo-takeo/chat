import React from 'react'

import { Main } from './styles'

function Button({ value, color, onClick }) {
    return (
        <Main color={color} onClick={onClick}>
            {value}
        </Main>
    )
}

export default Button
