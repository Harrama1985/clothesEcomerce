import styled from 'styled-components/macro';

export const Container = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 1.8rem;
  align-items: center;
  @media screen and (max-width: 800px) {
    font-size: 1.6rem;
  }
`;

export const Image = styled.div`
  width: 23%;
  padding-right: 15px;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.span`
  width: 23%;
  @media screen and (max-width: 800px) {
    width: 22%;
  }
`;

export const Quantity = styled(Text)`
  display: flex;
  span {
    margin: 0 10px;
  }
  div {
    cursor: pointer;
    font-weight:bold;
  }
`;

export const Remove = styled.div`
  padding-left: 12px;
  cursor: pointer;
`;
