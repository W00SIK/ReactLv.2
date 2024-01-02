import React from 'react'
import GlobalStyle from '../style/GlobalStyle'
import TodoBox from '../components/TodoBox'
import Header from '../components/Header'
import { useState } from 'react'
import { addBtn, deleteBtn, changeBtn } from '../redux/modules/hendlerReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate} from 'react-router-dom'
import {
    FontH1,
    FontH2,
    FontH3, 
    FontBoxTodoH1,
    FontBoxTodoH2,
    BoxHeader,
    BoxInputButton,
    BoxMainWarkingName,
    BoxMainWarkingNameArea,
    BoxMainWarkingArea,
    BoxTodo,
    InputStyle,
    HendlerAddButtonStyle,
    HendlerTodoButtonStyle,
} from '../style/StyledSheet'

function Home() {

    const navigate = useNavigate(null);
    const dispatch = useDispatch();

    // 기본 상태
    const user = useSelector((state) => {
        return state.hendlerReducer
    })

    // 인풋 밸류
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")


    // isDone 상태 업데이트
    const hendlerIsdoneState = id => {
        dispatch(changeBtn(id))
    }

    // 추가 버튼
    const hendlerAddButton = () => {

        const newUser = {
            id: user.length + 1,
            title,
            contents,
            isDone: false,
        }
        dispatch(addBtn(newUser))
        setTitle("")
        setContents("")

    }

    // 삭제버튼
    const hendlerRemoveButton = (id) => {
        dispatch(deleteBtn(id))
    }


    return (
        <>
            <GlobalStyle />

            <Header
                BoxHeader={BoxHeader}
                FontH1={FontH1}
                FontH2={FontH2}
                FontH3={FontH3}
                BoxInputButton={BoxInputButton}
                InputStyle={InputStyle}
                HendlerAddButtonStyle={HendlerAddButtonStyle}
                title={title}
                contents={contents}
                hendlerAddButton={hendlerAddButton}
                setTitle={setTitle}
                setContents={setContents}
            />


            <TodoBox
                BoxMainWarkingArea={BoxMainWarkingArea}
                user={user}
                BoxTodo={BoxTodo}
                FontBoxTodoH1={FontBoxTodoH1}
                FontBoxTodoH2={FontBoxTodoH2}
                HendlerTodoButtonStyle={HendlerTodoButtonStyle}
                FontH3={FontH3}
                FontH2={FontH2}
                BoxMainWarkingNameArea={BoxMainWarkingNameArea}
                BoxMainWarkingName={BoxMainWarkingName}
                hendlerRemoveButton={hendlerRemoveButton}
                hendlerIsdoneState={hendlerIsdoneState}
                navigate={navigate}
            />


        </>
    )
}

export default Home