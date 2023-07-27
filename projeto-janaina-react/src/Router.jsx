import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Menu from './component/Menu'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Contato from './pages/Contato'
import Carnes from './pages/Carnes'
import Massas from './pages/Massas'
import Saladas from './pages/Saladas'
import Doces from './pages/Doces'
import Footer from './component/Footer'


const Router = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/sobre' element={<Sobre/>} />
                <Route path='/contato' element={<Contato/>} />
                <Route path='/portfolio' element={<Carnes/>} />
                <Route path='/portfolio' element={<Massas/>} />
                <Route path='/portfolio' element={<Saladas/>} />
                <Route path='/portfolio' element={<Doces/>} />
            </Routes>
            <Footer content="Copyright &copy; 2023 - Feito por Janaina Soares Almeida" />
        </BrowserRouter>
    )
}

export default Router