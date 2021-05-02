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
    height: 40%;
    display:flex;
    align-items:center;
    justify-content: space-around
}
.upperleft img{
    background-color:white;
    padding:50px;
    border-radius:20px;
 //   border:1px solid rgb(3, 82, 252);
}
.lowerleft{
    width: 100%;
    height: 59.5%;
 //   border: 1px solid green;
    display: flex;
    align-items:center;
    justify-content: space-around
}
.lowerleft h2{
    background-color:white;
    padding:150px;
 //   border:1px solid rgb(3, 82, 252);
    border-radius:20px;
    color:rgb(3, 82, 252);
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
    background-color:rgb(3, 82, 252);
    color:white;  
    border-radius:20px;
    text-align:center;
    align-content:center;

}
.rightcontainer .services p{
    padding-top:70px;
}
.rightcontainer .services img{
    padding-top:60px;
}
#services{
    padding-top:85px;
    color:rgb(3, 82, 252);
}
#service{
    background-color:white;
}
`
export default ServicesContainer