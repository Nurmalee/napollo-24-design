import styled from 'styled-components'
import expansion_logo from '../resources/images/expansion-logo.PNG'
import ExpansionArtist from './ExpansionArtist'

const Expansion = () => {
    return (
        <ExpansionContainer>
            <ExpansionImage>
                <img src={expansion_logo} alt="expansion-logo" />
            </ExpansionImage>

            <ExpansionText>
                <h1>expansion page</h1>

                <p>Discover artistes all around the world by their location via the expansion page. Also, get to know the top artistes in any location on the globe.</p>

                <ExpansionArtist />
                <ExpansionArtist />
                <ExpansionArtist />
                <ExpansionArtist />
            </ExpansionText>
            
        </ExpansionContainer>
    )
}

export default Expansion

const ExpansionContainer = styled.div`
    display: flex;
    /* align-items: center; */
    padding-top: 50px;
    padding-bottom: 200px;
`

const ExpansionImage = styled.div`
    flex: 0.5;
    padding-top: 50px;
    height: 400px;

    > img {
        height: 100%;
        object-fit: contain;
    }
`

const ExpansionText = styled.div`
    flex: 0.5;

    > h1 {
        color: #f28e1c;
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
    }

    > p {
        color: white;
        width: 80%;
        font-weight: 200;
        font-size: 14px;
        margin-bottom: 20px;
    }
`
