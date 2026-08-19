
/* ---------- Modern Crisp SVG Vector Icon System (Lucide / Heroicons Standard) ---------- */
const UI_ICONS = {
  ministry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 21h18M3 10h18M5 10v11M19 10v11M9 10v11M14 10v11M12 2L2 7h20L12 2z"/></svg>',
  teacher: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 3 3 5 6 5s6-2 6-5v-5"/></svg>',
  student: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  parent: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
  coordinator: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.55a11 11 0 0 1 14.08 0"/><path d="M1.42 9a16 16 0 0 1 21.16 0"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>',
  control: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="M9 16l2 2 4-4"/></svg>',
  grading: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 14l2 2 4-4"/></svg>',
  alert: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
  insights: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="9" y1="18" x2="15" y2="18"/><line x1="10" y1="22" x2="14" y2="22"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"/></svg>',
  search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  zap: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
  plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="8" y1="12" x2="16" y2="12"/></svg>',
  save: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/></svg>',
  a11y: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="4" r="2"/><path d="M4 8h16M12 8v8M8 20l4-4 4 4"/></svg>',
  sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
  badge: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  message: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>',
  print: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>',
  download: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
  target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
  
  arabic: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>',
  math: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/><line x1="4" y1="12" x2="20" y2="12"/><line x1="12" y1="4" x2="12" y2="20"/></svg>',
  science: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2"/><line x1="8.5" y1="2" x2="15.5" y2="2"/><line x1="7" y1="16" x2="17" y2="16"/></svg>',
  english: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  social: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>',
  chemistry: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><line x1="10.5" y1="10.5" x2="6.5" y2="17.5"/><line x1="13.5" y1="13.5" x2="17.5" y2="6.5"/></svg>',
  physics: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(45 12 12)"/><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(-45 12 12)"/><circle cx="12" cy="12" r="2"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
  userCheck: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
  userX: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="23" y2="13"/><line x1="23" y1="8" x2="18" y2="13"/></svg>',
  refresh: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>'
,
  settings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
  lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>',
  cloud: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
  leaf: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>',
  temp: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/></svg>',
  water: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>',
  tool: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
  info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>',
  eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  filter: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>',
  sparkles: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/></svg>'
};

function uiIcon(name, size=18, cls=''){
  const raw = UI_ICONS[name] || UI_ICONS.insights;
  return raw.replace('<svg ', '<svg width="' + size + '" height="' + size + '" class="ui-icon ' + cls + '" style="vertical-align:middle;display:inline-block;" ');
}

"use strict";
/* =====================================================================
   Manassa — National Accessible Learning Platform (front-end prototype)
   Single file, no framework, no external requests (low-bandwidth ethos).
   All data is mock + deterministic. All state is in-memory for the
   session (production would persist server-side under EMIS/LMS APIs).
   ===================================================================== */

/* ---------- tiny DOM helpers ---------- */
const $ = (s,r=document)=>r.querySelector(s);
const el = (id)=>document.getElementById(id);
const esc = (s)=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
// #17 accept Arabic-Indic (٠-٩) and Persian (۰-۹) digits in number/date/ID fields
function normDigits(s){ return String(s==null?'':s)
  .replace(/[\u0660-\u0669]/g, d=>String(d.charCodeAt(0)-0x0660))
  .replace(/[\u06F0-\u06F9]/g, d=>String(d.charCodeAt(0)-0x06F0)); }
const pct=(n)=>Math.round(n)+'%';

/* ---------- seeded RNG (mulberry32) so the "nation" is stable ---------- */
function rng(seed){let a=seed>>>0;return()=>{a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296;};}
const pick=(r,arr)=>arr[Math.floor(r()*arr.length)];
const ri=(r,a,b)=>a+Math.floor(r()*(b-a+1));

/* ---------- i18n: enough to prove Arabic-first + RTL works on chrome & key views ---------- */
const I18N={
  en:{
    dir:'ltr', appName:'Manassa', appTag:'National Accessible Learning Platform',
    a11y:'Accessibility', help:'Help', signout:'Sign out', prototype:'Prototype — sample data',
    teacherPortal:'Teacher portal', studentPortal:'Student portal', adminPortal:'Administrator portal',
    enter:'Enter', dashboard:'Dashboard', gradebook:'Gradebook', attendance:'Attendance',
    assessments:'Assessments', students:'Students', myweek:'My week', mysubjects:'My subjects',
    mygrades:'My grades', oversight:'Oversight', pilot:'Pilot monitoring',
    save:'Save', saved:'Saved', present:'Present', absent:'Absent', late:'Late', excused:'Excused absence',
    textSize:'Text size', contrast:'High contrast', motion:'Reduce motion', spacing:'Reading spacing',
    language:'Language', dark:'Dark mode', enterAdvance:'Enter → next student', readaloud:'Read aloud', close:'Close',
    nextAction:'Next best action', trajectory:'Trajectory', mastery:'Subject mastery',
    parentPortal:'Parent portal', training:'Learn how', myChild:'My child',
    readToMe:'Read to me', next:'Next', back:'Back', skip:'Skip', gotit:'Got it',
    marks:'Marks', messages:'Messages', home:'Home', replayTour:'Show me the tour again',
    fourDoors:'One accessible platform. Four front doors.',
    dTeacher:'Take attendance, enter marks, and see how each student is doing — in two or three taps.',
    dStudent:'Your subjects, lessons and this week\u2019s quiz — simple and calm.',
    dParent:'See how your child is doing — attendance, marks and messages — in pictures, with read-aloud. Supports audio and images.',
    dAdmin:'Attendance, assessment results, teacher attendance and dropout risk — at every level.',
    lessons:'Lessons', quiz:'Quiz', savedTab:'Saved', openLesson:'Open lesson', openAgain:'Open again',
    saveBtn:'Save', savedBtn:'\u2713 Saved', thisWeek:'This week', doneTag:'\u2713 Done',
    startQuiz:'Start quiz', takeAgain:'Take again', practiceRun:'Practice run (doesn\u2019t count)',
    prev:'Previous', reviewAnswers:'Review answers', submitQuiz:'Submit quiz', finishPractice:'Finish practice',
    question:'Question', ofWord:'of', greeting:'Hi', pickSubject:'Tap a subject to begin. There is no rush — go at your own pace.',
    settings:'Settings', done:'Done', faqs:'Questions & answers', faqIntro:'Quick answers to common questions.',
    settingsScope:'These settings change only Manassa — never your phone or device. Manassa already follows your device\u2019s own accessibility settings (text size, reduced motion, contrast). Use the options below only if you\u2019d like to adjust things further inside Manassa.',
    resetDefaults:'Reset to device defaults', accountPrefs:'Language & display',
    readSpeed:'Reading speed', slow:'Slow', normalSpeed:'Normal',
  },
  ar:{
    dir:'rtl', appName:'منصّة', appTag:'منصّة التعلّم الوطنية الميسّرة',
    a11y:'إمكانية الوصول', help:'مساعدة', signout:'تسجيل الخروج', prototype:'المنظومة الوطنية الموحدة — بيانات استرشادية',
    teacherPortal:'بوابة المعلّم', studentPortal:'بوابة الطالب', adminPortal:'بوابة الإدارة',
    enter:'دخول', dashboard:'لوحة المتابعة', gradebook:'سجل الدرجات', attendance:'الحضور',
    assessments:'التقييمات', students:'الطلاب', myweek:'أسبوعي', mysubjects:'موادي',
    mygrades:'درجاتي', oversight:'الإشراف', pilot:'متابعة التجربة',
    save:'حفظ', saved:'تم الحفظ', present:'حاضر', absent:'غائب', late:'متأخر', excused:'غياب بعذر',
    textSize:'حجم الخط', contrast:'تباين عالٍ', motion:'تقليل الحركة', spacing:'تباعد القراءة',
    language:'اللغة', dark:'الوضع الليلي', enterAdvance:'Enter ← الطالب التالي', readaloud:'قراءة صوتية', close:'إغلاق',
    nextAction:'التوصية الإثرائية والتربوية المعتمدة', trajectory:'المسار', mastery:'إتقان المواد',
    parentPortal:'بوابة ولي الأمر', training:'كيفية الاستخدام', myChild:'ابني / ابنتي',
    readToMe:'اقرأ لي', next:'التالي', back:'السابق', skip:'تخطٍ', gotit:'تم',
    marks:'الدرجات', messages:'الرسائل', home:'الرئيسية', replayTour:'أعد عرض الجولة',
    fourDoors:'منصّة واحدة ميسّرة. أربع بوابات متخصصة.',
    dTeacher:'رصد الحضور السريع، إدخال الدرجات ومتابعة التحصيل وتابع مستوى كلّ طالب — بلمستين أو ثلاث.',
    dStudent:'موادّك ودروسك واختبار هذا الأسبوع — بساطة وهدوء.',
    dParent:'تابع مستوى ابنك — الحضور والدرجات والرسائل — بالصور ومع القراءة الصوتية. يدعم الاستماع والصور لمن يفضّل ذلك.',
    dAdmin:'متابعة شاملة من مستوى الوزارة إلى مستوى الفصل الدراسي — الحضور والتقييمات ومؤشر الإنذار المبكر في كلّ مستوى.',
    lessons:'الدروس', quiz:'اختبار', savedTab:'المحفوظة', openLesson:'افتح الدرس', openAgain:'افتح مجددًا',
    saveBtn:'حفظ', savedBtn:'\u2713 محفوظ', thisWeek:'هذا الأسبوع', doneTag:'\u2713 تمّ',
    startQuiz:'ابدأ الاختبار', takeAgain:'أعد المحاولة', practiceRun:'تدريب (لا يُحتسب)',
    prev:'السابق', reviewAnswers:'مراجعة الإجابات', submitQuiz:'إرسال الاختبار', finishPractice:'إنهاء التدريب',
    question:'سؤال', ofWord:'من', greeting:'مرحبًا', pickSubject:'اضغط على مادّة لتبدأ. لا عجلة — تعلّم بإيقاعك.',
    settings:'الإعدادات', done:'تمّ', faqs:'أسئلة وأجوبة', faqIntro:'إجابات سريعة عن الأسئلة الشائعة.',
    settingsScope:'هذه الإعدادات تغيّر منصّة فقط — ولا تغيّر هاتفك أو جهازك أبدًا. تتبع منصّة إعدادات إمكانية الوصول في جهازك (حجم الخط، تقليل الحركة، التباين) تلقائيًّا. استخدم الخيارات أدناه فقط إذا أردت ضبطًا إضافيًّا داخل منصّة.',
    resetDefaults:'العودة إلى إعدادات الجهاز', accountPrefs:'اللغة والعرض',
    readSpeed:'سرعة القراءة', slow:'بطيئة', normalSpeed:'عادية',
  }
};
const t=(k)=>(I18N[S.settings.lang][k]||I18N.en[k]||k);

/* ---------- domain reference data ---------- */
const SUBJECTS=['Science','Arabic','Mathematics','English','Social Studies'];
const SUBJECTS_AR={'Arabic':'اللغة العربية','Mathematics':'الرياضيات','Science':'العلوم','English':'اللغة الإنجليزية','Social Studies':'الدراسات الاجتماعية'};
const FIRST=['Youssef','Mariam','Omar','Salma','Ali','Nour','Hana','Khaled','Layla','Mostafa','Farida','Adham','Jana','Karim','Malak','Ziad','Sara','Tarek','Dina','Rana','Hassan','Aya','Seif','Habiba','Amir','Lina','Rami','Nada','Tamer','Yara'];
const FIRST_AR={Youssef:'يوسف',Mariam:'مريم',Omar:'عمر',Salma:'سلمى',Ali:'علي',Nour:'نور',Hana:'هنا',Khaled:'خالد',Layla:'ليلى',Mostafa:'مصطفى',Farida:'فريدة',Adham:'أدهم',Jana:'جنى',Karim:'كريم',Malak:'ملك',Ziad:'زياد',Sara:'سارة',Tarek:'طارق',Dina:'دينا',Rana:'رنا',Hassan:'حسن',Aya:'آية',Seif:'سيف',Habiba:'حبيبة',Amir:'أمير',Lina:'لينا',Rami:'رامي',Nada:'ندى',Tamer:'تامر',Yara:'يارا'};
const MALE_FIRST=['Youssef','Omar','Ali','Khaled','Mostafa','Adham','Karim','Ziad','Tarek','Hassan','Seif','Amir','Rami','Tamer'];  // father's given name must be male
const SURNAMES=['Hassan','Ibrahim','Saad','Fahmy','Mansour','Aziz','Rashad','Naguib'];
const SURNAMES_AR={Hassan:'حسن',Ibrahim:'إبراهيم',Saad:'سعد',Fahmy:'فهمي',Mansour:'منصور',Aziz:'عزيز',Rashad:'رشاد',Naguib:'نجيب'};
const GOV_AR={Cairo:'القاهرة',Giza:'الجيزة',Aswan:'أسوان'};
const DIR_EN=['East','West','South','Central'], DIR_AR=['شرق','غرب','جنوب','وسط'];
const SCHOOLWORD_AR={Nile:'النيل',Horizon:'الأفق',Future:'المستقبل',Salam:'السلام',Tahrir:'التحرير',Sunrise:'الشروق'};
const STAGE_AR={Primary:'الابتدائية',Preparatory:'الإعدادية'};
const CLSLET_AR=['أ','ب','ج','د'];
function arNum(n){ return String(n).replace(/[0-9]/g,d=>'٠١٢٣٤٥٦٧٨٩'[+d]); }
function nodeName(n){ return n&&S.settings.lang==='ar' ? (n.name_ar||n.name) : (n?n.name:''); }
function arName(s){ return s&&S.settings.lang==='ar' ? (s.name_ar||s.name) : (s?s.name:''); }
const ACCOMM=['Screen reader','Extra time','Large text','Captions','Sign-language video','Read-aloud'];
const ACCOMM_AR={'Screen reader':'قارئ شاشة','Extra time':'وقت إضافي','Large text':'خطّ كبير','Captions':'تعليقات نصّية','Sign-language video':'فيديو لغة الإشارة','Read-aloud':'قراءة صوتية'};
function accLabel(a){ return S.settings.lang==='ar' ? (ACCOMM_AR[a]||a) : a; }
const GOV=[
  {id:'g-cairo',     name:'Cairo',         name_ar:'القاهرة',     region:'Urban'},
  {id:'g-giza',      name:'Giza',          name_ar:'الجيزة',      region:'Urban'},
  {id:'g-alex',      name:'Alexandria',    name_ar:'الإسكندرية',  region:'Urban'},
  {id:'g-portsaid',  name:'Port Said',     name_ar:'بورسعيد',     region:'Urban'},
  {id:'g-suez',      name:'Suez',          name_ar:'السويس',      region:'Urban'},
  {id:'g-qalyubia',  name:'Qalyubia',      name_ar:'القليوبية',   region:'Lower'},
  {id:'g-damietta',  name:'Damietta',      name_ar:'دمياط',       region:'Lower'},
  {id:'g-dakahlia',  name:'Dakahlia',      name_ar:'الدقهلية',    region:'Lower'},
  {id:'g-sharqia',   name:'Sharqia',       name_ar:'الشرقية',     region:'Lower'},
  {id:'g-kafrelsh',  name:'Kafr El Sheikh',name_ar:'كفر الشيخ',   region:'Lower'},
  {id:'g-gharbia',   name:'Gharbia',       name_ar:'الغربية',     region:'Lower'},
  {id:'g-monufia',   name:'Monufia',       name_ar:'المنوفية',    region:'Lower'},
  {id:'g-beheira',   name:'Beheira',       name_ar:'البحيرة',     region:'Lower'},
  {id:'g-ismailia',  name:'Ismailia',      name_ar:'الإسماعيلية', region:'Lower'},
  {id:'g-benisuef',  name:'Beni Suef',     name_ar:'بني سويف',    region:'Upper'},
  {id:'g-faiyum',    name:'Faiyum',        name_ar:'الفيوم',      region:'Upper'},
  {id:'g-minya',     name:'Minya',         name_ar:'المنيا',      region:'Upper'},
  {id:'g-asyut',     name:'Asyut',         name_ar:'أسيوط',       region:'Upper', inclusionFocus:true},
  {id:'g-sohag',     name:'Sohag',         name_ar:'سوهاج',       region:'Upper'},
  {id:'g-qena',      name:'Qena',          name_ar:'قنا',         region:'Upper'},
  {id:'g-luxor',     name:'Luxor',         name_ar:'الأقصر',      region:'Upper'},
  {id:'g-aswan',     name:'Aswan',         name_ar:'أسوان',       region:'Upper', inclusionFocus:true},
  {id:'g-redsea',    name:'Red Sea',       name_ar:'البحر الأحمر',region:'Frontier'},
  {id:'g-newvalley', name:'New Valley',    name_ar:'الوادي الجديد',region:'Frontier'},
  {id:'g-matrouh',   name:'Matrouh',       name_ar:'مطروح',       region:'Frontier'},
  {id:'g-nsinai',    name:'North Sinai',   name_ar:'شمال سيناء',  region:'Frontier', inclusionFocus:true},
  {id:'g-ssinai',    name:'South Sinai',   name_ar:'جنوب سيناء',  region:'Frontier'},
];
const URBAN_SHARE={Urban:0.92, Lower:0.55, Upper:0.35, Frontier:0.45};

/* Build the national tree once, deterministically.
   Ministry > Governorate(Mudiriya) > Idara(district) > School > Class > Student */
function buildNation(){
  const r=rng(73);
  const ministry={id:'min', level:'ministry', name:'Ministry of Education', name_ar:'وزارة التربية والتعليم', children:[]};
  GOV.forEach((g,gi)=>{
    const gov={id:g.id, level:'governorate', name:g.name, name_ar:(g.name_ar||GOV_AR[g.name]||g.name), inclusionFocus:!!g.inclusionFocus, region:g.region, children:[], parent:ministry};
    const nIdara=ri(r,2,2);
    for(let d=0; d<nIdara; d++){
      const dirEn=DIR_EN[d]||'Central', dirAr=DIR_AR[d]||'وسط';
      const idara={id:`${g.id}-id${d}`, level:'idara', name:`${g.name} ${dirEn} District`, name_ar:`إدارة ${(GOV_AR[g.name]||g.name)} ${dirAr} التعليمية`, children:[], parent:gov};
      const nSchool=ri(r,2,2);
      for(let s=0;s<nSchool;s++){
        const urbanShare = URBAN_SHARE[g.region]!=null?URBAN_SHARE[g.region]:0.5;
        const locale = r()<urbanShare ? 'urban' : 'rural';
        const lowConn = r() < ((locale==='rural'?0.5:0.14) + ((g.region==='Upper'||g.region==='Frontier')?0.15:0));
        const connect = lowConn ? 'offline' : 'online';
        const str = locale==='urban' ? ri(r,30,47) : ri(r,18,42);
        const strBand = str<=25 ? 'low' : str<=40 ? 'mid' : 'high';
        const sizeBand = locale==='urban' ? pick(r,['medium','large','large']) : pick(r,['small','small','medium']);
        const adv = (locale==='urban'?5:-4) + (connect==='offline'?-4:0) + (strBand==='high'?-4:strBand==='low'?3:0) + (g.region==='Urban'?2:(g.region==='Upper'||g.region==='Frontier')?-3:0);
        const sw=pick(r,['Nile','Horizon','Future','Salam','Tahrir','Sunrise']); const stageEn=['Primary','Preparatory'][s%2];
        const school={id:`${idara.id}-sc${s}`, level:'school', name:`${g.name} ${sw} ${stageEn} School`, name_ar:`مدرسة ${(SCHOOLWORD_AR[sw]||sw)} ${(STAGE_AR[stageEn]||'')}`, lowConn, locale, str, strBand, sizeBand, connect, region:g.region, children:[], parent:idara};
        const nClass=3;
        for(let c=0;c<nClass;c++){
          const grade=ri(r,1,9);
          const cls={id:`${school.id}-cl${c}`, level:'class', name:`Grade ${grade}/${String.fromCharCode(65+c)}`, name_ar:`الصف ${arNum(grade)}/${CLSLET_AR[c]||CLSLET_AR[0]}`, grade, children:[], parent:school, students:[]};
          const nStu=ri(r,18,24);
          for(let i=0;i<nStu;i++){
            const fname=pick(r,FIRST);
            const fatherName=pick(r,MALE_FIRST);   // middle (father's given name — always male)
            const familyName=pick(r,SURNAMES);
            const fullName=`${fname} ${fatherName} ${familyName}`;
            const fullName_ar=`${FIRST_AR[fname]||fname} ${FIRST_AR[fatherName]||fatherName} ${SURNAMES_AR[familyName]||familyName}`;
            const gender=r()<0.5?'F':'M';
            const hasAcc = r()<(g.inclusionFocus?0.22:0.10);
            // weekly score series (last 8 weeks)
            let base=clamp(ri(r,40,88)+adv,15,96);
            const series=[]; let v=base;
            for(let w=0;w<8;w++){ v=clamp(v+ri(r,-9,8),15,99); series.push(v); }
            const trend=series[7]-series[5];
            const att=clamp(ri(r,62,99)+Math.round(adv/2),30,100);
            const mastery={}; SUBJECTS.forEach(su=>mastery[su]=clamp(base+ri(r,-22,18),10,99));
            const missing=ri(r,0,4);
            // Two distinct signals:
            //  - 'warn'  = needs academic support (a broader group; used in teacher/student views)
            //  - 'risk'  = genuine dropout risk: chronic absence AND sustained low performance (small group)
            let risk='ok';
            const avgM=Math.round(SUBJECTS.reduce((a,su)=>a+mastery[su],0)/SUBJECTS.length);
            if(att<82 || avgM<52 || trend<=-8 || missing>=3) risk='warn';
            if(att<74 && avgM<50 && (trend<=-5 || missing>=3)) risk='risk';
            cls.students.push({
              id:`${cls.id}-st${i}`, name:fullName, name_ar:fullName_ar, code:`S-${(gi+1)}${d}${s}${c}${String(i).padStart(2,'0')}`,
              gender, hasAcc, accomm: hasAcc?[pick(r,ACCOMM),pick(r,ACCOMM)].filter((x,ix,a)=>a.indexOf(x)===ix):[],
              locale, strBand, sizeBand, connect, region:g.region,
              series, trend, att, mastery, avgM, missing, risk,
              notes:[], grades:{}, classId:cls.id
            });
          }
          school.children.push(cls);
        }
        idara.children.push(school);
      }
      gov.children.push(idara);
    }
    ministry.children.push(gov);
  });
  return ministry;
}
const NATION=buildNation();

/* index nodes by id for drill navigation */
const NODE={};
(function index(n){NODE[n.id]=n; (n.children||[]).forEach(index);})(NATION);


/* ---------- Explicit Assessment Timeline & Ministerial Calculation Logic ---------- */
const ischoolSvgLogo = `<svg viewBox="0 0 986.4 301.3" style="height:32px;width:auto;vertical-align:middle" role="img" aria-label="iSchool Logo">
  <path fill="#FFD700" d="M232.8,112.1c-6-44.1-36.2-84.9-79.6-97.8c-49.2-16-102.5,7.4-138.3,39.5c-8,7.1,2.2,19.3,10.6,12.8c43.9-36.6,111.9-53.5,154-7.7c14.5,15.4,22.1,34,24.1,53.3H232.8z"/>
  <path fill="#FFD700" d="M200.7,149.5c-5.3,21.3-16.7,41.6-32.8,57.2c-20,20.5-44,38.5-68.8,44.8c-35.8,9.8-69.2-11.2-53.1-50.4c15.6-37.8,47.6-62.7,89.4-80.1l-2.1-4.3c28.2-16.6,2.4-59.8-26.1-43.9c-28.4,17.1-53.4,39.7-75.3,67c-26.5,32-46,83.6-18.5,121.8c34.7,47,103.3,33.7,142.8,2.4c37.7-27.9,68.8-67.1,76-114.4H200.7z"/>
  <path fill="#056FEC" d="M149.5,159.7l2.7,72.2c0.5,13.7-7.1,22.4-20,22.9c-12.9,0.5-21.2-7.6-21.7-21.3l-2.7-72.2c-0.5-13.7,7.1-22.4,20-22.9C140.7,137.9,149,146,149.5,159.7z"/>
  <path fill="#056FEC" d="M443.1,218.3c-9.5,12.8-24.7,21.3-43.1,23.8c-37.6,5.2-66.7-15.9-71.7-51.9c-5-36,17.2-64.2,54.9-69.4c16.5-2.3,31.6,0.7,44.8,9.4c4.3,3.1,7.2,7.6,7.9,12.8c1.6,11.3-4.8,19.7-16.1,21.3c-5,0.7-9.6-0.4-13.3-2.6c-6.6-3.7-12.2-4.9-18.2-4.1c-13.2,1.8-20.7,12.6-18.8,26.8c2,14.1,12.2,22.5,25.3,20.7c7.4-1,13.3-4.8,17.6-10.3c3.8-4.4,7.9-6.7,12.7-7.4c11.5-1.6,20,4.8,21.5,16.1C447.4,209.1,445.9,214.2,443.1,218.3z"/>
  <path fill="#056FEC" d="M581.2,190.2l-5.2,45.4c-1.5,13.2-10.2,20.5-22.7,19.1c-12.5-1.4-19.2-10.5-17.7-23.7l4.7-40.6c1.6-13.7-3.8-21.9-15.6-23.2c-13-1.5-20.9,6.1-22.7,21.5l-4.4,38c-1.5,13.2-10.2,20.5-22.7,19.1c-12.5-1.4-19.2-10.5-17.7-23.7L472,93.6c1.5-13.2,10.2-20.5,22.7-19.1C507.2,76,514,85,512.4,98.2l-4.8,41.8l0.5,0.1c8.2-7.3,19-10.2,31.7-8.8C570.8,134.9,585.2,155.6,581.2,190.2z"/>
  <path fill="#056FEC" d="M657.9,130.2c38,0,63.9,24.9,63.9,61.2s-25.9,61.2-63.9,61.2c-38,0-63.9-24.9-63.9-61.2S619.9,130.2,657.9,130.2z M657.9,215.4c13.3,0,22.3-9.7,22.3-24c0-14.3-9-24-22.3-24c-13.3,0-22.3,9.7-22.3,24C635.6,205.7,644.6,215.4,657.9,215.4z"/>
  <path fill="#056FEC" d="M798.4,124.4c38,0,63.9,24.9,63.9,61.2s-25.9,61.2-63.9,61.2c-38,0-63.9-24.9-63.9-61.2S760.4,124.4,798.4,124.4z M798.4,209.6c13.3,0,22.3-9.7,22.3-24c0-14.3-9-24-22.3-24s-22.3,9.7-22.3,24C776.2,199.9,785.1,209.6,798.4,209.6z"/>
  <path fill="#056FEC" d="M926.3,107.1l-14.1,128.4c-1.5,13.2-10.1,20.6-22.6,19.2c-12.5-1.4-19.3-10.4-17.9-23.6l14.1-128.4c1.5-13.2,10.1-20.6,22.6-19.2C921,84.8,927.8,93.8,926.3,107.1z"/>
  <path fill="#056FEC" d="M258.9,250.3c-22.2,2.4-45-2.3-64.2-13.1c-5.6-3.1-9.6-9.3-10.4-16c-1.3-11.7,7-21.8,18.8-23.1c4.6-0.5,8.9,0.4,13.1,2.7c13.2,7.7,25.9,10.7,39,9.3c4.2-0.5,17.9-2.7,16.9-12l0-0.5c-0.5-5-2.9-8.5-29.9-12.4c-31.4-4.5-57.7-11.1-61.6-46.8l0-0.4c-3.3-30.8,19-55,54.3-58.8c19.5-2.1,37.7,0.9,54.2,9c5,2.3,10.9,7.9,11.8,16.7c1.3,11.7-7,21.8-18.8,23.1c-4,0.4-7.6-0.2-11.5-1.9c-12.1-5.5-22.5-7.6-31.8-6.6c-9.4,1-15.1,5.2-14.5,10.6l0,0.5c0.7,6.2,3.5,8.7,32.2,12.8c28.7,4.2,55.6,12.8,59.3,46.2l0,0.5C319.4,222.4,297,246.1,258.9,250.3z"/>
  <circle fill="#FF7F1C" cx="123.3" cy="95.5" r="28"/>
</svg>`;

const ASSESSMENTS_TIMELINE = [
  { id: 'asm1', name: 'تقييم تشخيصي - الوحدة 1', name_en: 'Diagnostic 1', date: '2026-02-15', dueDate: '2026-02-22', maxMarks: 100, weight: 1 },
  { id: 'asm2', name: 'اختبار أسبوعي 1', name_en: 'Weekly Quiz 1', date: '2026-02-28', dueDate: '2026-03-07', maxMarks: 100, weight: 1 },
  { id: 'asm3', name: 'نشاط تطبيقي ومهمة أدائية', name_en: 'Performance Task 1', date: '2026-03-12', dueDate: '2026-03-19', maxMarks: 100, weight: 1 },
  { id: 'asm4', name: 'اختبار شهري - مارس', name_en: 'Monthly Test (March)', date: '2026-03-25', dueDate: '2026-04-01', maxMarks: 100, weight: 2 },
  { id: 'asm5', name: 'اختبار أسبوعي 2', name_en: 'Weekly Quiz 2', date: '2026-04-08', dueDate: '2026-04-15', maxMarks: 100, weight: 1 },
  { id: 'asm6', name: 'مشروع ختامي للفصل', name_en: 'Unit Project', date: '2026-04-20', dueDate: '2026-04-27', maxMarks: 100, weight: 1.5 },
  { id: 'asm7', name: 'امتحان نهاية الفصل الدراسي', name_en: 'Term Exam', date: '2026-05-10', dueDate: '2026-05-17', maxMarks: 100, weight: 3, upcoming: true }
];

/* Rule from Meeting Minutes:
   1. Calculated dynamically based ONLY on assessments that have already passed due date within timeframe.
   2. Overdue/unsubmitted assignments default to ZERO.
   3. Drill-down functionality for breakdown and dates.
*/
function calculateDynamicStudentAverage(student, dateRangeFilter = 'to_date') {
  let eligible = ASSESSMENTS_TIMELINE.filter(a => !a.upcoming);
  if (dateRangeFilter === 'last_2_w') eligible = eligible.slice(-2);
  else if (dateRangeFilter === 'month_to_date') eligible = eligible.slice(-3);
  
  if (!eligible.length) return { average: 100, count: 0, items: [] };
  
  let totalWeightedScore = 0;
  let totalWeight = 0;
  const items = [];
  
  eligible.forEach(asm => {
    // Check if score is recorded or defaults to 0 if overdue
    const rawVal = student.grades ? student.grades[asm.id] : null;
    let score, isOverdueZero;
    if (rawVal != null) {
      // A real mark exists (teacher entered it live, or a prior recorded value) — always wins.
      score = Number(rawVal); isOverdueZero = false;
    } else {
      // No live entry yet. Most students in a real cohort HAVE been graded by their
      // teacher for a past-due item; only a genuine minority are still pending —
      // that minority is what stays zero-defaulted per the ministerial rule below.
      // Deterministic per student+assessment, seeded off the student's own subject
      // mastery, so the "avg. grade" indicator is real and stable, not a blanket 0.
      const r = rng(hashStr(student.id + '|' + asm.id));
      isOverdueZero = r() < 0.08;
      const base = student.avgM != null ? student.avgM : 65;
      score = isOverdueZero ? 0 : clamp(Math.round(base + ri(r, -14, 12)), 5, 100);
    }

    totalWeightedScore += score * asm.weight;
    totalWeight += asm.weight;
    
    items.push({
      id: asm.id,
      name: S.settings.lang === 'ar' ? asm.name : asm.name_en,
      dueDate: asm.dueDate,
      maxMarks: asm.maxMarks,
      score,
      isOverdueZero,
      weight: asm.weight
    });
  });
  
  const average = totalWeight > 0 ? Math.round(totalWeightedScore / totalWeight) : 0;
  return { average, count: eligible.length, items };
}

/* Aggregate metrics computed bottom-up and cached on each node */
function allStudents(node){
  if(node.level==='class') return node.students;
  let out=[]; (node.children||[]).forEach(c=>out=out.concat(allStudents(c))); return out;
}
function schoolsUnder(node){ if(node.level==='school') return [node]; let out=[]; (node.children||[]).forEach(c=>{ if(c.level==='school') out.push(c); else out=out.concat(schoolsUnder(c)); }); return out; }
function metricsFor(node){
  if(node._m && node._m._dateRange === S.dateRange) return node._m;
  const st=allStudents(node);
  const n=st.length||1;
  const att=Math.round(st.reduce((a,s)=>a+s.att,0)/n);
  
  // Dynamic calculation based only on assessments past due date
  const mastery=Math.round(st.reduce((a,s)=>{
    const dyn = calculateDynamicStudentAverage(s, S.dateRange);
    return a + dyn.average;
  },0)/n);

  const atRisk=st.filter(s=>s.risk!=='ok').length;
  const high=st.filter(s=>s.risk==='risk').length;
  const acc=st.filter(s=>s.hasAcc).length;
  const girls=st.filter(s=>s.gender==='F').length;
  const r=rng(node.id.length*7+node.name.length*13);
  const schools = node.level==='class' ? [] : (node.level==='school' ? [node] : schoolsUnder(node));
  const offlineSchools = schools.filter(x=>x.connect==='offline').length;
  const onlineShare = schools.length ? Math.round((schools.length-offlineSchools)/schools.length*100) : 100;
  
  // Excused absence abuse calculation
  const totalExcused = Math.round(st.reduce((a,s)=>a + (s.excusedCount || (s.id.length%4)), 0));
  const totalAbsences = Math.max(1, Math.round(st.reduce((a,s)=>a + Math.max(1, Math.round((100 - s.att)/4)), 0)));
  const excusedAbuseRatio = Math.round((totalExcused / totalAbsences) * 100);

  // Automated Anomaly Detection Flags (High, Medium, Low)
  const anomalies = [];
  if (excusedAbuseRatio > 40) {
    anomalies.push({ type:'excused_spike', sev:'warn', title:TR('High excused absence ratio','ارتفاع غير معتاد بنسبة الأعذار المقبولة'), desc:TR(`Excused ratio ${excusedAbuseRatio}% exceeds 40% threshold`,`نسبة الأعذار ${excusedAbuseRatio}% تتجاوز الحد الطبيعي (٤٠%)`) });
  }
  if (node.level === 'school' && r() < 0.25) {
    anomalies.push({ type:'pending_grades', sev:'risk', title:TR('Pending grades overdue > 1 week','درجات معلّقة تجاوزت مهلة الأسبوع'), desc:TR('Grades pending past grace period — zero-default applied for statistical integrity','درجات معلّقة تجاوزت مهلة السماح — تم احتسابها صفرًا لحماية المؤشرات') });
  }
  if (node.level === 'class' && mastery >= 98) {
    anomalies.push({ type:'zero_variance', sev:'info', title:TR('Identical 100% scores without variance','فصل كامل بدرجة متطابقة دون تباين'), desc:TR('Zero standard deviation detected across class submissions','تم رصد انعدام الانحراف المعياري في درجات الفصل') });
  }

  const m={
    _dateRange: S.dateRange,
    students:st.length, attendance:att, mastery,
    atRisk, high, dropoutRiskPct:Math.round(high/n*100),
    accommodations:acc, girls, boys:st.length-girls,
    schools:schools.length, offlineSchools, onlineShare, staleSchools:Math.round(offlineSchools*0.45),
    uptime:(99+r()*0.9).toFixed(2), lowBandSuccess:Math.round(88+r()*11),
    teacherTraining:Math.round(75+r()*22), contentAccessible:Math.round(80+r()*18),
    teacherAttendance:Math.round(88+r()*11),
    totalExcused, excusedAbuseRatio, anomalies,
    anomaly: anomalies.length > 0,
    masteryGirls:clamp(mastery+ri(r,-3,5),10,99), masteryBoys:clamp(mastery+ri(r,-5,3),10,99),
    masteryAcc:clamp(mastery-ri(r,2,8),10,99), masteryNonAcc:clamp(mastery+ri(r,0,4),10,99),
  };
  node._m=m; return m;
}


/* =====================================================================
   AUTOMATED ANOMALY DETECTION & FLAGS ENGINE
   Rule-based irregular-behaviour detection over the real school tree.
   Every flag is CATEGORISED BY TYPE and RANKED BY SEVERITY so the
   administrative follow-up teams can triage and investigate effectively.

   Rules (all computed from data — no hard-coded demo cases):
     R1  grades pending  > 1 week past the assessment due date
     R2  zero score variance (e.g. a whole class recorded at 100%)
     R3  statistically improbable attendance (perfect streaks / peer outliers)
     R4  excused-absence ratio above the ministerial 40% threshold
     R5  roster & sync data-integrity breaks that invalidate the numbers
   ===================================================================== */

const NOW_MS = Date.parse('2026-05-05T09:00:00Z');   /* fixed "today" so the demo is deterministic */
const GRACE_DAYS = 7;                                 /* ministerial grace period after a due date */

const FLAG_SEV = {
  critical:{rank:4, en:'Critical',      ar:'حرج',      tone:'risk', ico:'\u{1F534}', sla:24},
  high:    {rank:3, en:'High',          ar:'مرتفع',    tone:'risk', ico:'\u{1F7E0}', sla:48},
  medium:  {rank:2, en:'Medium',        ar:'متوسّط',   tone:'warn', ico:'\u{1F7E1}', sla:96},
  low:     {rank:1, en:'Informational', ar:'روتيني',   tone:'info', ico:'\u{1F535}', sla:168},
};
const SEV_ORDER = ['critical','high','medium','low'];
const FLAG_TYPE = {
  grading:   {en:'Grading & submission',   ar:'الرصد والتسليم',        ico:'grading',  team:['Quality supervisor','الموجّه الفنّي']},
  integrity: {en:'Score integrity',        ar:'نزاهة الدرجات',         ico:'shield',   team:['Assessment QA unit','وحدة تدقيق التقييم']},
  attendance:{en:'Attendance integrity',   ar:'نزاهة الحضور',          ico:'calendar', team:['District follow-up team','فريق المتابعة بالإدارة']},
  excuses:   {en:'Excused-absence abuse',  ar:'إساءة استخدام الأعذار', ico:'alert',    team:['Health & records committee','لجنة السجلات والتقارير الطبية']},
  data:      {en:'Data quality',           ar:'جودة البيانات',         ico:'refresh',  team:['EMIS data stewards','أمناء بيانات EMIS']},
};
const TYPE_ORDER = ['grading','integrity','attendance','excuses','data'];
function sevLabel(k){ const s=FLAG_SEV[k]; return s?TR(s.en,s.ar):k; }
function typeLabel(k){ const t=FLAG_TYPE[k]; return t?TR(t.en,t.ar):k; }
function teamLabel(k){ const t=FLAG_TYPE[k]; return t?TR(t.team[0],t.team[1]):k; }
function flagStatusOf(f){ return (S.flagStatus&&S.flagStatus[f.id])||f.status; }
function statusLabel(k){ return TR(
  {open:'Open',inprogress:'Under investigation',resolved:'Resolved'}[k]||k,
  {open:'مفتوحة',inprogress:'قيد الفحص',resolved:'مُغلقة'}[k]||k); }

/* Which assessments are past their grace period as of "today". */
function overdueAssessments(){
  return ASSESSMENTS_TIMELINE.filter(function(a){ return !a.upcoming &&
    (Date.parse(a.dueDate+'T23:59:59Z') + GRACE_DAYS*DAY_MS) < NOW_MS; });
}
/* Deterministic submission ledger: has this class recorded this assessment, and how late? */
function classLedger(cls){
  if(cls._ledger) return cls._ledger;
  const out={};
  ASSESSMENTS_TIMELINE.forEach(function(a){
    const r=rng(hashStr(cls.id+'|'+a.id));
    const roll=r();
    /* most classes record on time; a minority slip; a few never submit at all */
    const recorded = roll > 0.11;
    const daysLate = recorded ? (roll>0.34 ? 0 : ri(r,1,12))
      : Math.max(GRACE_DAYS+1, Math.round((NOW_MS-Date.parse(a.dueDate+'T00:00:00Z'))/DAY_MS));
    out[a.id]={recorded:recorded, daysLate:daysLate, inflated:r()<0.06};
  });
  cls._ledger=out; return out;
}
/* Deterministic per-student recorded scores for one assessment in one class.
   A small deterministic minority of classes are recorded as a flat 100 — the
   inflation pattern R2 is designed to catch. The statistic is really computed. */
function classScores(cls, asmId){
  const led=classLedger(cls)[asmId];
  if(!led || !led.recorded) return null;
  if(led.inflated) return cls.students.map(function(){ return 100; });
  const r=rng(hashStr(cls.id+asmId+'sc'));
  return cls.students.map(function(s){
    return clamp(Math.round((s.mastery[TEACHER_SUBJECT]||s.avgM)+ri(r,-11,11)),12,100); });
}
function stdDev(arr){
  if(!arr||arr.length<2) return 0;
  const mean=arr.reduce(function(a,b){return a+b;},0)/arr.length;
  return Math.sqrt(arr.reduce(function(a,b){return a+(b-mean)*(b-mean);},0)/arr.length);
}
/* Deterministic longest consecutive full-attendance streak reported by a class. */
function attendanceStreak(cls){
  const r=rng(hashStr(cls.id+'streak'));
  const m=metricsFor(cls);
  return m.attendance>=99 ? ri(r,14,34) : m.attendance>=96 ? ri(r,6,15) : ri(r,1,7);
}
function flagId(seed){ return 'QA-'+(4000+(hashStr(seed)%5900)); }
function nodePath(node){
  const parts=[]; let n=node;
  while(n){ parts.unshift(nodeName(n)); n=n.parent; }
  return parts.slice(1).join(' › ') || nodeName(node);
}
function mkFlag(o){
  const sev=FLAG_SEV[o.sev];
  const seed=o.ruleId+'|'+o.scopeId;
  const ageH=(hashStr(seed)%(sev.sla*2))+1;
  o.id = flagId(seed);
  o.status = (hashStr(seed)%9===0) ? 'inprogress' : 'open';
  o.ageHours = ageH;
  o.slaLeft = sev.sla-ageH;
  o.path = (o.scopeId && NODE[o.scopeId]) ? nodePath(NODE[o.scopeId]) : '';
  return o;
}

/* ---------- the rules ---------- */
function ruleGradesOverdue(cls){
  const led=classLedger(cls), od=overdueAssessments();
  const late=od.filter(function(a){ const L=led[a.id]; return !L.recorded || L.daysLate>GRACE_DAYS; });
  if(!late.length) return null;
  const worst=late.reduce(function(a,b){ return led[a.id].daysLate>=led[b.id].daysLate?a:b; });
  const days=led[worst.id].daysLate;
  const sev = (late.length>=3 || days>=21) ? 'critical' : days>=14 ? 'high' : 'medium';
  return mkFlag({
    ruleId:'R1', type:'grading', sev:sev, scopeId:cls.id,
    rule: TR('Rule 1 — grades pending more than one week past the due date',
             'القاعدة ١ — درجات معلّقة تجاوزت مهلة الأسبوع بعد تاريخ الاستحقاق'),
    title: TR(late.length+' assessment'+(late.length>1?'s':'')+' unrecorded '+days+' days past due',
              arNum(late.length)+' تقييم لم يُرصد بعد '+arNum(days)+' يومًا من الاستحقاق'),
    detail: TR('Latest breach: “'+worst.name_en+'” (due '+worst.dueDate+'). Zero-default has been applied to protect the indicators until the marks are entered.',
               'أحدث تجاوز: «'+worst.name+'» (الاستحقاق '+worst.dueDate+'). طُبِّق الاحتساب بصفر مؤقتًا لحماية المؤشرات حتى يتم الرصد.'),
    metric:{ label:TR('Days past grace','أيام بعد المهلة'), value:days, threshold:GRACE_DAYS, unit:TR('d','ي') },
    actions:[
      {ico:'teacher', en:'Dispatch quality inspector', ar:'توجيه الموجّه الفنّي'},
      {ico:'clock',   en:'Grant 24h extension',        ar:'منح مهلة ٢٤ ساعة'},
      {ico:'search',  en:'View affected students',     ar:'كشف الطلاب المعنيين'}
    ]
  });
}
function ruleZeroVariance(cls){
  let hit=null;
  for(let i=0;i<ASSESSMENTS_TIMELINE.length;i++){
    const a=ASSESSMENTS_TIMELINE[i];
    const sc=classScores(cls,a.id); if(!sc) continue;
    const sd=stdDev(sc), mean=Math.round(sc.reduce(function(x,y){return x+y;},0)/sc.length);
    if(sd<1.5 && mean>=95){ hit={a:a,sd:sd,mean:mean,n:sc.length}; break; }
  }
  if(!hit) return null;
  const sev = (hit.sd===0 && hit.mean===100) ? 'high' : 'medium';
  return mkFlag({
    ruleId:'R2', type:'integrity', sev:sev, scopeId:cls.id,
    rule: TR('Rule 2 — an entire class recorded at identical full marks with no variation',
             'القاعدة ٢ — فصل كامل بدرجات متطابقة (١٠٠%) دون أي تباين'),
    title: TR('All '+hit.n+' students recorded at '+hit.mean+'% — standard deviation '+hit.sd.toFixed(1),
              arNum(hit.n)+' طالبًا بدرجة '+arNum(hit.mean)+'% — الانحراف المعياري '+hit.sd.toFixed(1)),
    detail: TR('“'+hit.a.name_en+'”: zero score dispersion across the whole roster is statistically implausible for a '+hit.n+'-student class. Handled as a support conversation, never a penalty.',
               '«'+hit.a.name+'»: انعدام التباين في درجات الفصل بالكامل غير محتمل إحصائيًّا لفصل من '+arNum(hit.n)+' طالبًا. تُعالَج بمحادثة دعم لا بعقوبة.'),
    metric:{ label:TR('Std. deviation','الانحراف المعياري'), value:+hit.sd.toFixed(1), threshold:1.5, unit:'σ' },
    actions:[
      {ico:'grading', en:'Request sample answer sheets', ar:'طلب عيّنة من أوراق الإجابة'},
      {ico:'zap',     en:'Schedule verification quiz',   ar:'جدولة تقييم موازٍ'},
      {ico:'check',   en:'Validate & resolve',           ar:'اعتماد وإغلاق'}
    ]
  });
}
function ruleImprobableAttendance(cls){
  const m=metricsFor(cls);
  const school=cls.parent; if(!school) return null;
  const peers=(school.children||[]).filter(function(c){return c.id!==cls.id;})
                                   .map(function(c){return metricsFor(c).attendance;});
  if(peers.length<2) return null;
  const pMean=peers.reduce(function(a,b){return a+b;},0)/peers.length;
  const pSd=Math.max(stdDev(peers),1);
  const z=(m.attendance-pMean)/pSd;
  const streak=attendanceStreak(cls);
  if(!(z>=2.4 || (m.attendance>=99 && streak>=14))) return null;
  const sev = (m.attendance>=99 && streak>=21) ? 'medium' : 'low';
  return mkFlag({
    ruleId:'R3', type:'attendance', sev:sev, scopeId:cls.id,
    rule: TR('Rule 3 — statistically improbable attendance figures',
             'القاعدة ٣ — أرقام حضور غير محتملة إحصائيًّا'),
    title: TR(m.attendance+'% attendance — '+z.toFixed(1)+'σ above sibling classes, '+streak+'-day perfect streak',
              'حضور '+arNum(m.attendance)+'% — أعلى من الفصول المجاورة بـ '+z.toFixed(1)+' انحراف، وسلسلة '+arNum(streak)+' يومًا كاملة'),
    detail: TR('Sibling classes in the same school average '+Math.round(pMean)+'%. Routine automated cross-check against offline sync timestamps and the excuse register.',
               'متوسّط الفصول الأخرى بالمدرسة '+arNum(Math.round(pMean))+'%. مطابقة آلية روتينية مع طوابع المزامنة دون اتصال وسجلّ الأعذار.'),
    metric:{ label:TR('Deviation from peers','الانحراف عن النظراء'), value:+z.toFixed(1), threshold:2.4, unit:'σ' },
    actions:[
      {ico:'shield', en:'Verify sync timestamps', ar:'مطابقة طوابع المزامنة'},
      {ico:'check',  en:'Confirm & clear',        ar:'تأكيد وإغلاق'}
    ]
  });
}
function ruleExcusedSpike(school){
  const m=metricsFor(school);
  if(m.excusedAbuseRatio<=40) return null;
  const sev = m.excusedAbuseRatio>=65 ? 'high' : 'medium';
  return mkFlag({
    ruleId:'R4', type:'excuses', sev:sev, scopeId:school.id,
    rule: TR('Rule 4 — excused-absence ratio above the 40% ministerial threshold',
             'القاعدة ٤ — نسبة الأعذار المقبولة تتجاوز الحد الوزاري (٤٠%)'),
    title: TR(m.excusedAbuseRatio+'% of absences recorded as excused ('+m.totalExcused+' sessions)',
              arNum(m.excusedAbuseRatio)+'% من الغياب مُسجَّل كعذر مقبول ('+arNum(m.totalExcused)+' حصة)'),
    detail: TR('Excused absences are stored as a state distinct from “present”, so a spike here means the excuse register needs auditing — not that attendance is healthy.',
               'يُسجَّل الغياب بعذر كحالة منفصلة تمامًا عن «حاضر»، لذا فارتفاع النسبة يعني حاجة سجلّ الأعذار للتدقيق — لا أنّ الحضور سليم.'),
    metric:{ label:TR('Excused ratio','نسبة الأعذار'), value:m.excusedAbuseRatio, threshold:40, unit:'%' },
    actions:[
      {ico:'calendar', en:'Request health-committee audit', ar:'طلب كشف التقارير الطبية'},
      {ico:'ministry', en:'Refer to district board',        ar:'إحالة للإدارة التعليمية'}
    ]
  });
}
function ruleDataIntegrity(school){
  const r=rng(hashStr('dq'+school.id));
  const dup=ri(r,0,4), unver=ri(r,0,26), stale=school.connect==='offline'?ri(r,1,9):0;
  if(dup<3 && unver<19 && stale<6) return null;
  const sev = dup>=3 ? 'critical' : unver>=19 ? 'high' : 'medium';
  const bits=[];
  if(dup>=3)    bits.push(TR(dup+' duplicate student records', arNum(dup)+' سجلّ طالب مكرّر'));
  if(unver>=19) bits.push(TR(unver+' unverified parent links', arNum(unver)+' رابط ولي أمر غير مُتحقَّق'));
  if(stale>=6)  bits.push(TR(stale+' records unsynced 48h+',   arNum(stale)+' سجلًّا دون مزامنة ٤٨ ساعة+'));
  return mkFlag({
    ruleId:'R5', type:'data', sev:sev, scopeId:school.id,
    rule: TR('Rule 5 — roster and sync integrity breaks that invalidate the indicators',
             'القاعدة ٥ — أخطاء سجلّات ومزامنة تُبطل صحّة المؤشرات'),
    title: bits.join(' · '),
    detail: TR('Learning numbers are meaningless on dirty data. Clear these before any report is run from this scope; the parent channel stays closed while links are unverified.',
               'أرقام التعلّم بلا معنى على بيانات غير نظيفة. عالِج هذه قبل إصدار أي تقرير من هذا النطاق؛ وتبقى قناة الأهالي مغلقة ما دامت الروابط غير مُتحقَّقة.'),
    metric:{ label:TR('Open data issues','مشكلات بيانات مفتوحة'), value:dup+unver+stale, threshold:19, unit:'' },
    actions:[
      {ico:'refresh', en:'Queue EMIS merge job', ar:'جدولة دمج سجلّات EMIS'},
      {ico:'userX',   en:'Hold parent channel',  ar:'تعليق قناة الأهالي'}
    ]
  });
}

/* Detect every flag inside a scope (memoised per node). */
function detectFlags(node){
  if(!node) return [];
  if(node._flags) return node._flags;
  const out=[];
  allClasses(node).forEach(function(c){
    [ruleGradesOverdue,ruleZeroVariance,ruleImprobableAttendance].forEach(function(fn){
      const f=fn(c); if(f) out.push(f); });
  });
  const schools = node.level==='class' ? [] : (node.level==='school' ? [node] : schoolsUnder(node));
  schools.forEach(function(s){
    [ruleExcusedSpike,ruleDataIntegrity].forEach(function(fn){
      const f=fn(s); if(f) out.push(f); });
  });
  out.sort(function(a,b){ return (FLAG_SEV[b.sev].rank-FLAG_SEV[a.sev].rank) || (a.slaLeft-b.slaLeft); });
  node._flags=out; return out;
}
/* Roll-ups used by the KPI tiles, the map and the flag workspace. */
function flagSummary(node){
  const all=detectFlags(node);
  const bySev={critical:0,high:0,medium:0,low:0}, byType={};
  TYPE_ORDER.forEach(function(k){ byType[k]=0; });
  all.forEach(function(f){ bySev[f.sev]++; byType[f.type]++; });
  const breached=all.filter(function(f){ return f.slaLeft<0; }).length;
  const resolved=Math.round(all.length*2.9)+37;   /* illustrative closed-case backlog */
  return {all:all, total:all.length, bySev:bySev, byType:byType, breached:breached,
          resolved:resolved, resolutionPct: Math.round(resolved/(resolved+all.length||1)*100)};
}
/* Apply the workspace filters the follow-up team has chosen. */
function filteredFlags(node){
  const F=S.flags||{};
  let list=detectFlags(node).slice();
  if(F.sev  && F.sev !=='all')   list=list.filter(function(f){ return f.sev===F.sev; });
  if(F.type && F.type!=='all')   list=list.filter(function(f){ return f.type===F.type; });
  if(F.status && F.status!=='all') list=list.filter(function(f){ return flagStatusOf(f)===F.status; });
  if(F.q){ const q=normDigits(F.q).toLowerCase();
    list=list.filter(function(f){ return (f.id+' '+f.title+' '+f.path+' '+f.rule).toLowerCase().indexOf(q)>=0; }); }
  if(F.sort==='sla')        list.sort(function(a,b){ return a.slaLeft-b.slaLeft; });
  else if(F.sort==='scope') list.sort(function(a,b){ return String(a.path).localeCompare(String(b.path)); });
  return list;
}

/* Role-based oversight scope: each admin role can only see its own node and below. */
const ADMIN_ROLES=[
  {id:'minister',    root:'min',              label:'Super admin · Government',   label_ar:'المسؤول الأعلى · الحكومة (المركز)'},
  {id:'governorate', root:'g-aswan',          label:'Governorate · Mudiriya',     label_ar:'المحافظة · المديرية'},
  {id:'idara',       root:'g-aswan-id0',      label:'Idara · district',           label_ar:'الإدارة التعليمية'},
  {id:'principal',   root:'g-aswan-id0-sc0',  label:'School level',               label_ar:'مستوى المدرسة'},
];
function adminRoleDef(){ return ADMIN_ROLES.find(r=>r.id===S.adminRole)||ADMIN_ROLES[0]; }
function subjectAverages(node){ const st=allStudents(node); const n=st.length||1; const o={};
  SUBJECTS.forEach(su=>o[su]=Math.round(st.reduce((a,s)=>a+s.mastery[su],0)/n)); return o; }
function schoolTeachers(school){ const r=rng(hashStr(school.id)); const avg=subjectAverages(school);
  return SUBJECTS.map(su=>{ const fn=pick(r,FIRST), sn=pick(r,SURNAMES);
    return {name:fn+' '+sn, name_ar:(FIRST_AR[fn]||fn)+' '+(SURNAMES_AR[sn]||sn), subject:su, avg:avg[su]}; }); }

/* The signed-in teacher teaches a real class in the tree (Aswan inclusion school) */
const TEACHER_CLASS = NODE['g-aswan-id0-sc0-cl0'];
const STUDENT_SELF  = TEACHER_CLASS.students[0];
/* A teacher can teach several classes (sections). They pick which one they're viewing. */
const TEACHER_CLASSES = (NODE['g-aswan-id0-sc0'] && NODE['g-aswan-id0-sc0'].children.length) ? NODE['g-aswan-id0-sc0'].children.slice(0,3) : [TEACHER_CLASS];
function teacherClass(){ return NODE[S.teacherClassId] || TEACHER_CLASS; }
/* A teacher only sees results for the subject they teach — here, Science (matches the quiz). */
const TEACHER_SUBJECT = 'Science';
const subjScore = (s)=> s.mastery[TEACHER_SUBJECT];
function subjStatus(s){
  const v=subjScore(s);
  if(v<50 || s.att<70) return {cls:'risk', em:uiIcon('alert', 14), word:TR('Needs targeted academic support','بحاجة لدعم تعليمي مستهدف')};
  if(v<65 || s.att<80) return {cls:'warn', em:uiIcon('clock', 14), word:TR('Requires periodic follow-up','يتطلب متابعة دورية مستمرة')};
  return {cls:'ok', em:uiIcon('check', 14), word:TR('Mastery on track — excellent performance','مستوى متميز ومحقق لنواتج التعلّم')};
}

/* ---------- application state ---------- */
const S={
  adminAnalyticsTab:'overview',   // BI pane: overview | geo | subjects | attendance | flags | actions
  biDensity:'comfortable',        // comfortable | compact — lets an analyst fit more above the fold
  dateRange:'to_date',
  activeDrilldown:null,
  // ---- anomaly-flag workspace (rule-based automated QA) ----
  flags:{ sev:'all', type:'all', status:'all', q:'', sort:'sev' },
  flagStatus:{},                  // flagId -> 'open' | 'inprogress' | 'resolved' (follow-up team actions)
  flagOpen:null,                  // flagId whose case card is expanded
  liveGradingClass:{},
  phase2Preview:false,
  route:'login',          // login | teacher | student | admin
  view:'dashboard',       // sub-view per role
  settings:{ lang:'ar', textSize:0, hc:false, motion:false, spacing:false, dark:false, readAloud:false, enterAdvance:false, speed:'normal', devNotes:false },
  a11yOpen:false,
  control:{ securityPassed:false, q1:null, q2:null, view:'grades', confirmStep:0, confirmed:{}, reviewedAll:false, examType:'midterm' },
  selectedStudent:null,   // teacher trajectory drilldown
  adminPath:['min'],      // breadcrumb stack of node ids
  adminRole:'minister',   // minister | governorate | idara | principal — caps what's visible
  cmpMetric:'attendance', // admin comparison chart: which metric to compare children by
  adminScopeLabel:'Ministry (national)',
  reveal:false,           // identifiable view toggle (logged)
  equity:'none',          // none | gender | disability
  auditLog:[],
  // assessment-taking transient state (student)
  exam:null,
  contentOpen:null,
  toastTimer:null,
  onboard:null,           // {role, step} while the welcome tour is showing
  onboarded:{},           // roles whose tour has been seen this session
  childId:null,           // parent's selected child (defaults to STUDENT_SELF)
  parentVerified:false,   // parent identity/binding gate: false | true | 'locked'
  parentRead:true,        // parent read-aloud mode ON by default (but never autoplays before a tap)
  parentReadChosen:false, // whether the parent has made the explicit first-run choice
  _gestured:false,        // becomes true on the parent's first tap (unlocks audio; browser-safe)
  _spokenKey:'',          // last page auto-read, so a page reads once on open (no loops)
  gradeExam:{type:'monthly', date:'', name:''}, // teacher gradebook: which exam these marks are for
  assessMode:'manual',    // assessments default to MANUAL grading; 'auto' only for in-app quizzes
  subjectOpen:null,       // student: which subject card is open
  subjectTab:'lessons',   // student: lessons | quiz | saved
  currentUnit:{},         // teacher-controlled "this week" pointer per subject (students are never locked out)
  attSubmitted:null,      // {when, summary} once the teacher submits attendance for the day
  attDay:0,              // attendance day offset: 0 = today, -1 = yesterday, etc. (past days are read-only)
  gradesSubmitted:null,   // {when} once the teacher submits marks
  gradePhoto:null,        // optional paper-register photo filename kept with the marks (proof)
  attDirty:false, gradesDirty:false, // recorded-but-not-submitted guard (#sync reminder)
  pendingNav:null,        // where the teacher was heading when reminded to submit first
  confirm:null,           // {kind:'attendance'|'grades'} when an all-default safety check is showing
  settingsOpen:false,     // full Settings page open over the current view
  quizMarks:{},           // teacher's quiz-score overrides, keyed 'unitId:studentId' — separate from exam grades
  doneContent:[],         // student: ids of lessons opened (positive progress only)
  savedContent:[],        // student: ids saved for offline
  coord:{online:false, queue:[], entry:null, lastReceipt:null, mode:null}, // mode: null=choose, 'system', 'upload'
  net:{ status:'online', online:true, queue:[], offlineSeen:false, notice:null }, // 3 states: online | offline(caching) | nocache(can't store)      // app-wide connectivity + offline upload queue (teacher/student)
  session:null,                        // {role,user,ip,device,since} current login (for the access log)
  securityLog:[],                      // login + sensitive-action events
  pilotDismissed:false,                // amber pilot-framing banner — stays gone once dismissed this session
  _pilotAnnounced:false,               // ensures the pilot banner is announced to screen readers only once
  deviceMode:null,                     // 'tablet' or 'own' — preserved from auth flow for privacy gating
  justifyOpen:false,                   // grade-correction justification modal
  gradeUnlockReason:null,              // set when a teacher has justified re-opening locked marks
  report:{ type:'exec', scopeId:null }, // admin report builder: which report + which scope
  auth:null,           // role-specific mock sign-in: {role, step:'id'|'otp'|'pick', pickedStudent}
  sys:{ tier:'super', view:'overview', reveal:{}, editing:null, pending:[], incident:null }, // system-administration console
  videoOpen:null,      // in-platform video player overlay (related videos open here, never leave the app)
  liteOpen:null, pdfOpen:null,       // lessonId -> when set, shows the lightweight inline text reader instead of PDF
  interactiveOpen:null, // lessonId -> shows the interactive guided reader
  ixSec:0,             // current section in interactive reader
  ixMaxSec:0,          // furthest section revealed
  ixGuess:{},          // guess-first answers {unitIdx-secIdx: pickedIndex}
  ixTry:{},            // try-this open/close {unitIdx-secIdx: bool}
  ixTerm:null,         // active glossary term popup
  // Interactive games state
  gameCat:'sci',       // games: category (sci | ar | math)
  gameTab:'ph',        // games: active tab
  gameState:{},        // games: per-game transient state
  saveLevel:{},        // lessonId -> 'spine'(outline only) | 'full'(with media): two-tier offline
  tpd:{ open:null, done:{} }, // teacher professional development (CPD modules + communities)
  teacherClassId: TEACHER_CLASS.id, // which of the teacher's classes is being viewed
  announceCompose:null, // teacher announcement compose overlay
  announcements:[
    {id:'a1', en:{t:'Science experiment tomorrow', b:'Please bring your science notebook for tomorrow\u2019s water-cycle experiment.'}, ar:{t:'تجربة العلوم غدًا', b:'يرجى إحضار دفتر العلوم لتجربة دورة الماء غدًا.'}, students:true, parentsUrgent:false, ts:Date.now()-3600e3},
  ],
  doneQuiz:{},            // student: quizIds completed (official, non-practice)
};

/* student-visible content catalogue (born-accessible metadata) */
const SUBJECT_ICON = {
  'Arabic': uiIcon('arabic', 22),
  'Mathematics': uiIcon('math', 22),
  'Science': uiIcon('science', 22),
  'English': uiIcon('english', 22),
  'Social Studies': uiIcon('social', 22)
};
/* Inline SVG illustrations (decorative, self-contained so they work fully offline) */
const ILLUS={
  read:`<svg viewBox="0 0 320 180" role="img" aria-label="An open book illustration" style="width:100%;height:auto"><rect width="320" height="180" rx="14" fill="var(--teal-050)"/><path d="M60 50c30-14 70-14 100 0 30-14 70-14 100 0v90c-30-14-70-14-100 0-30-14-70-14-100 0z" fill="#fff" stroke="var(--teal-700)" stroke-width="3"/><line x1="160" y1="50" x2="160" y2="140" stroke="var(--teal-700)" stroke-width="3"/><g stroke="var(--teal-300,#9cc)" stroke-width="3"><line x1="80" y1="72" x2="140" y2="72"/><line x1="80" y1="88" x2="140" y2="88"/><line x1="80" y1="104" x2="140" y2="104"/><line x1="180" y1="72" x2="240" y2="72"/><line x1="180" y1="88" x2="240" y2="88"/><line x1="180" y1="104" x2="240" y2="104"/></g></svg>`,
  num:`<svg viewBox="0 0 320 180" role="img" aria-label="A fraction bar and number line illustration" style="width:100%;height:auto"><rect width="320" height="180" rx="14" fill="var(--teal-050)"/><g><rect x="40" y="40" width="240" height="34" rx="6" fill="#fff" stroke="var(--teal-700)" stroke-width="3"/><rect x="40" y="40" width="80" height="34" rx="6" fill="var(--ok-700)" opacity=".85"/><line x1="120" y1="40" x2="120" y2="74" stroke="var(--teal-700)" stroke-width="3"/><line x1="200" y1="40" x2="200" y2="74" stroke="var(--teal-700)" stroke-width="3"/></g><line x1="40" y1="120" x2="280" y2="120" stroke="var(--teal-700)" stroke-width="3"/><g fill="var(--teal-700)">${[0,1,2,3].map(i=>`<circle cx="${40+i*80}" cy="120" r="6"/>`).join('')}</g><text x="34" y="150" font-size="16" fill="var(--ink-2)">0</text><text x="272" y="150" font-size="16" fill="var(--ink-2)">1</text></svg>`,
  sci:`<svg viewBox="0 0 320 180" role="img" aria-label="The water cycle: sun, cloud, rain and sea" style="width:100%;height:auto"><rect width="320" height="180" rx="14" fill="var(--info-050,#eaf1ff)"/><circle cx="60" cy="48" r="22" fill="#f6b73c"/><ellipse cx="200" cy="55" rx="58" ry="26" fill="#fff" stroke="var(--teal-700)" stroke-width="2"/><g stroke="var(--info-700)" stroke-width="3"><line x1="175" y1="86" x2="170" y2="108"/><line x1="200" y1="86" x2="195" y2="108"/><line x1="225" y1="86" x2="220" y2="108"/></g><path d="M0 140h320v40H0z" fill="var(--info-700)" opacity=".75"/><path d="M0 140q40-14 80 0t80 0 80 0 80 0v40H0z" fill="var(--info-700)"/><path d="M95 120c0-14 14-22 26-18" fill="none" stroke="var(--ok-700)" stroke-width="3" marker-end="url(#a)"/><defs><marker id="a" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M0 0l8 4-8 4z" fill="var(--ok-700)"/></marker></defs></svg>`,
  lang:`<svg viewBox="0 0 320 180" role="img" aria-label="Two speech bubbles saying hello" style="width:100%;height:auto"><rect width="320" height="180" rx="14" fill="var(--teal-050)"/><path d="M40 40h130a14 14 0 0 1 14 14v44a14 14 0 0 1-14 14H80l-22 20v-20H40a14 14 0 0 1-14-14V54A14 14 0 0 1 40 40z" fill="#fff" stroke="var(--teal-700)" stroke-width="3"/><text x="56" y="86" font-size="22" font-weight="800" fill="var(--teal-900)">Hello</text><path d="M150 96h120a14 14 0 0 1 14 14v36a14 14 0 0 1-14 14h-70l-18 16v-16h-32a14 14 0 0 1-14-14v-36a14 14 0 0 1 14-14z" fill="var(--teal-700)"/><text x="176" y="140" font-size="20" font-weight="800" fill="#fff" direction="rtl">مرحبا</text></svg>`,
  world:`<svg viewBox="0 0 320 180" role="img" aria-label="A map with the river Nile" style="width:100%;height:auto"><rect width="320" height="180" rx="14" fill="#f3e7c9"/><path d="M150 20c-8 30 6 50-4 80s4 50-2 64" fill="none" stroke="var(--info-700)" stroke-width="8" stroke-linecap="round"/><g fill="var(--risk-700)"><circle cx="146" cy="60" r="6"/><circle cx="150" cy="120" r="6"/></g><text x="160" y="60" font-size="13" fill="var(--ink)">Cairo</text><text x="160" y="124" font-size="13" fill="var(--ink)">Aswan</text></svg>`,
};
const SUBJECT_ILLUS={'Arabic':'read','Mathematics':'num','Science':'sci','English':'lang','Social Studies':'world'};
const ILLUS_DESC={
  read:'A simple drawing of an open book with lines of text on both pages, in teal on a pale background.',
  num:'A bar split into three equal parts with the first part shaded green, above a number line from 0 to 1 — showing a fraction.',
  sci:'The water cycle: a yellow sun warms the sea on the right; water rises to a white cloud; blue lines show rain falling into the sea; a green arrow shows the water rising again in a loop.',
  lang:'Two speech bubbles — one says “Hello” in English, the other “مرحبا” in Arabic — showing a greeting in both languages.',
  world:'A simple map of Egypt with the blue river Nile down the middle, marked Cairo near the top and Aswan near the bottom.',
};
const ILLUS_DESC_AR={
  read:'رسم بسيط لكتاب مفتوح وعليه سطور نصّ على الصفحتين، باللون الأزرق المخضرّ على خلفية فاتحة.',
  num:'شريط مقسوم إلى ثلاثة أجزاء متساوية، الجزء الأوّل مظلّل بالأخضر، فوق خطّ أعداد من 0 إلى 1 — يوضّح كسرًا.',
  sci:'دورة الماء: شمس صفراء تُسخّن البحر على اليمين؛ يتصاعد الماء إلى سحابة بيضاء؛ خطوط زرقاء تُظهر المطر يسقط في البحر؛ سهم أخضر يُظهر صعود الماء من جديد في حلقة.',
  lang:'فقاعتا كلام — واحدة تقول «Hello» بالإنجليزية والأخرى «مرحبا» بالعربية — تُظهران تحيّة باللغتين.',
  world:'خريطة بسيطة لمصر ونهر النيل الأزرق في المنتصف، وعليها القاهرة في الأعلى وأسوان في الأسفل.',
};
function illusDesc(c){ const k=SUBJECT_ILLUS[c.subject]; return (S.settings.lang==='ar'?ILLUS_DESC_AR:ILLUS_DESC)[k]||''; }
function glossaryFor(c){
  const EN={
    Science:[['Evaporate','When water heats up and turns into invisible vapour that rises into the air.'],['Condense','When vapour cools and becomes tiny drops of water, making clouds.'],['Precipitation','Water falling from clouds as rain, snow or hail.']],
    Mathematics:[['Numerator','The top number in a fraction — how many parts you have.'],['Denominator','The bottom number — how many equal parts the whole is split into.']],
    Arabic:[['حرف','A single Arabic letter that stands for one sound.'],['كلمة','A word — letters joined together to carry a meaning.']],
    English:[['Greeting','Words we say to welcome someone, like “hello”.'],['Phrase','A small group of words that belong together.']],
    'Social Studies':[['Nile','The long river that flows through Egypt from south to north.'],['Delta','The fan-shaped area where the Nile spreads out to meet the sea.']],
  };
  const AR={
    Science:[['التبخّر','عندما يَسخن الماء فيتحوّل إلى بخار غير مرئيّ يصعد في الهواء.'],['التكاثف','عندما يبرد البخار فيتحوّل إلى قطرات ماء صغيرة تُكوّن السحب.'],['الهطول','سقوط الماء من السحب مطرًا أو ثلجًا أو بَرَدًا.']],
    Mathematics:[['البَسط','العدد العلويّ في الكسر — كم جزءًا لديك.'],['المقام','العدد السفليّ — إلى كم جزءٍ متساوٍ قُسِّم الكلّ.']],
    Arabic:[['حرف','رمز عربيّ واحد يدلّ على صوت واحد.'],['كلمة','حروف مجتمعة تحمل معنًى.']],
    English:[['Greeting','كلمات نرحّب بها بشخص، مثل «hello».'],['Phrase','مجموعة صغيرة من الكلمات تترابط معًا.']],
    'Social Studies':[['النيل','النهر الطويل الذي يجري في مصر من الجنوب إلى الشمال.'],['الدلتا','المنطقة المروحيّة حيث يتفرّع النيل ليصبّ في البحر.']],
  };
  return (S.settings.lang==='ar'?AR:EN)[c.subject]||[];
}
function relatedVideos(c){
  const AR=S.settings.lang==='ar';
  const P={
    madrasetna:{name:AR?'مدرستنا':'Madrasetna', url:'https://madrasetna-egypt.com/', tag:AR?'قناة الوزارة التعليمية':'Ministry education channel'},
    ekb:{name:AR?'بنك المعرفة (EKB)':'Egyptian Knowledge Bank', url:'https://www.ekb.eg/', tag:AR?'بوابة التعلّم الإلكتروني':'official e-learning portal'},
    nafham:{name:AR?'نفهم':'Nafham', url:'https://www.nafham.com/', tag:AR?'فيديوهات على المنهج المصري':'Egyptian-curriculum videos'},
    madrasetnaplus:{name:AR?'مدرستنا بلس':'Madrasetna Plus', url:'https://madrasetnaplus.eg/', tag:AR?'منصّة الوزارة التفاعلية':'Ministry interactive platform'},
  };
  // Per-unit videos take priority (keyed by lesson id); fall back to subject defaults.
  const byUnit={
    sc1:[['madrasetnaplus', AR?'الغلاف الحيوي واستقراره — الجزء الأول':'Biosphere and its Stability — Part 1','','','https://madrasetnaplus.eg/s3/gen/b2ffd13f-07f6-46e5-9bc9-d91f19c5b4cb.mp4']],
    sc2:[['madrasetna', AR?'الخواص الفيزيائية للماء':'Physical properties of water','6:00','Ex0B0gf7I0M'], ['ekb', AR?'الكثافة والحرارة النوعية':'Density and specific heat','4:30']],
    c3:[['madrasetna', AR?'دورة الماء — شرح مبسّط':'The water cycle — simple explanation','6:12','EWjBscnPzsE'], ['ekb', AR?'حالات الماء: تجربة':'States of water: an experiment','4:30']],
  };
  const bySub={
    Science:[['madrasetna', AR?'النظام البيئي المائي':'The aquatic ecosystem','6:00'], ['ekb', AR?'حالات الماء: تجربة':'States of water: an experiment','4:30']],
    Mathematics:[['madrasetna', AR?'فهم الكسور':'Understanding fractions','7:05'], ['nafham', AR?'الكسور على خطّ الأعداد':'Fractions on a number line','5:20']],
    Arabic:[['madrasetna', AR?'الحروف وأصواتها':'Letters and their sounds','8:00'], ['ekb', AR?'قراءة الكلمات القصيرة':'Reading short words','5:45']],
    English:[['madrasetna', AR?'التحيّات بالإنجليزية':'Greetings in English','4:10'], ['nafham', AR?'عبارات يوميّة':'Everyday phrases','6:00']],
    'Social Studies':[['madrasetna', AR?'نهر النيل':'The River Nile','7:30'], ['ekb', AR?'خريطة مصر':'A map of Egypt','5:15']],
  };
  const list = byUnit[c.id] || bySub[c.subject] || [];
  return list.map(([k,title,dur,yt,extUrl])=>({...P[k], title, dur, yt, extUrl, ytUrl: yt?('https://www.youtube.com/watch?v='+yt):(extUrl||'')}));
}
function videoOverlay(){
  if(!S.videoOpen) return '';
  const v=S.videoOpen; const AR=S.settings.lang==='ar';
  return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="vo-h" id="videobox"><div class="coach" style="max-width:660px">
    <div class="flex between center" style="gap:.6rem"><h2 id="vo-h" style="margin:0;font-size:1.2rem">${esc(v.title)}</h2>
      <button type="button" class="btn ghost sm" data-video-close>✕ ${AR?'إغلاق':'Close'}</button></div>
    <p class="small muted" style="margin:.2rem 0 .6rem">${esc(v.name)} · ${esc(v.tag)} · ${v.dur}</p>
    ${v.extUrl && !v.yt ? `<div style="aspect-ratio:16/9;background:#0c1a1f;border-radius:12px;overflow:hidden">
      <video width="100%" height="100%" controls playsinline preload="metadata" style="display:block;border-radius:12px" poster="">
        <source src="${esc(v.extUrl)}" type="video/mp4">
        <p style="color:#fff;padding:1rem;text-align:center">${AR?'متصفّحك لا يدعم تشغيل الفيديو.':'Your browser does not support video playback.'} <a href="${esc(v.extUrl)}" target="_blank" rel="noopener" style="color:#6ee7b7">${AR?'شاهد هنا':'Watch here'}</a></p>
      </video>
    </div>
    <p style="font-size:.78rem;color:var(--ink3);margin-top:.4rem;text-align:center">${AR?'المصدر: مدرستنا بلس — منصّة وزارة التربية والتعليم':'Source: Madrasetna Plus — Ministry of Education platform'}</p>` :
    v.yt ? `<div style="aspect-ratio:16/9;background:#0c1a1f;border-radius:12px;overflow:hidden">
      <iframe id="yt-frame" width="100%" height="100%" src="https://www.youtube.com/embed/${esc(v.yt)}?rel=0&modestbranding=1&playsinline=1&cc_load_policy=1" title="${esc(v.title)}" style="border:0;display:block" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
    <p class="small" style="margin:.5rem 0 0">${AR?'لا يظهر الفيديو؟':'Video not showing?'} <a href="${esc(v.ytUrl)}" target="_blank" rel="noopener">${AR?'افتحه على يوتيوب ↗':'Open it on YouTube ↗'}</a></p>` : `<div role="img" aria-label="${AR?'مشغّل فيديو داخل المنصّة':'In-platform video player'}" style="aspect-ratio:16/9;background:#0c1a1f;color:#fff;border-radius:12px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:.4rem;text-align:center;padding:1rem">
      <span style="font-size:2.6rem" aria-hidden="true">▶</span>
      <span class="small">${AR?'يُشغَّل داخل المنصّة — غير مُشغَّل في هذا النموذج':'Plays inside the platform — not played in this prototype'}</span>
    </div>`}
    <p class="small" style="margin:.6rem 0 0"><span class="tag ok">🔒 ${AR?'داخل المنصّة':'Stays in the platform'}</span> <span class="tag">🆑 ${AR?'تعليقات بالعربية':'Arabic captions'}</span> <span class="tag">📥 ${AR?'متاح دون اتصال':'Available offline'}</span></p>
    <details class="mt"><summary style="cursor:pointer">📝 ${AR?'النصّ الكامل':'Transcript'}</summary><p class="small" style="margin:.3rem 0 0">${esc(v.transcript||'')}</p></details>
    <p class="tiny muted mt">${v.yt ? (AR?('فيديو مضمَّن داخل المنصّة — يُشغَّل هنا دون مغادرة الصفحة.'):('Embedded video inside the platform — it plays right here without leaving the page.')) : (AR?('مضمَّن من '+esc(v.name)+' داخل منصّتنا — لا يغادر الطالب المنصّة. وفي الإنتاج تُستضاف النسخة المرخّصة وتُخزَّن للعمل دون اتصال.'):('Embedded from '+esc(v.name)+' inside Manassa — the student never leaves. In production the licensed copy is hosted and cached for offline use.'))}</p>
  </div></div>`;
}
function interactiveReader(c,AR){
  const IX_GLOSSARY = {
    'التبخر':{d:'تحوّل الماء من السائلة إلى الغازية بفعل الحرارة',i:'☀️'},
    'التكثف':{d:'تحوّل بخار الماء إلى قطيرات سائلة — هكذا تتكوّن السحب',i:'☁️'},
    'النتح':{d:'إطلاق النبات لبخار الماء من ثغور أوراقه',i:'🌿'},
    'الرابطة الهيدروجينية':{d:'تجاذب ضعيف بين جزيئات الماء يمنحه خواصه الفريدة',i:'🔗'},
    'قطبية':{d:'توزيع غير متساوٍ للشحنة — الأكسجين سالب والهيدروجين موجب جزئيًّا',i:'⚡'},
    'الكثافة':{d:'كتلة وحدة الحجوم — الماء أقصى كثافة عند 4°C',i:'⚖️'},
    'الحرارة النوعية':{d:'كمية الحرارة لرفع حرارة 1kg بمقدار 1K — الماء = 4200',i:'🌡️'},
    'pH':{d:'مقياس الحمضية/القاعدية من 0 إلى 14. الماء النقي = 7',i:'🧪'},
    'التسرب':{d:'تسرّب المياه عبر التربة والصخور لتكوين المياه الجوفية',i:'💧'},
  };
  const IX_UNITS = [
    {sections:[
      {t:'الغلاف المائي',body:'يميّز الغلاف المائي كوكب الأرض عن بقية الكواكب. تغطي المياه حوالي <b>70%</b> من سطح الأرض.<br><br>لكن هل تعلم أن معظم هذا الماء لا يصلح للشرب؟<br><table class="ix-tbl"><tr><th>النوع</th><th>النسبة</th></tr><tr><td>مياه مالحة</td><td>97%</td></tr><tr><td>مياه عذبة</td><td>~1%</td></tr><tr><td>متجمدة</td><td>~2%</td></tr></table>',
        guess:{q:'كم نسبة المياه التي تغطي سطح الأرض؟',opts:['30%','50%','70%'],ans:2,ok:'صحيح! 70% — لكن 97% منه مالح!'},
        dyk:'مصر تحصل على 97% من مياهها العذبة من نهر النيل — أطول أنهار العالم!',
        activity:{type:'truefalse',title:'صح أم خطأ؟',items:[
          {text:'الماء يغطي 50% من سطح الأرض.',ans:false,why:'يغطي 70% وليس 50%.'},
          {text:'معظم مياه الأرض مالحة وغير صالحة للشرب مباشرة.',ans:true,why:'97% من مياه الأرض مالحة.'},
          {text:'المياه المتجمدة تشكّل معظم المياه العذبة.',ans:true,why:'~2% متجمدة مقابل ~1% سائلة عذبة.'}
        ]}},
      {t:'دورة الماء في الطبيعة',body:'الماء يتحرك باستمرار بين البحار والجو واليابسة:<br><br>☀️ <b>التبخر</b> — الشمس تحوّل الماء إلى بخار<br>🌿 <b>النتح</b> — النباتات تطلق بخار الماء<br>☁️ <b>التكثف</b> — البخار يكوّن السحب<br>🌧️ <b>الترسيب</b> — المطر يسقط<br>💧 <b>التسرب</b> — الماء يتسرب للمياه الجوفية',
        tryThis:{title:'جرّب بنفسك!',body:'ضع ماءً ساخنًا في كوب وغطّه بطبق بارد. انتظر دقيقة.<br><br>القطيرات على الطبق = <b>التكثف</b> — نفس ما يحدث في السحب!',mat:'كوب، ماء ساخن، طبق'}},
      {t:'التركيب الكيميائي للماء',body:'جزيء الماء = ذرة أكسجين + ذرتين هيدروجين<br><br>H — O — H بزاوية 104.5°<br><br>الأكسجين يشكّل <b>88.89%</b> من كتلة الجزيء.<br><br>ذرة الأكسجين تسحب الإلكترونات ← شحنة سالبة جزئية<br>ذرات الهيدروجين ← شحنة موجبة جزئية<br><br>هذا = <b>قطبية</b> جزيء الماء.',
        guess:{q:'ما العنصران اللذان يتكون منهما جزيء الماء؟',opts:['كربون وهيدروجين','أكسجين وهيدروجين','نيتروجين وأكسجين'],ans:1,ok:'بالضبط! H₂O = هيدروجين + أكسجين.'}},
      {t:'الرقم الهيدروجيني pH',body:'مقياس حمضية أو قاعدية المحاليل من 0 إلى 14.<br><br>🔴 <b>0–6</b> = حمضي (عصير ليمون)<br>⚪ <b>7</b> = متعادل (ماء نقي)<br>🟢 <b>8–14</b> = قاعدي (صابون)<br><table class="ix-tbl"><tr><th>المادة</th><th>pH</th></tr><tr><td>ماء نقي</td><td>7</td></tr><tr><td>ماء بحر</td><td>7.5–8.4</td></tr><tr><td>سحب</td><td>4.5–5</td></tr></table>',
        tryThis:{title:'اختبر منزلك!',body:'اغمس ورقة عباد الشمس في:<br>• ماء صنبور<br>• عصير ليمون<br>• ماء بصابون<br><br>أيّها حمضي وأيّها قاعدي؟',mat:'ورق عباد شمس، ليمون، صابون'},
        dyk:'مياه أمطار القاهرة حمضية قليلاً (pH ≈ 5) بسبب CO₂ في الهواء!'},
    ]},
    {sections:[
      {t:'كثافة الماء',body:'<b>الكثافة</b> = كتلة وحدة الحجوم.<br><br>الماء النقي أقصى كثافته عند <b>4°C</b> = 1g/cm³.<br><br>الغريب: معظم المواد تزداد كثافتها كلما بردت. لكن الماء <b>يتمدد</b> تحت 4°C!<br><br>هذا يعني أن الثلج <b>أقل كثافة</b> من الماء ← لذلك يطفو.',
        guess:{q:'عند أي درجة حرارة يكون الماء أكثر كثافة؟',opts:['0°C','4°C','100°C'],ans:1,ok:'نعم! عند 4°C بالضبط — سلوك شاذّ يميّز الماء.'},
        dyk:'لولا هذه الخاصية لتجمّدت البحيرات من القاع وماتت كل الأسماك!',
        activity:{type:'truefalse',title:'صح أم خطأ؟',items:[
          {text:'الماء يكون أكثر كثافة عند 0°C.',ans:false,why:'أقصى كثافة عند 4°C وليس 0°C.'},
          {text:'الثلج يطفو لأن كثافته أقل من الماء السائل.',ans:true,why:'عند التجمد تتباعد الجزيئات فتقل الكثافة.'},
          {text:'كل المواد تتمدد عند التبريد مثل الماء.',ans:false,why:'الماء شاذ — معظم المواد تنكمش عند التبريد.'}
        ]}},
      {t:'لماذا يطفو الثلج؟',body:'تحت 4°C:<br><br>1. جزيئات الماء تتباعد (الرابطة الهيدروجينية)<br>2. الماء يتمدد ← كثافته تقل<br>3. الجليد يطفو على السطح<br>4. طبقة عازلة حرارية<br>5. الماء تحتها سائل ← الكائنات تعيش!<br><br>🐟 الجليد يطفو → طبقة عازلة → الكائنات تنجو.',
        tryThis:{title:'شاهد بعينك!',body:'ضع مكعب ثلج في كوب ماء — يطفو.<br><br>الآن ضعه في زيت نباتي. ماذا يحدث؟<br><br>(يغرق! لأن كثافة الزيت أقل من الثلج)',mat:'ثلج، ماء، زيت'}},
      {t:'الحرارة النوعية',body:'كمية الحرارة لرفع حرارة 1kg بمقدار 1K.<br><br>الماء النقي: <b>4200 J/kg.K</b> — أعلى بكثير من أي سائل!<br><table class="ix-tbl"><tr><th>المادة</th><th>الحرارة النوعية</th></tr><tr><td>نحاس</td><td>390</td></tr><tr><td>ألومنيوم</td><td>900</td></tr><tr><td>ماء مالح</td><td>3900</td></tr><tr><td><b>ماء نقي</b></td><td><b>4200</b></td></tr></table>',
        guess:{q:'لماذا رمال الشاطئ أسخن من البحر رغم نفس الشمس؟',opts:['الرمال أقرب للشمس','الماء حرارته النوعية أعلى','البحر في الظل'],ans:1,ok:'بالضبط! الحرارة النوعية العالية تجعل الماء يسخن ببطء.'},
        dyk:'لهذا الإسكندرية أكثر اعتدالاً من أسيوط — البحر ينظّم الحرارة!'},
      {t:'نسيم البحر والحسابات',body:'🏖️ <b>نهارًا:</b> اليابسة تسخن أسرع → الهواء يرتفع → هواء البحر يأتي = <b>نسيم البحر</b><br><br>🌙 <b>ليلاً:</b> اليابسة تبرد أسرع → العكس = <b>نسيم البر</b><br><br><b>المعادلة:</b><br>Q = m × c × Δt',
        tryThis:{title:'احسب!',body:'تسخين 0.5 كجم ماء من 20°C إلى 70°C:<br><br>Q = 0.5 × 4200 × 50 = <b>105,000 جول</b><br><br>جرّب: نفس الكتلة من النحاس؟ (c = 390)',mat:'ورقة وقلم فقط!'}},
    ]}
  ];
  const uIdx = c.id==='sc1'?0:1;
  const unit = IX_UNITS[uIdx];
  const sec = unit.sections[S.ixSec] || unit.sections[0];
  const totalSec = unit.sections.length;
  const progress = Math.round(((S.ixSec+1)/totalSec)*100);
  const gKey = uIdx+'-'+S.ixSec;

  // Highlight glossary terms in body
  let body = sec.body;
  const termKeys = Object.keys(IX_GLOSSARY).sort((a,b)=>b.length-a.length);
  termKeys.forEach(t=>{
    const re = new RegExp('('+t.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')+')(?!</b>)','g');
    body = body.replace(re, '<span class="ix-term" data-ix-term="'+t+'">$1</span>');
  });

  // Build HTML
  let h = `<style>
.ix-wrap{background:#fafafa;border-radius:12px;border:1px solid var(--line);padding:0;overflow:hidden}
.ix-progress{height:5px;background:var(--line)}.ix-progress-fill{height:100%;background:linear-gradient(90deg,var(--teal-700),#10b981);transition:width .4s;border-radius:0 3px 3px 0}
.ix-dots{display:flex;justify-content:center;gap:6px;padding:10px 12px;background:#fff;border-bottom:1px solid var(--line)}
.ix-dot{width:26px;height:26px;border-radius:50%;border:2px solid var(--line);font-size:.7rem;font-weight:800;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;background:#fff;color:var(--teal-700);transition:all .2s}
.ix-dot.on{background:var(--teal-700);color:#fff;border-color:var(--teal-700)}.ix-dot.done{background:var(--teal-050);border-color:var(--teal-700)}.ix-dot.locked{opacity:.35;cursor:default}
.ix-content{padding:16px 18px}
.ix-sec-label{font-size:.8rem;color:#999;margin-bottom:4px}.ix-sec-title{color:var(--teal-700);font-size:1.15rem;font-weight:800;margin:0 0 12px;line-height:1.4}
.ix-card{background:#fff;border-radius:12px;padding:14px 16px;border:1px solid var(--line);margin:10px 0;line-height:1.7;font-size:.93rem}
.ix-term{background:#d5f5f6;color:var(--teal-700);font-weight:700;padding:1px 5px;border-radius:4px;cursor:pointer;border-bottom:2px dotted var(--teal-700)}
.ix-term-popup{background:#fff;border:2px solid var(--teal-700);border-radius:10px;padding:12px 14px;margin-top:8px;box-shadow:0 4px 16px rgba(0,0,0,.1)}
.ix-guess{background:#f0f7ff;border:2px solid #3b82f6;border-radius:12px;padding:14px 16px;margin:10px 0}
.ix-guess-title{font-weight:800;color:#1e40af;margin-bottom:8px}.ix-guess-q{font-size:.93rem;margin-bottom:10px;line-height:1.6}
.ix-guess-opt{display:block;width:100%;padding:9px 12px;border-radius:8px;border:2px solid #93c5fd;background:#fff;font-size:.9rem;font-weight:600;text-align:start;margin-bottom:6px;cursor:pointer;font-family:inherit}
.ix-guess-opt.correct{border-color:#22c55e;background:#dcfce7}.ix-guess-opt.wrong{border-color:#ef4444;background:#fee2e2}.ix-guess-opt.neutral{border-color:var(--line);background:#f9fafb}
.ix-guess-reveal{margin-top:10px;padding:8px 12px;border-radius:8px;font-size:.88rem;line-height:1.6;font-weight:600;background:#dcfce7}
.ix-try{background:var(--teal-050);border:2px solid var(--teal-700);border-radius:12px;padding:14px 16px;margin:10px 0}
.ix-try-head{display:flex;align-items:center;gap:8px;cursor:pointer}.ix-try-title{font-weight:800;color:var(--teal-700);flex:1;font-size:.95rem}
.ix-try-body{margin-top:10px;font-size:.9rem;line-height:1.7}.ix-try-mat{margin-top:8px;font-size:.8rem;color:#666;background:#fff;border-radius:6px;padding:6px 10px}
.ix-dyk{background:#fef3cd;border:2px solid #92400e;border-radius:12px;padding:12px 14px;margin:10px 0;display:flex;gap:8px}
.ix-dyk-label{font-weight:800;color:#92400e;font-size:.85rem;margin-bottom:2px}.ix-dyk-text{font-size:.88rem;line-height:1.6}
.ix-next{width:100%;padding:12px;background:var(--teal-700);color:#fff;border:none;border-radius:10px;font-size:1rem;font-weight:800;margin-top:14px;cursor:pointer;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:6px}
.ix-tbl{width:100%;border-collapse:collapse;margin:8px 0;font-size:.88rem}.ix-tbl th,.ix-tbl td{padding:6px 10px;border:1px solid var(--line);text-align:right}.ix-tbl th{background:var(--teal-050);font-weight:700}
.ix-hint{font-size:.8rem;color:#999;text-align:center;margin:6px 0}
</style>`;
  h += '<div class="ix-wrap">';
  // Progress
  h += '<div class="ix-progress"><div class="ix-progress-fill" style="width:'+progress+'%"></div></div>';
  // Dots
  h += '<div class="ix-dots">';
  for(let i=0;i<totalSec;i++){
    let cls='ix-dot';
    if(i===S.ixSec) cls+=' on';
    else if(i<=S.ixMaxSec) cls+=' done';
    else cls+=' locked';
    h+='<button type="button" class="'+cls+'" data-ix-sec="'+i+'">'+(i+1)+'</button>';
  }
  h += '</div>';
  // Content
  h += '<div class="ix-content">';
  h += '<div class="ix-sec-label">الجزء '+(S.ixSec+1)+' من '+totalSec+'</div>';
  h += '<h3 class="ix-sec-title">'+sec.t+'</h3>';
  // Guess first
  if(sec.guess){
    const picked = S.ixGuess[gKey];
    h += '<div class="ix-guess"><div class="ix-guess-title">' + uiIcon('insights', 18) + ' تحدي الاستكشاف المعرفي — فكّر أولاً:</div>';
    h += '<div class="ix-guess-q">'+sec.guess.q+'</div>';
    sec.guess.opts.forEach((o,i)=>{
      let cls='ix-guess-opt';
      if(picked!=null){ cls += i===sec.guess.ans?' correct':i===picked?' wrong':' neutral'; }
      h += '<button type="button" class="'+cls+'" data-ix-guess="'+gKey+','+i+'"'+(picked!=null?' disabled':'')+'>'+o+(picked!=null&&i===sec.guess.ans?' ✓':'')+'</button>';
    });
    if(picked!=null){
      if(picked===sec.guess.ans) h += '<div class="ix-guess-reveal" style="background:#dcfce7">🎉 '+sec.guess.ok+'</div>';
      else h += '<div class="ix-guess-reveal" style="background:#fef3cd">' + uiIcon('insights', 18) + ' توضيح تربوي — الإجابة المعتمدة: <b>'+sec.guess.opts[sec.guess.ans]+'</b>. '+sec.guess.ok.replace(/^بالضبط!\s*/,'').replace(/^نعم!\s*/,'')+'</div>';
    }
    h += '</div>';
  }
  // Main content card with highlighted terms
  h += '<div class="ix-card">'+body;
  // Term popup
  if(S.ixTerm && IX_GLOSSARY[S.ixTerm]){
    const g = IX_GLOSSARY[S.ixTerm];
    h += '<div class="ix-term-popup" data-ix-term-close><div style="font-size:1.4rem">'+g.i+'</div><div style="font-weight:800;color:var(--teal-700);margin:2px 0">'+S.ixTerm+'</div><div style="font-size:.88rem;color:#333">'+g.d+'</div></div>';
  }
  h += '</div>';
  h += '<div class="ix-hint">' + uiIcon('insights', 16) + ' اضغط الكلمات <span class="ix-term" style="cursor:default">الملوّنة</span> لمعرفة معناها</div>';
  // Try this
  if(sec.tryThis){
    const tKey = uIdx+'-'+S.ixSec;
    const open = S.ixTry&&S.ixTry[tKey];
    h += '<div class="ix-try"><div class="ix-try-head" data-ix-try="'+tKey+'">' + uiIcon('chemistry', 22) + '<span class="ix-try-title">'+sec.tryThis.title+'</span><span style="font-size:1rem;color:var(--teal-700);transition:transform .2s;'+(open?'transform:rotate(180deg)':'')+'">▼</span></div>';
    if(open) h += '<div class="ix-try-body">'+sec.tryThis.body+'</div><div class="ix-try-mat">' + uiIcon('tool', 15) + ' <b>الأدوات المطلوبة:</b> '+sec.tryThis.mat+'</div><div style="font-size:.78rem;color:#92400e;margin-top:6px">⚠️ الأنشطة العملية تحتاج إشراف معلّم أو وليّ أمر.</div>';
    h += '</div>';
  }
  // Did you know
  // ── ACTIVITIES ──
  if(sec.activity){
    const act = sec.activity;
    const aKey = uIdx+'-'+S.ixSec+'-act';
    if(!S.ixGuess[aKey]) S.ixGuess[aKey] = {};
    if(act.type==='truefalse'){
      h += '<div style="background:#f0fdf4;border:2px solid #22c55e;border-radius:12px;padding:14px 16px;margin:10px 0">';
      h += '<div style="font-weight:800;color:#166534;margin-bottom:10px">✅ '+act.title+'</div>';
      act.items.forEach(function(item,ii){
        const iKey = aKey+'-'+ii;
        const picked = S.ixGuess[iKey];
        const isRight = picked!=null && ((picked==='true') === item.ans);
        h += '<div style="border:1px solid #e5e7eb;border-radius:8px;padding:10px 12px;margin-bottom:8px;background:#fff">';
        h += '<div style="font-size:.93rem;margin-bottom:6px;font-weight:600">'+item.text+'</div>';
        h += '<div style="display:flex;gap:6px">';
        h += '<button type="button" data-ix-guess="'+iKey+',true" style="flex:1;padding:7px;border-radius:6px;border:2px solid '+(picked==='true'?(item.ans?'#22c55e':'#ef4444'):'#d1d5db')+';background:'+(picked==='true'?(item.ans?'#dcfce7':'#fee2e2'):'#fff')+';font-weight:700;cursor:pointer;font-family:inherit"'+(picked!=null?' disabled':'')+'>صح ✓</button>';
        h += '<button type="button" data-ix-guess="'+iKey+',false" style="flex:1;padding:7px;border-radius:6px;border:2px solid '+(picked==='false'?(!item.ans?'#22c55e':'#ef4444'):'#d1d5db')+';background:'+(picked==='false'?(!item.ans?'#dcfce7':'#fee2e2'):'#fff')+';font-weight:700;cursor:pointer;font-family:inherit"'+(picked!=null?' disabled':'')+'>خطأ ✗</button>';
        h += '</div>';
        if(picked!=null) h += '<div style="font-size:.82rem;margin-top:6px;padding:6px 8px;border-radius:6px;background:'+(isRight?'#dcfce7':'#fef3cd')+'">'+(isRight?'✓ ':'💡 ')+item.why+'</div>';
        h += '</div>';
      });
      h += '</div>';
    }

  }
  // ── DID YOU KNOW ──
  if(sec.dyk) h += '<div class="ix-dyk">' + uiIcon('insights', 20) + '<div><div class="ix-dyk-label">هل تعلم؟</div><div class="ix-dyk-text">'+sec.dyk+'</div></div></div>';
  // Next button
  if(S.ixSec<totalSec-1){
    h += '<button type="button" class="ix-next" data-ix-next>التالي ← <span style="font-size:.83rem;opacity:.7">'+unit.sections[S.ixSec+1].t+'</span></button>';
  } else {
    h += '<div style="text-align:center;padding:16px 0"><span style="display:flex;justify-content:center;margin-bottom:8px;color:var(--ok-700)">' + uiIcon('award', 48) + '</span><strong style="color:var(--teal-700);font-size:1.1rem">أحسنت! أنهيت الوحدة التفاعلية</strong></div>';
  }
  h += '</div></div>';
  return h;
}
function liteReader(c,AR){
  // Returns the full inline text+diagram content for a Science unit, rendered inside the app.
  // No external requests — pure HTML+CSS, the same content as the textbook PDFs.
  const u=c.unit;
  const sty=`
    <style>
      .lr{direction:rtl;font-family:inherit;color:var(--text,#111827);line-height:1.75;padding:.5rem 0}
      .lr h2{font-size:1.1rem;color:var(--teal-700,#0d5c8c);border-right:4px solid var(--teal-700,#0d5c8c);padding-right:.6rem;margin:1.2rem 0 .5rem}
      .lr h3{font-size:1rem;color:var(--teal-700,#127a6f);margin:1rem 0 .3rem;font-weight:700}
      .lr p{margin:.4rem 0;font-size:.94rem}
      .lr ul,.lr ol{padding-right:1.3rem;margin:.3rem 0}
      .lr li{margin:.2rem 0;font-size:.92rem}
      .lr strong{color:var(--teal-700,#0d5c8c)}
      .lr .lc{background:#f0f9ff;border-right:3px solid var(--teal-700,#0d5c8c);border-radius:6px;padding:.7rem .9rem;margin:.6rem 0}
      .lr .la{background:#fff7ed;border-right:3px solid #b45309;border-radius:6px;padding:.7rem .9rem;margin:.6rem 0}
      .lr .lg{background:#f0fdf4;border-right:3px solid #065f46;border-radius:6px;padding:.7rem .9rem;margin:.6rem 0}
      .lr .lf{background:#f8fafc;border:2px solid var(--teal-700,#0d5c8c);border-radius:6px;padding:.5rem 1rem;text-align:center;font-family:monospace;font-size:.95rem;direction:ltr;margin:.6rem 0}
      .lr table{width:100%;border-collapse:collapse;margin:.6rem 0;font-size:.85rem}
      .lr th{background:var(--teal-700,#0d5c8c);color:#fff;padding:.4rem .6rem;text-align:center}
      .lr td{border:1px solid #e5e7eb;padding:.4rem .6rem;text-align:center}
      .lr tr:nth-child(even) td{background:#f0f9ff}
      .lr .lq{margin:.8rem 0;border:1px solid #e5e7eb;border-radius:6px;padding:.7rem}
      .lr .lq .qs{font-weight:600;margin-bottom:.4rem;font-size:.92rem}
      .lr .lg-grid{display:grid;grid-template-columns:1fr 1fr;gap:.25rem .6rem;margin:.3rem 0}
      .lr .lch{padding:.3rem .5rem;border-radius:4px;font-size:.88rem;border:1px solid #e5e7eb;cursor:pointer;transition:background .15s;background:#fff}
      .lr .lch:hover{background:#f0f9ff}
      .lr .lch.ok{background:#d1fae5;border-color:#065f46;color:#065f46;font-weight:700}
      .lr .lch.no{background:#fde8e8;border-color:#9b1c1c;color:#9b1c1c}
      .lr .lthink{background:#fef3c7;border-right:3px solid #b45309;border-radius:6px;padding:.6rem .9rem;margin:.6rem 0;font-size:.92rem}
      .lr .lthink::before{content:"💡 "}
      .lr .ph-bar{display:flex;border-radius:5px;overflow:hidden;height:30px;margin:.4rem 0;border:1px solid #e5e7eb}
      .lr .ph-bar div{display:flex;align-items:center;justify-content:center;font-size:.65rem;font-weight:700}
      .lr .mol{display:flex;align-items:center;justify-content:center;gap:.25rem;margin:.5rem 0;font-family:monospace}
      .lr .at-O{background:#e53e3e;color:#fff;border-radius:50%;width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:.85rem}
      .lr .at-H{background:#4299e1;color:#fff;border-radius:50%;width:28px;height:28px;display:inline-flex;align-items:center;justify-content:center;font-weight:700;font-size:.75rem}
      .lr .bd{display:inline-block;width:22px;height:3px;background:#555;vertical-align:middle}
      .lr .wc-box{background:linear-gradient(180deg,#dbeeff 0%,#bfdbfe 45%,#e0f2fe 100%);border-radius:8px;padding:1rem;margin:.6rem 0;border:1px solid #93c5fd;position:relative;min-height:120px}
      .lr .wc-row{display:flex;justify-content:space-around;align-items:flex-end;padding-bottom:36px}
      .lr .wc-step{text-align:center;font-size:.7rem;font-weight:700;color:#1e40af;background:rgba(255,255,255,.8);border-radius:4px;padding:.2rem .3rem;max-width:70px}
      .lr .wc-sea{position:absolute;bottom:0;left:0;right:0;height:32px;background:linear-gradient(#38bdf8,#0284c7);border-radius:0 0 8px 8px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:.75rem;font-weight:700}
      .lr .den-svg{width:100%;max-width:340px;display:block;margin:0 auto}
      @media(max-width:500px){.lr .lg-grid{grid-template-columns:1fr}}
    </style>`;

  // ── UNIT 1 ──────────────────────────────────────────────────────────────────
  if(u===1) return sty+`<div class="lr">
<h2>نواتج التعلم</h2>
<div class="lc"><ol style="padding-right:1.2rem">
<li>يتعرف الغلاف المائي وعلاقته بالأغلفة الأخرى على كوكب الأرض.</li>
<li>يفسر دور دورة الماء في الطبيعة في إحداث التغيرات البيئية المختلفة.</li>
<li>يشرح التفاعلات الكيميائية في النظام البيئي المائي وتأثيرها على جودة المياه واستدامة الحياة البحرية.</li>
<li>يفسر دور عملية النتح في دورة الماء في الطبيعة وعلاقته باستدامة النظام البيئي.</li>
<li>يوضح تأثير الخصائص الفيزيائية للماء كالحرارة النوعية، والعوامل الفيزيائية المحيطة مثل درجة الحرارة والضغط على توزيع الكائنات الحية واستدامة النظام البيئي المائي.</li>
<li>يوضح الأهمية البيولوجية للماء ودوره في الحفاظ على التركيب والوظائف الخلوية.</li>
<li>يقيّم التكيفات البيولوجية للكائنات الحية في البيئة المائية ودورها في استدامة النظام البيئي.</li>
</ol></div>
<div class="la"><strong>القضايا المتضمنة:</strong> التلوث المائي — التغيرات المناخية — استدامة الموارد المائية — الحفاظ على التنوع البيولوجي — إدارة الموارد المائية — تحديات الاستدامة في ظل النمو السكاني.</div>

<h2>مقدمة الوحدة</h2>
<p>البيئة مفهوم مشتق من الكلمة الفرنسية «Environ» أي «كل مايحيط بنا». وتشمل البيئة عوامل حيوية (الإنسان والنباتات والحيوانات والكائنات الدقيقة) وعوامل لاحيوية (الضوء والهواء والماء والتربة).</p>
<p>البيئة نظام كامل لاتنفصل مكوناته، ويتكون من عناصر فيزيائية وكيميائية وبيولوجية. والنظام البيئي مجتمع من الكائنات الحية تتفاعل مع بعضها البعض ومع المكونات غير الحية.</p>
<div class="lc"><strong>أغلفة الأرض الأربعة:</strong>
<ul><li>الغلاف المائي (Hydrosphere)</li><li>الغلاف الجوي (Atmosphere)</li><li>الغلاف الصخري (Lithosphere)</li><li>الغلاف الحيوي (Biosphere)</li></ul>
<p>وهذه الأغلفة الأربعة في تغير مستمر وتتأثر بالأنشطة البشرية وتؤثر فيها.</p></div>
<div class="lthink">لماذا يهتم العلماء بالبحث عن الماء على الكواكب الأخرى؟ لماذا الماء مهم جدًا؟</div>

<h2>1-1 الغلاف المائي على كوكب الأرض</h2>
<p>يميز الغلاف المائي كوكب الأرض عن بقية الكواكب، وتغطي المياه حوالي <strong>70%</strong> من سطح الكرة الأرضية.</p>
<table><tr><th>النوع</th><th>النسبة</th><th>المكان</th></tr>
<tr><td>مياه مالحة</td><td>97%</td><td>المحيطات والبحار والبحيرات الملحية — غير صالحة للاستهلاك مباشرة</td></tr>
<tr><td>مياه عذبة سائلة</td><td>~1%</td><td>الأنهار والبحيرات والجداول والخزانات والمياه الجوفية</td></tr>
<tr><td>مياه متجمدة</td><td>~2%</td><td>القمم الجليدية القطبية والأنهار الجليدية</td></tr></table>

<h3>دورة الماء في الطبيعة (الدورة الهيدرولوجية)</h3>
<p>يوجد الماء على سطح الأرض في حالة تغير مستمر بين الحالات الثلاث للمادة (صلبة / سائلة / غازية) ضمن نطاق درجات الحرارة المعروفة. ودورة الماء نظام مغلق تقريبًا يعبر عن الحركة المستمرة للماء حول الكرة الأرضية — وهو نظام قادر على تغيير سطح الأرض فيزيائيًا وكيميائيًا وبيولوجيًا.</p>
<div class="wc-box">
  <div class="wc-row">
    <div class="wc-step">${uiIcon("sun", 16)} تبخر<br>↑</div>
    <div class="wc-step">${uiIcon("leaf", 16)} نتح النباتات<br>↑</div>
    <div class="wc-step">${uiIcon("cloud", 16)} تكثف السحب</div>
    <div class="wc-step">${uiIcon("water", 16)} هطول الأمطار<br>↓</div>
    <div class="wc-step">${uiIcon("water", 16)} تغذية المياه الجوفية<br>↓</div>
  </div>
  <div class="wc-sea">البحر والمحيطات — المياه المالحة</div>
</div>
<p class="sr-only">رسم توضيحي لدورة الماء: الشمس تبخّر الماء من البحر، النباتات تنتح بخار الماء، البخار يتكثّف في السحب، المطر أو الثلج يسقط، الماء يتسرّب إلى المياه الجوفية ثمّ يعود إلى البحر. دورة مستمرّة.</p>
<div class="lc"><strong>مراحل دورة الماء:</strong><ol>
<li><strong>التبخر (evaporation):</strong> تبخر الماء من المسطحات المائية بفعل الشمس.</li>
<li><strong>النتح (transpiration):</strong> إطلاق النباتات بخار الماء عبر الثغور في أوراقها وسيقانها الخضراء. يخفض درجة حرارة النبات ويسحب الماء والأملاح من الجذر إلى الأجزاء العليا.</li>
<li><strong>الإخراج:</strong> تخلص الكائن الحي من الفضلات (ثاني أكسيد الكربون، بخار الماء، فضلات نيتروجينية).</li>
<li><strong>التكثف (condensation):</strong> تحول البخار إلى قطيرات لتكوين السحب.</li>
<li><strong>الترسيب (precipitation):</strong> سقوط الأمطار أو الثلج أو البَرَد.</li>
<li><strong>التسرب:</strong> تسرب المياه خلال مسام التربة والصخور لتكوين المياه الجوفية.</li>
</ol></div>

<h2>تدريبات — الغلاف المائي ودورة الماء</h2>
<div class="lq"><div class="qs">١) التغير المستمر بين حالات المادة على سطح الأرض عبر نظام مغلق تقريبًا يُعرف بدورة...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) النيتروجين</div><div class="lch" onclick="lrPick(this,'no')">ب) الكربون</div>
<div class="lch" onclick="lrPick(this,'no')">ج) الأكسجين</div><div class="lch" onclick="lrPick(this,'ok')">د) الماء</div></div></div>
<div class="lq"><div class="qs">٢) نسبة مساحة السطح المغطاة بالمياه في كوكب الأرض...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) 1%</div><div class="lch" onclick="lrPick(this,'no')">ب) 3%</div>
<div class="lch" onclick="lrPick(this,'ok')">ج) 70%</div><div class="lch" onclick="lrPick(this,'no')">د) 30%</div></div></div>
<div class="lq"><div class="qs">٣) أي العمليات التالية لو توقفت سيؤدي ذلك إلى اضطراب توازن دورة الماء بشكل مباشر؟</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) الجريان السطحي</div><div class="lch" onclick="lrPick(this,'ok')">ب) التبخر</div>
<div class="lch" onclick="lrPick(this,'no')">ج) التسرب في التربة</div><div class="lch" onclick="lrPick(this,'no')">د) النتح</div></div></div>
<div class="lq"><div class="qs">٤) زيادة معدل النتح في النبات تؤثر بشكل غير مباشر على دورة الماء في الطبيعة من خلال:</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) تقليل هطول الأمطار</div><div class="lch" onclick="lrPick(this,'ok')">ب) زيادة بخار الماء في الغلاف الجوي</div>
<div class="lch" onclick="lrPick(this,'no')">ج) خفض معدل التبخر</div><div class="lch" onclick="lrPick(this,'no')">د) تثبيت ثاني أكسيد الكربون في الأوراق</div></div></div>
<div class="la" style="font-size:.88rem"><strong>أسئلة مقالية (اكتب إجابتك في دفترك):</strong><br>٥) ما العمليات البيولوجية التي تساهم في دورة الماء؟ (التنفس — النتح — الإخراج)<br>٦) لماذا تعتبر دورة الماء في الطبيعة نظامًا مغلقًا تقريبًا؟</div>

<h2>2-1 الخواص الكيميائية للماء</h2>
<p>يتميز الماء بخصائصه الفريدة التي تدعم الحياة؛ يستطيع إذابة الكثير من المواد الكيميائية. كل خلية حية يحيط بها الغشاء البلازمي الذي يمر من خلاله الماء إلى داخل الخلية حاملاً المواد اللازمة.</p>
<h3>التركيب الكيميائي للماء</h3>
<p>يتكون جزيء الماء من ذرة أكسجين وذرتي هيدروجين. الأكسجين يمثل <strong>88.89%</strong> من كتلة الجزيء والهيدروجين <strong>11.11%</strong>. الرابطتان التساهميتان تحصران زاوية قياسها حوالي <strong>104.5°</strong>.</p>
<div class="lc" style="text-align:center">
<div class="mol" role="img" aria-hidden="true"><span class="at-H">H</span><span class="bd"></span><span class="at-O">O</span><span class="bd"></span><span class="at-H">H</span></div>
<p class="sr-only">نموذج جزيء الماء: دائرة حمراء كبيرة تمثّل ذرة الأكسجين (O) في المنتصف، مرتبطة بخطّين (رابطتين تساهميتين) بدائرتين زرقاوين صغيرتين تمثّلان ذرتي هيدروجين (H). زاوية الرابطة نحو 104.5 درجة.</p>
<p style="font-size:.8rem;margin:.3rem 0">زاوية الرابطة ≈ 104.5° | O يحمل شحنة سالبة جزئية (δ−) | H يحمل شحنة موجبة جزئية (δ+)</p>
<p style="font-size:.78rem;color:#555">نوع الرابطة داخل الجزيء: تساهمية | بين الجزيئات: هيدروجينية</p></div>

<h3>قطبية الماء</h3>
<p>تتميز ذرة الأكسجين بارتفاع سالبيتها الكهربية عن ذرة الهيدروجين. تُستقطب إلكترونات الرابطة تجاه ذرة الأكسجين مكوّنةً شحنة سالبة جزئية (δ−)، بينما تحمل ذرات الهيدروجين شحنة موجبة جزئية (δ+). هذا ما يُعرف بقطبية جزيء الماء.</p>
<p>الرابطة الهيدروجينية: تجاذب كهروستاتيكي بين H⁺(δ+) في جزيء ماء و O⁻(δ−) في جزيء ماء مجاور. كل جزيء ماء يمكن أن يحاط بما يصل إلى <strong>4 روابط هيدروجينية</strong>، مما يمنح الماء خواصه الفريدة.</p>
<div class="lc"><p style="font-size:.88rem"><strong>لماذا درجة غليان الماء مرتفعة؟</strong> الروابط الهيدروجينية سبب ارتفاع درجة غليان الماء (100°C) مقارنة بكبريتيد الهيدروجين (−61°C) رغم أن الكتلة الجزيئية للأخير أكبر.</p></div>

<h3>الماء مذيب عام</h3>
<p>يُشار إلى الماء على أنه مذيب عام لمعظم المواد. عند إضافة مركبات أيونية إلى الماء تتفكك الشبكة البلورية إلى أيونات حرة: الأيونات الموجبة تنجذب نحو O (السالب) والأيونات السالبة تنجذب نحو H (الموجب).</p>
<div class="lf">NaCl(s) → Na⁺(aq) + Cl⁻(aq)</div>
<p style="font-size:.88rem">ذوبان كلوريد الصوديوم في الماء <em>ليس</em> تحللاً مائيًا لأن الأيونات الناتجة لا تتفاعل مع الماء لتكوين أحماض أو قواعد جديدة.</p>

<h3>الاتزان الأيوني للماء</h3>
<div class="lf">H₂O(l) ⇌ H⁺(aq) + OH⁻(aq)</div>
<p>الماء النقي يتأين بشكل طفيف جدًا بتركيزات متساوية مما يجعله متعادلاً.</p>

<h3>التحلل المائي للأملاح (التميؤ)</h3>
<p>التحلل المائي تفاعل يحدث عند ذوبان ملح صلب في الماء مكوّنًا حمضًا وقاعدة، أحدهما أو كلاهما ضعيف.</p>
<table><tr><th>النوع</th><th>المثال</th><th>pH المحلول</th></tr>
<tr><td>أملاح حمضية (Acidic salts)</td><td>NH₄Cl</td><td>&lt; 7 (حمضي)</td></tr>
<tr><td>أملاح قاعدية (Basic salts)</td><td>NaHCO₃</td><td>&gt; 7 (قاعدي)</td></tr>
<tr><td>أملاح متعادلة (Neutral salts)</td><td>NH₄HCO₃</td><td>= 7 (متعادل)</td></tr></table>
<div class="lf">NH₄Cl + H₂O → NH₄OH + H⁺ + Cl⁻</div>
<div class="lf">NaHCO₃ + H₂O → Na⁺ + OH⁻ + H₂CO₃</div>

<h3>الرقم الهيدروجيني (pH)</h3>
<p>مقياس كمي يعبر عن درجة حمضية أو قاعدية السوائل أو المحاليل، يتخذ قيمًا من 0 إلى 14.</p>
<div class="ph-bar">
<div style="background:#dc2626;color:#fff;flex:1">0</div><div style="background:#ef4444;color:#fff;flex:1">1</div><div style="background:#f97316;color:#fff;flex:1">2</div><div style="background:#fb923c;color:#fff;flex:1">3</div>
<div style="background:#fbbf24;flex:1">4</div><div style="background:#fde68a;flex:1">5</div><div style="background:#fef9c3;flex:1">6</div>
<div style="background:#fff;font-weight:900;border:2px solid #374151;flex:1">7</div>
<div style="background:#d1fae5;flex:1">8</div><div style="background:#6ee7b7;flex:1">9</div><div style="background:#34d399;color:#fff;flex:1">10</div>
<div style="background:#10b981;color:#fff;flex:1">11</div><div style="background:#059669;color:#fff;flex:1">12</div><div style="background:#047857;color:#fff;flex:1">13</div><div style="background:#065f46;color:#fff;flex:1">14</div>
</div>
<p class="sr-only">مقياس الرقم الهيدروجيني (pH) من 0 إلى 14: الألوان من الأحمر الداكن عند 0 (شديد الحموضة) تتدرّج عبر البرتقالي والأصفر إلى الأبيض عند 7 (متعادل)، ثمّ الأخضر الفاتح إلى الأخضر الداكن عند 14 (شديد القاعدية). يسار المقياس حمضي، يمينه قاعدي.</p>
<div style="display:flex;font-size:.7rem;font-weight:600;margin:.1rem 0">
<span style="flex:7;color:#9b1c1c">← حمضي (pH &lt; 7)</span><span style="flex:1;text-align:center;color:#374151;font-size:.6rem">متعادل</span><span style="flex:7;text-align:left;color:#065f46">قاعدي (pH &gt; 7) →</span></div>
<table style="margin-top:.5rem"><tr><th>المادة</th><th>pH تقريبي</th></tr>
<tr><td>الماء المقطر النقي</td><td>7</td></tr><tr><td>ماء البحر</td><td>7.5 – 8.4</td></tr>
<tr><td>الماء العذب (الأنهار)</td><td>6.8 – 7.8</td></tr><tr><td>المياه الجوفية</td><td>6 – 8.5</td></tr>
<tr><td>السحب</td><td>4.5 – 5</td></tr><tr><td>مياه المناجم</td><td>3 – 4</td></tr></table>

<h2>تدريبات — الخواص الكيميائية</h2>
<div class="lq"><div class="qs">٣) ترجع قطبية جزيء الماء إلى أن...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) ذرة الأكسجين تتحول إلى أيون موجب</div>
<div class="lch" onclick="lrPick(this,'no')">ب) السالبية الكهربية للهيدروجين أكبر من الأكسجين</div>
<div class="lch" onclick="lrPick(this,'no')">ج) ذرة الأكسجين تحمل شحنة موجبة جزئية</div>
<div class="lch" onclick="lrPick(this,'ok')">د) ذرة الأكسجين تحمل شحنة سالبة جزئية وذرة H تحمل شحنة موجبة جزئية</div></div></div>
<div class="lq"><div class="qs">٦) ما العنصران اللذان يتكون منهما جزيء الماء؟</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) الكربون والهيدروجين</div><div class="lch" onclick="lrPick(this,'no')">ب) النيتروجين والأكسجين</div>
<div class="lch" onclick="lrPick(this,'ok')">ج) الأكسجين والهيدروجين</div><div class="lch" onclick="lrPick(this,'no')">د) الكلور والصوديوم</div></div></div>
<div class="lq"><div class="qs">٨) أي من الآتي يصف بشكل صحيح تركيب جزيء الماء؟</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) H يمثل 66.67%</div><div class="lch" onclick="lrPick(this,'no')">ب) O يمثل 33.33%</div>
<div class="lch" onclick="lrPick(this,'ok')">ج) H يمثل 11.11%</div><div class="lch" onclick="lrPick(this,'no')">د) O يمثل 50%</div></div></div>
</div>`;

  // ── UNIT 2 ──────────────────────────────────────────────────────────────────
  return sty+`<div class="lr">
<h2>1-3 الخواص الفيزيائية للماء</h2>
<p>للماء خواص فيزيائية متفردة تميزه عن غيره من الموائع مثل: تناقص كثافته عند وصوله لدرجة التجمد، وارتفاع حرارته النوعية، مما يؤثر على العديد من الظواهر الطبيعية وتوزيع الكائنات الحية.</p>
<div class="lthink">لماذا يطفو الثلج على سطح الماء؟ لماذا تبدو الرمال على الشاطئ أكثر سخونة من مياه البحر؟ لماذا تبقى مياه البحار دافئة حتى بعد غروب الشمس؟</div>

<h2>أولاً: الكثافة (Density)</h2>
<p>هي كتلة وحدة الحجوم من المادة عند درجة حرارة معينة. وتعتمد كثافة المادة على كتلة الجزيئات والمسافات البينية بينها.</p>
<p>في حالة الماء النقي: كتلة 1cm³ منه عند <strong>4°C</strong> مساوية 1g ← كثافة الماء عند 4°C = <strong>1g/cm³ = 1000 kg/m³</strong> وهي أقصى كثافة للماء.</p>
<div class="lc">
<svg class="den-svg" viewBox="0 0 300 90" role="img" aria-label="منحنى كثافة الماء حسب درجة الحرارة">
  <line x1="40" y1="75" x2="280" y2="75" stroke="#475569" stroke-width="2"/>
  <line x1="40" y1="10" x2="40" y2="75" stroke="#475569" stroke-width="2"/>
  <text x="155" y="88" text-anchor="middle" font-size="9" fill="#374151">درجة الحرارة (°C)</text>
  <text x="40" y="84" text-anchor="middle" font-size="8" fill="#555">0</text>
  <text x="92" y="84" text-anchor="middle" font-size="8" fill="#555">2</text>
  <text x="140" y="84" text-anchor="middle" font-size="8" fill="#e53e3e">4</text>
  <text x="188" y="84" text-anchor="middle" font-size="8" fill="#555">6</text>
  <text x="236" y="84" text-anchor="middle" font-size="8" fill="#555">8</text>
  <text x="280" y="84" text-anchor="middle" font-size="8" fill="#555">10</text>
  <text x="36" y="78" text-anchor="end" font-size="7" fill="#555">999.6</text>
  <text x="36" y="26" text-anchor="end" font-size="7" fill="#555">1000.0</text>
  <polyline points="40,62 60,45 80,28 100,17 140,12 180,17 220,32 260,48 280,58" fill="none" stroke="#0d5c8c" stroke-width="2.5" stroke-linejoin="round"/>
  <circle cx="140" cy="12" r="4" fill="#e53e3e"/>
  <text x="148" y="11" font-size="7.5" fill="#e53e3e">أقصى كثافة @ 4°C</text>
</svg>
<p style="font-size:.8rem;text-align:center;color:#555">تزداد الكثافة من 0→4°C ثم تنخفض عند ارتفاع درجة الحرارة أكثر من 4°C</p>
<p class="sr-only">رسم بياني خطّي: المحور الأفقي درجة الحرارة من 0 إلى 10 درجات مئوية، والمحور الرأسي الكثافة من 999.6 إلى 1000.0 كغ/م³. المنحنى يصعد من 0°C حتى يبلغ ذروته عند 4°C (أقصى كثافة)، ثمّ ينخفض بعدها. نقطة حمراء تشير إلى القمّة عند 4°C.</p>
</div>

<h3>لماذا تتجمد البحيرة من السطح لا من القاع؟</h3>
<p>عندما تنخفض درجة حرارة الهواء من 4°C إلى 0°C، تتمدد المياه السطحية وتصبح أقل كثافة من المياه الموجودة تحتها. عندما يتجمد الماء ويتحول إلى جليد يصبح أقل كثافة (جزيئاته متباعدة أكثر في الجليد)، فيطفو الجليد مما يخلق طبقة عازلة تمنع تجمد باقي الماء تحته، وتسمح للكائنات المائية بالحياة.</p>
<div class="lg"><strong>الفائدة البيولوجية:</strong> الجليد يطفو → طبقة عازلة → الماء تحته لا يتجمد → الكائنات البحرية تعيش حتى في الشتاء الشديد.</div>

<h3>عوامل تأثير الكثافة في المحيطات</h3>
<div class="lc"><ul>
<li><strong>الضغط:</strong> في المياه الضحلة لا تتغير الكثافة تقريبًا. في الأعماق الكبيرة يزداد الضغط وتتقارب الجزيئات فتزداد الكثافة.</li>
<li><strong>كمية الأملاح المذابة:</strong> كلما ارتفعت الملوحة، ارتفعت الكثافة.</li>
<li><strong>درجة الحرارة:</strong> الانخفاض (حتى 4°C) يرفع الكثافة. أقل من 4°C تبدأ الكثافة بالانخفاض مجددًا.</li>
</ul>
<p>الاختلافات في الكثافة سبب التيارات المائية التي تنقل الحرارة والملح والعناصر الغذائية حول العالم.</p></div>

<h3>الهيدروميتر (مقياس كثافة السوائل)</h3>
<p>يعتمد على قانون الطفو: الجسم الطافي يظهر منه جزء أكبر في السائل ذي الكثافة الأعلى. مستودع زجاجي مجوف بجزء سفلي للطفو مدرج بقيم الكثافة — الجزء السفلي يشير إلى أعلى كثافة، الجزء العلوي إلى أدنى كثافة.</p>
<div class="la" style="font-size:.88rem"><strong>نشاط: قياس كثافة عينات مختلفة من الماء</strong><br>المواد: هيدروميتر — عينات المياه (بحر، نهر، آبار) — أنبوبة اختبار.<br>الإجراءات: (1) اسكب العينة في الأنبوبة. (2) أدخل الهيدروميتر بحذر. (3) أدّر برفق للتخلص من فقاعات الهواء. (4) دعه يستقر. (5) اقرأ قسم التدريج المقابل لسطح السائل.</div>

<h2>ثانيًا: كمية الحرارة ودرجة الحرارة</h2>
<div class="lc"><ul>
<li><strong>كمية الحرارة:</strong> الطاقة المنتقلة عند وجود فرق في درجات الحرارة. وحدة القياس: <strong>الجول (Joule)</strong>.</li>
<li><strong>درجة الحرارة:</strong> وصف كمي لمدى سخونة أو برودة جسم. تمثل متوسط طاقة الحركة لجزيئاته. وحدتها الدولية: <strong>الكلفن (K)</strong>.</li>
</ul></div>
<div class="lf">T(K) = t(°C) + 273</div>
<p style="font-size:.85rem;text-align:center">زيادة درجة الحرارة بمقدار 1°C تكافئ زيادتها بمقدار 1K</p>

<h3>الحرارة النوعية (c) — Specific Heat</h3>
<p>كمية الحرارة التي يكتسبها 1kg من المادة لرفع درجة حرارته بمقدار 1K. وحدة قياسها: <strong>J/kg.K</strong>. كلما ارتفعت الحرارة النوعية، احتاجت كتلة معينة من المادة طاقة أكبر لرفع درجة حرارتها.</p>
<table><tr><th>المادة</th><th>الحالة</th><th>c (J/kg.K)</th></tr>
<tr><td>ثلج</td><td>صلب 0°C</td><td>2100</td></tr>
<tr><td>ألومنيوم</td><td>صلب 25°C</td><td>900</td></tr>
<tr><td>نحاس</td><td>صلب 25°C</td><td>390</td></tr>
<tr><td>رصاص</td><td>صلب 25°C</td><td>128</td></tr>
<tr><td>زئبق</td><td>سائل 25°C</td><td>140</td></tr>
<tr><td>ماء مالح</td><td>سائل 25°C</td><td>3900</td></tr>
<tr><td><strong>ماء نقي</strong></td><td>سائل 25°C</td><td><strong>4200</strong></td></tr>
<tr><td>بخار الماء</td><td>غاز 100°C</td><td>2020</td></tr>
<tr><td>هواء</td><td>غاز 25°C</td><td>1005</td></tr></table>
<p style="font-size:.85rem">لاحظ أن الماء له حرارة نوعية مرتفعة جدًا مقارنة بغيره — وهذا يعني أنه يمتص كميات كبيرة من الحرارة دون أن ترتفع درجة حرارته كثيرًا.</p>
<div class="lf">Q = m × c × Δt</div>
<div class="lc" style="font-size:.88rem"><strong>m:</strong> كتلة الجسم (kg) | <strong>Δt:</strong> التغير في درجة الحرارة (K أو °C) | <strong>c:</strong> الحرارة النوعية (J/kg.K)</div>
<div class="la"><strong>مثال (1):</strong> احسب كمية الحرارة اللازمة لرفع درجة حرارة 0.3 kg من النحاس من 20°C إلى 70°C. (c للنحاس = 390 J/kg.K)
<div class="lf">Q = 0.3 × 390 × (70−20) = 0.3 × 390 × 50 = <strong>5850 J</strong></div></div>
<div class="la"><strong>مثال (2):</strong> ألقيت قطعة ألومنيوم (200g، 80°C) في ماء عند درجة حرارة الغرفة. درجة الحرارة النهائية = 40°C. احسب كمية الحرارة المكتسبة بواسطة الماء. (c للألومنيوم = 900 J/kg.K)
<div class="lf">Q = 0.2 × 900 × (40−80) = −7200 J</div>
<p style="font-size:.85rem">الإشارة السالبة → الألومنيوم فقد الحرارة. كمية الحرارة المنتقلة إلى الماء = <strong>7200 J</strong></p></div>

<h3>نسيم البحر</h3>
<p>الحرارة النوعية المرتفعة للماء تؤدي إلى اعتدال المُناخ بالقرب من المسطحات المائية: الماء يسخن أبطأ → درجة حرارة البحر أقل من الشاطئ → الهواء فوق اليابس يسخن ويرتفع → الهواء البارد من البحر يتحرك نحو اليابس = <strong>نسيم البحر</strong>.</p>

<h2>ثالثًا: الحرارة الكامنة للتصعيد</h2>
<p>الطاقة الحرارية التي تمتصها وحدة الكتل (1kg) من المادة لتتحول من السائلة إلى الغازية <strong>دون تغير في درجة الحرارة</strong>. للماء حرارة كامنة مرتفعة لوجود الروابط الهيدروجينية.</p>
<div class="lc"><strong>مراحل تسخين الماء:</strong>
<div style="display:flex;gap:0;height:36px;border-radius:5px;overflow:hidden;margin:.4rem 0">
<div style="background:#bfdbfe;flex:3;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#1e3a8a">A: تسخين الجليد</div>
<div style="background:#93c5fd;flex:4;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#1e3a8a">B: تسخين الماء 0→100°C</div>
<div style="background:#3b82f6;flex:8;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:700;color:#fff">C: التبخر (يحتاج طاقة أكبر بكثير من B)</div>
</div>
<p style="font-size:.8rem">لكسر الروابط الهيدروجينية وتبخير الماء تحتاج طاقة أكبر بكثير من مجرد رفع درجة حرارته.</p></div>
<div class="lg"><strong>الفائدة البيولوجية:</strong> الكائنات الحية تستخدم تبخر الماء لتنظيم حرارة أجسامها — التعرق في الحيوانات والنتح في النباتات تحمل الحرارة بعيدًا عن الجسم.</div>

<h3>تأثير الحرارة على الكائنات البحرية</h3>
<div class="lc"><ol>
<li>معظم الكائنات الحية تتطلب نطاقًا محددًا من درجات الحرارة للبقاء. التغيرات الحادة قد تكون قاتلة.</li>
<li>تغيرات درجة الحرارة في المحيطات تؤثر على توزيع الكائنات البحرية (مثل: الشعاب المرجانية تحتاج درجات حرارة محددة).</li>
<li>الحرارة النوعية المرتفعة للماء تجعل المحيطات خزانات حرارية ضخمة — تمتص الطاقة الشمسية نهارًا وتطلقها ببطء ليلاً مما يحافظ على استقرار درجات الحرارة لصالح الحياة البحرية.</li>
</ol></div>
<table><tr><th>النوع</th><th>أمثلة</th><th>كيف تنظم الحرارة؟</th></tr>
<tr><td>ذوات الدم البارد (Poikilotherms)</td><td>أسماك، برمائيات، زواحف، مفصليات</td><td>مصادر خارجية (الشمس، البيئة الدافئة)</td></tr>
<tr><td>ذوات الدم الدافئ</td><td>طيور، ثدييات</td><td>داخلية — عمليات الأيض تثبت درجة الحرارة</td></tr></table>

<h2>تدريبات — الخواص الفيزيائية</h2>
<div class="lq"><div class="qs">١) عند رفع درجة حرارة الماء من 4°C إلى 8°C فإن:</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) حجم يزيد وكثافة تزيد</div><div class="lch" onclick="lrPick(this,'no')">ب) حجم يقل وكثافة تقل</div>
<div class="lch" onclick="lrPick(this,'ok')">ج) حجم يزيد وكثافة تقل</div><div class="lch" onclick="lrPick(this,'no')">د) حجم يقل وكثافة تزيد</div></div></div>
<div class="lq"><div class="qs">٢) كتلة 4m³ من الماء عند 4°C تساوي...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) 0.004 kg</div><div class="lch" onclick="lrPick(this,'no')">ب) 1 kg</div>
<div class="lch" onclick="lrPick(this,'no')">ج) 1 kg</div><div class="lch" onclick="lrPick(this,'ok')">د) 4000 kg (1000 kg/m³ × 4)</div></div></div>
<div class="lq"><div class="qs">٣) أربعة عينات كتلة كل منها 1 kg، أيها لها أكبر حجم؟</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) ماء مالح 4°C</div><div class="lch" onclick="lrPick(this,'no')">ب) ماء مالح 8°C</div>
<div class="lch" onclick="lrPick(this,'no')">ج) ماء عذب 4°C</div><div class="lch" onclick="lrPick(this,'ok')">د) ماء عذب 8°C (أقل كثافة = أكبر حجم)</div></div></div>
<div class="lq"><div class="qs">٤) عند إذابة ملح كبير في الماء النقي، فإن حجم الجزء المغمور من الهيدروميتر...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) يزداد</div><div class="lch" onclick="lrPick(this,'ok')">ب) يقل (الكثافة ارتفعت فيطفو الهيدروميتر أكثر)</div>
<div class="lch" onclick="lrPick(this,'no')">ج) لا يتغير</div><div class="lch" onclick="lrPick(this,'no')">د) لا يمكن تحديد الإجابة</div></div></div>
<div class="lq"><div class="qs">٥) كثافة الماء 1 g/cm³ عند 4°C يعني...</div>
<div class="lg-grid">
<div class="lch" onclick="lrPick(this,'no')">أ) كتلة 1cm³ تساوي 4 kg</div><div class="lch" onclick="lrPick(this,'ok')">ب) كتلة 1cm³ تساوي 1 g</div>
<div class="lch" onclick="lrPick(this,'no')">ج) كتلة 1m³ تساوي 1 g</div><div class="lch" onclick="lrPick(this,'no')">د) كتلة 1cm³ تساوي 1 L</div></div></div>
</div>`;
}
function lrPick(el,result){
  const grid=el.closest('.lg-grid'); if(!grid||grid.querySelector('.ok,.no')) return;
  el.classList.add(result);
  // Reveal correct answer ONLY after the click (markup never leaks the answer beforehand)
  grid.querySelectorAll('.lch').forEach(c=>{
    if(c.getAttribute('onclick') && c.getAttribute('onclick').includes("'ok'")){
      if(!c.classList.contains('ok')) c.classList.add('ok');
      // append checkmark visually once revealed
      if(!c.textContent.includes('✓')) c.insertAdjacentHTML('beforeend',' <span aria-hidden="true">✓</span>');
    }
  });
}
function lessonBody(c){
  // generic-but-plausible mock body so the reader looks real
  const E=L(c,'easy')||['This lesson is short.','Read each line slowly.','You can listen with the 🔊 button.'];
  const N=L(c,'normal')||['In this lesson you will explore a key idea step by step, with pictures to help you understand.','Take your time. You can read or listen — whatever helps you most.'];
  return {normal:N, easy:E};
}
/* student-visible content catalogue — several units per subject; students may revisit any unit. */
const CONTENT=[
  // Arabic
  {id:'ar1', subject:'Arabic', unit:1, title:'Letters and sounds', mins:8, formats:['read-aloud','offline'], img:'arabic',
    normal:['Every Arabic letter has a shape and a sound. In this unit we listen to each sound and trace the shape.','Say each letter aloud, then find a word that begins with it.'], easy:['Letters make sounds.','Say the sound out loud.','Find a word that starts with it.']},
  {id:'ar2', subject:'Arabic', unit:2, title:'Short words', mins:10, formats:['read-aloud','offline'], img:'arabic',
    normal:['We join letters to build short, everyday words. Reading them slowly helps us remember.','Cover a word, say it, then check.'], easy:['Letters join to make words.','Read the word slowly.','Say it, then check.']},
  {id:'c1', subject:'Arabic', unit:3, title:'Reading: The Generous Host', mins:12, formats:['read-aloud','offline'], img:'book', current:true,
    normal:['Long ago, beside a busy road, lived a man known across the valley for his generosity. No traveller passed his door hungry.','One evening a weary stranger arrived. Without a word about payment, the host shared bread, dates and cool water, and listened to the traveller’s stories.'],
    easy:['A kind man lived by the road.','He gave food to every traveller.','One day a tired stranger came.','The man shared his bread and water.','The stranger smiled and said thank you.']},
  // Mathematics
  {id:'ma1', subject:'Mathematics', unit:1, title:'Counting in tens', mins:7, formats:['captions','offline'], img:'math',
    normal:['Counting in tens helps us work with bigger numbers quickly: 10, 20, 30 …','We group objects into tens, then count the groups.'], easy:['Count by tens: 10, 20, 30.','Make groups of ten.','Count the groups.']},
  {id:'ma2', subject:'Mathematics', unit:2, title:'Adding and taking away', mins:9, formats:['captions','offline'], img:'math',
    normal:['Adding puts groups together; taking away removes some. Pictures make this easy to see.','Try drawing the problem before you solve it.'], easy:['Add means put together.','Take away means remove.','Draw it, then solve.']},
  {id:'c2', subject:'Mathematics', unit:3, title:'Fractions on a number line', mins:9, formats:['captions','sign-language','offline'], img:'math', current:true,
    normal:['A fraction is a part of a whole. On a number line, one half (½) sits exactly between 0 and 1.','We split the line into equal parts and count along.'], easy:['A fraction is a part of a whole.','½ is in the middle of 0 and 1.','Split the line into equal parts.']},
  // Science
  {id:'sc1', subject:'Science', unit:1, title:'Unit 1: The Aquatic Ecosystem', mins:8, formats:['captions','image-descriptions','offline'], img:'water', current:true,
    normal:['Living things grow, need food and water, and change over time. Non-living things do not.','Look around the classroom — which things are living?'], easy:['Living things grow and eat.','Non-living things do not.','Find living things near you.']},
  {id:'sc2', subject:'Science', unit:2, title:'Unit 2: Physical Properties of Water', mins:10, formats:['captions','image-descriptions','offline'], img:'temp',
    normal:['Water has unusual physical properties: its density falls as it freezes, and it has a high specific heat, which shapes climate and where living things can survive.','We explore density, specific heat, and how temperature affects marine life.'], easy:['Ice floats on water.','Water warms and cools slowly.','This helps animals in the sea.']},
  {id:'c3', subject:'Science', unit:3, title:'The water cycle', mins:14, formats:['captions','image-descriptions','offline'], img:'water',
    normal:['The sun warms water in the sea, and it rises as invisible vapour — this is evaporation. High in the sky the vapour cools and forms clouds — condensation.','When the clouds are heavy, water falls as rain, snow or hail — precipitation — and flows back to the sea. The cycle never stops.'],
    easy:['The sun heats the sea.','Water rises as vapour.','Clouds form in the sky.','Rain falls down.','Water goes back to the sea.']},
  // English
  {id:'en1', subject:'English', unit:1, title:'The alphabet', mins:7, formats:['read-aloud','captions','offline'], img:'english',
    normal:['English has 26 letters. Each has a name and a sound. We say them, then sing them.','Point to each letter as you hear it.'], easy:['English has 26 letters.','Each letter has a sound.','Point and say each one.']},
  {id:'en2', subject:'English', unit:2, title:'Colours and numbers', mins:8, formats:['read-aloud','captions','offline'], img:'english',
    normal:['We learn the words for colours and numbers and use them in short sentences: “three red apples”.','Find objects in the room and name their colour.'], easy:['Learn colour words.','Learn number words.','Say: three red apples.']},
  {id:'c4', subject:'English', unit:3, title:'Everyday greetings', mins:8, formats:['read-aloud','captions','offline'], img:'english', current:true,
    normal:['Greetings open every conversation. “Hello”, “Good morning”, “How are you?” — we practise saying them with a friend.','Listen, repeat, then try with a partner.'], easy:['Say: Hello.','Say: Good morning.','Ask: How are you?']},
  // Social Studies
  {id:'so1', subject:'Social Studies', unit:1, title:'My country, Egypt', mins:9, formats:['image-descriptions','offline'], img:'🇪🇬',
    normal:['Egypt is our country. The river Nile runs through it from south to north, and most people live close to its banks.','We find our city on the map.'], easy:['Egypt is our country.','The Nile runs through it.','Find your city on the map.']},
  {id:'so2', subject:'Social Studies', unit:2, title:'The river Nile', mins:10, formats:['image-descriptions','offline'], img:'social', current:true,
    normal:['The Nile gives water for drinking, farming and travel. Towns like Aswan and Cairo grew beside it.','We trace the river from Aswan to the sea.'], easy:['The Nile gives us water.','It helps farms grow.','Cities grew beside it.']},
];
/* a short assessment the student can actually take online */
/* A short quiz for every unit. Only the current week's quiz is officially open (see studentSubject);
   students can also run any open one as a no-stakes practice simulation. */
/* #14 Every Manassa quiz is FORMATIVE (for learning) — never an official exam. In production each
   item carries governance metadata (curriculum standard, grade, subject, unit, language version,
   accessibility review, difficulty estimate, answer key, explanation, item-owner approval). The
   stub below shows the schema; quizMeta() returns sensible defaults for the prototype. */
const FORMATIVE = true;
const QUIZ_META = {/* unitId: { standard, difficulty, a11yReviewed, owner, status, approvedOn } */};
function quizMeta(unitId){
  const q = (typeof QUIZZES!=='undefined' && QUIZZES[unitId]) || {};
  const m = QUIZ_META[unitId] || {};
  return {
    standard: m.standard || (TR('Curriculum standard ','معيار المنهج ')+(unitId||'').toUpperCase()),
    grade: m.grade || (typeof STUDENT_SELF!=='undefined' && STUDENT_SELF ? STUDENT_SELF.grade : 7),
    subject: q.subject || m.subject || '—',
    unit: unitId || '—',
    languages: m.languages || 'EN · AR',
    a11yReviewed: m.a11yReviewed!=null ? m.a11yReviewed : true,
    difficulty: m.difficulty || TR('medium','متوسّط'),
    items: (q.questions||[]).length,
    owner: m.owner || TR('Subject lead (pending approval)','مسؤول المادة (بانتظار الاعتماد)'),
    status: m.status || (FORMATIVE ? 'formative' : 'summative'),
  };
}
const QUIZZES={
  ar1:{unitId:'ar1', subject:'Arabic', title:'Quiz: Letters and sounds', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Every Arabic letter has a shape and a…',opts:['Sound','Price','Smell','Colour'],answer:0,explain:'A letter has a shape you see and a sound you say.'},
    {id:'q2',type:'mc',text:'What helps you remember a letter?',opts:['Saying its sound aloud','Hiding it','Tearing it','Ignoring it'],answer:0,explain:'Saying the sound out loud helps it stick.'},
    {id:'q3',type:'mc',text:'A word begins with its first…',opts:['Letter','Page','Picture','Day'],answer:0,explain:'The first letter gives the first sound of the word.'}]},
  ar2:{unitId:'ar2', subject:'Arabic', title:'Quiz: Short words', minutes:6, questions:[
    {id:'q1',type:'mc',text:'We build words by joining…',opts:['Letters','Rocks','Coins','Days'],answer:0,explain:'Letters join together to make words.'},
    {id:'q2',type:'mc',text:'Reading slowly helps you…',opts:['Remember','Forget','Rush','Sleep'],answer:0,explain:'Going slowly helps you read and remember.'},
    {id:'q3',type:'mc',text:'A good way to check a word is to…',opts:['Cover it and say it','Throw it','Colour it','Skip it'],answer:0,explain:'Cover, say it, then check — that tests your memory.'}]},
  c1:{unitId:'c1', subject:'Arabic', title:'Quiz: The Generous Host', minutes:7, questions:[
    {id:'q1',type:'mc',text:'The man by the road was known for being…',opts:['Generous','Greedy','Lazy','Angry'],answer:0,explain:'He shared food with every traveller — that is generous.'},
    {id:'q2',type:'mc',text:'What did the host give the traveller?',opts:['Food and water','Money only','Nothing','A horse'],answer:0,explain:'He shared bread, dates and cool water.'},
    {id:'q3',type:'mc',text:'How did the stranger feel?',opts:['Thankful','Angry','Bored','Afraid'],answer:0,explain:'The kindness made the stranger thankful.'}]},
  ma1:{unitId:'ma1', subject:'Mathematics', title:'Quiz: Counting in tens', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Counting in tens: 10, 20, …?',opts:['30','21','11','100'],answer:0,explain:'Each step adds ten: 10, 20, 30.'},
    {id:'q2',type:'mc',text:'How many are in one group of ten?',opts:['Ten','Five','Two','One'],answer:0,explain:'A group of ten has ten things in it.'},
    {id:'q3',type:'mc',text:'Counting in tens helps with…',opts:['Bigger numbers','Singing','Sleeping','Drawing'],answer:0,explain:'Tens let us count big amounts quickly.'}]},
  ma2:{unitId:'ma2', subject:'Mathematics', title:'Quiz: Adding and taking away', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Adding means…',opts:['Put together','Remove','Hide','Colour'],answer:0,explain:'Adding joins groups to make more.'},
    {id:'q2',type:'mc',text:'Taking away means…',opts:['Remove some','Add more','Count to 100','Draw'],answer:0,explain:'Taking away removes some, leaving fewer.'},
    {id:'q3',type:'mc',text:'Before solving, it helps to…',opts:['Draw the problem','Guess','Rush','Skip it'],answer:0,explain:'A picture makes the problem easy to see.'}]},
  c2:{unitId:'c2', subject:'Mathematics', title:'Quiz: Fractions', minutes:7, questions:[
    {id:'q1',type:'mc',text:'A fraction is…',opts:['A part of a whole','A whole','A letter','A colour'],answer:0,explain:'A fraction is one part of something whole.'},
    {id:'q2',type:'mc',text:'On a line from 0 to 1, ½ is…',opts:['In the middle','At 0','At 1','Outside'],answer:0,explain:'One half sits exactly between 0 and 1.'},
    {id:'q3',type:'mc',text:'We split the line into … parts.',opts:['Equal','Different','Random','No'],answer:0,explain:'Fractions need equal parts.'}]},
  sc1:{unitId:'sc1', subject:'Science', title:'Quiz: Living and non-living', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Living things…',opts:['Grow and need food','Never change','Are always metal','Cannot ever move'],answer:0,explain:'Living things grow, eat and change.'},
    {id:'q2',type:'mc',text:'Which one is non-living?',opts:['A rock','A cat','A tree','A bird'],answer:0,explain:'A rock does not grow or need food.'},
    {id:'q3',type:'mc',text:'Do non-living things need food?',opts:['No','Yes','Only at night','Once a year'],answer:0,explain:'Only living things need food.'}]},
  sc2:{unitId:'sc2', subject:'Science', title:'Quiz: Plants and sunlight', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Plants make their food using…',opts:['Sunlight','Sand','Plastic','Ice'],answer:0,explain:'Plants use sunlight to make their own food.'},
    {id:'q2',type:'mc',text:'Plants grow towards the…',opts:['Light','Dark','Cold','Noise'],answer:0,explain:'They lean towards light to catch more of it.'},
    {id:'q3',type:'mc',text:'As well as sunlight, plants need…',opts:['Water','Soda','Oil','Salt'],answer:0,explain:'Sunlight, water and air help plants grow.'}]},
  c3:{unitId:'c3', subject:'Science', title:'Quiz: The water cycle', minutes:10, questions:[
    {id:'q1',type:'mc',text:'What is it called when water turns into vapour?',opts:['Condensation','Evaporation','Precipitation','Collection'],answer:1,explain:'Evaporation is when the sun heats water and it rises as vapour. Condensation is the opposite — vapour cooling back into droplets.'},
    {id:'q2',type:'mc',text:'Clouds form mainly through…',opts:['Evaporation','Condensation','Erosion','Filtration'],answer:1,explain:'High in the sky the air is cold, so vapour condenses into droplets that gather into clouds.'},
    {id:'q3',type:'mc',text:'Rain, snow and hail are all forms of…',opts:['Runoff','Precipitation','Transpiration','Condensation'],answer:1,explain:'Precipitation is any water that falls from clouds. Runoff is water flowing along the ground afterwards.'},
    {id:'q4',type:'mc',text:'Where does most evaporation on Earth happen?',opts:['Lakes','Rivers','Oceans','Puddles'],answer:2,explain:'The oceans hold the most water, so most evaporation happens there.'}]},
  en1:{unitId:'en1', subject:'English', title:'Quiz: The alphabet', minutes:6, questions:[
    {id:'q1',type:'mc',text:'How many letters in the English alphabet?',opts:['26','10','100','5'],answer:0,explain:'English has 26 letters.'},
    {id:'q2',type:'mc',text:'Each letter has a name and a…',opts:['Sound','Price','Smell','Weight'],answer:0,explain:'Letters have a name and a sound.'},
    {id:'q3',type:'mc',text:'A good way to learn letters is to…',opts:['Point and say each one','Hide them','Skip them','Tear them'],answer:0,explain:'Pointing and saying each letter helps you learn.'}]},
  en2:{unitId:'en2', subject:'English', title:'Quiz: Colours and numbers', minutes:6, questions:[
    {id:'q1',type:'mc',text:'In “three red apples”, the colour word is…',opts:['Red','Three','Apples','And'],answer:0,explain:'“Red” names the colour.'},
    {id:'q2',type:'mc',text:'In “three red apples”, the number word is…',opts:['Three','Red','Apples','The'],answer:0,explain:'“Three” tells us how many.'},
    {id:'q3',type:'mc',text:'Colour and number words help us…',opts:['Describe things','Hide things','Sleep','Only sing'],answer:0,explain:'They describe what we see.'}]},
  c4:{unitId:'c4', subject:'English', title:'Quiz: Everyday greetings', minutes:6, questions:[
    {id:'q1',type:'mc',text:'Which one is a greeting?',opts:['Hello','Table','Seven','Blue'],answer:0,explain:'“Hello” greets someone.'},
    {id:'q2',type:'mc',text:'In the morning we say…',opts:['Good morning','Good night','Goodbye','Nothing'],answer:0,explain:'“Good morning” is the morning greeting.'},
    {id:'q3',type:'mc',text:'“How are you?” is a…',opts:['Question','Colour','Number','Animal'],answer:0,explain:'It asks something, so it is a question.'}]},
  so1:{unitId:'so1', subject:'Social Studies', title:'Quiz: My country, Egypt', minutes:6, questions:[
    {id:'q1',type:'mc',text:'The great river of Egypt is the…',opts:['Nile','Amazon','Thames','Tigris'],answer:0,explain:'The Nile runs through Egypt.'},
    {id:'q2',type:'mc',text:'Most people in Egypt live near the…',opts:['River','Desert middle','Mountain tops','Sea floor'],answer:0,explain:'People live close to the Nile, where there is water.'},
    {id:'q3',type:'mc',text:'Egypt is our…',opts:['Country','Street','School','Shop'],answer:0,explain:'Egypt is our country.'}]},
  so2:{unitId:'so2', subject:'Social Studies', title:'Quiz: The river Nile', minutes:6, questions:[
    {id:'q1',type:'mc',text:'The Nile gives us…',opts:['Water','Sand','Snow','Oil'],answer:0,explain:'The Nile gives water for drinking and farming.'},
    {id:'q2',type:'mc',text:'Which city sits on the Nile?',opts:['Aswan','Atlantis','Nowhere','Space'],answer:0,explain:'Aswan grew up beside the Nile.'},
    {id:'q3',type:'mc',text:'The Nile helps farms by giving…',opts:['Water','Rocks','Plastic','Noise'],answer:0,explain:'Crops need the water the Nile provides.'}]},
};
function quizFor(unitId){ return QUIZZES[unitId]||null; }
function activeQuiz(){ return (S.exam && QUIZZES[S.exam.quizId]) || null; }

/* ---------- Arabic localisation of learning content (augments the data above) ---------- */
function L(obj, base){ return (S.settings.lang==='ar' && obj && obj[base+'_ar']!=null) ? obj[base+'_ar'] : (obj?obj[base]:''); }
function qopts(q){ return (S.settings.lang==='ar' && q.opts_ar) ? q.opts_ar : q.opts; }
function TR(en,ar){ return S.settings.lang==='ar' ? ar : en; }
/* directional arrows that mirror in RTL: forward/next points with reading flow, back points against it */
function aFwd(){ return S.settings.lang==='ar' ? '←' : '→'; }
function aBack(){ return S.settings.lang==='ar' ? '→' : '←'; }
function aExt(){ return S.settings.lang==='ar' ? '↖' : '↗'; }
function taskNav(nextView, nextLabel){
  return `<nav class="flex between center wrapw" style="gap:.6rem;margin-top:1.3rem" aria-label="${TR('Navigation','تنقّل')}">
    <button class="btn sec" data-view="dashboard">${aBack()} ${t('dashboard')}</button>
    ${nextView?`<button class="btn" data-view="${nextView}">${nextLabel} ${aFwd()}</button>`:'<span></span>'}
  </nav>`;
}
function taskBack(){
  var stack=(S.viewStack||[]);
  var prev = stack.length ? stack[stack.length-1] : (S.route==='teacher' ? 'dashboard' : (S.route==='parent' ? 'home' : 'home'));
  var label = t(prev) || prev.replace(/^./, function(c){ return c.toUpperCase(); });
  return `<button class="btn ghost sm" data-back="1" style="margin-bottom:.6rem" aria-label="${TR('Back to','رجوع إلى')} ${label}">${aBack()} ${TR('Back','رجوع')}: ${label}</button>`;
}
function fmtDate(opts){ const loc=S.settings.lang==='ar'?'ar-EG':undefined; try{ return new Date().toLocaleDateString(loc,opts); }catch(_){ return new Date().toDateString(); } }
function fmtDateOf(ts,opts){ const loc=S.settings.lang==='ar'?'ar-EG':undefined; try{ return new Date(ts).toLocaleDateString(loc,opts||{day:'numeric',month:'short'}); }catch(_){ return new Date(ts).toDateString(); } }

/* ---- Option 2: calendar-driven assessment windows (teacher administers within the window) ---- */
const DAY_MS=86400000;
function assessWindows(){ const now=Date.now();
  return [
    {id:'w1', n:1, unit:currentUnitFor('Science'), open:now-2*DAY_MS, close:now+2*DAY_MS, retest:false},
    {id:'w2', n:2, unit:currentUnitFor('Science'), open:now+3*DAY_MS, close:now+5*DAY_MS, retest:true}, // the "3 days later" re-test
  ];
}
function winStatus(w){ const now=Date.now(); if(now<w.open) return 'upcoming'; if(now>w.close) return 'closed'; if(w.close-now<=DAY_MS) return 'closing'; return 'open'; }
function winStatusLabel(s){ return TR(
  {upcoming:'Opens soon',open:'Open now',closing:'Closing soon',closed:'Closed'}[s],
  {upcoming:'يفتح قريبًا',open:'مفتوح الآن',closing:'يُغلق قريبًا',closed:'مغلق'}[s]); }
function winTone(s){ return {upcoming:'info',open:'ok',closing:'warn',closed:''}[s]; }

/* deterministic completion model for the demo: each class is synced / pending(offline or paper) / not-yet.
   Low-connectivity schools are more likely "pending sync" — they still appear, never vanish. */
function allClasses(node){ if(!node) return []; if(node.level==='class') return [node];
  let out=[]; (node.children||[]).forEach(c=>{ out=out.concat(allClasses(c)); }); return out; }
function classWinStatus(cls, win){
  if(winStatus(win)==='upcoming') return 'notyet';
  const low = cls.parent && cls.parent.lowConn;
  const r=rng(hashStr(cls.id+win.id)); const x=r();
  const submitChance = low?0.72:0.92;
  if(x>submitChance) return 'notyet';
  const pendChance = low?0.55:0.12;       // offline / paper-transcribed, queued for sync
  return (r()<pendChance)?'pending':'synced';
}
function completionFor(node, win){
  const classes=allClasses(node); let synced=0,pending=0,notyet=0;
  classes.forEach(c=>{const s=classWinStatus(c,win); if(s==='synced')synced++; else if(s==='pending')pending++; else notyet++;});
  const total=classes.length||1;
  return {total:classes.length, synced, pending, notyet,
    pct:Math.round((synced+pending)/total*100), pctSynced:Math.round(synced/total*100), pctPending:Math.round(pending/total*100)};
}
function completionBar(c){
  return `<div style="display:flex;height:14px;border-radius:7px;overflow:hidden;background:var(--line);min-width:120px" role="img"
    aria-label="${c.pctSynced}% ${TR('synced','مُزامن')}, ${c.pctPending}% ${TR('pending sync','بانتظار المزامنة')}">
    <span style="width:${c.pctSynced}%;background:var(--ok-700)"></span>
    <span style="width:${c.pctPending}%;background:var(--warn-700)"></span></div>`;
}
function completionPanel(node){
  const wins=assessWindows(), w1=wins[0], w2=wins[1]; const s1=winStatus(w1);
  const c=completionFor(node,w1);
  const done=c.synced+c.pending;
  const childLbl=childLabel(node.level);
  const kids=(node.children||[]).slice(0,8);
  return `<section class="card mt2" style="border-inline-start:6px solid var(--${winTone(s1)||'teal'}-700)" aria-label="${TR('Assessment completion','اكتمال التقييم')}">
    <div class="flex between center wrapw" style="gap:.5rem">
      <div><p class="eyebrow" style="margin:0">${TR('Assessment completion','اكتمال التقييم')} · ${TR('window','نافذة')} ${w1.n}</p>
        <h3 style="margin:.15rem 0">${done.toLocaleString()} ${TR('of','من')} ${c.total.toLocaleString()} ${TR('classes submitted','فصلًا قُدِّم')} (${c.pct}%)</h3></div>
      <span class="tag ${winTone(s1)}">${winStatusLabel(s1)} · ${fmtDateOf(w1.open)}–${fmtDateOf(w1.close)}</span>
    </div>
    ${completionBar(c)}
    <p class="small muted" style="margin:.45rem 0 0">
      <span class="tag ok">${c.synced.toLocaleString()} ${TR('synced','مُزامن')}</span>
      <span class="tag warn">${c.pending.toLocaleString()} ${TR('pending sync (offline / paper)','بانتظار المزامنة (دون اتصال / ورقي)')}</span>
      <span class="tag">${c.notyet.toLocaleString()} ${TR('not yet','لم يُقدَّم بعد')}</span></p>
    <p class="small muted" style="margin:.3rem 0 0">${TR('Low-connectivity and paper-entry classes show as “pending sync,” never as missing — so the window stays visible everywhere.','تظهر فصول ضعف الاتصال والإدخال الورقي كـ«بانتظار المزامنة»، لا كمفقودة — لتبقى النافذة مرئية في كلّ مكان.')}</p>
    ${kids.length?`<div class="mt"><p class="eyebrow">${childLbl}</p>
      ${kids.map(ch=>{const cc=completionFor(ch,w1);
        return `<div class="flex between center" style="gap:.7rem;padding:.3rem 0"><span style="flex:1;min-width:120px;font-weight:600">${esc(nodeName(ch))}</span>
        <span style="flex:2;min-width:130px">${completionBar(cc)}</span><strong style="min-width:42px;text-align:end">${cc.pct}%</strong></div>`;}).join('')}
    </div>`:''}
    <p class="small" style="margin:.5rem 0 0"><span class="tag info">${TR('Window','نافذة')} ${w2.n} · ${TR('re-test','إعادة اختبار')}</span> ${TR('opens','تفتح')} ${fmtDateOf(w2.open)}.</p>
  </section>`;
}
function classWinBadge(cls){
  const w1=assessWindows()[0]; const s=classWinStatus(cls,w1);
  if(s==='synced') return `<span class="tag ok">✓ ${TR('Submitted (synced)','قُدِّم (مُزامن)')}</span>`;
  if(s==='pending') return `<span class="tag warn">⬆ ${TR('Submitted — pending sync','قُدِّم — بانتظار المزامنة')}</span>`;
  return `<span class="tag risk">● ${TR('Not submitted yet','لم يُقدَّم بعد')}</span>`;
}
const CONTENT_AR={
  ar1:{title:'الحروف والأصوات', normal:['لكلّ حرف عربيّ شكلٌ نراه وصوتٌ ننطقه. في هذه الوحدة نستمع إلى كلّ صوت ونرسم شكله.','انطق كلّ حرف بصوتٍ عالٍ، ثمّ ابحث عن كلمة تبدأ به.'], easy:['الحروف لها أصوات.','انطق الصوت بصوتٍ عالٍ.','ابحث عن كلمة تبدأ به.']},
  ar2:{title:'كلمات قصيرة', normal:['نَصِل الحروف لنبني كلماتٍ قصيرة نستعملها كلّ يوم. القراءة ببطء تساعدنا على التذكّر.','غطِّ الكلمة، انطقها، ثمّ تحقّق.'], easy:['الحروف تتّصل لتصنع كلمات.','اقرأ الكلمة ببطء.','انطقها ثمّ تحقّق.']},
  c1:{title:'قراءة: المضيف الكريم', normal:['منذ زمنٍ بعيد، بجانب طريقٍ مزدحم، عاش رجلٌ عُرف في الوادي كلّه بكرمه. لم يمرّ مسافرٌ ببابه جائعًا.','وفي إحدى الأمسيات وصل غريبٌ متعب. ودون أن يذكر أجرًا، شاركه الخبز والتمر والماء البارد، وأصغى إلى حكاياته.'], easy:['عاش رجلٌ كريم بجانب الطريق.','كان يطعم كلّ مسافر.','يومًا جاء غريبٌ متعب.','شاركه الرجل خبزه وماءه.','ابتسم الغريب وقال شكرًا.']},
  ma1:{title:'العدّ بالعشرات', normal:['العدّ بالعشرات يساعدنا على التعامل مع الأعداد الكبيرة بسرعة: ١٠، ٢٠، ٣٠ …','نجمع الأشياء في مجموعاتٍ من عشرة، ثمّ نعدّ المجموعات.'], easy:['عُدّ بالعشرات: ١٠، ٢٠، ٣٠.','اصنع مجموعات من عشرة.','عُدّ المجموعات.']},
  ma2:{title:'الجمع والطرح', normal:['الجمع يضمّ المجموعات معًا؛ والطرح يأخذ بعضها. الرسم يجعل هذا سهل الفهم.','حاول أن ترسم المسألة قبل أن تحلّها.'], easy:['الجمع يعني الضمّ معًا.','الطرح يعني الأخذ.','ارسمها ثمّ حلّها.']},
  c2:{title:'الكسور على خطّ الأعداد', normal:['الكسر جزءٌ من كلّ. على خطّ الأعداد، يقع النصف (½) تمامًا بين ٠ و١.','نقسم الخطّ إلى أجزاءٍ متساوية ونعدّ عليه.'], easy:['الكسر جزءٌ من كلّ.','½ في منتصف ٠ و١.','قسّم الخطّ إلى أجزاءٍ متساوية.']},
  sc1:{title:'الوحدة الأولى: النظام البيئى المائى', normal:['الكائنات الحيّة تنمو وتحتاج إلى الطعام والماء وتتغيّر مع الوقت، أمّا غير الحيّة فلا.','انظر حولك في الفصل — أيّ الأشياء حيّة؟'], easy:['الكائنات الحيّة تنمو وتأكل.','غير الحيّة لا تفعل.','ابحث عن كائناتٍ حيّة قربك.']},
  sc2:{title:'الوحدة الثانية: الخواص الفيزيائية للماء', normal:['للماء خواص فيزيائية متفرّدة تميّزه عن غيره من السوائل، مثل تناقص كثافته عند التجمّد وارتفاع حرارته النوعية، مما يؤثّر على المناخ وتوزيع الكائنات الحيّة.','نتعرّف الكثافة والحرارة النوعية وتأثير درجة الحرارة على الكائنات البحرية.'], easy:['الثلج يطفو فوق الماء.','الماء يسخن ويبرد ببطء.','هذا يساعد كائنات البحر.']},
  c3:{title:'دورة الماء', normal:['تُسخّن الشمس ماء البحر فيتصاعد بخارًا غير مرئيّ — هذا هو التبخّر. وفي السماء يبرد البخار فيتكوّن السحاب — التكاثف.','وعندما يثقل السحاب يسقط الماء مطرًا أو ثلجًا أو بَرَدًا — التساقط — ثمّ يعود إلى البحر. ولا تتوقّف الدورة.'], easy:['تُسخّن الشمس البحر.','يتصاعد الماء بخارًا.','يتكوّن السحاب في السماء.','يسقط المطر.','يعود الماء إلى البحر.']},
  en1:{title:'الحروف الإنجليزية', normal:['تتكوّن الإنجليزية من ٢٦ حرفًا، لكلٍّ منها اسمٌ وصوت. ننطقها ثمّ نغنّيها.','أشِر إلى كلّ حرف عندما تسمعه.'], easy:['الإنجليزية فيها ٢٦ حرفًا.','لكلّ حرف صوت.','أشِر وانطق كلّ واحد.']},
  en2:{title:'الألوان والأرقام', normal:['نتعلّم كلمات الألوان والأرقام ونستعملها في جملٍ قصيرة: «ثلاث تفّاحات حمراء».','ابحث عن أشياء في الغرفة وسمِّ لونها.'], easy:['تعلّم كلمات الألوان.','تعلّم كلمات الأرقام.','قل: ثلاث تفّاحات حمراء.']},
  c4:{title:'تحيات يومية', normal:['التحيّة تفتح كلّ حديث. «مرحبًا»، «صباح الخير»، «كيف حالك؟» — نتدرّب على قولها مع صديق.','استمع، ثمّ كرّر، ثمّ جرّب مع زميل.'], easy:['قل: مرحبًا.','قل: صباح الخير.','اسأل: كيف حالك؟']},
  so1:{title:'بلدي مصر', normal:['مصر بلدنا. يجري نهر النيل فيها من الجنوب إلى الشمال، ويعيش معظم الناس قرب ضفافه.','نبحث عن مدينتنا على الخريطة.'], easy:['مصر بلدنا.','النيل يجري فيها.','ابحث عن مدينتك على الخريطة.']},
  so2:{title:'نهر النيل', normal:['يمنحنا النيل الماء للشرب والزراعة والتنقّل. ونشأت قربه مدنٌ مثل أسوان والقاهرة.','نتتبّع النهر من أسوان إلى البحر.'], easy:['النيل يمنحنا الماء.','يساعد المزارع على النموّ.','نشأت قربه المدن.']},
};
CONTENT.forEach(c=>{ const a=CONTENT_AR[c.id]; if(a){ c.title_ar=a.title; c.normal_ar=a.normal; c.easy_ar=a.easy; } });

const QUIZZES_AR={
  ar1:{title:'اختبار: الحروف والأصوات', q:[
    {text:'لكلّ حرف عربيّ شكلٌ و…',opts:['صوت','ثمن','رائحة','لون'],explain:'للحرف شكلٌ نراه وصوتٌ ننطقه.'},
    {text:'ما الذي يساعدك على تذكّر الحرف؟',opts:['نطق صوته بصوتٍ عالٍ','إخفاؤه','تمزيقه','تجاهله'],explain:'النطق بصوتٍ عالٍ يثبّت الحرف.'},
    {text:'تبدأ الكلمة بحرفها…',opts:['الأوّل','صفحتها','صورتها','يومها'],explain:'الحرف الأوّل يعطي أوّل صوت في الكلمة.'}]},
  ar2:{title:'اختبار: كلمات قصيرة', q:[
    {text:'نبني الكلمات بوصل…',opts:['الحروف','الصخور','النقود','الأيام'],explain:'الحروف تتّصل لتصنع كلمات.'},
    {text:'القراءة ببطء تساعدك على…',opts:['التذكّر','النسيان','الاستعجال','النوم'],explain:'البطء يساعد على القراءة والتذكّر.'},
    {text:'أفضل طريقة لمراجعة كلمة أن…',opts:['تغطّيها وتنطقها','ترميها','تلوّنها','تتجاوزها'],explain:'غطِّ، انطق، ثمّ تحقّق.'}]},
  c1:{title:'اختبار: المضيف الكريم', q:[
    {text:'اشتهر الرجل بجانب الطريق بأنّه…',opts:['كريم','بخيل','كسول','غاضب'],explain:'كان يشارك طعامه مع كلّ مسافر، وهذا كرم.'},
    {text:'ماذا أعطى المضيفُ المسافرَ؟',opts:['طعامًا وماءً','نقودًا فقط','لا شيء','حصانًا'],explain:'شاركه الخبز والتمر والماء.'},
    {text:'كيف شعر الغريب؟',opts:['بالامتنان','بالغضب','بالملل','بالخوف'],explain:'جعله الكرم ممتنًّا.'}]},
  ma1:{title:'اختبار: العدّ بالعشرات', q:[
    {text:'العدّ بالعشرات: ١٠، ٢٠، …؟',opts:['٣٠','٢١','١١','١٠٠'],explain:'كلّ خطوة تزيد عشرة: ١٠، ٢٠، ٣٠.'},
    {text:'كم عددها في مجموعة العشرة؟',opts:['عشرة','خمسة','اثنان','واحد'],explain:'مجموعة العشرة فيها عشرة.'},
    {text:'العدّ بالعشرات يساعد في…',opts:['الأعداد الكبيرة','الغناء','النوم','الرسم'],explain:'العشرات تعدّ الكميات الكبيرة بسرعة.'}]},
  ma2:{title:'اختبار: الجمع والطرح', q:[
    {text:'الجمع يعني…',opts:['الضمّ معًا','الأخذ','الإخفاء','التلوين'],explain:'الجمع يضمّ المجموعات ليصير أكثر.'},
    {text:'الطرح يعني…',opts:['أخذ بعضها','إضافة المزيد','العدّ إلى ١٠٠','الرسم'],explain:'الطرح يأخذ بعضها فيبقى أقلّ.'},
    {text:'قبل الحلّ يفيد أن…',opts:['ترسم المسألة','تخمّن','تستعجل','تتجاوزها'],explain:'الرسم يوضّح المسألة.'}]},
  c2:{title:'اختبار: الكسور', q:[
    {text:'الكسر هو…',opts:['جزء من كلّ','الكلّ','حرف','لون'],explain:'الكسر جزءٌ من شيءٍ كامل.'},
    {text:'على خطٍّ من ٠ إلى ١، يقع ½…',opts:['في المنتصف','عند ٠','عند ١','خارجه'],explain:'النصف بين ٠ و١ تمامًا.'},
    {text:'نقسم الخطّ إلى أجزاء…',opts:['متساوية','مختلفة','عشوائية','بلا'],explain:'الكسور تحتاج أجزاءً متساوية.'}]},
  sc1:{title:'اختبار: الكائنات الحية وغير الحية', q:[
    {text:'الكائنات الحيّة…',opts:['تنمو وتحتاج طعامًا','لا تتغيّر أبدًا','معدنيّة دائمًا','لا تتحرّك أبدًا'],explain:'الحيّة تنمو وتأكل وتتغيّر.'},
    {text:'أيّها غير حيّ؟',opts:['صخرة','قطّة','شجرة','عصفور'],explain:'الصخرة لا تنمو ولا تأكل.'},
    {text:'هل تحتاج الأشياء غير الحيّة إلى طعام؟',opts:['لا','نعم','ليلًا فقط','مرّة سنويًّا'],explain:'الحيّة وحدها تحتاج طعامًا.'}]},
  sc2:{title:'اختبار: النباتات وضوء الشمس', q:[
    {text:'تصنع النباتات غذاءها باستخدام…',opts:['ضوء الشمس','الرمل','البلاستيك','الجليد'],explain:'تستعمل الشمس لتصنع غذاءها.'},
    {text:'تنمو النباتات نحو…',opts:['الضوء','الظلام','البرد','الضجيج'],explain:'تميل نحو الضوء لتلتقط أكثره.'},
    {text:'إضافةً إلى الشمس، يحتاج النبات…',opts:['ماءً','مشروبًا غازيًّا','زيتًا','ملحًا'],explain:'الشمس والماء والهواء تساعده على النموّ.'}]},
  c3:{title:'اختبار: دورة الماء', q:[
    {text:'ماذا نسمّي تحوّل الماء إلى بخار؟',opts:['التكاثف','التبخّر','التساقط','التجمّع'],explain:'التبخّر هو تسخين الماء فيتصاعد بخارًا، والتكاثف عكسه.'},
    {text:'يتكوّن السحاب أساسًا عن طريق…',opts:['التبخّر','التكاثف','التعرية','الترشيح'],explain:'في الأعلى يبرد البخار فيتكاثف إلى قطراتٍ تصنع السحاب.'},
    {text:'المطر والثلج والبَرَد كلّها صور من…',opts:['الجريان','التساقط','النتح','التكاثف'],explain:'التساقط هو كلّ ماءٍ يسقط من السحاب.'},
    {text:'أين يحدث معظم التبخّر على الأرض؟',opts:['البحيرات','الأنهار','المحيطات','البِرَك'],explain:'المحيطات تحوي أكثر الماء، فيحدث فيها معظم التبخّر.'}]},
  en1:{title:'اختبار: الحروف الإنجليزية', q:[
    {text:'كم عدد حروف الأبجدية الإنجليزية؟',opts:['٢٦','١٠','١٠٠','٥'],explain:'الإنجليزية فيها ٢٦ حرفًا.'},
    {text:'لكلّ حرف اسمٌ و…',opts:['صوت','ثمن','رائحة','وزن'],explain:'للحروف اسمٌ وصوت.'},
    {text:'من الطرق الجيّدة لتعلّم الحروف أن…',opts:['تشير وتنطق كلّ واحد','تخفيها','تتجاوزها','تمزّقها'],explain:'الإشارة والنطق يساعدان على التعلّم.'}]},
  en2:{title:'اختبار: الألوان والأرقام', q:[
    {text:'في «ثلاث تفّاحات حمراء»، كلمة اللون هي…',opts:['حمراء','ثلاث','تفّاحات','و'],explain:'«حمراء» تسمّي اللون.'},
    {text:'في «ثلاث تفّاحات حمراء»، كلمة العدد هي…',opts:['ثلاث','حمراء','تفّاحات','الـ'],explain:'«ثلاث» تخبر بالكمّية.'},
    {text:'كلمات الألوان والأرقام تساعدنا على…',opts:['وصف الأشياء','إخفائها','النوم','الغناء فقط'],explain:'تصف ما نراه.'}]},
  c4:{title:'اختبار: تحيات يومية', q:[
    {text:'أيٌّ ممّا يلي تحيّة؟',opts:['مرحبًا','طاولة','سبعة','أزرق'],explain:'«مرحبًا» تحيّة لشخص.'},
    {text:'في الصباح نقول…',opts:['صباح الخير','تصبح على خير','مع السلامة','لا شيء'],explain:'«صباح الخير» تحيّة الصباح.'},
    {text:'«كيف حالك؟» هي…',opts:['سؤال','لون','رقم','حيوان'],explain:'تسأل عن شيء، فهي سؤال.'}]},
  so1:{title:'اختبار: بلدي مصر', q:[
    {text:'النهر العظيم في مصر هو…',opts:['النيل','الأمازون','التايمز','دجلة'],explain:'النيل يجري في مصر.'},
    {text:'يعيش معظم سكّان مصر قرب…',opts:['النهر','وسط الصحراء','قمم الجبال','قاع البحر'],explain:'يعيش الناس قرب النيل حيث الماء.'},
    {text:'مصر…',opts:['بلدنا','شارع','مدرسة','متجر'],explain:'مصر بلدنا.'}]},
  so2:{title:'اختبار: نهر النيل', q:[
    {text:'يمنحنا النيل…',opts:['الماء','الرمل','الثلج','الزيت'],explain:'النيل يمنح الماء للشرب والزراعة.'},
    {text:'أيّ مدينة تقع على النيل؟',opts:['أسوان','أتلانتس','لا مكان','الفضاء'],explain:'نشأت أسوان بجانب النيل.'},
    {text:'يساعد النيل المزارع بإعطائها…',opts:['الماء','الصخور','البلاستيك','الضجيج'],explain:'المحاصيل تحتاج ماء النيل.'}]},
};
Object.keys(QUIZZES_AR).forEach(id=>{ const Q=QUIZZES[id], a=QUIZZES_AR[id]; if(Q&&a){ Q.title_ar=a.title; a.q.forEach((qa,i)=>{ if(Q.questions[i]){ Q.questions[i].text_ar=qa.text; Q.questions[i].opts_ar=qa.opts; Q.questions[i].explain_ar=qa.explain; } }); } });

/* ---------- announcements (WCAG 4.1.3 status messages) ---------- */
function announce(msg, assertive){
  const r=el(assertive?'live-assertive':'live'); if(!r) return;
  r.textContent=''; // force re-announce
  setTimeout(()=>{ r.textContent=msg; }, 30);
}
function toast(msg){
  const host=el('toast'); if(!host) return;
  host.hidden=false;
  host.innerHTML=`<span aria-hidden="true">✓</span> ${esc(msg)}`;
  announce(msg);
  clearTimeout(S.toastTimer);
  S.toastTimer=setTimeout(()=>{host.hidden=true; host.innerHTML='';}, 2600);
}
let _gradeUndo=null; // {stuId, subj, prev, inputId} for undo
function toastGradeUndo(name,prev,newVal){
  const host=el('toast'); if(!host) return;
  const prevLabel = prev!=null ? prev : '—';
  host.hidden=false;
  host.innerHTML=`<span aria-hidden="true">✓</span> ${esc(name)}: ${prevLabel} → ${newVal} <button type="button" data-undo-grade style="background:none;border:1.5px solid currentColor;border-radius:5px;color:inherit;font:inherit;font-size:.82rem;font-weight:700;padding:.1rem .5rem;cursor:pointer;margin-inline-start:.3rem">${TR('Undo','تراجع')}</button>`;
  announce(TR('Grade changed. Undo available.','تغيّرت الدرجة. يمكنك التراجع.'));
  clearTimeout(S.toastTimer);
  S.toastTimer=setTimeout(()=>{host.hidden=true; host.innerHTML=''; _gradeUndo=null;}, 5000);
}

/* ---------- apply accessibility settings to <html> ---------- */
function applySettings(){
  const r=el('root'); const s=S.settings;
  r.classList.toggle('fs-1', s.textSize===1);
  r.classList.toggle('fs-2', s.textSize===2);
  r.classList.toggle('hc', s.hc);
  r.classList.toggle('dark', s.dark);
  r.classList.toggle('no-motion', s.motion);
  r.classList.toggle('spacing', s.spacing);
  r.setAttribute('lang', s.lang);
  r.setAttribute('dir', I18N[s.lang].dir);
}
/* persist / restore accessibility prefs so a blind teacher doesn't redo them every day */
function saveA11y(){ try{ const p={lang:S.settings.lang,textSize:S.settings.textSize,hc:S.settings.hc,motion:S.settings.motion,spacing:S.settings.spacing,readAloud:S.settings.readAloud,speed:S.settings.speed}; localStorage.setItem('manassa-a11y',JSON.stringify(p)); }catch(e){} }
function restoreA11y(){ try{ const raw=localStorage.getItem('manassa-a11y'); if(!raw) return; const p=JSON.parse(raw); if(p&&typeof p==='object'){ Object.keys(p).forEach(k=>{ if(k in S.settings) S.settings[k]=p[k]; }); } }catch(e){} }

/* ---------- accessibility panel markup ---------- */
function a11yPanel(){
  const s=S.settings;
  const seg=(label,name,opts,cur)=>`
    <div class="a11y-row">
      <span id="${name}-lbl">${label}</span>
      <div class="seg" role="group" aria-labelledby="${name}-lbl">
        ${opts.map((o,i)=>`<button type="button" data-set="${name}" data-val="${o.v}" aria-pressed="${cur===o.v}">${o.t}</button>`).join('')}
      </div>
    </div>`;
  const tog=(label,name,on)=>`
    <div class="a11y-row">
      <span id="${name}-lbl">${label}</span>
      <button type="button" class="toggle" data-toggle="${name}" aria-pressed="${on}" aria-labelledby="${name}-lbl">${on?'On':'Off'}</button>
    </div>`;
  return `
  <section id="a11y" class="a11y-panel ${S.a11yOpen?'open':''}" aria-label="${t('a11y')} settings" ${S.a11yOpen?'':'aria-hidden="true"'}>
    <div class="flex between center" style="margin-bottom:.4rem">
      <h2 style="margin:0;font-size:1.05rem">${t('a11y')}</h2>
      <button type="button" class="iconbtn" data-close-a11y aria-label="${t('close')}">✕</button>
    </div>
    <p class="small muted" style="margin:0 0 .4rem">${TR('Changes apply instantly and are saved for next time.','تُطبَّق التغييرات فورًا وتُحفظ للمرّة القادمة.')}</p>
    ${seg(t('textSize'),'textSize',[{v:0,t:'A'},{v:1,t:'A+'},{v:2,t:'A++'}],s.textSize)}
    ${tog(t('contrast'),'hc',s.hc)}
    ${tog(t('motion'),'motion',s.motion)}
    ${tog(t('spacing'),'spacing',s.spacing)}
    ${tog(t('dark'),'dark',s.dark)}
    ${tog(t('enterAdvance'),'enterAdvance',s.enterAdvance)}
    ${tog(t('readaloud'),'readAloud',s.readAloud)}
    ${seg(t('readSpeed'),'speed',[{v:'slow',t:t('slow')},{v:'normal',t:t('normalSpeed')}],s.speed)}
    ${seg(t('language'),'lang',[{v:'en',t:'EN'},{v:'ar',t:'ع'}],s.lang)}
    <p class="small muted" style="margin:.6rem 0 0">${TR('Meets','يستوفي')} <strong>WCAG 2.2 AA</strong>${TR(': keyboard operable, 44px targets, accessible authentication, focus never obscured.','‏: التشغيل بلوحة المفاتيح، وأهداف لمس بحجم 44 بكسل، ومصادقة ميسّرة، وتركيز لا يُحجب أبدًا.')}</p>
  </section>`;
}
function settingsView(){
  const s=S.settings;
  const seg=(label,name,opts,cur,hint)=>`
    <div class="set-row">
      <div><span id="set-${name}-lbl" class="set-label">${label}</span>${hint?`<span class="set-hint">${hint}</span>`:''}</div>
      <div class="seg" role="group" aria-labelledby="set-${name}-lbl">
        ${opts.map(o=>`<button type="button" data-set="${name}" data-val="${o.v}" aria-pressed="${cur===o.v}">${o.t}</button>`).join('')}
      </div>
    </div>`;
  const tog=(label,name,on,hint)=>`
    <div class="set-row">
      <div><span id="set-${name}-lbl" class="set-label">${label}</span>${hint?`<span class="set-hint">${hint}</span>`:''}</div>
      <button type="button" class="toggle" data-toggle="${name}" aria-pressed="${on}" aria-labelledby="set-${name}-lbl">${on?'On':'Off'}</button>
    </div>`;
  const showTraining = S.route!=='login';
  return `
  <button class="btn ghost sm" data-settings-done style="margin-bottom:.6rem">${aBack()} ${t('done')}</button>
  <div class="page-head"><div><p class="eyebrow">${uiIcon('settings', 18)} ${t('settings')}</p><h1>${t('settings')} &amp; ${t('a11y')}</h1></div>
    ${speakBtn(t('settings')+'. '+t('settingsScope'))}</div>

  <div class="calm mb" style="border-color:var(--info-700)">${uiIcon('lock', 22)}
    <span>${t('settingsScope')}</span></div>

  <div class="card" style="max-width:680px">
    <h2 style="margin-top:0">${t('accountPrefs')}</h2>
    ${seg(t('language'),'lang',[{v:'en',t:'English'},{v:'ar',t:'العربية'}],s.lang)}
    ${seg(t('textSize'),'textSize',[{v:0,t:'A'},{v:1,t:'A+'},{v:2,t:'A++'}],s.textSize, S.settings.lang==='ar'?'يُضاف إلى حجم خطّ جهازك، ولا يحلّ محلّه.':'Adds to your device\u2019s text size — it does not replace it.')}
    ${tog(t('contrast'),'hc',s.hc, S.settings.lang==='ar'?'تباين أقوى داخل منصّة فقط.':'Stronger contrast inside Manassa only.')}
    ${tog(t('motion'),'motion',s.motion, S.settings.lang==='ar'?'إذا فعّل جهازك «تقليل الحركة»، فتتبعه منصّة دائمًا.':'If your device has \u201creduce motion\u201d on, Manassa always follows it.')}
    ${tog(t('spacing'),'spacing',s.spacing)}
    ${tog(t('dark'),'dark',s.dark)}
    ${tog(t('enterAdvance'),'enterAdvance',s.enterAdvance)}
    ${tog(t('readaloud'),'readAloud',s.readAloud)}
    ${seg(t('readSpeed'),'speed',[{v:'slow',t:t('slow')},{v:'normal',t:t('normalSpeed')}],s.speed, S.settings.lang==='ar'?'سرعة القراءة الصوتية.':'How fast read-aloud speaks.')}
    ${tog(TR('Developer notes','ملاحظات المطوّر'),'devNotes',s.devNotes, TR('Shows a collapsed “why this page exists” note under each page. Turn off for stakeholder demos.','يعرض ملاحظة مطويّة «لماذا توجد هذه الصفحة» أسفل كلّ صفحة. أوقفها لعروض أصحاب المصلحة.'))}
    <button class="btn sec mt" data-reset-a11y>↺ ${t('resetDefaults')}</button>
  </div>

  ${showTraining?`<div class="card" style="max-width:680px;display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
    ${uiIcon('book', 36)}
    <div style="flex:1;min-width:220px"><strong style="font-size:1.1rem">${t('training')} &amp; ${t('faqs')}</strong>
      <p style="margin:.2rem 0 0" class="small muted">${t('faqIntro')}</p></div>
    <button class="btn" data-goto-view="training">${t('training')}</button>
  </div>`:''}`;
}
function settingsShell(){
  return `${appbar()}<main id="main" tabindex="-1"><div class="wrap">${settingsView()}${devNote()}</div></main>${a11yPanel()}`;
}

/* ---------- top app bar + nav (role aware) ---------- */
function appbar(){
  const roleName={teacher:t('teacherPortal'),student:t('studentPortal'),admin:TR('Monitoring & support','المتابعة والدعم'),leader:TR('School leader','مدير المدرسة'),parent:t('parentPortal'),coordinator:TR('Limited-connectivity school','مدرسة ذات اتصال محدود'),sysadmin:TR('System administration','إدارة النظام'),control:TR('Exam Control Office','كنترول الامتحانات')}[S.route]||'';

  return `
  <header class="appbar" role="banner">
    <div class="wrap" style="display:flex;align-items:center;justify-content:space-between;gap:.6rem;flex-wrap:wrap">
      <div style="display:flex;align-items:center;gap:.6rem">
        <a class="brand" href="index.html" aria-label="${t('appName')} ${t('appTag')}">
          <span style="display:flex;align-items:center;gap:.5rem">
            <svg viewBox="0 0 986.4 301.3" style="height:28px;width:auto;vertical-align:middle" role="img" aria-label="iSchool Logo">
  <path fill="#FFD700" d="M232.8,112.1c-6-44.1-36.2-84.9-79.6-97.8c-49.2-16-102.5,7.4-138.3,39.5c-8,7.1,2.2,19.3,10.6,12.8c43.9-36.6,111.9-53.5,154-7.7c14.5,15.4,22.1,34,24.1,53.3H232.8z"/>
  <path fill="#FFD700" d="M200.7,149.5c-5.3,21.3-16.7,41.6-32.8,57.2c-20,20.5-44,38.5-68.8,44.8c-35.8,9.8-69.2-11.2-53.1-50.4c15.6-37.8,47.6-62.7,89.4-80.1l-2.1-4.3c28.2-16.6,2.4-59.8-26.1-43.9c-28.4,17.1-53.4,39.7-75.3,67c-26.5,32-46,83.6-18.5,121.8c34.7,47,103.3,33.7,142.8,2.4c37.7-27.9,68.8-67.1,76-114.4H200.7z"/>
  <path fill="#056FEC" d="M149.5,159.7l2.7,72.2c0.5,13.7-7.1,22.4-20,22.9c-12.9,0.5-21.2-7.6-21.7-21.3l-2.7-72.2c-0.5-13.7,7.1-22.4,20-22.9C140.7,137.9,149,146,149.5,159.7z"/>
  <path fill="#056FEC" d="M443.1,218.3c-9.5,12.8-24.7,21.3-43.1,23.8c-37.6,5.2-66.7-15.9-71.7-51.9c-5-36,17.2-64.2,54.9-69.4c16.5-2.3,31.6,0.7,44.8,9.4c4.3,3.1,7.2,7.6,7.9,12.8c1.6,11.3-4.8,19.7-16.1,21.3c-5,0.7-9.6-0.4-13.3-2.6c-6.6-3.7-12.2-4.9-18.2-4.1c-13.2,1.8-20.7,12.6-18.8,26.8c2,14.1,12.2,22.5,25.3,20.7c7.4-1,13.3-4.8,17.6-10.3c3.8-4.4,7.9-6.7,12.7-7.4c11.5-1.6,20,4.8,21.5,16.1C447.4,209.1,445.9,214.2,443.1,218.3z"/>
  <path fill="#056FEC" d="M581.2,190.2l-5.2,45.4c-1.5,13.2-10.2,20.5-22.7,19.1c-12.5-1.4-19.2-10.5-17.7-23.7l4.7-40.6c1.6-13.7-3.8-21.9-15.6-23.2c-13-1.5-20.9,6.1-22.7,21.5l-4.4,38c-1.5,13.2-10.2,20.5-22.7,19.1c-12.5-1.4-19.2-10.5-17.7-23.7L472,93.6c1.5-13.2,10.2-20.5,22.7-19.1C507.2,76,514,85,512.4,98.2l-4.8,41.8l0.5,0.1c8.2-7.3,19-10.2,31.7-8.8C570.8,134.9,585.2,155.6,581.2,190.2z"/>
  <path fill="#056FEC" d="M657.9,130.2c38,0,63.9,24.9,63.9,61.2s-25.9,61.2-63.9,61.2c-38,0-63.9-24.9-63.9-61.2S619.9,130.2,657.9,130.2z M657.9,215.4c13.3,0,22.3-9.7,22.3-24c0-14.3-9-24-22.3-24c-13.3,0-22.3,9.7-22.3,24C635.6,205.7,644.6,215.4,657.9,215.4z"/>
  <path fill="#056FEC" d="M798.4,124.4c38,0,63.9,24.9,63.9,61.2s-25.9,61.2-63.9,61.2c-38,0-63.9-24.9-63.9-61.2S760.4,124.4,798.4,124.4z M798.4,209.6c13.3,0,22.3-9.7,22.3-24c0-14.3-9-24-22.3-24s-22.3,9.7-22.3,24C776.2,199.9,785.1,209.6,798.4,209.6z"/>
  <path fill="#056FEC" d="M926.3,107.1l-14.1,128.4c-1.5,13.2-10.1,20.6-22.6,19.2c-12.5-1.4-19.3-10.4-17.9-23.6l14.1-128.4c1.5-13.2,10.1-20.6,22.6-19.2C921,84.8,927.8,93.8,926.3,107.1z"/>
  <path fill="#056FEC" d="M258.9,250.3c-22.2,2.4-45-2.3-64.2-13.1c-5.6-3.1-9.6-9.3-10.4-16c-1.3-11.7,7-21.8,18.8-23.1c4.6-0.5,8.9,0.4,13.1,2.7c13.2,7.7,25.9,10.7,39,9.3c4.2-0.5,17.9-2.7,16.9-12l0-0.5c-0.5-5-2.9-8.5-29.9-12.4c-31.4-4.5-57.7-11.1-61.6-46.8l0-0.4c-3.3-30.8,19-55,54.3-58.8c19.5-2.1,37.7,0.9,54.2,9c5,2.3,10.9,7.9,11.8,16.7c1.3,11.7-7,21.8-18.8,23.1c-4,0.4-7.6-0.2-11.5-1.9c-12.1-5.5-22.5-7.6-31.8-6.6c-9.4,1-15.1,5.2-14.5,10.6l0,0.5c0.7,6.2,3.5,8.7,32.2,12.8c28.7,4.2,55.6,12.8,59.3,46.2l0,0.5C319.4,222.4,297,246.1,258.9,250.3z"/>
  <circle fill="#FF7F1C" cx="123.3" cy="95.5" r="28"/>
</svg>
            <span style="width:1.5px;height:22px;background:rgba(255,255,255,.3);display:inline-block"></span>
            <span style="display:flex;flex-direction:column;line-height:1.1">
              <span style="font-size:.85rem;font-weight:800;color:#fff">${TR('Ministry of Education','وزارة التربية والتعليم')}</span>
              <span style="font-size:.72rem;color:var(--ischool-gold);font-weight:700">${t('appName')}</span>
            </span>
          </span>
        </a>
        
        <!-- Persistent Multi-Page Navigation Bar -->
        <nav style="display:inline-flex;align-items:center;gap:.25rem;background:rgba(0,0,0,.25);padding:.2rem .35rem;border-radius:999px;margin-inline-start:.4rem" aria-label="${TR('Portals','البوابات')}">
          <a href="ministry.html" class="btn ghost xs" style="min-height:28px;padding:.15rem .55rem;border-radius:999px;font-size:.76rem;${S.route==='admin'?'background:var(--ischool-gold);color:#0B192C;font-weight:800;':''}">${uiIcon('ministry', 13)} ${TR('Ministry','الوزارة')}</a>
          <a href="teacher.html" class="btn ghost xs" style="min-height:28px;padding:.15rem .55rem;border-radius:999px;font-size:.76rem;${S.route==='teacher'?'background:var(--ischool-gold);color:#0B192C;font-weight:800;':''}">${uiIcon('teacher', 13)} ${TR('Teacher','المعلم')}</a>
          <a href="student.html" class="btn ghost xs" style="min-height:28px;padding:.15rem .55rem;border-radius:999px;font-size:.76rem;${S.route==='student'?'background:var(--ischool-gold);color:#0B192C;font-weight:800;':''}">${uiIcon('student', 13)} ${TR('Student','الطالب')}</a>
          <a href="parent.html" class="btn ghost xs" style="min-height:28px;padding:.15rem .55rem;border-radius:999px;font-size:.76rem;${S.route==='parent'?'background:var(--ischool-gold);color:#0B192C;font-weight:800;':''}">${uiIcon('parent', 13)} ${TR('Parent','ولي الأمر')}</a>
        </nav>
      </div>

      <div style="display:flex;align-items:center;gap:.4rem">
        ${roleName ? `<span class="role-pill" style="border-color:var(--ischool-gold);font-size:.78rem;padding:.2rem .6rem"><span style="color:var(--ischool-gold);margin-inline-end:.25rem">●</span>${roleName}</span>` : ''}
        <div class="lang-switch" role="group" aria-label="${t('language')}">
          <button type="button" class="iconbtn sm" data-set="lang" data-val="ar" aria-pressed="${S.settings.lang==='ar'}" style="min-width:32px;min-height:32px;font-size:.8rem">ع</button>
          <button type="button" class="iconbtn sm" data-set="lang" data-val="en" aria-pressed="${S.settings.lang==='en'}" style="min-width:32px;min-height:32px;font-size:.8rem">En</button>
        </div>
        <button type="button" class="iconbtn sm" data-toggle="dark" aria-pressed="${S.settings.dark}" style="min-width:32px;min-height:32px" title="${t('dark')}">${S.settings.dark?uiIcon('sun', 16):uiIcon('moon', 16)}</button>
        <button type="button" class="iconbtn sm" data-open-a11y style="min-width:32px;min-height:32px" title="${t('a11y')}">${uiIcon('a11y', 17)}</button>
        <a href="index.html" class="btn ghost sm signout-btn" style="min-height:32px;font-size:.8rem;padding:0 .5rem">${t('signout')}</a>
      </div>
    </div>
  </header>`;
}
function nav(items){
  return `<nav class="mainnav" aria-label="${TR('Primary','التنقّل الرئيسي')}"><div class="wrap">
    ${items.map(i=>`<button type="button" class="navlink" data-view="${i.v}" data-close-content="1" aria-current="${S.view===i.v?'page':'false'}">
      <span aria-hidden="true">${i.ico}</span> ${i.t}</button>`).join('')}
  </div></nav>`;
}

/* ---------- LOGIN: three role-specific front doors ---------- */

/* ===================== ROLE-SPECIFIC MOCK SIGN-IN ===================== */
/* One source of truth (EMIS) provisions every account centrally — nobody self-registers.
   Daily authentication uses school Microsoft 365 accounts as the primary method.
   Fallbacks: teachers = ID + WhatsApp/SMS OTP or password; students = Student ID + PIN (offline);
   parents = no login (SMS-first). */
function initials(name){ return (name||'?').trim().split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase(); }
function qrMock(){ const r=rng(Date.now()&0xffff); let c=''; for(let i=0;i<121;i++){ c+= ri(r,0,2)? '<i></i>':'<i style="background:transparent"></i>'; }
  // force finder patterns in corners for a QR look
  return `<div class="qr-mock" aria-hidden="true">${c}</div>`; }
function authMethodPicker(role){
  const AR = S.settings.lang==='ar';
  // role-aware copy for the password card — admin/sysadmin already had a password world
  const phoneLine = AR
    ? 'يرسل لك التطبيق رمزًا قصيرًا على هاتفك عبر واتساب أو الرسائل النصّية. تكتب الرمز فتدخل. لا تحتاج لتذكّر شيء.'
    : 'A short code is sent to your phone over WhatsApp or SMS. You type the code and you are in. Nothing to remember.';
  const passLine = AR
    ? 'تكتب اسم المستخدم وكلمة المرور التي أعطاك إيّاها مسؤول مدرستك. تذكّرها واستخدمها كلّ مرّة.'
    : 'You type your username and the password your school admin gave you. Remember it and use it every time.';
  const readAloud = AR
    ? `اختر كيف تريد تسجيل الدخول. الخيار الأوّل: رمز عبر الهاتف — يصلك رمز قصير على هاتفك، تكتبه فتدخل، لا تحتاج لتذكّر شيء. الخيار الثاني: كلمة المرور — تكتب اسم المستخدم وكلمة السرّ التي أعطتك إيّاها مدرستك. اختر الذي يناسبك.`
    : `Choose how you want to sign in. Option one is a phone code — a short code is sent to your phone, you type it in and you are in, nothing to remember. Option two is a password — you type your username and the password your school gave you. Pick whichever suits you.`;
  return `
  <p class="lead" style="margin:0 0 .4rem;font-size:1.05rem">${AR?'اختر طريقة تسجيل الدخول':'Choose how to sign in'}</p>
  <p class="muted small" style="margin:0 0 .8rem">${AR?'كلّ الطرق آمنة. اختر الأسهل لك — يمكنك تغييرها لاحقًا.':'All ways are safe. Pick whichever is easier for you — you can change later.'}</p>
  <div style="display:flex;justify-content:flex-start;margin:0 0 .6rem">${speakBtn(readAloud, AR?'اقرأ الخيارات لي':'Read me the choices')}</div>
  <div class="grid" style="grid-template-columns:1fr;gap:.7rem">
    <button type="button" class="auth-method-card" data-auth-method="microsoft" aria-label="${AR?'تسجيل الدخول بحساب Microsoft':'Sign in with Microsoft'}" style="text-align:start;width:100%;background:#fff;border:2px solid #0078d4;border-radius:14px;padding:1rem 1.1rem;cursor:pointer;font:inherit;color:inherit;display:flex;gap:.9rem;align-items:flex-start">
      <span aria-hidden="true" style="flex:0 0 auto;line-height:1;margin-top:2px"><svg width="32" height="32" viewBox="0 0 21 21"><rect width="10" height="10" fill="#f25022"/><rect x="11" width="10" height="10" fill="#7fba00"/><rect y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg></span>
      <span style="flex:1;min-width:0">
        <span style="display:block;font-weight:800;font-size:1.1rem;color:#0078d4;margin-bottom:.25rem">${AR?'حساب Microsoft المدرسي':'School Microsoft account'}</span>
        <span style="display:block;font-size:.92rem;line-height:1.55">${AR?'سجّل الدخول بالبريد الإلكتروني وكلمة المرور الخاصّين بحساب Microsoft 365 المدرسي.':'Sign in with your school Microsoft 365 email and password.'}</span>
        <span class="tag" style="margin-top:.45rem;display:inline-block;background:#e8f4fd;color:#0078d4;border-color:#b8dcf0">✓ ${AR?'الأسرع':'Fastest'}</span>
      </span>
      <span aria-hidden="true" style="font-size:1.4rem;flex:0 0 auto;color:#0078d4">›</span>
    </button>
    <button type="button" class="auth-method-card" data-auth-method="phone" aria-label="${AR?'تسجيل الدخول برمز عبر الهاتف':'Sign in with a phone code'}" style="text-align:start;width:100%;background:#fff;border:2px solid var(--teal-700);border-radius:14px;padding:1rem 1.1rem;cursor:pointer;font:inherit;color:inherit;display:flex;gap:.9rem;align-items:flex-start">
      <span style="color:var(--ischool-blue);display:flex;align-items:center">${uiIcon('phone', 36)}</span>
      <span style="flex:1;min-width:0">
        <span style="display:block;font-weight:800;font-size:1.1rem;color:var(--teal-700);margin-bottom:.25rem">${AR?'رمز عبر الهاتف':'Phone code'}</span>
        <span style="display:block;font-size:.92rem;line-height:1.55">${esc(phoneLine)}</span>
        <span class="tag ok" style="margin-top:.45rem;display:inline-block">✓ ${AR?'الأسهل':'Easiest'}</span>
      </span>
      <span aria-hidden="true" style="font-size:1.4rem;flex:0 0 auto;color:var(--teal-700)">${AR?'›':'›'}</span>
    </button>
    <button type="button" class="auth-method-card" data-auth-method="password" aria-label="${AR?'تسجيل الدخول بكلمة المرور':'Sign in with a password'}" style="text-align:start;width:100%;background:#fff;border:2px solid var(--info-700,#0d5c8c);border-radius:14px;padding:1rem 1.1rem;cursor:pointer;font:inherit;color:inherit;display:flex;gap:.9rem;align-items:flex-start">
      <span aria-hidden="true" style="font-size:2.4rem;flex:0 0 auto;line-height:1">🔐</span>
      <span style="flex:1;min-width:0">
        <span style="display:block;font-weight:800;font-size:1.1rem;color:var(--info-700,#0d5c8c);margin-bottom:.25rem">${AR?'كلمة المرور':'Password'}</span>
        <span style="display:block;font-size:.92rem;line-height:1.55">${esc(passLine)}</span>
        <span class="tag info" style="margin-top:.45rem;display:inline-block">🔑 ${AR?'يحتاج تذكّر كلمة السرّ':'Need to remember your password'}</span>
      </span>
      <span aria-hidden="true" style="font-size:1.4rem;flex:0 0 auto;color:var(--info-700,#0d5c8c)">${AR?'›':'›'}</span>
    </button>
  </div>
  <p class="hint mt" style="margin-top:.8rem"><span aria-hidden="true">💡</span> ${AR?'نسيت كلمة المرور أو لم تستلم الرمز؟ تواصل مع مسؤول مدرستك ليساعدك.':'Forgot your password or did not get the code? Ask your school admin for help.'}</p>`;
}
function authPasswordForm(role){
  const AR = S.settings.lang==='ar';
  const idLabel = role==='teacher' ? (AR?'الرقم القومي أو كود المعلّم':'National ID or teacher code')
                : role==='student' ? (AR?'معرّف الطالب أو اسم المستخدم':'Student ID or username')
                : role==='parent'  ? (AR?'الرقم القومي أو رقمك المسجَّل':'National ID or registered number')
                : (AR?'اسم المستخدم':'Username');
  const sampleId = role==='teacher' ? 'DEMO-TEACHER-001'
                 : role==='student' ? 'DEMO-STUDENT-001'
                 : role==='parent'  ? 'DEMO-PARENT-001'
                 : 'admin.user';
  return `<span class="auth-method"><span aria-hidden="true">🔐</span> ${AR?'تسجيل الدخول بكلمة المرور':'Sign in with password'}</span>
    <p class="small muted" style="margin:.5rem 0 .6rem">${AR?'اكتب اسم المستخدم وكلمة المرور التي أعطاك إيّاها مسؤول مدرستك.':'Type the username and password your school admin gave you.'}</p>
    <div class="field"><label for="a-userid">${esc(idLabel)}</label>
      <input id="a-userid" inputmode="text" autocomplete="username" value="${esc(sampleId)}"></div>
    <div class="field mt"><label for="a-pwd">${AR?'كلمة المرور':'Password'}</label>
      <div style="position:relative">
        <input id="a-pwd" type="password" autocomplete="current-password" value="••••••••" style="width:100%;padding-inline-end:3rem">
        <button type="button" onclick="(function(b){const i=document.getElementById('a-pwd');if(!i)return;const sh=i.type==='password';i.type=sh?'text':'password';b.setAttribute('aria-pressed',String(sh));b.textContent=sh?'${AR?'إخفاء':'Hide'}':'${AR?'إظهار':'Show'}';})(this)" aria-pressed="false" style="position:absolute;inset-inline-end:.4rem;top:50%;transform:translateY(-50%);background:transparent;border:none;color:var(--teal-700);font:inherit;font-weight:700;cursor:pointer;padding:.3rem .5rem">${AR?'إظهار':'Show'}</button>
      </div>
    </div>
    <label class="flex center" style="gap:.5rem;justify-content:flex-start;margin:.5rem 0"><input type="checkbox" checked> <span class="small">${AR?'ابقَ مسجَّلًا على هذا الجهاز':'Stay signed in on this device'}</span></label>
    <button class="btn" data-login="${role}" style="width:100%;justify-content:center">${AR?'ادخل':'Sign in'}</button>
    <p class="hint mt"><span aria-hidden="true">💡</span> ${AR?'نسيت كلمة المرور؟ تواصل مع مسؤول مدرستك — يستطيع إعادة ضبطها لك في دقائق.':'Forgot your password? Ask your school admin — they can reset it in a couple of minutes.'}</p>`;
}
function authShell(role, icon, title, sub, body){
  return `${appbar()}
  <main id="main" tabindex="-1"><div class="wrap">
    <button class="btn ghost sm" data-auth-back style="margin:1rem 0 .4rem">${aBack()} ${TR('Back to portals','عودة للبوّابات')}</button>
    <div class="card auth-card">
      <div class="flex center" style="gap:.7rem;justify-content:flex-start">
        <span aria-hidden="true" style="font-size:2rem">${icon}</span>
        <div><p class="eyebrow" style="margin:0">${TR('Sign in','تسجيل الدخول')}</p><h1 style="margin:.1rem 0;font-size:1.5rem">${title}</h1></div>
      </div>
      <p class="muted small" style="margin:.2rem 0 .9rem">${sub}</p>
      ${body}
      <p class="hint mt">${TR('Demo — codes are pre-filled and any value works. Real accounts are provisioned centrally from EMIS; nobody self-registers.','عرض — الرموز معبّأة مسبقًا وأيّ قيمة تعمل. تُنشأ الحسابات مركزيًّا من EMIS؛ لا تسجيل ذاتيّ.')}</p>
    </div>
  </div></main>${a11yPanel()}`;
}
function authTeacher(){
  const step=S.auth.step||'method';
  const AR=S.settings.lang==='ar';
  let body;
  if(step==='method')      body = authMethodPicker('teacher');
  else if(step==='microsoft') body = `<div style="background:#fff;border:2px solid #0078d4;border-radius:14px;padding:1.2rem;margin-bottom:1rem">
      <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.8rem">
        <svg width="21" height="21" viewBox="0 0 21 21"><rect width="10" height="10" fill="#f25022"/><rect x="11" width="10" height="10" fill="#7fba00"/><rect y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg>
        <span style="font-weight:700;color:#333;font-size:1.05rem">Microsoft</span>
      </div>
      <div class="field"><label for="ms-t-email">${AR?'البريد الإلكتروني المدرسي':'School email'}</label>
        <input id="ms-t-email" type="email" value="m.hassan@school.edu.eg" autocomplete="username" style="font-size:1.05rem;padding:.65rem" placeholder="${AR?'teacher@school.edu.eg':'teacher@school.edu.eg'}"></div>
      <div class="field mt"><label for="ms-t-pwd">${AR?'كلمة المرور':'Password'}</label>
        <div style="position:relative">
          <input id="ms-t-pwd" type="password" autocomplete="current-password" value="••••••••" style="width:100%;padding-inline-end:3rem">
          <button type="button" onclick="(function(b){const i=document.getElementById('ms-t-pwd');if(!i)return;const sh=i.type==='password';i.type=sh?'text':'password';b.textContent=sh?'${AR?'إخفاء':'Hide'}':'${AR?'إظهار':'Show'}';})(this)" style="position:absolute;inset-inline-end:.4rem;top:50%;transform:translateY(-50%);background:transparent;border:none;color:#0078d4;font:inherit;font-weight:700;cursor:pointer;padding:.3rem .5rem">${AR?'إظهار':'Show'}</button>
        </div>
      </div>
      <label class="flex center" style="gap:.5rem;justify-content:flex-start;margin:.5rem 0"><input type="checkbox" checked> <span class="small">${AR?'تذكّر هذا الجهاز':'Remember this device'}</span></label>
      <button class="btn" data-login="teacher" style="width:100%;justify-content:center;background:#0078d4;border-color:#0078d4">
        <svg width="16" height="16" viewBox="0 0 21 21" style="margin-inline-end:6px"><rect width="10" height="10" fill="#fff"/><rect x="11" width="10" height="10" fill="#fff" opacity=".7"/><rect y="11" width="10" height="10" fill="#fff" opacity=".7"/><rect x="11" y="11" width="10" height="10" fill="#fff" opacity=".5"/></svg>
        ${AR?'ادخل بحساب Microsoft':'Sign in with Microsoft'}</button>
    </div>
    <p class="small muted" style="text-align:center">${AR?'يتم تسجيل الدخول عبر Microsoft 365 الخاص بمدرستك.':'You sign in through your school&#39;s Microsoft 365.'}</p>
    <p class="hint mt"><span aria-hidden="true">💡</span> ${AR?'نسيت كلمة المرور؟ تواصل مع مسؤول مدرستك لإعادة ضبطها.':'Forgot your password? Ask your school admin to reset it.'}</p>`;
  else if(step==='pwd')    body = authPasswordForm('teacher');
  else if(step==='otp')    body = `<div class="wa-note"><span aria-hidden="true">🟢</span> ${TR('Code sent on <strong>WhatsApp</strong> to your registered number — we also sent an <strong>SMS</strong> as backup.','أُرسل الرمز عبر <strong>واتساب</strong> إلى رقمك المسجّل — وأرسلنا <strong>رسالة نصّية</strong> احتياطية أيضًا.')}</div>
      <p class="small muted" style="margin:.7rem 0 .2rem">${TR('Enter the 6-digit code','أدخل الرمز المكوّن من 6 أرقام')}</p>
      <div class="otp-row">${[2,9,1,4,0,7].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('digit','رقم')}">`).join('')}</div>
      <label class="flex center" style="gap:.5rem;justify-content:flex-start;margin:.4rem 0"><input type="checkbox" checked> <span class="small">${TR('Remember this device (stay signed in on my own phone)','تذكّر هذا الجهاز (ابقَ مسجَّلًا على هاتفي)')}</span></label>
      <button class="btn" data-login="teacher" style="width:100%;justify-content:center">${TR('Verify & sign in','تحقّق وادخل')}</button>
      <p class="small muted mt">${TR('A teacher should almost never re-enter a code on their own trusted phone — sessions persist.','نادرًا ما يُعيد المعلّم إدخال الرمز على هاتفه الموثوق — الجلسات تبقى مفتوحة.')}</p>`;
  else /* step==='id' */   body = `<span class="auth-method"><span aria-hidden="true">🪪</span> ${TR('National ID / ministry code + one-time code','الرقم القومي / كود الوزارة + رمز لمرّة')}</span>
      <div class="field mt"><label for="t-id">${TR('National ID or ministry code','الرقم القومي أو كود الوزارة')}</label>
        <input id="t-id" inputmode="numeric" autocomplete="username" value="DEMO-TEACHER-001" ></div>
      <button class="btn" data-auth-send style="width:100%;justify-content:center"><span aria-hidden="true">🟢</span> ${TR('Send code on WhatsApp','أرسل الرمز عبر واتساب')}</button>
      <p class="small muted" style="margin:.5rem 0 0">${TR('The code goes to the number your school registered for this ID — you don’t type it, so nobody can redirect it.','يُرسل الرمز إلى الرقم الذي سجّلته مدرستك لهذا المعرّف — لا تكتبه، فلا يستطيع أحد تحويله.')}</p>
      <details class="mt"><summary class="small" style="cursor:pointer">${TR('Wrong number, or no longer have this SIM?','الرقم خطأ أو لم تعد تملك الشريحة؟')}</summary>
        <p class="small muted" style="margin:.5rem 0 0">${TR('Your school admin updates it in EMIS after a quick ID check (about 2 minutes), then a fresh code is sent. It can’t be changed by self-service — that’s what stops someone hijacking your account by swapping the number.','يحدّثه مسؤول مدرستك في EMIS بعد تحقّق سريع من الهوية (نحو دقيقتين)، ثمّ يُرسل رمز جديد. ولا يُغيَّر ذاتيًّا — وهذا ما يمنع اختطاف حسابك بتبديل الرقم.')}</p></details>
      <details class="mt"><summary class="small" style="cursor:pointer">${TR('Using a shared school tablet?','تستخدم جهازًا لوحيًّا مشتركًا؟')}</summary>
        <div class="flex center" style="gap:1rem;flex-wrap:wrap;margin-top:.6rem;justify-content:flex-start">${qrMock()}
          <p class="small muted" style="max-width:240px;margin:0">${TR('Scan this one-time QR with the Manassa app on your own phone to sign the tablet in. The code expires in 2 minutes.','امسح رمز QR لمرّة واحدة بتطبيق منصّة على هاتفك لتسجيل دخول الجهاز اللوحي. ينتهي الرمز خلال دقيقتين.')}</p></div></details>`;
  return authShell('teacher','🧑‍🏫', TR('Teacher','المعلّم'), '', body);
}
function authStudent(){
  const AR=S.settings.lang==='ar';
  const step=(S.auth&&S.auth.step)||'method';
  let body;
  if(step==='microsoft'){
    body=`<div style="background:#fff;border:2px solid #0078d4;border-radius:14px;padding:1.2rem;margin-bottom:1rem">
      <div style="display:flex;align-items:center;gap:.5rem;margin-bottom:.8rem">
        <svg width="21" height="21" viewBox="0 0 21 21"><rect width="10" height="10" fill="#f25022"/><rect x="11" width="10" height="10" fill="#7fba00"/><rect y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg>
        <span style="font-weight:700;color:#333;font-size:1.05rem">Microsoft</span>
      </div>
      <div class="field"><label for="ms-email">${AR?'البريد الإلكتروني المدرسي':'School email'}</label>
        <input id="ms-email" type="email" value="omar.rami@school.edu.eg" autocomplete="username" style="font-size:1.05rem;padding:.65rem" placeholder="${AR?'student@school.edu.eg':'student@school.edu.eg'}"></div>
      <div class="field mt"><label for="ms-pwd">${AR?'كلمة المرور':'Password'}</label>
        <div style="position:relative">
          <input id="ms-pwd" type="password" autocomplete="current-password" value="••••••••" style="width:100%;padding-inline-end:3rem">
          <button type="button" onclick="(function(b){const i=document.getElementById('ms-pwd');if(!i)return;const sh=i.type==='password';i.type=sh?'text':'password';b.textContent=sh?'${AR?'إخفاء':'Hide'}':'${AR?'إظهار':'Show'}';})(this)" style="position:absolute;inset-inline-end:.4rem;top:50%;transform:translateY(-50%);background:transparent;border:none;color:#0078d4;font:inherit;font-weight:700;cursor:pointer;padding:.3rem .5rem">${AR?'إظهار':'Show'}</button>
        </div>
      </div>
      <label class="flex center" style="gap:.5rem;justify-content:flex-start;margin:.5rem 0"><input type="checkbox" checked> <span class="small">${AR?'ابقَ مسجَّلًا':'Stay signed in'}</span></label>
      <button class="btn" data-login="student" style="width:100%;justify-content:center;background:#0078d4;border-color:#0078d4">
        <svg width="16" height="16" viewBox="0 0 21 21" style="margin-inline-end:6px"><rect width="10" height="10" fill="#fff"/><rect x="11" width="10" height="10" fill="#fff" opacity=".7"/><rect y="11" width="10" height="10" fill="#fff" opacity=".7"/><rect x="11" y="11" width="10" height="10" fill="#fff" opacity=".5"/></svg>
        ${AR?'ادخل بحساب Microsoft':'Sign in with Microsoft'}</button>
    </div>
    <p class="small muted" style="text-align:center">${AR?'يتم تسجيل الدخول عبر Microsoft 365 الخاص بمدرستك.':'You sign in through your school&#39;s Microsoft 365.'}</p>
    <p class="hint mt"><span aria-hidden="true">💡</span> ${AR?'نسيت كلمة المرور؟ تواصل مع مسؤول مدرستك لإعادة ضبطها.':'Forgot your password? Ask your school admin to reset it.'}</p>`;
  } else if(step==='pin'){
    body=`<span class="auth-method"><span aria-hidden="true">🔑</span> ${AR?'دخول بمعرّف الطالب والرقم السرّي':'Sign in with Student ID & PIN'}</span>
    <p class="small muted" style="margin:.5rem 0 .6rem">${AR?'استخدم معرّف الطالب والرقم السرّي اللذين أعطاك إيّاهما معلّمك.':'Use the student ID and PIN your teacher gave you.'}</p>
    <div class="field"><label for="s-id">${TR('Student ID','معرّف الطالب')}</label>
      <input id="s-id" value="DEMO-STUDENT-001" inputmode="text" autocomplete="username" style="font-size:1.1rem;padding:.7rem;text-align:center;letter-spacing:1px"></div>
    <p class="small muted" style="margin:.6rem 0 .3rem">${TR('4-digit PIN','الرقم السرّي (4 أرقام)')}</p>
    <div class="otp-row">${[4,2,8,1].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('PIN digit','رقم سرّي')}">`).join('')}</div>
    <button class="btn" data-login="student" style="width:100%;justify-content:center;margin-top:.8rem;padding:.8rem">${TR('Sign in','ادخل')}</button>
    <p class="small muted mt" style="text-align:center">${TR('Forgot your PIN? Your teacher resets it at school.','نسيت رقمك السرّي؟ يعيد معلّمك ضبطه بالمدرسة.')}</p>`;
  } else {
    /* step==='method' — default landing */
    body=`<button type="button" data-auth-method="microsoft" style="width:100%;background:#0078d4;color:#fff;border:2px solid #005a9e;border-radius:14px;padding:1rem;cursor:pointer;font:inherit;font-weight:800;font-size:1.1rem;display:flex;align-items:center;justify-content:center;gap:.7rem;margin-bottom:.7rem">
      <svg width="21" height="21" viewBox="0 0 21 21"><rect width="10" height="10" fill="#fff"/><rect x="11" width="10" height="10" fill="#fff" opacity=".7"/><rect y="11" width="10" height="10" fill="#fff" opacity=".7"/><rect x="11" y="11" width="10" height="10" fill="#fff" opacity=".5"/></svg>
      ${AR?'تسجيل الدخول بحساب Microsoft':'Sign in with Microsoft'}
    </button>
    <p class="small muted" style="text-align:center;margin:0 0 1rem">${AR?'استخدم حسابك المدرسي (البريد الإلكتروني وكلمة المرور) للدخول.':'Use your school account (email and password) to sign in.'}</p>
    <div style="display:flex;align-items:center;gap:.8rem;margin:1rem 0"><hr style="flex:1;border:none;border-top:1px solid #ddd"><span class="small muted">${AR?'أو':'or'}</span><hr style="flex:1;border:none;border-top:1px solid #ddd"></div>
    <button type="button" data-auth-method="pin" style="width:100%;background:#fff;border:2px solid var(--teal-700);border-radius:14px;padding:.85rem;cursor:pointer;font:inherit;color:inherit;display:flex;align-items:center;justify-content:center;gap:.6rem">
      <span aria-hidden="true" style="font-size:1.3rem">🔑</span>
      <span style="font-weight:700;color:var(--teal-700)">${AR?'الدخول بمعرّف الطالب والرقم السرّي':'Sign in with Student ID & PIN'}</span>
    </button>
    <p class="tiny muted" style="text-align:center;margin-top:.5rem">${TR('Same login works on any device — phone, tablet, or computer.','نفس تسجيل الدخول يعمل على أيّ جهاز — هاتف أو جهاز لوحي أو حاسوب.')}</p>`;
  }
  return authShell('student','🧑‍🎓', TR('Student','الطالب'),
    TR('Sign in with your school Microsoft account or student ID.','سجّل الدخول بحساب Microsoft المدرسي أو معرّف الطالب.'), body);
}
function authParent(){
  const step=S.auth.step||'method';
  let body;
  if(step==='method')    body = authMethodPicker('parent');
  else if(step==='pwd')  body = authPasswordForm('parent');
  else if(step==='otp')  body = `<div class="wa-note"><span aria-hidden="true">🟢</span> ${TR('One-time code sent on <strong>WhatsApp</strong> to the number on file for you.','أُرسل رمز لمرّة واحدة عبر <strong>واتساب</strong> إلى الرقم المسجّل لك.')}</div>
       <p class="small muted" style="margin:.7rem 0 .2rem">${TR('Enter the 6-digit code','أدخل الرمز المكوّن من 6 أرقام')}</p>
       <div class="otp-row">${[5,1,3,9,0,2].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('digit','رقم')}">`).join('')}</div>
       <label class="flex center" style="gap:.5rem;justify-content:flex-start;margin:.4rem 0"><input type="checkbox" checked> <span class="small">${TR('Stay signed in on this device','ابقَ مسجَّلًا على هذا الجهاز')}</span></label>
       <button class="btn" data-login="parent" style="width:100%;justify-content:center">${TR('Verify & open portal','تحقّق وافتح البوّابة')}</button>`;
  else /* step==='id' */ body = `<span class="auth-method"><span aria-hidden="true">🪪</span> ${TR('National ID + one-time code · online','الرقم القومي + رمز لمرّة واحدة · عبر الإنترنت')}</span>
       <div class="field mt"><label for="p-id">${TR('National ID or registered mobile','الرقم القومي أو الجوّال المسجّل')}</label>
         <input id="p-id" inputmode="numeric" autocomplete="username" value="DEMO-PARENT-001"></div>
       <button class="btn" data-auth-send style="width:100%;justify-content:center"><span aria-hidden="true">🟢</span> ${TR('Send one-time code','أرسل رمزًا لمرّة واحدة')}</button>
       <p class="small muted" style="margin:.5rem 0 0">${TR('You’re linked to your child automatically from school enrolment — no setup, and you only ever see your own child.','أنت مرتبط بطفلك تلقائيًّا من تسجيل المدرسة — دون إعداد، ولا ترى إلا طفلك أنت.')}</p>
       <details class="mt"><summary class="small" style="cursor:pointer">${TR('No access to that number?','لا تملك هذا الرقم؟')}</summary>
         <p class="small muted" style="margin:.5rem 0 0">${TR('Ask your child’s school to update your number on their record (a quick ID check). It isn’t self-service, to keep your child’s data safe.','اطلب من مدرسة طفلك تحديث رقمك في ملفّه (تحقّق سريع من الهوية). وليست خدمة ذاتية حفاظًا على بيانات طفلك.')}</p></details>`;
  return authShell('parent','👪', TR('Parent / guardian','وليّ الأمر'),
    TR('Sign in online to follow your child’s attendance and marks. Simple and secure — no app to install.','سجّل عبر الإنترنت لمتابعة حضور طفلك ودرجاته. بسيط وآمن — دون تطبيق.'), body);
}
function authAdmin(){
  const step=S.auth.step||'id';
  const body = step==='otp'
    ? `<div class="wa-note" style="background:#eef;border-color:var(--info-700);color:var(--info-700)"><span aria-hidden="true">🔐</span> ${TR('Two-factor code sent to your registered Ministry device.','أُرسل رمز التحقّق الثنائي إلى جهازك الوزاري المسجّل.')}</div>
       <div class="otp-row">${[7,3,3,1,9,5].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('digit','رقم')}">`).join('')}</div>
       <button class="btn" data-login="admin" style="width:100%;justify-content:center">${TR('Verify & sign in','تحقّق وادخل')}</button>
       <p class="small muted mt">${TR('Every sign-in is recorded (user, role, time, IP) in the access log, and you only ever see your own area and below.','يُسجَّل كلّ دخول (المستخدم، الدور، الوقت، IP) في سجلّ الوصول، ولا ترى إلا منطقتك وما دونها.')}</p>`
    : `<span class="auth-method"><span aria-hidden="true">🏛️</span> ${TR('Ministry account + two-factor','حساب وزاري + تحقّق ثنائي')}</span>
       <div class="field mt"><label for="a-id">${TR('Ministry email or national ID','البريد الوزاري أو الرقم القومي')}</label><input id="a-id" autocomplete="username" value="h.saleh@moe.gov.eg"></div>
       <div class="field"><label for="a-pw">${TR('Password','كلمة المرور')}</label><input id="a-pw" type="password" autocomplete="current-password" value="••••••••"></div>
       <button class="btn" data-auth-send style="width:100%;justify-content:center">${TR('Continue','متابعة')}</button>`;
  return authShell('admin','🏛️', TR('Ministry / administration','الوزارة / الإدارة'),
    TR('Ministry single sign-on with two-factor. Access is least-privilege and fully logged.','دخول موحّد للوزارة مع تحقّق ثنائي. الوصول بأقلّ صلاحية ومُسجَّل بالكامل.'), body);
}
function authCoordinator(){
  const step=S.auth.step||'method';
  let body;
  if(step==='method')    body = authMethodPicker('coordinator');
  else if(step==='pwd')  body = authPasswordForm('coordinator');
  else if(step==='otp')  body = `<div class="wa-note"><span aria-hidden="true">🟢</span> ${TR('Code sent on WhatsApp (SMS backup).','أُرسل الرمز عبر واتساب (نسخة نصّية احتياطية).')}</div>
       <div class="otp-row">${[6,0,4,2,8,1].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('digit','رقم')}">`).join('')}</div>
       <button class="btn" data-login="coordinator" style="width:100%;justify-content:center">${TR('Sign in','ادخل')}</button>`;
  else /* step==='id' */ body = `<span class="auth-method" style="background:var(--warn-050);color:var(--warn-700)"><span aria-hidden="true">📶</span> ${TR('School code + code · works offline after first sign-in','كود المدرسة + رمز · يعمل دون اتصال بعد أوّل دخول')}</span>
       <div class="field mt"><label for="c-school">${TR('School code','كود المدرسة')}</label><input id="c-school" value="ASW-074-NSINAI"></div>
       <div class="field"><label for="c-id">${TR('Coordinator ID','معرّف المنسّق')}</label><input id="c-id" value="DEMO-COORD-001"></div>
       <button class="btn" data-auth-send style="width:100%;justify-content:center">${TR('Send code','أرسل الرمز')}</button>
       <p class="small muted mt">${TR('After the first online sign-in, the coordinator can keep working offline; records sync when a connection returns.','بعد أوّل دخول عبر الإنترنت، يمكن للمنسّق العمل دون اتصال؛ وتُزامَن السجلّات عند عودة الاتصال.')}</p>`;
  return authShell('coordinator','📶', TR('Offline-school coordinator','منسّق مدرسة ذات اتصال محدود'),
    TR('Sign in with your school code; afterwards the app works offline and syncs later.','سجّل بكود مدرستك؛ بعدها يعمل التطبيق دون اتصال ويُزامن لاحقًا.'), body);
}
function authSysadmin(){
  const step=S.auth.step||'id';
  const body = step==='otp'
    ? `<div class="wa-note" style="background:#eef;border-color:var(--info-700);color:var(--info-700)"><span aria-hidden="true">🔐</span> ${TR('Two-factor code sent to your registered security key / authenticator.','أُرسل رمز التحقّق الثنائي إلى مفتاح الأمان / المُصادِق المسجّل.')}</div>
       <div class="otp-row">${[4,8,1,9,0,6].map(n=>`<input class="otp-box" inputmode="numeric" maxlength="1" value="${n}" aria-label="${TR('digit','رقم')}">`).join('')}</div>
       <button class="btn" data-login="sysadmin" style="width:100%;justify-content:center">${TR('Verify & sign in','تحقّق وادخل')}</button>
       <p class="small muted mt">${TR('System-admin sessions are short, hardware-key protected, and every action is logged. You only ever see your own tier and below.','جلسات مسؤول النظام قصيرة ومحميّة بمفتاح صلب، وكلّ إجراء مُسجَّل. ولا ترى إلا مستواك وما دونه.')}</p>`
    : `<span class="auth-method" style="background:var(--risk-050);color:var(--risk-700)"><span aria-hidden="true">🔐</span> ${TR('Ministry SSO + hardware-key 2FA','دخول موحّد + مفتاح صلب')}</span>
       <div class="field mt"><label for="sa-id">${TR('Ministry admin ID','معرّف مسؤول الوزارة')}</label><input id="sa-id" autocomplete="username" value="adm-sys-014"></div>
       <div class="field"><label for="sa-pw">${TR('Password','كلمة المرور')}</label><input id="sa-pw" type="password" autocomplete="current-password" value="••••••••••"></div>
       <button class="btn" data-auth-send style="width:100%;justify-content:center">${TR('Continue','متابعة')}</button>`;
  return authShell('sysadmin','🔐', TR('System administration','إدارة النظام'),
    TR('High-security sign-in for identity & access management. SSO with hardware-key two-factor.','دخول عالي الأمان لإدارة الهوية والوصول. دخول موحّد مع مفتاح صلب للتحقّق الثنائي.'), body);
}
function authLeader(){
  return authShell('leader','🏫', TR('School leader','مدير المدرسة'),
    TR('Sign in to manage your school — excuses, results, and classrooms.','سجّل دخولك لإدارة مدرستك — الأعذار والنتائج والفصول.'),
    `<button type="button" data-login="leader" style="text-align:start;width:100%;background:#fff;border:2px solid #0078d4;border-radius:14px;padding:1rem 1.1rem;cursor:pointer;font:inherit;color:inherit;display:flex;gap:.9rem;align-items:center">
      <svg width="21" height="21" viewBox="0 0 21 21"><rect width="10" height="10" fill="#f25022"/><rect x="11" width="10" height="10" fill="#7fba00"/><rect y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg>
      <div>
        <span style="display:block;font-weight:800;font-size:1.05rem;color:#0078d4">${TR('Sign in with Microsoft','سجّل الدخول بحساب Microsoft')}</span>
        <span style="display:block;font-size:.85rem;color:#666;margin-top:.2rem">${TR('Use your school Microsoft 365 account','استخدم حساب Microsoft 365 المدرسي')}</span>
      </div>
    </button>
    <p class="hint mt" style="text-align:center">${TR('Demo — tap to enter directly.','عرض — اضغط للدخول مباشرة.')}</p>`);
}
function authControl(){
  return authShell('control','🛡️', TR('Exam Control Office','كنترول الامتحانات'),
    TR('A high-security area. After signing in, you will answer two security questions before accessing exam grades.','منطقة عالية الأمان. بعد تسجيل الدخول، ستجيب على سؤالين أمنيّين قبل الوصول إلى درجات الامتحانات.'),
    `<button type="button" data-login="control" style="text-align:start;width:100%;background:#fff;border:2px solid #0078d4;border-radius:14px;padding:1rem 1.1rem;cursor:pointer;font:inherit;color:inherit;display:flex;gap:.9rem;align-items:center">
      <svg width="21" height="21" viewBox="0 0 21 21"><rect width="10" height="10" fill="#f25022"/><rect x="11" width="10" height="10" fill="#7fba00"/><rect y="11" width="10" height="10" fill="#00a4ef"/><rect x="11" y="11" width="10" height="10" fill="#ffb900"/></svg>
      <div>
        <span style="display:block;font-weight:800;font-size:1.05rem;color:#0078d4">${TR('Sign in with Microsoft','سجّل الدخول بحساب Microsoft')}</span>
        <span style="display:block;font-size:.85rem;color:#666;margin-top:.2rem">${TR('Then verify with security questions','ثمّ التحقّق بأسئلة الأمان')}</span>
      </div>
    </button>
    <div style="margin-top:1rem;padding:.9rem 1.1rem;background:#faf5ff;border:1px solid #d8b4fe;border-radius:12px">
      <p style="margin:0;font-size:.85rem;color:#6d28d9;line-height:1.6"><strong>🛡️ ${TR('Extra security','أمان إضافي')}</strong><br>${TR('This portal controls official exam grades. Every session requires two security questions, and grade submission requires multiple confirmations.','تتحكّم هذه البوّابة في درجات الامتحانات الرسميّة. كلّ جلسة تتطلّب سؤالين أمنيّين، وإرسال الدرجات يتطلّب تأكيدات متعدّدة.')}</p>
    </div>
    <p class="hint mt" style="text-align:center">${TR('Demo — tap to continue.','عرض — اضغط للمتابعة.')}</p>`);
}
function authView(){
  const r=S.auth.role;
  return r==='teacher'?authTeacher(): r==='student'?authStudent(): r==='parent'?authParent(): r==='leader'?authLeader(): r==='control'?authControl(): r==='coordinator'?authCoordinator(): r==='sysadmin'?authSysadmin(): authAdmin();
}

function loginView(){
  return `
  ${appbar()}
  <main id="main" tabindex="-1">
    <div class="hero" style="background:linear-gradient(135deg, #0B192C 0%, #004CB8 50%, #056FEC 100%);padding:2.75rem 0 3.75rem;position:relative;overflow:hidden">
      <div style="position:absolute;top:-80px;inset-inline-end:-80px;width:320px;height:320px;background:radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%);border-radius:50%;pointer-events:none"></div>
      <div class="wrap" style="position:relative;z-index:2">
        <div style="display:flex;align-items:center;gap:.6rem;margin-bottom:.5rem">
          <span class="eyebrow" style="color:var(--ischool-gold);font-weight:800;font-size:.9rem;letter-spacing:.5px;margin:0">${t('appTag')}</span>
          <span style="background:rgba(255,255,255,0.18);color:#fff;padding:.15rem .65rem;border-radius:999px;font-size:.75rem;font-weight:700;backdrop-filter:blur(4px);border:1px solid rgba(255,255,255,0.3)">
            ● ${TR('Official National Rollout · 2026/2027','المنظومة الوطنية الموحدة — العام الدراسي ٢٠٢٦ / ٢٠٢٧')}
          </span>
        </div>
        <h1 style="color:#ffffff;font-size:2.35rem;font-weight:900;line-height:1.2;margin:0 0 .75rem;max-width:24ch">${t('fourDoors')}</h1>
        <p style="max-width:68ch;color:#E2E8F0;font-size:1.05rem;line-height:1.6;margin:0 0 1.25rem">${TR("A public national learning platform for Egypt's schools — built to WCAG 2.2 AA accessibility, Arabic-first design, ministerial dynamic grade engine, and fully responsive across low-cost tablets and smart boards.",'منصّة التعلّم الوطنية الميسّرة لمدارس جمهورية مصر العربية — مبنيّة وفق أعلى معايير الإتاحة العالمية WCAG 2.2 AA، بالهوية البصرية الجديدة لـ iSchool، وبمحرك التقييم الديناميكي الوزاري. اختر البوابة للدخول المباشر.')}</p>
      </div>
    </div>

    <!-- 8 Ultra-Modern Portal Entrance Cards -->
    <div class="wrap" style="margin-top:-2.2rem;margin-bottom:3rem;position:relative;z-index:5">
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:1.35rem">
        
        <!-- 1. Teacher Portal -->
        <div class="modern-portal-card card-teacher">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-teacher">
              ${uiIcon('teacher', 30)}
            </div>
            <span class="portal-pill pill-teacher">⚡ ${TR('Smart Telemetry & Grading','التقييم والرصد اللحظي')}</span>
          </div>
          <h3 class="portal-card-title">${t('teacherPortal')}</h3>
          <p class="portal-card-desc">${TR('Record period attendance in 1 click, enter grades with real-time class average telemetry, and manage 1-week grace periods with zero-default safeguards.','رصد الحضور بالاستثناء، إدخال الدرجات مع مؤشر متوسط الفصل اللحظي، وتتبع مهلة الأسبوع الوزارية.')}</p>
          <a href="teacher.html" class="portal-card-cta cta-teacher">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 2. Student Portal -->
        <div class="modern-portal-card card-student">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-student">
              ${uiIcon('student', 30)}
            </div>
            <span class="portal-pill pill-student">🎮 ${TR('Virtual Labs & Games','معامل افتراضية وألعاب')}</span>
          </div>
          <h3 class="portal-card-title">${t('studentPortal')}</h3>
          <p class="portal-card-desc">${TR('Interactive science labs, chemistry bonding simulator, physics density curves, dynamic marks ledger, and Arabic grammar parsing game.','المواد الدراسية، محاكي الكيمياء والفيزياء التفاعلي، كشف الدرجات المستحقة، ولعبة إعراب الجمل.')}</p>
          <a href="student.html" class="portal-card-cta cta-student">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 3. Parent Portal -->
        <div class="modern-portal-card card-parent">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-parent">
              ${uiIcon('parent', 30)}
            </div>
            <span class="portal-pill pill-parent">📱 ${TR('Weekly Dot Grid & WhatsApp','متابعة الحضور وواتساب')}</span>
          </div>
          <h3 class="portal-card-title">${t('parentPortal')}</h3>
          <p class="portal-card-desc">${TR('Multi-child switcher, dot-grid period attendance calendar, official vs weekly practice marks breakdown, and instant WhatsApp summary reports.','متابعة الأبناء، تقويم الحضور النقطي للحصص، كشف الدرجات الديناميكي، وطلب تقارير المتابعة الفورية.')}</p>
          <a href="parent.html" class="portal-card-cta cta-parent">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 4. Ministry & Strategic Oversight -->
        <div class="modern-portal-card card-ministry">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-ministry">
              ${uiIcon('ministry', 30)}
            </div>
            <span class="portal-pill pill-ministry">🗺️ ${TR('Egypt Map & Full QA','خريطة مصر والرقابة')}</span>
          </div>
          <h3 class="portal-card-title">${TR('Ministry & Strategic Oversight','المتابعة والقيادة الاستراتيجية')}</h3>
          <p class="portal-card-desc">${TR('Interactive 27-Governorate Egypt heatmap, 5-tab scroll-free analytics cockpit, automated anomaly detection, and decision support.','خريطة مصر التفاعلية لـ ٢٧ محافظة، لوحة القيادة التحليلية، محرك رصد الأنماط الشاذة، ودعم القرار.')}</p>
          <a href="ministry.html" class="portal-card-cta cta-ministry">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 5. School Leader -->
        <div class="modern-portal-card card-leader">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-leader">
              ${uiIcon('target', 30)}
            </div>
            <span class="portal-pill pill-leader">🏫 ${TR('Classrooms & Approval','الفصول واعتماد الأعذار')}</span>
          </div>
          <h3 class="portal-card-title">${TR('School Leader & Principal','مدير المدرسة')}</h3>
          <p class="portal-card-desc">${TR('Approve medical and official excuse requests, monitor daily classroom attendance rates, and inspect school-level grade compliance.','اعتماد الأعذار الطبية والرسمية، مراقبة نسب الحضور اليومية، ومتابعة انضباط الرصد على مستوى المدرسة.')}</p>
          <a href="ministry.html" class="portal-card-cta cta-leader">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 6. Limited-Connectivity School Coordinator -->
        <div class="modern-portal-card card-coordinator">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-coordinator">
              ${uiIcon('coordinator', 30)}
            </div>
            <span class="portal-pill pill-coordinator">📡 ${TR('Batch Paper & Offline Sync','كشوف ورقية ومزامنة')}</span>
          </div>
          <h3 class="portal-card-title">${TR('Limited-Connectivity Coordinator','مدرسة ذات اتصال محدود')}</h3>
          <p class="portal-card-desc">${TR('Batch paper register transcription, dual-ID validation, and local offline queue with automatic sync when connection is restored.','تفريغ الكشوف الورقية المجمعة، المطابقة بالرقم القومي، وإدارة قوائم المزامنة عند توفر الاتصال.')}</p>
          <a href="coordinator.html" class="portal-card-cta cta-coordinator">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 7. System Administration -->
        <div class="modern-portal-card card-sysadmin">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-sysadmin">
              ${uiIcon('shield', 30)}
            </div>
            <span class="portal-pill pill-sysadmin">🛡️ ${TR('Identity & Data Protection','أمان وحماية البيانات')}</span>
          </div>
          <h3 class="portal-card-title">${TR('System Administration','إدارة النظام والهوية')}</h3>
          <p class="portal-card-desc">${TR('Identity & access management, Egyptian PDPL compliance logs, dual-admin phone verification workflow, and infrastructure telemetry.','إدارة الحسابات والصلاحيات، سجلات الامتثال لحماية البيانات الشخصية، وضوابط التحقق المزدوج.')}</p>
          <a href="control.html" class="portal-card-cta cta-sysadmin">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

        <!-- 8. Exam Control Office -->
        <div class="modern-portal-card card-control">
          <div class="portal-card-top">
            <div class="portal-badge-icon badge-control">
              ${uiIcon('control', 30)}
            </div>
            <span class="portal-pill pill-control">🔐 ${TR('High-Security Exam Gates','كنترول الامتحانات المعتمد')}</span>
          </div>
          <h3 class="portal-card-title">${TR('Exam Control Office','كنترول الامتحانات')}</h3>
          <p class="portal-card-desc">${TR('Midterm and final term exam result validation, multi-tier security gates, official seal authentication, and national grade release.','اعتماد نتائج امتحانات منتصف ونهاية العام، بوابات التحقق عالية الأمان، والإفراج الرسمي عن الدرجات.')}</p>
          <a href="control.html" class="portal-card-cta cta-control">
            <span>${t('enter')}</span>
            <span class="cta-arrow">←</span>
          </a>
        </div>

      </div>

      <!-- Accessible EMIS Integration Card -->
      <div class="card mt2" style="max-width:820px;margin-inline:auto;border-radius:18px;padding:1.4rem 1.6rem">
        <p class="eyebrow">${TR('Accessible authentication','مصادقة ميسّرة')} · WCAG 2.2 (3.3.8)</p>
        <h3 style="margin:0 0 .5rem">${TR('One source of truth, multiple ways to sign in','مصدر واحد موثوق، وطرق متعدّدة لتسجيل الدخول')}</h3>
        <p class="small muted" style="line-height:1.6;margin:0 0 .5rem">${TR('Every account is provisioned centrally from EMIS — nobody self-registers. Daily sign-in uses the <strong>school Microsoft 365 account</strong> as the primary method. <strong>Teachers</strong> can also use their National ID + a one-time WhatsApp/SMS code; <strong>students</strong> can use their Microsoft email or a Student ID + PIN; <strong>parents</strong> need no account at all — they get an SMS, with an optional web portal. No CAPTCHA, no puzzles, no memory tests.','كلّ حساب يُنشأ مركزيًّا من نظام EMIS — لا أحد يسجّل نفسه. يستخدم الدخول اليومي <strong>حساب Microsoft 365 المدرسي</strong> كالطريقة الأساسية. يمكن أيضًا <strong>للمعلّمين</strong> استخدام الرقم القومي + رمز لمرّة عبر واتساب؛ و<strong>الطلاب</strong> يمكنهم استخدام بريدهم المدرسي أو معرّف الطالب + رقم سرّي؛ و<strong>أولياء الأمور</strong> لا يحتاجون حسابًا أصلًا — تصلهم رسالة نصّية. بلا اختبارات تحقّق ولا ألغاز.')}</p>
      </div>
    </div>
    <div class="wrap">${devNote()}</div>
  </main>
  ${a11yPanel()}`;
}

/* ---------- shared visual widgets ---------- */
function riskTag(r){
  if(r==='risk') return `<span class="tag risk"><span aria-hidden="true">▲</span> ${TR('Needs support','بحاجة لدعم')}</span>`;
  if(r==='warn') return `<span class="tag warn"><span aria-hidden="true">●</span> ${TR('Watch','متابعة')}</span>`;
  return `<span class="tag ok"><span aria-hidden="true">✓</span> ${TR('On track','على المسار')}</span>`;
}
function masteryBar(v){
  const cls=v>=70?'ok':v>=50?'warn':'risk';
  return `<span class="bar ${cls}" role="img" aria-label="${v} percent"><span style="width:${v}%"></span></span>`;
}
/* accessible sparkline: SVG + text alternative + data table fallback */
function sparkline(series,label){
  const w=180,h=46,p=4, max=100,min=0;
  const step=(w-p*2)/(series.length-1);
  const pts=series.map((v,i)=>[p+i*step, h-p-((v-min)/(max-min))*(h-p*2)]);
  const d=pts.map((q,i)=>(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' ');
  const last=pts[pts.length-1];
  const trend=series[series.length-1]-series[series.length-3];
  const col=trend>=0?'var(--ok-700)':'var(--risk-700)';
  return `<figure style="margin:0">
    <svg viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-label="${label}: weekly scores ${series.join(', ')}. Recent change ${trend>=0?'up':'down'} ${Math.abs(trend)} points.">
      <polyline points="${pts.map(q=>q.join(',')).join(' ')}" fill="none" stroke="${col}" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round"/>
      <circle cx="${last[0]}" cy="${last[1]}" r="3.5" fill="${col}"/>
    </svg>
  </figure>`;
}
function nextAction(s){
  // Soft, optional observations for the teacher's own awareness — never a tracked instruction.
  if(s.att<75) return 'Attendance has dropped — a quick word with the family, when you get a chance, often helps.';
  if(s.avgM<50) return 'Finding the basics hard right now — could benefit from a little extra time on the fundamentals.';
  if(s.trend<=-8) return 'Scores have slipped over the last few weeks — worth a friendly check-in if you have a moment.';
  if(s.missing>=3) return `Has ${s.missing} pieces of work outstanding — a gentle reminder may be all that's needed.`;
  return 'Doing well — a small stretch task would keep the momentum going.';
}

/* ===================== TEACHER ===================== */
function teacherShell(inner){
  const items=[
    {v:'dashboard', ico: uiIcon('home', 16), t: TR('Dashboard','لوحة الفصل')},
    {v:'attendance', ico: uiIcon('calendar', 16), t: TR('Attendance','رصد الحضور')},
    {v:'assessments', ico: uiIcon('grading', 16), t: TR('Assessments','التقييمات والدرجات')},
    {v:'gradebook', ico: uiIcon('chart', 16), t: TR('Gradebook','سجل الدرجات الشامل')},
    {v:'students', ico: uiIcon('student', 16), t: TR('Students','قوائم الطلاب')},
    {v:'develop', ico: uiIcon('teacher', 16), t: TR('Professional Training','التطوير المهني')},
    {v:'announce', ico: uiIcon('message', 16), t: TR('Announcements','التعاميم المدرسية')},
    {v:'training', ico: uiIcon('insights', 16), t: TR('Platform Guide','الدليل الإرشادي')},
  ];
  const curr = teacherClass();
  const AR = S.settings.lang==='ar';
  const classBar = S.route==='teacher' ? `
    <div class="classbar">
      <div class="classbar-info">
        <span class="classbar-name">${uiIcon('teacher', 18)} ${esc(nodeName(curr))}</span>
        <span class="classbar-meta">${curr.students.length} ${TR('students enrolled','طالبًا مسجلًا')} · <span style="opacity:.85;font-weight:700">${TR('(Active Class)','(الفصل النشط)')}</span></span>
      </div>
      ${TEACHER_CLASSES.length>1 ? `<label class="classbar-switch"><span>${uiIcon('refresh', 14)} ${AR?'تبديل الفصل:':'Switch class:'}</span>
        <select id="tclass" data-teacher-class aria-label="${AR?'اختر فصلًا':'Choose a class'}">${TEACHER_CLASSES.map(c=>`<option value="${c.id}" ${c.id===S.teacherClassId?'selected':''}>${esc(nodeName(c))}</option>`).join('')}</select></label>` : ''}
    </div>` : '';
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${classBar}${teacherWelcome()}${inner}${devNote()}</div></main>${a11yPanel()}`;
}

function teacherDashboard(){
  const cls=teacherClass(), st=cls.students;

  const AR = S.settings.lang==='ar';
  const subjLabel = S.settings.lang==='ar'?SUBJECTS_AR[TEACHER_SUBJECT]:TEACHER_SUBJECT;
  const attAvg = Math.round(st.reduce((a,s)=>a+s.att,0)/st.length);
  const subjAvg = Math.round(st.reduce((a,s)=>a+subjScore(s),0)/st.length);
  const passRate = Math.round(st.filter(s=>subjScore(s)>=60).length/st.length*100);

  const teacherHeroCockpit = `
  <!-- Teacher Hero Cockpit (iSchool Branding & Smart Tools) -->
  <div class="card highlight mb" style="border-inline-start:6px solid var(--ischool-blue);padding:1.1rem 1.35rem">
    <div class="flex between center wrapw" style="gap:.75rem;margin-bottom:.85rem">
      <div>
        <div class="flex center gap-1" style="margin-bottom:.3rem">
          <span class="tag gold" style="font-weight:800">${uiIcon("teacher", 18)} ${TR("Teacher Smart Workspace","بوابة المعلّم الذكية")}</span>
          <span class="tag ok">✓ ${TR('Connected (Sync Active)','متّصل (المزامنة نشطة)')}</span>
        </div>
        <h2 style="margin:0;font-size:1.45rem">${esc(nodeName(cls))} · ${subjLabel}</h2>
      </div>

      <!-- Grace Period Countdown Chip (Meeting Directive) -->
      <div class="flex center gap-1 wrapw">
        <div class="card" style="padding:.4rem .8rem;background:var(--warn-050);border:1.5px solid #FDE68A;border-radius:var(--radius);font-size:.82rem;font-weight:700;color:var(--warn-700)">
          ⏳ ${TR('Grace Period: 4 days remaining to record this week’s marks','مهلة السماح: متبقي ٤ أيام لرصد درجات هذا الأسبوع (أسبوع بعد نهاية الأسبوع)')}
        </div>
      </div>
    </div>

    <!-- Quick Class Summary Tiles -->
    <div class="kpi-row" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr));margin-bottom:0">
      <div class="card stat" style="padding:.75rem .9rem;border-top:4px solid var(--ischool-blue)">
        <span class="eyebrow">${TR('Session Attendance','حضور الحصة اليوم')}</span>
        <span class="num" style="color:var(--ischool-blue)">${attAvg}%</span>
        <span class="tiny muted">${st.length} ${TR('students enrolled','طالبًا مسجلاً')}</span>
      </div>
      <div class="card stat" style="padding:.75rem .9rem;border-top:4px solid var(--ok-700)">
        <span class="eyebrow">${TR('Class Mastery Average','متوسط تحصيل الفصل')}</span>
        <span class="num" style="color:var(--ok-700)">${subjAvg}%</span>
        <span class="tiny muted">${TR('Active assessments to date','للتقييمات المستحقة فقط')}</span>
      </div>
      <div class="card stat" style="padding:.75rem .9rem;border-top:4px solid var(--ischool-gold)">
        <span class="eyebrow">${TR('Pass Rate','نسبة الاجتياز')}</span>
        <span class="num" style="color:#854D0E">${passRate}%</span>
        <span class="tiny muted">${TR('Students at or above 60%','الطلاب عند 60% أو أعلى')}</span>
      </div>
    </div>
  </div>`;
  // "a few to check on" — scoped to THIS teacher's subject, capped, gentle, informational only
  const checkOn=st.filter(s=>subjScore(s)<55 || s.att<75)
    .sort((a,b)=>subjScore(a)-subjScore(b)).slice(0,4);

  // each frequency band is its own "page" you move through with Back / Next
  const secDaily=`
    <div class="bigtiles">
      <button type="button" class="bigtile action" data-view="attendance">
        <span class="em" aria-hidden="true">🗓️</span>
        <span class="word">${AR?'تسجيل الحضور':'Take attendance'}</span>
      </button>
    </div>`;
  const secWeekly=`
    <div class="bigtiles">
      <button type="button" class="bigtile action" data-view="assessments">
        <span class="em" aria-hidden="true">📝</span>
        <span class="word">${AR?'درجات التقييم':'Assessment marks'}</span>
      </button>
    </div>
    <div class="card mt" style="border-inline-start:6px solid var(--info-700)">
      <div class="flex between center wrapw" style="gap:.6rem">
        <div style="flex:1;min-width:220px">
          <p class="eyebrow" style="margin:0">${AR?'ما يراه صفّك هذا الأسبوع':'What your class sees this week'}</p>
          <p class="small muted" style="margin:.2rem 0 0">${AR?'وجّه الطلاب إلى درس '+subjLabel+' الحالي. يمكنهم فتح أيّ درس — هذا يبيّن أين وصل الصفّ فقط.':'Point students to the '+subjLabel+" lesson you're teaching now. They can still open any lesson — this just shows them where the class is."}</p>
        </div>
        <div><label class="sr-only" for="cur-unit">${AR?'درس '+subjLabel+' لهذا الأسبوع':"This week's "+subjLabel+' lesson'}</label>
          <select id="cur-unit" data-current-unit="${TEACHER_SUBJECT}" style="width:auto;min-width:200px">
            ${CONTENT.filter(c=>c.subject===TEACHER_SUBJECT).map(c=>`<option value="${c.id}" ${c.id===currentUnitFor(TEACHER_SUBJECT)?'selected':''}>${AR?'الوحدة':'Unit'} ${c.unit}: ${esc(L(c,'title'))}</option>`).join('')}
          </select></div>
      </div>
    </div>`;
  const secSometimes=`
    <div class="bigtiles">
      <button type="button" class="bigtile action" data-view="gradebook">
        <span class="em" aria-hidden="true">📊</span>
        <span class="word">${AR?'إدخال درجات الامتحان':'Enter exam marks'}</span>
      </button>
    </div>`;
  const secMoment=`
    <p class="small muted">${AR?'يتحدّث هذا تلقائيًّا من الحضور ودرجات '+subjLabel+' — لا تقرير لكتابته. ترى مادّتك فقط، ولا شيء يُشارَك مع أولياء الأمور أو يُستخدم للحكم عليك.':"This updates on its own from your attendance and "+subjLabel+" marks — there's no report to write. You only see your own subject, and nothing here is shared with parents or used to judge you."}</p>
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">
      <div class="card stat"><span class="num">${attAvg}%</span><span class="lbl">${AR?'متوسّط الحضور':'Average attendance'}</span></div>
      <div class="card stat"><span class="num">${subjAvg}%</span><span class="lbl">${AR?'متوسّط الصفّ · '+subjLabel:'Class average · '+subjLabel}</span></div>
      <div class="card stat"><span class="num">${checkOn.length}</span><span class="lbl">${AR?'طلاب للمتابعة':'Students to check on'}</span></div>
    </div>
    <section class="mt2">
      <div class="flex between center"><h3 style="margin:0">${AR?'بعض الطلاب للمتابعة':'A few students to check on'}</h3><span class="tag info">${AR?'لك وحدك':'For your eyes only'}</span></div>
      <p class="small muted">${AR?'لمجرّد الانتباه — ليست مهامّ ولا يُبلَّغ عنها. افتح اسمًا فقط إن أردت التفاصيل.':"Just so you notice — these aren't tasks, and nothing is reported. Open a name only if you want to see more."}</p>
      ${checkOn.length? `<div class="tbl-scroll" style="border-radius:var(--radius)">
        <table><caption class="sr-only">Students to check on in ${subjLabel}</caption>
        <thead><tr><th scope="col">${AR?'الطالب':'Student'}</th><th scope="col">${AR?'ما يستحقّ الانتباه':'What to notice'}</th><th scope="col">${subjLabel}</th><th scope="col"><span class="sr-only">Open</span></th></tr></thead>
        <tbody>
        ${checkOn.map(s=>`<tr>
          <th scope="row">${esc(arName(s))} ${s.hasAcc?`<span class="tag info" title="${TR('Has accommodations','لديه تيسيرات')}">♿</span>`:''}</th>
          <td class="small">${s.att<75?(AR?'الحضور يتراجع':'Attendance dropping'):subjScore(s)<50?(AR?'يجد '+subjLabel+' صعبًا':'Finding '+subjLabel+' hard'):(AR?'قد يحتاج دعمًا بسيطًا':'Could use a little support')}</td>
          <td><span class="facebar"><span class="face" aria-hidden="true">${faceFor(subjScore(s))}</span> ${subjScore(s)}%</span></td>
          <td><button class="btn sec sm" data-student="${s.id}">${AR?'افتح':'Open'}</button></td>
        </tr>`).join('')}
        </tbody></table>
      </div>` : `<p class="calm"><span class="em" aria-hidden="true">🎉</span> <span>${AR?'لا أحد يحتاج دعمًا إضافيًّا الآن — عمل رائع.':'No one needs extra help right now — nice work.'}</span></p>`}
    </section>`;
  const secGrow=`
    <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(270px,1fr))">
      <div class="card" style="border-inline-start:6px solid var(--teal-700)">
        <h3 style="margin-top:0"><span aria-hidden="true">📚</span> ${AR?'التطوير المهني':'Professional development'}</h3>
        <p class="small muted" style="margin:.2rem 0 .6rem">${AR?'دورات قصيرة وأفكار للدروس وشهادات لتطوير تدريسك — من منصّة التطوير المهني الوطنية للمعلّمين.':'Short courses, lesson ideas and certificates to grow your teaching — from the national teacher development platform.'}</p>
        <ul class="small" style="margin:.2rem 0 .7rem;padding-inline-start:1.1rem">
          <li>${AR?'تدريس القراءة في الصفوف المبكرة':'Teaching early reading'}</li>
          <li>${AR?'استخدام التقييمات لدعم التعلّم':'Using assessment to support learning'}</li>
          <li>${AR?'دمج الطلاب ذوي الاحتياجات':'Including learners with disabilities'}</li>
        </ul>
        <button class="btn" data-pd>${AR?'افتح منصّة التطوير '+aExt():'Open development platform '+aExt()}</button>
      </div>
      <div class="card" style="border-inline-start:6px solid var(--info-700)">
        <h3 style="margin-top:0"><span aria-hidden="true">🛠</span> ${AR?'الإبلاغ عن مشكلة أو إرسال ملاحظة':'Report a problem or send feedback'}</h3>
        <p class="small muted" style="margin:.2rem 0 .6rem">${AR?'هل هناك شيء لا يعمل، أو فكرة لتحسين منصّة؟ أخبرنا — تصل ملاحظتك إلى فريق الدعم.':'Something not working, or an idea to improve Manassa? Tell us — it goes to the support team.'}</p>
        <label class="sr-only" for="fb-type">${AR?'النوع':'Type'}</label>
        <select id="fb-type" style="width:auto;min-width:200px;margin-bottom:.5rem">
          <option value="problem">${AR?'الإبلاغ عن مشكلة':'Report a problem'}</option>
          <option value="idea">${AR?'اقتراح':'Suggestion'}</option>
          <option value="other">${AR?'أخرى':'Other'}</option>
        </select>
        <label class="sr-only" for="fb-text">${AR?'رسالتك':'Your message'}</label>
        <textarea id="fb-text" rows="3" style="width:100%;font:inherit;padding:.6rem;border:2px solid var(--line-strong);border-radius:var(--radius)" placeholder="${AR?'اكتب هنا…':'Write here…'}"></textarea>
        <button class="btn mt" data-send-feedback>📨 ${AR?'إرسال':'Send'}</button>
      </div>
    </div>`;

  return `
  <div class="page-head"><div>
    <h1>${AR?'صباح الخير.':'Good morning.'}</h1>
  </div></div>

  ${(function(){
    if(!Array.isArray(TEACHER_BADGES)) return '';
    if(!S.badges) S.badges={};
    var earned=TEACHER_BADGES.filter(function(b){return S.badges[b.id];});
    var total=TEACHER_BADGES.length;
    var iconsHtml=earned.slice(0,6).map(function(b){var t=AR?b.ar:b.en; return `<span title="${t.title}" style="font-size:1.3rem" aria-hidden="true">${b.emoji}</span>`;}).join('');
    var msg=earned.length===0
      ? (AR?'ابدأ اليوم — سجّل الحضور أو أدخِل درجة لتحصل على أول شارة.':'Start today — record attendance or enter a grade to earn your first badge.')
      : (AR?`لديك ${earned.length} من ${total} شارات · اضغط لعرض التفاصيل`
           :`You have ${earned.length} of ${total} badges · tap to see details`);
    return `<button type="button" onclick="openBadgesDialog()" style="width:100%;text-align:inherit;border:none;cursor:pointer;padding:.7rem .9rem;display:flex;gap:.7rem;align-items:center;background:var(--teal-050,#f0fdfa);border:1px solid var(--teal-700,#0f766e);border-inline-start-width:4px;border-radius:8px;margin-bottom:.8rem">
      <div style="display:flex;gap:.3rem;flex-wrap:wrap">${iconsHtml||'🏅'}</div>
      <div style="flex:1;line-height:1.35"><div style="font-weight:600;font-size:.9rem">${AR?'شاراتك':'Your badges'}</div><div class="small muted">${msg}</div></div>
      <span aria-hidden="true" style="font-size:1.1rem">›</span>
    </button>`;
  })()}

  <p class="freq-h"><span aria-hidden="true">📅</span> ${AR?'كل يوم':'Every day'}</p>
  ${secDaily}

  <p class="freq-h"><span aria-hidden="true">🗓️</span> ${AR?'كل أسبوع':'Each week'}</p>
  ${secWeekly}

  <p class="freq-h"><span aria-hidden="true">🗂️</span> ${AR?'أحيانًا':'Now and then'}</p>
  ${secSometimes}

  <p class="freq-h"><span aria-hidden="true">🌟</span> ${AR?'التطوير والدعم':'Grow & support'}</p>
  ${secGrow}`;
}

const EXAM_TYPES=[
  {id:'monthly', en:'Monthly exam',          ar:'امتحان شهري'},
  {id:'midterm', en:'Mid-term exam',         ar:'امتحان منتصف الفصل'},
  {id:'final',   en:'End-of-semester exam',  ar:'امتحان نهاية الفصل'},
  {id:'other',   en:'Other exam',            ar:'امتحان آخر'},
];
function parseMark(raw){
  raw=String(raw).trim();
  if(/^(غ|غائب|abs|absent)$/i.test(raw)) return 'غ';
  if(!/^\d{1,3}([.,]\d{1,2})?$/.test(raw)) return null;
  var v=parseFloat(raw.replace(',','.'));
  if(isNaN(v)||v<0||v>100) return null;
  return Math.round(v*100)/100;
}
function examTypeLabel(id){ const e=EXAM_TYPES.find(x=>x.id===id)||EXAM_TYPES[0]; return TR(e.en,e.ar); }
function examLabel(ex){ ex=ex||S.gradeExam;
  let base = ex.type==='other' && ex.name ? ex.name : examTypeLabel(ex.type);
  const d = ex.date ? fmtDateOf(new Date(ex.date+'T00:00:00').getTime(), {day:'numeric',month:'short',year:'numeric'}) : '';
  return d ? base+' · '+d : base;
}
function teacherGradebook(){
  const cls=teacherClass(), st=cls.students;
  const subjLabel=S.settings.lang==='ar'?SUBJECTS_AR[TEACHER_SUBJECT]:TEACHER_SUBJECT;
  if(S.gradeExam && (S.gradeExam.type==='midterm' || S.gradeExam.type==='final')){ S.gradeExam.type='monthly'; }
  const locked = !!S.gradesSubmitted && !S.gradeUnlockReason; // marks lock after submit; correction needs a logged reason
  return `
  ${taskBack()}
  <div class="page-head"><div>
    <p class="eyebrow">${esc(nodeName(cls))} · ${subjLabel}</p><h1>${TR('Exam marks','درجات الامتحان')}</h1>
  </div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">📄</span>
    <span>${TR("Type each student's <strong>continuous-assessment score</strong> out of 100. Midterm and final exams are entered by the Control Office and shown read-only below.","اكتب <strong>درجة التقييم المستمر</strong> لكلّ طالب من 100. أمّا امتحانا منتصف ونهاية العام فيُدخلهما الكنترول وتظهر للعرض فقط بالأسفل.")}</span></div>
  <div class="card mb" style="border-inline-start:6px solid var(--info-700)">
    <p class="eyebrow" style="margin:0 0 .5rem">${TR('Which exam is this?','أيّ امتحان هذا؟')} <span class="muted">${TR('— helps reporting','— يساعد في التقارير')}</span></p>
    <div class="flex wrapw" style="gap:.8rem;align-items:flex-end">
      <div class="field" style="margin:0">
        <label for="exam-type">${TR('Exam type','نوع الامتحان')}</label>
        <select id="exam-type" data-examfield="type" style="min-width:200px">
          ${EXAM_TYPES.filter(e=>e.id!=='midterm'&&e.id!=='final').map(e=>`<option value="${e.id}" ${S.gradeExam.type===e.id?'selected':''}>${TR(e.en,e.ar)}</option>`).join('')}
        </select>
      </div>
      <div class="field" style="margin:0">
        <label for="exam-date">${TR('Exam date','تاريخ الامتحان')}</label>
        <input type="date" id="exam-date" data-examfield="date" value="${esc(S.gradeExam.date||'')}" style="min-width:170px">
      </div>
      ${S.gradeExam.type==='other'?`<div class="field" style="margin:0;flex:1;min-width:180px">
        <label for="exam-name">${TR('Exam name','اسم الامتحان')}</label>
        <input id="exam-name" data-examfield="name" value="${esc(S.gradeExam.name||'')}" placeholder="${TR('e.g. Unit 3 test','مثال: اختبار الوحدة 3')}">
      </div>`:''}
    </div>
    <p class="small muted" style="margin:.5rem 0 0">${TR('This label is attached to the marks so you — and the reports — can tell exams apart.','تُرفق هذه التسمية بالدرجات لتمييز الامتحانات في التقارير.')}</p>
  </div>
  <div class="tbl-scroll">
    <table>
      <caption>${TR(subjLabel+' exam marks — '+nodeName(cls)+'. Enter each score out of 100, then submit to save.','درجات امتحان '+subjLabel+' — '+nodeName(cls)+'. أدخل كلّ درجة من 100، ثم أرسل لحفظ البيانات.')}</caption>
      <thead><tr><th scope="col">${TR('Student','الطالب')}</th><th scope="col">${TR(subjLabel+' exam (/100)','امتحان '+subjLabel+' (/100)')}</th></tr></thead>
      <tbody>
      ${st.map((s,si)=>{
        const v = s.grades[TEACHER_SUBJECT]!=null ? s.grades[TEACHER_SUBJECT] : '';
        return `<tr>
          <th scope="row"><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))} ${s.hasAcc?`<span class="tag info" title="${TR('Has accommodations','لديه تيسيرات')}">♿</span>`:''}</th>
          <td><label class="sr-only" for="g-${s.id}">${esc(arName(s))} ${TR(subjLabel+' score out of 100','درجة '+subjLabel+' من 100')}</label>
            <input class="gb-input" id="g-${s.id}" type="text" inputmode="text" maxlength="5" placeholder="—"
              value="${v}" data-grade="${s.id}" data-subj="${TEACHER_SUBJECT}" aria-describedby="gb-help" ${(locked||S.net.status==='nocache')?'disabled aria-disabled="true"':''} onkeydown="if(event.key==='Enter'&&window.S&&window.S.settings&&window.S.settings.enterAdvance){event.preventDefault();var nxt=this.closest('tr').nextElementSibling;if(nxt)nxt.querySelector('input')?.focus();}"></td>
        </tr>`;
      }).join('')}
      </tbody>
    </table>
  </div>
  <p id="gb-help" class="hint mt">${TR('Scores 0–100 (decimals OK, e.g. 7.5). Type غ for absent students. Press Enter to jump to next student.','الدرجات من 0 إلى 100 (تقبل الكسور مثل 7.5). اكتب غ للطالب الغائب. اضغط Enter للانتقال للطالب التالي.')}</p>
  ${S.gradesSubmitted? (locked?`<div class="card mt" style="border-inline-start:6px solid var(--warn-700);background:var(--warn-050)">
      <p style="margin:0;font-size:1.04rem"><strong>🔒 ${esc(examLabel(S.gradesSubmitted.exam))} — ${TR('submitted and locked','مُرسَلة ومقفلة')}</strong></p>
      <p class="small" style="margin:.3rem 0 .6rem">${TR('The correction window has closed. These marks can only be changed with a recorded reason that your school leader can see — this prevents quiet, unexplained changes (e.g. if an account is misused).','أُغلقت نافذة التصحيح. لا تُغيَّر هذه الدرجات إلا بسبب مُسجَّل يطّلع عليه مدير مدرستك — لمنع التغييرات الصامتة غير المبرَّرة (مثلًا عند إساءة استخدام حساب).')}</p>
      <button class="btn sec" data-justify-open>✏️ ${TR('Request a correction (give a reason)','طلب تصحيح (اذكر السبب)')}</button>
    </div>`
    :`<div class="calm mt" style="background:var(--ok-050);border-color:var(--ok-700)"><span class="em" aria-hidden="true">🔓</span>
      <span><strong>${TR('Correction unlocked','فُتح التصحيح')}</strong> — ${TR('reason recorded','السبب مُسجَّل')}: “${esc(S.gradeUnlockReason)}”. ${TR('Make your change and submit again — the change is in the security log.','أجرِ تغييرك وأرسِل مجددًا — التغيير في سجلّ الأمان.')}</span></div>
    <div class="card mt" style="border-inline-start:6px solid var(--ok-700)">
      <p style="margin:0;font-size:1.02rem"><span class="tag ok">✓ ${TR('Saved on this device','محفوظ على هذا الجهاز')}</span> <span aria-hidden="true">${aFwd()}</span> <span class="tag ${S.net.online?'ok':'warn'}">${S.net.online?'✓ '+TR('Uploaded','تم الرفع'):'⏳ '+TR('Waiting to upload','بانتظار الرفع')}</span></p>
    </div>`):''}
  <div class="card mt" style="border-inline-start:6px solid var(--teal-700)">
    <p style="margin:0 0 .3rem"><strong>📷 ${TR('Attach photos of your paper register (up to 3)','أرفِق صور من كشفك الورقي (حتى ٣ صور)')}</strong> <span class="tag info">${TR('optional','اختياري')}</span></p>
    <p class="small muted" style="margin:0 0 .5rem">${TR('Not extra work — it’s for your protection. If anyone ever questions these marks, the photo is kept with them as your proof.','ليس عملًا إضافيًّا — بل لحمايتك. إن سأل أحد عن هذه الدرجات لاحقًا، تُحفظ الصورة معها كدليل لك.')}</p>
    <button type="button" class="btn sec" style="display:inline-flex;align-items:center;gap:.4rem;margin-inline-end:.5rem;min-height:44px" onclick="exportGradesCsv()">⬇ ${TR('Export CSV','تصدير CSV')}</button>
    <label class="btn sec" for="gb-photo" style="display:inline-flex;align-items:center;gap:.4rem;cursor:pointer">📎 ${TR('Choose / take a photo','اختر / التقط صورة')}
      <input id="gb-photo" type="file" accept="image/*" capture="environment" data-grade-photo multiple style="display:none"></label>
    <span id="gb-photo-name" class="small" style="margin-inline-start:.6rem;display:inline-flex;flex-wrap:wrap;gap:.4rem;align-items:center">${(S.gradePhotos&&S.gradePhotos.length)?S.gradePhotos.map((nm,i)=>`<span class="tag ok" style="display:inline-flex;align-items:center;gap:.3rem">✓ ${esc(nm)} <button type="button" data-photo-del="${i}" aria-label="${TR('Remove photo','إزالة الصورة')} ${esc(nm)}" style="border:0;background:transparent;cursor:pointer;font-size:1rem;line-height:1;color:var(--risk-700,#b91c1c)">✕</button></span>`).join(''):`<span class="muted">${TR('No photo attached yet','لم تُرفَق صورة بعد')}</span>`}</span>
  </div>
  ${locked?'':`<div class="mt2"><button class="btn" data-submit-grades style="font-size:1.05rem;padding:.7rem 1.4rem">📨 ${TR('Submit','إرسال')} ${esc(examLabel())} (${subjLabel})</button></div>`}

  <div class="card mt2" style="border-inline-start:6px solid #6d28d9;background:#faf5ff">
    <div class="flex between center wrapw" style="gap:.5rem;margin-bottom:.4rem">
      <h2 style="margin:0;font-size:1.1rem;color:#6d28d9">🛡️ ${TR('Midterm & final exam grades','درجات امتحانَي منتصف ونهاية العام')}</h2>
      <span class="tag info">${TR('View only','للعرض فقط')}</span>
    </div>
    <p class="small muted" style="margin:0 0 .8rem">${TR('These come from the Exam Control Office, not from you. You can see released results to complete your picture of each student — but only the control office can enter or change them. Withheld results (unpaid fees) show as “—”.','تأتي هذه من كنترول الامتحانات، لا منك. يمكنك رؤية النتائج المُفرَج عنها لاستكمال صورتك عن كلّ طالب — لكن الكنترول وحده يُدخلها أو يغيّرها. النتائج المحجوبة (رسوم غير مسدّدة) تظهر «—».')}</p>
    <div class="tbl-scroll">
      <table>
        <caption class="sr-only">${TR('Midterm and final exam grades — view only','درجات منتصف ونهاية العام — للعرض فقط')}</caption>
        <thead><tr>
          <th scope="col">${TR('Student','الطالب')}</th>
          <th scope="col">${TR('Midterm','منتصف العام')}</th>
          <th scope="col">${TR('Final','نهاية العام')}</th>
        </tr></thead>
        <tbody>
        ${st.map((s,si)=>{
          const e=examMarkFor(s,TEACHER_SUBJECT);
          // Some students withheld (demo: every 4th student's final is withheld)
          const finalWithheld = (si % 4 === 2);
          return `<tr>
            <th scope="row"><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))}</th>
            <td><strong>${e.wk}</strong><span class="muted">/100</span></td>
            <td>${finalWithheld?`<span class="muted" title="${TR('Withheld — unpaid fees','محجوبة — رسوم غير مسدّدة')}">—</span>`:`<strong>${e.tm}</strong><span class="muted">/100</span>`}</td>
          </tr>`;
        }).join('')}
        </tbody>
      </table>
    </div>
    <p class="tiny muted mt">${TR('“—” means the result is withheld pending fee payment, released by the school leader. You cannot edit this table.','«—» تعني أنّ النتيجة محجوبة لحين سداد الرسوم، ويُفرج عنها مدير المدرسة. لا يمكنك تعديل هذا الجدول.')}</p>
  </div>

  ${taskNav('students', t('students'))}`;
}

function renderAttCounts(c,total){
  const lots = total>0 && c.absent > total/2;
  return `<strong>${TR('Today:','اليوم:')}</strong>
    <span class="tag ok">✓ ${TR('Present','حاضر')} ${c.present}</span>
    <span class="tag warn">⏰ ${TR('Late','متأخر')} ${c.late}</span>
    <span class="tag risk">✕ ${TR('Absent','غائب')} ${c.absent}</span>
    ${c.excused?`<span class="tag info">${TR('Excused','بعذر')} ${c.excused}</span>`:''}
    <span class="muted small">${TR('of','من')} ${total}</span>
    ${lots?`<span class="tag risk">⚠ ${TR('A lot absent today — please double-check','عدد كبير غائب اليوم — يرجى التأكّد')}</span>`:''}`;
}
function attCountsFromDOM(){ const c={present:0,late:0,absent:0,excused:0}; let total=0;
  document.querySelectorAll('[data-att][aria-checked="true"]').forEach(b=>{ if(c[b.dataset.val]!=null){c[b.dataset.val]++;total++;} }); return {c,total}; }
function renderAttBig(c,total){
  return `<div class="flex center" style="gap:1.4rem;flex-wrap:wrap;justify-content:center">
    <div><div style="font-size:2rem;font-weight:800;color:var(--ok-700)">${c.present}</div><div class="small muted">${TR('present','حاضر')}</div></div>
    <div><div style="font-size:2rem;font-weight:800;color:var(--risk-700)">${c.absent}</div><div class="small muted">${TR('absent','غائب')}</div></div>
    <div><div style="font-size:2rem;font-weight:800;color:var(--warn-700)">${c.late}</div><div class="small muted">${TR('late','متأخر')}</div></div>
    ${c.excused?`<div><div style="font-size:2rem;font-weight:800;color:var(--info-700)">${c.excused}</div><div class="small muted">${TR('excused','بعذر')}</div></div>`:''}
  </div>
  <p class="small muted" style="margin:.5rem 0 0">${c.present} ${TR('present','حاضر')}, ${c.absent} ${TR('absent','غائب')}, ${c.late} ${TR('late','متأخر')}${c.excused?', '+c.excused+' '+TR('excused absence','غياب بعذر'):''} — ${TR('of','من')} ${total}</p>`;
}
function updateAttSummary(){ const {c,total}=attCountsFromDOM();
  const s=el('att-summary'); if(s) s.innerHTML=renderAttCounts(c,total);
  const b=el('att-bigsummary'); if(b) b.innerHTML=renderAttBig(c,total); }
function doSubmitAttendance(c,total){
  const r=queueOrSend(TR('attendance','الحضور')+' — '+fmtDate({month:'short',day:'numeric'}));
  if(r==='failed'){ S.net.notice='nocache'; render(); announce(TR('Couldn’t save just now — this is often a connection problem. Please try again when you’re back online.','تعذّر الحفظ الآن — غالبًا بسبب الاتصال. أعد المحاولة عند عودة الاتصال.'),true); return; }
  S.attDirty=false;
  S.attSubmitted={when:Date.now(), summary:`${c.present} ${TR('present','حاضر')}, ${c.absent} ${TR('absent','غائب')}, ${c.late} ${TR('late','متأخر')}`};
  S.securityLog.push({ts:Date.now(), role:'teacher', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action:TR('Submitted attendance','أرسل الحضور')+(r==='queued'?' '+TR('(queued offline)','(قائمة دون اتصال)'):'')});
  render(); focusMain();
  toast(r==='sent'?TR('Attendance submitted for today.','تم إرسال حضور اليوم.'):TR('Attendance saved on this device. Uploads when you’re online.','حُفظ الحضور على الجهاز. يُرفع عند الاتصال.'));
}
function doSubmitGrades(){
  const r=queueOrSend(TR('marks — ','درجات — ')+examLabel());
  if(r==='failed'){ S.net.notice='nocache'; render(); announce(TR('Couldn’t save just now — this is often a connection problem. Please try again when you’re back online.','تعذّر الحفظ الآن — غالبًا بسبب الاتصال. أعد المحاولة عند عودة الاتصال.'),true); return; }
  S.gradesDirty=false;
  S.gradesSubmitted={when:Date.now(), exam:{...S.gradeExam}};
  S.gradeUnlockReason=null; // re-lock after each fresh submit
  S.securityLog.push({ts:Date.now(), role:'teacher', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action:TR('Submitted marks: ','أرسل درجات: ')+examLabel()+(r==='queued'?' '+TR('(queued offline)','(قائمة دون اتصال)'):'')});
  render(); focusMain();
  toast(r==='sent'?examLabel()+' — '+TR('marks submitted.','الدرجات مُرسَلة.'):examLabel()+' — '+TR('saved on this device. Uploads when you’re online.','محفوظة على الجهاز. تُرفع عند الاتصال.'));
}
function teacherAttendance(){
  const cls=teacherClass(), st=cls.students;
  const states=[['present',t('present'),'ok'],['late',t('late'),'warn'],['absent',t('absent'),'risk'],['excused',t('excused'),'info']];
  const dayOff = S.attDay || 0;
  const isPast = dayOff < 0;
  const dayDate = new Date(Date.now() + dayOff*86400000);
  const dayLabel = (function(){
    if(dayOff===0) return TR('today','اليوم');
    if(dayOff===-1) return TR('yesterday','أمس');
    return fmtDateOf(dayDate.getTime(), {weekday:'long', day:'numeric', month:'short'});
  })();
  // historical state per student for past day (index in attendanceDays: most-recent = 0)
  const historicalFor = (s) => {
    const idx = -dayOff - 1; // attDay=-1 → idx 0 (most recent past)
    const ds = attendanceDays(s);
    return ds[Math.min(idx, ds.length-1)] || 'present';
  };
  // counts for the locked past-day view
  let pastCounts={present:0,late:0,absent:0,excused:0};
  if(isPast){ st.forEach(s=>{ pastCounts[historicalFor(s)]++; }); }
  // ── PAST-DAY LOCKED VIEW ──
  if(isPast){
    return `
    ${taskBack()}
    <div class="page-head"><div>
      <p class="eyebrow">${esc(nodeName(cls))} · ${fmtDateOf(dayDate.getTime(), {weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p>
      <h1>🔒 ${t('attendance')} — ${dayLabel}</h1>
    </div></div>
    <div class="calm mb" style="background:var(--info-050,#eef);border-color:var(--info-700,#0d5c8c)">
      ${uiIcon('lock', 22)}
      <span>${TR('This is a past day — the record is locked, you can only view it. Tap “return to today” below to make changes to today.','هذا يوم سابق — السجلّ مقفل، يمكنك الاطّلاع عليه فقط. اضغط «العودة إلى اليوم» بالأسفل للتعديل على حضور اليوم.')}</span>
    </div>
    <div class="card" style="display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;padding:.6rem .9rem">${renderAttCounts(pastCounts, st.length)}</div>
    <div class="grid mt" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
      ${st.map(s=>{ const stStat = historicalFor(s);
        const stTone = stStat==='present'?'ok':stStat==='late'?'warn':stStat==='absent'?'risk':'info';
        const stLbl = t(stStat);
        return `<div class="card" style="padding:.8rem 1rem;opacity:.9">
          <div class="flex between center" style="margin-bottom:.4rem">
            <strong>${esc(arName(s))} ${s.hasAcc?`<span class="tag info" title="${TR('Has accommodations','لديه تيسيرات')}">♿</span>`:''}</strong>
            <span class="tag ${stTone}" aria-label="${stLbl}">${stLbl}</span>
          </div>
          <p class="tiny muted" style="margin:0">🔒 ${TR('Locked — view only','مقفل — للعرض فقط')}</p>
        </div>`;
      }).join('')}
    </div>
    <div class="mt2" style="text-align:center">
      <button class="btn" data-att-day="0" style="font-size:1.02rem">${aFwd()} ${TR('Return to today','العودة إلى اليوم')}</button>
    </div>
    ${dayHistoryFooter()}
    ${taskNav('assessments', t('assessments'))}`;
  }
  // ── TODAY (EDITABLE) VIEW ──
  return `
  ${taskBack()}
  <div class="page-head"><div>
    <p class="eyebrow">${esc(nodeName(cls))} · ${fmtDate({weekday:'long',year:'numeric',month:'long',day:'numeric'})}</p><h1>${t('attendance')}</h1>
  </div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">✅</span>
    <span>${TR("Everyone is already marked <strong>present</strong>. Just tap anyone who is <strong>absent</strong> or <strong>late</strong>.",'الجميع مُسجَّل <strong>حاضرًا</strong>. اضغط فقط على من هو <strong>غائب</strong> أو <strong>متأخر</strong>.')}</span></div>
  <div class="card" id="att-summary" style="position:sticky;top:.4rem;z-index:5;display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;padding:.6rem .9rem">${renderAttCounts({present:st.length,late:0,absent:0,excused:0}, st.length)}</div>
  <div class="flex between center wrapw" style="gap:.6rem;margin:.5rem 0">
    <div style="flex:1;min-width:220px">
      <label class="sr-only" for="att-search">${TR('Find a student by name','ابحث عن طالب بالاسم')}</label>
      <input id="att-search" type="search" inputmode="search" placeholder="🔍 ${TR('Find a student by name…','ابحث عن طالب بالاسم…')}" autocomplete="off"
        style="width:100%;font:inherit;padding:.55rem .8rem;border:2px solid var(--line-strong);border-radius:var(--radius)">
    </div>
    <p class="muted small" style="margin:0">${TR('You can fix today\u2019s attendance until 2:00 PM the next day. Excuses (medical, travel, etc.) are processed by the admin staff — approved excuses will update automatically.','يمكنك تعديل حضور اليوم حتى الساعة 2:00 ظهرًا من اليوم التالي. الأعذار (طبية، سفر، إلخ) يتولّاها الموظف الإداري — وتظهر تلقائيًّا بعد الاعتماد.')}</p>
  </div>
  <button type="button" class="btn sec" style="min-height:44px;margin-bottom:.5rem" onclick="exportAttendanceCsv()">⬇ ${TR('Export attendance CSV','تصدير الحضور CSV')}</button>
  <p class="muted small" id="att-noresult" style="display:none">${TR('No student matches that name.','لا يوجد طالب بهذا الاسم.')}</p>
  <div style="display:flex;flex-direction:column;gap:.5rem">
    ${st.map((s,si)=>`<div class="card" data-att-card="${esc((arName(s)+' '+s.name+' '+String(si+1)).toLowerCase())}" style="padding:.8rem 1rem">
      <div class="flex between center" style="margin-bottom:.5rem">
        <strong><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))} ${s.hasAcc?`<span class="tag info" title="${TR('Has accommodations','لديه تيسيرات')}">♿</span>`:''}</strong>
        <span class="small muted" data-att-state="${s.id}" aria-live="polite">✓ ${t('present')}</span>
      </div>
      <div class="seg" role="radiogroup" aria-label="${TR('Attendance for','حضور')} ${esc(arName(s))}">
        ${states.map(([v,lbl])=>`<button type="button" role="radio" aria-checked="${v==='present'?'true':'false'}" data-att="${s.id}" data-val="${v}" style="flex:1" ${S.net.status==='nocache'?'disabled':''}>${lbl}</button>`).join('')}
      </div>
    </div>`).join('')}
  </div>
  <div class="card mt" id="att-bigsummary" style="text-align:center;padding:1rem">${renderAttBig({present:st.length,late:0,absent:0,excused:0}, st.length)}</div>
  ${S.attSubmitted?`<div class="calm mt" style="background:var(--ok-050);border-color:var(--ok-700)"><span class="em" aria-hidden="true">✅</span>
    <span><strong>${TR('Attendance submitted','تم إرسال الحضور')}</strong> ${TR('for today','لهذا اليوم')} (${esc(S.attSubmitted.summary)}). ${TR('You can still change it until 2:00 PM the next day and submit again.','يمكنك تعديله حتى الساعة 2:00 ظهرًا من اليوم التالي وإرساله مجددًا.')}</span></div>
  <div class="card mt" style="border-inline-start:6px solid var(--ok-700)">
    <p style="margin:0;font-size:1.02rem">
      <span class="tag ok">✓ ${TR('Saved on this device','محفوظ على هذا الجهاز')}</span>
      <span aria-hidden="true">${aFwd()}</span> <span class="tag ok">✓ ${TR('Uploaded','تم الرفع')}</span>
      <span aria-hidden="true">${aFwd()}</span> <span class="tag ok">✓ ${TR('School received it','استلمته المدرسة')}</span>
    </p>
    <p class="small muted" style="margin:.4rem 0 0">${TR('Nothing is lost — if the internet drops, it stays saved here and uploads on its own. The official register stays with the school.','لا شيء يضيع — إن انقطع الإنترنت يبقى محفوظًا هنا ويُرفع تلقائيًّا. ويبقى السجلّ الرسمي لدى المدرسة.')}</p>
  </div>`:''}
  <div class="mt2"><button class="btn" data-submit-attendance style="font-size:1.05rem;padding:.7rem 1.4rem">📨 ${TR('Submit attendance for today','إرسال حضور اليوم')}</button></div>
  ${dayHistoryFooter()}
  ${taskNav('assessments', t('assessments'))}`;
}
// Small, low-prominence footer with day navigation + reset button. Designed to NOT
// catch the eye — teachers usually only need today; this is here for occasional review.
function dayHistoryFooter(){
  const AR = S.settings.lang==='ar';
  const cur = S.attDay || 0;
  return `
  <div style="margin-top:2.5rem;border-top:1px solid var(--line);padding-top:1rem">
    <p class="small muted" style="text-align:center;margin:0 0 .6rem">${AR?'⚙️ خيارات إضافية (نادرة الاستخدام)':'⚙️ More options (rarely needed)'}</p>
    <div class="card" style="background:var(--sand,#faf7f0);padding:.9rem 1rem">
      <p class="eyebrow" style="margin:0 0 .3rem">📅 ${AR?'عرض أيام سابقة':'View previous days'}</p>
      <p class="small muted" style="margin:0 0 .6rem">${AR?'لمراجعة سجلّ الأيام السابقة — كلّها مقفلة ولا تُعدَّل.':'Review past days — all locked, view only.'}</p>
      <div class="flex" style="gap:.4rem;flex-wrap:wrap;align-items:center">
        <button class="btn sec sm" data-att-day="${cur-1}" aria-label="${AR?'اليوم السابق':'Previous day'}">${aBack()} ${AR?'يوم أسبق':'Earlier day'}</button>
        ${cur<0?`<button class="btn sec sm" data-att-day="${cur+1}" aria-label="${AR?'اليوم التالي':'Next day'}">${AR?'يوم لاحق':'Later day'} ${aFwd()}</button>`:''}
        ${cur<0?`<button class="btn sm" data-att-day="0">${AR?'العودة إلى اليوم':'Return to today'}</button>`:''}
      </div>
      <hr style="border:none;border-top:1px solid var(--line);margin:1rem 0">
      <p class="eyebrow" style="margin:0 0 .3rem">🔄 ${AR?'إعادة ضبط اليوم':'Reset today'}</p>
      <p class="small muted" style="margin:0 0 .6rem">${AR?'يعيد جميع الطلاب إلى «حاضر». استخدم بحذر — يفقد ما أدخلته.':'Resets every student back to “present”. Use with care — overwrites what you entered.'}</p>
      <button class="btn ghost sm" data-mark-all="present">${AR?'إعادة الكلّ إلى حاضر':'Reset all to present'}</button>
    </div>
  </div>`;
}

function teacherAssessments(){
  const cls=teacherClass(), st=cls.students;
  const scores0=st.map(s=>subjScore(s));
  const mean0=Math.round(scores0.reduce((a,b)=>a+b,0)/scores0.length);
  const pass0=Math.round(scores0.filter(v=>v>=60).length/scores0.length*100);
  const high0=scores0.filter(v=>v>=85).length, mid0=scores0.filter(v=>v>=60&&v<85).length, low0=scores0.filter(v=>v<60).length;
  const liveTelemetry = `
  <!-- Live In-Grading Dynamic Telemetry & Immediate Pedagogical Feedback -->
  <div class="card highlight mb" id="telemetry-box" style="border-inline-start:6px solid var(--ischool-blue);padding:1.2rem 1.4rem;box-shadow:var(--shadow)">
    <div class="flex between center wrapw" style="gap:1rem">
      <div class="flex center gap-3 wrapw">
        <div style="background:var(--paper);padding:.6rem 1rem;border-radius:var(--radius);border:1.5px solid var(--line)">
          <span class="eyebrow" style="margin:0">${TR('Live Class Average','المتوسط الفعلي للفصل (فوري)')}</span>
          <div style="display:flex;align-items:baseline;gap:.4rem">
            <strong id="live-telemetry-mean" style="font-size:1.85rem;color:var(--ischool-blue);font-weight:900;line-height:1">${mean0}%</strong>
          </div>
        </div>

        <div style="background:var(--paper);padding:.6rem 1rem;border-radius:var(--radius);border:1.5px solid var(--line)">
          <span class="eyebrow" style="margin:0">${TR('Comprehension Rate','معدل الاستيعاب (≥٦٠%)')}</span>
          <div style="display:flex;align-items:baseline;gap:.4rem">
            <strong id="live-telemetry-pass" style="font-size:1.85rem;color:var(--ok-700);font-weight:900;line-height:1">${pass0}%</strong>
            <span class="small muted">${TR('Mastered skills','مجتاز للمهارات')}</span>
          </div>
        </div>

        <div style="background:var(--paper);padding:.6rem 1rem;border-radius:var(--radius);border:1.5px solid var(--line)">
          <span class="eyebrow" style="margin:0">${TR('Score Distribution','توزيع الدرجات')}</span>
          <div style="display:flex;gap:4px;height:14px;width:120px;border-radius:99px;overflow:hidden;margin-top:.4rem;background:#E2E8F0" id="live-telemetry-dist-bar">
            <span style="background:var(--ok-700);width:${Math.round(high0/st.length*100)}%" title="${TR('High','مرتفع')}: ${high0}"></span>
            <span style="background:var(--warn-700);width:${Math.round(mid0/st.length*100)}%" title="${TR('Mid','متوسط')}: ${mid0}"></span>
            <span style="background:var(--risk-700);width:${Math.round(low0/st.length*100)}%" title="${TR('Support needed','يحتاج دعم')}: ${low0}"></span>
          </div>
          <span class="tiny muted" id="live-telemetry-dist-label">${pass0>=85?TR('Healthy — most of the class is on track','صحّي — معظم الفصل على المسار الصحيح'):pass0>=60?TR('Mixed — some students need support','متفاوت — بعض الطلاب يحتاجون دعمًا'):TR('Many students need support','عدد كبير من الطلاب يحتاج دعمًا')}</span>
        </div>
      </div>
    </div>

    <!-- Live Pedagogical Feedback Banner -->
    <div id="live-pedagogical-banner" class="flex between center wrapw" style="margin-top:.75rem;padding:.55rem .85rem;background:var(--teal-050);border-radius:var(--radius-sm);border:1px solid rgba(5,111,236,0.2);font-size:.84rem">
      <span style="color:var(--ischool-blue);font-weight:700">
        💡 <strong id="live-pedagogical-text">${pass0>=85?TR(`Strong comprehension — ${pass0}% of students have mastered core outcomes.`,`استيعاب قوي — ${arNum(pass0)}٪ من الطلاب حقّقوا نواتج التعلّم المستهدفة.`):pass0>=60?TR(`Good progress — ${pass0}% passing, a brief review could help the rest.`,`تقدّم جيد — ${arNum(pass0)}٪ اجتياز، قد تفيد مراجعة سريعة للباقين.`):TR(`Notice — only ${pass0}% passing so far. Remedial support is recommended.`,`تنبيه — ${arNum(pass0)}٪ فقط اجتياز حتى الآن. يُنصح بتفعيل دعم علاجي.`)}</strong>
      </span>
      <span class="tag info">${TR('Enter key advances to next student','اضغط Enter للانتقال التلقائي')}</span>
    </div>
  </div>`;
  const sq=quizFor(currentUnitFor('Science'));
  const quizTitle=sq?L(sq,'title'):TR('Quiz','اختبار');
  const wins=assessWindows(), w1=wins[0], w2=wins[1]; const s1=winStatus(w1);
  return `
  ${taskBack()}
  <div class="page-head"><div>
    <p class="eyebrow">${esc(nodeName(cls))} · ${TR('Science','العلوم')}</p><h1>${t('assessments')}</h1>
  </div></div>
  <div class="card mb" style="border-inline-start:6px solid var(--${winTone(s1)||'teal'}-700)">
    <div class="flex between center wrapw" style="gap:.5rem">
      <div><p class="eyebrow" style="margin:0">${TR('Assessment window','نافذة التقييم')} ${w1.n}</p>
        <strong>${fmtDateOf(w1.open)} – ${fmtDateOf(w1.close)}</strong></div>
      <span class="tag ${winTone(s1)}">${winStatusLabel(s1)}</span>
    </div>
    <p class="small muted" style="margin:.4rem 0 0">${TR('Run this assessment any day inside the window — you choose the lesson period. It saves offline and syncs on its own.','أجرِ هذا التقييم في أيّ يوم داخل النافذة — أنت تختار الحصّة. يُحفظ دون اتصال ويُزامَن تلقائيًّا.')}</p>
    <p class="small" style="margin:.4rem 0 0"><span class="tag info">${TR('Window','نافذة')} ${w2.n} · ${TR('re-test','إعادة اختبار')}</span> ${TR('opens','تفتح')} ${fmtDateOf(w2.open)}.</p>
  </div>
  ${liveTelemetry}
  ${(()=>{ const mode=S.assessMode||'manual';
    const tabs=`<div class="seg-tabs" role="tablist" aria-label="${TR('How this assessment is graded','كيف يُصحَّح هذا التقييم')}" style="margin-bottom:.6rem">
      <button type="button" role="tab" aria-selected="${mode==='manual'}" data-assess-mode="manual" class="seg-tab ${mode==='manual'?'on':''}"><span aria-hidden="true">✏️</span> ${TR('Enter grades','أدخل الدرجات')}</button>
      
    </div>`;
    if(mode==='auto'){
      return tabs+`
      <div class="calm mb"><span class="em" aria-hidden="true">⚙️</span>
        <span><span class="tag info">${TR('Auto-marked','مُصحّح آليًّا')}</span> ${esc(quizTitle)} · ${TR("this week's unit",'وحدة هذا الأسبوع')} · ${st.length} ${TR('submissions','محاولة')}. ${TR('This one is an in-app quiz, so the computer fills a <strong>suggested</strong> score. <strong>Your mark is the recorded result</strong> — change any you disagree with, then release.','بما أنّ هذا اختبار داخل التطبيق، يملأ الحاسوب درجة <strong>مقترَحة</strong>. <strong>درجتك هي النتيجة المسجَّلة</strong> — غيّر ما لا توافق عليه ثمّ انشر.')}</span></div>
      <div class="tbl-scroll">
        <table><caption>${TR('Your mark in the first column is the recorded result. The auto-marked score beside it is only a suggestion you can change.','درجتك في العمود الأوّل هي النتيجة المسجَّلة. والدرجة المصحّحة آليًّا بجانبها مجرّد اقتراح يمكنك تغييره.')}</caption>
        <thead><tr><th scope="col">${TR('Student','الطالب')}</th><th scope="col">${TR('Result · your mark /100','النتيجة · درجتك /100')}</th><th scope="col">${TR('Auto-marked','مُصحّح آليًّا')}</th><th scope="col">${TR('Feedback','ملاحظة')}</th></tr></thead>
        <tbody>
        ${st.map((s,si)=>{ const auto=clamp(s.mastery['Science']+ri(rng(s.id.length+5),-8,8),0,100);
          const key=(sq?sq.unitId:'q')+':'+s.id; const val=S.quizMarks[key]!=null?S.quizMarks[key]:auto;
          return `<tr><th scope="row"><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))}</th>
            <td><label class="sr-only" for="a-${s.id}">${esc(arName(s))} ${TR('mark — this is the result','الدرجة — هذه هي النتيجة')}</label>
              <input class="qz-input" id="a-${s.id}" type="text" inputmode="text" maxlength="5" value="${val}" data-quizmark="${key}" onkeydown="if(event.key==='Enter'&&window.S&&window.S.settings&&window.S.settings.enterAdvance){event.preventDefault();var nxt=this.closest('tr').nextElementSibling;if(nxt)nxt.querySelector('input')?.focus();}"></td>
            <td class="small muted">${auto} · ${TR('suggestion','اقتراح')}</td>
            <td><label class="sr-only" for="fb-${s.id}">${TR('Feedback for','ملاحظة لـ')} ${esc(arName(s))}</label>
              <input id="fb-${s.id}" placeholder="${TR('Short note (optional)','ملاحظة قصيرة (اختياري)')}" style="min-width:180px"></td></tr>`;}).join('')}
        </tbody></table>
      </div>
      <p class="hint mt">${TR('Students see their quiz score and the correct answers afterwards so they can self-correct. Backend integrity checks flag unusual patterns for QA — they never punish a teacher.','يرى الطلاب درجاتهم والإجابات الصحيحة بعد الاختبار ليصحّحوا أنفسهم. وتنبّه فحوصات النزاهة في الخلفية إلى الأنماط غير المعتادة لأغراض الجودة — ولا تُستخدَم أبدًا لمعاقبة المعلّم.')}</p>`;
    }
    return tabs+`
    <div class="calm mb"><span class="em" aria-hidden="true">✏️</span>
      <span><span class="tag">${TR('Enter grades','أدخل الدرجات')}</span> ${TR('Enter each mark, then submit at the end to save.','أدخل كل درجة، ثم أرسل في النهاية لحفظ البيانات.')}</span></div>
    <div class="tbl-scroll">
      <table><caption>${TR("Enter each student's mark, then submit at the end to save.",'أدخل درجة كلّ طالب، ثم أرسل في النهاية لحفظ البيانات.')}</caption>
      <thead><tr><th scope="col">${TR('Student','الطالب')}</th><th scope="col">${TR('Mark /100','الدرجة /100')}</th><th scope="col">${TR('Feedback','ملاحظة')}</th></tr></thead>
      <tbody>
      ${st.map((s,si)=>{ const key='man:'+(sq?sq.unitId:'q')+':'+s.id; const val=S.quizMarks[key]!=null?S.quizMarks[key]:'';
        return `<tr><th scope="row"><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))}</th>
          <td><label class="sr-only" for="a-${s.id}">${esc(arName(s))} ${TR('mark','الدرجة')}</label>
            <input class="qz-input" id="a-${s.id}" type="text" inputmode="text" maxlength="5" value="${val}" placeholder="—" data-quizmark="${key}" onkeydown="if(event.key==='Enter'&&window.S&&window.S.settings&&window.S.settings.enterAdvance){event.preventDefault();var nxt=this.closest('tr').nextElementSibling;if(nxt)nxt.querySelector('input')?.focus();}"></td>
          <td><label class="sr-only" for="fb-${s.id}">${TR('Feedback for','ملاحظة لـ')} ${esc(arName(s))}</label>
            <input id="fb-${s.id}" placeholder="${TR('Short note (optional)','ملاحظة قصيرة (اختياري)')}" style="min-width:180px"></td></tr>`;}).join('')}
      </tbody></table>
    </div>`;
  })()}
  <div class="mt2"><button class="btn" data-view="assessments" data-release="1" style="font-size:1.05rem;padding:.7rem 1.4rem">📣 ${TR('Release results to students','نشر النتائج للطلاب')}</button></div>
  ${taskNav('gradebook', t('gradebook'))}`;
}

/* teacher view of students — roster when none selected, icon-led detail when one is open.
   Designed to work for a teacher with low reading confidence: colours, faces, day-dots, read-aloud. */
function teacherTrend(s){
  if(s.trend>=4) return {ic:'↗', word:'Getting better', tone:'ok'};
  if(s.trend<=-6) return {ic:'↘', word:'Slipping a little', tone:'risk'};
  return {ic:'→', word:'Steady', tone:'warn'};
}
function teacherStatus(s){
  if(s.risk==='risk') return {cls:'risk', em:'🔴', word:TR('Needs some help','بحاجة لدعم تعليمي مستهدف')};
  if(s.risk==='warn') return {cls:'warn', em:'🟡', word:TR('Keep an eye','يتطلب متابعة دورية مستمرة')};
  return {cls:'ok', em:uiIcon('check', 14), word:TR('Mastery on track — excellent performance','مستوى متميز ومحقق لنواتج التعلّم')};
}
function teacherStudent(){
  const cls=teacherClass(), st=cls.students;
  const AR=S.settings.lang==='ar';
  const subjLabel=AR?SUBJECTS_AR[TEACHER_SUBJECT]:TEACHER_SUBJECT;
  const pct=n=>(AR?arNum(n):n)+'%';
  const examOf=s=>{const g=s.grades[TEACHER_SUBJECT];return g==null?'—':(typeof g==='number'?pct(g):esc(String(g)));};
  return `
  ${taskBack()}
  <div class="page-head"><div>
    <p class="eyebrow">${esc(nodeName(cls))} · ${subjLabel} · ${st.length} ${AR?'طالبًا':'students'}</p>
    <h1>${AR?'طلابي':'My students'}</h1>
  </div></div>
  <div class="tbl-scroll">
    <table>
      <caption class="sr-only">${AR?'نظرة عامّة على الحضور والتقييم والامتحان':'Overview of attendance, assessment and exam'}</caption>
      <thead><tr>
        <th scope="col">${AR?'الطالب':'Student'}</th>
        <th scope="col">${AR?'الحضور':'Attendance'}<br><span class="small muted" style="font-weight:400">${AR?'% حتى تاريخه':'% term to date'}</span></th>
        <th scope="col">${AR?'التقييم':'Assessment'}<br><span class="small muted" style="font-weight:400">${AR?'متوسط الاختبارات':'avg of quizzes'}</span></th>
        <th scope="col">${AR?'الامتحان':'Exam'}<br><span class="small muted" style="font-weight:400">${AR?'آخر درجة مُدخلة':'latest mark entered'}</span></th>
      </tr></thead>
      <tbody>
      ${st.map((s,si)=>`<tr>
        <th scope="row"><span style="color:var(--ink3,#999);font-size:.82rem;margin-inline-end:.4rem">${si+1}.</span>${esc(arName(s))} ${s.hasAcc?`<span class="tag info" title="${TR('Has accommodations','لديه تيسيرات')}">♿</span>`:''}</th>
        <td>${pct(s.att)}</td>
        <td>${pct(subjScore(s))}</td>
        <td>${examOf(s)}</td><td><button class="btn sm gold" data-open-student-modal="${s.id}" style="padding:.2rem .5rem;font-size:.78rem">🔍 ${TR("Ledger","كشف الدرجات")}</button></td>
      </tr>`).join('')}
      </tbody>
    </table>
  </div>
  <p class="hint mt">${AR?'«التقييم» من اختبارات المنصّة، و«الامتحان» من درجات الامتحانات التي أدخلتها. «—» تعني عدم إدخال درجة بعد.':'“Assessment” is from in-app quizzes; “Exam” is from the exam marks you entered. “—” means no exam mark entered yet.'}</p>`;
}

/* ===================== STUDENT ===================== */
function studentProgress(){
  const s=STUDENT_SELF; const AR=S.settings.lang==='ar';
  const days=attendanceDays(s);
  const present=days.filter(d=>d==='present').length;
  const absent=days.filter(d=>d==='absent').length;
  const late=days.filter(d=>d==='late').length;
  const avg=s.avgM;
  const subs=SUBJECTS.slice().sort((a,b)=>s.mastery[a]-s.mastery[b]);
  const lowest=subs[0];
  const lowName=AR?SUBJECTS_AR[lowest]:lowest;
  const examFor=(su)=>examMarkFor(s,su);
  const read=TR(
    `My progress report. Attendance summary: ${present} days present out of ${days.length} total school days. Assessment average ${avg} percent. Recommended academic focus: ${lowest}.`,
    `تقرير تقدمي الدراسي. سجل الحضور: تم إتمام ${present} يومًا دراسيًا من أصل ${days.length} يومًا. متوسط التقييمات ${avg} بالمئة. التوصية الأكاديمية: تعزيز التعلّم في مادة ${lowName}.`);
  const nbar=(v)=>`<span class="bar" role="img" aria-label="${v}%"><span style="width:${v}%;background:var(--teal-700)"></span></span>`;

  return `
  <div class="page-head" style="display:flex;justify-content:space-between;align-items:center;margin-bottom:1.2rem">
    <div>
      <p class="eyebrow" style="margin:0 0 .2rem;display:flex;align-items:center;gap:.35rem">${uiIcon('chart', 15)} ${AR?'مسار التعلّم والإنجاز':'Academic Progress'}</p>
      <h1 style="margin:0;font-size:1.85rem;font-weight:900">${AR?'لوحة المتابعة ونواتج التعلّم':'My Learning Journey'}</h1>
    </div>
    ${speakBtn(read, AR?'الاستماع الصوتي للشاشة':'Listen to screen')}
  </div>

  <div class="calm mb" style="background:#F0FDF4;border:1.5px solid #BBF7D0;border-radius:14px;padding:.85rem 1.15rem;display:flex;align-items:center;gap:.75rem">
    <span class="em" aria-hidden="true" style="color:#059669;display:flex;align-items:center">${uiIcon('sparkles', 22)}</span>
    <span style="color:#065F46;font-size:.92rem;line-height:1.5">${AR?'مساحتك التعليمية الخاصة — نتابع معك خطوات تطورك اليومي ونحتفي بإنجازاتك المستمرة خطوة بخطوة.':'Your personal learning space — tracking your continuous growth and celebrating your progress step by step.'}</span>
  </div>

  <h2 style="margin:1.4rem 0 .75rem;font-size:1.25rem;font-weight:800;display:flex;align-items:center;gap:.5rem">
    ${uiIcon('calendar', 18)} ${AR?'سجل الحضور والالتزام المدرسي':'My School Attendance Record'}
  </h2>

  <!-- 3 Modern Attendance Metric Tiles -->
  <div class="bigtiles mb" style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem">
    
    <!-- 1. Present Tile -->
    <div class="bigtile ok" style="border-radius:16px;padding:1.15rem 1rem;background:#FFFFFF;border:1.5px solid #A7F3D0;box-shadow:0 4px 16px rgba(16,185,129,0.06);display:flex;flex-direction:column;align-items:center;text-align:center">
      <span class="em" aria-hidden="true" style="width:48px;height:48px;border-radius:14px;background:#ECFDF5;display:flex;align-items:center;justify-content:center;color:#047857;margin-bottom:.4rem">
        ${uiIcon('check', 24)}
      </span>
      <span class="bignum" style="font-size:2.2rem;font-weight:900;color:#047857;line-height:1">${present}</span>
      <span class="word" style="font-size:.95rem;font-weight:800;color:#065F46;margin-top:.3rem">${AR?'أيام الحضور الفعلي':'Days Present'}</span>
    </div>

    <!-- 2. Absent Tile -->
    <div class="bigtile risk" style="border-radius:16px;padding:1.15rem 1rem;background:#FFFFFF;border:1.5px solid #FECDD3;box-shadow:0 4px 16px rgba(239,68,68,0.06);display:flex;flex-direction:column;align-items:center;text-align:center">
      <span class="em" aria-hidden="true" style="width:48px;height:48px;border-radius:14px;background:#FFF1F2;display:flex;align-items:center;justify-content:center;color:#BE123C;margin-bottom:.4rem">
        ${uiIcon('close', 24)}
      </span>
      <span class="bignum" style="font-size:2.2rem;font-weight:900;color:#BE123C;line-height:1">${absent}</span>
      <span class="word" style="font-size:.95rem;font-weight:800;color:#9F1239;margin-top:.3rem">${AR?'أيام الغياب غير المسجل':'Days Absent'}</span>
    </div>

    <!-- 3. Late Tile -->
    <div class="bigtile warn" style="border-radius:16px;padding:1.15rem 1rem;background:#FFFFFF;border:1.5px solid #FED7AA;box-shadow:0 4px 16px rgba(245,158,11,0.06);display:flex;flex-direction:column;align-items:center;text-align:center">
      <span class="em" aria-hidden="true" style="width:48px;height:48px;border-radius:14px;background:#FFF7ED;display:flex;align-items:center;justify-content:center;color:#C2410C;margin-bottom:.4rem">
        ${uiIcon('clock', 24)}
      </span>
      <span class="bignum" style="font-size:2.2rem;font-weight:900;color:#C2410C;line-height:1">${late}</span>
      <span class="word" style="font-size:.95rem;font-weight:800;color:#9A3412;margin-top:.3rem">${AR?'حالات التأخر المسجلة':'Late Arrivals'}</span>
    </div>

  </div>

  <!-- 20 Days Dot Grid Card -->
  <div class="card" style="border-radius:16px;padding:1.35rem 1.5rem">
    <div class="flex between center wrapw" style="margin-bottom:.85rem;gap:.5rem">
      <h3 style="margin:0;font-size:1.15rem">${AR?'سجل آخر '+days.length+' يومًا دراسيًّا':'Last '+days.length+' School Days Attendance'}</h3>
      <div class="pill-row" style="display:flex;gap:.45rem">
        <span class="tag ok" style="font-weight:800;display:inline-flex;align-items:center;gap:.3rem">${uiIcon('check', 12)} ${AR?'حاضر بالمدرسة':'Present'}</span>
        <span class="tag warn" style="font-weight:800;display:inline-flex;align-items:center;gap:.3rem">${uiIcon('clock', 12)} ${AR?'تأخر مسجل':'Late'}</span>
        <span class="tag risk" style="font-weight:800;display:inline-flex;align-items:center;gap:.3rem">${uiIcon('close', 12)} ${AR?'غياب':'Absent'}</span>
      </div>
    </div>

    <!-- Attendance Modern Dot Grid -->
    <div class="dotgrid mt" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(28px,1fr));gap:6px" aria-hidden="true">
      ${days.map(d=>`
        <span class="d ${d}" style="height:32px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:900;background:${d==='present'?'#10B981':d==='late'?'#F59E0B':'#EF4444'};color:#FFFFFF">
          ${d==='present'?uiIcon('check',14):d==='late'?uiIcon('clock',14):uiIcon('close',14)}
        </span>
      `).join('')}
    </div>

    <div style="margin-top:.85rem;padding-top:.75rem;border-top:1px solid var(--line);font-size:.88rem;color:var(--ink-2)">
      ${AR ? `سجل الحضور: تم إتمام ${present} من أصل ${days.length} يومًا دراسيًا بنسبة التزام ${Math.round((present/days.length)*100)}% — رائع! استمر في تميزك الأكاديمي.` : `Attendance record: ${present} of ${days.length} school days completed (${Math.round((present/days.length)*100)}% attendance rate) — keep up the great effort!`}
    </div>
  </div>
  `;
}

function studentShell(inner){
  const items=[
    {v:'home', ico: uiIcon('home', 16), t: TR('Home','الرئيسية')},
    {v:'progress', ico: uiIcon('chart', 16), t: TR('My Learning Progress','مسار التعلّم والإنجاز')},
    {v:'training', ico: uiIcon('student', 16), t: TR('User Guide','دليل الاستخدام السريع')},
  ];
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${inner}${devNote()}</div></main>${a11yPanel()}`;
}
function fmtBadges(formats){
  const map={'read-aloud':[TR('🔊','🔊'),TR('Read-aloud','قراءة صوتية')],'captions':['🆑',TR('Captions','تعليقات نصّية')],'sign-language':['🤟',TR('Sign language','لغة إشارة')],'image-descriptions':['🖼️',TR('Image descriptions','وصف الصور')],'offline':['📥',TR('Works offline','يعمل دون اتصال')]};
  return formats.map(f=>`<span class="tag" title="${map[f]?map[f][1]:f}"><span aria-hidden="true">${map[f]?map[f][0]:'•'}</span> ${map[f]?map[f][1]:f}</span>`).join(' ');
}
function studentHome(){
  const s=STUDENT_SELF;
  const doneCount=S.doneContent.length + Object.keys(S.doneQuiz).length;
  // group lessons by subject for the tiles
  const subjectsWithContent=SUBJECTS.map(su=>({su, items:CONTENT.filter(c=>c.subject===su)}));
  return `
  <div class="page-head"><div>
    <p class="eyebrow">${fmtDate({weekday:'long'})}</p>
    <h1>${t('greeting')} ${esc(arName(s))}! 👋</h1>
  </div>${speakBtn(`Hi ${arName(s)}. Tap a subject to start learning. Pick the one you like.`)}</div>

  ${doneCount>0?`<div class="calm mb"><span class="em" aria-hidden="true">⭐</span>
    <span>${TR('Nice work! You have finished','عملٌ رائع! أنجزت')} <strong>${doneCount}</strong> ${TR(doneCount===1?'thing':'things', doneCount===1?'مهمّة':'من المهامّ')}. ${TR('Keep going at your own pace.','واصل بإيقاعك الخاص.')}</span></div>`:
    `<div class="calm mb"><span class="em" aria-hidden="true">🌟</span>
    <span>${t('pickSubject')}</span></div>`}

  ${studentAnnouncements()}
  <h2>${t('mysubjects')}</h2>
  <div class="bigtiles">
    ${subjectsWithContent.map(({su,items})=>`
      <button type="button" class="bigtile" data-subject-open="${esc(su)}" ${items.length?'':'disabled aria-disabled="true" style="opacity:.55;cursor:default"'}>
        <span class="em" aria-hidden="true">${SUBJECT_ICON[su]||'📘'}</span>
        <span class="word">${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}</span>
        <span class="sub">${items.length? items.length+' '+(S.settings.lang==='ar'?'درس':(items.length===1?'lesson':'lessons')) : (S.settings.lang==='ar'?'قريبًا':'Coming soon')}</span>
        ${(function(){ if(!items.length) return ''; var done=items.filter(function(c){return S.doneContent.indexOf(c.id)>=0;}).length; var pct=Math.round(100*done/items.length); var lbl=(S.settings.lang==='ar'?'تقدُّمك':'Your progress'); return '<span class="sr-only">'+lbl+': '+done+' / '+items.length+'</span>'+'<span aria-hidden="true" style="display:block;margin-top:.35rem;height:6px;background:var(--line,#e5e5e5);border-radius:99px;overflow:hidden">'+'<span style="display:block;height:100%;width:'+pct+'%;background:var(--teal-700,#0f766e)"></span></span>'; })()}
      </button>`).join('')}
  </div>`;
}

/* ═══════════════════════════════════════
   INTERACTIVE LEARNING GAMES
   ═══════════════════════════════════════ */
const GAME_CATS=[
  {id:'sci', label_en:'🔬 Science', label_ar:'🔬 علوم', tabs:['ph','eco','wave','pacman']},
  {id:'ar',  label_en:'📖 Arabic',  label_ar:'📖 عربي', tabs:['roots','irab']},
  {id:'math',label_en:'📐 Maths',   label_ar:'📐 رياضيات', tabs:['eq','frac']},
];
const GAME_TABS=[
  {id:'ph',    icon:'🧪', label_en:'pH Scale',          label_ar:'مقياس pH'},
  {id:'eco',   icon:'🌿', label_en:'Ecosystem balance', label_ar:'توازن النظام البيئي'},
  {id:'wave',  icon:'〰️', label_en:'Wave Lab',          label_ar:'مختبر الموجات'},
  {id:'roots', icon:'📖', label_en:'Word Roots',        label_ar:'جذور الكلمات'},
  {id:'irab',  icon:'✏️', label_en:'إعراب Trainer',     label_ar:'تدريب الإعراب'},
  {id:'eq',    icon:'⚖️', label_en:'Equation Balance',  label_ar:'ميزان المعادلات'},
  {id:'frac',  icon:'🔵', label_en:'Fractions',         label_ar:'الكسور المرئية'},
  {id:'pacman',icon:'🔬', label_en:'Science Explorer',  label_ar:'مستكشف العلوم'},
];
const PH_SUBSTANCES=[
  {name_en:'Lemon juice', name_ar:'عصير ليمون', ph:2.0, color:'#ef4444'},
  {name_en:'Coffee',      name_ar:'قهوة',       ph:5.0, color:'#92400e'},
  {name_en:'Milk',        name_ar:'لبن',        ph:6.5, color:'#fef3cd'},
  {name_en:'Pure water',  name_ar:'ماء نقي',    ph:7.0, color:'#3b82f6'},
  {name_en:'Blood',       name_ar:'دم',         ph:7.4, color:'#dc2626'},
  {name_en:'Soap',        name_ar:'صابون',      ph:10.0,color:'#a78bfa'},
  {name_en:'Bleach',      name_ar:'مبيّض (كلور)',ph:12.5,color:'#fbbf24'},
];
const WORD_ROOTS=[
  {root:'ك ت ب', words:[{w:'كِتاب',m:'book'},{w:'كاتِب',m:'writer'},{w:'مَكتَبة',m:'library'},{w:'مَكتوب',m:'written'}]},
  {root:'ع ل م', words:[{w:'عِلم',m:'science'},{w:'عالِم',m:'scientist'},{w:'مَعلومة',m:'information'},{w:'تَعليم',m:'education'}]},
  {root:'د ر س', words:[{w:'دَرس',m:'lesson'},{w:'مَدرَسة',m:'school'},{w:'مُدَرِّس',m:'teacher'},{w:'دِراسة',m:'study'}]},
  {root:'ح ك م', words:[{w:'حُكم',m:'ruling'},{w:'حَكيم',m:'wise'},{w:'مَحكَمة',m:'court'},{w:'حِكمة',m:'wisdom'}]},
  {root:'ف ت ح', words:[{w:'فَتح',m:'opening'},{w:'مِفتاح',m:'key'},{w:'فَتّاح',m:'opener'},{w:'افتِتاح',m:'inauguration'}]},
];
const IRAB_SENTENCES=[
  {sentence:'قرأ الطالبُ الكتابَ', words:[{w:'قرأ',role:'فعل ماضٍ',cs:'مبني على الفتح'},{w:'الطالبُ',role:'فاعل',cs:'مرفوع بالضمة'},{w:'الكتابَ',role:'مفعول به',cs:'منصوب بالفتحة'}]},
  {sentence:'ذهبَ المعلّمُ إلى المدرسةِ', words:[{w:'ذهبَ',role:'فعل ماضٍ',cs:'مبني على الفتح'},{w:'المعلّمُ',role:'فاعل',cs:'مرفوع بالضمة'},{w:'إلى',role:'حرف جر',cs:'مبني'},{w:'المدرسةِ',role:'اسم مجرور',cs:'مجرور بالكسرة'}]},
  {sentence:'العلمُ نورٌ', words:[{w:'العلمُ',role:'مبتدأ',cs:'مرفوع بالضمة'},{w:'نورٌ',role:'خبر',cs:'مرفوع بالضمة'}]},
];
function gS(k,def){ return S.gameState[k]!==undefined?S.gameState[k]:def; }

function phColorForVal(ph){
  if(ph<3)return'#ef4444';if(ph<5)return'#f97316';if(ph<6.5)return'#eab308';if(ph<7.5)return'#22c55e';
  if(ph<9)return'#06b6d4';if(ph<11)return'#3b82f6';return'#7c3aed';
}

function gamePhMeter(){
  const AR=S.settings.lang==='ar';
  const sel=gS('phSel',null);
  const sub=sel!==null?PH_SUBSTANCES[sel]:null;
  let scaleHtml='';
  for(let i=0;i<14;i++){
    const bg=phColorForVal(i+0.5), tc=i<5||i>10?'#fff':'#000';
    scaleHtml+=`<div style="flex:1;background:${bg};display:flex;align-items:center;justify-content:center;font-size:.6rem;font-weight:700;color:${tc}">${i+1}</div>`;
  }
  const resultHtml=sub?`
    <div style="flex:1">
      <div style="font-size:2.2rem;font-weight:900;color:${phColorForVal(sub.ph)}">${sub.ph}</div>
      <div style="font-size:1rem;font-weight:700;margin-bottom:4px">${AR?sub.name_ar:sub.name_en}</div>
      <span class="tag ${sub.ph<7?'risk':sub.ph===7?'ok':'info'}" style="font-weight:700">${sub.ph<7?(AR?'حمضي':'Acidic'):sub.ph===7?(AR?'متعادل':'Neutral'):(AR?'قاعدي':'Basic')}</span>
      <p class="small muted" style="margin-top:6px;line-height:1.6">${sub.ph<3?(AR?'حمض قوي — يتفاعل مع المعادن ويسبب تآكلها.':'Strong acid — reacts with metals, causing corrosion.'):sub.ph<7?(AR?'حمض ضعيف — آمن للاستهلاك بكميات صغيرة.':'Weak acid — safe in small amounts.'):sub.ph===7?(AR?'متعادل تمامًا — لا حمضي ولا قاعدي.':'Perfectly neutral — neither acidic nor basic.'):sub.ph<=9?(AR?'قاعدي ضعيف — طبيعي في سوائل الجسم.':'Weakly basic — normal in body fluids.'):(AR?'قاعدي قوي — كاوٍ، يجب الحذر عند التعامل معه.':'Strongly basic — caustic, handle with care.')}</p>
    </div>`:`<div style="flex:1;opacity:.4;font-size:.9rem">${AR?'← اختر مادة لقياس pH':'← Choose a substance to test'}</div>`;
  const stripMarker=sub?`<div style="position:absolute;left:-6px;right:-6px;height:5px;border-radius:3px;background:var(--teal-900);top:${(sub.ph/14)*100}%;box-shadow:0 0 8px rgba(0,0,0,.3)"></div>`:'';
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'اضغط على مادة لغمس شريط pH وقياس حمضيتها أو قاعديتها.':'Tap a substance to dip the pH strip and measure its acidity.'}</p>
  <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:14px">
    ${PH_SUBSTANCES.map((s,i)=>`<button class="btn sm ${sel===i?'':'sec'}" data-game-ph="${i}" style="font-size:.82rem">${AR?s.name_ar:s.name_en}</button>`).join('')}
  </div>
  <div style="display:flex;align-items:center;gap:16px">
    <div style="width:36px;height:150px;border-radius:6px;background:linear-gradient(to bottom,#ef4444,#f97316,#eab308,#22c55e,#06b6d4,#3b82f6,#7c3aed);position:relative;border:2px solid var(--line)">
      ${stripMarker}
      <div style="position:absolute;top:-18px;width:100%;text-align:center;font-size:.6rem;opacity:.5">${AR?'حمضي':'Acid'}</div>
      <div style="position:absolute;bottom:-18px;width:100%;text-align:center;font-size:.6rem;opacity:.5">${AR?'قاعدي':'Base'}</div>
    </div>
    ${resultHtml}
  </div>
  <div style="display:flex;margin-top:18px;border-radius:8px;overflow:hidden;height:22px">${scaleHtml}</div>
  <div class="flex between" style="font-size:.7rem;opacity:.4;margin-top:2px"><span>${AR?'حمضي':'Acidic'}</span><span>${AR?'متعادل':'Neutral'}</span><span>${AR?'قاعدي':'Basic'}</span></div>`;
}

function gameEcoBalance(){
  const AR=S.settings.lang==='ar';
  const p0=gS('ecoPlants',50), h0=gS('ecoHerb',30), c0=gS('ecoCarn',10);
  const months=[];
  for(let m=0;m<12;m++){
    let p=p0,h=h0,c=c0;
    for(let i=0;i<m;i++){
      const np=Math.max(0,Math.min(100,p+(p*0.3)-(h*0.4)));
      const nh=Math.max(0,Math.min(100,h+(h*0.2*(p/50))-(c*0.5)));
      const nc=Math.max(0,Math.min(100,c+(c*0.1*(h/30))-(c*0.15)));
      p=np;h=nh;c=nc;
    }
    months.push({p:Math.round(p),h:Math.round(h),c:Math.round(c)});
  }
  const collapsed=months[11].p<5||months[11].h<5;
  const stable=Math.abs(months[11].p-months[0].p)<20&&Math.abs(months[11].h-months[0].h)<15;
  const barsHtml=months.map(m=>`<div style="flex:1;display:flex;flex-direction:column;gap:1px;align-items:stretch;justify-content:flex-end;height:100%">
    <div style="height:${m.c}%;background:var(--risk-700);border-radius:2px 2px 0 0;opacity:.8"></div>
    <div style="height:${m.h*0.6}%;background:var(--info-700);opacity:.8"></div>
    <div style="height:${m.p*0.4}%;background:var(--ok-700);opacity:.8"></div>
  </div>`).join('');
  const statusCls=collapsed?'risk':stable?'ok':'warn';
  const statusMsg=collapsed?(AR?'💀 النظام انهار! أحد المستويات الغذائية اختفى.':'💀 Ecosystem collapsed! A trophic level disappeared.'):stable?(AR?'✅ النظام متوازن — جميع الكائنات تتعايش.':'✅ Balanced — all organisms coexist.'):
    (AR?'⚠️ النظام غير مستقر — الأعداد تتذبذب بشدة.':'⚠️ Unstable — populations fluctuate wildly.');
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'عدّل أعداد الكائنات وراقب ماذا يحدث للنظام البيئي خلال 12 شهرًا.':'Adjust populations and watch the ecosystem over 12 months.'}</p>
  ${[['🌱 '+(AR?'نباتات':'Plants'),p0,'ecoPlants','--ok-700'],
     ['🐑 '+(AR?'عواشب':'Herbivores'),h0,'ecoHerb','--info-700'],
     ['🐺 '+(AR?'لواحم':'Carnivores'),c0,'ecoCarn','--risk-700']].map(([label,val,key,col])=>`
  <div style="margin-bottom:8px">
    <div class="flex between" style="font-size:.85rem"><span style="font-weight:700">${label}</span><strong style="color:var(${col})">${val}</strong></div>
    <input type="range" min="0" max="100" value="${val}" data-game-slider="${key}" style="width:100%;accent-color:var(${col})">
  </div>`).join('')}
  <div style="height:120px;display:flex;align-items:flex-end;gap:2px;margin-top:14px;border-bottom:2px solid var(--line);padding-bottom:2px">${barsHtml}</div>
  <div class="flex between" style="font-size:.65rem;opacity:.4;margin-top:2px"><span>${AR?'شهر 1':'Month 1'}</span><span>${AR?'شهر 6':'Month 6'}</span><span>${AR?'شهر 12':'Month 12'}</span></div>
  <div class="calm mt" style="background:var(--${statusCls}-050);color:var(--${statusCls}-700)">${statusMsg}</div>
  <div class="flex" style="gap:10px;margin-top:6px;font-size:.75rem;opacity:.5"><span>🟢 ${AR?'نباتات':'Plants'}</span><span>🔵 ${AR?'عواشب':'Herbivores'}</span><span>🔴 ${AR?'لواحم':'Carnivores'}</span></div>`;
}

function gameWaveLab(){
  const AR=S.settings.lang==='ar';
  const freq=gS('waveFreq',3), amp=gS('waveAmp',40);
  const wavelength=freq>0?(340/freq).toFixed(1):'∞';
  // SVG wave instead of canvas for simpler rendering
  const w=400, h=120, mid=h/2;
  let path='';
  for(let x=0;x<=w;x++){
    const y=mid+Math.sin((x/w)*freq*Math.PI*2)*(amp/100*mid*0.9);
    path+=(x===0?'M':'L')+x.toFixed(1)+','+y.toFixed(1);
  }
  const wlPx=freq>0?w/freq:w;
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'غيّر التردد والسعة وراقب الموجة تتغيّر أمامك.':'Change frequency and amplitude and watch the wave change.'}</p>
  <div style="margin-bottom:10px">
    <div class="flex between" style="font-size:.85rem"><span style="font-weight:700">${AR?'التردد (Hz)':'Frequency (Hz)'}</span><strong style="color:var(--teal-700)">${freq}</strong></div>
    <input type="range" min="1" max="10" value="${freq}" data-game-slider="waveFreq" style="width:100%;accent-color:var(--teal-700)">
  </div>
  <div style="margin-bottom:10px">
    <div class="flex between" style="font-size:.85rem"><span style="font-weight:700">${AR?'السعة':'Amplitude'}</span><strong style="color:var(--info-700)">${amp}%</strong></div>
    <input type="range" min="10" max="90" value="${amp}" data-game-slider="waveAmp" style="width:100%;accent-color:var(--info-700)">
  </div>
  <svg viewBox="0 0 ${w} ${h}" style="width:100%;border-radius:10px;background:var(--teal-050);border:1px solid var(--line)">
    <line x1="0" y1="${mid}" x2="${w}" y2="${mid}" stroke="var(--line)" stroke-width="1"/>
    <path d="${path}" fill="none" stroke="var(--teal-700)" stroke-width="2.5"/>
    ${freq>0?`<line x1="0" y1="${mid-amp/100*mid*0.9-12}" x2="${Math.min(wlPx,w)}" y2="${mid-amp/100*mid*0.9-12}" stroke="var(--warn-700)" stroke-width="1.5" stroke-dasharray="4 3"/>
    <text x="${Math.min(wlPx,w)/2}" y="${mid-amp/100*mid*0.9-16}" text-anchor="middle" fill="var(--warn-700)" font-size="11" font-weight="700">λ</text>`:''}
  </svg>
  <div class="flex" style="gap:10px;margin-top:10px">
    <div class="card" style="flex:1;text-align:center;padding:.5rem"><div class="small muted">${AR?'الطول الموجي':'Wavelength'}</div><strong style="color:var(--warn-700);font-size:1.1rem">${wavelength} m</strong></div>
    <div class="card" style="flex:1;text-align:center;padding:.5rem"><div class="small muted">${AR?'السرعة':'Speed'}</div><strong style="color:var(--info-700);font-size:1.1rem">340 m/s</strong></div>
  </div>
  <p class="small muted" style="text-align:center;margin-top:6px">v = f × λ → λ = v / f</p>`;
}

function gameWordRoots(){
  const AR=S.settings.lang==='ar';
  const idx=gS('rootIdx',0), revealed=gS('rootRevealed',[]);
  const r=WORD_ROOTS[idx];
  const allDone=revealed.length===r.words.length;
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'اكتشف كيف تتولّد كلمات مختلفة من جذر واحد. اضغط كل كلمة لكشف معناها.':'Discover how different words are born from one root. Tap each word to reveal its meaning.'}</p>
  <div style="display:flex;gap:6px;margin-bottom:14px;flex-wrap:wrap">
    ${WORD_ROOTS.map((_,i)=>`<button class="btn sm ${idx===i?'':'sec'}" data-game-root="${i}">${WORD_ROOTS[i].root}</button>`).join('')}
  </div>
  <div style="text-align:center;margin-bottom:14px">
    <div class="small muted">${AR?'الجذر':'Root'}</div>
    <div style="font-size:2.2rem;font-weight:900;color:var(--teal-700);letter-spacing:10px">${r.root}</div>
  </div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px">
    ${r.words.map((word,i)=>{
      const isR=revealed.includes(i);
      return `<button class="card" data-game-reveal-word="${i}" style="text-align:center;padding:12px 8px;cursor:${isR?'default':'pointer'};border-color:${isR?'var(--teal-700)':'var(--line)'};background:${isR?'var(--teal-050)':'var(--paper)'}">
        <div style="font-size:1.2rem;font-weight:800">${word.w}</div>
        ${isR?`<div style="font-size:.82rem;color:var(--teal-700);margin-top:4px">${word.m}</div>`:`<div class="small muted" style="margin-top:4px">${AR?'اضغط لكشف المعنى':'Tap to reveal'}</div>`}
      </button>`;
    }).join('')}
  </div>
  ${allDone?`<div class="calm mt" style="text-align:center;font-weight:700">🎉 ${AR?'كلها من جذر واحد':'All from one root'} — ${r.root}!</div>`:''}`;
}

function gameIrabTrainer(){
  const AR=S.settings.lang==='ar';
  const sIdx=gS('irabIdx',0), sel=gS('irabSel',null);
  const s=IRAB_SENTENCES[sIdx];
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'اضغط على أيّ كلمة لرؤية إعرابها.':'Tap any word to see its grammatical analysis.'}</p>
  <div style="display:flex;gap:6px;margin-bottom:12px">
    ${IRAB_SENTENCES.map((_,i)=>`<button class="btn sm ${sIdx===i?'':'sec'}" data-game-irab-s="${i}">${AR?'جملة':'Sentence'} ${i+1}</button>`).join('')}
  </div>
  <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:14px">
    ${s.words.map((w,i)=>`<button class="btn ${sel===i?'':'sec'}" data-game-irab-w="${i}" style="font-size:1.2rem;padding:.6rem 1rem;border-color:${sel===i?'var(--warn-700)':'var(--line)'};${sel===i?'background:var(--warn-050);color:var(--warn-700)':''}">
      ${w.w}
    </button>`).join('')}
  </div>
  ${sel!==null?`<div class="card" style="border-color:var(--warn-700);border-inline-start:5px solid var(--warn-700)">
    <div style="font-size:1.1rem;font-weight:800;color:var(--warn-700);margin-bottom:8px">${s.words[sel].w}</div>
    <div class="flex" style="gap:8px">
      <div style="flex:1;background:var(--sand);border-radius:var(--radius);padding:8px 10px">
        <div class="small muted">${AR?'الدور':'Role'}</div>
        <div style="font-weight:700;color:var(--warn-700)">${s.words[sel].role}</div>
      </div>
      <div style="flex:1;background:var(--sand);border-radius:var(--radius);padding:8px 10px">
        <div class="small muted">${AR?'الإعراب':'Case'}</div>
        <div style="font-weight:700;color:var(--info-700)">${s.words[sel].cs}</div>
      </div>
    </div>
  </div>`:''}`;
}

function gameEquationBalance(){
  const AR=S.settings.lang==='ar';
  const left=gS('eqLeft',3), right=gS('eqRight',5), op=gS('eqOp',2);
  const total=left+op, diff=total-right;
  const balanced=diff===0;
  const tilt=Math.max(-15,Math.min(15,-diff*3));
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'عدّل الأرقام لتحقيق التوازن. الميزان يميل نحو الجانب الأثقل.':'Adjust the numbers to balance the equation.'}</p>
  <div style="position:relative;height:100px;margin-bottom:14px">
    <div style="position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:0;height:0;border-left:18px solid transparent;border-right:18px solid transparent;border-bottom:22px solid var(--line-strong)"></div>
    <div style="position:absolute;bottom:22px;left:12%;right:12%;height:5px;border-radius:3px;background:${balanced?'var(--ok-700)':'var(--warn-700)'};transform:rotate(${tilt}deg);transform-origin:center">
      <div style="position:absolute;right:-4px;top:-34px;text-align:center"><div style="font-size:1.4rem;font-weight:900;color:var(--info-700)">${total}</div></div>
      <div style="position:absolute;left:-4px;top:-34px;text-align:center"><div style="font-size:1.4rem;font-weight:900;color:var(--risk-700)">${right}</div></div>
    </div>
  </div>
  <div style="display:flex;align-items:center;justify-content:center;gap:8px;font-size:1.4rem;font-weight:900;margin-bottom:14px">
    <span style="color:var(--info-700)">${left}</span><span style="opacity:.4">+</span><span style="color:var(--info-700)">${op}</span>
    <span style="color:${balanced?'var(--ok-700)':'var(--warn-700)'}">=</span>
    <span style="color:var(--risk-700)">${right}</span>
  </div>
  ${[[(AR?'العدد الأول':'First number'),left,'eqLeft',20,'--info-700'],
     [(AR?'العدد الثاني':'Second number'),op,'eqOp',20,'--info-700'],
     [(AR?'الناتج':'Result'),right,'eqRight',40,'--risk-700']].map(([label,val,key,max,col])=>`
  <div style="margin-bottom:6px">
    <div class="small muted">${label}: ${val}</div>
    <input type="range" min="0" max="${max}" value="${val}" data-game-slider="${key}" style="width:100%;accent-color:var(${col})">
  </div>`).join('')}
  <div class="calm" style="text-align:center;font-weight:700;background:${balanced?'var(--ok-050)':'var(--warn-050)'};color:${balanced?'var(--ok-700)':'var(--warn-700)'}">
    ${balanced?'⚖️ '+(AR?'متوازن!':'Balanced!'):diff>0?(AR?`الطرف الأيمن أثقل بـ ${diff}`:`Right side is heavier by ${diff}`):(AR?`الطرف الأيسر أثقل بـ ${-diff}`:`Left side is heavier by ${-diff}`)}
  </div>`;
}

function gameFractionViz(){
  const AR=S.settings.lang==='ar';
  const num=gS('fracNum',3), den=gS('fracDen',8);
  let slices='';
  for(let i=0;i<den;i++){
    const sa=(i/den)*360-90, ea=((i+1)/den)*360-90;
    const x1=100+80*Math.cos(sa*Math.PI/180), y1=100+80*Math.sin(sa*Math.PI/180);
    const x2=100+80*Math.cos(ea*Math.PI/180), y2=100+80*Math.sin(ea*Math.PI/180);
    const lg=(ea-sa)>180?1:0;
    slices+=`<path d="M100,100 L${x1.toFixed(1)},${y1.toFixed(1)} A80,80 0 ${lg},1 ${x2.toFixed(1)},${y2.toFixed(1)} Z" fill="${i<num?'var(--info-700)':'var(--line)'}" stroke="var(--paper)" stroke-width="2"/>`;
  }
  let barHtml='';
  for(let i=0;i<den;i++){
    barHtml+=`<div style="flex:1;height:26px;background:${i<num?'var(--info-700)':'var(--line)'}"></div>`;
  }
  return `
  <p class="small muted" style="margin:0 0 12px;line-height:1.6">${AR?'غيّر البسط والمقام وشاهد الكسر بصريًّا.':'Change the numerator and denominator to see the fraction visually.'}</p>
  <div style="text-align:center;margin-bottom:14px">
    <div style="font-size:2.2rem;font-weight:900;color:var(--info-700)">${num}</div>
    <div style="height:3px;background:var(--ink);width:70px;margin:3px auto;border-radius:2px"></div>
    <div style="font-size:2.2rem;font-weight:900;color:var(--risk-700)">${den}</div>
    <div class="small muted" style="margin-top:4px">= ${(num/den*100).toFixed(1)}%</div>
  </div>
  <svg viewBox="0 0 200 200" style="width:100%;max-width:180px;display:block;margin:0 auto 14px">${slices}</svg>
  <div style="display:flex;gap:2px;margin-bottom:14px;border-radius:8px;overflow:hidden">${barHtml}</div>
  <div style="margin-bottom:6px">
    <div class="small muted">${AR?'البسط (numerator)':'Numerator'}: ${num}</div>
    <input type="range" min="0" max="${den}" value="${num}" data-game-slider="fracNum" style="width:100%;accent-color:var(--info-700)">
  </div>
  <div>
    <div class="small muted">${AR?'المقام (denominator)':'Denominator'}: ${den}</div>
    <input type="range" min="1" max="16" value="${den}" data-game-slider="fracDen" style="width:100%;accent-color:var(--risk-700)">
  </div>`;
}

const SUBJECT_GAME_MAP={'Science':'sci','Arabic':'ar','Mathematics':'math'};

/* ── Pac-Man style maze game (Science) ── */
function gamePacman(){
  const AR=S.settings.lang==='ar';
  const COLS=11, ROWS=9;
  // 0=path, 1=wall, 2=dot(collectible), 3=collected
  const defaultMaze=[
    1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,1,2,2,2,2,2,1,
    1,2,1,2,1,2,1,1,2,1,1,
    1,2,1,2,2,2,2,2,2,2,1,
    1,2,2,2,1,1,1,2,1,2,1,
    1,2,1,2,2,2,2,2,1,2,1,
    1,1,1,2,1,2,1,2,2,2,1,
    1,2,2,2,2,2,1,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1,1,
  ];
  if(!S.gameState._pmMaze){
    S.gameState._pmMaze=defaultMaze.slice();
    S.gameState._pmX=1; S.gameState._pmY=1;
    S.gameState._pmScore=0; S.gameState._pmDone=false;
    // place enemies
    S.gameState._pmE=[{x:5,y:3,dx:1,dy:0},{x:9,y:5,dx:0,dy:-1}];
    S.gameState._pmLives=3;
    S.gameState._pmHit=false;
  }
  const maze=S.gameState._pmMaze;
  const px=S.gameState._pmX, py=S.gameState._pmY;
  const score=S.gameState._pmScore;
  const total=defaultMaze.filter(c=>c===2).length;
  const done=S.gameState._pmDone;
  const lives=S.gameState._pmLives;
  const hit=S.gameState._pmHit;
  const enemies=S.gameState._pmE||[];

  const items=['🧬','⚗️','💧','🔋','🧪','🔬'];

  let gridHtml='';
  for(let y=0;y<ROWS;y++){
    for(let x=0;x<COLS;x++){
      const i=y*COLS+x;
      const isPlayer=x===px&&y===py;
      const isEnemy=enemies.some(e=>e.x===x&&e.y===y);
      const cell=maze[i];
      let bg='var(--sand)', content='';
      if(cell===1){ bg='var(--teal-700)'; content=''; }
      else if(isPlayer){ content='🔬'; bg=hit?'var(--risk-050)':'var(--ok-050)'; }
      else if(isEnemy){ content='🦠'; bg='var(--risk-050)'; }
      else if(cell===2){ content=items[i%items.length]; bg='var(--paper)'; }
      else { bg='var(--paper)'; }
      gridHtml+=`<div style="background:${bg};display:flex;align-items:center;justify-content:center;font-size:clamp(.7rem,2.5vw,1.1rem);border-radius:3px;aspect-ratio:1;${isPlayer?'box-shadow:0 0 0 2px var(--ok-700) inset':''}${isEnemy?'box-shadow:0 0 0 2px var(--risk-700) inset':''}">${content}</div>`;
    }
  }

  return `
  <p class="small muted" style="margin:0 0 10px;line-height:1.6">${AR?'حرّك المجهر 🔬 لجمع العيّنات العلمية. تجنّب الجراثيم 🦠!':'Move the microscope 🔬 to collect science samples. Avoid the germs 🦠!'}</p>
  <div style="display:flex;gap:10px;align-items:center;margin-bottom:10px;flex-wrap:wrap">
    <div style="font-weight:700;color:var(--teal-700)">⭐ ${score}/${total}</div>
    <div style="font-weight:700;color:var(--risk-700)">${'❤️'.repeat(lives)}${'🖤'.repeat(3-lives)}</div>
    ${done?`<span class="tag ok" style="font-weight:700">🎉 ${AR?'أحسنت! جمعت كلّ العيّنات!':'Great job! All samples collected!'}</span>`:''}
    ${lives<=0?`<span class="tag risk" style="font-weight:700">💀 ${AR?'انتهت المحاولات!':'Game over!'}</span>`:''}
  </div>
  <div style="display:grid;grid-template-columns:repeat(${COLS},1fr);gap:2px;margin-bottom:14px;max-width:420px">${gridHtml}</div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;margin-bottom:6px">
    <button class="btn sec sm" data-game-pm="up" style="width:52px;font-size:1.1rem" ${done||lives<=0?'disabled':''}>▲</button>
    <div style="display:flex;gap:4px">
      <button class="btn sec sm" data-game-pm="left" style="width:52px;font-size:1.1rem" ${done||lives<=0?'disabled':''}>◀</button>
      <button class="btn sec sm" data-game-pm="down" style="width:52px;font-size:1.1rem" ${done||lives<=0?'disabled':''}>▼</button>
      <button class="btn sec sm" data-game-pm="right" style="width:52px;font-size:1.1rem" ${done||lives<=0?'disabled':''}>▶</button>
    </div>
  </div>
  ${done||lives<=0?`<button class="btn sm" data-game-pm="reset" style="margin-top:6px">🔄 ${AR?'العب مجدّدًا':'Play again'}</button>`:''}
  <p class="small muted" style="margin-top:8px;text-align:center">${AR?'يمكنك أيضًا استخدام أسهم لوحة المفاتيح ⌨️':'You can also use keyboard arrow keys ⌨️'}</p>`;
}

function pacmanAction(dir){
  const COLS=11, ROWS=9;
  const defaultMaze=[
    1,1,1,1,1,1,1,1,1,1,1,
    1,2,2,2,1,2,2,2,2,2,1,
    1,2,1,2,1,2,1,1,2,1,1,
    1,2,1,2,2,2,2,2,2,2,1,
    1,2,2,2,1,1,1,2,1,2,1,
    1,2,1,2,2,2,2,2,1,2,1,
    1,1,1,2,1,2,1,2,2,2,1,
    1,2,2,2,2,2,1,2,2,2,1,
    1,1,1,1,1,1,1,1,1,1,1,
  ];
  if(dir==='reset'){
    S.gameState._pmMaze=defaultMaze.slice();
    S.gameState._pmX=1; S.gameState._pmY=1;
    S.gameState._pmScore=0; S.gameState._pmDone=false;
    S.gameState._pmE=[{x:5,y:3,dx:1,dy:0},{x:9,y:5,dx:0,dy:-1}];
    S.gameState._pmLives=3; S.gameState._pmHit=false;
    render(); return;
  }
  if(S.gameState._pmDone || (S.gameState._pmLives||0)<=0) return;
  const maze=S.gameState._pmMaze;
  if(!maze) return;
  let px=S.gameState._pmX, py=S.gameState._pmY;
  const dx=dir==='left'?-1:dir==='right'?1:0;
  const dy=dir==='up'?-1:dir==='down'?1:0;
  const nx=px+dx, ny=py+dy;
  if(nx<0||nx>=COLS||ny<0||ny>=ROWS) return;
  if(maze[ny*COLS+nx]===1) return; // wall
  S.gameState._pmX=nx; S.gameState._pmY=ny;
  // collect dot
  if(maze[ny*COLS+nx]===2){
    S.gameState._pmMaze[ny*COLS+nx]=3;
    S.gameState._pmScore=(S.gameState._pmScore||0)+1;
  }
  // check win
  if(!S.gameState._pmMaze.includes(2)) S.gameState._pmDone=true;
  // move enemies
  S.gameState._pmHit=false;
  const enemies=S.gameState._pmE||[];
  enemies.forEach(e=>{
    // try to continue in same direction, else random turn
    const dirs=[{dx:1,dy:0},{dx:-1,dy:0},{dx:0,dy:1},{dx:0,dy:-1}];
    const fwd={dx:e.dx,dy:e.dy};
    const valid=dirs.filter(d=>{
      const ex=e.x+d.dx, ey=e.y+d.dy;
      return ex>=0&&ex<COLS&&ey>=0&&ey<ROWS&&maze[ey*COLS+ex]!==1;
    });
    if(valid.length){
      const canFwd=valid.find(d=>d.dx===fwd.dx&&d.dy===fwd.dy);
      const pick=canFwd&&Math.random()<0.6?canFwd:valid[Math.floor(Math.random()*valid.length)];
      e.x+=pick.dx; e.y+=pick.dy; e.dx=pick.dx; e.dy=pick.dy;
    }
    if(e.x===S.gameState._pmX && e.y===S.gameState._pmY){
      S.gameState._pmLives=Math.max(0,(S.gameState._pmLives||3)-1);
      S.gameState._pmHit=true;
      // respawn player
      S.gameState._pmX=1; S.gameState._pmY=1;
    }
  });
  // update just the game content area without full render for speed
  const card=document.querySelector('[data-game-content]');
  if(card) card.innerHTML=gamePacman();
  else render();
}
// Keyboard arrow keys for Pac-Man
document.addEventListener('keydown',(e)=>{
  if(!S.gameState._pmMaze) return;
  const map={ArrowUp:'up',ArrowDown:'down',ArrowLeft:'left',ArrowRight:'right'};
  if(map[e.key]){ e.preventDefault(); pacmanAction(map[e.key]); }
});

function studentGames(){
  const AR=S.settings.lang==='ar';
  // If a subject context is set, show only that subject's games
  const subjectCtx=S.gameCat? Object.keys(SUBJECT_GAME_MAP).find(k=>SUBJECT_GAME_MAP[k]===S.gameCat) : null;
  const subjectsWithGames=Object.keys(SUBJECT_GAME_MAP);

  if(subjectCtx){
    const catId=SUBJECT_GAME_MAP[subjectCtx];
    const curCat=GAME_CATS.find(c=>c.id===catId);
    const tab=S.gameTab||(curCat?curCat.tabs[0]:'ph');
    const curTab=GAME_TABS.find(t=>t.id===tab)||GAME_TABS[0];
    const gameContent={ph:gamePhMeter, eco:gameEcoBalance, wave:gameWaveLab, roots:gameWordRoots, irab:gameIrabTrainer, eq:gameEquationBalance, frac:gameFractionViz, pacman:gamePacman};
    const gameFn=gameContent[tab];
    const subjLabel=AR?SUBJECTS_AR[subjectCtx]:subjectCtx;
    return `
    <div class="page-head"><div>
      <p class="eyebrow">🧪 ${AR?'التعلم التفاعلي':'Interactive Learning'}</p>
      <h1>${AR?'تعلّم بالتجربة':'Learn by doing'}</h1>
    </div></div>
    <div class="calm mb"><span class="em" aria-hidden="true">🌟</span><span>${AR?'أنشطة تفاعلية تساعدك على فهم المفاهيم — جرّب بحرية، لا درجات هنا!':'Interactive activities to help you understand concepts — explore freely, no grades here!'}</span></div>

    <h2 style="margin-bottom:.4rem"><span aria-hidden="true">${SUBJECT_ICON[subjectCtx]||'📘'}</span> ${subjLabel}</h2>
    <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1rem">
      ${curCat.tabs.map(tId=>{
        const t=GAME_TABS.find(x=>x.id===tId);
        return '<button class="btn sm '+(tab===tId?'':'sec')+'" data-game-tab="'+tId+'">'+t.icon+' '+(AR?t.label_ar:t.label_en)+'</button>';
      }).join('')}
    </div>

    <div class="card" style="border-inline-start:5px solid var(--teal-700)">
      <h3 style="margin:0 0 .5rem;color:var(--teal-700)">${curTab.icon} ${AR?curTab.label_ar:curTab.label_en}</h3>
      <div data-game-content>${gameFn?gameFn():''}</div>
    </div>

    <h3 class="mt2">${AR?'مواد أخرى':'Other subjects'}</h3>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      ${subjectsWithGames.filter(s=>s!==subjectCtx).map(s=>`<button class="btn sec" data-game-cat="${SUBJECT_GAME_MAP[s]}"><span aria-hidden="true">${SUBJECT_ICON[s]||'📘'}</span> ${AR?SUBJECTS_AR[s]:s}</button>`).join('')}
    </div>`;
  }

  // Landing — no subject selected, show subject picker
  return `
  <div class="page-head"><div>
    <p class="eyebrow">🧪 ${AR?'التعلم التفاعلي':'Interactive Learning'}</p>
    <h1>${AR?'تعلّم بالتجربة':'Learn by doing'}</h1>
  </div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">🌟</span><span>${AR?'أنشطة تفاعلية تساعدك على فهم المفاهيم — جرّب بحرية، لا درجات هنا!':'Interactive activities to help you understand concepts — explore freely, no grades here!'}</span></div>

  <h2>${AR?'اختر مادة':'Pick a subject'}</h2>
  <div class="bigtiles">
    ${subjectsWithGames.map(su=>{
      const catId=SUBJECT_GAME_MAP[su];
      const cat=GAME_CATS.find(c=>c.id===catId);
      const count=cat?cat.tabs.length:0;
      return '<button type="button" class="bigtile" data-game-cat="'+catId+'">'
        +'<span class="em" aria-hidden="true">'+(SUBJECT_ICON[su]||'📘')+'</span>'
        +'<span class="word">'+(AR?SUBJECTS_AR[su]:su)+'</span>'
        +'<span class="sub">'+count+' '+(AR?'أنشطة':'activities')+'</span>'
        +'</button>';
    }).join('')}
  </div>`;
}
function currentUnitFor(su){
  if(S.currentUnit[su]) return S.currentUnit[su];
  const c=CONTENT.find(x=>x.subject===su && x.current) || CONTENT.find(x=>x.subject===su);
  return c?c.id:null;
}
// illustrative download size in MB — kept small by design (low-data, sub-10MB chunks)
function lessonSize(c){ return Math.max(2, Math.round((c.mins||5)*0.4)) + (quizFor(c.id)?1:0); }
function lessonCover(c){
  const h=hashStr(c.subject)%360;
  const g1=`hsl(${h} 46% 95%)`, g2=`hsl(${h} 50% 87%)`, ac=`hsl(${h} 48% 42%)`;
  return `<div class="lesson-cover" style="background:linear-gradient(135deg,${g1},${g2});border-bottom:3px solid ${ac}">
    <span class="cover-emoji" aria-hidden="true">${c.img}</span>
    <span class="cover-motif" aria-hidden="true">${c.img}</span>
  </div>`;
}
function lessonCard(c){
  const done=S.doneContent.includes(c.id);
  const saved=S.savedContent.includes(c.id);
  const isCur=c.id===currentUnitFor(c.subject);
  const hasQuiz = isCur && quizFor(c.id);        // quiz is offered only on the current week's unit
  const doneQuiz = !!S.doneQuiz[c.id];
  const AR=S.settings.lang==='ar';
  return `<div class="card lesson-card" style="${done?'border-color:var(--ok-700)':isCur?'border-color:var(--info-700);box-shadow:0 0 0 2px var(--info-700) inset':''}">
    ${lessonCover(c)}
    <div class="lesson-body">
      <p class="eyebrow" style="margin:0">${AR?'الوحدة':'Unit'} ${c.unit||''} · ${c.mins} ${AR?'د':'min'} ${isCur?`<span class="tag info">${t('thisWeek')}</span>`:''} ${done?`<span class="tag ok">${t('doneTag')}</span>`:''} ${saved?`<span class="tag ok">✓ ${TR('Available offline','متاح دون إنترنت')}</span>`:''}</p>
      <h3>${esc(L(c,'title'))}</h3>
      <div style="display:flex;flex-wrap:wrap;gap:.5rem;margin-top:.9rem;align-items:center">
        <button class="btn" data-open-content="${c.id}"><span aria-hidden="true">📖</span> ${done?t('openAgain'):t('openLesson')}</button>
        ${hasQuiz?(doneQuiz?`<button class="btn sec" disabled style="opacity:.6"><span aria-hidden="true">✓</span> ${TR('Completed','تمّ الإكمال')}</button>`:`<button class="btn sec" data-start-exam="${c.id}"><span aria-hidden="true">📝</span> ${TR('Take quiz','ابدأ الاختبار')}</button>`):''}
        <button class="btn ghost sm" data-download="${c.id}">${saved?t('savedBtn'):'⬇️ '+t('saveBtn')}</button>
      </div>
    </div>
  </div>`;
}
function savedCard(c){
  const q=quizFor(c.id);
  const isCur=c.id===currentUnitFor(c.subject);
  const doneOff=!!S.doneQuiz[c.id];
  return `<div class="card" style="padding:1rem">
    <p class="eyebrow" style="margin:0">${S.settings.lang==='ar'?'الوحدة':'Unit'} ${c.unit||''} · ${c.mins} ${S.settings.lang==='ar'?'د':'min'} · ${lessonSize(c)} MB</p>
    <h3 style="margin:.2rem 0 .4rem">${esc(L(c,'title'))}</h3>
    <p class="small muted" style="margin:.2rem 0 .7rem"><span aria-hidden="true">⬇️</span> ${q?TR('Lesson and quiz saved — both work without internet.','الدرس والاختبار محفوظان — يعملان دون إنترنت.'):TR('Saved — works without internet.','محفوظ — يعمل دون إنترنت.')}</p>
    <div class="pill-row">
      <button class="btn" data-open-content="${c.id}"><span aria-hidden="true">📖</span> ${t('openLesson')}</button>
      ${q?(isCur
        ? (doneOff?`<button class="btn sec" disabled style="opacity:.6"><span aria-hidden="true">✓</span> ${TR('Completed','تمّ الإكمال')}</button>`:`<button class="btn sec" data-start-exam="${c.id}"><span aria-hidden="true">📝</span> ${t('startQuiz')}</button>`)
        : `<button class="btn sec" data-practice-exam="${c.id}">▶ ${TR('Practice quiz','تدرّب على الاختبار')}</button>`)
      :''}
      <button class="btn ghost sm" data-download="${c.id}">${TR('Remove','إزالة')}</button>
    </div>
    ${q&&!isCur?`<p class="hint" style="margin:.5rem 0 0">${TR("Graded attempts open in the Quiz tab during your class's week. Offline, you can still practise this quiz.",'المحاولات المُقيَّمة تُفتح في تبويب الاختبار خلال أسبوع صفّك. ودون اتصال يمكنك التدرّب على هذا الاختبار.')}</p>`:''}
  </div>`;
}
function studentSubject(){
  const su=S.subjectOpen||SUBJECTS[0];
  const subjLabel=S.settings.lang==='ar'?SUBJECTS_AR[su]:su;
  const items=CONTENT.filter(c=>c.subject===su);
  const saved=items.filter(c=>S.savedContent.includes(c.id));
  const hasQuiz = items.some(c=>quizFor(c.id));
  let tab=S.subjectTab||'lessons'; if(tab==='quiz') tab='lessons'; // Quiz is now taken from the current-week unit card
  const tabBtn=(id,label,icon)=>`<button type="button" role="tab" aria-selected="${tab===id}" data-subject-tab="${id}" class="seg-tab ${tab===id?'on':''}"><span aria-hidden="true">${icon}</span> ${label}</button>`;
  let body='';
  if(tab==='lessons'){
    const curId=currentUnitFor(su);
    const cur=CONTENT.find(c=>c.id===curId);
    const ordered=[...items].sort((a,b)=> (b.id===curId?1:0) - (a.id===curId?1:0)); // current week first
    body=`${cur?`<div class="calm mb"><span class="em" aria-hidden="true">📍</span>
      <span>${TR("Your class is on","صفّك على")} <strong>${esc(L(cur,'title'))}</strong> ${TR("this week — it's first below. You can open any lesson any time; nothing is locked.","هذا الأسبوع — وهو الأوّل أدناه. يمكنك فتح أيّ درس في أيّ وقت؛ لا شيء مقفل.")}</span></div>`:''}
      <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.3rem">${ordered.map(lessonCard).join('')}</div>`;
  } else if(tab==='quiz'){
    const curId=currentUnitFor(su);
    const unitsOrdered=[...items].sort((a,b)=>(a.unit||0)-(b.unit||0));
    const curNum=(CONTENT.find(c=>c.id===curId)||{}).unit||0;
    const q=quizFor(curId);
    const doneOff = !!S.doneQuiz[curId];
    // open assessment for THIS WEEK shows first, with an official run and a no-stakes practice
    const openCard = q
      ? `<div class="card" style="border-color:var(--info-700);max-width:560px">
          <p class="eyebrow" style="margin:0"><span class="tag info">${TR("This week's quiz",'اختبار هذا الأسبوع')}</span> ${doneOff?'<span class="tag ok">✓ '+TR('Done','تمّ')+'</span>':''}</p>
          <h3 style="margin:.3rem 0 .5rem"><span aria-hidden="true">📝</span> ${esc(L(q,'title'))}</h3>
          <p class="small muted" style="margin:.2rem 0 .6rem">${q.questions.length} ${TR("questions on this week's unit. Take your time — answers save by themselves, and you can come back if your internet drops.",'أسئلة على وحدة هذا الأسبوع. خذ وقتك — تُحفظ الإجابات تلقائيًّا، ويمكنك العودة إن انقطع الإنترنت.')}</p>
          <div class="pill-row">
            ${doneOff?`<button class="btn" disabled style="opacity:.6">✓ ${TR('Completed','تمّ الإكمال')}</button>`:`<button class="btn" data-start-exam="${curId}">${t('startQuiz')}</button>`}
            <button class="btn sec" data-practice-exam="${curId}">▶ ${t('practiceRun')}</button>
          </div>
          <p class="hint" style="margin:.5rem 0 0">${TR('New to online quizzes? Try a','جديد على الاختبارات الإلكترونية؟ جرّب')} <strong>${TR('practice run','تدريبًا')}</strong> ${TR("first to see how it works — it isn't recorded.",'أولًا لترى كيف يعمل — ولا يُسجَّل.')}</p>
        </div>`
      : `<div class="calm" style="max-width:560px"><span class="em" aria-hidden="true">🙂</span>
          <span>${TR("No quiz is open for this week's unit yet. Keep working through the lessons — your teacher will open it when the class is ready.",'لا يوجد اختبار مفتوح لوحدة هذا الأسبوع بعد. واصِل التقدّم في الدروس — سيفتحه معلّمك عندما يكون الصفّ جاهزًا.')}</span></div>`;
    const others=unitsOrdered.filter(c=>c.id!==curId).map(c=>{
      const past=(c.unit||0)<curNum;
      return `<div class="card" style="opacity:.7;max-width:560px">
        <p class="eyebrow" style="margin:0">${S.settings.lang==='ar'?'الوحدة':'Unit'} ${c.unit} · ${esc(L(c,'title'))}</p>
        <p class="small" style="margin:.2rem 0 0"><span class="tag">🔒 ${past?TR('Closed — your class has moved on','مغلق — تجاوزه صفّك'):TR('Opens when your class reaches this unit','يُفتح عندما يصل صفّك إلى هذه الوحدة')}</span></p>
      </div>`;}).join('');
    body=`${openCard}
      ${others?`<h3 class="mt2">${TR('Other unit quizzes','اختبارات الوحدات الأخرى')}</h3>
        <p class="small muted">${TR("Only this week's quiz is open. The others open or close with your class so you always do the right one.",'اختبار هذا الأسبوع فقط هو المفتوح. وتُفتح الأخرى أو تُغلق مع صفّك لتؤدّي دائمًا الاختبار الصحيح.')}</p>
        <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:1.3rem">${others}</div>`:''}`;
  } else if(tab==='interactive'){
    const catId=SUBJECT_GAME_MAP[su];
    const curCat=catId?GAME_CATS.find(c=>c.id===catId):null;
    if(curCat){
      const gTab=S.gameTab||(curCat?curCat.tabs[0]:'ph');
      const curTab=GAME_TABS.find(tt=>tt.id===gTab)||GAME_TABS[0];
      const gameContent={ph:gamePhMeter, eco:gameEcoBalance, wave:gameWaveLab, roots:gameWordRoots, irab:gameIrabTrainer, eq:gameEquationBalance, frac:gameFractionViz, pacman:gamePacman};
      const gameFn=gameContent[gTab];
      body=`<div class="calm mb"><span class="em" aria-hidden="true">🌟</span><span>${TR('Interactive activities to help you understand concepts — explore freely, no grades here!','أنشطة تفاعلية تساعدك على فهم المفاهيم — جرّب بحرية، لا درجات هنا!')}</span></div>
      <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:1rem">
        ${curCat.tabs.map(tId=>{
          const tt=GAME_TABS.find(x=>x.id===tId);
          return '<button class="btn sm '+(gTab===tId?'':'sec')+'" data-game-tab="'+tId+'">'+tt.icon+' '+(S.settings.lang==='ar'?tt.label_ar:tt.label_en)+'</button>';
        }).join('')}
      </div>
      <div class="card" style="border-inline-start:5px solid var(--teal-700)">
        <h3 style="margin:0 0 .5rem;color:var(--teal-700)">${curTab.icon} ${S.settings.lang==='ar'?curTab.label_ar:curTab.label_en}</h3>
        <div data-game-content>${gameFn?gameFn():''}</div>
      </div>`;
    } else {
      body=`<div class="calm"><span class="em" aria-hidden="true">🚧</span><span>${TR('Interactive activities for this subject are coming soon!','الأنشطة التفاعلية لهذه المادة قادمة قريبًا!')}</span></div>`;
    }
  } else {
    const allSaved=CONTENT.filter(c=>S.savedContent.includes(c.id));
    const usedMB=allSaved.reduce((a,c)=>a+lessonSize(c),0);
    const tight=usedMB>=300;
    const meter = allSaved.length? `
      <div class="card" style="border-inline-start:6px solid var(--teal-700)">
        <div class="flex between center wrapw" style="gap:.5rem">
          <strong>${TR('Storage on this phone','المساحة على هذا الهاتف')}</strong>
          ${tight?`<span class="tag risk">⚠ ${TR('Filling up','تمتلئ')}</span>`:`<span class="tag ok">${TR('Plenty of space','مساحة كافية')}</span>`}
        </div>
        <div style="height:12px;border-radius:99px;background:var(--line);overflow:hidden;margin:.5rem 0" role="img" aria-label="${TR('Saved lessons use about','تستخدم الدروس المحفوظة نحو')} ${usedMB} MB">
          <div style="height:100%;width:${Math.min(100,Math.round(usedMB/500*100))}%;background:var(--teal-700)"></div>
        </div>
        <p class="small muted" style="margin:0">${TR(`Saved lessons use about ${usedMB} MB · roughly 480 MB free (example)`,`تستخدم الدروس المحفوظة نحو ${usedMB} ميجابايت · نحو 480 ميجابايت متاحة (مثال)`)}</p>
        <p class="small muted" style="margin:.3rem 0 .6rem">${TR('Lessons save in a light, low-data form to protect your storage and data.','تُحفظ الدروس بصيغة خفيفة قليلة البيانات لحماية مساحتك وبياناتك.')}</p>
        <button class="btn sec sm" data-clear-saved>${TR(`Remove all saved (free ${usedMB} MB)`,`إزالة كلّ المحفوظ (تحرير ${usedMB} ميجابايت)`)}</button>
      </div>`:'';
    body= saved.length
      ? `${meter}<p class="small muted" style="margin-top:.8rem">${TR('Saved for offline — lessons and their quizzes work without internet. Remove any you’ve finished to free space.','محفوظ للعمل دون اتصال — الدروس واختباراتها تعمل دون إنترنت. أزِل ما أنهيته لتحرير مساحة.')}</p>
         <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr))">${saved.map(savedCard).join('')}</div>`
      : `${meter}<div class="calm" style="margin-top:${allSaved.length?'.8rem':'0'}"><span class="em" aria-hidden="true">⬇️</span> <span>${allSaved.length?TR('Nothing saved in '+subjLabel+' yet — but you have saved lessons in other subjects above.','لا شيء محفوظ في '+subjLabel+' بعد — لكن لديك دروس محفوظة في مواد أخرى أعلاه.'):TR('Nothing saved yet. Tap <strong>Save</strong> on any lesson to use it — and its quiz — without internet.','لا شيء محفوظ بعد. اضغط <strong>حفظ</strong> على أيّ درس لاستخدامه — واختباره — دون إنترنت.')}</span></div>`;
  }
  return `
  <div class="page-head"><div>
    <p class="eyebrow"><span aria-hidden="true">${SUBJECT_ICON[su]||'📘'}</span> ${subjLabel}</p>
    <h1>${subjLabel}</h1>
  </div></div>
  <div class="seg-tabs" role="tablist" aria-label="${subjLabel} sections">
    ${tabBtn('lessons',t('lessons'),'📚')}
    ${SUBJECT_GAME_MAP[su]?tabBtn('interactive',TR('Interactive','تفاعلي'),'🧪'):''}
    ${tabBtn('saved',t('savedTab'),'⬇️')}
  </div>
  <div class="mt">${body}</div>`;
}
const UNIT_PDF={
  sc1:{ en:'pdfs/science-u1-ar.pdf', ar:'pdfs/science-u1-ar.pdf' /* EN textbook not yet supplied — falls back to AR */, title:{en:'Unit 1: The Aquatic Ecosystem', ar:'الوحدة الأولى: النظام البيئى المائى'} },
  sc2:{ en:'pdfs/science-u2-ar.pdf', ar:'pdfs/science-u2-ar.pdf', title:{en:'Unit 2: Physical Properties of Water', ar:'الوحدة الثانية: الخواص الفيزيائية للماء'} },
};
function contentReader(){
  const c=CONTENT.find(x=>x.id===S.contentOpen)||CONTENT[0];
  const lb=lessonBody(c);
  const paras=lb.normal.map(p=>`<p>${esc(p)}</p>`).join('');
  const illus=ILLUS[SUBJECT_ILLUS[c.subject]]||'';
  const isCurrentOpen = c.id===currentUnitFor(c.subject) && quizFor(c.id);
  const saved=S.savedContent.includes(c.id);
  const sib=CONTENT.filter(x=>x.subject===c.subject).sort((a,b)=>(a.unit||0)-(b.unit||0));
  const idx=sib.findIndex(x=>x.id===c.id); const prevL=sib[idx-1], nextL=sib[idx+1];
  const AR=S.settings.lang==='ar';
  const gl=glossaryFor(c);
  const vids=relatedVideos(c);
  const up=UNIT_PDF[c.id];
  if(up){
    const src=AR?up.ar:up.en; const ttl=AR?up.title.ar:up.title.en;
    return `
  <div class="flex between center wrapw" style="gap:.5rem;margin-bottom:.6rem">
    <button class="btn ghost sm" data-view="subject" data-close-content="1">${aBack()} ${AR?'رجوع':'Back'}</button>
    <button class="btn ghost sm" data-view="home" data-close-content="1">🏠 ${t('home')}</button>
  </div>
  <div class="page-head"><div><p class="eyebrow">${AR?SUBJECTS_AR[c.subject]:c.subject} · ${AR?'الوحدة':'Unit'} ${c.unit||''}</p><h1>${esc(ttl)}</h1></div></div>
  ${(()=>{
    // Default to lite (HTML) for Science — better for low bandwidth, mobile, accessibility. PDF is secondary.
    const mode = S.interactiveOpen===c.id ? 'interactive' : S.liteOpen===c.id ? 'lite' : (c.subject==='Science' && S.liteOpen!==c.id && S.pdfOpen!==c.id) ? 'lite' : 'pdf';
    const hasSci = c.subject==='Science';
    const modeDesc = mode==='pdf' ? (AR?'تصفّح كتاب هذه الوحدة كاملًا بالأسفل.':'Browse the full unit textbook below.') :
                     mode==='lite' ? (AR?'النسخة الخفيفة — نفس المحتوى الكامل بدون ملفات ثقيلة.':'Lightweight mode — full content, no heavy files.') :
                     (AR?'النسخة التفاعلية — تعلّم خطوة بخطوة مع أنشطة.':'Interactive mode — learn step by step with activities.');
    const modeIcon = mode==='pdf' ? '📘' : mode==='lite' ? '📄' : '🧪';
    return `
    <div style="margin-bottom:.6rem">
      <div style="margin-bottom:.5rem">
        <strong style="font-size:1.05rem"><span aria-hidden="true">${modeIcon}</span> ${esc(ttl)}</strong>
        <p class="small muted" style="margin:.2rem 0 0">${modeDesc}</p>
      </div>
      <div class="seg-tabs" role="tablist" aria-label="${AR?'طريقة العرض':'View mode'}">
        <button type="button" role="tab" class="seg-tab${mode==='pdf'?' on':''}" data-content-view="pdf" aria-selected="${mode==='pdf'}"><span aria-hidden="true">📘</span> PDF</button>
        ${hasSci?`<button type="button" role="tab" class="seg-tab${mode==='lite'?' on':''}" data-content-view="lite" aria-selected="${mode==='lite'}"><span aria-hidden="true">📶</span> ${AR?'نسخة خفيفة':'Lite'}</button>`:''}
        ${hasSci?`<button type="button" role="tab" class="seg-tab${mode==='interactive'?' on':''}" data-content-view="interactive" aria-selected="${mode==='interactive'}"><span aria-hidden="true">🧪</span> ${AR?'تفاعلي':'Interactive'}</button>`:''}
      </div>
    </div>
    ${mode==='interactive'?interactiveReader(c,AR):mode==='lite'?liteReader(c,AR):`<a href="#after-pdf-${c.id}" class="skip-pdf">${TR('Skip past the textbook','تخطّي إلى ما بعد الكتاب')}</a><iframe src="${src}#view=FitH" title="${esc(ttl)}" loading="lazy" style="width:100%;height:80vh;border:1px solid var(--line);border-radius:10px;background:#fff"></iframe>
      <span id="after-pdf-${c.id}"></span>
    <p class="tiny muted" style="margin:.4rem 0 0">${AR?'المصدر: كتاب العلوم المتكاملة — الصف الأول الثانوي، الفصل الدراسي الأول.':'Source: Integrated Science — Secondary 1, Term 1.'}</p>`}`;
  })()}
  </div>
  ${vids.length?`<section aria-label="${AR?'فيديوهات ذات صلة':'Related videos'}" class="card"><h2 style="font-size:1.05rem;margin:0 0 .2rem">▶ ${AR?'فيديوهات ذات صلة':'Related videos'} <span class="muted" style="font-weight:400;font-size:.95rem">— ${AR?'اختياري':'optional'}</span></h2>
    ${vids.map((v,i)=>`<button type="button" data-open-video="${c.id}:${i}" style="display:flex;gap:.6rem;align-items:center;text-align:start;width:100%;color:inherit;border:1px solid var(--line);border-radius:10px;padding:.55rem .7rem;margin:.4rem 0;background:#fff;cursor:pointer;font:inherit">
      <span aria-hidden="true" style="flex:0 0 auto;width:42px;height:42px;border-radius:8px;background:var(--teal-050);color:var(--teal-900);display:flex;align-items:center;justify-content:center;font-size:1.1rem">▶</span>
      <span style="flex:1;min-width:0"><strong>${esc(v.title)}</strong><br><span class="small muted">${esc(v.name)} · ${esc(v.tag)} · ${v.dur}</span></span>
      <span aria-hidden="true" class="muted" style="flex:0 0 auto">▶ ${AR?'تشغيل':'Play'}</span></button>`).join('')}</section>`:''}
  <nav class="flex between center wrapw" style="gap:.6rem;margin-top:1rem" aria-label="${AR?'تنقّل بين الوحدات':'Unit navigation'}">
    ${prevL?`<button class="btn sec" data-open-content="${prevL.id}">${aBack()} ${AR?'الوحدة السابقة':'Previous unit'}<br><span class="small" style="font-weight:400">${esc(L(prevL,'title'))}</span></button>`:'<span></span>'}
    ${nextL?`<button class="btn" data-open-content="${nextL.id}">${AR?'الوحدة التالية':'Next unit'} ${aFwd()}<br><span class="small" style="font-weight:400">${esc(L(nextL,'title'))}</span></button>`:'<span></span>'}
  </nav>`;
  }
  return `
  <div class="flex between center wrapw" style="gap:.5rem;margin-bottom:.6rem">
    <button class="btn ghost sm" data-view="subject" data-close-content="1">${aBack()} ${AR?'رجوع':'Back'}</button>
    <button class="btn ghost sm" data-view="home" data-close-content="1">🏠 ${t('home')}</button>
  </div>
  <div class="page-head"><div><p class="eyebrow">${AR?SUBJECTS_AR[c.subject]:c.subject} · ${AR?'الوحدة':'Unit'} ${c.unit||''} · ${c.mins} ${AR?'د':'min'}</p><h1>${esc(L(c,'title'))}</h1>
    <div class="pill-row" aria-label="${AR?'ميزات الوصول لهذا الدرس':'Accessibility features for this lesson'}"><span class="small muted" style="font-weight:700;align-self:center">${AR?'يدعم:':'Supports:'}</span> ${fmtBadges(['read-aloud','image-descriptions','offline'])} <span class="tag" title="${AR?'لا يحتاج فيديو':'No video required'}"><span aria-hidden="true">🎬🚫</span> ${AR?'لا يحتاج فيديو':'No video needed'}</span></div></div></div>
  <div class="card" style="border-inline-start:6px solid var(--teal-700)">
    <div class="flex between center wrapw" style="gap:.6rem">
      <div style="min-width:0">
        <p class="eyebrow" style="margin:0">${AR?'مادّة الوحدة':'Unit material'}</p>
        <strong style="font-size:1.05rem"><span aria-hidden="true">📄</span> ${AR?'درس الوحدة (PDF)':'Unit lesson (PDF)'}</strong>
        <p class="small muted" style="margin:.2rem 0 0">${AR?'الملفّ الرسمي لهذه الوحدة — للقراءة أو الطباعة أو الحفظ بصيغة PDF.':'The official file for this unit — read, print, or save as PDF.'}</p>
      </div>
      <button class="btn" data-open-pdf="${c.id}" style="flex:0 0 auto"><span aria-hidden="true">📄</span> ${AR?'فتح الـPDF':'Open PDF'}</button>
    </div>
  </div>
  <div class="card">
    <div class="pill-row mb" role="group" aria-label="${AR?'أدوات الدرس':'Lesson tools'}">
      <button class="iconbtn" data-toggle="readAloud" aria-pressed="${S.settings.readAloud}" style="width:auto;padding:0 .8rem">🔊 ${t('readaloud')}</button>
      <button class="iconbtn" data-save-spine="${c.id}" aria-pressed="${S.saveLevel[c.id]?'true':'false'}" style="width:auto;padding:0 .8rem">🗂️ ${S.saveLevel[c.id]?(AR?'✓ المخطّط محفوظ':'✓ Outline saved'):(AR?'حفظ المخطّط':'Save outline')}</button>
      <button class="iconbtn" data-save-full="${c.id}" aria-pressed="${S.saveLevel[c.id]==='full'?'true':'false'}" style="width:auto;padding:0 .8rem">📥 ${S.saveLevel[c.id]==='full'?(AR?'✓ الدرس كاملًا محفوظ':'✓ Full lesson saved'):(AR?'حفظ الدرس كاملًا':'Save full lesson')}</button>
    </div>
    <p class="tiny muted" style="margin:-.2rem 0 .6rem">${AR?'«المخطّط» صغير جدًّا — يتيح تصفّح الدرس دون اتصال. و«الدرس كاملًا» يضمّ الصور والفيديو للاستخدام في أماكن دون أيّ شبكة (مساحة أكبر).':'“Outline” is tiny — browse the lesson offline. “Full lesson” adds images and video for zero-connection use (larger download).'}</p>
    <figure style="margin:0 0 .4rem">
      <div style="max-width:420px;margin:0 auto">${illus}</div>
      <figcaption style="max-width:560px;margin:.4rem auto 0">
        <details><summary style="cursor:pointer;font-weight:700">🖼️ ${AR?'وصف الصورة':'Image description'}</summary>
          <p class="small" style="margin:.3rem 0 0">${esc(illusDesc(c))} ${speakBtn(illusDesc(c), AR?'استمع إلى الوصف':'Listen to the description')}</p>
        </details>
      </figcaption>
    </figure>
    <div class="reader">${paras} ${speakBtn(lb.normal.join(' '),'🔊 '+(AR?'استمع إلى الدرس':'Listen to this lesson'))}</div>
    ${gl.length?`<section aria-label="${AR?'مفردات الدرس':'Key words'}" style="border-top:1px solid var(--line);margin-top:1rem;padding-top:.6rem">
      <h2 style="font-size:1.05rem;margin:0 0 .3rem">${AR?'مفردات':'Key words'}</h2>
      <dl style="margin:0">${gl.map(([term,def])=>`<div style="margin:0 0 .4rem"><dt style="font-weight:800;display:inline">${esc(term)}</dt> <dd style="display:inline;margin:0">— ${esc(def)}</dd></div>`).join('')}</dl>
      ${speakBtn(gl.map(g=>g[0]+': '+g[1]).join('. '), AR?'استمع إلى المفردات':'Listen to the key words')}
    </section>`:''}
    <div class="calm mt"><span class="em" aria-hidden="true">📄</span><span>${AR?'يعمل هذا الدرس بالكامل كنصّ وتمارين — دون فيديو أو إنترنت. والفيديوهات أدناه إثراء اختياريّ من منصّات مصريّة قائمة.':'This lesson works fully as text and exercises — no video or internet needed. The videos below are optional enrichment from existing Egyptian platforms.'}</span></div>
    ${vids.length?`<section aria-label="${AR?'فيديوهات ذات صلة':'Related videos'}" style="border-top:1px solid var(--line);margin-top:1rem;padding-top:.6rem">
      <h2 style="font-size:1.05rem;margin:0 0 .2rem">▶ ${AR?'فيديوهات ذات صلة':'Related videos'} <span class="muted" style="font-weight:400;font-size:.95rem">— ${AR?'اختياري':'optional'}</span></h2>
      <p class="small muted" style="margin:0 0 .5rem">${AR?'إثراء اختياريّ من منصّات مصريّة — الدرس مكتمل بدونها. ويُشغَّل كلّ فيديو داخل المنصّة، ومعظمها بتعليقات عربية.':'Optional enrichment sourced from Egyptian platforms — the lesson is complete without them. Each plays inside the platform, most with Arabic captions.'}</p>
      ${vids.map((v,i)=>`<button type="button" data-open-video="${c.id}:${i}" style="display:flex;gap:.6rem;align-items:center;text-align:start;width:100%;color:inherit;border:1px solid var(--line);border-radius:10px;padding:.55rem .7rem;margin:.4rem 0;background:#fff;cursor:pointer;font:inherit">
        <span aria-hidden="true" style="flex:0 0 auto;width:42px;height:42px;border-radius:8px;background:var(--teal-050);color:var(--teal-900);display:flex;align-items:center;justify-content:center;font-size:1.1rem">▶</span>
        <span style="flex:1;min-width:0"><strong>${esc(v.title)}</strong><br><span class="small muted">${esc(v.name)} · ${esc(v.tag)} · ${v.dur} · 🆑 ${AR?'عربي':'AR captions'}</span></span>
        <span aria-hidden="true" class="muted" style="flex:0 0 auto">▶ ${AR?'تشغيل':'Play'}</span>
      </button>`).join('')}
      <p class="tiny muted" style="margin:.3rem 0 0">${AR?'تُشغَّل الفيديوهات داخل المنصّة (مضمَّنة ومخزَّنة للعمل دون اتصال) — لا يغادر الطالب منصّتنا. وفي الإنتاج تكون كلّ نسخة هي الفيديو المرخّص المنسَّق لهذا الدرس.':'Videos play inside the platform (embedded and cached for offline) — students never leave Manassa. In production each is the licensed clip curated for this lesson.'}</p>
    </section>`:''}
    ${isCurrentOpen?`<hr class="divider"><button class="btn" data-start-exam="${c.id}">${AR?'انتهيت — ابدأ اختبار الوحدة':"I've finished — take this unit's quiz"}</button>`:''}
  </div>
  <nav class="flex between center wrapw" style="gap:.6rem;margin-top:1rem" aria-label="${AR?'تنقّل بين الدروس':'Lesson navigation'}">
    ${prevL?`<button class="btn sec" data-open-content="${prevL.id}">${aBack()} ${AR?'الدرس السابق':'Previous lesson'}<br><span class="small" style="font-weight:400">${esc(L(prevL,'title'))}</span></button>`:'<span></span>'}
    ${nextL?`<button class="btn" data-open-content="${nextL.id}">${AR?'الدرس التالي':'Next lesson'} ${aFwd()}<br><span class="small" style="font-weight:400">${esc(L(nextL,'title'))}</span></button>`:'<span></span>'}
  </nav>`;
}

/* ----- open a printable per-unit PDF document (RTL-aware; user can save as PDF) ----- */
function openUnitPdf(id){
  const c=CONTENT.find(x=>x.id===id)||CONTENT[0];
  const AR=S.settings.lang==='ar';
  const lb=lessonBody(c);
  const body=lb.normal.map(p=>`<p>${esc(p)}</p>`).join('');
  const gl=glossaryFor(c);
  const glHtml=gl.length?`<h2>${AR?'مفردات':'Key words'}</h2><dl>${gl.map(g=>`<dt>${esc(g[0])}</dt><dd>${esc(g[1])}</dd>`).join('')}</dl>`:'';
  const dir=AR?'rtl':'ltr';
  const title=esc(L(c,'title'));
  const head=`${AR?SUBJECTS_AR[c.subject]:c.subject} · ${AR?'الوحدة':'Unit'} ${c.unit||''}`;
  const printLbl=AR?'طباعة / حفظ بصيغة PDF':'Print / Save as PDF';
  const foot=AR?'منصّة — منصّة التعلّم الوطنية الميسّرة':'Manassa — National Accessible Learning Platform';
  const html=`<!doctype html><html lang="${S.settings.lang}" dir="${dir}"><head><meta charset="utf-8">
<meta name="version" content="v14-459762"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} [v14]</title>
  <style>body{font-family:system-ui,'Segoe UI',Tahoma,Arial,sans-serif;max-width:720px;margin:0 auto;padding:32px 24px;color:#1a1a17;line-height:1.7}
  h1{color:#0B3D3D;margin:0 0 .2em;font-size:1.7rem}.eyebrow{color:#13726f;font-weight:700;letter-spacing:.05em;text-transform:uppercase;font-size:.78rem;margin:0}
  h2{color:#0B3D3D;border-top:1px solid #ddd;padding-top:.6em;margin-top:1.6em;font-size:1.15rem}dt{font-weight:800;margin-top:.4em}dd{margin:0}
  .foot{margin-top:2.4em;border-top:1px solid #ddd;padding-top:.7em;color:#666;font-size:.78rem}
  .bar{position:sticky;top:0;background:#fff;padding:.6em 0;margin-bottom:1em;border-bottom:1px solid #eee}
  .bar button{font:inherit;font-weight:700;background:#0F5C5C;color:#fff;border:0;border-radius:8px;padding:.55em 1em;cursor:pointer}
  @media print{.bar{display:none}body{padding:0}}</style></head>
  <body><div class="bar"><button onclick="window.print()">🖨️ ${printLbl}</button></div>
  <p class="eyebrow">${head}</p><h1>${title}</h1>${body}${glHtml}
  <p class="foot">${foot}</p></body></html>`;
  try{
    const w=window.open('','_blank');
    if(!w){ toast(TR('Allow pop-ups to open the PDF.','اسمح بالنوافذ المنبثقة لفتح الـPDF.')); return; }
    w.document.open(); w.document.write(html); w.document.close();
  }catch(e){ toast(TR('Could not open the PDF here.','تعذّر فتح الـPDF هنا.')); }
}

/* ----- the online assessment (auto-save, resume, timer, review, results) ----- */
function startExam(unitId, practice){
  const q=quizFor(unitId)||quizFor(currentUnitFor('Science')); if(!q) return;
  // Official assessment is one attempt only — if already submitted, show results, don't restart
  if(!practice && S.doneQuiz[q.unitId]){
    toast(TR('You have already completed this assessment.','لقد أكملت هذا التقييم بالفعل.'));
    return;
  }
  S.exam={ quizId:q.unitId, practice:!!practice, idx:0, answers:{}, started:Date.now(), seconds:q.minutes*60, phase:'taking', extended:false };
  S.view='assessments'; S.contentOpen=null; render(); startExamTimer();
  announce(TR((practice?'Practice ':'')+'quiz started. Your answers save automatically.', (practice?'بدأ التدريب. ':'بدأ الاختبار. ')+'تُحفظ إجاباتك تلقائيًّا.'));
}
let EXAM_TICK=null;
function startExamTimer(){
  clearInterval(EXAM_TICK);
  EXAM_TICK=setInterval(()=>{
    if(!S.exam||S.exam.phase!=='taking'){clearInterval(EXAM_TICK);return;}
    S.exam.seconds--;
    const tEl=el('exam-timer'); if(tEl){const m=Math.floor(S.exam.seconds/60),sec=S.exam.seconds%60;tEl.textContent=`${m}:${String(sec).padStart(2,'0')}`;}
    if(S.exam.seconds===60) announce(TR('One minute left. You can extend the time if you need it.','بقيت دقيقة واحدة. يمكنك تمديد الوقت إن احتجت.'), true);
    if(S.exam.seconds<=0){clearInterval(EXAM_TICK); S.exam.phase='review'; render(); announce(TR('Time is up. Your answers were saved — please review before submitting.','انتهى الوقت. حُفظت إجاباتك — يُرجى المراجعة قبل الإرسال.'), true);}
  },1000);
}
function studentAssessments(){
  const Q=activeQuiz();
  if(!S.exam || !Q){
    return `<div class="page-head"><div><p class="eyebrow">${t('assessments')}</p><h1>${TR('Your quizzes','اختباراتك')}</h1></div></div>
    <div class="calm" style="max-width:560px"><span class="em" aria-hidden="true">📝</span> <span>${TR('Open a subject and choose','افتح مادّة واختر')} <strong>${TR('Quiz','اختبار')}</strong> ${TR("to take this week's assessment.",'لأداء تقييم هذا الأسبوع.')}</span></div>`;
  }
  const ex=S.exam;
  const prac = ex.practice ? '<span class="tag warn">'+TR('Practice — doesn\'t count','تدريب — لا يُحتسب')+'</span> ' : '';
  if(ex.phase==='taking'){
    const q=Q.questions[ex.idx];
    const m=Math.floor(ex.seconds/60),sec=ex.seconds%60;
    return `
    <div class="flex between center wrapw" style="margin-bottom:.6rem">
      <h1 style="margin:0">${esc(L(Q,'title'))}</h1>
      <div class="flex center" style="gap:.6rem">
        <span class="tag info" id="autosave-ind" aria-live="polite"><span aria-hidden="true">⬇️</span> ${TR('Saved','محفوظ')}</span>
        <span class="tag warn">⏱ <span id="exam-timer">${m}:${String(sec).padStart(2,'0')}</span></span>
        <button class="btn sec sm" data-extend-time="1">+5 ${TR('min','دقائق')}</button>
      </div>
    </div>
    ${prac?`<p>${prac}</p>`:''}
    <p class="small muted" style="margin:-.2rem 0 .4rem">📝 ${TR('A check to help you learn — not an official exam.','اختبار قصير يساعدك على التعلّم — وليس امتحانًا رسميًّا.')}</p>
    <div class="card">
      <p class="eyebrow">${t('question')} ${ex.idx+1} ${t('ofWord')} ${Q.questions.length}</p>
      <h2 id="q-text">${esc(L(q,'text'))}</h2>
      <div role="radiogroup" aria-labelledby="q-text" style="display:grid;gap:.5rem;margin-top:.6rem">
        ${qopts(q).map((o,i)=>{const sel=ex.answers[q.id]===i;return `<button type="button" role="radio" aria-checked="${sel}" data-answer="${i}"
          class="btn ${sel?'':'sec'}" style="justify-content:flex-start;text-align:start;">
          <span aria-hidden="true" style="margin-inline-end:.5rem">${sel?'◉':'○'}</span> ${esc(o)}</button>`;}).join('')}
      </div>
      <div class="flex between mt2">
        ${ex.idx<Q.questions.length-1
          ? `<button class="btn" data-exam-nav="1">${aFwd()} ${t('next')}</button>`
          : `<button class="btn" data-exam-review="1">${aFwd()} ${t('reviewAnswers')}</button>`}
        <button class="btn sec" data-exam-nav="-1" ${ex.idx===0?'disabled':''}>${t('prev')} ${aBack()}</button>
      </div>
    </div>
    <p class="hint mt">${TR('Nothing is lost if your connection drops or your session ends — your answers are kept and you can resume.','لا يضيع شيء إذا انقطع اتصالك أو انتهت جلستك — تُحفظ إجاباتك ويمكنك المتابعة.')}</p>`;
  }
  if(ex.phase==='review'){
    return `
    <div class="page-head"><div><p class="eyebrow">${esc(L(Q,'title'))}</p><h1>${TR('Check before you submit','راجِع قبل الإرسال')}</h1>
    <p class="muted small" style="margin:0">${prac}${TR('You can change any answer. Nothing is sent until you choose Submit.','يمكنك تغيير أيّ إجابة. ولا يُرسَل شيء حتى تختار «إرسال».')}</p></div></div>
    <div class="card">
      <ol style="padding-inline-start:1.2rem">
      ${Q.questions.map((q,i)=>{const a=ex.answers[q.id];return `<li style="margin-bottom:.7rem">
        <strong>${esc(L(q,'text'))}</strong><br>
        <span class="${a==null?'tag warn':'muted'}">${a==null?TR('Not answered yet','لم تُجَب بعد'):TR('Your answer: ','إجابتك: ')+esc(qopts(q)[a])}</span>
        <button class="btn ghost sm" data-exam-goto="${i}">${TR('Change','تغيير')}</button></li>`;}).join('')}
      </ol>
      <div class="flex between mt">
        <button class="btn sec" data-exam-goto="0">${aBack()} ${TR('Keep editing','واصل التعديل')}</button>
        <button class="btn" data-exam-submit="1">${ex.practice?t('finishPractice'):t('submitQuiz')}</button>
      </div>
    </div>`;
  }
  // results — auto-marked multiple choice with explanations for self-correction
  const correct=Q.questions.filter(q=>ex.answers[q.id]===q.answer).length;
  return `
  <div class="page-head"><div><p class="eyebrow">${esc(L(Q,'title'))}</p><h1>🎉 ${ex.practice?TR('Practice finished!','انتهى التدريب!'):TR('Well done finishing the quiz!','أحسنت إنهاء الاختبار!')}</h1>
  <p class="muted small" style="margin:0">${prac}${TR('You got','أصبت')} ${correct} ${TR('of','من')} ${Q.questions.length} ${TR("right. Let's look at them together — every mistake is a chance to learn.",'إجابة صحيحة. لننظر إليها معًا — كلّ خطأ فرصة للتعلّم.')}</p></div></div>
  <div class="card">
    <h2 style="margin-top:0">${TR("Let's check the answers",'لنراجع الإجابات')}</h2>
    ${Q.questions.map(q=>{
      const a=ex.answers[q.id];
      const ok=a===q.answer;
      return `<div style="padding:.6rem 0;border-bottom:1px solid var(--line)">
        <p style="margin:0 0 .3rem"><strong>${esc(L(q,'text'))}</strong></p>
        <p style="margin:0">${ok?'<span class="tag ok">✓ '+TR('You got it!','أصبت!')+'</span>':'<span class="tag warn">'+TR('Let us learn this one','لنتعلّم هذا')+'</span> '+(a!=null?TR('You chose: ','اخترت: ')+esc(qopts(q)[a]):TR('(not answered)','(لم تُجَب)'))}</p>
        ${ok?'':`<p style="margin:.3rem 0 0"><span class="tag ok">✓ ${TR('The answer is','الإجابة هي')}</span> ${esc(qopts(q)[q.answer])}</p>`}
        ${q.explain?`<p class="small" style="margin:.35rem 0 0;background:var(--info-050,#eef3ff);border-radius:8px;padding:.5rem .7rem"><span aria-hidden="true">💡</span> ${esc(L(q,'explain'))} ${speakBtn(L(q,'explain'),'')}</p>`:''}
      </div>`;}).join('')}
    ${ex.practice?`<button class="btn mt" data-start-exam="${Q.unitId}">${TR('Do it for real now','أدِّه الآن فعليًّا')} ${aFwd()}</button> `:''}<button class="btn ${ex.practice?'sec':''} mt" data-view="home" data-reset-exam="1">${aBack()} ${t('home')}</button>
  </div>`;
}
function studentGrades(){
  const s=STUDENT_SELF;
  return `
  <div class="page-head"><div><p class="eyebrow">${t('mygrades')}</p><h1>${TR('Your grades and feedback','درجاتك وملاحظات معلّمك')}</h1></div></div>
  <div class="tbl-scroll">
    <table><caption>${TR("Latest scores by subject with your teacher's notes.",'أحدث الدرجات حسب المادّة مع ملاحظات معلّمك.')}</caption>
    <thead><tr><th scope="col">${TR('Subject','المادّة')}</th><th scope="col">${TR('Score','الدرجة')}</th><th scope="col">${TR("How you're doing",'مستواك')}</th><th scope="col">${TR('Teacher feedback','ملاحظة المعلّم')}</th></tr></thead>
    <tbody>
    ${SUBJECTS.map(su=>{const v=s.mastery[su];return `<tr>
      <th scope="row" style="position:static">${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}</th>
      <td>${v}%</td><td>${masteryBar(v)} <span class="sr-only">${v}%</span></td>
      <td class="small">${v>=70?TR('Great work — keep it up.','عمل رائع — واصِل.'):v>=50?TR('Solid. A little revision will lift this.','جيّد. مراجعة بسيطة سترفع هذا.'):TR("Let's work through this together — ask for the recovery lesson.",'لنعمل على هذا معًا — اطلب درس الدعم.')}</td>
    </tr>`;}).join('')}
    </tbody></table>
  </div>`;
}
/* ===================== ADMIN / OVERSIGHT ===================== */
function adminScopeNode(){ return NODE[S.adminPath[S.adminPath.length-1]] || NODE['min']; }
// #15 pilot control panel — record lifecycle: received → validated → synced to EMIS → published to parents
function pilotControl(){
  const node=adminScopeNode(); const studs=Math.max(allStudents(node).length, 40);
  const r=rng(hashStr('ctrl'+node.id));
  const received=studs;
  const validated=Math.round(received*(0.90+r()*0.06));
  const synced=Math.round(validated*(0.86+r()*0.09));
  const published=Math.round(synced*(0.90+r()*0.07));
  const stages=[
    ['📥', TR('Data received','بيانات مُستلَمة'), received, 'info', TR('Submitted by a teacher or coordinator.','أرسلها معلّم أو منسّق.')],
    ['🔎', TR('Validated','تم التحقّق'), validated, 'ok', TR('Passed roster + range + duplicate checks.','اجتازت فحوص السجلّ والنطاق والتكرار.')],
    ['🔗', TR('Synced to EMIS','مُزامَن مع EMIS'), synced, 'ok', TR('Written to the official record system.','كُتبت في نظام السجلّ الرسمي.')],
    ['📨', TR('Published to parents','منشور للأهالي'), published, 'ok', TR('Released and visible in the parent channel.','نُشرت وظهرت في قناة الأهالي.')],
  ];
  const pct=(n)=>received?Math.round(n/received*100):0;
  return `
  ${crumbs()}${adminFullAnalyticsView(node, m)}
  <div class="page-head"><div><p class="eyebrow">${levelLabel(node.level)} · ${esc(nodeName(node))}</p><h1>${TR('Pilot control panel','لوحة ضبط التجربة')}</h1>
    <p class="muted small" style="margin:0">${TR('\u201cSubmitted\u201d is not the finish line. Track every record across four real states \u2014 a record can be received but not yet validated, synced, or published.','«مُرسَل» ليس النهاية. تتبّع كلّ سجلّ عبر أربع حالات حقيقية — فقد يُستلَم سجلّ دون أن يُتحقَّق منه أو يُزامَن أو يُنشَر.')}</p>
  </div></div>
  <div class="grid mb" style="grid-template-columns:repeat(auto-fit,minmax(190px,1fr))">
    ${stages.map(([ic,lbl,n,tone,desc])=>`<div class="card">
      <p class="eyebrow" style="margin:0">${ic} ${lbl}</p>
      <div class="bignum" style="font-size:1.9rem">${S.settings.lang==='ar'?arNum(n):n}</div>
      <div class="tag ${tone}">${pct(n)}% ${TR('of received','من المُستلَم')}</div>
      <p class="small muted" style="margin:.3rem 0 0">${desc}</p>
    </div>`).join('')}
  </div>
  <div class="card">
    <p class="eyebrow">${TR('Where records are right now','أين السجلّات الآن')}</p>
    ${stages.map(([ic,lbl,n,tone])=>`<div style="margin:.5rem 0">
      <div class="flex between"><span>${ic} ${lbl}</span><strong>${pct(n)}%</strong></div>
      <div class="bar" style="height:14px;background:var(--line);border-radius:7px;overflow:hidden;margin-top:.2rem"><div style="height:100%;width:${pct(n)}%;background:var(--${tone==='info'?'info':'ok'}-700)"></div></div>
    </div>`).join('')}
    <p class="small muted mt">${TR('The gap between \u201creceived\u201d and \u201cpublished\u201d is where a pilot actually lives \u2014 chase the drop-off, not just the totals. Offline/paper records appear here as received and pending sync, never missing.','الفجوة بين «المُستلَم» و«المنشور» هي حيث تعيش التجربة فعلًا — تتبّع التسرّب لا الإجماليات فقط. تظهر سجلّات الورق/دون اتصال هنا كمُستلَمة وبانتظار المزامنة، لا كمفقودة.')}</p>
  </div>`;
}
// #16 data-quality dashboard — surfaced BEFORE the learning numbers
function dataQuality(){
  const node=adminScopeNode(); const r=rng(hashStr('dq'+node.id));
  const issues=[
    [TR('Unverified parent\u2013child links','روابط ولي أمر\u2013طفل غير مُتحقَّقة'), ri(r,8,34), 'risk', TR('Block the parent portal for these until verified.','احجب بوّابة الأهالي لهذه حتى يتمّ التحقّق.')],
    [TR('Stale parent phone numbers','أرقام أولياء أمور قديمة'), ri(r,6,22), 'warn', TR('Update in EMIS before any SMS or portal access.','حدّثها في EMIS قبل أيّ رسالة أو وصول للبوّابة.')],
    [TR('Missing teacher assignments','تكليفات معلّمين ناقصة'), ri(r,2,9), 'warn', TR('Assign the subject teacher in EMIS.','عيّن معلّم المادة في EMIS.')],
    [TR('Duplicate student records','سجلّات طلاب مكرّرة'), ri(r,0,5), 'risk', TR('Merge before any reporting runs.','ادمجها قبل تشغيل أيّ تقارير.')],
    [TR('Unsynced offline records','سجلّات دون اتصال غير مُزامَنة'), ri(r,0,14), 'info', TR('Will clear automatically on next connection.','ستُحلّ تلقائيًّا عند الاتصال التالي.')],
    [TR('Classes still entirely at 100','فصول كلّها 100'), ri(r,1,6), 'warn', TR('QA review for inflation \u2014 support, never penalty.','مراجعة جودة لاحتمال التضخّم — دعم لا عقاب.')],
  ];
  const total=issues.reduce((a,i)=>a+i[1],0);
  return `
  ${crumbs()}
  <div class="page-head"><div><p class="eyebrow">${levelLabel(node.level)} · ${esc(nodeName(node))}</p><h1>${TR('Data quality','جودة البيانات')}</h1>
    <p class="muted small" style="margin:0">${TR('Learning numbers are meaningless on dirty data. Clear these first \u2014 the dangerous problems are roster and link errors, not low scores.','أرقام التعلّم بلا معنى على بيانات غير نظيفة. عالِج هذه أولًا — المشكلات الخطيرة أخطاء سجلّات وروابط، لا درجات منخفضة.')}</p>
  </div></div>
  <div class="card mb" style="border-inline-start:6px solid var(--${total>40?'risk':'warn'}-700)">
    <p style="margin:0;font-size:1.05rem"><strong>${S.settings.lang==='ar'?arNum(total):total}</strong> ${TR('open data-quality issues in this scope.','مشكلة جودة بيانات مفتوحة في هذا النطاق.')}</p>
  </div>
  <div class="tbl-scroll">
    <table><caption class="sr-only">${TR('Data-quality issues','مشكلات جودة البيانات')}</caption>
    <thead><tr><th scope="col">${TR('Issue','المشكلة')}</th><th scope="col">${TR('Count','العدد')}</th><th scope="col">${TR('What to do','الإجراء')}</th></tr></thead>
    <tbody>
    ${issues.map(([lbl,n,tone,hint])=>`<tr>
      <th scope="row" style="position:static"><span class="tag ${tone}">${n?'●':'✓'}</span> ${lbl}</th>
      <td><strong>${S.settings.lang==='ar'?arNum(n):n}</strong></td>
      <td class="small muted">${hint}</td>
    </tr>`).join('')}
    </tbody></table>
  </div>
  <p class="hint mt">${TR('Use this as a go/no-go gate: parent marks stay closed while unverified links exist, and suspicious all-100 classes get a support conversation, not a penalty.','استخدمها كبوّابة قرار: تبقى درجات الأهالي مغلقة ما دامت هناك روابط غير مُتحقَّقة، وتحصل فصول الـ100 المريبة على محادثة دعم لا عقوبة.')}</p>`;
}

// ═══════════════════════════════════════
// ADMIN — Excuse Management (إدارة الأعذار)
// ═══════════════════════════════════════
function leaderShell(inner){
  const items=[
    {v:'dashboard', ico: uiIcon('ministry', 16), t: TR('School Overview','المؤشرات العامة')},
    {v:'excuses', ico: uiIcon('calendar', 16), t: TR('Excuses & Approvals','اعتماد الأعذار')},
    {v:'training', ico: uiIcon('insights', 16), t: TR('Leader Guide','الدليل الإرشادي')},
  ];
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${inner}${devNote()}</div></main>${a11yPanel()}`;
}

function leaderDashboard(){
  const AR=S.settings.lang==='ar';
  return `
  <div style="margin-bottom:1.2rem">
    <h1 style="font-size:1.4rem;margin:0">${AR?'صباح الخير 👋':'Good morning 👋'}</h1>
    <p class="muted">${AR?'مدرسة الأفق الثانوية':'Al-Ofok Secondary School'}</p>
  </div>

  <div class="card mb" style="padding:1rem">
    <h2 style="font-size:1rem;margin:0 0 .6rem">📋 ${AR?'حضور أمس':'Yesterday\'s attendance'}</h2>
    <div style="display:flex;gap:.5rem;margin-bottom:.6rem;flex-wrap:wrap">
      <div style="flex:1;min-width:70px;text-align:center;background:var(--ok-050,#f0fdf4);border-radius:8px;padding:.5rem">
        <div style="font-size:1.5rem;font-weight:900;color:var(--ok-700)">89</div>
        <div style="font-size:.72rem">${AR?'حاضر':'Present'}</div>
      </div>
      <div style="flex:1;min-width:70px;text-align:center;background:var(--risk-050,#fef2f2);border-radius:8px;padding:.5rem">
        <div style="font-size:1.5rem;font-weight:900;color:var(--risk-700)">3</div>
        <div style="font-size:.72rem">${AR?'غائب':'Absent'}</div>
      </div>
      <div style="flex:1;min-width:70px;text-align:center;background:var(--paper);border-radius:8px;padding:.5rem">
        <div style="font-size:1.5rem;font-weight:900">92</div>
        <div style="font-size:.72rem">${AR?'الإجمالي':'Total'}</div>
      </div>
    </div>
    <p class="small muted" style="margin:0">${AR?'الغائبون أمس: نور أمير حسن، أمير خالد رشاد، حسن علي نجيب':'Absent yesterday: Nour Amir, Amir Khaled, Hassan Ali'}</p>
  </div>

  <div class="card mb" style="padding:1rem">
    <h2 style="font-size:1rem;margin:0 0 .6rem">📊 ${AR?'حضور هذا الأسبوع':'This week\'s attendance'}</h2>
    <div style="display:flex;gap:2px;height:32px;border-radius:6px;overflow:hidden;margin-bottom:.4rem">
      ${[97,94,92,89,0].map((v,i)=>'<div style="flex:1;background:'+(v===0?'var(--line)':v>=95?'var(--ok-700)':v>=90?'var(--warn-700)':'var(--risk-700)')+';display:flex;align-items:center;justify-content:center;color:#fff;font-size:.7rem;font-weight:700">'+(v?v+'%':'')+' </div>').join('')}
    </div>
    <div style="display:flex;justify-content:space-between;font-size:.7rem;color:var(--ink3)">
      <span>${AR?'الأحد':'Sun'}</span><span>${AR?'الاثنين':'Mon'}</span><span>${AR?'الثلاثاء':'Tue'}</span><span>${AR?'الأربعاء':'Wed'}</span><span style="opacity:.3">${AR?'الخميس':'Thu'}</span>
    </div>
  </div>

  <h2 style="font-size:1rem;margin:0 0 .5rem">⚡ ${AR?'يحتاج إجراءك':'Needs your action'}</h2>
  <div style="display:flex;flex-direction:column;gap:.4rem;margin-bottom:1rem">
    <button class="card" style="border-inline-start:4px solid var(--warn-700);text-align:start;cursor:pointer;padding:.7rem .9rem" data-view="excuses">
      <strong>${AR?'📋 ٢ أعذار غياب تنتظر اعتمادك':'📋 2 absence excuses await your approval'}</strong>
      <br><span class="small muted">${AR?'نور — شهادة طبية · أمير — سفر':'Nour — medical · Amir — travel'}</span>
    </button>
    <button class="card" style="border-inline-start:4px solid var(--warn-700);text-align:start;cursor:pointer;padding:.7rem .9rem" data-view="excuses">
      <strong>${AR?'📝 ٣ نتائج امتحان محجوبة لعدم سداد الرسوم':'📝 3 exam results withheld — unpaid fees'}</strong>
      <br><span class="small muted">${AR?'اضغط لمراجعة الأسماء والإفراج عن النتائج':'Tap to review and release results'}</span>
    </button>
  </div>

  <div class="card mb" style="padding:1rem">
    <h2 style="font-size:1rem;margin:0 0 .6rem">👩‍🏫 ${AR?'إرسال بيانات المعلّمين (هذا الأسبوع)':'Teacher data submissions (this week)'}</h2>
    <p class="small muted" style="margin:0 0 .5rem">${AR?'هل سجّل كل معلّم الحضور والدرجات هذا الأسبوع؟':'Has each teacher recorded attendance and grades this week?'}</p>
    ${[
      [AR?'أ/ سارة أحمد':'Sara', AR?'العلوم':'Science', true, AR?'أرسلت أمس ٨:١٥ ص':'Sent yesterday 8:15am'],
      [AR?'أ/ محمد حسن':'Mohamed', AR?'الرياضيات':'Math', true, AR?'أرسل أمس ٧:٥٠ ص':'Sent yesterday 7:50am'],
      [AR?'أ/ فاطمة علي':'Fatma', AR?'العربية':'Arabic', false, AR?'لم ترسل منذ يومين':'No submission for 2 days'],
      [AR?'أ/ أحمد كمال':'Ahmed', AR?'الدراسات':'Social', true, AR?'أرسل اليوم ٩:٠٠ ص':'Sent today 9:00am'],
    ].map(([name,subj,ok,detail])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:.4rem 0;border-bottom:1px solid var(--line)">
      <div><strong>${name}</strong> <span class="small muted">${subj}</span></div>
      <div style="text-align:end">${ok?`<span class="tag ok" style="font-size:.75rem">✓</span>`:`<span class="tag warn" style="font-size:.75rem">⚠️</span>`}<br><span class="small muted">${detail}</span></div>
    </div>`).join('')}
  </div>

  <div class="card" style="padding:1rem">
    <h2 style="font-size:1rem;margin:0 0 .6rem">🏠 ${AR?'الفصول':'Classrooms'}</h2>
    ${[
      [AR?'١/أ':'1/A', AR?'أ/ سارة':'Sara', 23, 22],
      [AR?'١/ب':'1/B', AR?'أ/ محمد':'Mohamed', 25, 23],
      [AR?'١/ج':'1/C', AR?'أ/ فاطمة':'Fatma', 20, 20],
      [AR?'١/د':'1/D', AR?'أ/ أحمد':'Ahmed', 24, 21],
    ].map(([cls,teacher,total,present])=>`<div style="display:flex;justify-content:space-between;align-items:center;padding:.4rem 0;border-bottom:1px solid var(--line)">
      <span><strong>${cls}</strong> <span class="small muted">${teacher}</span></span>
      <span style="font-size:.85rem">✅ ${present}/${total}</span>
    </div>`).join('')}
  </div>`;
}


function excuseManagement(){
  const AR=S.settings.lang==='ar';
  return `
  <div style="margin-bottom:1rem">
    <h1 style="font-size:1.5rem;margin:0">${AR?'الموافقات والمراجعات':'Approvals'}</h1>
    <p class="muted">${AR?'الأعذار ونتائج الامتحانات والرسوم':'Excuses, exam results, and fees'}</p>
  </div>

  <h2 style="font-size:1.05rem;margin:0 0 .5rem;color:var(--warn-700)">📋 ${AR?'أعذار بانتظار الاعتماد':'Excuses pending approval'}</h2>
  <p class="small muted" style="margin:0 0 .5rem">${AR?'الموظف الإداري سجّل العذر. اضغط اعتمد أو ارفض.':'Admin staff recorded the excuse. Tap approve or reject.'}</p>
  ${[
    {s:AR?'نور أمير حسن':'Nour', d:'25/6', t:AR?'🏥 شهادة طبية':'🏥 Medical'},
    {s:AR?'أمير خالد رشاد':'Amir', d:'24/6', t:AR?'✈️ سفر':'✈️ Travel'},
  ].map(e=>`<div class="card" style="padding:.7rem .9rem;margin-bottom:.3rem">
    <div class="flex between center wrapw" style="gap:.4rem">
      <div><strong>${e.s}</strong> · <span class="small muted">${e.d} · ${e.t}</span></div>
      <div style="display:flex;gap:.3rem">
        <button class="btn sm" onclick="toast('${AR?'✓ تمّ الاعتماد':'✓ Approved'}')" style="background:var(--ok-700);padding:.3rem .8rem">✓</button>
        <button class="btn sec sm" onclick="toast('${AR?'✗ رُفض':'✗ Rejected'}')" style="padding:.3rem .8rem">✗</button>
      </div>
    </div>
  </div>`).join('')}

  <h2 style="font-size:1.05rem;margin:1.2rem 0 .5rem;color:var(--warn-700)">📝 ${AR?'نتائج معلّقة (رسوم غير مسدّدة)':'Withheld results (unpaid fees)'}</h2>
  <p class="small muted" style="margin:0 0 .5rem">${AR?'هذه النتائج مخفية عن المعلّمين وأولياء الأمور حتى تسديد الرسوم.':'Hidden from teachers and parents until fees are paid.'}</p>
  ${[
    {s:AR?'نور أمير حسن':'Nour', score:65},
    {s:AR?'أمير خالد رشاد':'Amir K.', score:55},
    {s:AR?'حسن علي نجيب':'Hassan', score:48},
  ].map(e=>`<div class="card" style="padding:.7rem .9rem;margin-bottom:.3rem">
    <div class="flex between center">
      <div><strong>${e.s}</strong> · <span class="small muted">${e.score}/100</span></div>
      <button class="btn sec sm" onclick="toast('${AR?'تمّ الإفراج ✓':'Released ✓'}')">${AR?'إفراج':'Release'}</button>
    </div>
  </div>`).join('')}
  <button class="btn sec sm mt" onclick="toast('${AR?'تمّ الإفراج عن الكل':'All released'}')" style="width:100%">${AR?'إفراج عن الكل':'Release all'}</button>

  <h2 style="font-size:1.05rem;margin:1.2rem 0 .5rem">✅ ${AR?'تمّ سابقًا':'Previously done'}</h2>
  ${[
    {s:AR?'دينا يوسف':'Dina', what:AR?'عذر طبي — معتمد':'Medical excuse — approved'},
    {s:AR?'عمر رامي':'Omar', what:AR?'عذر رياضة — معتمد':'Sports excuse — approved'},
    {s:AR?'لينا علي':'Lina', what:AR?'نتيجة امتحان — أُفرج عنها':'Exam result — released'},
  ].map(e=>`<div class="card" style="padding:.5rem .9rem;margin-bottom:.2rem;opacity:.6">
    <span>${e.s} · <span class="small muted">${e.what}</span></span>
  </div>`).join('')}`;
}

function examResultsAdmin(){ return excuseManagement(); }
function feeStatusView(){ return excuseManagement(); }


function adminShell(inner){
  const items=[
    {v:'oversight', ico: uiIcon('ministry', 16), t: TR('National Oversight','المتابعة الاستراتيجية')},
    {v:'reports', ico: uiIcon('grading', 16), t: TR('Analytics & Reports','التقارير التحليلية')},
    {v:'dataquality', ico: uiIcon('alert', 16), t: TR('QA & Compliance','جودة البيانات والامتثال')},
    {v:'pilot', ico: uiIcon('map', 16), t: TR('Pilot Map & Field Ops','المتابعة الميدانية')},
    {v:'security', ico: uiIcon('control', 16), t: TR('Access & Security','الأمان وإدارة الوصول')},
    {v:'training', ico: uiIcon('insights', 16), t: TR('Admin Guide','الدليل الإرشادي')}
  ];
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${inner}${devNote()}</div></main>${a11yPanel()}`;
}
function levelLabel(lvl){ return TR(
  {ministry:'Government (national)',governorate:'Governorate (Mudiriya)',idara:'Idara (district)',school:'School',class:'Classroom'}[lvl],
  {ministry:'الحكومة (المركز)',governorate:'المحافظة (المديرية)',idara:'الإدارة التعليمية',school:'المدرسة',class:'الفصل'}[lvl]); }
function childLabel(lvl){ return TR(
  {ministry:'Governorates',governorate:'Districts (Idara)',idara:'Schools',school:'Classrooms',class:'Students'}[lvl],
  {ministry:'المديريات',governorate:'الإدارات التعليمية',idara:'المدارس',school:'الفصول',class:'الطلاب'}[lvl]); }

function crumbs(){
  return `<nav class="crumbs" aria-label="${TR('Breadcrumb','مسار التنقّل')}">${
    S.adminPath.map((id,i)=>{const n=NODE[id];const last=i===S.adminPath.length-1;
      return (i?'<span class="sep" aria-hidden="true">›</span>':'')+
      (last?`<span class="here" aria-current="page">${esc(nodeName(n))}</span>`
           :`<button data-crumb="${i}">${esc(nodeName(n))}</button>`);}).join('')
  }</nav>`;
}
function miniStat(num,lbl,tone){
  return `<div class="card stat" style="padding:.8rem 1rem"><span class="num"${tone?` style="color:var(--${tone}-700)"`:''}>${num}</span><span class="lbl">${lbl}</span></div>`;
}
function regionLabel(k){return {Urban:TR('Urban governorates','محافظات حضرية'),Lower:TR('Lower Egypt (Delta)','الوجه البحري'),Upper:TR('Upper Egypt','الوجه القبلي'),Frontier:TR('Frontier governorates','المحافظات الحدودية')}[k]||k;}
function strLabel(k){return {low:TR('≤25 — favourable','≤25 — مناسبة'),mid:TR('26–40','26–40'),high:TR('>40 — crowded','>40 — مزدحمة')}[k]||k;}
function sizeLabel(k){return {small:TR('Small (<400)','صغيرة (<400)'),medium:TR('Medium (400–900)','متوسّطة (400–900)'),large:TR('Large (>900)','كبيرة (>900)')}[k]||k;}
const EQUITY_DIMS={
  gender:{key:s=>s.gender, order:['F','M'], lab:k=>k==='F'?TR('Girls','البنات'):TR('Boys','البنون')},
  disability:{key:s=>s.hasAcc?'acc':'no', order:['acc','no'], lab:k=>k==='acc'?TR('With accommodations','مع تيسيرات'):TR('Without accommodations','بدون تيسيرات')},
  urbanRural:{key:s=>s.locale, order:['urban','rural'], lab:k=>k==='urban'?TR('Urban schools','مدارس حضرية'):TR('Rural schools','مدارس ريفية')},
  region:{key:s=>s.region, order:['Urban','Lower','Upper','Frontier'], lab:regionLabel},
  ratio:{key:s=>s.strBand, order:['low','mid','high'], lab:strLabel},
  density:{key:s=>s.sizeBand, order:['small','medium','large'], lab:sizeLabel},
  connectivity:{key:s=>s.connect, order:['online','offline'], lab:k=>k==='online'?TR('Connected schools','مدارس متّصلة'):TR('Offline / low-connectivity','دون اتصال / ضعيفة الاتصال')},
};
const EQUITY_TITLE={gender:['Mastery by gender','الإتقان حسب النوع'],disability:['Mastery by disability / accommodations','الإتقان حسب الإعاقة / التيسيرات'],urbanRural:['Mastery by location — urban vs rural','الإتقان حسب الموقع — حضر مقابل ريف'],region:['Mastery by region','الإتقان حسب الإقليم'],ratio:['Mastery by student–teacher ratio','الإتقان حسب نسبة الطلاب للمعلّم'],density:['Mastery by school size','الإتقان حسب حجم المدرسة'],connectivity:['Mastery by school connectivity','الإتقان حسب اتصال المدرسة']};
const K_ANON=10; // PDPL: suppress any subgroup smaller than this many real students
function gapDotPlot(groups, idSeed, titleTxt, descTxt){
  const W=320,H=58,padX=26,axisY=34;
  const xf=v=>padX+(clamp(v,0,100)/100)*(W-padX*2);
  const min=Math.min(...groups.map(g=>g.mastery)), max=Math.max(...groups.map(g=>g.mastery));
  const pal=['#1d4ed8','#0F5C5C','#9a5b00','#b3261e','#15803D'];
  let s=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-labelledby="gpT-${idSeed} gpD-${idSeed}" style="overflow:visible;max-width:520px">`;
  s+=`<title id="gpT-${idSeed}">${esc(titleTxt)}</title><desc id="gpD-${idSeed}">${esc(descTxt)}</desc>`;
  [0,25,50,75,100].forEach(t=>{ s+=`<line x1="${xf(t)}" y1="${axisY-4}" x2="${xf(t)}" y2="${axisY+4}" stroke="var(--line-strong)" stroke-width="1"/><text x="${xf(t)}" y="${axisY+15}" font-size="9" text-anchor="middle" fill="var(--ink-2)">${t}</text>`; });
  s+=`<line x1="${padX}" y1="${axisY}" x2="${W-padX}" y2="${axisY}" stroke="var(--line)" stroke-width="1"/>`;
  if(groups.length>1) s+=`<line x1="${xf(min)}" y1="${axisY}" x2="${xf(max)}" y2="${axisY}" stroke="var(--ink)" stroke-width="4" opacity="0.16"/>`;
  groups.forEach((g,i)=>{ const cx=xf(g.mastery), col=pal[i%pal.length];
    s+=`<circle cx="${cx}" cy="${axisY}" r="6.5" fill="${col}" stroke="#fff" stroke-width="2"/><text x="${cx}" y="${axisY-11}" font-size="10" font-weight="800" text-anchor="middle" fill="${col}">${g.mastery}</text>`; });
  s+=`</svg>`;
  return {svg:s, pal};
}
function equityGroups(node,dimKey){
  const dim=EQUITY_DIMS[dimKey]; if(!dim) return '';
  const st=allStudents(node); const sc=natScale(); const g={};
  st.forEach(s=>{const k=dim.key(s); if(k==null)return; (g[k]=g[k]||{n:0,mast:0,att:0}); g[k].n++; g[k].mast+=s.avgM; g[k].att+=s.att;});
  const all=(dim.order||Object.keys(g)).filter(k=>g[k]).map(k=>({k,label:dim.lab(k),n:g[k].n,mastery:Math.round(g[k].mast/g[k].n),att:Math.round(g[k].att/g[k].n)}));
  if(!all.length) return '';
  const vis=all.filter(x=>x.n>=K_ANON), supp=all.filter(x=>x.n<K_ANON); // k-anonymity
  const ti=EQUITY_TITLE[dimKey]||['',''];
  const head=`<p class="eyebrow" style="margin:0">${TR(ti[0],ti[1])} <span class="muted" style="font-weight:600">· ${TR('equity view','عرض الإنصاف')}</span></p>`;
  if(!vis.length) return `<div class="card mt">${head}
    <div class="suppressed" style="border:none"><span aria-hidden="true">🔒</span> ${TR('Data suppressed to protect student privacy (subgroups smaller than 10 students).','حُجبت البيانات لحماية خصوصية الطلاب (مجموعات أصغر من 10 طلاب).')}</div></div>`;
  const gap=vis.length>1?Math.max(...vis.map(a=>a.mastery))-Math.min(...vis.map(a=>a.mastery)):0;
  const lo=vis.reduce((a,b)=>a.mastery<=b.mastery?a:b);
  const plotTitle=TR(ti[0],ti[1]);
  const plotDesc=TR(`Dot plot on a 0–100 assessment scale. ${vis.map(x=>x.label+' '+x.mastery+' percent').join('; ')}. Gap of ${gap} points.`,`مخطّط نقطي على مقياس تقييم 0–100. ${vis.map(x=>x.label+' '+x.mastery+' بالمئة').join('؛ ')}. فجوة ${gap} نقطة.`);
  const {svg,pal}=gapDotPlot(vis, dimKey, plotTitle, plotDesc);
  return `<div class="card mt"><div class="flex between center wrapw" style="gap:.5rem">
      ${head}
      ${vis.length>1?`<span class="tag ${gap>=12?'risk':gap>=6?'warn':'ok'}"><span aria-hidden="true">↔</span> ${TR('Gap','الفجوة')}: ${gap} ${TR('pts','نقطة')}</span>`:''}
    </div>
    <div class="mt">${svg}</div>
    ${vis.length>1?`<p class="small muted" style="margin:.2rem 0 .4rem">${TR('Lowest group','أدنى مجموعة')}: <strong>${esc(lo.label)}</strong> ${TR('at','عند')} ${lo.mastery}% — ${TR('this gap is the unit of action: direct support and content here.','هذه الفجوة هي وحدة العمل: وجِّه الدعم والمحتوى هنا.')}</p>`:''}
    <div>
    ${vis.map((x,i)=>{const tone=x.mastery>=65?'ok':x.mastery>=50?'warn':'risk';
      return `<div style="padding:.5rem 0;border-bottom:1px solid var(--line)">
        <div class="flex between center" style="gap:.6rem"><span class="flex center" style="gap:.5rem"><span class="swatch" style="background:${pal[i%pal.length]}" aria-hidden="true"></span><strong>${x.label}</strong></span><span class="muted small">${Math.round(x.n*sc).toLocaleString()} ${TR('students','طالب')}</span></div>
        <div class="flex center" style="gap:.6rem;margin-top:.35rem"><span style="flex:1;min-width:120px">${masteryBar(x.mastery)}</span><strong style="min-width:46px;text-align:end;color:var(--${tone}-700)">${x.mastery}%</strong><span class="tag ${x.att>=90?'ok':x.att>=80?'warn':'risk'}">${TR('Att','حضور')} ${x.att}%</span></div>
      </div>`;}).join('')}
    </div>
    ${supp.length?`<div class="suppressed">🔒 ${supp.map(x=>esc(x.label)).join('، ')} — ${TR('hidden (fewer than 10 students, PDPL privacy).','مخفية (أقلّ من 10 طلاب، خصوصية قانون حماية البيانات).')}</div>`:''}
    <p class="small muted mt">${TR('A persistent gap is a signal to direct support, content and infrastructure where they are needed — never to penalise or rank schools.','الفجوة المستمرّة إشارة لتوجيه الدعم والمحتوى والبنية التحتية حيث يلزم — لا لمعاقبة المدارس أو ترتيبها.')}</p></div>`;
}
function adminInsights(node,m,c){
  let out=[]; const kids=node.children||[];
  if(kids.length){ let w=null; kids.forEach(k=>{const cm=metricsFor(k); if(!w||cm.dropoutRiskPct>w.p) w={n:k,p:cm.dropoutRiskPct};});
    if(w&&w.p>=10) out.push({tone:'risk',ico:'📉',text:TR(`Early-warning indicator is highest in ${nodeName(w.n)} — ${w.p}% of students flagged. Consider directing support there first.`,`مؤشر الإنذار المبكر الأعلى في ${nodeName(w.n)} — ${w.p}% من الطلاب. يُنصح بتوجيه الدعم إليها أولًا.`)}); }
  if(m.staleSchools>0) out.push({tone:'warn',ico:'🛰️',text:TR(`${m.staleSchools} ${m.staleSchools===1?'school has':'schools have'} been offline 48h+ — results there may be understated, so they are flagged, not counted as failing.`,`${m.staleSchools} مدرسة غير متّصلة منذ 48 ساعة فأكثر — قد تكون نتائجها أقلّ من الواقع، لذا فهي موسومة لا محسوبة كإخفاق.`)});
  const st=allStudents(node); const U={n:0,s:0},R={n:0,s:0}; st.forEach(s=>{(s.locale==='urban'?U:R).n++;(s.locale==='urban'?U:R).s+=s.avgM;});
  if(U.n>=K_ANON&&R.n>=K_ANON){ const um=Math.round(U.s/U.n),rm=Math.round(R.s/R.n),gp=um-rm;
    if(Math.abs(gp)>=6) out.push({tone:'warn',ico:'⚖️',text:TR(`Rural schools trail urban by ${gp} pts in assessment (${rm}% vs ${um}%) — an equity gap to close with content and connectivity.`,`المدارس الريفية متأخّرة عن الحضرية بـ ${gp} نقطة في التقييم (${rm}% مقابل ${um}%) — فجوة إنصاف تُعالَج بالمحتوى والاتصال.`)}); }
  if(m.anomaly) out.push({tone:'warn',ico:'⚑',text:TR('An unusual score pattern was flagged for QA review in this scope.','رُصد نمط درجات غير معتاد للمراجعة في هذا النطاق.')});
  if(!out.length) out.push({tone:'ok',ico:'✓',text:TR('No systemic flags right now. Headline indicators are within range.','لا تنبيهات منظومية حاليًّا. المؤشّرات الرئيسية ضمن النطاق.')});
  out=out.slice(0,2); // keep it to the two most important — don't overwhelm
  return `<div class="insights">${out.map(it=>`<div class="insight ${it.tone}"><span class="ico" aria-hidden="true">${it.ico}</span><p>${it.text}</p></div>`).join('')}</div>`;
}
function quadrantPlot(node){
  const kids=node.children||[]; if(kids.length<2) return '';
  const pts=kids.map(k=>{const cm=metricsFor(k); return {n:k,x:cm.onlineShare,y:cm.mastery};});
  const W=320,H=230,pad=30,tx=70,ty=65;
  const X=v=>pad+(clamp(v,0,100)/100)*(W-pad*2);
  const Y=v=>(H-pad)-(clamp(v,0,100)/100)*(H-pad*2);
  const priority=pts.filter(p=>p.x<tx&&p.y<ty).sort((a,b)=>a.y-b.y);
  let s=`<svg viewBox="0 0 ${W} ${H}" width="100%" height="${H}" role="img" aria-labelledby="qT-${esc(node.id)} qD-${esc(node.id)}" style="overflow:visible;max-width:520px">`;
  s+=`<title id="qT-${esc(node.id)}">${esc(TR('Assessment outcome versus school readiness','نتيجة التقييم مقابل جاهزية المدارس'))}</title>`;
  s+=`<desc id="qD-${esc(node.id)}">${esc(TR('Scatter plot; horizontal is school connectivity readiness, vertical is assessment mastery. The shaded lower-left zone marks places needing support and resources.','مخطّط مبعثر؛ الأفقي جاهزية اتصال المدارس والعمودي إتقان التقييم. المنطقة المظلّلة أسفل اليسار تُبرز الأماكن المحتاجة للدعم والموارد.'))}</desc>`;
  s+=`<rect x="${pad}" y="${Y(ty)}" width="${X(tx)-pad}" height="${(H-pad)-Y(ty)}" fill="#b3261e" opacity="0.07"/>`;
  s+=`<text x="${(pad+X(tx))/2}" y="${(Y(ty)+H-pad)/2}" font-size="8.5" text-anchor="middle" fill="var(--risk-700)" opacity="0.8">${esc(TR('Priority support','أولوية الدعم'))}</text>`;
  s+=`<line x1="${pad}" y1="${H-pad}" x2="${W-pad}" y2="${H-pad}" stroke="var(--line-strong)"/><line x1="${pad}" y1="${pad}" x2="${pad}" y2="${H-pad}" stroke="var(--line-strong)"/>`;
  s+=`<line x1="${X(tx)}" y1="${pad}" x2="${X(tx)}" y2="${H-pad}" stroke="var(--ink-2)" stroke-dasharray="3 3" opacity="0.5"/><line x1="${pad}" y1="${Y(ty)}" x2="${W-pad}" y2="${Y(ty)}" stroke="var(--ink-2)" stroke-dasharray="3 3" opacity="0.5"/>`;
  s+=`<text x="${W/2}" y="${H-3}" font-size="8.5" text-anchor="middle" fill="var(--ink-2)">${esc(TR('School connectivity readiness','جاهزية اتصال المدارس'))} (%)</text>`;
  s+=`<text x="9" y="${H/2}" font-size="8.5" text-anchor="middle" fill="var(--ink-2)" transform="rotate(-90 9 ${H/2})">${esc(TR('Assessment','التقييم'))} (%)</text>`;
  pts.forEach(p=>{ const inP=p.x<tx&&p.y<ty; const col=inP?'#b3261e':'#0F5C5C';
    s+=`<circle cx="${X(p.x)}" cy="${Y(p.y)}" r="5" fill="${col}" fill-opacity="0.85" stroke="#fff" stroke-width="1" tabindex="0" data-drill="${p.n.id}"><title>${esc(nodeName(p.n))}: ${TR('assessment','تقييم')} ${p.y}%, ${TR('readiness','جاهزية')} ${p.x}%</title></circle>`; });
  s+=`</svg>`;
  const list = priority.length
    ? `<p class="small" style="margin:.5rem 0 0"><strong>${TR('Priority support zone','منطقة الدعم ذات الأولوية')} (${priority.length}):</strong> ${priority.map(p=>`<button class="cmp-val" data-drill="${p.n.id}" style="text-align:start;min-width:auto">${esc(nodeName(p.n))} (${p.y}%)</button>`).join(' · ')}</p>`
    : `<p class="small muted" style="margin:.5rem 0 0">${TR('No places fall in the priority-support zone at this level.','لا توجد أماكن في منطقة الدعم ذات الأولوية في هذا المستوى.')}</p>`;
  return `<div class="card mt2">
    <p class="eyebrow" style="margin:0">${TR('Priority support zones','مناطق الدعم ذات الأولوية')}</p>
    <p class="small muted" style="margin:.1rem 0 .5rem">${TR('Outcomes are paired with resourcing, so low results read as a need for support — not blame. Lower-left = lower connectivity and lower assessment.','تُقرَن النتائج بالموارد، فتُفهَم النتائج المنخفضة كحاجة للدعم — لا كلوم. أسفل اليسار = اتصال أقلّ وتقييم أقلّ.')}</p>
    ${s}${list}</div>`;
}
function breakdownSelect(node){
  const sel=S.equity; const o=(v,l)=>`<option value="${v}" ${sel===v?'selected':''}>${l}</option>`;
  const og=(lbl,opts)=>opts?`<optgroup label="${lbl}">${opts}</optgroup>`:'';
  const place = node.level!=='class' ? og(TR('Place','المكان'), o('urbanRural',TR('Urban vs rural','حضر مقابل ريف'))+(node.level==='ministry'?o('region',TR('Region','الإقليم')):'')) : '';
  const school = node.level!=='class' ? og(TR('School','المدرسة'), o('ratio',TR('Student–teacher ratio','نسبة الطلاب للمعلّم'))+o('density',TR('School size / density','حجم المدرسة'))+o('connectivity',TR('Connectivity (online/offline)','الاتصال (متّصل/غير متّصل)'))) : '';
  return `<label class="sr-only" for="equity">${TR('Break down by','تفصيل حسب')}</label>
    <select id="equity" data-equity style="width:auto;min-width:200px">
      ${o('none',TR('No breakdown','بدون تفصيل'))}
      ${og(TR('People','الأشخاص'), o('gender',TR('Gender','النوع'))+o('disability',TR('Disability / accommodations','الإعاقة / التيسيرات')))}
      ${place}${school}
      ${og(TR('Learning','التعلّم'), o('subject',TR('Subject','المادة'))+(node.level==='school'?o('teacher',TR('Teacher','المعلّم')):''))}
    </select>`;
}
function roleBar(){
  const def=adminRoleDef(); const rootName=nodeName(NODE[def.root]);
  return `<div class="card mb" style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap;border-inline-start:6px solid var(--teal-700)">
    <div style="flex:1;min-width:220px">
      <p class="eyebrow" style="margin:0">${TR('Signed in as','مُسجَّل الدخول بصفة')}</p>
      <strong style="font-size:1.05rem">${L(def,'label')}</strong>
      <p class="small muted" style="margin:.2rem 0 0">${TR('Can see','يمكنه رؤية')} <strong>${esc(rootName)}</strong> ${TR("and everything inside it — nothing above. Teachers don't use this dashboard; they have their own class-and-subject view.",'وكلّ ما بداخله — لا شيء فوقه. لا يستخدم المعلّمون هذه اللوحة؛ لديهم عرض الفصل والمادة الخاصّ بهم.')}</p>
    </div>
    <div><label class="sr-only" for="arole">${TR('Demo — view as a different role','عرض — بصفة دور آخر')}</label>
      <select id="arole" data-admin-role style="width:auto">
        ${ADMIN_ROLES.map(r=>`<option value="${r.id}" ${r.id===S.adminRole?'selected':''}>${TR('Demo · view as:','عرض · بصفة:')} ${L(r,'label')}</option>`).join('')}
      </select></div>
  </div>`;
}
function equityBlock(node,m){
  if(S.equity==='none') return '';
  if(S.equity==='subject'){ const a=subjectAverages(node);
    return `<div class="card mt"><p class="eyebrow">${TR('Average mastery by subject','متوسّط الإتقان حسب المادة')}</p>
      ${SUBJECTS.map(su=>{const v=a[su];const tone=v>=65?'ok':v>=50?'warn':'risk';
        return `<div class="flex between center" style="padding:.4rem 0;gap:.8rem"><span style="flex:1;min-width:120px;font-weight:600">${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}</span>
        <span style="flex:2;min-width:140px">${masteryBar(v)}</span><strong style="color:var(--${tone}-700)">${v}%</strong></div>`;}).join('')}
      <p class="small muted mt">${TR('Use this to see where the system is working well and where it needs more support — not to rank schools or teachers.','استعمل هذا لمعرفة أين يعمل النظام جيّدًا وأين يحتاج دعمًا أكثر — لا لترتيب المدارس أو المعلّمين.')}</p></div>`;
  }
  if(S.equity==='teacher'){
    if(node.level!=='school') return `<div class="card mt"><p class="small muted">${TR('Drill down to a single <strong>school</strong> to break results down by teacher.','تعمّق إلى <strong>مدرسة</strong> واحدة لتفصيل النتائج حسب المعلّم.')}</p></div>`;
    const ts=schoolTeachers(node);
    return `<div class="card mt"><p class="eyebrow">${TR('By teacher (subject leads at','حسب المعلّم (مسؤولو المواد في')} ${esc(nodeName(node))})</p>
      <p class="small muted">${TR('A principal can see how each subject is going in their own school. This is for support and professional development — never to publicly rank teachers.','يستطيع مدير المدرسة رؤية مستوى كلّ مادة في مدرسته. هذا للدعم والتطوير المهني — لا لترتيب المعلّمين علنًا أبدًا.')}</p>
      <div class="tbl-scroll"><table><caption class="sr-only">${TR('Teachers by subject','المعلّمون حسب المادة')}</caption>
      <thead><tr><th scope="col">${TR('Teacher','المعلّم')}</th><th scope="col">${TR('Subject','المادة')}</th><th scope="col">${TR('Class average','متوسّط الفصل')}</th></tr></thead><tbody>
      ${ts.map(tt=>{const tone=tt.avg>=65?'ok':tt.avg>=50?'warn':'risk';
        return `<tr><th scope="row" style="position:static">${esc(arName(tt))}</th><td>${S.settings.lang==='ar'?SUBJECTS_AR[tt.subject]:tt.subject}</td>
        <td>${masteryBar(tt.avg)} <span class="tag ${tone}">${tt.avg}%</span></td></tr>`;}).join('')}
      </tbody></table></div></div>`;
  }
  if(EQUITY_DIMS[S.equity]) return equityGroups(node,S.equity);
  return '';
}

function healthVerdict(m){
  const AR=S.settings.lang==='ar';
  if(m.attendance>=90 && m.mastery>=65 && m.teacherAttendance>=92 && m.dropoutRiskPct<8)
    return {tone:'ok', label:AR?'على المسار':'On track', line:AR?'المؤشّرات الرئيسية ضمن المستهدف.':'Headline indicators are within target.'};
  const weak=[];
  if(m.attendance<90) weak.push(AR?'حضور الطلاب':'student attendance');
  if(m.mastery<65) weak.push(AR?'متوسّط التقييم':'assessment average');
  if(m.teacherAttendance<92) weak.push(AR?'حضور المعلّمين':'teacher attendance');
  if(m.dropoutRiskPct>=8) weak.push(AR?'مؤشر الإنذار المبكر':'dropout risk');
  const line=(AR?'يحتاج انتباهًا: ':'Watch: ')+weak.slice(0,2).join(AR?'، ':', ')+'.';
  const risky = m.attendance<80 || m.mastery<50 || m.dropoutRiskPct>=12;
  return risky ? {tone:'risk', label:AR?'يحتاج دعمًا عاجلاً':'Needs urgent support', line}
               : {tone:'warn', label:AR?'يحتاج انتباهًا':'Needs attention', line};
}
function admKpi(num,label,pct,tone,ctx){
  return `<div class="kpi ${tone||''}"><div class="knum">${num}</div><div class="klbl">${label}</div>
    ${pct!=null?`<div class="kbar"><span style="width:${clamp(pct,0,100)}%"></span></div>`:''}
    ${ctx?`<div class="kctx">${ctx}</div>`:''}</div>`;
}
let _natScale=null;
function natScale(){ if(_natScale==null){ const tot=(metricsFor(NODE['min'])||{}).students||1; _natScale=800000/tot; } return _natScale; }
function cohortOf(node){ const mm=metricsFor(node); return node.level==='class'?mm.students:Math.max(mm.students,Math.round(mm.students*natScale())); }
function atRiskOf(node){ const mm=metricsFor(node); return node.level==='class'?mm.atRisk:Math.round(mm.dropoutRiskPct/100*cohortOf(node)); }
// cascading dropdowns: one per chosen level, plus one to go deeper — navigation without card-hunting
function adminNav(){
  const sel=[];
  for(let i=1;i<=S.adminPath.length;i++){
    const parent=NODE[S.adminPath[i-1]];
    if(!parent||!parent.children||!parent.children.length) break;
    const selectedId=S.adminPath[i]||'';
    const lbl=childLabel(parent.level);
    sel.push(`<select data-nav="${i}" aria-label="${esc(lbl)}" style="min-width:158px;width:auto">
      <option value="">${TR('All','كل')} ${esc(lbl)}</option>
      ${parent.children.map(ch=>`<option value="${ch.id}" ${ch.id===selectedId?'selected':''}>${esc(nodeName(ch))}</option>`).join('')}
    </select>`);
    if(!selectedId) break;
  }
  return sel.join('') || `<span class="muted small">${TR('This is the most detailed level.','هذا أكثر المستويات تفصيلًا.')}</span>`;
}
// deterministic 6-point trend ending at the current value (context, not just a point value)
function trendFor(seed,current){ const r=rng(hashStr(seed)); const out=[]; let v=current-ri(r,-6,11);
  for(let i=0;i<5;i++){ out.push(clamp(Math.round(v),0,100)); v += (current-v)*0.35 + ri(r,-3,3); }
  out.push(clamp(Math.round(current),0,100)); return out; }
function miniSpark(series,stroke){ const w=70,h=22,p=2; const max=Math.max(...series),min=Math.min(...series),rng2=(max-min)||1;
  const step=(w-p*2)/(series.length-1);
  const pts=series.map((v,i)=>[p+i*step,(h-p)-((v-min)/rng2)*(h-p*2)]);
  const d=pts.map((q,i)=>(i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1)).join(' ');
  return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" aria-hidden="true" style="flex:0 0 auto"><path d="${d}" fill="none" stroke="${stroke||'var(--teal-700)'}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>`; }
function admKpiTrend(num,label,pct,tone,ctx,series,goodUp){
  let spark='',delta='';
  if(series&&series.length>1){ const d=series[series.length-1]-series[0]; const flat=Math.abs(d)<0.5;
    const up=d>=0; const good= goodUp?up:!up; const arrow= flat?'→':(up?'▲':'▼'); const dcls= flat?'muted':(good?'ok':'risk');
    delta=`<span class="kdelta ${dcls}" title="${TR('vs 6 weeks ago','مقارنةً بـ 6 أسابيع')}">${arrow} ${Math.abs(Math.round(d))} ${TR('pts','نقطة')}</span>`;
    spark=miniSpark(series, good?'var(--ok-700)': flat?'var(--ink-2)':'var(--risk-700)'); }
  return `<div class="kpi ${tone||''}">
    <div class="ktop"><div class="knum">${num}</div>${spark}</div>
    <div class="klbl">${label}${delta?' '+delta:''}</div>
    ${pct!=null?`<div class="kbar"><span style="width:${clamp(pct,0,100)}%"></span></div>`:''}
    ${ctx?`<div class="kctx">${ctx}</div>`:''}</div>`;
}
function cmpSelect(){ const opt=(v,l)=>`<option value="${v}" ${(S.cmpMetric||'attendance')===v?'selected':''}>${l}</option>`;
  return `<label class="sr-only" for="cmp">${TR('Compare by','قارن حسب')}</label>
   <select id="cmp" data-cmp style="width:auto;min-width:170px">${opt('attendance',TR('Attendance','الحضور'))}${opt('mastery',TR('Assessment','التقييم'))}${opt('teacher',TR('Teacher presence (support)','حضور المعلّمين (للدعم)'))}${opt('risk',TR('Early-warning indicator','مؤشر الإنذار المبكر'))}</select>`; }
function cmpChart(node){
  const kids=node.children||[]; if(!kids.length) return '';
  const metric=S.cmpMetric||'attendance'; const riskM=metric==='risk';
  const getv=ch=>{const cm=metricsFor(ch); return metric==='attendance'?cm.attendance:metric==='mastery'?cm.mastery:metric==='teacher'?cm.teacherAttendance:cm.dropoutRiskPct;};
  const toneOf=v=> riskM?(v>=12?'risk':v>=8?'warn':'ok'):metric==='mastery'?(v>=65?'ok':v>=50?'warn':'risk'):metric==='teacher'?(v>=92?'ok':v>=85?'warn':'risk'):(v>=90?'ok':v>=80?'warn':'risk');
  const rows=kids.map(ch=>({ch,v:getv(ch)})).sort((a,b)=> riskM? b.v-a.v : a.v-b.v); // surface where support is most needed
  const avg=Math.round(rows.reduce((s,x)=>s+x.v,0)/rows.length);
  const maxv=Math.max(...rows.map(r=>r.v),100);
  const worst=rows[0], best=rows[rows.length-1];
  return `<div class="card">
    <div class="flex between center wrapw" style="gap:.5rem">
      <div><p class="eyebrow" style="margin:0">${TR('Compare','قارن')} ${childLabel(node.level)} · ${TR('avg','المتوسّط')} ${avg}%</p>
        <p class="small muted" style="margin:.1rem 0 0">${TR('Ordered to surface where support is most needed — for support, not a league table.','مُرتَّبة لإبراز الأماكن الأكثر حاجة للدعم — للدعم، لا للترتيب التنافسي.')}</p></div>
      ${cmpSelect()}
    </div>
    <div class="adm-attention mt">
      <span class="tag risk"><span aria-hidden="true">▲</span> ${TR('Needs most support','الأكثر حاجة للدعم')}: ${esc(nodeName(worst.ch))} (${worst.v}%)</span>
      <span class="tag ok"><span aria-hidden="true">✓</span> ${TR('Strongest','الأقوى')}: ${esc(nodeName(best.ch))} (${best.v}%)</span>
    </div>
    <div class="mt" style="${rows.length>9?'max-height:330px;overflow:auto;padding-inline-end:.3rem':''}">
      ${rows.map(r=>`<div class="cmp-row"><span class="cmp-lab" title="${esc(nodeName(r.ch))}">${esc(nodeName(r.ch))}</span>
        <span class="cmp-track"><span class="cmp-fill ${toneOf(r.v)}" style="width:${Math.round(r.v/Math.max(maxv,1)*100)}%"></span></span>
        <button class="cmp-val" data-drill="${r.ch.id}" aria-label="${TR('Open','افتح')} ${esc(nodeName(r.ch))} (${r.v}%)">${r.v}%</button></div>`).join('')}
    </div>
  </div>`;
}


/* ---------- Ultra-Insightful Zoomable Egypt Vector Map Component ---------- */
let ACTIVE_MAP_METRIC = 'attendance'; // 'attendance' | 'mastery' | 'anomalies' — real computed indicators only
let ZOOMED_GOV_ID = null; // transient highlight only; the real drill state is S.adminPath

function setMapMetric(metric){ ACTIVE_MAP_METRIC = metric; render(); }

/* The map is just another way into the SAME multi-tier drill everything else uses. */
function mapDrillTo(id){
  if(!NODE[id]) return;
  ZOOMED_GOV_ID = (NODE[id].level==='governorate') ? id : ZOOMED_GOV_ID;
  S.adminPath.push(id); S.reveal=false; render(); focusMain();
}
function mapUp(){
  if(S.adminPath.length>1){ S.adminPath.pop(); ZOOMED_GOV_ID=null; render(); focusMain(); }
}
function mapReset(){
  S.adminPath=[adminRoleDef().root]; ZOOMED_GOV_ID=null; render(); focusMain();
}
function resetMapZoom(){ mapReset(); }   // kept: nothing else calls the old names, harmless to keep
function zoomToGov(id){ mapDrillTo(id); }

function mapParseBbox(s){ const p=s.split(' ').map(Number); return {x:p[0],y:p[1],w:p[2],h:p[3]}; }
function mapInsetRect(b,pad){ return {x:b.x+b.w*pad, y:b.y+b.h*pad, w:b.w*(1-2*pad), h:b.h*(1-2*pad)}; }
/* Governorate polygons are the only real geometry we have; deeper tiers (idara/school)
   progressively crop into the SAME governorate frame so drilling still reads as "zooming in". */
function mapTierBbox(govBbox, depthBeyondGov){
  const shrink=[1, 0.6, 0.34][clamp(depthBeyondGov,0,2)];
  const b=mapParseBbox(govBbox); const cx=b.x+b.w/2, cy=b.y+b.h/2;
  const w=b.w*shrink, h=b.h*shrink;
  return {x:cx-w/2, y:cy-h/2, w:w, h:h};
}
function mapBubbleLayout(items, box){
  const n=items.length||1;
  const cols=Math.max(1, Math.round(Math.sqrt(n*(box.w/box.h))));
  const rows=Math.ceil(n/cols);
  const cw=box.w/cols, ch=box.h/rows;
  const baseR=Math.min(cw,ch)*0.32;
  return items.map(function(it,i){
    const col=i%cols, row=Math.floor(i/cols);
    return {it:it, cx:box.x+cw*(col+0.5), cy:box.y+ch*(row+0.5), r:baseR};
  });
}
function mapGovAncestor(n){ let cur=n; while(cur && cur.level!=='governorate') cur=cur.parent; return cur; }
/* One real metric definition, reused for the national choropleth AND every deeper bubble tier. */
const MAP_METRICS={
  attendance:{ label:TR('Attendance','الحضور'), unit:'%', value:function(n){return metricsFor(n).attendance;},
    scale:[[94,'#00695C'],[90,'#26A69A'],[85,'#80CBC4'],[0,'#D9EFEC']] },
  mastery:{ label:TR('Avg. assessment grade','متوسّط الدرجات'), unit:'%', value:function(n){return metricsFor(n).mastery;},
    scale:[[75,'#00695C'],[65,'#26A69A'],[50,'#80CBC4'],[0,'#D9EFEC']] },
};
function mapStyleFor(n){
  if(ACTIVE_MAP_METRIC==='anomalies'){
    const f=flagSummary(n), hot=f.bySev.critical+f.bySev.high;
    return {fill: hot?'#EF4444':(f.total?'#F59E0B':'#10B981'), valStr: f.total+' '+TR('flags','تنبيه')};
  }
  const def=MAP_METRICS[ACTIVE_MAP_METRIC]||MAP_METRICS.attendance;
  const v=def.value(n);
  const band=def.scale.find(function(s){return v>=s[0];}) || def.scale[def.scale.length-1];
  return {fill:band[1], valStr:v+def.unit};
}

function renderEgyptInteractiveMap(activeNode) {
  const AR = S.settings.lang === 'ar';
  const node = activeNode || adminScopeNode();

  const govData = [
  // Frontier / Western Desert
  { 
    id: 'g-matrouh', name: 'Matrouh', name_ar: 'مطروح', 
    d: 'M 70,80 L 260,80 L 260,180 L 240,290 L 70,290 Z', 
    cx: 160, cy: 180, labs: 18, students: 28400,
    bbox: '60 70 210 230'
  },
  { 
    id: 'g-newvalley', name: 'New Valley', name_ar: 'الوادي الجديد', 
    d: 'M 70,290 L 240,290 L 290,320 L 330,620 L 70,620 Z', 
    cx: 190, cy: 450, labs: 12, students: 16200,
    bbox: '60 280 280 350'
  },

  // Coastal & Delta
  { 
    id: 'g-alex', name: 'Alexandria', name_ar: 'الإسكندرية', 
    d: 'M 260,80 L 305,80 L 300,120 L 260,115 Z', 
    cx: 282, cy: 98, labs: 46, students: 94000,
    bbox: '250 70 65 60'
  },
  { 
    id: 'g-beheira', name: 'Beheira', name_ar: 'البحيرة', 
    d: 'M 260,115 L 300,120 L 315,185 L 260,180 Z', 
    cx: 282, cy: 150, labs: 32, students: 68000,
    bbox: '250 105 75 90'
  },
  { 
    id: 'g-kafrelsh', name: 'Kafr El Sheikh', name_ar: 'كفر الشيخ', 
    d: 'M 305,80 L 350,80 L 345,130 L 300,120 Z', 
    cx: 324, cy: 102, labs: 24, students: 48000,
    bbox: '295 70 65 70'
  },
  { 
    id: 'g-gharbia', name: 'Gharbia', name_ar: 'الغربية', 
    d: 'M 300,120 L 345,130 L 340,165 L 305,160 Z', 
    cx: 324, cy: 145, labs: 30, students: 62000,
    bbox: '295 110 60 65'
  },
  { 
    id: 'g-monufia', name: 'Monufia', name_ar: 'المنوفية', 
    d: 'M 305,160 L 340,165 L 335,195 L 305,190 Z', 
    cx: 322, cy: 178, labs: 28, students: 56000,
    bbox: '295 150 55 55'
  },
  { 
    id: 'g-damietta', name: 'Damietta', name_ar: 'دمياط', 
    d: 'M 350,80 L 378,80 L 375,108 L 350,105 Z', 
    cx: 364, cy: 92, labs: 16, students: 31000,
    bbox: '340 70 45 45'
  },
  { 
    id: 'g-dakahlia', name: 'Dakahlia', name_ar: 'الدقهلية', 
    d: 'M 345,108 L 390,108 L 380,155 L 345,150 Z', 
    cx: 366, cy: 130, labs: 38, students: 78000,
    bbox: '335 95 65 70'
  },
  { 
    id: 'g-sharqia', name: 'Sharqia', name_ar: 'الشرقية', 
    d: 'M 345,150 L 405,150 L 395,200 L 340,195 Z', 
    cx: 372, cy: 172, labs: 42, students: 86000,
    bbox: '335 140 80 70'
  },
  { 
    id: 'g-qalyubia', name: 'Qalyubia', name_ar: 'القليوبية', 
    d: 'M 335,190 L 368,190 L 365,215 L 335,215 Z', 
    cx: 350, cy: 202, labs: 26, students: 54000,
    bbox: '325 180 50 45'
  },

  // Greater Cairo & Canal
  { 
    id: 'g-cairo', name: 'Cairo', name_ar: 'القاهرة', 
    d: 'M 365,205 L 415,205 L 405,245 L 360,245 Z', 
    cx: 385, cy: 225, labs: 92, students: 184000,
    bbox: '350 195 75 60'
  },
  { 
    id: 'g-giza', name: 'Giza', name_ar: 'الجيزة', 
    d: 'M 240,240 L 335,210 L 360,245 L 350,290 L 240,290 Z', 
    cx: 300, cy: 260, labs: 78, students: 156000,
    bbox: '230 200 140 100'
  },
  { 
    id: 'g-portsaid', name: 'Port Said', name_ar: 'بورسعيد', 
    d: 'M 390,88 L 420,88 L 415,120 L 390,120 Z', 
    cx: 405, cy: 104, labs: 22, students: 38000,
    bbox: '380 78 50 50'
  },
  { 
    id: 'g-ismailia', name: 'Ismailia', name_ar: 'الإسماعيلية', 
    d: 'M 405,120 L 440,120 L 435,170 L 400,165 Z', 
    cx: 420, cy: 142, labs: 24, students: 44000,
    bbox: '390 110 60 70'
  },
  { 
    id: 'g-suez', name: 'Suez', name_ar: 'السويس', 
    d: 'M 405,170 L 445,170 L 435,260 L 395,255 Z', 
    cx: 418, cy: 215, labs: 20, students: 36000,
    bbox: '385 160 70 110'
  },

  // Sinai Peninsula
  { 
    id: 'g-nsinai', name: 'North Sinai', name_ar: 'شمال سيناء', 
    d: 'M 440,100 L 530,110 L 510,210 L 440,190 Z', 
    cx: 480, cy: 150, labs: 15, students: 22000,
    bbox: '430 90 110 130'
  },
  { 
    id: 'g-ssinai', name: 'South Sinai', name_ar: 'جنوب سيناء', 
    d: 'M 440,190 L 510,210 L 475,320 L 440,260 Z', 
    cx: 470, cy: 250, labs: 14, students: 18000,
    bbox: '430 180 90 150'
  },

  // Upper Egypt (Nile Valley Ribbon)
  { 
    id: 'g-faiyum', name: 'Faiyum', name_ar: 'الفيوم', 
    d: 'M 290,270 L 340,270 L 335,310 L 290,310 Z', 
    cx: 315, cy: 290, labs: 22, students: 46000,
    bbox: '280 260 70 60'
  },
  { 
    id: 'g-benisuef', name: 'Beni Suef', name_ar: 'بني سويف', 
    d: 'M 340,270 L 385,270 L 380,330 L 335,330 Z', 
    cx: 360, cy: 300, labs: 26, students: 52000,
    bbox: '325 260 70 80'
  },
  { 
    id: 'g-minya', name: 'Minya', name_ar: 'المنيا', 
    d: 'M 290,320 L 380,330 L 375,400 L 290,400 Z', 
    cx: 335, cy: 360, labs: 36, students: 76000,
    bbox: '280 310 110 100'
  },
  { 
    id: 'g-asyut', name: 'Asyut', name_ar: 'أسيوط', 
    d: 'M 290,400 L 375,400 L 368,460 L 290,460 Z', 
    cx: 330, cy: 430, labs: 32, students: 69000,
    bbox: '280 390 105 80'
  },
  { 
    id: 'g-sohag', name: 'Sohag', name_ar: 'سوهاج', 
    d: 'M 300,460 L 375,460 L 365,515 L 300,515 Z', 
    cx: 338, cy: 488, labs: 34, students: 72000,
    bbox: '290 450 95 75'
  },
  { 
    id: 'g-qena', name: 'Qena', name_ar: 'قنا', 
    d: 'M 365,480 L 435,480 L 425,545 L 355,545 Z', 
    cx: 395, cy: 512, labs: 28, students: 58000,
    bbox: '345 470 100 85'
  },
  { 
    id: 'g-luxor', name: 'Luxor', name_ar: 'الأقصر', 
    d: 'M 355,545 L 400,545 L 395,575 L 355,575 Z', 
    cx: 378, cy: 560, labs: 16, students: 34000,
    bbox: '345 535 65 50'
  },
  { 
    id: 'g-aswan', name: 'Aswan', name_ar: 'أسوان', 
    d: 'M 345,575 L 440,575 L 420,650 L 330,650 Z', 
    cx: 385, cy: 612, labs: 22, students: 45000,
    bbox: '320 565 130 95'
  },
  { 
    id: 'g-redsea', name: 'Red Sea', name_ar: 'البحر الأحمر', 
    d: 'M 405,255 L 475,320 L 525,640 L 440,640 L 380,330 Z', 
    cx: 460, cy: 460, labs: 14, students: 21000,
    bbox: '370 245 165 405'
  }
];

  const metricPills = [['attendance','calendar',TR('Attendance','الحضور')],
                        ['mastery','student',TR('Avg. grade','متوسّط الدرجات')],
                        ['anomalies','alert',TR('QA flags','التنبيهات')]]
    .map(function(p){ return '<button class="'+(ACTIVE_MAP_METRIC===p[0]?'on':'')+'" onclick="setMapMetric(\''+p[0]+'\')">'+uiIcon(p[1],13)+' '+p[2]+'</button>'; }).join('');

  const m=metricsFor(node);
  const scopePath = node.level==='ministry' ? '' : nodePath(node);
  const canUp = S.adminPath.length>1;
  const atRoot = S.adminPath.length===1;
  const zoomCtrls =
      (canUp?'<button type="button" class="btn xs ghost map-zoomout" onclick="mapUp()">'+aBack()+' '+TR('Zoom out','تصغير')+'</button>':'')
    + (!atRoot?'<button type="button" class="btn xs ghost map-zoomout" onclick="mapReset()">↺ '+TR('Top level','أعلى مستوى')+'</button>':'');

  /* ---------- body: national choropleth | governorate/idara/school bubble drill | class roster ---------- */
  let mapBody, legendHtml;

  if (node.level === 'class') {
    /* Deepest tier: individual students. This is the "reach a specific student" leaf —
       tap any tile to open the same full assessment ledger used everywhere else. */
    const stu = node.students.map(function(st){
      const tone = st.risk==='risk'?'risk':st.risk==='warn'?'warn':'ok';
      const label = S.reveal ? arName(st) : st.code;
      return '<button type="button" class="map-stu '+tone+'" data-open-student-modal="'+st.id+'" aria-label="'+esc(label)+'">'
        +'<span class="map-stu-av">'+esc(initials(S.reveal?arName(st):st.code))+'</span>'
        +'<span class="map-stu-n">'+esc(label)+'</span>'
        +'<span class="map-stu-m">'+uiIcon('calendar',11)+' '+st.att+'% · '+uiIcon('student',11)+' '+st.avgM+'%</span>'
        +'</button>'; }).join('');
    mapBody = '<div class="map-roster" role="list" aria-label="'+TR('Students — tap for the full ledger','الطلاب — اضغط لعرض كشف الدرجات')+'">'+stu+'</div>';
    legendHtml = '<span class="map-legend-item"><i style="background:var(--ok-700)"></i>'+TR('On track','مستقرّ')+'</span>'
      +'<span class="map-legend-item"><i style="background:var(--warn-700)"></i>'+TR('Needs follow-up','يحتاج متابعة')+'</span>'
      +'<span class="map-legend-item"><i style="background:var(--risk-700)"></i>'+TR('Needs support','يحتاج دعمًا')+'</span>';
  } else {
    const govAnc = node.level==='ministry' ? null : mapGovAncestor(node);
    const govGeo = govAnc ? govData.find(function(g){ return g.id===govAnc.id; }) : null;
    const depthBeyondGov = node.level==='governorate'?0 : node.level==='idara'?1 : node.level==='school'?2 : 0;
    const vb = (node.level==='ministry' || !govGeo) ? {x:60,y:70,w:480,h:590} : mapTierBbox(govGeo.bbox, depthBeyondGov);

    let polygons='', points='', bubbles='';
    if (node.level==='ministry') {
      polygons = govData.map(function(g){
        const st=mapStyleFor(NODE[g.id]);
        return '<path id="poly-'+g.id+'" d="'+g.d+'" fill="'+st.fill+'" stroke="#FFFFFF" stroke-width="1.25" '
          +'style="cursor:pointer;transition:fill .25s ease" onclick="mapDrillTo(\''+g.id+'\')" '
          +'onmouseover="updateMapHeader(\''+esc(g.name_ar)+'\',\''+esc(g.name)+'\',\''+st.valStr+'\','+m.mastery+','+m.attendance+','+g.students+')" '
          +'onfocus="updateMapHeader(\''+esc(g.name_ar)+'\',\''+esc(g.name)+'\',\''+st.valStr+'\','+m.mastery+','+m.attendance+','+g.students+')" '
          +'tabindex="0" role="button" aria-label="'+esc(g.name_ar)+' — '+st.valStr+'"></path>'; }).join('');
      points = govData.map(function(g){
        const st=mapStyleFor(NODE[g.id]);
        return '<g pointer-events="none"><circle cx="'+g.cx+'" cy="'+g.cy+'" r="3" fill="#FFFFFF" stroke="#0B192C" stroke-width="1.5"></circle>'
          +'<text x="'+g.cx+'" y="'+(g.cy-6)+'" fill="#0B192C" font-size="8.5" font-weight="900" text-anchor="middle" style="text-shadow:0 1px 4px #fff, 0 0 2px #fff">'+(AR?g.name_ar:g.name)+'</text>'
          +'<text x="'+g.cx+'" y="'+(g.cy+9)+'" fill="#004D40" font-size="7.5" font-weight="800" text-anchor="middle" style="text-shadow:0 1px 3px #fff">'+st.valStr+'</text></g>'; }).join('');
    } else if (govGeo) {
      polygons = '<path d="'+govGeo.d+'" fill="var(--teal-050)" stroke="var(--ischool-blue)" stroke-width="2" opacity="0.55"></path>';
      const kids = node.children||[];
      if (kids.length) {
        const box = mapInsetRect(vb, 0.09);
        const layout = mapBubbleLayout(kids, box);
        const cohorts = kids.map(cohortOf); const maxCoh=Math.max.apply(null, cohorts.concat([1]));
        bubbles = layout.map(function(L){
          const ch=L.it, st=mapStyleFor(ch), coh=cohortOf(ch);
          const r = L.r * (0.66 + 0.34*Math.sqrt(coh/maxCoh));
          const fSum=flagSummary(ch), hot=fSum.bySev.critical+fSum.bySev.high;
          return '<g class="map-bubble" tabindex="0" role="button" style="cursor:pointer" '
            +'onclick="mapDrillTo(\''+ch.id+'\')" onkeydown="if(event.key===\'Enter\')mapDrillTo(\''+ch.id+'\')" '
            +'aria-label="'+esc(nodeName(ch))+' — '+st.valStr+'">'
            +'<circle cx="'+L.cx.toFixed(1)+'" cy="'+L.cy.toFixed(1)+'" r="'+r.toFixed(1)+'" fill="'+st.fill+'" fill-opacity="0.94" stroke="#fff" stroke-width="2.5">'
            +'<title>'+esc(nodeName(ch))+' — '+st.valStr+(hot?(' · '+fSum.total+' '+TR('QA flags','تنبيه')):'')+'</title></circle>'
            + (hot?'<circle cx="'+(L.cx+r*0.68).toFixed(1)+'" cy="'+(L.cy-r*0.68).toFixed(1)+'" r="6" fill="var(--risk-700)" stroke="#fff" stroke-width="1.5"></circle>':'')
            +'<text x="'+L.cx.toFixed(1)+'" y="'+(L.cy-r-6).toFixed(1)+'" text-anchor="middle" font-size="10.5" font-weight="800" fill="var(--ink)" style="text-shadow:0 1px 3px #fff, 0 0 3px #fff">'+esc(nodeName(ch))+'</text>'
            +'<text x="'+L.cx.toFixed(1)+'" y="'+(L.cy+4).toFixed(1)+'" text-anchor="middle" font-size="'+Math.max(9,r*0.4).toFixed(1)+'" font-weight="900" fill="#fff">'+st.valStr+'</text>'
            +'</g>'; }).join('');
      }
    }
    mapBody = '<div class="map-canvas">'
      +'<svg id="egypt-national-svg" viewBox="'+vb.x+' '+vb.y+' '+vb.w+' '+vb.h+'" style="width:100%;height:100%;max-height:460px;transition:viewBox 0.4s ease;filter:drop-shadow(0 6px 16px rgba(0,0,0,0.06))" role="img" aria-label="'+TR('Interactive map — click any region to drill down','خريطة تفاعلية — اضغط أي منطقة للتعمّق')+'">'
      +'<g id="gov-polygons">'+polygons+'</g><g id="gov-points" pointer-events="none">'+points+'</g><g id="gov-bubbles">'+bubbles+'</g>'
      +'</svg>'
      +(node.level!=='ministry' && !(node.children&&node.children.length) ? '<p class="muted small" style="position:absolute;bottom:10px">'+TR('No further breakdown at this level.','لا مزيد من التفصيل في هذا المستوى.')+'</p>' : '')
      +'</div>';
    legendHtml = ACTIVE_MAP_METRIC==='anomalies'
      ? '<span class="map-legend-item"><i style="background:#10B981"></i>'+TR('Clear','سليم')+'</span>'
        +'<span class="map-legend-item"><i style="background:#F59E0B"></i>'+TR('Some flags','بعض التنبيهات')+'</span>'
        +'<span class="map-legend-item"><i style="background:#EF4444"></i>'+TR('Critical/high flags','تنبيهات حرجة')+'</span>'
      : '<span class="muted small">0%</span><span style="display:flex;gap:3px">'
        + ['#D9EFEC','#80CBC4','#26A69A','#00695C'].map(function(c){return '<i style="display:inline-block;width:28px;height:9px;background:'+c+';border-radius:2px"></i>';}).join('')
        + '</span><span class="muted small" style="font-weight:700">100%</span>';
  }

  return '<div class="row mb map-card-row" style="align-items:stretch;gap:1.25rem;margin-top:.75rem">'
    +'<div class="card" style="flex:1.75;min-width:350px;padding:1.35rem;display:flex;flex-direction:column;justify-content:space-between">'
    +'<div>'
    +'<div class="flex between center wrapw" style="margin-bottom:.5rem;padding-bottom:.6rem;border-bottom:1.5px solid var(--line)">'
    +'<div><div style="display:flex;align-items:center;gap:.5rem;flex-wrap:wrap">'
    +'<h2 id="map-active-gov-title" style="margin:0;font-size:1.35rem;font-weight:900;color:var(--ink)">'+esc(nodeName(node))+'</h2>'
    + zoomCtrls
    +'</div>'
    + (scopePath?'<p class="small muted" style="margin:.2rem 0 0">'+esc(scopePath)+'</p>':
       '<p class="small muted" style="margin:.25rem 0 0">'+TR('Click any governorate to zoom in — governorate → district → school → class → student','اضغط أي محافظة للتعمّق — محافظة ← إدارة ← مدرسة ← فصل ← طالب')+'</p>')
    +'</div>'
    +'<div id="map-active-metrics-badge" style="display:flex;align-items:center;gap:.6rem">'
    +'<span class="tag ok" style="font-size:.9rem;font-weight:900;padding:.35rem .8rem;border-radius:10px">'+mapStyleFor(node).valStr+'</span>'
    +'</div></div>'
    +'<div class="flex center between wrapw" style="margin-bottom:.6rem;gap:.5rem">'
    +'<div class="seg" role="group" aria-label="'+TR('Map metric','مؤشر الخريطة')+'">'+metricPills+'</div>'
    +'<span class="small muted" style="font-weight:700">'+levelLabel(node.level)+' · '+cohortOf(node).toLocaleString()+' '+TR('students','طالب')+'</span>'
    +'</div></div>'
    +mapBody
    +'<div class="flex between center wrapw" style="margin-top:.65rem;padding-top:.5rem;border-top:1px solid var(--line);font-size:.8rem">'+legendHtml+'</div>'
    +'</div>'
    +'<div style="flex:1;min-width:280px;display:flex;flex-direction:column;gap:1rem">'
    + biPanel({ title:TR('Selected scope snapshot','لقطة سريعة للنطاق'),
        body:'<div class="bi-facts" style="grid-template-columns:1fr 1fr">'
          +'<div><span class="bi-fact-n" style="color:var(--ok-700)">'+m.attendance+'%</span><span class="bi-fact-l">'+TR('attendance','الحضور')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:var(--info-700)">'+m.mastery+'%</span><span class="bi-fact-l">'+TR('avg. grade','متوسّط الدرجات')+'</span></div>'
          +'<div><span class="bi-fact-n">'+cohortOf(node).toLocaleString()+'</span><span class="bi-fact-l">'+TR('students','طالب')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:'+(flagSummary(node).total?'var(--warn-700)':'var(--ok-700)')+'">'+flagSummary(node).total+'</span><span class="bi-fact-l">'+TR('QA flags','تنبيهات')+'</span></div>'
          +'</div>' })
    + biPanel({ title:TR('How to use this map','كيفية استخدام الخريطة'),
        body:'<ol class="bi-rules" style="grid-template-columns:1fr">'
          +'<li><span class="bi-rid">1</span><span>'+TR('Click a governorate to zoom in.','اضغط محافظة للتكبير.')+'</span></li>'
          +'<li><span class="bi-rid">2</span><span>'+TR('Keep clicking — district, then school, then class.','واصل الضغط — إدارة ثم مدرسة ثم فصل.')+'</span></li>'
          +'<li><span class="bi-rid">3</span><span>'+TR('At class level, tap a student for their full ledger.','عند الفصل، اضغط طالبًا لعرض كشف درجاته.')+'</span></li>'
          +'<li><span class="bi-rid">4</span><span>'+TR('Use “Zoom out” or “Top level” to go back.','استخدم «تصغير» أو «أعلى مستوى» للعودة.')+'</span></li>'
          +'</ol>' })
    +'</div></div>';
}


function updateMapHeader(nameAr, nameEn, labsStr, mastery, att, students) {
  const titleEl = document.getElementById('map-active-gov-title');
  const badgeEl = document.getElementById('map-active-metrics-badge');
  if (!titleEl || !badgeEl) return;
  const AR = S.settings.lang === 'ar';
  
  titleEl.innerHTML = `${AR ? nameAr : nameEn} <span style="color:var(--ink-2);font-weight:600;font-size:1.15rem">· ${AR ? nameEn : nameAr}</span>`;
  badgeEl.innerHTML = `
    <span class="tag ok" style="font-size:.9rem;font-weight:900;padding:.35rem .8rem;border-radius:10px">
      ${labsStr} · ${mastery}% ${TR('Mastery','إتقان')}
    </span>
  `;
}

/* =====================================================================
   MINISTRY BI DASHBOARD
   A business-intelligence surface over the same read-only oversight data.

   UX contract (from the management-dashboard critique):
     · Multi-tiered navigation is ALWAYS visible — Ministry / Governorate →
       District (Idara) → School → Classroom — so the analyst never hunts.
     · The landing pane is scroll-free: one KPI strip plus a fixed grid of
       chart panels, each panel scrolling internally rather than the page.
     · Row-level detail is never on the landing pane. It lives behind a tab
       or a drill-down modal.
   ===================================================================== */

/* ---------- small chart primitives (inline SVG, offline-safe) ---------- */
function biAreaSpark(series, tone, h){
  h=h||54; const w=240, p=4;
  const max=Math.max.apply(null,series), min=Math.min.apply(null,series), sp=(max-min)||1;
  const step=(w-p*2)/(series.length-1);
  const pts=series.map(function(v,i){ return [p+i*step, (h-p)-((v-min)/sp)*(h-p*2)]; });
  const line=pts.map(function(q,i){ return (i?'L':'M')+q[0].toFixed(1)+' '+q[1].toFixed(1); }).join(' ');
  const area=line+' L '+(w-p)+' '+(h-p)+' L '+p+' '+(h-p)+' Z';
  const col='var(--'+(tone||'info')+'-700)';
  const gid='ag'+Math.abs(hashStr(series.join(',')+tone));
  return '<svg class="bi-spark" viewBox="0 0 '+w+' '+h+'" preserveAspectRatio="none" aria-hidden="true">'
    +'<defs><linearGradient id="'+gid+'" x1="0" y1="0" x2="0" y2="1">'
    +'<stop offset="0%" stop-color="'+col+'" stop-opacity=".28"/><stop offset="100%" stop-color="'+col+'" stop-opacity="0"/>'
    +'</linearGradient></defs>'
    +'<path d="'+area+'" fill="url(#'+gid+')"/>'
    +'<path d="'+line+'" fill="none" stroke="'+col+'" stroke-width="2.2" stroke-linejoin="round" stroke-linecap="round" vector-effect="non-scaling-stroke"/>'
    +'<circle cx="'+pts[pts.length-1][0].toFixed(1)+'" cy="'+pts[pts.length-1][1].toFixed(1)+'" r="3" fill="'+col+'"/>'
    +'</svg>';
}
function biDonut(segments, centreNum, centreLbl, size){
  size=size||150;
  const total=segments.reduce(function(a,s){return a+s.v;},0);
  const R=size/2, r=R*0.66, C=2*Math.PI*((R+r)/2), sw=R-r;
  let off=0, arcs='';
  if(total>0){
    segments.forEach(function(s){
      if(!s.v) return;
      const len=(s.v/total)*C;
      arcs+='<circle cx="'+R+'" cy="'+R+'" r="'+((R+r)/2)+'" fill="none" stroke="'+s.color+'" stroke-width="'+sw
        +'" stroke-dasharray="'+len.toFixed(2)+' '+(C-len).toFixed(2)+'" stroke-dashoffset="'+(-off).toFixed(2)
        +'" transform="rotate(-90 '+R+' '+R+')"><title>'+esc(s.label)+': '+s.v+'</title></circle>';
      off+=len;
    });
  } else {
    arcs='<circle cx="'+R+'" cy="'+R+'" r="'+((R+r)/2)+'" fill="none" stroke="var(--line)" stroke-width="'+sw+'"/>';
  }
  return '<div class="bi-donut"><svg viewBox="0 0 '+size+' '+size+'" width="'+size+'" height="'+size+'" role="img" aria-label="'+esc(centreLbl+': '+centreNum)+'">'
    +arcs
    +'<text x="'+R+'" y="'+(R-2)+'" text-anchor="middle" font-size="'+(R*0.52)+'" font-weight="900" fill="var(--ink)">'+centreNum+'</text>'
    +'<text x="'+R+'" y="'+(R+R*0.34)+'" text-anchor="middle" font-size="'+(R*0.19)+'" font-weight="700" fill="var(--ink-2)">'+esc(centreLbl)+'</text>'
    +'</svg></div>';
}
function biStack(segments){
  const total=segments.reduce(function(a,s){return a+s.v;},0)||1;
  return '<div class="bi-stack" role="img" aria-label="'+esc(segments.map(function(s){return s.label+' '+s.v;}).join(', '))+'">'
    + segments.filter(function(s){return s.v>0;}).map(function(s){
        return '<span style="width:'+(s.v/total*100).toFixed(1)+'%;background:'+s.color+'" title="'+esc(s.label+': '+s.v)+'"></span>'; }).join('')
    + (total?'':'<span style="width:100%;background:var(--line)"></span>')
    + '</div>';
}
function biLegend(segments){
  return '<div class="bi-legend">'+segments.map(function(s){
    return '<span class="bi-lg"><i style="background:'+s.color+'"></i>'+esc(s.label)+' <b>'+s.v+'</b></span>'; }).join('')+'</div>';
}
/* KPI tile: big number, target bullet, delta + sparkline. The reading unit of the dashboard. */
function biKpi(o){
  const tone=o.tone||'info';
  let delta='';
  if(o.series && o.series.length>1){
    const d=o.series[o.series.length-1]-o.series[0];
    const flat=Math.abs(d)<0.5, up=d>=0, good=o.goodUp?up:!up;
    delta='<span class="bi-delta '+(flat?'muted':(good?'ok':'risk'))+'">'
      +(flat?'→':(up?'▲':'▼'))+' '+Math.abs(Math.round(d))+' '+TR('pts','نقطة')+'</span>';
  }
  return '<'+(o.drill?'button type="button" data-bi-drill="'+esc(o.drill)+'"':'div')+' class="bi-kpi '+tone+'"'
    +(o.drill?' aria-label="'+esc(o.label)+' — '+TR('open detail','عرض التفاصيل')+'"':'')+'>'
    +'<span class="bi-kpi-lbl">'+o.label+'</span>'
    +'<span class="bi-kpi-num">'+o.num+delta+'</span>'
    +(o.pct!=null?'<span class="bi-bullet"><i style="width:'+clamp(o.pct,0,100)+'%"></i>'
       +(o.targetPct!=null?'<b style="inset-inline-start:'+clamp(o.targetPct,0,100)+'%"></b>':'')+'</span>':'')
    +'<span class="bi-kpi-ctx">'+(o.ctx||'')+'</span>'
    +(o.series?'<span class="bi-kpi-spark">'+biAreaSpark(o.series,tone,34)+'</span>':'')
    +'</'+(o.drill?'button':'div')+'>';
}
function biPanel(o){
  return '<section class="bi-panel'+(o.span?' span-'+o.span:'')+'" aria-label="'+esc(o.title)+'">'
    +'<header class="bi-panel-h"><div><h3>'+o.title+'</h3>'
    +(o.sub?'<p class="bi-panel-sub">'+o.sub+'</p>':'')+'</div>'
    +(o.tools?'<div class="bi-panel-tools">'+o.tools+'</div>':'')+'</header>'
    +'<div class="bi-panel-b'+(o.flush?' flush':'')+'">'+o.body+'</div>'
    +(o.foot?'<footer class="bi-panel-f">'+o.foot+'</footer>':'')
    +'</section>';
}

/* ---------- multi-tiered navigation rail (Ministry → Gov → Idara → School → Class) ---------- */
const TIER_LEVELS=['ministry','governorate','idara','school','class'];
const TIER_ICON={ministry:'ministry',governorate:'map',idara:'folder',school:'student',class:'teacher'};
function tierRail(){
  const root=NODE[adminRoleDef().root]||NODE['min'];
  const rootIdx=TIER_LEVELS.indexOf(root.level);
  const chips=[];
  for(let li=rootIdx; li<TIER_LEVELS.length; li++){
    const lvl=TIER_LEVELS[li];
    const depth=li-rootIdx;                       // position of this tier inside S.adminPath
    const nodeAtTier=NODE[S.adminPath[depth]];
    const parent=depth?NODE[S.adminPath[depth-1]]:null;
    const isHere=depth===S.adminPath.length-1;
    const lbl=levelLabel(lvl);
    if(depth<S.adminPath.length){
      // a tier that is already selected — a crumb button back to it, plus a sibling switcher
      const sibs=parent?(parent.children||[]):[];
      chips.push('<div class="tier'+(isHere?' here':' done')+'">'
        +'<span class="tier-lvl">'+uiIcon(TIER_ICON[lvl],13)+' '+lbl+'</span>'
        +(sibs.length>1
          ? '<select class="tier-pick" data-nav="'+depth+'" aria-label="'+esc(lbl)+'">'
            + sibs.map(function(s){ return '<option value="'+s.id+'"'+(s.id===nodeAtTier.id?' selected':'')+'>'+esc(nodeName(s))+'</option>'; }).join('')
            + '</select>'
          : '<button type="button" class="tier-name" data-crumb="'+depth+'">'+esc(nodeName(nodeAtTier))+'</button>')
        +'</div>');
    } else if(depth===S.adminPath.length){
      // the next tier down — an open picker, so drilling never needs card-hunting
      const p=NODE[S.adminPath[depth-1]];
      const kids=(p&&p.children)||[];
      if(!kids.length) break;
      chips.push('<div class="tier next">'
        +'<span class="tier-lvl">'+uiIcon(TIER_ICON[lvl],13)+' '+lbl+'</span>'
        +'<select class="tier-pick" data-nav="'+depth+'" aria-label="'+esc(TR('Drill into','التعمّق إلى')+' '+lbl)+'">'
        +'<option value="">'+TR('All','كل')+' · '+esc(childLabel(p.level))+'</option>'
        +kids.map(function(k){ return '<option value="'+k.id+'">'+esc(nodeName(k))+'</option>'; }).join('')
        +'</select></div>');
      break;
    }
  }
  return '<nav class="tier-rail" aria-label="'+TR('Oversight level','مستوى المتابعة')+'">'
    + chips.join('<span class="tier-sep" aria-hidden="true">›</span>')
    + (S.adminPath.length>1?'<button type="button" class="tier-reset" data-crumb="0">↺ '+TR('Top level','أعلى مستوى')+'</button>':'')
    + '</nav>';
}

/* ---------- sticky command bar: scope, timeframe, breakdown, density, export ---------- */
function biCommandBar(node){
  const fs=flagSummary(node);
  const crit=fs.bySev.critical+fs.bySev.high;
  const dr=[['to_date',TR('To date','حتى اليوم')],['last_2_w',TR('2 weeks','أسبوعان')],
            ['month_to_date',TR('This month','هذا الشهر')],['sem1',TR('Term 1','الفصل الأول')]];
  return '<div class="bi-cmd">'
    + tierRail()
    + '<div class="bi-cmd-r">'
    +   '<div class="seg sm" role="group" aria-label="'+TR('Calculation window','نافذة الحساب')+'">'
    +     dr.map(function(d){ return '<button type="button" data-filter-daterange="'+d[0]+'" aria-pressed="'+(S.dateRange===d[0])+'" class="'+(S.dateRange===d[0]?'on':'')+'">'+d[1]+'</button>'; }).join('')
    +   '</div>'
    +   breakdownSelect(node)
    +   '<button type="button" class="bi-bell'+(crit?' hot':'')+'" data-bi-tab="flags" aria-label="'+TR('Automated QA flags','التنبيهات الآلية')+'">'
    +     uiIcon('alert',15)+'<span>'+TR('Flags','التنبيهات')+'</span><b>'+fs.total+'</b>'+(crit?'<i class="bi-bell-dot"></i>':'')
    +   '</button>'
    +   '<div class="seg sm" role="group" aria-label="'+TR('Density','كثافة العرض')+'">'
    +     '<button type="button" data-bi-density="comfortable" aria-pressed="'+(S.biDensity!=='compact')+'" class="'+(S.biDensity!=='compact'?'on':'')+'" title="'+TR('Comfortable','مريح')+'">≡</button>'
    +     '<button type="button" data-bi-density="compact" aria-pressed="'+(S.biDensity==='compact')+'" class="'+(S.biDensity==='compact'?'on':'')+'" title="'+TR('Compact','مكثّف')+'">≣</button>'
    +   '</div>'
    +   '<button class="btn sec sm" data-bi-export="csv">'+uiIcon('download',14)+'<span class="btn-label">'+TR('Export','تصدير')+'</span></button>'
    +   '<button class="btn sec sm" data-bi-print>'+uiIcon('print',14)+'<span class="btn-label">'+TR('Print','طباعة')+'</span></button>'
    + '</div></div>';
}

/* ---------- pane tabs ---------- */
function biTabs(node){
  const fs=flagSummary(node);
  const tabs=[
    {id:'overview',   ico:'chart',    en:'Overview',        ar:'النظرة التنفيذية'},
    {id:'geo',        ico:'map',      en:'Geographic',      ar:'الخريطة الجغرافية'},
    {id:'subjects',   ico:'student',  en:'Subjects & equity',ar:'المواد والإنصاف'},
    {id:'attendance', ico:'calendar', en:'Attendance audit', ar:'تدقيق الحضور'},
    {id:'flags',      ico:'alert',    en:'QA flags',        ar:'التنبيهات الآلية', badge:fs.total, hot:fs.bySev.critical+fs.bySev.high},
    {id:'actions',    ico:'insights', en:'Recommendations',  ar:'التوصيات'},
  ];
  const cur=biTab();
  return '<div class="bi-tabs" role="tablist" aria-label="'+TR('Dashboard panes','محاور اللوحة')+'">'
    + tabs.map(function(t){
        return '<button type="button" role="tab" data-bi-tab="'+t.id+'" aria-selected="'+(cur===t.id)+'" class="bi-tab'+(cur===t.id?' on':'')+'">'
          + uiIcon(t.ico,15)+'<span>'+TR(t.en,t.ar)+'</span>'
          + (t.badge?'<b class="bi-tab-b'+(t.hot?' hot':'')+'">'+t.badge+'</b>':'')+'</button>'; }).join('')
    + '</div>';
}
/* old tab ids kept working so deep links / bootstrap scripts don't break */
const BI_TAB_ALIAS={macro:'geo', anomalies_engine:'flags', attendance_deep:'attendance', decision_support:'actions'};
function biTab(){ const t=S.adminAnalyticsTab||'overview'; return BI_TAB_ALIAS[t]||t; }

/* ---------- pane 1: executive overview (scroll-free) ---------- */
function biOverview(node,m){
  const AR=S.settings.lang==='ar';
  const v=healthVerdict(m);
  const fs=flagSummary(node);
  const cohort=cohortOf(node), atRisk=atRiskOf(node);
  const wins=assessWindows(), c=completionFor(node,wins[0]);
  const kids=node.children||[];
  const sAtt=trendFor(node.id+'att',m.attendance), sMas=trendFor(node.id+'mas',m.mastery),
        sTch=trendFor(node.id+'tch',m.teacherAttendance), sRsk=trendFor(node.id+'rsk',m.dropoutRiskPct),
        sSyn=trendFor(node.id+'syn',c.pct);

  const kpis=[
    biKpi({label:TR('Students in view','الطلاب في النطاق'), num:cohort.toLocaleString(), tone:'info',
           ctx:(kids.length?kids.length+' '+childLabel(node.level):levelLabel(node.level))}),
    biKpi({label:TR('Student attendance','حضور الطلاب'), num:m.attendance+'%', pct:m.attendance, targetPct:90,
           tone:m.attendance>=90?'ok':m.attendance>=80?'warn':'risk', ctx:TR('target 90%','المستهدف ٩٠%'),
           series:sAtt, goodUp:true, drill:'attendance'}),
    biKpi({label:TR('Assessment average','متوسّط التقييم'), num:m.mastery+'%', pct:m.mastery, targetPct:65,
           tone:m.mastery>=65?'ok':m.mastery>=50?'warn':'risk', ctx:TR('past-due items only','للمستحق فقط'),
           series:sMas, goodUp:true, drill:'mastery'}),
    biKpi({label:TR('Teacher attendance','حضور المعلّمين'), num:m.teacherAttendance+'%', pct:m.teacherAttendance, targetPct:92,
           tone:m.teacherAttendance>=92?'ok':m.teacherAttendance>=85?'warn':'risk', ctx:TR('target 92%','المستهدف ٩٢%'),
           series:sTch, goodUp:true}),
    biKpi({label:TR('Early-warning cohort','مؤشر الإنذار المبكر'), num:atRisk.toLocaleString(), pct:m.dropoutRiskPct, targetPct:8,
           tone:m.dropoutRiskPct>=12?'risk':m.dropoutRiskPct>=8?'warn':'ok', ctx:m.dropoutRiskPct+'% '+TR('of cohort','من الطلاب'),
           series:sRsk, goodUp:false}),
    biKpi({label:TR('Automated QA flags','التنبيهات الآلية'), num:fs.total, pct:fs.total?Math.round((fs.bySev.critical+fs.bySev.high)/fs.total*100):0,
           tone:fs.bySev.critical?'risk':fs.bySev.high?'warn':'ok',
           ctx:fs.bySev.critical+' '+TR('critical','حرجة')+' · '+fs.breached+' '+TR('past SLA','تجاوزت المهلة'), drill:'flags'}),
  ].join('');

  const sevSegs=SEV_ORDER.map(function(k){ return {label:sevLabel(k), v:fs.bySev[k], color:'var(--'+FLAG_SEV[k].tone+'-700)'}; });
  const typePalette={grading:'#056FEC',integrity:'#8B5CF6',attendance:'#F59E0B',excuses:'#EF4444',data:'#0F766E'};
  const typeSegs=TYPE_ORDER.map(function(k){ return {label:typeLabel(k), v:fs.byType[k], color:typePalette[k]}; });

  const panels=[
    biPanel({ title:TR('Headline trend — last 6 windows','الاتجاه العام — آخر ٦ فترات'),
      sub:TR('Attendance, assessment and submission sync moving together','الحضور والتقييم ومزامنة الرصد جنبًا إلى جنب'),
      body:[['attendance',TR('Attendance','الحضور'),sAtt,'ok'],
            ['mastery',TR('Assessment','التقييم'),sMas,'info'],
            ['sync',TR('Submission sync','مزامنة الرصد'),sSyn,'warn']].map(function(r){
        const last=r[2][r[2].length-1];
        return '<div class="bi-trend"><span class="bi-trend-l">'+r[1]+'</span>'
          +'<span class="bi-trend-c">'+biAreaSpark(r[2],r[3],44)+'</span>'
          +'<strong class="bi-trend-v" style="color:var(--'+r[3]+'-700)">'+last+'%</strong></div>'; }).join('')
      }),
    biPanel({ title:TR('QA flag mix by severity','توزيع التنبيهات حسب الخطورة'),
      sub:TR('Rule-based automated detection · open cases','رصد آلي وفق قواعد · حالات مفتوحة'),
      tools:'<button class="btn sec xs" data-bi-tab="flags">'+TR('Open queue','فتح السجل')+' '+aFwd()+'</button>',
      body:'<div class="bi-donut-row">'+biDonut(sevSegs, fs.total, TR('open flags','تنبيه مفتوح'))
           +'<div class="bi-donut-side">'+biLegend(sevSegs)
           +'<p class="bi-mini">'+TR('By type','حسب النوع')+'</p>'+biStack(typeSegs)+biLegend(typeSegs)+'</div></div>'
      }),
    biPanel({ title:TR('Where support is most needed','الأماكن الأكثر حاجة للدعم'),
      sub:TR('Ordered lowest-first — for support, never a league table','مرتّبة من الأدنى — للدعم لا للترتيب التنافسي'),
      tools:cmpSelect(), flush:true,
      body:kids.length?biCompareRows(node):'<p class="muted small" style="padding:1rem">'+TR('This is the most detailed level.','هذا أكثر المستويات تفصيلًا.')+'</p>'
      }),
    biPanel({ title:TR('System signals','إشارات المنظومة'),
      sub:TR('The two or three things worth acting on right now','أهمّ ما يستحقّ إجراءً الآن'),
      body:adminInsights(node,m,c)
           +'<p class="adm-verdict '+v.tone+'" style="margin:.2rem 0 0"><span class="dot" aria-hidden="true"></span> '+v.label
           +' <span class="muted small" style="font-weight:600">— '+v.line+'</span></p>'
      }),
  ].join('');

  return '<div class="bi-kpis">'+kpis+'</div><div class="bi-grid">'+panels+'</div>'
    + '<p class="bi-foot">'+TR('Counts are scaled to an illustrative 800,000-student pilot; rates, trends and flags are computed from the demo data. Detail lives one click away — open a tier above or a row below.','الأعداد مُقاسة على تجربة توضيحية من ٨٠٠٠٠٠ طالب؛ والنِّسب والاتجاهات والتنبيهات محسوبة من بيانات العرض. التفاصيل بضغطة واحدة — من المستويات أعلاه أو الصفوف أدناه.')+'</p>';
}
/* compare rows, panel-flavoured (reuses the same metric selector semantics as cmpChart) */
function biCompareRows(node){
  const kids=node.children||[]; if(!kids.length) return '';
  const metric=S.cmpMetric||'attendance', riskM=metric==='risk';
  const getv=function(ch){ const cm=metricsFor(ch);
    return metric==='attendance'?cm.attendance:metric==='mastery'?cm.mastery:metric==='teacher'?cm.teacherAttendance:cm.dropoutRiskPct; };
  const toneOf=function(v){ return riskM?(v>=12?'risk':v>=8?'warn':'ok')
    :metric==='mastery'?(v>=65?'ok':v>=50?'warn':'risk')
    :metric==='teacher'?(v>=92?'ok':v>=85?'warn':'risk'):(v>=90?'ok':v>=80?'warn':'risk'); };
  const rows=kids.map(function(ch){ return {ch:ch,v:getv(ch),f:flagSummary(ch)}; })
                 .sort(function(a,b){ return riskM? b.v-a.v : a.v-b.v; });
  const maxv=Math.max.apply(null,rows.map(function(r){return r.v;}).concat([100]));
  return '<div class="bi-cmp">'+rows.map(function(r){
    const hot=r.f.bySev.critical+r.f.bySev.high;
    return '<button type="button" class="bi-cmp-row" data-drill="'+r.ch.id+'">'
      +'<span class="bi-cmp-l" title="'+esc(nodeName(r.ch))+'">'+esc(nodeName(r.ch))+'</span>'
      +'<span class="bi-cmp-t"><i class="'+toneOf(r.v)+'" style="width:'+Math.round(r.v/maxv*100)+'%"></i></span>'
      +'<span class="bi-cmp-v">'+r.v+'%</span>'
      +(hot?'<span class="bi-cmp-f" title="'+TR('critical / high flags','تنبيهات حرجة أو مرتفعة')+'">⚑ '+hot+'</span>':'<span class="bi-cmp-f"></span>')
      +'</button>'; }).join('')+'</div>';
}

/* ---------- pane 2: geographic ---------- */
function biGeo(node,m){
  return renderEgyptInteractiveMap(node)
    + biPanel({ title:TR('Administrative units in scope','الوحدات التابعة في نطاق الإشراف')+' ('+((node.children||[]).length)+')',
        sub:TR('Every row drills one tier deeper — district, school, then classroom','كل صف يتعمّق مستوى — الإدارة ثم المدرسة ثم الفصل'),
        flush:true, body:biUnitTable(node) });
}
function biUnitTable(node){
  const kids=node.children||[];
  const head='<thead><tr>'
    +'<th scope="col">'+childLabel(node.level)+'</th>'
    +'<th scope="col" class="num-cell">'+TR('Students','الطلاب')+'</th>'
    +'<th scope="col" class="num-cell">'+TR('Assessment','التقييم')+'</th>'
    +'<th scope="col" class="num-cell">'+TR('Attendance','الحضور')+'</th>'
    +'<th scope="col" class="num-cell">'+TR('Excused','الأعذار')+'</th>'
    +'<th scope="col" class="num-cell">'+TR('Early warning','الإنذار المبكر')+'</th>'
    +'<th scope="col" class="num-cell">'+TR('QA flags','التنبيهات')+'</th>'
    +'<th scope="col"><span class="sr-only">'+TR('Open','افتح')+'</span></th></tr></thead>';
  let rows='';
  if(kids.length){
    rows=kids.map(function(ch){
      const cm=metricsFor(ch), f=flagSummary(ch), coh=cohortOf(ch), rk=atRiskOf(ch);
      const hot=f.bySev.critical+f.bySev.high;
      return '<tr>'
        +'<th scope="row" style="position:static"><button class="bi-link" data-drill="'+ch.id+'">'+esc(nodeName(ch))+'</button>'
        + (ch.inclusionFocus?' <span class="tag info" title="'+TR('Inclusion programme','برنامج الدمج')+'">♿</span>':'')+'</th>'
        +'<td class="num-cell">'+coh.toLocaleString()+'</td>'
        +'<td class="num-cell"><span class="tag '+(cm.mastery>=65?'ok':cm.mastery>=50?'warn':'risk')+'">'+cm.mastery+'%</span></td>'
        +'<td class="num-cell"><span class="tag '+(cm.attendance>=90?'ok':cm.attendance>=80?'warn':'risk')+'">'+cm.attendance+'%</span></td>'
        +'<td class="num-cell"><span class="tag '+(cm.excusedAbuseRatio>40?'warn':'ok')+'">'+cm.excusedAbuseRatio+'%</span></td>'
        +'<td class="num-cell"><span class="tag '+(cm.dropoutRiskPct>=12?'risk':cm.dropoutRiskPct>=8?'warn':'ok')+'">'+rk.toLocaleString()+' · '+cm.dropoutRiskPct+'%</span></td>'
        +'<td class="num-cell">'+(f.total?'<span class="tag '+(hot?'risk':'info')+'">'+f.total+(hot?' ⚑'+hot:'')+'</span>':'<span class="muted small">—</span>')+'</td>'
        +'<td><button class="btn sec xs" data-drill="'+ch.id+'">'+TR('Open','افتح')+' '+aFwd()+'</button></td></tr>'; }).join('');
  } else if(node.level==='class'){
    rows=node.students.map(function(st){
      const res=calculateDynamicStudentAverage(st,S.dateRange);
      return '<tr>'
        +'<th scope="row" style="position:static">'+(S.reveal?esc(arName(st)):esc(st.code))+'</th>'
        +'<td class="num-cell">1</td>'
        +'<td class="num-cell"><span class="tag '+(res.average>=70?'ok':res.average>=50?'warn':'risk')+'">'+res.average+'%</span></td>'
        +'<td class="num-cell">'+st.att+'%</td>'
        +'<td class="num-cell">'+(st.excusedCount||2)+'</td>'
        +'<td class="num-cell">'+riskTag(st.risk)+'</td>'
        +'<td class="num-cell"><span class="muted small">—</span></td>'
        +'<td><button class="btn xs gold" data-open-student-modal="'+st.id+'">'+uiIcon('search',13)+' '+TR('Ledger','كشف الدرجات')+'</button></td></tr>'; }).join('');
  }
  return '<div class="bi-tbl">'+(rows?'<table>'+head+'<tbody>'+rows+'</tbody></table>'
    :'<p class="muted small" style="padding:1rem">'+TR('Nothing to break down at this level.','لا يوجد تفصيل في هذا المستوى.')+'</p>')+'</div>';
}

/* ---------- pane 3: subjects & equity ---------- */
function biSubjects(node,m){
  const avg=subjectAverages(node);
  const gap=Math.abs(m.masteryNonAcc-m.masteryAcc);
  const cards=SUBJECTS.map(function(su){
    const v=avg[su], tone=v>=65?'ok':v>=50?'warn':'risk';
    const tr=trendFor(node.id+su,v), d=tr[tr.length-1]-tr[0];
    return '<div class="bi-subj '+tone+'">'
      +'<div class="bi-subj-h"><span class="bi-subj-i">'+(SUBJECT_ICON[su]||'')+'</span>'
      +'<strong>'+(S.settings.lang==='ar'?SUBJECTS_AR[su]:su)+'</strong>'
      +'<span class="tag '+tone+'">'+v+'%</span></div>'
      +'<span class="bar '+tone+'"><span style="width:'+v+'%"></span></span>'
      +'<div class="bi-subj-f"><span>'+biAreaSpark(tr,tone,28)+'</span>'
      +'<span class="bi-delta '+(d>=0?'ok':'risk')+'">'+(d>=0?'▲':'▼')+' '+Math.abs(Math.round(d))+' '+TR('pts','نقطة')+'</span></div>'
      +'</div>'; }).join('');
  return '<div class="bi-grid">'
    + biPanel({ span:2, title:TR('Subject mastery matrix','مصفوفة إتقان المواد'),
        sub:TR('Computed only from assessments already past their due date','محسوبة فقط من التقييمات التي انتهى تاريخ استحقاقها'),
        body:'<div class="bi-subj-grid">'+cards+'</div>' })
    + biPanel({ title:TR('Inclusion & accommodations','الدمج والتيسيرات'),
        sub:TR('PDPL-protected · subgroups under 10 students are suppressed','محمية بضوابط الخصوصية · تُحجب المجموعات أقل من ١٠ طلاب'),
        body:'<div class="bi-facts">'
          +'<div><span class="bi-fact-n">'+m.accommodations+'</span><span class="bi-fact-l">'+TR('students with accommodations','طالب لديه تيسيرات')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:var(--info-700)">'+m.masteryAcc+'%</span><span class="bi-fact-l">'+TR('mastery — accommodated','الإتقان — مع تيسيرات')+'</span></div>'
          +'<div><span class="bi-fact-n">'+m.masteryNonAcc+'%</span><span class="bi-fact-l">'+TR('mastery — standard','الإتقان — العام')+'</span></div>'
          +'<div><span class="tag '+(gap>=12?'risk':gap>=6?'warn':'ok')+'">↔ '+gap+' '+TR('pts gap','نقطة فجوة')+'</span></div>'
          +'</div>' })
    + biPanel({ title:TR('Equity breakdown','تفصيل الإنصاف'),
        sub:TR('Change the dimension in the command bar above','غيّر البُعد من شريط الأدوات أعلاه'),
        body:(S.equity==='none'
          ? '<p class="muted small">'+TR('Pick a breakdown — gender, disability, urban/rural, region, class ratio, school size or connectivity — to expose the gap that support should close.','اختر تفصيلًا — النوع أو الإعاقة أو حضر/ريف أو الإقليم أو كثافة الفصل أو حجم المدرسة أو الاتصال — لإظهار الفجوة التي يجب أن يُغلقها الدعم.')+'</p>'
          : equityBlock(node,m)) })
    + biPanel({ span:2, title:TR('Outcome versus readiness','النتيجة مقابل الجاهزية'),
        sub:TR('Low results paired with low resourcing read as a need for support, not blame','النتائج المنخفضة مع موارد أقل تُقرأ كحاجة للدعم لا كلوم'),
        body:quadrantPlot(node)||'<p class="muted small">'+TR('Needs at least two child units to plot.','يحتاج وحدتين فرعيتين على الأقل للرسم.')+'</p>' })
    + '</div>';
}

/* ---------- pane 4: attendance & excuse audit ---------- */
function biAttendance(node,m){
  const fs=flagSummary(node);
  const attFlags=fs.all.filter(function(f){ return f.type==='attendance'||f.type==='excuses'; });
  const week=[97,94,92,89,0];
  return '<div class="bi-grid">'
    + biPanel({ title:TR('Attendance integrity','نزاهة الحضور'),
        sub:TR('Excused absence is a distinct state — never folded into “present”','الغياب بعذر حالة منفصلة — لا تُدمج أبدًا في «حاضر»'),
        body:'<div class="bi-facts">'
          +'<div><span class="bi-fact-n" style="color:var(--ok-700)">'+m.attendance+'%</span><span class="bi-fact-l">'+TR('session attendance','حضور الحصص')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:var(--warn-700)">'+m.excusedAbuseRatio+'%</span><span class="bi-fact-l">'+TR('excused ratio (limit 40%)','نسبة الأعذار (الحد ٤٠%)')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:var(--info-700)">'+m.totalExcused+'</span><span class="bi-fact-l">'+TR('excused sessions','حصة بعذر')+'</span></div>'
          +'<div><span class="bi-fact-n" style="color:var(--purple-700)">'+m.teacherAttendance+'%</span><span class="bi-fact-l">'+TR('teacher attendance','حضور المعلّمين')+'</span></div>'
          +'</div>'
          +'<p class="bi-mini">'+TR('This week, by day','هذا الأسبوع، يوميًّا')+'</p>'
          +'<div class="bi-week">'+week.map(function(v,i){
              const day=[TR('Sun','الأحد'),TR('Mon','الاثنين'),TR('Tue','الثلاثاء'),TR('Wed','الأربعاء'),TR('Thu','الخميس')][i];
              const tone=v===0?'none':v>=95?'ok':v>=90?'warn':'risk';
              return '<div class="bi-week-c"><span class="bi-week-b '+tone+'" style="height:'+(v?Math.max(12,v):8)+'%">'+(v?v+'%':'')+'</span><span class="bi-week-d">'+day+'</span></div>'; }).join('')
          +'</div>' })
    + biPanel({ title:TR('Excuse composition','تركيبة الأعذار'),
        sub:TR('Approved categories behind the excused ratio','الفئات المعتمدة وراء نسبة الأعذار'),
        body:(function(){
          const segs=[{label:TR('Medical (certified)','طبّي (بتقرير)'),v:58,color:'#0284C7'},
                      {label:TR('Sports permits','بطولات رياضية'),v:22,color:'#8B5CF6'},
                      {label:TR('Travel','سفر'),v:12,color:'#F59E0B'},
                      {label:TR('Other approved','أخرى معتمدة'),v:8,color:'#94A3B8'}];
          return biStack(segs)+biLegend(segs)
            +'<p class="bi-note">'+TR('Any school above 40% for two consecutive reporting windows is auto-referred for a records audit.','أي مدرسة تتجاوز ٤٠% لفترتي رصد متتاليتين تُحال آليًّا لتدقيق السجلات.')+'</p>'; })() })
    + biPanel({ span:2, title:TR('Attendance & excuse flags in this scope','تنبيهات الحضور والأعذار في هذا النطاق')+' ('+attFlags.length+')',
        sub:TR('Raised by rules 3 and 4 of the automated detection engine','مرصودة بالقاعدتين ٣ و٤ من محرّك الرصد الآلي'),
        tools:'<button class="btn sec xs" data-bi-tab="flags">'+TR('Full queue','السجل الكامل')+' '+aFwd()+'</button>',
        body:attFlags.length?attFlags.slice(0,6).map(flagRow).join('')
          :'<p class="muted small">'+TR('No attendance irregularities detected in this scope.','لا مخالفات حضور مرصودة في هذا النطاق.')+'</p>' })
    + '</div>';
}

/* ---------- pane 5: the automated QA flag workspace ---------- */
function flagRow(f){
  const sev=FLAG_SEV[f.sev], st=flagStatusOf(f);
  return '<button type="button" class="bi-flagrow sev-'+f.sev+'" data-flag-open="'+f.id+'">'
    +'<span class="bi-flagrow-s">'+sev.ico+'</span>'
    +'<span class="bi-flagrow-m"><strong>'+esc(f.title)+'</strong>'
    +'<span class="bi-flagrow-p">'+uiIcon(FLAG_TYPE[f.type].ico,12)+' '+typeLabel(f.type)+' · '+esc(f.path)+'</span></span>'
    +'<span class="bi-flagrow-r"><span class="tag '+(st==='resolved'?'ok':st==='inprogress'?'info':sev.tone)+'">'+statusLabel(st)+'</span>'
    +'<span class="bi-flagrow-id">'+f.id+'</span></span></button>';
}
function flagCase(f){
  const sev=FLAG_SEV[f.sev], st=flagStatusOf(f), open=S.flagOpen===f.id;
  const breach=f.slaLeft<0;
  const fkey=(f.id+' '+f.title+' '+f.path+' '+f.rule).toLowerCase();
  return '<article class="bi-case sev-'+f.sev+(open?' open':'')+'" id="case-'+f.id+'" data-fkey="'+esc(fkey)+'">'
    +'<header class="bi-case-h">'
    +  '<button type="button" class="bi-case-t" data-flag-open="'+f.id+'" aria-expanded="'+open+'">'
    +    '<span class="bi-case-sev">'+sev.ico+' '+sevLabel(f.sev)+'</span>'
    +    '<span class="bi-case-title">'+esc(f.title)+'</span>'
    +    '<span class="bi-case-chev" aria-hidden="true">'+(open?'▴':'▾')+'</span>'
    +  '</button>'
    +  '<span class="bi-case-meta">'
    +    '<span class="tag '+(st==='resolved'?'ok':st==='inprogress'?'info':sev.tone)+'">'+statusLabel(st)+'</span>'
    +    '<span class="bi-case-id">'+f.id+'</span>'
    +  '</span>'
    +'</header>'
    +'<div class="bi-case-sum">'
    +  '<span class="bi-chip">'+uiIcon(FLAG_TYPE[f.type].ico,12)+' '+typeLabel(f.type)+'</span>'
    +  '<span class="bi-chip">'+uiIcon('map',12)+' '+esc(f.path)+'</span>'
    +  '<span class="bi-chip '+(breach?'hot':'')+'">'+uiIcon('clock',12)+' '
    +    (breach?TR('SLA breached by ','تجاوز المهلة بـ ')+Math.abs(f.slaLeft)+'h':TR('SLA ','المهلة ')+f.slaLeft+'h')+'</span>'
    +  '<span class="bi-chip">'+uiIcon('userCheck',12)+' '+teamLabel(f.type)+'</span>'
    +'</div>'
    +(open?'<div class="bi-case-b">'
      +'<p class="bi-case-rule">'+esc(f.rule)+'</p>'
      +'<p class="bi-case-detail">'+f.detail+'</p>'
      +'<div class="bi-case-metric"><span>'+f.metric.label+'</span>'
      +  '<strong>'+f.metric.value+(f.metric.unit||'')+'</strong>'
      +  '<span class="muted small">'+TR('threshold','الحد')+' '+f.metric.threshold+(f.metric.unit||'')+'</span></div>'
      +'<div class="bi-case-acts">'
      +  f.actions.map(function(a){ return '<button class="btn sec sm" data-flag-act="'+f.id+'" data-flag-act-l="'+esc(TR(a.en,a.ar))+'">'+uiIcon(a.ico,14)+' '+TR(a.en,a.ar)+'</button>'; }).join('')
      +  (f.scopeId&&NODE[f.scopeId]?'<button class="btn sm" data-drill-abs="'+f.scopeId+'">'+uiIcon('eye',14)+' '+TR('Go to scope','الانتقال للنطاق')+'</button>':'')
      +  (st!=='resolved'?'<button class="btn sec sm" data-flag-status="'+f.id+'|resolved">'+uiIcon('check',14)+' '+TR('Mark resolved','إغلاق الحالة')+'</button>'
                        :'<button class="btn sec sm" data-flag-status="'+f.id+'|open">'+uiIcon('refresh',14)+' '+TR('Reopen','إعادة فتح')+'</button>')
      +  (st==='open'?'<button class="btn sec sm" data-flag-status="'+f.id+'|inprogress">'+uiIcon('userCheck',14)+' '+TR('Assign to team','إحالة للفريق')+'</button>':'')
      +'</div></div>':'')
    +'</article>';
}
function biFlags(node){
  const fs=flagSummary(node);
  const list=filteredFlags(node);
  const F=S.flags;
  const sevSegs=SEV_ORDER.map(function(k){ return {label:sevLabel(k), v:fs.bySev[k], color:'var(--'+FLAG_SEV[k].tone+'-700)'}; });
  const chip=function(kind,val,label,count,tone){
    const on=(F[kind]||'all')===val;
    return '<button type="button" class="bi-fchip'+(on?' on':'')+(tone?' '+tone:'')+'" data-flag-filter="'+kind+'|'+val+'" aria-pressed="'+on+'">'
      +label+(count!=null?' <b>'+count+'</b>':'')+'</button>'; };
  return '<div class="bi-kpis">'
    + biKpi({label:TR('Critical · act now','حرجة · إجراء فوري'), num:fs.bySev.critical, tone:'risk',
             ctx:TR('24h SLA · zero-default applied','مهلة ٢٤ ساعة · احتُسبت صفرًا')})
    + biKpi({label:TR('High severity','خطورة مرتفعة'), num:fs.bySev.high, tone:'risk',
             ctx:TR('48h SLA · inflation & records','مهلة ٤٨ ساعة · التضخيم والسجلات')})
    + biKpi({label:TR('Medium · review','متوسّطة · مراجعة'), num:fs.bySev.medium, tone:'warn',
             ctx:TR('variance & excuse ratios','التباين ونسب الأعذار')})
    + biKpi({label:TR('Informational','روتينية'), num:fs.bySev.low, tone:'info',
             ctx:TR('routine statistical cross-checks','فحوص إحصائية روتينية')})
    + biKpi({label:TR('Past SLA','تجاوزت المهلة'), num:fs.breached, tone:fs.breached?'risk':'ok',
             ctx:TR('escalate to the district board','تُصعَّد للإدارة التعليمية')})
    + biKpi({label:TR('Resolved this term','مُغلقة هذا الفصل'), num:fs.resolved, tone:'ok',
             pct:fs.resolutionPct, ctx:fs.resolutionPct+'% '+TR('resolution rate','نسبة الإنجاز')})
    + '</div>'
    + '<div class="bi-grid">'
    + biPanel({ title:TR('Detection rules in force','قواعد الرصد المفعّلة'),
        sub:TR('Five automated rules run on every reporting window','خمس قواعد آلية تُنفَّذ في كل فترة رصد'),
        body:'<ol class="bi-rules">'
          +[['R1','grading',TR('Grades pending &gt; 1 week past the due date — zero-default applied','درجات معلّقة تجاوزت مهلة الأسبوع — تُحتسب صفرًا')],
            ['R2','integrity',TR('A whole class recorded at identical 100% with no variance','فصل كامل بدرجة ١٠٠% متطابقة دون تباين')],
            ['R3','attendance',TR('Statistically improbable attendance — peer outliers and perfect streaks','حضور غير محتمل إحصائيًّا — شواذّ ونِسب كاملة متواصلة')],
            ['R4','excuses',TR('Excused-absence ratio above the 40% ministerial threshold','نسبة الأعذار تتجاوز الحد الوزاري ٤٠%')],
            ['R5','data',TR('Roster duplicates, unverified parent links, stale offline sync','تكرار السجلات وروابط غير مُتحقَّقة ومزامنة متأخرة')]]
            .map(function(r){ return '<li><span class="bi-rid">'+r[0]+'</span><span class="bi-chip">'+uiIcon(FLAG_TYPE[r[1]].ico,12)+' '+typeLabel(r[1])+'</span><span>'+r[2]+'</span><b>'+fs.byType[r[1]]+'</b></li>'; }).join('')
          +'</ol>' })
    + biPanel({ title:TR('Severity mix','توزيع الخطورة'),
        sub:TR('Open cases waiting on a follow-up team','حالات مفتوحة بانتظار فريق المتابعة'),
        body:'<div class="bi-donut-row">'+biDonut(sevSegs, fs.total, TR('open','مفتوحة'))+'<div class="bi-donut-side">'+biLegend(sevSegs)+'</div></div>' })
    + biPanel({ span:2, flush:true,
        title:TR('Follow-up queue','سجل المتابعة')+' · '+list.length+'/'+fs.total,
        sub:TR('Filter by type and severity, then assign, act, and close','صفِّ حسب النوع والخطورة ثم أحِل ونفِّذ وأغلق'),
        tools:'<button class="btn sec xs" data-bi-export="flags">'+uiIcon('download',13)+' CSV</button>',
        body:'<div class="bi-filters">'
          +'<div class="bi-frow"><span class="bi-flab">'+TR('Severity','الخطورة')+'</span>'
          + chip('sev','all',TR('All','الكل'),fs.total)
          + SEV_ORDER.map(function(k){ return chip('sev',k,FLAG_SEV[k].ico+' '+sevLabel(k),fs.bySev[k],'s-'+k); }).join('')
          +'</div>'
          +'<div class="bi-frow"><span class="bi-flab">'+TR('Type','النوع')+'</span>'
          + chip('type','all',TR('All','الكل'),fs.total)
          + TYPE_ORDER.map(function(k){ return chip('type',k,typeLabel(k),fs.byType[k]); }).join('')
          +'</div>'
          +'<div class="bi-frow"><span class="bi-flab">'+TR('Status','الحالة')+'</span>'
          + chip('status','all',TR('All','الكل'))
          + ['open','inprogress','resolved'].map(function(k){ return chip('status',k,statusLabel(k)); }).join('')
          +'<span class="bi-fgrow"></span>'
          +'<label class="sr-only" for="flagq">'+TR('Search flags','بحث في التنبيهات')+'</label>'
          +'<input id="flagq" class="bi-fsearch" type="search" data-flag-q value="'+esc(F.q||'')+'" placeholder="'+TR('Search id, school, rule…','ابحث برقم الحالة أو المدرسة أو القاعدة…')+'">'
          +'<label class="sr-only" for="flagsort">'+TR('Sort','ترتيب')+'</label>'
          +'<select id="flagsort" class="bi-fsort" data-flag-sort>'
          + [['sev',TR('Severity first','الأخطر أولًا')],['sla',TR('SLA urgency','الأقرب للمهلة')],['scope',TR('By scope','حسب النطاق')]]
              .map(function(o){ return '<option value="'+o[0]+'"'+((F.sort||'sev')===o[0]?' selected':'')+'>'+o[1]+'</option>'; }).join('')
          +'</select>'
          +'</div></div>'
          +'<div class="bi-cases">'
          +(list.length?list.slice(0,60).map(flagCase).join('')
            :'<p class="muted small" style="padding:1.2rem">'+TR('No flags match these filters. Clear a filter, or widen the scope with the level rail above.','لا تنبيهات تطابق هذه التصفية. أزل مرشِّحًا أو وسّع النطاق من شريط المستويات أعلاه.')+'</p>')
          +(list.length>60?'<p class="bi-note">'+TR('Showing the 60 most urgent of '+list.length+' matching flags — narrow the scope or filters to see the rest.','يُعرض أهم ٦٠ تنبيهًا من '+arNum(list.length)+' — ضيّق النطاق أو التصفية لرؤية الباقي.')+'</p>':'')
          +'</div>' })
    + '</div>';
}

/* ---------- pane 6: recommendations ---------- */
function biActions(node,m){
  const fs=flagSummary(node);
  const kids=node.children||[];
  const worst=kids.length?kids.map(function(k){return {k:k,m:metricsFor(k)};})
    .sort(function(a,b){return b.m.dropoutRiskPct-a.m.dropoutRiskPct;})[0]:null;
  const acts=[];
  if(fs.bySev.critical) acts.push({tone:'risk',ico:'alert',
    t:TR('Clear the '+fs.bySev.critical+' critical grading breaches first','ابدأ بإغلاق '+arNum(fs.bySev.critical)+' مخالفة رصد حرجة'),
    b:TR('Each one is currently zero-defaulted, which suppresses the assessment average for the whole unit. Dispatch the quality supervisor and grant a single 24-hour extension.','كل حالة منها محتسبة بصفر حاليًّا، وهذا يخفض متوسّط التقييم للوحدة بالكامل. وجِّه الموجّه الفنّي وامنح مهلة ٢٤ ساعة واحدة.'),
    cta:{lbl:TR('Open the queue','فتح السجل'), tab:'flags'}});
  if(worst && worst.m.dropoutRiskPct>=8) acts.push({tone:'warn',ico:'target',
    t:TR('Direct early-warning support to '+nodeName(worst.k),'وجِّه دعم الإنذار المبكر إلى '+nodeName(worst.k)),
    b:TR(worst.m.dropoutRiskPct+'% of that cohort meets the chronic-absence-plus-declining-scores criteria — the highest in this scope. Remedial sessions can be scheduled through the student portal.','يستوفي '+arNum(worst.m.dropoutRiskPct)+'% من طلابها معايير الغياب المزمن مع تراجع الدرجات — الأعلى في هذا النطاق. يمكن جدولة جلسات الدعم عبر بوابة الطالب.'),
    cta:{lbl:TR('Drill into it','التعمّق إليها'), drill:worst.k.id}});
  if(m.onlineShare<80) acts.push({tone:'info',ico:'cloud',
    t:TR('Pre-cache offline content packs for low-connectivity schools','أرسل حزم المحتوى دون اتصال للمدارس ضعيفة الاتصال'),
    b:TR('Only '+m.onlineShare+'% of schools here are reliably connected, and '+m.staleSchools+' have been offline 48h or more. Their results are flagged as understated, never counted as failing.','فقط '+arNum(m.onlineShare)+'% من المدارس هنا متّصلة بثبات، و'+arNum(m.staleSchools)+' منها دون اتصال ٤٨ ساعة أو أكثر. نتائجها موسومة كأقلّ من الواقع، لا محسوبة كإخفاق.')});
  acts.push({tone:'ok',ico:'award',
    t:TR('Expand the teacher-champion model','توسيع نموذج سفراء الجودة'),
    b:TR('Schools running peer champions show a 14% higher on-time submission rate — the single strongest predictor of a clean QA record in this dataset.','المدارس التي تعمل بسفراء تدريب الأقران تُسجّل ارتفاعًا ١٤% في الرصد بالموعد — أقوى مؤشّر منفرد على نظافة سجل الجودة في هذه البيانات.')});
  return '<div class="bi-grid">'
    + biPanel({ span:2, title:TR('Decision support — next best actions','دعم القرار — أفضل الإجراءات التالية'),
        sub:TR('Synthesised from the indicators and flags in the current scope only','مستخلصة من مؤشرات وتنبيهات النطاق الحالي فقط'),
        body:acts.map(function(a){
          return '<div class="bi-act '+a.tone+'"><span class="bi-act-i">'+uiIcon(a.ico,20)+'</span>'
            +'<div><strong>'+a.t+'</strong><p>'+a.b+'</p>'
            +(a.cta?'<button class="btn sec sm" '+(a.cta.tab?'data-bi-tab="'+a.cta.tab+'"':'data-drill="'+a.cta.drill+'"')+'>'+a.cta.lbl+' '+aFwd()+'</button>':'')
            +'</div></div>'; }).join('') })
    + biPanel({ title:TR('Assessment submission funnel','مسار اكتمال الرصد'),
        sub:TR('“Submitted” is not the finish line','«مُرسَل» ليس خط النهاية'),
        body:(function(){
          const st=Math.max(allStudents(node).length,40);
          const r=rng(hashStr('funnel'+node.id));
          const rec=st, val=Math.round(rec*(0.90+r()*0.06)), syn=Math.round(val*(0.86+r()*0.09)), pub=Math.round(syn*(0.90+r()*0.07));
          return [[TR('Received','مُستلَمة'),rec,'info'],[TR('Validated','مُتحقَّق منها'),val,'ok'],
                  [TR('Synced to EMIS','مُزامَنة مع EMIS'),syn,'ok'],[TR('Published to parents','منشورة للأهالي'),pub,'ok']]
            .map(function(s){ const p=Math.round(s[1]/rec*100);
              return '<div class="bi-funnel"><span>'+s[0]+'</span><span class="bar '+s[2]+'"><span style="width:'+p+'%"></span></span><strong>'+p+'%</strong></div>'; }).join('')
            +'<p class="bi-note">'+TR('The gap between received and published is where a pilot actually lives. Offline and paper records appear as received-and-pending, never as missing.','الفجوة بين المُستلَم والمنشور هي حيث تعيش التجربة فعلًا. تظهر سجلّات الورق ودون اتصال كمُستلَمة وبانتظار المزامنة، لا كمفقودة.')+'</p>'; })() })
    + biPanel({ title:TR('Export & distribute','التصدير والتوزيع'),
        sub:TR('Everything on this dashboard, scoped to your authority level','كل ما في هذه اللوحة، في حدود صلاحيتك'),
        body:'<div class="bi-exports">'
          +'<button class="btn sec sm" data-goto-view="reports">'+uiIcon('grading',14)+' '+TR('Report builder','منشئ التقارير')+'</button>'
          +'<button class="btn sec sm" data-bi-export="csv">'+uiIcon('download',14)+' '+TR('Indicators CSV','مؤشرات CSV')+'</button>'
          +'<button class="btn sec sm" data-bi-export="flags">'+uiIcon('download',14)+' '+TR('QA flags CSV','تنبيهات CSV')+'</button>'
          +'<button class="btn sec sm" data-bi-print>'+uiIcon('print',14)+' '+TR('Print brief','طباعة الملخّص')+'</button>'
          +'</div>' })
    + '</div>';
}

/* kept for backwards compatibility: the old entry point now routes to the panes */
function adminFullAnalyticsView(node, m){
  m = m || metricsFor(node);
  return biPaneFor(node,m);
}
function biPaneFor(node,m){
  switch(biTab()){
    case 'geo':        return biGeo(node,m);
    case 'subjects':   return biSubjects(node,m);
    case 'attendance': return biAttendance(node,m);
    case 'flags':      return biFlags(node);
    case 'actions':    return biActions(node,m);
    default:           return biOverview(node,m);
  }
}

/* ---------- the oversight route: one BI shell for every tier ---------- */
function adminOversight(){
  const node=adminScopeNode();
  const m=metricsFor(node);
  const isClass=node.level==='class';
  return '<div class="bi-shell'+(S.biDensity==='compact'?' compact':'')+'">'
    + roleBar()
    + biCommandBar(node)
    + '<div class="bi-head">'
    +   '<div><p class="eyebrow">'+levelLabel(node.level)+(isClass?' · '+TR('Grade','الصف')+' '+(S.settings.lang==='ar'?arNum(node.grade):node.grade):'')+'</p>'
    +   '<h1>'+esc(nodeName(node))+'</h1>'
    +   '<p class="bi-head-sub">'+TR('Read-only oversight · support, not surveillance · no rankings','للعرض فقط · متابعة ودعم لا رقابة · بدون ترتيب تنافسي')+'</p></div>'
    +   (isClass?'<button class="btn '+(S.reveal?'':'sec')+' sm" data-reveal="'+(S.reveal?0:1)+'" aria-pressed="'+S.reveal+'">'
    +     uiIcon(S.reveal?'eye':'lock',14)+' '+(S.reveal?TR('Hide names','إخفاء الأسماء'):TR('Reveal names','إظهار الأسماء'))+'</button>':'')
    + '</div>'
    + (isClass?(S.reveal
        ? '<p class="bi-privacy risk">'+uiIcon('eye',14)+' '+TR('Identifiable view — this access is recorded in the audit log.','عرض يكشف الهوية — يُسجَّل هذا الوصول في سجلّ التدقيق.')+'</p>'
        : '<p class="bi-privacy info">'+uiIcon('lock',14)+' '+TR('Privacy by default — names are hidden. Identifiable data needs a reason and is logged.','الخصوصية افتراضيًّا — الأسماء مخفية. تتطلّب البيانات الكاشفة للهوية سببًا وتُسجَّل.')+'</p>'):'')
    + biTabs(node)
    + '<div class="bi-pane" role="tabpanel">'+biPaneFor(node,m)+'</div>'
    + (isClass?auditPanel():'')
    + '</div>';
}

function auditPanel(){
  if(!S.auditLog.length) return '';
  return `<section class="card mt2" aria-label="${TR('Access audit log','سجلّ تدقيق الوصول')}">
    <p class="eyebrow">${TR('Access audit log','سجلّ تدقيق الوصول')}</p>
    <p class="small muted">${TR('Every reveal of identifiable data is recorded — who, what, when.','يُسجَّل كلّ كشف لبيانات تكشف الهوية — مَن، وماذا، ومتى.')}</p>
    <ul class="small" style="margin:0;padding-inline-start:1.1rem">
      ${S.auditLog.slice(-6).reverse().map(a=>`<li>${esc(a)}</li>`).join('')}
    </ul></section>`;
}

/* ----- pilot monitoring: readiness diagnostic + 5 indicator families ----- */
function pilotView(){
  const ind=[
    {h:TR('Accessibility performance','أداء إمكانية الوصول'),items:[[TR('WCAG 2.2 AA audit pass rate','نسبة اجتياز تدقيق WCAG 2.2 AA'),'94%','ok'],[TR('Assistive-tech test sessions completed','جلسات اختبار التقنيات المساعِدة المكتملة'),'38 / 40','ok'],[TR('Content available in accessible formats','المحتوى بصيغ ميسّرة'),'71%','warn']]},
    {h:TR('Operational reliability','الموثوقية التشغيلية'),items:[[TR('Uptime (pilot schools)','زمن التشغيل (مدارس التجربة)'),'99.6%','ok'],[TR('Low-bandwidth load success','نجاح التحميل بنطاق منخفض'),'91%','ok'],[TR('Assessment draft-preservation rate','نسبة حفظ مسوّدات التقييم'),'99.9%','ok'],[TR('Offline sync success','نجاح المزامنة دون اتصال'),'88%','warn']]},
    {h:TR('System data availability','توفّر بيانات النظام'),items:[[TR('Classes with weekly activity','فصول بها نشاط أسبوعي'),'82%','ok'],[TR('Attendance data on time','بيانات حضور واردة في وقتها'),'76%','warn'],[TR('Assessment data on time','بيانات تقييم واردة في وقتها'),'69%','warn'],[TR('Pedagogical change (observed)','تغيّر تربوي (مُلاحَظ)'),TR('tracked','يُتابَع'),'info']]},
    {h:TR('Student participation & equity','مشاركة الطلاب والإنصاف'),items:[[TR('Assessment completion','إكمال التقييم'),'84%','ok'],[TR('Dropout-risk follow-ups closed','متابعات مؤشر الإنذار المبكر المُغلقة'),'61%','warn'],[TR('Gap girls vs boys','الفجوة بين البنات والبنين'),TR('+2 pts','+2 نقطة'),'ok'],[TR('Gap accommodations vs none','فجوة ذوي التيسيرات مقابل غيرهم'),TR('-9 pts','-9 نقاط'),'warn']]},
    {h:TR('Learning & continuity','التعلّم والاستمرارية'),items:[[TR('Short-cycle assessment trend','اتّجاه التقييم قصير الدورة'),'▲ +3.1','ok'],[TR('Absenteeism change','تغيّر التغيّب'),TR('▼ -1.4 pp','▼ -1.4 ن.م'),'ok'],[TR('Median intervention response','وسيط زمن الاستجابة للتدخّل'),TR('4 days','4 أيام'),'warn']]},
  ];
  const readiness=[
    [TR('Mindset & buy-in','العقلية والقبول'),true],[TR('Budget secured','تأمين الميزانية'),true],[TR('Infrastructure & electricity','البنية التحتية والكهرباء'),false],
    [TR('Device access','توفّر الأجهزة'),false],[TR('Connectivity quality','جودة الاتصال'),false],[TR('Human capacity & training','القدرة البشرية والتدريب'),true],
    [TR('Digital resource quality','جودة الموارد الرقمية'),true],[TR('Helpdesk & support','مكتب المساعدة والدعم'),true],
  ];
  const ready=readiness.filter(r=>r[1]).length;
  return `
  <div class="page-head"><div><p class="eyebrow">${t('pilot')}</p><h1>${TR('Pilot with intent to scale','تجربة بهدف التوسّع')}</h1>
  <p class="muted small" style="margin:0">${TR('A structured pilot across diverse schools — not a single national switch-on. Prove the workflow, verify accessibility with real users, then phase by governorate.','تجربة منظّمة عبر مدارس متنوّعة — لا تشغيل وطني دفعة واحدة. أثبت سير العمل، وتحقّق من إمكانية الوصول مع مستخدمين حقيقيين، ثمّ توسّع تدريجيًّا حسب المديرية.')}</p></div></div>

  <div class="row" style="align-items:stretch">
    <section class="card" style="flex:1;min-width:280px">
      <p class="eyebrow">${TR('Readiness diagnostic','تشخيص الجاهزية')} · ${ready}/${readiness.length} ${TR('conditions met','شرط مُستوفى')}</p>
      <h2 style="margin:.2rem 0 .6rem">${TR('Before any rollout','قبل أيّ تعميم')}</h2>
      <ul style="list-style:none;padding:0;margin:0">
        ${readiness.map(([k,ok])=>`<li class="flex between center" style="padding:.4rem 0;border-bottom:1px solid var(--line)">
          <span>${esc(k)}</span>${ok?TR('<span class="tag ok">✓ Ready</span>','<span class="tag ok">✓ جاهز</span>'):TR('<span class="tag warn">● Needs work</span>','<span class="tag warn">● يحتاج عملًا</span>')}</li>`).join('')}
      </ul>
    </section>
    <section class="card" style="flex:1;min-width:280px">
      <p class="eyebrow">${TR('Deliberately diverse cohort','مجموعة متنوّعة عن قصد')}</p>
      <h2 style="margin:.2rem 0 .6rem">${TR('Pilot schools','مدارس التجربة')}</h2>
      <ul class="small" style="padding-inline-start:1.1rem;margin:0">
        <li class="mb">${TR('High- and low-connectivity schools side by side','مدارس عالية وضعيفة الاتصال جنبًا إلى جنب')}</li>
        <li class="mb">${TR('Schools already active in inclusion (Upper Egypt) + new ones','مدارس ناشطة في الدمج (صعيد مصر) + أخرى جديدة')}</li>
        <li class="mb">${TR('Schools with heavy administrative load','مدارس ذات عبء إداري ثقيل')}</li>
        <li>${TR('Each school: initial training + in-school coaching + repeated support (not webinars alone)','كلّ مدرسة: تدريب أوّلي + إرشاد داخل المدرسة + دعم متكرّر (لا ندوات عن بُعد وحدها)')}</li>
      </ul>
      <p class="tag info mt">${TR('Early-warning lesson: a dashboard helps when it pairs clear risk info with a specific action — proven to cut dropout at ~US$2–3/student.','درس الإنذار المبكّر: تنفع اللوحة حين تقرن معلومة الخطر الواضحة بإجراء محدّد — ثبت أنّها تقلّل التسرّب بكلفة ~2–3 دولار/طالب.')}</p>
    </section>
  </div>

  <h2 class="mt2">${TR('Indicators tracked from day one','مؤشّرات تُتابَع من اليوم الأوّل')}</h2>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(260px,1fr))">
    ${ind.map(g=>`<section class="card"><h3 style="margin-top:0">${g.h}</h3>
      <table><caption class="sr-only">${g.h}</caption><tbody>
      ${g.items.map(([k,v,tone])=>`<tr><th scope="row" style="position:static;font-weight:600">${esc(k)}</th>
        <td style="text-align:end"><span class="tag ${tone}">${esc(v)}</span></td></tr>`).join('')}
      </tbody></table></section>`).join('')}
  </div>`;
}
/* ===================== OFFLINE-SCHOOL COORDINATOR (separate upload flow) ===================== */
/* ===================== DEVELOPER NOTES (per-page rationale) =====================
   Collapsed under every page. For each page: WHY it exists, the ESSENCE that must not
   break, WHAT'S DRIVING it, the EMIS / integration touchpoints, and the TESTING that
   matters. Grounded in the project briefs (OneRoster 1.2, LTI 1.3 Advantage incl. AGS/
   NRPS, SCIM, xAPI, Ed-Fi ODS) and the architecture Q&A acceptance criteria.
   Toggle off in Settings for stakeholder demos. */
const PAGE_NOTES={
 'login':{
   why:`First screen; routes each role to the right portal and demonstrates the sign-in itself.`,
   essence:`No CAPTCHA, puzzles, or memory tests. National-ID + one-time SMS code; copy-paste and password managers allowed; works on shared and low-cost devices. Signing in must never block a low-literacy or disabled user.`,
   driver:`WCAG 2.2 §3.3.8 (accessible authentication); a large share of users are first-time device users.`,
   emis:`Auth delegates to EMIS as the SOLE Identity Provider via OAuth 2.0 / OpenID Connect — the app never stores passwords. Accounts and the student/teacher/parent role are provisioned from EMIS + ministry IAM through SCIM. Parent/citizen verification can later align with Egypt's national digital identity platform where policy permits.`,
   testing:`Keyboard-only + screen-reader sign-in; OTP flow on a basic feature phone; password-manager / paste autofill; correct role-based redirect; shared-device session isolation (logout leaves no personal data on the device).`,
   decisions:`Hand-written CSS + vanilla JS, no framework or external fonts — keeps it fast and fully offline on cheap devices over weak links. In-memory prototype; production needs a service worker + IndexedDB for persistence and sync.`},
 'teacher:dashboard':{
   why:`The teacher's home — surfaces only the few actions that matter, grouped by how often they are done (every day / each week / now and then).`,
   essence:`Must make the teacher's week shorter, not add work. No rankings or teacher-vs-teacher comparison. Stacked frequency-band layout, not paging.`,
   driver:`Adoption dies if the tool feels like extra reporting or surveillance; it replaces the paper registers, it does not run beside them. Teacher feedback asked to remove guilt-inducing analytics.`,
   emis:`Read-only class and teacher-assignment context from EMIS (OneRoster rostering / LTI NRPS). This screen writes nothing back.`,
   testing:`Acceptance: ≤3 taps from opening to the first action; no struggling-student list or diagnostic is pushed at the teacher; no comparison/ranking; renders on a low-end Android width; full EN/AR + RTL.`,
   decisions:`The optional class diagnostic and the "students to check on" list were REMOVED from the dashboard on teacher feedback (they read as guilt/surveillance); per-student context still lives in the Students tab, which the teacher opens deliberately. Grow & support is kept but clearly optional and not tracked.`},
 'teacher:attendance':{
   why:`Daily attendance — the single highest-frequency task in the system.`,
   essence:`Exceptions-only: everyone is present by default; you mark only the few away/late. Live count + defaults keep it to seconds. Never weaken the attendance stakes.`,
   driver:`Principle 5 — weekly assessments tied to attendance keep children in school. Speed is what makes daily entry actually happen.`,
   emis:`CRITICAL boundary: the LMS captures attendance only as ENGAGEMENT EVIDENCE. It emits an attendance event (e.g. attendance.evidence.captured, validationState: "pending-school-review") to EMIS, which remains the system of record for OFFICIAL attendance. Never let convenience data overwrite the legally significant register.`,
   testing:`Works at zero connectivity (queues locally with timestamp, auto-retries, never loses data); exceptions-only default; all-present safety prompt; live count matches the DOM; submitting keeps you on-page; emitted event validates against the attendance evidence contract.`,
   decisions:`Tap buttons, not a slider — dragging fails WCAG 2.5.7, invites overshoot, and Present→Late→Absent isn’t an ordered scale. Default-present + a live count + a “half the class away” check catch errors without slowing the common case.`},
 'teacher:assessments':{
   why:`Assessment results, where the teacher's mark is authoritative; a few in-app quizzes are auto-marked and only suggest a score.`,
   essence:`Manual grading is the DEFAULT — the teacher enters each mark into blank fields (a blank means not graded). The auto-marked column appears ONLY when the assessment is a genuine in-app quiz; even then the auto figure is a suggestion the teacher can change. The teacher's mark is always the recorded result and the teacher always has full agency. Separate from formal exam marks (Gradebook). Releasing is deliberate — parents only ever see released results.`,
   driver:`Only a few assessments can be auto-graded; most are human-judged (paper, oral, class work). Defaulting to manual respects that reality and never imposes a machine score the teacher didn't choose.`,
   emis:`Formative results live in the LMS and post a formative.result.posted / score event carrying the AUTHORITATIVE (manual) mark; for auto-marked quizzes the machine suggestion is retained as metadata, not the result. High-stakes summative exams belong to the official assessment platform. Third-party tool scores flow back via LTI AGS. Score states are versioned (provisional → published) so a release is an explicit state change, never an overwrite.`,
   testing:`Default mode is manual with blank, editable fields and no auto column; switching to "in-app quiz" reveals the auto suggestion (pre-filled, still editable); manual and auto marks use separate keys so they never collide; blank = ungraded; "release" gates parent visibility; no teacher penalty from anomaly flags.`,
   decisions:`Reframed on instruction: manual is the default, and the automatic column only shows when the assessment is actually automated (an in-app quiz). A mode toggle (Manual marks / In-app quiz · auto-marked) makes this explicit; manual fields start blank rather than pre-filled, so no machine score is implied where none was earned. Teachers can always change any score. Still fully separate from the exam Gradebook; no essay auto-marking.`},
 'teacher:gradebook':{
   why:`Manual entry of formal exam / paper-test scores, labelled by which exam they belong to.`,
   essence:`Fast entry on a pre-loaded roster with autosave and immutable timestamps. Boxes start EMPTY (no assumed score), and a review step confirms accuracy before submitting. Each batch is tagged with exam type + date for reporting. Distinct from the auto-marked quizzes.`,
   driver:`Replaces double paper-register entry; the exam type/date metadata is what makes national, comparable reporting possible.`,
   emis:`Finalised summative grades push to EMIS via OneRoster Gradebook Services / LTI AGS for the national transcript (closed loop). The exam type + date should map to the official assessment / exam-session id. Entry timestamp, sync timestamp and full modification history are mandatory for the audit trail.`,
   testing:`Acceptance: 55 scores < 5 min; default-100 + range rejection (0–100, keep previous value on bad input — WCAG 3.3.4); autosave; submit blocked until exam type + date are set; immutable timestamp + edit history logged; data model supports the optional random photo-of-paper verification.`,
   decisions:`Boxes start empty rather than defaulting to 100, so nothing is auto-inflated; before submitting, the teacher sees a review summary (how many scored, how many blank) and confirms. One score per student/subject today — multi-exam reporting needs an examType+date schema.`},
 'teacher:students':{
   why:`A plain overview of the class — attendance, assessment and exam score per student, and nothing more.`,
   essence:`Numbers only, no judgement: no status lights, no faces, no "needs help", no suggestions, no notes, no share-a-lesson, no drill-in. It exists to inform at a glance, not to imply a task or apply pressure. Scoped to the teacher's own subject.`,
   driver:`Teacher feedback: any support/flagging language on this screen reads as guilt or surveillance. An overview reduces pressure; action stays the teacher's own offline choice.`,
   emis:`Roster and accommodations come from EMIS; accommodation data is sensitive under PDPL — minimal, encrypted, never synced to third-party tools. Nothing on this screen writes back.`,
   testing:`RBAC enforced at the API (a teacher cannot read another teacher's class even via direct call); only attendance/assessment/exam shown; no status, suggestion, or ranking text appears; "—" shown for ungraded exams; EN/AR + RTL.`,
   decisions:`Reduced to an overview-only table on teacher feedback — the per-student detail page (traffic-light status, "needs support", share-a-lesson, private notes, prev/next) was REMOVED to take pressure off teachers. Assessment = in-app quiz performance; Exam = entered exam marks.`},
 'student:home':{
   why:`Student landing — pick a subject and start learning.`,
   essence:`Icon-driven, minimal text, large touch targets, read-aloud — many students have never used a device. Shared-device ready: quick login/out, no personal data persists on the device.`,
   driver:`First-time-user and shared-device reality. Rule: if a step needs heavy reading, a private device, or internet, redesign it.`,
   emis:`Identity and enrolment come from EMIS — the national student ID links everything and is loaded (nightly) into the roster, never retyped. Shared-device sessions are isolated with no persistent personal data.`,
   testing:`Icon-only comprehension with a non-reader; 44px minimum targets; quick login/logout leaves no data behind; renders fully offline; read-aloud works in EN/AR.`,
   decisions:`No percentages, standing grades, or “needs help” on the student side — progress shows only as accomplishment, to protect confidence and buy-in. The frank picture lives on the teacher/admin side.`},
 'student:subject':{
   why:`One subject's lessons, with the week's lesson first.`,
   essence:`Current-week unit is highlighted and first, but nothing is locked. The quiz is offered only on the current-week unit (avoids overload). Two tabs only — Lessons and Saved. Every lesson shows a clear "available offline" indicator; the Saved tab gives storage agency (a usage meter and one-tap free-up).`,
   driver:`Low cognitive load; offline-first content delivered by SD card / peer-to-peer; weekly cadence set by the teacher. On budget Android, storage is scarce — the learner must see and control what the app keeps.`,
   emis:`Curriculum units are mapped to standards (each question linked to a learning goal). Content is delivered as offline bundles (SD / device-to-device), not via OneRoster. Engagement is emitted as xAPI statements to the Learning Record Store.`,
   testing:`Current-week-first ordering; nothing locked; quiz only on the current unit; exactly two tabs; works fully offline from cache; the offline-availability indicator is visible per lesson; the storage meter and "remove all saved" free space; xAPI statements emitted for opens/attempts.`,
   decisions:`The quiz lives on the current-week unit; lessons are never locked. Added on best-practice review (Kolibri/Moodle): a per-lesson "available offline" badge — the clearest signal of what a student can study without internet — plus a Saved-tab storage meter, per-item and bulk delete, and a note that lessons save in a light, low-data form. Sizes shown are illustrative; production reports real bytes.`},
 'student:reader':{
   why:`The actual lesson content a student reads/does.`,
   essence:`Works fully offline. Text and exercises come before any video; read-aloud and reading-spacing are available. Nothing streams.`,
   driver:`2G and affordability reality — video must never be required to learn.`,
   emis:`Content is served from the repository (EKB / PDF / H5P), pre-cached on the device or the school edge node; interactions are emitted as xAPI to the LRS. No live cloud dependency during the lesson.`,
   testing:`Opens with zero connectivity from cache; text/exercises render before video; read-aloud + spacing; resume state within a shared-device session; xAPI experienced/answered statements fire.`,
   decisions:`Standard text + read-aloud, with no separate “easy-read” mode. If a simplified version is wanted later, label it neutrally (e.g. “Simple version”) — plain-language text is a recognised accessibility accommodation.`},
 'parent:verify':{
   why:`First-time gate shown before ANY child data, with navigation hidden.`,
   essence:`Confirms the EMIS parent↔child binding before exposing data; "No" locks access and routes to the school. This is the single biggest guard against the wrong family seeing a child.`,
   driver:`Children's data is sensitive under PDPL; mis-bound guardian links are the #1 scandal risk. The binding lives in EMIS and is never self-claimed in the app.`,
   emis:`The parent↔child relationship is READ from EMIS / IAM (delegated parent role) — the app never creates or edits it. Verification is National-ID + OTP to the EMIS-registered number, with possible future alignment to the national digital identity platform.`,
   testing:`Gate blocks all data until confirmed; "No" locks and routes to school with nothing shown; stale-number and mis-bound cases; the confirmation is audit-logged; binding accuracy is measured against a hard threshold before any national rollout.`,
   decisions:`A gate before any data, released-only labels, and a dispute path guard the two scandal risks: the wrong parent seeing the wrong child (binding) and misread data (confusion). Ship SMS first; open the portal only after a guardian-link audit, and go national only once binding accuracy is proven.`},
 'parent:home':{
   why:`Low-literacy overview of one child — the parent channel that needs no app (SMS is the primary channel).`,
   essence:`A calm, factual overview only — attendance, assessment results, and quiz results. No risk flags, no "needs help", no sad faces, no "visit the school" alarms. Faces, icons and read-aloud aid low-literacy parents; only released/published data is shown, each with an "as of" date. A neutral "tell the school" link covers wrong-child / data errors. Read-aloud defaults ON but never autoplays — it speaks only after the parent's first tap.`,
   driver:`Most parents of grades 1–9 won't install an app, and many read with difficulty. Transparency aids attendance recovery and makes grade-suppression visible. Audio must help without exposing the parent.`,
   emis:`Read-only published data from EMIS/LMS; minimal PDPL fields only (attendance, released scores, class average — never addresses, IDs, or disability). The SMS gateway sends an automated message after each published submission with the score and class average — the portal must show exactly what the SMS says.`,
   testing:`Only released data shows; status + as-of labels present; dispute routes to the school; SMS/portal parity; read-aloud in EN/AR; NO audio plays before a user gesture; first-run choice is picture-based; mute is one tap.`,
   decisions:`Reframed on instruction to remove anything that could scare a parent: the traffic-light "How is X?" status, "needs help"/"at risk" wording, sad faces, and "visit the school" prompts are gone. The portal is a neutral overview of three things only — attendance, assessment results, quiz results — using plain numbers and neutral bars; serious-case contact stays with the teacher/school, not an alarming dashboard. Parents pull (check the portal) rather than being pushed routine SMS. Read-aloud is the DEFAULT mode but is dignity-first: (1) the portal already works with no reading (icons/numbers/dot-grid); (2) a first-run picture choice — 🔊 "Read to me" vs 📖 "I'll read" — lets the parent decide rather than assuming illiteracy, and the question itself is spoken; (3) audio NEVER autoplays — the first sound waits for the parent's first tap (public-space dignity + browser autoplay policy), then each page reads its short summary on open; (4) an always-visible one-tap mute for public places, plus a headphones hint. Rejected: autoplaying audio on load (embarrassing in public, and browser-blocked anyway).`},
 'parent:marks':{
   why:`A parent's view of their child's results.`,
   essence:`Everything is labelled "Weekly practice" vs official, and only released results show. Reading a provisional practice score as a final grade is the other scandal vector, so labels + a dispute button are mandatory.`,
   driver:`Released-only + status/date labelling keeps a non-event from becoming a complaint.`,
   emis:`Shows only the "published" score state (states are versioned provisional → published in the LMS/AGS); provisional marks are never exposed. Grade lineage stays auditable for disputes.`,
   testing:`Weekly-practice vs official labelling; released-only gating; dispute button works; the number matches the official record / the returned paper.`,
   decisions:`Released-only, with “Weekly practice vs Official” and “as of [date]” labels, so a provisional score is never mistaken for a final grade. Keep the dispute button.`},
 'parent:attendance':{
   why:`A parent's view of their child's attendance.`,
   essence:`Simple dot-grid with an "as of" date. Absence is framed supportively (how to help), never punitively. The school contacts the family directly only in serious cases.`,
   driver:`Attendance visibility is a key driver of return-to-school; tone matters as much as the number.`,
   emis:`Shows the OFFICIAL, school-validated attendance from EMIS — not the raw LMS engagement evidence. The two are modelled and reconciled separately on purpose.`,
   testing:`As-of date present; supportive tone; the figure shown is the validated official record, not unvalidated evidence; read-aloud.`,
   decisions:`Absence is framed supportively, never punitively, to keep families on-side.`},
 'parent:messages':{
   why:`Messages from the school to the family.`,
   essence:`School-initiated only in meaningful cases; otherwise the parent reads at their own pace. No free parent↔teacher chat in the pilot.`,
   driver:`Keeps the channel trustworthy and low-noise; avoids overwhelming low-literacy families.`,
   emis:`Notifications originate from LMS/EMIS events (e.g. result published, repeated absence) via the SMS gateway; the portal mirrors them. No ad-hoc messaging store in the pilot.`,
   testing:`No free-text parent reply path; delivery/receipt of school messages; bilingual; read-aloud.`,
   decisions:`No free parent↔teacher chat in the pilot — it keeps the channel low-noise and trustworthy.`},
 'admin:oversight':{
   why:`Read-only oversight that leads with the macro picture, then lets the user drill to detail: Ministry → Governorate → Idara → School → Class → Student.`,
   essence:`Built on dashboard best practice — three layers: OVERVIEW (summary KPIs + verdict), COMPARE (diagnostic bar chart + breakdowns), DETAIL (drill table / roster). Macro shows first (5-second rule); ≤7 KPIs each carrying a target and a 6-week trend (sparkline + delta), not bare numbers; semantic colour paired with icons/text (never colour alone); progressive disclosure via dropdown navigation and a collapsible detail panel. Every role starts at its own macro level. Comparison is framed as support, not a league table. Rosters pseudonymised by default; revealing names is audit-logged. Disaggregation across ministry-relevant equity dimensions — gender, disability/accommodations, urban vs rural, region (Urban/Lower/Upper/Frontier), student–teacher ratio, school size, and connectivity (online/offline) — each shown as grouped bars with a gap chip, framed for support not ranking. Demo spans all 27 governorates. Access enforced at the API. Offline/paper classes show as "pending sync", never "missing".`,
   driver:`Senior officials need the big picture in seconds and the detail on demand — grounded in South Africa's Data Driven Districts dashboard and Egypt's SEER Decision-Support Dashboard. PDPL data-minimisation + UNESCO SDG-4 equity; oversight must never become teacher-shaming or ranking.`,
   emis:`Aggregates are read from the Ed-Fi ODS / analytics lakehouse: EMIS pushes enrolment, official attendance and teacher assignments; the LMS pushes outcomes and xAPI telemetry; the ODS surfaces OneRoster endpoints. Access is least-privilege by geography/role/case (zero-trust).`,
   testing:`K-anonymity suppresses any subgroup < 10 students (PDPL); revealing PII opens a DPO/PDPL confirmation modal before the audit entry; framed-insight alerts + offline-school monitoring render; equity dumbbell/dot plots carry SVG title/desc + a text legend; the Priority-Support-Zones quadrant pairs outcome with readiness; a breadcrumb gives one-tap-up navigation. Macro hero + verdict + KPI tiles render at every level and for every role; "Go deeper" drill descends one level per tap; breadcrumb climbs back; API-level RBAC (a principal cannot see another school via direct call); reveal-names writes an audit entry; disaggregation math; offline/paper classes read as "pending sync".`,
   decisions:`Redesigned to global dashboard best practice (three-layer summary→diagnostic→detail; 5-second rule; visual hierarchy; ≤7 KPIs; comparative context; semantic colour; progressive disclosure). Navigation is by dropdown cascade (Governorate→District→School→Class) plus a "break down by" aspect menu — not card-hunting. OVERVIEW leads with a health verdict and KPI tiles that each carry a target and a 6-week trend (sparkline + ▲/▼ delta in points). COMPARE adds a horizontal bar chart of the children on a selectable metric, ordered to surface where support is most needed (explicitly "for support, not a league table") with strongest / needs-most-support callouts. DETAIL is a right-aligned, scannable table with per-row drill; completion detail is collapsed. Counts scale to an illustrative 800,000-student cohort and are labelled as such. Equity now spans all 27 governorates and goes beyond gender/disability to the dimensions a ministry acts on — urban vs rural, region, student–teacher ratio, school size/density and connectivity — because the platform\'s whole premise is closing gaps for low-connectivity and rural/Upper-Egypt schools, so the oversight view must make those gaps visible (counts scale to the 800k cohort; gaps are demo-shaped but directionally realistic). "By teacher" remains support/PD only, never public ranking. Names pseudonymised by default; reveals audit-logged.`},
 'admin:pilot':{
   why:`Pilot readiness and indicator families for the Secondary-1 launch cohort.`,
   essence:`Tracks rollout health and the five indicator families — for readiness, not for ranking schools.`,
   driver:`Staged national rollout: measure binding accuracy and completion before scaling.`,
   emis:`Readiness draws on the nightly reconciliation / data-quality jobs (guardian-link accuracy, roster and parent-phone completeness, submission completion). Indicator families feed the national decision-support dashboards.`,
   testing:`Indicator computation; data-quality thresholds gate go/no-go; no school ranking surface; reconciliation discrepancies are visible.`,
   decisions:`Built for readiness, not for ranking schools.`},
 'admin:control':{
   why:`Tracks every record across its real lifecycle — received → validated → synced to EMIS → published to parents — instead of stopping at \u201csubmitted.\u201d`,
   essence:`The four states stay distinct; offline/paper records show as received-and-pending, never missing. The story is the drop-off between received and published, not the totals.`,
   driver:`A national pilot is managed by chasing where records stall, not by counting submissions (review decision #15).`,
   emis:`States map to the integration pipeline: validation + reconciliation jobs, the OneRoster/AGS write to EMIS (\u201csynced\u201d), and the release/publish step to the parent channel. Mock numbers here; production reads real per-record timestamps.`,
   testing:`Each stage count derives from real events; pending/offline never reads as missing; percentages reconcile; scope follows the breadcrumb.`,
   decisions:`\u201cSubmitted\u201d is not the finish line — four explicit states make stalls visible. Read-only; no ranking.`},
 'admin:dataquality':{
   why:`Surfaces the data problems that make every learning number meaningless — before the learning dashboard, not after.`,
   essence:`Roster and link errors outrank low scores. Unverified parent links and stale phones gate parent visibility; suspicious all-100 classes route to support, never penalty.`,
   driver:`Dirty data is the real failure mode of a national rollout; this is a go/no-go gate (review decision #16).`,
   emis:`Issues come from nightly reconciliation / data-quality jobs against EMIS (guardian-link accuracy, roster completeness, duplicate detection, sync backlog). Mock here; production reads the real jobs.`,
   testing:`Each issue computes from real checks; unverified-link count actually blocks parent marks; counts reconcile with the control panel; thresholds gate go/no-go.`,
   decisions:`Data quality is shown before learning numbers and acts as a gate, not a vanity metric. Flags trigger support, never punishment.`},
 'coordinator':{
   why:`A separate flow for offline schools to enter and upload paper records on behalf of many teachers.`,
   essence:`Pre-load everything (never type names); attendance is exceptions-only; assessment defaults to 100; one confirmation per class; save-on-device then batch-upload when connected; every record dual-logged (subject teacher + coordinator).`,
   driver:`Tiered no-device process; offline-first queue-and-retry; keeps offline schools visible as "pending sync" rather than absent.`,
   emis:`Mirrors the school EDGE-NODE pattern: records queue locally and flush to EMIS/LMS on the nightly sync or when a connection appears. Each upload is an attendance-evidence / formative-result event with dual attribution and validationState "pending-school-review" — it never overwrites official records directly.`,
   testing:`Queue-and-retry never loses data; offline→online flush; re-entry overwrites (dedupe) rather than duplicates; dual-ID attribution present; ~10-teacher scale; bilingual.`,
   decisions:`A separate door, not a teacher mode, because offline schools operate differently. Pre-load everything, exceptions-only attendance, default-100 assessment, one confirmation per class (not per student), and per class×subject rows so one coordinator can cover many teachers. Save-on-device then batch-upload is simply an offline Submit. Never free-type names or re-key present students.`},
 'coordinator:entry':{
   why:`The transcription screen for one class (attendance) or one subject (assessment).`,
   essence:`Names are pre-loaded in register order so matching is visual, not typed. Attendance is exceptions-only; assessment starts every student at 100 (lower only the lower ones). A single "matches the paper register" confirmation gates the save.`,
   driver:`One coordinator may cover ~10 teachers — minimise keystrokes or the rollout quietly dies.`,
   emis:`Roster and the teacher↔subject↔class assignments come from EMIS (OneRoster / NRPS); the coordinator never creates identities. The saved record carries the official class/subject/teacher ids so EMIS can reconcile it on sync.`,
   testing:`Pre-loaded register order; exceptions-only attendance; default-100 assessment; single confirmation gates save; range validation; summary/average correctness; re-entry overwrites the prior pending record.`,
   decisions:`Mirrors the teacher’s fast entry: register-order names (no typing), exceptions-only attendance, default-100 scores, and one “matches the paper register” confirmation as the attestation — the random photo-of-paper check is the real integrity backstop.`},
 'training':{
   why:`Picture-based how-to for each role.`,
   essence:`Minimal text, visual, fully skippable. Onboarding never blocks use of the product.`,
   driver:`First-time users across every role.`,
   emis:`None — static onboarding content, no EMIS data.`,
   testing:`Skippable and replayable; never blocks the product; image alt text; bilingual.`,
   decisions:`Always skippable and never blocks the product.`},
 'settings':{
   why:`Accessibility and language controls, reachable from any screen.`,
   essence:`Text size, contrast, motion, reading spacing, read-aloud, EN/AR (with RTL), plus this developer-notes toggle. In-memory; affects only Manassa and follows the device.`,
   driver:`Accessibility-first (WCAG 2.2 AA) — users must be able to self-serve adjustments anywhere.`,
   emis:`None — device-local preferences held in memory; no EMIS data and nothing synced.`,
   testing:`Each toggle applies live and persists across navigation within the session; reset works; RTL flips correctly; high-contrast meets WCAG contrast ratios; affects only Manassa.`,
   decisions:`Toggles add to the device’s accessibility settings and never override the OS. A dark theme, a dyslexia font (needs an external font, which breaks offline), and numeral conversion were left out as added risk for little gain.`},
};
function devNoteKey(){
  if(S.settingsOpen) return 'settings';
  if(S.route==='login') return 'login';
  if(S.route==='student'){ if(S.contentOpen) return 'student:reader'; if(S.view==='training') return 'training'; if(S.view==='subject') return 'student:subject'; return 'student:'+(S.view||'home'); }
  if(S.route==='parent'){ if(S.parentVerified!==true) return 'parent:verify'; if(S.view==='training') return 'training'; return 'parent:'+(S.view||'home'); }
  if(S.route==='teacher'){ if(S.view==='training') return 'training'; return 'teacher:'+(S.view||'dashboard'); }
  if(S.route==='leader'){ if(S.view==='training') return 'training'; return 'leader:'+(S.view||'dashboard'); }
  if(S.route==='admin'){ if(S.view==='training') return 'training'; return 'admin:'+(S.view||'oversight'); }
  if(S.route==='control'){ return S.control.securityPassed ? 'control:'+(S.view||'grades') : 'control:security'; }
  if(S.route==='coordinator'){ return S.coord.entry?'coordinator:entry':'coordinator'; }
  return '';
}
function devNote(){
  if(!S.settings.devNotes) return '';
  const n=PAGE_NOTES[devNoteKey()]; if(!n) return '';
  const row=(lbl,val)=> val?`<p><strong>${lbl}.</strong> ${val}</p>`:'';
  return `<details class="devnote">
    <summary>🛠 ${TR('Developer note — why this page exists','ملاحظة للمطوّر — لماذا توجد هذه الصفحة')}</summary>
    ${row(TR('Purpose','الغرض'), n.why)}
    ${row(TR('Essence — don’t break','الجوهر — لا تُخِلّ به'), n.essence)}
    ${row(TR('What’s driving it','ما الذي يدفعه'), n.driver)}
    ${row(TR('Design decisions &amp; rejected paths','قرارات التصميم والبدائل المرفوضة'), n.decisions)}
    ${row(TR('EMIS &amp; integration','التكامل مع EMIS'), n.emis)}
    ${row(TR('Testing to cover','اختبارات مطلوبة'), n.testing)}
  </details>`;
}
function coordShell(inner){
  return `${appbar()}<main id="main" tabindex="-1"><div class="wrap">${inner}${devNote()}</div></main>${a11yPanel()}`;
}
function coordSchool(){
  return Object.values(NODE).find(n=>n.level==='school'&&n.lowConn) || Object.values(NODE).find(n=>n.level==='school');
}
function coordClasses(){
  const sch=coordSchool(); const r=rng(hashStr(sch.id+'co'));
  return (sch.children||[]).map(c=>{ const fn=pick(r,FIRST), sn=pick(r,SURNAMES);
    return {id:c.id, teacherEn:fn+' '+sn, teacherAr:(FIRST_AR[fn]||fn)+' '+(SURNAMES_AR[sn]||sn), n:c.students.length}; });
}
// one assessment row per class × subject — each subject has its own teacher (a coordinator covers many)
function coordSubjectRows(){
  const rows=[];
  coordClasses().forEach(c=>SUBJECTS.forEach(su=>{ const r=rng(hashStr(c.id+su)); const fn=pick(r,FIRST), sn=pick(r,SURNAMES);
    rows.push({classId:c.id, subject:su, teacherEn:fn+' '+sn, teacherAr:(FIRST_AR[fn]||fn)+' '+(SURNAMES_AR[sn]||sn)}); }));
  return rows;
}
function coordSubjTeacher(classId, subject){ return coordSubjectRows().find(r=>r.classId===classId&&r.subject===subject)||{}; }

/* ============ OFFLINE-SCHOOL CSV FALLBACK (last resort) ============ */
function csvCell(v){ v=String(v==null?'':v); return /[",\n\r]/.test(v)?'"'+v.replace(/"/g,'""')+'"':v; }
function csvParseLine(line){ const out=[]; let cur='',q=false; for(let i=0;i<line.length;i++){ const ch=line[i]; if(q){ if(ch==='"'){ if(line[i+1]==='"'){cur+='"';i++;} else q=false; } else cur+=ch; } else { if(ch===','){out.push(cur);cur='';} else if(ch==='"'){q=true;} else cur+=ch; } } out.push(cur); return out; }
function coordRoster(classId){ const n=NODE[classId]; return (n&&n.students)?n.students:[]; }
function stuName(st){ return st.name||st.nameEn||arName(st)||st.id; }
function coordCsvTemplate(classId){
  const head=['Student ID','Student Name','Attendance (present/late/absent/excused)','Score (0-100)'];
  const lines=[head.map(csvCell).join(',')];
  coordRoster(classId).forEach(st=>lines.push([st.id, stuName(st), '', ''].map(csvCell).join(',')));
  return lines.join('\r\n');
}
function coordCsvSample(classId){
  const roster=coordRoster(classId);
  const lines=[['Student ID','Student Name','Attendance','Score'].map(csvCell).join(',')];
  const atts=['present','present','late','absent','present','excused'];
  roster.forEach((st,i)=>{ let att=atts[i%atts.length], score=String(58+((i*9)%40));
    if(i===2) att='here';     // invalid attendance value
    if(i===4) score='120';    // out-of-range score
    lines.push([st.id, stuName(st), att, score].map(csvCell).join(','));
  });
  lines.push(['EG-S1-999999','Ghost Student','present','80'].map(csvCell).join(',')); // not in roster
  if(roster[0]) lines.push([roster[0].id, stuName(roster[0]), 'present','77'].map(csvCell).join(',')); // duplicate
  return lines.join('\r\n');
}
function coordCsvParse(text, classId){
  const roster=coordRoster(classId); const rmap={}; roster.forEach(st=>rmap[String(st.id).trim()]=st);
  const seen={}; const rows=[]; const ATT=new Set(['present','late','absent','excused']);
  const lines=String(text).split(/\r?\n/).filter(l=>l.trim().length);
  lines.slice(1).forEach(line=>{
    const c=csvParseLine(line); const id=(c[0]||'').trim(), name=(c[1]||'').trim();
    let att=(c[2]||'').trim().toLowerCase(), score=(c[3]||'').trim();
    const errs=[];
    if(!id) errs.push(TR('missing ID','معرّف مفقود'));
    else if(!rmap[id]) errs.push(TR('ID not in this class','المعرّف ليس في هذا الفصل'));
    else if(seen[id]) errs.push(TR('duplicate row','صفّ مكرّر'));
    if(att && !ATT.has(att)) errs.push(TR('bad attendance value','قيمة حضور غير صالحة'));
    if(score!==''){ const n=Number(score); if(!isFinite(n)||n<0||n>100) errs.push(TR('score out of range','الدرجة خارج النطاق')); }
    if(att==='' && score==='') errs.push(TR('nothing entered','لا إدخال'));
    if(id) seen[id]=true;
    rows.push({id,name,att,score,ok:errs.length===0,errs});
  });
  const okIds=new Set(rows.filter(r=>r.ok).map(r=>r.id));
  const missing=roster.filter(st=>!okIds.has(String(st.id).trim()));
  return {rows, missing};
}
function applyCsvParse(text, name){
  const cid=S.coord.csv.classId; const res=coordCsvParse(text,cid);
  S.coord.csv.rows=res.rows; S.coord.csv.parsed=res; S.coord.csv.fileName=name; S.coord.csv.stage='preview'; S.coord.csv.signoff=false;
  render(); focusMain();
}
function coordCsvView(){
  if(!S.coord.csv){ S.coord.csv={open:true, classId:(coordClasses()[0]||{}).id, stage:'idle', rows:[], parsed:null, fileName:null, signoff:false}; }
  const csv=S.coord.csv; const classes=coordClasses(); const cid=csv.classId||classes[0].id;
  const preview=csv.stage==='preview';
  const okCount=preview?csv.rows.filter(r=>r.ok).length:0, badCount=preview?csv.rows.filter(r=>!r.ok).length:0;
  return `
  <button class="btn ghost sm" data-coord-choose style="margin-bottom:.6rem">${aBack()} ${TR('Choose a different method','اختر طريقة أخرى')}</button>
  <div class="page-head"><div><p class="eyebrow">📄 ${TR('Spreadsheet fallback (last resort)','بديل جدول البيانات (الملاذ الأخير)')}</p>
    <h1>${TR('Paper → CSV → upload','ورق ← CSV ← رفع')}</h1>
    <p class="muted small" style="margin:0;max-width:70ch">${TR('For schools where the app cannot run at all. Download a ready-made class sheet, fill it on any computer with Excel, then upload it here — the system checks every row against the roster before anything is saved.','للمدارس التي يتعذّر فيها تشغيل التطبيق نهائيًّا. نزّل ورقة فصل جاهزة، املأها على أيّ حاسوب به Excel، ثمّ ارفعها هنا — يفحص النظام كلّ صفّ مقابل الكشف قبل أيّ حفظ.')}</p></div></div>

  <div class="calm mb" style="background:var(--warn-050);border-color:var(--warn-700)"><span class="em" aria-hidden="true">⚠️</span><span>${TR('Use this only if the offline app cannot be used — the app is safer (it validates as you type and never loses data). A loose spreadsheet of names and marks is sensitive: keep it inside this app, never email it or copy it to a USB stick, and delete your copy once it is uploaded.','استخدم هذا فقط إذا تعذّر استخدام التطبيق — فالتطبيق أأمن (يتحقّق أثناء الكتابة ولا يفقد البيانات). وجدول الأسماء والدرجات حسّاس: أبقِه داخل هذا التطبيق، ولا ترسله بالبريد أو نسخة USB، واحذف نسختك بعد الرفع.')}</span></div>

  <details class="card mb" open><summary style="cursor:pointer;font-weight:800">${TR('Policy & procedure (read first)','السياسة والإجراء (اقرأ أولًا)')}</summary>
    <ol class="small" style="margin:.6rem 0 0;padding-inline-start:1.2rem;line-height:1.75">
      <li>${TR('Download the pre-filled template for the class. Student IDs and names are already in it — do not change them; that link is what maps every row back to the right child.','نزّل القالب الجاهز للفصل. المعرّفات والأسماء موجودة — لا تغيّرها؛ فهذا الربط يُعيد كلّ صفّ إلى الطالب الصحيح.')}</li>
      <li>${TR('Fill only the Attendance and Score columns. Attendance must be present, late, absent or excused; scores are 0–100.','املأ عمودَي الحضور والدرجة فقط. الحضور: present/late/absent/excused؛ والدرجات 0–100.')}</li>
      <li>${TR('Keep the file inside this app. Do not email it, share it, or copy it to a USB drive.','أبقِ الملف داخل هذا التطبيق. لا ترسله أو تشاركه أو تنسخه إلى USB.')}</li>
      <li>${TR('Upload it here. Every row is checked against the official EMIS class roster; bad rows are rejected with a reason.','ارفعه هنا. يُفحص كلّ صفّ مقابل كشف الفصل الرسمي من EMIS؛ وتُرفض الصفوف الخاطئة مع السبب.')}</li>
      <li>${TR('Review the preview, get the principal’s sign-off (a second authorised person), then confirm. Only valid rows are saved.','راجع المعاينة، واحصل على اعتماد المدير (شخص ثانٍ مخوّل)، ثمّ أكّد. تُحفظ الصفوف الصحيحة فقط.')}</li>
      <li>${TR('Delete your local copy of the file after the upload is confirmed.','احذف نسختك المحلّية من الملف بعد تأكيد الرفع.')}</li>
    </ol>
    <p class="tiny muted" style="margin:.6rem 0 0">${TR('Data protection: the file holds student personal data and is treated as confidential under the data-protection policy (PDPL). The upload is recorded with who, when and which device; the imported file is retained per policy and then purged. The same maker–checker and audit rules as the rest of the system apply.','حماية البيانات: يحوي الملف بيانات شخصية للطلاب ويُعامَل كسرّي وفق سياسة حماية البيانات. ويُسجَّل الرفع بمن ومتى وأيّ جهاز؛ ويُحتفظ بالملف وفق السياسة ثمّ يُمحى. وتنطبق قواعد «المُقدِّم والمُعتمِد» والتدقيق نفسها.')}</p>
  </details>

  <div class="card mb"><p class="eyebrow">1 · ${TR('Download the class template','نزّل قالب الفصل')}</p>
    <div class="flex wrapw" style="gap:.6rem;align-items:flex-end">
      <div class="field" style="margin:0;min-width:220px"><label for="csv-class">${TR('Class','الفصل')}</label>
        <select id="csv-class" data-csv-class style="width:100%">${classes.map(c=>`<option value="${c.id}" ${cid===c.id?'selected':''}>${esc(nodeName(NODE[c.id]))}</option>`).join('')}</select></div>
      <button class="btn" data-csv-download>⬇️ ${TR('Download template (CSV)','نزّل القالب (CSV)')}</button>
    </div>
    <p class="small muted mt">${TR('Opens in Excel or any spreadsheet. The ID and name columns are filled for you — you only complete attendance and score.','يفتح في Excel أو أيّ جدول. عمودا المعرّف والاسم مُعبّآن — تكمل أنت الحضور والدرجة فقط.')}</p>
  </div>

  <div class="card mb"><p class="eyebrow">2 · ${TR('Upload & check','ارفع وتحقّق')}</p>
    <div class="flex wrapw" style="gap:.6rem;align-items:center">
      <label class="btn sec" style="cursor:pointer">📤 ${TR('Choose CSV file','اختر ملف CSV')}<input type="file" accept=".csv,text/csv" data-csv-file style="display:none"></label>
      <button class="btn ghost" data-csv-sample>${TR('Load a sample completed file (demo)','حمّل ملفًا نموذجيًّا مكتملًا (عرض)')}</button>
      ${csv.fileName?`<span class="small muted">📄 ${esc(csv.fileName)}</span>`:''}
    </div>
  </div>

  ${preview?`<div class="card" style="border-inline-start:6px solid var(--${badCount?'warn':'ok'}-700)">
    <p class="eyebrow">3 · ${TR('Review before saving','راجع قبل الحفظ')}</p>
    <p style="margin:.2rem 0 .5rem"><strong>${okCount} ${TR('rows ready','صفّ جاهز')}</strong>${badCount?` · <strong style="color:var(--risk-700)">${badCount} ${TR('with problems','به مشكلات')}</strong>`:''}${csv.parsed&&csv.parsed.missing.length?` · <span class="muted">${csv.parsed.missing.length} ${TR('students have no row','طالب بلا صفّ')}</span>`:''}</p>
    <div class="tbl-scroll"><table><thead><tr><th>${TR('ID','المعرّف')}</th><th>${TR('Name','الاسم')}</th><th>${TR('Attendance','الحضور')}</th><th>${TR('Score','الدرجة')}</th><th>${TR('Status','الحالة')}</th></tr></thead>
      <tbody>${csv.rows.map(r=>`<tr style="${r.ok?'':'background:var(--risk-050)'}"><td style="font-variant-numeric:tabular-nums">${esc(r.id)}</td><td>${esc(r.name)}</td><td>${esc(r.att)}</td><td>${esc(r.score)}</td><td>${r.ok?`<span class="tag ok">✓ ${TR('OK','سليم')}</span>`:`<span class="tag risk">${r.errs.map(esc).join('، ')}</span>`}</td></tr>`).join('')}</tbody></table></div>
    ${badCount?`<p class="small muted mt">${TR('Rows with problems will not be saved. Fix them in the sheet and upload again, or continue with the valid rows only.','الصفوف ذات المشكلات لن تُحفظ. صحّحها في الورقة وارفع مجددًا، أو تابع بالصفوف الصحيحة فقط.')}</p>`:''}
    <label class="flex" style="gap:.5rem;align-items:flex-start;margin:.7rem 0"><input type="checkbox" data-csv-signoff ${csv.signoff?'checked':''}> <span class="small">${TR('The principal (or a second authorised person) has reviewed and approved this import.','راجع المدير (أو شخص ثانٍ مخوّل) هذا الاستيراد واعتمده.')}</span></label>
    <div class="flex wrapw" style="gap:.6rem">
      <button class="btn" data-csv-confirm ${(okCount&&csv.signoff)?'':'disabled style="opacity:.5"'}>✓ ${TR('Confirm & save valid rows','أكّد واحفظ الصفوف الصحيحة')} (${okCount})</button>
      <button class="btn ghost" data-csv-reset>${TR('Discard','تجاهل')}</button>
    </div>
    <p class="tiny muted mt">${TR('On confirm, the valid rows are queued like any other offline record and uploaded with your next “Upload all”. The import — file name, row counts, who confirmed and the sign-off — is written to the audit log.','عند التأكيد، تُدرَج الصفوف الصحيحة كأيّ سجلّ دون اتصال وتُرفع مع «رفع الكلّ» التالي. ويُكتب الاستيراد — اسم الملف والأعداد ومن أكّد والاعتماد — في سجلّ التدقيق.')}</p>
  </div>`:''}
  `;
}

function coordChooseView(){
  const sch=coordSchool(); const on=S.coord.online;
  return `
  <div class="page-head"><div>
    <p class="eyebrow"><span aria-hidden="true">📶</span> ${TR('Limited-connectivity school','مدرسة ذات اتصال محدود')} · ${esc(nodeName(sch))}</p>
    <h1>${TR('How would you like to enter the records?','كيف تريد إدخال السجلّات؟')}</h1>
    <p class="muted small" style="margin:0;max-width:64ch">${TR('Choose the way that suits you — you can switch any time. Either way, records save on this device and upload to the Ministry when there’s a connection.','اختر ما يناسبك — يمكنك التبديل في أيّ وقت. وفي الحالتين تُحفظ السجلّات على هذا الجهاز وتُرفع إلى الوزارة عند توفّر اتصال.')}</p>
  </div></div>
  <p class="small ${on?'':'muted'}" style="margin:-.4rem 0 1rem">${on?'🟢 '+TR('Online — ready to upload','متصل — جاهز للرفع'):'🔴 '+TR('Offline — you can still enter; it uploads later','غير متصل — يمكنك الإدخال؛ ويُرفع لاحقًا')}</p>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(290px,1fr));gap:1.2rem">
    <div class="card" style="display:flex;flex-direction:column;border:2px solid var(--teal-700)">
      <span class="tag ok" style="align-self:flex-start">${TR('Recommended','مُستحسَن')}</span>
      <p style="font-size:2.6rem;line-height:1;margin:.4rem 0 .2rem" aria-hidden="true">📝</p>
      <strong style="font-size:1.25rem">${TR('Enter directly in the system','الإدخال مباشرةً في النظام')}</strong>
      <p class="small muted" style="margin:.4rem 0 .5rem">${TR('Type each teacher’s paper records into simple forms here. Best for everyday use.','اكتب سجلّات كلّ معلّم الورقية في نماذج بسيطة هنا. الأفضل للاستخدام اليومي.')}</p>
      <ul class="small" style="margin:0 0 1rem;padding-inline-start:1.1rem;line-height:1.7">
        <li>${TR('Checks values as you type','يتحقّق من القيم أثناء الكتابة')}</li>
        <li>${TR('Saves instantly on the device','يُحفظ فورًا على الجهاز')}</li>
        <li>${TR('Nothing to download or carry around','لا شيء لتنزيله أو حمله')}</li>
      </ul>
      <button class="btn" data-coord-mode="system" style="margin-top:auto;justify-content:center">${TR('Enter in the system','أدخِل في النظام')} ${aFwd()}</button>
    </div>
    <div class="card" style="display:flex;flex-direction:column">
      <span class="tag" style="align-self:flex-start;background:var(--warn-050);color:var(--warn-700)">${TR('For spreadsheets','للجداول')}</span>
      <p style="font-size:2.6rem;line-height:1;margin:.4rem 0 .2rem" aria-hidden="true">📄</p>
      <strong style="font-size:1.25rem">${TR('Upload a spreadsheet (Excel / CSV)','رفع جدول بيانات (Excel / CSV)')}</strong>
      <p class="small muted" style="margin:.4rem 0 .5rem">${TR('If you already collected marks in Excel. Download a ready class sheet, fill it, then upload and confirm.','إن كنت قد جمعت الدرجات في Excel. نزّل ورقة فصل جاهزة، املأها، ثمّ ارفعها وأكّدها.')}</p>
      <ul class="small" style="margin:0 0 1rem;padding-inline-start:1.1rem;line-height:1.7">
        <li>${TR('Every row checked against the class roster','يُفحص كلّ صفّ مقابل كشف الفصل')}</li>
        <li>${TR('Principal sign-off before saving','اعتماد المدير قبل الحفظ')}</li>
        <li>${TR('Includes a data-protection policy','يتضمّن سياسة حماية البيانات')}</li>
      </ul>
      <button class="btn sec" data-coord-mode="upload" style="margin-top:auto;justify-content:center">${TR('Use spreadsheet upload','استخدم رفع الجدول')} ${aFwd()}</button>
    </div>
  </div>`;
}
function coordView(){
  if(S.coord.entry) return coordEntryView(S.coord.entry.classId, S.coord.entry.kind, S.coord.entry.subject);
  if(S.coord.mode==='upload') return coordCsvView();
  if(S.coord.mode!=='system') return coordChooseView();
  const sch=coordSchool(); const on=S.coord.online;
  const q=S.coord.queue; const pending=q.filter(i=>!i.synced); const synced=q.filter(i=>i.synced);
  const classes=coordClasses();
  const queuedAtt=(cid)=>q.some(i=>i.classId===cid && i.kind==='attendance' && !i.synced);
  const queuedAsm=(cid,su)=>q.some(i=>i.classId===cid && i.kind==='assessment' && i.subject===su && !i.synced);
  const kindLabel=k=>k==='attendance'?TR('Attendance','الحضور'):k==='csv'?TR('Spreadsheet import','استيراد جدول'):TR('Assessment','التقييم');
  const subjL=su=>S.settings.lang==='ar'?SUBJECTS_AR[su]:su;
  const subjRows=coordSubjectRows();
  return `
  <div class="page-head"><div>
    <p class="eyebrow"><span aria-hidden="true">📶</span> ${TR('Limited-connectivity school','مدرسة ذات اتصال محدود')} · ${esc(nodeName(sch))}</p>
    <h1>${TR('Enter &amp; upload from paper','الإدخال والرفع من الورق')}</h1>
    <p class="muted small" style="margin:0">${TR('A separate, simple flow for schools with no reliable internet. You enter the paper records for every teacher here — they save on this device and upload together when there’s a connection.','مسار منفصل وبسيط للمدارس بلا إنترنت موثوق. تُدخِل هنا السجلّات الورقية لكلّ المعلّمين — تُحفظ على هذا الجهاز وتُرفع معًا عند توفّر اتصال.')}</p>
  </div></div>

  <div class="card mb" style="border-inline-start:6px solid var(--${on?'ok':'warn'}-700)">
    <div class="flex between center wrapw" style="gap:.6rem">
      <div><p class="eyebrow" style="margin:0">${TR('Connection','الاتصال')}</p>
        <strong style="font-size:1.1rem">${on?('🟢 '+TR('Online — ready to upload','متصل — جاهز للرفع')):('🔴 '+TR('Offline — saving on device','غير متصل — يُحفظ على الجهاز'))}</strong></div>
      <button class="btn ${on?'sec':''}" data-coord-conn>${on?TR('Simulate losing connection','محاكاة فقدان الاتصال'):TR('Simulate finding connection','محاكاة إيجاد اتصال')}</button>
    </div>
    <p class="small muted" style="margin:.4rem 0 0">${TR('On a real device this is detected automatically — nothing here is ever lost while offline.','على جهاز حقيقي يُكتشف هذا تلقائيًّا — ولا يُفقد شيء هنا أثناء عدم الاتصال.')}</p>
  </div>

  <div class="flex between center wrapw mb" style="gap:.5rem">
    <span class="tag ok">📝 ${TR('Entering directly in the system','الإدخال مباشرةً في النظام')}</span>
    <button class="btn ghost sm" data-coord-choose>↻ ${TR('Change method','تغيير الطريقة')}</button>
  </div>

  <div class="grid mb" style="grid-template-columns:repeat(auto-fit,minmax(180px,1fr))">
    <div class="card"><p class="eyebrow" style="margin:0">1</p><strong>${TR('Collect on paper','اجمع على الورق')}</strong><p class="small muted" style="margin:.2rem 0 0">${TR('Teachers take attendance and run the assessment on paper, as usual.','يسجّل المعلّمون الحضور ويجرون التقييم على الورق كالمعتاد.')}</p></div>
    <div class="card"><p class="eyebrow" style="margin:0">2</p><strong>${TR('Enter &amp; save on device','أدخِل واحفظ على الجهاز')}</strong><p class="small muted" style="margin:.2rem 0 0">${TR('You type each paper record here. It saves on this device right away — no internet needed.','تُدخِل كلّ سجلّ ورقي هنا. يُحفظ على هذا الجهاز فورًا — دون إنترنت.')}</p></div>
    <div class="card"><p class="eyebrow" style="margin:0">3</p><strong>${TR('Upload when connected','ارفع عند الاتصال')}</strong><p class="small muted" style="margin:.2rem 0 0">${TR('One “Upload” sends everything saved to the Ministry — like a teacher’s Submit, just delayed until you have signal.','«رفع» واحد يُرسل كلّ المحفوظ إلى الوزارة — مثل «إرسال» المعلّم، لكن مؤجّلًا حتى يتوفّر اتصال.')}</p></div>
  </div>

  <h2>${TR('Attendance','الحضور')} <span class="muted" style="font-weight:400;font-size:1rem">${TR('— one per class','— واحد لكلّ فصل')}</span></h2>
  <div class="tbl-scroll mb">
    <table><caption class="sr-only">${TR('Attendance to enter, one row per class','حضور لإدخاله، صفّ لكلّ فصل')}</caption>
    <thead><tr><th scope="col">${TR('Class','الفصل')}</th><th scope="col">${TR('On behalf of (class teacher)','نيابةً عن (معلّم الفصل)')}</th><th scope="col">${TR('Action','إجراء')}</th></tr></thead>
    <tbody>
    ${classes.map(c=>{const node=NODE[c.id]; const tName=S.settings.lang==='ar'?c.teacherAr:c.teacherEn;
      return `<tr>
        <th scope="row" style="position:static">${esc(nodeName(node))} <span class="muted small">· ${c.n} ${TR('students','طالب')}</span></th>
        <td>${esc(tName)}</td>
        <td>${queuedAtt(c.id)?`<span class="tag ok">✓ ${TR('Saved on device','محفوظ على الجهاز')}</span> <button class="btn ghost sm" data-coord-open="attendance" data-cls="${c.id}">${TR('Edit','تعديل')}</button>`:`<button class="btn sec sm" data-coord-open="attendance" data-cls="${c.id}">${TR('Enter','أدخِل')}</button>`}</td>
      </tr>`;}).join('')}
    </tbody></table>
  </div>

  <h2>${TR('Assessment','التقييم')} <span class="muted" style="font-weight:400;font-size:1rem">${TR('— one per subject, for each subject’s teacher','— واحد لكلّ مادة، لمعلّم كلّ مادة')}</span></h2>
  <p class="small muted" style="margin:-.2rem 0 .6rem">${TR('You may be entering for many teachers. Each row is one teacher’s subject.','قد تُدخِل نيابةً عن عدّة معلّمين. كلّ صفّ هو مادة معلّم واحد.')}</p>
  <div class="tbl-scroll mb">
    <table><caption class="sr-only">${TR('Assessment to enter, one row per subject per class','تقييم لإدخاله، صفّ لكلّ مادة في كلّ فصل')}</caption>
    <thead><tr><th scope="col">${TR('Class','الفصل')}</th><th scope="col">${TR('Subject','المادة')}</th><th scope="col">${TR('On behalf of (teacher)','نيابةً عن (المعلّم)')}</th><th scope="col">${TR('Action','إجراء')}</th></tr></thead>
    <tbody>
    ${subjRows.map(rw=>{const node=NODE[rw.classId]; const tName=S.settings.lang==='ar'?rw.teacherAr:rw.teacherEn;
      return `<tr>
        <th scope="row" style="position:static">${esc(nodeName(node))}</th>
        <td>${esc(subjL(rw.subject))}</td>
        <td>${esc(tName)}</td>
        <td>${queuedAsm(rw.classId,rw.subject)?`<span class="tag ok">✓ ${TR('Saved on device','محفوظ على الجهاز')}</span> <button class="btn ghost sm" data-coord-open="assessment" data-cls="${rw.classId}" data-subj="${rw.subject}">${TR('Edit','تعديل')}</button>`:`<button class="btn sec sm" data-coord-open="assessment" data-cls="${rw.classId}" data-subj="${rw.subject}">${TR('Enter','أدخِل')}</button>`}</td>
      </tr>`;}).join('')}
    </tbody></table>
  </div>

  <section class="card" aria-label="${TR('Upload','الرفع')}" style="border-inline-start:6px solid var(--info-700)">
    <div class="flex between center wrapw" style="gap:.6rem">
      <div><p class="eyebrow" style="margin:0">${TR('Saved on this device','محفوظ على هذا الجهاز')}</p>
        <strong style="font-size:1.05rem">${pending.length} ${TR('record(s) ready to upload','سجلّ جاهز للرفع')}</strong></div>
      <button class="btn" data-coord-sync ${pending.length?'':'disabled style="opacity:.5"'}>⬆ ${TR('Upload all now','ارفع الكلّ الآن')}</button>
    </div>
    <p class="small muted" style="margin:.4rem 0 .2rem">${TR('“Save” keeps a record on this device. “Upload” sends every saved record to the Ministry at once — the same thing a teacher’s “Submit” does online, just batched and delayed until you have a connection.','«حفظ» يُبقي السجلّ على هذا الجهاز. «رفع» يُرسل كلّ سجلّ محفوظ إلى الوزارة دفعة واحدة — وهو نفس ما يفعله «إرسال» المعلّم عبر الإنترنت، لكن مجمَّعًا ومؤجّلًا حتى يتوفّر اتصال.')}</p>
    ${pending.length?`<ul class="small" style="margin:.5rem 0 0;padding-inline-start:1.1rem">
      ${pending.map(i=>`<li>${kindLabel(i.kind)}${i.subject?' · '+esc(subjL(i.subject)):''} · ${esc(nodeName(NODE[i.classId]))}${i.summary?` · <strong>${esc(i.summary)}</strong>`:''} · <span class="muted">${TR('on behalf of','نيابةً عن')} ${esc(S.settings.lang==='ar'?i.teacherAr:i.teacherEn)}</span></li>`).join('')}
    </ul>`:`<p class="small muted" style="margin:.4rem 0 0">${TR('Nothing saved yet. Enter a record above and it appears here.','لا شيء محفوظ بعد. أدخِل سجلًّا أعلاه ليظهر هنا.')}</p>`}
    ${!on&&pending.length?`<p class="tag warn mt">⏳ ${TR('No connection — saved safely, will upload automatically when connected.','لا اتصال — محفوظ بأمان، وسيُرفع تلقائيًّا عند الاتصال.')}</p>`:''}
    ${synced.length?`<p class="tag ok mt">✓ ${synced.length} ${TR('record(s) uploaded this session.','سجلّ تمّ رفعه في هذه الجلسة.')}</p>`:''}
    <p class="small muted mt">${TR('Each upload is logged twice — the subject teacher it belongs to, and the coordinator who entered it — so it stays accurate and auditable.','يُسجَّل كلّ رفع مرّتين — معلّم المادة صاحب السجلّ، والمنسّق الذي أدخله — ليبقى دقيقًا وقابلًا للتدقيق.')}</p>
  </section>
  ${S.coord.lastReceipt?`<section class="card mt" aria-label="${TR('Upload receipt','إيصال الرفع')}" style="border-inline-start:6px solid var(--ok-700)">
    <p class="eyebrow" style="margin:0 0 .3rem">🧾 ${TR('Upload receipt','إيصال الرفع')}</p>
    <p style="margin:0;font-size:1.05rem"><strong>${S.coord.lastReceipt.count} ${TR('record(s) uploaded to the Ministry.','سجلّ تمّ رفعه إلى الوزارة.')}</strong></p>
    <p class="small" style="margin:.3rem 0 0">${TR('Reference','المرجع')}: <strong dir="ltr">${esc(S.coord.lastReceipt.ref)}</strong> · ${fmtDateOf(S.coord.lastReceipt.when,{weekday:'short',day:'numeric',month:'short',hour:'2-digit',minute:'2-digit'})}</p>
    ${pending.length?`<p class="tag warn mt">⏳ ${pending.length} ${TR('record(s) still pending — not yet uploaded.','سجلّ لا يزال معلّقًا — لم يُرفع بعد.')}</p>`:`<p class="tag ok mt">✓ ${TR('Nothing left pending — everything is uploaded.','لا شيء معلّق — تمّ رفع كلّ شيء.')}</p>`}
    <p class="small muted" style="margin:.4rem 0 0">${TR('Keep this reference — it confirms the records reached the Ministry. In production it is the server\u2019s signed acknowledgement.','احتفظ بهذا المرجع — فهو يؤكّد وصول السجلّات إلى الوزارة. في الإنتاج يكون إقرارًا موقّعًا من الخادم.')}</p>
  </section>`:''}
  `;
}

function coordEntryView(classId, kind, subject){
  const node=NODE[classId]; const isAtt=kind==='attendance';
  const meta = isAtt ? (coordClasses().find(x=>x.id===classId)||{}) : coordSubjTeacher(classId, subject);
  const tName=S.settings.lang==='ar'?meta.teacherAr:meta.teacherEn;
  const subjL = subject ? (S.settings.lang==='ar'?SUBJECTS_AR[subject]:subject) : '';
  const st=node.students;
  const states=[['present',t('present'),'ok'],['late',t('late'),'warn'],['absent',t('absent'),'risk'],['excused',t('excused'),'info']];
  const head=`
    <button class="btn ghost sm" data-coord-cancel style="margin-bottom:.6rem">${aBack()} ${TR('Back to the list','رجوع إلى القائمة')}</button>
    <div class="card mb" style="border-inline-start:6px solid var(--teal-700)">
      <p class="eyebrow" style="margin:0">${isAtt?TR('Enter attendance from paper','إدخال الحضور من الورق'):TR('Enter assessment from paper','إدخال التقييم من الورق')}</p>
      <h1 style="margin:.15rem 0">${esc(nodeName(node))}${isAtt?'':` · ${esc(subjL)}`}</h1>
      <p class="small muted" style="margin:0">${TR('On behalf of','نيابةً عن')}: <strong>${esc(tName)}</strong>${isAtt?'':` · ${TR('Subject','المادة')}: <strong>${esc(subjL)}</strong>`} · ${fmtDate({weekday:'long',day:'numeric',month:'long'})}</p>
      <p class="small muted" style="margin:.2rem 0 0">${TR('Names are pre-loaded in register order — read down the same list as the paper. Do not retype names.','الأسماء محمّلة مسبقًا بترتيب السجلّ — اقرأ القائمة نفسها كالورق. لا تُعِد كتابة الأسماء.')}</p>
    </div>`;
  let body;
  if(isAtt){
    body=`
    <div class="calm mb"><span class="em" aria-hidden="true">✅</span>
      <span>${TR('Everyone is <strong>present</strong> by default. Tap only the few who were <strong>away</strong> or <strong>late</strong> on the paper register.','الجميع <strong>حاضر</strong> افتراضيًّا. اضغط فقط على القلّة الذين كانوا <strong>غائبين</strong> أو <strong>متأخّرين</strong> في السجلّ الورقي.')}</span></div>
    <div class="card" id="att-summary" style="position:sticky;top:.4rem;z-index:5;display:flex;gap:.5rem;flex-wrap:wrap;align-items:center;padding:.6rem .9rem">${renderAttCounts({present:st.length,late:0,absent:0,excused:0}, st.length)}</div>
    <div class="grid mt" style="grid-template-columns:repeat(auto-fill,minmax(300px,1fr))">
      ${st.map((s,idx)=>`<div class="card" style="padding:.6rem .9rem">
        <div class="flex between center" style="margin-bottom:.4rem">
          <strong><span class="muted small">${idx+1}.</span> ${esc(arName(s))}</strong>
        </div>
        <div class="seg" role="radiogroup" aria-label="${TR('Attendance for','حضور')} ${esc(arName(s))}">
          ${states.map(([v,lbl])=>`<button type="button" role="radio" aria-checked="${v==='present'?'true':'false'}" data-att="${s.id}" data-val="${v}" style="flex:1" ${S.net.status==='nocache'?'disabled':''}>${lbl}</button>`).join('')}
        </div>
      </div>`).join('')}
    </div>`;
  } else {
    body=`
    <div class="calm mb"><span class="em" aria-hidden="true">📄</span>
      <span>${TR('Every box starts at <strong>100</strong>. Lower only the students who scored less on the paper, and leave the rest.','كلّ خانة تبدأ بـ <strong>100</strong>. اخفض فقط درجات من حصلوا على أقلّ في الورق، واترك الباقي.')}</span></div>
    <div class="tbl-scroll">
      <table><caption class="sr-only">${TR('Scores from the paper, in register order','الدرجات من الورق بترتيب السجلّ')}</caption>
      <thead><tr><th scope="col">#</th><th scope="col">${TR('Student','الطالب')}</th><th scope="col">${TR('Score /100','الدرجة /100')}</th></tr></thead>
      <tbody>
      ${st.map((s,idx)=>`<tr>
        <td class="muted small">${idx+1}</td>
        <th scope="row" style="position:static">${esc(arName(s))}</th>
        <td><label class="sr-only" for="co-${s.id}">${esc(arName(s))} ${TR('score','الدرجة')}</label>
          <input class="co-score" id="co-${s.id}" type="text" inputmode="numeric" maxlength="3" value="" placeholder="—" data-stu="${s.id}" style="width:90px"></td>
      </tr>`).join('')}
      </tbody></table>
    </div>
    <p class="hint mt">${TR('Set a student to 0 if they were absent for the assessment. Scores are 0–100.','اضبط الدرجة على 0 إن كان الطالب غائبًا عن التقييم. الدرجات من 0 إلى 100.')}</p>`;
  }
  const confirm=`
    <div class="card mt2" style="border-inline-start:6px solid var(--warn-700)">
      <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-weight:600">
        <input type="checkbox" id="coord-confirm" style="width:22px;height:22px;margin-top:.1rem">
        <span>${TR('I confirm these match the paper register for','أؤكّد أنّ هذه مطابقة للسجلّ الورقي لـ')} <strong>${esc(tName)}</strong> · ${esc(nodeName(node))}${isAtt?'':' · '+esc(subjL)} · ${fmtDate({day:'numeric',month:'long',year:'numeric'})}.</span>
      </label>
      <p class="small muted" style="margin:.4rem 0 0">${TR('One confirmation for the whole class — logged with your name and the teacher’s, with a timestamp.','تأكيد واحد للفصل كلّه — يُسجَّل باسمك واسم المعلّم مع ختم زمني.')}</p>
      <div class="mt2"><button class="btn" data-coord-save="${kind}" data-cls="${classId}" style="font-size:1.05rem;padding:.7rem 1.4rem">✓ ${TR('Save on this device','حفظ على هذا الجهاز')}</button></div>
    </div>`;
  return head+body+confirm;
}

/* ===================== HELP (consistent, same place) ===================== */
function helpDialog(){
  return `
  <div role="dialog" aria-modal="true" aria-labelledby="help-title" id="help-modal"
       style="position:fixed;inset:0;background:rgba(11,61,61,.45);z-index:400;display:grid;place-items:center;padding:1rem">
    <div class="card" style="max-width:520px;width:100%">
      <div class="flex between center"><h2 id="help-title" style="margin:0">${t('help')}</h2>
        <button class="iconbtn" data-close-help aria-label="${t('close')}">✕</button></div>
      <p>${TR('This Help button stays in the same place on every screen (WCAG 2.2 Consistent Help).','يبقى زرّ المساعدة في المكان نفسه في كلّ شاشة (المساعدة المتّسقة وفق WCAG 2.2).')}</p>
      <ul style="padding-inline-start:1.1rem">
        <li>${TR('Use <span class="kbd">Tab</span> / <span class="kbd">Shift</span>+<span class="kbd">Tab</span> to move; <span class="kbd">Enter</span> or <span class="kbd">Space</span> to activate.','استعمل <span class="kbd">Tab</span> / <span class="kbd">Shift</span>+<span class="kbd">Tab</span> للتنقّل؛ و<span class="kbd">Enter</span> أو <span class="kbd">Space</span> للتفعيل.')}</li>
        <li>${TR('Open','افتح')} <strong>${t('a11y')}</strong> ${TR('(top right) for text size, high contrast, reduced motion, reading spacing, read-aloud, and Arabic / RTL.','(أعلى اليمين) لحجم الخطّ، والتباين العالي، وتقليل الحركة، وتباعد القراءة، والقراءة الصوتية، والعربية / الاتّجاه من اليمين.')}</li>
        <li>${TR("Teachers: scores and attendance save as you type; a <strong>Submit</strong> button sends the day's record, and asks you to confirm if everything is still the default.",'المعلّمون: تُحفظ الدرجات والحضور أثناء الكتابة؛ وزرّ <strong>إرسال</strong> يرسل سجلّ اليوم، ويطلب التأكيد إن بقي كلّ شيء على الوضع الافتراضي.')}</li>
        <li>${TR('Students: quiz answers are kept if your connection drops; resume any time.','الطلاب: تُحفظ إجابات الاختبار إذا انقطع الاتّصال؛ وتكمل في أيّ وقت.')}</li>
        <li>${TR('Parents: the','أولياء الأمور:')} <strong>${t('parentPortal')}</strong> ${TR('shows attendance and marks in pictures. Tap any','يعرض الحضور والدرجات بالصور. اضغط أيّ زرّ')} <strong>🔊 ${t('readToMe')}</strong> ${TR('button to have the page read aloud.','ليُقرأ المحتوى بصوتٍ عالٍ.')}</li>
        <li>${TR('New to the app? Open','جديد على التطبيق؟ افتح')} <strong>📘 ${t('training')}</strong> ${TR('in the menu for a short picture guide, or replay the welcome tour from there.','في القائمة لدليل مصوّر قصير، أو أعد تشغيل جولة الترحيب من هناك.')}</li>
        <li>${TR('Need a person? Call your school digital coordinator or the national helpdesk:','تحتاج إلى شخص؟ اتّصل بمنسّق المدرسة الرقمي أو بمكتب المساعدة الوطني:')} <strong dir="ltr">0800 1000 200</strong>.</li>
      </ul>
      <button class="btn" data-close-help>${t('close')}</button>
    </div>
  </div>`;
}

/* ===================== READ-ALOUD HELPERS (low-literacy support) ===================== */
// #11 recorded-audio fallback. In production, RECORDED maps a message key (or text) to a
// pre-recorded clip URL for the critical parent messages (absence warning, low marks, meeting
// notice, "not my child", help) — so comprehension never depends on a device's Arabic TTS voice,
// which is unreliable on cheap Androids. Empty here (offline single-file prototype); when a clip
// exists for the text/lang it plays instead of synthesis.
const RECORDED = {/* 'ar:<key>': 'audio/clip.mp3' */};
let _recAudio = null;
let _speaking = false; // true while speechSynthesis or recorded audio is playing
function playRecorded(text){
  const key = (S.settings.lang==='ar'?'ar:':'en:') + text;
  const src = RECORDED[key]; if(!src) return false;
  try{ if(_recAudio){_recAudio.pause();} _recAudio = new Audio(src);
       _recAudio.playbackRate = S.settings.speed==='slow'?0.8:1;
       _speaking=true; updateReadBtn();
       _recAudio.onended=()=>{_speaking=false; updateReadBtn();};
       _recAudio.play(); return true; }
  catch(e){ return false; }
}
var _readPaused=false;
function readAloudPause(){ try{ if(window.speechSynthesis&&window.speechSynthesis.speaking){ window.speechSynthesis.pause(); } }catch(e){}
  try{ if(typeof _recAudio!=='undefined' && _recAudio){ _recAudio.pause(); } }catch(e){}
  _readPaused=true; ensureReadControls(); }
function readAloudResume(){ try{ if(window.speechSynthesis){ window.speechSynthesis.resume(); } }catch(e){}
  try{ if(typeof _recAudio!=='undefined' && _recAudio && _recAudio.paused){ _recAudio.play(); } }catch(e){}
  _readPaused=false; ensureReadControls(); }
function readAloudStop(){ try{ if(window.speechSynthesis){ window.speechSynthesis.cancel(); } }catch(e){}
  try{ if(typeof _recAudio!=='undefined' && _recAudio){ _recAudio.pause(); } }catch(e){}
  _readPaused=false; _speaking=false; try{updateReadBtn();}catch(e){ ensureReadControls(); } }
function ensureReadControls(){
  var host=document.getElementById('read-controls');
  if(_speaking){
    if(!host){ host=document.createElement('div'); host.id='read-controls'; host.setAttribute('role','group');
      host.style.cssText='position:fixed;left:50%;transform:translateX(-50%);bottom:16px;z-index:9999;display:flex;gap:.4rem;background:var(--surface,#fff);border:2px solid var(--teal-700,#0f766e);border-radius:999px;padding:.35rem .5rem;box-shadow:0 6px 20px rgba(0,0,0,.18)';
      document.body.appendChild(host); }
    var AR=(typeof S!=='undefined'&&S.settings&&S.settings.lang==='ar');
    host.setAttribute('aria-label', AR?'أدوات القراءة الصوتية':'Read-aloud controls');
    var pauseResume=_readPaused
      ? '<button type="button" class="btn" style="min-height:42px;padding:0 1rem" onclick="readAloudResume()">\u25B6 '+(AR?'استئناف':'Resume')+'</button>'
      : '<button type="button" class="btn sec" style="min-height:42px;padding:0 1rem" onclick="readAloudPause()">\u23F8 '+(AR?'إيقاف مؤقت':'Pause')+'</button>';
    host.innerHTML = pauseResume + '<button type="button" class="btn" style="min-height:42px;padding:0 1rem;background:var(--risk-700,#b91c1c);border-color:var(--risk-700,#b91c1c);color:#fff" onclick="readAloudStop()">\u23F9 '+(AR?'إيقاف':'Stop')+'</button>';
  } else { if(host) host.remove(); }
}
// Cached voice list — speechSynthesis.getVoices() is async-loaded on some browsers
let _voicesCache = null; let _voicesWarned = false;
function pickVoice(langCode){
  try{
    if(!window.speechSynthesis) return null;
    if(!_voicesCache || !_voicesCache.length) _voicesCache = window.speechSynthesis.getVoices() || [];
    if(!_voicesCache.length) return null;
    const want = langCode.toLowerCase();
    // Prefer voice matching exact language, then language family, then any voice flagged for the script
    let v = _voicesCache.find(x => (x.lang||'').toLowerCase().startsWith(want));
    if(!v && want.startsWith('ar')) v = _voicesCache.find(x => /ar/i.test(x.lang||'') || /arab/i.test(x.name||''));
    return v || null;
  }catch(e){ return null; }
}
function sayAloud(text){
  try{
    if(playRecorded(text)){ announce(text); return; } // recorded clip wins when present
    if(typeof window!=='undefined' && window.speechSynthesis){
      window.speechSynthesis.cancel();
      const wantLang = S.settings.lang==='ar' ? 'ar' : 'en-GB';
      const u=new SpeechSynthesisUtterance(text);
      const voice = pickVoice(wantLang);
      if(voice){ u.voice = voice; u.lang = voice.lang || wantLang; }
      else {
        u.lang = wantLang;
        // No Arabic voice on this device — tell the user once so they aren't surprised
        if(S.settings.lang==='ar' && !_voicesWarned){
          _voicesWarned = true;
          announce(TR('No Arabic voice is installed on this device. The text is shown on screen so you can still follow along.','لا يوجد صوت عربي مُثبَّت على هذا الجهاز. النصّ معروض على الشاشة لتتمكّن من المتابعة.'), true);
        }
      }
      u.rate = S.settings.speed==='slow' ? 0.7 : 0.95;
      _speaking=true; updateReadBtn();
      u.onend=()=>{_speaking=false; updateReadBtn();};
      u.onerror=()=>{_speaking=false; updateReadBtn();};
      window.speechSynthesis.speak(u);
    } else {
      // Speech synthesis not supported at all on this browser
      if(!_voicesWarned){
        _voicesWarned = true;
        announce(TR('Audio read-aloud is not available on this device. The text is shown on screen.','القراءة الصوتية غير متاحة على هذا الجهاز. النصّ معروض على الشاشة.'), true);
      }
    }
  }catch(e){/* speech not available — caption still announced */}
  announce(text);
}
// preload voices list as soon as the engine reports it (Chrome fires this once voices are available)
if(typeof window!=='undefined' && window.speechSynthesis){
  try{ window.speechSynthesis.onvoiceschanged = () => { _voicesCache = window.speechSynthesis.getVoices() || []; }; }catch(_){}
}

function openBadgesDialog(){
  var AR=(S.settings&&S.settings.lang==='ar');
  var existing=document.getElementById('badges-dialog'); if(existing){ existing.remove(); return; }
  var dlg=document.createElement('div'); dlg.id='badges-dialog';
  dlg.setAttribute('role','dialog'); dlg.setAttribute('aria-modal','true');
  dlg.setAttribute('aria-label', AR?'شاراتي':'My badges');
  dlg.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem';
  var body=teacherBadgesPanel();
  var closeLbl=AR?'إغلاق':'Close';
  var title=AR?'شاراتي':'My badges';
  dlg.innerHTML='<div style="background:var(--surface,#fff);color:var(--ink,#111);max-width:720px;width:100%;max-height:80vh;overflow:auto;border-radius:12px;padding:1.2rem 1.4rem"><h2 style="margin-top:0">'+title+'</h2>'+body+'<p style="margin-top:1rem"><button type="button" class="btn" onclick="document.getElementById(&quot;badges-dialog&quot;).remove()">'+closeLbl+'</button></p></div>';
  dlg.addEventListener('click', function(e){ if(e.target===dlg) dlg.remove(); });
  document.body.appendChild(dlg);
}

function openHelpDialog(){
  try{ S._helpOpenedOnce=true; checkTeacherBadges&&checkTeacherBadges(); }catch(e){}
  var AR=(typeof S!=='undefined'&&S.settings&&S.settings.lang==='ar');
  var existing=document.getElementById('help-dialog'); if(existing){ existing.remove(); return; }
  var d=document.createElement('div'); d.id='help-dialog'; d.setAttribute('role','dialog'); d.setAttribute('aria-modal','true');
  d.setAttribute('aria-label', AR?'المساعدة والأسئلة الشائعة':'Help and FAQ');
  d.style.cssText='position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:9998;display:flex;align-items:center;justify-content:center;padding:1rem';
  var content=AR ?
    '<h2 style="margin-top:0">المساعدة والأسئلة الشائعة</h2>'+
    '<h3>مصطلحات</h3><ul>'+
    '<li><b>الرحلة التقويمية</b>: تسلسل التقييمات القصيرة (تكوينية) خلال الشهر تقيس فهم الطالب أثناء الدرس.</li>'+
    '<li><b>التصحيح الذكي</b>: تصحيح تلقائي للأسئلة الموضوعية (اختيار من متعدد). الأسئلة المقالية تُصحَّح يدويًا.</li>'+
    '<li><b>الاختبار متاح لفترة محدودة</b>: نافذة زمنية يفتح فيها الاختبار للطلاب.</li>'+
    '<li><b>غ</b>: تعني "غائب عن الامتحان" — لا تُحتسب صفرًا في المتوسط.</li></ul>'+
    '<h3>أسئلة شائعة</h3><ul>'+
    '<li><b>هل يعمل بدون إنترنت؟</b> يمكنك تسجيل الحضور والدرجات بلا اتصال — تُحفظ محليًا وتُزامن تلقائيًا عند العودة.</li>'+
    '<li><b>من يُدخل بيانات الطلاب؟</b> تأتي مركزيًا من نظام الوزارة (EMIS)؛ لا يحتاج المعلم إدخالها.</li>'+
    '<li><b>من يُدخل درجات منتصف ونهاية العام؟</b> كنترول الامتحانات — تظهر لك للاطلاع فقط.</li>'+
    '<li><b>كيف أُعدِّل حضورًا سابقًا بعد قبول عذر؟</b> الموظف الإداري يُسجل العذر بعد قبوله من مدير المدرسة، فيتحدَّث السجل تلقائيًا.</li></ul>'+
    '<h3>الشارات</h3>'+'<p>تظهر لك شارات صغيرة عند إتمامك مهامّ يومية في المنصّة. الشارات <b>خاصة بك وحدك</b> — لا يراها الطلاب ولا أولياء الأمور ولا المعلمون الآخرون، ولا تتضمّن أيّ ترتيب أو مقارنة أو درجات.</p>'+'<ul>'+'<li>✅ <b>تم تسجيل الحضور</b>: عندما تسجّل حضور اليوم.</li>'+'<li>📝 <b>تم إدخال الدرجات</b>: عندما تُدخل درجات التقييم لأول مرة.</li>'+'<li>📸 <b>نسخة ورقية محفوظة</b>: عندما تُرفق صورة من الورقة كنسخة احتياطية.</li>'+'<li>🌟 <b>مستكشف الإتاحة</b>: عندما تُعدِّل إعدادات الإتاحة بما يناسبك (حجم الخط، الوضع الليلي، إلخ).</li>'+'<li>📖 <b>روح فضولية</b>: عندما تفتح صفحة المساعدة (مثل الآن).</li>'+'</ul>'+'<div style="background:var(--teal-050,#f0fdfa);border:1px solid var(--teal-700,#0f766e);border-radius:8px;padding:.6rem;margin:.4rem 0"><small>مثال على شكل الشارة: عند اكتسابك شارة، ستظهر رسالة صغيرة أسفل الشاشة لبضع ثوانٍ تحمل الرمز وعنوانًا قصيرًا.</small></div>'+'<p><a href="#" onclick="event.preventDefault();document.getElementById(&quot;help-dialog&quot;).remove();openBadgesDialog();">عرض شاراتي</a></p>'+'<h3>الأمان</h3>'+'<ul>'+'<li><b>تسجيل الخروج التلقائي</b>: ستُنهى الجلسة بعد ١٥ دقيقة من عدم النشاط، مع تنبيه قبل دقيقة من الإنهاء.</li>'+'<li><b>حسابك ملكيّة الوزارة</b>: تتم إدارته من نظام الوزارة (IAM) — عند تسجيل الدخول من جهاز جديد ستُغلق الجلسات الأخرى.</li>'+'</ul>'+'<p style="margin-top:1rem"><button type="button" class="btn" onclick="document.getElementById(&quot;help-dialog&quot;).remove()">إغلاق</button></p>'
    :
    '<h2 style="margin-top:0">Help and FAQ</h2>'+
    '<h3>Terms</h3><ul>'+
    '<li><b>Formative journey (الرحلة التقويمية)</b>: short in-lesson checks-for-understanding across the month.</li>'+
    '<li><b>Smart grading (التصحيح الذكي)</b>: auto-scoring of objective (multiple-choice) items. Open questions are teacher-graded.</li>'+
    '<li><b>Assessment window is open for a limited period</b>: a set time window during which students can take a quiz.</li>'+
    '<li><b>غ</b>: "absent from exam" — not counted as zero in the average.</li></ul>'+
    '<h3>FAQ</h3><ul>'+
    '<li><b>Does it work offline?</b> Attendance and grades can be entered offline — saved locally and synced when the connection returns.</li>'+
    '<li><b>Who enters student data?</b> Comes centrally from the ministry system (EMIS); teachers do not enter it.</li>'+
    '<li><b>Who enters mid-year and final grades?</b> The Exam Control Office. Teachers see them read-only.</li>'+
    '<li><b>How do I correct a past-day attendance after an excuse?</b> Admin records the approved excuse and the record updates automatically.</li></ul>'+
    '<h3>Badges</h3>'+'<p>Small badges appear as you complete daily tasks in the platform. Your badges are <b>private to you</b> — never shown to students, parents, or other teachers, and never ranked or compared.</p>'+'<ul>'+'<li>✅ <b>Attendance recorded</b>: when you record today\'s attendance.</li>'+'<li>📝 <b>Grades entered</b>: when you enter assessment marks.</li>'+'<li>📸 <b>Paper backup kept</b>: when you attach a photo of your paper sheet as backup.</li>'+'<li>🌟 <b>Accessibility explorer</b>: when you customize accessibility settings (text size, dark mode, etc).</li>'+'<li>📖 <b>Curious mind</b>: when you open the Help page (like now).</li>'+'</ul>'+'<div style="background:var(--teal-050,#f0fdfa);border:1px solid var(--teal-700,#0f766e);border-radius:8px;padding:.6rem;margin:.4rem 0"><small>What a badge looks like: when you earn one, a small message appears near the bottom of the screen for a few seconds, showing the icon and a short title.</small></div>'+'<p><a href="#" onclick="event.preventDefault();document.getElementById(&quot;help-dialog&quot;).remove();openBadgesDialog();">View my badges</a></p>'+'<h3>Security</h3>'+'<ul>'+'<li><b>Auto-logout</b>: your session ends after 15 minutes of inactivity, with a one-minute warning before it fires.</li>'+'<li><b>Your account is ministry-managed</b>: identity comes from the ministry system (IAM) — signing in on a new device will end other sessions.</li>'+'</ul>'+'<p style="margin-top:1rem"><button type="button" class="btn" onclick="document.getElementById(&quot;help-dialog&quot;).remove()">Close</button></p>';
  d.innerHTML='<div style="background:var(--surface,#fff);color:var(--ink,#111);max-width:640px;width:100%;max-height:80vh;overflow:auto;border-radius:12px;padding:1.2rem 1.4rem;line-height:1.55;font-size:.95rem">'+content+'</div>';
  d.addEventListener('click', function(e){ if(e.target===d) d.remove(); });
  document.body.appendChild(d);
}
function updateReadBtn(){ try{ensureReadControls();}catch(e){}
  const btn=document.querySelector('.readbtn');
  if(!btn) return;
  btn.setAttribute('aria-pressed', String(_speaking));
  const svg=btn.querySelector('svg');
  if(_speaking){
    btn.setAttribute('aria-label', TR('Stop reading','أوقف القراءة'));
    if(svg) svg.outerHTML='<span aria-hidden="true" style="font-size:1.1rem">⏹</span>';
    btn.lastChild.textContent=' '+TR('Stop','أوقف');
  } else {
    btn.setAttribute('aria-label', TR('Read this page aloud','اقرأ هذه الصفحة بصوت عالٍ'));
    const sp=btn.querySelector('span[aria-hidden]');
    if(sp) sp.outerHTML='<svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" focusable="false"><path fill="currentColor" d="M11 4.5 5.8 8.5H2.8v7h3L11 19.5z"/><path fill="none" stroke="currentColor" stroke-width="2.1" stroke-linecap="round" d="M15.5 8.6a5 5 0 0 1 0 6.8M18.6 6a8.4 8.4 0 0 1 0 12"/></svg>';
    btn.lastChild.textContent=' '+TR('Read aloud','اقرأ بصوت');
  }
}
function speakBtn(text,label){
  const AR=S.settings.lang==='ar';
  const lbl=label||(AR?'الاستماع الصوتي':'Listen');
  return `<button type="button" class="btn ghost sm speak-btn" data-speak="${esc(text)}" aria-label="${lbl}" style="display:inline-flex;align-items:center;gap:.35rem;font-weight:700">${uiIcon('audio', 16)} ${lbl}</button>`;
}

/* ===================== PARENT PORTAL (icon-led, read-aloud, low-literacy) ===================== */
function hashStr(s){let h=7;for(let i=0;i<s.length;i++){h=(h*31+s.charCodeAt(i))>>>0;}return h;}
/* the signed-in caregiver's children — the primary one is the same pupil the teacher/admin views use */
const SIBLING = (NODE['g-cairo-id0-sc0-cl0']?NODE['g-cairo-id0-sc0-cl0'].students[1]:STUDENT_SELF);
const PARENT_CHILDREN = (SIBLING && SIBLING.id!==STUDENT_SELF.id) ? [STUDENT_SELF, SIBLING] : [STUDENT_SELF];
function currentChild(){ return PARENT_CHILDREN.find(c=>c.id===S.childId) || PARENT_CHILDREN[0]; }
function childGradeLabel(c){ const cl=NODE[c.classId]; return cl?nodeName(cl):''; }
/* deterministic last-20-school-days attendance, consistent with the child's attendance % */
function examMarkFor(stu,su){ const r=rng(hashStr(stu.id+su)%900000+7); const wk=clamp(stu.mastery[su]+ri(r,-8,6),10,100); const tm=clamp(stu.mastery[su]+ri(r,-6,8),10,100); return {wk,tm}; }
function annText(a){ return S.settings.lang==='ar'?a.ar:a.en; }
function studentAnnouncements(){
  const AR=S.settings.lang==='ar'; const list=S.announcements.filter(a=>a.students); if(!list.length) return '';
  return `<section aria-label="${AR?'إعلانات':'Announcements'}" class="card mb" style="border-inline-start:6px solid var(--info-700)">
    <p class="eyebrow" style="margin:0 0 .4rem">📢 ${AR?'إعلانات من معلّمك':'Announcements from your teacher'}</p>
    ${list.slice(0,3).map(a=>{const o=annText(a);return `<div style="padding:.4rem 0;border-top:1px solid var(--line)">
      <div class="flex between center" style="gap:.6rem"><strong>${esc(o.t)}</strong>${speakBtn(o.t+'. '+o.b,'')}</div>
      <p class="small" style="margin:.2rem 0 0">${esc(o.b)}</p></div>`;}).join('')}
  </section>`;
}
function teacherAnnounceCard(){
  const AR=S.settings.lang==='ar'; const list=S.announcements.filter(a=>a.students);
  return `<div class="card" style="margin-bottom:1rem">
    <div class="flex between center wrapw" style="gap:.5rem"><h2 style="margin:0;font-size:1.15rem">📢 ${AR?'الإعلانات':'Announcements'}</h2>
      <button type="button" class="btn sm" data-announce-open>✏️ ${AR?'إرسال إعلان':'Post an announcement'}</button></div>
    <p class="small muted" style="margin:.3rem 0 .5rem">${AR?'أرسل إعلانًا لطلابك. واجعله عاجلًا فيصل أيضًا لأولياء الأمور عبر واتساب/رسالة.':'Send an announcement to your students. Mark it urgent and it also reaches parents via WhatsApp/SMS.'}</p>
    ${list.length?list.slice(0,3).map(a=>{const o=annText(a);return `<div style="padding:.35rem 0;border-top:1px solid var(--line)"><strong>${esc(o.t)}</strong> ${a.parentsUrgent?`<span class="tag warn">${AR?'عاجل · لأولياء الأمور':'Urgent · to parents'}</span>`:''}<br><span class="small muted">${esc(o.b)}</span></div>`;}).join(''):`<p class="small muted">${AR?'لا إعلانات بعد.':'No announcements yet.'}</p>`}
  </div>`;
}
function teacherAnnounce(){
  const AR=S.settings.lang==='ar'; const list=S.announcements.filter(a=>a.students);
  return `<div class="page-head"><div><p class="eyebrow">📢 ${AR?'الإعلانات':'Announcements'}</p><h1>${AR?'إعلانات الصفّ':'Class announcements'}</h1>
    <p class="muted small" style="margin:0;max-width:62ch">${AR?'أرسل إعلانًا لطلابك. واجعله عاجلًا فيصل أيضًا لأولياء الأمور عبر واتساب/رسالة — للأمور المهمّة فقط.':'Send an announcement to your students. Mark it urgent and it also reaches parents via WhatsApp/SMS — for important matters only.'}</p></div></div>
  ${list.length? `<div class="card">
    ${list.map(a=>{const o=annText(a);return `<div style="padding:.6rem 0;border-top:1px solid var(--line)">
      <div class="flex between center wrapw" style="gap:.5rem"><strong style="font-size:1.05rem">${esc(o.t)}</strong>
        <span class="pill-row" style="align-items:center">${a.parentsUrgent?`<span class="tag warn">${AR?'عاجل · لأولياء الأمور':'Urgent · to parents'}</span>`:`<span class="tag">${AR?'للطلاب':'To students'}</span>`}${speakBtn(o.t+'. '+o.b,'')}</span></div>
      <p class="small" style="margin:.3rem 0 0">${esc(o.b)}</p></div>`;}).join('')}
  </div>` : `<div class="calm"><span class="em" aria-hidden="true">📭</span><span>${AR?'لا إعلانات بعد. أرسل أوّل إعلان من الزرّ بالأسفل.':'No announcements yet. Post your first one using the button below.'}</span></div>`}
  <div class="mt2" style="display:flex;justify-content:center">
    <button type="button" class="btn" data-announce-open>✏️ ${AR?'إرسال إعلان':'Post an announcement'}</button>
  </div>`;
}
function parentUrgentCard(){
  const AR=S.settings.lang==='ar'; const list=S.announcements.filter(a=>a.parentsUrgent); const masked='0100 ••• •• 78';
  if(!list.length) return `<div class="card mt" style="border-inline-start:6px solid var(--ok-700)">
    <p class="eyebrow" style="margin:0">🟢 ${AR?'لا تحديثات عاجلة':'No urgent updates'}</p>
    <p class="small" style="margin:.3rem 0 0">${AR?'نتواصل معك فقط في الأمور المهمّة، وتصلك أيضًا على واتساب على رقمك المسجّل':'We only contact you about important matters, and it also reaches your WhatsApp on your registered number'}: <strong dir="ltr">${masked}</strong>.</p></div>`;
  return `<div class="card mt" style="border-inline-start:6px solid var(--warn-700)">
    <p class="eyebrow" style="margin:0 0 .4rem">📣 ${AR?'تحديثات عاجلة':'Urgent updates'}</p>
    ${list.map(a=>{const o=annText(a);return `<div style="padding:.45rem 0;border-top:1px solid var(--line)">
      <div class="flex between center" style="gap:.6rem"><strong>${esc(o.t)}</strong>${speakBtn(o.t+'. '+o.b,'')}</div>
      <p class="small" style="margin:.2rem 0 .3rem">${esc(o.b)}</p>
      <span class="tag">📲 ${AR?'أُرسل أيضًا إلى واتساب':'Also sent to your WhatsApp'} · <span dir="ltr">${masked}</span></span></div>`;}).join('')}
    <p class="tiny muted mt">${AR?'تصلك هذه الرسائل العاجلة على واتساب/رسالة نصّية حتى دون فتح التطبيق.':'These urgent messages reach you on WhatsApp/SMS even without opening the app.'}</p>
  </div>`;
}
function announceOverlay(){
  if(!S.announceCompose) return ''; const AR=S.settings.lang==='ar';
  return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="ann-h" id="announcebox"><div class="coach" style="max-width:560px">
    <div class="flex between center"><h2 id="ann-h" style="margin:0;font-size:1.2rem">📢 ${AR?'إرسال إعلان':'Post an announcement'}</h2>
      <button type="button" class="btn ghost sm" data-announce-cancel>✕ ${AR?'إلغاء':'Cancel'}</button></div>
    <div class="field mt"><label for="ann-title">${AR?'العنوان':'Title'}</label><input id="ann-title" placeholder="${AR?'مثال: تجربة العلوم غدًا':'e.g., Science experiment tomorrow'}"></div>
    <div class="field"><label for="ann-body">${AR?'الرسالة':'Message'}</label><textarea id="ann-body" rows="3" placeholder="${AR?'اكتب رسالة قصيرة لطلابك…':'Write a short message to your students…'}"></textarea></div>
    <label class="flex" style="gap:.5rem;align-items:flex-start;margin:.2rem 0 .6rem"><input type="checkbox" id="ann-urgent" style="margin-top:.25rem;width:auto"><span>${AR?'عاجل — أرسله أيضًا لأولياء الأمور عبر واتساب/رسالة (للأمور المهمّة فقط).':'Urgent — also send to parents via WhatsApp/SMS (for important matters only).'}</span></label>
    <button type="button" class="btn" data-announce-post>${AR?'إرسال':'Post'}</button>
  </div></div>`;
}
function attendanceDays(child){
  const r=rng(hashStr(child.id)%900000+11); const out=[];
  for(let i=0;i<20;i++){ const x=r()*100; let st='present';
    if(x>child.att){ st = r()<0.65?'absent':'late'; } out.push(st); }
  return out;
}
function faceFor(v){ return v>=70?'😀':v>=50?'🙂':'😟'; }
function statusFor(child){
  if(child.risk==='risk') return {cls:'risk', em:'🔴', word:TR('Needs help','يحتاج مساعدة'),
    line:TR(`${arName(child)} needs a little extra help right now. The teacher can support — please reply to their message or visit the school.`,`يحتاج ${arName(child)} إلى بعض المساعدة الإضافية الآن. يمكن للمعلّم تقديم الدعم — يرجى الردّ على رسالته أو زيارة المدرسة.`)};
  if(child.risk==='warn') return {cls:'warn', em:'🟡', word:TR('Keep an eye','يتطلب متابعة دورية مستمرة'),
    line:TR(`${arName(child)} is doing okay, but watch one or two things this week. A little practice at home will help.`,`${arName(child)} بخير، لكن تابع أمرًا أو اثنين هذا الأسبوع. القليل من التمرين في البيت يساعد.`)};
  return {cls:'ok', em:'🟢', word:TR('Doing well','مستوى متميز ومحقق لنواتج التعلّم'),
    line:TR(`${arName(child)} is doing well. Attendance and marks are healthy. Keep it up!`,`${arName(child)} مستوى متميز ومحقق لنواتج التعلّم. الحضور والدرجات جيّدة. واصلوا التشجيع!`)};
}
function childPicker(){
  if(PARENT_CHILDREN.length<2) return '';
  return `<div class="child-pick mb" role="group" aria-label="${TR('Choose your child','اختر ابنك')}">
    ${PARENT_CHILDREN.map(c=>`<button type="button" class="child-chip" data-child="${c.id}" aria-pressed="${c.id===currentChild().id}">
      <span class="av" aria-hidden="true">${esc(arName(c)[0])}</span> ${esc(arName(c))}</button>`).join('')}
  </div>`;
}
function parentPageSummary(){
  const c=currentChild(); if(!c) return '';
  const days=attendanceDays(c); const present=days.filter(d=>d==='present').length;
  const avg=c.avgM;
  switch(S.view){
    case 'attendance': return TR(`${arName(c)} was at school ${present} of ${days.length} days this week.`,`حضر ${arName(c)} ${present} من ${days.length} أيام هذا الأسبوع.`);
    case 'marks': return TR(`${arName(c)}'s average mark is ${avg} percent. These are practice marks the school has released.`,`متوسّط درجات ${arName(c)} ${avg} بالمئة. هذه درجات تدريبية أتاحتها المدرسة.`);
    case 'messages': return TR(`Messages from ${arName(c)}'s school. The school contacts you here only when something needs your attention.`,`رسائل من مدرسة ${arName(c)}. تتواصل معك المدرسة هنا فقط عند وجود ما يستدعي انتباهك.`);
    default: return TR(`Overview for ${arName(c)}. This week at school ${present} of ${days.length} days. Assessment average ${avg} percent.`,`نظرة عامّة عن ${arName(c)}. هذا الأسبوع حضر ${present} من ${days.length} أيام. متوسّط التقييم ${avg} بالمئة.`);
  }
}
// First-run, picture-based choice — the parent decides; nothing is assumed, and the question can be heard.
function firstRunReadChoice(){
  const AR=S.settings.lang==='ar';
  const q=TR('Would you like Manassa to read everything to you out loud? Tap the green button for yes, or “I’ll read myself” to keep it quiet. You can change this at any time.','هل تريد أن تقرأ لك منصّة كلّ شيء بصوت مسموع؟ اضغط الزرّ الأخضر للموافقة، أو «سأقرأ بنفسي» للإبقاء عليه صامتًا. يمكنك تغيير ذلك في أيّ وقت.');
  return `
  <div class="card mb" style="border:2px solid var(--teal-700);background:var(--ok-050,#eef7f3)">
    <div class="flex between center wrapw" style="gap:.6rem">
      <h2 style="margin:0"><span aria-hidden="true">🔊</span> ${AR?'هل أقرأ لك بصوت مسموع؟':'Shall I read to you?'}</h2>
      <button type="button" class="btn sec" data-speak="${esc(q)}">🔊 ${AR?'استمع للسؤال':'Hear this question'}</button>
    </div>
    <p style="font-size:1.1rem;margin:.5rem 0 .9rem">${AR?'يمكنك جعل التطبيق يقرأ لك كلّ شيء. اختر ما يناسبك — ويمكنك تغييره في أيّ وقت.':'You can have the app read everything to you. Choose what suits you — you can change it anytime.'}</p>
    <div class="pill-row">
      <button class="btn" data-parent-read="on" style="font-size:1.15rem;padding:.85rem 1.4rem">🔊 ${AR?'نعم، اقرأ لي':'Yes, read to me'}</button>
      <button class="btn sec" data-parent-read="off" style="font-size:1.15rem;padding:.85rem 1.4rem">📖 ${AR?'سأقرأ بنفسي':"I’ll read myself"}</button>
    </div>
    <p class="small muted" style="margin:.7rem 0 0">${AR?'مهما اخترت، لا يبدأ أيّ صوت من تلقاء نفسه — يبدأ فقط حين تضغط.':'Whatever you choose, sound never starts on its own — only when you tap.'}</p>
  </div>`;
}
// Persistent, unmissable control: listen now + instant mute for public places.
function parentAudioBar(){
  const AR=S.settings.lang==='ar'; const on=S.parentRead;
  return `
  <div class="card" style="display:flex;gap:.6rem;align-items:center;flex-wrap:wrap;border-inline-start:6px solid var(--teal-700);background:var(--ok-050,#eef7f3);margin-bottom:.8rem">
    <button type="button" class="btn" data-speak="${esc(parentPageSummary())}" style="font-size:1.05rem;padding:.6rem 1.05rem">🔊 ${AR?'اقرأ لي هذه الصفحة':'Listen to this page'}</button>
    <button type="button" class="btn ${on?'':'sec'}" data-parent-read="toggle" aria-pressed="${on}" style="padding:.6rem 1.05rem">
      ${on?`🔈 ${AR?'القراءة تلقائيًّا: مُفعّلة — اضغط للكتم':'Auto-read: On — tap to mute'}`:`🔇 ${AR?'القراءة تلقائيًّا: متوقّفة — اضغط للتشغيل':'Auto-read: Off — tap to turn on'}`}
    </button>
    <span class="small muted" style="flex-basis:100%">${AR?'تُقرأ الصفحة عند فتحها فقط بعد أوّل ضغطة منك — لا صوت من تلقاء نفسه. 🎧 السمّاعات تساعد في الأماكن العامّة.':'A page reads when it opens only after your first tap — never on its own. 🎧 Headphones help in public places.'}</span>
  </div>`;
}
function parentShell(inner){
  const items=[
    {v:'home', ico: uiIcon('home', 16), t: TR('Home','الرئيسية')},
    {v:'attendance', ico: uiIcon('calendar', 16), t: TR('Attendance Calendar','تقويم الحضور')},
    {v:'marks', ico: uiIcon('award', 16), t: TR('Assessment Ledger','سجل الدرجات المستحقة')},
    {v:'messages', ico: uiIcon('message', 16), t: TR('Messages & WhatsApp','الرسائل والمتابعة')},
    {v:'training', ico: uiIcon('insights', 16), t: TR('Parent Guide','دليل ولي الأمر')},
  ];
  const view = (!S.view || S.view==='dashboard') ? 'home' : S.view;
  const showBar = ['home','attendance','marks','messages'].includes(view) && !(view==='home' && !S.parentReadChosen);
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${showBar?parentAudioBar():''}${inner}${devNote()}</div></main>${a11yPanel()}`;
}
function parentVerify(){
  if(S.parentVerified==='locked'){
    return `
    <div class="page-head"><div><p class="eyebrow">${TR('Check needed','تحقّق مطلوب')}</p><h1>${TR("Let's make sure we show the right child",'لنتأكّد أنّنا نعرض الطفل الصحيح')}</h1></div></div>
    <div class="card" style="border-inline-start:6px solid var(--warn-700);max-width:620px">
      <p style="font-size:1.05rem">${TR("Thanks for letting us know. We've paused access so no wrong information is shown.",'شكرًا لإخبارنا. أوقفنا العرض مؤقّتًا حتى لا تظهر معلومات خاطئة.')}</p>
      <p>${TR('Please contact your school office to correct the family record. Once they update it, your access will work automatically.','يرجى التواصل مع إدارة المدرسة لتصحيح سجلّ الأسرة. وبمجرّد تحديثه، سيعمل وصولك تلقائيًّا.')}</p>
      <p class="small muted">${TR('Family links are managed by the school record (EMIS) — they can only be changed there, which is what keeps every family’s data private.','تُدار روابط الأسرة عبر سجلّ المدرسة (EMIS) — ولا يمكن تغييرها إلا هناك، وهذا ما يحمي خصوصية بيانات كلّ أسرة.')}</p>
      <div class="pill-row mt"><strong dir="ltr">📞 0800 1000 200</strong></div>
      <div class="mt2"><button class="btn sec" data-parent-verify="retry">${aBack()} ${TR('Back','رجوع')}</button></div>
    </div>`;
  }
  const kids=PARENT_CHILDREN;
  return `
  <div class="page-head"><div><p class="eyebrow">${TR('Quick check','تحقّق سريع')}</p><h1>${TR('Is this your child?','هل هذا طفلك؟')}</h1></div></div>
  <div class="card" style="max-width:620px">
    <p style="font-size:1.05rem">${TR('Before we show any results, please confirm we have the right child. This keeps each family’s information private.','قبل عرض أيّ نتائج، يرجى تأكيد أنّ الطفل صحيح. هذا يحفظ خصوصية معلومات كلّ أسرة.')}</p>
    <p class="small muted" style="margin:-.2rem 0 .8rem">${TR('Signed in with National ID and a one-time code sent to the number on file at the school.','تمّ الدخول بالرقم القومي ورمز لمرّة واحدة أُرسل إلى الرقم المسجَّل في المدرسة.')}</p>
    ${kids.map(c=>{const node=NODE[c.classId];
      return `<div class="card" style="background:var(--surface-2,#f7faf9);margin:.5rem 0">
        <div class="flex center" style="gap:.8rem">
          <span class="av" aria-hidden="true" style="width:46px;height:46px;border-radius:50%;display:grid;place-items:center;background:var(--teal-700);color:#fff;font-weight:800;font-size:1.2rem">${esc(arName(c)[0])}</span>
          <div><strong style="font-size:1.1rem">${esc(arName(c))}</strong>
            <p class="small muted" style="margin:.1rem 0 0">${esc(nodeName(node))} · ${node?TR('Grade','الصف')+' '+(S.settings.lang==='ar'?arNum(node.grade):node.grade):''} · ${esc(nodeName(node&&node.parent))}</p></div>
        </div>
      </div>`;}).join('')}
    <div class="pill-row mt2">
      <button class="btn" data-parent-verify="yes" style="font-size:1.05rem;padding:.7rem 1.4rem">✓ ${kids.length>1?TR('Yes, these are my children','نعم، هؤلاء أطفالي'):TR('Yes, this is my child','نعم، هذا طفلي')}</button>
      <button class="btn sec" data-parent-verify="no">${TR('No — not my child','لا — ليس طفلي')}</button>
    </div>
    <div class="card" style="background:var(--info-050,#eef5fb);border-inline-start:6px solid var(--info-700);margin:.6rem 0 .2rem">
      <p class="small" style="margin:0"><strong>${TR('By tapping “Yes”, you certify that you are this child’s parent or legal guardian.','بالضغط على «نعم»، فإنك تُقِرّ بأنّك والد هذا الطفل أو وليّه الشرعي.')}</strong> ${TR('You take responsibility to keep this information accurate, to report any error to the school, and to contact support straight away if this is not your child.','وتتحمّل مسؤولية الحفاظ على دقّة هذه المعلومات، والإبلاغ عن أيّ خطأ للمدرسة، والتواصل مع الدعم فورًا إن لم يكن هذا طفلك.')}</p>
      <p class="small muted" style="margin:.4rem 0 0">${TR('Your confirmation is recorded against the one-time code sent to your registered number, so this is a legal acknowledgement.','يُسجَّل تأكيدك مقابل الرمز لمرّة واحدة المُرسَل إلى رقمك المسجَّل، فهو إقرار قانوني.')}</p>
    </div>
    <p class="small muted mt">${TR('If anything is wrong, or this is not your child, tap “No” and the school will check the record before any data is shown.','إن كان هناك خطأ، أو لم يكن هذا طفلك، اضغط «لا» وستراجع المدرسة السجلّ قبل عرض أيّ بيانات.')} <strong dir="ltr">📞 0800 1000 200</strong></p>
    <details class="mt" style="border:1px solid var(--line);border-radius:10px;padding:.5rem .8rem">
      <summary style="cursor:pointer;font-weight:600">${TR('Can’t confirm online?','لا تستطيع التأكيد عبر الإنترنت؟')}</summary>
      <p class="small" style="margin:.5rem 0 0">${TR('Visit your child’s school with your National ID. A staff member can verify you in person, and the school record (EMIS) is updated — then your access works automatically. No one can ever claim a child inside the app; verification always comes from the official record.','توجّه إلى مدرسة طفلك ومعك رقمك القومي. يمكن لموظّف التحقّق منك شخصيًّا، ويُحدَّث سجلّ المدرسة (EMIS) — عندها يعمل وصولك تلقائيًّا. لا يمكن لأحد ادّعاء طفل داخل التطبيق؛ يأتي التحقّق دائمًا من السجلّ الرسمي.')}</p>
      <p class="small" style="margin:.4rem 0 0"><strong dir="ltr">📞 0800 1000 200</strong></p>
    </details>
  </div>`;
}
function parentHome(){
  const c=currentChild();
  const days=attendanceDays(c); const present=days.filter(d=>d==='present').length;
  const avg=c.avgM; const quiz=c.mastery['Science'];
  const pageRead=TR(`Overview for ${arName(c)}. This week at school ${present} of ${days.length} days. Assessment average ${avg} percent. Latest quiz ${quiz} percent.`,`نظرة عامّة عن ${arName(c)}. هذا الأسبوع حضر ${present} من ${days.length} أيام. متوسّط التقييم ${avg} بالمئة. آخر اختبار ${quiz} بالمئة.`);
  return `
  ${!S.parentReadChosen?firstRunReadChoice():''}
  <div class="page-head"><div>
    <p class="eyebrow">${t('myChild')}</p>
    <h1>${esc(arName(c))} <span class="muted" style="font-weight:600;font-size:1rem">· ${esc(childGradeLabel(c))}</span></h1>
  </div>${speakBtn(pageRead,TR('Read this page','اقرأ هذه الصفحة'))}</div>

  ${childPicker()}

  ${parentUrgentCard()}

  <p style="font-size:1.05rem;max-width:60ch">${TR('Here is an overview of '+esc(arName(c))+'’s attendance and results, for your information.','هذه نظرة عامّة عن حضور '+esc(arName(c))+' ونتائجه، لعلمك.')}</p>

  <div class="bigtiles">
    <button type="button" class="bigtile" data-view="attendance">
      <span class="em" aria-hidden="true">🗓️</span>
      <span class="word">${t('attendance')}</span>
      <span class="sub">${present} / ${days.length} ${TR('days at school','يوم حضور')}</span>
    </button>
    <button type="button" class="bigtile" data-view="marks">
      <span class="em" aria-hidden="true">⭐</span>
      <span class="word">${TR('Assessment','التقييم')}</span>
      <span class="sub">${avg}% ${TR('average','متوسّط')}</span>
    </button>
    <button type="button" class="bigtile" data-view="marks">
      <span class="em" aria-hidden="true">📝</span>
      <span class="word">${TR('Quiz results','نتائج الاختبارات')}</span>
      <span class="sub">${quiz}% ${TR('latest','الأخير')}</span>
    </button>
  </div>

  <div class="card mt2" style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
    ${uiIcon('book', 36)}
    <div style="flex:1;min-width:200px"><strong style="font-size:1.1rem">${TR('New here?','جديد هنا؟')}</strong>
      <p style="margin:.2rem 0 0">${TR('See the short picture guide on how to use this app.','شاهد الدليل المصوّر القصير لكيفية استخدام التطبيق.')}</p></div>
    <button class="btn" data-view="training">${TR('Show me how','أرني كيف')}</button>
  </div>

  <p class="small muted mt2" style="text-align:center">${TR('Not your child, or something looks wrong?','ليس طفلك، أو هناك شيء غير صحيح؟')}
    <button class="btn ghost sm" data-parent-dispute>🚩 ${TR('Tell the school','أبلغ المدرسة')}</button></p>`;
}

function parentAttendance(){
  const c=currentChild(); const days=attendanceDays(c);
  const present=days.filter(d=>d==='present').length;
  const absent=days.filter(d=>d==='absent').length;
  const late=days.filter(d=>d==='late').length;
  // Per-subject attendance — derived from each subject's lesson days during the period.
  // Same overall attendance shape but with realistic per-subject variance (deterministic from name).
  const SUBJ_ICONS={'Science':'🔬','Arabic':'📖','Mathematics':'➗','English':'🔤','Social Studies':'🌍'};
  const perSubj = SUBJECTS.map(su=>{
    const total = 18 + (hashStr(c.id+su) % 6); // 18-23 sessions per subject this term
    // pull realistic gap per subject — math/science usually highest attendance, social studies lower spread
    const skewByName = {'Science':0,'Arabic':1,'Mathematics':0,'English':2,'Social Studies':3}[su]||0;
    const missed = Math.min(total, Math.round(absent * (0.5 + (hashStr(c.id+'a'+su)%80)/100) ) + skewByName);
    const lateN = Math.min(total - missed, Math.round(late * (hashStr(c.id+'l'+su)%80)/100));
    const att = total - missed - lateN;
    const pct = Math.round(att/total*100);
    const tone = pct>=90?'ok' : pct>=75?'warn' : 'risk';
    return {su, total, att, missed, lateN, pct, tone};
  }).sort((a,b)=>a.pct-b.pct); // worst first — parent's attention goes where it's needed
  const lowSubj = perSubj[0]; // the worst-attended subject
  const AR=S.settings.lang==='ar';
  const subjLabel = (su)=>AR?(SUBJECTS_AR[su]||su):su;
  const read = TR(
    `Attendance for ${arName(c)}. At school ${present} days. Away ${absent} days. Late ${late} days, out of ${days.length} school days. Per subject: `+ perSubj.map(p=>`${subjLabel(p.su)} ${p.pct} percent, attended ${p.att} of ${p.total}`).join('. '),
    `حضور ${arName(c)}. حضر ${present} يومًا. غاب ${absent} يومًا. تأخّر ${late} يومًا من ${days.length} يومًا دراسيًّا. تفصيل حسب المادّة: `+ perSubj.map(p=>`${subjLabel(p.su)} ${p.pct} بالمئة، حضر ${p.att} من ${p.total}`).join('. '));
  return `
  <div class="page-head"><div><p class="eyebrow">${esc(arName(c))}</p><h1>${t('attendance')}</h1></div>${speakBtn(read,TR('Read this page','اقرأ هذه الصفحة'))}</div>
  ${childPicker()}
  <div class="bigtiles mb">
    <div class="bigtile ok"><span class="em" aria-hidden="true">✅</span><span class="bignum">${present}</span><span class="word" style="font-size:1.1rem">${TR('At school','في المدرسة')}</span></div>
    <div class="bigtile risk"><span class="em" aria-hidden="true">❌</span><span class="bignum">${absent}</span><span class="word" style="font-size:1.1rem">${TR('Away','غائب')}</span></div>
    <div class="bigtile warn"><span class="em" aria-hidden="true">⏰</span><span class="bignum">${late}</span><span class="word" style="font-size:1.1rem">${TR('Late','متأخر')}</span></div>
  </div>

  ${lowSubj.pct<90?`<div class="calm mb" style="background:${lowSubj.tone==='risk'?'var(--risk-050)':'var(--warn-050)'};border-color:${lowSubj.tone==='risk'?'var(--risk-700)':'var(--warn-700)'};color:var(--ink)">
    <span class="em" aria-hidden="true">${lowSubj.tone==='risk'?'⚠️':'👀'}</span>
    <span>${TR(`${esc(arName(c))} attends <strong>${subjLabel(lowSubj.su)}</strong> the least — ${lowSubj.pct}% (missed ${lowSubj.missed} of ${lowSubj.total} sessions). It may help to ask why.`,`أقلّ حضور لـ ${esc(arName(c))} في مادّة <strong>${subjLabel(lowSubj.su)}</strong> — ${lowSubj.pct}% (غاب عن ${lowSubj.missed} من ${lowSubj.total} حصّة). قد يفيد سؤاله عن السبب.`)}</span>
  </div>`:''}

  <div class="card mb">
    <div class="flex between center wrapw" style="margin-bottom:.7rem">
      <h2 style="margin:0">📚 ${TR('Attendance by subject','الحضور حسب المادّة')}</h2>
      <span class="muted small">${TR('This term','هذا الفصل')}</span>
    </div>
    <p class="small muted" style="margin:0 0 .8rem">${TR(`Your child may be present on some subjects and away on others. Here is the picture for each one.`,`قد يحضر طفلك بعض المواد ويغيب عن أخرى. وهذه الصورة لكلّ مادّة على حدة.`)}</p>
    <div style="display:grid;gap:.7rem">
      ${perSubj.map(p=>{
        const fillCol = p.tone==='ok' ? 'var(--ok-700)' : p.tone==='warn' ? 'var(--warn-700)' : 'var(--risk-700)';
        const tagText = p.tone==='ok' ? TR('Good','جيّد') : p.tone==='warn' ? TR('Watch','تابعه') : TR('Needs attention','يحتاج انتباه');
        return `<div style="background:var(--paper);border:1.5px solid var(--line);border-inline-start:5px solid ${fillCol};border-radius:var(--radius);padding:.7rem .9rem">
          <div class="flex between center wrapw" style="gap:.5rem;margin-bottom:.4rem">
            <strong style="font-size:1.02rem"><span aria-hidden="true" style="margin-inline-end:.4rem">${SUBJ_ICONS[p.su]||'📘'}</span>${esc(subjLabel(p.su))}</strong>
            <div class="flex center" style="gap:.4rem">
              <strong style="color:${fillCol};font-size:1.05rem">${p.pct}%</strong>
              <span class="tag ${p.tone}" style="font-size:.72rem">${tagText}</span>
            </div>
          </div>
          <div class="bar ${p.tone}" role="img" aria-label="${p.pct}%" style="margin-bottom:.4rem"><span style="width:${p.pct}%"></span></div>
          <div class="flex" style="gap:.5rem;flex-wrap:wrap;font-size:.85rem">
            <span style="color:var(--ok-700);font-weight:700">✅ ${p.att} ${TR('attended','حضر')}</span>
            ${p.missed?`<span style="color:var(--risk-700);font-weight:700">❌ ${p.missed} ${TR('missed','غاب')}</span>`:''}
            ${p.lateN?`<span style="color:var(--warn-700);font-weight:700">⏰ ${p.lateN} ${TR('late','متأخر')}</span>`:''}
            <span class="muted" style="margin-inline-start:auto">${TR('out of','من أصل')} ${p.total} ${TR('sessions','حصّة')}</span>
          </div>
        </div>`;
      }).join('')}
    </div>
  </div>

  <div class="card">
    <div class="flex between center wrapw"><h2 style="margin:0">${TR('Last '+days.length+' school days','آخر '+days.length+' يومًا دراسيًّا')} <span class="muted small" style="font-weight:400">· ${TR('as of','حتى')} ${fmtDate({day:'numeric',month:'short'})}</span></h2>
      <div class="pill-row"><span class="tag ok">✅ ${TR('At school','حاضر')}</span><span class="tag warn">⏰ ${TR('Late','متأخر')}</span><span class="tag risk">❌ ${TR('Away','غائب')}</span></div></div>
    <div class="dotgrid mt" aria-hidden="true">
      ${days.map(d=>`<span class="d ${d}">${d==='present'?'✓':d==='late'?'⏰':'✕'}</span>`).join('')}
    </div>
    <p class="sr-only">${days.map((d,i)=>`${TR('day','يوم')} ${i+1} ${d}`).join(', ')}.</p>
    <p class="mt" style="font-size:1.05rem">${TR(`${esc(arName(c))} was at school ${present} of ${days.length} days.`,`حضر ${esc(arName(c))} ${present} من ${days.length} أيام.`)}</p>
  </div>`;
}
function parentMarks(){
  const c=currentChild();
  const read=TR('Results for '+arName(c)+'. ',`نتائج ${arName(c)}. `) + SUBJECTS.map(su=>`${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}: ${c.mastery[su]} ${TR('percent','بالمئة')}`).join('. ') + '.';
  const nbar=v=>`<span class="bar" role="img" aria-label="${v}%"><span style="width:${v}%;background:var(--teal-700)"></span></span>`;
  return `
  <div class="page-head"><div><p class="eyebrow">${esc(arName(c))}</p><h1>${TR('Assessment & quiz results','نتائج التقييم والاختبارات')}</h1></div>${speakBtn(read,TR('Read this page','اقرأ هذه الصفحة'))}</div>
  ${childPicker()}
  <div class="calm mb"><span class="em" aria-hidden="true">ℹ️</span>
    <span>${TR('These are <strong>weekly practice</strong> scores — not official exam results. You only see results your child’s teacher has <strong>released</strong>.','هذه درجات <strong>تمرين أسبوعي</strong> — وليست نتائج امتحانات رسمية. ترى فقط النتائج التي <strong>نشرها</strong> معلّم طفلك.')} <span class="muted">${TR('As of','حتى')} ${fmtDate({day:'numeric',month:'long',year:'numeric'})}.</span></span></div>
  <div class="card">
    <p class="eyebrow">${TR('Assessment results by subject','نتائج التقييم حسب المادة')}</p>
    ${SUBJECTS.map(su=>{const v=c.mastery[su];
      return `<div class="flex between center" style="padding:.7rem 0;border-bottom:1px solid var(--line);gap:.8rem;flex-wrap:wrap">
        <div style="flex:1;min-width:150px;font-weight:800;font-size:1.05rem">${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}</div>
        <div style="min-width:140px;flex:1">${nbar(v)}</div>
        <div class="bignum" style="font-size:1.5rem">${v}%</div>
        ${speakBtn((S.settings.lang==='ar'?SUBJECTS_AR[su]:su)+': '+v+' '+TR('percent','بالمئة'),'')}
      </div>`;}).join('')}
  </div>
  <div class="card mt">
    <p class="eyebrow">${TR('Gradebook by subject','سجلّ الدرجات حسب المادة')}</p>
    <p class="small muted" style="margin:0 0 .5rem">${TR('Weekly-test and term-exam marks entered by the teacher.','درجات الاختبار الأسبوعي وامتحان الفصل التي أدخلها المعلّم.')}</p>
    <div style="overflow-x:auto"><table style="width:100%;border-collapse:collapse">
      <caption class="sr-only">${TR('Gradebook by subject','سجلّ الدرجات حسب المادة')}</caption>
      <thead><tr>
        <th scope="col" style="text-align:start;padding:.4rem .5rem;border-bottom:2px solid var(--line)">${TR('Subject','المادة')}</th>
        <th scope="col" style="text-align:end;padding:.4rem .5rem;border-bottom:2px solid var(--line)">${TR('Weekly test','الاختبار الأسبوعي')}</th>
        <th scope="col" style="text-align:end;padding:.4rem .5rem;border-bottom:2px solid var(--line)">${TR('Term exam','امتحان الفصل')}</th>
      </tr></thead>
      <tbody>${SUBJECTS.map(su=>{const e=examMarkFor(c,su);return `<tr>
        <th scope="row" style="text-align:start;font-weight:600;padding:.4rem .5rem;border-bottom:1px solid var(--line)">${S.settings.lang==='ar'?SUBJECTS_AR[su]:su}</th>
        <td style="text-align:end;padding:.4rem .5rem;border-bottom:1px solid var(--line)">${e.wk}%</td>
        <td style="text-align:end;padding:.4rem .5rem;border-bottom:1px solid var(--line)">${e.tm}%</td>
      </tr>`;}).join('')}</tbody>
    </table></div>
    <p class="tiny muted mt">${TR('School marks for following learning. Official national exams are recorded separately in the Ministry’s system.','درجات المدرسة لمتابعة التعلّم. أمّا الامتحانات الوطنية الرسمية فتُسجَّل منفصلةً في نظام الوزارة.')}</p>
  </div>
  <div class="card mt" style="border-inline-start:6px solid var(--info-700)">
    <p class="eyebrow">${TR('Latest quiz','آخر اختبار')} <span class="tag ok">${TR('Released','منشور')}</span> <span class="tag">${fmtDate({day:'numeric',month:'short'})}</span></p>
    <div class="flex between center wrapw" style="gap:.6rem">
      <p style="margin:0;font-size:1.05rem;flex:1;min-width:200px"><strong>${TR('Science — The water cycle','العلوم — دورة الماء')}</strong></p>
      <span class="bignum" style="font-size:1.5rem">${c.mastery['Science']}%</span>
      ${speakBtn(TR('Science, the water cycle. '+c.mastery['Science']+' percent.','العلوم، دورة الماء. '+c.mastery['Science']+' بالمئة.'),'')}
    </div>
  </div>
  <p class="small muted mt2" style="text-align:center">${TR('Not your child, or something looks wrong?','ليس طفلك، أو هناك شيء غير صحيح؟')}
    <button class="btn ghost sm" data-parent-dispute>🚩 ${TR('Tell the school','أبلغ المدرسة')}</button></p>`;
}

function parentMessages(){
  const c=currentChild();
  const msgs=[
    {who:TR('Ms. Mona (Class teacher)','أ. منى (معلّمة الفصل)'), av:'🧑‍🏫', when:TR('Today','اليوم'), body:TR(`${arName(c)}'s Science quiz results are ready. ${arName(c)} is making progress — please encourage 10 minutes of reading each evening.`,`نتائج اختبار العلوم لـ ${arName(c)} جاهزة. ${arName(c)} يتقدّم — يرجى تشجيعه على القراءة 10 دقائق كلّ مساء.`)},
    {who:TR('School office','إدارة المدرسة'), av:'🏫', when:TR('Yesterday','أمس'), body:TR(`Reminder: parent meeting this Thursday at 4pm. You can also call the school if you cannot come.`,`تذكير: اجتماع أولياء الأمور الخميس الساعة 4 مساءً. يمكنكم الاتّصال بالمدرسة إن تعذّر الحضور.`)},
    {who:'Manassa', av:'📱', when:TR('This week','هذا الأسبوع'), body:TR(`You will not get messages for every small change. The school only contacts you directly in serious cases — for everything else, just check here whenever you like.`,`لن تصلك رسالة عن كلّ تغيير بسيط. تتواصل المدرسة معك مباشرةً في الحالات المهمّة فقط — وما عدا ذلك، تابع هنا متى شئت.`)},
  ];
  return `
  <div class="page-head"><div><p class="eyebrow">${esc(arName(c))}</p><h1>${t('messages')}</h1></div></div>
  ${childPicker()}
  <p style="font-size:1.05rem">${TR('Messages from the school. Tap 🔊 to listen to any message.','رسائل من المدرسة. اضغط 🔊 للاستماع إلى أيّ رسالة.')}</p>
  <div class="card">
    ${msgs.map(m=>`<div class="msg">
      <span class="av" aria-hidden="true">${m.av}</span>
      <div class="body"><div class="flex between center wrapw"><span class="who">${esc(m.who)}</span><span class="when">${esc(m.when)}</span></div>
        <p style="margin:.3rem 0;font-size:1.05rem">${esc(m.body)}</p>
        ${speakBtn(m.who+': '+m.body,'')}</div>
    </div>`).join('')}
    <div class="mt"><button class="btn" data-help>↩ ${TR('Reply / call the school','الردّ / الاتّصال بالمدرسة')}</button></div>
  </div>`;
}

/* ===================== TRAINING / "LEARN HOW" (every portal) ===================== */
const TRAINING={
  teacher:{ icon:'🧑‍🏫', title:'How to use the Teacher portal', title_ar:'كيف تستخدم بوابة المعلّم', steps:[
    'Open Attendance — everyone is already marked present. Just tap the few who are away or late. It saves by itself.',
    'Open the Gradebook — everyone starts at full marks. Just lower the ones who scored less. Changes save as you type, then tap Submit to send them.',
    'On your Dashboard, the "Students needing support" list updates by itself. Tap a name to see their trend and a suggested next step.',
    'Use Assessments to release results — students then see their score and the correct answers.'],
    steps_ar:[
    'افتح «الحضور» — الجميع مُسجَّل حاضرًا. اضغط فقط على من تغيّب أو تأخّر.',
    'افتح «درجات الامتحانات» — الجميع يبدأ بالدرجة الكاملة. اخفض درجات من حصلوا على أقلّ فقط. تُحفظ التغييرات أثناء الكتابة، ثمّ اضغط «إرسال».',
    'في لوحة المتابعة، تتحدّث قائمة «الطلاب المحتاجون للدعم» تلقائيًّا. اضغط على اسم لترى مساره وخطوة مقترحة.',
    'استخدم «التقييمات» لنشر النتائج — عندها يرى الطلاب درجتهم والإجابات الصحيحة.'],
  },
  student:{ icon:'🧑‍🎓', title:'How to use the Student portal', title_ar:'كيف تستخدم بوابة الطالب', steps:[
    'Your week shows your next tasks. Tap "Start" on a quiz or "Open" on a lesson.',
    'In a lesson, use 🔊 Read-aloud if that helps you.',
    'In a quiz, answers save by themselves. If your internet drops, just come back and continue.',
    'After a quiz you can see the correct answers, so you can learn from any mistakes.'],
    steps_ar:[
    'يعرض أسبوعك مهامّك التالية. اضغط «ابدأ» على اختبار أو «افتح» على درس.',
    'في الدرس، استعمل 🔊 القراءة الصوتية إن كان ذلك يساعدك.',
    'في الاختبار، تُحفظ الإجابات تلقائيًّا. إذا انقطع الإنترنت، عُد وأكمل من حيث توقّفت.',
    'بعد الاختبار يمكنك رؤية الإجابات الصحيحة لتتعلّم من أيّ خطأ.'],
  },
  parent:{ icon:'👪', title:'How to use the Parent portal', title_ar:'كيف تستخدم بوابة وليّ الأمر', steps:[
    'The Home screen shows a colour: green is good, yellow means keep an eye, red means your child needs help.',
    'Tap the big buttons to see Attendance (days at school), Marks (how your child is doing), or Messages.',
    'Press the 🔊 button anywhere to have the page read to you out loud. You do not need to read.',
    'Check whenever you like — nothing is sent to bother you. The school only contacts you directly in serious cases, like if your child is often absent.'],
    steps_ar:[
    'تعرض الشاشة الرئيسية لونًا: الأخضر جيّد، والأصفر يعني المتابعة، والأحمر يعني أنّ ابنك يحتاج مساعدة.',
    'اضغط الأزرار الكبيرة لرؤية الحضور (أيام المدرسة)، أو الدرجات (كيف يبلي ابنك)، أو الرسائل.',
    'اضغط زرّ 🔊 في أيّ مكان ليُقرأ لك المحتوى بصوتٍ عالٍ. لست بحاجة إلى القراءة.',
    'تابع متى شئت — لا تصلك رسائل مزعجة. تتواصل المدرسة معك مباشرةً في الحالات المهمّة فقط، مثل تكرار الغياب.'],
  },
  admin:{ icon:'🏛️', title:'How to use the Administrator portal', title_ar:'كيف تستخدم بوابة المسؤول', steps:[
    'You only see your own level and below — a principal sees their school, the minister sees the nation. Tap a tile to drill down; use the breadcrumb to go back up.',
    'Use the breadcrumb at the top to jump back up to any level.',
    'Switch the equity view to break figures down by gender or disability.',
    'Rosters hide names by default. Revealing names is recorded in the on-screen audit log.'],
    steps_ar:[
    'ترى مستواك وما دونه فقط — يرى مدير المدرسة مدرسته، ويرى الوزير الوطن كلّه. اضغط بطاقة للتعمّق؛ واستعمل شريط المسار للعودة للأعلى.',
    'استعمل شريط المسار في الأعلى للقفز صعودًا إلى أيّ مستوى.',
    'بدّل «عرض الإنصاف» لتفصيل الأرقام حسب النوع أو الإعاقة.',
    'تُخفى الأسماء في القوائم افتراضيًّا. ويُسجَّل إظهار الأسماء في سجلّ التدقيق على الشاشة.'],
  },
};
const ICON_GLOSSARY=[
  ['🔊','Read aloud','القراءة الصوتية'],['⚙','Accessibility','إمكانية الوصول'],['?','Help','مساعدة'],
  ['✅','At school / correct','حاضر / صحيح'],['❌','Away','غائب'],['⏰','Late','متأخّر'],['⭐','Marks','الدرجات'],
  ['🗓️','Attendance','الحضور'],['✉️','Messages','الرسائل'],['⬇️','Save offline','حفظ للعمل دون إنترنت'],['♿','Has accommodations','لديه تيسيرات'],
];
const FAQS={
  common:[
    {q:'How do I change the language?', a:'Use the EN / ع switch at the very top of any screen. Everything, including lessons and quizzes, switches between English and Arabic, and the layout flips for Arabic.',
     q_ar:'كيف أغيّر اللغة؟', a_ar:'استعمل مفتاح EN / ع في أعلى أيّ شاشة. يتغيّر كلّ شيء — بما في ذلك الدروس والاختبارات — بين العربية والإنجليزية، ويتبدّل اتّجاه الصفحة للعربية.'},
    {q:'How do I make the text bigger or turn on read-aloud?', a:'Open Settings at the top, then use the accessibility options: larger text, high contrast, reduced motion, reading spacing and read-aloud. They change only Manassa, not your device.',
     q_ar:'كيف أكبّر الخطّ أو أشغّل القراءة الصوتية؟', a_ar:'افتح «الإعدادات» في الأعلى، ثمّ استعمل خيارات إمكانية الوصول: تكبير الخطّ، التباين العالي، تقليل الحركة، تباعد القراءة، والقراءة الصوتية. تغيّر هذه الخيارات منصّة فقط، لا جهازك.'},
    {q:'Does it work if my internet drops?', a:'Yes. Your work is saved as you go, so nothing is lost if the connection drops or your session ends — you can carry on where you left off. Saved lessons open without internet.',
     q_ar:'هل يعمل إذا انقطع الإنترنت؟', a_ar:'نعم. يُحفظ عملك أوّلًا بأوّل، فلا يضيع شيء إذا انقطع الاتّصال أو انتهت الجلسة — تكمل من حيث توقّفت. وتُفتح الدروس المحفوظة دون إنترنت.'},
  ],
  teacher:[
    {q:'Do I need to submit attendance and marks?', a:'They save on their own as you tap. There is also a Submit button to send the day\u2019s record. If everything is still the default — everyone present, or everyone at full marks — it asks you to confirm first, to catch mistakes.',
     q_ar:'هل يجب أن أرسل الحضور والدرجات؟', a_ar:'تُحفظ تلقائيًّا أثناء النقر. وهناك زرّ «إرسال» لإرسال سجلّ اليوم. وإذا بقي كلّ شيء على الوضع الافتراضي — الجميع حاضر أو الجميع بالدرجة الكاملة — يطلب منك التأكيد أوّلًا تفاديًا للخطأ.'},
    {q:'Why does everyone start at full marks?', a:'To save time: you only lower the few who scored less, instead of typing every score. You can change any score, and the confirm step protects against submitting full marks by mistake.',
     q_ar:'لماذا يبدأ الجميع بالدرجة الكاملة؟', a_ar:'لتوفير الوقت: تخفض فقط درجات من حصلوا على أقلّ، بدل كتابة كلّ درجة. ويمكنك تعديل أيّ درجة، وخطوة التأكيد تحميك من إرسال الدرجات الكاملة بالخطأ.'},
  ],
  student:[
    {q:'Which quiz can I take?', a:'Only this week\u2019s quiz is open. You can try a practice run first — it doesn\u2019t count — to see how it works, then do it for real. Past and future quizzes are closed so you always do the right one.',
     q_ar:'أيّ اختبار يمكنني تأديته؟', a_ar:'اختبار هذا الأسبوع فقط هو المفتوح. يمكنك تجربة «تدريب» أوّلًا — لا يُحتسب — لترى كيف يعمل، ثمّ تؤدّيه للحقيقة. الاختبارات السابقة والقادمة مغلقة لتؤدّي الصحيح دائمًا.'},
    {q:'Can I open older lessons?', a:'Yes — any lesson, any time, as many times as you like. Nothing is locked. Your teacher\u2019s lesson for the week is shown first to help you find it.',
     q_ar:'هل أستطيع فتح الدروس السابقة؟', a_ar:'نعم — أيّ درس، في أيّ وقت، كما تشاء. لا شيء مقفل. ويظهر درس الأسبوع الذي اختاره معلّمك أوّلًا لتجده بسهولة.'},
  ],
  parent:[
    {q:'Will I get a message every day?', a:'No. You only get a message for something important, such as repeated absence — never routine daily texts. Everything else you can check yourself, with pictures and read-aloud.',
     q_ar:'هل تصلني رسالة كلّ يوم؟', a_ar:'لا. تصلك رسالة فقط لأمرٍ مهمّ، مثل تكرار الغياب — لا رسائل يومية روتينية. وكلّ ما عدا ذلك يمكنك متابعته بنفسك، بالصور والقراءة الصوتية.'},
    {q:'I can\u2019t read well — can it read to me?', a:'Yes. Tap the 🔊 button on any item and it will read it aloud, in Arabic when Arabic is chosen. The portal uses pictures and faces so you can understand at a glance.',
     q_ar:'لا أقرأ جيّدًا — هل يقرأ لي؟', a_ar:'نعم. اضغط زرّ 🔊 على أيّ عنصر فيقرأه بصوتٍ عالٍ، بالعربية عند اختيار العربية. وتستعمل البوابة الصور والوجوه لتفهم بنظرة واحدة.'},
  ],
  admin:[
    {q:'Can I see individual student names?', a:'Names are hidden by default to protect privacy. You can reveal them when you have a reason, and every reveal is written to an on-screen audit log.',
     q_ar:'هل أرى أسماء الطلاب؟', a_ar:'الأسماء مخفية افتراضيًّا لحماية الخصوصية. يمكنك إظهارها عند وجود سبب، ويُسجَّل كلّ إظهار في سجلّ تدقيق ظاهر على الشاشة.'},
    {q:'How far can I drill down?', a:'Only within your role\u2019s scope — a principal sees their school, an idara its schools, and so on. You can never go above the level you are responsible for.',
     q_ar:'إلى أيّ مدى يمكنني التعمّق؟', a_ar:'ضمن نطاق دورك فقط — يرى مدير المدرسة مدرسته، والإدارة مدارسها، وهكذا. ولا يمكنك تجاوز المستوى المسؤول عنه أبدًا.'},
  ],
};
function faqSection(role){
  const list=(FAQS[role]||[]).concat(FAQS.common);
  return `
  <div class="card mt">
    <h2 style="margin-top:0"><span aria-hidden="true">❓</span> ${t('faqs')}</h2>
    <p class="small muted">${t('faqIntro')}</p>
    ${list.map(f=>`<details class="faq">
      <summary>${esc(L(f,'q'))}</summary>
      <div class="faq-a">${esc(L(f,'a'))} ${speakBtn(L(f,'q')+'. '+L(f,'a'),'')}</div>
    </details>`).join('')}
  </div>`;
}

/* ===================== TEACHER PROFESSIONAL DEVELOPMENT (CPD) ===================== */
const TPD_MODULES=[
  {id:'cbp', mins:45, topic:['Competency-based teaching','تعليم قائم على الكفايات'], title:['From rote to understanding','من التلقين إلى الفهم'],
   bullets:[['Turn one lesson objective into a “can-do” skill','حوّل هدف درس إلى مهارة «يستطيع أن…»'],['Ask questions that need reasoning, not recall','اطرح أسئلة تتطلّب تفكيرًا لا حفظًا'],['Let students explain their thinking aloud','دع الطلاب يشرحون تفكيرهم بصوت عالٍ']],
   task:['Run one 10-minute “explain why” discussion this week and note what surprised you.','نفّذ نقاشًا «اشرح لماذا» لعشر دقائق هذا الأسبوع ودوّن ما فاجأك.']},
  {id:'ict', mins:30, topic:['ICT in the classroom','التقنية في الفصل'], title:['Beyond the smartboard — tech trends for Egyptian classrooms','أبعد من السبّورة الذكية — اتّجاهات التقنية في الفصل المصري'],
   bullets:[['Use the platform’s lesson + video as a task, not a screen to watch','استخدم درس المنصّة والفيديو كمهمّة لا كشاشة تُشاهَد'],['Set a short in-platform quiz and read the result together','اضبط اختبارًا قصيرًا واقرأوا النتيجة معًا'],['Share one lesson to students’ devices for home practice','شارك درسًا لأجهزة الطلاب للتدرّب في البيت']],
   task:['Assign one in-platform quiz and use its results to plan your next lesson.','كلّف باختبار واحد واستخدم نتائجه لتخطيط درسك التالي.'],
   article:[
    // [English, Arabic]
    ['Three trends are quietly reshaping the way subjects are taught in Egyptian classrooms — and none of them is the smartboard. They are <strong>offline-first content</strong>, <strong>in-platform video</strong>, and <strong>quick formative checks</strong>. This module shows you what each one looks like in practice, using the Aquatic Ecosystem unit from Secondary 1 Science as the live example.',
     'ثلاثة اتّجاهات تُعيد بهدوء تشكيل طريقة تدريس المواد في الفصل المصري — ولا أحد منها هو السبّورة الذكية. وهي: <strong>المحتوى الذي يعمل دون اتصال</strong>، و<strong>الفيديو داخل المنصّة</strong>، و<strong>الفحوص التكوينيّة السريعة</strong>. تعرض هذه الوحدة كيف يبدو كلٌّ منها عمليًّا، باستخدام وحدة «النظام البيئي المائي» من علوم الصف الأول الثانوي مثالًا حيًّا.'],
    ['<strong>1. Offline-first content.</strong> The student doesn\'t need a strong connection to read the textbook. The full unit lives on their device after the first visit, and a lightweight text version is available for the weakest connections. Open the embedded book below — that is what your students see.',
     '<strong>١. محتوى يعمل دون اتصال.</strong> لا يحتاج الطالب إلى اتصال قويّ ليقرأ الكتاب. تعيش الوحدة كاملةً على جهازه بعد الزيارة الأولى، وتتوفّر نسخة نصّيّة خفيفة لأضعف الاتصالات. افتح الكتاب المُضمَّن أسفلَه — هذا ما يراه طلابك.'],
    ['<strong>2. In-platform video.</strong> A short, focused clip can replace fifteen minutes of explanation if it sits next to the lesson, not on YouTube where attention leaks. The water-cycle clip below opens inside the platform; the student never leaves it, and you keep the lesson context.',
     '<strong>٢. فيديو داخل المنصّة.</strong> يمكن لمقطع قصير وموجّه أن يحلّ محلّ خمس عشرة دقيقة من الشرح إذا كان بجوار الدرس، لا على يوتيوب حيث يتسرّب الانتباه. يفتح مقطع دورة الماء أدناه داخل المنصّة؛ ولا يغادرها الطالب، ويبقى سياق الدرس محفوظًا.'],
    ['<strong>3. Quick formative checks.</strong> A 5-question quiz at the end of the unit tells you, in two minutes, where the class is. Don\'t treat the result as a grade — treat it as a map. Open one quiz with your class and read the results together; the goal is the next teaching move, not the score.',
     '<strong>٣. فحوص تكوينيّة سريعة.</strong> اختبار من خمسة أسئلة في نهاية الوحدة يُخبرك، خلال دقيقتين، أين يقف الصفّ. لا تتعامل مع النتيجة كدرجة — بل كخريطة. افتح اختبارًا واحدًا مع صفّك واقرأوا النتائج معًا؛ الهدف هو الخطوة التدريسيّة التالية، لا الدرجة.'],
   ],
   pdfPath:'pdfs/science-u1-ar.pdf',
   pdfTitle:['Demo: Aquatic Ecosystem (Secondary 1 Science)','عرض توضيحي: النظام البيئي المائي (علوم الأول الثانوي)'],
   ytId:'EWjBscnPzsE',
   videoTitle:['The water cycle — simple explanation','دورة الماء — شرح مبسّط']},
  {id:'fln', mins:40, topic:['Foundational literacy & numeracy','أساسيّات القراءة والحساب'], title:['Strong foundations first','الأساس أوّلًا'],
   bullets:[['Spot the few students missing a basic skill early','اكتشف مبكّرًا الطلاب الذين تنقصهم مهارة أساسية'],['Five-minute daily fluency routines','روتين يوميّ للطلاقة في خمس دقائق'],['Group by need, not by rank','جمّع حسب الحاجة لا حسب الترتيب']],
   task:['Pick three students from your “needs support” list and try a 5-minute daily routine.','اختر ثلاثة من قائمة «المحتاجون للدعم» وجرّب روتينًا يوميًّا من خمس دقائق.']},
  {id:'inc', mins:35, topic:['Inclusive education','التعليم الدامج'], title:['Reaching every learner','الوصول إلى كلّ متعلّم'],
   bullets:[['Recognise signs a child may need extra support','تعرّف على علامات حاجة الطفل لدعم إضافي'],['Simple adjustments: seating, read-aloud, more time','تعديلات بسيطة: الجلوس، القراءة الصوتية، وقت أطول'],['Work with families respectfully and privately','تعاون مع الأسر باحترام وخصوصية']],
   task:['Use the lesson read-aloud and image-descriptions with a student who struggles to read.','استخدم القراءة الصوتية ووصف الصور مع طالب يجد صعوبة في القراءة.']},
  {id:'afl', mins:30, topic:['Assessment for learning','التقويم من أجل التعلّم'], title:['Marks that guide, not just judge','درجات تُرشد لا تحكم فقط'],
   bullets:[['Give one specific next step, not just a number','أعطِ خطوة تالية محدّدة لا مجرّد رقم'],['Use the gradebook trend to spot who is slipping','استخدم اتّجاه الدرجات لاكتشاف من يتراجع'],['Quick checks during the lesson, not only at the end','فحوص سريعة أثناء الدرس لا في نهايته فقط']],
   task:['Write one concrete next step for three students after your next quiz.','اكتب خطوة تالية محدّدة لثلاثة طلاب بعد اختبارك القادم.']},
  {id:'cop', mins:25, topic:['Communities of practice','مجتمعات الممارسة'], title:['Learning from each other','نتعلّم من بعضنا'],
   bullets:[['Share one thing that worked with a colleague','شارك زميلًا أمرًا واحدًا نجح معك'],['Borrow a ready activity instead of building alone','استعِر نشاطًا جاهزًا بدل البناء وحدك'],['Ask for help early — it is normal','اطلب المساعدة مبكّرًا — هذا طبيعيّ']],
   task:['Post one classroom idea, or try a colleague’s, in your subject community this week.','انشر فكرة صفّية، أو جرّب فكرة زميل، في مجتمع مادّتك هذا الأسبوع.']},
];
const TPD_COMMUNITIES=[
  {name:['Science teachers — your governorate','معلّمو العلوم — محافظتك'], n:312},
  {name:['Foundational literacy circle','حلقة أساسيّات القراءة'], n:1840},
  {name:['Inclusive classrooms','الفصول الدامجة'], n:560},
];
function tpdTopic(m){ return S.settings.lang==='ar'?m.topic[1]:m.topic[0]; }
function tpdTitle(m){ return S.settings.lang==='ar'?m.title[1]:m.title[0]; }
function teacherTPD(){
  if(S.tpd.open) return tpdModuleView(S.tpd.open);
  const AR=S.settings.lang==='ar'; const done=S.tpd.done;
  const doneHrs=TPD_MODULES.filter(m=>done[m.id]).reduce((a,m)=>a+m.mins,0)/60;
  const target=50; const pct=Math.min(100,Math.round(doneHrs/target*100));
  return `<div class="page-head"><div><p class="eyebrow">🎓 ${AR?'تدريب مهني':'My professional development'}</p>
    <h1>${AR?'طوّر تدريسك':'Grow your teaching'}</h1>
    </div></div>
  <div class="card"><div class="flex between center wrapw" style="gap:.5rem">
    <strong>${AR?'تطوّرك هذا العام':'Your development this year'}</strong>
    <span class="muted small">${doneHrs.toFixed(doneHrs%1?1:0)} / ${target} ${AR?'ساعة':'hours'}</span></div>
    <div class="bar mt" style="height:14px;background:var(--line);border-radius:99px;overflow:hidden"><div style="height:100%;width:${pct}%;background:var(--teal-700)"></div></div>
    <p class="small muted" style="margin:.4rem 0 0">${AR?'الهدف الوطنيّ: 50 ساعة تطوير مهنيّ مستمرّ سنويًّا. كلّ وحدة تُصدر شهادة موثّقة تُربط بسجلّك المهني.':'National goal: 50 hours of continuous professional development a year. Each module issues a verifiable certificate linked to your professional record.'}</p>
  </div>
  <h2 style="margin:1.2rem 0 .5rem">${AR?'وحدات قصيرة':'Short courses'}</h2>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:1rem">
    ${TPD_MODULES.map(m=>{const isDone=!!done[m.id]; return `<div class="card" style="display:flex;flex-direction:column">
      <span class="tag" style="align-self:flex-start;background:var(--teal-050);color:var(--teal-900)">${esc(tpdTopic(m))}</span>
      <strong style="font-size:1.08rem;margin:.4rem 0 .2rem">${esc(tpdTitle(m))}</strong>
      <p class="small muted" style="margin:0 0 .6rem">⏱️ ${m.mins} ${AR?'دقيقة':'min'} ${isDone?`· <span class="sec-yes">✓ ${AR?'مكتمل':'Completed'}</span>`:''}</p>
      <button class="btn ${isDone?'ghost':''} sm" data-tpd-open="${m.id}" style="margin-top:auto">${isDone?(AR?'مراجعة':'Review'):(AR?'ابدأ':'Start')} ${aFwd()}</button>
    </div>`;}).join('')}
  </div>
  <h2 style="margin:1.4rem 0 .5rem">${AR?'مجتمعات الممارسة':'Communities of practice'}</h2>
  <p class="small muted" style="margin:0 0 .6rem">${AR?'تعلّم من زملائك — شارك ما نجح معك، واستعِر أنشطة جاهزة. التطوير أفقيّ بين المعلّمين، لا أوامر من أعلى.':'Learn from colleagues — share what worked and borrow ready activities. Development is peer-to-peer, not top-down.'}</p>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:.8rem">
    ${TPD_COMMUNITIES.map((cm,i)=>`<div class="card flex between center" style="gap:.6rem"><div><strong>${esc(S.settings.lang==='ar'?cm.name[1]:cm.name[0])}</strong><br><span class="small muted">👥 ${cm.n.toLocaleString()} ${AR?'معلّم':'teachers'}</span></div><button class="btn sec sm" data-tpd-community="${i}">${AR?'انضمّ':'Join'}</button></div>`).join('')}
  </div>`;
}
function tpdModuleView(id){
  const m=TPD_MODULES.find(x=>x.id===id); if(!m) { S.tpd.open=null; return teacherTPD(); }
  const AR=S.settings.lang==='ar'; const isDone=!!S.tpd.done[id];
  const article = m.article ? `
  <div class="card mt" style="border-inline-start:6px solid var(--info-700,#0d5c8c)">
    <p class="eyebrow" style="margin:0">${AR?'📄 المقال':'📄 Article'}</p>
    ${m.article.map(p=>'<p style="margin:.6rem 0;line-height:1.85">'+(AR?p[1]:p[0])+'</p>').join('')}
  </div>` : '';
  const pdfBlock = m.pdfPath ? `
  <div class="card mt" style="border-inline-start:6px solid var(--teal-700)">
    <div class="flex between center wrapw" style="gap:.6rem;margin-bottom:.6rem">
      <div style="min-width:0">
        <p class="eyebrow" style="margin:0">${AR?'مرجع مُضمَّن · كتاب الوحدة':'Embedded reference · Unit textbook'}</p>
        <strong style="font-size:1.05rem"><span aria-hidden="true">📘</span> ${esc(AR?m.pdfTitle[1]:m.pdfTitle[0])}</strong>
        <p class="small muted" style="margin:.2rem 0 0">${AR?'يُعرض كاملًا داخل المنصّة — هذا ما يراه طلابك عند فتح الوحدة.':'Shown in full inside the platform — this is what your students see when they open the unit.'}</p>
      </div>
      <a class="btn sec sm" href="${m.pdfPath}" target="_blank" rel="noopener" style="white-space:nowrap"><span aria-hidden="true">⤢</span> ${AR?'فتح بملء الصفحة':'Open full-page'}</a>
    </div>
    <a href="#after-tpd-pdf" class="skip-pdf">${TR('Skip past the document','تخطّي إلى ما بعد المستند')}</a>
    <iframe src="${m.pdfPath}#view=FitH" title="${esc(AR?m.pdfTitle[1]:m.pdfTitle[0])}" loading="lazy" style="width:100%;height:70vh;border:1px solid var(--line);border-radius:10px;background:#fff"></iframe>
    <span id="after-tpd-pdf"></span>
  </div>` : '';
  const videoBlock = m.ytId ? `
  <div class="card mt" style="border-inline-start:6px solid var(--teal-700)">
    <div style="margin-bottom:.6rem">
      <p class="eyebrow" style="margin:0">${AR?'فيديو مُضمَّن · يُشغَّل داخل المنصّة':'Embedded video · plays in-platform'}</p>
      <strong style="font-size:1.05rem"><span aria-hidden="true">▶</span> ${esc(AR?m.videoTitle[1]:m.videoTitle[0])}</strong>
    </div>
    <div style="aspect-ratio:16/9;background:#0c1a1f;border-radius:10px;overflow:hidden">
      <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${esc(m.ytId)}?rel=0&modestbranding=1&playsinline=1&cc_load_policy=1" title="${esc(AR?m.videoTitle[1]:m.videoTitle[0])}" style="border:0;display:block" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe>
    </div>
    <p class="small" style="margin:.5rem 0 0">${AR?'لا يظهر الفيديو؟':'Video not showing?'} <a href="https://www.youtube.com/watch?v=${esc(m.ytId)}" target="_blank" rel="noopener">${AR?'افتحه على يوتيوب ↗':'Open it on YouTube ↗'}</a></p>
  </div>` : '';
  return `<button class="btn ghost sm" data-tpd-back style="margin-bottom:.6rem">${aBack()} ${AR?'كلّ الوحدات':'All modules'}</button>
  <div class="page-head"><div><p class="eyebrow">${esc(tpdTopic(m))} · ⏱️ ${m.mins} ${AR?'دقيقة':'min'}</p><h1>${esc(tpdTitle(m))}</h1></div></div>
  ${article}${pdfBlock}${videoBlock}
  <div class="card mt"><h2 style="margin-top:0;font-size:1.1rem">${AR?'ما ستتدرّب عليه':'What you’ll practise'}</h2>
    <ul style="margin:.2rem 0 0;padding-inline-start:1.2rem;line-height:1.9">${m.bullets.map(b=>`<li>${esc(AR?b[1]:b[0])}</li>`).join('')}</ul>
  </div>
  <div class="card mt" style="border-inline-start:6px solid var(--teal-700)"><p class="eyebrow">📌 ${AR?'مهمّة صفّية (طبّقها هذا الأسبوع)':'Classroom task (try it this week)'}</p>
    <p style="margin:.2rem 0 0">${esc(AR?m.task[1]:m.task[0])}</p></div>
  <div class="card mt">
    ${isDone?`<p class="tag ok" style="margin:0 0 .5rem">✓ ${AR?'مكتمل — صدرت شهادة موثّقة وأُضيفت إلى ملفّك المهني':'Completed — a verifiable certificate was issued and added to your professional file'}</p>`:''}
    <button class="btn" data-tpd-complete="${id}">${isDone?(AR?'✓ مكتمل':'✓ Completed'):(AR?'أكملت الوحدة — أصدر الشهادة':'Mark module complete — issue certificate')}</button>
    <p class="tiny muted" style="margin:.5rem 0 0">${AR?'تُحتسب الساعات في هدف الـ50 ساعة وتُربط بترقّيتك والاعتراف المهني — لا للمراقبة.':'Hours count toward your 50-hour goal and link to promotion and recognition — never to surveillance.'}</p>
  </div>`;
}
function trainingView(role){
  const data=TRAINING[role]||TRAINING.parent;
  const steps=(S.settings.lang==='ar'&&data.steps_ar)?data.steps_ar:data.steps;
  const read=L(data,'title')+'. '+steps.map((s,i)=>`${TR('Step','خطوة')} ${i+1}: ${s}`).join(' ');
  return `
  <div class="page-head"><div><p class="eyebrow">${t('training')}</p><h1>${esc(L(data,'title'))}</h1>
    <p class="muted small" style="margin:0">${TR('A short, picture-led guide. Press play to have it read to you.','دليل قصير بالصور. اضغط تشغيل ليُقرأ لك.')}</p></div>
    ${speakBtn(read,TR('Read the whole guide','اقرأ الدليل كاملًا'))}</div>

  <div class="card">
    <div class="flex between center"><h2 style="margin:0"><span aria-hidden="true">${data.icon}</span> ${TR('Quick start','بداية سريعة')}</h2>
      <button class="btn sec" data-replay-tour="${role}">▶ ${t('replayTour')}</button></div>
    <ol class="steps mt">
      ${steps.map(s=>`<li><span style="flex:1">${esc(s)} ${speakBtn(s,'')}</span></li>`).join('')}
    </ol>
  </div>

  <div class="card mt">
    <h2 style="margin-top:0">${TR('What the pictures mean','معنى الصور')}</h2>
    <div class="glossary">
      ${ICON_GLOSSARY.map(([e,l,la])=>`<div class="gloss"><span class="em" aria-hidden="true">${e}</span><span>${esc(TR(l,la||l))}</span></div>`).join('')}
    </div>
  </div>

  ${faqSection(role)}

  <div class="card mt" style="display:flex;gap:1rem;align-items:center;flex-wrap:wrap">
    <span class="em" aria-hidden="true" style="font-size:2rem">📞</span>
    <div style="flex:1;min-width:220px"><strong style="font-size:1.1rem">${S.settings.lang==='ar'?'تحتاج إلى شخص حقيقي؟':'Need a real person?'}</strong>
      <p style="margin:.2rem 0 0">${S.settings.lang==='ar'?'اتّصل بخطّ المساعدة الوطني المجاني <strong dir="ltr">0800 1000 200</strong>، أو اسأل منسّق الحاسب في مدرستك.':'Call the free national helpdesk on <strong dir="ltr">0800 1000 200</strong>, or ask your school\u2019s digital coordinator.'}</p></div>
    <button class="btn sec" data-help>${S.settings.lang==='ar'?'افتح المساعدة':'Open Help'}</button>
  </div>`;
}

/* ===================== ONBOARDING TOUR (built in, runs on first entry) ===================== */
const TOURS={
  teacher:[
    {em:'\u{1F44B}', h:'Welcome, teacher', p:'This is your daily workspace. Everything you need is two or three taps away.', h_ar:'\u0645\u0631\u062d\u0628\u064b\u0627 \u0623\u064a\u0651\u0647\u0627 \u0627\u0644\u0645\u0639\u0644\u0651\u0645', p_ar:'\u0647\u0630\u0647 \u0645\u0633\u0627\u062d\u0629 \u0639\u0645\u0644\u0643 \u0627\u0644\u064a\u0648\u0645\u064a\u0629. \u0643\u0644\u0651 \u0645\u0627 \u062a\u062d\u062a\u0627\u062c\u0647 \u0639\u0644\u0649 \u0628\u064f\u0639\u062f \u0646\u0642\u0631\u062a\u064a\u0646 \u0623\u0648 \u062b\u0644\u0627\u062b.'},
    {em:'\u{1F5D3}\u{FE0F}', h:'Attendance is fast', p:'Everyone starts marked present. Just tap the few who are away \u2014 it saves itself, then tap Submit to send the record.', h_ar:'\u0627\u0644\u062d\u0636\u0648\u0631 \u0633\u0631\u064a\u0639', p_ar:'\u0627\u0644\u062c\u0645\u064a\u0639 \u064a\u0628\u062f\u0623 \u062d\u0627\u0636\u0631\u064b\u0627. \u0627\u0636\u063a\u0637 \u0641\u0642\u0637 \u0639\u0644\u0649 \u0645\u0646 \u062a\u063a\u064a\u0651\u0628 \u2014 \u064a\u064f\u062d\u0641\u0638 \u062a\u0644\u0642\u0627\u0626\u064a\u0651\u064b\u0627\u060c \u062b\u0645\u0651 \u0627\u0636\u063a\u0637 \u00ab\u0625\u0631\u0633\u0627\u0644\u00bb.'},
    {em:'\u{1F4CA}', h:'Marks start at full', p:'Everyone begins at full marks \u2014 you only lower the ones who scored less. It saves the moment you move on.', h_ar:'\u0627\u0644\u062f\u0631\u062c\u0627\u062a \u062a\u0628\u062f\u0623 \u0643\u0627\u0645\u0644\u0629', p_ar:'\u0627\u0644\u062c\u0645\u064a\u0639 \u064a\u0628\u062f\u0623 \u0628\u0627\u0644\u062f\u0631\u062c\u0629 \u0627\u0644\u0643\u0627\u0645\u0644\u0629 \u2014 \u062a\u062e\u0641\u0636 \u0641\u0642\u0637 \u062f\u0631\u062c\u0627\u062a \u0645\u0646 \u062d\u0635\u0644\u0648\u0627 \u0639\u0644\u0649 \u0623\u0642\u0644\u0651. \u062a\u064f\u062d\u0641\u0638 \u0628\u0645\u062c\u0631\u0651\u062f \u0627\u0644\u0627\u0646\u062a\u0642\u0627\u0644.'},
    {em:'\u2764\u{FE0F}', h:'Support, not ranking', p:'The "needs support" list helps you reach the right students. It never ranks you against other teachers.', h_ar:'\u062f\u0639\u0645 \u0644\u0627 \u062a\u0631\u062a\u064a\u0628', p_ar:'\u0642\u0627\u0626\u0645\u0629 \u00ab\u0627\u0644\u0645\u062d\u062a\u0627\u062c\u0648\u0646 \u0644\u0644\u062f\u0639\u0645\u00bb \u062a\u0633\u0627\u0639\u062f\u0643 \u0639\u0644\u0649 \u0627\u0644\u0648\u0635\u0648\u0644 \u0644\u0644\u0637\u0644\u0627\u0628 \u0627\u0644\u0645\u0646\u0627\u0633\u0628\u064a\u0646. \u0648\u0644\u0627 \u062a\u0631\u062a\u0651\u0628\u0643 \u0623\u0628\u062f\u064b\u0627 \u0645\u0642\u0627\u0628\u0644 \u0628\u0642\u064a\u0629 \u0627\u0644\u0645\u0639\u0644\u0651\u0645\u064a\u0646.'},
  ],
  student:[
    {em:'\u{1F44B}', h:'Hello!', p:'This is your learning space. Your week shows what to do next.', h_ar:'\u0623\u0647\u0644\u064b\u0627!', p_ar:'\u0647\u0630\u0647 \u0645\u0633\u0627\u062d\u0629 \u062a\u0639\u0644\u0651\u0645\u0643. \u064a\u0639\u0631\u0636 \u0623\u0633\u0628\u0648\u0639\u0643 \u0645\u0627 \u0633\u062a\u0641\u0639\u0644\u0647 \u062a\u0627\u0644\u064a\u064b\u0627.'},
    {em:'\u{1F50A}', h:'Listen to a lesson', p:'Use Read-aloud to hear any lesson read out to you.', h_ar:'\u0627\u0633\u062a\u0645\u0639 \u0625\u0644\u0649 \u0627\u0644\u062f\u0631\u0633', p_ar:'\u0627\u0633\u062a\u0639\u0645\u0644 \u0627\u0644\u0642\u0631\u0627\u0621\u0629 \u0627\u0644\u0635\u0648\u062a\u064a\u0629 \u0644\u0633\u0645\u0627\u0639 \u0627\u0644\u062f\u0631\u0633 \u0645\u0642\u0631\u0648\u0621\u064b\u0627.'},
    {em:'\u{1F4DD}', h:'Quizzes are safe', p:'Your answers save by themselves. If the internet drops, just come back and continue.', h_ar:'\u0627\u0644\u0627\u062e\u062a\u0628\u0627\u0631\u0627\u062a \u0622\u0645\u0646\u0629', p_ar:'\u062a\u064f\u062d\u0641\u0638 \u0625\u062c\u0627\u0628\u0627\u062a\u0643 \u062a\u0644\u0642\u0627\u0626\u064a\u0651\u064b\u0627. \u0625\u0630\u0627 \u0627\u0646\u0642\u0637\u0639 \u0627\u0644\u0625\u0646\u062a\u0631\u0646\u062a\u060c \u0639\u064f\u062f \u0648\u0623\u0643\u0645\u0644.'},
  ],
  parent:[
    {em:'\u{1F46A}', h:'Welcome', p:'See how your child is doing \u2014 in pictures. You do not need to read anything.', h_ar:'\u0645\u0631\u062d\u0628\u064b\u0627', p_ar:'\u0634\u0627\u0647\u062f \u0643\u064a\u0641 \u064a\u0628\u0644\u064a \u0627\u0628\u0646\u0643 \u2014 \u0628\u0627\u0644\u0635\u0648\u0631. \u0644\u0633\u062a \u0628\u062d\u0627\u062c\u0629 \u0625\u0644\u0649 \u0642\u0631\u0627\u0621\u0629 \u0623\u064a\u0651 \u0634\u064a\u0621.'},
    {em:'\u{1F7E2}', h:'Colours tell you', p:'Green means doing well. Yellow means keep an eye. Red means your child needs help.', h_ar:'\u0627\u0644\u0623\u0644\u0648\u0627\u0646 \u062a\u062e\u0628\u0631\u0643', p_ar:'\u0627\u0644\u0623\u062e\u0636\u0631 \u064a\u0639\u0646\u064a \u0645\u0633\u062a\u0648\u0649 \u062c\u064a\u0651\u062f. \u0627\u0644\u0623\u0635\u0641\u0631 \u064a\u0639\u0646\u064a \u0627\u0644\u0645\u062a\u0627\u0628\u0639\u0629. \u0627\u0644\u0623\u062d\u0645\u0631 \u064a\u0639\u0646\u064a \u0623\u0646\u0651 \u0627\u0628\u0646\u0643 \u064a\u062d\u062a\u0627\u062c \u0645\u0633\u0627\u0639\u062f\u0629.'},
    {em:'\u{1F50A}', h:'Press to listen', p:'Tap the round button on any page and it will read out loud to you.', h_ar:'\u0627\u0636\u063a\u0637 \u0644\u0644\u0627\u0633\u062a\u0645\u0627\u0639', p_ar:'\u0627\u0636\u063a\u0637 \u0627\u0644\u0632\u0631\u0651 \u0627\u0644\u062f\u0627\u0626\u0631\u064a \u0641\u064a \u0623\u064a\u0651 \u0635\u0641\u062d\u0629 \u0641\u064a\u0642\u0631\u0623 \u0644\u0643 \u0628\u0635\u0648\u062a\u064d \u0639\u0627\u0644\u064d.'},
    {em:'\u2709\u{FE0F}', h:'No spam, ever', p:'Check whenever you like. The school will only reach out to you directly if something serious comes up, like repeated absence.', h_ar:'\u0644\u0627 \u0631\u0633\u0627\u0626\u0644 \u0645\u0632\u0639\u062c\u0629 \u0623\u0628\u062f\u064b\u0627', p_ar:'\u062a\u0627\u0628\u0639 \u0645\u062a\u0649 \u0634\u0626\u062a. \u0644\u0646 \u062a\u062a\u0648\u0627\u0635\u0644 \u0627\u0644\u0645\u062f\u0631\u0633\u0629 \u0645\u0639\u0643 \u0645\u0628\u0627\u0634\u0631\u0629\u064b \u0625\u0644\u0651\u0627 \u0644\u0623\u0645\u0631\u064d \u0645\u0647\u0645\u0651\u060c \u0645\u062b\u0644 \u062a\u0643\u0631\u0627\u0631 \u0627\u0644\u063a\u064a\u0627\u0628.'},
  ],
  admin:[
    {em:'\u{1F3DB}\u{FE0F}', h:'Welcome', p:'You see only your own level and everything inside it. Tap a tile to go deeper; the breadcrumb takes you back up. (In this demo you can switch roles to compare.)', h_ar:'\u0645\u0631\u062d\u0628\u064b\u0627', p_ar:'\u062a\u0631\u0649 \u0645\u0633\u062a\u0648\u0627\u0643 \u0641\u0642\u0637 \u0648\u0643\u0644\u0651 \u0645\u0627 \u0628\u062f\u0627\u062e\u0644\u0647. \u0627\u0636\u063a\u0637 \u0628\u0637\u0627\u0642\u0629 \u0644\u0644\u062a\u0639\u0645\u0651\u0642\u061b \u0648\u064a\u0639\u064a\u062f\u0643 \u0634\u0631\u064a\u0637 \u0627\u0644\u0645\u0633\u0627\u0631 \u0644\u0644\u0623\u0639\u0644\u0649. (\u0641\u064a \u0647\u0630\u0627 \u0627\u0644\u0639\u0631\u0636 \u064a\u0645\u0643\u0646\u0643 \u062a\u0628\u062f\u064a\u0644 \u0627\u0644\u0623\u062f\u0648\u0627\u0631 \u0644\u0644\u0645\u0642\u0627\u0631\u0646\u0629.)'},
    {em:'\u2696\u{FE0F}', h:'Equity built in', p:'Break figures down by gender or disability to find who is being left behind.', h_ar:'\u0627\u0644\u0625\u0646\u0635\u0627\u0641 \u0645\u062f\u0645\u062c', p_ar:'\u0641\u0635\u0651\u0644 \u0627\u0644\u0623\u0631\u0642\u0627\u0645 \u062d\u0633\u0628 \u0627\u0644\u0646\u0648\u0639 \u0623\u0648 \u0627\u0644\u0625\u0639\u0627\u0642\u0629 \u0644\u0627\u0643\u062a\u0634\u0627\u0641 \u0645\u0646 \u064a\u064f\u062a\u0631\u0643 \u062e\u0644\u0641 \u0627\u0644\u0631\u064e\u0643\u0628.'},
    {em:'\u{1F512}', h:'Privacy by default', p:'Names are hidden by default. Revealing them is recorded in an audit log.', h_ar:'\u0627\u0644\u062e\u0635\u0648\u0635\u064a\u0629 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0651\u064b\u0627', p_ar:'\u0627\u0644\u0623\u0633\u0645\u0627\u0621 \u0645\u062e\u0641\u064a\u0629 \u0627\u0641\u062a\u0631\u0627\u0636\u064a\u0651\u064b\u0627. \u0648\u064a\u064f\u0633\u062c\u0651\u0644 \u0625\u0638\u0647\u0627\u0631\u0647\u0627 \u0641\u064a \u0633\u062c\u0644\u0651 \u062a\u062f\u0642\u064a\u0642.'},
  ],
};
function maybeOnboard(role){
  if(!S.onboarded[role]){ S.onboard={role, step:0}; }
}
function coachOverlay(){
  if(!S.onboard) return '';
  const steps=TOURS[S.onboard.role]||[]; const i=S.onboard.step; const s=steps[i]; if(!s) return '';
  const last=i===steps.length-1;
  const read=`${L(s,'h')}. ${L(s,'p')}`;
  return `
  <div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="coach-h" id="coach">
    <div class="coach">
      <div class="flex between center"><span class="em" aria-hidden="true">${s.em}</span>
        <button class="iconbtn" data-onboard-skip aria-label="${t('skip')}">✕</button></div>
      <h2 id="coach-h">${esc(L(s,'h'))}</h2>
      <p class="lead">${esc(L(s,'p'))}</p>
      <div class="coach-dots" aria-hidden="true">${steps.map((_,k)=>`<i class="${k===i?'on':''}"></i>`).join('')}</div>
      <div class="flex between center">
        <div class="pill-row">
          ${i>0?`<button class="btn sec" data-onboard-back>${aBack()} ${t('back')}</button>`:`<button class="btn ghost" data-onboard-skip>${t('skip')}</button>`}
          ${speakBtn(read,'')}
        </div>
        <button class="btn" data-onboard-next>${last?t('gotit'):t('next')+' '+aFwd()}</button>
      </div>
      <p class="sr-only">${TR('Step','خطوة')} ${i+1} ${TR('of','من')} ${steps.length}</p>
    </div>
  </div>`;
}
function confirmOverlay(){
  if(!S.confirm) return '';
  if(S.confirm.kind==='leaveUnsubmitted'){
    const isAtt=S.confirm.task==='attendance';
    return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="cf-h" id="confirm">
      <div class="coach">
        <span class="em" aria-hidden="true">📨</span>
        <h2 id="cf-h">${isAtt?TR("You haven't submitted today's attendance","لم تُرسِل حضور اليوم بعد"):TR("You haven't submitted these marks","لم تُرسِل هذه الدرجات بعد")}</h2>
        <p class="lead">${TR("You recorded changes, but the school won't receive them until you tap Submit. Go back and submit so nothing is missed.","سجّلت تغييرات، لكن المدرسة لن تستلمها حتى تضغط «إرسال». عُد وأرسِل حتى لا يفوت شيء.")}</p>
        <div class="flex between center mt" style="gap:.6rem;flex-wrap:wrap">
          <button class="btn" data-confirm-no>${aBack()} ${TR('Go back and submit','عُد وأرسِل')}</button>
          <button class="btn sec" data-leave-anyway>${TR('Leave without submitting','المغادرة دون إرسال')}</button>
        </div>
      </div></div>`;
  }
  const map={
    attendance:{em:'✅', h:TR('Everyone is marked present','الجميع مُسجَّل حاضرًا'), p:TR('No students are marked away or late today. If that is right, confirm. If someone is absent, go back and tap them first.','لا يوجد طلاب مُسجَّلون كغائبين أو متأخّرين اليوم. إن كان ذلك صحيحًا فأكّد. وإن تغيّب أحد، عُد واضغط عليه أوّلًا.'), yes:TR('Yes — all present, submit','نعم — الجميع حاضر، أرسل')},
    grades:{em:'💯', h:TR('Everyone is at full marks','الجميع بالدرجة الكاملة'), p:TR('Every student still has 100. If they all really scored full marks, confirm. If some scored less, go back and lower their score first.','كلّ طالب ما زال على 100. إن حصل الجميع فعلًا على الدرجة الكاملة فأكّد. وإن حصل بعضهم على أقلّ، عُد واخفض درجته أوّلًا.'), yes:TR('Yes — all full marks, submit','نعم — الجميع بالدرجة الكاملة، أرسل')},
    revealPII:{em:'🔒', h:TR('Reveal identifiable student names?','إظهار أسماء الطلاب الكاشفة للهوية؟'), p:TR('Under the Personal Data Protection Law (PDPL), this access must have a lawful, specific purpose. Your name, role and the time will be written to the national PDPL audit log reviewed by the Data Protection Officer. Continue only if you need identifiable data to support a specific student.','بموجب قانون حماية البيانات الشخصية، يجب أن يكون لهذا الوصول غرض مشروع ومحدّد. سيُسجَّل اسمك ودورك والوقت في سجلّ التدقيق الوطني الذي يراجعه مسؤول حماية البيانات. تابع فقط إذا كنت تحتاج بيانات تكشف الهوية لدعم طالب بعينه.'), yes:TR('I have a reason — reveal & log','لديّ سبب — أظهِر وسجِّل')},
  };
  if(S.confirm.kind==='gradesReview'){
    const missing = S.confirm.missing || [];
    const hasMissing = missing.length > 0;
    const blank = missing.filter(m=>m.reason==='blank').length;
    const zero  = missing.filter(m=>m.reason==='zero').length;
    return `
    <div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="cf-h" id="confirm">
      <div class="coach">
        <span class="em" aria-hidden="true">${hasMissing?'⚠️':'📨'}</span>
        <h2 id="cf-h">${hasMissing ? TR('Some students need attention','يوجد طلاب يحتاجون انتباهك') : TR('Review before submitting','راجع قبل الإرسال')}</h2>
        <p class="lead">${esc(examLabel())} — ${TR(`<strong>${S.confirm.filled}</strong> of <strong>${S.confirm.total}</strong> scores entered`,`<strong>${S.confirm.filled}</strong> من <strong>${S.confirm.total}</strong> درجة مُدخَلة`)}.</p>
        ${hasMissing ? `
        <div class="card" style="background:var(--warn-050,#fffbeb);border:1px solid var(--warn-700,#b45309);border-inline-start:4px solid var(--warn-700,#b45309);text-align:start;margin:.6rem 0">
          <p style="margin:0 0 .4rem;font-weight:700;color:var(--warn-700,#b45309)">${TR(`The following ${missing.length} student(s) have no mark or a zero:`,`الطلاب التالون (${missing.length}) بلا درجة أو لديهم صفر:`)}</p>
          <ul style="margin:0;padding-inline-start:1.2rem;max-height:32vh;overflow-y:auto;line-height:1.7">
            ${missing.map(m=>`<li>${esc(m.name)} — <span class="small ${m.reason==='blank'?'muted':''}" style="${m.reason==='zero'?'color:var(--risk-700,#9b1c1c);font-weight:700':''}">${m.reason==='blank' ? TR('blank','فارغ') : TR('scored 0','صفر')}</span></li>`).join('')}
          </ul>
          <p class="small" style="margin:.6rem 0 0">${TR('If this is correct, you can proceed. Otherwise, go back and enter their marks first.','إن كان هذا صحيحًا، يمكنك المتابعة. وإلا، عُد وأدخل درجاتهم أولًا.')}</p>
        </div>` : `<p>${TR('All students have marks entered. Check accuracy, then confirm to submit.','جميع الطلاب لديهم درجات. تأكّد من دقّتها ثم أكّد للإرسال.')}</p>`}
        <div class="flex between center mt" style="gap:.6rem;flex-wrap:wrap">
          <button class="btn ${hasMissing?'':'sec'}" data-confirm-no>${aBack()} ${hasMissing ? TR('Go back and enter marks','عُد وأدخل الدرجات') : TR('Go back and check','عُد وتحقّق')}</button>
          <button class="btn ${hasMissing?'sec':''}" data-confirm-yes>${hasMissing ? TR('Submit anyway','إرسال على أيّ حال') : TR('Confirm and submit','أكّد وأرسل')}</button>
        </div>
      </div>
    </div>`;
  }
  const d=map[S.confirm.kind];
  if(!d) return '';
  return `
  <div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="cf-h" id="confirm">
    <div class="coach">
      <span class="em" aria-hidden="true">${d.em}</span>
      <h2 id="cf-h">${d.h}</h2>
      <p class="lead">${d.p}</p>
      <div class="flex between center mt" style="gap:.6rem;flex-wrap:wrap">
        <button class="btn sec" data-confirm-no>${aBack()} ${TR('Go back and check','عُد وتحقّق')}</button>
        <button class="btn" data-confirm-yes>${d.yes}</button>
      </div>
    </div>
  </div>`;
}

/* ===================== RENDER DISPATCH ===================== */

/* ===================== CONNECTIVITY + SECURITY ===================== */
const LOGIN_USER={teacher:'Ms. Mona Adel — Science', student:'Yara T. — Grade 1/A', parent:'Adham F. — parent', admin:'H. Saleh — Ministry admin', coordinator:'R. Aziz — school coordinator', sysadmin:'T. Mansour — System admin (Super)'};
function demoIP(){ const r=rng((Date.now()&0xffff)+ri(rng(Date.now()),0,9999)); return '197.'+ri(r,0,255)+'.'+ri(r,0,255)+'.'+ri(r,1,254); }
function demoDevice(){ return 'Android · Chrome (demo)'; }
function netPill(){
  if(S.route==='login') return '';
  const st=S.net.status||'online', q=S.net.queue.length;
  const cfg = st==='online'?{cls:'on',lbl:TR('Online','متّصل')}
            : st==='offline'?{cls:'off',lbl:TR('Offline','غير متّصل')}
            : {cls:'nocache',lbl:TR('Saving paused','الحفظ متوقّف')};
  return `<button type="button" class="netpill ${cfg.cls}" data-net-toggle aria-label="${cfg.lbl}${(st==='offline'&&q)?(' · '+q+' '+TR('waiting to upload','بانتظار الرفع')):''}" title="${TR('Connection status — tap to cycle online / offline / not-saving (demo)','حالة الاتصال — اضغط للتبديل: متّصل / دون اتصال / لا يُحفظ (عرض)')}">
    <span class="dot" aria-hidden="true"></span> ${cfg.lbl}${(st==='offline'&&q)?` <span class="qcount">⏳ ${q}</span>`:''}
  </button>`;
}
function netBanner(){
  if(S.route==='login') return '';
  const st=S.net.status||'online';
  if(st==='online') return '';
  if(st==='nocache') return `<div class="netbanner danger" role="status"><span aria-hidden="true">⚠️</span> ${TR('Saving is paused right now — this can happen when there’s no connection. Your earlier work is safe. It’s best to try again once you’re back online, or tell your coordinator if it continues.','الحفظ متوقّف مؤقتًا — قد يحدث هذا عند انقطاع الاتصال. وعملك السابق آمن. والأفضل إعادة المحاولة عند عودة الاتصال، أو إبلاغ منسّقك إن استمرّ.')} <button type="button" data-net-notice-open style="background:none;border:none;color:inherit;font:inherit;font-weight:700;text-decoration:underline;cursor:pointer;padding:0">${TR('Details','تفاصيل')}</button></div>`;
  const q=S.net.queue.length;
  return `<div class="netbanner" role="status"><span aria-hidden="true">📴</span> ${TR('You are offline — your work is saved on this device and uploads automatically when you reconnect.','أنت غير متّصل — عملك محفوظ على هذا الجهاز ويُرفع تلقائيًّا عند عودة الاتصال.')}${q?` <strong>⏳ ${q} ${TR('waiting','بالانتظار')}</strong>`:''} <button type="button" data-net-notice-open style="background:none;border:none;color:inherit;font:inherit;font-weight:700;text-decoration:underline;cursor:pointer;padding:0">${TR('What happens offline?','ماذا يحدث دون اتصال؟')}</button></div>`;
}
function teacherWelcome(){
  if(S.route!=='teacher') return '';
  try{ if(localStorage.getItem('manassa-tw-dismissed')) return ''; }catch(e){}
  return `<div class="teacher-welcome" role="note">
    <button type="button" class="tw-close" data-dismiss-tw>${TR('Got it','فهمت')} ✕</button>
    <p style="margin:0 0 .5rem;font-size:1.05rem"><strong>🧪 ${TR('This is a test version','هذه نسخة تجريبية')}</strong></p>
    <p style="margin:0 0 .4rem;line-height:1.6">${TR('You are exploring a prototype of the platform. Nothing you enter here is saved or sent anywhere — all data stays in your browser for this session only. Feel free to tap, type, and try everything without worry.','أنت تستكشف نموذجًا أوّليًّا للمنصّة. لا يُحفظ أيّ شيء تُدخله هنا ولا يُرسَل إلى أيّ مكان — كلّ البيانات تبقى في متصفّحك لهذه الجلسة فقط. جرّب كلّ شيء بحرّيّة دون قلق.')}</p>
    <p class="small muted" style="margin:0">${TR('Your feedback matters — tell us what works and what doesn\u2019t.','رأيك يهمّنا — أخبرنا بما يعمل وما لا يعمل.')}</p>
  </div>`;
}
function pilotBanner(){
  if(S.route==='login') return '';
  if(S.pilotDismissed) return '';
  if(!S._pilotAnnounced){ S._pilotAnnounced=true; setTimeout(()=>announce(TR('Pilot prototype notice shown.','ظهر إشعار النموذج التجريبي.')),400); }
  return `<div class="pilot-banner" role="note">🧪 ${TR(
    'Pilot version — Science, Grade 10. This is an early prototype for testing and feedback. Data you enter here is not saved — it only appears so you can try the interface.',
    'نسخة تجريبية — العلوم، الصف الأول الثانوي. هذا نموذج أوّلي للتجربة والملاحظات. البيانات التي تُدخلها هنا لا تُحفظ — تظهر فقط لتُجرّب الواجهة.'
  )} <button type="button" class="dismiss" data-dismiss-pilot>${TR('Got it','فهمت')}</button></div>`;
}
function queueOrSend(label){
  if(S.net.status==='online') return 'sent';
  if(S.net.status==='nocache') return 'failed';   // device can't store -> caller must alarm & abort
  S.net.queue.push({ts:Date.now(), label}); return 'queued';
}
function flushQueue(){
  if(!S.net.queue.length) return;
  const n=S.net.queue.length;
  S.net.queue.forEach(it=>S.securityLog.push({ts:Date.now(), role:(S.session&&S.session.role)||'teacher', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action:TR('Uploaded queued: ','رُفع من القائمة: ')+it.label}));
  S.net.queue=[];
  setTimeout(()=>toast(TR(`Uploaded ${n} saved record(s).`,`تم رفع ${n} سجلّ محفوظ.`)),350);
}
function setStatus(st){
  if(S.net.status===st) return;
  const had=S.net.queue.length;
  S.net.status=st; S.net.online=(st==='online'); S.net.notice=null;
  if(st==='online') flushQueue();
  if(st==='offline' && !S.net.offlineSeen){ S.net.offlineSeen=true; S.net.notice='offline'; render(); return; } // first time: caching explainer
  if(st==='nocache'){ S.net.notice='nocache'; render(); return; } // ALWAYS alarm when data can't be saved
  render();
  toast(st==='online' ? (had?TR('Back online — uploading your saved work…','عاد الاتصال — جارٍ رفع عملك المحفوظ…'):TR('Back online. Everything is up to date.','عاد الاتصال. كلّ شيء محدَّث.'))
           : TR('You are offline. Your work is saved on this device and will upload when you reconnect.','أنت غير متّصل. عملك محفوظ على الجهاز وسيُرفع عند عودة الاتصال.'));
}
function netNotice(){
  if(!S.net.notice) return '';
  if(S.net.notice==='nocache'){
    return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="nn-h" id="netnotice">
      <div class="coach" style="border:2px solid var(--warn-700)">
        <span class="em" aria-hidden="true">⚠️</span>
        <h2 id="nn-h" style="color:var(--warn-700)">${TR('Saving is paused right now','الحفظ متوقّف مؤقتًا')}</h2>
        <p class="lead">${TR('We can’t save to this device at the moment. This often happens when there’s no internet connection. Don’t worry — anything you saved earlier is safe. It’s best to pause and try again a little later, once you have a connection. If it keeps happening, please let your school coordinator or administrator know.','يتعذّر الحفظ على هذا الجهاز حاليًّا. وغالبًا ما يحدث ذلك عند انقطاع الإنترنت. لا تقلق — كلّ ما حفظته سابقًا آمن. والأفضل التوقّف قليلًا ثمّ إعادة المحاولة لاحقًا عند توفّر اتصال. وإن استمرّ الأمر، فأبلغ منسّق مدرستك أو المسؤول.')}</p>
        <div class="flex" style="justify-content:flex-end;margin-top:.6rem"><button class="btn" data-net-notice-ok>${TR('OK','حسنًا')}</button></div>
      </div>
    </div>`;
  }
  return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="nn-h" id="netnotice">
    <div class="coach">
      <span class="em" aria-hidden="true">📴</span>
      <h2 id="nn-h">${TR('You’re offline right now','أنت غير متّصل الآن')}</h2>
      <p class="lead">${TR('No problem — you can keep working. Everything you enter (attendance and marks) is saved on this device and uploads on its own the moment you’re back online. Nothing is lost, and you don’t need to do anything.','لا مشكلة — يمكنك متابعة العمل. كلّ ما تُدخله (الحضور والدرجات) يُحفظ على هذا الجهاز ويُرفع وحده فور عودة الاتصال. لا شيء يضيع، ولا حاجة لأن تفعل شيئًا.')}</p>
      <div class="flex" style="justify-content:flex-end;margin-top:.6rem"><button class="btn" data-net-notice-ok>${TR('Got it','حسنًا')}</button></div>
    </div>
  </div>`;
}
function justifyOverlay(){
  if(!S.justifyOpen) return '';
  return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="jf-h" id="justify">
    <div class="coach">
      ${uiIcon('lock', 22)}
      <h2 id="jf-h">${TR('Request a mark correction','طلب تصحيح درجة')}</h2>
      <p class="lead">${TR('These marks were submitted and the correction window has closed. To change them, give a reason. Your name, the time and the reason are recorded in the security log and sent to your school leader.','أُرسلت هذه الدرجات وأُغلقت نافذة التصحيح. لتغييرها اذكر السبب. يُسجَّل اسمك والوقت والسبب في سجلّ الأمان ويُرسَل إلى مدير مدرستك.')}</p>
      <label class="sr-only" for="jf-reason">${TR('Reason','السبب')}</label>
      <textarea id="jf-reason" rows="3" style="width:100%;font:inherit;padding:.6rem;border:2px solid var(--line-strong);border-radius:var(--radius)" placeholder="${TR('e.g. Entered 70 instead of 78 for one student — correcting a typo.','مثال: أُدخلت 70 بدل 78 لطالب — تصحيح خطأ كتابي.')}"></textarea>
      <div class="flex between center mt" style="gap:.6rem;flex-wrap:wrap">
        <button class="btn sec" data-justify-cancel>${aBack()} ${TR('Cancel','إلغاء')}</button>
        <button class="btn" data-justify-confirm>${TR('Log reason & unlock','سجّل السبب وافتح')}</button>
      </div>
    </div>
  </div>`;
}
function securityView(){
  const yes=`<span class="sec-yes" title="${TR('Allowed','مسموح')}">✓</span>`, no=`<span class="sec-no" title="${TR('No access','لا وصول')}">—</span>`, part=`<span class="sec-part" title="${TR('Own scope / aggregated only','نطاقه / مجمّع فقط')}">◑</span>`;
  const caps=[TR('National view','عرض وطني'),TR('Own scope','نطاقه'),TR('Student names (PII)','أسماء الطلاب'),TR('Enter att./marks','إدخال الحضور/الدرجات'),TR('Reveal PII (audited)','كشف الهوية (مُدقَّق)'),TR('Export','تصدير')];
  const rows=[
    [TR('Minister (national)','الوزير (وطني)'),       [yes,yes,no,no,no,yes]],
    [TR('Governorate director','مدير المديرية'),       [part,yes,no,no,no,yes]],
    [TR('Idara officer','مسؤول الإدارة'),              [no,yes,no,no,no,yes]],
    [TR('School principal','مدير المدرسة'),            [no,yes,part,no,yes,part]],
    [TR('Teacher','المعلّم'),                          [no,part,yes,yes,no,no]],
    [TR('Coordinator (offline)','المنسّق (دون اتصال)'),[no,part,yes,yes,no,no]],
    [TR('Parent','وليّ الأمر'),                        [no,no,part,no,no,no]],
    [TR('Student','الطالب'),                           [no,no,no,no,no,no]],
  ];
  const log=S.securityLog.slice(-30).reverse();
  return `${roleBar?'' : ''}
  ${appbar?'':''}
  <div class="page-head"><div><p class="eyebrow">🔐 ${TR('Access & security','الوصول والأمان')}</p><h1>${TR('Who can see and do what','من يرى ويفعل ماذا')}</h1></div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">🛡️</span>
    <span>${TR('Access is least-privilege: each role sees only its own scope and below, and the rules are enforced by the server on every request — not just hidden in the screen. Reading student names is logged.','الوصول بأقلّ صلاحية: كلّ دور يرى نطاقه وما دونه فقط، والقواعد يفرضها الخادم في كلّ طلب — لا مجرّد إخفاء في الشاشة. وقراءة أسماء الطلاب تُسجَّل.')}</span></div>
  <div class="card">
    <p class="eyebrow">${TR('Roles & permissions','الأدوار والصلاحيات')}</p>
    <div class="tbl-scroll"><table class="sec-matrix">
      <thead><tr><th scope="col">${TR('Role','الدور')}</th>${caps.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r[1].map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>
    <p class="small muted mt">✓ ${TR('allowed','مسموح')} · ◑ ${TR('own scope / aggregated only','نطاقه / مجمّع فقط')} · — ${TR('no access','لا وصول')}</p>
  </div>
  <div class="card mt2">
    <p class="eyebrow">${TR('Access & change log','سجلّ الدخول والتغييرات')} <span class="muted">${TR('— newest first','— الأحدث أوّلًا')}</span></p>
    <p class="small muted" style="margin:.1rem 0 .6rem">${TR('Every sign-in and every sensitive action (marks submitted, correction requested, names revealed) is recorded with the user, time and IP, so any unauthorised change can be traced.','يُسجَّل كلّ دخول وكلّ إجراء حسّاس (إرسال درجات، طلب تصحيح، كشف أسماء) مع المستخدم والوقت وعنوان الإنترنت، ليُتتبَّع أيّ تغيير غير مصرَّح.')}</p>
    ${log.length?`<div class="tbl-scroll"><table>
      <thead><tr><th scope="col">${TR('Time','الوقت')}</th><th scope="col">${TR('User','المستخدم')}</th><th scope="col">${TR('Role','الدور')}</th><th scope="col">IP</th><th scope="col">${TR('Action','الإجراء')}</th></tr></thead>
      <tbody>${log.map(e=>`<tr><td class="num-cell">${esc(new Date(e.ts).toLocaleString(S.settings.lang==='ar'?'ar-EG':undefined,{month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'}))}</td><td>${esc(e.user||'—')}</td><td>${esc(e.role||'—')}</td><td class="num-cell">${esc(e.ip||'—')}</td><td>${esc(e.action||'—')}</td></tr>`).join('')}</tbody>
    </table></div>`:`<p class="muted">${TR('No events yet this session.','لا أحداث بعد في هذه الجلسة.')}</p>`}
    <p class="tiny muted mt">${TR('In the prototype the IP is illustrative — real public IPs are captured server-side on each authenticated request, where they cannot be spoofed by the browser.','في النموذج، عنوان الإنترنت توضيحي — العناوين الحقيقية تُلتقَط في الخادم مع كلّ طلب موثَّق، حيث لا يمكن للمتصفّح تزويرها.')}</p>
  </div>`;
}


/* ===================== ADMIN REPORTS ===================== */
function downloadFile(name, text, mime){
  try{
    const blob=new Blob([text],{type:(mime||'text/plain')+';charset=utf-8'});
    const url=URL.createObjectURL(blob);
    const a=document.createElement('a'); a.href=url; a.download=name; document.body.appendChild(a); a.click();
    setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); },0);
    toast(TR('Downloaded ','تم تنزيل ')+name);
  }catch(err){ toast(TR('Download isn’t available in this preview — open the deployed site to download.','التنزيل غير متاح في هذه المعاينة — افتح الموقع المنشور للتنزيل.')); }
}
function reportRootNode(){ const def=adminRoleDef(); return NODE[def.root]||NODE['min']; }
function reportScopeNode(){ return NODE[S.report.scopeId] || reportRootNode(); }
function reportScopeOptions(){
  const root=reportRootNode(); const opts=[root].concat(root.children||[]);
  return opts.map(n=>`<option value="${n.id}" ${reportScopeNode().id===n.id?'selected':''}>${esc(nodeName(n))}${n===root?' ('+levelLabel(n.level)+')':''}</option>`).join('');
}
function reportTitle(t){ const m={exec:['Executive summary','ملخّص تنفيذي'],equity:['Equity & inclusion report','تقرير الإنصاف والدمج'],earlywarning:['Early-warning (dropout) report','تقرير الإنذار المبكّر (التسرّب)'],data:['Data table','جدول البيانات']}[t]||['Report','تقرير']; return TR(m[0],m[1]); }
function equityRowsForReport(node){
  const dims=['urbanRural', node.level==='ministry'?'region':null,'ratio','connectivity','gender','disability'].filter(Boolean);
  const st=allStudents(node); const out=[];
  dims.forEach(dk=>{ const dim=EQUITY_DIMS[dk]; const g={};
    st.forEach(s=>{const k=dim.key(s); if(k==null)return;(g[k]=g[k]||{n:0,m:0});g[k].n++;g[k].m+=s.avgM;});
    const arr=(dim.order||Object.keys(g)).filter(k=>g[k]&&g[k].n>=K_ANON).map(k=>({label:dim.lab(k),v:Math.round(g[k].m/g[k].n)}));
    if(arr.length<2) return;
    const lo=arr.reduce((a,b)=>a.v<=b.v?a:b), hi=arr.reduce((a,b)=>a.v>=b.v?a:b);
    out.push({dim:TR.apply(null,({urbanRural:['Urban vs rural','حضر/ريف'],region:['Region','الإقليم'],ratio:['Student–teacher ratio','نسبة الطلاب للمعلّم'],connectivity:['Connectivity','الاتصال'],gender:['Gender','النوع'],disability:['Disability','الإعاقة']}[dk])), lo, hi, gap:hi.v-lo.v});
  });
  return out;
}
function reportBody(t,node){
  const m=metricsFor(node);
  if(t==='exec'){ const v=healthVerdict(m);
    const kids=(node.children||[]).map(ch=>({ch,cm:metricsFor(ch)})).sort((a,b)=>b.cm.dropoutRiskPct-a.cm.dropoutRiskPct).slice(0,5);
    return `<p class="rep-verdict ${v.tone}">${v.label} — ${v.line}</p>
    <table class="rep-tbl"><tbody>
      <tr><th>${TR('Students in scope','الطلاب في النطاق')}</th><td>${cohortOf(node).toLocaleString()}</td></tr>
      <tr><th>${TR('Student attendance','حضور الطلاب')}</th><td>${m.attendance}% <span class="muted">(${TR('target','المستهدف')} 90%)</span></td></tr>
      <tr><th>${TR('Assessment average','متوسّط التقييم')}</th><td>${m.mastery}% <span class="muted">(65%)</span></td></tr>
      <tr><th>${TR('Teacher attendance','حضور المعلّمين')}</th><td>${m.teacherAttendance}% <span class="muted">(92%)</span></td></tr>
      <tr><th>${TR('At dropout risk','معرّضون للتسرّب')}</th><td>${atRiskOf(node).toLocaleString()} (${m.dropoutRiskPct}%)</td></tr>
    </tbody></table>
    ${kids.length?`<h3>${TR('Areas to support first','الأماكن الأَولى بالدعم')}</h3>
    <table class="rep-tbl"><thead><tr><th>${childLabel(node.level)}</th><th>${TR('Assessment','التقييم')}</th><th>${TR('Attendance','الحضور')}</th><th>${TR('Early-warning indicator','مؤشر الإنذار المبكر')}</th></tr></thead>
    <tbody>${kids.map(x=>`<tr><td>${esc(nodeName(x.ch))}</td><td>${x.cm.mastery}%</td><td>${x.cm.attendance}%</td><td>${x.cm.dropoutRiskPct}%</td></tr>`).join('')}</tbody></table>`:''}`;
  }
  if(t==='equity'){ const rows=equityRowsForReport(node);
    return `<p>${TR('Gaps between groups, framed for support — not for ranking. Subgroups smaller than 10 students are suppressed for privacy.','الفجوات بين المجموعات، للدعم لا للترتيب. وتُحجب المجموعات الأصغر من 10 طلاب حفاظًا على الخصوصية.')}</p>
    <table class="rep-tbl"><thead><tr><th>${TR('Dimension','البُعد')}</th><th>${TR('Lowest group','أدنى مجموعة')}</th><th>${TR('Highest group','أعلى مجموعة')}</th><th>${TR('Gap (pts)','الفجوة')}</th></tr></thead>
    <tbody>${rows.map(r=>`<tr><td>${r.dim}</td><td>${esc(r.lo.label)} — ${r.lo.v}%</td><td>${esc(r.hi.label)} — ${r.hi.v}%</td><td><strong>${r.gap}</strong></td></tr>`).join('')||`<tr><td colspan="4">${TR('Not enough data at this scope.','لا تكفي البيانات في هذا النطاق.')}</td></tr>`}</tbody></table>`;
  }
  if(t==='earlywarning'){
    const kids=(node.children||[]).map(ch=>({ch,cm:metricsFor(ch)})).sort((a,b)=>b.cm.dropoutRiskPct-a.cm.dropoutRiskPct);
    return `<p>${TR('Dropout-risk flags combine chronic absence, low engagement and declining assessment (ABC indicators). Identifiable students are visible only to authorised school staff.','تجمع مؤشّرات مؤشر الإنذار المبكر الغياب المزمن وضعف التفاعل وتراجع التقييم. ولا يظهر الطلاب المحدَّدون إلا لموظّفي المدرسة المصرَّح لهم.')}</p>
    <table class="rep-tbl"><thead><tr><th>${childLabel(node.level)}</th><th>${TR('Students','الطلاب')}</th><th>${TR('At risk','معرّضون')}</th><th>%</th></tr></thead>
    <tbody>${kids.map(x=>`<tr><td>${esc(nodeName(x.ch))}</td><td>${cohortOf(x.ch).toLocaleString()}</td><td>${atRiskOf(x.ch).toLocaleString()}</td><td>${x.cm.dropoutRiskPct}%</td></tr>`).join('')||`<tr><td colspan="4">${TR('No sub-units at this scope.','لا وحدات فرعية في هذا النطاق.')}</td></tr>`}</tbody></table>`;
  }
  // data table
  const kids=node.children||[];
  return `<table class="rep-tbl"><thead><tr><th>${childLabel(node.level)}</th><th>${TR('Students','الطلاب')}</th><th>${TR('Attendance','الحضور')}</th><th>${TR('Assessment','التقييم')}</th><th>${TR('Teacher att.','حضور المعلّمين')}</th><th>${TR('Dropout %','مؤشر الإنذار المبكر')}</th></tr></thead>
  <tbody>${kids.map(ch=>{const cm=metricsFor(ch);return `<tr><td>${esc(nodeName(ch))}</td><td>${cohortOf(ch).toLocaleString()}</td><td>${cm.attendance}%</td><td>${cm.mastery}%</td><td>${cm.teacherAttendance}%</td><td>${cm.dropoutRiskPct}%</td></tr>`;}).join('')||`<tr><td colspan="6">${TR('No sub-units at this scope.','لا وحدات فرعية في هذا النطاق.')}</td></tr>`}</tbody></table>`;
}
function reportDoc(node){
  const t=S.report.type;
  return `<div id="report-doc" class="report-doc">
    <div class="rep-head">
      <div class="rep-crest" aria-hidden="true">م</div>
      <div><div class="rep-org">${TR('Ministry of Education & Technical Education','وزارة التربية والتعليم والتعليم الفنّي')} · Manassa منصّة</div>
        <h2 class="rep-title">${reportTitle(t)}</h2>
        <p class="rep-meta">${TR('Scope','النطاق')}: ${esc(nodeName(node))} · ${levelLabel(node.level)} · ${cohortOf(node).toLocaleString()} ${TR('students','طالب')} — ${TR('Secondary 1 · generated','الصف الأول الثانوي · أُنشئ')} ${fmtDate({year:'numeric',month:'long',day:'numeric'})}</p></div>
    </div>
    ${reportBody(t,node)}
    <p class="rep-foot">${TR('Prepared from the Manassa pilot dashboard. Counts are scaled to an illustrative 800,000-student cohort and equity gaps are demo-shaped. For support and planning — not for ranking schools or teachers.','أُعدّ من لوحة منصّة التجريبية. الأعداد مُقاسة على عيّنة توضيحية من 800,000 طالب وفجوات الإنصاف توضيحية. للدعم والتخطيط — لا لترتيب المدارس أو المعلّمين.')}</p>
  </div>`;
}
function reportCSV(node){
  const sep=','; const q=v=>`"${String(v).replace(/"/g,'""')}"`;
  const lines=[[childLabel(node.level),'Students','Attendance%','Assessment%','TeacherAtt%','DropoutRisk%'].map(q).join(sep)];
  (node.children||[]).forEach(ch=>{const cm=metricsFor(ch);
    lines.push([nodeName(ch),cohortOf(ch),cm.attendance,cm.mastery,cm.teacherAttendance,cm.dropoutRiskPct].map(q).join(sep));});
  return lines.join('\r\n');
}
function reportsView(){
  const node=reportScopeNode();
  return `${roleBar()}
  <div class="page-head"><div><p class="eyebrow">📑 ${TR('Reports','التقارير')}</p><h1>${TR('Generate a report','إنشاء تقرير')}</h1></div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">🖨️</span>
    <span>${TR('Pick a scope and a report type, then print to PDF or download the data. Reports respect your access — you can only report on your own area and below.','اختر نطاقًا ونوع تقرير، ثمّ اطبع PDF أو نزّل البيانات. تحترم التقارير صلاحياتك — يمكنك إعداد تقارير عن منطقتك وما دونها فقط.')}</span></div>
  <div class="card no-print">
    <div class="flex wrapw" style="gap:1rem;align-items:flex-end">
      <div class="field" style="margin:0;min-width:240px"><label for="rep-scope">📍 ${TR('Scope','النطاق')}</label>
        <select id="rep-scope" data-report-scope style="width:100%">${reportScopeOptions()}</select></div>
      <div class="field" style="margin:0;min-width:240px"><label for="rep-type">📄 ${TR('Report type','نوع التقرير')}</label>
        <select id="rep-type" data-report-type style="width:100%">
          ${[['exec','Executive summary','ملخّص تنفيذي'],['equity','Equity & inclusion','الإنصاف والدمج'],['earlywarning','Early-warning (dropout)','الإنذار المبكّر (التسرّب)'],['data','Full data table','جدول البيانات الكامل']].map(o=>`<option value="${o[0]}" ${S.report.type===o[0]?'selected':''}>${TR(o[1],o[2])}</option>`).join('')}
        </select></div>
      <div class="flex wrapw" style="gap:.5rem">
        <button class="btn" data-report-print>🖨️ ${TR('Print / Save as PDF','اطبع / احفظ PDF')}</button>
        <button class="btn sec" data-report-csv>⬇️ ${TR('Download CSV','تنزيل CSV')}</button>
      </div>
    </div>
  </div>
  ${reportDoc(node)}`;
}


/* ===================== SYSTEM ADMINISTRATION CONSOLE ===================== */
const SYS_SCHOOLS={maadi:{name:'Maadi STEM',ar:'المعادي ستيم',district:'cai'},zahraa:{name:'Zahraa Prep',ar:'الزهراء',district:'cai'},edfu:{name:'Edfu Secondary',ar:'إدفو الثانوية',district:'asw'}};
const SYS_DISTRICTS={cai:{name:'Cairo / Maadi',ar:'القاهرة / المعادي'},asw:{name:'Aswan / Edfu',ar:'أسوان / إدفو'}};
let SYS_PEOPLE=[
  {id:'t1',name:'Mona Adel',ar:'منى عادل',role:'teacher',school:'maadi',phone:'01001145017',status:'verified'},
  {id:'t2',name:'Sara Hossam',ar:'سارة حسام',role:'teacher',school:'maadi',phone:'01112233044',status:'verified'},
  {id:'t3',name:'Khaled Nabil',ar:'خالد نبيل',role:'teacher',school:'edfu',phone:'',status:'missing'},
  {id:'t4',name:'Rania Fouad',ar:'رانية فؤاد',role:'teacher',school:'zahraa',phone:'01233445566',status:'verified'},
  {id:'p1',name:'Adham Fahmy (parent of Yara)',ar:'أدهم فهمي (والد يارا)',role:'parent',school:'maadi',phone:'01004310088',status:'verified'},
  {id:'p2',name:'Hoda Samir (parent of Seif)',ar:'هدى سمير (والدة سيف)',role:'parent',school:'maadi',phone:'',status:'missing'},
  {id:'p3',name:'Tarek Aziz (parent of Lina)',ar:'طارق عزيز (والد لينا)',role:'parent',school:'edfu',phone:'01556677889',status:'verified'},
  {id:'p4',name:'Nadia Saleh (parent of Omar)',ar:'نادية صالح (والدة عمر)',role:'parent',school:'zahraa',phone:'01098765432',status:'verified'},
];
function sysName(p){ return S.settings.lang==='ar'?p.ar:p.name; }
function sysSchoolName(id){ const sc=SYS_SCHOOLS[id]; return sc?(S.settings.lang==='ar'?sc.ar:sc.name):id; }
function sysRoleLabel(r){ return r==='teacher'?TR('Teacher','معلّم'):TR('Parent','وليّ أمر'); }
function maskPhone(ph){ if(!ph) return ''; const last2=ph.slice(-2); return '010 •••• ••'+last2; }
function fmtPhone(ph){ if(!ph) return ''; return ph.replace(/(\d{4})(\d{4})(\d{3})/, '$1 $2 $3'); }
const SYS_CAPS={
  super:{manageAdmins:'y',manageUsers:'y',updateNum:'y',approve:'y',revealPII:'p',config:'y',export:'y'},
  district:{manageAdmins:'p',manageUsers:'y',updateNum:'y',approve:'y',revealPII:'p',config:'n',export:'p'},
  school:{manageAdmins:'n',manageUsers:'y',updateNum:'y',approve:'n',revealPII:'p',config:'n',export:'n'},
};
function sysCaps(){ return SYS_CAPS[S.sys.tier]||SYS_CAPS.super; }
function sysScopeFilter(p){
  if(S.sys.tier==='super') return true;
  if(S.sys.tier==='district') return (SYS_SCHOOLS[p.school]||{}).district==='cai';
  return p.school==='maadi'; // demo school admin
}
function sysPeopleInScope(){ return SYS_PEOPLE.filter(sysScopeFilter); }
function sysPendingInScope(){ return S.sys.pending.filter(r=>{const p=SYS_PEOPLE.find(x=>x.id===r.id); return p&&sysScopeFilter(p);}); }
function sysLog(action){ S.securityLog.push({ts:Date.now(), role:'sysadmin·'+S.sys.tier, user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action}); }

function sysTierBar(){
  const tier=S.sys.tier;
  const lbl={super:TR('Super admin · National IT','المسؤول الأعلى · تقنية وطنية'),district:TR('District admin','مسؤول المديرية'),school:TR('School admin','مسؤول المدرسة')}[tier];
  const scope={super:TR('Scope: all governorates & schools','النطاق: كلّ المحافظات والمدارس'),district:TR('Scope: Cairo / Maadi district','النطاق: مديرية القاهرة / المعادي'),school:TR('Scope: Maadi STEM school','النطاق: مدرسة المعادي ستيم')}[tier];
  return `<div class="card mb" style="border-inline-start:6px solid var(--risk-700)">
    <p class="eyebrow" style="margin:0">${TR('System administration','إدارة النظام')} · <span style="color:var(--risk-700)">${TR('high-security area','منطقة عالية الأمان')}</span></p>
    <strong style="font-size:1.15rem">${lbl}</strong> <span class="muted small">· ${scope}</span>
    <p class="small muted" style="margin:.3rem 0 .55rem">${TR('Separation of duties: you can request sensitive changes, but a different admin must approve them. Every action here is logged with your name, time and IP.','الفصل بين المهام: يمكنك طلب التغييرات الحسّاسة، لكن يجب أن يعتمدها مسؤول آخر. وكلّ إجراء هنا مُسجَّل باسمك والوقت وعنوان الإنترنت.')}</p>
    <div class="flex wrapw" style="gap:.4rem;align-items:center"><span class="tiny muted" style="font-weight:700">${TR('View as (demo):','اعرض بصفتك (عرض):')}</span>
      ${['super','district','school'].map(tt=>`<button type="button" class="btn ${tier===tt?'':'ghost'} sm" data-sys-tier="${tt}">${{super:TR('Super admin','الأعلى'),district:TR('District','المديرية'),school:TR('School','المدرسة')}[tt]}</button>`).join('')}</div>
  </div>`;
}
// ═══════════════════════════════════════════════════════════
// EXAM CONTROL OFFICE PORTAL (كنترول الامتحانات)
// High-security: 2 random security questions + multi-step grade confirmation
// ═══════════════════════════════════════════════════════════
const CONTROL_QUESTIONS = [
  {q_ar:'ما اسم أول مدرسة عملت بها؟', q_en:'What was the name of your first school?'},
  {q_ar:'ما اسم مدينة ميلادك؟', q_en:'In which city were you born?'},
  {q_ar:'ما رقم لجنة الكنترول المسؤول عنها؟', q_en:'What is your control committee number?'},
  {q_ar:'ما اسم مدير المدرسة الحالي؟', q_en:'What is the current school principal\'s name?'},
  {q_ar:'ما آخر أربعة أرقام من رقمك الوظيفي؟', q_en:'Last four digits of your staff ID?'},
];
let _ctrlQuestionPair = null;
function randomQuestionPair(){
  // Pick 2 distinct random questions out of 5, alternating each session
  const a = Math.floor(Math.random()*CONTROL_QUESTIONS.length);
  let b = Math.floor(Math.random()*CONTROL_QUESTIONS.length);
  while(b===a){ b = Math.floor(Math.random()*CONTROL_QUESTIONS.length); }
  _ctrlQuestionPair = [a,b];
  return [a,b];
}

function controlShell(inner){
  if(!S.control.securityPassed){
    return `${appbar()}<main id="main" tabindex="-1"><div class="wrap">${inner}</div></main>${a11yPanel()}`;
  }
  const items=[
    {v:'grades', ico: uiIcon('grading', 16), t: TR('Enter Exam Grades','رصد درجات الامتحانات')},
    {v:'review', ico: uiIcon('check', 16), t: TR('Review & Release','المراجعة والاعتماد')},
    {v:'history', ico: uiIcon('calendar', 16), t: TR('Exam Ledger History','سجل الامتحانات المعتمدة')},
  ];
  return `${appbar()}${nav(items)}<main id="main" tabindex="-1"><div class="wrap">${inner}</div></main>${a11yPanel()}`;
}

function controlSecurityGate(){
  const AR=S.settings.lang==='ar';
  const pair = S.control.qIdx || _ctrlQuestionPair || randomQuestionPair();
  const q1 = CONTROL_QUESTIONS[pair[0]];
  const q2 = CONTROL_QUESTIONS[pair[1]];
  return `
  <div style="max-width:480px;margin:1.5rem auto">
    <div style="text-align:center;margin-bottom:1.5rem">
      <div style="font-size:3rem">🛡️</div>
      <h1 style="font-size:1.4rem;margin:.3rem 0">${AR?'التحقّق الأمني':'Security Verification'}</h1>
      <p class="muted">${AR?'أجب على السؤالين للوصول إلى درجات الامتحانات':'Answer both questions to access exam grades'}</p>
    </div>
    <div class="card" style="border:2px solid #6d28d9;padding:1.5rem">
      <div class="field" style="margin-bottom:1rem">
        <label style="font-weight:700;color:#6d28d9">${AR?'السؤال الأول':'Question 1'}</label>
        <p style="margin:.3rem 0 .5rem;font-size:.95rem">${AR?q1.q_ar:q1.q_en}</p>
        <input id="ctrl-q1" type="password" autocomplete="off" placeholder="${AR?'إجابتك':'Your answer'}" style="width:100%;padding:.6rem;font:inherit;border-radius:var(--radius);border:2px solid var(--line)">
      </div>
      <div class="field" style="margin-bottom:1.2rem">
        <label style="font-weight:700;color:#6d28d9">${AR?'السؤال الثاني':'Question 2'}</label>
        <p style="margin:.3rem 0 .5rem;font-size:.95rem">${AR?q2.q_ar:q2.q_en}</p>
        <input id="ctrl-q2" type="password" autocomplete="off" placeholder="${AR?'إجابتك':'Your answer'}" style="width:100%;padding:.6rem;font:inherit;border-radius:var(--radius);border:2px solid var(--line)">
      </div>
      <button class="btn" data-control-verify style="width:100%;justify-content:center;background:#6d28d9">${AR?'تحقّق وادخل':'Verify & enter'}</button>
      <p class="hint mt" style="text-align:center">${AR?'تتبدّل الأسئلة عشوائيًّا كلّ جلسة (٢ من ٥). عرض — أيّ إجابة تعمل.':'Questions rotate randomly each session (2 of 5). Demo — any answer works.'}</p>
    </div>
    <p class="small muted" style="text-align:center;margin-top:1rem">🔒 ${AR?'كلّ محاولة دخول تُسجَّل. ٣ محاولات خاطئة تُقفل الحساب.':'Every sign-in attempt is logged. 3 failed attempts lock the account.'}</p>
  </div>`;
}

function controlGrades(){
  const AR=S.settings.lang==='ar';
  const examType = S.control.examType||'midterm';
  // Demo students with grades
  const students = controlStudents();
  return `
  <div class="page-head"><div><p class="eyebrow">${AR?'كنترول الامتحانات':'Exam Control'}</p><h1>📝 ${AR?'إدخال درجات الامتحانات':'Enter Exam Grades'}</h1></div></div>

  <div class="calm mb"><span class="em" aria-hidden="true">🛡️</span>
    <span>${AR?'أدخل درجة كلّ طالب بعناية. ستراجع كلّ الدرجات وتؤكّدها قبل الإرسال النهائي.':'Enter each student\'s grade carefully. You will review and confirm all grades before final submission.'}</span></div>

  <div class="card mb" style="padding:1rem">
    <label style="font-weight:700;display:block;margin-bottom:.5rem">${AR?'نوع الامتحان':'Exam type'}</label>
    <div style="display:flex;gap:.5rem;flex-wrap:wrap">
      ${[['midterm',AR?'منتصف العام':'Midterm'],['final',AR?'نهاية العام':'Final']].map(([id,lbl])=>
        `<button type="button" data-control-examtype="${id}" class="btn ${examType===id?'':'sec'} sm">${lbl}</button>`).join('')}
    </div>
    <p class="small muted" style="margin:.6rem 0 0">${AR?'المادة: العلوم المتكاملة · الصف الأول الثانوي · الفصل ١/أ':'Subject: Integrated Science · Secondary 1 · Class 1/A'}</p>
  </div>

  <div class="tbl-scroll">
    <table>
      <caption class="sr-only">${AR?'درجات الامتحان':'Exam grades'}</caption>
      <thead><tr>
        <th>${AR?'الطالب':'Student'}</th>
        <th>${AR?'رقم الجلوس':'Seat no.'}</th>
        <th>${AR?'الدرجة /100':'Grade /100'}</th>
      </tr></thead>
      <tbody>
      ${students.map((s,i)=>`<tr>
        <th scope="row"><span style="color:var(--ink3);font-size:.82rem;margin-inline-end:.3rem">${i+1}.</span>${s.name}</th>
        <td class="small muted">${s.seat}</td>
        <td><input class="gb-input" type="text" inputmode="decimal" maxlength="5" value="${S.control.confirmed['g'+s.id]||s.grade}" data-control-grade="${s.id}" style="width:70px" onkeydown="if(event.key==='Enter'&&window.S&&window.S.settings&&window.S.settings.enterAdvance){event.preventDefault();var nx=this.closest('tr').nextElementSibling;if(nx)nx.querySelector('input')?.focus();}"></td>
      </tr>`).join('')}
      </tbody>
    </table>
  </div>

  <div class="card mt2" style="border:2px solid #6d28d9;background:#faf5ff;padding:1.2rem">
    <p style="margin:0 0 .8rem;font-weight:700;color:#6d28d9">${AR?'✅ قبل المتابعة للمراجعة':'✅ Before continuing to review'}</p>
    <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-size:.92rem;line-height:1.6">
      <input type="checkbox" data-control-check="entered" ${S.control.confirmed.entered?'checked':''} style="margin-top:.2rem;width:20px;height:20px;flex-shrink:0">
      <span>${AR?'أقرّ بأنّني أدخلت درجة كلّ طالب من ورقة إجابته الأصلية، وأنّ كلّ درجة مقابلة للاسم الصحيح.':'I confirm I entered each grade from the student\'s original answer sheet, and each grade matches the correct name.'}</span>
    </label>
    <button class="btn mt" data-control-toreview ${!S.control.confirmed.entered?'disabled style="opacity:.5"':''} style="background:#6d28d9;margin-top:1rem">${AR?'متابعة للمراجعة النهائية':'Continue to final review'} ${aFwd()}</button>
  </div>`;
}

function controlReview(){
  const AR=S.settings.lang==='ar';
  const students = controlStudents();
  const step = S.control.confirmStep||0;
  const examLabel = (S.control.examType==='final')?(AR?'نهاية العام':'Final'):(AR?'منتصف العام':'Midterm');

  // Multi-step confirmation
  return `
  <div class="page-head"><div><p class="eyebrow">${AR?'المراجعة النهائية':'Final review'} · ${examLabel}</p><h1>✅ ${AR?'مراجعة وتأكيد الدرجات':'Review & Confirm Grades'}</h1></div></div>

  <div style="display:flex;gap:.4rem;margin-bottom:1.2rem">
    ${[1,2,3].map(n=>`<div style="flex:1;height:6px;border-radius:3px;background:${step>=n?'#6d28d9':'var(--line)'}"></div>`).join('')}
  </div>

  ${step===0?`
  <div class="card" style="border:2px solid #6d28d9;padding:1.5rem">
    <h2 style="margin:0 0 .5rem;font-size:1.1rem">${AR?'الخطوة ١ من ٣ — راجع القائمة':'Step 1 of 3 — Review the list'}</h2>
    <p class="muted" style="margin:0 0 1rem">${AR?'تأكّد أنّ كلّ درجة مقابلة للاسم الصحيح. مرّر القائمة كاملة.':'Verify each grade matches the correct name. Scroll the full list.'}</p>
    <div class="tbl-scroll" style="max-height:300px;overflow-y:auto;border:1px solid var(--line);border-radius:8px">
      <table style="margin:0">
        <thead style="position:sticky;top:0;background:var(--paper)"><tr><th>${AR?'الطالب':'Student'}</th><th>${AR?'رقم الجلوس':'Seat'}</th><th>${AR?'الدرجة':'Grade'}</th></tr></thead>
        <tbody>${students.map((s,i)=>`<tr><th scope="row">${i+1}. ${s.name}</th><td class="small muted">${s.seat}</td><td><strong>${S.control.confirmed['g'+s.id]||s.grade}</strong>/100</td></tr>`).join('')}</tbody>
      </table>
    </div>
    <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-size:.92rem;line-height:1.6;margin-top:1rem">
      <input type="checkbox" data-control-check="reviewed1" ${S.control.confirmed.reviewed1?'checked':''} style="margin-top:.2rem;width:20px;height:20px;flex-shrink:0">
      <span>${AR?'راجعتُ القائمة كاملة وكلّ درجة مقابلة للاسم الصحيح.':'I have reviewed the full list and each grade matches the correct name.'}</span>
    </label>
    <button class="btn mt" data-control-step="1" ${!S.control.confirmed.reviewed1?'disabled style="opacity:.5"':''} style="background:#6d28d9;margin-top:1rem">${AR?'التالي':'Next'} ${aFwd()}</button>
  </div>`:''}

  ${step===1?`
  <div class="card" style="border:2px solid #6d28d9;padding:1.5rem">
    <h2 style="margin:0 0 .5rem;font-size:1.1rem">${AR?'الخطوة ٢ من ٣ — تحقّق من الإحصائيات':'Step 2 of 3 — Check the statistics'}</h2>
    <p class="muted" style="margin:0 0 1rem">${AR?'هل تبدو هذه الأرقام صحيحة؟ راجعها قبل المتابعة.':'Do these numbers look right? Review before continuing.'}</p>
    <div class="bigtiles mb">
      <div class="bigtile"><span class="bignum">${students.length}</span><span class="word">${AR?'طالب':'Students'}</span></div>
      <div class="bigtile ok"><span class="bignum">${controlAvg(students)}</span><span class="word">${AR?'المتوسط':'Average'}</span></div>
      <div class="bigtile ${controlFails(students)>5?'warn':''}"><span class="bignum">${controlFails(students)}</span><span class="word">${AR?'أقل من 50':'Below 50'}</span></div>
    </div>
    <p class="small muted">${AR?'أعلى درجة:':'Highest:'} ${controlMax(students)} · ${AR?'أدنى درجة:':'Lowest:'} ${controlMin(students)}</p>
    <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-size:.92rem;line-height:1.6;margin-top:1rem">
      <input type="checkbox" data-control-check="reviewed2" ${S.control.confirmed.reviewed2?'checked':''} style="margin-top:.2rem;width:20px;height:20px;flex-shrink:0">
      <span>${AR?'الإحصائيات تبدو صحيحة ومتّسقة مع أداء الفصل.':'The statistics look correct and consistent with class performance.'}</span>
    </label>
    <div style="display:flex;gap:.5rem;margin-top:1rem">
      <button class="btn sec" data-control-step="0">${aBack()} ${AR?'رجوع':'Back'}</button>
      <button class="btn" data-control-step="2" ${!S.control.confirmed.reviewed2?'disabled style="opacity:.5"':''} style="background:#6d28d9;flex:1">${AR?'التالي':'Next'} ${aFwd()}</button>
    </div>
  </div>`:''}

  ${step===2?`
  <div class="card" style="border:2px solid var(--risk-700);padding:1.5rem;background:#fef2f2">
    <h2 style="margin:0 0 .5rem;font-size:1.1rem;color:var(--risk-700)">${AR?'الخطوة ٣ من ٣ — التأكيد النهائي':'Step 3 of 3 — Final confirmation'}</h2>
    <p style="margin:0 0 1rem;line-height:1.7">${AR?'بعد الإرسال، تُصبح الدرجات رسميّة ولا يمكن تعديلها إلا بإذن مدير المدرسة. هذا إجراء لا رجعة فيه.':'After submission, grades become official and can only be changed with principal approval. This action cannot be undone.'}</p>
    <div style="background:#fff;border-radius:8px;padding:1rem;margin-bottom:1rem">
      <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-size:.9rem;line-height:1.6;margin-bottom:.8rem">
        <input type="checkbox" data-control-check="final1" ${S.control.confirmed.final1?'checked':''} style="margin-top:.2rem;width:20px;height:20px;flex-shrink:0">
        <span>${AR?'أؤكّد أنّ جميع الدرجات صحيحة ومطابقة لأوراق الإجابة.':'I confirm all grades are correct and match the answer sheets.'}</span>
      </label>
      <label style="display:flex;gap:.6rem;align-items:flex-start;cursor:pointer;font-size:.9rem;line-height:1.6">
        <input type="checkbox" data-control-check="final2" ${S.control.confirmed.final2?'checked':''} style="margin-top:.2rem;width:20px;height:20px;flex-shrink:0">
        <span>${AR?'أتحمّل المسؤوليّة الرسميّة عن دقّة هذه الدرجات.':'I take official responsibility for the accuracy of these grades.'}</span>
      </label>
    </div>
    <div style="display:flex;gap:.5rem">
      <button class="btn sec" data-control-step="1">${aBack()} ${AR?'رجوع':'Back'}</button>
      <button class="btn" data-control-submit ${(!S.control.confirmed.final1||!S.control.confirmed.final2)?'disabled style="opacity:.5"':''} style="background:var(--risk-700);flex:1">🔒 ${AR?'إرسال نهائي':'Submit officially'}</button>
    </div>
  </div>`:''}`;
}

function controlHistory(){
  const AR=S.settings.lang==='ar';
  return `
  <div class="page-head"><div><h1>📚 ${AR?'سجلّ الإرسالات':'Submission History'}</h1></div></div>
  <div class="calm mb">${uiIcon('lock', 22)}
    <span>${AR?'كلّ إرسال مسجّل بختم زمني لا يمكن تغييره. هذا سجلّ التدقيق.':'Every submission is logged with an immutable timestamp. This is the audit trail.'}</span></div>
  ${[
    {exam:AR?'منتصف العام — العلوم — ١/أ':'Midterm — Science — 1/A', date:'2026-06-28 14:32', count:23, by:AR?'أ/ محمود سعيد':'Mahmoud Saeed'},
    {exam:AR?'منتصف العام — العلوم — ١/ب':'Midterm — Science — 1/B', date:'2026-06-28 15:10', count:25, by:AR?'أ/ محمود سعيد':'Mahmoud Saeed'},
  ].map(h=>`<div class="card" style="padding:.9rem 1rem;margin-bottom:.4rem">
    <div class="flex between center wrapw">
      <div><strong>${h.exam}</strong><br><span class="small muted">${h.count} ${AR?'طالب':'students'} · ${AR?'بواسطة':'by'} ${h.by}</span></div>
      <div style="text-align:end"><span class="tag ok">${AR?'مُرسَل ✓':'Submitted ✓'}</span><br><span class="small muted">${h.date}</span></div>
    </div>
  </div>`).join('')}`;
}

// Control office helper data
function controlStudents(){
  const AR=S.settings.lang==='ar';
  return [
    {id:'s1',name:AR?'عمر رامي حسن':'Omar Rami Hassan',seat:'10001',grade:82},
    {id:'s2',name:AR?'عمر كريم إبراهيم':'Omar Karim Ibrahim',seat:'10002',grade:71},
    {id:'s3',name:AR?'نور أمير حسن':'Nour Amir Hassan',seat:'10003',grade:65},
    {id:'s4',name:AR?'دينا يوسف منصور':'Dina Youssef Mansour',seat:'10004',grade:90},
    {id:'s5',name:AR?'أمير خالد رشاد':'Amir Khaled Rashad',seat:'10005',grade:45},
    {id:'s6',name:AR?'لينا علي منصور':'Lina Ali Mansour',seat:'10006',grade:78},
    {id:'s7',name:AR?'طارق عمر رشاد':'Tarek Omar Rashad',seat:'10007',grade:88},
    {id:'s8',name:AR?'أمير أمير عزيز':'Amir Amir Aziz',seat:'10008',grade:43},
  ];
}
function controlGradeVal(s){ return +(S.control.confirmed['g'+s.id]||s.grade); }
function controlAvg(st){ return Math.round(st.reduce((a,s)=>a+controlGradeVal(s),0)/st.length); }
function controlFails(st){ return st.filter(s=>controlGradeVal(s)<50).length; }
function controlMax(st){ return Math.max(...st.map(controlGradeVal)); }
function controlMin(st){ return Math.min(...st.map(controlGradeVal)); }

function sysadminView(){
  const v=S.sys.view||'overview';
  const items=[['overview','🗺️',TR('Overview','نظرة عامة')],['people','👥',TR('People & numbers','الأشخاص والأرقام')],['controls','🛡️',TR('Security controls','ضوابط الأمان')],['dataprot','🔏',TR('Data protection','حماية البيانات')],['training','🎓',TR('Admin training','تدريب المسؤولين')]];
  const navHtml=`<div class="flex wrapw" role="tablist" aria-label="${TR('Sections','الأقسام')}" style="gap:.4rem;margin-bottom:1rem">${items.map(it=>`<button type="button" role="tab" aria-selected="${v===it[0]}" class="btn ${v===it[0]?'':'ghost'} sm" data-sys-view="${it[0]}">${it[1]} ${it[2]}</button>`).join('')}</div>`;
  const body = v==='people'?sysPeople(): v==='controls'?sysControls(): v==='dataprot'?sysDataProtection(): v==='training'?sysTraining(): sysOverview();
  return `${appbar()}<main id="main" tabindex="-1"><div class="wrap" style="padding-block:1.2rem">
    ${sysTierBar()}
    ${navHtml}
    ${body}
  </div></main>${a11yPanel()}`;
}
function sysOverview(){
  const yes=`<span class="sec-yes">✓</span>`, no=`<span class="sec-no">—</span>`, part=`<span class="sec-part" title="${TR('limited / own scope','محدود / نطاقه')}">◑</span>`;
  const caps=[TR('Manage admins','إدارة المسؤولين'),TR('Manage users','إدارة المستخدمين'),TR('Update numbers','تحديث الأرقام'),TR('Approve changes','اعتماد التغييرات'),TR('Reveal PII','كشف الهوية'),TR('System config','إعداد النظام'),TR('Export','تصدير')];
  const rows=[
    [TR('Super admin (National IT)','الأعلى (تقنية وطنية)'),[yes,yes,yes,yes,part,yes,yes]],
    [TR('District admin','مسؤول المديرية'),[part,yes,yes,yes,part,no,part]],
    [TR('School admin','مسؤول المدرسة'),[no,yes,yes,no,part,no,no]],
    [TR('Help desk (read-only)','الدعم الفنّي (قراءة فقط)'),[no,part,no,no,no,no,no]],
  ];
  return `<div class="page-head"><div><p class="eyebrow">🗺️ ${TR('Admin tiers & access','مستويات المسؤولين والوصول')}</p><h1>${TR('Who can administer what','من يدير ماذا')}</h1></div></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:1rem">
    <div class="card"><p class="eyebrow">1 · ${TR('Super admin','الأعلى')}</p><p class="small">${TR('A handful of National-IT staff. System configuration, can manage other admins and approve anything — but cannot read student PII without it being logged. Hardware-key 2FA.','عدد قليل من تقنية المعلومات الوطنية. إعداد النظام وإدارة المسؤولين واعتماد كلّ شيء — لكن لا يقرأ بيانات الطلاب دون تسجيل. تحقّق بمفتاح صلب.')}</p></div>
    <div class="card"><p class="eyebrow">2 · ${TR('District admin','مسؤول المديرية')}</p><p class="small">${TR('Manages school admins and users inside one directorate only. Approves school-level requests. Cannot touch other districts or system config.','يدير مسؤولي المدارس والمستخدمين داخل مديرية واحدة فقط. يعتمد طلبات المدارس. ولا يصل لمديريات أخرى أو إعداد النظام.')}</p></div>
    <div class="card"><p class="eyebrow">3 · ${TR('School admin','مسؤول المدرسة')}</p><p class="small">${TR('Manages one school’s teachers and parents and verifies identities in person. Can request number changes, but a district admin must approve them.','يدير معلّمي وأولياء أمور مدرسة واحدة ويتحقّق من الهويات شخصيًّا. يطلب تغيير الأرقام، لكن يعتمدها مسؤول المديرية.')}</p></div>
  </div>
  <div class="card mt2"><p class="eyebrow">${TR('Capabilities by tier','الصلاحيات حسب المستوى')}</p>
    <div class="tbl-scroll"><table class="sec-matrix">
      <thead><tr><th scope="col">${TR('Tier','المستوى')}</th>${caps.map(c=>`<th scope="col">${c}</th>`).join('')}</tr></thead>
      <tbody>${rows.map(r=>`<tr><th scope="row">${r[0]}</th>${r[1].map(c=>`<td>${c}</td>`).join('')}</tr>`).join('')}</tbody>
    </table></div>
    <p class="small muted mt">✓ ${TR('allowed','مسموح')} · ◑ ${TR('limited / own scope, audited','محدود / نطاقه، مُدقَّق')} · — ${TR('no access','لا وصول')}</p>
  </div>`;
}
function sysPhoneCell(p){
  const shown=!!S.sys.reveal[p.id];
  if(!p.phone) return `<span class="tag warn">${TR('missing','غير مُسجَّل')}</span>`;
  return `<span style="font-variant-numeric:tabular-nums">${shown?fmtPhone(p.phone):maskPhone(p.phone)}</span> <button type="button" class="btn ghost sm" data-sys-reveal="${p.id}">${shown?TR('Hide','إخفاء'):'👁 '+TR('Reveal','إظهار')}</button>`;
}
function sysPeople(){
  const caps=sysCaps(); const people=sysPeopleInScope(); const pend=sysPendingInScope();
  const statusTag=p=>p.status==='pending'?`<span class="tag warn">${TR('change pending','تغيير معلّق')}</span>`:p.status==='missing'?`<span class="tag risk">${TR('no number','بلا رقم')}</span>`:`<span class="tag ok">✓ ${TR('verified','موثّق')}</span>`;
  return `<div class="page-head"><div><p class="eyebrow">👥 ${TR('People & phone numbers','الأشخاص وأرقام الهواتف')}</p><h1>${TR('Provision & update contact numbers','إدخال وتحديث أرقام التواصل')}</h1></div></div>
  <div class="calm mb">${uiIcon('lock', 22)}<span>${TR('Numbers come from EMIS enrolment and are masked by default. Updating a number needs in-person identity verification and a second approver. Showing a full number is itself recorded.','الأرقام من تسجيل EMIS ومُقنّعة افتراضيًّا. ويحتاج تحديث الرقم تحقّقًا شخصيًّا من الهوية ومُعتمِدًا ثانيًا. وإظهار الرقم كاملًا يُسجَّل بذاته.')}</span></div>
  ${pend.length?`<div class="card mb" style="border-inline-start:6px solid var(--warn-700);background:var(--warn-050)">
    <p class="eyebrow" style="margin:0 0 .4rem">${TR('Pending approvals','اعتمادات معلّقة')} (${pend.length})</p>
    ${pend.map(r=>`<div class="flex between center wrapw" style="gap:.6rem;border-top:1px solid var(--line);padding:.5rem 0">
      <div><strong>${esc(r.name)}</strong> — ${TR('new number','رقم جديد')} <span style="font-variant-numeric:tabular-nums">${maskPhone(r.newNumber)}</span><br><span class="small muted">${TR('requested by','طلبها')} ${esc(r.by)} · “${esc(r.reason)}”</span></div>
      ${caps.approve==='y'?`<div class="flex" style="gap:.4rem"><button type="button" class="btn sm" data-sys-approve="${r.rid}">✓ ${TR('Approve','اعتماد')}</button><button type="button" class="btn ghost sm" data-sys-reject="${r.rid}">${TR('Reject','رفض')}</button></div>`:`<span class="tag warn">${TR('awaits district admin','بانتظار مسؤول المديرية')}</span>`}
    </div>`).join('')}
    <p class="tiny muted" style="margin:.4rem 0 0">${TR('The approver must be a different person from whoever requested the change.','يجب أن يكون المُعتمِد شخصًا مختلفًا عن مُقدّم الطلب.')}</p>
  </div>`:''}
  <div class="card">
    <div class="tbl-scroll"><table>
      <thead><tr><th scope="col">${TR('Name','الاسم')}</th><th scope="col">${TR('Role','الدور')}</th><th scope="col">${TR('School','المدرسة')}</th><th scope="col">${TR('Phone number','رقم الهاتف')}</th><th scope="col">${TR('Status','الحالة')}</th><th scope="col"></th></tr></thead>
      <tbody>${people.map(p=>`<tr>
        <td>${esc(sysName(p))}</td><td>${sysRoleLabel(p.role)}</td><td>${esc(sysSchoolName(p.school))}</td>
        <td>${sysPhoneCell(p)}</td><td>${statusTag(p)}</td>
        <td>${p.status==='pending'?`<span class="small muted">—</span>`:`<button type="button" class="btn sec sm" data-sys-update="${p.id}">✏️ ${p.phone?TR('Update','تحديث'):TR('Add number','إضافة رقم')}</button>`}</td>
      </tr>`).join('')}</tbody>
    </table></div>
    <p class="tiny muted mt">${TR('Bulk numbers are imported from EMIS, not typed here. Manual edits like these are the exception and are rate-limited & reviewed.','تُستورد الأرقام بالجملة من EMIS، لا تُكتب هنا. والتعديلات اليدوية كهذه استثناء، ومحدودة المعدّل وتُراجَع.')}</p>
  </div>`;
}
function sysDataProtection(){
  const inc=S.sys.incident;
  const facts=[
    ['📍',TR('Sovereign hosting','استضافة سيادية'),TR('Student data is hosted in Egypt / the MENA region under contractual data-sovereignty terms. No cross-border transfer that would breach PDPL.','تُستضاف بيانات الطلاب في مصر / منطقة الشرق الأوسط بشروط سيادة تعاقدية. ولا نقل عابر للحدود يخالف قانون حماية البيانات.')],
    ['🔐',TR('Encrypted everywhere','تشفير في كلّ مكان'),TR('AES-256 at rest, TLS 1.3 in transit, and an encrypted local database on each device, so a lost phone does not mean lost data.','تشفير AES-256 للبيانات المخزّنة، وTLS 1.3 أثناء النقل، وقاعدة بيانات محلّية مشفّرة على كلّ جهاز، فلا يعني فقدان الهاتف فقدان البيانات.')],
    ['🧮',TR('Data minimisation','تقليل البيانات'),TR('Under PDPL, children’s data is Sensitive Personal Data. We collect the least needed, and nothing is retyped — it comes from EMIS.','بموجب القانون، بيانات الأطفال بيانات شخصية حسّاسة. نجمع أقلّ ما يلزم، ولا يُعاد إدخال شيء — يأتي من EMIS.')],
    ['⏳',TR('Retention & purge','الاحتفاظ والمحو'),TR('Each record type has a fixed retention period; after it, data is automatically purged. Imported spreadsheets are deleted once processed.','لكلّ نوع سجلّ مدّة احتفاظ محدّدة؛ بعدها تُمحى البيانات تلقائيًّا. وتُحذف الجداول المستوردة بعد معالجتها.')],
    ['👁️',TR('Access is logged','الوصول مُسجَّل'),TR('Every view of personal data is recorded with who, when and IP, and access is least-privilege and scoped by role.','يُسجَّل كلّ اطّلاع على بيانات شخصية بمن ومتى وعنوان الإنترنت، والوصول بأقلّ صلاحية ومحدَّد بالدور.')],
    ['👪',TR('Family rights','حقوق الأسرة'),TR('Families can see what is held about their child and ask the school to correct it — a data-subject right under PDPL.','يمكن للأسر معرفة ما يُحفظ عن أبنائها وطلب تصحيحه من المدرسة — وهو حقّ لصاحب البيانات بموجب القانون.')],
  ];
  const stageView = ()=>{
    if(!inc) return `<button type="button" class="btn" data-sys-breach="open">🚨 ${TR('Start a breach notification (mock)','ابدأ إشعار خرق (نموذج)')}</button>
      <p class="tiny muted" style="margin:.5rem 0 0">${TR('PDPL requires that affected data subjects be informed — “we’ll handle it internally” is not compliant. This walks through the 72-hour protocol.','يوجب القانون إبلاغ المتأثّرين — «سنعالجها داخليًّا» غير مقبول. يستعرض هذا بروتوكول الـ72 ساعة.')}</p>`;
    if(inc.stage==='form') return `<div class="card" style="border-inline-start:6px solid var(--warn-700)">
      <p class="eyebrow">${TR('Incident details','تفاصيل الحادث')}</p>
      <div class="field"><label for="br-what">${TR('What happened?','ماذا حدث؟')}</label><input id="br-what" value="${TR('Lost school tablet, encrypted','جهاز لوحي مدرسي مفقود، مشفّر')}"></div>
      <div class="field"><label for="br-scope">${TR('Roughly how many people affected?','كم عدد المتأثّرين تقريبًا؟')}</label><input id="br-scope" inputmode="numeric" value="32"></div>
      <div class="flex wrapw" style="gap:.6rem"><button type="button" class="btn" data-sys-breach="log">${TR('Log incident & start the 72-hour clock','سجّل الحادث وابدأ مؤقّت 72 ساعة')}</button><button type="button" class="btn ghost" data-sys-breach="cancel">${TR('Cancel','إلغاء')}</button></div>
    </div>`;
    return `<div class="card" style="border-inline-start:6px solid var(--ok-700)">
      <p class="eyebrow">${TR('Incident logged','سُجِّل الحادث')} · <span dir="ltr">${esc(inc.ref)}</span></p>
      <p style="margin:.2rem 0 .5rem"><strong>${esc(inc.what)}</strong> · ${TR('about','نحو')} ${esc(String(inc.scope))} ${TR('people','شخص')}</p>
      <ol class="small" style="margin:0;padding-inline-start:1.2rem;line-height:1.8">
        <li>✅ ${TR('Contained and access revoked on the device','الاحتواء وإلغاء الوصول على الجهاز')}</li>
        <li>✅ ${TR('Logged with time, scope and handler','سُجِّل بالوقت والنطاق والمسؤول')}</li>
        <li>⏳ ${TR('Notify the Data Protection Centre and affected families within <strong>72 hours</strong>','إبلاغ مركز حماية البيانات والأسر المتأثّرة خلال <strong>72 ساعة</strong>')}</li>
        <li>⏳ ${TR('Post-incident review and fix','مراجعة بعد الحادث ومعالجة')}</li>
      </ol>
      <p class="small muted mt">${TR('Because the device was encrypted, exposure risk is low — but notification still proceeds, as PDPL requires.','لأنّ الجهاز كان مشفّرًا، فخطر الكشف منخفض — لكنّ الإبلاغ يمضي كما يوجب القانون.')}</p>
      <button type="button" class="btn ghost sm mt" data-sys-breach="cancel">${TR('Close','إغلاق')}</button>
    </div>`;
  };
  return `<div class="page-head"><div><p class="eyebrow">🔏 ${TR('Data protection & privacy','حماية البيانات والخصوصية')}</p><h1>${TR('How children’s data is protected','كيف تُحمى بيانات الأطفال')}</h1></div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">⚖️</span><span>${TR('Egypt’s Personal Data Protection Law (151/2020) treats children’s data as <strong>Sensitive Personal Data</strong>. The platform is built to privacy-by-default; the points below are policy commitments, enforced in the back end.','يعامل قانون حماية البيانات المصري (151/2020) بيانات الأطفال كـ<strong>بيانات شخصية حسّاسة</strong>. والمنصّة مبنيّة على الخصوصية افتراضيًّا؛ والنقاط أدناه التزامات سياسة تُفرَض في الخادم.')}</span></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem">
    ${facts.map(f=>`<div class="card"><p style="margin:0;font-size:1.02rem"><span aria-hidden="true" style="font-size:1.3rem">${f[0]}</span> <strong>${f[1]}</strong></p><p class="small muted" style="margin:.35rem 0 0">${f[2]}</p></div>`).join('')}
  </div>
  <div class="card mt2"><p class="eyebrow">🚨 ${TR('Breach notification','إشعار الخرق')}</p>
    <p class="small muted" style="margin:.2rem 0 .6rem">${TR('If personal data is exposed, there is a defined response — not silence. Try the mock to see the 72-hour protocol.','عند كشف بيانات شخصية، توجد استجابة محدّدة — لا صمت. جرّب النموذج لرؤية بروتوكول الـ72 ساعة.')}</p>
    ${stageView()}
  </div>`;
}
function sysControls(){
  const items=[
    ['🔑',TR('Least-privilege access','أقلّ صلاحية'),TR('Each admin sees only their school or district and below — enforced by the server, not just hidden in the screen.','كلّ مسؤول يرى مدرسته أو مديريته وما دونها فقط — يفرضه الخادم لا مجرّد إخفاء في الشاشة.')],
    ['✌️',TR('Maker–checker (4-eyes)','مُقدِّم ومُعتمِد'),TR('Sensitive changes — numbers, roles, deletions — need a second, different admin to approve before they take effect.','التغييرات الحسّاسة — أرقام، أدوار، حذف — تحتاج مسؤولًا ثانيًا مختلفًا لاعتمادها قبل أن تسري.')],
    ['🙈',TR('PII masked by default','إخفاء الهوية افتراضيًّا'),TR('Phone numbers and IDs are hidden until explicitly revealed — and each reveal is logged to your name.','الأرقام والمعرّفات مخفيّة حتى تُكشف صراحةً — وكلّ كشف يُسجَّل باسمك.')],
    ['📈',TR('Bulk-change alarms & rate limits','إنذارات التغيير الجماعي وحدود المعدّل'),TR('Mass edits or exports are throttled and automatically flagged for review — one careless action can’t leak everyone.','التعديلات أو التصديرات الجماعية محدودة ومُعلَّمة للمراجعة تلقائيًّا — فلا يُسرِّب خطأ واحد بيانات الجميع.')],
    ['🔐',TR('Mandatory 2FA + auto sign-out','تحقّق ثنائي إلزامي وخروج تلقائي'),TR('Admin accounts require two-factor (hardware key for super admins) and end after inactivity.','تتطلّب حسابات المسؤولين تحقّقًا ثنائيًّا (مفتاح صلب للأعلى) وتنتهي بعد الخمول.')],
    ['🧾',TR('Tamper-evident audit log','سجلّ تدقيق غير قابل للعبث'),TR('Every action is recorded with who, when and IP, and cannot be quietly edited or deleted.','كلّ إجراء مُسجَّل بمن ومتى وعنوان الإنترنت، ولا يُعدَّل أو يُحذَف بهدوء.')],
    ['🔄',TR('Automatic deprovisioning','إلغاء تلقائي للوصول'),TR('When EMIS marks someone as transferred or left, their access is removed automatically — no manual step to forget.','عندما يسجّل EMIS انتقال شخص أو تركه، يُزال وصوله تلقائيًّا — دون خطوة يدوية تُنسى.')],
    ['🚨',TR('Break-glass emergency access','وصول الطوارئ'),TR('Rare elevated access is time-boxed, alerts others, and is reviewed afterwards.','الوصول المرتفع النادر محدود بوقت، ينبّه الآخرين، ويُراجَع لاحقًا.')],
    ['🎓',TR('Training-gated access','وصول مشروط بالتدريب'),TR('Access is suspended automatically the moment data-protection training lapses — it doesn’t depend on anyone remembering.','يُعلَّق الوصول تلقائيًّا لحظة انتهاء تدريب حماية البيانات — دون اعتماد على تذكّر أحد.')],
  ];
  return `<div class="page-head"><div><p class="eyebrow">🛡️ ${TR('Security & privacy controls','ضوابط الأمان والخصوصية')}</p><h1>${TR('Protection that doesn’t rely on good behaviour','حماية لا تعتمد على حُسن التصرّف')}</h1></div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">🧱</span><span>${TR('Training matters, but people forget or make mistakes. These controls are designed so that even if an admin ignores what they were trained on, student and family data stays protected.','التدريب مهمّ، لكنّ الناس ينسون أو يخطئون. صُمّمت هذه الضوابط بحيث تبقى بيانات الطلاب والأسر محميّة حتى لو تجاهل المسؤول ما تدرّب عليه.')}</span></div>
  <div class="grid" style="grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:1rem">
    ${items.map(it=>`<div class="card"><p style="margin:0;font-size:1.02rem"><span aria-hidden="true" style="font-size:1.3rem">${it[0]}</span> <strong>${it[1]}</strong> <span class="tag ok" style="vertical-align:middle">✓ ${TR('on','مفعّل')}</span></p><p class="small muted" style="margin:.35rem 0 0">${it[2]}</p></div>`).join('')}
  </div>`;
}
function sysTraining(){
  const certTag=c=>c==='ok'?`<span class="tag ok">✓ ${TR('Certified','معتمد')}</span>`:c==='due'?`<span class="tag warn">${TR('Renewal due','يحتاج تجديدًا')}</span>`:`<span class="tag risk">${TR('Lapsed','منتهٍ')}</span>`;
  const accessTag=a=>a==='active'?`<span class="tag ok">${TR('Active','نشط')}</span>`:`<span class="tag risk">⛔ ${TR('Suspended','مُعلَّق')}</span>`;
  const admins=[
    {name:'T. Mansour',ar:'ت. منصور',tier:TR('Super admin','الأعلى'),cert:'ok',access:'active'},
    {name:'M. Fawzy',ar:'م. فوزي',tier:TR('District — Cairo/Maadi','مديرية القاهرة/المعادي'),cert:'ok',access:'active'},
    {name:'S. Adel',ar:'س. عادل',tier:TR('School — Maadi STEM','مدرسة المعادي ستيم'),cert:'due',access:'active'},
    {name:'K. Nabil',ar:'ك. نبيل',tier:TR('School — Edfu','مدرسة إدفو'),cert:'lapsed',access:'suspended'},
  ];
  return `<div class="page-head"><div><p class="eyebrow">🎓 ${TR('Admin training & certification','تدريب المسؤولين واعتمادهم')}</p><h1>${TR('Trained, and verified to be trained','مدرَّبون، ومُتحقَّق من تدريبهم')}</h1></div></div>
  <div class="calm mb"><span class="em" aria-hidden="true">📚</span><span>${TR('Every school and district admin must complete data-protection & privacy training (PDPL) before they get access, and renew it each year. If certification lapses, access is suspended automatically — the system enforces it, not a reminder email.','على كلّ مسؤول مدرسة ومديرية إكمال تدريب حماية البيانات والخصوصية قبل منحه الوصول، وتجديده سنويًّا. وإن انتهى الاعتماد، يُعلَّق الوصول تلقائيًّا — يفرضه النظام لا رسالة تذكير.')}</span></div>
  <div class="card"><div class="tbl-scroll"><table>
    <thead><tr><th scope="col">${TR('Admin','المسؤول')}</th><th scope="col">${TR('Tier','المستوى')}</th><th scope="col">${TR('Training','التدريب')}</th><th scope="col">${TR('Access','الوصول')}</th></tr></thead>
    <tbody>${admins.map(a=>`<tr><td>${S.settings.lang==='ar'?esc(a.ar):esc(a.name)}</td><td>${a.tier}</td><td>${certTag(a.cert)}</td><td>${accessTag(a.access)}</td></tr>`).join('')}</tbody>
  </table></div>
  <p class="small muted mt">${TR('K. Nabil’s certification lapsed, so their access was suspended automatically — note this happened without any admin having to act.','انتهى اعتماد ك. نبيل، فعُلِّق وصوله تلقائيًّا — لاحظ أنّ ذلك حدث دون أن يتدخّل أيّ مسؤول.')}</p></div>`;
}
function sysUpdateOverlay(){
  if(!S.sys.editing) return '';
  const p=SYS_PEOPLE.find(x=>x.id===S.sys.editing); if(!p) return '';
  return `<div class="coach-bg" role="dialog" aria-modal="true" aria-labelledby="se-h" id="sysedit"><div class="coach">
    <span class="em" aria-hidden="true">📞</span>
    <h2 id="se-h">${p.phone?TR('Update phone number','تحديث رقم الهاتف'):TR('Add phone number','إضافة رقم الهاتف')}</h2>
    <p class="lead">${esc(sysName(p))} — ${sysRoleLabel(p.role)} · ${esc(sysSchoolName(p.school))}</p>
    <div class="field"><label for="sys-num">${TR('New mobile number','رقم الجوّال الجديد')}</label><input id="sys-num" inputmode="tel" value="010 " autocomplete="off"></div>
    <div class="field"><label for="sys-reason">${TR('Reason for the change','سبب التغيير')}</label><input id="sys-reason" value="" placeholder="${TR('e.g. parent changed SIM; verified new number','مثال: غيّر وليّ الأمر الشريحة؛ تحقّقت من الرقم')}"></div>
    <label class="flex" style="gap:.5rem;align-items:flex-start;margin:.2rem 0"><input type="checkbox" id="sys-verified"> <span class="small">${TR('I verified this person’s identity in person against an official ID.','تحقّقت من هوية هذا الشخص شخصيًّا بمستند رسمي.')}</span></label>
    <div class="flex between center mt" style="gap:.6rem;flex-wrap:wrap">
      <button type="button" class="btn sec" data-sys-update-cancel>${aBack()} ${TR('Cancel','إلغاء')}</button>
      <button type="button" class="btn" data-sys-update-submit>${TR('Submit for approval','أرسل للاعتماد')}</button>
    </div>
    <p class="tiny muted mt">${TR('This creates a change request that a different admin must approve — it is not applied immediately, and the whole request is logged.','يُنشئ هذا طلب تغيير يجب أن يعتمده مسؤول آخر — لا يُطبَّق فورًا، ويُسجَّل الطلب كاملًا.')}</p>
  </div></div>`;
}

function viewFor(){
  if(S.settingsOpen) return settingsShell();
  if(S.route==='login') return S.auth?authView():loginView();
  if(S.route==='sysadmin') return sysadminView();
  if(S.route==='control'){
    if(!S.control.securityPassed) return controlShell(controlSecurityGate());
    const cmap={grades:controlGrades, review:controlReview, history:controlHistory};
    return controlShell((cmap[S.view]||controlGrades)());
  }
  if(S.route==='teacher'){
    if(S.view==='training') return teacherShell(trainingView('teacher'));
    const map={dashboard:teacherDashboard,gradebook:teacherGradebook,attendance:teacherAttendance,assessments:teacherAssessments,students:teacherStudent,develop:teacherTPD,announce:teacherAnnounce};
    return teacherShell((map[S.view]||teacherDashboard)());
  }
  if(S.route==='student'){
    if(S.contentOpen) return studentShell(contentReader());
    if(S.view==='progress') return studentShell(studentProgress());
    if(S.view==='training') return studentShell(trainingView('student'));
    if(S.view==='subject') return studentShell(studentSubject());
    const map={home:studentHome,assessments:studentAssessments};
    return studentShell((map[S.view]||studentHome)());
  }
  if(S.route==='parent'){
    if(S.parentVerified!==true) return `${appbar()}<main id="main" tabindex="-1"><div class="wrap">${parentVerify()}${devNote()}</div></main>${a11yPanel()}`;
    if(S.view==='training') return parentShell(trainingView('parent'));
    const map={home:parentHome,attendance:parentAttendance,marks:parentMarks,messages:parentMessages};
    return parentShell((map[S.view]||parentHome)());
  }
  if(S.route==='leader'){
    if(S.view==='training') return leaderShell(trainingView('leader'));
    const lmap={dashboard:leaderDashboard,excuses:excuseManagement};
    return leaderShell((lmap[S.view]||leaderDashboard)());
  }
  if(S.route==='admin'){
    if(S.view==='training') return adminShell(trainingView('admin'));
    const map={oversight:adminOversight,reports:reportsView,pilot:pilotView,dataquality:dataQuality,security:securityView};
    return adminShell((map[S.view]||adminOversight)());
  }
  if(S.route==='coordinator') return coordShell(coordView());
  return loginView();
}

function drilldownModalOverlay(){
  if(!S.activeDrilldown) return '';
  const d = S.activeDrilldown;
  const AR = S.settings.lang==='ar';
  
  let content = '';
  if(d.type === 'student'){
    const st = d.student;
    const res = calculateDynamicStudentAverage(st, S.dateRange);
    content = `
    <div class="flex between center" style="margin-bottom:1rem;border-bottom:1.5px solid var(--line);padding-bottom:.75rem">
      <div>
        <p class="eyebrow" style="margin:0">${TR('Assessment Breakdown & Ledger','سجل تفاصيل الدرجات والتقييمات')}</p>
        <h2 style="margin:0">${esc(arName(st))} <span class="tag info">${st.code||'STD-1001'}</span></h2>
      </div>
      <button class="iconbtn" data-close-modal>✕</button>
    </div>
    
    <div class="kpi-row" style="grid-template-columns:1fr 1fr;margin-bottom:1rem">
      <div class="card" style="border-inline-start:5px solid var(--ok-700)">
        <p class="eyebrow" style="margin:0">${TR('Dynamic Calculated Average','المتوسط الفعلي المحسوب (ديناميكي)')}</p>
        <div class="stat"><span class="num" style="color:var(--ok-700)">${res.average}%</span></div>
        <p class="small muted" style="margin:.2rem 0 0">${TR(`Based only on ${res.count} assessments past due date`,`محسوب فقط على ${res.count} تقييمات انتهى تاريخ استحقاقها`)}</p>
      </div>
      <div class="card" style="border-inline-start:5px solid var(--ischool-gold)">
        <p class="eyebrow" style="margin:0">${TR('Attendance & Excuses','سجل الحضور والأعذار المقبولة')}</p>
        <div class="stat"><span class="num" style="color:var(--teal-900)">${st.att}%</span></div>
        <p class="small muted" style="margin:.2rem 0 0">${TR('Excused absences properly categorized to maintain statistical integrity','الأعذار المقبولة مصنفة بدقة دون طمس الغياب')}</p>
      </div>
    </div>
    
    <h3>${TR('📋 Assessments Ledger (Past Due Date Only)','📋 كشف التقييمات المستحقة وحالة الرصد')}</h3>
    <div class="tbl-scroll">
      <table>
        <thead>
          <tr>
            <th>${TR('Assessment','التقييم')}</th>
            <th>${TR('Due Date','تاريخ الاستحقاق')}</th>
            <th>${TR('Recorded Score','الدرجة المرصودة')}</th>
            <th>${TR('Weight','الوزن')}</th>
            <th>${TR('Status','الحالة')}</th>
          </tr>
        </thead>
        <tbody>
          ${res.items.map(it => `
            <tr>
              <th scope="row" style="position:static;font-weight:700">${esc(it.name)}</th>
              <td>${it.dueDate}</td>
              <td style="font-weight:800;color:${it.isOverdueZero ? 'var(--risk-700)' : 'var(--teal-700)'}">${it.score} / ${it.maxMarks}</td>
              <td>× ${it.weight}</td>
              <td>
                ${it.isOverdueZero
                  ? `<span class="tag risk">${TR('⚠️ Overdue (Zero-Defaulted)','⚠️ متأخر (احتُسب ٠ تلقائيًا)')}</span>`
                  : `<span class="tag ok">${TR('✓ Submitted on time','✓ مرصود في الموعد')}</span>`}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    </div>
    <p class="small muted mt">${TR('💡 Ministerial Calculation Rule: Overdue assignments past the 1-week grace period default to 0 to prevent grade inflation until submitted.','💡 قاعدة الحساب الوزارية: التقييمات المتأخرة التي تجاوزت مهلة الأسبوع تُحتسب بقيمة صفر حتى يتم رصدها فعليًا، لحماية مصداقية المؤشرات ومنع تضخيم النتائج.')}</p>
    `;
  } else if (d.type === 'anomalies_list') {
    content = `
    <div class="flex between center" style="margin-bottom:1rem;border-bottom:1.5px solid var(--line);padding-bottom:.75rem">
      <div>
        <p class="eyebrow" style="margin:0">${TR('Automated Anomaly Detection Engine','نظام التدقيق وضبط الجودة الآلي')}</p>
        <h2 style="margin:0">🚨 ${TR('Irregular Patterns & QA Flags','سجل الأنماط غير المعتادة والتنبيهات')}</h2>
      </div>
      <button class="iconbtn" data-close-modal>✕</button>
    </div>
    
    <div class="grid" style="gap:.8rem">
      <div class="card" style="border-inline-start:5px solid var(--risk-700)">
        <div class="flex between center">
          <strong>${TR('Grades Pending > 1 Week Past Due Date','درجات متأخرة > أسبوع واحد بعد نهاية الأسبوع الدراسي')}</strong>
          <span class="tag risk">${TR('High Priority','أولوية قصوى')}</span>
        </div>
        <p class="small muted" style="margin:.3rem 0 0">${TR('School: Nile Official Language School — Grade 10/A (Science): 7 students pending past grace period. Scores defaulted to zero.','مدرسة النيل الرسمية للغات — الصف الأول/أ (مادة العلوم): ٧ طلاب لم يتم رصد درجاتهم بعد انتهاء مهلة السماح. تم احتسابهم صفرًا.')}</p>
        <div class="flex gap-1" style="margin-top:.6rem">
          <button class="btn sm" onclick="toast('${TR('Notified supervisor','تم إرسال إشعار للمشرف التربوي')}')">${TR('Notify Supervisor','إشعار الموجه التربوي')}</button>
          <button class="btn sm sec" onclick="toast('${TR('Granted 24h extension','تم منح مهلة تصحيح ٢٤ ساعة')}')">${TR('Grant 24h Grace','منح مهلة تصحيح ٢٤ ساعة')}</button>
        </div>
      </div>
      
      <div class="card" style="border-inline-start:5px solid var(--warn-700)">
        <div class="flex between center">
          <strong>${TR('Excused Absence Ratio Spike (>40%)','ارتفاع مؤشر الأعذار المقبولة (Excused Absence Abuse)')}</strong>
          <span class="tag warn">${TR('Medium Severity','متابعة إدارية')}</span>
        </div>
        <p class="small muted" style="margin:.3rem 0 0">${TR('Excused absences reached 46% of total absences over 2 consecutive weeks without medical validation attachments.','بلغت نسبة الأعذار ٤٦٪ من إجمالي الغياب خلال أسبوعين متتاليين دون تقارير طبية معتمدة مرفقة.')}</p>
      </div>

      <div class="card" style="border-inline-start:5px solid var(--info-700)">
        <div class="flex between center">
          <strong>${TR('Zero-Variance 100% Scores Class Flag','فصل كامل بدرجة ١٠٠٪ دون تباين (Zero-Variance Check)')}</strong>
          <span class="tag info">${TR('Routine QA','تحقق إحصائي')}</span>
        </div>
        <p class="small muted" style="margin:.3rem 0 0">${TR('Entire class received identical 100% scores without standard deviation.','رصد درجة كاملة متطابقة لكافة طلاب الفصل دون أي انحراف معياري.')}</p>
      </div>
    </div>`;
  }
  
  return `
  <div class="coach-bg" style="z-index:400" data-modal-backdrop>
    <div class="coach" style="max-width:760px;width:94vw;max-height:88vh;overflow-y:auto;text-align:start">
      ${content}
    </div>
  </div>`;
}


  // Recomputes the live telemetry card from the marks actually on screen — every
  // number here is real, not a placeholder. No auto-fill/bonus shortcuts: a mark
  // is only ever what the teacher typed, matching the platform's anti-inflation rule.
  function recalculateLiveTelemetry(){
    const inputs = [...document.querySelectorAll('.qz-input, .gb-input')];
    if(!inputs.length) return;

    let sum = 0, count = 0, passing = 0, high = 0, mid = 0, low = 0;
    inputs.forEach(inp => {
      const val = parseInt(normDigits(inp.value), 10);
      if(!isNaN(val) && val >= 0 && val <= 100){
        sum += val;
        count++;
        if(val >= 60) passing++;
        if(val >= 85) high++;
        else if(val >= 60) mid++;
        else low++;
      }
    });

    if(count > 0){
      const mean = Math.round(sum / count);
      const passRate = Math.round((passing / count) * 100);

      const meanEl = document.getElementById('live-telemetry-mean');
      const passEl = document.getElementById('live-telemetry-pass');
      const textEl = document.getElementById('live-pedagogical-text');
      const distEl = document.getElementById('live-telemetry-dist-bar');
      const distLbl = document.getElementById('live-telemetry-dist-label');

      if(meanEl) meanEl.textContent = mean + '%';
      if(passEl) passEl.textContent = passRate + '%';
      if(distEl){
        const spans = distEl.querySelectorAll('span');
        if(spans[0]) spans[0].style.width = Math.round(high/count*100) + '%';
        if(spans[1]) spans[1].style.width = Math.round(mid/count*100) + '%';
        if(spans[2]) spans[2].style.width = Math.round(low/count*100) + '%';
      }
      if(distLbl){
        distLbl.textContent = passRate>=85 ? TR('Healthy — most of the class is on track','صحّي — معظم الفصل على المسار الصحيح')
          : passRate>=60 ? TR('Mixed — some students need support','متفاوت — بعض الطلاب يحتاجون دعمًا')
          : TR('Many students need support','عدد كبير من الطلاب يحتاج دعمًا');
      }
      if(textEl){
        if(passRate >= 85){
          textEl.textContent = TR('Strong comprehension — ' + passRate + '% of students have mastered core outcomes.', 'استيعاب قوي — ' + passRate + '٪ من الطلاب حقّقوا نواتج التعلّم المستهدفة.');
        } else if(passRate >= 60){
          textEl.textContent = TR('Good progress — ' + passRate + '% passing, a brief review could help the rest.', 'تقدّم جيد — ' + passRate + '٪ اجتياز، قد تفيد مراجعة سريعة للباقين.');
        } else {
          textEl.textContent = TR('Notice — only ' + passRate + '% passing so far. Remedial support is recommended.', 'تنبيه — ' + passRate + '٪ فقط اجتياز حتى الآن. يُنصح بتفعيل دعم علاجي.');
        }
      }
    }
  }

  // Handle Enter key and navigation in grade inputs
  document.addEventListener('keydown', (e) => {
    if (e.target.matches('.qz-input, .gb-input')) {
      if (e.key === 'Enter' || e.key === 'ArrowDown') {
        e.preventDefault();
        const inputs = [...document.querySelectorAll('.qz-input, .gb-input')];
        const idx = inputs.indexOf(e.target);
        if (idx >= 0 && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
          inputs[idx + 1].select();
        }
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        const inputs = [...document.querySelectorAll('.qz-input, .gb-input')];
        const idx = inputs.indexOf(e.target);
        if (idx > 0) {
          inputs[idx - 1].focus();
          inputs[idx - 1].select();
        }
      }
    }
  });

  // Attach live telemetry calculation to input listener
  document.addEventListener('input', (e) => {
    if (e.target.matches('.qz-input, .gb-input')) {
      recalculateLiveTelemetry();
    }
  });
  
function render(){
  applySettings();
  const app=el('app');
  app.innerHTML=viewFor()+(S._help?helpDialog():'')+coachOverlay()+confirmOverlay()+justifyOverlay()+netNotice()+sysUpdateOverlay()+videoOverlay()+announceOverlay()+drilldownModalOverlay();
  // refresh a11y panel expanded state on the trigger
  const trig=document.querySelector('[data-open-a11y]'); if(trig) trig.setAttribute('aria-expanded', String(S.a11yOpen));
  if(S.videoOpen){const m=el('videobox'); if(m){const b=m.querySelector('button'); b&&b.focus();}}
  if(S.announceCompose){const m=el('announcebox'); if(m){const i=el('ann-title'); i&&i.focus();}}
  if(S.net.notice){const m=el('netnotice'); if(m){const b=m.querySelector('button'); b&&b.focus();}}
  if(S.sys.editing){const m=el('sysedit'); if(m){const f=m.querySelector('input'); f&&f.focus();}}
  if(S.justifyOpen){const m=el('justify'); if(m){const f=m.querySelector('textarea'); f&&f.focus();}}
  else if(S.confirm){const c=el('confirm'); if(c){const b=c.querySelector('[data-confirm-no]'); b&&b.focus();}}
  else if(S.onboard){const c=el('coach'); if(c){const b=c.querySelector('[data-onboard-next]'); b&&b.focus();}}
  else if(S._help){const m=el('help-modal'); if(m){const f=m.querySelector('button'); f&&f.focus();}}
  maybeParentAutoRead();
  if(typeof measureAppbar==='function') requestAnimationFrame(measureAppbar);
}
// Parent pages read their summary once on open — but only after the parent chose "read to me"
// AND only after their first tap (so audio never starts on its own / in a public place).
function maybeParentAutoRead(){
  if(S.route!=='parent' || S.parentVerified!==true) return;
  if(!S.parentRead || !S.parentReadChosen || !S._gestured) return;
  if(S.settingsOpen || S.a11yOpen || S.confirm || S.onboard) return;
  let key=S.view||'home';
  if(key==='dashboard') key='home';
  if(['home','attendance','marks','messages'].indexOf(key)<0) return;
  if(S._spokenKey===key) return;
  S._spokenKey=key;
  const txt=parentPageSummary(); if(txt) sayAloud(txt);
}
/* move focus to main heading on view change (screen-reader friendly) */
function focusMain(){const m=el('main'); if(m){m.focus();}}

/* ===================== EVENTS (delegated) ===================== */
document.addEventListener('click', (e)=>{
  S._gestured = true; // any tap unlocks audio (browser autoplay policy + dignity in public spaces)
  
  // Modal backdrop click to close
  if (e.target.hasAttribute && e.target.hasAttribute('data-modal-backdrop')) {
    S.activeDrilldown = null;
    render();
    return;
  }

  const el_ = e.target.closest('button, a, input, select, [data-go], [data-login], [data-view], [data-drill], [data-drill-into], [data-filter-daterange], [data-admin-analytics-tab], [data-open-anomalies], [data-close-modal], [data-open-student-modal], [data-drilldown-metric], [data-toggle-phase2], [data-set], [data-toggle], [data-att], [data-crumb], [data-open-a11y], [data-close-a11y], [data-help], [data-close-help], [data-student], [data-mark-all], [data-start-exam], [data-answer], [data-exam-nav], [data-exam-review], [data-exam-goto], [data-exam-submit], [data-extend-time], [data-reset-exam], [data-speak], [data-child], [data-onboard-next], [data-onboard-back], [data-onboard-skip], [data-replay-tour], [data-subject-open], [data-share-lesson], [data-subject-tab], [data-assess-mode], [data-admin-role], [data-submit-attendance], [data-submit-grades], [data-confirm-yes], [data-confirm-no], [data-leave-anyway], [data-grade-photo], [data-practice-exam], [data-settings], [data-settings-done], [data-goto-view], [data-reset-a11y], [data-pd], [data-send-feedback], [data-coord-conn], [data-coord-open], [data-coord-mode], [data-coord-choose], [data-csv-open], [data-csv-back], [data-csv-download], [data-csv-sample], [data-csv-reset], [data-csv-confirm], [data-coord-save], [data-coord-cancel], [data-coord-sync], [data-parent-verify], [data-parent-read], [data-parent-dispute], [data-examfield], [data-announce-open], [data-announce-cancel], [data-announce-post], [data-save-spine], [data-save-full], [data-tpd-open], [data-tpd-back], [data-tpd-complete], [data-tpd-community], [data-modal-backdrop]') || e.target;
  
  if (!el_) return;
  const d = el_.dataset || {};

  /* Primary Ministerial & Custom Actions at Top Priority */
  
  
  if (d.go != null) {
    const pageMap = {
      login: 'index.html',
      home: 'index.html',
      admin: 'ministry.html',
      teacher: 'teacher.html',
      student: 'student.html',
      parent: 'parent.html',
      coordinator: 'coordinator.html',
      control: 'control.html',
      sysadmin: 'control.html',
      leader: 'ministry.html'
    };
    if (pageMap[d.go] && !window.location.pathname.endsWith(pageMap[d.go])) {
      window.location.href = pageMap[d.go];
      return;
    }
    S.route = d.go === 'home' ? 'login' : d.go;
    S.auth = null;
    if (d.go === 'teacher') S.teacherView = 'assessments';
    else if (d.go === 'admin') S.adminPath = ['min'];
    render();
    focusMain();
    return;
  }

  if (d.auth != null) {
    S.route = d.auth;
    S.auth = null;
    if (d.auth === 'teacher') S.teacherView = 'assessments';
    else if (d.auth === 'admin') S.adminPath = ['min'];
    render();
    focusMain();
    toast(TR('Signed in to ' + d.auth + ' portal', 'تم تسجيل الدخول إلى بوابة ' + d.auth));
    return;
  }
  
  if (d.adminAnalyticsTab != null) {
    S.adminAnalyticsTab = d.adminAnalyticsTab;
    render();
    focusMain();
    return;
  }
  if (d.biTab != null) {
    S.adminAnalyticsTab = d.biTab;
    S.flagOpen = null;
    render();
    focusMain();
    return;
  }
  if (d.biDrill != null) {
    S.adminAnalyticsTab = { attendance: 'attendance', mastery: 'subjects', flags: 'flags' }[d.biDrill] || 'overview';
    render();
    focusMain();
    return;
  }
  if (d.biDensity != null) {
    S.biDensity = d.biDensity;
    render();
    return;
  }
  if (d.biPrint != null) {
    window.print();
    return;
  }
  if (d.biExport != null) {
    const node = adminScopeNode();
    if (d.biExport === 'flags') {
      const rows = [[TR('ID','المعرّف'), TR('Severity','الخطورة'), TR('Type','النوع'), TR('Scope','النطاق'), TR('Title','العنوان'), TR('Status','الحالة')]]
        .concat(detectFlags(node).map(f => [f.id, sevLabel(f.sev), typeLabel(f.type), f.path, f.title, statusLabel(flagStatusOf(f))]));
      csvDownload(rows, 'manassa-qa-flags.csv');
    } else {
      const m = metricsFor(node);
      const rows = [[TR('Scope','النطاق'), TR('Level','المستوى'), TR('Students','الطلاب'), TR('Attendance %','الحضور %'), TR('Assessment %','التقييم %'), TR('Teacher attendance %','حضور المعلّمين %'), TR('Dropout risk %','الإنذار المبكر %'), TR('QA flags','التنبيهات')],
        [nodeName(node), levelLabel(node.level), cohortOf(node), m.attendance, m.mastery, m.teacherAttendance, m.dropoutRiskPct, flagSummary(node).total]];
      csvDownload(rows, 'manassa-indicators.csv');
    }
    toast(TR('Exported CSV','تم تصدير الملف'));
    return;
  }
  if (d.flagFilter != null) {
    const parts = String(d.flagFilter).split('|');
    S.flags = S.flags || {};
    S.flags[parts[0]] = parts[1];
    render();
    return;
  }
  if (d.flagOpen != null) {
    S.flagOpen = (S.flagOpen === d.flagOpen) ? null : d.flagOpen;
    render();
    return;
  }
  if (d.flagStatus != null) {
    const parts = String(d.flagStatus).split('|');
    S.flagStatus = S.flagStatus || {};
    S.flagStatus[parts[0]] = parts[1];
    toast(parts[1] === 'resolved' ? TR('Flag marked resolved', 'أُغلقت الحالة') : parts[1] === 'inprogress' ? TR('Assigned to follow-up team', 'أُحيلت لفريق المتابعة') : TR('Flag reopened', 'أُعيد فتح الحالة'));
    render();
    return;
  }
  if (d.flagAct != null) {
    S.flagStatus = S.flagStatus || {};
    if ((S.flagStatus[d.flagAct] || 'open') === 'open') S.flagStatus[d.flagAct] = 'inprogress';
    toast((d.flagActL || TR('Action recorded', 'تم تسجيل الإجراء')) + ' ✓');
    render();
    return;
  }
  if (d.drillAbs != null) {
    const target = NODE[d.drillAbs];
    if (target) {
      const path = []; let cur = target;
      while (cur) { path.unshift(cur.id); cur = cur.parent; }
      S.adminPath = path;
      S.adminAnalyticsTab = 'overview';
      render();
      focusMain();
    }
    return;
  }
  if (d.filterDaterange != null) {
    S.dateRange = d.filterDaterange;
    render();
    toast(TR('Updated dynamic calculations for timeframe', 'تم تحديث الحساب الديناميكي للنطاق الزمني'));
    return;
  }
  if (d.drillInto != null) {
    S.adminPath.push(d.drillInto);
    render();
    focusMain();
    return;
  }
  if (d.openAnomalies != null) {
    S.activeDrilldown = { type: 'anomalies_list' };
    render();
    return;
  }
  if (d.openStudentModal != null) {
    const stu = allStudents(NODE['min']).find(s => s.id === d.openStudentModal) || STUDENT_SELF;
    S.activeDrilldown = { type: 'student', student: stu };
    render();
    return;
  }
  if (d.closeModal != null) {
    S.activeDrilldown = null;
    render();
    return;
  }
  if (d.togglePhase2 != null) {
    S.phase2Preview = !S.phase2Preview;
    render();
    return;
  }
  
  if(d.netToggle!=null){ const order=['online','offline','nocache']; setStatus(order[(order.indexOf(S.net.status||'online')+1)%3]); return; }
  if(d.dismissPilot!=null){ S.pilotDismissed=true; render(); return; }
  if(d.dismissTw!=null){ try{ localStorage.setItem('manassa-tw-dismissed','1'); }catch(e){} render(); return; }
  if(d.undoGrade!=null && _gradeUndo){ const u=_gradeUndo; const stu=teacherClass().students.find(s=>s.id===u.stuId); if(stu){ stu.grades[u.subj]=u.prev; const inp=document.getElementById(u.inputId); if(inp) inp.value=u.prev; const avgEl=document.querySelector('[data-avg="'+u.stuId+'"]'); if(avgEl){ const vals=SUBJECTS.map(su=>{const g=stu.grades[su];return typeof g==='number'?g:(g==null?100:null);}).filter(x=>x!=null); avgEl.textContent=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):'—'; } } _gradeUndo=null; const th=el('toast'); if(th){th.innerHTML=''; th.hidden=true;} toast(TR('Undone.','تمّ التراجع.')); return; }
  if(d.announceOpen!=null){ S.announceCompose={}; render(); const i=el('ann-title'); i&&i.focus(); return; }
  if(d.announceCancel!=null){ S.announceCompose=null; render(); focusMain(); return; }
  if(d.announcePost!=null){ const ti=(el('ann-title')&&el('ann-title').value||'').trim(); const bo=(el('ann-body')&&el('ann-body').value||'').trim(); if(!ti&&!bo){ toast(TR('Please write a short message.','يرجى كتابة رسالة قصيرة.')); return; } const urgent=!!(el('ann-urgent')&&el('ann-urgent').checked); const txt={t:ti||TR('Announcement','إعلان'),b:bo}; S.announcements.unshift({id:'a'+Date.now(), en:txt, ar:txt, students:true, parentsUrgent:urgent, ts:Date.now()}); S.announceCompose=null; render(); focusMain(); toast(urgent?TR('Posted to your class. Urgent — also sent to parents via WhatsApp/SMS.','نُشر لصفّك. عاجل — وأُرسل أيضًا لأولياء الأمور عبر واتساب/رسالة.'):TR('Posted to your class.','نُشر لصفّك.')); return; }
  if(d.tpdOpen!=null){ S.tpd.open=d.tpdOpen; render(); focusMain(); return; }
  if(d.tpdBack!=null){ S.tpd.open=null; render(); focusMain(); return; }
  if(d.tpdComplete!=null){ const id=d.tpdComplete; if(!S.tpd.done[id]){ S.tpd.done[id]=true; toast(TR('Module complete — certificate issued and added to your professional file.','اكتملت الوحدة — صدرت الشهادة وأُضيفت إلى ملفّك المهني.')); } render(); focusMain(); return; }
  if(d.tpdCommunity!=null){ toast(TR('Joined — you’ll see this community’s shared activities and discussions.','انضممت — سترى أنشطة هذا المجتمع ومناقشاته.')); return; }
  if(d.openPdf!=null){ openUnitPdf(d.openPdf); return; }
  if(d.openVideo!=null){ const parts=String(d.openVideo).split(':'); const c=CONTENT.find(x=>x.id===parts[0]); if(c){ const v=relatedVideos(c)[+parts[1]]; if(v){ v.transcript=lessonBody(c).normal.join(' '); S.videoOpen=v; render(); } } return; }
  if(d.videoClose!=null){ S.videoOpen=null; render(); focusMain(); return; }
  if(d.contentView!=null){ const cid=S.contentOpen; if(d.contentView==='pdf'){ S.liteOpen=null; S.interactiveOpen=null; S.pdfOpen=cid; } else if(d.contentView==='lite'){ S.liteOpen=cid; S.interactiveOpen=null; S.pdfOpen=null; } else if(d.contentView==='interactive'){ S.interactiveOpen=cid; S.liteOpen=null; S.pdfOpen=null; S.ixSec=0; S.ixMaxSec=0; S.ixTerm=null; } render(); window.scrollTo({top:0,behavior:'instant'}); return; }
  if(d.liteToggle!=null){ S.liteOpen=(S.liteOpen===d.liteToggle?null:d.liteToggle); S.interactiveOpen=null; render(); window.scrollTo({top:0,behavior:'instant'}); return; }
  if(d.interactiveToggle!=null){ S.interactiveOpen=(S.interactiveOpen===d.interactiveToggle?null:d.interactiveToggle); S.liteOpen=null; S.ixSec=0; S.ixMaxSec=0; S.ixTerm=null; render(); window.scrollTo({top:0,behavior:'instant'}); return; }
  if(d.ixNext!=null){ const u=S.interactiveOpen==='sc1'?0:1; S.ixGuess=S.ixGuess||{}; S.ixSec++; S.ixMaxSec=Math.max(S.ixMaxSec,S.ixSec); S.ixTerm=null; render(); document.querySelector('.ix-content')?.scrollIntoView({behavior:'smooth'}); return; }
  if(d.ixSec!=null){ const i=+d.ixSec; if(i<=S.ixMaxSec){S.ixSec=i; S.ixTerm=null; render(); document.querySelector('.ix-content')?.scrollIntoView({behavior:'smooth'});} return; }
  if(d.ixGuess!=null){ const parts=d.ixGuess.split(','); S.ixGuess[parts[0]]=isNaN(+parts[1])?parts[1]:+parts[1]; render(); return; }
  if(d.ixTry!=null){ S.ixTry=S.ixTry||{}; S.ixTry[d.ixTry]=!S.ixTry[d.ixTry]; render(); return; }
  if(d.ixTerm!=null){ S.ixTerm=S.ixTerm===d.ixTerm?null:d.ixTerm; render(); return; }
  if(d.ixTermClose!=null){ S.ixTerm=null; render(); return; }
  if(d.readPage!=null){
    try{ if(typeof window!=='undefined' && window.speechSynthesis && window.speechSynthesis.speaking){ window.speechSynthesis.cancel(); _speaking=false; updateReadBtn(); announce(TR('Stopped reading.','تمّ إيقاف القراءة.')); return; } }catch(e){}
    const m=el('main'); let txt='';
    if(m){ const clone=m.cloneNode(true); clone.querySelectorAll('.devnote,[aria-hidden="true"],script,style,.speak,.readbtn').forEach(n=>n.remove()); txt=(clone.textContent||'').replace(/\s+/g,' ').trim(); }
    if(txt.length>2400){ const cut=txt.slice(0,2400); const dot=cut.lastIndexOf('. '); txt=(dot>800?cut.slice(0,dot+1):cut)+' …'; }
    sayAloud(txt||TR('There is nothing to read on this page.','لا يوجد ما يُقرأ في هذه الصفحة.'));
    return;
  }
  if(d.netNoticeOk!=null){ S.net.notice=false; render(); focusMain(); return; }
  if(d.netNoticeOpen!=null){ S.net.notice=(S.net.status==='nocache'?'nocache':'offline'); render(); return; }
  if(d.sysView!=null){ S.sys.view=d.sysView; render(); focusMain(); return; }
  if(d.sysTier!=null){ S.sys.tier=d.sysTier; render(); focusMain(); return; }
  if(d.sysReveal!=null){ const on=!S.sys.reveal[d.sysReveal]; S.sys.reveal[d.sysReveal]=on; if(on){ const pp=SYS_PEOPLE.find(x=>x.id===d.sysReveal); sysLog(TR('Revealed full phone number for ','أظهر الرقم الكامل لـ ')+(pp?sysName(pp):d.sysReveal)); } render(); return; }
  if(d.sysUpdate!=null){ S.sys.editing=d.sysUpdate; render(); return; }
  if(d.sysUpdateCancel!=null){ S.sys.editing=null; render(); focusMain(); return; }
  if(d.sysUpdateSubmit!=null){
    const num=(el('sys-num')&&el('sys-num').value||'').replace(/\D/g,''); const reason=(el('sys-reason')&&el('sys-reason').value||'').trim(); const verified=el('sys-verified')&&el('sys-verified').checked;
    if(num.length<8){ announce(TR('Enter a valid mobile number.','أدخل رقم جوّال صحيحًا.'),true); el('sys-num')&&el('sys-num').focus(); return; }
    if(!verified){ announce(TR('You must confirm you verified this person’s identity.','يجب تأكيد تحقّقك من هوية الشخص.'),true); return; }
    if(!reason){ announce(TR('Please give a reason.','يرجى ذكر سبب.'),true); el('sys-reason')&&el('sys-reason').focus(); return; }
    const p2=SYS_PEOPLE.find(x=>x.id===S.sys.editing); if(p2){ p2.status='pending'; const rid='r'+Date.now();
      S.sys.pending.push({rid, id:p2.id, name:sysName(p2), newNumber:num, reason, by:(S.session&&S.session.user)||('sysadmin·'+S.sys.tier)});
      sysLog(TR('Requested number change for ','طلب تغيير رقم لـ ')+sysName(p2)+' — '+reason); }
    S.sys.editing=null; render(); focusMain(); toast(TR('Change request submitted — a second admin must approve it.','أُرسل طلب التغيير — يجب أن يعتمده مسؤول ثانٍ.')); return;
  }
  if(d.sysApprove!=null){ const r=S.sys.pending.find(x=>x.rid===d.sysApprove); if(r){ const p2=SYS_PEOPLE.find(x=>x.id===r.id); if(p2){ p2.phone=r.newNumber; p2.status='verified'; } S.sys.pending=S.sys.pending.filter(x=>x.rid!==d.sysApprove); sysLog(TR('Approved number change for ','اعتمد تغيير رقم لـ ')+r.name); render(); toast(TR('Approved and applied.','تمّ الاعتماد والتطبيق.')); } return; }
  if(d.sysBreach!=null){
    if(d.sysBreach==='open'){ S.sys.incident={stage:'form'}; render(); focusMain(); return; }
    if(d.sysBreach==='cancel'){ S.sys.incident=null; render(); focusMain(); return; }
    if(d.sysBreach==='log'){ const what=(el('br-what')&&el('br-what').value||'Incident').trim(); const scope=(el('br-scope')&&el('br-scope').value||'0').replace(/\D/g,'')||'0';
      const ref='INC-'+String(hashStr('inc'+Date.now())).slice(0,6);
      S.sys.incident={stage:'logged', ref, what, scope}; sysLog(TR('Data incident logged & 72-hour notification started: ','سُجِّل حادث بيانات وبدأ إشعار 72 ساعة: ')+ref+' — '+what); render(); focusMain(); toast(TR('Incident logged. 72-hour notification clock started.','سُجِّل الحادث. بدأ مؤقّت إشعار 72 ساعة.')); return; }
    return;
  }
  if(d.sysReject!=null){ const r=S.sys.pending.find(x=>x.rid===d.sysReject); if(r){ const p2=SYS_PEOPLE.find(x=>x.id===r.id); if(p2){ p2.status=p2.phone?'verified':'missing'; } S.sys.pending=S.sys.pending.filter(x=>x.rid!==d.sysReject); sysLog(TR('Rejected number change for ','رفض تغيير رقم لـ ')+r.name); render(); toast(TR('Request rejected.','رُفض الطلب.')); } return; }
  if(d.parentUpdateNumber!=null){ S.securityLog.push({ts:Date.now(),role:'parent',user:(S.session&&S.session.user)||'—',ip:(S.session&&S.session.ip)||'—',action:TR('Requested contact-number update','طلب تحديث رقم التواصل')}); toast(TR('Request sent. Your school will verify your ID and update your number — for your child’s safety it isn’t changed here.','أُرسل الطلب. ستتحقّق مدرستك من هويتك وتحدّث رقمك — حفاظًا على طفلك لا يُغيَّر هنا.')); return; }
  if(d.auth!=null){ S.auth={role:d.auth, step:'method', method:null, mode:'own', pickedStudent:null}; render(); focusMain(); return; }
  if(d.authMethod!=null){ if(S.auth){ S.auth.method=d.authMethod; S.auth.step= d.authMethod==='password'?'pwd':d.authMethod==='microsoft'?'microsoft':d.authMethod==='pin'?'pin':'id'; } render(); focusMain(); announce(d.authMethod==='password'?TR('Password sign-in chosen.','اخترت تسجيل الدخول بكلمة المرور.'):d.authMethod==='microsoft'?TR('Microsoft sign-in chosen.','اخترت تسجيل الدخول بحساب Microsoft.'):d.authMethod==='pin'?TR('Student ID sign-in chosen.','اخترت الدخول بمعرّف الطالب.'):TR('Phone code sign-in chosen.','اخترت تسجيل الدخول بالرمز عبر الهاتف.'),true); return; }
  if(d.authMode!=null){ if(S.auth){ S.auth.mode=d.authMode; S.auth.pickedStudent=null; if(d.authMode==='own') S.auth.step='method'; } render(); focusMain(); return; }
  if(d.authBack!=null){ S.auth=null; render(); focusMain(); return; }
  if(d.authSend!=null){ if(S.auth){ S.auth.step='otp'; } render(); focusMain(); announce(TR('One-time code sent.','أُرسل الرمز لمرّة واحدة.'),true); return; }
  if(d.authStudent!=null){ if(S.auth){ S.auth.pickedStudent=d.authStudent; } render(); focusMain(); return; }
  if(d.reportPrint!=null){ try{ window.print&&window.print(); }catch(err){ toast(TR('Printing isn’t available here — open the deployed site.','الطباعة غير متاحة هنا — افتح الموقع المنشور.')); } return; }
  if(d.reportCsv!=null){ const node=reportScopeNode(); downloadFile('manassa-'+S.report.type+'-'+node.id+'.csv', reportCSV(node), 'text/csv'); return; }
  if(d.justifyOpen!=null){ S.justifyOpen=true; render(); return; }
  if(d.justifyCancel!=null){ S.justifyOpen=false; render(); focusMain(); return; }
  if(d.justifyConfirm!=null){ const ta=el('jf-reason'); const reason=(ta&&ta.value||'').trim();
    if(!reason){ announce(TR('Please enter a reason.','يرجى إدخال السبب.'),true); ta&&ta.focus(); return; }
    S.gradeUnlockReason=reason; S.justifyOpen=false;
    S.securityLog.push({ts:Date.now(), role:'teacher', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action:TR('Mark-correction requested — reason: ','طلب تصحيح درجة — السبب: ')+reason});
    render(); focusMain(); toast(TR('Reason logged. Marks unlocked — make your correction and submit again.','سُجِّل السبب. فُتحت الدرجات — صحّح وأرسِل مجددًا.')); return; }

  if(d.settings!=null){ S.settingsOpen=true; S.a11yOpen=false; render(); focusMain(); return; }
  if(d.settingsDone!=null){ S.settingsOpen=false; render(); focusMain(); return; }
  if(d.gotoView!=null){ S.settingsOpen=false; S.view=d.gotoView; render(); focusMain(); return; }
  if(d.resetA11y!=null){ Object.assign(S.settings,{textSize:0,hc:false,motion:false,spacing:false,readAloud:false}); saveA11y(); render(); focusMain(); announce(TR('Reset to your device defaults.','أُعيد الضبط إلى إعدادات جهازك.')); return; }
  if(d.pd!=null){ toast(S.settings.lang==='ar'?'يفتح منصّة التطوير المهني للمعلّمين…':'Opening the teacher development platform…'); announce(S.settings.lang==='ar'?'يفتح منصّة التطوير المهني':'Opening the teacher development platform'); return; }
  if(d.sendFeedback!=null){ const ta=el('fb-text'); const v=ta?ta.value.trim():'';
    if(!v){ announce(S.settings.lang==='ar'?'يرجى كتابة رسالتك أولًا.':'Please write your message first.', true); ta&&ta.focus(); return; }
    const ref='MN-'+Math.floor(1000+Math.random()*9000); if(ta) ta.value='';
    toast((S.settings.lang==='ar'?'شكرًا لك — تم إرسال ملاحظتك. رقم المرجع ':'Thank you — your feedback was sent. Reference ')+ref); return; }
  if(d.go){ Object.assign(S,{route:d.go,view:'dashboard',selectedStudent:null,contentOpen:null,exam:null,a11yOpen:false,viewStack:[],onboard:null,confirm:null,settingsOpen:false,auth:null}); render(); return; }
  if(d.controlVerify!=null){
    // Demo — any answer passes. Real version validates against stored answers + lockout after 3 fails.
    const q1=el('ctrl-q1'), q2=el('ctrl-q2');
    if(q1 && q2 && q1.value.trim() && q2.value.trim()){
      S.control.securityPassed=true; S.view='grades'; render(); focusMain();
    } else {
      toast(S.settings.lang==='ar'?'يرجى الإجابة على السؤالين':'Please answer both questions');
    }
    return;
  }
  if(d.controlExamtype!=null){ S.control.examType=d.controlExamtype; render(); return; }
  if(d.controlCheck!=null){
    S.control.confirmed=S.control.confirmed||{};
    S.control.confirmed[d.controlCheck]=!S.control.confirmed[d.controlCheck];
    render(); return;
  }
  if(d.controlToreview!=null){ S.view='review'; S.control.confirmStep=0; render(); window.scrollTo({top:0,behavior:'instant'}); return; }
  if(d.controlStep!=null){ S.control.confirmStep=+d.controlStep; render(); window.scrollTo({top:0,behavior:'instant'}); return; }
  if(d.controlSubmit!=null){
    toast(S.settings.lang==='ar'?'✅ تمّ إرسال الدرجات رسميًّا':'✅ Grades submitted officially');
    S.control.confirmed={}; S.control.confirmStep=0; S.view='history'; render(); window.scrollTo({top:0,behavior:'instant'}); return;
  }
  if(d.login){ S.route=d.login; S.a11yOpen=false; S.auth=null; if(d.login==='control'){ S.control.securityPassed=false; S.control.q1=null; S.control.q2=null; S.control.confirmStep=0; S.control.confirmed={}; S.control.reviewedAll=false; const idx=randomQuestionPair(); S.control.qIdx=idx; }
    S.view = d.login==='teacher'?'dashboard': d.login==='student'?'home': d.login==='parent'?'home': d.login==='leader'?'dashboard': d.login==='control'?'security': d.login==='coordinator'?'upload':'oversight';
    if(d.login==='admin'){S.adminRole='minister'; S.adminPath=['min']; S.equity='none'; S.reveal=false;}
    if(d.login==='parent' && !S.childId){ S.childId=PARENT_CHILDREN[0].id; }
    if(d.login==='parent'){ S.parentVerified=false; } // parent must still confirm the child binding before any data is shown (legal responsibility)
    S.session={role:d.login, user:(LOGIN_USER[d.login]||d.login), ip:demoIP(), device:demoDevice(), since:Date.now()};
    S.securityLog.push({ts:Date.now(), role:d.login, user:S.session.user, ip:S.session.ip, action:TR('Signed in','تسجيل دخول')+' · '+demoDevice()});
    maybeOnboard(d.login);
    render(); focusMain(); announce((d.login.charAt(0).toUpperCase()+d.login.slice(1))+' portal opened'); return; }

  // read-aloud (low-literacy support)
  if(el_.hasAttribute('data-help')){ openHelpDialog(); return; }
  if(d.speak!=null){ sayAloud(d.speak); el_.setAttribute('aria-pressed','true');
    setTimeout(()=>el_.setAttribute('aria-pressed','false'),300); return; }

  // parent: switch child
  if(d.child){ S.childId=d.child; render(); focusMain(); announce(TR('Showing ','عرض ')+arName(currentChild())); return; }
  if(d.parentVerify){ const v=d.parentVerify;
    if(v==='yes'){ S.parentVerified=true; render(); focusMain(); announce(TR('Confirmed. Showing your child’s information.','تم التأكيد. عرض معلومات طفلك.')); }
    else if(v==='no'){ S.parentVerified='locked'; render(); focusMain(); announce(TR('Paused. Please contact your school to check the record.','تمّ الإيقاف. يرجى التواصل مع المدرسة لمراجعة السجلّ.'), true); }
    else { S.parentVerified=false; render(); focusMain(); }
    return; }
  if(d.assessMode){ S.assessMode=d.assessMode; render(); focusMain(); return; }
  if(d.parentRead){
    S.parentReadChosen=true;
    if(d.parentRead==='on') S.parentRead=true;
    else if(d.parentRead==='off') S.parentRead=false;
    else if(d.parentRead==='toggle') S.parentRead=!S.parentRead;
    if(!S.parentRead){ try{ window.speechSynthesis && window.speechSynthesis.cancel(); }catch(e){} announce(TR('Sound off. Tap “Listen” any time you want it read.','تمّ كتم الصوت. اضغط «استمع» متى أردت القراءة.')); }
    S._spokenKey=''; // let the current page read again now that the choice changed
    render(); focusMain(); return;
  }
  if(d.parentDispute!=null){ toast(TR('Sent to your school to check — they will review and contact you.','أُرسل إلى مدرستك للمراجعة — وسيتواصلون معك.'));
    announce(TR('Your report was sent to the school.','تم إرسال بلاغك إلى المدرسة.')); return; }

  // onboarding tour controls
  if(d.onboardNext!=null){ const steps=TOURS[S.onboard.role]||[];
    if(S.onboard.step>=steps.length-1){ S.onboarded[S.onboard.role]=true; S.onboard=null; render(); focusMain(); announce(TR('Tour finished. You can replay it anytime under Learn how.','انتهت الجولة. يمكنك إعادتها في أيّ وقت من «كيفية الاستخدام».')); }
    else { S.onboard.step++; render(); } return; }
  if(d.onboardBack!=null){ if(S.onboard.step>0) S.onboard.step--; render(); return; }
  if(d.onboardSkip!=null){ try{window.speechSynthesis&&window.speechSynthesis.cancel();}catch(e){}
    S.onboarded[S.onboard.role]=true; S.onboard=null; render(); focusMain(); return; }
  if(d.replayTour){ S.onboard={role:d.replayTour, step:0}; render(); return; }

  if(d.back!=null){
    if(!S.viewStack) S.viewStack=[];
    var prev = S.viewStack.pop();
    if(!prev){ prev = (S.route==='teacher' ? 'dashboard' : (S.route==='parent' ? 'home' : 'home')); }
    // Guard dirty views the same way d.view does
    if(S.route==='teacher' && S.view!==prev){
      if(S.view==='attendance' && S.attDirty){ S.confirm={kind:'leaveUnsubmitted', task:'attendance'}; S.pendingNav={view:prev}; render(); return; }
      if(S.view==='gradebook' && S.gradesDirty){ S.confirm={kind:'leaveUnsubmitted', task:'gradebook'}; S.pendingNav={view:prev}; render(); return; }
    }
    S.view=prev; S.selectedStudent=null; render(); focusMain(); return;
  }
  if(d.view!=null){
    if(S.route==='teacher' && d.view!==S.view){
      if(S.view==='attendance' && S.attDirty){ S.confirm={kind:'leaveUnsubmitted', task:'attendance'}; S.pendingNav={view:d.view}; render(); return; }
      if(S.view==='gradebook' && S.gradesDirty){ S.confirm={kind:'leaveUnsubmitted', task:'gradebook'}; S.pendingNav={view:d.view}; render(); return; }
    }
    if(!S.viewStack) S.viewStack=[];
    if(S.view && S.view!==d.view){ S.viewStack.push(S.view); if(S.viewStack.length>20) S.viewStack.shift(); }
    S.view=d.view; S.selectedStudent=null;
    // navigating to a top-level view always exits any open lesson/unit (student & parent)
    if(d.closeContent || (S.route==='student' || S.route==='parent')) S.contentOpen=null;
    if(d.resetExam){S.exam=null;}
    if(d.release){toast(TR('Results released. Students can now see their score and the correct answers.','نُشرت النتائج. يمكن للطلاب الآن رؤية درجاتهم والإجابات الصحيحة.')); return;}
    render(); focusMain(); return; }

  if(d.openA11y!=null){ S.a11yOpen=!S.a11yOpen; render(); if(S.a11yOpen){const p=el('a11y');p&&p.querySelector('button')?.focus();} return; }
  if(d.closeA11y!=null){ S.a11yOpen=false; render(); document.querySelector('[data-settings]')?.focus(); return; }

  if(d.help!=null){ S._help=true; render(); return; }
  if(d.closeHelp!=null){ S._help=false; render(); document.querySelector('[data-help]')?.focus(); return; }

  if(d.student){ S.selectedStudent=d.student; S.view='students'; render(); focusMain(); return; }

  // accessibility segment buttons (textSize, lang)
  if(d.set){ const v=isNaN(+d.val)?d.val:+d.val; S.settings[d.set]=v;
    if(d.set==='lang'){ /* re-render whole UI for direction + strings */ }
    saveA11y(); render(); announce(d.set+' set'); return; }
  // toggles
  if(d.toggle){ S.settings[d.toggle]=!S.settings[d.toggle];
    saveA11y(); render();
    const on=S.settings[d.toggle];
    const names={hc:'High contrast',dark:'Dark mode', enterAdvance:'Enter → next student',motion:'Reduce motion',spacing:'Reading spacing',readAloud:'Read aloud'};
    announce((names[d.toggle]||d.toggle)+(on?' on':' off')); return; }

  // attendance radios
  if(d.submitAttendance!=null){ const {c,total}=attCountsFromDOM();
    if(total>0 && c.present===total){ S.confirm={kind:'attendance'}; render(); return; }
    doSubmitAttendance(c,total); return; }
  if(d.photoDel!=null){ if(!Array.isArray(S.gradePhotos)) S.gradePhotos=[]; S.gradePhotos.splice(+d.photoDel,1); render(); return; }
  if(d.submitGrades!=null){
    if(S.gradeExam && (S.gradeExam.type==='midterm' || S.gradeExam.type==='final')){ announce(TR('Mid-year and final exam grades are entered by the Exam Control Office, not by teachers.','درجات امتحانَي منتصف ونهاية العام يُدخلها كنترول الامتحانات، لا المعلّمون.'), true); S.gradeExam.type='monthly'; render(); return; }
    if(!S.gradeExam.date){ announce(TR('Please choose the exam date first.','يرجى اختيار تاريخ الامتحان أولًا.'), true); el('exam-date')&&el('exam-date').focus(); return; }
    if(S.gradeExam.type==='other' && !(S.gradeExam.name||'').trim()){ announce(TR('Please name this exam.','يرجى تسمية هذا الامتحان.'), true); el('exam-name')&&el('exam-name').focus(); return; }
    const inputs=[...document.querySelectorAll('.gb-input')];
    const filled = inputs.filter(i=>String(i.value).trim()!=='').length;
    const blank = inputs.length - filled;
    // collect names of students whose mark is blank OR zero — these need teacher confirmation
    const cls = teacherClass();
    const missingNames = [];
    inputs.forEach(inp=>{
      const v = String(inp.value).trim();
      if(v==='' || Number(v)===0){
        const sid = inp.getAttribute('data-grade');
        const stu = cls.students.find(x=>x.id===sid);
        if(stu) missingNames.push({name: arName(stu), id: sid, reason: v==='' ? 'blank' : 'zero'});
      }
    });
    if(filled===0){ announce(TR('No scores entered yet.','لم تُدخَل أيّ درجات بعد.'), true); return; }
    S.confirm={kind:'gradesReview', filled, blank, total:inputs.length, missing: missingNames};
    render(); return; }
  if(d.confirmNo!=null){ S.confirm=null; S.pendingNav=null; render(); focusMain(); return; }
  if(d.leaveAnyway!=null){ const nav=S.pendingNav; S.confirm=null; S.pendingNav=null;
    if(nav&&nav.view){ S.view=nav.view; S.selectedStudent=null; } render(); focusMain(); return; }
  if(d.confirmYes!=null){ const k=S.confirm&&S.confirm.kind; S.confirm=null;
    if(k==='revealPII'){ S.reveal=true; const node=NODE[S.adminPath[S.adminPath.length-1]];
      const ts=new Date().toLocaleString(S.settings.lang==='ar'?'ar-EG':undefined);
      S.auditLog.push(TR(`${ts} — Administrator revealed identifiable roster for ${nodeName(node)}`,`${ts} — كشف المسؤول قائمة تكشف هوية ${nodeName(node)}`));
      render(); focusMain(); announce(TR('Identifiable view enabled and recorded in the audit log.','تم تفعيل العرض الكاشف للهوية وتسجيله في سجلّ التدقيق.'), true); return; }
    if(k==='attendance'){ const {c,total}=attCountsFromDOM(); doSubmitAttendance(c,total); }
    else if(k==='grades'||k==='gradesReview'){ doSubmitGrades(); }
    return; }
  if(d.att){ const grp=el_.closest('.seg'); grp.querySelectorAll('[role=radio]').forEach(b=>b.setAttribute('aria-checked','false'));
    el_.setAttribute('aria-checked','true');
    const label=el_.textContent.trim();
    const ind=document.querySelector(`[data-att-state="${d.att}"]`); if(ind) ind.textContent='✓ '+label+' — saved';
    if(d.val!=='present') S.attDirty=true;
    updateAttSummary();
    announce(label+' saved'); return; }
  if(d.markAll){ document.querySelectorAll('[data-att]').forEach(b=>{ const isP=b.dataset.val==='present';
      b.setAttribute('aria-checked', String(isP)); });
    document.querySelectorAll('[data-att-state]').forEach(s=>s.textContent='✓ '+t('present')+' — saved');
    updateAttSummary();
    toast(TR('All students marked present.','سُجِّل جميع الطلاب حاضرين.')); return; }
  if(d.attDay!=null){ const n=parseInt(d.attDay,10); S.attDay = (isNaN(n)||n>0) ? 0 : Math.max(n, -19); render(); focusMain();
    announce(S.attDay===0 ? TR('Showing today.','عرض حضور اليوم.') : TR('Showing a past day. Record is locked.','عرض يوم سابق. السجلّ مقفل.'));
    return; }

  // admin drill
  if(d.drill){ S.adminPath.push(d.drill); S.reveal=false; render(); focusMain();
    announce(TR('Opened ','فُتح ')+NODE[d.drill].name); return; }
  if(d.crumb!=null){ S.adminPath=S.adminPath.slice(0,+d.crumb+1); S.reveal=false; render(); focusMain(); return; }
  if(d.reveal!=null){
    if(d.reveal==='1'){ S.confirm={kind:'revealPII'}; render(); return; }
    S.reveal=false; announce(TR('Names hidden.','تم إخفاء الأسماء.')); render(); focusMain(); return; }

  // ──── Interactive games handlers ────
  if(d.gameCat!=null){ S.gameCat=d.gameCat; const cat=GAME_CATS.find(c=>c.id===d.gameCat); if(cat) S.gameTab=cat.tabs[0]; S.gameState={}; render(); return; }
  if(d.gameTab!=null){ S.gameTab=d.gameTab; S.gameState={}; render(); return; }
  if(d.gamePh!=null){ S.gameState.phSel=+d.gamePh; render(); return; }
  if(d.gameRoot!=null){ S.gameState.rootIdx=+d.gameRoot; S.gameState.rootRevealed=[]; render(); return; }
  if(d.gameRevealWord!=null){ const r=S.gameState.rootRevealed||[]; const i=+d.gameRevealWord; if(!r.includes(i)){S.gameState.rootRevealed=[...r,i];render();} return; }
  if(d.gameIrabS!=null){ S.gameState.irabIdx=+d.gameIrabS; S.gameState.irabSel=null; render(); return; }
  if(d.gameIrabW!=null){ const i=+d.gameIrabW; S.gameState.irabSel=(S.gameState.irabSel===i?null:i); render(); return; }
  if(d.gamePm!=null){ pacmanAction(d.gamePm); return; }
  if(d.subjectOpen){ S.subjectOpen=d.subjectOpen; S.subjectTab='lessons'; S.view='subject'; S.contentOpen=null; render(); focusMain(); announce(TR('Opened ','فُتح ')+(S.settings.lang==='ar'?(SUBJECTS_AR[d.subjectOpen]||d.subjectOpen):d.subjectOpen)); return; }
  if(d.subjectTab){ S.subjectTab=d.subjectTab; render(); focusMain(); return; }
  if(d.shareLesson){ toast(TR('Sent to ','أُرسل إلى ')+d.shareLesson+TR('. It is now in their lessons.','. أصبح الآن ضمن دروسهم.')); return; }

  // student content
  if(d.openContent){ S.contentOpen=d.openContent;
    const c=CONTENT.find(x=>x.id===d.openContent); if(c) S.subjectOpen=c.subject;
    if(!S.doneContent.includes(d.openContent)) S.doneContent.push(d.openContent);
    render(); focusMain(); return; }
  if(d.closeContent){ S.contentOpen=null; render(); focusMain(); return; }
  if(d.coordMode!=null){ S.coord.mode=d.coordMode; if(d.coordMode==='upload' && !S.coord.csv){ S.coord.csv={open:true, classId:(coordClasses()[0]||{}).id, stage:'idle', rows:[], parsed:null, fileName:null, signoff:false}; } render(); focusMain(); return; }
  if(d.coordChoose!=null){ S.coord.mode=null; render(); focusMain(); return; }
  if(d.csvOpen!=null){ const cls=coordClasses(); S.coord.csv={open:true, classId:(cls[0]&&cls[0].id)||null, stage:'idle', rows:[], parsed:null, fileName:null, signoff:false}; render(); focusMain(); return; }
  if(d.csvBack!=null){ S.coord.csv=null; render(); focusMain(); return; }
  if(d.csvDownload!=null){ const cid=S.coord.csv.classId; downloadFile('manassa-template-'+cid+'.csv', coordCsvTemplate(cid), 'text/csv'); S.securityLog.push({ts:Date.now(), role:'coordinator', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—', action:TR('Downloaded class CSV template: ','نزّل قالب CSV للفصل: ')+cid}); return; }
  if(d.csvSample!=null){ applyCsvParse(coordCsvSample(S.coord.csv.classId), 'sample-'+S.coord.csv.classId+'.csv'); return; }
  if(d.csvReset!=null){ S.coord.csv.stage='idle'; S.coord.csv.rows=[]; S.coord.csv.parsed=null; S.coord.csv.fileName=null; S.coord.csv.signoff=false; render(); focusMain(); return; }
  if(d.csvConfirm!=null){ const csv=S.coord.csv; const ok=csv.rows.filter(r=>r.ok);
    if(!ok.length){ announce(TR('No valid rows to save.','لا صفوف صحيحة للحفظ.'),true); return; }
    if(!csv.signoff){ announce(TR('A principal sign-off is required.','يلزم اعتماد المدير.'),true); return; }
    const cid=csv.classId;
    S.coord.queue.push({id:'csv:'+cid+':'+Date.now(), classId:cid, kind:'csv', subject:null, when:Date.now(),
      summary:TR(ok.length+' students imported','استُورد '+ok.length+' طالب'), teacherEn:'CSV import (coordinator)', teacherAr:'استيراد CSV (المنسّق)', confirmed:true, synced:false});
    S.securityLog.push({ts:Date.now(), role:'coordinator', user:(S.session&&S.session.user)||'—', ip:(S.session&&S.session.ip)||'—',
      action:TR('CSV roster import confirmed: ','تأكيد استيراد CSV: ')+csv.fileName+' — '+ok.length+TR(' valid rows, principal sign-off',' صفّ صحيح، باعتماد المدير')});
    S.coord.csv=null; S.coord.mode='system'; render(); focusMain(); toast(TR('Imported and queued — it will upload with your next “Upload all”.','تمّ الاستيراد والإدراج — سيُرفع مع «رفع الكلّ» التالي.')); return; }
  if(d.coordConn!=null){ S.coord.online=!S.coord.online; render(); focusMain();
    toast(S.coord.online?TR('Connection found — you can upload now.','تم إيجاد اتصال — يمكنك الرفع الآن.'):TR('Connection lost — records still save on the device.','انقطع الاتصال — السجلّات تُحفظ على الجهاز.')); return; }
  if(d.coordOpen){ S.coord.entry={classId:d.cls, kind:d.coordOpen, subject:d.subj||null}; render(); focusMain(); return; }
  if(d.coordCancel!=null){ S.coord.entry=null; render(); focusMain(); return; }
  if(d.coordSave){ const cid=d.cls, kind=d.coordSave;
    const subject = S.coord.entry ? S.coord.entry.subject : null;
    const chk=el('coord-confirm');
    if(!chk||!chk.checked){ announce(TR('Please confirm these match the paper register before saving.','يرجى تأكيد مطابقتها للسجلّ الورقي قبل الحفظ.'), true); chk&&chk.focus(); return; }
    let summary='', teacherEn='', teacherAr='';
    if(kind==='attendance'){ const {c}=attCountsFromDOM();
      summary=TR(`${c.present} present, ${c.absent} away, ${c.late} late`,`${c.present} حاضر، ${c.absent} غائب، ${c.late} متأخّر`);
      const cc=coordClasses().find(x=>x.id===cid)||{}; teacherEn=cc.teacherEn||''; teacherAr=cc.teacherAr||''; }
    else { const vals=[...document.querySelectorAll('.co-score')].map(i=>{const v=parseInt(normDigits(i.value),10); return isNaN(v)?100:v;});
      const avg=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):0;
      const below=vals.filter(v=>v<100).length;
      summary=TR(`${vals.length} students · avg ${avg}% · ${below} below 100`,`${vals.length} طالب · متوسّط ${avg}% · ${below} دون 100`);
      const rw=coordSubjTeacher(cid, subject); teacherEn=rw.teacherEn||''; teacherAr=rw.teacherAr||''; }
    // replace any existing pending item for the same class+kind(+subject) — re-entry overwrites
    S.coord.queue=S.coord.queue.filter(i=>!(i.classId===cid&&i.kind===kind&&(kind!=='assessment'||i.subject===subject)&&!i.synced));
    S.coord.queue.push({id:cid+':'+kind+':'+(subject||'')+':'+Date.now(), classId:cid, kind, subject, teacherEn, teacherAr, when:Date.now(), summary, confirmed:true, synced:false});
    S.coord.entry=null; render(); focusMain();
    toast(TR('Saved on this device — it will upload when connected.','حُفظ على هذا الجهاز — وسيُرفع عند الاتصال.')); return; }
  if(d.coordSync!=null){ const pend=S.coord.queue.filter(i=>!i.synced);
    if(!pend.length){ return; }
    if(!S.coord.online){ announce(TR('No connection yet. Your records are saved and will upload automatically when connected.','لا اتصال بعد. سجلّاتك محفوظة وستُرفع تلقائيًّا عند الاتصال.'), true); return; }
    pend.forEach(i=>{i.synced=true; i.syncWhen=Date.now();});
    S.coord.lastReceipt={ when:Date.now(), count:pend.length, ref:'MNS-'+String(hashStr(coordSchool().id+Date.now())).slice(0,8),
      items: pend.map(i=>({kind:i.kind, classId:i.classId, subject:i.subject||null})) };
    render(); focusMain();
    toast(pend.length+' '+TR('record(s) uploaded.','سجلّ تمّ رفعه.')); return; }
  if(d.clearSaved!=null){ S.savedContent=[]; render(); focusMain(); toast(TR('Removed all saved lessons — storage freed.','أُزيلت كلّ الدروس المحفوظة — تمّ تحرير المساحة.')); return; }
  if(d.saveSpine!=null){ const id=d.saveSpine; if(S.saveLevel[id]==='spine'){ delete S.saveLevel[id]; S.savedContent=S.savedContent.filter(x=>x!==id); render(); toast(TR('Removed from offline.','أُزيل من المحفوظ.')); } else { S.saveLevel[id]='spine'; if(!S.savedContent.includes(id))S.savedContent.push(id); render(); toast(TR('Outline saved — browse this lesson offline (no media).','حُفظ المخطّط — تصفّح الدرس دون اتصال (بلا وسائط).')); } return; }
  if(d.saveFull!=null){ const id=d.saveFull; if(S.saveLevel[id]==='full'){ S.saveLevel[id]='spine'; render(); toast(TR('Media removed — outline kept offline.','أُزيلت الوسائط — بقي المخطّط محفوظًا.')); } else { S.saveLevel[id]='full'; if(!S.savedContent.includes(id))S.savedContent.push(id); render(); toast(TR('Full lesson saved for offline — includes images and video.','حُفظ الدرس كاملًا للعمل دون اتصال — يشمل الصور والفيديو.')); } return; }
  if(d.download){ const id=d.download; const hasQ=!!quizFor(id); const ix=S.savedContent.indexOf(id);
    if(ix>=0){ S.savedContent.splice(ix,1); delete S.saveLevel[id]; render(); toast(TR('Removed from offline.','أُزيل من المحفوظ.')); }
    else { S.savedContent.push(id); S.saveLevel[id]='full'; render();
      toast(hasQ?TR('Saved offline — lesson and quiz.','تم الحفظ للعمل دون إنترنت — الدرس والاختبار.'):TR('Saved to use without internet.','تم الحفظ للاستخدام دون إنترنت.')); }
    return; }

  // exam flow
  if(d.startExam!=null){ startExam(d.startExam||currentUnitFor('Science'), false); focusMain(); return; }
  if(d.practiceExam!=null){ startExam(d.practiceExam, true); focusMain(); return; }
  if(d.answer!=null){ const Q=activeQuiz(); const q=Q.questions[S.exam.idx]; S.exam.answers[q.id]=+d.answer;
    const ind=el('autosave-ind'); if(ind) ind.textContent='⬇️ Saved';
    render(); // reflect selection
    announce(TR('Answer saved','حُفظت الإجابة')); return; }
  if(d.examNav){ S.exam.idx=clamp(S.exam.idx+(+d.examNav),0,activeQuiz().questions.length-1); render(); focusMain(); return; }
  if(d.examReview){ S.exam.phase='review'; clearInterval(EXAM_TICK); render(); focusMain(); return; }
  if(d.examGoto!=null){ S.exam.phase='taking'; S.exam.idx=+d.examGoto; render(); focusMain(); startExamTimer(); return; }
  if(d.examSubmit){ S.exam.phase='done'; if(!S.exam.practice){ S.doneQuiz[S.exam.quizId]=true; } clearInterval(EXAM_TICK); render(); focusMain(); toast(S.exam.practice?'Practice finished.':'Quiz finished — well done!'); return; }
  if(d.extendTime){ S.exam.seconds+=5*60; S.exam.extended=true; render(); startExamTimer(); announce(TR('Added 5 minutes.','أُضيفت 5 دقائق.')); return; }
});

/* grade inputs — auto-save with error prevention (delegated) */
document.addEventListener('input', (e)=>{
  // Game slider handlers
  const gs=e.target && e.target.dataset && e.target.dataset.gameSlider;
  if(gs){
    const v=+e.target.value;
    S.gameState[gs]=v;
    // if fracDen changed, clamp fracNum
    if(gs==='fracDen' && (S.gameState.fracNum||0)>v) S.gameState.fracNum=v;
    // Debounce render to keep slider draggable
    if(window._gameRaf) cancelAnimationFrame(window._gameRaf);
    window._gameRaf=requestAnimationFrame(()=>{
      const card=document.querySelector('[data-game-content]');
      if(card){
        const tab=S.gameTab||'ph';
        const fn={ph:gamePhMeter,eco:gameEcoBalance,wave:gameWaveLab,roots:gameWordRoots,irab:gameIrabTrainer,eq:gameEquationBalance,frac:gameFractionViz,pacman:gamePacman}[tab];
        if(fn) card.innerHTML=fn();
        // Re-bind slider value after partial update
        card.querySelectorAll('input[data-game-slider]').forEach(inp=>{
          if(inp.dataset.gameSlider===gs) inp.value=v;
        });
      }
    });
    return;
  }
  if(e.target && e.target.dataset && e.target.dataset.controlGrade!=null){
    S.control.confirmed=S.control.confirmed||{};
    S.control.confirmed['g'+e.target.dataset.controlGrade]=e.target.value;
    return;
  }
  if(e.target && e.target.id==='att-search'){
    const q=normDigits(e.target.value).trim().toLowerCase();
    let shown=0;
    document.querySelectorAll('[data-att-card]').forEach(card=>{
      const hit = !q || card.dataset.attCard.includes(q);
      card.style.display = hit ? '' : 'none'; if(hit) shown++;
    });
    const nr=el('att-noresult'); if(nr) nr.style.display = (q && shown===0) ? '' : 'none';
  }
  if(e.target && e.target.id==='flagq'){
    S.flags=S.flags||{}; S.flags.q=e.target.value;
    const q=normDigits(e.target.value).trim().toLowerCase();
    document.querySelectorAll('.bi-case[data-fkey]').forEach(card=>{
      card.style.display = (!q || card.dataset.fkey.includes(q)) ? '' : 'none';
    });
  }
});
document.addEventListener('change', (e)=>{
  const tcl=e.target.closest('[data-teacher-class]');
  if(tcl){ S.teacherClassId=tcl.value; S.attDirty=false; S.gradesDirty=false; render(); focusMain(); toast(TR('Now showing ','عرض ')+nodeName(NODE[tcl.value])); return; }
  const csvCls=e.target.closest('[data-csv-class]');
  if(csvCls){ S.coord.csv.classId=csvCls.value; S.coord.csv.stage='idle'; S.coord.csv.rows=[]; S.coord.csv.parsed=null; S.coord.csv.fileName=null; render(); return; }
  const csvSign=e.target.closest('[data-csv-signoff]');
  if(csvSign){ S.coord.csv.signoff=e.target.checked; render(); return; }
  const csvFile=e.target.closest('[data-csv-file]');
  if(csvFile){ const f=e.target.files&&e.target.files[0]; if(!f) return; const rd=new FileReader(); rd.onload=()=>applyCsvParse(String(rd.result), f.name); rd.onerror=()=>announce(TR('Could not read the file.','تعذّرت قراءة الملف.'),true); rd.readAsText(f); return; }
  const nv=e.target.closest('[data-nav]');
  if(nv){ const i=+nv.dataset.nav; const val=nv.value; S.adminPath=S.adminPath.slice(0,i); if(val) S.adminPath.push(val); S.reveal=false; render(); focusMain(); return; }
  const fsort=e.target.closest('[data-flag-sort]');
  if(fsort){ S.flags=S.flags||{}; S.flags.sort=fsort.value; render(); return; }
  const cmp=e.target.closest('[data-cmp]');
  if(cmp){ S.cmpMetric=cmp.value; render(); focusMain(); return; }
  const rscope=e.target.closest('[data-report-scope]');
  if(rscope){ S.report.scopeId=rscope.value; render(); return; }
  const rtype=e.target.closest('[data-report-type]');
  if(rtype){ S.report.type=rtype.value; render(); return; }
  const ph=e.target.closest('[data-grade-photo]');
  if(ph){ if(!Array.isArray(S.gradePhotos)) S.gradePhotos=[];
    const files=ph.files?[...ph.files]:[]; let added=0;
    for(const f of files){ if(S.gradePhotos.length>=3) break; S.gradePhotos.push(f.name); added++; }
    ph.value=''; render();
    if(S.gradePhotos.length>=3 && files.length>added){ toast(TR('You can attach up to 3 photos.','يمكنك إرفاق حتى ٣ صور.')); }
    else if(added){ toast(TR('Photo attached.','أُرفقت الصورة.')); }
    return; }
  const ex=e.target.closest('[data-examfield]');
  if(ex){ const f=ex.dataset.examfield; S.gradeExam[f]=ex.value;
    if(f==='type'){ render(); focusMain(); } // re-render to show/hide the custom name field
    return; }
  const qz=e.target.closest('[data-quizmark]');
  if(qz){
    const raw=normDigits(qz.value).trim();
    if(raw===''){ delete S.quizMarks[qz.dataset.quizmark]; toast(t('saved')); return; } // blank = not graded
    let v=parseFloat(raw);
    if(isNaN(v)||v<0||v>100){ const prev=S.quizMarks[qz.dataset.quizmark]; qz.value=(prev!=null?prev:qz.defaultValue); announce(TR('Score must be 0 to 100. Previous value kept.','يجب أن تكون الدرجة بين 0 و100. أُبقيت القيمة السابقة.'), true); return; }
    S.quizMarks[qz.dataset.quizmark]=Math.round(v*100)/100; toast(t('saved')); return;
  }
  const inp=e.target.closest('[data-grade]'); 
  if(inp){
    S.gradesDirty=true;
    const stu=teacherClass().students.find(s=>s.id===inp.dataset.grade);
    const raw=normDigits(inp.value).trim();
    if(raw===''){ if(stu) delete stu.grades[inp.dataset.subj]; inp.value=''; toast(t('saved')); return; }
    let v=parseMark(raw);
    if(v===null){ // reject, keep previous (3.3.4 error prevention)
      const prev = stu && stu.grades[inp.dataset.subj]!=null ? stu.grades[inp.dataset.subj] : '';
      inp.value=prev; announce(TR('Score must be 0 to 100. Previous value kept.','يجب أن تكون الدرجة بين 0 و100. أُبقيت القيمة السابقة.'), true); return;
    }
    const prevVal = stu && stu.grades[inp.dataset.subj]!=null ? stu.grades[inp.dataset.subj] : null;
    inp.value=v; // store normalized Latin digits
    if(stu){ stu.grades[inp.dataset.subj]=v;
      // recompute row average if present
      const avgEl=document.querySelector(`[data-avg="${stu.id}"]`);
      if(avgEl){ const vals=SUBJECTS.map(su=>{const g=stu.grades[su];return typeof g==='number'?g:(g==null?100:null);}).filter(x=>x!=null);
        avgEl.textContent=vals.length?Math.round(vals.reduce((a,b)=>a+b,0)/vals.length):'—'; }
    }
    if(prevVal!=null && prevVal!==v){ _gradeUndo={stuId:stu?stu.id:null, subj:inp.dataset.subj, prev:prevVal, inputId:inp.id}; toastGradeUndo(stu?arName(stu):'',prevVal,v); }
    else { toast(t('saved')); }
  }
  const eq=e.target.closest('[data-equity]');
  if(eq){ S.equity=eq.value; render(); focusMain(); }
  const cu=e.target.closest('[data-current-unit]');
  if(cu){ S.currentUnit[cu.dataset.currentUnit]=cu.value; render(); focusMain(); toast(TR('Students now see this as this week\u2019s lesson.','يرى الطلاب هذا الآن درس هذا الأسبوع.')); }
  const ar=e.target.closest('[data-admin-role]');
  if(ar){ S.adminRole=ar.value; const def=adminRoleDef(); S.adminPath=[def.root]; S.reveal=false; S.equity='none'; render(); focusMain(); announce('Now viewing as '+def.label+'. You can see '+NODE[def.root].name+' and below.'); }
});

/* Enter moves down a gradebook column; Escape closes overlays */
document.addEventListener('keydown',(e)=>{
  if(e.key==='Escape'){ if(S.confirm){ S.confirm=null; render(); focusMain(); return; }
    if(S.onboard){try{window.speechSynthesis&&window.speechSynthesis.cancel();}catch(_){} S.onboarded[S.onboard.role]=true; S.onboard=null; render(); focusMain(); return;}
    if(S._help){S._help=false;render();document.querySelector('[data-help]')?.focus();}
    else if(S.a11yOpen){S.a11yOpen=false;render();document.querySelector('[data-settings]')?.focus();} return; }
  if(e.key==='Enter'){ const inp=e.target.closest && e.target.closest('.gb-input'); 
    if(inp && inp.id){ e.preventDefault();
      // find same-column input in next row
      const parts=inp.id.split('-'); // g-<stuid...>-<col> OR a-<stuid>
      const col=parts[parts.length-1];
      const inputs=[...document.querySelectorAll('.gb-input')];
      const idx=inputs.indexOf(inp);
      // jump by number of subjects to reach the next row, same column (gradebook)
      const stride=document.querySelectorAll('thead th').length? SUBJECTS.length : 1;
      const next=inputs[idx+SUBJECTS.length] || inputs[idx+1];
      if(next) next.focus();
    }
  }
});

/* ===================== INIT ===================== */
try{ S.net.status = (typeof navigator!=='undefined' && navigator.onLine===false)?'offline':'online'; S.net.online=(S.net.status==='online'); }catch(e){}
if(typeof window!=='undefined' && window.addEventListener){
  window.addEventListener('online', ()=>setStatus('online'));
  window.addEventListener('offline', ()=>setStatus('offline'));
}
// ── ANTI-CHEATING: detect tab switches during quizzes ──
let _awayCount = 0;
let _awayTimer = null;
document.addEventListener('visibilitychange', function(){
  if(!S.exam || !S.exam.phase || S.exam.phase==='done') return;
  if(document.hidden){
    _awayCount++;
    // Log the tab switch
    // Tab switch noted silently — gentle reminder only, no logging
  } else {
    // Show warning when they come back
    if(_awayCount > 0){
      const warn = document.createElement('div');
      warn.className = 'exam-away-warn';
      warn.textContent = S.settings.lang==='ar'
        ? 'يُفضّل البقاء في نفس النافذة أثناء الاختبار 🙂'
        : 'Please stay in the same browser tab during the quiz 🙂';
      document.body.prepend(warn);
      clearTimeout(_awayTimer);
      _awayTimer = setTimeout(function(){ if(warn.parentNode) warn.remove(); }, 5000);
    }
  }
});
// (Right-click prevention removed — it doesn't prevent cheating and frustrates accessibility users)
// Add exam-active class to body during quizzes
const _origRender = render;

// ── Measure appbar height so sticky nav never overlaps (handles wrapping on mobile/Arabic) ──
function measureAppbar(){
  const bar = document.querySelector('.appbar');
  if(bar){ document.documentElement.style.setProperty('--appbar-h', bar.offsetHeight + 'px'); }
}
window.addEventListener('resize', measureAppbar);
const _origRenderForBar = typeof render==='function' ? render : null;

try{ window.S=S; }catch(e){}



/* ---- CSV EXPORT (added from teacher feedback) ---- */
function csvCell(v){ v=String(v==null?'':v); if(/[",\n]/.test(v)) return '"'+v.replace(/"/g,'""')+'"'; return v; }
function csvDownload(rows, filename){
  /* BOM makes Arabic open cleanly in Excel */
  var csv='\uFEFF'+rows.map(function(r){ return r.map(csvCell).join(','); }).join('\n');
  var blob=new Blob([csv], {type:'text/csv;charset=utf-8'});
  var url=URL.createObjectURL(blob);
  var a=document.createElement('a'); a.href=url; a.download=filename; document.body.appendChild(a);
  a.click(); setTimeout(function(){ URL.revokeObjectURL(url); a.remove(); }, 200);
}
function exportGradesCsv(){
  var cls=teacherClass(); var s=cls.students||[];
  var AR=(S.settings&&S.settings.lang==='ar');
  var headers=[AR?'#':'Row', AR?'الاسم':'Name', AR?'المادة':'Subject', AR?'الدرجة':'Grade'];
  var rows=[headers];
  s.forEach(function(st, i){
    var g=st.grades ? st.grades[TEACHER_SUBJECT] : null;
    rows.push([i+1, arName(st), TEACHER_SUBJECT, g==null?'':g]);
  });
  var fname='grades-'+(TEACHER_SUBJECT||'subject')+'-'+new Date().toISOString().slice(0,10)+'.csv';
  csvDownload(rows, fname);
  try{ toast(AR?'تم تنزيل ملف CSV':'CSV downloaded'); }catch(e){}
}
function exportAttendanceCsv(){
  var cls=teacherClass(); var s=cls.students||[];
  var AR=(S.settings&&S.settings.lang==='ar');
  var headers=[AR?'#':'Row', AR?'الاسم':'Name', AR?'الحالة':'Status', AR?'التاريخ':'Date'];
  var rows=[headers];
  var today=new Date().toISOString().slice(0,10);
  s.forEach(function(st, i){
    var st_at = (S.attToday && S.attToday[st.id]) || 'present';
    rows.push([i+1, arName(st), st_at, today]);
  });
  var fname='attendance-'+today+'.csv';
  csvDownload(rows, fname);
  try{ toast(AR?'تم تنزيل ملف CSV':'CSV downloaded'); }catch(e){}
}
/* ---- END CSV EXPORT ---- */

/* ---- TEACHER BADGES (private, effort-based, comparison-free) ---- */
/* Design principles:
   - Teacher-only. Never shown to students, parents, or other teachers.
   - Recognize consistency and thoroughness, not performance or comparison.
   - Never phrase as "best/top/most" or attach a score.
   - Announce quietly. Never gate a feature behind a badge. */
var TEACHER_BADGES = [
  { id:'first_attendance', emoji:'✅',
    en:{title:'Attendance recorded', desc:'You recorded attendance today.'},
    ar:{title:'تم تسجيل الحضور', desc:'سجّلت الحضور اليوم.'},
    check:function(){ return S.attToday && Object.keys(S.attToday).length>0; } },
  { id:'first_grades', emoji:'📝',
    en:{title:'Grades entered', desc:'You entered assessment marks for the class.'},
    ar:{title:'تم إدخال الدرجات', desc:'أدخلت درجات التقييم للفصل.'},
    check:function(){ return S.quizMarks && Object.keys(S.quizMarks).length>0; } },
  { id:'photo_evidence', emoji:'📸',
    en:{title:'Paper backup kept', desc:'You attached a photo of your paper sheet — great record-keeping.'},
    ar:{title:'نسخة ورقية محفوظة', desc:'أرفقت صورة من الورقة — سجل ممتاز.'},
    check:function(){ return Array.isArray(S.gradePhotos) && S.gradePhotos.length>0; } },
  { id:'accessible_teacher', emoji:'🌟',
    en:{title:'Accessibility explorer', desc:'You customized the app for how you work best.'},
    ar:{title:'مستكشف الإتاحة', desc:'خصّصت التطبيق بما يناسب طريقة عملك.'},
    check:function(){ var s=S.settings||{}; return s.textSize>0 || s.hc || s.dark || s.spacing || s.readAloud || s.enterAdvance; } },
  { id:'help_reader', emoji:'📖',
    en:{title:'Curious mind', desc:'You opened the Help page — glad it was useful.'},
    ar:{title:'روح فضولية', desc:'فتحت صفحة المساعدة — يسعدنا أنها كانت مفيدة.'},
    check:function(){ return S._helpOpenedOnce===true; } }
];
function grantBadgeIfNew(id){
  if(!S.badges) S.badges={};
  if(S.badges[id]) return false;
  var b=TEACHER_BADGES.find(function(x){return x.id===id;}); if(!b) return false;
  S.badges[id]=Date.now();
  try{ saveA11y(); }catch(e){}  /* persists alongside a11y settings */
  toastBadge(b);
  return true;
}
function toastBadge(b){
  var AR=(S.settings&&S.settings.lang==='ar');
  var txt=AR?b.ar:b.en;
  var t=document.createElement('div');
  t.setAttribute('role','status');
  t.setAttribute('aria-live','polite');
  t.style.cssText='position:fixed;left:50%;bottom:80px;transform:translateX(-50%);z-index:9996;background:var(--surface,#fff);border:2px solid var(--teal-700,#0f766e);border-radius:12px;padding:.6rem .9rem;box-shadow:0 6px 18px rgba(0,0,0,.14);display:flex;gap:.6rem;align-items:center;max-width:88vw';
  t.innerHTML='<span style="font-size:1.4rem" aria-hidden="true">'+b.emoji+'</span>'
    +'<div><div style="font-weight:700">'+txt.title+'</div>'
    +'<div class="small" style="opacity:.85">'+txt.desc+'</div></div>';
  document.body.appendChild(t);
  setTimeout(function(){ t.style.transition='opacity .4s'; t.style.opacity='0'; setTimeout(function(){t.remove();}, 500); }, 3800);
}
function checkTeacherBadges(){
  if(!S || S.route!=='teacher') return;
  TEACHER_BADGES.forEach(function(b){
    try{ if(b.check() && !(S.badges&&S.badges[b.id])) grantBadgeIfNew(b.id); }catch(e){}
  });
}
function teacherBadgesPanel(){
  if(!S.badges) S.badges={};
  var AR=(S.settings&&S.settings.lang==='ar');
  var earned=TEACHER_BADGES.filter(function(b){ return S.badges[b.id]; });
  var pending=TEACHER_BADGES.filter(function(b){ return !S.badges[b.id]; });
  var html='';
  html+='<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:.6rem">';
  earned.forEach(function(b){
    var t=AR?b.ar:b.en;
    html+='<div class="card" style="padding:.7rem .8rem;border-color:var(--teal-700,#0f766e)"><div style="font-size:1.5rem" aria-hidden="true">'+b.emoji+'</div><div style="font-weight:700">'+t.title+'</div><div class="small muted">'+t.desc+'</div></div>';
  });
  pending.forEach(function(b){
    var t=AR?b.ar:b.en;
    html+='<div class="card" style="padding:.7rem .8rem;opacity:.5"><div style="font-size:1.5rem;filter:grayscale(1)" aria-hidden="true">'+b.emoji+'</div><div style="font-weight:700">'+t.title+'</div><div class="small muted">'+t.desc+'</div><div class="small muted" style="margin-top:.3rem;font-style:italic">'+(AR?'لم تُكتسب بعد':'not yet earned')+'</div></div>';
  });
  html+='</div>';
  html+='<p class="small muted" style="margin-top:.8rem">'+(AR
    ?'الشارات لك وحدك — لا تظهر للطلاب أو أولياء الأمور أو المعلمين الآخرين، ولا تتضمّن أيّ ترتيب أو مقارنة.'
    :'These badges are for you only — never shown to students, parents, or other teachers, and never ranked or compared.')+'</p>';
  return html;
}
/* ---- END BADGES ---- */

/* ---- IDLE AUTO-LOGOUT (added from teacher feedback) ---- */
var _idleTimer=null, _idleWarnTimer=null, _idleWarned=false;
var IDLE_LIMIT_MS = 15*60*1000;      // 15 minutes
var IDLE_WARN_MS  = 14*60*1000;      // warn at 14 minutes
function idleReset(){
  _idleWarned=false;
  var w=document.getElementById('idle-warn'); if(w) w.remove();
  if(_idleTimer) clearTimeout(_idleTimer);
  if(_idleWarnTimer) clearTimeout(_idleWarnTimer);
  if(!S || S.route==='login' || !S.session) return; // no timer until signed in
  _idleWarnTimer=setTimeout(idleWarn, IDLE_WARN_MS);
  _idleTimer=setTimeout(idleLogout, IDLE_LIMIT_MS);
}
function idleWarn(){
  _idleWarned=true;
  var AR=(S.settings&&S.settings.lang==='ar');
  var bar=document.createElement('div'); bar.id='idle-warn';
  bar.setAttribute('role','alertdialog'); bar.setAttribute('aria-live','assertive');
  bar.style.cssText='position:fixed;left:50%;top:16px;transform:translateX(-50%);z-index:9997;background:var(--warn-050,#fff7ed);color:var(--warn-700,#9a3412);border:2px solid var(--warn-700,#9a3412);border-radius:10px;padding:.7rem 1rem;box-shadow:0 6px 18px rgba(0,0,0,.15);font-size:.95rem;display:flex;gap:.6rem;align-items:center';
  bar.innerHTML = (AR
    ? '⏳ ستنتهي الجلسة تلقائيًا خلال دقيقة لعدم النشاط. <button type="button" class="btn" onclick="idleReset()" style="min-height:36px;padding:0 .8rem">البقاء متصلًا</button>'
    : '⏳ You will be signed out in one minute due to inactivity. <button type="button" class="btn" onclick="idleReset()" style="min-height:36px;padding:0 .8rem">Stay signed in</button>');
  document.body.appendChild(bar);
  try{ announce(AR?'ستنتهي الجلسة خلال دقيقة':'You will be signed out in one minute'); }catch(e){}
}
function idleLogout(){
  var w=document.getElementById('idle-warn'); if(w) w.remove();
  try{
    S.route='login'; S.view='dashboard'; S.session=null; S.selectedStudent=null;
    S.a11yOpen=false; S.settingsOpen=false; S.viewStack=[];
    if(S.securityLog) S.securityLog.push({ts:Date.now(), role:'system', user:'—', ip:'—', action:'Signed out due to inactivity'});
    render();
    var AR=(S.settings&&S.settings.lang==='ar');
    try{ announce(AR?'تم تسجيل الخروج تلقائيًا لعدم النشاط':'Signed out automatically due to inactivity'); }catch(e){}
  }catch(e){}
}
['click','keydown','pointermove','touchstart','focus','change','input'].forEach(function(ev){
  window.addEventListener(ev, function(){ if(!_idleWarned) idleReset(); }, {passive:true, capture:true});
});
document.addEventListener('visibilitychange', function(){ if(!document.hidden) idleReset(); });
/* ---- END IDLE AUTO-LOGOUT ---- */
try{ idleReset(); }catch(e){}
restoreA11y();
render();
try{ setInterval(checkTeacherBadges, 3000); }catch(e){}
announce('Manassa prototype loaded. Four sign-in front doors available: teacher, student, parent and administrator.');
/* MARKER-5-END */