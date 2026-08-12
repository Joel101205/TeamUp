export default function ActivityCard({
    title, description, createdDate, participantCount, location,
}) {

    return (
        <div className="activity-card">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>Created: {createdDate}</p>
            <p>Participants: {participantCount}</p>
            <p>Location: {location}</p>
        </div>
    )
}