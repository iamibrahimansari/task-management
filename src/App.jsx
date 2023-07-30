import styled from 'styled-components';
import {Header} from './components/Header';
import {List} from './components/List';

const Main = styled.main`
  background-color: #E58255;
  padding: 5rem 10rem;
  border-radius: 10px;
  width: 50%;
`

const App = () => {
  return (
    <Main>
      <Header />
      <List />
    </Main>
  )
}

export default App
