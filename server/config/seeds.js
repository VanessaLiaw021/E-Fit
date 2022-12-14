const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: 'All' },
    { name: 'Women\'s Apparel' },
    { name: 'Men\'s Apparel' },
    { name: 'Equipment' },
    { name: 'Accessories' }
  ]);

  console.log('categories seeded');

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Oversized Fleece Hoodie',
      description:
        'this Oversized Fleece Hoodie will provide all your hoodie needs with a laid back, confident look.',
      image: 'womens-fleece-hoodie.jpeg',
      category: categories[1]._id,
      price: 59.99,
      quantity: 40,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Sports Bra',
      description:
        'this Sports Bra will provide support and breathability during your workout.',
      image: 'womens-sports-bra.webp',
      category: categories[1]._id,
      price: 30.99,
      quantity: 50,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Bike Shorts',
      category: categories[1]._id,
      description:
        'these Bike Shorts are strecthy, soft, and squat-proof. ',
      image: 'womens-bike-shorts.webp',
      price: 26.99,
      quantity: 20,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Crop Top',
      category: categories[1]._id,
      description:
        'this Crop Top is a soft breathable material designed to keep you feeling dry and comfortable during your workout.',
      image: 'womens-crop-top.webp',
      price: 24.99,
      quantity: 25,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Leggings',
      category: categories[1]._id,
      description:
        'these Leggings are a popular choice for someone looking for flexible lightweight fit.',
      image: 'leggings.webp',
      price: 39.99,
      quantity: 50,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Tanktop',
      category: categories[1]._id,
      description:
        'this Tanktop is a staple for a summer workout.',
      image: 'womens-tanktop.webp',
      price: 17.99,
      quantity: 15,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Blue Gym Shorts',
      category: categories[2]._id,
      description:
        'these Blue Gym Shorts are lightweight providing ample maneuverability.',
      image: 'Blue-gym-shorts.webp',
      price: 20.99,
      quantity: 20,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Yellow Fleece Hoodie',
      category: categories[2]._id,
      description:
        'this Yellow Fleece Hoodie is heavier outerwear with a color that pops.',
      image: 'Yellow-Fleece-hoodie.webp',
      price: 34.99,
      quantity: 30,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Pullover Hoodie',
      category: categories[2]._id,
      description:
        'this Pullover Hoodie is a great option for outdoor sportswear during colder weather.',
      image: 'pullover-hoodie.webp',
      price: 37.99,
      quantity: 25,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Joggers',
      category: categories[2]._id,
      description:
        'these Joggers are comfortable and classic! providing you with style and comfort during your workout.',
      image: 'mens-joggers.webp',
      price: 25.99,
      quantity: 40,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'No Show Socks',
      category: categories[2]._id,
      description:
        'these No Show Socks will keep your feet covered but not to much.',
      image: 'noshow-socks.jpg',
      price: 10.99,
      quantity: 60,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Sleeveless Top',
      category: categories[2]._id,
      description:
        'this Sleeveless Top is a lightweight tanktop with air-activation cooling technology',
      image: 'mens-sleeveless-top.webp',
      price: 19.99,
      quantity: 50,
      size: ['S', 'M', 'L', 'XL']
    },
    {
      name: 'Weight Bench',
      category: categories[3]._id,
      description:
        'this Weight Bench will provide you with comfort and adjustability to get the most from your workout.',
      image: 'Weight-bench.jpeg',
      price: 70.99,
      quantity: 15
    },
    {
      name: 'Adjustable Dumbells',
      category: categories[3]._id,
      description:
        'this Adjustable Dumbells can increase or decrease the desired weight depending on current workout or person using the dumbells.',
      image: 'Adjustable-Dumbells.jpeg',
      price: 299.99,
      quantity: 20
    },
    {
      name: 'Resistance Bands',
      category: categories[3]._id,
      description: 'these Resistance Bands are used for general exercise, stretching, strength training, power weight programs',
      image: 'Resistance-Bands.webp',
      price: 30.99,
      quantity: 50
    },
    {
      name: 'Weighted Jump Rope',
      category: categories[3]._id,
      description: 'this Weighted Jump Rope is designed for building strength and increased muscle activation.',
      image: 'Weighted-Jumprope.jpeg',
      price: 19.99,
      quantity: 40
    },
    {
      name: 'Cycling Bike',
      category: categories[3]._id,
      description: 'this Cycling Bike will increase your biking capability dramatically.',
      image: 'Cycling-Bike.jpeg',
      price: 799.99,
      quantity: 5
    },
    {
      name: 'Punching Bag',
      category: categories[3]._id,
      description: 'this Punching Bag is a game changer for your at home workout.',
      image: 'Punching-Bag.webp',
      price: 279.99,
      quantity: 10
    },
    {
      name: 'Steel Water Bottle',
      category: categories[4]._id,
      description:
        'this Steel Water Bottle will keep your water cold for a long period of time.',
      image: 'Steel-Water-Bottle.webp',
      price: 11.99,
      quantity: 100
    },
    {
      name: 'Utility Duffel Bag',
      category: categories[4]._id,
      description:
        'this Utility Duffel Bag is an easy to carry and stylish duffel bag that will hold all you need for your workout.',
      image: 'utility-duffel-bag.jpeg',
      price: 50.99,
      quantity: 25
    },
    {
      name: 'Portable Fan',
      category: categories[4]._id,
      description:
        'this Portable Fan will provide you with nice cool air while your using a treadmill',
      image: 'Portable-fan.jpg',
      price: 9.99,
      quantity: 40
    },
    {
      name: 'Combat Gloves',
      category: categories[4]._id,
      description:
        'these Combat Gloves will provide your hands with padded protection.',
      image: 'combat-gloves.webp',
      price: 15.99,
      quantity: 20

    },
    {
      name: 'Mouthguard',
      category: categories[4]._id,
      description:
        'this Mouthguard will protect your mouth from getting damaged during boxing or other physical activites.',
      image: 'Mouthguard.jpeg',
      price: 7.99,
      quantity: 30
    },
    {
      name: 'Workout Mat',
      category: categories[4]._id,
      description:
        'this Workout Mat will provide you with comfort and support on the ground level.',
      image: 'Workout-Mat.jpeg',
      price: 40.99,
      quantity: 50
    }
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
