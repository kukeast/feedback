import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextArea from '../components/input/TextArea'
import TextField from '../components/input/TextField'
import Heading1 from '../components/typography/Heading1'
import Paragraph from '../components/typography/Paragraph'
import { space } from '../constants/space'
import Choice from './Choice'
import Footer from './Footer'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    max-width: ${space.width};
    padding: 0 20px;
    box-sizing: border-box;
    gap: 24px;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`

export default function Form({ data, defaultValue, callback, onClickNext, onClickPrevious, isLoading, autoSave }) {
    const { type, title, name, placeholder, discription, required, options} = data
    const [isPass, setIsPass] = useState(false)
    const handleCallback = (name, value, check) => {
        setIsPass(check)
        callback(name, value)
        if(type === 'choice'){
            setTimeout(() => {
                onClickNext()
            }, 300)
        }
    }
    const handleKeyDown = e => {
        if(e.keyCode === 13){
            onClickNext()
        }
    }
    useEffect(() => {
        if(required){
            if(defaultValue){
                setIsPass(true)
            }else{
                setIsPass(false)
            }
        }else{
            setIsPass(true)
        }
        // eslint-disable-next-line
    }, [title])
    return (
        <Wrapper>
            <TitleWrapper>
                <Heading1 required={required}>{title}</Heading1>
                {discription && <Paragraph>{discription}</Paragraph>}
            </TitleWrapper>
            {type === 'short' && 
                <TextField
                    placeholder={placeholder}
                    name={name}
                    callback={handleCallback}
                    keyDownEvent={handleKeyDown}
                    defaultValue={defaultValue}
                />
            }
            {type === 'long' && 
                <TextArea
                    placeholder={placeholder}
                    name={name}
                    callback={handleCallback}
                    defaultValue={defaultValue}
                />
            }
            {type === 'choice' && 
                <Choice
                    name={name}
                    options={options}
                    callback={handleCallback}
                    defaultValue={defaultValue}
                />
            }
            {type === 'email' && 
                <TextField
                    placeholder={placeholder}
                    name={name}
                    callback={handleCallback}
                    keyDownEvent={handleKeyDown}
                    defaultValue={defaultValue}
                    type='email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                />
            }
            <Footer
                type={type}
                isPass={isPass}
                onClickNext={onClickNext}
                onClickPrevious={onClickPrevious}
                isLoading={isLoading}
                autoSave={autoSave}
            />
        </Wrapper>
    )
}
