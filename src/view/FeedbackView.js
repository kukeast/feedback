import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Heading1 from '../components/typography/Heading1'
import { color } from '../constants/color'
import { feedbacks } from '../constants/feedbacks'
import { space } from '../constants/space'

const Wrapper = styled.div`
    width: ${space.wideWidth};
    display: flex;
    flex-direction: column;
    gap: 80px;
    margin: 100px auto;
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
`
const Description = styled.p`
    font-size: 18px;
    line-height: 1.5;
    color: ${color.gray[7]};
    white-space: pre-line;
`
const Paragraph = styled.p`
    padding: 16px;
    font-size: 18px;
    border-radius: 4px;
    color: ${color.gray[9]};
    background-color: ${color.gray[1]};
    margin-top: 12px;
    line-height: 1.5;
`
export default function FeedbackView() {
    const [searchParams] = useSearchParams()
    const [params, setParams] = useState({
        id: searchParams.get('id'),
        code: searchParams.get('code')
    })
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})
    useEffect(() => {
        setParams({
            id: searchParams.get('id'),
            code: searchParams.get('code')
        })
    }, [searchParams])

    useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/85bb335f-f290-49c4-ad1f-6004385e40ad/tabs/${params.id}/query?code=${params.code}`)
        .then(res => {
            setData(res.data[0])
            setLoading(false)
        })
    }, [params])

    return (
            <Wrapper>
                {!isLoading &&
                    <>
                        <Heading1>{data.name}님의 피드백</Heading1>
                        {feedbacks.filter(i => i.id === parseInt(params.id))[0].contents.map( q => (
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
