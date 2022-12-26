import { HandPalm, Play } from 'phosphor-react'
import { FC, useCallback, useEffect, useState } from 'react'
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
import { differenceInSeconds } from 'date-fns'
import { CountdownComponent } from '../../components/CountdownComponent'

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

  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

  const isSubmitDisable = !task
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const totalSeconds = activeCycle ? activeCycle.minutes * 60 : 0
  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = minutesAmount.toString().padStart(2, '0')
  const seconds = secondsAmount.toString().padStart(2, '0')

  const handleCreateNewTask = ({ task, minutes }: newCycleFormData) => {
    const id = crypto.randomUUID()

    const newCycle: ICycle = {
      id,
      task,
      minutes,
      startDate: new Date(),
    }

    setActiveCycleId(id)
    setCycles((state) => [...state, newCycle])

    setAmountSecondsPassed(0)
    reset()
  }

  const handleInterruptCycle = () => {
    setCycles((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            interruptedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  const handleFinishCycle = useCallback(() => {
    setCycles((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }, [activeCycleId])

  useEffect(() => {
    let countdown: number

    if (activeCycle) {
      countdown = setInterval(() => {
        const differenceSeconds = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (differenceSeconds >= totalSeconds + 1) {
          handleFinishCycle()
        } else {
          setAmountSecondsPassed(differenceSeconds)
        }
      }, 1000)
    }

    return () => {
      clearInterval(countdown)
    }
  }, [activeCycle, totalSeconds, handleFinishCycle])

  useEffect(() => {
    if (activeCycle) document.title = `${minutes}:${seconds}`
    else document.title = 'Ignite pomodoro'
  }, [activeCycle, minutes, seconds])

  useEffect(() => {
    console.log(cycles)
  }, [cycles])

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
        <CountdownComponent minutes={minutes} seconds={seconds} />
        {activeCycle ? (
          <CancelButton
            type="button"
            onClick={handleInterruptCycle}
            disabled={!isSubmitDisable}
          >
            <HandPalm size={24} />
            Começar
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
