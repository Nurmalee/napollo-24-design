import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Download from './components/Download'
import WhatsHot from './components/WhatsHot'
import Expansion from './components/Expansion'
import MidBanner from './components/MidBanner'

function App() {
  return (
    <>
      <Navbar />

      <AppBody>
        <Banner />
        <About />
        <WhatsHot />
        <Expansion />
      </AppBody>
      
      <MidBanner />

      <AppBody>
        <Download />
      </AppBody>
    </>
  );
}

export default App;

const AppBody = styled.div`
  width: 85vw;
  min-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
`