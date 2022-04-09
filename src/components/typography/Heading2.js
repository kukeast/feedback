import React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/color'

const H1 = styled.p`
    font-size: 24px;
    font-weight: 800;
    line-height: 1.5;
    color: ${color.gray[9]};
    @media (max-width: 480px) {
        font-size: 20px;
    }
`
export default function Heading2({ children }) {
    return (
        <H1>{children}</H1>
    )
}
