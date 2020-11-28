import styled, { css } from 'styled-components';

const subColor = 'grey';
const mainColor = 'black';

const shrinkLabelStyles = css`
  top: -18px;
  font-size: 12px;
  color: ${mainColor};
`;

export const InputForm = styled.div`
  position: relative;
  margin-top: 4rem;
  margin-bottom:1rem;
  input[type='password'] {
    letter-spacing: 0.3em;
  }
  input{
        background: none;
        background-color: white;
        color: ${subColor};
        font-size: 18px;
        padding: 10px 10px 10px 5px;
        display: block;
        width: 100%;
        border: none;
        border-radius: 0;
        border-bottom: 1px solid ${subColor};
        &:focus {
        outline: none;
        }
        &:focus ~ label {
        ${shrinkLabelStyles}
        }
  }
  label{
        color: ${subColor};
        font-size: 16px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 5px;
        top: 10px;
        transition: 300ms ease all;
        &.shrink {
        ${shrinkLabelStyles}
        }
  }
`;
