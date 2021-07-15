import styled from 'styled-components'
import App_Play_Store from '../resources/images/app-play-store.png'
import downloadImage from '../resources/images/download-image.PNG'

const Download = () => {
    return (
        <DownloadContainer>
            <DownloadImage>
                <img src={downloadImage} alt="" />
            </DownloadImage>

            <DownloadText>
                <h1>Download our IOS and Android apps <span>for Free</span></h1>
                <p>Downloaded over 10 million times in less than six months, our cross-platform app allows yout to listen to, discover, favourite, and share music on the go </p>
                <img src={App_Play_Store} alt="Stores Logo" height={45} />
            </DownloadText>
        </DownloadContainer>
    )
}

export default Download

const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 80vh;
`

const DownloadText = styled.div`
    flex: 0.5;
    margin-left: auto;
    padding: 10px 20px;

    > h1 {
        color: #f28e1c;
        font-size: 2.8em;
        font-weight: 700;

        > span {
            color: white;
        }
    }

    > p {
        color: white;
        font-size: 11px;
        line-height: 20px;
        font-weight: 100;
        margin-bottom: 30px;
        width: 70%;
    }
`

const DownloadImage = styled.div`
    flex: 0.5;
    height: 300px;

    > img {
        height: 100%;
        object-fit: contain;
    }
`
