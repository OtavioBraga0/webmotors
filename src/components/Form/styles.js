import styled from 'styled-components';

import { lighten } from 'polished';

import { devices } from '../../util/devices';
import { colors } from '../../util/colors';

export const CheckItem = styled.label`
  margin-right: 50px;
`;

export const FormContainer = styled.div`
  background: #fff;
  height: 322px;

  padding: 40px;

  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  @media (max-width: ${devices.tablet}) {
    height: auto;
  }
`;

export const FormInput = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  border-radius: 5px;
  padding: 0 5px;
  height: 40px;
  width: 100%;
  border: 1px solid ${colors.secondary};
  opacity: 1;

  span {
    color: ${colors.secondary};
    margin: 0 10px;
  }

  input,
  select {
    border: none;
    font-weight: bold;
    height: 100%;
    width: 100%;
    max-width: 100%;
    cursor: pointer;
    &:disabled {
      cursor: not-allowed;
    }
  }

  &.together-right {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 65%;

    input {
      width: 65%;
    }

    input.clear-location {
      width: 55%;
    }
  }

  &.together-left {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: none;
    width: 35%;
  }

  &.disabled {
    opacity: 0.8;
  }

  @media (max-width: ${devices.tablet}) {
    width: 100%;

    input {
      width: 75% !important;
    }

    input.clear-location {
      width: 65% !important;
    }
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 49%;

  @media (max-width: ${devices.tablet}) {
    width: 100%;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex: 1;
  margin-top: 50px;

  h3 {
    color: ${colors.primary};
    cursor: pointer;
  }

  .busca {
    background: ${colors.primary};
    margin-left: 30px;
    border: none;
    flex: 1;
    height: 60px;
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    border-radius: 4px;

    &:disabled {
      background: ${lighten(0.3, colors.secondary)};
      cursor: not-allowed;
    }
  }

  .clear-filters {
    color: ${colors.secondary};
    font-size: 15px;
    cursor: pointer;
    background: rgba(0, 0, 0, 0);
    border: none;
  }

  @media (max-width: ${devices.tablet}) {
    margin-top: 10px;

    ${FormGroup} {
      margin-top: 30px;
    }
  }
`;
