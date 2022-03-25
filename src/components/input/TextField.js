import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/color';

const Wrapper = styled.input`
    width: 100%;
    padding: 16px;
    border-radius: 8px;
    box-sizing: border-box;
    border: 0;
    outline: none;
    color: ${color.gray[9]};
    border: 1px solid ${color.gray[3]};
    background-color: ${color.white};
    &::placeholder{
        color: ${color.gray[5]};
    }
    &:hover{
        border: 1px solid ${color.gray[5]};
    }
    &:focus{
        border: 1px solid ${color.gray[9]};
        box-shadow: 0 0 0 3px ${color.gray[2]};
    }
`

function TextField({ defaultValue = '', placeholder, name, type = 'text', pattern, callback, keyDownEvent }) {
    const [text, setText] = useState(defaultValue);
    const re = new RegExp(pattern)
    const inputElem = useRef();
    const handleChange = () => {
        setText(inputElem.current.value)
        callback(
            name, 
            inputElem.current.value, 
            pattern ? re.test(inputElem.current.value) : inputElem.current.value === '' ? false : true
        )
    }
    const handleKeyDown = e => {
        keyDownEvent(e)
    }
    useEffect(() => {
        setText(defaultValue)
    }, [defaultValue])
    useEffect(() => {
        inputElem.current.focus()
    }, [name])
    return (
        <Wrapper
            type={type}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            value={text}
            ref={inputElem}
        />
    )
}

export default TextField;