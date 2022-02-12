import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Paper from "@mui/material/Paper";

function Category2() {
  return (
    <div className="category2">
      <Paper elevation={12} className="category2-paper">
        <Card sx={{ maxWidth: 200 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="100"
              image="./images/back-1.png"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="body1" component="div">
                Lizard
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>
    </div>
  );
}

export default Category2;
