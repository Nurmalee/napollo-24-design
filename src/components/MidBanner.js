import styled from 'styled-components'
import midBannerImage from '../resources/images/cassette.PNG'

const MidBanner = () => {
    return (
        <BannerContainer>
            <div>
                <BannerImage>
                    <img src={midBannerImage} alt="" />
                </BannerImage>

                <BannerText>
                    <h1>Listen and enjoy all trending music</h1>

                    <ul>
                        <li>What's hot</li>
                        <li>By genre</li>
                        <li>By location</li>
                        <li>Lot's more</li>
                    </ul>

                    <button>Start Listening</button>
                </BannerText>
            </div>   
        </BannerContainer>
    )
}

export default MidBanner

const BannerContainer = styled.div`
    background-color: #f28e1c;

    > div {
        display: flex;
        align-items: center;
        padding: 100px 40px;
        width: 85vw;
        min-width: 900px;
        margin: 0 auto;
    }
`

const BannerImage = styled.div`
    flex: 0.5;
    height: 220px;

    > img {
        height: 100%;
        object-fit: contain;
    }
`

const BannerText = styled.div`
    flex: 0.5;
    padding: 0 30px;

    > h1 {
        color: black;
        font-size: 2.8em;
        font-weight: 900;
        margin-bottom: 20px;
    }

    > ul {
        margin-top: 20px;
        margin-left: 20px;

        > li {
            list-style-type: circle;
        }
    }

    > button {
        font-size: 11px;
        border-radius: 20px;
        margin-top: 20px;
        padding: 0 40px;
        height: 40px;
        color: white;
        background-color: #222;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 300ms;
        font-family: 'Poppins', sans-serif;

        &:hover {
            background-color: #111;
        }
    }
`