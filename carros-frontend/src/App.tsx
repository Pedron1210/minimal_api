import React, { useState } from 'react';
import CarrosList from '../src/components/Listing/CarroList';
import CarroForm from '../src/components/Form/CarroForm';

const App: React.FC = () => {
  const [carroAdicionado, setCarroAdicionado] = useState<boolean>(false);

  return (
    <div>
      <h1>Cadastro de Carros</h1>
      <CarroForm onCarroAdded={() => setCarroAdicionado(!carroAdicionado)} />
      <CarrosList />
    </div>
  );
};

export default App;
