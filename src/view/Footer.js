import React from 'react'
import styled from 'styled-components'
import Button from '../components/input/Button'
import { space } from '../constants/space'

const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    max-width: ${space.width};
    gap: 16px;
`

export default function Footer({ type, isPass, onClickNext, onClickPrevious, isLoading }) {
    return (
        <Wrapper>
            {(type !== 'start' && type !== 'end') && <Button type='secondary' onClick={onClickPrevious}>이전</Button>}
            <Button onClick={onClickNext} disabled={!isPass} isLoading={isLoading}>{type === 'email' ? '보내기' : type === 'end' ? '돌아가기' : '다음'}</Button>
        </Wrapper>
    )
}
