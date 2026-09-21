export interface MenuItemSizes {
  M: number;
  L: number;
}

export interface MenuItemVariants {
  veg: number;
  nonVeg: number;
}

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  price: number;
  sizes?: MenuItemSizes;
  variants?: MenuItemVariants;
  dietaryType?: 'veg' | 'non-veg' | 'both';
  isVegetarian?: boolean;
  isBothVegNonVeg?: boolean;
  protein?: number | string;
  isSignature?: boolean;
  image?: string;
  description?: string;
}

export const categories = [
  "All Items",
  "Starters",
  "Rice Bowls",
  "Pastas",
  "Burritos & Fried Chicken",
  "Sandwiches & Salads",
  "Protein Shakes",
  "Hot Beverages",
  "Fresh Juices & Cocktails"
];

export const nutritionOverview = {
  title: "Nutrition at The Celestial Story",
  subtitle: "Balanced diet & high-protein meals crafted with Italian and Mexican fusion inspirations.",
  metrics: [
    { label: "High Protein", value: "50g – 87g", detail: "Per Meal (Main Course)" },
    { label: "Calorie Conscious", value: "350 – 650 kcal", detail: "Per Meal" },
    { label: "Macro Friendly", value: "Low Carb & Low Fat", detail: "Wholesome Preparation" },
    { label: "Endure Fusion", value: "Italian & Mexican", detail: "Balanced Diet Philosophy" }
  ]
};

export const menuItems: MenuItem[] = [
  // MAIN COURSE / STARTERS / BOWLS / PASTAS / BURRITOS (Page 1 of PDF)
  {
    id: "mc-1",
    name: "THE DADDY'S IFFA CHICKEN",
    category: "Starters",
    price: 149,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-2",
    name: "THE SPICY SEDUCTION PATTIES",
    category: "Starters",
    price: 169,
    dietaryType: "non-veg",
    isVegetarian: false,
    isSignature: true
  },
  {
    id: "mc-3",
    name: "THE RED FLAG WRAP",
    category: "Starters",
    price: 189,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-4",
    name: "THE CREAM JOB",
    category: "Rice Bowls",
    price: 169,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-5",
    name: "THE DYNAMITE LUXE CHICKY FRIES",
    category: "Starters",
    price: 169,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-6",
    name: "THE SMASH ME TACOS",
    category: "Starters",
    price: 189,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-7",
    name: "THE NAUGHTY HONEY PASTO",
    category: "Pastas",
    price: 189,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-8",
    name: "THE PANEER ARTISIAN BREAD",
    category: "Starters",
    price: 179,
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "mc-9",
    name: "THE CREAMY CLIMAX BURRITO",
    category: "Burritos & Fried Chicken",
    price: 199,
    dietaryType: "non-veg",
    isVegetarian: false,
    isSignature: true
  },
  {
    id: "mc-10",
    name: "THE SINFULL MAC & CLUCKBOWL",
    category: "Rice Bowls",
    price: 199,
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "mc-11",
    name: "THE POPPY CHICKY KATSU",
    category: "Burritos & Fried Chicken",
    price: 219,
    dietaryType: "non-veg",
    isVegetarian: false,
    isSignature: true
  },
  {
    id: "mc-12",
    name: "THE MIDNIGHT SEOUL ROLL",
    category: "Starters",
    price: 189,
    variants: {
      veg: 189,
      nonVeg: 199
    },
    dietaryType: "both",
    isBothVegNonVeg: true
  },

  // SALADS AND SANDWICH (Page 2 of PDF)
  {
    id: "ss-1",
    name: "PITA HEATWAVE SALAD",
    category: "Sandwiches & Salads",
    price: 90,
    sizes: {
      M: 90,
      L: 149
    },
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "ss-2",
    name: "SPICY TEMPTATION SANDWICH",
    category: "Sandwiches & Salads",
    price: 80,
    sizes: {
      M: 80,
      L: 129
    },
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "ss-3",
    name: "MELTED MUSCLE SALAD (GRILLED)",
    category: "Sandwiches & Salads",
    price: 99,
    sizes: {
      M: 99,
      L: 139
    },
    dietaryType: "non-veg",
    isVegetarian: false
  },
  {
    id: "ss-4",
    name: "SMOKEY PEPPER CRUSH",
    category: "Sandwiches & Salads",
    price: 79,
    sizes: {
      M: 79,
      L: 129
    },
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "ss-5",
    name: "THE CORN AFFAIR",
    category: "Sandwiches & Salads",
    price: 79,
    sizes: {
      M: 79,
      L: 129
    },
    dietaryType: "veg",
    isVegetarian: true
  },

  // PROTEIN SHAKES (Page 2 of PDF)
  {
    id: "ps-1",
    name: "GUILTY PLEASURE MOCHA",
    category: "Protein Shakes",
    price: 120,
    protein: 35,
    dietaryType: "veg",
    isVegetarian: true
  },

  // HOT BEVERAGES (Page 2 of PDF)
  {
    id: "hb-1",
    name: "BOMBAY CHAI",
    category: "Hot Beverages",
    price: 15,
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "hb-2",
    name: "COFFEE",
    category: "Hot Beverages",
    price: 20,
    dietaryType: "veg",
    isVegetarian: true
  },
  {
    id: "hb-3",
    name: "EXPRESSO SHOT",
    category: "Hot Beverages",
    price: 15,
    dietaryType: "veg",
    isVegetarian: true
  }
];
