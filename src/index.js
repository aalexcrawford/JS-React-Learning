import React from 'react';
import { createRoot } from 'react-dom/client';
import Counters from './components/Counters/counters';
import './styles.css';

const root = createRoot(document.getElementById("root"));
root.render(<Counters/>);
