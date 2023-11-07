import { useState } from "react";
import { puppyList } from "./data";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupID, setFeatPupID] = useState(null);
  
  const featuredPup = puppies.find((puppy)=>puppy.id === featPupID);
  return (
    <div className="App">
      {featPupID && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      {puppies.map((puppy) => (
        <p
          onClick={() => {
            setFeatPupID(puppy.id);
          }}
          key={puppy.id}
        >
          {puppy.name}
        </p>
      ))}
    </div>
  );
}

export default App;
