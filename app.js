/* ==========================================================================
   APPLE ENTERPRISE ERP — APPLICATION CONTROLLER & ROUTER
   Centering on 17 Unified Role Portals, 20 NetSuite Make-or-Break KPIs,
   and Modern ERP Selection Architecture Framework.
   ========================================================================== */

// --- 1. The 17 Exact Role Portals ---
const ROLES_DATA = [
  {
    id: 'super-admin',
    title: 'Super Admin',
    subtitle: 'PLATFORM GOVERNANCE',
    tagline: 'PLATFORM GOVERNANCE',
    description: 'Full platform ownership, user governance and tenant configuration.',
    route: '/login/super-admin',
    demoEmail: 'super-admin@aureus.example',
    demoPassword: 'Aureus@2026!SUPERADMIN',
    userName: 'Alexander Vance',
    userRole: 'Chief Technology Officer',
    userInitials: 'AV',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`
  },
  {
    id: 'executive',
    title: 'Executive',
    subtitle: 'STRATEGY & PERFORMANCE',
    tagline: 'STRATEGY & PERFORMANCE',
    description: 'Enterprise strategy, performance and approvals.',
    route: '/login/executive',
    demoEmail: 'executive@aureus.example',
    demoPassword: 'Aureus@2026!EXECUTIVE',
    userName: 'Helena Moreau',
    userRole: 'Chief Executive Officer',
    userInitials: 'HM',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`
  },
  {
    id: 'finance',
    title: 'Finance',
    subtitle: 'CAPITAL & CONTROL',
    tagline: 'CAPITAL & CONTROL',
    description: 'GL, AR/AP, tax, treasury and continuous algorithmic close.',
    route: '/login/finance',
    demoEmail: 'finance@aureus.example',
    demoPassword: 'Aureus@2026!FINANCE',
    userName: 'Julian Croft',
    userRole: 'Chief Financial Officer',
    userInitials: 'JC',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>`
  },
  {
    id: 'hr',
    title: 'Human Resources',
    subtitle: 'PEOPLE & CULTURE',
    tagline: 'PEOPLE & CULTURE',
    description: 'People operations, org, pay, policies and compliance.',
    route: '/login/hr',
    demoEmail: 'hr@aureus.example',
    demoPassword: 'Aureus@2026!HR',
    userName: 'Claire Sterling',
    userRole: 'VP Human Resources',
    userInitials: 'CS',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  {
    id: 'procurement',
    title: 'Procurement',
    subtitle: 'SOURCE & SUPPLY',
    tagline: 'SOURCE & SUPPLY',
    description: 'Strategic sourcing, PO approvals and supplier relationships.',
    route: '/login/procurement',
    demoEmail: 'procurement@aureus.example',
    demoPassword: 'Aureus@2026!PROCUREMENT',
    userName: 'Marcus Drake',
    userRole: 'Head of Global Procurement',
    userInitials: 'MD',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`
  },
  {
    id: 'rnd',
    title: 'R&D',
    subtitle: 'DESIGN & ENGINEERING',
    tagline: 'DESIGN & ENGINEERING',
    description: 'Product design, BOM, routings and change control.',
    route: '/login/rnd',
    demoEmail: 'rnd@aureus.example',
    demoPassword: 'Aureus@2026!RND',
    userName: 'Dr. Aris Thorne',
    userRole: 'VP Engineering & Design',
    userInitials: 'AT',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 2v7.31"></path><path d="M14 9.3V2"></path><path d="M8.5 2h7"></path><path d="M14 9.3a6.5 6.5 0 1 1-4 0"></path></svg>`
  },
  {
    id: 'production',
    title: 'Production',
    subtitle: 'MAKE IT HAPPEN',
    tagline: 'MAKE IT HAPPEN',
    description: 'Shop floor planning, WIP, capacity and OEE.',
    route: '/login/production',
    demoEmail: 'production@aureus.example',
    demoPassword: 'Aureus@2026!PRODUCTION',
    userName: 'Garrick Flynn',
    userRole: 'Director of Manufacturing',
    userInitials: 'GF',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  },
  {
    id: 'quality',
    title: 'Quality',
    subtitle: 'ASSURANCE & COMPLIANCE',
    tagline: 'ASSURANCE & COMPLIANCE',
    description: 'QMS, inspections, NCR/CAPA and calibration.',
    route: '/login/quality',
    demoEmail: 'quality@aureus.example',
    demoPassword: 'Aureus@2026!QUALITY',
    userName: 'Evelyn Shaw',
    userRole: 'Director of Quality Assurance',
    userInitials: 'ES',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>`
  },
  {
    id: 'warehouse',
    title: 'Warehouse',
    subtitle: 'FLOW & STORAGE',
    tagline: 'FLOW & STORAGE',
    description: 'Inventory, receiving, putaway, pick/pack and cycle count.',
    route: '/login/warehouse',
    demoEmail: 'warehouse@aureus.example',
    demoPassword: 'Aureus@2026!WAREHOUSE',
    userName: 'Landon Cruz',
    userRole: 'Head of Fulfillment Ops',
    userInitials: 'LC',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>`
  },
  {
    id: 'sales',
    title: 'Sales',
    subtitle: 'DEMAND & REVENUE',
    tagline: 'DEMAND & REVENUE',
    description: 'CRM, quotes, sales orders, pricing and commissions.',
    route: '/login/sales',
    demoEmail: 'sales@aureus.example',
    demoPassword: 'Aureus@2026!SALES',
    userName: 'Dominic Ray',
    userRole: 'VP Enterprise Sales',
    userInitials: 'DR',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`
  },
  {
    id: 'logistics',
    title: 'Logistics',
    subtitle: 'MOVE & DELIVER',
    tagline: 'MOVE & DELIVER',
    description: 'Shipments, transport orders, customs and delivery tracking.',
    route: '/login/logistics',
    demoEmail: 'logistics@aureus.example',
    demoPassword: 'Aureus@2026!LOGISTICS',
    userName: 'Tobias Wu',
    userRole: 'Global Freight Director',
    userInitials: 'TW',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>`
  },
  {
    id: 'after-sales',
    title: 'After-Sales',
    subtitle: 'CARE AFTER SALE',
    tagline: 'CARE AFTER SALE',
    description: 'Warranty, RMA, field service, spares and SLA tracking.',
    route: '/login/after-sales',
    demoEmail: 'after-sales@aureus.example',
    demoPassword: 'Aureus@2026!AFTERSALES',
    userName: 'Naomi Chen',
    userRole: 'Director of Customer Experience',
    userInitials: 'NC',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>`
  },
  {
    id: 'legal',
    title: 'Legal',
    subtitle: 'RISK & COMPLIANCE',
    tagline: 'RISK & COMPLIANCE',
    description: 'Contracts, IP, obligations, compliance and e-sign.',
    route: '/login/legal',
    demoEmail: 'legal@aureus.example',
    demoPassword: 'Aureus@2026!LEGAL',
    userName: 'Diane Hawthorne',
    userRole: 'General Counsel',
    userInitials: 'DH',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18"></path><rect x="4" y="7" width="16" height="4" rx="1"></rect><circle cx="6" cy="17" r="2"></circle><circle cx="18" cy="17" r="2"></circle></svg>`
  },
  {
    id: 'it-admin',
    title: 'IT Admin',
    subtitle: 'SYSTEMS & SECURITY',
    tagline: 'SYSTEMS & SECURITY',
    description: 'Integrations, feature flags, workflows and platform security.',
    route: '/login/it-admin',
    demoEmail: 'it-admin@aureus.example',
    demoPassword: 'Aureus@2026!ITADMIN',
    userName: 'Vikram Patel',
    userRole: 'Head of Information Security',
    userInitials: 'VP',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`
  },
  {
    id: 'employee',
    title: 'Employee',
    subtitle: 'SELF SERVICE',
    tagline: 'SELF SERVICE',
    description: 'Self-service: time, leave, expenses, policies and notifications.',
    route: '/login/employee',
    demoEmail: 'employee@aureus.example',
    demoPassword: 'Aureus@2026!EMPLOYEE',
    userName: 'Jordan Lee',
    userRole: 'Product Operations Specialist',
    userInitials: 'JL',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>`
  },
  {
    id: 'supplier',
    title: 'Supplier',
    subtitle: 'SUPPLY PARTNER',
    tagline: 'SUPPLY PARTNER',
    badge: 'External',
    description: 'Supplier portal: RFQs, POs, ASNs, invoices and remittance.',
    route: '/login/supplier',
    demoEmail: 'supplier@aureus.example',
    demoPassword: 'Aureus@2026!SUPPLIER',
    userName: 'Kenji Sato',
    userRole: 'Tier-1 Component Supplier Lead',
    userInitials: 'KS',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>`
  },
  {
    id: 'customer',
    title: 'Customer',
    subtitle: 'TRADE PARTNER',
    tagline: 'TRADE PARTNER',
    badge: 'External',
    description: 'Customer portal: quotes, orders, shipments, RMA and invoices.',
    route: '/login/customer',
    demoEmail: 'customer@aureus.example',
    demoPassword: 'Aureus@2026!CUSTOMER',
    userName: 'Sophie Martin',
    userRole: 'Global Distributor Partner',
    userInitials: 'SM',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>`
  }
];

// --- 2. The 16 Radial AI Capabilities (Clockwise matching Hero Diagram) ---
const AI_CAPABILITIES = [
  {
    id: 'finance',
    name: 'Finance',
    angleOrder: 0, // Top 12 o'clock
    roleId: 'finance',
    tagline: 'Capital, Ledgers, Tax & Treasury',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17"></path><path d="m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.8-2.8L13 15"></path><circle cx="18" cy="5" r="3"></circle></svg>`,
    aiFeatures: [
      'Autonomous 3-way invoice matching with fraud anomaly detection',
      'Continuous algorithmic close and cash runway predictive forecasting',
      'Automated AP/AR ledger reconciliation with predictive payment risk scores'
    ],
    kpis: [
      { name: 'Gross Profit Margin', formula: '((Net Sales - COGS) / Net Sales) × 100', target: '≥ 45%', value: '48.2%' },
      { name: 'Operating Profit Margin', formula: '(Operating Profit / Revenue) × 100', target: '≥ 18%', value: '21.5%' },
      { name: 'Current Ratio', formula: 'Current Assets / Current Liabilities', target: '1.5 - 2.0', value: '1.85' },
      { name: 'Quick Ratio', formula: '(Cash + Mkt Sec + AR) / Current Liabilities', target: '≥ 1.0', value: '1.32' }
    ]
  },
  {
    id: 'procurement',
    name: 'Procurement',
    angleOrder: 1,
    roleId: 'procurement',
    tagline: 'Strategic Sourcing & Vendor Risk',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m11 17 2 2a1 1 0 0 0 1.4 0l6.6-6.6a2 2 0 0 0 0-2.8l-1.6-1.6a2 2 0 0 0-2.8 0L13.8 11"></path><path d="m13 7-2-2a1 1 0 0 0-1.4 0L3 11.6a2 2 0 0 0 0 2.8l1.6 1.6a2 2 0 0 0 2.8 0L10.2 13"></path></svg>`,
    aiFeatures: [
      'Predictive raw material commodity price hedging recommendations',
      'Supplier sentiment, ESG compliance and risk index generation',
      'Automated RFP/RFQ evaluation and vendor contract clauses parsing'
    ],
    kpis: [
      { name: 'Days Payable Outstanding (DPO)', formula: '(AP / COGS) × Days in Period', target: '45 - 60 Days', value: '52 Days' },
      { name: 'Cumulative Lead Time', formula: 'Procurement + Mfg + Shipping', target: '< 18 Days', value: '14.2 Days' }
    ]
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    angleOrder: 2,
    roleId: 'production',
    tagline: 'Smart Shopfloor & Production Scheduling',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M2 20h20"></path><path d="M6 20V8l6 4V8l6 4v8"></path><rect x="18" y="14" width="2" height="6"></rect></svg>`,
    aiFeatures: [
      'Predictive machine vibration telemetry preventing line breakdowns',
      'Dynamic assembly line balancing and bottleneck avoidance',
      'Computer vision automated quality inspection and automated defect routing'
    ],
    kpis: [
      { name: 'Cost Per Unit', formula: '(Fixed Costs + Variable Costs) / Units', target: 'Continuous reduction', value: '$84.50' },
      { name: 'Production Lead Time', formula: 'Order Start to Completion', target: '< 4.5 Days', value: '3.8 Days' }
    ]
  },
  {
    id: 'inventory',
    name: 'Inventory Management',
    angleOrder: 3,
    roleId: 'warehouse',
    tagline: 'Multi-Echelon Stock & Reordering',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m7.5 4.27 9 5.15"></path><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>`,
    aiFeatures: [
      'AI demand sensing across global distribution centers',
      'Dynamic safety stock optimization without cash lockup',
      'Autonomous reorder point calibration based on freight variability'
    ],
    kpis: [
      { name: 'Inventory Turnover Ratio', formula: '[COGS / ((Beg Inv + End Inv) / 2)] × 100', target: '≥ 8.0x', value: '9.4x' },
      { name: 'GMROI', formula: '(Gross Profit / Average Inv Cost) × 100', target: '≥ 200%', value: '238%' },
      { name: 'Cost of Stockouts', formula: 'Days Out × Avg Daily Sales × Price', target: '$0', value: '$1,200' }
    ]
  },
  {
    id: 'order-management',
    name: 'Order Management',
    angleOrder: 4,
    roleId: 'sales',
    tagline: 'Omnichannel Routing & Promise Fulfillment',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16.5 9.4 7.55 4.24"></path><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>`,
    aiFeatures: [
      'Intelligent distributed order routing to nearest optimal warehouse',
      'Real-time available-to-promise (ATP) inventory allocation',
      'Automated fraud scoring and instant order verification'
    ],
    kpis: [
      { name: 'Perfect Order Rate', formula: 'On-time × Complete × Damage-free × Doc', target: '≥ 95%', value: '96.4%' },
      { name: 'Days Sales Outstanding (DSO)', formula: '(AR / Total Credit Sales) × Days', target: '< 35 Days', value: '28 Days' }
    ]
  },
  {
    id: 'warehouse',
    name: 'Warehouse Management',
    angleOrder: 5,
    roleId: 'warehouse',
    tagline: 'Smart Storage, Directed Putaway & Robotics',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 20V9l9-5 9 5v11"></path><path d="M9 20v-6h6v6"></path><path d="M3 20h18"></path></svg>`,
    aiFeatures: [
      'AI-directed batch picking routes to minimize travel distance',
      'Automated putaway algorithms based on SKU turnover velocity',
      'Autonomous cycle count scheduling with LiDAR drone auditing'
    ],
    kpis: [
      { name: 'On-Time Shipping Rate', formula: '(Shipped on Time / Total Shipped) × 100', target: '≥ 99%', value: '99.3%' },
      { name: 'Inventory Accuracy', formula: '(Matched Cycle Counts / Total Counts) × 100', target: '≥ 99.8%', value: '99.9%' }
    ]
  },
  {
    id: 'supply-chain',
    name: 'Supply Chain Management',
    angleOrder: 6,
    roleId: 'logistics',
    tagline: 'End-to-End Visibility & Multimodal Freight',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>`,
    aiFeatures: [
      'Weather, port congestion and geopolitical route re-planning',
      'Carbon footprint tracking and multi-modal load optimization',
      'Real-time IoT container temperature and GPS geo-fence tracking'
    ],
    kpis: [
      { name: 'Cash Conversion Cycle (CCC)', formula: 'DSO + DIO - DPO', target: '< 30 Days', value: '21.4 Days' },
      { name: 'On-Time Delivery Rate', formula: '((Total Orders - Late) / Total) × 100', target: '≥ 98%', value: '98.7%' }
    ]
  },
  {
    id: 'crm',
    name: 'Customer Relationship Management (CRM)',
    angleOrder: 7,
    roleId: 'sales',
    tagline: '360° Customer Intelligence & Pipeline Health',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><polygon points="17 8 18.2 10.5 21 10.9 19 12.8 19.5 15.5 17 14.2 14.5 15.5 15 12.8 13 10.9 15.8 10.5 17 8"></polygon></svg>`,
    aiFeatures: [
      'Predictive deal scoring & win probability forecasting',
      'Automated customer churn prediction and proactive retention',
      'AI conversation intelligence with automatic meeting action items'
    ],
    kpis: [
      { name: 'Customer Retention Rate', formula: '((End Clients - New) / Start Clients) × 100', target: '≥ 94%', value: '96.2%' },
      { name: 'Average Deal Size Growth', formula: 'Period over Period Increase', target: '≥ +15%', value: '+18.4%' }
    ]
  },
  {
    id: 'project-management',
    name: 'Project Service Resource Management',
    angleOrder: 8, // Bottom 6 o'clock
    roleId: 'rnd',
    tagline: 'Milestone Tracking, Utilization & PSA',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>`,
    aiFeatures: [
      'AI resource leveling across concurrent hardware engineering programs',
      'Predictive schedule slippage warnings based on commit velocity',
      'Automated project revenue recognition and earned value analytics'
    ],
    kpis: [
      { name: 'Budget Variance Rate', formula: '((Actual / Forecasted) - 1) × 100', target: '± 3%', value: '+1.4%' },
      { name: 'Project Milestone On-Time Rate', formula: '(On-Time Milestones / Total) × 100', target: '≥ 95%', value: '97.1%' }
    ]
  },
  {
    id: 'workforce',
    name: 'Workforce Management',
    angleOrder: 9,
    roleId: 'employee',
    tagline: 'Shift Scheduling, Skills Graph & Capacity',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><path d="M8 15v-2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><circle cx="6" cy="18" r="2"></circle><circle cx="18" cy="18" r="2"></circle><path d="M6 20v2"></path><path d="M18 20v2"></path></svg>`,
    aiFeatures: [
      'Automated shift scheduling factoring labor laws, overtime & peak loads',
      'Dynamic skills matrix matching engineering talent to task backlogs',
      'Ergonomic fatigue monitoring on high-precision manufacturing lines'
    ],
    kpis: [
      { name: 'Workforce Retention Rate', formula: 'Retained Staff / Total Headcount', target: '≥ 92%', value: '95.6%' },
      { name: 'Shift Fill Rate', formula: 'Covered Shifts / Scheduled Shifts', target: '≥ 99%', value: '99.4%' }
    ]
  },
  {
    id: 'hr',
    name: 'Human Resource Management',
    angleOrder: 10,
    roleId: 'hr',
    tagline: 'Talent Acquisition, Compliance & Payroll',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="10" cy="7" r="4"></circle><path d="M17 11h4a2 2 0 0 1 2 2v2"></path><path d="M17 17h6"></path></svg>`,
    aiFeatures: [
      'Automated global payroll with multi-jurisdiction tax compliance',
      'AI candidate resume parsing, interview scheduling & bias screening',
      'Predictive employee attrition radar and engagement sentiment'
    ],
    kpis: [
      { name: 'Time to Hire', formula: 'Requisition Open to Offer Accepted', target: '< 28 Days', value: '22 Days' },
      { name: 'Employee Turnover Rate', formula: '(Separations / Average Headcount) × 100', target: '< 8%', value: '4.8%' }
    ]
  },
  {
    id: 'ecommerce',
    name: 'Ecommerce',
    angleOrder: 11,
    roleId: 'customer',
    tagline: 'Global Digital Storefronts & Checkout',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path><circle cx="18" cy="5" r="3" fill="#0b66c3" stroke="none"></circle><text x="18" y="7" font-size="6" fill="#fff" text-anchor="middle" font-weight="bold">1</text></svg>`,
    aiFeatures: [
      'Dynamic real-time personalization and product recommendations',
      'Automated cart abandonment recovery sequences and discount incentives',
      'High-concurrency flash sale load distribution and inventory locking'
    ],
    kpis: [
      { name: 'Sell-Through Rate', formula: '(Units Sold / Units Received) × 100', target: '≥ 80%', value: '84.8%' },
      { name: 'Checkout Conversion Rate', formula: '(Orders Completed / Cart Starts) × 100', target: '≥ 3.5%', value: '4.2%' }
    ]
  },
  {
    id: 'marketing',
    name: 'Marketing Automation',
    angleOrder: 12,
    roleId: 'sales',
    tagline: 'Predictive Campaigns & Attribution Modeling',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path><path d="M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16"></path><path d="M16 21h5v-5"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
    aiFeatures: [
      'Multi-touch algorithmic attribution across all global channels',
      'Autonomous ad-spend reallocation to high-performing campaigns',
      'Generative multilingual copy localization and A/B test generation'
    ],
    kpis: [
      { name: 'Customer Acquisition Cost (CAC)', formula: 'Spend / New Customers', target: 'Decreasing', value: '$184' },
      { name: 'Marketing ROI (ROAS)', formula: '(Revenue / Spend) × 100', target: '≥ 400%', value: '540%' }
    ]
  },
  {
    id: 'field-service',
    name: 'Field Service Management',
    angleOrder: 13,
    roleId: 'after-sales',
    tagline: 'Dispatch, IoT Diagnostics & SLA Tracking',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"></circle><line x1="2" y1="12" x2="6" y2="12"></line><line x1="18" y1="12" x2="22" y2="12"></line><line x1="12" y1="2" x2="12" y2="6"></line><line x1="12" y1="18" x2="12" y2="22"></line><polygon points="12 12 16 16 14 17 12 12" fill="currentColor"></polygon></svg>`,
    aiFeatures: [
      'IoT device telemetry triggering preemptive service technician dispatch',
      'AI technician skill-based dispatch routing with spare parts reservation',
      'Augmented reality (AR) remote technician troubleshooting assistance'
    ],
    kpis: [
      { name: 'First-Time Fix Rate', formula: '(Resolved on 1st Visit / Total) × 100', target: '≥ 88%', value: '92.4%' },
      { name: 'Mean Time to Repair (MTTR)', formula: 'Total Downtime / Breakdowns', target: '< 2.5 Hours', value: '1.9 Hours' }
    ]
  },
  {
    id: 'pos',
    name: 'Point-of-Sale (POS)',
    angleOrder: 14,
    roleId: 'customer',
    tagline: 'Retail Checkout, Tap-to-Pay & Endless Aisle',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"></rect><line x1="2" y1="10" x2="22" y2="10"></line><path d="M6 16h4"></path><path d="M16 14h2"></path></svg>`,
    aiFeatures: [
      'Unified online and in-store customer profiles for instant checkout',
      'Offline-first edge transaction resilience with continuous sync',
      'Predictive in-store staffing and register queue mitigation'
    ],
    kpis: [
      { name: 'Average Transaction Speed', formula: 'Scan to Receipt Print', target: '< 25 Seconds', value: '18 Seconds' },
      { name: 'Same-Store Sales Growth', formula: 'YoY Store Volume Comparison', target: '≥ +8%', value: '+11.2%' }
    ]
  },
  {
    id: 'cpq',
    name: 'Configure, Price, Quote (CPQ)',
    angleOrder: 15,
    roleId: 'sales',
    tagline: 'Complex Configuration & Dynamic Pricing',
    iconSvg: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><path d="M10 13.5a1.5 1.5 0 0 1 3 0c0 1-1.5 1.5-1.5 2.5h1.5"></path></svg>`,
    aiFeatures: [
      'Automated BOM configuration validation preventing incompatible hardware builds',
      'AI dynamic margin guardrails and automated approval workflows',
      'Instant proposal & contract generation with e-signature tracking'
    ],
    kpis: [
      { name: 'Quote-to-Order Cycle Time', formula: 'Quote Generated to Contract Signed', target: '< 3.0 Days', value: '1.8 Days' },
      { name: 'Quote Win Rate', formula: '(Quotes Won / Quotes Issued) × 100', target: '≥ 42%', value: '47.5%' }
    ]
  }
];

// --- 3. The 20 Make-or-Break KPIs (Oracle NetSuite Business Guide) ---
const NETSUITE_KPIS = [
  // Financial KPIs (Chapter 2)
  {
    id: 'gross-profit-margin',
    num: 1,
    name: 'Gross Profit Margin',
    category: 'Financial',
    timing: 'Lagging',
    formula: '((Net Sales - COGS) / Net Sales) × 100',
    target: '≥ 45.0%',
    currentVal: '48.2%',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Measures the amount of money left over from product sales after subtracting the cost of goods sold (COGS). A higher gross profit margin indicates the company efficiently converts raw materials and labor into profits.',
    whyItMatters: 'Essential for evaluating whether pricing models, component costs, and direct labor are scalable as production ramps.',
    relatedCapability: 'Finance',
    calculator: {
      inputs: [
        { key: 'netSales', label: 'Net Sales ($M)', min: 50, max: 500, val: 240, step: 5 },
        { key: 'cogs', label: 'COGS ($M)', min: 20, max: 300, val: 124, step: 5 }
      ],
      calc: (i) => (((i.netSales - i.cogs) / i.netSales) * 100).toFixed(1) + '%',
      eval: (v) => parseFloat(v) >= 45 ? 'optimal' : parseFloat(v) >= 30 ? 'caution' : 'critical'
    }
  },
  {
    id: 'operating-profit-margin',
    num: 2,
    name: 'Operating Profit Margin',
    category: 'Financial',
    timing: 'Lagging',
    formula: '(Operating Profit / Revenue) × 100',
    target: '≥ 18.0%',
    currentVal: '21.5%',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Shows the percentage of profit a company makes from operations before accounting for taxes and interest. Increasing operating margins indicate superior management discipline and tight cost controls.',
    whyItMatters: 'Reveals core operational profitability excluding capital structure and tax jurisdictions.',
    relatedCapability: 'Finance'
  },
  {
    id: 'operating-cash-flow',
    num: 3,
    name: 'Operating Cash Flow (OCF)',
    category: 'Financial',
    timing: 'Lagging',
    formula: 'Net Income + D&A - Δ Working Capital (Indirect) | Cash Rev - Cash Opex (Direct)',
    target: 'Positive & Expanding',
    currentVal: '$34.8M',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Amount of cash generated through typical operations. Gives business visibility into immediate purchasing power and flags slow-paying customers.',
    whyItMatters: 'Cash flow is the true lifeblood of scaling operations; prevents reliance on emergency credit lines.',
    relatedCapability: 'Finance'
  },
  {
    id: 'current-ratio',
    num: 4,
    name: 'Current Ratio (Working Capital Ratio)',
    category: 'Financial',
    timing: 'Lagging',
    formula: 'Current Assets / Current Liabilities',
    target: '1.50 - 2.00',
    currentVal: '1.85',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Measures liquidity to determine whether the company can meet short-term financial obligations. A ratio of 1.0 or higher means assets exceed liabilities. Anything below 1.0 signals impending solvency hazards.',
    whyItMatters: 'Guarantees the company can comfortably service debt, payroll, and supplier payables in the next 12 months.',
    relatedCapability: 'Finance',
    calculator: {
      inputs: [
        { key: 'assets', label: 'Current Assets ($M)', min: 10, max: 200, val: 92, step: 2 },
        { key: 'liabilities', label: 'Current Liabilities ($M)', min: 10, max: 150, val: 50, step: 2 }
      ],
      calc: (i) => (i.assets / i.liabilities).toFixed(2),
      eval: (v) => parseFloat(v) >= 1.5 && parseFloat(v) <= 2.5 ? 'optimal' : parseFloat(v) >= 1.0 ? 'caution' : 'critical'
    }
  },
  {
    id: 'quick-ratio',
    num: 5,
    name: 'Quick Ratio (Acid Test)',
    category: 'Financial',
    timing: 'Lagging',
    formula: '(Cash + Cash Equiv + Marketable Securities + Net AR) / Current Liabilities',
    target: '≥ 1.00',
    currentVal: '1.32',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Stricter liquidity test than the current ratio because it excludes inventory (which cannot always be instantly converted into cash). Evaluates immediate readiness to pay short-term debt.',
    whyItMatters: 'If quick ratio falls below 1.0, the business must sell inventory to pay near-term bills, exposing it to distress discounts.',
    relatedCapability: 'Finance'
  },
  {
    id: 'return-on-assets',
    num: 6,
    name: 'Return on Assets (ROA)',
    category: 'Financial',
    timing: 'Lagging',
    formula: 'Net Income / Average Total Value of Assets',
    target: '≥ 12.0%',
    currentVal: '14.6%',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Measures how efficiently the company deploys its capital assets (manufacturing facilities, machinery, inventory, IP) to generate net earnings.',
    whyItMatters: 'Direct benchmark for capital allocation efficiency; compares asset productivity across fiscal quarters.',
    relatedCapability: 'Finance'
  },
  {
    id: 'days-payable-outstanding',
    num: 7,
    name: 'Days Payable Outstanding (DPO)',
    category: 'Financial',
    timing: 'Lagging',
    formula: '(Total Accounts Payable in Period / COGS) × Days in Period',
    target: '45 - 60 Days',
    currentVal: '52 Days',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Average number of days taken to pay vendors and creditors. Demonstrates working capital leverage and whether early payment discounts are captured effectively.',
    whyItMatters: 'Higher DPO keeps cash in the business longer, but delaying too long strains key Tier-1 supplier partnerships.',
    relatedCapability: 'Procurement'
  },
  {
    id: 'days-sales-outstanding',
    num: 8,
    name: 'Days Sales Outstanding (DSO)',
    category: 'Financial',
    timing: 'Lagging',
    formula: '(Total Accounts Receivable / Total Credit Sales) × Days in Period',
    target: '< 35 Days',
    currentVal: '28 Days',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Shows how long it takes, on average, for enterprise customers to remit payment for delivered goods and services. A high DSO locks up working capital and precipitates cash flow shortages.',
    whyItMatters: 'Essential for managing credit terms and monitoring client insolvency risks.',
    relatedCapability: 'Order Management'
  },
  {
    id: 'cash-runway-burn-rate',
    num: 9,
    name: 'Cash Runway / Net Burn Rate',
    category: 'Financial',
    timing: 'Leading',
    formula: 'Runway = Total Capital / Monthly Opex | Burn = (Monthly Rev - COGS) - Monthly Exp',
    target: '≥ 18 Months',
    currentVal: '24.6 Months',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Cash runway projects how many months the enterprise can operate before depleting cash reserves at the current burn rate. Essential metric for growth initiatives and strategic capital preservation.',
    whyItMatters: 'Early indicator of funding requirements, alerting executives before liquidity risks materialize.',
    relatedCapability: 'Finance'
  },
  {
    id: 'budget-variance-rate',
    num: 10,
    name: 'Budget Variance Rate',
    category: 'Financial',
    timing: 'Lagging',
    formula: '((Actual Spend or Revenue / Forecasted Amount) - 1) × 100',
    target: '± 3.0%',
    currentVal: '+1.4%',
    status: 'optimal',
    chapter: 'Chapter 2: 10 Popular Financial KPIs',
    description: 'Compares actual enterprise spend or sales against budgeted projections. Flags overspending in operational silos and highlights outperforming divisions requiring growth capital.',
    whyItMatters: 'Prevents budget overruns and enforces disciplined departmental accountability.',
    relatedCapability: 'Project Management'
  },

  // Operational KPIs (Chapter 3)
  {
    id: 'cost-per-unit',
    num: 11,
    name: 'Cost Per Unit',
    category: 'Operational',
    timing: 'Lagging',
    formula: '(Total Fixed Costs + Total Variable Costs) / Number of Units Produced',
    target: 'Continuous Reduction',
    currentVal: '$84.50',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Calculates how much each finished unit costs to produce or acquire. Crucial for understanding economies of scale, establishing floor pricing, and modeling gross margins.',
    whyItMatters: 'Direct indicator of factory efficiency, material yield rates, and overhead containment.',
    relatedCapability: 'Manufacturing'
  },
  {
    id: 'cumulative-lead-time',
    num: 12,
    name: 'Cumulative Lead Time',
    category: 'Operational',
    timing: 'Leading',
    formula: 'Procurement Time + Manufacturing Time + Shipping Time',
    target: '< 18 Days',
    currentVal: '14.2 Days',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Measures total elapsed time across the entire supply chain cycle from component procurement to final customer doorstep delivery. Governs required inventory buffers.',
    whyItMatters: 'Shorter lead times increase responsiveness to demand shifts and minimize holding costs.',
    relatedCapability: 'Supply Chain Management'
  },
  {
    id: 'cash-conversion-cycle',
    num: 13,
    name: 'Cash Conversion Cycle (CCC)',
    category: 'Operational',
    timing: 'Lagging',
    formula: 'DSO + Days of Inventory Outstanding (DIO) - DPO',
    target: '< 30 Days',
    currentVal: '21.4 Days',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Quantifies the time elapsed between disbursing cash to suppliers for raw parts and collecting cash from customers for finished products. World-class operations achieve near-zero or negative cycles.',
    whyItMatters: 'Single most comprehensive metric connecting operational logistics directly to treasury liquidity.',
    relatedCapability: 'Supply Chain Management',
    calculator: {
      inputs: [
        { key: 'dso', label: 'Days Sales Outstanding (DSO)', min: 10, max: 90, val: 28, step: 1 },
        { key: 'dio', label: 'Days Inventory Outstanding (DIO)', min: 10, max: 120, val: 45, step: 1 },
        { key: 'dpo', label: 'Days Payable Outstanding (DPO)', min: 10, max: 90, val: 52, step: 1 }
      ],
      calc: (i) => (i.dso + i.dio - i.dpo) + ' Days',
      eval: (v) => parseInt(v) <= 30 ? 'optimal' : parseInt(v) <= 50 ? 'caution' : 'critical'
    }
  },
  {
    id: 'inventory-turnover-ratio',
    num: 14,
    name: 'Inventory Turnover Ratio',
    category: 'Operational',
    timing: 'Lagging',
    formula: '[COGS / ((Beginning Inventory Value + Ending Inventory Value) / 2)] × 100',
    target: '≥ 8.0x',
    currentVal: '9.4x',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Number of times a business sells and replaces its physical inventory over a given fiscal period. Identifies whether capital is needlessly trapped in unsold goods.',
    whyItMatters: 'High turnover signals strong product market fit and agile logistics; low turnover risks obsolescence.',
    relatedCapability: 'Inventory Management'
  },
  {
    id: 'sell-through-rate',
    num: 15,
    name: 'Sell-Through Rate',
    category: 'Operational',
    timing: 'Lagging',
    formula: '(Number of Units Sold in Period / Number of Units Received) × 100',
    target: '≥ 80.0%',
    currentVal: '84.8%',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Compares units sold against units received from suppliers or assembly lines. High rates indicate rapid inventory velocity; low rates imply over-ordering and excess warehousing costs.',
    whyItMatters: 'Guides retail purchasing allocations and promotional markdown cadences.',
    relatedCapability: 'Ecommerce'
  },
  {
    id: 'gmroi',
    num: 16,
    name: 'Gross Margin Return on Investment (GMROI)',
    category: 'Operational',
    timing: 'Lagging',
    formula: '(Gross Profit / Average Inventory Cost) × 100',
    target: '≥ 200.0%',
    currentVal: '238.0%',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Calculates the gross margin return for every dollar tied up in physical inventory. A GMROI of 200% means every $1.00 invested in inventory yields $2.00 in gross margin.',
    whyItMatters: 'Pinpoints which specific hardware SKUs generate the highest margin velocity.',
    relatedCapability: 'Inventory Management'
  },
  {
    id: 'cost-of-stockouts',
    num: 17,
    name: 'Cost of Stockouts',
    category: 'Operational',
    timing: 'Lagging',
    formula: 'Number of Days Out of Stock × Average Units Sold/Day × Price Per Unit',
    target: '$0 (Zero Stockouts)',
    currentVal: '$1,200',
    status: 'caution',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Measures financial loss incurred when inventory depletes before customer demand is fulfilled. Captures both lost sales and downstream customer churn.',
    whyItMatters: 'Balances just-in-time lean inventory practices against catastrophic lost sales opportunities.',
    relatedCapability: 'Warehouse Management'
  },
  {
    id: 'on-time-delivery-rate',
    num: 18,
    name: 'On-Time Delivery Rate',
    category: 'Operational',
    timing: 'Lagging',
    formula: '((Total Orders - Late Orders) / Total Orders) × 100',
    target: '≥ 98.0%',
    currentVal: '98.7%',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Percentage of customer orders that arrive at the destination on or before the promised delivery commitment date. Directly assesses supply chain reliability.',
    whyItMatters: 'Strongest driver of customer satisfaction, repeat purchase rates, and B2B contract renewals.',
    relatedCapability: 'Logistics'
  },
  {
    id: 'on-time-shipping-rate',
    num: 19,
    name: 'On-Time Shipping Rate',
    category: 'Operational',
    timing: 'Lagging',
    formula: '(Number of Items Shipped on Time / Total Items Shipped) × 100',
    target: '≥ 99.0%',
    currentVal: '99.3%',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'Measures how reliably warehouse fulfillment lines release packages to couriers within promised dock dispatch windows. Isolates warehouse efficiency from carrier delays.',
    whyItMatters: 'Identifies internal fulfillment bottlenecks before they spill over into carrier delivery misses.',
    relatedCapability: 'Warehouse Management'
  },
  {
    id: 'perfect-order-rate',
    num: 20,
    name: 'Perfect Order Rate',
    category: 'Operational',
    timing: 'Lagging',
    formula: '[(Delivered On-Time / Total) × (Complete / Total) × (Damage-Free / Total) × (Accurate Docs / Total)] × 100',
    target: '≥ 95.0%',
    currentVal: '96.4%',
    status: 'optimal',
    chapter: 'Chapter 3: 10 Common Operational KPIs',
    description: 'The composite gold standard for end-to-end supply chain mastery. An order is only "perfect" if delivered on-time, with all items present, completely undamaged, and accompanied by 100% accurate invoicing.',
    whyItMatters: 'Even small error rates in one subcomponent compound into heavy customer attrition and return costs.',
    relatedCapability: 'Order Management',
    calculator: {
      inputs: [
        { key: 'onTime', label: 'On-Time Rate (%)', min: 80, max: 100, val: 98, step: 0.5 },
        { key: 'complete', label: 'Complete Rate (%)', min: 80, max: 100, val: 99, step: 0.5 },
        { key: 'damageFree', label: 'Damage-Free Rate (%)', min: 80, max: 100, val: 99.5, step: 0.5 },
        { key: 'accurateDoc', label: 'Accurate Docs Rate (%)', min: 80, max: 100, val: 99.8, step: 0.5 }
      ],
      calc: (i) => ((i.onTime / 100) * (i.complete / 100) * (i.damageFree / 100) * (i.accurateDoc / 100) * 100).toFixed(1) + '%',
      eval: (v) => parseFloat(v) >= 95 ? 'optimal' : parseFloat(v) >= 90 ? 'caution' : 'critical'
    }
  }
];

// --- 4. Modern ERP Architecture & Selection Data (Oracle NetSuite Guide) ---
const MODERN_ERP_DATA = {
  characteristics: [
    {
      title: 'Cloud-Native Architecture',
      desc: 'Based 100% in the cloud, completely eliminating the need to invest in physical on-premise hardware, routine maintenance, or manual backup routines.',
      icon: '☁️'
    },
    {
      title: 'Seamless Business Integration',
      desc: 'Seamlessly connects business, people, and processes across all 16 capability domains without fragmented data silos or manual copy-pasting.',
      icon: '🔗'
    },
    {
      title: 'Rapid Elastic Scalability',
      desc: 'Quickly scales as an organization expands and requires new functionality, global multi-currency operations, or high-volume transaction processing.',
      icon: '📈'
    },
    {
      title: 'Real-Time Telemetry & BI',
      desc: 'Provides streaming real-time data and automated root-cause analysis critical to strategic executive decision-making and cash management.',
      icon: '⚡'
    },
    {
      title: 'Native AI & Predictive Analytics',
      desc: 'Supports the latest digital technologies, including artificial intelligence, automated 3-way reconciliation, and predictive demand sensing.',
      icon: '🧠'
    }
  ],
  vendorQuestions: [
    { id: 'q1', title: '1. System Costs & Licensing', detail: 'How does the vendor charge for the product now and future capabilities? Are upgrades, releases, and fixes included?' },
    { id: 'q2', title: '2. Implementation Costs & Scope', detail: 'What is the full expected cost for implementation, and how are scope creep and unforeseen professional fees prevented?' },
    { id: 'q3', title: '3. Configurability & Flexibility', detail: 'Does the vendor understand our specific manufacturing processes, and is the system flexible without custom code forks?' },
    { id: 'q4', title: '4. User-Friendliness & Adoption', detail: 'How easy is the system to learn and use? Does it have an intuitive UI that will encourage wide departmental adoption?' },
    { id: 'q5', title: '5. Timeline & Operations Impact', detail: 'How long will implementation take, and will it disrupt factory or retail operations? What customer resources are required?' },
    { id: 'q6', title: '6. Project Management & Milestones', detail: 'Will the vendor establish transparent success milestones relevant to our business so progress is visible?' },
    { id: 'q7', title: '7. Automated Cloud Updates', detail: 'How does the vendor deliver updates, and do new features come at extra cost or require expert assistance to install?' },
    { id: 'q8', title: '8. Legacy Data Migration', detail: 'How will the vendor move data from old business systems to the new ERP? Does the provider have verified migration tools?' },
    { id: 'q9', title: '9. Modular Add-ons & Partner Network', detail: 'Does the vendor offer a variety of modular add-ons as we expand, backed by an extensive global partner ecosystem?' }
  ],
  convincingSkeptics: [
    {
      step: 'Step 1',
      title: 'Identify the "Why"',
      desc: 'Highlight labor-intensive and error-prone manual spreadsheets, staff transferring data between fragmented apps, stale numbers, and lack of operational visibility into inventory and cash flow.'
    },
    {
      step: 'Step 2',
      title: 'Re-evaluate ERP Options',
      desc: 'List modules needed to deliver immediate benefits now and in coming years. Emphasize cloud-based ERP as the natural choice for security, scalability, and fast payback.'
    },
    {
      step: 'Step 3',
      title: 'Confirm Rollout Strategy',
      desc: 'Rolling out an ERP in stages is less risky than a "big bang" all-at-once deployment. Running legacy systems in parallel for a planned window protects critical supply chain continuity.'
    }
  ]
};

// --- 5. Application State ---
let currentRole = ROLES_DATA[1]; // Default: Executive
let activeCapabilityId = 'finance';
let activeKpiFilter = 'all';
let kpiSearchQuery = '';
let activeKpiCalcId = 'gross-profit-margin';
let kpiCalcValues = {};
let checkedVendorQuestions = new Set(['q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7', 'q8', 'q9']);
let pulsesActive = true;

// --- 6. DOM Elements ---
const portalsView = document.getElementById('portalsView');
const loginView = document.getElementById('loginView');
const workspaceView = document.getElementById('workspaceView');

// Theme Buttons
const portalsThemeBtn = document.getElementById('portalsThemeBtn');
const loginThemeBtn = document.getElementById('loginThemeBtn');
const workspaceThemeBtn = document.getElementById('workspaceThemeBtn');

// View 1 Tabs & Subviews
const viewModeTabs = document.getElementById('viewModeTabs');
const aiWheelSection = document.getElementById('aiWheelSection');
const portalsGridSection = document.getElementById('portalsGridSection');
const kpisGuideSection = document.getElementById('kpisGuideSection');
const erpGuideSection = document.getElementById('erpGuideSection');

// AI Wheel Elements
const capabilityPillsContainer = document.getElementById('capabilityPillsContainer');
const aiWheelSvgContainer = document.getElementById('aiWheelSvgContainer');
const aiCapabilityInspector = document.getElementById('aiCapabilityInspector');
const togglePulsesBtn = document.getElementById('togglePulsesBtn');
const resetWheelFocusBtn = document.getElementById('resetWheelFocusBtn');

// Portals Directory Elements
const portalsGridContainer = document.getElementById('portalsGridContainer');
const portalsSearchInput = document.getElementById('portalsSearchInput');
const clearPortalsSearchBtn = document.getElementById('clearPortalsSearchBtn');
const portalsCountNumber = document.getElementById('portalsCountNumber');

// 20 KPIs Elements
const kpiCardsGridContainer = document.getElementById('kpiCardsGridContainer');
const kpiFilterButtonGroup = document.getElementById('kpiFilterButtonGroup');
const kpiSearchInput = document.getElementById('kpiSearchInput');
const kpiCalcSelect = document.getElementById('kpiCalcSelect');
const kpiCalcBody = document.getElementById('kpiCalcBody');

// ERP Architecture Elements
const erpPillarsGrid = document.getElementById('erpPillarsGrid');
const vendorQuestionsGrid = document.getElementById('vendorQuestionsGrid');
const vendorScoreNumber = document.getElementById('vendorScoreNumber');
const vendorScoreBar = document.getElementById('vendorScoreBar');
const skepticsGrid = document.getElementById('skepticsGrid');

// View 2 (Login Page)
const loginRoleIcon = document.getElementById('loginRoleIcon');
const loginRoleSubtitle = document.getElementById('loginRoleSubtitle');
const loginRoleTitle = document.getElementById('loginRoleTitle');
const loginRoleDescription = document.getElementById('loginRoleDescription');
const roleLoginForm = document.getElementById('roleLoginForm');
const workEmailInput = document.getElementById('workEmailInput');
const passwordInput = document.getElementById('passwordInput');
const togglePasswordBtn = document.getElementById('togglePasswordBtn');
const enterWorkspaceBtn = document.getElementById('enterWorkspaceBtn');
const enterBtnText = document.getElementById('enterBtnText');
const demoEmailVal = document.getElementById('demoEmailVal');
const demoPasswordVal = document.getElementById('demoPasswordVal');
const fillDemoBtn = document.getElementById('fillDemoBtn');

// View 3 (Workspace Dashboard)
const sidebarNav = document.getElementById('sidebarNav');
const sidebarCollapseBtn = document.getElementById('sidebarCollapseBtn');
const collapseChevronBtn = document.getElementById('collapseChevronBtn');
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const sidebarUserInitials = document.getElementById('sidebarUserInitials');
const sidebarUserName = document.getElementById('sidebarUserName');
const sidebarUserRole = document.getElementById('sidebarUserRole');
const topbarRoleName = document.getElementById('topbarRoleName');
const topbarAvatar = document.getElementById('topbarAvatar');
const currentViewTitle = document.getElementById('currentViewTitle');
const workspaceHeroSubtitle = document.getElementById('workspaceHeroSubtitle');
const commandSearchInput = document.querySelector('.command-search-bar input');

// Workspace Subpanels
const workspaceHomePanel = document.getElementById('workspaceHomePanel');
const workspaceAiHubPanel = document.getElementById('workspaceAiHubPanel');
const workspaceKpisPanel = document.getElementById('workspaceKpisPanel');
const workspaceErpArchPanel = document.getElementById('workspaceErpArchPanel');
const workspaceGenericPanel = document.getElementById('workspaceGenericPanel');
const workspaceAiHubEmbed = document.getElementById('workspaceAiHubEmbed');
const workspaceKpisEmbed = document.getElementById('workspaceKpisEmbed');
const workspaceErpArchEmbed = document.getElementById('workspaceErpArchEmbed');
const workspaceAiScanBtn = document.getElementById('workspaceAiScanBtn');
const workspaceAiInsightText = document.getElementById('workspaceAiInsightText');

// --- 7. Render AI Radial Wheel SVG (Exact Layout of Attached Diagram) ---
function renderAiWheel(container, activeId = activeCapabilityId) {
  if (!container) return;

  const size = 920;
  const cx = 460;
  const cy = 460;
  const coreRadius = 88;
  const nodeRadius = 285;
  const count = AI_CAPABILITIES.length;

  let spokesSvg = '';
  let nodesSvg = '';

  AI_CAPABILITIES.forEach((cap, i) => {
    // 0 is Top 12 o'clock => -90 deg
    const angleDeg = (i * 360 / count) - 90;
    const rad = (angleDeg * Math.PI) / 180;

    const cos = Math.cos(rad);
    const sin = Math.sin(rad);

    // Spoke line endpoints
    const sx = cx + (coreRadius + 4) * cos;
    const sy = cy + (coreRadius + 4) * sin;
    const ex = cx + (nodeRadius - 26) * cos;
    const ey = cy + (nodeRadius - 26) * sin;

    // Node center
    const nx = cx + nodeRadius * cos;
    const ny = cy + nodeRadius * sin;

    // Pulse position (midway)
    const px = cx + (coreRadius + (nodeRadius - coreRadius) * 0.5) * cos;
    const py = cy + (coreRadius + (nodeRadius - coreRadius) * 0.5) * sin;

    const isActive = cap.id === activeId;
    const spokeClass = `spoke-line ${isActive ? 'active' : ''}`;

    // Spoke
    spokesSvg += `
      <line x1="${sx}" y1="${sy}" x2="${ex}" y2="${ey}" class="${spokeClass}" data-cap-id="${cap.id}" />
      ${pulsesActive ? `<circle cx="${px}" cy="${py}" r="3" class="spoke-pulse" />` : ''}
    `;

    // Radial Text Position
    const tx = cx + (nodeRadius + 40) * cos;
    const ty = cy + (nodeRadius + 40) * sin;

    let textAnchor = 'middle';
    if (cos > 0.3) textAnchor = 'start';
    else if (cos < -0.3) textAnchor = 'end';

    // Split long titles into tspans
    const words = cap.name.split(' ');
    let labelTspans = '';
    if (words.length <= 2) {
      labelTspans = `<tspan x="${tx}" dy="0">${cap.name}</tspan>`;
    } else {
      const mid = Math.ceil(words.length / 2);
      const l1 = words.slice(0, mid).join(' ');
      const l2 = words.slice(mid).join(' ');
      labelTspans = `
        <tspan x="${tx}" dy="-0.4em">${l1}</tspan>
        <tspan x="${tx}" dy="1.2em">${l2}</tspan>
      `;
    }

    const iconWithDims = cap.iconSvg.replace('<svg ', `<svg x="${nx - 12}" y="${ny - 12}" width="24" height="24" `);

    nodesSvg += `
      <g class="node-group ${isActive ? 'active' : ''}" data-cap-id="${cap.id}">
        <!-- Node Ivory Circle -->
        <circle cx="${nx}" cy="${ny}" r="26" class="node-circle-bg" />
        
        <!-- Embedded SVG Icon -->
        ${iconWithDims}

        <!-- Node Label -->
        <text x="${tx}" y="${ty}" class="node-text-label" text-anchor="${textAnchor}">
          ${labelTspans}
        </text>
      </g>
    `;
  });

  const svgContent = `
    <svg viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="AI-Powered Modern ERP Capabilities Topology">
      <defs>
        <!-- Center AI Radial Gradient -->
        <radialGradient id="aiCoreTealGrad" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#14b8a6" />
          <stop offset="25%" stop-color="#0f766e" />
          <stop offset="60%" stop-color="#042f2e" />
          <stop offset="100%" stop-color="#021a24" />
        </radialGradient>

        <!-- Gold Text Gradient -->
        <linearGradient id="aiGoldTextGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a" />
          <stop offset="40%" stop-color="#fbbf24" />
          <stop offset="100%" stop-color="#d97706" />
        </linearGradient>

        <!-- Iridescent Swirl Accents -->
        <linearGradient id="iridescentPetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="rgba(244, 114, 182, 0.65)" />
          <stop offset="50%" stop-color="rgba(192, 132, 252, 0.55)" />
          <stop offset="100%" stop-color="rgba(56, 189, 248, 0.4)" />
        </linearGradient>

        <!-- Glow Filter -->
        <filter id="coreGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      <!-- Spokes Group -->
      <g id="spokesGroup">
        ${spokesSvg}
      </g>

      <!-- Center AI Hub -->
      <g class="center-ai-core" id="centerAiCoreGroup" transform-origin="${cx} ${cy}">
        <!-- Outer Subtle Aura Ring -->
        <circle cx="${cx}" cy="${cy}" r="${coreRadius + 8}" fill="none" stroke="rgba(20, 184, 166, 0.25)" stroke-width="2" stroke-dasharray="4 4" />
        
        <!-- Main AI Orb -->
        <circle cx="${cx}" cy="${cy}" r="${coreRadius}" fill="url(#aiCoreTealGrad)" filter="url(#coreGlow)" stroke="#0d9488" stroke-width="2" />

        <!-- Iridescent Organic Swirl Overlays (Emulating the floral petals from image) -->
        <path d="M ${cx + 10} ${cy - 70} C ${cx + 75} ${cy - 65}, ${cx + 85} ${cy - 20}, ${cx + 45} ${cy + 10} C ${cx + 5} ${cy + 40}, ${cx + 65} ${cy + 70}, ${cx + 25} ${cy + 82} C ${cx - 20} ${cy + 90}, ${cx - 65} ${cy + 45}, ${cx - 55} ${cy + 15} Z" fill="url(#iridescentPetal)" opacity="0.32" />
        <circle cx="${cx + 40}" cy="${cy - 35}" r="38" fill="rgba(251, 191, 36, 0.25)" filter="blur(14px)" />
        <circle cx="${cx - 30}" cy="${cy + 40}" r="30" fill="rgba(56, 189, 248, 0.25)" filter="blur(10px)" />

        <!-- Stylized "AI" Typography -->
        <text x="${cx}" y="${cy + 19}" font-family="'Inter', -apple-system, sans-serif" font-size="58" font-weight="900" text-anchor="middle" fill="url(#aiGoldTextGrad)" letter-spacing="1px" style="filter: drop-shadow(0 4px 10px rgba(0,0,0,0.7)); user-select: none;">
          AI
        </text>
      </g>

      <!-- Peripheral Nodes Group -->
      <g id="nodesGroup">
        ${nodesSvg}
      </g>
    </svg>
  `;

  container.innerHTML = svgContent;

  // Attach SVG Interactive Events
  container.querySelectorAll('.node-group').forEach((grp) => {
    const id = grp.getAttribute('data-cap-id');
    grp.addEventListener('click', () => selectCapability(id));
    grp.addEventListener('mouseenter', () => highlightSpoke(id, true));
    grp.addEventListener('mouseleave', () => {
      if (id !== activeCapabilityId) highlightSpoke(id, false);
    });
  });

  const centerCore = container.querySelector('#centerAiCoreGroup');
  if (centerCore) {
    centerCore.addEventListener('click', triggerEnterpriseAiScan);
  }
}

function highlightSpoke(capId, active) {
  document.querySelectorAll(`.spoke-line[data-cap-id="${capId}"]`).forEach((line) => {
    line.classList.toggle('active', active);
  });
}

function triggerEnterpriseAiScan() {
  const messages = [
    '⚡ Autonomous Copilot: Re-balanced silicon wafer inventory buffers across European Hub.',
    '⚡ Autonomous Copilot: Automated 3-way reconciliation on 1,420 supplier POs completed with 0 errors.',
    '⚡ Autonomous Copilot: Dynamic lead-time simulation confirms 99.4% on-time delivery across North America.',
    '⚡ Autonomous Copilot: Cash conversion cycle optimized to 21.4 days (+3.2 days improvement).'
  ];
  const randMsg = messages[Math.floor(Math.random() * messages.length)];
  if (workspaceAiInsightText) {
    workspaceAiInsightText.innerHTML = `<strong>Scan Executed:</strong> ${randMsg}`;
  }
  alert(`Enterprise AI Diagnostics Scan Complete:\n\n${randMsg}\n\nAll 16 capability domains synchronized.`);
}

// --- 8. Render Capability Quick Selector Pills ---
function renderCapabilityPills() {
  if (!capabilityPillsContainer) return;
  capabilityPillsContainer.innerHTML = AI_CAPABILITIES.map((cap) => {
    const isActive = cap.id === activeCapabilityId;
    return `
      <button class="capability-pill-btn ${isActive ? 'active' : ''}" data-cap-id="${cap.id}" type="button">
        <span>${cap.name}</span>
      </button>
    `;
  }).join('');

  capabilityPillsContainer.querySelectorAll('.capability-pill-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      const id = btn.getAttribute('data-cap-id');
      selectCapability(id);
    });
  });
}

// --- 9. Select & Inspect Active Capability ---
function selectCapability(capId) {
  activeCapabilityId = capId;
  const cap = AI_CAPABILITIES.find((c) => c.id === capId) || AI_CAPABILITIES[0];

  // Update pills active state
  if (capabilityPillsContainer) {
    capabilityPillsContainer.querySelectorAll('.capability-pill-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-cap-id') === capId);
    });
  }

  // Update SVG wheel active states
  document.querySelectorAll('.node-group').forEach((grp) => {
    const isCurrent = grp.getAttribute('data-cap-id') === capId;
    grp.classList.toggle('active', isCurrent);
  });

  document.querySelectorAll('.spoke-line').forEach((line) => {
    const isCurrent = line.getAttribute('data-cap-id') === capId;
    line.classList.toggle('active', isCurrent);
  });

  // Render Inspector Card
  renderCapabilityInspector(cap);
}

function renderCapabilityInspector(cap) {
  if (!aiCapabilityInspector) return;
  const matchingRole = ROLES_DATA.find((r) => r.id === cap.roleId) || ROLES_DATA[1];

  aiCapabilityInspector.innerHTML = `
    <div class="inspector-head-group">
      <div class="inspector-icon-badge">
        ${cap.iconSvg}
      </div>
      <div class="inspector-titles">
        <div class="inspector-cat-tag">CAPABILITY DOMAIN · ${cap.angleOrder + 1} OF 16</div>
        <h3 class="inspector-name">${cap.name}</h3>
        <p class="inspector-tagline">${cap.tagline}</p>
      </div>
    </div>

    <div>
      <div class="inspector-section-label">Autonomous AI Agent Features</div>
      <ul class="inspector-ai-features-list">
        ${cap.aiFeatures.map((f) => `<li>${f}</li>`).join('')}
      </ul>
    </div>

    <div>
      <div class="inspector-section-label">Oracle NetSuite 20 KPI Benchmarks</div>
      <div class="inspector-kpis-list">
        ${cap.kpis.map((k) => `
          <div class="inspector-kpi-row">
            <div class="inspector-kpi-left">
              <span class="inspector-kpi-title">${k.name}</span>
              <span class="inspector-kpi-target">Target: ${k.target} · Formula: ${k.formula}</span>
            </div>
            <span class="inspector-kpi-val">${k.value}</span>
          </div>
        `).join('')}
      </div>
    </div>

    <div class="inspector-action-row">
      <a href="#/workspace/${matchingRole.id}" class="inspector-enter-btn">
        <span>Enter ${matchingRole.title} Workspace →</span>
      </a>
      <a href="#/login/${matchingRole.id}" class="inspector-login-link">
        Role Login &amp; Demo Credentials
      </a>
    </div>
  `;
}

// --- 10. Render Portals Grid (17 Roles) ---
function renderPortals(filterQuery = '') {
  if (!portalsGridContainer) return;
  const q = filterQuery.trim().toLowerCase();

  const filtered = ROLES_DATA.filter((role) => {
    return (
      role.title.toLowerCase().includes(q) ||
      role.description.toLowerCase().includes(q) ||
      role.tagline.toLowerCase().includes(q) ||
      role.subtitle.toLowerCase().includes(q)
    );
  });

  if (portalsCountNumber) {
    portalsCountNumber.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    portalsGridContainer.innerHTML = `
      <div class="empty-results-state" style="grid-column: 1 / -1;">
        <h3 class="empty-title">No matching portals found</h3>
        <p class="empty-desc">No role matches "${filterQuery}". Try searching "Finance", "Warehouse", or "HR".</p>
        <button class="reset-filter-btn" id="resetSearchAction" type="button">Reset Search</button>
      </div>
    `;
    const resetBtn = document.getElementById('resetSearchAction');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (portalsSearchInput) portalsSearchInput.value = '';
        if (clearPortalsSearchBtn) clearPortalsSearchBtn.classList.add('hidden');
        renderPortals('');
      });
    }
    return;
  }

  portalsGridContainer.innerHTML = filtered.map((role) => `
    <a href="#/login/${role.id}" class="portal-card" data-role-id="${role.id}">
      <div class="card-top">
        <div class="card-header-row">
          <div class="card-icon-wrapper">
            ${role.iconSvg}
          </div>
          <div class="card-title-group">
            <h2 class="card-role-title">${role.title}</h2>
            <div class="card-role-tagline">${role.subtitle}</div>
          </div>
          ${role.badge ? `<span class="external-badge">${role.badge}</span>` : ''}
        </div>
        <p class="card-description">${role.description}</p>
      </div>
      <div class="card-footer">
        <span class="card-route">${role.route}</span>
      </div>
    </a>
  `).join('');
}

// --- 11. Render 20 Make-or-Break KPIs Guide & Cards ---
function renderKpis(filter = activeKpiFilter, query = kpiSearchQuery) {
  if (!kpiCardsGridContainer) return;

  const q = query.trim().toLowerCase();
  const filtered = NETSUITE_KPIS.filter((kpi) => {
    // Filter by type
    if (filter === 'financial' && kpi.category !== 'Financial') return false;
    if (filter === 'operational' && kpi.category !== 'Operational') return false;
    if (filter === 'leading' && kpi.timing !== 'Leading') return false;
    if (filter === 'lagging' && kpi.timing !== 'Lagging') return false;

    // Search query
    if (q) {
      return (
        kpi.name.toLowerCase().includes(q) ||
        kpi.formula.toLowerCase().includes(q) ||
        kpi.description.toLowerCase().includes(q) ||
        kpi.whyItMatters.toLowerCase().includes(q)
      );
    }
    return true;
  });

  kpiCardsGridContainer.innerHTML = filtered.map((kpi) => `
    <div class="kpi-card" data-kpi-id="${kpi.id}">
      <div class="kpi-card-top">
        <div class="kpi-card-num-title">
          <span class="kpi-card-num">#${kpi.num}</span>
          <h4 class="kpi-card-title">${kpi.name}</h4>
        </div>
        <div class="kpi-badges-row">
          <span class="kpi-tag-pill ${kpi.category.toLowerCase()}">${kpi.category}</span>
          <span class="kpi-tag-pill ${kpi.timing.toLowerCase()}">${kpi.timing}</span>
        </div>
      </div>

      <div class="kpi-metric-val-row">
        <div>
          <span class="kpi-live-val">${kpi.currentVal}</span>
        </div>
        <div class="kpi-target-label">Target: <strong>${kpi.target}</strong></div>
      </div>

      <div class="kpi-formula-box">
        <strong>Formula:</strong> ${kpi.formula}
      </div>

      <p class="kpi-desc-text">${kpi.description}</p>

      <div class="kpi-why-box">
        <strong>Why it matters:</strong> ${kpi.whyItMatters}
      </div>
    </div>
  `).join('');
}

// --- 12. Interactive Live KPI Calculator Sandbox ---
function setupKpiCalculator() {
  if (!kpiCalcSelect || !kpiCalcBody) return;

  function renderCalculatorInputs(kpiId) {
    const kpi = NETSUITE_KPIS.find((k) => k.id === kpiId && k.calculator);
    if (!kpi || !kpi.calculator) {
      kpiCalcBody.innerHTML = `<p class="calc-sub">No live model available for this metric.</p>`;
      return;
    }

    const { inputs, calc, eval: evalFn } = kpi.calculator;

    // Initialize state
    if (!kpiCalcValues[kpiId]) {
      kpiCalcValues[kpiId] = {};
      inputs.forEach((inp) => {
        kpiCalcValues[kpiId][inp.key] = inp.val;
      });
    }

    const currentInputs = kpiCalcValues[kpiId];
    const computedVal = calc(currentInputs);
    const status = evalFn ? evalFn(computedVal) : 'optimal';

    const statusText = status === 'optimal' ? 'Optimal Performance' : status === 'caution' ? 'Cautionary Threshold' : 'Critical Hazard';

    kpiCalcBody.innerHTML = `
      <div class="calc-grid-layout">
        <div class="calc-inputs-col">
          ${inputs.map((inp) => `
            <div class="calc-slider-group">
              <div class="calc-slider-header">
                <span class="calc-slider-label">${inp.label}</span>
                <span class="calc-slider-value" id="val_${inp.key}">${currentInputs[inp.key]}</span>
              </div>
              <input
                type="range"
                class="calc-range-slider"
                data-key="${inp.key}"
                min="${inp.min}"
                max="${inp.max}"
                step="${inp.step || 1}"
                value="${currentInputs[inp.key]}"
              />
            </div>
          `).join('')}
        </div>

        <div class="calc-output-card">
          <span class="calc-output-label">Computed ${kpi.name}</span>
          <div class="calc-output-val" id="calcResultDisplay">${computedVal}</div>
          <span class="calc-status-tag ${status}" id="calcStatusDisplay">● ${statusText}</span>
          <p class="calc-ai-verdict" id="calcAiVerdict">
            Target Benchmark: <strong>${kpi.target}</strong>. Metric is currently within targeted operational tolerance.
          </p>
        </div>
      </div>
    `;

    // Attach slider inputs
    kpiCalcBody.querySelectorAll('.calc-range-slider').forEach((slider) => {
      slider.addEventListener('input', (e) => {
        const key = e.target.getAttribute('data-key');
        const numVal = parseFloat(e.target.value);
        currentInputs[key] = numVal;

        const valSpan = document.getElementById(`val_${key}`);
        if (valSpan) valSpan.textContent = numVal;

        const newResult = calc(currentInputs);
        const newStatus = evalFn ? evalFn(newResult) : 'optimal';
        const newStatusText = newStatus === 'optimal' ? 'Optimal Performance' : newStatus === 'caution' ? 'Cautionary Threshold' : 'Critical Hazard';

        const resDisplay = document.getElementById('calcResultDisplay');
        const stDisplay = document.getElementById('calcStatusDisplay');
        if (resDisplay) resDisplay.textContent = newResult;
        if (stDisplay) {
          stDisplay.className = `calc-status-tag ${newStatus}`;
          stDisplay.textContent = `● ${newStatusText}`;
        }
      });
    });
  }

  kpiCalcSelect.addEventListener('change', (e) => {
    activeKpiCalcId = e.target.value;
    renderCalculatorInputs(activeKpiCalcId);
  });

  renderCalculatorInputs(activeKpiCalcId);
}

// --- 13. Render Modern ERP Architecture & Selection Guide (PDF 2) ---
function renderErpArchitecture() {
  // 5 Pillars
  if (erpPillarsGrid) {
    erpPillarsGrid.innerHTML = MODERN_ERP_DATA.characteristics.map((c) => `
      <div class="erp-pillar-card">
        <div class="pillar-icon-box">${c.icon}</div>
        <h4 class="pillar-title">${c.title}</h4>
        <p class="pillar-desc">${c.desc}</p>
      </div>
    `).join('');
  }

  // 9 Vendor Questions
  if (vendorQuestionsGrid) {
    vendorQuestionsGrid.innerHTML = MODERN_ERP_DATA.vendorQuestions.map((q) => {
      const isChecked = checkedVendorQuestions.has(q.id);
      return `
        <label class="vendor-q-card" for="check_${q.id}">
          <input
            type="checkbox"
            id="check_${q.id}"
            class="vendor-q-checkbox"
            data-qid="${q.id}"
            ${isChecked ? 'checked' : ''}
          />
          <div>
            <h4 class="vendor-q-title">${q.title}</h4>
            <p class="vendor-q-desc">${q.detail}</p>
          </div>
        </label>
      `;
    }).join('');

    vendorQuestionsGrid.querySelectorAll('.vendor-q-checkbox').forEach((chk) => {
      chk.addEventListener('change', (e) => {
        const qid = e.target.getAttribute('data-qid');
        if (e.target.checked) checkedVendorQuestions.add(qid);
        else checkedVendorQuestions.delete(qid);
        updateVendorScore();
      });
    });
  }

  // 3 Keys to Convincing Skeptics
  if (skepticsGrid) {
    skepticsGrid.innerHTML = MODERN_ERP_DATA.convincingSkeptics.map((s) => `
      <div class="skeptic-card">
        <span class="skeptic-step-badge">${s.step}</span>
        <h4 class="skeptic-title">${s.title}</h4>
        <p class="skeptic-desc">${s.desc}</p>
      </div>
    `).join('');
  }

  updateVendorScore();
}

function updateVendorScore() {
  const count = checkedVendorQuestions.size;
  if (vendorScoreNumber) vendorScoreNumber.textContent = count;
  if (vendorScoreBar) {
    const pct = Math.round((count / 9) * 100);
    vendorScoreBar.style.width = `${pct}%`;
  }
}

// --- 14. View Mode Tabs Switcher (Portals View) ---
function setupViewModeTabs() {
  if (!viewModeTabs) return;

  const tabs = viewModeTabs.querySelectorAll('.view-mode-tab');
  const panels = {
    'portals-grid': portalsGridSection,
    'kpis-guide': kpisGuideSection,
    'erp-guide': erpGuideSection
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.getAttribute('data-view');
      Object.keys(panels).forEach((key) => {
        if (panels[key]) {
          panels[key].classList.toggle('hidden', key !== target);
        }
      });
    });
  });
}

// --- 15. Setup Role Login Page ---
function setupRoleLogin(role) {
  currentRole = role;
  if (loginRoleIcon) loginRoleIcon.innerHTML = role.iconSvg;
  if (loginRoleSubtitle) loginRoleSubtitle.textContent = role.subtitle;
  if (loginRoleTitle) loginRoleTitle.textContent = role.title;
  if (loginRoleDescription) loginRoleDescription.textContent = role.description;
  if (enterBtnText) enterBtnText.textContent = `Enter ${role.title} workspace`;

  if (workEmailInput) workEmailInput.value = role.demoEmail;
  if (passwordInput) {
    passwordInput.value = role.demoPassword;
    passwordInput.type = 'password';
  }

  if (demoEmailVal) demoEmailVal.textContent = role.demoEmail;
  if (demoPasswordVal) demoPasswordVal.textContent = role.demoPassword;
}

// --- 16. Setup Workspace View & Embedded Navigation ---
function setupWorkspace(role) {
  currentRole = role;
  if (topbarRoleName) topbarRoleName.textContent = role.title;
  if (topbarAvatar) topbarAvatar.textContent = role.userInitials;
  if (sidebarUserInitials) sidebarUserInitials.textContent = role.userInitials;
  if (sidebarUserName) sidebarUserName.textContent = role.userName;
  if (sidebarUserRole) sidebarUserRole.textContent = role.userRole;

  if (workspaceHeroSubtitle) {
    workspaceHeroSubtitle.textContent = `${role.title} Operations Overview · Live Enterprise Telemetry`;
  }
}

function setupWorkspaceTabs() {
  document.querySelectorAll('.nav-item').forEach((item) => {
    item.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
      item.classList.add('active');

      const tab = item.getAttribute('data-tab');
      const spanText = item.querySelector('span');
      if (spanText && currentViewTitle) {
        currentViewTitle.textContent = spanText.textContent;
      }

      // Hide all workspace panels
      [workspaceHomePanel, workspaceAiHubPanel, workspaceKpisPanel, workspaceErpArchPanel, workspaceGenericPanel].forEach((p) => {
        if (p) p.classList.add('hidden');
      });

      if (tab === 'home') {
        if (workspaceHomePanel) workspaceHomePanel.classList.remove('hidden');
      } else if (tab === 'ai-hub') {
        if (workspaceAiHubPanel) workspaceAiHubPanel.classList.remove('hidden');
        if (workspaceAiHubEmbed) {
          renderAiWheel(workspaceAiHubEmbed, activeCapabilityId);
        }
      } else if (tab === 'kpis-20') {
        if (workspaceKpisPanel) workspaceKpisPanel.classList.remove('hidden');
        if (workspaceKpisEmbed) {
          workspaceKpisEmbed.innerHTML = `
            <div class="kpi-cards-grid">
              ${NETSUITE_KPIS.slice(0, 8).map((kpi) => `
                <div class="kpi-card">
                  <div class="kpi-card-top">
                    <span class="kpi-card-num">#${kpi.num}</span>
                    <h4 class="kpi-card-title">${kpi.name}</h4>
                  </div>
                  <div class="kpi-metric-val-row">
                    <span class="kpi-live-val">${kpi.currentVal}</span>
                    <span class="kpi-target-label">Target: ${kpi.target}</span>
                  </div>
                  <div class="kpi-formula-box">${kpi.formula}</div>
                </div>
              `).join('')}
            </div>
          `;
        }
      } else if (tab === 'erp-arch') {
        if (workspaceErpArchPanel) workspaceErpArchPanel.classList.remove('hidden');
        if (workspaceErpArchEmbed) {
          workspaceErpArchEmbed.innerHTML = `
            <div class="erp-pillars-grid">
              ${MODERN_ERP_DATA.characteristics.map((c) => `
                <div class="erp-pillar-card">
                  <div class="pillar-icon-box">${c.icon}</div>
                  <h4 class="pillar-title">${c.title}</h4>
                  <p class="pillar-desc">${c.desc}</p>
                </div>
              `).join('')}
            </div>
          `;
        }
      } else {
        // Fallback for other operational tabs
        if (workspaceGenericPanel) {
          workspaceGenericPanel.classList.remove('hidden');
          const title = spanText ? spanText.textContent : 'Module Overview';
          const titleEl = document.getElementById('genericPanelTitle');
          if (titleEl) titleEl.textContent = title;
        }
      }

      if (sidebarNav) sidebarNav.classList.remove('mobile-open');
    });
  });
}

// --- 17. Single-Page View Router ---
function showView(viewId) {
  portalsView.classList.toggle('hidden', viewId !== 'portals');
  loginView.classList.toggle('hidden', viewId !== 'login');
  workspaceView.classList.toggle('hidden', viewId !== 'workspace');
  window.scrollTo({ top: 0, behavior: 'instant' });
}

function handleRouter() {
  const hash = window.location.hash || '#/portals';

  if (hash.startsWith('#/login/')) {
    const roleId = hash.replace('#/login/', '').trim().toLowerCase();
    const role = ROLES_DATA.find((r) => r.id === roleId) || ROLES_DATA[1];
    setupRoleLogin(role);
    showView('login');
    return;
  }

  if (hash.startsWith('#/workspace')) {
    const roleId = hash.replace('#/workspace/', '').replace('#/workspace', '').trim().toLowerCase();
    const role = ROLES_DATA.find((r) => r.id === roleId) || currentRole || ROLES_DATA[1];
    setupWorkspace(role);
    showView('workspace');
    return;
  }

  if (hash === '#/portals' || hash === '#/' || hash === '') {
    renderPortals(portalsSearchInput ? portalsSearchInput.value : '');
    showView('portals');
    return;
  }

  // Fallback
  showView('portals');
}

// --- 18. Theme Management ---
function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem('erp.theme', theme);

  const isDark = theme === 'dark';
  document.querySelectorAll('.theme-icon-sun').forEach((el) => {
    el.classList.toggle('hidden', !isDark);
  });
  document.querySelectorAll('.theme-icon-moon').forEach((el) => {
    el.classList.toggle('hidden', isDark);
  });
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next);
}

// --- 19. Event Listeners ---

// Theme buttons
[portalsThemeBtn, loginThemeBtn, workspaceThemeBtn].forEach((btn) => {
  if (btn) btn.addEventListener('click', toggleTheme);
});

// View 1 (Portals Search)
if (portalsSearchInput) {
  portalsSearchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (clearPortalsSearchBtn) {
      clearPortalsSearchBtn.classList.toggle('hidden', !val);
    }
    renderPortals(val);
  });
}

if (clearPortalsSearchBtn) {
  clearPortalsSearchBtn.addEventListener('click', () => {
    if (portalsSearchInput) {
      portalsSearchInput.value = '';
      portalsSearchInput.focus();
    }
    clearPortalsSearchBtn.classList.add('hidden');
    renderPortals('');
  });
}

// KPI Filters & Search
if (kpiFilterButtonGroup) {
  kpiFilterButtonGroup.querySelectorAll('.kpi-filter-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      kpiFilterButtonGroup.querySelectorAll('.kpi-filter-btn').forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      activeKpiFilter = btn.getAttribute('data-kpi-filter');
      renderKpis(activeKpiFilter, kpiSearchQuery);
    });
  });
}

if (kpiSearchInput) {
  kpiSearchInput.addEventListener('input', (e) => {
    kpiSearchQuery = e.target.value;
    renderKpis(activeKpiFilter, kpiSearchQuery);
  });
}

// Wheel Controls
if (togglePulsesBtn) {
  togglePulsesBtn.addEventListener('click', () => {
    pulsesActive = !pulsesActive;
    togglePulsesBtn.innerHTML = `<span class="pulse-indicator" style="background:${pulsesActive ? '#10b981' : '#64748b'};"></span> Flow: ${pulsesActive ? 'On' : 'Off'}`;
    renderAiWheel(aiWheelSvgContainer, activeCapabilityId);
  });
}

if (resetWheelFocusBtn) {
  resetWheelFocusBtn.addEventListener('click', () => {
    selectCapability('finance');
  });
}

// View 2 (Login actions)
if (fillDemoBtn) {
  fillDemoBtn.addEventListener('click', () => {
    if (workEmailInput) workEmailInput.value = currentRole.demoEmail;
    if (passwordInput) passwordInput.value = currentRole.demoPassword;
  });
}

if (togglePasswordBtn && passwordInput) {
  togglePasswordBtn.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
  });
}

if (roleLoginForm) {
  roleLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    window.location.hash = `#/workspace/${currentRole.id}`;
  });
}

if (enterWorkspaceBtn) {
  enterWorkspaceBtn.addEventListener('click', () => {
    window.location.hash = `#/workspace/${currentRole.id}`;
  });
}

// View 3 (Workspace navigation)
if (sidebarCollapseBtn) {
  sidebarCollapseBtn.addEventListener('click', () => {
    if (sidebarNav) sidebarNav.classList.toggle('collapsed');
  });
}

if (collapseChevronBtn) {
  collapseChevronBtn.addEventListener('click', () => {
    if (sidebarNav) sidebarNav.classList.toggle('collapsed');
  });
}

if (mobileMenuBtn) {
  mobileMenuBtn.addEventListener('click', () => {
    if (sidebarNav) sidebarNav.classList.toggle('mobile-open');
  });
}

if (workspaceAiScanBtn) {
  workspaceAiScanBtn.addEventListener('click', triggerEnterpriseAiScan);
}

// Command Search Keyboard Shortcut (Ctrl + K)
window.addEventListener('keydown', (e) => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (workspaceView && !workspaceView.classList.contains('hidden') && commandSearchInput) {
      commandSearchInput.focus();
    }
  }
});

// Router listener
window.addEventListener('hashchange', handleRouter);

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  applyTheme(currentTheme);

  // Initialize View 1
  setupViewModeTabs();
  renderPortals();
  renderKpis();
  setupKpiCalculator();
  renderErpArchitecture();

  // Initialize View 3
  setupWorkspaceTabs();

  // Route initial view
  handleRouter();
});
