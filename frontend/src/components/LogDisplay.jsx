export default function LogDisplay({ logs }) {
  return (
    <div className="p-4">
      {logs.map((day, idx) => (
        <div key={idx}>
          <h3>Day {idx + 1}</h3>
          {day.map((entry, i) => (
            <div key={i} className="text-sm mb-1">
              {entry.time} - {entry.status} - {entry.remark}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
