import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import inputForm from '../../components/Form/input';

import selectUf from '../../components/Form/selectUf';

import selectStatus from '../../components/Form/selectStatus';

export const Container = styled.div`
  width: 1118px;
  // height: 863px;
  margin-top: 20px;
  margin-left: 120px;
  letter-spacing: 0;
  opacity: 1;
`;

export const OutletData = styled.div`
  width: 1200px;
  // height: auto;
  padding: 30px;
  margin-bottom: 50px;
  background: #ffffff;
  border-radius: 8px;
`;

export const Nav = styled.div`
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  font: Medium 20px/24px Raleway;
  color: #000000;
  font-weight: bold;
  margin-bottom: 51px;
`;

export const CompanyData = styled.div`
  margin-bottom: 50px;
  width: 991px;
  border-radius: 4px;
`;

export const TheTitles = styled.legend`
  display: flex;
  margin-bottom: 22px;
  margin-left: 0;
  text-align: left;
  text-decoration: none;
  font: Bold 12px/14px Raleway;
  letter-spacing: 1.2px;
  color: #a9292c;
`;

export const Form = styled(Unform)`
  // justify-content: space-between;
  // display: flex;
  // flex-wrap: wrap;
  // flex: 1;

  div {
    width: 991px;
    margin-top: 32px;
    margin-bottom: 55px;
    justify-content: space-between;
    display: flex;
    flex-wrap: wrap;
    flex: 1;
  }

  label {
    // margin-top: 100px;
    font: Medium 14px/16px Raleway;
    color: #828b97;
  }

  select {
    margin: 10px 0;
    height: 40px;
    background: #fafbfc 0% 0% no-repeat padding-box;
    border: 1px solid #e7e9f1;
    border-radius: 4px;
  }
`;

export const Input = styled(inputForm)`
  margin: 10px 0;
  height: 40px;
  background: #fafbfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
`;

export const SelectUf = styled(selectUf)`
  margin: 10px 0;
  height: 40px;
  background: #fafbfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
`;

export const SelectStatus = styled(selectStatus)`
  margin: 10px 0;
  height: 40px;
  background: #fafbfc 0% 0% no-repeat padding-box;
  border: 1px solid #e7e9f1;
  border-radius: 4px;
`;

export const ButtonInput = styled.button`
  margin-top: 150px;
  width: 186px;
  height: 40px;
  background: #32b872 0% 0% no-repeat padding-box;
  border-radius: 4px;
  text-align: center;
  font: Bold 14px/16px Raleway;
  color: #ffffff;
`;

export const Distributor = styled.div`
  width: 1200px;
  // height: auto;
  padding: 30px;
  margin-bottom: 50px;
  background: #ffffff;
  border-radius: 8px;
`;

export const Button = styled.button``;

export const DistributorData = styled.div`
  margin-bottom: 50px;
  width: 991px;
  border-radius: 4px;
`;

export const NewDistributor = styled.div`
  width: 1200px;
  // height: auto;
  padding: 30px;
  margin-bottom: 50px;
  background: #ffffff;
  border-radius: 8px;
`;
