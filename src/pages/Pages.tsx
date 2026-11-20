import {useState} from 'react'
import {Link,useParams} from 'react-router-dom'
import {Seo,Section,Heading,PageHero,Mock,ServiceCard,ProductCard,IndustryCard,CTA} from '../components/ui'
import {services,products,industries,values,projects,projectCategories,posts,blogCategories} from '../data/content'
import {ExternalLink} from 'lucide-react'

export const About=()=><>
<Seo
  path="/about"
  title="About Nexora Smart Services Ltd"
  desc="Discover Nexora Smart Services Ltd, an independent technology and business consultancy company headquartered in Buea, Cameroon, with a branch in Yaoundé."
/>

<PageHero
  t="About Nexora Smart Services Ltd"
  d="Empowering businesses and organisations through practical technology, innovative software and professional business solutions."
/>

<Section>
  <Heading
    k="Who We Are"
    t="Technology and Business Solutions That Make a Difference"
    d="Nexora Smart Services Ltd is an independent technology and business consultancy company committed to helping businesses, organisations and entrepreneurs work smarter, improve efficiency and achieve sustainable growth."
  />

  <div className="max-w-4xl space-y-4 text-slate leading-7">
    <p>
      Headquartered in Buea, Cameroon, with an active branch in Yaoundé, Nexora delivers practical solutions that combine technology expertise, business understanding and professional consultancy.
    </p>

    <p>
      Our work spans custom software development, hotel management and booking solutions, point-of-sale and inventory management, data management and analytics, IT solutions, digital transformation, automation, training and business consultancy.
    </p>

    <p>
      We serve businesses and organisations across different sectors, including hospitality, retail, wholesale, healthcare, education, NGOs and small and medium-sized enterprises.
    </p>
  </div>

  <div className="mt-10 grid gap-5 md:grid-cols-2">
    <div className="card">
      <h2 className="text-xl font-bold">Our Mission</h2>
      <p className="mt-2 text-slate leading-7">
        To provide accessible, innovative and reliable technology and consultancy solutions that empower businesses and institutions to improve productivity, efficiency and sustainable growth.
      </p>
    </div>

    <div className="card">
      <h2 className="text-xl font-bold">Our Vision</h2>
      <p className="mt-2 text-slate leading-7">
        To become a trusted technology and business solutions provider in Cameroon and across Africa.
      </p>
    </div>
  </div>

  <div className="mt-12">
    <Heading
      k="How We Work"
      t="Practical Solutions Built Around Your Needs"
      d="We believe effective technology should solve real business problems. We take time to understand operational challenges and identify suitable solutions, whether through software, improved data processes, IT support, automation or professional consultancy."
    />
  </div>

  <h2 className="mt-12 text-2xl font-bold">Our Core Values</h2>

  <ul className="mt-4 flex flex-wrap gap-3">
    {values.map(v=>(
      <li
        key={v}
        className="rounded-full bg-mist px-4 py-2 text-sm font-semibold text-navy"
      >
        {v}
      </li>
    ))}
  </ul>

  <div className="card mt-12">
    <h2 className="text-xl font-bold">Our Presence in Cameroon</h2>
    <p className="mt-2 text-slate leading-7">
      With our headquarters in Buea and an active branch in Yaoundé, Nexora Smart Services Ltd is positioned to support businesses and organisations in Cameroon through technology and professional consultancy services.
    </p>
  </div>
</Section>

<CTA/>
</>


export const Services=()=><><Seo path="/services" title="Our Services" desc="Explore Nexora Smart Services Ltd's software development, IT solutions, data management, business automation, training and consultancy services in Cameroon."/>
<PageHero t="Our Services" d="Practical technology, software and professional consultancy solutions designed to help businesses and organisations work smarter, operate efficiently and grow."/>
<Section>
<Heading k="How We Help" t="Solutions Designed Around Your Business" d="Every organisation faces different challenges. Nexora combines technology expertise and business consultancy to deliver practical solutions that address operational needs, improve efficiency and support informed decision-making."/>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} s={s}/>)}</div>
</Section>
<CTA/></>

export function ServiceDetail(){const {slug}=useParams();const s=services.find(x=>x.slug===slug)
 if(!s)return <Section><h1 className="text-3xl font-bold">Service not found</h1><Link to="/services" className="btn-p mt-6">View all services</Link></Section>
 return<><Seo path={`/services/${s.slug}`} title={s.title} desc={s.desc}/><PageHero t={s.title} d={s.desc}/>
 <Section><div className="grid gap-5 md:grid-cols-3">{[['Problem addressed',s.problem],['Customer benefit',s.benefit],['Relevant industries',s.industries]].map(([a,b])=><div key={a} className="card"><h2 className="font-bold">{a}</h2><p className="mt-2 text-sm text-slate">{b}</p></div>)}</div>
 <Link to={`/contact?service=${encodeURIComponent(s.title)}`} className="btn-p mt-8">Enquire about this service</Link></Section><CTA/></>}
export const Software=()=><><Seo path="/software-solutions" title="Software Solutions" desc="Discover Nexora Stay hotel management software and Nexora POS business management software with sales and inventory management features for businesses in Cameroon."/>
<PageHero t="Our Software Solutions" d="Explore Nexora Stay and Nexora POS, practical software applications designed to support hotel operations, sales, stock control and day-to-day business management."/>
<Section>
<Heading k="Nexora Software" t="Two Applications. Practical Business Solutions." d="Nexora develops software applications to help organisations manage day-to-day operations more efficiently. Explore each solution and request a demonstration to see its features."/>
<div className="grid gap-6 lg:grid-cols-2">{products.map(p=><ProductCard key={p.slug} p={p}/>)}</div>
</Section>
<CTA/></>
export const Industries=()=><><Seo path="/industries" title="Industries We Serve" desc="Nexora Smart Services Ltd provides software, IT, data management and business consultancy solutions for hotels, retailers, wholesalers, clinics, schools, NGOs, SMEs and organisations in Cameroon."/>
<PageHero t="Industries We Serve" d="Practical technology and business solutions for organisations across different sectors in Cameroon."/>
<Section>
<Heading k="Who We Support" t="Technology That Works for Your Industry" d="Every sector has unique operational challenges. Nexora combines software solutions, data management, IT expertise and professional consultancy to help organisations improve their processes, manage information and operate more efficiently."/>
<div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
{industries.map(i=><IndustryCard key={i.title} i={i}/>)}
</div>
</Section>
<CTA/></>
export function Portfolio(){
const [c,setC]=useState('All');
const list=projects.filter(p=>c==='All'||p.category===c);

return<>
<Seo path="/portfolio" title="Our Projects & Portfolio" desc="Explore selected projects by Nexora Smart Services Ltd, including website development and digital solutions for businesses in Cameroon."/>
<PageHero t="Our Projects & Portfolio" d="Discover selected projects that demonstrate how Nexora applies technology and digital solutions to real business needs."/>

<Section>
<Heading k="Our Work" t="Practical Solutions. Real Projects." d="We work with businesses and organisations to develop practical digital solutions that support their operations. Explore selected projects delivered by Nexora Smart Services Ltd."/>

<div className="mb-8 flex flex-wrap gap-2">
{['All',...projectCategories].map(k=><button key={k} onClick={()=>setC(k)} aria-pressed={c===k} className={`rounded-full px-4 py-2 text-sm font-semibold ${c===k?'bg-navy text-white':'bg-mist text-navy'}`}>{k}</button>)}
</div>

{list.length?<div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
{list.map(p=><article key={p.title} className="card">
<p className="text-xs font-semibold uppercase text-sky-dark">{p.category}</p>
<h2 className="mt-1 text-xl font-bold">{p.title}</h2>
<p className="mt-2 text-sm text-slate">{p.desc}</p>
{p.url&&<a href={p.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-sky-dark">Visit website <ExternalLink className="h-4 w-4"/></a>}
</article>)}
</div>:<p className="text-slate">No projects in this category yet.</p>}
</Section>
<CTA/>
</>}

export const Blog=()=><>
<Seo
  path="/blog"
  title="Insights"
  desc="Practical insights on technology, software solutions, data management, inventory management and digital transformation from Nexora Smart Services Ltd."
/>

<PageHero
  t="Insights & Business Resources"
  d="Explore practical articles, technology insights and business guidance to help organisations improve operations, make better decisions and grow."
/>

<Section>
  <Heading
    k="Knowledge & Insights"
    t="Ideas That Help Businesses Move Forward"
    d="Discover useful information on software solutions, inventory management, digital transformation and data management."
  />

  <div className="mb-8 flex flex-wrap gap-2">
    {blogCategories.map(k=>(
      <span
        key={k}
        className="rounded-full bg-mist px-3 py-1 text-xs font-semibold text-navy"
      >
        {k}
      </span>
    ))}
  </div>

  <div className="space-y-8">
    {posts.map(p=>(
      <article key={p.title} className="card">
        <p className="text-xs font-semibold uppercase text-sky-dark">
          {p.category}
        </p>

        <h2 className="mt-2 text-2xl font-bold text-navy">
          {p.title}
        </h2>

        <p className="mt-3 mb-5 text-sm font-medium text-slate">
          {p.excerpt}
        </p>

        <div className="max-w-4xl space-y-4 text-slate leading-7">
          {p.content.map((paragraph,index)=>(
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    ))}
  </div>
</Section>
</>
const Legal=({path,t,body}:{path:string;t:string;body:string[]})=><>
  <Seo path={path} title={t} desc={`${t} for Nexora Smart Services Ltd.`}/>
  <PageHero t={t} d="Draft text. Have it reviewed by a legal professional before relying on it."/>
  <Section>
    <div className="max-w-3xl space-y-4 text-slate">
      {body.map(b=><p key={b}>{b}</p>)}
    </div>
  </Section>
</>

export const Privacy=()=><Legal path="/privacy-policy" t="Privacy Policy" body={['Nexora Smart Services Ltd collects only the information you submit through our contact form or by WhatsApp or phone, such as your name, organisation, email, telephone number and message.','We use this information to respond to your enquiry and to provide our services. We do not sell your personal information.','To ask about or request removal of your information, contact us using the details on our Contact page.']}/>
export const Terms=()=><Legal path="/terms" t="Terms & Conditions" body={['By using this website you agree to use it lawfully and not to interfere with its operation.','Information on this website is provided for general information. Service scope, pricing and delivery are agreed in writing with each client.','Software dashboard visuals on this website are illustrative and may not represent final application screens.']}/>
export {Mock}
