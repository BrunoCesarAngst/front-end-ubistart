import styled from 'styled-components';

import { Form as Unform } from '@unform/web';

import inputForm from '../../components/Form/input';

export const Container = styled.div`
  margin-top: -755px;
  margin-left: 120px;
  letter-spacing: 0;
  opacity: 1;
`;

export const OutletData = styled.div`
  width: 1200px;
  height: 863px;
  margin-top: 15px;
  margin-bottom: 30px;
  padding: 30px;
  background: #ffffff 0% 0% no-repeat padding-box;
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
`;

export const CompanyData = styled.div`
  margin-top: 60px;
  width: 991px;
  height: 164px;
  border-radius: 4px;
`;

export const TheTitles = styled.div`
  display: flex;
  margin-top: 55px;
  margin-bottom: 32px;
  margin-left: 0;
  text-align: left;
  font: Bold 12px/14px Raleway;
  letter-spacing: 1.2px;
  color: #a9292c;
`;

export const Form = styled(Unform)`
  display: flex;
  flex-wrap: wrap;
  flex: 1;

  label {
    margin-top: 20px;
    margin-right: 17px;
    font: Medium 14px/16px Raleway;
    color: #828b97;
  }
`;

export const Input = styled(inputForm)`
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
  letter-spacing: 0;
  color: #ffffff;
`;
