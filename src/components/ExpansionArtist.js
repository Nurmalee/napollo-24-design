import styled from 'styled-components'
import { Favorite } from '@material-ui/icons'


const ExpansionArtist = ({id, image, artistName, songTitle}) => {
    return (
        <Artist>
            <h2>{id < 10 ? `0 ${id + 1}` : id + 1}</h2>
            <img src={image} alt="" height={70} />
            <div>
                <p>{songTitle}</p>
                <p>{artistName}</p>
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
        cursor: pointer;

        &:hover {
            transform: scale(0.95);
        }
    }

    > div {
        flex: 1;
      
        > p {
            padding: 5px 0;
            font-size: 13px;
            color: #777;

            &:first-of-type {
                color: #BBB;
            }
        }
    }

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: #777;
        cursor: pointer;

        &:hover {
            color: #f28e1c;
        }
    }

    &:nth-of-type(2) {
        > .MuiSvgIcon-root {
            color: #f28e1c;
        }  
    }
`
