import { Container, Logo } from './style'
import logo from '@assets/logo.png'

export function Header() {
  return (
    <Container>
      <Logo source={logo} />
    </Container>
  )
}
