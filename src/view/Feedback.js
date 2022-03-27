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

init(emailkey.USER_ID);

export default function Feedback({ id }) {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(0)
    const [currentData, setCurrentData] = useState(feedbacks.filter( i => i.id === id)[0].contents[currentPage])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setCurrentData(feedbacks.filter( i => i.id === id)[0].contents[currentPage])
    }, [currentPage, id])

    const handleSubmit = () => {
        setIsLoading(true)
        const code = GenerateRandomCode.TextNumCode(3,3)
        axios.post(`https://sheet.best/api/sheets/85bb335f-f290-49c4-ad1f-6004385e40ad/tabs/${id}`, {
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
    return (
        <Container>
            <Form
                data={currentData}
                defaultValue={data[currentData.name]}
                callback={(name, value) => setData({ 
                    ...data , 
                    [name]: value
                })} 
                onClickNext={handleNextButton}
                onClickPrevious={handlePreviousButton}
                isLoading={isLoading}
            />
            <Progress percent={currentPage/(feedbacks.filter( i => i.id === id)[0].contents.length - 1)*100}/>
        </Container>
    )
}
