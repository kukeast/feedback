import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    position: absolute;
    width: 100%;
    height: 95%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`

export default function Container({ children }) {
    return (
        <Wrapper>{children}</Wrapper>
    )
}
