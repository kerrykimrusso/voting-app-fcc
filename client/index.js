import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.js';

render(
    <AppContainer>
        <App />
    </AppContainer>, 
    document.getElementById('react-entry')
);

if(module.hot) {
    module.hot.accept('./App.js', () => {
        render(
            <AppContainer>
                <App />
            </AppContainer>, 
            document.getElementById('react-entry')
        );
    })
}