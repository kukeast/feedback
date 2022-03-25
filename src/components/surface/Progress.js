import React from 'react'
import styled from 'styled-components'
import { color } from '../../constants/color'

const Wrapper = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    width: 100%;
    height: 3px;
`
const Bar = styled.div`
    width: ${props => props.percent + '%'};
    background-color: ${color.gray[9]};
    height: 3px;
`

export default function Progress({ percent }) {
    return (
        <Wrapper><Bar percent={percent}/></Wrapper>
    )
}
