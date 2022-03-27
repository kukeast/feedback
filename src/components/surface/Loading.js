import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(255,255,255,.3);
    border-radius: 50%;
    border-top-color: #fff;
    animation: spin 1s infinite;
    -webkit-animation: spin 1s infinite;

    @keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
    @-webkit-keyframes spin {
        to { -webkit-transform: rotate(360deg); }
    }
`

export default function Loading() {
    return (
        <Wrapper/>
    )
}
