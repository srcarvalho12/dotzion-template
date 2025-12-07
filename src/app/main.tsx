import { createRoot } from 'react-dom/client'
import { App } from './App';

// @ts-ignore
const root = createRoot(document.getElementById('app')!);
root.render(<App/>);
