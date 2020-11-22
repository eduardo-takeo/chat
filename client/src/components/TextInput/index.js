import React from 'react'

import { Input } from './styles'

function TextInput({ placeholder, type, onChange }) {
    return (
        <Input placeholder={placeholder} type={type} onChange={e => onChange(e.target.value)} />
    )
}

export default TextInput
