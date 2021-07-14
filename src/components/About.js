import styled from 'styled-components'

const About = () => {
    return (
        <AboutContainer>
            <AboutText>
                <h1>About Napollo</h1>
                <p>Napollo is a music streaming service that connects artistes to listeners in a way that has never been done before. <br /> <br /> Artists, musicians, music lovers, producers, no matter your taste or skills are, we are here to save you the best all around the world
                </p>
            </AboutText>
            
        </AboutContainer>
    )
}

export default About


const AboutContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    width: 950px;
    margin: 0 auto;
    min-height: 80vh;
    /* border: 1px solid white; */
`

const AboutText = styled.div`
    flex: 0.45;

    > h1 {
        color: #f28e1c;
        font-size: 35px;
        font-weight: 700;
    }

    > p {
        color: white;
    }
`