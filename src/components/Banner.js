import styled from 'styled-components'
import bannerImaga from '../resources/images/bannerImage.png'

const Banner = () => {
    return (
        <BannerContainer>
            <BannerHighlight>
                <p>More fans, More Gigs, Less Effort. Get better feedback, wider exposure and deeper industry access without ever switching tabs.</p>

                <button>Let's get Started</button>
            </BannerHighlight>

            <img src={bannerImaga} alt="Banner-Imaga" />
            
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.div`
    padding: 10px;
    padding-top: 70px;
    padding-bottom: 200px;
    /* border: 1px solid white; */
    position: relative;

    > img {
        position: absolute;
        top: 30px;
        right: 20px;
        height: 400px;
    }
`

const BannerHighlight = styled.div`
    width: 50%;

    > p {
        font-size: 30px;
        font-weight: 700;
        color: white;
        margin-bottom: 40px;
    }

    > button {
        font-size: 11px;
        border-radius: 20px;
        padding: 0 50px;
        height: 40px;
        color: white;
        background-color: transparent;
        border: 1px solid;
        outline: none;
        cursor: pointer;
        transition: 300ms;
        font-family: 'Poppins', sans-serif;

        &:hover {
            background-color: #f28e1c;
            color: black;
        }
    }
`
