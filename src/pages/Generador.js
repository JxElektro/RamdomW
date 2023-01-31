import React, { useState } from 'react';
import words from '../words';

const Generador = () => {
  const [selectedWord, setSelectedWord] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleGenerateWord = () => {
    const filteredWords = selectedTopic
      ? words.filter(word => word.topic === selectedTopic)
      : words;
    const randomIndex = Math.floor(Math.random() * filteredWords.length);
    setSelectedWord(filteredWords[randomIndex].word);
  };

  return (
    <div className="flex flex-col items-center mt-16">
      <select className="bg-white p-2 rounded-lg mb-4" onChange={e => setSelectedTopic(e.target.value)}>
        <option value={null}>Todos los tópicos</option>
        <option value='mascotas'>Mascotas</option>
        <option value='transporte'>Transporte</option>
        <option value='alimentos'>Alimentos</option>
      </select>
      <button className="bg-indigo-500 text-white py-2 px-4 rounded-lg mb-4" onClick={handleGenerateWord}>Generar palabra</button>
      {selectedWord && <h1 className="text-5xl">{selectedWord}</h1>}
    </div>
  );
};

export default Generador;
