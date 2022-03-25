import React from 'react'
import styled from 'styled-components'
import Button from '../components/input/Button'
import { space } from '../constants/space'

const Wrapper = styled.div`
    display: flex;
    justify-content: end;
    width: ${space.width};
    gap: 16px;
`

export default function Footer({ type, isPass, onClickNext, onClickPrevious }) {
    return (
        <Wrapper>
            {onClickPrevious && <Button type='secondary' onClick={onClickPrevious}>이전</Button>}
            <Button onClick={onClickNext} disabled={!isPass}>{type === 'end' ? '보내기' : type === 'done' ? '돌아가기' : '다음'}</Button>
        </Wrapper>
    )
}
