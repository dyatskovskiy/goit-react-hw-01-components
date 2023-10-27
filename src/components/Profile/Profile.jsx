import css from './Profile.module.css';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={css.avatar}
          width="120px"
          height="120px"
        />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li>
          <span className={css.label}>Followers</span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li>
          <span className={css.label}>Views</span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

// <div className="profile">
//   <div className="description">
//     <img
//       src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
//       alt="User avatar"
//       className="avatar"
//     />
//     <p className="name">Petra Marica</p>
//     <p className="tag">@pmarica</p>
//     <p className="location">Salvador, Brasil</p>
//   </div>

//   <ul className="stats">
//     <li>
//       <span className="label">Followers</span>
//       <span className="quantity">1000</span>
//     </li>
//     <li>
//       <span className="label">Views</span>
//       <span className="quantity">2000</span>
//     </li>
//     <li>
//       <span className="label">Likes</span>
//       <span className="quantity">3000</span>
//     </li>
//   </ul>
// </div>
