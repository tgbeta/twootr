import styled from 'styled-components';

export const StyledHeader = styled.header`
    display:flex;
    justify-content:space-between;
    background-color:#EB1D36;

    button {
        border: none;
        background: none;
        padding:0;
    }

    p .logo {
        color:white;
        fontSize:40px;
        fontFamily:Monoton;
        letterSpacing:3px;
    }

    p {
        color:white;
        paddingRight:30px;
        fontSize:20px;
    }
`;
