import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './css/index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import Layout from './views/layout/Layout'

const ConversorSelector = lazy(() => import('./views/pages/ConversorSelector'))

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        {/* <Provider store={{}}> */}
        <BrowserRouter>
            <Layout>
                <Suspense>
                    <Routes>
                        <Route path='/' element={<ConversorSelector />} />
                    </Routes>
                </Suspense>
            </Layout>
        </BrowserRouter>
        {/* </Provider> */}
    </React.StrictMode>
)
