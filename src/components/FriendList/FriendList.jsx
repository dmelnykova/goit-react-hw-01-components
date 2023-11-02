import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul>
                {friends.map(item => {
                    return (<FriendListItem
                        key={item.id}
                        avatar={item.avatar}
                        name={item.name}
                        isOnline={item.isOnline}
                    />); 
                })}
            </ul>
        </div>
    );
};