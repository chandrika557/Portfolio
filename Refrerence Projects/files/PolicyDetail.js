import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { connect } from 'react-redux';

const PolicyDetail = ({ policies }) => {
  const { id } = useParams();
  const policy = policies.find(p => p.id === id);

  if (!policy) {
    return (
      <div className="page">
        <div className="empty-state">
          <p className="empty-icon">❓</p>
          <p className="empty-text">Policy not found</p>
          <Link to="/policies" className="back-btn">← Back to Policies</Link>
        </div>
      </div>
    );
  }

  const daysLeft = Math.ceil((new Date(policy.endDate) - new Date()) / (1000 * 60 * 60 * 24));

  return (
    <div className="page detail-page">
      <div className="detail-nav">
        <Link to="/policies" className="back-link">← Back to Policies</Link>
        <span className={`status-pill status-${policy.status.toLowerCase()}`}>{policy.status}</span>
      </div>

      <div className="detail-hero">
        <div className="detail-icon">{policy.icon}</div>
        <div className="detail-title-wrap">
          <h1 className="detail-title">{policy.coverageType}</h1>
          <p className="detail-number">{policy.policyNumber}</p>
        </div>
      </div>

      <div className="detail-grid">
        <div className="detail-main">
          <div className="detail-card">
            <h3 className="detail-card-title">Coverage Details</h3>
            <p className="detail-description">{policy.description}</p>
            <div className="benefits-list">
              {policy.benefits.map((benefit, i) => (
                <span key={i} className="benefit-tag">✓ {benefit}</span>
              ))}
            </div>
          </div>

          <div className="detail-card">
            <h3 className="detail-card-title">Policy Period</h3>
            <div className="period-bar">
              <div className="period-start">
                <p className="period-label">Start Date</p>
                <p className="period-date">{policy.startDate}</p>
              </div>
              <div className="period-progress">
                <div className="progress-track">
                  <div
                    className={`progress-fill ${policy.status.toLowerCase()}`}
                    style={{
                      width: policy.status === 'Expired' ? '100%' :
                             policy.status === 'Pending' ? '0%' : '60%'
                    }}
                  />
                </div>
                {policy.status === 'Active' && daysLeft > 0 && (
                  <p className="days-left">{daysLeft} days remaining</p>
                )}
              </div>
              <div className="period-end">
                <p className="period-label">End Date</p>
                <p className="period-date">{policy.endDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="detail-sidebar">
          <div className="detail-card">
            <h3 className="detail-card-title">Financial Summary</h3>
            <div className="finance-item">
              <span className="finance-label">Premium</span>
              <span className="finance-value">₹{policy.premiumAmount.toLocaleString()}<small>/{policy.premiumFrequency}</small></span>
            </div>
            <div className="finance-item">
              <span className="finance-label">Coverage Amount</span>
              <span className="finance-value">₹{policy.coverageAmount.toLocaleString()}</span>
            </div>
            <div className="finance-item">
              <span className="finance-label">Deductible</span>
              <span className="finance-value">₹{policy.deductible.toLocaleString()}</span>
            </div>
          </div>

          <div className="detail-card">
            <h3 className="detail-card-title">Your Agent</h3>
            <div className="agent-info">
              <div className="agent-avatar">{policy.agent.charAt(0)}</div>
              <div>
                <p className="agent-name">{policy.agent}</p>
                <p className="agent-phone">{policy.agentPhone}</p>
              </div>
            </div>
            <button className="contact-btn">📞 Contact Agent</button>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({ policies: state.policies });
export default connect(mapStateToProps)(PolicyDetail);
