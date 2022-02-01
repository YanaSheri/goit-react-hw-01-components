import PropTypes from "prop-types";
import s from './Profile.module.css';

const Profile = ({ user }) => {
    console.log(user);
    const { avatar, location, stats: {followers, likes, views}, tag, username } = user;
    return <div className={s["profile"]}>
        <div className={s["description"]}>
            <img
                src={avatar}
                alt="User avatar"
                className={s["avatar"]}
            />
            <p className={s["name"]}>{username}</p>
            <p className={s["tag"]}>{tag}</p>
            <p className={s["location"]}>{location}</p>
        </div>

        <ul className={s["stats"]}>
            <li className={s["listItem"]}>
                <span className={s["label"]}>Followers </span>
                <span className={s["quantity"]}>{followers}</span>
            </li>
            <li className={s["listItem"]}>
                <span className={s["label"]}>Views </span>
                <span className={s["quantity"]}>{views}</span>
            </li>
            <li className={s["listItem"]}>
                <span className={s["label"]}> Likes </span>
                <span className={s["quantity"]}> {likes}</span>
            </li>
        </ul>
    </div>
};

Profile.propTypes = {
    avatar: PropTypes.string,
    location: PropTypes.string,
    followers: PropTypes.number,
    likes: PropTypes.number,
    views: PropTypes.number,
    tag: PropTypes.string,
    username: PropTypes.string,
}

export default Profile;