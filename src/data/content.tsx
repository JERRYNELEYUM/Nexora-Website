import {Database,Code2,Boxes,Workflow,GraduationCap,Wrench,Landmark,Plane,Hotel,ShoppingCart,Warehouse,Stethoscope,School,HeartHandshake,Store,Building2} from 'lucide-react'
import type {LucideIcon} from 'lucide-react'
export const PHONES=['+237 680 918 457','+237 679 730 162']
export const WA_NUMBER='237680918457'
export const WA_MSG='Hello Nexora Smart Services Ltd. I visited your website and would like to enquire about your services.'
export const waLink=(m=WA_MSG)=>`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(m)}`
export type Service={slug:string;icon:LucideIcon;title:string;desc:string;problem:string;benefit:string;industries:string}
export const services:Service[]=[
{slug:'data-management',icon:Database,title:'Data Management & Analytics',desc:'Data collection, data entry, cleaning, validation, database design and management, analysis, reporting, data warehousing and business intelligence.',problem:'Scattered, inconsistent or unreliable records that make decisions slow and risky.',benefit:'Clean, trusted data and clear reports that support better decisions.',industries:'SMEs, NGOs, Government, Healthcare'},
{slug:'software-it',icon:Code2,title:'Software Development & IT Solutions',desc:'Custom software, websites, web applications, business management systems, IT infrastructure, cybersecurity and cloud solutions.',problem:'Off-the-shelf tools that do not fit how your business actually works.',benefit:'Tailored systems that fit your processes and can grow with you.',industries:'All sectors'},
{slug:'inventory-business',icon:Boxes,title:'Inventory & Business Management',desc:'POS solutions, inventory tracking, stock management, expiry alerts, sales analytics and business reporting.',problem:'Stock losses, expired goods and no clear view of sales performance.',benefit:'Better stock control and reliable sales and business reports.',industries:'Supermarkets, Retail, Wholesale, Clinics'},
{slug:'digital-transformation',icon:Workflow,title:'Digital Transformation & Automation',desc:'Business process automation, workflow management, digital record keeping, systems integration and operational improvements.',problem:'Paper-based or manual processes that waste time and cause errors.',benefit:'Faster workflows, fewer errors and organised digital records.',industries:'Corporate, Education, NGOs, SMEs'},
{slug:'training',icon:GraduationCap,title:'Training & Capacity Building',desc:'Computer training, data management, business software training and digital skills development.',problem:'Teams that lack the digital skills to use their tools effectively.',benefit:'Confident staff who get more value from technology.',industries:'Education, NGOs, SMEs, Corporate'},
{slug:'support',icon:Wrench,title:'Technical Support & Maintenance',desc:'IT troubleshooting, hardware and software support, system upgrades and remote or on-site technical assistance.',problem:'Downtime and unresolved technical issues that interrupt operations.',benefit:'Dependable support that keeps your systems running.',industries:'All sectors'},
{slug:'financial-consultancy',icon:Landmark,title:'Financial & Business Consultancy',desc:'Financial consultancy, management advisory, business reporting and operational efficiency consultancy.',problem:'Limited visibility into performance and operational inefficiencies.',benefit:'Practical advice and reporting to improve efficiency.',industries:'SMEs, Entrepreneurs, Corporate'},
{slug:'travel',icon:Plane,title:'Travel Consultancy',desc:'Travel consultancy and related advisory services.',problem:'Uncertainty when planning travel and related arrangements.',benefit:'Clear, professional guidance for your travel needs.',industries:'Individuals, SMEs, Corporate'}]
export const products=[
{slug:'stay',name:'Nexora Stay',cat:'Hotel Management System',desc:'A hotel management application designed to simplify hotel operations, improve reservation management and streamline financial and administrative processes.',features:['Room and reservation management','Guest management','Payment tracking','Expense management','Employee management','Payroll management','Financial reporting','Operational management'],target:'Hotels and guest houses'},
{slug:'pos',name:'Nexora POS',cat:'Point of Sale & Business Management',desc:'A business management application that helps businesses manage sales, inventory, employees and financial operations efficiently.',features:['Sales processing','Product management','Inventory tracking','Customer management','Employee management','Payroll processing','Expense management','Business reporting'],target:'Supermarkets, shops and retail businesses'},
{slug:'inventory',name:'Nexora Inventory',cat:'Inventory Management System',desc:'A stock management solution for supermarkets, clinics and other businesses that need better control of their inventory.',features:['Stock monitoring','Product management','Stock movement tracking','Low-stock alerts','Product expiry monitoring','Sales analytics','Inventory reporting'],target:'Supermarkets, clinics and stock-holding businesses'}]
export const industries:{icon:LucideIcon;title:string;desc:string}[]=[
{icon:Hotel,title:'Hospitality & Hotels',desc:'Reservations, billing and staff management handled in one place instead of paper and spreadsheets.'},
{icon:ShoppingCart,title:'Supermarkets & Retail',desc:'Faster checkout, accurate stock counts and clear sales reporting.'},
{icon:Warehouse,title:'Wholesale Businesses',desc:'Track bulk stock movement, suppliers and customer accounts.'},
{icon:Stethoscope,title:'Healthcare & Clinics',desc:'Control supplies, monitor expiry dates and keep organised records.'},
{icon:School,title:'Educational Institutions',desc:'Digital records, reporting and digital skills training for staff.'},
{icon:HeartHandshake,title:'NGOs',desc:'Structured data collection, reporting and project information management.'},
{icon:Store,title:'SMEs & Entrepreneurs',desc:'Affordable systems and advice to organise operations and grow.'},
{icon:Building2,title:'Government & Corporate',desc:'Data quality, workflow automation and secure, reliable IT systems.'}]
export const why=['Innovative business-focused solutions','Practical proprietary software','Professional technology consultancy','Customer-oriented service','Flexible business solutions','Technical support','Local market understanding','Commitment to continuous improvement']
export const values=['Innovation','Integrity','Professionalism','Customer Satisfaction','Excellence','Reliability','Continuous Improvement']
export const projectCategories=['Website Development','Software Development','Hotel Technology','Business Management Systems','Digital Transformation','IT Consultancy']
// Add new projects here. They appear on the Portfolio page automatically.
export const projects:{title:string;category:string;desc:string;url?:string}[]=[
{title:'Hotel Omnisport',category:'Website Development',desc:'Website development and digital presence for Hotel Omnisport.',url:'https://hotelomnisport.com/'}]
// Add new articles here. Sample content is clearly labelled.
export const posts=[
{title:'Why small businesses need inventory tracking',category:'Inventory Management',excerpt:'A short introduction to the benefits of tracking stock digitally.'},
{title:'First steps in digital transformation',category:'Digital Transformation',excerpt:'Where to begin when moving manual processes to digital tools.'},
{title:'Clean data, better decisions',category:'Data Management',excerpt:'Why data quality matters before reporting and analytics.'}]
export const blogCategories=['Technology and Business','Software Solutions','Digital Transformation','Inventory Management','Data Management','Business Automation']
