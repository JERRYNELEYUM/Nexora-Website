import {Link} from 'react-router-dom'
import {Seo,Section,Heading,Mock,ServiceCard,ProductCard,IndustryCard,CTA} from '../components/ui'
import {services,products,industries,why} from '../data/content'
import {Check,MapPin} from 'lucide-react'
const highlights=['Software Development','IT Solutions','Data Management','Business Automation','Digital Transformation','Business Consultancy']
export default function Home(){return(<>
<Seo path="/" title="IT Solutions & Software Company in Cameroon" desc="Nexora Smart Services Ltd: software development, IT consultancy, data management and digital transformation in Buea, Yaoundé and across Cameroon."/>
<div className="bg-gradient-to-br from-sky/20 via-mist to-white"><div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 md:grid-cols-2 md:py-24">
 <div><h1 className="text-4xl font-extrabold leading-tight md:text-5xl">Smart Technology. Better Business. Sustainable Growth.</h1>
 <p className="mt-5 text-lg text-slate">We empower businesses and organisations with innovative software, intelligent business solutions and professional technology consultancy that simplify operations and accelerate growth.</p>
 <div className="mt-8 flex flex-wrap gap-3"><Link to="/software-solutions" className="btn-p">Explore Our Solutions</Link><Link to="/contact" className="btn-s">Talk to Our Team</Link></div></div>
 <div className="relative"><div className="absolute -inset-4 -z-10 rounded-3xl bg-sky/10 rotate-2"/><Mock/><div className="absolute -bottom-6 -left-4 hidden w-40 sm:block"><Mock label="Mobile"/></div></div></div></div>
<Section><Heading k="Introduction" t="Your Technology Partner for Business Growth." d="At Nexora Smart Services Ltd, we believe technology should make business easier, smarter and more efficient. We combine technology expertise, software development and business consultancy to provide practical solutions that help organisations streamline operations and achieve sustainable growth."/>
<ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{highlights.map(h=><li key={h} className="flex items-center gap-2 rounded-xl bg-mist p-4 font-semibold text-navy"><Check className="h-5 w-5 text-sky"/>{h}</li>)}</ul></Section>
<Section alt><Heading k="Core Services" t="What we do"/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div></Section>
<Section><Heading k="Software Products" t="Proprietary software built for African businesses" d="Dashboard visuals below are illustrative only, not real application screenshots."/><div className="grid gap-6 lg:grid-cols-3">{products.map(p=><ProductCard key={p.slug} p={p}/>)}</div></Section>
<Section alt><Heading k="Industries We Serve" t="Technology for every sector"/><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{industries.map(i=><IndustryCard key={i.title} i={i}/>)}</div></Section>
<Section><Heading k="Why Choose Nexora?" t="Technology That Works for Your Business."/><ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{why.map(w=><li key={w} className="card flex gap-2 text-sm font-semibold"><Check className="h-5 w-5 shrink-0 text-sky"/>{w}</li>)}</ul></Section>
<Section alt><Heading k="Locations" t="Where we work"/><div className="grid gap-5 md:grid-cols-3">{[['Headquarters','Buea, South-West Region, Cameroon.'],['Active Branch','Yaoundé, Cameroon.'],['Service Areas','Limbe, Douala and other locations across Cameroon.']].map(([a,b])=><div key={a} className="card"><MapPin className="text-sky"/><h3 className="mt-3 font-bold">{a}</h3><p className="text-sm text-slate">{b}</p></div>)}</div></Section>
<CTA/></>)}
