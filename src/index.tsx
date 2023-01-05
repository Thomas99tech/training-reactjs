import React, { Children } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider, Container, CssBaseline, Box } from '@material-ui/core';
import reportWebVitals from './reportWebVitals';
import custom_theme  from "./theme";

/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
*/
/*root.render(
  <React.StrictMode>
      <App />  
  </React.StrictMode>
 
);
*/
ReactDOM.render(
  <React.StrictMode>
     <ThemeProvider theme={custom_theme}>
      <Container component={App} maxWidth="xs">
          <CssBaseline />
         
      </Container>
      
      </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
