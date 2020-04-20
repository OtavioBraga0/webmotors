import styled from 'styled-components';

import { devices } from '../../util/devices';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 50px 0;

  a {
    width: 30%;

    img {
      width: 100%;
    }
  }

  @media (max-width: ${devices.tablet}) {
    justify-content: center;
    a {
      img {
        width: 100%;
      }
    }
  }
`;
