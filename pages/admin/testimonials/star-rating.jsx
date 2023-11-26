// import "./styles.css";
import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function StarRating({ stars }) {
  // Star maximum
  const maxStars = 5;

  // Get the entire value
  const starPercentage = (stars / maxStars) * 100;

  // Round the percentage
  const starPercentageRounded = Math.round(starPercentage);

  const StarStyles = () => {
    return {
      width: starPercentageRounded + "%"
    };
  };

  return (
    <div className="stars-gray">
      <div className="flex stars-yellow" style={StarStyles()}>        
      </div>
    </div>
  );
}
