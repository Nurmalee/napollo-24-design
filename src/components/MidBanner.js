import styled from 'styled-components'
import midBannerImage from '../resources/images/cassette.PNG'

const MidBanner = () => {
    return (
        <MidBannerContainer>
            <div>
                <BannerImage>
                    <img src={midBannerImage} alt="cassette" />
                </BannerImage>

                <BannerText>
                    <h1>Listen and enjoy all trending music</h1>

                    <ul>
                        <li>What's hot</li>
                        <li>By genre</li>
                        <li>By location</li>
                        <li>lots more</li>
                    </ul>

                    <button>Start listening</button>

                </BannerText>
            </div>   
        </MidBannerContainer>
    )
}

export default MidBanner

const MidBannerContainer = styled.div`
    background-color: #f28e1c;

    > div {
        display: flex;
        align-items: center;
        padding: 70px 40px;
        margin: 0 auto;
    }
`

const BannerImage = styled.div`
    flex: 0.5;
    height: 220px;
    text-align: center;
    padding-right: 10px;
   
    > img {
        height: 100%;
        object-fit: contain;
    }
`

const BannerText = styled.div`
    flex: 0.5;
    padding: 10px 20px;
    margin-left: auto;

    > h1 {
        font-size: 2.8em;
        font-weight: 800;
    }

    > ul {
        margin-bottom: 30px;
        margin-left: 20px;

        > li {
            padding: 3px 0;
        }
    }

    > button {
        font-size: 11px;
        border-radius: 20px;
        padding: 0 50px;
        height: 40px;
        color: white;
        background-color: #222;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 300ms;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        box-shadow: 0 0 10px black;

        &:hover {
            background-color: #111;
        }
    }

`