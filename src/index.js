import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state from './state/state';
import App from './App';
import {
  addMessage,
  addPost,
  updateNewPostText,
  updateNewMessageText,
  subscribe,
} from './state/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
export const rerenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <App
        state={state}
        addPost={addPost}
        addMessage={addMessage}
        updateNewPostText={updateNewPostText}
        updateNewMessageText={updateNewMessageText}
      />
    </React.StrictMode>
  );
};
rerenderTree(state);

subscribe(rerenderTree);

reportWebVitals();
