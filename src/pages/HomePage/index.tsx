import { Play } from 'phosphor-react'
import { FC } from 'react'
import { useForm } from 'react-hook-form'
import {
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  StartTimerButton,
  TaskInput,
  TimerContainer,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutes: zod.number().max(60).min(5),
})

export type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const HomePage: FC = () => {
  const { register, handleSubmit, watch } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
  })
  const task = watch('task')
  const isSubmitDisable = !task

  const handleCreateNewTask = (data: newCycleFormData) => {
    console.log(data)
  }

  return (
    <HomeContainer>
      <FormContainer onSubmit={handleSubmit(handleCreateNewTask)}>
        <fieldset>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para o seu projeto"
            list="task-suggestions"
            {...register('task')}
          />
          <datalist id="task-suggestions">
            <option value="Malhar abdomem" />
            <option value="Fazer 1 horas de ignite" />
            <option value="Trabalhar" />
          </datalist>
          <label htmlFor="time">durante</label>
          <MinutesInput
            type="number"
            step={5}
            min={5}
            max={60}
            id="time"
            placeholder="00"
            {...register('minutes', {
              valueAsNumber: true,
            })}
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
        <StartTimerButton type="submit" disabled={isSubmitDisable}>
          <Play size={24} />
          Começar
        </StartTimerButton>
      </FormContainer>
    </HomeContainer>
  )
}
