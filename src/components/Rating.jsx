import StarActive from "../assets/star-active.png";
import StarInactive from "../assets/star-inactive.png";

function Rating({ rating }) {
  const stars = parseInt(rating);
  const starEmpty = 5 - stars;
  return (
    <div>
      {[...Array(stars)].map((e, i) => (
        <img key={"stars" + i} src={StarActive} alt={`${rating}/5`} />
      ))}
      {[...Array(starEmpty)].map((e, i) => (
        <img key={"starEmpty" + i} src={StarInactive} alt={`${rating}/5`} />
      ))}
    </div>
  );
}

export default Rating;
