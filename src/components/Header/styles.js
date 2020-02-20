import styled from 'styled-components';

import { Link } from 'react-router-dom';

import { darken } from 'polished';

import Grid from '@material-ui/core/Grid';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  top: 0px;
  height: 60px;

  background: #ffffff 0% 0% no-repeat padding-box;
  box-shadow: 0px 3px 10px #0000001a;
  opacity: 1;
`;

export const Mark = styled(Link)`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  padding: 9px;
  width: 88px;
  background: #a9292c 0% 0% no-repeat padding-box;
  opacity: 1;

  &:hover {
    background: ${darken(0.15, '#a9292c')};
  }
`;

export const Content = styled.div`
  display: flex;
  margin-right: 155px;
`;

export const User = styled(Grid)`
  display: flex;
  align-items: center;
  // top: 21px;
  // left: 1180px;
  // width: 71px;
  // height: 19px;
`;
