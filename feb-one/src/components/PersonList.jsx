import React, { useState } from 'react';

const PersonList = () => {
  const initialPersons = [
    {
      id: 0,
      name: 'Venkat',
      profession: 'mathematician',
    },
    {
      id: 1,
      name: 'Malli',
      profession: 'chemist',
    },
    {
      id: 2,
      name: 'Indra',
      profession: 'physicist',
    },
    {
      id: 3,
      name: 'Siva',
      profession: 'chemist',
    },
    {
      id: 4,
      name: 'Srinu',
      profession: 'astrophysicist',
    },
    {
      id: 5,
      name: 'Arun',
      profession: 'chemist',
    },
    {
      id: 6,
      name: 'Sudha',
      profession: 'chemist',
    },
  ];

  const [persons, setPersons] = useState(initialPersons);

  const filterByProfession = (profession) => {
    const filteredPersons = initialPersons.filter(
      (person) => person.profession === profession
    );
    setPersons(filteredPersons);
  };

  return (
    <div>
      <button onClick={() => filterByProfession('chemist')}>
        Filter Chemists
      </button>
      <ul>
        {persons.map((person) => (
          <li key={person.id}>
            {person.name} - {person.profession}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonList;
