import {Routes,Route} from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import {About,Services,ServiceDetail,Software,Industries,Portfolio,Blog,Privacy,Terms} from './pages/Pages'
import {Section} from './components/ui'
export default function App(){return(<Routes><Route element={<Layout/>}>
<Route index element={<Home/>}/><Route path="about" element={<About/>}/><Route path="services" element={<Services/>}/><Route path="services/:slug" element={<ServiceDetail/>}/>
<Route path="software-solutions" element={<Software/>}/><Route path="industries" element={<Industries/>}/><Route path="portfolio" element={<Portfolio/>}/><Route path="blog" element={<Blog/>}/>
<Route path="contact" element={<Contact/>}/><Route path="privacy-policy" element={<Privacy/>}/><Route path="terms" element={<Terms/>}/>
<Route path="*" element={<Section><h1 className="text-3xl font-bold">Page not found</h1></Section>}/></Route></Routes>)}
