export type PersonModel = {
  name: string;
  age: number;
  email: string;
};

export interface PersonProps {
  person: PersonModel;
}

export function Person(props: PersonProps) {
  const person = props.person;
  return (
    <>
      <h3>Name: {person.name}</h3>
      <p>Age: {person.age}</p>
      <p>Email: {person.email}</p>
    </>
  );
}

export default Person;
