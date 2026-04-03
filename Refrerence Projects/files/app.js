import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import PolicyList from './pages/PolicyList';
import PolicyDetail from './pages/PolicyDetail';

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0a0c10;
    --surface: #111318;
    --surface2: #181c23;
    --border: #242830;
    --text: #e8eaf0;
    --text-muted: #7a8099;
    --accent: #c9a84c;
    --accent2: #e8c96a;
    --active: #2ecc71;
    --expired: #e74c3c;
    --pending: #f39c12;
    --radius: 16px;
    --shadow: 0 8px 32px rgba(0,0,0,0.4);
  }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
  }

  a { text-decoration: none; color: inherit; }

  /* NAVBAR */
  .navbar {
    display: flex; align-items: center; justify-content: space-between;
    padding: 1rem 2rem;
    background: var(--surface);
    border-bottom: 1px solid var(--border);
    position: sticky; top: 0; z-index: 100;
  }
  .navbar-brand a { display: flex; align-items: center; gap: 0.5rem; }
  .brand-icon { font-size: 1.4rem; color: var(--accent); }
  .brand-name { font-family: 'Playfair Display', serif; font-size: 1.3rem; font-weight: 700; color: var(--accent); }
  .navbar-links { display: flex; gap: 0.5rem; }
  .nav-link {
    padding: 0.5rem 1rem; border-radius: 8px;
    color: var(--text-muted); font-size: 0.9rem; font-weight: 500;
    transition: all 0.2s;
  }
  .nav-link:hover, .nav-link.active { background: var(--surface2); color: var(--text); }
  .nav-link.active { color: var(--accent); }
  .navbar-user { display: flex; align-items: center; gap: 0.75rem; }
  .user-avatar {
    width: 36px; height: 36px; border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    display: flex; align-items: center; justify-content: center;
    font-size: 0.75rem; font-weight: 700; color: #000;
  }
  .user-name { font-size: 0.9rem; color: var(--text-muted); }

  /* PAGE */
  .page { padding: 2rem; max-width: 1200px; margin: 0 auto; }

  /* STATUS PILLS */
  .status-pill {
    padding: 0.25rem 0.75rem; border-radius: 20px;
    font-size: 0.75rem; font-weight: 600; letter-spacing: 0.5px;
  }
  .status-active { background: rgba(46,204,113,0.15); color: var(--active); }
  .status-expired { background: rgba(231,76,60,0.15); color: var(--expired); }
  .status-pending { background: rgba(243,156,18,0.15); color: var(--pending); }

  /* DASHBOARD */
  .dashboard-hero {
    display: flex; align-items: center; justify-content: space-between;
    background: linear-gradient(135deg, var(--surface2), #1a1f2e);
    border: 1px solid var(--border); border-radius: var(--radius);
    padding: 2.5rem; margin-bottom: 2rem;
  }
  .hero-greeting { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 0.25rem; }
  .hero-name { font-family: 'Playfair Display', serif; font-size: 2.5rem; font-weight: 900; color: var(--accent); }
  .hero-sub { color: var(--text-muted); margin-top: 0.5rem; }
  .hero-badge {
    display: flex; flex-direction: column; align-items: center; gap: 0.5rem;
    background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.3);
    border-radius: 12px; padding: 1rem 1.5rem;
  }
  .badge-icon { font-size: 2rem; }
  .badge-text { font-size: 0.75rem; font-weight: 600; color: var(--accent); letter-spacing: 1px; text-transform: uppercase; }

  .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; margin-bottom: 2rem; }
  .stat-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); padding: 1.5rem;
    display: flex; align-items: center; gap: 1rem;
    transition: transform 0.2s;
  }
  .stat-card:hover { transform: translateY(-2px); }
  .stat-icon { font-size: 1.5rem; }
  .stat-label { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem; }
  .stat-value { font-size: 1.5rem; font-weight: 700; font-family: 'Playfair Display', serif; }
  .stat-active .stat-value { color: var(--active); }
  .stat-expired .stat-value { color: var(--expired); }
  .stat-premium .stat-value { color: var(--accent); }

  .dashboard-section { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; }
  .section-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.25rem; }
  .section-header h2 { font-family: 'Playfair Display', serif; font-size: 1.3rem; }
  .view-all-btn { color: var(--accent); font-size: 0.9rem; font-weight: 500; }

  .recent-policy-card {
    display: flex; align-items: center; gap: 1rem;
    padding: 1rem; border-radius: 10px;
    border: 1px solid var(--border);
    margin-bottom: 0.75rem;
    transition: background 0.2s;
  }
  .recent-policy-card:hover { background: var(--surface2); }
  .policy-icon-wrap { font-size: 1.5rem; }
  .policy-info { flex: 1; }
  .policy-type { font-weight: 600; font-size: 0.95rem; }
  .policy-number { font-size: 0.8rem; color: var(--text-muted); }
  .policy-premium { text-align: right; }
  .premium-amount { font-weight: 700; color: var(--accent); }
  .premium-freq { font-size: 0.75rem; color: var(--text-muted); }

  /* POLICY LIST PAGE */
  .page-header { margin-bottom: 1.5rem; }
  .page-title { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; }
  .page-subtitle { color: var(--text-muted); margin-top: 0.25rem; }

  .controls-bar { margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 1rem; }
  .search-wrap {
    display: flex; align-items: center; gap: 0.75rem;
    background: var(--surface); border: 1px solid var(--border);
    border-radius: 10px; padding: 0.75rem 1rem;
  }
  .search-icon { font-size: 1rem; }
  .search-input { background: none; border: none; outline: none; color: var(--text); flex: 1; font-size: 0.95rem; font-family: 'DM Sans', sans-serif; }
  .search-input::placeholder { color: var(--text-muted); }

  .filter-sort-wrap { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
  .filter-tabs { display: flex; gap: 0.5rem; }
  .filter-tab {
    padding: 0.4rem 1rem; border-radius: 20px;
    border: 1px solid var(--border); background: none;
    color: var(--text-muted); font-size: 0.85rem; font-family: 'DM Sans', sans-serif;
    cursor: pointer; transition: all 0.2s;
  }
  .filter-tab:hover { border-color: var(--accent); color: var(--accent); }
  .filter-tab.active { background: var(--accent); border-color: var(--accent); color: #000; font-weight: 600; }

  .sort-select {
    background: var(--surface); border: 1px solid var(--border);
    color: var(--text); border-radius: 8px; padding: 0.4rem 0.75rem;
    font-size: 0.85rem; font-family: 'DM Sans', sans-serif; cursor: pointer;
  }

  .policies-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.25rem; }
  .policy-card {
    background: var(--surface); border: 1px solid var(--border);
    border-radius: var(--radius); overflow: hidden;
    transition: transform 0.2s, border-color 0.2s;
    display: block;
  }
  .policy-card:hover { transform: translateY(-4px); border-color: var(--accent); }
  .card-header { display: flex; justify-content: space-between; align-items: center; padding: 1.25rem; background: var(--surface2); }
  .card-icon { font-size: 1.75rem; }
  .card-body { padding: 1.25rem; }
  .card-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem; }
  .card-number { font-size: 0.8rem; color: var(--text-muted); margin-bottom: 1rem; }
  .card-dates { display: flex; align-items: center; gap: 0.5rem; font-size: 0.8rem; }
  .date-label { color: var(--text-muted); display: block; margin-bottom: 0.15rem; }
  .date-value { font-weight: 500; }
  .date-divider { color: var(--text-muted); }
  .card-footer { padding: 1rem 1.25rem; border-top: 1px solid var(--border); display: flex; justify-content: space-between; align-items: center; }
  .coverage-label { font-size: 0.75rem; color: var(--text-muted); display: block; }
  .coverage-value { font-size: 0.9rem; font-weight: 600; }
  .premium-value { font-size: 1.1rem; font-weight: 700; color: var(--accent); }
  .premium-freq { font-size: 0.75rem; color: var(--text-muted); }

  .empty-state { text-align: center; padding: 4rem 2rem; }
  .empty-icon { font-size: 3rem; margin-bottom: 1rem; }
  .empty-text { font-size: 1.2rem; font-weight: 600; margin-bottom: 0.5rem; }
  .empty-sub { color: var(--text-muted); }

  /* DETAIL PAGE */
  .detail-nav { display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem; }
  .back-link { color: var(--text-muted); font-size: 0.9rem; transition: color 0.2s; }
  .back-link:hover { color: var(--accent); }

  .detail-hero { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 2rem; }
  .detail-icon { font-size: 3.5rem; }
  .detail-title { font-family: 'Playfair Display', serif; font-size: 2rem; font-weight: 900; }
  .detail-number { color: var(--text-muted); margin-top: 0.25rem; }

  .detail-grid { display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; }
  .detail-main { display: flex; flex-direction: column; gap: 1.5rem; }
  .detail-sidebar { display: flex; flex-direction: column; gap: 1.5rem; }

  .detail-card { background: var(--surface); border: 1px solid var(--border); border-radius: var(--radius); padding: 1.5rem; }
  .detail-card-title { font-family: 'Playfair Display', serif; font-size: 1.1rem; margin-bottom: 1rem; color: var(--accent); }
  .detail-description { color: var(--text-muted); line-height: 1.7; margin-bottom: 1.25rem; }

  .benefits-list { display: flex; flex-wrap: wrap; gap: 0.5rem; }
  .benefit-tag {
    background: rgba(201,168,76,0.1); border: 1px solid rgba(201,168,76,0.2);
    color: var(--accent); padding: 0.3rem 0.75rem; border-radius: 20px; font-size: 0.8rem;
  }

  .period-bar { display: flex; align-items: center; gap: 1rem; }
  .period-label { font-size: 0.75rem; color: var(--text-muted); margin-bottom: 0.25rem; }
  .period-date { font-weight: 600; font-size: 0.9rem; }
  .period-progress { flex: 1; }
  .progress-track { height: 6px; background: var(--surface2); border-radius: 3px; overflow: hidden; }
  .progress-fill { height: 100%; border-radius: 3px; transition: width 0.5s; }
  .progress-fill.active { background: linear-gradient(90deg, var(--accent), var(--accent2)); }
  .progress-fill.expired { background: var(--expired); }
  .progress-fill.pending { background: var(--pending); }
  .days-left { font-size: 0.75rem; color: var(--text-muted); margin-top: 0.4rem; text-align: center; }

  .finance-item { display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 0; border-bottom: 1px solid var(--border); }
  .finance-item:last-child { border-bottom: none; }
  .finance-label { color: var(--text-muted); font-size: 0.9rem; }
  .finance-value { font-weight: 600; }
  .finance-value small { font-size: 0.75rem; color: var(--text-muted); font-weight: 400; }

  .agent-info { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }
  .agent-avatar {
    width: 44px; height: 44px; border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent2));
    display: flex; align-items: center; justify-content: center;
    font-weight: 700; color: #000; font-size: 1.1rem;
  }
  .agent-name { font-weight: 600; }
  .agent-phone { font-size: 0.85rem; color: var(--text-muted); }
  .contact-btn {
    width: 100%; padding: 0.75rem; border-radius: 10px;
    background: rgba(201,168,76,0.15); border: 1px solid rgba(201,168,76,0.3);
    color: var(--accent); font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; font-weight: 600; cursor: pointer; transition: background 0.2s;
  }
  .contact-btn:hover { background: rgba(201,168,76,0.25); }

  .back-btn {
    display: inline-block; margin-top: 1rem;
    padding: 0.75rem 1.5rem; background: var(--surface);
    border: 1px solid var(--border); border-radius: 10px;
    color: var(--text); font-size: 0.9rem;
  }

  /* RESPONSIVE */
  @media (max-width: 900px) {
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .policies-grid { grid-template-columns: repeat(2, 1fr); }
    .detail-grid { grid-template-columns: 1fr; }
    .navbar-links { display: none; }
  }
  @media (max-width: 600px) {
    .page { padding: 1rem; }
    .stats-grid { grid-template-columns: repeat(2, 1fr); }
    .policies-grid { grid-template-columns: 1fr; }
    .dashboard-hero { flex-direction: column; gap: 1.5rem; text-align: center; }
    .hero-name { font-size: 1.8rem; }
    .filter-sort-wrap { flex-direction: column; align-items: flex-start; }
    .user-name { display: none; }
  }
`;

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <style>{styles}</style>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/policies" element={<PolicyList />} />
        <Route path="/policies/:id" element={<PolicyDetail />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
