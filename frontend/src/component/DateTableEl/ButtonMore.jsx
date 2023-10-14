import styled from "styled-components";

import { ReactComponent as More } from "../../resurses/icons/more.svg";
import { useState } from "react";

const Button = styled.div`
    position: absolute;
    display: flex;
    width: 300px;
    padding: 10px 24px;
    align-items: flex-start;
    border-radius: 8px;
    background-color: var(--White);
    transition: 0.5s;
    box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.10), 0px 1px 2px 0px rgba(0, 0, 0, 0.14);
    font-size: var(--font-medium);
    &:hover{
        cursor: pointer;
        background-color: var(--Gray);
    }
`   

function ButtonMore({Delete, Id}) {
    const [isShow, Show] = useState(false);

    return(
        <div>
            <More fill="var(--bia-gray-color-1)" onClick={() => Show(!isShow)}/>
            {isShow? <Button onClick={() => {Delete(Id); Show(false)}}>Удалить из графика</Button>:null}
        </div>
    )
}

export default ButtonMore