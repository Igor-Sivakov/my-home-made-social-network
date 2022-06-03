import './index.css';
import reportWebVitals from './reportWebVitals';
import { rerenderTree } from './render';
import state from './state/state';

rerenderTree(state);

reportWebVitals();
