import PropTypes from "prop-types";
import s from './FriendList.module.css';
import { ColorStatus } from './ColorStatus';

const FriendListItem = (props) => {
    const { avatar, name, isOnline } = props;
    return (
        <>
            <ColorStatus isOnline={isOnline}></ColorStatus>
            <span className={s["status"]}>{isOnline}</span>
            <img className={s["avatar"]} src={avatar} alt="User avatar" width="48" />
            <p className={s["name"]}>{name}</p>
        </>
    )
};

FriendListItem.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool,
}

export default FriendListItem;