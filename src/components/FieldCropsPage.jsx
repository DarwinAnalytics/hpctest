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
const fieldCropCategories = [
  {
    name: 'Cereals & Grains',
    icon: <GrainIcon />,
    color: '#f39c12',
    seeds: [
      { 
        name: 'Paddy', 
        description: 'High-yielding paddy variety for diverse cultivation', 
        image: '/api/placeholder/300/200?text=Rice+Seeds'
      },
      { 
        name: 'Wheat', 
        description: 'Premium quality wheat seeds for optimal harvest', 
        image: '/api/placeholder/300/200?text=Wheat+Seeds'
      },
      { 
        name: 'Maize (Corn)', 
        description: 'Hybrid corn seeds for maximum grain production', 
        image: '/api/placeholder/300/200?text=Maize+Seeds'
      },
      { 
        name: 'Oats', 
        description: 'Robust Oats variety suitable for various climates', 
        image: '/api/placeholder/300/200?text=Barley+Seeds'
      },
      { 
        name: 'Bajra', 
        description: 'Nutrient-rich millet varieties for dry land farming', 
        image: '/api/placeholder/300/200?text=Millets+Seeds'
      },
      { 
        name: 'Jowar', 
        description: 'Nutrient-rich millet varieties for dry land farming', 
        image: '/api/placeholder/300/200?text=Millets+Seeds'
      }
    ]
  },
  {
    name: 'Pulses (Legumes)',
    icon: <PulseIcon />,
    color: '#2980b9',
    seeds: [
      { 
        name: 'Pigeon Pea (Tur/Arhar)', 
        description: 'High-protein pulse variety with excellent yield potential', 
        image: '/api/placeholder/300/200?text=Pigeon+Pea+Seeds'
      },
      { 
        name: 'Chickpea (Chana)', 
        description: 'Premium chickpea seeds for robust crop production', 
        image: '/api/placeholder/300/200?text=Chickpea+Seeds'
      },
      { 
        name: 'Black Gram (Urad)', 
        description: 'High-yielding black gram variety for diverse soil conditions', 
        image: '/api/placeholder/300/200?text=Black+Gram+Seeds'
      },
      { 
        name: 'Green Gram (Moong)', 
        description: 'Nutritious green gram seeds with quick maturity', 
        image: '/api/placeholder/300/200?text=Green+Gram+Seeds'
      }
    ]
  }
];


const FieldCropsPage = () => {
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
              Field Crop Seeds Collection
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
          {fieldCropCategories.map((category) => (
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

export default FieldCropsPage;