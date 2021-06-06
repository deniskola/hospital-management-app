import styled from '@emotion/styled';

export const AppointmentsContainer = styled.div`
    .header{   
        margin-top: 60px; 
        display: flex;
        flex-direction: row;
    }
    .lefth{
        //background-color: #009879;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        border: none;
        color: white;
        padding: 15px 32px;        
        font-size: 16px;
        cursor: pointer;
    }
    .lefth:hover{
        background-color: #34eb9e;
    }
    .righth{
        margin-left: auto; 
        margin-right: 0;
        padding: 15px 32px;
        //background-color: #009879;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        border: none;
        color: white;
        font-size: 18px;
        cursor: pointer; 
    }
    .righth:hover{
        background-color: #34eb9e;
    }


    .title{
        margin-top: 25px;
        //border: 1px solid black;
        height: 50px;
    }
    .title h1{
        font-family: "Paytone One";
        color: #202020;
        letter-spacing: -2px;
        line-height: 50px;
        //float: left;      
    }


    .main {
        font-family: sans-serif; 
        
    }
    .content-table {
        border-collapse: collapse;
        margin-top: 25px;
        margin-left: auto;
        margin-right: auto;
        font-size: 0.9em;
        min-width: 400px;
        border-radius: 5px 5px 0 0;
        overflow: hidden;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
    }
    .content-table tr{
        align-text: center;
    }  
    .content-table thead tr {
        //background-color: #009879;
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        color: #ffffff;
        //text-align: left;
        font-weight: bold;
    }
    .content-table th,
    .content-table td {
        padding: 12px 15px;
    } 
    .content-table tbody tr {
        border-bottom: 1px solid #dddddd;
    } 
    .content-table tbody tr:nth-of-type(even) {
        background-color: #f3f3f3;
    } 
    .content-table tbody tr:last-of-type {
        border-bottom: 2px solid #9b59b6;
    }  
    .content-table tbody tr:nth-of-type(odd) {
        font-weight: bold;
        color: linear-gradient(135deg, #71b7e6, #9b59b6);
        //color: #009879;
    }

    .btn {
        //background-color: #009879; 
        background: linear-gradient(135deg, #71b7e6, #9b59b6);
        border: none; 
        color: #ffffff; 
        padding: 12px 16px; 
        font-size: 18px; 
        cursor: pointer; 
    }  
    .btn:hover {
        background-color: #34eb9e;
    }
`

export default AppointmentsContainer