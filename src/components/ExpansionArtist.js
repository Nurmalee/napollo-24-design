import styled from 'styled-components'
import { Favorite } from '@material-ui/icons'
import Faded from '../resources/images/Music_Art2.PNG'

const ExpansionArtist = () => {
    return (
        <Artist>
            <h2>01</h2>
            <img src={Faded} alt="" height={70} />
            <div>
                <p>Lights Out</p>
                <p>ColdPlay</p>
            </div>
            <Favorite />
        </Artist>
    )
}

export default ExpansionArtist

const Artist = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    width: 75%;
    margin-bottom: 15px;

    > h2 {
        margin-right: 20px;
        font-size: 16px;
    }

    img {
        margin-right: 20px;
    }

    > div {
        flex: 1;
      
        > p {
            padding: 5px 0;
            font-size: 13px;
            color: #777;
        }
    }

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: #777;
    }

    &:nth-of-type(2) {
        > .MuiSvgIcon-root {
            color: #f28e1c;
        }  
    }
`
