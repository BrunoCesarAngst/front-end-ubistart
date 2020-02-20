import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: -750px;
  margin-left: 120px;
  text-align: left;
  letter-spacing: 0;
  opacity: 1;

  > div {
    color: #000000;
    font-weight: bold;
  }
`;

export const OutletsTable = styled.table`
  width: 1200px;
  height: 806px;
  margin-left: -45px;
  // margin-right: 113px;
  margin-top: 35px;
  margin-bottom: 30px;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
  border-radius: 8px;

  thead th {
    margin-top: 276px;
    padding: 12px;
    font: Bold 11px/13px Raleway;
    color: #828b97;
  }

  tbody td {
    margin-top: 25px;
    padding: 12px;
    border-bottom: 1px solid #eee;
    text-align: left;
    font: Regular 14px/16px Raleway;
    color: #5b626b;
  }
`;

export const SearchOutlets = styled.div``;
export const Pages = styled.div`
  margin-top: 55px;
  display: flex;
  font: Italic 11px/13px Raleway;
  color: #5b626b;
`;
