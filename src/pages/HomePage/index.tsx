import { HandPalm, Play } from 'phosphor-react'
import { FC, useContext } from 'react'
import { useForm } from 'react-hook-form'
import {
  CancelButton,
  FormContainer,
  HomeContainer,
  MinutesInput,
  StartTimerButton,
  TaskInput,
} from './styles'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { ICycle } from '../../@types/cycle'
import { CountdownComponent } from '../../components/CountdownComponent'
import { CycleContext } from '../../contexts/CycleContext'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutes: zod.number().max(60),
})

export type newCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const HomePage: FC = () => {
  const { register, handleSubmit, watch, reset } = useForm<newCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutes: 0,
    },
  })
  const task = watch('task')
  const {
    activeCycle,
    createNewCycle,
    markCurrentCycleAsFinished,
    interruptCurrentCycle,
  } = useContext(CycleContext)

  const isSubmitDisable = !task

  const handleCreateNewTask = ({ task, minutes }: newCycleFormData) => {
    const id = crypto.randomUUID()

    const newCycle: ICycle = {
      id,
      task,
      minutes,
      startDate: new Date(),
    }

    createNewCycle(newCycle)

    reset()
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
            max={60}
            id="time"
            placeholder="00"
            {...register('minutes', {
              valueAsNumber: true,
            })}
          />
          <label htmlFor="time">minutos.</label>
        </fieldset>
        <CountdownComponent onCountdownFinished={markCurrentCycleAsFinished} />
        {activeCycle ? (
          <CancelButton
            type="button"
            onClick={interruptCurrentCycle}
            disabled={!activeCycle}
          >
            <HandPalm size={24} />
            Interromper
          </CancelButton>
        ) : (
          <StartTimerButton type="submit" disabled={isSubmitDisable}>
            <Play size={24} />
            Começar
          </StartTimerButton>
        )}
      </FormContainer>
    </HomeContainer>
  )
}
