import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './Components/Card';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Card
    image="https://randomuser.me/portraits/men/22.jpg"
    name="Raja"
    jiond="jiond in 2020"
    desc="I am living in swabi "
    noOfFriends="20"
     />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
