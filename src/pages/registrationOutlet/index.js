import React, { useState } from 'react';

// import Button from '@material-ui/core/Button';

// import Radio from '@material-ui/core/Radio';

import {
  Container,
  OutletData,
  Nav,
  CompanyData,
  TheTitles,
  Form,
  Input,
  SelectUf,
  SelectStatus,
  ButtonInput,
  Distributor,
  DistributorData,
} from './styles';

export default function RegistrationOutlet() {
  const [showOutlet, setShowOutlet] = useState(true);

  const [showDistributor, setShowDistributor] = useState(false);

  const [isChecked, setIsChecked] = useState(false);

  function handleSubmit(data) {
    console.tron.log(data);
    console.log(data);
  }

  function handleCheckedChange(e) {
    setIsChecked(prevCheckedValue => !prevCheckedValue);
  }

  return (
    <Container>
      <OutletData>
        <Nav>
          <text>Dados da praças</text>
          <button type="button" onClick={() => setShowOutlet(!showOutlet)}>
            Praça
          </button>
        </Nav>
        {showOutlet && (
          <CompanyData>
            <Form onSubmit={handleSubmit}>
              <TheTitles>DADOS DA EMPRESA</TheTitles>
              <div>
                <Input
                  type="text"
                  name="cnpj"
                  label="CNPJ"
                  style={{ width: '317px' }}
                />
                <Input
                  type="text"
                  name="companyName"
                  label="Razão Social"
                  style={{ width: '640px' }}
                />
                <Input
                  type="text"
                  name="tradingName"
                  label="Nome fantasia"
                  style={{ width: '415px' }}
                />
                <Input
                  name="telefone"
                  label="Telefone"
                  style={{ width: '206px' }}
                />
                <Input
                  type="email"
                  label="E-mail"
                  name="email"
                  style={{ width: '289px' }}
                />
              </div>
              <TheTitles>ENDEREÇO</TheTitles>
              <div>
                <Input
                  type="text"
                  label="CEP"
                  name="cep"
                  style={{ width: '221px' }}
                />
                <Input
                  type="text"
                  label="Rua"
                  name="street"
                  style={{ width: '415px' }}
                />
                <Input
                  type="number"
                  label="Nº"
                  name="number"
                  style={{ width: '130px' }}
                />
                <Input
                  type="text"
                  label="Complemento"
                  name="complement"
                  style={{ width: '129px' }}
                />
                <Input
                  type="text"
                  label="Bairro"
                  name="neighborhood"
                  style={{ width: '316px' }}
                />
                <Input
                  type="text"
                  label="Cidade"
                  name="city"
                  style={{ width: '480px' }}
                />
                <SelectUf
                  type="text"
                  label="UF"
                  name="uf"
                  style={{ width: '131px' }}
                />
                <Input
                  type="text"
                  label="Observações"
                  name="note"
                  style={{ width: '606px' }}
                />
                <SelectStatus
                  type="text"
                  label="Status"
                  name="status"
                  style={{ width: '161px' }}
                />
                <ButtonInput type="submit">Salvar</ButtonInput>
              </div>
            </Form>
          </CompanyData>
        )}
      </OutletData>
      <Distributor>
        <Nav>
          <text>Distribuidor 01</text>
          <button
            type="button"
            onClick={() => setShowDistributor(!showDistributor)}
          >
            Praça
          </button>
        </Nav>
        {showDistributor && (
          <DistributorData>
            <Form onSubmit={handleSubmit}>
              <TheTitles>Tipo</TheTitles>

              <div>
                <input
                  type="radio"
                  checked={isChecked}
                  onChange={handleCheckedChange}
                  id="agreement-checkbox"
                />
                <label htmlFor="agreement-checkbox">Pessoa física</label>
              </div>

              <TheTitles>DADOS DA EMPRESA</TheTitles>
              <div>
                <Input
                  type="text"
                  name="cnpj"
                  label="CNPJ"
                  style={{ width: '317px' }}
                />
                <Input
                  type="text"
                  name="companyName"
                  label="Razão Social"
                  style={{ width: '640px' }}
                />
                <Input
                  type="text"
                  name="tradingName"
                  label="Nome fantasia"
                  style={{ width: '415px' }}
                />
                <Input
                  name="telefone"
                  label="Telefone"
                  style={{ width: '206px' }}
                />
                <Input
                  type="email"
                  label="E-mail"
                  name="email"
                  style={{ width: '289px' }}
                />
                <Input
                  type="text"
                  label="Nome do responsável"
                  name="status"
                  style={{ width: '415px' }}
                />
                <Input
                  type="text"
                  label="Observações"
                  name="note"
                  style={{ width: '538px' }}
                />
              </div>
              <TheTitles>ENDEREÇO</TheTitles>
              <div>
                <Input
                  type="cep"
                  label="CEP"
                  name="cep"
                  style={{ width: '221px' }}
                />
                <Input
                  type="street"
                  label="Rua"
                  name="street"
                  style={{ width: '415px' }}
                />
                <Input
                  type="number"
                  label="Nº"
                  name="number"
                  style={{ width: '130px' }}
                />
                <Input
                  type="text"
                  label="Complemento"
                  name="complement"
                  style={{ width: '129px' }}
                />
                <Input
                  type="text"
                  label="Bairro"
                  name="neighborhood"
                  style={{ width: '316px' }}
                />
                <Input
                  type="text"
                  label="Cidade"
                  name="city"
                  style={{ width: '480px' }}
                />
                <SelectUf
                  type="text"
                  label="UF"
                  name="uf"
                  style={{ width: '131px' }}
                />
                <ButtonInput type="submit">Salvar</ButtonInput>
              </div>
            </Form>
          </DistributorData>
        )}
      </Distributor>
    </Container>
  );
}
