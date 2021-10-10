import React from 'react'
import styled from 'styled-components'

const Grid1 = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 100px;
`
const Grid2 = styled.div`
    display: grid;
    grid-template-columns: 200px 200px 200px;
    grid-auto-columns: 1fr;
    grid-gap: 10px;
    grid-template-rows: 100px;
    grid-auto-flow: column;
`

const Grid3 = styled.div`
    display: grid;
    grid-template-areas: 
        "header header header"
        "aside main main"
        "footer footer footer"
    ;
    grid-template-rows: 100px 200px 50px;
    
`

const Grid4 = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(200px,1fr));
    grid-template-rows: repeat(3,150px);
    
`

export default function MyGrid() {
    return (
        <Grid4>
            <div style={{background: "red",width: 50, height: 50}}>A</div>
            <div style={{background: "blue", width: 50, height: 50}}>B</div>
            <div style={{background: "yellow", width: 50, height: 50 }}>C</div>
            <div style={{ background: "green", width: 50, height: 50 }}>D</div>
            <div style={{ background: "purple", width: 50, height: 50 }}>E</div>
            <div style={{ background: "cyan", width: 50, height: 50 }}>F</div>
            <div style={{ background: "gray", width: 50, height: 50 }}>G</div>
        </Grid4>
    )
}