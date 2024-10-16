import styled from 'styled-components'


export const Form = styled.form`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    max-width: 500px;

`

export const InputContainer = styled.div`
    display:flex;
    gap: 20px;
`

export const InputName = styled.label`
    color: #fff;
    font-size: 12px;
    font-weight: 500;

    span{
        color: red;
        font-weight: bold;
    }

`

export const Input = styled.input`
    border-radius: 10px;
    border: 1px solid #d2dae2;
    background: #fff;
    padding: 12px 20px;
    outline: none;
    width: 100%;
`

export const Button = styled.button`
    background: linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%);
    border:none;
    border-radius: 20px;
    font-size: 16px;
    color: #fff;
    padding: 16px 32px;
    width: fit-content;
    cursor: pointer;

    &:hover{
        opacity: 80%;
    }

    &:active{
        opacity: 50%;
    }

`

