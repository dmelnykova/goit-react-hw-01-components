import {
  UserCard,
  Avatar,
  UserName,
  StatsList,
  StatsItem,
} from './Profile.styled';

export const Profile = ({
    user: { username, tag, location, avatar, stats }
}) => {
  return (
    <UserCard>
        <Avatar src={avatar} alt={username} width="80" height="80"/>
        <UserName>{username}</UserName>
        <p>@{tag}</p>
        <p>{location}</p>
        <StatsList>
            <StatsItem>
                Followers
                <span>{stats.followers}</span>
            </StatsItem>
            <StatsItem>
                Views
                <span>{stats.views}</span>    
            </StatsItem>
            <StatsItem>
                Likes
                <span>{stats.likes}</span>    
            </StatsItem>
        </StatsList>
    </UserCard>
  );
};

