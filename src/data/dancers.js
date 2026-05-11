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
    name: 'Leo Cortez', // Varon
    featured: true,
    role: 'Contemporary Soloist',
    category: 'Contemporary',
    location: 'Madrid, ES',
    image: d1
  },
  {
    id: 2,
    name: 'Julian Rose', // Varon
    featured: true,
    role: 'Urban Specialist',
    category: 'Commercial',
    location: 'New York, US',
    image: d2
  },
  {
    id: 3,
    name: 'Clara Duval', // Mujer
    featured: true,
    role: 'Fashion & Dance',
    category: 'Commercial',
    location: 'Paris, FR',
    image: d3
  },
  {
    id: 4,
    name: 'Mía Wong', // Mujer
    featured: false,
    role: 'Neoclassical Artist',
    category: 'Neoclassical',
    location: 'Hong Kong, HK',
    image: d4
  },
  {
    id: 5,
    name: 'Marcus Kane', // Varon
    featured: false,
    role: 'Expressive Artist',
    category: 'Contemporary',
    location: 'Milan, IT',
    image: d5
  },
  {
    id: 6,
    name: 'Elena Petrov', // Mujer (Corregido de Marcus)
    featured: false,
    role: 'Prima Ballerina',
    category: 'Contemporary',
    location: 'Berlin, DE',
    image: d6
  },
  {
    id: 7,
    name: 'Sofia Ricci', // Mujer (Corregido de Clara)
    featured: false,
    role: 'Prima Ballerina',
    category: 'Classical',
    location: 'Tokyo, JP',
    image: d7
  },
  {
    id: 8,
    name: 'John Meyer', // Varon (Ajustado nombre masculino/neutro)
    featured: false,
    role: 'Lyric Specialist',
    category: 'Contemporary',
    location: 'Vienna, AT',
    image: d8
  },
  {
    id: 9,
    name: 'Valentina Paz', // Mujer (Corregido de Victor)
    featured: false,
    role: 'Technique Expert',
    category: 'Neoclassical',
    location: 'Barcelona, ES',
    image: d9
  }
];