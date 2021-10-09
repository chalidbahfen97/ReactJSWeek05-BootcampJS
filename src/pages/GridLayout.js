import React from 'react'
import styled from 'styled-components'

const Grid1 = styled.div `
    display : grid;
    grid-template-rows : 100px 150px;
    grid-template-columns : repeat(3,200px);
    grid-gap : 10px;
`;

const Grid2 = styled.div `
    display : grid;
    grid-template-areas :
    "header header header"
    "aside main main"
    "footer footer footer"
    "me me me"
    ;
`;

export default function GridLayout() {
    return (
        <Grid2>
            <div style={{gridArea : "header",background : "red"}}>Header</div>
            <div style={{gridArea : "aside",background : "green"}}>Sidebar</div>
            <div style={{gridArea : "main",background : "blue",}}>Main</div>
            <div style={{gridArea : "footer",background : "yellow"}}>Footer</div>
            <div style={{gridRowStart:4,gridColumnStart:2,gridColumnEnd:3, gridArea : "me",background : "purple"}}>ME</div>


        {/* <div style={{background : "red"}}>A</div>
            <div style={{background : "green" , width : "50px" , height : "50px"}}>B</div>
            <div style={{background : "blue" , width : "50px" , height : "50px"}}>C</div>
            <div style={{background : "yellow"}}>D</div>
            <div style={{background : "purple" , width : "50px" , height : "50px"}}>E</div> */}
        </Grid2>
    )
}
