import styled from 'styled-components'
import { testimonials } from '../musicalAPI'
import BadRomance from '../resources/images/Music_Art5.PNG'

const Testimonials = () => {
    return (
        <TestimonialsContainer>
            <h1>Testimonials</h1>

            <TestimonialsArea>
                {
                    testimonials.map((testimonial, idx) => {
                        const {comment, name, job} = testimonial
                        return (
                            <Testimonial key={idx}>
                                <p>{comment}</p>
                                <h2>{name}</h2>
                                <h3>{job}</h3>
                                <img src={BadRomance} alt="" />
                            </Testimonial>
                        )
                    })
                }
            </TestimonialsArea>

        </TestimonialsContainer>
    )
}

export default Testimonials

const TestimonialsContainer = styled.div`
    padding: 100px 30px;

    h1 {
        color: #f28e1c;
        text-align: center;
        font-size: 3em;
        font-weight: 700;
        margin-bottom: 60px;
    }
`

const TestimonialsArea = styled.div`
    display: flex;
    align-items: center;
    /* overflow-x: scroll; */
    padding-bottom: 50px;
    gap: 50px;
`

const Testimonial = styled.div`
    background-color: #222;
    border-top-left-radius: 5px;
    border-bottom-right-radius: 7px;
    width: fit-content;
    padding: 40px;
    padding-right: 90px;
    position: relative;

    > p {
        color: #BBB;
        font-size: 12px;
        padding-bottom: 40px;
    }

    > h2 {
        color: #BBB;
        font-size: 10px;
        text-align: right;
        margin-right: 5px;
    }

    > h3 {
        color: #f28e1c;
        font-size: 10px;
        font-style: italic;
        text-align: right;
        margin-right: 5px;
    }

    > img {
        height: 70px;
        width: 70px;
        border-radius: 50%;
        position: absolute;
        right: 20px;

    }

`
