import React, { useState } from 'react';

import {
  Container,
  OutletData,
  Nav,
  CompanyData,
  TheTitles,
  Form,
  Input,
  ButtonInput,
} from './styles';

export default function RegistrationOutlet() {
  const [showComponent, setShowComponent] = useState(true);

  function handleSubmit(data) {
    console.tron.log(data);
    console.log(data);
  }

  return (
    <Container>
      <OutletData>
        <Nav>
          <text>Dados da praças</text>
          <button
            type="button"
            onClick={() => setShowComponent(!showComponent)}
          >
            Praça
          </button>
        </Nav>
        {showComponent && (
          <CompanyData>
            <TheTitles>DADOS DA EMPRESA</TheTitles>
            <Form onSubmit={handleSubmit}>
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
                style={{ width: '235px' }}
              />
              <Input
                type="email"
                label="E-mail"
                name="email"
                style={{ width: '221px' }}
              />
              <TheTitles>Endereço</TheTitles>
              <Input
                type="cep"
                label="CEP"
                name="cep"
                style={{ width: '289px' }}
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
                type="complement"
                label="Complemento"
                name="complement"
                style={{ width: '129px' }}
              />
              <Input
                type="neighborhood"
                label="Bairro"
                name="neighborhood"
                style={{ width: '216px' }}
              />
              <Input
                type="city"
                label="Cidade"
                name="city"
                style={{ width: '280px' }}
              />
              <Input
                type="uf"
                label="UF"
                name="uf"
                style={{ width: '100px' }}
              />
              <Input
                type="note"
                label="Observações"
                name="note"
                style={{ width: '606px' }}
              />
              <Input
                type="status"
                label="Status"
                name="status"
                style={{ width: '161px' }}
              />
              <ButtonInput type="submit">Salvar</ButtonInput>
            </Form>
          </CompanyData>
        )}
      </OutletData>
    </Container>
  );
}
