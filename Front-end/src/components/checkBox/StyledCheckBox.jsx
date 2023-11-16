import styled from 'styled-components'


export const StyledCheckBox = styled.div `


font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
text-transform: uppercase;


.box {
    display: flex;
    align-items: center;
}

label {
        
        font-size: 1rem;
        display: block;
        color: white;
        padding-left: 0.6rem;
        cursor: pointer;
    }

    input {
        opacity: 0;
        visibility: hidden;
        position: absolute;

        &:checked {

            ~ .check {
                border-color: #ffffff;
                box-shadow: 0px 0px 0px 15px #000000 inset;

                &::after {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }

    .check {
        width: 1.5rem;
        height: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 6.5rem;
        background-color: #FFF;
        border: 4px solid #ffffff;
        box-shadow: 0px 0px 0px 0px #000000 inset;
        transition: all 0.15s cubic-bezier(0, 1.05, 0.72, 1.07);
    }



`