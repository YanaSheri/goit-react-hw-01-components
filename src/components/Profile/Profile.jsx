import PropTypes from "prop-types";
const Profile = ({ user }) => {
    console.log(user);
    const { avatar, location, stats: {followers, likes, views}, tag, username } = user;
    return <div className="profile">
        <div className="description">
            <img
                src={avatar}
                alt="User avatar"
                className="avatar"
            />
            <p className="name">{username}</p>
            <p className="tag">{tag}</p>
            <p className="location">{location}</p>
        </div>

        <ul className="stats">
            <li>
                <span className="label">Followers</span>
                <span className="quantity">{followers}</span>
            </li>
            <li>
                <span className="label">Views</span>
                <span className="quantity">{views}</span>
            </li>
            <li>
                <span className="label">Likes</span>
                <span className="quantity">{likes}</span>
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