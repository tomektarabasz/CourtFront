import React from "react"
import styled from 'styled-components';
import background from "../../background.jpeg"

const Background = styled.div`
    height:100%;
    background-image: url(${background});
`;

export const Home: React.FC = () => {
    return(
        <Background>
            <h1>tt</h1>
        </Background>
    )
}  