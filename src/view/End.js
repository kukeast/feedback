import React from 'react'
import styled from 'styled-components'
import Heading1 from '../components/typography/Heading1'
import Paragraph from '../components/typography/Paragraph'
import { Space } from '../constants/space'
import Footer from './Footer'

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: start;
    width: ${Space.width};
    gap: 16px;
`

export default function End({ title, discription, onClickNext, onClickPrevious }) {
    return (
        <Wrapper>
            <Heading1>{title}</Heading1>
            <Paragraph>{discription}</Paragraph>
            <Footer
                isStart={true}
                onClickNext={onClickNext}
                onClickPrevious={onClickPrevious}
            />
        </Wrapper>
    )
}
