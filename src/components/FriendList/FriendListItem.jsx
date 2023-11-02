export const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <li>
                <span>{isOnline}</span>
                <img src={avatar} alt={name} width="48" height="48" />
                <p>{name}</p>
            </li>
        </div>
    );
};