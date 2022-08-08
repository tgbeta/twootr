import styled from 'styled-components';

export const StyledTwoot = styled.div`
.tweet-main{
  padding:15px;
}
  .tweet-main:hover{
    background-color:#aff2ff;

  }
  box-shadow: 3px 3px;
  margin-left:100px;
  margin-right:100px;
  border:black 3px solid;
  margin-bottom:40px;


  button {
    padding: 0;
    border: none;
    background: none;

    .true {
      color:red
    }
  
    .false {
      color:black
    }
  }
  .author-section{
    display:flex;
    justify-content:space-between;
  }
  .tweet{
    margin-top:20px;
    margin-bottom:20px;
    font-size:17px;
    border-bottom:solid 2px black;
  }
  .posted-like-container{
    display:flex;
    justify-content:space-between;
  }
  .like{
    margin-right:5px;
  }
  .like:hover{
    cursor:pointer;
  }
  .save{
    margin-right:5px;
  }
  .save:hover{
    cursor:pointer;
  }
  .retweet:hover{
    cursor:pointer;
  }
  
`;