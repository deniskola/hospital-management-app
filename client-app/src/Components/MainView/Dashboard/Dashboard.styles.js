import styled from '@emotion/styled';

export const profileCard = styled.div`
.Card{
    width:350px;
    height:350px;
    background:white;
    border-radius:10%;
    float: right;
}

.upper-container{
    height:100px;
    border-radius: 10% 10% 0 0;
    background:linear-gradient(to left,#2d00f7,#ff0291);
}

.image-container img{
    background:white;
    width:130px;
    height:130px;
    border-radius:50%;
    padding:5px;
    transform:translate(5px,45px);
}
img{
    border:2px solide #8e00b9;
}

.lower-container{
    margin-top: 100px;
    height: 200px;
    border-radius: 0 0 10% 10% ;
    background:"rgb(184, 165, 209)";
    text-align: center;
}
 
.lower-container h3,h4,h5{
    margin:0;
    padding:0;
}

.lower-container h3{
    color:#2f2d2e;
    font-weight: 600;
    font-size:1.5rem;
}

.lower-container h4{
    color:#8e00b9;
    font-weight: 700;
    font-size:1.2rem;
}

.lower-container h5{
    margin:1rem;
    font-family:sans-serif;
    color:#2f2d2e;
    font-size:0.9rem;
}
`