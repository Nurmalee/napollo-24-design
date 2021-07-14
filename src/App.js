import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Banner />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 width: 1100px;
`