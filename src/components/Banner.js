import styled from 'styled-components'

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
    width: 950px;
    margin: 0 auto;
    /* margin-bottom: 100px; */
    min-height: 80vh;
    /* border: 1px solid white; */
`

const BannerHighlight = styled.div`
    width: 55%;
    margin-top: 50px;

    > p {
        font-size: 30px;
        font-weight: 700;
        color: white;
    }

    > button {
        font-size: 11px;
        border-radius: 20px;
        padding: 0 25px;
        height: 32px;
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
