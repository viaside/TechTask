import styled from "styled-components";

const Button = styled.div`
    display: flex;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 18px;
    border: 2px solid var(--Dark, #2B2D35);
    font-size: var(--font-medium);
    transition: 0.5s;
    &:hover{
        cursor: pointer;
        background-color: var(--Dark);
        color: var(--White);
    }
`   
export default Button