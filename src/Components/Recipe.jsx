import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardContent, CardMedia, Typography, List, ListItem, ListItemText } from '@mui/material';
import { styled } from '@mui/system';

const StyledCard = styled(Card)({
  maxWidth: 345,
  margin: '20px auto',
});

const StyledMedia = styled(CardMedia)({
  height: 140,
});

const StyledList = styled(List)({
  paddingLeft: 20,
});

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <StyledCard>
      <StyledMedia
        image={image}
        title={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <StyledList>
          {ingredients.map((ingredient, index) => (
            <ListItem key={index}>
              <ListItemText primary={ingredient.text} />
            </ListItem>
          ))}
        </StyledList>
        <Typography variant="body2" color="textSecondary">
          Calories: {calories}
        </Typography>
      </CardContent>
    </StyledCard>
  );
};

Recipe.propTypes = {
  title: PropTypes.string.isRequired,
  calories: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Recipe;
