import { Product } from '../types';
import ramenImage from '../assets/ramen-noodles.jpg';
import udonImage from '../assets/udon-noodles.jpg';
import sobaImage from '../assets/soba-noodles.jpg';
import chiliSauceImage from '../assets/chili-sauce.jpg';
import teriyakiImage from '../assets/teriyaki-sauce.jpg';

export const sampleProducts: Product[] = [
  // Noodles
  {
    id: '1',
    name: 'Classic Ramen Noodles',
    description: 'Traditional Japanese-style ramen noodles with rich, savory broth flavor.',
    price: 12.99,
    imageUrl: ramenImage,
    category: 'noodles',
    featured: true,
    spiceLevel: 'mild',
    inStock: true
  },
  {
    id: '2',
    name: 'Spicy Udon Noodles',
    description: 'Thick, chewy udon noodles with a fiery kick that will awaken your taste buds.',
    price: 14.99,
    imageUrl: udonImage,
    category: 'noodles',
    featured: true,
    spiceLevel: 'hot',
    inStock: true
  },
  {
    id: '3',
    name: 'Sesame Soba Noodles',
    description: 'Nutty buckwheat soba noodles with rich sesame flavor and aroma.',
    price: 13.99,
    imageUrl: sobaImage,
    category: 'noodles',
    spiceLevel: 'mild',
    inStock: true
  },
  {
    id: '4',
    name: 'Thai Pad Thai Noodles',
    description: 'Authentic Thai rice noodles with sweet and tangy flavors.',
    price: 15.99,
    imageUrl: ramenImage, // Reusing for now
    category: 'noodles',
    spiceLevel: 'medium',
    inStock: true
  },
  
  // Sauces
  {
    id: '5',
    name: 'Dragon Fire Chili Sauce',
    description: 'Blazing hot chili sauce made with premium ghost peppers and secret spices.',
    price: 8.99,
    imageUrl: chiliSauceImage,
    category: 'sauces',
    featured: true,
    spiceLevel: 'extra-hot',
    inStock: true
  },
  {
    id: '6',
    name: 'Sweet & Sour Sauce',
    description: 'Perfect balance of sweetness and tang, ideal for stir-fries and dipping.',
    price: 6.99,
    imageUrl: teriyakiImage, // Reusing for now
    category: 'sauces',
    spiceLevel: 'mild',
    inStock: true
  },
  {
    id: '7',
    name: 'Garlic Teriyaki Sauce',
    description: 'Rich, umami-packed teriyaki sauce with roasted garlic undertones.',
    price: 7.99,
    imageUrl: teriyakiImage,
    category: 'sauces',
    featured: true,
    spiceLevel: 'mild',
    inStock: true
  },
  {
    id: '8',
    name: 'Szechuan Pepper Sauce',
    description: 'Authentic Szechuan sauce with numbing pepper and bold flavors.',
    price: 9.99,
    imageUrl: chiliSauceImage, // Reusing for now
    category: 'sauces',
    spiceLevel: 'hot',
    inStock: true
  },
  {
    id: '9',
    name: 'Miso Ginger Sauce',
    description: 'Savory miso blended with fresh ginger for a complex, satisfying taste.',
    price: 8.49,
    imageUrl: teriyakiImage, // Reusing for now
    category: 'sauces',
    spiceLevel: 'mild',
    inStock: true
  },
  {
    id: '10',
    name: 'Korean Gochujang Sauce',
    description: 'Fermented Korean chili paste sauce with deep, complex heat.',
    price: 10.99,
    imageUrl: chiliSauceImage, // Reusing for now
    category: 'sauces',
    spiceLevel: 'medium',
    inStock: true
  }
];