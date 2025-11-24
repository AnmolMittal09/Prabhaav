import { Category, Product, SocialPost } from './types';

export const CATEGORIES: Category[] = [
  {
    id: '1',
    name: 'Handmade Notebooks',
    description: 'Crafted with love using recycled paper.',
    image: 'https://picsum.photos/seed/notebooks/600/600'
  },
  {
    id: '2',
    name: 'Aesthetic Diaries',
    description: 'Capture your daily thoughts in style.',
    image: 'https://picsum.photos/seed/diaries/600/600'
  },
  {
    id: '3',
    name: 'Journaling Essentials',
    description: 'Washi tapes, stickers, and more.',
    image: 'https://picsum.photos/seed/journaling/600/600'
  },
  {
    id: '4',
    name: 'Premium Gifts',
    description: 'Perfect sets for stationery lovers.',
    image: 'https://picsum.photos/seed/gifts/600/600'
  }
];

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'The Jaipur Journal',
    price: 899,
    category: 'Diaries',
    image: 'https://picsum.photos/seed/p1/500/500',
    description: 'Hand-bound floral softcover.',
    isNew: true
  },
  {
    id: 'p2',
    name: 'Minimalist Grid Planner',
    price: 1200,
    category: 'Planners',
    image: 'https://picsum.photos/seed/p2/500/500',
    description: 'Undated monthly & weekly spreads.'
  },
  {
    id: 'p3',
    name: 'Bamboo Fountain Pen',
    price: 1500,
    category: 'Pens',
    image: 'https://picsum.photos/seed/p3/500/500',
    description: 'Eco-friendly smooth writing experience.'
  },
  {
    id: 'p4',
    name: 'Pastel Washi Set',
    price: 499,
    category: 'Accessories',
    image: 'https://picsum.photos/seed/p4/500/500',
    description: 'Set of 5 muted tone tapes.'
  }
];

export const INSTAGRAM_FEED: SocialPost[] = [
  { id: '1', image: 'https://picsum.photos/seed/insta1/300/300', likes: 1205, caption: 'Morning pages ✨' },
  { id: '2', image: 'https://picsum.photos/seed/insta2/300/300', likes: 890, caption: 'New collection drop!' },
  { id: '3', image: 'https://picsum.photos/seed/insta3/300/300', likes: 2300, caption: 'Desk setup goals 🌿' },
  { id: '4', image: 'https://picsum.photos/seed/insta4/300/300', likes: 1540, caption: 'Plan with me 🖋️' },
];
