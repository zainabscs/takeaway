// SMOKD Grill - Menu Data
// Admin can update this via admin panel which saves to localStorage

const DEFAULT_MENU = [
  // BEEF BURGERS
  { id: 1, name: "Classic Beef Burger", cat: "beef", price: 13.99, desc: "Angus patty, cheese, topped with signature sauce on a brioche bun", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format", tag: "Beef Burger", popular: false },
  { id: 2, name: "Oklahoma Beef Burger", cat: "beef", price: 15.99, desc: "Angus patty, cheese, grilled onions, topped with signature sauce on a brioche bun", img: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=600&q=80&auto=format", tag: "Beef Burger", popular: true },
  { id: 3, name: "Maxican Beef Burger", cat: "beef", price: 14.99, desc: "Angus patty, cheese, jalapenos, topped with signature spicy sauce on a brioche bun Juicy Beef", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=600&q=80&auto=format", tag: "Beef Burger", popular: false },
  { id: 4, name: "Juicy Beef Burger", cat: "beef", price: 14.99, desc: "Angus patty, cheese and Pineapple topped with signature sauce on a brioche bun", img: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=600&q=80&auto=format", tag: "Beef Burger", popular: true },
  { id: 5, name: "BBQ Beef Burger", cat: "beef", price: 15.99, desc: "Angus patty, cheese and onion Rings topped with signature sauce & Ranch bba sause on a brioche bun.", img: "https://images.unsplash.com/photo-1550317138-10000687a72b?w=600&q=80&auto=format", tag: "Beef Burger", popular: false },
  { id: 6, name: "Premium Beef Burger", cat: "beef", price: 17.99, desc: "Angus patty, cheese, pickels and onion Rings topped with signature sauce on a brioche bun", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format", tag: "Beef Burger", popular: true },

  // CHICKEN BURGERS
  { id: 7, name: "Grilled Chicken Burger", cat: "chicken", price: 13.99, desc: "Grilled Chicken Thighs & Cheese topped with signature sauce packed in a brioche bun", img: "/images/grilled_chicken_burger.png", tag: "Chicken Burger", popular: true },

  { id: 8, name: "Spicy Grilled Chicken Burger", cat: "chicken", price: 14.99, desc: "Grilled Chicken Thighs & Cheese topped with signature sauce packed in a brioche bun", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&auto=format", tag: "Chicken Burger", popular: true },

  { id: 9, name: "Crispy Chicken Burger", cat: "chicken", price: 14.99, desc: "Crispy Chicken Fillets & Cheese topped signature sauce and lettuce packed in a brioche bun", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80&auto=format", tag: "Chicken Burger", popular: false },

  // BOWLS
  { id: 10, name: "Grilled Chicken Rice Bowl", cat: "bowls", price: 16.90, desc: "Creamy, tendered & juicy grilled chicken thighs marinated in signature sauce served with Arabian styled Rice and flavoury sauces of your choice", img: "/images/grilled_chicken_rice_bowl.png", tag: "Bowl", popular: true },
  { id: 11, name: "Grilled Cheesy Chicken Rice Bowl", cat: "bowls", price: 16.90, desc: "Juicy grilled chicken thighs marinated in signature sauce, topped with melted cheese & cream served with Arabian styled Rice.", img: "/images/grilled_cheesy_chicken_rice_bowl.png", tag: "Bowl", popular: true },
  { id: 12, name: "Grilled Lamb Rice Bowl", cat: "bowls", price: 18.90, desc: "Creamy tender and juicy grilled lamb marinated in signature sauce served with fresh salad and Arabian style rice with your choice of sauces.", img: "/images/grilled_lamb_rice_bowl.png", tag: "Bowl", popular: false },
  { id: 13, name: "Grilled Cheesy Lamb Rice Bowl", cat: "bowls", price: 19.90, desc: "Juicy grilled lamb marinated in signature sauce, topped with melted cheese & served with Arabian styled Rice with your choice of sauce.", img: "/images/grilled_cheesy_lamb_rice_bowl.png", tag: "Bowl", popular: true },

  // SALADS
  { id: 14, name: "Grilled Chicken  Salad", cat: "salads", price: 15.90, desc: "Creamy, tendered & juicy grilled chicken thighs marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice", img: "/images/Grilled Chicken Salad.png", tag: "Salad", popular: false },
  { id: 15, name: "Grilled Lamb Salad", cat: "salads", price: 17.90, desc: "Creamy, tendered & juicy grilled lamb marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice.", img: "/images/grilled lamb salad.png", tag: "Salad", popular: false },
  { id: 16, name: "Grilled Mixed Salad (Chicken & Lamb)", cat: "salads", price: 17.90, desc: "Creamy, tendered & juicy grilled Chicken & Lamb marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice.", img: "images/Grilled Mixed Salad (Chicken & Lamb).png"
, tag: "Salad", popular: false },
  { id: 17, name: "Chicken Tenders Salad", cat: "salads", price: 17.90, desc: "3 Pcs. Of Tendered and Crispy Chicken marinated in signature coating with hand picked spices. Comes with Cheese or Spicy variants.", img: "/images/chicken tenders salad.png", tag: "Salad", popular: false },

  // LOADED FRIES
  { id: 18, name: "Loaded Chicken Cheesy Fries", cat: "fries", price: 14.90, desc: "Creamy, tendered & juicy grilled chicken cutts with chips and signature sauces topped with Cheese.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format", tag: "Loaded Fries", popular: true },
  { id: 19, name: "Loaded Chicken Spicy Fries", cat: "fries", price: 14.90, desc: "Creamy, tendered & juicy grilled chicken cutts with chips and spicy sauces topped with jalopenos & olives.", img: "/images/loaded chicken spicy fries.png", tag: "Loaded Fries", popular: true },

  // CHICKEN TENDERS
  { id: 20, name: "3 Piece Crispy Chicken Tender Box", cat: "tenders", price: 12.90, desc: "3X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "/images/3 piece tender box.png", tag: "Tenders", popular: false },
  { id: 21, name: "5 Piece Crispy Chicken Tender Box", cat: "tenders", price: 16.90, desc: "5X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "/images/5 piece tender box.png", tag: "Tenders", popular: true },
  { id: 22, name: "8 Piece Crispy Chicken Tender Box", cat: "tenders", price: 16.90, desc: "8X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "/images/8 tenders box.png", tag: "Tenders", popular: true },

  
  // SIDES
{
  id: 23,
  name: "Fries - Small",
  cat: "sides",
  price: 4.99,
  desc: "Small serving of crispy golden fries.",
  img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format",
  tag: "Side",
  popular: false,
},
{
  id: 24,
  name: "Fries - Large",
  cat: "sides",
  price: 6.99,
  desc: "Large serving of crispy golden fries.",
  img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format",
  tag: "Side",
  popular: true,
},
{
  id: 25,
  name: "Arabian Rice",
  cat: "sides",
  price: 4.99,
  desc: "Fluffy Arabian-style seasoned rice.",
  img: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=600&q=80&auto=format",
  tag: "Side",
  popular: false,
},
{
  id: 26,
  name: "Soft Drink",
  cat: "sides",
  price: 2.50,
  desc: "Refreshing soft drink.",
  img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80&auto=format",
  tag: "Side",
  popular: false,
},
{
  id: 27,
  name: "Water",
  cat: "sides",
  price: 1.99,
  desc: "Still mineral water bottle.",
  img: "https://images.unsplash.com/photo-1564419320408-38e24e038739?w=600&q=80&auto=format",
  tag: "Side",
  popular: false,
},
{
  id: 28,
  name: "Hashbrown",
  cat: "sides",
  price: 6.99,
  desc: "Golden crispy hashbrown.",
  img: "/images/hash brown.png",
  tag: "Side",
  popular: false,
},
{
  id: 29,
  name: "Curly Fries",
  cat: "sides",
  price: 7.99,
  desc: "Seasoned crispy curly fries.",
  img: "/images/curly fries.png",
  tag: "Side",
  popular: true,
},
{
  id: 30,
  name: "Waffle Fries",
  cat: "sides",
  price: 6.99,
  desc: "Crunchy waffle-cut fries.",
  img: "/images/waffle fries.png",
  tag: "Side",
  popular: false,
},
{
  id: 31,
  name: "Onion Rings",
  cat: "sides",
  price: 7.99,
  desc: "Crispy battered onion rings.",
  img: "/images/onion rings.png",
  tag: "Side",
  popular: true,
},
// HOT DRINKS
{
  id: 32,
  name: "Karak Chai",
  cat: "hotdrinks",
  price: 3.99,
  desc: "Traditional strong Karak chai.",
  img: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=600&q=80&auto=format",
  tag: "Hot Drink",
  popular: true,
},
{
  id: 33,
  name: "Eliachi Tea",
  cat: "hotdrinks",
  price: 3.99,
  desc: "Cardamom-flavoured tea.",
  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format",
  tag: "Hot Drink",
  popular: false,
},
{
  id: 34,
  name: "Pista Tea",
  cat: "hotdrinks",
  price: 4.49,
  desc: "Creamy pista flavoured tea.",
  img: "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?w=600&q=80&auto=format",
  tag: "Hot Drink",
  popular: false,
},
{
  id: 35,
  name: "Chai Combo",
  cat: "hotdrinks",
  price: 5.99,
  desc: "1 Chai with regular chips.",
  img: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80&auto=format",
  tag: "Hot Drink",
  popular: true,
},
  // DRINKS
  // DRINKS
{
  id: 36,
  name: "Soft Drink 330ml",
  cat: "drinks",
  price: 2.50,
  desc: "330ml soft drink.",
  img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=600&q=80&auto=format",
  tag: "Drink",
  popular: false,
},
{
  id: 37,
  name: "Water Bottle",
  cat: "drinks",
  price: 2.00,
  desc: "500ml mineral water.",
  img: "https://images.unsplash.com/photo-1564419320408-38e24e038739?w=600&q=80&auto=format",
  tag: "Drink",
  popular: false,
},
{
  id: 38,
  name: "Drink 600ml",
  cat: "drinks",
  price: 4.50,
  desc: "600ml soft drink.",
  img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&auto=format",
  tag: "Drink",
  popular: true,
},
{
  id: 39,
  name: "Large Drink 1.5L",
  cat: "drinks",
  price: 6.00,
  desc: "1.5L family-size soft drink.",
  img: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=600&q=80&auto=format",
  tag: "Drink",
  popular: false,
},

// COMBOS
{
  id: 40,
  name: "Combo 1",
  cat: "combos",
  price: 17.99,
  desc: "Any burger with regular chips + 330ml drink.",
  img: "/images/combo1.png",
  tag: "Combo",
  popular: true,
},
{
  id: 41,
  name: "Combo 2",
  cat: "combos",
  price: 24.99,
  desc: "1 Chicken burger, 1 Beef burger, 1 Regular chips, 1 Drink 330ml.",
  img: "/images/combo 2.png",
  tag: "Combo",
  popular: true,
},
{
  id: 42,
  name: "Combo 3",
  cat: "combos",
  price: 33.99,
  desc: "Any 3 burgers, 1 Large chips, 1 Drink 600ml.",
  img: "/images/combo 3.png",
  tag: "Combo",
  popular: true,
},
{
  id: 43,
  name: "Combo 4",
  cat: "combos",
  price: 47.99,
  desc: "2 Chicken burger, 2 Beef burger, 2 Large chips, 1 Large drink 1.5L.",
  img: "/images/combo 4.png",
  tag: "Combo",
  popular: true,
},
];

// Load from localStorage (admin updates) or use defaults
function getMenuData() {
  try {
    const saved = localStorage.getItem('smokd_menu');
    return saved ? JSON.parse(saved) : DEFAULT_MENU;
  } catch(e) {
    return DEFAULT_MENU;
  }
}

window.MENU_DATA = getMenuData();