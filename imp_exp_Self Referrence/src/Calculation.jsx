import React from 'react'

function add(x, y){
    return(x+y);
}

function sub(x,y){
    return(x-y);
}

function mult(x,y){
    return x*y;
}
function div(x,y){
    let quo = x/y;
    quo = quo.toFixed(2)    // 2 places after decimal
    return quo;
}

function DisplayAll(){
    return(
        <>
    <h1>The addtion of 40 and 5 is : {add(40,5)}</h1>
    <h1>The Subtraction of 40 and 5 is : {sub(40,5)}</h1>
    <h1>The multiplication of 40 and 5 is : {mult(40,5)}</h1>
    <h1>The division of 10 and 3 is : {div(10,3)}</h1>
    <br/>
    </>
    );
}

export {DisplayAll};