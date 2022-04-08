import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { color } from '../../constants/color'

const Wrapper = styled.div`
    display: inline-block;
    width: ${props => props.size === 'm' ? '20px' : '16px'};
    height: ${props => props.size === 'm' ? '20px' : '16px'};
    ${props => props.color === 'white' ? 
        css`
            border: 2px solid ${color.gray[7]};
            border-top-color: ${color.white};
        ` :
        css`
            border: 2px solid ${props => color[props.color][1]};
            border-top-color: ${props => color[props.color][6]};
        `
    }
    border-radius: 50%;
    animation: spin 1s infinite;
    -webkit-animation: spin 1s infinite;

    @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
`

export default function Loading({ color = 'white' , size = 'm' }) {
    return (
        <Wrapper color={color} size={size}/>
    )
}
