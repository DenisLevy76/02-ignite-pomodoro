import { FC } from 'react'
import { Outlet } from 'react-router-dom'
import { HeaderComponent } from '../../../components/HeaderComponent'
import { Container } from './styles'

export const DefaultLayout: FC = () => {
  return (
    <Container>
      <HeaderComponent />
      <Outlet />
    </Container>
  )
}
