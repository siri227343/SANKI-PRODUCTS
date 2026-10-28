const products = [
  {
    name: 'Sanki Premium Basmati Rice',
    price: '₹420',
    pack: '5 kg',
    image: 'https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Groundnut Oil',
    price: '₹310',
    pack: '1 L',
    image: 'https://images.unsplash.com/photo-1474978528675-4a50b7f0d9f4?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Red Chilli Powder',
    price: '₹120',
    pack: '500 g',
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Turmeric Powder',
    price: '₹90',
    pack: '500 g',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Toor Dal',
    price: '₹180',
    pack: '1 kg',
    image: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Masoor Dal',
    price: '₹170',
    pack: '1 kg',
    image: 'https://images.unsplash.com/photo-1604908556857-0d0cfa0fcbc6?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Moong Dal',
    price: '₹165',
    pack: '1 kg',
    image: 'https://images.unsplash.com/photo-1582515073490-39981397c445?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Cumin Seeds',
    price: '₹140',
    pack: '500 g',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=900&q=80'
  },
  {
    name: 'Sanki Coriander Powder',
    price: '₹100',
    pack: '500 g',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=900&q=80'
  }
];

const phoneNumber = '918197404660';

const productList = document.getElementById('product-list');

products.forEach((product) => {
  const card = document.createElement('article');
  card.className = 'product-card';

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="content">
      <h3>${product.name}</h3>
      <p class="pack">Pack: ${product.pack}</p>
      <div class="price-row">
        <span class="price">${product.price}</span>
        <a href="https://wa.me/${phoneNumber}?text=Hi%20SANKI%20PRODUCTS%2C%20I%20want%20to%20order%20${encodeURIComponent(product.name)}" target="_blank" rel="noopener noreferrer" class="order-btn">Order</a>
      </div>
    </div>
  `;

  productList.appendChild(card);
});

const whatsappButton = document.getElementById('whatsapp-button');
if (whatsappButton) {
  whatsappButton.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent('Hello SANKI PRODUCTS, I would like to place an order.')}`;
}
