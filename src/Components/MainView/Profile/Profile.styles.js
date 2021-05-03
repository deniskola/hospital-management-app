import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    padding: 10px;
    font-size:10px;

    .left-container{
        display:flex;
        flex-direction: column;
        width:30%;
        height:100%;
        margin-right: 10px;
    }
    /*----------------- Personal information div --------------*/
    .PersonalInfo{
        background-color:white;
        height:300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
    }
    .first-container img{
        border-radius:50%;
        background-color:#3892D6;
        margin-top:5px;
        padding:5px;
        border: 5px solid white;
    }
    .first-container{
        padding-top:5px;
        height:80px;
        background:#A938D6;    
    }
    .second-container{
        margin-top:70px;
    }
    h4{
        color:purple;
    }
    .third-container{
        margin-top:25px;
        margin-right:130px;
    }
    .third-container img{
        margin-right:5px;
    }
    /*-------------- Body Information div -------------------- */
    .BodyInfo{
        height: 100px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px; 
        background-color:white;
    }

    .body-first-container{
        height:30px;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        border: 1px solid #D6DCE1;
    }
    .body-second-container{
        height:68px;
        display:flex;
        flex-direction: row;
        justify-content: space-evenly;
        padding-left:150px;
        margin-top: 5px;

    }
    
    /*------------------- Bood pressure ---------------------*/
    .bloodPressure{
        background-color:white;
        height: 50px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
        text-align:left;
        padding-left:10px;
    }
    #bp2{
        margin-left:80px;
        color:purple;
    }
    
    /*----------------------------------------------------------*/
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


