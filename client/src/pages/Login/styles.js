import styled from 'styled-components'

export const Main = styled.main`
    width: 100%;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    background-color: var(--color-secondary);
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 5px;
    padding: 2rem;
    background-color: white;
`

export const Title = styled.h1`
    font-size: 1.5rem;
`