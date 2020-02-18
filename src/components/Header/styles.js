import styled from 'styled-components';

import Grid from '@material-ui/core/Grid';

export const Container = styled.header`
  display: flex;
  top: 0px;
  left: 88px;
  // width: 1278px;
  height: 60px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #0000001a;
  opacity: 1;
`;

export const Content = styled.div`
  display: flex;
  align-content: space-between;
`;

export const User = styled(Grid)`
  display: flex;
  align-items: center;
  // top: 21px;
  // left: 1180px;
  // width: 71px;
  // height: 19px;
`;
