export default function ExploreActivityCard({
  title, description, createdDate, participantCount, participants, location,
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
      <p className="activity-card-participants">{participants.join(", ")}</p>

      <ul className="activity-card-meta">
        <li>📍 {location}</li>
        <li>🗓 {createdDate}</li>
      </ul>

      <button type="button" className="activity-card-join-button">Join</button>
    </article>
  );
}