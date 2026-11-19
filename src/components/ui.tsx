import {useEffect,type ReactNode} from 'react'
import {Link} from 'react-router-dom'
import {ArrowRight,Check} from 'lucide-react'
import type {Service} from '../data/content'
import type {LucideIcon} from 'lucide-react'
const SITE=(import.meta.env.VITE_SITE_URL as string)||'https://nexora-website-52g.pages.dev'
export function Seo({title,desc,path}:{title:string;desc:string;path:string}){
 useEffect(()=>{
  document.title=`${title} | Nexora Smart Services Ltd`
  const m=(attr:string,key:string,val:string)=>{let e=document.head.querySelector(`meta[${attr}="${key}"]`);if(!e){e=document.createElement('meta');e.setAttribute(attr,key);document.head.appendChild(e)}e.setAttribute('content',val)}
  m('name','description',desc);m('property','og:title',title);m('property','og:description',desc);m('property','og:url',SITE+path);m('property','og:type','website')
  let l=document.head.querySelector('link[rel="canonical"]');if(!l){l=document.createElement('link');l.setAttribute('rel','canonical');document.head.appendChild(l)}l.setAttribute('href',SITE+path)
 },[title,desc,path]);return null}
export const Section=({children,alt,id}:{children:ReactNode;alt?:boolean;id?:string})=><section id={id} className={alt?'bg-mist':''}><div className="mx-auto max-w-6xl px-5 py-16 md:py-20">{children}</div></section>
export const Heading=({k,t,d}:{k?:string;t:string;d?:string})=><div className="mb-10 max-w-2xl">{k&&<p className="mb-2 text-sm font-semibold uppercase tracking-wider text-sky-dark">{k}</p>}<h2 className="text-3xl font-bold md:text-4xl">{t}</h2>{d&&<p className="mt-3 text-slate">{d}</p>}</div>
export const PageHero=({t,d}:{t:string;d:string})=><div className="bg-gradient-to-br from-mist to-white"><div className="mx-auto max-w-6xl px-5 py-16"><h1 className="text-4xl font-extrabold md:text-5xl">{t}</h1><p className="mt-4 max-w-2xl text-lg text-slate">{d}</p></div></div>
export function Mock({label}:{label?:string}){return(
 <div className="rounded-2xl bg-white p-4 shadow-xl ring-1 ring-navy/10" role="img" aria-label="Illustrative software dashboard mockup">
  <div className="mb-3 flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-full bg-navy/20"/><i className="h-2.5 w-2.5 rounded-full bg-navy/20"/><i className="h-2.5 w-2.5 rounded-full bg-sky"/><span className="ml-auto text-[10px] text-slate">{label||'Illustrative mockup'}</span></div>
  <div className="grid grid-cols-3 gap-2">{[60,40,80].map((w,i)=><div key={i} className="rounded-lg bg-mist p-2"><div className="h-1.5 w-8 rounded bg-slate/30"/><div className="mt-2 h-3 rounded bg-navy" style={{width:`${w}%`}}/></div>)}</div>
  <div className="mt-3 flex h-24 items-end gap-1.5 rounded-lg bg-mist p-2">{[40,65,50,80,60,90,70].map((h,i)=><div key={i} className="flex-1 rounded-t bg-sky" style={{height:`${h}%`,opacity:.5+i*.07}}/>)}</div>
  <div className="mt-3 space-y-1.5">{[90,70,80].map((w,i)=><div key={i} className="h-2 rounded bg-navy/10" style={{width:`${w}%`}}/>)}</div>
 </div>)}
export const ServiceCard=({s}:{s:Service})=><article className="card"><s.icon className="h-8 w-8 text-sky" aria-hidden/><h3 className="mt-4 text-lg font-bold">{s.title}</h3><p className="mt-2 text-sm text-slate">{s.desc}</p><Link to={`/services/${s.slug}`} className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-dark">Learn More <ArrowRight className="h-4 w-4"/></Link></article>
export const IndustryCard=({i}:{i:{icon:LucideIcon;title:string;desc:string}})=><article className="card"><i.icon className="h-7 w-7 text-sky" aria-hidden/><h3 className="mt-3 font-bold">{i.title}</h3><p className="mt-1 text-sm text-slate">{i.desc}</p></article>
export const ProductCard=({p}:{p:{name:string;cat:string;desc:string;features:string[];target:string;image:string}})=>(
 <article className="card flex flex-col"><img src={p.image} alt={`${p.name} application dashboard`} className="w-full h-56 object-contain rounded-xl bg-mist p-2"/><p className="mt-5 text-xs font-semibold uppercase text-sky-dark">{p.cat}</p><h3 className="text-xl font-bold">{p.name}</h3><p className="mt-2 text-sm text-slate">{p.desc}</p>
  <ul className="mt-4 grid gap-1.5 text-sm">{p.features.map(f=><li key={f} className="flex gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-sky"/>{f}</li>)}</ul>
  <p className="mt-4 text-sm"><b>Target customers:</b> {p.target}</p><Link to={`/contact?service=${encodeURIComponent('Demo: '+p.name)}`} className="btn-p mt-5">Request a Demo</Link></article>)
export const CTA=()=><section className="bg-navy"><div className="mx-auto max-w-6xl px-5 py-16 text-center"><h2 className="text-3xl font-bold text-white md:text-4xl">Let's Build Smarter Business Solutions Together.</h2><p className="mx-auto mt-4 max-w-2xl text-white/80">Whether you need custom software, business automation, IT support or digital transformation, Nexora is ready to help you move forward.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contact?service=Consultation" className="btn-p">Request a Consultation</Link><Link to="/contact" className="btn border border-white/40 text-white hover:bg-white/10">Contact Nexora</Link></div></div></section>
