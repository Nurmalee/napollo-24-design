import styled from 'styled-components'
// import { Button } from '@material-ui/core';

const Banner = () => {
    return (
        <BannerContainer>
            <BannerHighlight>
                <p>More fans, More Gigs, Less Effort. Get better feedback, wider exposure and deeper industry access without ever switching tabs.</p>

                <button>Let's get Started</button>
            </BannerHighlight>
            
        </BannerContainer>
    )
}

export default Banner

const BannerContainer = styled.div`
    padding: 10px;
    padding-top: 50px;
    padding-bottom: 200px;
    /* border: 1px solid white; */
`

const BannerHighlight = styled.div`
    width: 45%;

    > p {
        font-size: 30px;
        font-weight: 700;
        color: white;
    }

    > button {
        font-size: 11px;
        border-radius: 20px;
        padding: 0 40px;
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
