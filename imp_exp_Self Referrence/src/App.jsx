// import React from 'react';

const name = "my name is roshan";
const age = "my age is 19";

function returnData(){
    let mysentence = "This is returned by the component and I am learning import export here."
    return mysentence;
}

export default name;
export {age, returnData};