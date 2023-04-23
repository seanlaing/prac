import React, { useState, useEffect } from 'react';

interface Person { name:string;
                hair_color?:string;
                //starships:Starship[];
}

type Starship = { name:string,
                model:string
                }

function StarWars() {
  const [data, setData] = useState<Person | null>(null);

  useEffect(() => {
    async function fetchData():Promise<void> {
      const response = await fetch('https://swapi.dev/api/people/1/');
      const {name, hair_color, eye_color} = await response.json();
      setData({name, hair_color, eye_color});
    }
    fetchData()
  }, []);

  if (!data) return <div>Loading Starwars person...</div>;
    console.log(data)
  return (
    <div>
      <h1>Name of the first person {data.name}</h1>
      <h1>Hair color the first person {data.hair_color}</h1>
      <h1>Eye color the first person {data.eye_color}</h1>
    </div>
  );
}

export default StarWars;





