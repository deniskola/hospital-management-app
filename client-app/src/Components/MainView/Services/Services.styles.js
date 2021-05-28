import styled from '@emotion/styled';

export const ServicesContainer = styled.div`

.container{
  //  border: 1px solid red;
    height: 685px;
    display:flex;
}
.leftcontainer{
    height: 100%;
  //  border: 1px solid blue;
    width: 50%;
}
.upperleft{
  //  border: 1px solid purple;
    width: 100%;
    background:radial-gradient(#A070FE,#8749FF);
    height: 29.5%;
    text-align:left;
    display:flex;
    align-items:center;
    margin-top:3%;
    border-radius:20px;
    justify-content: space-around;
    box-shadow: 0 10px 20px 0px rgba(0,0,0,0.1); 
    transition: transform 0.5s;
    color:#fff;
}
.upperleft:hover{
    transform: translateX(-10px);
}
.upperleft img{
    padding:20px;
 //   border:1px solid rgb(3, 82, 252);
}
.lowerleft{
    margin-top:3.5%;
    width: 100%;
    height: 59.5%;
 //   border: 1px solid green;
    display: flex:column;
    text-align:center;
    align-content:center;
    background-color:white;
    border-radius:20px;
    box-shadow: 0 10px 20px 0px rgba(0,0,0,0.1); 
    transition: transform 0.5s;
}
.lowerleft:hover{
    transform: translateX(-10px);
}
.lowerleft h2{
 //   border:1px solid rgb(3, 82, 252);
    color:#A070FE;
    padding:25px 0 15px 0;
}
.lowerleft p{
    font-size:14px;
}
.rightcontainer{
    height: 100%;
//    border: 1px solid green;
    width: 50%;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:space-evenly;
    flex-wrap:wrap;
}
.rightcontainer .services{
    height:30%;
    width:30%;
    background-color: #fff;
    color:white;  
    border-radius:20px;
    text-align:center;
    align-content:center;
    box-shadow: 0 10px 20px 0px rgba(0,0,0,0.1); 
    transition: transform 0.5s;
}
.rightcontainer .services:hover{
    transform: translateX(-10px);
}
.rightcontainer .services p{
    padding-top:15px;
    color: rgba(0,0,0);

}
.rightcontainer .services img{
    padding-top:40px;

}
#services{
    padding-top:85px;
    color:#A070FE;
}
#service{
    background-color:white;
}
`
export default ServicesContainer