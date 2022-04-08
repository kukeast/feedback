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

init(emailkey.USER_ID);

export default function Feedback({ id }) {
    const navigate = useNavigate()
    const [data, setData] = useLocalStorage([id], {})
    const [currentPage, setCurrentPage] = useState(0)
    const [currentData, setCurrentData] = useState(feedbacks.filter( i => i.id === id)[0].contents[currentPage])
    const [isLoading, setIsLoading] = useState(false)
    const [timer, setTimer] = useState(10)
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        setCurrentData(feedbacks.filter( i => i.id === id)[0].contents[currentPage])
    }, [currentPage, id])
    useEffect(() => {
        setShowModal(Object.keys(data)[0] && true)
        const timerId = setInterval(() => {
            setTimer(prev => prev + 1)
        }, 1000)
        return () => clearInterval(timerId)
        // eslint-disable-next-line
    }, [])

    // console.log(data)
    const handleSubmit = () => {
        window.localStorage.removeItem([id])
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
        setShowModal(false)
    }
    return (
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
            />
            <Progress percent={currentPage/(feedbacks.filter( i => i.id === id)[0].contents.length - 1)*100}/>
        </Container>
    )
}
