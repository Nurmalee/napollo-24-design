import styled from 'styled-components'
import Napollo from '../resources/images/Napollo.png'


const About = () => {
    return (
        <AboutContainer>
            <AboutText>
                <h1>About Napollo</h1>
                <p>Napollo is a music streaming service that connects artistes to listeners in a way that has never been done before. <br /> <br /> Artists, musicians, music lovers, producers, no matter your taste or skills are, we are here to save you the best all around the world
                </p>
            </AboutText>

            <AboutImage>
                <img src={Napollo} alt="Napollo-Logo" />
            </AboutImage>
        </AboutContainer>
    )
}

export default About


const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 200px;
`

const AboutText = styled.div`
    flex: 0.45;
  
    > h1 {
        color: #f28e1c;
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 20px;
    }

    > p {
        color: white;
        width: 80%;
        font-weight: 200;
        font-size: 14px;
    }
`

const AboutImage = styled.div`
    flex: 0.55;
    text-align: center;
    padding-top: 50px;
    height: 270px;

    > img {
        height: 100%;
        object-fit: contain;
    }
` 