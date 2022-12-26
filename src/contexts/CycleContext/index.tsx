import React, { createContext, FC, ReactNode, useState } from 'react'
import { ICycle } from '../../@types/cycle'

export interface CycleContextData {
  cycles: ICycle[]
  activeCycle: ICycle | undefined
  markCurrentCycleAsFinished: () => void
  interruptCurrentCycle: () => void
  createNewCycle: (newCycle: ICycle) => void
}

export const CycleContext = createContext({} as CycleContextData)

export const CycleContextProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cycles, setCycles] = useState<ICycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const createNewCycle = (newCycle: ICycle) => {
    setActiveCycleId(newCycle.id)
    setCycles((state) => [...state, newCycle])
  }

  const markCurrentCycleAsFinished = () => {
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
  }

  const interruptCurrentCycle = () => {
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

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        markCurrentCycleAsFinished,
        interruptCurrentCycle,
        createNewCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
