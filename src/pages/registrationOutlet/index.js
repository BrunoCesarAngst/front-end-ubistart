import React, { useState, useRef } from 'react';

import { Scope } from '@unform/core';

import * as Yup from 'yup';

import Button from '@material-ui/core/Button';

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
  NewDistributor,
} from './styles';

export default function RegistrationOutlet() {
  const formRef = useRef(null);

  const [showOutlet, setShowOutlet] = useState(true);

  const [showDistributor, setShowDistributor] = useState(false);

  const [isChecked, setIsChecked] = useState();

  async function handleSubmit(data, { reset }) {
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    const phoneRegex = /(\(?\d{2}\)?\s)?(\d{4,5}-\d{4})/;
    const cepRegex = /[0-9]{5}-[\d]{3}/;

    try {
      const schema = Yup.object().shape({
        cnpj: Yup.string()
          .matches(cnpjRegex, 'Digite um CNPJ válido')
          .required('O CNPJ é obrigatório'),
        companyName: Yup.string().required('A Razão Social é obrigatório'),
        tradingName: Yup.string().required('O Nome fantasia é obrigatório'),
        telephone: Yup.string()
          .matches(phoneRegex, 'Digite um número de telefone válido')
          .required('O número de telefone é obrigatório'),
        email: Yup.string()
          .email('Digite um e-mail válido')
          .required('O e-mail é obrigatório'),
        address: Yup.object().shape({
          cep: Yup.string()
            .matches(cepRegex, 'Digite um número de CEP válido')
            .required('O número de CEP é obrigatório'),
          street: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('O nome da rua é obrigatório'),
          number: Yup.number()
            .min(1, 'No mínimo 1 caracteres')
            // .positive('O número deve ser positivo')
            .moreThan(-1, 'O número deve ser positivo')
            .required('O número do edifício é obrigatório'),
          complement: Yup.string(),
          neighborhood: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('O nome do bairro é obrigatório'),
          city: Yup.string()
            .min(3, 'No mínimo 3 caracteres')
            .required('O nome da cidade é obrigatório'),
        }),
        responsibleName: Yup.string()
          .min(3, 'No mínimo 3 caracteres')
          .required('O nome do responsável é obrigatório'),
        note: Yup.string(),
      });

      await schema.validate(data, {
        abortEarly: false,
      });

      console.tron.log(data);
      console.log(data);

      reset();
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errMassages = {};

        err.inner.forEach(error => {
          errMassages[error.path] = error.message;
        });

        formRef.current.setErrors(errMassages);
      }
    }
  }

  function handleCheckedChange(e) {
    setIsChecked(prevCheckedValue => prevCheckedValue);
  }

  function handleAddNewDistributor() {}

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
            <Form ref={formRef} onSubmit={handleSubmit}>
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
                  type="text"
                  name="telephone"
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
                <Scope path="address">
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
                </Scope>
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
            Distribuidor
          </button>
        </Nav>
        {showDistributor && (
          <DistributorData>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <TheTitles>Tipo</TheTitles>
              <div>
                <Button>
                  <label htmlFor="agreement-checkbox">
                    <input
                      type="radio"
                      name="person"
                      value="natural_person"
                      checked={isChecked}
                      onChange={handleCheckedChange}
                      id="natural_person"
                    />
                    Pessoa física
                  </label>
                </Button>
                <Button>
                  <label htmlFor="agreement-checkbox">
                    <input
                      type="radio"
                      name="person"
                      value="legal_entity"
                      checked={isChecked}
                      onChange={handleCheckedChange}
                      id="legal_entity"
                    />
                    Pessoa jurídica
                  </label>
                </Button>
                <div>Excluir distribuidor</div>
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
                  type="text"
                  name="telephone"
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
                  name="responsibleName"
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
                <Scope path="address">
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
                </Scope>
                <ButtonInput type="submit">Salvar</ButtonInput>
              </div>
            </Form>
          </DistributorData>
        )}
      </Distributor>
      <NewDistributor>
        <button type="button" onClick={handleAddNewDistributor}>
          Adicionar Distribuidor
        </button>
      </NewDistributor>
    </Container>
  );
}
