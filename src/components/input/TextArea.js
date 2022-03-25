import React, { useRef, useState, useEffect } from 'react';
import styled from 'styled-components';
import { color } from '../../constants/color';

const Wrapper = styled.textarea`
    resize: none;
    width: 100%;
    padding: 14px 16px;
    border-radius: 8px;
    line-height: 1.5;
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

function TextArea({ defaultValue = '', placeholder, name, callback }) {
    const [text, setText] = useState(defaultValue);
    const inputElem = useRef();
    const handleChange = () => {
        setText(inputElem.current.value)
        callback(
            name, 
            inputElem.current.value, 
            inputElem.current.value === '' ? false : true
        )
    }
    useEffect(() => {
        setText(defaultValue)
    }, [defaultValue])
    useEffect(() => {
        inputElem.current.focus()
    }, [name])
    return (
        <Wrapper
            rows={8}
            onChange={handleChange}
            placeholder={placeholder}
            value={text}
            ref={inputElem}
        />
    )
}

export default TextArea;