import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Dashboard = ({ policies }) => {
  const active = policies.filter(p => p.status === 'Active').length;
  const expired = policies.filter(p => p.status === 'Expired').length;
  const pending = policies.filter(p => p.status === 'Pending').length;
  const totalPremium = policies
    .filter(p => p.status === 'Active')
    .reduce((sum, p) => sum + p.premiumAmount, 0);

  return (
    <div className="page dashboard-page">
      <div className="dashboard-hero">
        <div className="hero-text">
          <p className="hero-greeting">Good morning,</p>
          <h1 className="hero-name">Jaya Chandrika</h1>
          <p className="hero-sub">Here's an overview of your insurance portfolio</p>
        </div>
        <div className="hero-badge">
          <span className="badge-icon">🛡️</span>
          <span className="badge-text">Protected</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card stat-total">
          <div className="stat-icon">📋</div>
          <div className="stat-info">
            <p className="stat-label">Total Policies</p>
            <p className="stat-value">{policies.length}</p>
          </div>
        </div>
        <div className="stat-card stat-active">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <p className="stat-label">Active</p>
            <p className="stat-value">{active}</p>
          </div>
        </div>
        <div className="stat-card stat-expired">
          <div className="stat-icon">⏰</div>
          <div className="stat-info">
            <p className="stat-label">Expired</p>
            <p className="stat-value">{expired}</p>
          </div>
        </div>
        <div className="stat-card stat-premium">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <p className="stat-label">Monthly Premium</p>
            <p className="stat-value">₹{totalPremium.toLocaleString()}</p>
          </div>
        </div>
      </div>

      <div className="dashboard-section">
        <div className="section-header">
          <h2>Recent Policies</h2>
          <Link to="/policies" className="view-all-btn">View All →</Link>
        </div>
        <div className="recent-policies">
          {policies.slice(0, 3).map(policy => (
            <Link to={`/policies/${policy.id}`} key={policy.id} className="recent-policy-card">
              <div className="policy-icon-wrap">{policy.icon}</div>
              <div className="policy-info">
                <p className="policy-type">{policy.coverageType}</p>
                <p className="policy-number">{policy.policyNumber}</p>
              </div>
              <div className={`status-pill status-${policy.status.toLowerCase()}`}>
                {policy.status}
              </div>
              <div className="policy-premium">
                <p className="premium-amount">₹{policy.premiumAmount.toLocaleString()}</p>
                <p className="premium-freq">{policy.premiumFrequency}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ policies: state.policies });
export default connect(mapStateToProps)(Dashboard);
