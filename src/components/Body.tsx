
import Container from 'react-bootstrap/esm/Container'
import Sidebar from './Sidebar'
import Stack from 'react-bootstrap/esm/Stack'

interface BodyProps {
  sidebar : boolean
  children: JSX.Element[] | JSX.Element 
}

export default function Body({ sidebar, children }: BodyProps) {
  return (
    <Container >
      <Stack direction='horizontal'>
        { sidebar && <Sidebar />}
        <div className='child-container'>
          { children }
        </div>
      </Stack>
    </Container>
  )
}
