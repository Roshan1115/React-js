import React from 'react';
import ReactDOM from 'react-dom';
import default_mera_value, {age, returnData} from './App'
import {DisplayAll} from './Calculation'      // for calculation challenge

ReactDOM.render(
    <>
    <h1>Hello this is import / export tutorial</h1>
    <h1>{default_mera_value}</h1>
    <h1>{returnData()}</h1>
    <h1>{age}</h1>
    <br />
    </>
    ,document.getElementById('root-1')
);


//...............................................................
//Calculation using import export
ReactDOM.render(<DisplayAll/>, document.getElementById('root-2'));