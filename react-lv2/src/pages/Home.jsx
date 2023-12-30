import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'
import { useState } from 'react'
import {addBtn, deleteBtn} from '../redux/modules/hendlerButton'
import {useDispatch, useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import DetailPage from './DetailPage'

const FontH1 = styled.span`
    font-size: 18px;
    font-weight: 700;
    color:#FFB0CF;
    
`
const FontH2 = styled.span`
    font-size: 14px;
    font-weight: 600;
    color:#FFB0CF;
`

const FontH3 = styled.span`
    font-size: 14px;
    font-weight: 700;
    color: white;
`

const FontBoxTodoH1 = styled.div`
    height:25px;
    font-size: 14px;
    font-weight: 900;
    color: #FFB0CF;
    border-bottom: 2px solid;
    overflow: auto;
    
`
const FontBoxTodoH2 = styled.div`
    font-size: 12px;
    height:70px;
    font-weight: 900;
    color: #6969cc;
    margin-top: 7px;
    overflow: auto;
`


const BoxHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    border: 2px solid #FFB0CF;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`

const BoxInputButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: row;
    align-items: center;
    height: 60px;
    border-radius: 10px;
    width: 100vh;
    margin: 0px auto;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px #6969cc;
    padding: 0px 10px;
    margin-top: 5px;
`

const BoxMainWarkingName = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 6px;
    width: 10vh;
    border: 2px solid #FFB0CF;
    background-color: #A0A0FF;
    box-shadow: 5px 5px 5px #6969cc;
    margin: 0px 10px;
`
const BoxMainWarkingNameArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 40px;
    border-radius: 10px;
    width: 105vh;
    margin: 0px auto;
    margin-top: 60px;
`

const BoxMainWarkingArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    height: 160px;
    width: 105vh;
    /* border: 1px solid white; */
    overflow: auto;
    overflow-y: hidden;
    margin: 0px auto;
    &::-webkit-scrollbar {
    width: 2px;
    height: 10px;
    border-radius: 6px;
    background: #6969cc;
    }
    &::-webkit-scrollbar-thumb {
    background: #FFB0CF;
    border-radius: 6px;
    }
    
`

export const BoxTodo = styled.div`
    padding: 6px 9px;
    min-width: 190px;
    height: 130px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 5px #6969cc;
    margin-top: 2px;
    margin-bottom: 5px;
    margin-left: 10px;
`

const InputStyle = styled.input`
    border: none;
    border-bottom: 2px solid #FFB0CF;
    outline: none;
    margin-right: 40px;
    margin-left: 10px;
    width: 180px;
`
const HendlerAddButtonStyle = styled.button`
    width: 39px;
    height: 24px;
    padding: 1px 1px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    margin-left: auto;
    cursor: pointer;
`

const HendlerTodoButtonStyle = styled.button`
    height: 24px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    margin-right:5px;
    cursor: pointer;
`

function Home() {
    // 기본 상태
    const [user, setUser] = useState([
        {
            id: 1,
            title: "리액트 공부하기",
            contents: "리액트를 공부해봅시다.",
            isDone: false,
        }
    ])

    // 인풋 밸류
    const [title, setTitle] = useState("")
    const [contents, setContents] = useState("")


    // isDone 상태 업데이트
    // const hendlerIsdoneState = id => {
    //     const userIsdone =  user.map(user =>
    //         user.id === id ? { ...user, isDone: !user.isDone } : user
    //         );
    // }




    // 추가 버튼
    const hendlerAddButton = () => {
        
            const newUser = {
                id: user.length + 1,
                title,
                contents,
                isDone: false,
                
            }
            
            setUser([...user, newUser])
            setTitle("")
            setContents("")
        
    }
    // 삭제버튼
    const hendlerRemoveButton = (id) => {
        const remove = user.filter(item => item.id !== id)
        setUser(remove)
    }

    const navigate = useNavigate(null);
    return (
        <>
            <GlobalStyle />

            <BoxHeader>
                <FontH1>Todo List</FontH1>
                <FontH2>React</FontH2>
            </BoxHeader>

            <BoxInputButton>
                <FontH2>TITLE</FontH2>
                <InputStyle
                    type='text'
                    value={title}
                    onChange={(event) => {
                        setTitle(event.target.value)
                    }}
                />

                <FontH2>CONTENTS</FontH2>
                <InputStyle type='text'
                    value={contents}
                    onChange={(event) => {
                        setContents(event.target.value)
                    }}
                />
                <HendlerAddButtonStyle
                    onClick={() => {
                        return hendlerAddButton()
                    }}
                >
                    <FontH3>추가</FontH3>
                </HendlerAddButtonStyle>
            </BoxInputButton>

            <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2>WORKING</FontH2>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>

            <BoxMainWarkingArea>
                {
                    user.map((item) => {
                        return (
                            <BoxTodo key={item.id}>
                                <FontBoxTodoH1>{item.title}</FontBoxTodoH1>
                                <FontBoxTodoH2>{item.contents}</FontBoxTodoH2>

                                <HendlerTodoButtonStyle
                                    onClick={() => hendlerRemoveButton(item.id)}
                                >
                                    <FontH3>삭제</FontH3>
                                </HendlerTodoButtonStyle>

                                <HendlerTodoButtonStyle>
                                    <FontH3>완료</FontH3>
                                </HendlerTodoButtonStyle>

                                <HendlerTodoButtonStyle
                                onClick = {() => {
                                    navigate("/DetailPage")
                                }}
                                >
                                    <FontH3>상세보기</FontH3>
                                </HendlerTodoButtonStyle>

                            </BoxTodo>
                        )
                    })
                }
            </BoxMainWarkingArea>

            <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2>DONE</FontH2>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>
                
        </>
    )
}

export default Home