import { FC } from 'react'
import { Separator, TimerContainer } from './styles'

export interface CountdownComponentProps {
  minutes: string
  seconds: string
}

export const CountdownComponent: FC<CountdownComponentProps> = ({
  minutes,
  seconds,
}) => {
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
