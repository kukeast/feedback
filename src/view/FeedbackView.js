import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Heading1 from '../components/typography/Heading1'
import { color } from '../constants/color'
import { feedbacks } from '../constants/feedbacks'
import { space } from '../constants/space'

const Wrapper = styled.div`
    width: 100%;
    max-width: ${space.wideWidth};
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 100px auto;
    @media (max-width: 480px) {
        margin: 60px auto;
        gap: 60px;
    }
`
const Answer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Title = styled.p`
    font-size: 24px;
    font-weight: 800;
    line-height: 1.5;
    color: ${color.gray[9]};
    white-space: pre-line;
    > span{
        font-size: 24px;
        font-weight: 800;
        line-height: 1.5;
        color: ${color.red[7]};
        margin-left: 2px;
    }
    @media (max-width: 480px) {
        font-size: 18px;
        > span{
            font-size: 18px;
        }
    }
`
const Description = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: ${color.gray[7]};
    white-space: pre-line;
    @media (max-width: 480px) {
        font-size: 16px;
    }
`
const Paragraph = styled.p`
    padding: 16px;
    font-size: 18px;
    border-radius: 4px;
    color: ${color.gray[9]};
    background-color: ${color.gray[1]};
    margin-top: 12px;
    line-height: 1.5;
    white-space: pre;
`
export default function FeedbackView() {
    const [searchParams] = useSearchParams()
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})

    useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/4ba77550-e25c-431b-a213-46ce0788a961/tabs/${searchParams.get('id')}/query?code=${searchParams.get('code')}`)
        .then(res => {
            setData(res.data[0])
            setLoading(false)
        })
    }, [searchParams])

    return (
            <Wrapper>
                {!isLoading &&
                    <>
                        <Heading1>{data.name}님의 피드백</Heading1>
                        {feedbacks.filter(i => i.id === parseInt(searchParams.get('id')))[0].contents.map( q => (
                            q.name && <Answer key={q.title}>
                                <Title>{q.title}{q.required && <span>*</span>}</Title>
                                {q.discription && <Description>{q.discription}</Description>}
                                <Paragraph>{data[q.name] ? data[q.name] : <i>답변 안 함</i>}</Paragraph>
                            </Answer>
                        ))}
                    </>
                }
            </Wrapper>
    )
}
