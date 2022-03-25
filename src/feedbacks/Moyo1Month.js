import axios from 'axios'
import React, { useState } from 'react'
import Container from '../components/surface/Container'
import Form from '../view/Form'
import emailjs, { init } from '@emailjs/browser';
import GenerateRandomCode from 'react-random-code-generator';
import { text } from '../constants/text';
import Progress from '../components/surface/Progress';
import { emailkey } from '../util/emailkey';
import { useNavigate } from 'react-router-dom';

init(emailkey.USER_ID);

export default function Moyo1Month() {
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [currentPage, setCurrentPage] = useState(0)
    const pages = [
        {
            type: 'start',
            title: '안녕하세요.',
            discription: `개인 성장을 위해 피드백을 요청드립니다.
            항목이 많더라도 시간내어 작성해주시면 많은 도움이 될거에요.
            
            되도록 강한 칭찬과 강한 비판을 부탁드립니다!`,
            onClickNext: () => setCurrentPage(prev => prev + 1),
        },
        {
            type: 'short',
            required: true,
            title: '이름을 알려주세요.',
            placeholder: '이름',
            name: 'name',
            defaultValue: data.name,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword1_rate,
            name: 'keyword1_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword1_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword1,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword1',
            defaultValue: data.keyword1,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword2_rate,
            name: 'keyword2_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword2_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword2,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword2',
            defaultValue: data.keyword2,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword3_rate,
            name: 'keyword3_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword3_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword3,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword3',
            defaultValue: data.keyword3,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword4_rate,
            name: 'keyword4_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword4_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword4,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword4',
            defaultValue: data.keyword4,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword5_rate,
            name: 'keyword5_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword5_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword5,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword5',
            defaultValue: data.keyword5,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword6_rate,
            name: 'keyword6_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword6_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword6,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword6',
            defaultValue: data.keyword6,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'choice',
            required: true,
            title: text.moyo1month.keyword7_rate,
            name: 'keyword7_rate',
            options: text.fiveLevel,
            defaultValue: data.keyword7_rate,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'long',
            required: true,
            title: text.moyo1month.keyword7,
            discription: '계속 지켜야할 것, 개선해야 할 것, 시도했으면 하는 것으로 나누어 설명해주셔도 좋아요.',
            placeholder: '자유롭게 적어주세요.',
            name: 'keyword7',
            defaultValue: data.keyword7,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            }),
            onClickNext: () => setCurrentPage(prev => prev + 1),
            onClickPrevious: () => setCurrentPage(prev => prev - 1),
        },
        {
            type: 'end',
            required: true,
            title: '모든 질문이 끝났어요.',
            discription: '작성한 피드백을 조회할 수 있는 링크를 이메일로 보내드릴게요.',
            placeholder: '이메일',
            name: 'mail',
            defaultValue: data.mail,
            callback: (name, value) => setData({ 
                ...data , 
                [name]: value
            })
            ,
            onClickNext: () => handleSubmit(),
            onClickPrevious: () => setCurrentPage(prev => prev - 1)
        },
        {
            type: 'done',
            title: '감사합니다.',
            discription: '빠른 시일 안에 피드백에 대한 답변을 드릴게요.',
            onClickNext: () => navigate('/'),
        },
    ]
    const handleSubmit = () => {
        const code = GenerateRandomCode.TextNumCode(3,3)
        axios.post('https://sheet.best/api/sheets/85bb335f-f290-49c4-ad1f-6004385e40ad', {
            ...data,
            code: code
        })
        .then(res => {
            // console.log(res);
        })
        emailjs.send('service_xufb8v7', emailkey.TEMPLATE_ID, {
            name: data.name,
            code: code,
            mail: data.mail,
        })
        .then( res => {
            // console.log('SUCCESS!', res.status, res.text)
        }, err => {
            // console.log('FAILED...', err)
        })
        setCurrentPage(prev => prev + 1)
    }
    return (
        <Container>
            <Form
                data={pages[currentPage]}
            />
            <Progress percent={currentPage/(pages.length - 1)*100}/>
        </Container>
    )
}
