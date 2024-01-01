import React from 'react'

function Header({
    BoxHeader,
    FontH1,
    FontH2,
    FontH3,
    BoxInputButton,
    InputStyle,
    HendlerAddButtonStyle,
    title,
    contents,
    hendlerAddButton,
    setTitle,
    setContents,

}) {
    return (
        <>
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
        </>
    )
}

export default Header