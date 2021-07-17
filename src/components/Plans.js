import styled from 'styled-components'
import { IconButton } from '@material-ui/core'
import Napollo from '../resources/images/Napollo.png'

const Plans = () => {
    return (
        <PlansContainer>
            <h1>choose your plan</h1>

            <FreePlan>

            </FreePlan>

            <PremiumPlan>
                <div>
                    <IconButton>
                        <img src={Napollo} alt="Napollo Logo" height={50} width={50} />
                    </IconButton>
                </div>

                <h2>Premium</h2>
                <p>Napollo premium mode sounds better</p><span></span>
                <p><span>$7.99</span>/month</p>
                <p>starts with one month free trial</p>

                <button>features</button>

                <ul>
                    <li>offline mode</li>
                    <li>high quality audio</li>
                    <li>no ads</li>
                    <li>unlimited skips</li>
                    <li>offline mode</li>
                    <li>hig quality audio</li>
                    <li>no ads</li>
                    <li>unlimited skips</li>
                </ul>

                <button>Activate</button>

            </PremiumPlan>

        </PlansContainer>
    )
}

export default Plans

const PlansContainer = styled.div`
    padding-top: 250px;
    padding-bottom: 150px;

    > h1 {
        color: #f28e1c;
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 20px;
        text-transform: capitalize;
        text-align: center;
    }

`
const FreePlan = styled.div`
    color: white;

`

const PremiumPlan = styled.div`
    color: white;
    box-shadow: 0 0 20px #111;
    border-radius: 10px;
    width: 250px;
    margin: 0 auto;
    padding: 30px 15px;

    > div {
        text-align: center;
        
        > .MuiIconButton-root {
            background-color: #333;
            margin: 20px 0;
            padding: 22px;
    
            &:hover {
                background-color: #333;
            }
        }
    }


    > h2 {
        color: #f28e1c;
        font-size: 15px;
        font-weight: 500;
        text-align: center;
    }

    > p {
        color: #f28e1c;
        font-size: 11px;
        text-align: center;
        margin: 15px 0;

        &:nth-of-type(2) {
            font-size: 15px;
            font-weight: 300;
            color: #f28e1c;
            margin-bottom: 10px;
            text-align: left;

            > span {
                color: white;
            }
        }

        &:nth-of-type(3) {
            color: #555;
            text-align: left;
            padding: 10px 0;
            border-bottom: 1px solid #bbb;
        }
    }

    > span {
        height: 2px;
        width: 30px;
        text-align: center;
        background-color: white;
        display: block;
        margin: 0 auto;
    }

    > button {
        border-radius: 20px;
        border: none;
        outline: none;
        cursor: pointer;
        transition: 300ms;
        font-family: 'Poppins', sans-serif;

        &:nth-of-type(1) {
            background-color: #333;
            color: #f28e1c;
            font-size: 9px;
            padding: 2px 10px;
        }

        &:nth-of-type(2) {
            font-size: 11px;
            padding: 0 10px;
            height: 30px;
            width: 100%;
            background-color: #f28e1c;
            color: white;

            &:hover {
                background-color: white;
                color: #f28e1c;
                font-weight: 500;
            } 
        }
    }

    > ul {
        margin: 30px 20px;

        > li {
            font-size: 14px;
            font-weight: 200;
            padding: 5px 0;
            color: #f28e1c;
            text-transform: capitalize;
        }
    }

` 