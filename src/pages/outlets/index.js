import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import { Container } from './styles';

function outlets() {
  const [bins, setbins] = useState([]);

  useEffect(() => {
    async function loadBins() {
      const response = await api.get('16dmck');

      const data = response.data.map(bin => ({
        ...bin,
      }));

      setbins(data);
    }

    loadBins();
  }, []);

  return <Container>outlets</Container>;
}

export default outlets;
