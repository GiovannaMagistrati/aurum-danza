// Importaciones sincronizadas con tu carpeta assets/images
import d1 from '../assets/images/bailarin-1.jpg';
import d2 from '../assets/images/bailarin-2.jpg';
import d3 from '../assets/images/bailarin-3.jpg';
import d4 from '../assets/images/bailarin-4.jpg';
import d5 from '../assets/images/bailarin-5.jpg';
import d6 from '../assets/images/bailarin-6.jpg';
import d7 from '../assets/images/bailarin-7.jpg';
import d8 from '../assets/images/bailarin-8.jpg';
import d9 from '../assets/images/bailarina-9.jpg';

export const DANCERS_DATA = [
  {
    id: 1,
    name: 'Ana Silva',
    featured: true, // Destacado para la Home
    role: 'Prima Ballerina',
    category: 'Classical',
    location: 'Madrid, ES',
    image: d1
  },
  {
    id: 2,
    name: 'Leo Cortez',
    featured: true, // Destacado para la Home
    role: 'Contemporary Soloist',
    category: 'Contemporary',
    location: 'London, UK',
    image: d2
  },
  {
    id: 3,
    name: 'Mía Wong',
    featured: true, // Destacado para la Home
    role: 'Neoclassical Artist',
    category: 'Neoclassical',
    location: 'Paris, FR',
    image: d3
  },
  {
    id: 4,
    name: 'Julian Rose',
    featured: false,
    role: 'Urban Specialist',
    category: 'Commercial',
    location: 'New York, US',
    image: d4
  },
  {
    id: 5,
    name: 'Elena Vlad',
    featured: false,
    role: 'Principal Dancer',
    category: 'Classical',
    location: 'Berlin, DE',
    image: d5
  },
  {
    id: 6,
    name: 'Marcus Kane',
    featured: false,
    role: 'Expressive Artist',
    category: 'Contemporary',
    location: 'Milan, IT',
    image: d6
  },
  {
    id: 7,
    name: 'Clara Duval',
    featured: false,
    role: 'Fashion & Dance',
    category: 'Commercial',
    location: 'Tokyo, JP',
    image: d7
  },
  {
    id: 8,
    name: 'Sasha Meyer',
    featured: false,
    role: 'Lyric Specialist',
    category: 'Contemporary',
    location: 'Vienna, AT',
    image: d8
  },
  {
    id: 9,
    name: 'Victor Paz',
    featured: false,
    role: 'Technique Expert',
    category: 'Neoclassical',
    location: 'Barcelona, ES',
    image: d9
  }
];