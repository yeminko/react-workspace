import { useState } from "react";
import AddForm from "./AddForm/AddForm";
import Item from "./Item/Item";
import Toolbar from "./Toolbar/Toolbar";

const App = (props) => {
  let [items, setItems] = useState([
    {
      id: 1,
      name: "Apple",
      price: 0.99,
    },
    {
      id: 2,
      name: "Orange",
      price: 0.89,
    },
  ]);

  let add = (name, price) => {
    let id = items.length + 1;
    setItems([
      ...items,
      {
        id,
        name,
        price,
      },
    ]);
  };

  return (
    <>
      <Toolbar>
        <h1>Hello React</h1>
        <h2>Component composition</h2>
      </Toolbar>
      <h1>Hello React</h1>
      <ul>
        {items.map((item) => {
          return (
            <Item key={item.id} name={item.name} price={item.price}></Item>
          );
        })}
      </ul>
      <AddForm add={add} />
    </>
  );
};

// class App extends React.Component {
//   state = {
//     items: [
//       {
//         id: 1,
//         name: "Apple",
//         price: 0.99,
//       },
//       {
//         id: 2,
//         name: "Orange",
//         price: 0.89,
//       },
//     ],
//   };

//   add = (name, price) => {
//     let id = this.state.items.length + 1;
//     this.setState({
//       items: [
//         ...this.state.items,
//         {
//           id,
//           name,
//           price,
//         },
//       ],
//     });
//   };

//   render() {
// return (
//   <div>
//     <Toolbar>
//       <h1>Hello React</h1>
//       <h2>Component composition</h2>
//     </Toolbar>
//     <h1>Hello React</h1>
//     <ul>
//       {this.state.items.map((item) => {
//         return (
//           <Item key={item.id} name={item.name} price={item.price}></Item>
//         );
//       })}
//     </ul>
//     <AddForm add={this.add} />
//   </div>
// );
//   }
// }

export default App;
