import React, { useState, useEffect } from "react";
import Axios from "axios";
import {
  Container, // Add this to your imports
  Paper,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
  Stack
} from "@mui/material";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    try {
      const response = await Axios.get(
        `http://localhost:5000/api/recipes?q=${query}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching the recipes:", error.response);
    }
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Recipe Search
        </Typography>
        <Box component="form" onSubmit={getSearch} sx={{ display: "flex", gap: 2, justifyContent: "center" }}>
          <TextField
            label="Enter ingredient or dish"
            variant="outlined"
            value={search}
            onChange={updateSearch}
            sx={{ flex: 1 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Search
          </Button>
        </Box>
      </Paper>
      <Grid container spacing={4} sx={{ mt: 2 }}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.recipe.label}>
            <Card sx={{ height: "100%", display: "flex", flexDirection: "column", borderRadius: 3, boxShadow: 6 }}>
              <CardMedia
                component="img"
                height="180"
                image={recipe.recipe.image}
                alt={recipe.recipe.label}
                sx={{ objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {recipe.recipe.label}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", mb: 1 }}>
                  {recipe.recipe.ingredientLines.slice(0, 3).map((ing, idx) => (
                    <Chip key={idx} label={ing} size="small" color="primary" variant="outlined" />
                  ))}
                  {recipe.recipe.ingredientLines.length > 3 && (
                    <Chip label={`+${recipe.recipe.ingredientLines.length - 3} more`} size="small" />
                  )}
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  Calories: {Math.round(recipe.recipe.calories)}
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  color="secondary"
                  href={recipe.recipe.url}
                  target="_blank"
                  rel="noopener"
                >
                  View Recipe
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default App;