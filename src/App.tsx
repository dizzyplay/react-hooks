import React, { useState } from "react";
import Form from "./components/Form";
import People from "./components/People";
import NewestPerson from "./components/NewestPerson";

const App: React.FC = () => {
  const [people, setPeople] = useState<PeopleType>([
    {
      firstName: "johne",
      lastName: "Doe"
    },
    {
      firstName: "jain",
      lastName: "vo"
    }
  ]);
  const addPerson = (person: Person) => {
    setPeople([...people, person]);
  };
  return (
    <div className="container mt-4">
      <div className={"row"}>
        <Form addPerson={addPerson} />
        <People people={people} />
        <NewestPerson newestPerson={people[people.length - 1]} />
      </div>
    </div>
  );
};

export default App;
