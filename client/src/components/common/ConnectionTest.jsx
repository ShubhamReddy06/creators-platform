import { useState } from 'react';

export default function ConnectionTest() {
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const testConnection = async () => {
    setLoading(true);
    setStatus(null);
    try {
      const res = await fetch('/api/health', {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) throw new Error(`Status ${res.status}`);

      const data = await res.json();
      setStatus({ ok: true, message: data.message });
    } catch (err) {
      setStatus({ ok: false, message: err.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ border: '1px solid var(--muted)', padding: 16, borderRadius: 8 }}>
      <h3>Backend Connection Test</h3>
      <p>Click the button below to verify the frontend can reach the backend.</p>
      <button onClick={testConnection} disabled={loading} className="btn btn-primary">
        {loading ? 'Testing...' : 'Test Connection'}
      </button>

      {status && (
        <div style={{ marginTop: 12 }}>
          {status.ok ? (
            <div style={{ color: 'var(--success)' }}>✅ Success: {status.message}</div>
          ) : (
            <div style={{ color: 'var(--danger)' }}>❌ Error: {status.message}</div>
          )}
        </div>
      )}
    </div>
  );
}
