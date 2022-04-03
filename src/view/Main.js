import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Container from '../components/surface/Container'
import Heading1 from '../components/typography/Heading1'
import { color } from '../constants/color'
import { feedbacks } from '../constants/feedbacks'
import { space } from '../constants/space'

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
const Label = styled.p`
    font-size: 16px;
    font-weight: 700;
    color: ${color.gray[7]};
`
const Feedbacks = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`
const Feedback = styled.div`
    display: flex;
    padding: 24px 0;
    width: 100%;
    align-items: center;
    justify-content: space-between;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
`
const Title = styled.p`
    font-size: 18px;
    color: ${color.gray[9]};
`
const DateRange = styled.p`
    font-size: 16px;
    color: ${color.gray[6]};
`
const LinkButton = styled(Link)`
    color: ${color.gray[9]};
    font-weight: 600;
    text-decoration: none;
    padding: 12px;
    border-radius: 8px;
    background-color: ${color.gray[1]};
    &:hover{
        background-color: ${color.gray[2]};
    }
    &:active{
        background-color: ${color.gray[3]};
    }
`

export default function Main() {
    return (
        <Container>
            <Wrapper>
                <Heading1>이동국에게 피드백 보내기</Heading1>
                <Feedbacks>
                    <Label>진행 중</Label>
                    {feedbacks.map(route => (
                        <Feedback key={route.id}>
                            <TitleWrapper>
                                <Title>{route.title}</Title>
                                <DateRange>{route.startDate}~{route.endDate}</DateRange>
                            </TitleWrapper>
                            <LinkButton to={route.path}>작성하기</LinkButton>
                        </Feedback>
                    ))}
                </Feedbacks>
            </Wrapper>
        </Container>
    )
}
