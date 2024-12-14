function UserCard({ user }) {
  return (
    <div className="user-card">
      <img src={user.avatar_url} alt="avatar" />
      <h2>{user.name}</h2>
      <p>{user.bio}</p>
      <a href={user.html_url} target="_blank" rel="noopener noreferrer">Visit Profile</a>
    </div>
  );
}

export default UserCard;

