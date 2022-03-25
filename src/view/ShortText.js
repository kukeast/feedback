import React from 'react'
import styled from 'styled-components'
import TextField from '../components/input/TextField'
import Heading1 from '../components/typography/Heading1'
import Paragraph from '../components/typography/Paragraph'
import { Space } from '../constants/space'
import Footer from './Footer'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    width: ${Space.width};
    gap: 16px;
`


export default function ShortText({ title, name, placeholder, discription, required, callback, defaultValue, onClickNext, onClickPrevious }) {
    const handleCallback = (name, value) => {
        callback(name, value)
    }
    return (
        <Wrapper>
            <Heading1 required={required}>{title}</Heading1>
            {discription && <Paragraph>{discription}</Paragraph>}
            <TextField
                placeholder={placeholder}
                name={name}
                callback={handleCallback}
                defaultValue={defaultValue}
            />
            <Footer
                isPass={defaultValue && true}
                onClickNext={onClickNext}
                onClickPrevious={onClickPrevious}
            />
        </Wrapper>
    )
}
