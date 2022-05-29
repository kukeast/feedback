import React, { useState } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'
import { color } from '../../constants/color'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 12px;
`
const OptionWrapper = styled.div`
    border-radius: 4px;
    background-color: ${color.white};
    padding: 12px;
    box-shadow: 0px 2px 4px 0px #4950571A;
    ${props => props.selected ?
        css`
            color: ${color.gray[9]};
            font-weight: 700;
            border: 1px solid ${color.gray[9]} !important;
        ` :
        css`
            color: ${color.gray[7]};
            border: 1px solid ${color.gray[3]};
        `
    }
    &:hover{
        color: ${color.gray[9]};
        background-color: ${color.gray[1]};
        border: 1px solid ${color.gray[5]};
    }
    &:active{
        background-color: ${color.gray[2]};
    }
    cursor: pointer;
`

export default function Choice({ name, options, defaultValue, callback }) {
    const [selected, setSelected] = useState(defaultValue)
    const handleClick = value => {
        setSelected(value)
        callback(name, value, true)
    }
    return (
        <Wrapper>
            {options.map((value, i) => (
                <OptionWrapper 
                    key={i}
                    onClick={() => handleClick(value)}
                    selected={value === selected}
                >
                    {value}
                </OptionWrapper>
            ))}
        </Wrapper>
    )
}