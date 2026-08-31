export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVegetarian?: boolean;
  ingredients?: string[];
  isSignature?: boolean;
  protein?: number;
}

export const categories = [
  "All Items",
  "Starters",
  "Rice Bowls",
  "Pastas",
  "Burritos & Fried Chicken",
  "Sandwiches & Salads",
  "Fresh Juices & Cocktails",
  "Chats"
  // CHATS
  {
    id: "c1",
    name: "Pani Puri",
    description: "Crispy hollow puris filled with spicy and tangy water, potatoes, and chickpeas.",
    price: 99,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 4
  },
  {
    id: "c2",
    name: "Dahi Puri",
    description: "Puris stuffed with potatoes, chutneys, and topped with sweet yogurt and sev.",
    price: 129,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 7
  },
  {
    id: "c3",
    name: "Sev Puri",
    description: "Flat crispy puris topped with diced potatoes, onions, three chutneys, and generous sev.",
    price: 119,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 5
  },
  {
    id: "c4",
    name: "Bhel Puri",
    description: "A savory snack made with puffed rice, chopped vegetables, and a tangy tamarind sauce.",
    price: 109,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 6
  },
  {
    id: "c5",
    name: "Aloo Tikki Chaat",
    description: "Crispy potato patties topped with yogurt, chutneys, and spices.",
    price: 139,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 8
  },
  {
    id: "c6",
    name: "Papdi Chaat",
    description: "Crispy wafers garnished with boiled potatoes, chickpeas, yogurt, and chutneys.",
    price: 129,
    category: "Chats",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    protein: 6
  }
];

export const menuItems: MenuItem[] = [
  // STARTERS
  {
    id: "s1",
    name: "Spicy Seduction Patties",
    description: "Description coming soon.",
    price: 179,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80",
    isSignature: true,
  },
  {
    id: "s2",
    name: "The Red Flag Wrap",
    description: "Description coming soon.",
    price: 209,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s3",
    name: "Golden Hour Chicken",
    description: "Description coming soon.",
    price: 189,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s4",
    name: "Daddy's Fav Fifa Cheesy",
    description: "Description coming soon.",
    price: 189,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s5",
    name: "Smash Me Tacos",
    description: "Description coming soon.",
    price: 209,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s6",
    name: "Dynamite Luxe Chick Fries",
    description: "Description coming soon.",
    price: 239,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "s7",
    name: "Team Temp Paneer Roll",
    description: "Description coming soon.",
    price: 179,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
  },
  {
    id: "s8",
    name: "Midnight Seoul Chicky Roll",
    description: "Description coming soon.",
    price: 229,
    protein: 15,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1578330752538-23ebce1b2fb0?auto=format&fit=crop&w=800&q=80",
  },

  // RICE BOWLS
  {
    id: "r1",
    name: "The Creamy Job",
    description: "Description coming soon.",
    price: 179,
    protein: 25,
    category: "Rice Bowls",
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "r2",
    name: "Velvet Drip Paneer Bowl",
    description: "Description coming soon.",
    price: 219,
    protein: 25,
    category: "Rice Bowls",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    isVegetarian: true,
    isSignature: true,
  },
  {
    id: "r3",
    name: "Sinful Mac and Cluck Bowl",
    description: "Description coming soon.",
    price: 239,
    protein: 25,
    category: "Rice Bowls",
    image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?auto=format&fit=crop&w=800&q=80",
  },

  // PASTAS
  {
    id: "p1",
    name: "Naughty Honey Pasta",
    description: "Description coming soon.",
    price: 189,
    protein: 12,
    category: "Pastas",
    image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=800&q=80",
  },

  // BURRITOS & FRIED CHICKEN
  {
    id: "b1",
    name: "Creamy Climax Burrito",
    description: "Description coming soon.",
    price: 229,
    protein: 30,
    category: "Burritos & Fried Chicken",
    image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=800&q=80",
    isSignature: true,
  },
  {
    id: "b2",
    name: "Golden Hour Chicken",
    description: "Description coming soon.",
    price: 189,
    protein: 30,
    category: "Burritos & Fried Chicken",
    image: "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "b3",
    name: "Poppy Chicky Katsu",
    description: "Description coming soon.",
    price: 219,
    protein: 30,
    category: "Burritos & Fried Chicken",
    image: "https://images.unsplash.com/photo-1598511757337-fe2cafc31ba0?auto=format&fit=crop&w=800&q=80",
  },

  // SANDWICHES & SALADS
  {
    id: "ss1",
    name: "Melted Muscle Salad (Grill)",
    description: "Description coming soon.",
    price: 240,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss2",
    name: "Smokey Peppy Crush",
    description: "Description coming soon.",
    price: 240,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1550507992-eb63ffee0224?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss3",
    name: "The Corn Affair",
    description: "Description coming soon.",
    price: 200,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss4",
    name: "The Exotic Salad",
    description: "Description coming soon.",
    price: 200,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss5",
    name: "Pita Heatwave Salad",
    description: "Description coming soon.",
    price: 199,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss6",
    name: "Spicy Temptation Sandwich",
    description: "Description coming soon.",
    price: 189,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "ss7",
    name: "Scarlet Hit Parm Royal",
    description: "Description coming soon.",
    price: 240,
    protein: 20,
    category: "Sandwiches & Salads",
    image: "https://images.unsplash.com/photo-1619096252214-ef06c45683e3?auto=format&fit=crop&w=800&q=80",
  }
];
