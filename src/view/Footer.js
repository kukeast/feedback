import React from 'react'
import styled from 'styled-components'
import Button from '../components/input/Button'
import Loading from '../components/surface/Loading'
import { color } from '../constants/color'
import { space } from '../constants/space'

const Wrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    max-width: ${space.width};
`
const ButtonWrapper = styled.div`
    display: flex;
    gap: 16px;
`
const Saving = styled.div`
    display: flex;
    align-items: center;
    color: ${color.indigo[7]};
    flex: 1;
    gap: 8px;
    line-height: 1.5;
    opacity: 1;
    animation: fadeIn 0.3s;

    @keyframes fadeIn {
        from { opacity: 0; }
    }
    @-webkit-keyframes fadeIn {
        from { opacity: 0;}
    }
`
const Check = styled.div`
    display: inline-block;
    transform: rotate(45deg);
    height: 12px;
    width: 8px;
    border-bottom: 2px solid ${color.teal[6]};
    border-right: 2px solid ${color.teal[6]};
    margin-left: 5px;
    margin-top: 1px;
`
const Done = styled.div`
    display: flex;
    color: ${color.teal[7]};
    flex: 1;
    gap: 13px;
    line-height: 1.5;
    animation: fadeOut 0.3s;
    animation-delay: 0.7s;
    opacity: 1;

    @keyframes fadeOut {
        to { opacity: 0; }
    }
    @-webkit-keyframes fadeOut {
        to { opacity: 0;}
    }
`

export default function Footer({ type, isPass, onClickNext, onClickPrevious, isLoading, autoSave }) {
    return (
        <Wrapper>
            {autoSave === 'saving' &&
                <Saving>
                    <Loading color='indigo' size='s'/>
                        <p>저장 중</p>
                </Saving>
            }
            {autoSave === 'done' &&
                <Done>
                    <Check/>
                    <p>저장 완료</p>
                </Done>
            }
            <ButtonWrapper>
                {(type !== 'start' && type !== 'end') && <Button type='secondary' onClick={onClickPrevious}>이전</Button>}
                <Button onClick={onClickNext} disabled={!isPass} isLoading={isLoading}>{type === 'email' ? '보내기' : type === 'end' ? '돌아가기' : '다음'}</Button>
            </ButtonWrapper>
        </Wrapper>
    )
}
