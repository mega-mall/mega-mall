import styled from 'styled-components';

import { Button, Typography } from '@material-ui/core';

const StyledButton = styled(Button)`
  background-color: #fdbc00;
  width: 100%;
  height: 100%;
  max-height: 180px;
  max-width: 47px;
`;

const StyledTypography = styled(Typography)`
  font-weight: bold;
  transform: rotate(-90deg);
`;

const StyledDiv = styled.div`
  height: 190px;
  width: 350px;
  background-color: #fdbc00;
  position: absolute;
  top: 83%;
  right: -290px;
  transition: 0.3s;
  overflow: hidden;
  border-radius: 10px 0 0 10px;

  &:hover {
    right: 0;
    top: 83%;
  }
`;

export { StyledButton, StyledDiv, StyledTypography };
