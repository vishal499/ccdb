import React from 'react';
import ReactDom from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import './styles.css';

const container = document.getElementById('root');
const root = ReactDom.createRoot(container);
root.render(<App />);