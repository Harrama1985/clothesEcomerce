import styled from 'styled-components/macro';
import ButtonCustum from '../../ButtonCustum';

export const Container = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:space-between;
`
export const Title = styled.h3`
    font-size:2rem;
    flex: 1 1 100%;
    margin-left:1rem;
`

export const BgImg = styled.div`
  transition:.7s;
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const Item = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  height: 350px;
  align-items: center;
  position: relative;
  &:hover {
    ${BgImg} {
      opacity: 0.8;
    }
    button {
      transition:.7s;
      opacity: 0.85;
      display: flex;
    } 
  }
  @media screen and (max-width: 800px) {
    width: 45%;
    &:hover {
      ${BgImg} {
        opacity: unset;
      }
      button {
        opacity: unset;
      } 
    }
  }
  @media screen and (max-width: 500px) {
    width: 100%;
    &:hover {
      ${BgImg} {
        opacity: unset;
      }
      button {
        opacity: unset;
      } 
    }
  }
`;

export const AddButton = styled(ButtonCustum)`
  width: 80%;
  opacity: 0.7;
  position: absolute;
  top: 255px;
  display: none;
  @media screen and (max-width: 800px) {
    display: block;
    opacity: 0.9;
    min-width: unset;
    padding: 0 10px;
  }
`; 

export const Content = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 1.8rem;
`;


export const Name = styled.span`
  width: 90%;
  margin-bottom: 15px;
`;


export const Price = styled.span`
  width: 10%;
  text-align: right;
`;
