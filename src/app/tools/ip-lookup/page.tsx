"use client";

import { useState, useEffect } from "react";
import { BackToToolsButton } from "../BackToToolsButton";

interface IPInfo {
  ip: string;
  city: string;
  region: string;
  country: string;
  isp: string;
  org: string;
  asn: string;
  timezone: string;
}

export default function IPLookupPage() {
  const [ipInfo, setIpInfo] = useState<IPInfo | null>(null);
  const [loading, setLoading] = useState(false);
  const [customIP, setCustomIP] = useState("");

  const fetchIP = async (ip?: string) => {
    setLoading(true);
    try {
      const url = ip ? `https://ipapi.co/${ip}/json/` : "https://ipapi.co/json/";
      const res = await fetch(url);
      const data = await res.json();
      if (data.error) throw new Error(data.reason);
      setIpInfo({
        ip: data.ip || "Unknown",
        city: data.city || "Unknown",
        region: data.region || "Unknown",
        country: data.country_name || "Unknown",
        isp: data.org || data.isp || "Unknown",
        org: data.asn || "Unknown",
        asn: data.asn || "Unknown",
        timezone: data.timezone || "Unknown",
      });
    } catch {
      setIpInfo({
        ip: ip || "Your IP",
        city: "Unable to fetch",
        region: "Unable to fetch",
        country: "Unable to fetch",
        isp: "Unable to fetch",
        org: "Unable to fetch",
        asn: "Unable to fetch",
        timezone: "Unable to fetch",
      });
    }
    setLoading(false);
  };

  useEffect(() => { fetchIP(); }, []);

  const InfoRow = ({ label, value }: { label: string; value: string }) => (
    <div style={{ display: "flex", justifyContent: "space-between", padding: "0.75rem 0", borderBottom: "1px solid var(--input-border)" }}>
      <span style={{ color: "var(--text-muted)", fontWeight: 600 }}>{label}</span>
      <span style={{ color: "var(--text-primary)" }}>{value}</span>
    </div>
  );

  return (
    <div style={{ minHeight: "100vh", padding: "3rem 1.5rem", background: "transparent" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <BackToToolsButton />
        <h1 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "var(--text-primary)" }}>IP Lookup</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>Find your IP address and location information</p>

        <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <div style={{ fontSize: "2rem", fontWeight: 700, color: "var(--primary-light)", marginBottom: "0.5rem" }}>{loading ? "Loading..." : ipInfo?.ip}</div>
            <div style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>Your Public IP Address</div>
          </div>
          <button onClick={() => fetchIP()} disabled={loading} className="btn-glow" style={{ width: "100%" }}>
            {loading ? "Fetching..." : "🔄 Refresh My IP"}
          </button>
        </div>

        {ipInfo && (
          <div className="glass-card" style={{ padding: "1.5rem", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>IP Information</h2>
            <InfoRow label="IP Address" value={ipInfo.ip} />
            <InfoRow label="Location" value={`${ipInfo.city}, ${ipInfo.region}, ${ipInfo.country}`} />
            <InfoRow label="ISP" value={ipInfo.isp} />
            <InfoRow label="Organization" value={ipInfo.org} />
            <InfoRow label="Timezone" value={ipInfo.timezone} />
          </div>
        )}

        <div className="glass-card" style={{ padding: "1.5rem" }}>
          <h2 style={{ fontSize: "1.1rem", fontWeight: 700, marginBottom: "1rem", color: "var(--text-primary)" }}>IP Lookup Uses</h2>
          <div style={{ display: "grid", gap: "0.75rem", fontSize: "0.9rem", color: "var(--text-muted)" }}>
            {["Check your public IP address", "Verify VPN connection", "Troubleshoot network issues", "Check website visitor locations", "Verify proxy detection"].map((use, i) => (
              <div key={i} style={{ padding: "0.75rem", background: "var(--card-bg)", borderRadius: "0.5rem" }}>✓ {use}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
