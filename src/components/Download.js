import styled from 'styled-components'
import App_Play_Store from '../resources/images/app-play-store.png'

const Download = () => {
    return (
        <DownloadContainer>
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
    padding: 10px;
    min-height: 80vh;
    /* border: 1px solid white; */
`

const DownloadText = styled.div`
    flex: 0.40;
    margin-left: auto;

    > h1 {
        color: #f28e1c;
        font-size: 35px;
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
