import React, { useState } from 'react';
import api from '../../services/api';

interface Carro {
  id?: number;
  marca: string;
  modelo: string;
  ano: number;
  cor: string;
  preco: number;
  quilometragem: number;
  combustivel: string;
}

interface CarroFormProps {
  onCarroAdded: () => void;
}

const CarroForm: React.FC<CarroFormProps> = ({ onCarroAdded }) => {
  const [carro, setCarro] = useState<Carro>({
    marca: '',
    modelo: '',
    ano: 2024,
    cor: '',
    preco: 0,
    quilometragem: 0,
    combustivel: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCarro({ ...carro, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post('/carros', carro);
      onCarroAdded();
      setCarro({ marca: '', modelo: '', ano: 2024, cor: '', preco: 0, quilometragem: 0, combustivel: '' });
    } catch (error) {
      console.error('Erro ao adicionar carro', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Marca:</label>
        <input type="text" name="marca" value={carro.marca} onChange={handleChange} required />
      </div>
      <div>
        <label>Modelo:</label>
        <input type="text" name="modelo" value={carro.modelo} onChange={handleChange} required />
      </div>
      <div>
        <label>Ano:</label>
        <input type="number" name="ano" value={carro.ano} onChange={handleChange} required />
      </div>
      <div>
        <label>Cor:</label>
        <input type="text" name="cor" value={carro.cor} onChange={handleChange} required />
      </div>
      <div>
        <label>Preço:</label>
        <input type="number" name="preco" value={carro.preco} onChange={handleChange} required />
      </div>
      <div>
        <label>Quilometragem:</label>
        <input type="number" name="quilometragem" value={carro.quilometragem} onChange={handleChange} required />
      </div>
      <div>
        <label>Combustível:</label>
        <input type="text" name="combustivel" value={carro.combustivel} onChange={handleChange} required />
      </div>
      <button type="submit">Adicionar Carro</button>
    </form>
  );
};

export default CarroForm;
