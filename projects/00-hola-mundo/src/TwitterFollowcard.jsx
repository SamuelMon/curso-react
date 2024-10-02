import { useState } from "react";

export function TwitterFollowCard({ userName, name, initialIsFollowing }) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const buttonClassname = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/${userName}`}
          alt="Foto de perfil"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followcard-infouserName">{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          <span className="tw-followCard-text">
            {isFollowing ? "Siguiendo" : "Seguir"}
          </span>
          <span className="tw-followCard-stopFollow">Dejar de Seguir</span>
        </button>
      </aside>
    </article>
  );
}
