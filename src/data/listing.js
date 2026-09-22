import heroLarge from '../assets/photos/hero-large-lounge.jpg';
import heroLounge2 from '../assets/photos/hero-lounge-2.jpg';
import heroJacuzzi from '../assets/photos/hero-jacuzzi.jpg';
import heroBedroom from '../assets/photos/hero-bedroom.jpg';
import heroExterior from '../assets/photos/hero-exterior.jpg';
import livingRoom1 from '../assets/photos/living-room-1.jpg';
import livingRoom2 from '../assets/photos/living-room-2.jpg';
import fullKitchen from '../assets/photos/full-kitchen.jpg';
import bedroom from '../assets/photos/bedroom.jpg';
import fullBathroom from '../assets/photos/full-bathroom.jpg';
import gym from '../assets/photos/gym.jpg';
import pool from '../assets/photos/pool.jpg';

// Hero mosaic — 5 images as observed in the reference (large left + 2x2 grid right)
export const heroImages = [
  { id: 'hero-1', src: heroLarge, alt: 'Living room lounge seating' },
  { id: 'hero-2', src: heroLounge2, alt: 'Living room lounge seating, alternate angle' },
  { id: 'hero-3', src: heroJacuzzi, alt: 'Private jacuzzi' },
  { id: 'hero-4', src: heroBedroom, alt: 'Bedroom' },
  { id: 'hero-5', src: heroExterior, alt: 'Building exterior' },
];

// Photo Tour categories, in the order observed in the recording
export const photoTourCategories = [
  {
    id: 'living-room-1',
    label: 'Living room 1',
    title: 'Living room 1',
    subtitle: 'Sofa · Air conditioning · Ceiling fan · TV',
    images: [livingRoom1, heroLounge2, heroLarge],
  },
  {
    id: 'living-room-2',
    label: 'Living room 2',
    title: 'Living room 2',
    subtitle: 'Ceiling fan · Hot tub',
    images: [livingRoom2],
  },
  {
    id: 'full-kitchen',
    label: 'Full kitchen',
    title: 'Full kitchen',
    subtitle: 'Refrigerator · Microwave · Stove · Kettle',
    images: [fullKitchen],
  },
  {
    id: 'bedroom',
    label: 'Bedroom',
    title: 'Bedroom',
    subtitle:
      'Double bed · Air conditioning · Bed linen · Ceiling fan · Clothes storage · Cot · Hangers · Iron · Room-darkening blinds · Cleaning available during stay · Cleaning products · Long-term stays allowed · Private entrance · Wifi',
    images: [bedroom],
  },
  {
    id: 'full-bathroom',
    label: 'Full bathroom',
    title: 'Full bathroom',
    subtitle: 'Hairdryer · Hot water · Shampoo · Shower gel',
    images: [fullBathroom],
  },
  {
    id: 'gym',
    label: 'Gym',
    title: 'Gym',
    subtitle: 'Air conditioning · Gym · Exercise equipment · Ceiling fan',
    images: [gym],
  },
  {
    id: 'exterior',
    label: 'Exterior',
    title: 'Exterior',
    subtitle: 'Building exterior and grounds',
    images: [heroExterior],
  },
  {
    id: 'pool',
    label: 'Pool',
    title: 'Pool',
    subtitle: 'Shared pool',
    images: [pool],
  },
  {
    id: 'additional-photos',
    label: 'Additional photos',
    title: 'Additional photos',
    subtitle: 'More views of the property',
    images: [heroJacuzzi, heroLounge2],
  },
];

// Flattened list used for the lightbox / "1 of N" counter
export const allPhotos = photoTourCategories.flatMap((cat) =>
  cat.images.map((src, i) => ({
    src,
    category: cat.label,
    alt: `${cat.label} photo ${i + 1}`,
  }))
);

export const listingInfo = {
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  typeSummary: 'Entire serviced apartment in Candolim, India',
  guestsSummary: '3 guests · 1 bedroom · 1 bed · 1 bathroom',
  rating: 4.95,
  reviewCount: 19,
  guestFavourite: true,
  guestFavouriteBlurb: 'One of the most loved homes on Airbnb, according to guests',
  host: {
    name: 'Mirashya Homes',
    superhost: true,
    yearsHosting: 2,
    reviewCount: 1463,
    rating: 4.68,
    bornIn: 'Born in the 80s',
    education: 'NICMAR GOA',
    responseRate: '100%',
    responseTime: 'within an hour',
    bio: 'Dedicated to offering exceptional stays in North Goa with personalized service, cozy ambiance, and prompt assistance.',
    coHosts: [
      'Sharath',
      'Aman Dev Pahwa',
      'Maria Karen Priyanka',
      'Simran',
      'Pallavi',
      'Sanyukta',
      'Shruti',
      'Amisha',
    ],
  },
  highlights: [
    {
      icon: 'umbrella',
      title: 'Outdoor entertainment',
      body: 'The pool and alfresco dining are great for summer trips.',
    },
    {
      icon: 'snowflake',
      title: 'Designed for staying cool',
      body: 'Beat the heat with the A/C and ceiling fan.',
    },
    {
      icon: 'key',
      title: 'Self check-in',
      body: 'You can check in with the building staff.',
    },
  ],
  description: {
    translated: true,
    text: `🏝 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖, popular cafés, restaurants, and nightlife 🍹. It's ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🏝`,
  },
  sleepingArrangements: [
    { room: 'Bedroom', subtitle: '1 double bed', image: bedroom },
    { room: 'Living room', subtitle: '1 sofa', image: livingRoom1 },
  ],
  amenities: {
    highlighted: [
      { icon: 'kitchen', label: 'Kitchen' },
      { icon: 'workspace', label: 'Dedicated workspace' },
      { icon: 'pool', label: 'Pool' },
      { icon: 'pets', label: 'Pets allowed' },
      { icon: 'wifi', label: 'Wifi' },
      { icon: 'parking', label: 'Free parking on premises' },
      { icon: 'hottub', label: 'Hot tub' },
      { icon: 'security-camera', label: 'Exterior security cameras on property' },
    ],
    totalCount: 50,
    categories: [
      {
        name: 'Bathroom',
        items: ['Hairdryer', 'Cleaning products', 'Shampoo', 'Hot water', 'Shower gel'],
      },
      {
        name: 'Bedroom and laundry',
        items: [
          'Washing machine',
          'Hangers',
          'Bed linen',
          'Room-darkening blinds',
          'Iron',
          'Clothes storage',
        ],
      },
      {
        name: 'Entertainment',
        items: ['TV', 'Smart TV', 'Wifi'],
      },
      {
        name: 'Heating and cooling',
        items: ['Air conditioning', 'Ceiling fan'],
      },
      {
        name: 'Home safety',
        items: ['Exterior security cameras on property', 'Smoke alarm not reported'],
      },
      {
        name: 'Kitchen and dining',
        items: ['Kitchen', 'Refrigerator', 'Microwave', 'Kettle', 'Cooking basics'],
      },
      {
        name: 'Outdoor',
        items: ['Pool', 'Private jacuzzi', 'Hot tub', 'Free parking on premises'],
      },
      {
        name: 'Services',
        items: ['Self check-in', 'Long-term stays allowed', 'Cleaning available during stay', 'Pets allowed'],
      },
    ],
  },
  booking: {
    priceForStay: 28499,
    currency: '₹',
    nights: 5,
    checkIn: '2026-10-18',
    checkOut: '2026-10-23',
    guests: 2,
    freeCancellationBefore: '17 October',
    promo: {
      text: 'Get 10% off your next stay.',
      linkText: 'Terms apply',
    },
  },
  calendar: {
    months: [
      { year: 2026, month: 9 }, // October (0-indexed: 9)
      { year: 2026, month: 10 }, // November
    ],
    selectedStart: 18,
    selectedEnd: 23,
  },
  ratingBreakdown: [
    { label: 'Cleanliness', value: 5.0, icon: 'spray' },
    { label: 'Accuracy', value: 5.0, icon: 'check' },
    { label: 'Check-in', value: 5.0, icon: 'key' },
    { label: 'Communication', value: 5.0, icon: 'message' },
    { label: 'Location', value: 4.8, icon: 'map' },
    { label: 'Value', value: 4.8, icon: 'tag' },
  ],
  reviewTopics: [
    { label: 'Comfort', count: 6, emoji: '🛏️' },
    { label: 'Accuracy', count: 5, emoji: '🧭' },
    { label: 'Hot tub', count: 5, emoji: '🛁' },
    { label: 'Condition', count: 4, emoji: '🩹' },
    { label: 'Hospitality', count: 8, emoji: '🎁' },
    { label: 'Cleanliness', count: 4, emoji: '🧹' },
    { label: 'Amenities', count: 2, emoji: '☕' },
  ],
  reviews: [
    {
      name: 'Amit',
      tenure: '2 months on Airbnb',
      date: '1 week ago',
      rating: 5,
      text: 'Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.',
    },
    {
      name: 'Aheesh',
      tenure: '3 years on Airbnb',
      date: '2 weeks ago',
      rating: 5,
      text: 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.',
    },
    {
      name: 'Samiksha',
      tenure: '8 months on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'the host nitish was really great help',
    },
    {
      name: 'Vedant',
      tenure: '4 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine. The highlight of our stay was definitely the jacuzzi, and the perfect place to relax after a day of exploring Goa. It added a luxurious touch to our vacation and made our experience even more memorable. The property was exactly as described, well-equipped, and offered a peaceful atmosphere. We would highly recommend this place to anyone looking for a comfortable, clean, and relaxing stay in Goa. Looking forward to visiting again!',
    },
    {
      name: 'Vaibhav S',
      tenure: '3 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
    },
    {
      name: 'Mohd',
      tenure: '5 years on Airbnb',
      date: 'May 2026',
      rating: 5,
      text: 'Great place. Exactly as described in the listing.',
    },
  ],
  location: {
    heading: 'Candolim, Goa, India',
    exactLocationNotice: 'Exact location will be provided after booking.',
    neighbourhoodHighlights:
      'Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.',
  },
  policies: {
    cancellation: {
      title: 'Cancellation policy',
      lines: [
        'Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.',
        "Review this host's full policy for details.",
      ],
    },
    houseRules: {
      title: 'House rules',
      lines: ['Check-in after 2:00 pm', 'Checkout before 11:00 am', '3 guests maximum'],
    },
    safety: {
      title: 'Safety & property',
      lines: [
        'Carbon monoxide alarm not reported',
        'Smoke alarm not reported',
        'Exterior security cameras on property',
      ],
    },
  },
  nearbyStays: [
    { title: 'Beautiful Studio with a view to die for', price: 23600, rating: 4.91, image: pool },
    { title: 'NAQAB - 1bhk with private pool', price: 42218, rating: 4.95, image: livingRoom2 },
    { title: 'Greentique Luxury Flat with plunge pool, Calangute', price: 44506, rating: 4.94, image: heroJacuzzi },
    { title: 'The Tropical Studio | 5 mins to Beach', price: 22824, rating: 4.96, image: bedroom },
    { title: 'Luxury Casa Bella 1BHK with plunge pool, Calangute', price: 39942, rating: 4.95, image: heroLarge },
  ],
};
