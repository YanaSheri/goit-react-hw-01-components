import PropTypes from "prop-types";
import FriendListItem from "./FriendListItem";
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
    console.log(friends);
    return (
        <ul className={s["friendList"]}>
            {friends.map(({ id, avatar, name, isOnline}) => {
                return (
                    <li className={s["item"]} key={id}>
                    <FriendListItem
                        avatar={avatar}
                        name={name}
                        isOnline={isOnline}
                        />
                    </li>)
                }
            )}
        </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
        })
    )
}

export default FriendList;
// Компонент должен принимать один проп friends - массив объектов друзей.

// Компонент должен создавать DOM следующей структуры.

// <ul class="friend-list">
//   <!-- Произвольное кол-во FriendListItem -->
// </ul>