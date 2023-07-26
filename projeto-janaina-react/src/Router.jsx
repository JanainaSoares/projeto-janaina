import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Portfolio from './pages/Portfolio'
import Footer from './component/Footer'


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/portfolio' element={<Portfolio/>} />
                <Route path='/contato' element={<Contato/>} />
            </Routes>
            <Footer content="Copyright &copy; 2023 - Feito por Janaina Soares Almeida" />
        </BrowserRouter>
    )
}

export default Router