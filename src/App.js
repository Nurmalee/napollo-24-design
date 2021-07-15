import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Download from './components/Download'


function App() {
  return (
    <AppContainer>
      <Navbar />
      <AppBody>
        <Banner />
        <About />
        <Download />
      </AppBody>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 /* width: 1100px; */
`

const AppBody = styled.div`
 width: 85%;
 margin: 0 auto;
`