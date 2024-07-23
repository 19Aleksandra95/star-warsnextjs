import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface CharacterProps {
  id: string;
}

interface CharacterData {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

const Character: React.FC<CharacterProps> = ({ id }) => {
  const [character, setCharacter] = useState<CharacterData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPerson = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/people/${id}/`);
        setCharacter(response.data);
      } catch (err) {
        setError('Failed to fetch person data');
      } finally {
        setLoading(false);
      }
    };

    fetchPerson();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="p-4 bg-gray-100 rounded shadow-md">
      {character && (
        <>
          <h1 className="text-2xl font-bold mb-2">{character.name}</h1>
          <p><strong>Height:</strong> {character.height}</p>
          <p><strong>Mass:</strong> {character.mass}</p>
          <p><strong>Hair Color:</strong> {character.hair_color}</p>
          <p><strong>Skin Color:</strong> {character.skin_color}</p>
          <p><strong>Eye Color:</strong> {character.eye_color}</p>
          <p><strong>Birth Year:</strong> {character.birth_year}</p>
          <p><strong>Gender:</strong> {character.gender}</p>
        </>
      )}
    </div>
  );
};

export default Character;
