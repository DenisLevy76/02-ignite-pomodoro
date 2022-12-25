import { Scroll, Timer } from 'phosphor-react'
import { FC } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Container } from './styles'

export const HeaderComponent: FC = () => {
  return (
    <Container>
      <Link to="/">
        <img
          src="/logo.svg"
          alt="Dois triângulos, verdes, empilhados representando a logo do ignite"
        />
      </Link>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/"
              title="Ir para a página inicial"
              aria-label="Ir para a página inicial"
            >
              <Timer size={32} />
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              title="Ir para a página de histórico"
              aria-label="Ir para a página de histórico"
            >
              <Scroll size={32} />
            </NavLink>
          </li>
        </ul>
      </nav>
    </Container>
  )
}
