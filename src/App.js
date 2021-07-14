import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'


function App() {
  return (
    <AppContainer>
      <Navbar />
      <Banner />
      <About />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 width: 1100px;
`