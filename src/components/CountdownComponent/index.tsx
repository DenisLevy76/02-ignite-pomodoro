import { differenceInSeconds } from 'date-fns'
import { FC, useContext, useEffect, useState } from 'react'
import { CycleContext } from '../../contexts/CycleContext'
import { Separator, TimerContainer } from './styles'

export interface CountdownComponentProps {
  onCountdownFinished: () => void
}

export const CountdownComponent: FC<CountdownComponentProps> = ({
  onCountdownFinished,
}) => {
  const { activeCycle } = useContext(CycleContext)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  useEffect(() => {
    let countdown: number

    if (activeCycle) {
      countdown = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (differenceSeconds >= totalSeconds + 1) {
          onCountdownFinished()
        } else {
          setAmountSecondsPassed(differenceSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(countdown)
    }
  }, [activeCycle, totalSeconds, onCountdownFinished])

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
    else document.title = 'Ignite pomodoro'
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    setAmountSecondsPassed(0)
  }, [activeCycle])

  return (
    <TimerContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </TimerContainer>
  )
}
