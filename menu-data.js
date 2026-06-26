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
  { id: 7, name: "Grilled Chicken Burger", cat: "chicken", price: 13.99, desc: "Grilled Chicken Thighs & Cheese topped with signature sauce packed in a brioche bun", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&auto=format", tag: "Chicken Burger", popular: true },

  { id: 8, name: "Spicy Grilled Chicken Burger", cat: "chicken", price: 14.99, desc: "Grilled Chicken Thighs & Cheese topped with signature sauce packed in a brioche bun", img: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80&auto=format", tag: "Chicken Burger", popular: true },

  { id: 9, name: "Crispy Chicken Burger", cat: "chicken", price: 14.99, desc: "Crispy Chicken Fillets & Cheese topped signature sauce and lettuce packed in a brioche bun", img: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80&auto=format", tag: "Chicken Burger", popular: false },

  // BOWLS
  { id: 10, name: "Grilled Chicken Rice Bowl", cat: "bowls", price: 16.90, desc: "Creamy, tendered & juicy grilled chicken thighs marinated in signature sauce served with Arabian styled Rice and flavoury sauces of your choice", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format", tag: "Bowl", popular: true },
  { id: 11, name: "Grilled Cheesy Chicken Rice Bowl", cat: "bowls", price: 16.90, desc: "Juicy grilled chicken thighs marinated in signature sauce, topped with melted cheese & cream served with Arabian styled Rice.", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80&auto=format", tag: "Bowl", popular: true },
  { id: 12, name: "Grilled Lamb Rice Bowl", cat: "bowls", price: 18.90, desc: "Creamy tender and juicy grilled lamb marinated in signature sauce served with fresh salad and Arabian style rice with your choice of sauces.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format", tag: "Bowl", popular: false },
  { id: 13, name: "Grilled Cheesy Lamb Rice Bowl", cat: "bowls", price: 19.90, desc: "Juicy grilled lamb marinated in signature sauce, topped with melted cheese & served with Arabian styled Rice with your choice of sauce.", img: "https://images.unsplash.com/photo-1604909052743-94e838986d24?w=600&q=80&auto=format", tag: "Bowl", popular: true },

  // SALADS
  { id: 14, name: "Grilled Chicken  Salad", cat: "salads", price: 15.90, desc: "Creamy, tendered & juicy grilled chicken thighs marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice", img: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=600&q=80&auto=format", tag: "Salad", popular: false },
  { id: 15, name: "Grilled Lamb Salad", cat: "salads", price: 17.90, desc: "Creamy, tendered & juicy grilled lamb marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format", tag: "Salad", popular: false },
  { id: 16, name: "Grilled Mixed Salad (Chicken & Lamb)", cat: "salads", price: 17.90, desc: "Creamy, tendered & juicy grilled Chicken & Lamb marinated in signature sauce served with Fresh Salad and flavoury sauces of your choice.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format", tag: "Salad", popular: false },
  { id: 17, name: "Chicken Tenders Salad", cat: "salads", price: 17.90, desc: "3 Pcs. Of Tendered and Crispy Chicken marinated in signature coating with hand picked spices. Comes with Cheese or Spicy variants.", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80&auto=format", tag: "Salad", popular: false },

  // LOADED FRIES
  { id: 18, name: "Loaded Chicken Cheesy Fries", cat: "fries", price: 14.90, desc: "Creamy, tendered & juicy grilled chicken cutts with chips and signature sauces topped with Cheese.", img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80&auto=format", tag: "Loaded Fries", popular: true },
  { id: 19, name: "Loaded Chicken Spicy Fries", cat: "fries", price: 14.90, desc: "Creamy, tendered & juicy grilled chicken cutts with chips and spicy sauces topped with jalopenos & olives.", img: "https://images.unsplash.com/photo-1585109649139-366815a0d713?w=600&q=80&auto=format", tag: "Loaded Fries", popular: true },

  // CHICKEN TENDERS
  { id: 17, name: "3 Piece Crispy Chicken Tender Box", cat: "tenders", price: 12.90, desc: "3X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format", tag: "Tenders", popular: false },
  { id: 18, name: "5 Piece Crispy Chicken Tender Box", cat: "tenders", price: 16.90, desc: "5X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format", tag: "Tenders", popular: true },
  { id: 19, name: "8 Piece Crispy Chicken Tender Box", cat: "tenders", price: 16.90, desc: "8X Crispy Chicken Strips coated with signature seasoning and cooked with perfection, served with Chips.", img: "https://images.unsplash.com/photo-1562802378-063ec186a863?w=600&q=80&auto=format", tag: "Tenders", popular: true },

  // SIDES
  { id: 19, name: "Fries", cat: "sides", price: 4.90, desc: "Classic crispy golden fries, sea salt, tomato sauce on the side.", img: "https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?w=600&q=80&auto=format", tag: "Side", popular: false },
  { id: 20, name: "Waffle Fries", cat: "sides", price: 5.90, desc: "Extra crispy waffle-cut fries, seasoned, served with smoky dip.", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80&auto=format", tag: "Side", popular: false },
  { id: 21, name: "Hashbrown", cat: "sides", price: 3.90, desc: "Golden crispy hashbrown patty — the perfect add-on.", img: "https://images.unsplash.com/photo-1543352634-99a5d50ae78e?w=600&q=80&auto=format", tag: "Side", popular: false },

  // DRINKS
  { id: 22, name: "Coca-Cola", cat: "drinks", price: 3.50, desc: "Ice-cold Coca-Cola, 355ml can.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&auto=format", tag: "Drink", popular: false },
  { id: 23, name: "Sprite", cat: "drinks", price: 3.50, desc: "Refreshing Sprite, 355ml can.", img: "https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?w=600&q=80&auto=format", tag: "Drink", popular: false },
  { id: 24, name: "Fanta Orange", cat: "drinks", price: 3.50, desc: "Fanta Orange, 355ml can.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&auto=format", tag: "Drink", popular: false },
  { id: 25, name: "Water", cat: "drinks", price: 2.50, desc: "Still mineral water, 500ml bottle.", img: "https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80&auto=format", tag: "Drink", popular: false },
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