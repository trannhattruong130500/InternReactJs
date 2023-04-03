import React from 'react';
import './App.css';
import { Example } from './component/Example';
import { Person } from './component/Person';
import { PersonList } from './component/PersonList';
import { Status } from './component/Status';
import { Heading } from './component/Heading';
import { Oscar } from './component/Oscar';
import { Button } from './component/Button';
import { Input } from './component/Input';
import { Style } from './component/Style';
import { User } from './component/State/User';
import {Counter} from './component/State/Counter'

function App() {
  const namePerson = {
    firstName: "Michael",
    lastName: "Jackson"
  }

  const listPerson = [
    { firstName: "Mike", lastName: "Tyson" },
    { firstName: "John", lastName: "Cena" },
    { firstName: "Lionel", lastName: "Messi" },
  ]
  return (
    <div className="App">
      <Example name="truong" isLoggedIn={false} />
      <hr></hr>
      <Person name={namePerson} />
      <hr />
      <PersonList name={listPerson} />
      <hr />
      <Status status='loading' />
      <hr />
      <Heading>sqdqsdsqd</Heading>
      <Oscar>
        <Heading>sqdqsdsqd</Heading>
      </Oscar>
      <hr />
      <Button handleButton={(event, id) => {
        console.log(`Button Click`, event, id)
      }}></Button>
      <hr />
      <Input value='' handleInput={(event) => {
        console.log(`OnChange Input `, event)
      }}></Input>
      <hr />
      <Style styles={{ fontSize: "20px", color: "red" }}></Style>
      <hr />
      <User />
      <hr />
      <Counter />
      <hr />
      Tran Nhat Truongggg
    </div>
  );
}

export default App;




