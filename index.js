import React, { useEffect, useState, createContext, useContext } from 'react';
import ReactDOM from 'react-dom/client';
import { Link, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './cart.js';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartno, setCartno] = useState([]);

 
  const addtocart = (item) => {
  console.log(item);
  if (!cartno.some(cartItem => cartItem.id === item.id)) {
    setCartno([...cartno, item]);
  }
};

  useEffect(() => {
  console.log("Cart contents:", cartno);
}, [cartno]);

 

  return (
   
    <CartContext.Provider value={{ cartno, addtocart,setCartno }}>
      {children}
    </CartContext.Provider>
  );
};

const Home = () => {
 
  const { cartno, addtocart } = useContext(CartContext);

  const foodItems = [
   
    { id: '1', name: 'Classic Cheeseburger', price: 12.99, imageUrl: 'https://placehold.co/400x300/FF5733/FFFFFF?text=Cheeseburger', description: 'A juicy beef patty with melted cheddar, fresh lettuce, tomato, and our special sauce.', },
    { id: '2', name: 'Spicy Chicken Tacos', price: 9.50, imageUrl: 'https://placehold.co/400x300/FFDEAD/FFFFFF?text=Lemon+Pie', description: 'Three soft tortillas filled with grilled spicy chicken, pico de gallo, and avocado crema.', },
    { id: '3', name: 'Vegetable Lasagna', price: 14.75, imageUrl: 'https://placehold.co/400x300/3357FF/FFFFFF?text=Lasagna', description: 'Layers of fresh pasta, rich tomato sauce, ricotta, mozzarella, and seasonal vegetables.', },
    { id: '4', name: 'Margherita Pizza', price: 11.00, imageUrl: 'https://placehold.co/400x300/FF33A1/FFFFFF?text=Pizza', description: 'Classic pizza with fresh mozzarella, basil, and San Marzano tomato sauce.', },
    { id: '5', name: 'Sushi Platter', price: 22.00, imageUrl: 'https://placehold.co/400x300/A133FF/FFFFFF?text=Sushi', description: 'Assortment of fresh nigiri and maki rolls, served with soy sauce and wasabi.', },
    { id: '6', name: 'Chocolate Lava Cake', price: 7.25, imageUrl: 'https://placehold.co/400x300/FFC133/FFFFFF?text=Dessert', description: 'Warm chocolate cake with a molten center, served with vanilla ice cream.', },
    { id: '7', name: 'Grilled Salmon', price: 18.50, imageUrl: 'https://placehold.co/400x300/6A5ACD/FFFFFF?text=Salmon', description: 'Perfectly grilled salmon fillet with asparagus and lemon-dill sauce.', },
    { id: '8', name: 'Chicken Caesar Salad', price: 10.25, imageUrl: 'https://placehold.co/400x300/87CEEB/FFFFFF?text=Salad', description: 'Crisp romaine lettuce, grilled chicken, croutons, parmesan, and Caesar dressing.', },
    { id: '9', name: 'Beef Stir-fry', price: 15.99, imageUrl: 'https://placehold.co/400x300/CD5C5C/FFFFFF?text=Stir-fry', description: 'Tender beef strips stir-fried with mixed vegetables and a savory soy glaze.', },
    { id: '10', name: 'Pancakes with Berries', price: 8.75, imageUrl: 'https://placehold.co/400x300/FFD700/FFFFFF?text=Pancakes', description: 'Fluffy pancakes served with fresh mixed berries and maple syrup.', },
    { id: '11', name: 'Shrimp Scampi', price: 17.00, imageUrl: 'https://placehold.co/400x300/BA55D3/FFFFFF?text=Scampi', description: 'Succulent shrimp sautéed in garlic butter sauce, served over linguine.', },
    { id: '12', name: 'Falafel Wrap', price: 9.00, imageUrl: 'https://placehold.co/400x300/7CFC00/FFFFFF?text=Falafel', description: 'Crispy falafel, hummus, fresh vegetables, and tahini sauce in a warm pita.', },
    { id: '13', name: 'Tomato Basil Soup', price: 6.50, imageUrl: 'https://placehold.co/400x300/FF6347/FFFFFF?text=Soup', description: 'Creamy tomato soup with fresh basil, perfect for a chilly day.', },
    { id: '14', name: 'Chicken Alfredo', price: 16.25, imageUrl: 'https://placehold.co/400x300/4682B4/FFFFFF?text=Alfredo', description: 'Fettuccine pasta tossed in a rich, creamy Alfredo sauce with grilled chicken.', },
    { id: '15', name: 'Mango Sticky Rice', price: 7.50, imageUrl: 'https://placehold.co/400x300/FF8C00/FFFFFF?text=Mango+Rice', description: 'Sweet sticky rice with fresh mango slices and a drizzle of coconut milk.', },
    { id: '16', name: 'BBQ Pulled Pork Sandwich', price: 11.50, imageUrl: 'https://placehold.co/400x300/A0522D/FFFFFF?text=Pulled+Pork', description: 'Slow-cooked pulled pork smothered in BBQ sauce, served on a brioche bun.', },
    { id: '17', name: 'Veggie Burger', price: 10.99, imageUrl: 'https://placehold.co/400x300/20B2AA/FFFFFF?text=Veggie+Burger', description: 'Plant-based patty with all the fixings, served on a whole wheat bun.', },
    { id: '18', name: 'Fish and Chips', price: 13.75, imageUrl: 'https://placehold.co/400x300/6495ED/FFFFFF?text=Fish+Chips', description: 'Crispy battered fish with golden French fries and tartar sauce.', },
    { id: '19', name: 'Greek Salad', price: 9.75, imageUrl: 'https://placehold.co/400x300/DAA520/FFFFFF?text=Greek+Salad', description: 'Fresh mixed greens, cucumbers, tomatoes, olives, feta cheese, and Greek dressing.', },
    { id: '20', name: 'New York Style Cheesecake', price: 6.99, imageUrl: 'https://placehold.co/400x300/D2B48C/FFFFFF?text=Cheesecake', description: 'Rich and creamy cheesecake with a graham cracker crust.', },
    { id: '21', name: 'Ramen Noodle Soup', price: 14.00, imageUrl: 'https://placehold.co/400x300/8B0000/FFFFFF?text=Ramen', description: 'Savory broth with noodles, pork belly, soft-boiled egg, and green onions.', },
    { id: '22', name: 'Breakfast Burrito', price: 8.00, imageUrl: 'https://placehold.co/400x300/FF4500/FFFFFF?text=Burrito', description: 'Scrambled eggs, cheese, potatoes, and your choice of sausage or bacon, wrapped in a tortilla.', },
    { id: '23', name: 'Chicken Wings', price: 10.50, imageUrl: 'https://placehold.co/400x300/4B0082/FFFFFF?text=Wings', description: 'Crispy chicken wings tossed in your favorite sauce: buffalo, BBQ, or lemon pepper.', },
    { id: '24', name: 'French Onion Soup', price: 7.00, imageUrl: 'https://placehold.co/400x300/DDA0DD/FFFFFF?text=Onion+Soup', description: 'Rich beef broth with caramelized onions, topped with a crouton and melted Gruyère cheese.', },
    { id: '25', name: 'Tuna Melt Sandwich', price: 9.25, imageUrl: 'https://placehold.co/400x300/BDB76B/FFFFFF?text=Tuna+Melt', description: 'Classic tuna salad with melted cheddar cheese on toasted sourdough bread.', },
    { id: '26', name: 'Pad Thai', price: 15.50, imageUrl: 'https://placehold.co/400x300/F0E68C/FFFFFF?text=Pad+Thai', description: 'Stir-fried rice noodles with shrimp or chicken, peanuts, bean sprouts, and lime.', },
    { id: '27', name: 'Apple Pie', price: 6.00, imageUrl: 'https://placehold.co/400x300/CD853F/FFFFFF?text=Apple+Pie', description: 'Warm apple pie with a flaky crust, served à la mode.', },
    { id: '28', name: 'Club Sandwich', price: 11.75, imageUrl: 'https://placehold.co/400x300/808000/FFFFFF?text=Club+Sandwich', description: 'Triple-decker sandwich with turkey, bacon, lettuce, tomato, and mayo.', },
    { id: '29', name: 'Mushroom Risotto', price: 16.00, imageUrl: 'https://placehold.co/400x300/556B2F/FFFFFF?text=Risotto', description: 'Creamy Arborio rice cooked with wild mushrooms and parmesan cheese.', },
    { id: '30', name: 'Lemon Meringue Pie', price: 7.00, imageUrl: 'https://placehold.co/400x300/FFDEAD/FFFFFF?text=Lemon+Pie', description: 'Tangy lemon filling topped with fluffy toasted meringue.', },
  ];

  function handlecart(e) {
   console.log(e);
    addtocart(e);
  }

  return (
    <div className="shooping-veg-homepage">
      <div className="nav">
       <div className='logo-name'>
        <p className='appname'>Groc-APP</p>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa_-TxedRCMTqgKJffPsVKLzUVTMZgneLsYg&s' className="logo" alt="Logo"/>
        </div>

       <div className='navbar'>
        <h1>Home</h1>
        <h1>Explore</h1>
        <input className='searchbar' type='text' placeholder='🔍 Search for a new-item' ></input>
        <h1 className='cart' >
          <Link to="/cart" style={{ color: 'inherit', textDecoration: 'none' }}>
            <span className='cart-items'>{cartno.length}</span>cart🛒 
          </Link>
        </h1>
        </div>
      </div>
      <div className="grocery-section">
        <div className="grocery-items">
          <img className='img-1' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/pharmacy-WEB.jpg' alt="Pharmacy"></img>
          <img className='img-2' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-07/Pet-Care_WEB.jpg' alt="Pet Care"></img>
          <img className='img-3' src='https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=720/layout-engine/2023-03/babycare-WEB.jpg' alt="Baby Care"></img>
        </div>
      </div>
        <div className="r-items">
            <h1 className='daily'>Daily Groceries</h1>
            <div className='cards'>
              {
                foodItems.map((item,id)=>{
                  return (
                    <div className='card' key={id}> 
                      <img className='item-img' src={item.imageUrl} alt={item.name}></img>
                      <h1 className='item-name'>{item.name}</h1>
                      <div className='bottom'>
                        <h1 className='money'>₹ {item.price}</h1>
                      <button className='add' onClick={()=> handlecart(item)}> 
  ADD<span> +</span>
</button>

                      </div>
                    </div>
                  )
                })
              }
            </div>
        </div>
    </div>
  );
};

const approuter = createBrowserRouter([
    {
      path:"",
      element:<Home />
    },
    {
      path:"/cart",
      element:<Cart />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <CartProvider>
    <RouterProvider router={approuter} />
  </CartProvider>
);
