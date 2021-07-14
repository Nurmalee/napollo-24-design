import styled from 'styled-components'
import { Menu, Search, Publish } from '@material-ui/icons';
import App_Play_Store from '../resources/images/app-play-store.png'

const Navbar = () => {
    return (
        <NavContainer>
            <NavLeft>
                <Menu />
                {/* <img src="" alt="Napollo Logo" /> */}
            </NavLeft>

            <NavSearch>
                <input type="text" placeholder="Search for artistes, songs, albums" />
                <Search />
            </NavSearch>

            <NavRight>

                <img src={App_Play_Store} alt="Stores Logo" height={25} />

                <AccountButtons>
                    <button>SignUp/Login</button>

                    <button>
                        <Publish />
                        Upload
                    </button>
                </AccountButtons>

            </NavRight>
            
        </NavContainer>
    )
}

export default Navbar

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: #222;
    padding: 10px 30px;
    margin-right: 5px;
`

const NavLeft = styled.div`
    flex: 0.15;
    justify-self: flex-start;

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: white;
    }
`

const NavSearch = styled.div`
    flex: 0.3;
    border-radius: 20px;
    background-color: #555;
    display: flex;
    align-items: center;
    padding: 0 15px;
    height: 27px;
    margin-right: 5px;

    > input {
        flex: 1;
        background-color: inherit;
        font-size: 11px;
        border-radius: 20px;
        border: none;
        outline: none;
        color: #EEE;
        font-family: 'Poppins', sans-serif;

        &::placeholder {
            color: #BBB;
        }
    }

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: #BBB;
    }

`

const NavRight = styled.div`
    flex: 0.55;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    > .MuiSvgIcon-root {
        font-size: 20px;
        color: grey;
    }
`

const AccountButtons = styled.div`
    display: flex;
    align-items: center;
    margin-left: 10px;

    > button {
        text-transform: capitalize;
        font-size: 11px;
        border-radius: 20px;
        padding: 0 25px;
        height: 27px;
        border: none;
        outline: none;
        margin-right: 5px;
        color: white;
        font-family: 'Poppins', sans-serif;
        cursor: pointer;
        transition: 300ms;

        &:nth-of-type(1){
            color: #BBB;
            background-color: #333;

            &:hover {
                background-color: #111;
                color: #EEE;
            }
        }

        &:nth-of-type(2){
            background: linear-gradient(to bottom, yellow, #ffa940, #f28500);
            display: flex;
            align-items: center;
            padding: 0 25px;
            height: 27px;
            border: 2px solid grey;

            > .MuiSvgIcon-root {
                font-size: 15px;
                margin-right: 3px;
            }
        }

        
    }
`
