import styled from 'styled-components'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Download from './components/Download'
import WhatsHot from './components/WhatsHot'
import Expansion from './components/Expansion'
import MidBanner from './components/MidBanner'
import Footer from './components/Footer'
import Testimonials from './components/Testimonials'

function App() {
  return (
    <AppContainer>
     
      <Navbar />

      <AppBody>
        <Banner />
        <About />
        <WhatsHot />
        <Expansion />
      </AppBody>
      
        <MidBanner />
        <Testimonials />

      <AppBody>
        <Download />
      </AppBody>

        <Footer />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-width: 900px;
`

const AppBody = styled.div`
  width: 85vw;
  min-width: inherit;
  margin: 0 auto;
  padding: 0 40px;
`