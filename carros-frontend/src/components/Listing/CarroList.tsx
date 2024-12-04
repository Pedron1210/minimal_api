import React, { useEffect, useState } from 'react';
import api from '../../services/api';

interface Carro {
  id: number;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
  quilometragem: number;
  combustivel: string;
}

const CarrosList: React.FC = () => {
  const [carros, setCarros] = useState<Carro[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCarros = async () => {
      try {
        const response = await api.get('/carros');
        setCarros(response.data);
      } catch (error) {
        console.error('Erro ao buscar os carros', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCarros();
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h2>Lista de Carros</h2>
      <ul>
        {carros.map((carro) => (
          <li key={carro.id}>
            {carro.marca} {carro.modelo} ({carro.ano}) - R${carro.preco}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarrosList;
