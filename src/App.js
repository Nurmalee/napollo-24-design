import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Download from './components/Download'
import WhatsHot from './components/WhatsHot'


function App() {
  return (
    <AppContainer>
      <Navbar />
      <AppBody>
        <Banner />
        <About />
        <WhatsHot />
        <Download />
      </AppBody>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
 /* width: 100vw; */
`

const AppBody = styled.div`
  width: 85vw;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
`