/* ==========================================================================
   APPLE ENTERPRISE ERP PORTALS — APPLICATION LOGIC & ROLE ROUTING
   Seamless navigation to dedicated role pages upon login.
   ========================================================================== */

// --- 1. The 17 Standard Enterprise Roles with Dashboard Data ---
const ROLES_DATA = [
  {
    id: 'super-admin',
    title: 'Super Admin',
    tagline: 'PLATFORM GOVERNANCE',
    route: '/login/super-admin',
    description: 'Full platform ownership, user governance and tenant configuration.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
    metrics: [
      { label: 'Active Tenants', value: '18 Global', badge: '+2 this month' },
      { label: 'Security Enclave', value: 'FIPS 140-3', badge: 'Enforced' },
      { label: 'System Load', value: '14.2%', badge: 'Optimal' },
      { label: 'Global Uptime', value: '99.999%', badge: 'Zero Incident' }
    ],
    records: [
      { id: 'ADM-8492', desc: 'Tenant authentication policy updated for Cork Campus', status: 'Completed', time: '12 mins ago' },
      { id: 'ADM-8491', desc: 'Hardware security token rotation for Austin datacenter', status: 'Approved', time: '1 hour ago' },
      { id: 'ADM-8490', desc: 'Biometric identity audit completed across all 6 regions', status: 'Completed', time: '4 hours ago' },
      { id: 'ADM-8489', desc: 'Root certificate renewal for internal Perforce clusters', status: 'Active', time: 'Yesterday' }
    ]
  },
  {
    id: 'executive',
    title: 'Executive',
    tagline: 'STRATEGY & PERFORMANCE',
    route: '/login/executive',
    description: 'Enterprise strategy, performance and approvals.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    metrics: [
      { label: 'Quarterly Revenue', value: '$94.8B', badge: '+4.2% YoY' },
      { label: 'Operating Margin', value: '30.4%', badge: 'Industry Leading' },
      { label: 'Active Programs', value: '14 Lines', badge: 'On Track' },
      { label: 'Executive Approvals', value: '6 Pending', badge: 'Action Required' }
    ],
    records: [
      { id: 'EXE-3041', desc: 'FY27 Capex allocation for Fab 20 2nm substrate line', status: 'Pending', time: '25 mins ago' },
      { id: 'EXE-3040', desc: 'WWDC Keynote platform cadence sign-off', status: 'Approved', time: '2 hours ago' },
      { id: 'EXE-3039', desc: 'Special Projects Group milestone progress review', status: 'Completed', time: 'Yesterday' },
      { id: 'EXE-3038', desc: 'Cupertino 2030 Clean Energy transition tranche 4', status: 'Approved', time: '2 days ago' }
    ]
  },
  {
    id: 'finance',
    title: 'Finance',
    tagline: 'CAPITAL & CONTROL',
    route: '/login/finance',
    description: 'GL, AR/AP, tax, treasury and close.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`,
    metrics: [
      { label: 'Cash Reserves', value: '$162.4B', badge: 'Treasury Balanced' },
      { label: 'Accounts Payable', value: '$4.2B', badge: 'Net 30 Days' },
      { label: 'Accounts Receivable', value: '$6.8B', badge: '98.6% Current' },
      { label: 'Open Purchase Orders', value: '142 Orders', badge: 'Approved' }
    ],
    records: [
      { id: 'FIN-9104', desc: 'Samsung OLED panel tranche disbursement wire', status: 'Approved', time: '10 mins ago' },
      { id: 'FIN-9103', desc: 'Monthly currency hedge contract settlement (EUR/USD)', status: 'Completed', time: '1 hour ago' },
      { id: 'FIN-9102', desc: 'Foxconn Zhengzhou mass-assembly invoice reconciliation', status: 'Completed', time: '3 hours ago' },
      { id: 'FIN-9101', desc: 'Quarterly SEC Form 10-K internal ledger lock', status: 'Active', time: 'Yesterday' }
    ]
  },
  {
    id: 'hr',
    title: 'Human Resources',
    tagline: 'PEOPLE & CULTURE',
    route: '/login/hr',
    description: 'People operations, org, pay, policies and compliance.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
    metrics: [
      { label: 'Total Headcount', value: '164,000', badge: 'Worldwide' },
      { label: 'Open Requisitions', value: '840 Roles', badge: 'Silicon & AI' },
      { label: 'Retention Rate', value: '96.8%', badge: '+1.1% YoY' },
      { label: 'Pending Leaves', value: '42 Requests', badge: 'Reviewing' }
    ],
    records: [
      { id: 'HR-5521', desc: 'Silicon architecture talent relocation to Austin, TX', status: 'Approved', time: '30 mins ago' },
      { id: 'HR-5520', desc: 'Apple University Fall Leadership course registration', status: 'Active', time: '2 hours ago' },
      { id: 'HR-5519', desc: 'Annual health benefits open enrollment certification', status: 'Completed', time: 'Yesterday' },
      { id: 'HR-5518', desc: 'Worldwide hardware intern cohort onboarding plan', status: 'Completed', time: '2 days ago' }
    ]
  },
  {
    id: 'procurement',
    title: 'Procurement',
    tagline: 'SOURCE & SUPPLY',
    route: '/login/procurement',
    description: 'Strategic sourcing, PO approvals and supplier relationships.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
    metrics: [
      { label: 'Active Contracts', value: '512 Vendors', badge: '100% Audited' },
      { label: 'Annual Spend', value: '$18.6B', badge: 'Under Budget' },
      { label: 'Supplier On-Time', value: '98.4%', badge: 'High SLA' },
      { label: 'Open RFQs', value: '28 Quotes', badge: 'In Evaluation' }
    ],
    records: [
      { id: 'PRC-4182', desc: 'Grade 5 titanium alloy billet supply order for Q4', status: 'Approved', time: '18 mins ago' },
      { id: 'PRC-4181', desc: 'Corning custom ceramic shield substrate extension', status: 'Completed', time: '1 hour ago' },
      { id: 'PRC-4180', desc: 'Rare-earth recycled neodymium magnet procurement', status: 'Active', time: '4 hours ago' },
      { id: 'PRC-4179', desc: 'Sony CMOS camera sensor price negotiation gate 3', status: 'Pending', time: 'Yesterday' }
    ]
  },
  {
    id: 'rnd',
    title: 'R&D',
    tagline: 'DESIGN & ENGINEERING',
    route: '/login/rnd',
    description: 'Product design, BOM, routings and change control.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>`,
    metrics: [
      { label: 'Active Patents', value: '240 Filed', badge: 'USPTO Approved' },
      { label: 'BOM Change Orders', value: '18 Active', badge: 'DVT Phase' },
      { label: 'Thermal Envelope', value: '< 2.1°C Delta', badge: 'Passed Spec' },
      { label: 'Silicon Tape-Out', value: '2nm GAA', badge: 'Fab Ready' }
    ],
    records: [
      { id: 'RND-7712', desc: 'M-Series next-gen unified memory bus architecture revision', status: 'Approved', time: '40 mins ago' },
      { id: 'RND-7711', desc: 'Optical display lens polarization layer simulation', status: 'Completed', time: '2 hours ago' },
      { id: 'RND-7710', desc: 'Micro-vapor chamber cooling efficiency lab benchmark', status: 'Active', time: 'Yesterday' },
      { id: 'RND-7709', desc: 'Neural Engine 38 TOPS tensor core instruction pipeline', status: 'Completed', time: '2 days ago' }
    ]
  },
  {
    id: 'production',
    title: 'Production',
    tagline: 'MAKE IT HAPPEN',
    route: '/login/production',
    description: 'Shop floor planning, WIP, capacity and OEE.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`,
    metrics: [
      { label: 'Shop Floor OEE', value: '89.4%', badge: 'Above Target' },
      { label: 'Daily Output', value: '240,000 Units', badge: 'Zhengzhou' },
      { label: 'Machine Uptime', value: '99.2%', badge: 'Optimal' },
      { label: 'Scrap Rate', value: '0.38%', badge: 'Record Low' }
    ],
    records: [
      { id: 'PRD-1092', desc: 'Robotic laser unibody chassis welding line 12 run', status: 'Active', time: '8 mins ago' },
      { id: 'PRD-1091', desc: 'Cleanroom automated optical inspection (AOI) sweep', status: 'Completed', time: '45 mins ago' },
      { id: 'PRD-1090', desc: 'Anodization bath chemical balance certification', status: 'Approved', time: '2 hours ago' },
      { id: 'PRD-1089', desc: 'Shift B assembly ramp to 10,000 units/hour target', status: 'Active', time: '4 hours ago' }
    ]
  },
  {
    id: 'quality',
    title: 'Quality',
    tagline: 'ASSURANCE & COMPLIANCE',
    route: '/login/quality',
    description: 'QMS, inspections, NCR/CAPA and calibration.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`,
    metrics: [
      { label: 'Inspection Pass', value: '99.82%', badge: 'Six Sigma' },
      { label: 'Open NCRs', value: '2 Minor', badge: 'Isolated' },
      { label: 'CAPA Actions', value: '4 In Progress', badge: 'Under SLA' },
      { label: 'Tool Calibration', value: '100% Verified', badge: 'ISO 9001' }
    ],
    records: [
      { id: 'QLT-6201', desc: 'Sapphire lens crystal abrasion stress test batch 44', status: 'Completed', time: '20 mins ago' },
      { id: 'QLT-6200', desc: 'Tandem OLED panel sub-pixel luminance uniformity audit', status: 'Approved', time: '1 hour ago' },
      { id: 'QLT-6199', desc: 'Taptic Engine electromagnetic resonance validation', status: 'Completed', time: '3 hours ago' },
      { id: 'QLT-6198', desc: 'Supplier fastener metallurgical density verification', status: 'Active', time: 'Yesterday' }
    ]
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    tagline: 'FLOW & STORAGE',
    route: '/login/warehouse',
    description: 'Inventory, receiving, putaway, pick/pack and cycle count.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`,
    metrics: [
      { label: 'Tracked SKUs', value: '14,200 SKUs', badge: 'Active' },
      { label: 'Bay Capacity', value: '82.4%', badge: 'Optimal Level' },
      { label: 'Inbound Pallets', value: '1,240 Today', badge: 'Processed' },
      { label: 'Pick Accuracy', value: '99.94%', badge: 'Automated AGVs' }
    ],
    records: [
      { id: 'WHS-3392', desc: 'Inbound container ASN-9801 receipt at Elk Grove depot', status: 'Completed', time: '15 mins ago' },
      { id: 'WHS-3391', desc: 'High-density automated pallet racking relocation bay 8', status: 'Active', time: '50 mins ago' },
      { id: 'WHS-3390', desc: 'Finished goods dispatch for Frankfurt distribution center', status: 'Approved', time: '2 hours ago' },
      { id: 'WHS-3389', desc: 'Annual RFID cycle count audit in Zone C completed', status: 'Completed', time: 'Yesterday' }
    ]
  },
  {
    id: 'sales',
    title: 'Sales',
    tagline: 'DEMAND & REVENUE',
    route: '/login/sales',
    description: 'CRM, quotes, sales orders, pricing and commissions.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path><line x1="7" y1="7" x2="7.01" y2="7"></line></svg>`,
    metrics: [
      { label: 'Monthly Sales', value: '$8.4B', badge: '+6.1% vs Forecast' },
      { label: 'Pipeline Value', value: '$12.4B', badge: 'Enterprise' },
      { label: 'Enterprise Quotes', value: '320 Active', badge: 'Fortune 500' },
      { label: 'Close Rate', value: '71.2%', badge: 'High Conversion' }
    ],
    records: [
      { id: 'SLS-8821', desc: 'Global airline fleet device refresh enterprise order', status: 'Approved', time: '22 mins ago' },
      { id: 'SLS-8820', desc: 'Higher education institutional deployment contract', status: 'Completed', time: '1 hour ago' },
      { id: 'SLS-8819', desc: 'Direct-to-consumer online trade-in pricing schedule update', status: 'Active', time: '3 hours ago' },
      { id: 'SLS-8818', desc: 'Carrier partner volume allocation agreement (T-Mobile/Verizon)', status: 'Approved', time: 'Yesterday' }
    ]
  },
  {
    id: 'logistics',
    title: 'Logistics',
    tagline: 'MOVE & DELIVER',
    route: '/login/logistics',
    description: 'Shipments, transport orders, customs and delivery tracking.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`,
    metrics: [
      { label: 'Active Shipments', value: '4,820 Cargo', badge: 'In Transit' },
      { label: 'Airfreight On-Time', value: '99.1%', badge: 'Charter Planes' },
      { label: 'Customs Cleared', value: '100%', badge: 'Zero Delay' },
      { label: 'Carbon Reduction', value: '-22%', badge: 'Sustainable Route' }
    ],
    records: [
      { id: 'LOG-7041', desc: 'Air cargo charter flight 982 Shanghai to Anchorage landed', status: 'Completed', time: '35 mins ago' },
      { id: 'LOG-7040', desc: 'European road transport dispatch from Cork hub', status: 'Active', time: '1 hour ago' },
      { id: 'LOG-7039', desc: 'Automated customs tariff harmonized code classification', status: 'Approved', time: '4 hours ago' },
      { id: 'LOG-7038', desc: 'Last-mile carrier delivery integration update (UPS/DHL)', status: 'Completed', time: 'Yesterday' }
    ]
  },
  {
    id: 'after-sales',
    title: 'After-Sales',
    tagline: 'CARE AFTER SALE',
    route: '/login/after-sales',
    description: 'Warranty, RMA, field service, spares and SLA.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`,
    metrics: [
      { label: 'Active RMA Cases', value: '180 Open', badge: 'Within SLA' },
      { label: 'Genius Resolution', value: '94.2%', badge: 'Same Day' },
      { label: 'Warranty Rate', value: '0.78%', badge: 'Industry Benchmark' },
      { label: 'Customer CSAT', value: '4.9 / 5', badge: 'High Rating' }
    ],
    records: [
      { id: 'AFT-5502', desc: 'Genuine spare parts replenishment for 520 retail stores', status: 'Approved', time: '14 mins ago' },
      { id: 'AFT-5501', desc: 'Self Service Repair tool kit dispatch to verified users', status: 'Completed', time: '2 hours ago' },
      { id: 'AFT-5500', desc: 'Battery health diagnostic telemetry algorithm update', status: 'Active', time: '4 hours ago' },
      { id: 'AFT-5499', desc: 'Authorized Service Provider warranty credit reconciliation', status: 'Completed', time: 'Yesterday' }
    ]
  },
  {
    id: 'legal',
    title: 'Legal',
    tagline: 'RISK & COMPLIANCE',
    route: '/login/legal',
    description: 'Contracts, IP, obligations, compliance and e-sign.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"></path><path d="M3 7l9-4 9 4"></path><path d="M6 10l-3 5a3 3 0 0 0 6 0l-3-5z"></path><path d="M18 10l-3 5a3 3 0 0 0 6 0l-3-5z"></path></svg>`,
    metrics: [
      { label: 'Active NDAs', value: '1,420 Executed', badge: 'Strict Vault' },
      { label: 'Regulatory Compliance', value: '100% Passed', badge: 'DMA & CE' },
      { label: 'IP Filings', value: '48 Pending', badge: 'Global Offices' },
      { label: 'Contract Reviews', value: '12 Under Review', badge: 'On Schedule' }
    ],
    records: [
      { id: 'LEG-2901', desc: 'Silicon vendor joint development agreement execution', status: 'Completed', time: '28 mins ago' },
      { id: 'LEG-2900', desc: 'European Digital Markets Act annual compliance audit report', status: 'Approved', time: '1 hour ago' },
      { id: 'LEG-2899', desc: 'Proprietary trade secret confidentiality vault re-certification', status: 'Completed', time: 'Yesterday' },
      { id: 'LEG-2898', desc: 'Music & media licensing agreement renewal (Apple Music)', status: 'Active', time: '2 days ago' }
    ]
  },
  {
    id: 'it-admin',
    title: 'IT Admin',
    tagline: 'SYSTEMS & SECURITY',
    route: '/login/it-admin',
    description: 'Integrations, feature flags, workflows and platform security.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect><rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect><line x1="6" y1="6" x2="6.01" y2="6"></line><line x1="6" y1="18" x2="6.01" y2="18"></line></svg>`,
    metrics: [
      { label: 'SSO Status', value: '100% Operational', badge: 'Apple ID MFA' },
      { label: 'Feature Flags', value: '84 Enabled', badge: 'Prod Cluster' },
      { label: 'API Gateway Latency', value: '18 ms', badge: 'Low Latency' },
      { label: 'Endpoint Health', value: '99.8%', badge: 'Zero Breach' }
    ],
    records: [
      { id: 'ITA-9412', desc: 'Kubernetes cluster deployment for supply chain forecasting', status: 'Completed', time: '5 mins ago' },
      { id: 'ITA-9411', desc: 'Automated role-based access control (RBAC) synchronization', status: 'Completed', time: '40 mins ago' },
      { id: 'ITA-9410', desc: 'Network firewall rule update for Foxconn staging subnet', status: 'Approved', time: '2 hours ago' },
      { id: 'ITA-9409', desc: 'Zero-day vulnerability patch deployment to developer macs', status: 'Completed', time: 'Yesterday' }
    ]
  },
  {
    id: 'employee',
    title: 'Employee',
    tagline: 'SELF SERVICE',
    route: '/login/employee',
    description: 'Self-service: time, leave, expenses, policies and notifications.',
    badge: null,
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`,
    metrics: [
      { label: 'Available PTO', value: '18.5 Days', badge: 'Accruing' },
      { label: 'Expense Reports', value: '$0 Pending', badge: 'All Reimbursed' },
      { label: 'Training Modules', value: '12 / 12 Done', badge: '100% Compliant' },
      { label: 'Health Benefits', value: 'Enrolled', badge: 'Active 2026' }
    ],
    records: [
      { id: 'EMP-1104', desc: 'October bi-weekly pay statement generated', status: 'Completed', time: 'Today' },
      { id: 'EMP-1103', desc: 'Annual hardware employee purchase program discount code', status: 'Approved', time: 'Yesterday' },
      { id: 'EMP-1102', desc: 'Thanksgiving holiday leave request submitted', status: 'Pending', time: '2 days ago' },
      { id: 'EMP-1101', desc: 'Apple Park fitness center access credential renewed', status: 'Completed', time: 'Last week' }
    ]
  },
  {
    id: 'supplier',
    title: 'Supplier',
    tagline: 'SUPPLY PARTNER',
    route: '/login/supplier',
    description: 'Supplier portal: RFQs, POs, ASNs, invoices and remittance.',
    badge: 'External',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>`,
    metrics: [
      { label: 'Active POs', value: '14 Purchase Orders', badge: 'In Production' },
      { label: 'In-Transit ASNs', value: '8 Shipments', badge: 'Tracking Live' },
      { label: 'Invoices Approved', value: '$4.8M', badge: 'Wire Scheduled' },
      { label: 'Supplier Rating', value: 'Tier-1 Elite', badge: 'Audited' }
    ],
    records: [
      { id: 'SUP-4921', desc: 'Advanced Shipping Notice ASN-2026-88 dispatched from Osaka', status: 'Active', time: '12 mins ago' },
      { id: 'SUP-4920', desc: 'Invoice INV-8829 approved for automated remittance', status: 'Approved', time: '1 hour ago' },
      { id: 'SUP-4919', desc: 'Material compliance declaration certificate signed', status: 'Completed', time: 'Yesterday' },
      { id: 'SUP-4918', desc: 'RFQ response submitted for Q1 optical prism components', status: 'Completed', time: '2 days ago' }
    ]
  },
  {
    id: 'customer',
    title: 'Customer',
    tagline: 'TRADE PARTNER',
    route: '/login/customer',
    description: 'Customer portal: quotes, orders, shipments, RMA and invoices.',
    badge: 'External',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`,
    metrics: [
      { label: 'Open Enterprise Orders', value: '6 Deliveries', badge: 'Scheduled' },
      { label: 'Shipped Devices', value: '45,000 Units', badge: 'In Transit' },
      { label: 'Credit Facility', value: '$50.0M', badge: 'Approved' },
      { label: 'AppleCare+ Contracts', value: '100% Covered', badge: 'Active' }
    ],
    records: [
      { id: 'CST-6781', desc: 'Commercial invoice INV-40192 for bulk Mac deployment', status: 'Completed', time: '25 mins ago' },
      { id: 'CST-6780', desc: 'Delivery confirmation receipt for London headquarters', status: 'Approved', time: '2 hours ago' },
      { id: 'CST-6779', desc: 'Custom enterprise device enrollment MDM token download', status: 'Completed', time: 'Yesterday' },
      { id: 'CST-6778', desc: 'Warranty replacement request RMA-1049 approved', status: 'Completed', time: '3 days ago' }
    ]
  }
];

// --- 2. DOM Elements ---
const portalsHubView = document.getElementById('portalsHubView');
const roleDashboardView = document.getElementById('roleDashboardView');
const portalsGrid = document.getElementById('portalsGrid');
const roleSearchInput = document.getElementById('roleSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const roleCountNumber = document.getElementById('roleCountNumber');
const emptyResultsState = document.getElementById('emptyResultsState');
const emptyQueryText = document.getElementById('emptyQueryText');
const resetSearchBtn = document.getElementById('resetSearchBtn');

// Header elements
const homeBrandLink = document.getElementById('homeBrandLink');
const headerRoleBadge = document.getElementById('headerRoleBadge');
const headerRoleName = document.getElementById('headerRoleName');
const headerUserChip = document.getElementById('headerUserChip');
const headerUserEmail = document.getElementById('headerUserEmail');
const backToPortalsBtn = document.getElementById('backToPortalsBtn');
const themeToggleBtn = document.getElementById('themeToggleBtn');
const sunIcon = document.querySelector('.theme-icon-sun');
const moonIcon = document.querySelector('.theme-icon-moon');

// Role Dashboard View elements
const pageRoleIcon = document.getElementById('pageRoleIcon');
const pageRoleTagline = document.getElementById('pageRoleTagline');
const pageRoleTitle = document.getElementById('pageRoleTitle');
const pageRoleDescription = document.getElementById('pageRoleDescription');
const pageMetricsGrid = document.getElementById('pageMetricsGrid');
const pageTableTitle = document.getElementById('pageTableTitle');
const pageRecordsBadge = document.getElementById('pageRecordsBadge');
const pageTableBody = document.getElementById('pageTableBody');
const pageRefreshBtn = document.getElementById('pageRefreshBtn');
const pageActionBtn = document.getElementById('pageActionBtn');

// Simple Login Modal
const loginModalBackdrop = document.getElementById('loginModalBackdrop');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalIconWrapper = document.getElementById('modalIconWrapper');
const modalRoleTitle = document.getElementById('modalRoleTitle');
const modalRoleTagline = document.getElementById('modalRoleTagline');
const modalRouteText = document.getElementById('modalRouteText');
const simpleLoginForm = document.getElementById('simpleLoginForm');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const submitLoginBtn = document.getElementById('submitLoginBtn');
const loginBtnText = document.getElementById('loginBtnText');
const loginSpinner = document.getElementById('loginSpinner');
const quickDemoBtn = document.getElementById('quickDemoBtn');
const loginAlertBox = document.getElementById('loginAlertBox');

let currentActiveRole = null;
let signedInUser = 'employee@apple.com';

// --- 3. Render Cards Function ---
function renderPortals(query = '') {
  const q = query.trim().toLowerCase();

  const filtered = ROLES_DATA.filter((role) => {
    return (
      !q ||
      role.title.toLowerCase().includes(q) ||
      role.tagline.toLowerCase().includes(q) ||
      role.description.toLowerCase().includes(q) ||
      role.route.toLowerCase().includes(q)
    );
  });

  roleCountNumber.textContent = filtered.length;

  if (filtered.length === 0) {
    portalsGrid.innerHTML = '';
    emptyResultsState.classList.remove('hidden');
    emptyQueryText.textContent = query;
    return;
  }

  emptyResultsState.classList.add('hidden');

  portalsGrid.innerHTML = filtered
    .map((role) => {
      return `
        <article 
          class="portal-card" 
          data-id="${role.id}"
          tabindex="0"
          role="button"
          aria-label="Open ${role.title} portal"
        >
          <div class="card-top">
            <div class="card-header-row">
              <div class="card-icon-wrapper">
                ${role.iconSvg}
              </div>
              <div class="card-title-group">
                <h2 class="card-role-title">${role.title}</h2>
                <div class="card-role-tagline">${role.tagline}</div>
              </div>
              ${role.badge ? `<span class="external-badge">${role.badge}</span>` : ''}
            </div>
            <p class="card-description">${role.description}</p>
          </div>

          <div class="card-footer">
            <span class="card-route">${role.route}</span>
          </div>
        </article>
      `;
    })
    .join('');

  // Attach click listener to each card
  document.querySelectorAll('.portal-card').forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-id');
      const role = ROLES_DATA.find((r) => r.id === id);
      if (role) openLoginModal(role);
    });
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        card.click();
      }
    });
  });
}

// --- 4. Simple Login Modal Logic ---
function openLoginModal(role) {
  currentActiveRole = role;

  modalIconWrapper.innerHTML = role.iconSvg;
  modalRoleTitle.textContent = role.title;
  modalRoleTagline.textContent = role.tagline;
  modalRouteText.textContent = role.route;

  loginEmail.value = `${role.id}@apple.com`;
  loginPassword.value = 'EnterpriseToken2026!';

  // Reset form & alert
  loginAlertBox.className = 'alert-box hidden';
  loginAlertBox.textContent = '';
  loginBtnText.textContent = 'Sign In & Launch Portal';
  loginSpinner.classList.add('hidden');
  submitLoginBtn.disabled = false;
  quickDemoBtn.disabled = false;

  loginModalBackdrop.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  loginEmail.focus();
}

function closeLoginModal() {
  loginModalBackdrop.classList.add('hidden');
  document.body.style.overflow = '';
}

function handleLoginSubmit() {
  if (!currentActiveRole) return;

  submitLoginBtn.disabled = true;
  quickDemoBtn.disabled = true;
  loginSpinner.classList.remove('hidden');
  loginBtnText.textContent = 'Authenticating...';
  signedInUser = loginEmail.value.trim() || `${currentActiveRole.id}@apple.com`;

  // Brief verification delay (450ms) then directly route to role page
  setTimeout(() => {
    loginSpinner.classList.add('hidden');
    loginAlertBox.className = 'alert-box success';
    loginAlertBox.textContent = `✓ Signed in. Redirecting to ${currentActiveRole.title}...`;

    setTimeout(() => {
      closeLoginModal();
      navigateToRole(currentActiveRole);
    }, 500);
  }, 450);
}

// --- 5. Role Page Routing & Rendering ---
function navigateToRole(role) {
  window.location.hash = `#/portal/${role.id}`;

  // Switch Views
  portalsHubView.classList.add('hidden');
  roleDashboardView.classList.remove('hidden');

  // Update Header
  headerRoleName.textContent = `${role.title} Portal`;
  headerRoleBadge.classList.remove('hidden');
  headerUserEmail.textContent = signedInUser;
  headerUserChip.classList.remove('hidden');
  backToPortalsBtn.classList.remove('hidden');

  // Populate Role Page Header
  pageRoleIcon.innerHTML = role.iconSvg;
  pageRoleTagline.textContent = role.tagline;
  pageRoleTitle.textContent = `${role.title} Portal`;
  pageRoleDescription.textContent = `${role.description} Access restricted to authorized Apple enterprise personnel.`;
  pageActionBtn.textContent = `+ New ${role.title} Entry`;

  // Render 4 Metric Cards
  pageMetricsGrid.innerHTML = role.metrics
    .map(
      (m) => `
      <div class="metric-card">
        <div class="metric-val">${m.value}</div>
        <div class="metric-label">${m.label}</div>
        <span class="metric-badge">${m.badge}</span>
      </div>
    `
    )
    .join('');

  // Render Records Table
  pageTableTitle.textContent = `${role.title} Recent Records & Activity`;
  pageRecordsBadge.textContent = `${role.records.length} active records`;

  pageTableBody.innerHTML = role.records
    .map(
      (r) => `
      <tr>
        <td><strong style="font-family: var(--font-mono);">${r.id}</strong></td>
        <td>${r.desc}</td>
        <td><span class="status-tag ${r.status.toLowerCase()}">${r.status}</span></td>
        <td style="color: var(--text-muted);">${r.time}</td>
        <td><a class="table-action-link" href="javascript:void(0)" onclick="alert('Viewing record: ${r.id}')">View Details</a></td>
      </tr>
    `
    )
    .join('');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToHub() {
  window.location.hash = '#/';

  // Switch Views
  roleDashboardView.classList.add('hidden');
  portalsHubView.classList.remove('hidden');

  // Reset Header
  headerRoleBadge.classList.add('hidden');
  headerUserChip.classList.add('hidden');
  backToPortalsBtn.classList.add('hidden');

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Router hash handler
function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#/portal/')) {
    const roleId = hash.replace('#/portal/', '').trim();
    const role = ROLES_DATA.find((r) => r.id === roleId);
    if (role) {
      navigateToRole(role);
      return;
    }
  }
  navigateToHub();
}

// --- 6. Event Listeners ---

// Navigation buttons
backToPortalsBtn.addEventListener('click', navigateToHub);
homeBrandLink.addEventListener('click', (e) => {
  e.preventDefault();
  navigateToHub();
});

// Search input
roleSearchInput.addEventListener('input', (e) => {
  const query = e.target.value;
  clearSearchBtn.classList.toggle('hidden', !query);
  renderPortals(query);
});

clearSearchBtn.addEventListener('click', () => {
  roleSearchInput.value = '';
  clearSearchBtn.classList.add('hidden');
  roleSearchInput.focus();
  renderPortals('');
});

resetSearchBtn.addEventListener('click', () => {
  roleSearchInput.value = '';
  clearSearchBtn.classList.add('hidden');
  renderPortals('');
});

// Modal Events
modalCloseBtn.addEventListener('click', closeLoginModal);
loginModalBackdrop.addEventListener('click', (e) => {
  if (e.target === loginModalBackdrop) {
    closeLoginModal();
  }
});

simpleLoginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  handleLoginSubmit();
});

quickDemoBtn.addEventListener('click', () => {
  handleLoginSubmit();
});

// Page Actions
pageRefreshBtn.addEventListener('click', () => {
  pageRefreshBtn.textContent = 'Updating...';
  setTimeout(() => {
    pageRefreshBtn.textContent = '↻ Refresh Live Data';
  }, 400);
});

pageActionBtn.addEventListener('click', () => {
  if (currentActiveRole) {
    alert(`Opening new ${currentActiveRole.title} entry form`);
  }
});

// Keyboard
window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !loginModalBackdrop.classList.contains('hidden')) {
    closeLoginModal();
  }
});

// --- 7. Clean Theme Toggle ---
function updateThemeUI(theme) {
  if (theme === 'dark') {
    sunIcon.classList.remove('hidden');
    moonIcon.classList.add('hidden');
  } else {
    sunIcon.classList.add('hidden');
    moonIcon.classList.remove('hidden');
  }
}

themeToggleBtn.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  document.documentElement.style.colorScheme = next;
  localStorage.setItem('erp.theme', next);
  updateThemeUI(next);
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateThemeUI(currentTheme);
  renderPortals();
  handleHashChange();
});

window.addEventListener('hashchange', handleHashChange);
