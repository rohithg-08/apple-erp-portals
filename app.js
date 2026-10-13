/* ==========================================================================
   ONEPLUS NORD ENTERPRISE ERP — APPLICATION CONTROLLER & ROUTER
   Exact matching implementation of https://erp-orpin-six.vercel.app/
   1. Portals Hub (#/portals) with the 17 exact roles & live search
   2. Dedicated Role Login Screen (#/login/:role) with demo credentials auto-fill
   3. Global Enterprise Workspace Dashboard (#/workspace) with live role telemetry
   ========================================================================== */

// --- 1. The 17 Exact Roles from Reference ERP ---
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
    description: 'GL, AR/AP, tax, treasury and close.',
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
    description: 'Warranty, RMA, field service, spares and SLA.',
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

// --- 2. Application State ---
let currentRole = ROLES_DATA[1]; // Default: Executive

// --- 3. DOM Elements ---
const portalsView = document.getElementById('portalsView');
const loginView = document.getElementById('loginView');
const workspaceView = document.getElementById('workspaceView');

// Theme Buttons
const portalsThemeBtn = document.getElementById('portalsThemeBtn');
const loginThemeBtn = document.getElementById('loginThemeBtn');
const workspaceThemeBtn = document.getElementById('workspaceThemeBtn');

// View 1 Elements (Portals Hub)
const portalsGridContainer = document.getElementById('portalsGridContainer');
const portalsSearchInput = document.getElementById('portalsSearchInput');
const clearPortalsSearchBtn = document.getElementById('clearPortalsSearchBtn');
const portalsCountNumber = document.getElementById('portalsCountNumber');

// View 2 Elements (Login Page)
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

// View 3 Elements (Workspace Dashboard)
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

// --- 4. Render Portals Grid ---
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

  portalsGridContainer.innerHTML = filtered
    .map(
      (role) => `
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
    `
    )
    .join('');
}

// --- 5. Populate Role Login Page ---
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

// --- 6. Populate Workspace View with Active Role Telemetry ---
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

// --- 7. Single-Page View Router ---
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

// --- 8. Theme Management ---
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

// --- 9. Event Listeners ---

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

// Sidebar Nav tabs
document.querySelectorAll('.nav-item').forEach((item) => {
  item.addEventListener('click', () => {
    document.querySelectorAll('.nav-item').forEach((i) => i.classList.remove('active'));
    item.classList.add('active');
    const spanText = item.querySelector('span');
    if (spanText && currentViewTitle) {
      currentViewTitle.textContent = spanText.textContent;
    }
    if (sidebarNav) sidebarNav.classList.remove('mobile-open');
  });
});

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
  renderPortals();
  handleRouter();
});
