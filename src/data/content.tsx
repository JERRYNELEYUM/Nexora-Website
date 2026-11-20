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
{
slug:'stay',
name:'Nexora Stay',
cat:'Hotel Management System',
image:'/images/products/nexora-stay-dashboard.png',
desc:'A hotel management application designed to simplify hotel operations, improve reservation management and streamline financial and administrative processes.',
features:['Room and reservation management','Guest management','Payment tracking','Expense management','Employee management','Payroll management','Financial reporting','Operational management'],
target:'Hotels and guest houses'
},
{
slug:'pos',
name:'Nexora POS',
cat:'Point of Sale & Business Management',
image:'/images/products/nexora-pos-dashboard.png',
desc:'A business management application that helps businesses manage sales, inventory, employees and financial operations efficiently.',
features:['Sales processing','Product management','Inventory tracking','Customer management','Employee management','Payroll processing','Expense management','Business reporting'],
target:'Schools, supermarkets, shops and retail businesses'
}
]
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
{
title:'Why Small Businesses Need Inventory Tracking',
category:'Inventory Management',
excerpt:'Discover how proper inventory tracking helps small businesses reduce stock losses, control purchasing and make better decisions.',
content:[
'Inventory is one of the most important assets of many small businesses. Whether you operate a supermarket, pharmacy, wholesale shop or retail store, knowing what you have in stock is essential to running your business effectively.',
'Without proper inventory tracking, business owners may struggle with missing products, inaccurate stock counts, unnecessary purchases and unexpected stock shortages. These problems can affect customer satisfaction, cash flow and profitability.',
'Start by creating a clear record of every product. Include its name, product code, quantity available, purchase price, selling price and supplier information. Update the records whenever goods are received, sold, returned or damaged.',
'Conduct regular stock counts and compare the physical quantities with your records. Investigate differences instead of simply adjusting the figures. This can help identify recording mistakes, damaged goods, theft or other stock management problems.',
'Pay attention to fast-moving and slow-moving products. Fast-moving items may require more frequent replenishment, while slow-moving products can tie up money that could be used elsewhere in the business.',
'Digital inventory management tools can make these processes easier by bringing product records, sales and stock movements together. For businesses managing many products or multiple locations, a suitable point-of-sale system with inventory management features can improve visibility and organisation.',
'Good inventory management is not only about counting products. It is about knowing what your business owns, understanding how products move and using accurate information to make purchasing and sales decisions.'
]
},
{
title:'First Steps in Digital Transformation',
category:'Digital Transformation',
excerpt:'A practical guide to identifying manual business processes, choosing appropriate digital tools and introducing technology gradually.',
content:[
'Digital transformation is the process of using digital technology to improve how an organisation operates, serves customers and manages information. It is not simply about buying computers or installing software. It begins with understanding business challenges and identifying where technology can make a meaningful difference.',
'Many small businesses and organisations still depend on paper records, spreadsheets, manual calculations and disconnected processes. These methods may work initially, but as operations grow, they can become difficult to manage and increase the risk of errors, delays and duplicated work.',
'The first step is to review your current operations. Identify activities that consume significant time, require repeated data entry or make it difficult to access reliable information. Examples may include recording sales, managing stock, processing bookings, preparing reports or maintaining customer records.',
'Next, prioritise the problems that have the greatest effect on your business. You do not need to digitise everything at once. Start with one important process where an improvement can be clearly observed and evaluated.',
'Choose technology that matches your actual requirements. Consider ease of use, cost, security, reliability, staff training and the ability to support future growth. A small business may benefit from a suitable point-of-sale or accounting system, while a hotel may need a booking and management application.',
'Successful digital transformation also depends on people. Explain why a new system is being introduced, involve the employees who will use it and provide practical training. Allow time for users to become comfortable with the new process and collect feedback before expanding its use.',
'Finally, review the results. Check whether the new process saves time, improves record accuracy, reduces unnecessary work or makes information easier to access. Use these observations to decide what to improve next.',
'Digital transformation is a continuous journey. Starting with a clearly defined problem, choosing appropriate tools and supporting the people who use them can help organisations adopt technology in a practical and sustainable way.'
]
},
{
title:'Clean Data, Better Decisions',
category:'Data Management',
excerpt:'Understand why accurate, complete and consistent data is essential for reporting, planning and informed business decisions.',
content:[
'Businesses and organisations make decisions every day using information about customers, sales, finances, inventory, employees and operations. The quality of those decisions depends heavily on the quality of the information available.',
'Poor-quality data can contain missing values, duplicate records, spelling inconsistencies, incorrect figures or outdated information. When these problems are not addressed, reports may become misleading and managers may make decisions based on inaccurate information.',
'Data cleaning is the process of identifying and correcting problems in a dataset. It may involve removing duplicate records, standardising dates and names, checking unusual values, correcting formatting issues and handling missing information appropriately.',
'For example, a business that records the same customer under several different spellings may struggle to understand how many customers it actually serves. Similarly, inconsistent product names can make sales and inventory reports unreliable.',
'Data validation should also be part of the process. Establish clear rules for information entered into business systems. These may include required fields, valid date formats, acceptable number ranges and consistent product or customer codes. Good validation reduces errors before they spread into reports.',
'Organisations should maintain clear procedures for updating, reviewing and protecting their data. Staff should understand who is responsible for entering information, who can make changes and how important records are backed up and secured.',
'Once information is sufficiently accurate and organised, it becomes more useful for analysis. Businesses can examine sales patterns, monitor operational performance, identify changes over time and prepare reports that support planning.',
'Clean data does not automatically guarantee good decisions, but it provides a more reliable foundation for analysis. Investing in data quality helps organisations understand their operations and make decisions with greater confidence.'
]
}
];
export const blogCategories=['Technology and Business','Software Solutions','Digital Transformation','Inventory Management','Data Management','Business Automation']
