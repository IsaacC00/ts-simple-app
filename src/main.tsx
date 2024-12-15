import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {App} from './App.tsx';
import 'bootswatch/dist/darkly/bootstrap.min.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App title='React and TypeScript'/>
  </StrictMode>,
)
