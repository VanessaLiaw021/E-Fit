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
        'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
      image: '/images/womens-fleece-hoodie.jpeg',
      category: categories[0]._id || categories[1]._id,
      price: 2.99,
      quantity: 500
    },
    {
      name: 'Sports Bra',
      description:
        'Praesent sed lacinia mauris. Nulla congue nibh magna, at feugiat nunc scelerisque quis. Donec iaculis rutrum vulputate. Suspendisse lectus sem, vulputate ac lectus sed, placerat consequat dui.',
      image: '/images/womens-sports-bra.webp',
      category: categories[0]._id || categories[1]._id,
      price: 1.99,
      quantity: 500
    },
    {
      name: 'Bike Shorts',
      category: categories[0]._id || categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/womens-bike-shorts.webp',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Crop Top',
      category: categories[0]._id || categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/womens-crop-top.webp',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Training Bra',
      category: categories[0]._id || categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/Training-Bra.webp',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Tanktop',
      category: categories[0]._id || categories[1]._id,
      description:
        'Donec volutpat erat erat, sit amet gravida justo sodales in. Phasellus tempus euismod urna. Proin ultrices nisi ut ipsum congue, vitae porttitor libero suscipit. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam lacinia a nisi non congue.',
      image: '/images/womens-tanktop.webp',
      price: 7.99,
      quantity: 20
    },
    {
      name: 'Blue Gym Shorts',
      category: categories[0]._id || categories[2]._id,
      description:
        'Praesent placerat, odio vel euismod venenatis, lectus arcu laoreet felis, et fringilla sapien turpis vestibulum nisl.',
      image: '/images/Blue-gym-shorts.webp',
      price: 3.99,
      quantity: 50
    },
    {
      name: 'Yellow Fleece Hoodie',
      category: categories[0]._id || categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '/images/Yellow-Fleece-hoodie.webp',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Pullover Hoodie',
      category: categories[0]._id || categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '/images/pullover-hoodie.webp',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'Joggers',
      category: categories[0]._id || categories[2]._id,
      description:
        'Vivamus ut turpis in purus pretium mollis. Donec turpis odio, semper vel interdum ut, vulputate at ex. Duis dignissim nisi vel tortor imperdiet finibus. Aenean aliquam sagittis rutrum.',
      image: '/images/mens-joggers.webp',
      price: 14.99,
      quantity: 100
    },
    {
      name: 'No Show Socks',
      category: categories[0]._id || categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '/images/noshow-socks.jpg',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Sleeveless Top',
      category: categories[0]._id || categories[2]._id,
      description:
        'Vestibulum risus metus, luctus non tortor quis, tincidunt consectetur ex. Nullam vitae lobortis ligula, ut sagittis massa. Curabitur consectetur, tellus at pulvinar venenatis, erat augue cursus erat, eu ullamcorper eros lectus ultrices ipsum. Integer rutrum, augue vitae auctor venenatis, turpis turpis elementum orci, at sagittis risus mi a leo.',
      image: '/images/mens-sleeveless-top.webp',
      price: 399.99,
      quantity: 30
    },
    {
      name: 'Weight Bench',
      category: categories[0]._id || categories[3]._id,
      description:
        'In sodales, ipsum quis ultricies porttitor, tellus urna aliquam arcu, eget venenatis purus ligula ut nisi. Fusce ut felis dolor. Mauris justo ante, aliquet non tempus in, tempus ac lorem. Aliquam lacinia dolor eu sem eleifend ultrices. Etiam mattis metus metus. Sed ligula dui, placerat non turpis vitae, suscipit volutpat elit. Phasellus sagittis, diam elementum suscipit fringilla, libero mauris scelerisque ex, ac interdum diam erat non sapien.',
      image: '/images/Weight-bench.jpeg',
      price: 199.99,
      quantity: 30
    },
    {
      name: 'Adjustable Dumbells',
      category: categories[0]._id || categories[3]._id,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ornare diam quis eleifend rutrum. Aliquam nulla est, volutpat non enim nec, pharetra gravida augue. Donec vitae dictum neque. Pellentesque arcu lorem, fringilla non ligula ac, tristique bibendum erat. Ut a semper nibh. Quisque a mi et mi tempor ultricies. Maecenas eu ipsum eu enim hendrerit accumsan at euismod urna.',
      image: '/images/Adjustable-Dumbells.jpeg',
      price: 9.99,
      quantity: 100
    },
    {
      name: 'Resistance Bands',
      category: categories[0]._id || categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '/images/Resistance-Bands.webp',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Weighted Jump Rope',
      category: categories[0]._id || categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '/images/Weighted-Jumprope.jpeg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Cycling Bike',
      category: categories[0]._id || categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '/images/Cycling-Bike.jpeg',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Punching Bag',
      category: categories[0]._id || categories[3]._id,
      description: 'Ut vulputate hendrerit nibh, a placerat elit cursus interdum.',
      image: '/images/Punching-Bag.webp',
      price: 1.99,
      quantity: 1000
    },
    {
      name: 'Steel Water Bottle',
      category: categories[0]._id || categories[4]._id,
      description:
        'Sed a mauris condimentum, elementum enim in, rhoncus dui. Phasellus lobortis leo odio, sit amet pharetra turpis porta quis.',
      image: '/images/Steel-Water-Bottle.webp',
      price: 2.99,
      quantity: 1000
    },
    {
      name: 'Utility Duffel Bag',
      category: categories[0]._id || categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '/images/utility-duffel-bag.jpeg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Portable Fan',
      category: categories[0]._id || categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '/images/Portable-fan.jpg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Combat Gloves',
      category: categories[0]._id || categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '/images/combat-gloves.webp',
      price: 25.99,
      quantity: 100
    },
    {
      name: 'Mouthguard',
      category: categories[0]._id || categories[4]._id,
      description:
        'Vestibulum et erat finibus erat suscipit vulputate sed vitae dui. Ut laoreet tellus sit amet justo bibendum ultrices. Donec vitae felis vestibulum, congue augue eu, finibus turpis.',
      image: '/images/Mouthguard.jpeg',
      price: 7.99,
      quantity: 100
    },
    {
      name: 'Workout Mat',
      category: categories[0]._id || categories[4]._id,
      description:
        'Morbi consectetur viverra urna, eu fringilla turpis faucibus sit amet. Suspendisse potenti. Donec at dui ac sapien eleifend hendrerit vel sit amet lectus.',
      image: '/images/Workout-Mat.jpeg',
      price: 9.99,
      quantity: 600
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
