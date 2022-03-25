import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/surface/Container'
import Heading1 from '../components/typography/Heading1'
import { color } from '../constants/color'
import { space } from '../constants/space'
import { text } from '../constants/text'

const Wrapper = styled.div`
    width: ${space.width};
    display: flex;
    flex-direction: column;
    gap: 40px;
`
const Answer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Title = styled.p`
    font-size: 16px;
    font-weight: 700;
    line-height: 1.5;
    color: ${color.gray[9]};
    white-space: pre-line;
`
const Paragraph = styled.p`
    font-size: 16px;
    color: ${color.gray[9]};
    line-height: 1.5;
`
export default function FeedbackView() {
    const [searchParams] = useSearchParams()
    const [isLoading, setLoading] = useState(true)
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://sheet.best/api/sheets/85bb335f-f290-49c4-ad1f-6004385e40ad/query?code=${searchParams.get('code')}`)
        .then(res => {
            setData(res.data[0])
            setLoading(false)
        })
    }, [searchParams])
    return (
        <Container>
            <Wrapper>
                {!isLoading &&
                    <>
                        <Heading1>{data.name}님의 피드백</Heading1>
                        {Object.keys(text.moyo1month).map((key, i) => (
                            <Answer key={i}>
                                <Title>{ i + 1 + '. ' + text.moyo1month[key]}</Title>
                                <Paragraph>{data[key]}</Paragraph>
                            </Answer>
                        ))}
                    </>
                }
            </Wrapper>
        </Container>
    )
}
