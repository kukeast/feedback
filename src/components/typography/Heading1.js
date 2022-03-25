import React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/color'

const H1 = styled.p`
    font-size: 32px;
    font-weight: 800;
    line-height: 1.5;
    color: ${color.gray[9]};
    white-space: pre-line;
    > span{
        font-size: 32px;
        font-weight: 500;
        line-height: 1.5;
        color: ${color.red[7]};
        margin-left: 4px;
    }
`
export default function Heading1({ children, required }) {
    return (
        <H1>{children}{required && <span>*</span>}</H1>
    )
}
