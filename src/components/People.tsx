import React from "react";

interface Props {
  people: PeopleType;
}

const People = (props: Props) => {
  return (
    <div className="col">
      <h2>People</h2>
      <hr />
      {props.people.map(p => (
        <div key={Math.random() * 10000000}>
          <p>
            {p.firstName} {p.lastName}
          </p>
        </div>
      ))}
    </div>
  );
};

export default People;
