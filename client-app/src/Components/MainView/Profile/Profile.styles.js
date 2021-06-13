import styled from '@emotion/styled';

export const ProfileContainer = styled.div`
    text-align: center;
    display: flex;
    flex-direction: row;
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
        height:400px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
    
    .first-container img{
        border-radius:50%;
        background-color:#3892D6;
        margin-top:25px;
        padding:5px;
        border: 5px solid white;
    }
    .first-container{
        padding-top:5px;
        height:120px;
        background:#A938D6;    
    }
    .second-container{
        margin-top:85px;
        font-size:14px;
    }
    h4{
        color:purple;
    }
    .third-container{
        margin-top:10px;
        margin-right:0px;
    }
    .third-container img{
        margin-right:5px;
    }
    .p{
        font-size:12px;
    }
    .f-name{
        margin-top:10px;
        font-size:14px;
    }
`

/*-------------- Body Information div -------------------- */
export const BodyInfo = styled.div`
        height: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px; 
        background-color:white;

    .vertical-line{
        border-left: 1px solid #D6DCE1;
        height : 100px;
    }
    p{
        padding-left: 10px;
        padding-top: 5px;
    }
    .body-first-container{
        height:100px;
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
    .upper-items{
        margin-top:20px;
        font-size:14px;
    }
    .data{
        font-size:16px;
    }
    
`  
/*------------------- Bood pressure ---------------------*/ 
export const bloodPressure = styled.div`
        background-color:white;
        height: 120px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px;
        text-align:left;
        padding-left:10px;
    #bp2{
        margin-left:80px;
        color:purple;
    }
    .blood-title{
        margin-top:5px;
        font-size:12px;
    }
`  
/*-------------------- Allergy--------------------------------------*/
export const Allergy = styled.div`
    
    height:auto;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);

    .upper-container{
        margin-top:5px;
        display: flex;
        flex-direction: row;
    }
    .upper-container img {
        height: 25px;
        width: 25px;
        align-items: left;
        margin-right: 5px;
    }
    p{
        font-size:16px;
        padding-top:5px;
    }
    .lower-container{
        
    }

`   
export const History = styled.div`
    height:285px;
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
        font-size:12px;
        padding-top:5px;
    }
    
`
export const Proccedures = styled.div`
    width: 49%;
    margin-top: 10px;
    height:350px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    font-size:10px;
    .pline{
        border-bottom: 1px solid #D6DCE1;
        font-size:14px;
    }
    p{
        font-size:12 px;
        padding-top:5px;
    }
    .title{
        color: purple;
    }
    .date{
        margin-left:100px;
        color: gray;
    }
    .show-more{
        margin-left:340px;
        color:#b6c0c9;
        font-size:10px;
    }
    button{
        text-align:center;
    }
`
export const LabResults = styled.div`
    width: 49%;
    margin-top: 10px;
    margin-left: 2%;
    height:350px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    .pline{
        border-bottom: 1px solid #D6DCE1;
        font-size:14px;
    }
    p{
        font-size:12px;
        padding-top:5px;
    }
    .title{
        color: purple;
    }
    .date{
        margin-left:100px;
        color: gray;
    }
    .show-more{
        margin-left:340px;
        font-size:10px;
        color: #b6c0c9;
    }
`
