import styled from 'styled-components'
import { FavoriteBorder, ArrowForwardIos } from '@material-ui/icons';
import {albums, singles} from '../musicalAPI'
import whatshotImg from '../resources/images/whatshot-image.PNG'

const WhatsHot = () => {
    return (
        <TrendingContainer>
            <TrendingItems>
                <h1>What's Hot!</h1>

                <TrendingMusical>
                    <TrendingHeader>
                        <h3>Albums</h3>
                        <p>View All <ArrowForwardIos /> </p>
                    </TrendingHeader>
                  

                    <MusicArea>
                        {
                            albums.map(song => {
                                const {title, singer, likes, coverArt} = song;
                                return (
                                    <Music>
                                        <img src={coverArt} alt={title} />

                                        <div>
                                            {title}
                                            <FavoriteBorder />
                                        </div>
                                        <div>
                                            <span>{singer}</span>
                                            {likes}k
                                        </div>
                                    </Music>
                                )
                            })
                        }
                    </MusicArea>
                </TrendingMusical>

                <TrendingMusical>
                    <TrendingHeader>
                        <h3>Singles & EPs</h3>
                        <p>View All <ArrowForwardIos /> </p>
                    </TrendingHeader>

                    <MusicArea>
                        {
                            singles.map(song => {
                                const {title, singer, likes, coverArt} = song;
                                return (
                                    <Music>
                                        <img src={coverArt} alt={title} />

                                        <div>
                                            {title}
                                            <FavoriteBorder />
                                        </div>
                                        <div>
                                            <span>{singer}</span>
                                            {likes}k
                                        </div>
                                    </Music>
                                )
                            })
                        }
                    </MusicArea>
                </TrendingMusical>
            </TrendingItems>

            <TrendingImage>
                <img src={whatshotImg} alt="WhatsHot" />
            </TrendingImage>
            
        </TrendingContainer>
    )
}

export default WhatsHot

const TrendingContainer = styled.div`
    display: flex;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 200px;
`

const TrendingItems = styled.div`
    flex: 0.5;

    h1 {
        color: #f28e1c;
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 20px;
    }
`

const TrendingMusical = styled.div`
    margin-bottom: 50px;
`

const TrendingHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    margin-bottom: 15px;

    > h3 {
        font-weight: 700;
        cursor: pointer;
    }

    > p {
        font-size: 14px;
        display: flex;
        align-items: center;
        font-weight: 300;
        cursor: pointer;
        color: #BBB;

        &:hover {
            color: #f28e1c;
        }

        > .MuiSvgIcon-root {
            font-size: 14px;
            color: #BBB;
            margin-left: 7px;
        }
    }

`

const MusicArea = styled.div`
    color: white;
    display: flex;
    align-items: center;
    gap: 20px;
    width: 100%;
`

const Music = styled.div`
    cursor: pointer;
    flex: 1;
   

    > img {
        object-fit: contain;
        width: 100%;
        transition: 300ms;
        
        &:hover {
            transform: scale(0.97);
        } 
    }

    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 2px 5px;
        font-size: 12px;
        color: #BBB;
        text-transform: capitalize;

        > span {
            font-size: 12px;
            color: #f28e1c;
        }

        > .MuiSvgIcon-root {
            font-size: 20px;
            color: #BBB;
        }
    }
`

const TrendingImage = styled.div`
    flex: 0.5;
    text-align: right;
    height: 300px;
    margin-left: 30px;

    > img {
        height: 100%;
        object-fit: contain;
    }
`