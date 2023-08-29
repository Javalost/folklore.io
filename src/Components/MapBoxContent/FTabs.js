import { Box, Typography,  CardActionArea, CardMedia, CardContent, CardActions, Button, Card } from '@mui/material';

function FTabs({ storyContent }) { 
    return (  
    <Box>
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                component="img"
                height="140"
                image="https://placehold.co/600x400"
                alt="green iguana"
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                Show Me
                </Button>
            </CardActions>
        
        </Card>
    </Box>
    );
} 

export default FTabs;
