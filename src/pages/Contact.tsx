import {useState,type FormEvent} from 'react'
import {useSearchParams} from 'react-router-dom'
import {Phone,MessageCircle} from 'lucide-react'
import {Seo,PageHero,Section} from '../components/ui'
import {PHONES,services,waLink} from '../data/content'
const F=['name','org','email','phone','service','message'] as const
type V=Record<typeof F[number],string>
export default function Contact(){
 const [sp]=useSearchParams()
 const [v,setV]=useState<V>({name:'',org:'',email:'',phone:'',service:sp.get('service')||'',message:''})
 const [err,setErr]=useState<Partial<V>>({});const [status,setStatus]=useState<'idle'|'ok'|'fail'>('idle')
 const set=(k:keyof V)=>(e:{target:{value:string}})=>setV({...v,[k]:e.target.value})
 async function submit(e:FormEvent){e.preventDefault()
  const x:Partial<V>={}
  if(v.name.trim().length<2)x.name='Please enter your full name.'
  if(!/^\S+@\S+\.\S+$/.test(v.email))x.email='Please enter a valid email address.'
  if(!/^\+?[0-9\s-]{8,16}$/.test(v.phone))x.phone='Please enter a valid telephone number.'
  if(!v.service)x.service='Please choose a service.'
  if(v.message.trim().length<10)x.message='Please write at least 10 characters.'
  setErr(x);if(Object.keys(x).length)return
  const text=`New enquiry from ${v.name}${v.org?` (${v.org})`:''}\nEmail: ${v.email}\nTel: ${v.phone}\nService: ${v.service}\n${v.message}`
  const ep=import.meta.env.VITE_FORM_ENDPOINT as string|undefined
  try{if(ep){const r=await fetch(ep,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(v)});if(!r.ok)throw new Error()}else window.open(waLink(text),'_blank','noopener')
   setStatus('ok')}catch{setStatus('fail')}}
 const inp='mt-1 w-full rounded-lg border border-navy/20 px-3 py-2 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky/30'
 const L=({k,l,t='text'}:{k:keyof V;l:string;t?:string})=><div><label htmlFor={k} className="text-sm font-semibold">{l}</label><input id={k} type={t} value={v[k]} onChange={set(k)} aria-invalid={!!err[k]} className={inp}/>{err[k]&&<p role="alert" className="mt-1 text-sm text-red-600">{err[k]}</p>}</div>
 return<><Seo path="/contact" title="Contact Us" desc="Contact Nexora Smart Services Ltd in Buea or Yaoundé by phone, WhatsApp or enquiry form."/><PageHero t="Contact Us" d="Tell us about your business and we will get back to you."/>
 <Section><div className="grid gap-10 md:grid-cols-5"><div className="md:col-span-2 space-y-4"><h2 className="text-xl font-bold">Nexora Smart Services Ltd.</h2><p className="text-slate">Headquarters: Buea, South-West Region, Cameroon.<br/>Active branch: Yaoundé, Cameroon.<br/>Office address and company email: to be supplied.</p>
  {PHONES.map(p=><a key={p} href={`tel:${p.replace(/\s/g,'')}`} className="btn-s w-full"><Phone className="h-4 w-4"/>{p}</a>)}<a href={waLink()} target="_blank" rel="noopener noreferrer" className="btn-p w-full"><MessageCircle className="h-4 w-4"/>WhatsApp enquiry</a></div>
  <form onSubmit={submit} noValidate className="md:col-span-3 space-y-4"><L k="name" l="Full Name"/><L k="org" l="Business or Organisation"/><L k="email" l="Email" t="email"/><L k="phone" l="Telephone" t="tel"/>
   <div><label htmlFor="service" className="text-sm font-semibold">Service Required</label><select id="service" value={v.service} onChange={set('service')} className={inp}><option value="">Select a service</option>{[...services.map(s=>s.title),'Consultation','Demo: Nexora Stay','Demo: Nexora POS','Demo: Nexora Inventory'].map(o=><option key={o}>{o}</option>)}</select>{err.service&&<p role="alert" className="mt-1 text-sm text-red-600">{err.service}</p>}</div>
   <div><label htmlFor="message" className="text-sm font-semibold">Message</label><textarea id="message" rows={5} value={v.message} onChange={set('message')} className={inp}/>{err.message&&<p role="alert" className="mt-1 text-sm text-red-600">{err.message}</p>}</div>
   <button className="btn-p">Send enquiry</button>
   {status==='ok'&&<p role="status" className="rounded-lg bg-green-50 p-3 text-green-800">Thank you. Your enquiry has been prepared and sent. If WhatsApp opened, please press send there to complete it.</p>}
   {status==='fail'&&<p role="alert" className="rounded-lg bg-red-50 p-3 text-red-800">Sorry, we could not send your enquiry. Please call or use WhatsApp instead.</p>}</form></div></Section></>}
