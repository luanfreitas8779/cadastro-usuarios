import styled from "styled-components";

export const Button = styled.button`

    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    border:${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    border-radius: 20px;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover{
         ${props => props.theme === 'primary' ? 'opacity: 80%' : 'background: #fff; color: #fe7e5d'};
    }

    &:active{
        ${props => 
            props.theme === 'primary' ? 'opacity: 50%' : 'transition: all 0.1s ease; background: #fe7e5d; color: #fff '};}

`