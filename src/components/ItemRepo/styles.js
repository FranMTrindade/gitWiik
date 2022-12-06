import styled from 'styled-components';

export const ItemContainer = styled.div`
    width: 80%;
    text-align: center;

    h3{
        font-size: 32px;
        color:#FAFAFA
    }

    p{
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 25px;
    }

    hr{
        margin-top: 30px;
        margin-bottom: 20px;
    }
    
    a.remover{
        color: #FF0000;
        margin-left: 50px;

        &:hover{
        background-color: #FA8072;
    }
    }

    a.acessar{
        color: #90EE90;

        &:hover{
        background-color: green;
     }
    }

`