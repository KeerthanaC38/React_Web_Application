// server.js




const express = require('express');
//const mongoose = require('mongoose');
// const { MongoClient } = require('mongodb');
const app = express();
const mysql = require('mysql2');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
app.use(cors());


let all_product= [
    {
        id: "Ring Chime Pro White Doorbell",
        name: "Ring Chime Pro White Doorbell",
        price: 59.99,
        image: 'p1',
        manufacturer: "Ring",
        category: "smartdoorbell",
        condition: "New",
        discount: 10.0,
        description: "Ring Chime Pro White Doorbell",
        warranty: "1 yr warranty",
        rebates: "1.2% on the total price",
        accessories: [
          {
            id: "Ring Spare Parts for Doorbell",
            name: "Ring Spare Parts for Doorbell",
            price: 1.99,
            image: 'p27',
            manufacturer: "Ring",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "Ring Spare Parts for Doorbell",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          },
          {
            id: "Ring Solar Panel for Doorbells",
            name: "Ring Solar Panel for Doorbells",
            price: 49.99,
            image: 'p26',
            manufacturer: "Ring",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "Ring Solar Panel for Doorbells",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          }
                
        ]
    },
    {
        id: "Ring Door Bell Bronze",
        name: "Ring Door Bell Bronze",
        price: 99.99,
        image: 'p2',
        manufacturer: "Ring",
        category: "smartdoorbell",
        condition: "New",
        discount: 10.0,
        description: "Ring Door Bell Bronze",
        warranty: "6 months warranty",
        rebates: "2% on the total price",
    },
    {
        id: "SimpliSafe - Pro Video Doorbell",
        name: "SimpliSafe - Pro Video Doorbell",
        price: 169.99,
        image: 'p3',
        manufacturer: "SimpliSafe",
        category: "smartdoorbell",
        condition: "New",
        discount: 10.0,
        description: "SimpliSafe - Pro Video Doorbell",
        warranty: "1 yr warranty",
        rebates: "0.6% on the total price",
        accessories: [
          {
            id: "SimpliSafe Doorbell Power Supply",
            name: "SimpliSafe Doorbell Power Supply",
            price: 29.99,
            image: 'p28',
            manufacturer: "SimpliSafe",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "SimpliSafe Doorbell Power Supply",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          },
          {
            id: "Wall Mount Compatible with SimpliSafe",
            name: "Wall Mount Compatible with SimpliSafe",
            price: 21.99,
            image: 'p31',
            manufacturer: "SimpliSafe",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "Wall Mount Compatible with SimpliSafe",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          }
        ]
    },
    {
        id: "SimpliSafe - Smart Lock Doorbell",
        name: "SimpliSafe - Smart Lock Doorbell",
        price: 159.99,
        image: 'p4',
        manufacturer: "SimpliSafe",
        category: "smartdoorbell",
        condition: "New",
        discount: 10.0,
        description: "SimpliSafe - Smart Lock Doorbell",
        warranty: "1 yr warranty",
        rebates: "2% on the total price",
        
    },
    {
        id: "Google - Nest Doorbell Wired",
        name: "Google - Nest Doorbell Wired",
        price: 249.99,
        image: 'p5',
        manufacturer: "Google",
        category: "smartdoorbell",
        condition: "New",
        discount: 10.0,
        description: "Google - Nest Doorbell Wired",
        warranty: "1 yr warranty",
        rebates: "2% on the total price",
        accessories: [
          {
            id: "Google Nest Doorbell Mount",
            name: "Google Nest Doorbell Mount",
            price: 9.99,
            image: 'p29',
            manufacturer: "Google",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "Google Nest Doorbell Mount",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          },
          {
            id: "Google Doorbell Case",
            name: "Google Doorbell Case",
            price: 3.99,
            image: 'p30',
            manufacturer: "Google",
            category: "accessory",
            condition: "New",
            discount: 40.0,
            description: "Google Doorbell Case",
            warranty: "1 yr warranty",
            rebates: "2% on the total price"
          }
        ]
    },
    {
      id: "Amazon Smart Speaker - Echo Dot",
      name: "Amazon Smart Speaker - Echo Dot",
      price: 49.99,
      image: 'p11',
      manufacturer: "Amazon",
      category: "smartspeaker",
      condition: "Used",
      discount: 20.0,
      description: "Amazon Smart Speaker - Echo Dot",
      warranty: "9 months warranty",
      rebates: "2% on the total price"
  },
  {
      id: "Amazon Smart Speaker - Echo Dot With Clock",
      name: "Amazon Smart Speaker - Echo Dot With Clock",
      price: 59.99,
      image: 'p12',
      manufacturer: "Amazon",
      category: "smartspeaker",
      condition: "New",
      discount: 40.0,
      description: "Amazon Smart Speaker - Echo Dot With Clock",
      warranty: "1 yr warranty",
      rebates: "0.5% on the total price"
  },
  {
      id: "JBL Charge 4 Personalized Speaker",
      name: "JBL Charge 4 Personalized Speaker",
      price: 149.95,
      image: 'p13',
      manufacturer: "JBL",
      category: "smartspeaker",
      condition: "New",
      discount: 15.0,
      description: "JBL Charge 4 Personalized Speaker",
      warranty: "1 yr warranty",
      rebates: "2% on the total price"
  },
  {
      id: "JBL Horizon 2 Bluetooth Clock Radio Speaker",
      name: "JBL Horizon 2 Bluetooth Clock Radio Speaker",
      price: 119.95,
      image: 'p14',
      manufacturer: "JBL",
      category: "smartspeaker",
      condition: "New",
      discount: 15.0,
      description: "JBL Horizon 2 Bluetooth Clock Radio Speaker",
      warranty: "1 yr warranty",
      rebates: "3% on the total price"
  },
  {
      id: "Yamaha Wireless Powered Speaker",
      name: "Yamaha Wireless Powered Speaker",
      price: 249.95,
      image: 'p15',
      manufacturer: "Yamaha",
      category: "smartspeaker",
      condition: "New",
      discount: 15.0,
      description: "Yamaha Wireless Powered Speaker",
      warranty: "9 months warranty",
      rebates: "2% on the total price"
  },
  {
    id: "Lockly - Secure Plus Smart Lock",
    name: "Lockly - Secure Plus Smart Lock",
    price: 227.99,
    image: 'p6',
    manufacturer: "Lockly",
    category: "smartdoorlock",
    condition: "New",
    discount: 15.0,
    description: "Lockly - Secure Plus Smart Lock",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Lockly - Flex Touch Smart Lock",
    name: "Lockly - Flex Touch Smart Lock",
    price: 219.99,
    image: 'p7',
    manufacturer: "Lockly",
    category: "smartdoorlock",
    condition: "Refurbished",
    discount: 15.0,
    description: "Lockly - Flex Touch Smart Lock",
    warranty: "1 yr warranty",
    rebates: "Rebate not available for this product"
  },
  {
    id: "Level - Bolt Bluetooth Retrofit Smart Lock",
    name: "Level - Bolt Bluetooth Retrofit Smart Lock",
    price: 199.99,
    image: 'p8',
    manufacturer: "Level",
    category: "smartdoorlock",
    condition: "New",
    discount: 15.0,
    description: "Level - Bolt Bluetooth Retrofit Smart Lock",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Kwikset - Halo Smart Lock Wi-Fi",
    name: "Kwikset - Halo Smart Lock Wi-Fi",
    price: 204.99,
    image: "p9",
    manufacturer: "Kwikset",
    category: "smartdoorlock",
    condition: "New",
    discount: 15.0,
    description: "Kwikset - Halo Smart Lock Wi-Fi",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Halo Smart Lock Wi-Fi Replacement Deadbolt",
    name: "Halo Smart Lock Wi-Fi Replacement Deadbolt",
    price: 203.99,
    image: "p10",
    manufacturer: "Kwikset",
    category: "smartdoorlock",
    condition: "New",
    discount: 15.0,
    description: "Halo Smart Lock Wi-Fi Replacement Deadbolt",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Philips - Hue A19 Bluetooth 75W Smart LED",
    name: "Philips - Hue A19 Bluetooth 75W Smart LED",
    price: 50.99,
    image: "p16",
    manufacturer: "Philips",
    category: "smartlighting",
    condition: "New",
    discount: 15.0,
    description: "Philips - Hue A19 Bluetooth 75W Smart LED",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Philips - Hue Go Bluetooth Table Lamp",
    name: "Philips - Hue Go Bluetooth Table Lamp",
    price: 50.99,
    image: "p17",
    manufacturer: "Philips",
    category: "smartlighting",
    condition: "Refurbished",
    discount: 15.0,
    description: "Philips - Hue Go Bluetooth Table Lamp",
    warranty: "1 yr warranty",
    rebates: "0.9% on the total price"
  },
  {
    id: "Sengled Smart A19 LED",
    name: "Sengled Smart A19 LED",
    price: 50.99,
    image: "p18",
    manufacturer: "Sengled",
    category: "smartlighting",
    condition: "New",
    discount: 15.0,
    description: "Sengled Smart A19 LED",
    warranty: "2 yr warranty",
    rebates: "0.2% on the total price"
  },
  {
    id: "Sengled Smart Candle LED",
    name: "Sengled Smart Candle LED",
    price: 50.99,
    image: "p19",
    manufacturer: "Sengled",
    category: "smartlighting",
    condition: "New",
    discount: 15.0,
    description: "Sengled Smart Candle LED",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Geeni - LUX G25 Smart Bulb",
    name: "Geeni - LUX G25 Smart Bulb",
    price: 50.99,
    image: "p20",
    manufacturer: "Geeni",
    category: "smartlighting",
    condition: "New",
    discount: 15.0,
    description: "Geeni - LUX G25 Smart Bulb",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Google Nest Programmable Wifi Thermostat",
    name: "Google Nest Programmable Wifi Thermostat",
    price: 129.99,
    image: "p21",
    manufacturer: "Google",
    category: "smartthermostat",
    condition: "New",
    discount: 15.0,
    description: "Google Nest Programmable Wifi Thermostat",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Google Geek Squad Thermostat",
    name: "Google Geek Squad Thermostat",
    price: 150.99,
    image: "p22",
    manufacturer: "Google",
    category: "smartthermostat",
    condition: "Refurbished",
    discount: 15.0,
    description: "Google Geek Squad Thermostat",
    warranty: "1 yr warranty",
    rebates: "1% on the total price"
  },
  {
    id: "Mysa Smart Wifi Thermostat White",
    name: "Mysa Smart Wifi Thermostat White",
    price: 149.99,
    image: "p23",
    manufacturer: "Mysa",
    category: "smartthermostat",
    condition: "New",
    discount: 15.0,
    description: "Mysa Smart Wifi Thermostat White",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Mysa Smart Thermostat for AC",
    name: "Mysa Smart Thermostat for AC",
    price: 139.99,
    image: "p24",
    manufacturer: "Mysa",
    category: "smartthermostat",
    condition: "New",
    discount: 15.0,
    description: "Mysa Smart Thermostat for AC",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Emerson Sensi Touch Thermostat",
    name: "Emerson Sensi Touch Thermostat",
    price: 144.99,
    image: "p25",
    manufacturer: "Emerson",
    category: "smartthermostat",
    condition: "New",
    discount: 15.0,
    description: "Emerson Sensi Touch Thermostat",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Ring Spare Parts for Doorbell",
    name: "Ring Spare Parts for Doorbell",
    price: 1.99,
    image: "p27",
    manufacturer: "Ring",
    category: "smartthermostat",
    condition: "New",
    discount: 40.0,
    description: "Ring Spare Parts for Doorbell",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Ring Solar Panel for Doorbells",
    name: "Ring Solar Panel for Doorbells",
    price: 49.99,
    image: "p26",
    manufacturer: "Ring",
    category: "accessory",
    condition: "New",
    discount: 40.0,
    description: "Ring Solar Panel for Doorbells",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "SimpliSafe Doorbell Power Supply",
    name: "SimpliSafe Doorbell Power Supply",
    price: 29.99,
    image: "p28",
    manufacturer: "SimpliSafe",
    category: "accessory",
    condition: "New",
    discount: 40.0,
    description: "SimpliSafe Doorbell Power Supply",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Wall Mount Compatible with SimpliSafe",
    name: "Wall Mount Compatible with SimpliSafe",
    price: 21.99,
    image: "p31",
    manufacturer: "SimpliSafe",
    category: "accessory",
    condition: "New",
    discount: 40.0,
    description: "Wall Mount Compatible with SimpliSafe",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Google Nest Doorbell Mount",
    name: "Google Nest Doorbell Mount",
    price: 9.99,
    image: "p29",
    manufacturer: "Google",
    category: "accessory",
    condition: "New",
    discount: 40.0,
    description: "Google Nest Doorbell Mount",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  },
  {
    id: "Google Doorbell Case",
    name: "Google Doorbell Case",
    price: 3.99,
    image: "p30",
    manufacturer: "Google",
    category: "accessory",
    condition: "New",
    discount: 40.0,
    description: "Google Doorbell Case",
    warranty: "1 yr warranty",
    rebates: "2% on the total price"
  }
  ];

// Create a MySQL connection
// Serve static files from the 'smartdoorbells' directory


// Other routes or fallback to index.html for SPA
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });
// const connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: 'root',
//     database: 'ReactDB'
// });
const mysqlConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ReactDB',
  });
// Middleware
app.use(bodyParser.json());

// Endpoint for adding a product to the cart
// app.post('/api/cart', (req, res) => {
//     const { userId, productId, quantity } = req.body;
//     const addToCartQuery = `INSERT INTO carts (username, productId, quantity) VALUES (?, ?, ?)`;
//     connection.query(addToCartQuery, [userId, productId, quantity], (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error adding to cart');
//         } else {
//             res.status(200).send('Added to cart successfully');
//         }
//     });
// });

// app.post('/register', (req, res) => {
//     const { username, password, usertype } = req.body;
//     const registerQuery = `INSERT INTO users (username, password, usertype) VALUES (?, ?, ?)`;
//     connection.query(registerQuery, [username, password, usertype], (err, results) => {
//         if (err) {
//             console.error(err);
//             console.log("server.js log: ");
//             res.status(500).send('Error registering user');
//         } else {
//             res.status(200).send('User registered successfully');
//         }
//     });
// });

app.post('/register', (req, res) => {
    const { username, password, usertype } = req.body;
  
    const sql = 'INSERT INTO users (username, password, usertype) VALUES (?, ?, ?)';
  
    mysqlConnection.query(sql, [username, password, usertype], (error, results) => {
      if (error) {
        console.error('Error registering user:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      } else {
        console.log('User registered successfully');
        res.status(200).json({ message: 'Registration successful' });
      }
    });
  });

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password, usertype } = req.body;
    const loginQuery = `SELECT * FROM users WHERE username = ? AND password = ? AND usertype = ?`;
    mysqlConnection.query(loginQuery, [username, password, usertype], (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error logging in');
        } else {
            if (results.length > 0) {
                res.status(200).json({ message: 'Login successful', user: results[0] });
            } else {
                res.status(401).json({ message: 'Invalid credentials' });
            }
        }
    });
});

// Endpoint for product management - Fetch all products
// app.get('http://localhost:3001/api/products', (req, res) => {
//     const fetchProductsQuery = `SELECT * FROM products`;
//     connection.query(fetchProductsQuery, (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error fetching products');
//         } else {
//             res.status(200).json(results);
//         }
//     });
// });

// // Endpoint for creating a new product
// app.post('http://localhost:3001/api/products', (req, res) => {
//     const { name, price } = req.body;
//     const addProductQuery = `INSERT INTO products (productId, name, price, image, manufacturer, category, condition, discount, description, warranty, rebates) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
//     connection.query(addProductQuery, [id, name, price, image, manufacturer, category, condition, discount, description, warranty, rebates], (err, results) => {
//         if (err) {
//             console.error(err);
//             res.status(500).send('Error adding product');
//         } else {
//             res.status(200).send('Product added successfully');
//         }
//     });
// });

// Endpoint for creating an order
// app.post('/', (req, res) => {
//     const { orderId, name, creditCardNumber, street, city, states, zipCode, orderType, orderDetails } = req.body;
  
//     // Convert orderDetails to a string or JSON format
//     const formattedOrderDetails = JSON.stringify(orderDetails);
  
//     // Construct the query for inserting into Transactions table
//     const insertOrderQuery = `INSERT INTO Transactions (orderId, customerName, creditCardNumber, street, city, state, zipCode, orderType, orderDetails)
//       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
  
//     // Perform the insertion
//     connection.query(insertOrderQuery, [orderId, name, creditCardNumber, street, city, states, zipCode, orderType, formattedOrderDetails], (err, results) => {
//       if (err) {
//         console.error(err);
//         res.status(500).send('Error placing order');
//       } else {
//         res.status(200).send('Order placed successfully');
//       }
//     });
//   });
  
app.post('/storeOrder', (req, res) => {
    const {
      customerName,
      creditCardNumber,
      street,
      city,
      state,
      zipCode,
      orderType,
      orderDetails,
      instorePickup,
      orderPrice,
      discount,
      purchaseDate,
      deliveryDate,
      storeCity,
      storeState,
      storeZip
    } = req.body;
  
    const data = {
      customerName,
      creditCardNumber,
      street,
      city,
      state,
      zipCode,
      orderType,
      orderDetails: JSON.stringify(orderDetails), // Convert to string before storing
      instorePickup,
      orderPrice,
      discount,
      purchaseDate,
      deliveryDate,
      storeCity,
      storeState,
      storeZip
    };
  
    mysqlConnection.query('INSERT INTO Transactions SET ?', data, (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).send('Error inserting data');
        return;
      }
      console.log('Data inserted successfully:', result);
      res.status(200).send('Data inserted successfully');
    });
  });
  

  app.put('/updateOrder/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    const {
      customerName,
      creditCardNumber,
      street,
      city,
      state,
      zipCode,
      orderType,
      orderDetails,
      instorePickup,
      orderPrice,
      discount,
      purchaseDate,
      deliveryDate,
      storeCity,
      storeState,
      storeZip
    } = req.body;
  
    // Check if orderId exists
    mysqlConnection.query('SELECT * FROM Transactions WHERE orderId = ?', orderId, (err, rows) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
        return;
      }
  
      if (rows.length === 0) {
        res.status(404).send('Order not found');
        return;
      }
  
      // Order ID exists, proceed with the update
      const dataToUpdate = {
        customerName,
        creditCardNumber,
        street,
        city,
        state,
        zipCode,
        orderType,
        orderDetails: JSON.stringify(orderDetails), // Convert to string before storing
        instorePickup,
        orderPrice,
        discount,
        purchaseDate,
        deliveryDate,
        storeCity,
        storeState,
        storeZip
      };
  
      mysqlConnection.query('UPDATE Transactions SET ? WHERE orderId = ?', [dataToUpdate, orderId], (err, result) => {
        if (err) {
          console.error('Error updating data:', err);
          res.status(500).send('Error updating data');
          return;
        }
        console.log('Data updated successfully:', result);
        res.status(200).send('Data updated successfully');
      });
    });
  });



  app.delete('/deleteOrder/:orderId', (req, res) => {
    const orderId = req.params.orderId;
  
    mysqlConnection.query('SELECT * FROM Transactions WHERE orderId = ?', orderId, (err, rows) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
        return;
      }
  
      if (rows.length === 0) {
        res.status(404).send('Order not found');
        return;
      }
  
      mysqlConnection.query('DELETE FROM Transactions WHERE orderId = ?', orderId, (err, result) => {
        if (err) {
          console.error('Error deleting data:', err);
          res.status(500).send('Error deleting data');
          return;
        }
        console.log('Data deleted successfully:', result);
        res.status(200).send('Data deleted successfully');
      });
    });
  });


  app.get('/orderDetails/:orderId', (req, res) => {
    const orderId = req.params.orderId;
  
    mysqlConnection.query('SELECT * FROM Transactions WHERE orderId = ?', orderId, (err, rows) => {
      if (err) {
        console.error('Error fetching data:', err);
        res.status(500).send('Error fetching data');
        return;
      }
  
      if (rows.length === 0) {
        res.status(404).send('Order not found');
        return;
      }
  
      res.status(200).json({ orderDetails: rows[0] });
    });
  });
  


  const insertProducts = () => {
    const sql = 'INSERT INTO products (id, name, price, image, manufacturer, category, conditions, discount, description, warranty, rebates) VALUES ?';
    const values = all_product.map(product => [
      product.id,
      product.name,
      product.price,
      product.image,
      product.manufacturer,
      product.category,
      product.condition,
      product.discount,
      product.description,
      product.warranty,
      product.rebates
    ]);
  
    mysqlConnection.query(sql, [values], (err, result) => {
      if (err) {
        console.error('Error inserting products:', err);
        throw err;
      }
      console.log('Products inserted successfully:', result.affectedRows);
    });
  };
  
  // Call the function to insert products
  //insertProducts();
  

  app.post('/addProduct', (req, res) => {
    const {
      id,
      name,
      price,
      image,
      category,
      manufacturer,
      conditions,
      discount,
      warranty,
      rebates,
      description
    } = req.body;
  
    const newProduct = {
      id,
      name,
      price,
      image,
      category,
      manufacturer,
      conditions,
      discount,
      warranty,
      rebates,
      description,
    };
  
    const sql = 'INSERT INTO products SET ?';

    // const sql = 'INSERT INTO products (id, name, price, image, manufacturer, category, conditions, discount, description, warranty, rebates) VALUES ?';
  
    mysqlConnection.query(sql, newProduct, (err, result) => {
      if (err) {
        console.error('Error adding product: ' + err.stack);
        res.status(500).send('Error adding product.');
        return;
      }
      console.log('Product added:', result);
      res.status(200).send('Product added successfully.');
    });
  });


  app.post('/updateProduct', (req, res) => {
    const {
      id,
      updatedDetails // Object containing fields to be updated
    } = req.body;
  
    // Check if the product ID exists in the table
    mysqlConnection.query('SELECT * FROM products WHERE id = ?', [id], (err, rows) => {
      if (err) {
        console.error('Error finding product:', err.stack);
        res.status(500).send('Error finding product.');
        return;
      }
  
      if (rows.length > 0) {
        // If the product exists, perform the update operation
        const updatedProduct = {
          ...rows[0], // Assuming the query returns only one result
          ...updatedDetails // Apply the updated fields
        };
  
        // Update the product in the database
        mysqlConnection.query('UPDATE products SET ? WHERE id = ?', [updatedProduct, id], (updateErr, updateResult) => {
          if (updateErr) {
            console.error('Error updating product:', updateErr.stack);
            res.status(500).send('Error updating product.');
            return;
          }
          console.log('Product updated:', updateResult);
          res.status(200).send('Product updated successfully.');
        });
      } else {
        res.status(404).send(`Product with ID ${id} not found.`);
      }
    });
  });

  app.post('/deleteProduct', (req, res) => {
    const { id } = req.body;
  
    // Check if the product ID exists in the table
    mysqlConnection.query('SELECT * FROM products WHERE id = ?', [id], (err, rows) => {
      if (err) {
        console.error('Error finding product:', err.stack);
        res.status(500).send('Error finding product.');
        return;
      }
  
      if (rows.length > 0) {
        // If the product exists, perform the delete operation
        mysqlConnection.query('DELETE FROM products WHERE id = ?', [id], (deleteErr, deleteResult) => {
          if (deleteErr) {
            console.error('Error deleting product:', deleteErr.stack);
            res.status(500).send('Error deleting product.');
            return;
          }
          console.log('Product deleted:', deleteResult);
          res.status(200).send('Product deleted successfully.');
        });
      } else {
        res.status(404).send(`Product with ID ${id} not found.`);
      }
    });
  });
  const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/CustomerProductReviews', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define the schema for the reviews
const reviewSchema = new mongoose.Schema({
  productName: String,
  // Add other fields as needed
  // For example:
  username: String,
  productType: String,
  productPrice: String,
  productMaker: String,
  manufacturerRebates: String,
  productOnSale: String,
  productName: String,
  reviewRating: String,
  storeID: String,
  zipCode: String,
  retailerCity: String,
  retailerState: String,
  userAge: String,
  userGender: String,
  userOccupation: String,
  reviewDate: String,
  reviewText: String,
});

// Create a model based on the schema
const Review = mongoose.model('myReviews', reviewSchema);

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Route to handle the review submission
app.post('/', async (req, res) => {
  try {
    const {
      username,
      productName,
      productType,
      productPrice,
      productMaker,
      manufacturerRebates,
      productOnSale,
      reviewRating,
      storeID,
      zipCode,
      retailerCity,
      retailerState,
      userAge,
      userGender,
      userOccupation,
      reviewDate,
      reviewText,
    } = req.body;

    // Create a new review document
    const newReview = new Review({
      username,
      productName,
      productType,
      productPrice,
      productMaker,
      manufacturerRebates,
      productOnSale,
      reviewRating,
      storeID,
      zipCode,
      retailerCity,
      retailerState,
      userAge,
      userGender,
      userOccupation,
      reviewDate,
      reviewText,
    });

    // Save the review to the database
    await newReview.save();
    console.log("new review: ", newReview);

    res.status(201).json({ message: 'Review submitted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


app.get('/getReviews', async (req, res) => {
    try {
      const reviews = await Review.find(); // Assuming "Review" is your Mongoose model
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  
  // Define the route to get reviews by product ID
  app.get('/getReviewsByProductId', async (req, res) => {
    try {
      const productId = req.query.productId;
      const reviews = await Review.find({ productName: productId });
      res.json(reviews);
    } catch (error) {
      console.error('Error fetching reviews by product ID:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
//   const mongoose = require('mongoose');


//   // Connect to MongoDB
// mongoose.connect('mongodb://127.0.0.1:27017/reactProductReview', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
  
//   // Create a MongoDB Schema and Model
//   const ReviewSchema = new mongoose.Schema({
//     // Define your schema fields here, based on your formData
//     username: String,
//   productName: String,
//   productType: String,
//   productPrice: Number,
//   productMaker: String,
//   manufacturerRebates: Boolean,
//   productOnSale: Boolean,
//   reviewRating: Number,
//   storeID: String,
//   zipCode: String,
//   retailerCity: String,
//   retailerState: String,
//   userAge: Number,
//   userGender: String,
//   userOccupation: String,
//   reviewDate: Date,
//   reviewText: String,
//   });
  
//   const Review = mongoose.model('myreviews', ReviewSchema);
  
//   // Handle POST request to submit a review
//   app.post('/submitreview', async (req, res) => {
//     try {
//       const formData = req.body;
  
//       const newReview = new Review(formData);
//       await newReview.save();
  
//       res.status(201).json({ message: 'Review submitted successfully' });
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       res.status(500).json({ error: 'An error occurred while submitting the review' });
//     }
//   });
  
  
  // Start the server
//   const PORT = process.env.PORT || 3000;
//   app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });

// // Replace '<YOUR_MONGODB_URI>' with your actual MongoDB URI
// const MONGODB_URI = 'mongodb://localhost:27017/reactProductReview';

// // Establish a connection to MongoDB
// mongoose.connect(MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Get the default connection
// const db = mongoose.connection;

// // Event listeners for connection status
// db.on('error', console.error.bind(console, 'MongoDB connection error:'));
// db.once('open', () => {
//   console.log('Connected to MongoDB database');
// });

// // Define any schemas and models here...

// // Define the schema for the Review model
// const reviewSchema = new mongoose.Schema({
//     username: String,
//     productName: String,
//     // Define other fields for the review schema...
//   });
  
//   // Create the Review model based on the schema
//   const Review = mongoose.model('myreviews', reviewSchema);
  
//   module.exports = Review; // Export the Review model

// // const Review = mongoose.model('Review');

// app.post('/submitReview', async (req, res) => {
//   try {
//     // Extracting all the form data from the request body
//     const {
//       username,
//       productName,
//       productType,
//       productPrice,
//       productMaker,
//       manufacturerRebates,
//       productOnSale,
//       reviewRating,
//       storeID,
//       zipCode,
//       retailerCity,
//       retailerState,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//       reviewText,
//     } = req.body;

//     // Create a new review instance using the Review model
//     const newReview = new Review({
//       username,
//       productName,
//       productType,
//       productPrice,
//       productMaker,
//       manufacturerRebates,
//       productOnSale,
//       reviewRating,
//       storeID,
//       zipCode,
//       retailerCity,
//       retailerState,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//       reviewText,
//     });

//     // Save the new review to the database
//     await newReview.save();

//     // Send a success response back to the client
//     res.status(200).send('Review submitted successfully!');
//   } catch (error) {
//     console.error('Error submitting review:', error);
//     res.status(500).send('Error submitting review.');
//   }
// });
  



  
//   const PORT = 3000;
//   app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
//   });
  
  

// Implement other endpoints for login, product management, orders, etc.



// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/reactProductReview', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// // Define the schema for the reviews
// const reviewSchema = new mongoose.Schema({
//   productName: String,
//   // Add other fields as needed
//   // For example:
//   username: String,
//   productType: String,
//   productPrice: String,
//   productMaker: String,
//   manufacturerRebates: String,
//   productOnSale: String,
//   productName: String,
//   reviewRating: String,
//   storeID: String,
//   zipCode: String,
//   retailerCity: String,
//   retailerState: String,
//   userAge: String,
//   userGender: String,
//   userOccupation: String,
//   reviewDate: String,
//   reviewText: String,
// });

// // Create a model based on the schema
// const Review = mongoose.model('myreviews', reviewSchema);

// // Middleware to parse JSON requests
// app.use(bodyParser.json());

// // Route to handle the review submission
// app.post('/submitReview', async (req, res) => {
//   try {
//     const {
//       username,
//       productName,
//       productType,
//       productPrice,
//       productMaker,
//       manufacturerRebates,
//       productOnSale,
//       reviewRating,
//       storeID,
//       zipCode,
//       retailerCity,
//       retailerState,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//       reviewText,
//     } = req.body;

//     // Create a new review document
//     const newReview = new Review({
//       username,
//       productName,
//       productType,
//       productPrice,
//       productMaker,
//       manufacturerRebates,
//       productOnSale,
//       reviewRating,
//       storeID,
//       zipCode,
//       retailerCity,
//       retailerState,
//       userAge,
//       userGender,
//       userOccupation,
//       reviewDate,
//       reviewText,
//     });

//     // Save the review to the database
//     await newReview.save();
//     console.log("new review: ", newReview);

//     res.status(201).json({ message: 'Review submitted successfully' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.get('/getReviews', async (req, res) => {
//   try {
//     const reviews = await Review.find(); // Assuming "Review" is your Mongoose model
//     res.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });


// // Define the route to get reviews by product ID
// app.get('/getReviewsByProductId', async (req, res) => {
//   try {
//     const productId = req.query.productId;
//     const reviews = await Review.find({ productName: productId });
//     res.json(reviews);
//   } catch (error) {
//     console.error('Error fetching reviews by product ID:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });



// const { MongoClient } = require('mongodb');

// MongoDB Connection URL
// const mongoURI = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// // Database & Collection Name
// const dbName = 'ReactProductReview'; // Replace with your database name
// const collectionName = 'myreviews'; // Replace with your collection name

// let db; // Declare db variable to hold the database instance

// MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((client) => {
//     console.log('Connected to MongoDB');
//     db = client.db(dbName); // Assign the database instance to db
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });


// MongoDB Connection URL
// const mongoURI = 'mongodb://localhost:27017'; // Replace with your MongoDB URI

// // Database & Collection Name
// const dbName = 'ReactProductReview'; // Replace with your database name
// const collectionName = 'myreviews'; // Replace with your collection name

// // Connect to MongoDB
// let db;

// MongoClient.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then((client) => {
//     console.log('Connected to MongoDB');
//     db = client.db(dbName);
//   })
//   .catch((err) => {
//     console.error('Error connecting to MongoDB:', err);
//   });

// Endpoint to handle form submission
// app.post('/submitReview', async (req, res) => {
//   try {
//     const formData = req.body;

//     // Inserting form data into MongoDB
//     const result = await db.collection(collectionName).insertOne(formData);

//     console.log('Review inserted:', result.insertedId);
//     res.status(201).json({ message: 'Review submitted successfully!' });
//   } catch (error) {
//     console.error('Error submitting review:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


// Assuming your route is defined after the MongoDB connection is established
// app.post('/submitReview', async (req, res) => {
//     try {
//       const formData = req.body;
  
//       if (!db) {
//         return res.status(500).json({ error: 'Database connection error' });
//       }
  
//       const result = await db.collection(collectionName).insertOne(formData);
  
//       console.log('Review inserted:', result.insertedId);
//       res.status(201).json({ message: 'Review submitted successfully!' });
//     } catch (error) {
//       console.error('Error submitting review:', error);
//       res.status(500).json({ error: 'Internal server error' });
//     }
//   });
  
