import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import TextArea from '../components/input/TextArea'
import TextField from '../components/input/TextField'
import Heading1 from '../components/typography/Heading1'
import Paragraph from '../components/typography/Paragraph'
import { space } from '../constants/space'
import Choice from '../components/input/Choice'
import { color } from '../constants/color'
import Loading from '../components/surface/Loading'
import Button from '../components/input/Button'


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

const FooterWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-width: ${space.width};
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 16px;
`
const Saving = styled.div`
    display: flex;
    align-items: center;
    color: ${color.indigo[7]};
    flex: 1;
    gap: 8px;
    line-height: 1.5;
    opacity: 1;
    animation: fadeIn 0.3s;

    @keyframes fadeIn {
        from { opacity: 0; }
    }
    @-webkit-keyframes fadeIn {
        from { opacity: 0;}
    }
`
const Check = styled.div`
    display: inline-block;
    transform: rotate(45deg);
    height: 12px;
    width: 8px;
    border-bottom: 2px solid ${color.teal[6]};
    border-right: 2px solid ${color.teal[6]};
    margin-left: 5px;
    margin-top: 1px;
`
const Done = styled.div`
    display: flex;
    color: ${color.teal[7]};
    flex: 1;
    gap: 13px;
    line-height: 1.5;
    animation: fadeOut 0.3s;
    animation-delay: 0.7s;
    opacity: 1;

    @keyframes fadeOut {
        to { opacity: 0; }
    }
    @-webkit-keyframes fadeOut {
        to { opacity: 0;}
    }
`

export default function Form({ data, defaultValue, callback, onClickNext, onClickPrevious, isLoading, autoSave, haveName }) {
    const { type, title, name, placeholder, discription, required, options} = data
    const [isPass, setIsPass] = useState({})
    const handleCallback = (name, value, check) => {
        setIsPass({
            ...isPass,
            [name]: check
        })
        callback(name, value)
        if(type === 'choice'){
            setTimeout(() => {
                onClickNext()
            }, 300)
        }
    }
    useEffect(() => {
        if(required){
            setIsPass({
                ...isPass,
                [data.name]: defaultValue ? true : false
            })
        }else if(name){
            setIsPass({
                ...isPass,
                [name]: true
            })
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
                    defaultValue={defaultValue}
                    type='email'
                    pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$'
                />
            }
            <FooterWrapper>
                {autoSave === 'saving' ?
                    <Saving><Loading color='indigo' size='s'/><p>저장 중</p></Saving> :
                autoSave === 'done' ?
                    <Done><Check/><p>저장 완료</p></Done> : <></>
                }
                <ButtonWrapper>
                    {(type !== 'start' && type !== 'end') && 
                        <Button type='secondary' onClick={onClickPrevious}>이전</Button>
                    }
                    <Button 
                        onClick={onClickNext} 
                        disabled={!(type !== 'email' ? true : (type === 'email' && Object.keys(isPass).filter( i => isPass[i]).length === haveName) ? true : false)} 
                        isLoading={isLoading}
                    >
                        {type === 'email' ? '보내기' : type === 'end' ? '돌아가기' : '다음'}
                    </Button>
                </ButtonWrapper>
            </FooterWrapper>
        </Wrapper>
    )
}
