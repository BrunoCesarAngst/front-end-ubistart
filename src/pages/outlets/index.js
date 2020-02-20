import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container, OutletsTable, SearchOutlets, Pages } from './styles';

export default function Outlets() {
  const [bins, setBins] = useState([]);

  useEffect(() => {
    async function loadBins() {
      const response = await api.get('16dmck');

      console.tron.log(response);

      const data = response.data.map(bin => ({
        ...bin,
      }));
      console.tron.log(data);

      setBins(data);
    }

    loadBins();
  }, []);

  return (
    <Container>
      <div>Praças</div>
      <OutletsTable>
        <thead>
          <SearchOutlets>
            Buscar
            <input />
          </SearchOutlets>
          <tr>
            <th>Nome Fantasia</th>
            <th>CNPJ</th>
            <th>Razão Social</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bins.map(bin => (
            <tr>
              <td>{bin.tradingName}</td>
              <td>{bin.cnpj}</td>
              <td>{bin.companyName}</td>
              <td>{bin.status ? 'Ativo' : 'Inativo'}</td>
            </tr>
          ))}
        </tbody>
        <Pages>Mostrando 1 a 7 de {bins.length}</Pages>
      </OutletsTable>
    </Container>
  );
}
