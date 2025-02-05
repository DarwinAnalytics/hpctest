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
  LocalFlorist as LeafIcon, 
  Agriculture as RootIcon, 
  Grass as OtherIcon,
  Add as AddIcon,
  ShoppingCart as CartIcon,
  Info as InfoIcon,
  Close as CloseIcon
} from '@mui/icons-material';

// Seed data structure with placeholder images
const seedCategories = [
  {
      name: 'Leafy Vegetables',
      icon: <LeafIcon />,
      color: '#2ecc71',
      seeds: [
          { 
              name: 'Coriander', 
              description: 'Nutrient-rich leafy green', 
              image: '/api/placeholder/300/200?text=Spinach+Seeds'
          },
          { 
              name: 'Spinach', 
              description: 'Nutrient-rich leafy green', 
              image: '/api/placeholder/300/200?text=Spinach+Seeds'
          },
          { 
              name: 'Fenugreek (Methi)', 
              description: 'Aromatic herb with multiple benefits', 
              image: '/api/placeholder/300/200?text=Fenugreek+Seeds'
          },
          { 
              name: 'Amaranthus', 
              description: 'Protein-packed leafy vegetable', 
              image: '/api/placeholder/300/200?text=Amaranthus+Seeds'
          }
      ]
  },
  {
      name: 'Fruiting Vegetables',
      icon: <LeafIcon />,
      color: '#e74c3c',
      seeds: [
          { 
              name: 'Tomato', 
              description: 'Juicy and versatile garden favorite', 
              image: '/api/placeholder/300/200?text=Tomato+Seeds'
          },
          { 
              name: 'Brinjal (Eggplant)', 
              description: 'Rich and flavorful vegetable', 
              image: '/api/placeholder/300/200?text=Brinjal+Seeds'
          },
          { 
              name: 'Chili & Capsicum', 
              description: 'Spicy and sweet pepper varieties', 
              image: '/api/placeholder/300/200?text=Chili+Seeds'
          },
          { 
              name: 'Cucumber', 
              description: 'Cool and refreshing salad staple', 
              image: '/api/placeholder/300/200?text=Cucumber+Seeds'
          }
      ]
  },
  {
      name: 'Root Vegetables',
      icon: <RootIcon />,
      color: '#8e44ad',
      seeds: [
          { 
              name: 'Carrot', 
              description: 'Crunchy and nutritious root vegetable', 
              image: '/api/placeholder/300/200?text=Carrot+Seeds'
          },
          { 
              name: 'Beetroot', 
              description: 'Sweet and colorful root crop', 
              image: '/api/placeholder/300/200?text=Beetroot+Seeds'
          },
          { 
              name: 'Radish', 
              description: 'Crisp and peppery garden delight', 
              image: '/api/placeholder/300/200?text=Radish+Seeds'
          }
      ]
  },
  {
      name: 'Other Vegetables',
      icon: <OtherIcon />,
      color: '#3498db',
      seeds: [
          { 
              name: 'Bitter Gourd', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'Bottle Gourd', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'Cabbage', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'Cauliflower', 
              description: 'Versatile and nutritious cruciferous vegetable', 
              image: '/api/placeholder/300/200?text=Cauliflower+Seeds'
          },
          { 
              name: 'Pumpkins', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'Peas', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'RidgeGourd', 
              description: 'Hearty and healthy leafy vegetable', 
              image: '/api/placeholder/300/200?text=Cabbage+Seeds'
          },
          { 
              name: 'Okra (Ladyfinger)', 
              description: 'Tender and nutritious vegetable', 
              image: '/api/placeholder/300/200?text=Okra+Seeds'
          },
          { 
              name: 'Onion', 
              description: 'Essential culinary ingredient', 
              image: '/api/placeholder/300/200?text=Onion+Seeds'
          }
      ]
  }
];


const VegetableSeedsProductPage = () => {
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
              Vegetable Seeds Collection
            </Typography>
            <Typography 
              variant="subtitle1" 
              sx={{ 
                opacity: 0.8,
                maxWidth: 600,
                mx: 'auto'
              }}
            >
              Premium, Non-GMO Seeds for Your Perfect Garden
            </Typography>
          </Box>
        </Paper>

        <Grid container spacing={4}>
          {seedCategories.map((category) => (
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
                    <Grid item xs={12} sm={6} md={3} key={seed.name}>
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
                                color: category.color
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
                        <Box 
                          sx={{ 
                            display: 'flex', 
                            justifyContent: 'space-between', 
                            p: 2, 
                            pt: 0 
                          }}
                        >
                        
                          
                        </Box>
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

export default VegetableSeedsProductPage;