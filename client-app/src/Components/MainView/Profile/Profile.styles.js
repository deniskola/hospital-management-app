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
    .right-container{
        display:flex;
        flex-direction: column;
        width:70%;
        height:100%;
    }
    .third-div{
        display:flex;
        flex-direction: row;
    }
`
/*----------------- Personal information div --------------*/
export const PersonalInfo = styled.div`
        background-color:white;
        height:300px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
    
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
`

/*-------------- Body Information div -------------------- */
export const BodyInfo = styled.div`
        height: 110px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px; 
        background-color:white;

    .vertical-line{
        border-left: 1px solid #D6DCE1;
        height : 40px;
    }
    p{
        padding-left: 10px;
        padding-top: 5px;
    }
    .body-first-container{
        height:40px;
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
`  
/*------------------- Bood pressure ---------------------*/ 
export const bloodPressure = styled.div`
        background-color:white;
        height: 60px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
        text-align:left;
        padding-left:10px;
    #bp2{
        margin-left:80px;
        color:purple;
    }
`  
/*-------------------- Allergy--------------------------------------*/
export const Allergy = styled.div`
    
    height:180px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

    .upper-container{
        display: flex;
        flex-direction: row;
    }
    .upper-container img {
        height: 25px;
        width: 25px;
        align-items: left;
        margin: 5px;
    }
    p{
        font-size:16px;
        padding-top:5px;
    }
    .lower-container{
        
    }

`   
export const History = styled.div`
    height:180px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    margin-top:10px;

    .upper-container{
        display: flex;
        flex-direction: row;
    }
    .upper-container img {
        height: 25px;
        width: 25px;
        align-items: left;
        margin: 5px;
    }
    p{
        font-size:16px;
        padding-top:5px;
    }
    
`
export const Proccedures = styled.div`
    width: 49%;
    margin-top: 10px;
    height:150px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    .pline{
        border-bottom: 1px solid #D6DCE1;
    }
    p{
        font-size:14 px;
        padding-top:5px;
    }
`
export const LabResults = styled.div`
    width: 49%;
    margin-top: 10px;
    margin-left: 2%;
    height:150px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    .pline{
        border-bottom: 1px solid #D6DCE1;
    }
    p{
        font-size:14px;
        padding-top:5px;
    }
`
