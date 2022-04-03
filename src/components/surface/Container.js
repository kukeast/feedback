import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    @media (max-width: 480px) {
        padding: 60px 0;
        height: initial;
    }
`

export default function Container({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}
