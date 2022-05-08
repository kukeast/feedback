import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import Button from '../components/input/Button'
import Container from '../components/surface/Container'
import Heading1 from '../components/typography/Heading1'
import { color } from '../constants/color'
import { space } from '../constants/space'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    max-width: ${space.width};
    padding: 0 20px;
    box-sizing: border-box;
    gap: 32px;
`
const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
`
const Description = styled.p`
    font-size: 18px;
    color: ${color.gray[6]};
`

export default function NotFound() {
    const navigate = useNavigate()
    const params = useParams()
    console.log(params['*'])
    return (
        <Container>
            <Wrapper>
                {params['*'] === 'terminated' ? 
                    <>
                        <TitleWrapper>
                            <Heading1>이미 종료 된 피드백이에요</Heading1>
                            <Description>슬랙을 통해 개인적으로 전달하거나 다음 피드백을 기다려주세요</Description>
                        </TitleWrapper>
                        <Button onClick={() => navigate('/')}>홈으로 이동</Button> 
                    </>:
                    <>
                        <TitleWrapper>
                            <Heading1>페이지를 찾을 수 없어요</Heading1>
                            <Description>주소를 다시 한 번 확인해주세요</Description>
                        </TitleWrapper>
                        <Button onClick={() => navigate('/')}>홈으로 이동</Button> 
                    </>
                }
            </Wrapper>
        </Container>
    )
}
