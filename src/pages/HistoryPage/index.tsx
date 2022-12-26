import { format, formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { FC, useContext } from 'react'
import { CycleContext } from '../../contexts/CycleContext'

import { Container, HistoryList, Status } from './styles'

export const HistoryPage: FC = () => {
  const { cycles } = useContext(CycleContext)
  return (
    <Container>
      <h1>Meu Historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles
              .sort((cycle, nextCycle) => {
                if (cycle.startDate > nextCycle.startDate) return -1
                else return 1
              })
              .map((cycle) => {
                let status = 'Em andamento'
                if (cycle.finishedDate) status = 'concluído'
                else if (cycle.interruptedDate) status = 'interrompido'

                return (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutes} minutos</td>
                    <td>
                      <time
                        title={format(
                          cycle.startDate,
                          "dd 'de' MMMM 'de' yyyy, 'às' H:mm 'horas'",
                          {
                            locale: ptBR,
                          },
                        )}
                        dateTime={cycle.startDate.toISOString()}
                      >
                        {formatDistanceToNow(cycle.startDate, {
                          locale: ptBR,
                          addSuffix: true,
                        })}
                      </time>
                    </td>
                    <td>
                      {cycle.finishedDate && (
                        <Status color="green">{status}</Status>
                      )}
                      {cycle.interruptedDate && (
                        <Status color="red">{status}</Status>
                      )}
                      {!cycle.finishedDate && !cycle.interruptedDate && (
                        <Status color="yellow">{status}</Status>
                      )}
                    </td>
                  </tr>
                )
              })}
          </tbody>
        </table>
      </HistoryList>
    </Container>
  )
}
