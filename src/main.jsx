import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import { Provider } from 'react-redux'; // Import Provider to connect Redux store to React
import { PersistGate } from 'redux-persist/integration/react'; // Import PersistGate
import store, { persistor } from './redux/store'; // Import store and persistor
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
)
