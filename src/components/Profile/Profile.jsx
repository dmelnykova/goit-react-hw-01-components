import {
    ProfileContainer,
    UserCard,
    Avatar,
    UserName,
    UserText,
    StatsList,
    StatsItem,
    StatsSpan,
} from './Profile.styled';

export const Profile = ({
    user: { username, tag, location, avatar, stats }
}) => {
  return (
    <ProfileContainer>
        <UserCard>
            <Avatar src={avatar} alt={username} width="110" height="110"/>
            <UserName>{username}</UserName>
            <UserText>@{tag}</UserText>
            <UserText>{location}</UserText>
            <StatsList>
                <StatsItem>
                    Followers
                    <StatsSpan>{stats.followers}</StatsSpan>
                </StatsItem>
                <StatsItem>
                    Views
                    <StatsSpan>{stats.views}</StatsSpan>    
                </StatsItem>
                <StatsItem>
                    Likes
                    <StatsSpan>{stats.likes}</StatsSpan>    
                </StatsItem>
            </StatsList>
        </UserCard>
    </ProfileContainer>
  );
};

