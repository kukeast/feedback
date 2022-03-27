import React from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { color } from '../../constants/color'
import Loading from '../surface/Loading'

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 18px;
    font-size: 16px;
    line-height: 1;
    font-weight: 600;
    border-radius: 8px;
    min-width: 60px;
    height: 48px;
    cursor: pointer;
    
    ${props => props.type === 'secondary' ?
        css`
            background-color: ${color.white};
            color: ${color.gray[7]};
            &:hover{
                background-color: ${color.gray[1]};
            }
            &:active{
                background-color: ${color.gray[2]};
            }
        ` :
        css`
            background-color: ${color.gray[9]};
            color: ${color.white};
            &:hover{
                background-color: ${color.black};
            }
            &:active{
                background-color: ${color.gray[9]};
            }
        `
    }

    ${props => props.disabled && css`
        background-color: ${color.gray[3]};
        &:hover{
            background-color: ${color.gray[3]};
        }
        &:active{
            background-color: ${color.gray[3]};
        }
        cursor: not-allowed;
    ` }
    ${props => props.isLoading && css`
        cursor: progress;
    ` }
`

export default function Button({ children, onClick, type, disabled, isLoading }) {
    return (
        <Wrapper onClick={(!disabled && !isLoading) ? onClick : undefined} type={type} disabled={disabled} isLoading={isLoading}>
            {isLoading ? <Loading/> : children}
        </Wrapper>
    )
}
