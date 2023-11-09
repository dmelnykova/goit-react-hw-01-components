import {
    Avatar,
    Item,
    StatusSpan,
    Text,
} from './FriendList.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <Item>
                <StatusSpan>{isOnline}</StatusSpan>
                <Avatar src={avatar} alt={name} width="65" height="65" />
                <Text>{name}</Text>
            </Item>
        </div>
    );
};