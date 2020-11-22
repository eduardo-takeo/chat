import styled from 'styled-components'

export const Main = styled.button`
    background-color: ${props => props.color === 'neutral' ? 'var(--btn-neutral)' : ''};
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    margin: 1rem;
`