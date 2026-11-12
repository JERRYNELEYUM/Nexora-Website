import {useState,useEffect} from 'react'
import {Link,NavLink,Outlet,useLocation} from 'react-router-dom'
import {Menu,X,Phone,MessageCircle} from 'lucide-react'
import {PHONES,waLink} from '../data/content'
const nav=[['/','Home'],['/about','About'],['/services','Services'],['/software-solutions','Software Solutions'],['/industries','Industries'],['/portfolio','Portfolio'],['/contact','Contact']]
export const Logo=({light}:{light?:boolean})=><Link to="/" className="flex items-center gap-2" aria-label="Nexora Smart Services Ltd home"><span className="grid h-9 w-9 place-items-center rounded-lg bg-navy font-extrabold text-sky">N</span><span className={`text-lg font-extrabold ${light?'text-white':'text-navy'}`}>NEXORA<span className="ml-1 text-xs font-semibold text-sky">SMART SERVICES</span></span></Link>
export default function Layout(){
 const [open,setOpen]=useState(false);const {pathname}=useLocation()
 useEffect(()=>{setOpen(false);window.scrollTo(0,0)},[pathname])
 const cls=({isActive}:{isActive:boolean})=>`text-sm font-medium hover:text-sky-dark ${isActive?'text-sky-dark':'text-ink'}`
 return(<>
 <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-white focus:p-2">Skip to content</a>
 <header className="sticky top-0 z-40 border-b border-navy/10 bg-white/90 backdrop-blur"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3"><Logo/>
  <nav aria-label="Main" className="hidden items-center gap-6 lg:flex">{nav.map(([to,l])=><NavLink key={to} to={to} end={to==='/'} className={cls}>{l}</NavLink>)}</nav>
  <Link to="/contact?service=Consultation" className="btn-p hidden lg:inline-flex">Request a Consultation</Link>
  <button className="lg:hidden" aria-label={open?'Close menu':'Open menu'} aria-expanded={open} onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button></div>
  {open&&<nav aria-label="Mobile" className="flex flex-col gap-4 border-t border-navy/10 bg-white px-5 py-5 lg:hidden">{nav.map(([to,l])=><NavLink key={to} to={to} end={to==='/'} className={cls}>{l}</NavLink>)}<Link to="/contact?service=Consultation" className="btn-p">Request a Consultation</Link></nav>}</header>
 <main id="main"><Outlet/></main>
 <footer className="bg-navy text-white/80"><div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4"><div className="md:col-span-2"><Logo light/><p className="mt-3 max-w-sm text-sm">Empowering Smart Solutions for Every Business.</p><p className="mt-3 text-sm">Headquarters: Buea, South-West Region, Cameroon.<br/>Active branch: Yaoundé, Cameroon.</p></div>
  <div><h2 className="mb-3 text-sm font-bold text-white">Explore</h2><ul className="space-y-2 text-sm">{[...nav.slice(1),['/blog','Insights'],['/privacy-policy','Privacy Policy'],['/terms','Terms & Conditions']].map(([to,l])=><li key={to}><Link to={to} className="hover:text-sky">{l}</Link></li>)}</ul></div>
  <div><h2 className="mb-3 text-sm font-bold text-white">Call us</h2><ul className="space-y-2 text-sm">{PHONES.map(p=><li key={p}><a className="hover:text-sky" href={`tel:${p.replace(/\s/g,'')}`}>{p}</a></li>)}</ul></div></div>
  <p className="border-t border-white/10 py-4 text-center text-xs">© {new Date().getFullYear()} Nexora Smart Services Ltd. All rights reserved.</p></footer>
 <a href={waLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat with Nexora on WhatsApp" className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-105 transition"><MessageCircle/></a>
 </>)}
export {Phone}
