export default function ActivityCard({
  title, description, createdDate, participantCount, location,
}) {
  return (
    <article className="activity-card">
      <header className="activity-card-header">
        <h3 className="activity-card-title">{title}</h3>
        <span className="activity-card-badge">
          👥 {participantCount}
        </span>
      </header>

      <p className="activity-card-description">{description}</p>

      <ul className="activity-card-meta">
        <li>📍 {location}</li>
        <li>🗓 {createdDate}</li>
      </ul>
    </article>
  );
}