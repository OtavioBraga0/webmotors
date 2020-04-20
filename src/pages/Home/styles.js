import styled from 'styled-components';

import { devices } from '../../util/devices';
import { colors } from '../../util/colors';

export const Container = styled.div`
  @media (max-width: ${devices.tablet}) {
    margin: 0 15px;
  }
`;

export const TabItem = styled.div`
  list-style: none;
  padding: 10px 15px;
  padding-bottom: 13px;
  border-bottom: 1px solid ${colors.secondary};
  display: flex;
  align-items: flex-end;
  cursor: pointer;

  &.selected {
    border-bottom: 4px solid ${colors.primary};
    padding-bottom: 10px;

    svg {
      fill: ${colors.primary};
    }

    span {
      &.tab-title {
        color: ${colors.primary};
        font-size: 25px;
      }
    }
  }

  svg {
    width: 50px;
    height: 20px;
    margin-right: 15px;
    margin-bottom: 2px;
  }

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${colors.secondary};
      text-transform: uppercase;
      line-height: 1em;
      &.tab-title {
        color: ${colors.secondary};
        font-size: 25px;
      }
    }
  }

  @media (max-width: ${devices.tablet}) {
    flex: 1;

    svg {
      width: 80px;
      height: 20px;
    }
  }
`;

export const TabItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  div {
    display: flex;
  }

  button {
    background: none;
    border-radius: 5px;
    height: 40px;
    border: 2px solid ${colors.third};
    padding: 0 30px;
    color: ${colors.third};
    margin-bottom: 20px;
  }

  @media (max-width: ${devices.tablet}) {
    flex-direction: column-reverse;
    align-items: flex-start;

    div {
      width: 100%;
    }

    button {
      width: 100%;
    }
  }
`;
