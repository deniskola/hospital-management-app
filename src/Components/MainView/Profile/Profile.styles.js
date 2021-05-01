import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    width: 80%;
    text-align: center;
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 10px;

    .left-container{
        display:flex;
        flex-direction: column;
        border: 2px solid black;
        width:30%;
        height:100%;
        margin-right: 10px;
    }
    .PersonalInfo{
        height:200px;
        border:1px solid black;
        margin: 20px;
    }
    .BodyInfo{
        height: 100px;
        border: 1px solid black;  
        margin:20px; 
    }
    .bloodPressure{
        height: 40px;
        border: 1px solid black;
        margin:20px;
    }
    

    .right-container{
        display:flex;
        flex-direction: column;
        border: 2px solid black;
        width:70%;
        height:100%;
    }
    .Allergy{
        height:120px;
        margin:10px;
        border:1px solid black;
    }
    .History{
        height:180px;
        margin:10px;
        border: 1px solid black;
    }
    .third-div{
        display:flex;
        flex-direction: row;
    }
    .proccedures, .labResults{
        width: 45%;
        border: 1px solid black;
        height: 100px;
        margin: 10px;
    }

`


