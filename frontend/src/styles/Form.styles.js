import styled from 'styled-components';

export const StyledForm = styled.form`

  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction: column;
  margin: 1em 0;
  .form-title{
    margin-top:20px;
    font-size:45px;
    margin-bottom:30px;
  }
  .twoot-container{
    display:flex;
    flex-direction:column;
    width:100%;
  }
  .twoot-input{
    padding:7px;
    margin-left:100px;
    margin-right:100px;
    border:0;
    border-bottom:3px solid black;
    font-size:20px;
    height: 70px;
    margin-bottom:20px;
  }
.twoot-btn{
  width:fit-content;
  font-size:20px;
  padding:8px;
  margin-left:100px;
  border-radius:10px;
}
`;

