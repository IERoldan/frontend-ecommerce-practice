import React from 'react';
import ReactDOM from 'react-dom';
import { Listado } from './components/Listado';

const element =<h1>Esto es un elemnto con react</h1>;
const container = document.getElementById('root');

ReactDOM.render(<Listado/>, container);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );


