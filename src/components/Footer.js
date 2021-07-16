import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import { Facebook, Twitter, Instagram } from '@material-ui/icons'
import Napollo from '../resources/images/Napollo.png'
import App_Play_Store from '../resources/images/app-play-store.png'

const Footer = () => {
    return (
        <FooterContainer>
            {/* <div> */}
                <FooterLogo>
                    <img src={Napollo} alt="Napollo Logo" height={50} />
                    <h2>&copy; 2020 Napollo</h2>
                    <h2>
                        <span>legal </span>
                        <span>privacy </span>
                        <span>cookies</span> 
                    </h2>
                </FooterLogo>

                <FooterLinks>
                    <ul>
                        <h2>napollo</h2>
                        <li>about</li>
                        <li>sign up</li>
                        <li>forgot password</li>
                        <li>contact</li>
                    </ul>

                    <ul>
                        <h2>artist membership</h2>
                        <li>overview</li>
                        <li>pricing</li>
                        <li>opportunities</li>
                        <li>shows</li>
                        <li>help</li>
                    </ul>

                    <ul>
                        <h2>listener</h2>
                        <li>overview</li>
                        <li>pricing</li>
                        <li>suggested playlists</li>
                        <li>discover</li>
                        <li>reviews</li>
                    </ul>

                    <ul>
                        <h2>listener</h2>
                        <li>terms of service</li>
                        <li>privacy policy</li>
                        <li>copyright policy</li>
                        <li>cookies</li>
                        <li>trademark</li>
                    </ul>

                </FooterLinks>

                <FooterSocial>
                    <h2>follow us</h2>
                    <p>
                        <IconButton>
                            <Facebook />
                        </IconButton>

                        <IconButton>
                            <Twitter />
                        </IconButton>

                        <IconButton>
                            <Instagram />
                        </IconButton>
                    </p>
                    <h2>download app</h2>
                    <img src={App_Play_Store} alt="Stores Logo" height={30} />

                </FooterSocial>
            {/* </div> */}
        </FooterContainer>
    )
}

export default Footer

const FooterContainer = styled.footer`
    background-color: #222;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 30px;
`

const FooterLogo = styled.div`
    text-align: center;

    > img {
        margin-bottom: 20px;
    }

    > h2 {
        color: #999;
        font-size: 13px;
        text-transform: capitalize;
        font-weight: 600;
        padding: 4px 0;
        margin-bottom: 20px;
    }
`

const FooterLinks = styled.div`
    display: flex;
    flex: 0.6;
    justify-content: space-between;
    gap: 30px;

    > ul {
        list-style-type: none;
      
        > h2 {
            color: #999;
            font-size: 13px;
            text-transform: capitalize;
            font-weight: 600;
            padding: 4px 0;
        }

        > li {
            color: white;
            font-size: 12px;
            text-transform: capitalize;
            font-weight: 400;
            padding: 7px 0;
            cursor: pointer;
        }

        @media screen and (max-width: 600px) {
            flex: 0.7;
            &:nth-of-type(4) {
                display: none;
            }
        }
    }
`

const FooterSocial = styled.div`
    text-align: center;

    > h2 {
        color: #999;
        font-size: 13px;
        text-transform: capitalize;
        font-weight: 600;
        padding: 4px 0;
        margin-bottom: 10px;
    }

    > p {
        margin-bottom: 20px;
        
        > .MuiIconButton-root {
            background-color: #333;
            margin: 0 3px;
        }
    }

    .MuiSvgIcon-root {
        font-size: 16px;
        color: white;
    }
`
