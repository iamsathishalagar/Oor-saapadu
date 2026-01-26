// Hotel Data for Tamil Nadu
let hotels = [
  {
    id: 1,
    name: "Annanagar Mess",
    area: "Anna Nagar",
    location: "Anna Nagar, Chennai",
    distance: 0.8,
    cuisine: "South Indian",
    rating: 4.5,
    reviews: 248,
    deliveryTime: "20-30 min",
    deliveryFee: 20,
    minPrice: 40,
    icon: "",
    menu: {
      breakfast: [
        { id: 1, name: "Idly & Sambar", price: 25, desc: "3 idlies with sambar" },
        { id: 2, name: "Dosa", price: 35, desc: "Crispy dosa with chutney" },
        { id: 3, name: "Puri & Curry", price: 40, desc: "Hot puri with curry" }
      ],
      lunch: [
        { id: 4, name: "Mini Meals", price: 80, desc: "Rice, sambar, curry" },
        { id: 5, name: "Curd Rice", price: 50, desc: "Fresh curd rice" },
        { id: 6, name: "Tamarind Rice", price: 45, desc: "Tangy tamarind rice" }
      ],
      snacks: [
        { id: 7, name: "Murukku", price: 20, desc: "Crispy murukku" },
        { id: 8, name: "Chikali", price: 15, desc: "Sweet chikali" }
      ],
      dinner: [
        { id: 9, name: "Roti & Curry", price: 60, desc: "2 rotis with curry" },
        { id: 10, name: "Rice Meals", price: 80, desc: "Evening special meals" }
      ]
    }
  },
  {
    id: 2,
    name: "Marina Biryani House",
    area: "Triplicane",
    location: "Triplicane, Chennai",
    distance: 1.2,
    cuisine: "Biryani",
    rating: 4.7,
    reviews: 512,
    deliveryTime: "30-40 min",
    deliveryFee: 40,
    minPrice: 90,
    icon: "🍛",
    menu: {
      breakfast: [
        { id: 11, name: "Parotta & Salna", price: 45, desc: "Soft parotta" },
        { id: 12, name: "Poori & Curry", price: 50, desc: "Hot poori" }
      ],
      lunch: [
        { id: 13, name: "Chicken Biryani", price: 150, desc: "Fragrant biryani" },
        { id: 14, name: "Veg Biryani", price: 110, desc: "Mixed vegetables" },
        { id: 15, name: "Mutton Biryani", price: 180, desc: "Premium mutton" }
      ],
      snacks: [
        { id: 16, name: "Biryani Bits", price: 60, desc: "Mini biryani" }
      ],
      dinner: [
        { id: 17, name: "Fish Fry", price: 120, desc: "Crispy fish" },
        { id: 18, name: "Prawn Biryani", price: 200, desc: "Seafood special" }
      ]
    }
  },
  {
    id: 3,
    name: "Kovai Canteen",
    area: "Saidapet",
    location: "Saidapet, Chennai",
    distance: 0.5,
    cuisine: "South Indian",
    rating: 4.4,
    reviews: 189,
    deliveryTime: "15-25 min",
    deliveryFee: 15,
    minPrice: 35,
    icon: "🥗",
    menu: {
      breakfast: [
        { id: 19, name: "Podi Dosa", price: 40, desc: "Spicy podi dosa" },
        { id: 20, name: "Masala Dosa", price: 50, desc: "Masala dosa" }
      ],
      lunch: [
        { id: 21, name: "Veg Meals", price: 85, desc: "Complete veg meals" },
        { id: 22, name: "Lemon Rice", price: 40, desc: "Tangy lemon rice" },
        { id: 23, name: "Coconut Rice", price: 45, desc: "Coconut flavored rice" }
      ],
      snacks: [
        { id: 24, name: "Vadai", price: 15, desc: "Crispy vadai" },
        { id: 25, name: "Chow Mein", price: 50, desc: "Fried chow mein" }
      ],
      dinner: [
        { id: 26, name: "Chapathi Meals", price: 75, desc: "Chapathi with curry" }
      ]
    }
  },
  {
    id: 4,
    name: "Saravana Bhavan",
    area: "T.Nagar",
    location: "T.Nagar, Chennai",
    distance: 1.5,
    cuisine: "South Indian",
    rating: 4.6,
    reviews: 420,
    deliveryTime: "25-35 min",
    deliveryFee: 30,
    minPrice: 50,
    icon: "🍲",
    menu: {
      breakfast: [
        { id: 27, name: "Appam & Curry", price: 35, desc: "Soft appam" },
        { id: 28, name: "Uttapam", price: 40, desc: "Thick savory pancake" }
      ],
      lunch: [
        { id: 29, name: "Full Meals", price: 100, desc: "Complete meals" },
        { id: 30, name: "Sambar Rice", price: 45, desc: "Rice with sambar" }
      ],
      snacks: [
        { id: 31, name: "Bonda", price: 20, desc: "Hot bonda" }
      ],
      dinner: [
        { id: 32, name: "Dosa & Curry", price: 60, desc: "Dinner special" }
      ]
    }
  },
  {
    id: 5,
    name: "Guindy Mess",
    area: "Guindy",
    location: "Guindy, Chennai",
    distance: 2.0,
    cuisine: "North Indian",
    rating: 4.3,
    reviews: 156,
    deliveryTime: "30-45 min",
    deliveryFee: 35,
    minPrice: 60,
    icon: "🥘",
    menu: {
      breakfast: [
        { id: 33, name: "Chole Bhature", price: 60, desc: "North Indian" },
        { id: 34, name: "Aloo Paratha", price: 50, desc: "Stuffed paratha" }
      ],
      lunch: [
        { id: 35, name: "Butter Chicken", price: 150, desc: "Creamy butter chicken" },
        { id: 36, name: "Dal Makhani", price: 120, desc: "Creamy dal" }
      ],
      snacks: [
        { id: 37, name: "Samosa", price: 20, desc: "Crispy samosa" }
      ],
      dinner: [
        { id: 38, name: "Paneer Tikka", price: 130, desc: "Grilled paneer" }
      ]
    }
  }
];

// Orphanages Data
const orphanages = [
  { id: 1, name: "Smile Home", area: "Saidapet", contact: "9876543210" },
  { id: 2, name: "Hope Trust", area: "Guindy", contact: "9876543211" },
  { id: 3, name: "Little Hearts", area: "Anna Nagar", contact: "9876543212" },
  { id: 4, name: "Care For Kids", area: "Triplicane", contact: "9876543213" },
  { id: 5, name: "Rainbow Home", area: "T.Nagar", contact: "9876543214" }
];

// State Management
let cart = [];
let orders = [];
let hotelReviews = [];
let selectedCategory = 'breakfast';
let selectedHotel = null;
let favorites = [];
let loyaltyPoints = 0;
let userProfile = {
  name: '',
  email: '',
  phone: '',
  addresses: [],
  favoriteHotels: [],
  recentOrders: [],
  totalSpent: 0
};
let appliedPromo = null;

// Load hotels from admin panel
function loadHotelsFromAdmin() {
  try {
    const storedHotels = localStorage.getItem('adminHotels');
    if (storedHotels) {
      const parsed = JSON.parse(storedHotels);
      if (Array.isArray(parsed) && parsed.length > 0) {
        hotels = parsed;
      }
    }
  } catch (e) {
    console.error('Error loading hotels from admin:', e);
  }
}

// Load reviews from admin panel
function loadReviewsFromAdmin() {
  try {
    const storedReviews = localStorage.getItem('adminReviews');
    if (storedReviews) {
      const parsed = JSON.parse(storedReviews);
      hotelReviews = Array.isArray(parsed) ? parsed : [];
    } else {
      hotelReviews = [];
    }
  } catch (e) {
    console.error('Error loading reviews:', e);
    hotelReviews = [];
  }
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  loadHotelsFromAdmin();
  loadReviewsFromAdmin();
  loadUserProfile();
  loadFavorites();
  loadLoyaltyPoints();
  displayHotels(hotels);
  updateCartUI();
  displayOrders();
  populateDonationSelects();
  initializeTracking();
  displayQuickReorderSection();
  updateNotifications();

  // Listen for hotel updates from admin panel
  window.addEventListener('hotelsUpdated', () => {
    loadHotelsFromAdmin();
    loadReviewsFromAdmin();
    displayHotels(hotels);
    populateDonationSelects();
  });

  // Refresh active orders every 10 seconds
  setInterval(displayActiveOrders, 10000);
});

// Check for hotel updates periodically (every 5 seconds)
setInterval(() => {
  loadHotelsFromAdmin();
}, 5000);

// Scroll to Section
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Display Hotels
function displayHotels(hotelList) {
  const container = document.getElementById('hotelsList');
  container.innerHTML = hotelList.map(hotel => {
    const isFavorited = favorites.some(f => f.id === hotel.id);
    return `
    <div class="hotel-card" data-hotel-id="${hotel.id}" onclick="openHotelModal(${hotel.id})">
      <button class="fav-btn ${isFavorited ? 'favorited' : ''}" onclick="event.stopPropagation(); toggleFavorite(${hotel.id})" title="Add to favorites">
        ${isFavorited ? '❤️' : '🤍'}
      </button>
      <div class="hotel-image">
        ${hotel.imageUrl && hotel.imageUrl !== '🍲' ? `<img src="${hotel.imageUrl}" alt="${hotel.name}" onerror="this.parentElement.innerHTML='🍲'">` : (hotel.icon || '🍲')}
      </div>
      <div class="hotel-info">
        <div class="hotel-name">${hotel.name}</div>
        <div class="hotel-location">📍 ${hotel.area} • ${hotel.distance} km</div>
        <div class="hotel-rating">
          <span class="stars">★★★★★</span>
          <span class="rating-text">${hotel.rating} (${hotel.reviews})</span>
        </div>
        <div class="hotel-details">
          <span>🍽️ ${hotel.cuisine}</span>
          <span class="hotel-price">From ₹${hotel.minPrice}</span>
        </div>
        <div class="hotel-details" style="font-size: 12px;">
          <span>⏱️ ${hotel.deliveryTime}</span>
          <span>🚚 ₹${hotel.deliveryFee} delivery</span>
        </div>
        <div class="hotel-actions">
          <button class="view-menu-btn" onclick="event.stopPropagation(); openHotelModal(${hotel.id})">View Menu</button>
          <button class="book-table-btn" onclick="event.stopPropagation(); alert('Table booking coming soon!')">Book Table</button>
        </div>
      </div>
    </div>
  `}).join('');
  updateFavoritesUI();
}

// Open Hotel Modal
function openHotelModal(hotelId) {
  selectedHotel = hotels.find(h => h.id === hotelId);
  if (!selectedHotel) return;

  document.getElementById('modalHotelName').textContent = selectedHotel.name;
  document.getElementById('modalHotelInfo').textContent = 
    `${selectedHotel.location} • ${selectedHotel.deliveryTime}`;

  const hotelImageContainer = document.getElementById('modalHotelImage');
  if (selectedHotel.imageUrl && selectedHotel.imageUrl !== '🍲') {
    hotelImageContainer.innerHTML = `<img src="${selectedHotel.imageUrl}" alt="${selectedHotel.name}" onerror="this.parentElement.innerHTML='🍲'">`;
  } else {
    hotelImageContainer.innerHTML = selectedHotel.icon || '🍲';
  }

  const ratingHtml = `
    <span>⭐ ${selectedHotel.rating} Rating</span>
    <span>👥 ${selectedHotel.reviews} Reviews</span>
    <span>🚚 ₹${selectedHotel.deliveryFee} Delivery Fee</span>
  `;
  document.getElementById('hotelRating').innerHTML = ratingHtml;

  showMenuCategory('breakfast');
  displayHotelReviews(hotelId);
  document.getElementById('hotelModal').classList.add('active');
}

// Close Hotel Modal
function closeHotelModal() {
  document.getElementById('hotelModal').classList.remove('active');
}

// Show Menu Category
function showMenuCategory(category) {
  selectedCategory = category;
  const buttons = document.querySelectorAll('.tab-btn');
  buttons.forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  if (!selectedHotel) return;
  const items = selectedHotel.menu[category] || [];
  
  const menuHtml = items.map(item => `
    <div class="menu-item">
      <div class="menu-item-name">${item.name}</div>
      <div class="menu-item-desc">${item.desc}</div>
      <div class="menu-item-price">₹${item.price}</div>
      <button class="add-to-cart-btn" onclick="addToCart(${selectedHotel.id}, ${item.id}, '${item.name}', ${item.price})">Add to Cart</button>
    </div>
  `).join('');

  document.getElementById('menuList').innerHTML = menuHtml;
}

// Add to Cart
function addToCart(hotelId, itemId, itemName, price) {
  const hotel = hotels.find(h => h.id === hotelId);
  const existingItem = cart.find(item => item.hotelId === hotelId && item.itemId === itemId);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      hotelId,
      itemId,
      itemName,
      price,
      quantity: 1,
      hotelName: hotel.name,
      deliveryFee: hotel.deliveryFee
    });
  }

  updateCartUI();
  alert(`✅ ${itemName} added to cart!`);
}

// Update Cart UI
function updateCartUI() {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  document.querySelector('.cart-count').textContent = cartCount;

  const cartItemsContainer = document.getElementById('cartItems');
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 0 : 0; // Will be set dynamically
  const promoDiscount = calculatePromoDiscount(subtotal);
  const total = Math.max(0, subtotal + deliveryFee - promoDiscount);

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p class="muted">Your cart is empty. Add items from hotels!</p>';
    document.getElementById('subtotal').textContent = '₹0';
    document.getElementById('deliveryFee').textContent = '₹0';
    document.getElementById('total').textContent = '₹0';
    return;
  }

  cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-details">
        <div class="cart-item-name">${item.itemName}</div>
        <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
      </div>
      <div class="quantity-control">
        <button onclick="decreaseQuantity(${index})">−</button>
        <span>${item.quantity}</span>
        <button onclick="increaseQuantity(${index})">+</button>
      </div>
      <button class="remove-item-btn" onclick="removeFromCart(${index})">Remove</button>
    </div>
  `).join('');

  // Update checkout display
  document.getElementById('subtotal').textContent = `₹${subtotal}`;
  document.getElementById('deliveryFee').textContent = `₹${deliveryFee}`;
  document.getElementById('checkoutSubtotal').textContent = subtotal;
  
  if (appliedPromo) {
    document.getElementById('promoDiscountRow').style.display = 'flex';
    document.getElementById('promoDiscount').textContent = promoDiscount;
    document.getElementById('removePromoBtn').style.display = 'block';
    document.getElementById('appliedPromoDisplay').style.display = 'block';
    document.getElementById('appliedPromoDisplay').innerHTML = 
      `✓ ${appliedPromo.code} applied: Save ₹${promoDiscount}`;
  } else {
    document.getElementById('promoDiscountRow').style.display = 'none';
    document.getElementById('removePromoBtn').style.display = 'none';
    document.getElementById('appliedPromoDisplay').style.display = 'none';
  }
  
  document.getElementById('total').textContent = `₹${Math.max(0, subtotal + deliveryFee)}`;
  document.getElementById('checkoutTotal').textContent = total;
}

// Quantity Controls
function increaseQuantity(index) {
  cart[index].quantity += 1;
  updateCartUI();
}

function decreaseQuantity(index) {
  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    removeFromCart(index);
  }
  updateCartUI();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    updateCartUI();
    toggleCart();
  }
}

// Toggle Cart Sidebar
function toggleCart() {
  document.getElementById('cartSidebar').classList.toggle('active');
}

// Proceed to Checkout
function proceedToCheckout() {
  if (cart.length === 0) {
    alert('Please add items to your cart first!');
    return;
  }
  document.getElementById('checkoutModal').classList.add('active');
  toggleCart();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModal').classList.remove('active');
}

// Place Order
function placeOrder(event) {
  event.preventDefault();

  const fullName = document.getElementById('fullName').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const paymentMethod = document.getElementById('paymentMethod').value;

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const deliveryFee = cart.length > 0 ? 0 : 0;
  const promoDiscount = calculatePromoDiscount(subtotal);
  const total = Math.max(0, subtotal + deliveryFee - promoDiscount);

  const order = {
    orderId: 'ORD-' + Date.now(),
    customerName: fullName,
    email,
    phone,
    address,
    paymentMethod,
    hotelName: cart[0]?.hotelName || 'Hotel',
    items: [...cart],
    subtotal,
    deliveryFee,
    promoApplied: appliedPromo?.code || null,
    promoDiscount,
    total,
    status: 'Pending',
    timestamp: new Date().toLocaleString()
  };

  orders.push(order);
  localStorage.setItem('orders', JSON.stringify(orders));

  // Add loyalty points (1 point per ₹10 spent)
  const pointsEarned = Math.floor(total / 10);
  addLoyaltyPoints(pointsEarned);

  closeCheckoutModal();
  document.getElementById('checkoutForm').reset();

  showConfirmation(order);

  cart = [];
  appliedPromo = null;
  updateCartUI();
  displayOrders();
}

// Show Confirmation
function showConfirmation(order) {
  document.getElementById('confirmationMessage').textContent = 
    `Your order from ${order.hotelName} has been placed! Order ID: ${order.orderId}`;

  const orderDetailsHTML = `
    <div class="order-detail-row">
      <span>Order ID:</span>
      <span>${order.orderId}</span>
    </div>
    <div class="order-detail-row">
      <span>Hotel:</span>
      <span>${order.hotelName}</span>
    </div>
    <div class="order-detail-row">
      <span>Customer:</span>
      <span>${order.customerName}</span>
    </div>
    <div class="order-detail-row">
      <span>Phone:</span>
      <span>${order.phone}</span>
    </div>
    <div class="order-detail-row">
      <span>Delivery:</span>
      <span>${order.address}</span>
    </div>
    <div class="order-detail-row">
      <span>Items:</span>
      <span>${order.items.length} items</span>
    </div>
    <div class="order-detail-row">
      <span>Subtotal:</span>
      <span>₹${order.subtotal}</span>
    </div>
    <div class="order-detail-row">
      <span>Delivery Fee:</span>
      <span>₹${order.deliveryFee}</span>
    </div>
    <div class="order-detail-row">
      <span><strong>Total:</strong></span>
      <span><strong>₹${order.total}</strong></span>
    </div>
  `;

  document.getElementById('orderDetails').innerHTML = orderDetailsHTML;
  document.getElementById('confirmationModal').classList.add('active');
}

function closeConfirmationModal() {
  document.getElementById('confirmationModal').classList.remove('active');
}

// Display Orders
function displayOrders() {
  const savedOrders = localStorage.getItem('orders');
  if (savedOrders) {
    orders = JSON.parse(savedOrders);
  }

  const container = document.getElementById('ordersList');

  if (orders.length === 0) {
    container.innerHTML = '<p class="muted">No orders yet. Start ordering from local hotels!</p>';
    return;
  }

  container.innerHTML = orders.reverse().map(order => `
    <div class="order-card">
      <div class="order-header">
        <span class="order-id">${order.orderId}</span>
        <span class="order-status ${order.status.toLowerCase()}">${order.status}</span>
      </div>
      <div style="margin-bottom: 10px;">
        <strong>${order.hotelName}</strong> • ${order.timestamp}
      </div>
      <div class="order-items">
        ${order.items.map(item => `
          <div class="order-item">
            <span>${item.itemName} × ${item.quantity}</span>
            <span>₹${item.price * item.quantity}</span>
          </div>
        `).join('')}
      </div>
      <div class="order-footer">
        <div>
          <p><strong>Delivered to:</strong> ${order.address}</p>
        </div>
        <div class="order-total">₹${order.total}</div>
      </div>
    </div>
  `).join('');
}

// Search Hotels
function searchHotels() {
  loadHotelsFromAdmin();
  const searchTerm = document.getElementById('searchInput').value.toLowerCase();
  const filtered = hotels.filter(h => 
    h.name.toLowerCase().includes(searchTerm) ||
    h.area.toLowerCase().includes(searchTerm) ||
    h.cuisine.toLowerCase().includes(searchTerm)
  );
  displayHotels(filtered.length > 0 ? filtered : hotels);
}

// Filter Hotels
function filterHotels() {
  loadHotelsFromAdmin();
  const area = document.getElementById('areaFilter').value;
  const cuisine = document.getElementById('typeFilter').value;

  let filtered = hotels;

  if (area) {
    filtered = filtered.filter(h => h.area === area);
  }

  if (cuisine) {
    filtered = filtered.filter(h => h.cuisine === cuisine);
  }

  displayHotels(filtered);
}

// Sort Hotels
function sortHotels() {
  loadHotelsFromAdmin();
  const sortBy = document.getElementById('sortFilter').value;
  let sorted = [...hotels];

  if (sortBy === 'rating') {
    sorted.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'price') {
    sorted.sort((a, b) => a.minPrice - b.minPrice);
  } else if (sortBy === 'distance') {
    sorted.sort((a, b) => a.distance - b.distance);
  } else if (sortBy === 'delivery') {
    sorted.sort((a, b) => {
      const timeA = parseInt(a.deliveryTime);
      const timeB = parseInt(b.deliveryTime);
      return timeA - timeB;
    });
  }

  displayHotels(sorted);
}

// Populate Donation Selects
function populateDonationSelects() {
  const hotelSel = document.getElementById('donateHotel');
  const orphanSel = document.getElementById('donateOrphanage');

  hotelSel.innerHTML += hotels
    .map(h => `<option value="${h.id}">${h.name} (${h.area})</option>`)
    .join('');

  orphanSel.innerHTML += orphanages
    .map(o => `<option value="${o.id}">${o.name} (${o.area})</option>`)
    .join('');
}

// Load Donation Menu
function loadDonationMenu() {
  const hotelId = document.getElementById('donateHotel').value;
  const hotel = hotels.find(h => h.id == hotelId);

  if (!hotel) {
    document.getElementById('donationItems').innerHTML = '<p class="muted">Select a hotel first</p>';
    return;
  }

  const allItems = [
    ...hotel.menu.breakfast,
    ...hotel.menu.lunch,
    ...hotel.menu.snacks,
    ...hotel.menu.dinner
  ];

  document.getElementById('donationItems').innerHTML = allItems
    .map(item => `
      <button type="button" class="donation-item-btn" onclick="selectDonationItem(this, '${item.name}', ${item.price})">
        ${item.name}<br><small>₹${item.price}</small>
      </button>
    `).join('');
}

let selectedDonationItem = null;
let selectedDonationPrice = 0;

function selectDonationItem(btn, itemName, price) {
  document.querySelectorAll('.donation-item-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
  selectedDonationItem = itemName;
  selectedDonationPrice = price;
  updateDonationSummary();
}

function updateDonationSummary() {
  const qty = document.getElementById('donateQty').value;
  const cost = selectedDonationPrice * qty;
  document.getElementById('donationMealCount').textContent = qty;
  document.getElementById('donationCost').textContent = cost;
}

// Submit Donation
function submitDonation(event) {
  event.preventDefault();

  if (!selectedDonationItem) {
    alert('Please select a food item!');
    return;
  }

  const hotelId = document.getElementById('donateHotel').value;
  const orphanageId = document.getElementById('donateOrphanage').value;
  const hotel = hotels.find(h => h.id == hotelId);
  const orphanage = orphanages.find(o => o.id == orphanageId);
  const qty = document.getElementById('donateQty').value;
  const donorName = document.getElementById('donateName').value;
  const donorPhone = document.getElementById('donatePhone').value;

  const cost = selectedDonationPrice * qty;

  const message = `🎁 *DONATION CONFIRMATION* 🎁

Donor: ${donorName}
Contact: ${donorPhone}

🍽️ Food Details:
Hotel: ${hotel.name} (${hotel.area})
Dish: ${selectedDonationItem}
Quantity: ${qty} meals
Total Cost: ₹${cost}

🏠 Orphanage:
Name: ${orphanage.name}
Area: ${orphanage.area}
Contact: ${orphanage.contact}

✅ Donation Status: CONFIRMED
📅 Date: ${new Date().toLocaleDateString()}
⏰ Time: ${new Date().toLocaleTimeString()}

Thank you for supporting local businesses and helping our community! ❤️

This is a proof of donation. Please share this with the orphanage.`;

  const encodedMessage = encodeURIComponent(message);
  const whatsappLink = `https://wa.me/?text=${encodedMessage}`;

  document.getElementById('donationConfirmMessage').textContent = 
    `✅ Donation message ready! Total cost: ₹${cost}`;
  document.getElementById('donationMessageBox').textContent = message;
  document.getElementById('whatsappLink').href = whatsappLink;

  document.getElementById('donationConfirmationModal').classList.add('active');
}

function closeDonationConfirmation() {
  document.getElementById('donationConfirmationModal').classList.remove('active');
  document.getElementById('checkoutForm').reset();
  selectedDonationItem = null;
}

// Track Order Functions
function trackOrder() {
  const orderId = document.getElementById('trackOrderId').value.trim();
  
  if (!orderId) {
    alert('Please enter an Order ID');
    return;
  }

  const order = orders.find(o => o.orderId === orderId);
  
  if (!order) {
    displayTrackError('Order not found. Please check your Order ID.');
    return;
  }

  displayOrderTracking(order);
}

function searchTrackOrder() {
  const input = document.getElementById('trackOrderId');
  if (input.value.length === 0) {
    document.getElementById('trackResult').innerHTML = '';
    displayActiveOrders();
    return;
  }

  const searchTerm = input.value.toLowerCase();
  const matching = orders.filter(o => 
    o.orderId.toLowerCase().includes(searchTerm)
  );

  if (matching.length === 0) {
    displayTrackError('No matching orders found');
  } else {
    displayOrderTracking(matching[0]);
  }
}

function displayTrackError(message) {
  document.getElementById('trackResult').innerHTML = `
    <div class="track-card">
      <div class="track-body" style="text-align: center; padding: 40px;">
        <p style="font-size: 16px; color: #e74c3c;">❌ ${message}</p>
        <p style="color: #999; margin-top: 10px;">Order IDs start with ORD- followed by numbers</p>
      </div>
    </div>
  `;
}

function displayOrderTracking(order) {
  // Generate order status
  const orderAge = getOrderAge(order.timestamp);
  const status = getOrderStatus(orderAge);
  const timeToDelivery = estimateDeliveryTime(status, order.deliveryFee);

  const trackCard = `
    <div class="track-card">
      <div class="track-header">
        <div class="track-order-info">
          <h3>${order.hotelName}</h3>
          <div class="track-order-id">Order ID: ${order.orderId}</div>
          <div class="track-hotel-name">${order.customerName} • ${order.phone}</div>
        </div>
        <div class="track-status-badge">
          <span class="status-label">Current Status</span>
          <span class="status-value">${status.label}</span>
        </div>
        <div class="track-time">
          <span class="track-time-label">Placed at</span>
          <span>${order.timestamp}</span>
          <div style="font-size: 12px; margin-top: 5px; opacity: 0.8;">
            ${timeToDelivery}
          </div>
        </div>
      </div>

      <div class="track-body">
        <div class="track-progress">
          <div class="progress-steps">
            ${generateProgressSteps(status.step)}
          </div>
        </div>

        <div class="track-details">
          <div class="detail-group">
            <h4>📍 Delivery Address</h4>
            <div class="detail-row">
              <span class="detail-value">${order.address}</span>
            </div>
          </div>
          <div class="detail-group">
            <h4>💳 Payment Method</h4>
            <div class="detail-row">
              <span class="detail-value">${capitalizeFirst(order.paymentMethod)}</span>
            </div>
          </div>
        </div>

        <div class="track-items">
          <h4>🍽️ Order Items</h4>
          <div class="track-item-list">
            ${order.items.map(item => `
              <div class="track-item">
                <div>
                  <div class="track-item-name">${item.itemName}</div>
                  <div class="track-item-qty">Qty: ${item.quantity}</div>
                </div>
                <div class="track-item-price">₹${item.price * item.quantity}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div class="track-footer">
          <div class="track-footer-left">
            <div>Subtotal: ₹${order.subtotal}</div>
            <div>Delivery Fee: ₹${order.deliveryFee}</div>
          </div>
          <div class="track-total">Total: ₹${order.total}</div>
        </div>

        <div class="track-actions">
          <button onclick="contactHotel('${order.phone}')">📞 Contact Hotel</button>
          <button onclick="contactDelivery('${order.phone}')">📱 Delivery Support</button>
        </div>
      </div>
    </div>
  `;

  document.getElementById('trackResult').innerHTML = trackCard;
}

function generateProgressSteps(currentStep) {
  const steps = [
    { step: 1, label: 'Order Placed', icon: '✓', time: 'Now' },
    { step: 2, label: 'Confirmed', icon: '👨‍🍳', time: '5 min' },
    { step: 3, label: 'Preparing', icon: '🍳', time: '15-20 min' },
    { step: 4, label: 'Delivering', icon: '🚚', time: '20-30 min' }
  ];

  return steps.map(s => {
    let stepClass = 'pending';
    if (s.step < currentStep) {
      stepClass = 'completed';
    } else if (s.step === currentStep) {
      stepClass = 'active';
    }

    return `
      <div class="progress-step ${stepClass}">
        <div class="step-circle">${s.icon}</div>
        <div class="step-label">${s.label}</div>
        <div class="step-time">${s.time}</div>
      </div>
    `;
  }).join('');
}

function getOrderAge(timestamp) {
  const orderTime = new Date(timestamp);
  const now = new Date();
  const minutes = Math.floor((now - orderTime) / 60000);
  return minutes;
}

function getOrderStatus(minutes) {
  if (minutes < 5) {
    return { step: 1, label: '✓ Order Placed' };
  } else if (minutes < 15) {
    return { step: 2, label: '👨‍🍳 Confirmed & Being Prepared' };
  } else if (minutes < 35) {
    return { step: 3, label: '🍳 Preparing Your Food' };
  } else {
    return { step: 4, label: '🚚 Out for Delivery' };
  }
}

function estimateDeliveryTime(status, deliveryFee) {
  if (status.step === 1) return 'Estimated Delivery: 25-35 min';
  if (status.step === 2) return 'Estimated Delivery: 20-30 min';
  if (status.step === 3) return 'Estimated Delivery: 15-20 min';
  return 'Arriving soon...';
}

function displayActiveOrders() {
  const activeOrders = orders.filter(o => {
    const age = getOrderAge(o.timestamp);
    return age < 60; // Orders less than 1 hour old
  });

  if (activeOrders.length === 0) {
    document.getElementById('activeOrdersList').innerHTML = `
      <div class="no-orders-message">
        <div class="no-orders-icon">📭</div>
        <p>No active orders at the moment</p>
      </div>
    `;
    return;
  }

  const html = `
    <h3>🔥 Your Active Orders</h3>
    ${activeOrders.map(order => {
      const status = getOrderStatus(getOrderAge(order.timestamp));
      return `
        <div class="active-order-card" onclick="trackOrderById('${order.orderId}')">
          <div class="active-order-info">
            <div class="active-order-id">${order.orderId}</div>
            <div class="active-order-hotel">${order.hotelName}</div>
          </div>
          <div class="active-order-status">
            <span class="status-dot"></span>
            <span>${status.label}</span>
          </div>
        </div>
      `;
    }).join('')}
  `;

  document.getElementById('activeOrdersList').innerHTML = html;
}

function trackOrderById(orderId) {
  document.getElementById('trackOrderId').value = orderId;
  trackOrder();
}

function contactHotel(phone) {
  const message = 'Hi, I have a query about my order. Can you please help?';
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank');
}

function contactDelivery(phone) {
  const message = 'Hi, I need help with my delivery. Can you track my order?';
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/919876543210?text=${encoded}`, '_blank');
}

function goToTrackOrder() {
  closeConfirmationModal();
  const trackSection = document.getElementById('track');
  if (trackSection) {
    trackSection.scrollIntoView({ behavior: 'smooth' });
    setTimeout(() => {
      if (orders.length > 0) {
        const lastOrder = orders[orders.length - 1];
        document.getElementById('trackOrderId').value = lastOrder.orderId;
        trackOrder();
      }
    }, 500);
  }
}

function capitalizeFirst(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// ====== REVIEW FUNCTIONS ======
function displayHotelReviews(hotelId) {
  const hotelReviewsList = hotelReviews.filter(r => r.hotelId === hotelId);
  const container = document.getElementById('hotelReviewsList');
  
  if (!container) return;
  
  if (hotelReviewsList.length === 0) {
    container.innerHTML = '<p class="muted">No reviews yet. Be the first to review!</p>';
    return;
  }

  container.innerHTML = hotelReviewsList.map(review => `
    <div class="review-item">
      <div class="review-header">
        <strong>${review.customerName}</strong>
        <span class="review-rating">${'⭐'.repeat(review.rating)}</span>
      </div>
      <p class="review-comment">${review.comment}</p>
      <small class="review-date">${new Date(review.date).toLocaleDateString()}</small>
    </div>
  `).join('');
}

function submitHotelReview(hotelId) {
  const reviewerName = prompt('Enter your name:');
  if (!reviewerName) return;
  
  const rating = prompt('Rate this hotel (1-5 stars):', '5');
  if (!rating || rating < 1 || rating > 5) {
    alert('Please enter a valid rating between 1-5');
    return;
  }
  
  const comment = prompt('Write your review:');
  if (!comment) return;

  const review = {
    id: `review-${Date.now()}`,
    hotelId: hotelId,
    hotelName: selectedHotel?.name || 'Hotel',
    customerName: reviewerName,
    rating: parseInt(rating),
    comment: comment,
    date: new Date().toLocaleString()
  };

  hotelReviews.push(review);
  localStorage.setItem('adminReviews', JSON.stringify(hotelReviews));
  
  // Notify admin panel
  try {
    const event = new Event('reviewSubmitted');
    window.dispatchEvent(event);
  } catch (e) {
    console.error('Error notifying admin:', e);
  }
  
  displayHotelReviews(hotelId);
  alert('✅ Thank you for your review!');
}

// ====== USER PROFILE & PREFERENCES ======
function loadUserProfile() {
  try {
    const stored = localStorage.getItem('userProfile');
    if (stored) {
      userProfile = JSON.parse(stored);
    }
  } catch (e) {
    console.error('Error loading profile:', e);
  }
}

function saveUserProfile() {
  localStorage.setItem('userProfile', JSON.stringify(userProfile));
}

function loadFavorites() {
  try {
    const stored = localStorage.getItem('userFavorites');
    favorites = stored ? JSON.parse(stored) : [];
  } catch (e) {
    favorites = [];
  }
}

function saveFavorites() {
  localStorage.setItem('userFavorites', JSON.stringify(favorites));
}

function toggleFavorite(hotelId) {
  const hotelName = hotels.find(h => h.id === hotelId)?.name;
  const index = favorites.findIndex(fav => fav.id === hotelId);
  
  if (index > -1) {
    favorites.splice(index, 1);
    alert(`Removed from favorites`);
  } else {
    favorites.push({ id: hotelId, name: hotelName, addedDate: new Date().toISOString() });
    alert(`Added to favorites`);
  }
  saveFavorites();
  updateFavoritesUI();
}

function updateFavoritesUI() {
  const cards = document.querySelectorAll('.hotel-card');
  cards.forEach(card => {
    const hotelId = parseInt(card.dataset.hotelId);
    const favBtn = card.querySelector('.fav-btn');
    if (favBtn) {
      favBtn.classList.toggle('favorited', favorites.some(f => f.id === hotelId));
    }
  });
}

function displayFavorites() {
  const favHotels = hotels.filter(h => favorites.some(f => f.id === h.id));
  displayHotels(favHotels);
}

// ====== LOYALTY POINTS ======
function loadLoyaltyPoints() {
  try {
    loyaltyPoints = parseInt(localStorage.getItem('loyaltyPoints')) || 0;
  } catch (e) {
    loyaltyPoints = 0;
  }
}

function saveLoyaltyPoints() {
  localStorage.setItem('loyaltyPoints', loyaltyPoints);
}

function addLoyaltyPoints(amount) {
  loyaltyPoints += amount;
  saveLoyaltyPoints();
  updateLoyaltyDisplay();
}

function updateLoyaltyDisplay() {
  const loyaltyEl = document.getElementById('loyaltyPoints');
  if (loyaltyEl) {
    loyaltyEl.textContent = loyaltyPoints;
  }
}

// ====== PROMO CODES ======
function applyPromoCode() {
  const code = prompt('Enter promo code:').toUpperCase();
  if (!code) return;

  try {
    const allCodes = JSON.parse(localStorage.getItem('adminPromoCodes')) || [];
    const promo = allCodes.find(p => p.code === code && p.active);
    
    if (!promo) {
      alert('Invalid or expired promo code');
      return;
    }

    if (new Date(promo.expiryDate) < new Date()) {
      alert('Promo code has expired');
      return;
    }

    appliedPromo = promo;
    alert(`✓ Promo "${code}" applied! ${promo.discountType === 'percentage' ? promo.discountValue + '%' : '₹' + promo.discountValue} off`);
    updateCartUI();
  } catch (e) {
    console.error('Error applying promo:', e);
  }
}

function calculatePromoDiscount(subtotal) {
  if (!appliedPromo) return 0;
  
  if (subtotal < appliedPromo.minOrderValue) {
    appliedPromo = null;
    alert(`Minimum order value of ₹${appliedPromo.minOrderValue} required for this promo`);
    return 0;
  }

  if (appliedPromo.discountType === 'percentage') {
    return Math.round((subtotal * appliedPromo.discountValue) / 100);
  } else {
    return appliedPromo.discountValue;
  }
}

function removePromoCode() {
  appliedPromo = null;
  updateCartUI();
}

// ====== QUICK REORDER ======
function displayQuickReorderSection() {
  const recentOrders = orders.slice(-3).reverse();
  if (recentOrders.length === 0) return;

  const section = document.createElement('div');
  section.id = 'quick-reorder';
  section.className = 'quick-reorder-section';
  section.innerHTML = `
    <h3>🔄 Quick Reorder</h3>
    <div class="quick-reorder-list">
      ${recentOrders.map(order => `
        <div class="quick-reorder-item">
          <div class="reorder-info">
            <p class="reorder-hotel">${order.hotelName}</p>
            <p class="reorder-items">${order.items.length} items</p>
            <p class="reorder-date">${new Date(order.timestamp).toLocaleDateString()}</p>
          </div>
          <button class="btn-reorder" onclick="quickReorder('${order.orderId}')">Reorder</button>
        </div>
      `).join('')}
    </div>
  `;

  const hotelSection = document.querySelector('.hotels-section');
  if (hotelSection) {
    hotelSection.insertAdjacentElement('beforebegin', section);
  }
}

function quickReorder(orderId) {
  const order = orders.find(o => o.orderId === orderId);
  if (!order) return;

  cart = [];
  order.items.forEach(item => {
    cart.push({
      hotelId: order.hotelName,
      itemId: item.id,
      itemName: item.name,
      price: item.price,
      quantity: item.quantity
    });
  });

  updateCartUI();
  alert('Items added to cart! Ready to checkout?');
  document.querySelector('.cart-sidebar').classList.add('active');
}

// ====== NOTIFICATIONS ======
function updateNotifications() {
  const activeOrders = orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled');
  const notifCount = activeOrders.length;
  
  const notifBadge = document.getElementById('notificationBadge');
  if (notifBadge) {
    notifBadge.textContent = notifCount;
    notifBadge.style.display = notifCount > 0 ? 'flex' : 'none';
  }
}

function showNotifications() {
  const activeOrders = orders.filter(o => o.status !== 'Delivered' && o.status !== 'Cancelled');
  
  if (activeOrders.length === 0) {
    alert('No active orders');
    return;
  }

  let notifText = '📬 Your Orders:\n\n';
  activeOrders.forEach(order => {
    notifText += `Order #${order.orderId} from ${order.hotelName}\nStatus: ${order.status}\n\n`;
  });
  
  alert(notifText);
}

// Initialize track orders on page load
function initializeTracking() {
  displayActiveOrders();
}