import './stylesheets/main.css';
import Counter from "./Counter";
import Header from "./Header";
import data from "./data";
import { useState } from 'react';


export default function App() {

  const [rooms, setRooms] = useState(data.rooms)
  console.log(data.rooms);

  const roomElements = rooms.map(room => (
    <Counter key={room.id} capacity={room.capacity}/>
  ))

    return (
        <div>
          <Header />
          {roomElements}
        </div>
    )
}
