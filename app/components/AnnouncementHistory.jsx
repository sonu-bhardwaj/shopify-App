export default function AnnouncementHistory({ announcements }) {
  return (
    <div
      style={{
        marginTop: "40px",
        background: "#fff",
        padding: "25px",
        borderRadius: "12px",
        boxShadow: "0 2px 10px rgba(0,0,0,.08)",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>📢 Announcement History</h2>

      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr style={{ background: "#f4f6f8" }}>
            <th style={th}>Current</th>
            <th style={th}>Announcement</th>
            <th style={th}>Created At</th>
            <th style={th}>Action</th>
          </tr>
        </thead>

        <tbody>
          {announcements.map((item) => (
            <tr key={item._id}>
              <td style={td}>
                {item.isCurrent ? (
                  <span
                    style={{
                      background: "#22c55e",
                      color: "white",
                      padding: "4px 10px",
                      borderRadius: "20px",
                      fontSize: "12px",
                    }}
                  >
                    Current
                  </span>
                ) : (
                  "-"
                )}
              </td>

              <td style={td}>{item.text}</td>

              <td style={td}>{new Date(item.createdAt).toLocaleString()}</td>

              <td style={td}>
                <button
                  style={{
                    padding: "8px 14px",
                    borderRadius: "6px",
                    border: "none",
                    background: "#008060",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  Use Again
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = {
  padding: "14px",
  borderBottom: "2px solid #ddd",
  textAlign: "left",
};

const td = {
  padding: "14px",
  borderBottom: "1px solid #eee",
};
