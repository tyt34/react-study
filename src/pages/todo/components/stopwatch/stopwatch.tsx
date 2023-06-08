import React, { useEffect, useRef, useState } from 'react'
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

export const StopwatchClear = () => {
  const [time, setTime] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    let interval: any
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10)
      }, 10)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  const handleStart = () => {
    setIsRunning(true)
  }

  const handleStop = () => {
    setIsRunning(false)
  }

  const handleReset = () => {
    setIsRunning(false)
    setTime(0)
  }

  const formatTime = () => {
    const minutes = Math.floor(time / 60000)
    const seconds = Math.floor((time - minutes * 60000) / 1000)
    const milliseconds = Math.floor(
      (time - minutes * 60000 - seconds * 1000) / 10
    )
      .toString()
      .padStart(2, '0')
    return `${minutes.toString().padStart(2, '0')}:${seconds
      .toString()
      .padStart(2, '0')}.${milliseconds}`
  }

  return (
    <div>
      <p>Time passed: {formatTime()}</p>
      {isRunning ? (
        <Button onClick={handleStop}>Stop</Button>
      ) : (
        <Button onClick={handleStart}>Start</Button>
      )}
      <Button onClick={handleReset}>Reset</Button>
    </div>
  )
}
