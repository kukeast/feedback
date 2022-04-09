import React from 'react'
import { createPortal } from 'react-dom';
import styled from 'styled-components'
import { color } from '../../constants/color';

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: #49505785;
    display: flex;
    align-items: center;
    justify-content: center;
`

const ModalWrapper = styled.div`
    position: fixed;
    width: 100%;
    max-width: 400px;
    box-sizing: border-box;
    padding: 32px;
    background-color: ${color.white};
    overflow: scroll;
    border-radius: 16px;
    box-shadow: 0px 16px 24px 0px #4950570D;

    animation: slide 0.3s;
    display: flex;
    flex-direction: column;
    gap: 24px;
    > div {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
    @media (max-width: 480px) {
        max-width: 100%;
        padding: 20px;
        border-radius: 16px 16px 0 0;
        display: flex;
        flex-direction: column;
        gap: 16px;
        > div {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
    @keyframes slide{
        0%{
            opacity: 0.6;
            transform: translateY(20px);
        }
        100%{
            opacity: 1;
            transform: translateY(0px);
        }
    }

    
`

function Portal (props) {
    return createPortal(props.children, document.getElementById("portal"))
}

function Modal ({ children }) {
    return(
        <Portal>
            <Wrapper>
                <ModalWrapper>
                    {children}
                </ModalWrapper>
            </Wrapper>
        </Portal>
    )
}

export default Modal