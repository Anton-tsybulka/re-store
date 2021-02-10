import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from './components/app';
import BookstoreService from './services/bookstore-service';
import { store } from './store';
import ErrorBoundry from './components/error-boundry';
import { BookStoreServiceProvider } from './components/bookstore-service-context';

const bookstoreService = new BookstoreService();

ReactDOM.render(
    <Provider store={ store }>
        <ErrorBoundry>
            <BookStoreServiceProvider value={ bookstoreService }>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </BookStoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
);