import React from 'react';
import Cards from '../Cards/index'; // Supondo que o arquivo Cards.js esteja em um diretório anterior

const ExampleComponent = () => {
  // Mock de dados
  const mockData = {
    user: 'Usuário Exemplo',
    content: 'Conteúdo do Exemplo',
    imageUri: './piano.png', // URL de uma imagem de exemplo
  };

  return (
    <Cards
      user={mockData.user}
      content={mockData.content}
      imageUri={mockData.imageUri}
    />
  );
};

export default ExampleComponent;
