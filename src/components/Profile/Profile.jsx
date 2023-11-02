export const Profile = ({
    user: { username, tag, location, avatar, stats }
}) => {
  return (
    <div>
      <div>
        <img src={avatar} alt={username} width="80" height="80"/>
        <b>{username}</b>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>
    <ul>
    <li>
      Followers
      <span>{stats.followers}</span>
    </li>
    <li>
      Views
      <span>{stats.views}</span>    
    </li>
    <li>
      Likes
      <span>{stats.likes}</span>    
    </li>
  </ul>
    </div>
  );
};

