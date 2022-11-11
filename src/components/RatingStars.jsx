import { Rating } from "@mui/material";

const RatingStars = (props) => {  
    return (
     <div>
      <Rating 
          name="read-only"
          value={Math.round(props.rating)}
      />
     </div>
    );
  };
export default RatingStars;