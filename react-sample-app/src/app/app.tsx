import Person, { PersonModel } from './components/person/person';

export function App() {
  const person: PersonModel = {
    name: 'John',
    age: 36,
    email: 'john@example.com',
  };

  return <Person person={person} />;
}

export default App;
