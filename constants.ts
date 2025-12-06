import { Category, Product, SocialPost } from './types';

// TODO: To fetch real-time posts, generate a User Access Token from the Facebook Developers Portal (Instagram Basic Display API)
// and paste it here.
export const INSTAGRAM_TOKEN = ""; 

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Handmade Notebooks',
    description: 'Crafted with love using recycled paper.',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '2',
    name: 'Aesthetic Diaries',
    description: 'Capture your daily thoughts in style.',
    image: 'https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Journaling Essentials',
    description: 'Washi tapes, stickers, and more.',
    image: 'https://images.unsplash.com/photo-1586075010923-2dd45eeed858?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '4',
    name: 'Premium Gifts',
    description: 'Perfect sets for stationery lovers.',
    image: 'https://images.unsplash.com/photo-1513201099705-a9746e1e201f?auto=format&fit=crop&q=80&w=800'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Jaipur Journal',
    price: 899,
    category: 'Diaries',
    image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=600',
    description: 'Hand-bound floral softcover.',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Minimalist Grid Planner',
    price: 1200,
    category: 'Planners',
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=600',
    description: 'Undated monthly & weekly spreads.'
  },
  {
    id: 'p3',
    name: 'Bamboo Fountain Pen',
    price: 1500,
    category: 'Pens',
    image: 'https://images.unsplash.com/photo-1585336261022-680e295ce3fe?auto=format&fit=crop&q=80&w=600',
    description: 'Eco-friendly smooth writing experience.'
  },
  {
    id: 'p4',
    name: 'Pastel Washi Set',
    price: 499,
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1603511679090-4131df95e921?auto=format&fit=crop&q=80&w=600',
    description: 'Set of 5 muted tone tapes.'
  }
];

// Fallback data used when no API token is provided
export const INSTAGRAM_FEED: SocialPost[] = [
  { 
    id: '1', 
    image: 'https://images.unsplash.com/photo-1595186938930-b3b44b648197?auto=format&fit=crop&q=80&w=600', 
    likes: 1205, 
    caption: 'Current desk situation 🌿 #stationery #studygram' 
  },
  { 
    id: '2', 
    image: 'https://images.unsplash.com/photo-1528696892704-5e11528b1509?auto=format&fit=crop&q=80&w=600', 
    likes: 890, 
    caption: 'Packing your orders with love! 💌' 
  },
  { 
    id: '3', 
    image: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?auto=format&fit=crop&q=80&w=600', 
    likes: 2300, 
    caption: 'The art of journaling 🖋️' 
  },
  { 
    id: '4', 
    image: 'https://images.unsplash.com/photo-1583485016010-91500713b185?auto=format&fit=crop&q=80&w=600', 
    likes: 1540, 
    caption: 'New pastel collection dropping soon ✨' 
  },
];