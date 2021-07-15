import styled from 'styled-components'
import { FavoriteBorder, ArrowForwardIos } from '@material-ui/icons';
import {albums, singles} from '../musicalAPI'
import whatshotImg from '../resources/images/whatshot-image.PNG'
import TrendingMusicals from './TrendingMusicals';

const WhatsHot = () => {
    return (
        <TrendingContainer>
            <TrendingItems>
                <h1>What's Hot!</h1>

                <TrendingMusicals heading="Albums" category={albums} />
                <TrendingMusicals heading="Singles & EPs" category={singles} />
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