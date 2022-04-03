import React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/color'

const P = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: ${color.gray[7]};
    white-space: pre-line;
    @media (max-width: 480px) {
        font-size: 16px;
    }
`

export default function Paragraph({ children }) {
    return (
        <P>{children}</P>
    )
}
