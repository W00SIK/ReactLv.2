import React from 'react'
import GlobalStyle from '../style/GlobalStyle'
import { useNavigate } from 'react-router-dom'
import {
    FontH1,
    FontH3, 
    BoxHeader,
    BoxInputButtonH,
    HendlerTodoButtonStyle,
} from '../style/StyledSheet'


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
            <BoxInputButtonH>

            </BoxInputButtonH>
        </>
    )
}

export default DetailPage