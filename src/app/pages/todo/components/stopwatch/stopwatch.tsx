import React, { useRef, useState } from 'react'
import { Button } from '@mui/material'

export const Stopwatch = () => {
  const [startTime, setStartTime] = useState(0)
  const [now, setNow] = useState(0)

  const intervalRef = useRef<any>(null)

  function handleStart() {
    setStartTime(Date.now())
    setNow(Date.now())

    clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setNow(Date.now())
    }, 10)
  }

  function handleStop() {
    clearInterval(intervalRef.current)
  }

  let secondsPassed = 0
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000
  }

  return (
    <>
      <p>Time passed: {secondsPassed.toFixed(3)}</p>
      <Button onClick={handleStart}>Start</Button>
      <Button onClick={handleStop}>Stop</Button>
    </>
  )
}
