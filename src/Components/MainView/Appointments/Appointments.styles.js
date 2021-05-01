import styled from '@emotion/styled';

export const AppointmentsContainer = styled.div`
    .header{    
        display: flex;
        flex-direction: row;
    }
    .lefth{
        //background-color: #03b1fc; 
        background-color: white;
        border: none;
        color: black;
        padding: 15px 32px;        
        font-size: 16px;
    }
    .righth{
        margin-left: auto; 
        margin-right: 0;
        padding: 15px 32px;
        background-color: #4CAF50;
        border: none;
        color: white;
        font-size: 18px;
    }


    .title{
        margin-top: 15px;
        //border: 1px solid black;
        height: 50px;
    }
    .title h1{
        font-family: "Paytone One";
        color: #202020;
        letter-spacing: -2px;
        line-height: 50px;
        float: left;        
    }


    .main {
        font-family: sans-serif; 
    }
    .content-table {
        border-collapse: collapse;
        margin: 25px 0;
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
        background-color: #009879;
        color: #ffffff;
        text-align: left;
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
        border-bottom: 2px solid #009879;
    }  
    .content-table tbody tr.active-row {
        font-weight: bold;
        color: #009879;
    }


    .btn {
        background-color: #009879; 
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