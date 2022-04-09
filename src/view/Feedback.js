import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Container from '../components/surface/Container'
import Form from './Form'
import emailjs, { init } from '@emailjs/browser';
import GenerateRandomCode from 'react-random-code-generator';
import Progress from '../components/surface/Progress';
import { emailkey } from '../util/emailkey';
import { useNavigate } from 'react-router-dom';
import { feedbacks } from '../constants/feedbacks';
import useLocalStorage from '../util/useLocalStorage';
import Modal from '../components/surface/Modal';
import Heading2 from '../components/typography/Heading2';
import Button from '../components/input/Button';
import Paragraph from '../components/typography/Paragraph';
import styled from 'styled-components';
import { css } from 'styled-components';
import { color } from '../constants/color';

const Nav = styled.div`
    width: 220px;
    position: absolute;
    padding: 56px 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    @media (max-width: 480px) {
        display: none;
    }
`
const NavItem = styled.div`
    font-size: 14px;
    line-height: 1.5;
    display: flex;
    align-items: start;
    gap: 8px;
    > div {
        flex: none;
        margin-top: 6px;
        width: 8px;
        height: 4px;
        border-bottom: 1.5px solid;
        border-left: 1.5px solid;
        transform: rotate(-45deg);
    }
    ${props => props.selected ?
        css`
            color: ${color.gray[9]};
            > div{
                border-color: ${props.done ? color.gray[9] : color.white};
                
            }
        ` : props.error ?
        css`
            color: ${color.red[5]};
            :hover{ color: ${color.red[7]}; }
            > div{
                border-color: ${props.done ? color.gray[5] : color.white};
            }
        ` :
        css`
            color: ${color.gray[5]};
            :hover{ color: ${color.gray[8]}; }
            > div{
                border-color: ${props.done ? color.gray[5] : color.white};
            }
        `
    }
    cursor: pointer;
`

init(emailkey.USER_ID);

export default function Feedback({ id }) {
    const feedback = feedbacks.filter( i => i.id === id)[0].contents
    const navigate = useNavigate()
    const [data, setData] = useLocalStorage([id], {})
    const [currentPage, setCurrentPage] = useLocalStorage('current-page', 1)
    const [currentData, setCurrentData] = useState(feedback.filter( i => i.id === currentPage)[0])
    const [isLoading, setIsLoading] = useState(false)
    const [timer, setTimer] = useState(10)
    const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        setCurrentData(feedback.filter( i => i.id === currentPage)[0])
    }, [currentPage, feedback])
    useEffect(() => {
        if(!Object.keys(data)[0]){
            setShowModal(false)
            setCurrentPage(1)
        }
        const timerId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timerId)
        // eslint-disable-next-line
    }, [])

    const handleSubmit = () => {
        setIsLoading(true)
        const code = GenerateRandomCode.TextNumCode(3,3)
        axios.post(`https://sheet.best/api/sheets/4ba77550-e25c-431b-a213-46ce0788a961/tabs/${id}`, {
            ...data,
            code: code
        })
        .then(res => {
            if(res.status === 200){
                emailjs.send('service_xufb8v7', emailkey.TEMPLATE_ID, {
                    name: data.name,
                    code: code,
                    email: data.email,
                    id: id,
                })
                .then( res => {
                    setIsLoading(false)
                    setCurrentPage(prev => prev + 1)
                    setData({})
                }, err => {
                    console.log('emailjs FAILED...', err)
                })
            }else{
                console.log('sheet.best FAILED...', res)
            }
        })
    }
    const handleNextButton = () => {
        if(currentData.type === 'email'){
            handleSubmit()
        }else if(currentData.type === 'end'){
            navigate('/')
            setCurrentPage(1)
        }else{
            setCurrentPage(prev => prev + 1)
        }
    }
    const handlePreviousButton = () => {
        setCurrentPage(prev => prev - 1)
    }
    const handleCallback = (name, value) => {
        setData({ 
            ...data , 
            [name]: value
        })
        setTimer(0)
    }
    const handleModalDelete = () => {
        window.localStorage.removeItem([id])
        setData({})
        setCurrentPage(1)
        setShowModal(false)
    }
    return (
        <>
            <Container>
                {showModal && 
                    <Modal>
                        <div>
                            <Heading2>작성 중인 내용이 있어요</Heading2>
                            <Paragraph>이 전에 작성한 내용을 이어서 쓰시겠어요?</Paragraph>
                        </div>
                        <div>
                            <Button onClick={() => setShowModal(false)}>이어쓰기</Button>
                            <Button type='danger' onClick={handleModalDelete}>삭제하고 다시쓰기</Button>
                        </div>
                    </Modal>
                }
                <Form
                    data={currentData}
                    defaultValue={data[currentData.name]}
                    callback={handleCallback} 
                    onClickNext={handleNextButton}
                    onClickPrevious={handlePreviousButton}
                    isLoading={isLoading}
                    autoSave={ timer === 3 ? 'saving' : (timer >= 4 && timer < 5) ? 'done' : 'none'}
                    haveName={feedback.filter(i => i.name).length}
                />
                <Progress percent={feedback.filter( i => i.required && data[i.name]).length / feedback.filter( i => i.required ).length * 100}/>
            </Container>
            <Nav>
                {feedback.filter( i => i.required && i.type !== 'email').map( item => (
                    <NavItem
                        key={item.name}
                        selected={currentData.name === item.name}
                        done={data[item.name]}
                        error={currentData.type === 'email' && !data[item.name]}
                        onClick={() => setCurrentPage(item.id)}
                    >
                        <div></div>
                        {item.title}
                    </NavItem>
                ))}
            </Nav>
        </>
    )
}
