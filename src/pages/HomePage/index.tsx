import { Play } from 'phosphor-react'
import { FC } from 'react'
import {
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartTimerButton,
  TaskInput,
  TimerContainer,
} from './styles'

export const HomePage: FC = () => {
  return (
    <HomeContainer>
      <FormContainer>
        <fieldset>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
          />
          <datalist id="task-suggestions">
            <option value="Malhar abdomem" />
            <option value="Fazer 2 horas de ignite" />
            <option value="Trabalhar" />
          </datalist>
          <label htmlFor="time">durante</label>
          <MinutesInput
            type="number"
            step={5}
            min={0}
            max={60}
            id="time"
            placeholder="00"
          />
          <label htmlFor="time">minutos.</label>
        </fieldset>
        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </TimerContainer>
        <StartTimerButton type="submit">
          <Play size={24} />
          Começar
        </StartTimerButton>
      </FormContainer>
    </HomeContainer>
  )
}
