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
        height:auto;
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
        height: auto;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
        margin:10px; 
        background-color:white;

    
    p{
        padding-left: 10px;
        padding-top: 5px;
    }
`  
/*------------------- Bood pressure ---------------------*/ 
export const bloodPressure = styled.div`
        background-color:white;
        height: auto;
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
        display: flex;
        flex-direction: row;
        background-color: #e6e6ff;
    }
    .upper-container img {
        height: 25px;
        width: 25px;
        align-items: left;
        margin: 5px 10px 0px 10px;
    }
    p{
        font-size:16px;
        padding-top:5px;
    }
    .lower-container{
        
    }

`   
export const History = styled.div`
    height:auto;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    margin-top:10px;

    .upper-container{
        display: flex;
        flex-direction: row;
        background-color: #e6e6ff;
    }
    .upper-container img {
        height: 25px;
        width: 25px;
        align-items: left;
        margin: 5px 10px 0px 10px;
    }
    p{
        font-size:16px;
        padding-top:5px;
    }
    
`
export const Proccedures = styled.div`
    margin-top: 10px;
    height:auto;
    margin:10px;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    
    .tabela{
        font-size:12px;
    }
    .upper-container{
        display: flex;
        flex-direction: row;
        background-color: #e6e6ff;

    }
    p{
        font-size: 12px;
        padding-top:5px;
    }
    .pline{
        font-size:16px;
        margin-left:5px;

    }
    .title{
        color: purple;
    }

`
export const LabResults = styled.div`
    height:auto;
    background-color:white;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4);
    margin-top:10px;


    .upper-container{
        display: flex;
        flex-direction: row;
        background-color: #e6e6ff;
        margin-bottom:15px;
    }
    p{
        font-size:16px;
        padding-top:5px;
        margin-left:20px;
    }


`
