import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Provider } from 'react-redux';
import store from './utils/store';
import Header from './components/Header';
import Login from './pages/Login';
import AdminLogin from './pages/AdminLogin';
import PasswordReset from './pages/PasswordReset';
import Footer from './components/Footer';
import Algebra from './pages/Algebra';
import Home from './pages/Home';
import TestPage from './pages/TestPage';
import Sample from './pages/Sample';

const httpLink = createHttpLink({
    uri: 'http://localhost:3001/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('app_id_token');
    // console.log(token);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }

    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="container-fluid">
                <Provider store={store}>
                    <Router>
                        <Header />
                        <main>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/admin_login' element={<AdminLogin />} />
                                <Route path='/password_reset' element={<PasswordReset />} />
                                <Route path='/algebra' element={<Algebra />} />
                                <Route path='/sample' element={<Sample />} />
                                <Route path='/test' element={<TestPage />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Router>
                </Provider>
            </div>
        </ApolloProvider>
    );
}

export default App;
