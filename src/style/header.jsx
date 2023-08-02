import styled from 'styled-components'

export const TopContainer = styled.div`
    background-color: #5e8696;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 2px 5px 0px #2f4a55;

    span {
        color: #fff;
    }

    i {
        color: #fff;
        cursor: pointer;
    }
`

export const LightButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    flex-wrap: wrap;   
    gap: 5px;

    button {
        background-color: #4b7586;
        border: none;
        border-radius: 20px;
        box-shadow: 0px 2px 0px 0px #2f4a55;
        padding: 5px 15px;
        color: #fff;
        cursor: pointer;

        &:hover {
            background-color: #619bb3;
            box-shadow: 0px 2px 4px 0px #1fbefd;
            color: #b5eaff;
        }
    }
`