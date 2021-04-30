import React, { useEffect, useState } from 'react'

const AppUseEffact = () => {
  const [num, setNum] = useState(0);
  const [secondnum, setSecondnum] = useState(0);

  useEffect(() => {
    alert("use Effact funciton called. Value of num is changed by clicking first button.")
  }, [num])

const increaseNum = () => {
  setNum(num + 1)
}
const increaseNumSecond = () => {
  setSecondnum(secondnum + 1)
}

  return(
    <>
    <button onClick={increaseNum}>Click me {num} </button>
    <button onClick={increaseNumSecond}>Click me {secondnum} </button>
    </>
  )
}
export default AppUseEffact;