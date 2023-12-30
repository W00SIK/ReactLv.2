import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import { useNavigate } from 'react-router-dom'

const FontH1 = styled.span`
    font-size: 18px;
    font-weight: 700;
    color:#FFB0CF;
    
`


const FontH3 = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: white;
`

const BoxHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center ;
    height: 60px;
    border: 2px solid #FFB0CF;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`
const HendlerTodoButtonStyle = styled.button`
    height: 24px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    margin-right:5px;
    cursor: pointer;
`
const BoxInputButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: row;
    align-items: center;
    height: 30vh;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`

function DetailPage() {

    const navigate = useNavigate(null);
    return (
        <>
            <GlobalStyle />

            <BoxHeader>
                <FontH1>Todo List</FontH1>
                <HendlerTodoButtonStyle
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <FontH3>이전으로</FontH3>
                </HendlerTodoButtonStyle>
            </BoxHeader>
            <BoxInputButton>
                
            </BoxInputButton>
        </>
    )
}

export default DetailPage