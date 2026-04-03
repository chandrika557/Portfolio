import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setFilter, setSort, setSearch } from '../store/store';

const PolicyList = ({ policies, filter, sort, search, setFilter, setSort, setSearch }) => {
  let filtered = policies.filter(p => {
    const matchFilter = filter === 'All' || p.status === filter;
    const matchSearch = p.coverageType.toLowerCase().includes(search.toLowerCase()) ||
      p.policyNumber.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  filtered = [...filtered].sort((a, b) => {
    if (sort === 'newest') return new Date(b.startDate) - new Date(a.startDate);
    if (sort === 'oldest') return new Date(a.startDate) - new Date(b.startDate);
    if (sort === 'premium-high') return b.premiumAmount - a.premiumAmount;
    if (sort === 'premium-low') return a.premiumAmount - b.premiumAmount;
    return 0;
  });

  return (
    <div className="page policies-page">
      <div className="page-header">
        <h1 className="page-title">My Policies</h1>
        <p className="page-subtitle">{filtered.length} policies found</p>
      </div>

      <div className="controls-bar">
        <div className="search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="search-input"
            type="text"
            placeholder="Search policies..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="filter-sort-wrap">
          <div className="filter-tabs">
            {['All', 'Active', 'Expired', 'Pending'].map(f => (
              <button
                key={f}
                className={`filter-tab ${filter === f ? 'active' : ''}`}
                onClick={() => setFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>
          <select
            className="sort-select"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="newest">Newest First</option>
            <option value="oldest">Oldest First</option>
            <option value="premium-high">Premium: High to Low</option>
            <option value="premium-low">Premium: Low to High</option>
          </select>
        </div>
      </div>

      {filtered.length === 0 ? (
        <div className="empty-state">
          <p className="empty-icon">📭</p>
          <p className="empty-text">No policies found</p>
          <p className="empty-sub">Try changing your filters</p>
        </div>
      ) : (
        <div className="policies-grid">
          {filtered.map(policy => (
            <Link to={`/policies/${policy.id}`} key={policy.id} className="policy-card">
              <div className="card-header">
                <span className="card-icon">{policy.icon}</span>
                <span className={`status-pill status-${policy.status.toLowerCase()}`}>
                  {policy.status}
                </span>
              </div>
              <div className="card-body">
                <h3 className="card-title">{policy.coverageType}</h3>
                <p className="card-number">{policy.policyNumber}</p>
                <div className="card-dates">
                  <div className="date-item">
                    <span className="date-label">Start</span>
                    <span className="date-value">{policy.startDate}</span>
                  </div>
                  <div className="date-divider">→</div>
                  <div className="date-item">
                    <span className="date-label">End</span>
                    <span className="date-value">{policy.endDate}</span>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="coverage-info">
                  <span className="coverage-label">Coverage</span>
                  <span className="coverage-value">₹{policy.coverageAmount.toLocaleString()}</span>
                </div>
                <div className="premium-info">
                  <span className="premium-value">₹{policy.premiumAmount.toLocaleString()}</span>
                  <span className="premium-freq">/{policy.premiumFrequency}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  policies: state.policies,
  filter: state.filter,
  sort: state.sort,
  search: state.search,
});

const mapDispatchToProps = { setFilter, setSort, setSearch };

export default connect(mapStateToProps, mapDispatchToProps)(PolicyList);
