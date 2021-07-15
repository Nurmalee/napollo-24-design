import styled from 'styled-components'
import { FavoriteBorder, ArrowForwardIos } from '@material-ui/icons';


const TrendingMusicals = ({heading, category}) => {
    return (
        <TrendingMusical>
            <TrendingHeader>
                <h3>{heading}</h3>
                <p>View All <ArrowForwardIos /> </p>
            </TrendingHeader>
            

            <MusicArea>
                {
                    category.map(song => {
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
    )
}

export default TrendingMusicals


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