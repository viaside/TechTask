import styled from "styled-components";

const InputCustom = styled.div`
    display: flex;
    width: 400px;
    padding: 8px 8px 8px 12px;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    border-radius: 18px;
    border: 2px solid var(--Gray, #EAEEF4);
    background: var(--White, #FFF);
`   

const InputEl = styled.input`
    background-color: transparent;
    border: none;   
    width: 100%;
    font-size: var(--font-small);
    &:focus-visible {
        outline: -webkit-focus-ring-color auto 0px;
    }
`

function Input({Img, Placeholder}) {
    return(
        <InputCustom>
            <Img/>
            <InputEl placeholder={Placeholder}/>
        </InputCustom>
    )
}

export default Input