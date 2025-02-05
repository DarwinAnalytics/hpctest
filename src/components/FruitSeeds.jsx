import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
  Button, 
  Box, 
  Chip,
  Paper,
  IconButton,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions
} from '@mui/material';
import { 
  Grain as GrainIcon, 
  Agriculture as PulseIcon,
  Add as AddIcon,
  ShoppingCart as CartIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Field Crop Seeds data structure with placeholder images
const fruitSeedCategories = [
  {
      name: 'Fruit Seeds',
      icon: <PulseIcon />, // Replace with the actual icon component
      color: '#e74c3c',
      seeds: [
          {
              name: 'Watermelon',
              description: 'Sweet and juicy watermelon seeds for high yields',
              image: '/api/placeholder/300/200?text=Watermelon+Seeds'
          },
          {
              name: 'Muskmelon',
              description: 'High-quality muskmelon seeds for aromatic fruits',
              image: '/api/placeholder/300/200?text=Muskmelon+Seeds'
          },
          {
              name: 'Papaya',
              description: 'Fast-growing papaya seeds for tropical farming',
              image: '/api/placeholder/300/200?text=Papaya+Seeds'
          }
      ]
  }
];

  

const FruitSeeds = () => {
  const [cart, setCart] = useState([]);
  const [selectedSeed, setSelectedSeed] = useState(null);

  const addToCart = (seed, category) => {
    setCart(prevCart => [...prevCart, { ...seed, category }]);
  };

  const handleOpenDetails = (seed) => {
    setSelectedSeed(seed);
  };

  const handleCloseDetails = () => {
    setSelectedSeed(null);
  };

  return (
    <Box 
      sx={{ 
        background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
        minHeight: '100vh',
        py: 4
      }}
    >
      <Container maxWidth="lg">
        <Paper 
          elevation={6} 
          sx={{ 
            borderRadius: 4, 
            overflow: 'hidden',
            mb: 4
          }}
        >
          <Box 
            sx={{ 
              background: 'linear-gradient(to right, #4b6cb7, #182848)',
              color: 'white',
              p: 4,
              textAlign: 'center'
            }}
          >
            <Typography 
              variant="h3" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                letterSpacing: '-0.05em',
                mb: 2
              }}
            >
              Fruit Seeds Collection
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                opacity: 0.8,
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Premium, High-Yield Seeds for Professional Farmers
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {fruitSeedCategories.map((category) => (
            <Grid item xs={12} key={category.name}>
              <Paper 
                elevation={3} 
                sx={{ 
                  borderRadius: 3,
                  overflow: 'hidden',
                  mb: 2
                }}
              >
                <Box 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center',
                    p: 2,
                    backgroundColor: `${category.color}10`
                  }}
                >
                  {React.cloneElement(category.icon, { 
                    sx: { 
                      color: category.color, 
                      fontSize: 40,
                      mr: 2
                    } 
                  })}
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      fontWeight: 'bold', 
                      color: category.color,
                      flexGrow: 1
                    }}
                  >
                    {category.name}
                  </Typography>
                </Box>
                <Grid container spacing={2} sx={{ p: 2 }}>
                  {category.seeds.map((seed) => (
                    <Grid item xs={12} sm={6} md={4} key={seed.name}>
                      <Card 
                        sx={{ 
                          height: '100%', 
                          display: 'flex', 
                          flexDirection: 'column',
                          position: 'relative',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-10px)',
                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                          }
                        }}
                        elevation={3}
                      >
                        <CardMedia
                          component="img"
                          alt={seed.name}
                          height="200"
                          image={seed.image}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
                            <Typography 
                              variant="h6" 
                              component="h3" 
                              sx={{ 
                                fontWeight: 'bold', 
                                color: category.color,
                                fontSize: { xs: '1rem', sm: '1.25rem' }
                              }}
                            >
                              {seed.name}
                            </Typography>
                            <Tooltip title="More Details">
                              <IconButton 
                                size="small" 
                                onClick={() => handleOpenDetails(seed)}
                                sx={{ color: category.color }}
                              >
                                <InfoIcon fontSize="small" />
                              </IconButton>
                            </Tooltip>
                          </Box>
                          <Typography 
                            variant="body2" 
                            color="text.secondary" 
                            sx={{ mb: 2, height: 50, overflow: 'hidden' }}
                          >
                            {seed.description}
                          </Typography>
                        
                        </CardContent>
                      
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          ))}
        </Grid>

      
      </Container>
    </Box>
  );
};

export default FruitSeeds;