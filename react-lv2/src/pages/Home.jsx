import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../style/GlobalStyle'

const FontH1 = styled.span`
    font-size: 18px;
    font-weight: 700;
    color:#FFB0CF;
    
`
const FontH2 = styled.span`
    font-size: 14px;
    font-weight: 600;
    color:#FFB0CF;
    margin-right: 10px;
`

const FontH2Working= styled.span`
    font-size: 14px;
    font-weight: 600;
    color:#FFB0CF;
`

const FontH3 = styled.span`
    font-size: 14px;
    font-weight: 300;
    color: white;
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
    justify-content: space-around;
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 30px;
    border-radius: 6px;
    width: 14vh;
    background-color: #ffffff;
    box-shadow: 5px 5px 5px #6969cc;
    margin: 0px 8px;
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
    padding: 0px 10px;
    margin-top: 10px;
`

const BoxMainWarkingArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;

    width: 105vh;
    /* border: 1px solid white; */

    margin: 0px auto;
`

const BoxTodo = styled.div`
    width: 150px;
    height: 100px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 5px 5px 5px #6969cc;
    margin-top: 0px;
    margin-bottom: 5px;
    margin-left: 8px;
`

const InputStyle = styled.input`
    border: none;
    border-bottom: 2px solid #FFB0CF;
    outline: none;
    margin-right: 40px;
`
const HendlerAddButton = styled.button`
    padding: 4px 10px;
    border: none;
    border-radius: 3px;
    background-color: #FFB0CF;
    cursor: pointer;
`

function Home() {
    return (
        <>
            <GlobalStyle />

            <BoxHeader>
                <FontH1>Todo List</FontH1>
                <FontH2>React</FontH2>
            </BoxHeader>

            <BoxInputButton>
                <FontH2>TITLE</FontH2>
                <InputStyle />
                <FontH2>CONTENTS</FontH2>
                <InputStyle />
                <HendlerAddButton>
                    <FontH3>Add</FontH3>
                </HendlerAddButton>
            </BoxInputButton>

            <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2Working>WORKING</FontH2Working>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>

            <BoxMainWarkingArea>
                <BoxTodo></BoxTodo>
            </BoxMainWarkingArea>

            <BoxMainWarkingNameArea>
                <BoxMainWarkingName>
                    <FontH2Working>DONE</FontH2Working>
                </BoxMainWarkingName>
            </BoxMainWarkingNameArea>


        </>
    )
}

export default Home