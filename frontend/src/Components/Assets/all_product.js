import p1 from './smartdoorbells/Ring Chime Pro White Doorbell.jpg';
import p2 from './smartdoorbells/RingDoorBellBronze.jpg';
import p3 from './smartdoorbells/SimpliSafe - Pro Video Doorbell.jpg';
import p4 from './smartdoorbells/SimpliSafe - Smart Lock Doorbell.jpg';
import p5 from './smartdoorbells/Google - Nest Doorbell Wired.jpg'
import p6 from './smartlocks/Lockly - Flex Touch Smart Lock.jpg';
import p7 from './smartlocks/Lockly - Secure Plus Smart Lock.jpg';
import p8 from './smartlocks/Level - Bolt Bluetooth Retrofit Smart Lock.jpg';
import p9 from './smartlocks/Level Touch - Smart Lock.jpg';
import p10 from './smartlocks/Kwikset - Halo Smart Lock Wi-Fi.jpg';
import p11 from './smartspeakers/Amazon Smart Speaker - Echo Dot.jpg';
import p12 from './smartspeakers/Amazon Smart Speaker - Echo Dot With Clock.jpg';
import p13 from './smartspeakers/JBL Horizon 2 Bluetooth Clock Radio Speaker.jpg';
import p14 from './smartspeakers/JBL Smart Speaker - Link Music Wifi.jpg';
import p15 from './smartspeakers/Yamaha Wireless Powered Speaker.jpg';
import p16 from './lightings/Philips - Hue A19 Bluetooth 75W Smart LED.jpg';
import p17 from './lightings/Philips - Hue Go Bluetooth Table Lamp.jpg';
import p18 from './lightings/Sengled Smart A19 LED.jpg';
import p19 from './lightings/Sengled Smart Candle LED.jpg';
import p20 from './lightings/Geeni - LUX G25 Smart Bulb.jpg';
import p21 from './thermostats/Google Geek Squad Thermostat.jpg';
import p22 from './thermostats/Google Nest Programmable Wifi Thermostat.jpg';
import p23 from './thermostats/Mysa Smart Thermostat for AC.jpg';
import p24 from './thermostats/Mysa Smart Wifi Thermostat White.jpg';
import p25 from './thermostats/Emerson Sensi Touch Thermostat.jpg';
import p26 from './accessories/Ring Solar Panel for Doorbells.jpg';
import p27 from './accessories/Ring Spare Parts for Doorbell.jpg';
import p28 from './accessories/SimpliSafe Doorbell Power Supply.jpg';
import p29 from './accessories/Google Doorbell Case.jpg';
import p30 from './accessories/Google Nest Doorbell Mount.jpg';
import p31 from './accessories/Wall Mount Compatible with SimpliSafe.jpg';

let all_product= [
  {
      id: "Ring Chime Pro White Doorbell",
      name: "Ring Chime Pro White Doorbell",
      price: 59.99,
      image: p1,
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
          image: p27,
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
          image: p26,
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
      image: p2,
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
      image: p3,
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
          image: p28,
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
          image: p31,
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
      image: p4,
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
      image: p5,
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
          image: p29,
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
          image: p30,
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
    image: p11,
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
    image: p12,
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
    image: p13,
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
    image: p14,
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
    image: p15,
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
  image: p6,
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
  image: p7,
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
  image: p8,
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
  image: p9,
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
  image: p10,
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
  image: p16,
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
  image: p17,
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
  image: p18,
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
  image: p19,
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
  image: p20,
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
  image: p21,
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
  image: p22,
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
  image: p23,
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
  image: p24,
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
  image: p25,
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
  image: p27,
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
  image: p26,
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
  image: p28,
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
  image: p31,
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
  image: p29,
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
  image: p30,
  manufacturer: "Google",
  category: "accessory",
  condition: "New",
  discount: 40.0,
  description: "Google Doorbell Case",
  warranty: "1 yr warranty",
  rebates: "2% on the total price"
}
];


/*let all_product = [
    {
      id: "Google Nest Doorbell (Wired)",
      name: "Google Nest Doorbell (Wired)",
      price: 199.99,
      image: p1,
      category: "smartdoorbell",
      manufacturer: "Google",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "5 Pack Doorbell Removal Pin",
          "Adapter Transformer Compatible"
        ]
      }
    },
    {
      id: "Google Nest Doorbell",
      name: "Google Nest Doorbell",
      price: 100.99,
      image: p2,
      category: "smartdoorbell",
      manufacturer: "Google",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Arlo Wired Smart Video Doorbell",
          "Cabel Doorbell Transformer"
        ]
      }
    },
    {
      id: "Google Nest x Yale Lock",
      name: "Google Nest x Yale Lock",
      price: 150.99,
      image: "Google Nest x Yale Lock.jpg",
      category: "smartdoorlock",
      manufacturer: "Google",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "charger",
          "Doorbell Camera Angle Mount",
          "Doorbell Removal Pin Release Key"
        ]
      }
    },
    {
      id: "Lorex Wifi Video Doorbell",
      name: "Lorex Wifi Video Doorbell",
      price: 100.99,
      image: "Lorex Wifi Video Doorbell.jpg",
      category: "smartdoorbell",
      manufacturer: "Lorex",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Wireless Doorbells for Home Compatible"
        ]
      }
    },
    {
      id: "Lorex Wired Video Doorbell",
      name: "Lorex Wired Video Doorbell",
      price: 120.99,
      image: "Lorex Wired Video Doorbell.jpg",
      category: "smartdoorbell",
      manufacturer: "Lorex",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Extension Cable Video Doorbell"
        ]
      }
    },
    {
      id: "Ring Video Doorbell Plus",
      name: "Ring Video Doorbell Plus",
      price: 125.99,
      image: "Ring Video Doorbell Plus.jpg",
      category: "smartdoorbell",
      manufacturer: "Ring",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Power Adapter for Video Doorbell"
        ]
      }
    },
    {
      id: "Ring Video Doorbell",
      name: "Ring Video Doorbell",
      price: 145.99,
      image: "Ring Video Doorbell.jpg",
      category: "smartdoorbell",
      manufacturer: "Ring",
      condition: "New",
      discount: 10.0,
      accessories: {
        accessory: [
          "Siding Nailer Adapter Kit"
        ]
      }
    },
    {
      id: "GE Lighting CYNC Smart LED Light Bulbs",
      name: "GE Lighting CYNC Smart LED Light Bulbs",
      price: 30.99,
      image: "GE Lighting CYNC Smart LED Light Bulbs.jpg",
      category: "smartlighting",
      manufacturer: "GE",
      condition: "New",
      discount: 15.0
    },
    {
      id: "GE Lighting Smart LED Light Bulbs",
      name: "GE Lighting Smart LED Light Bulbs",
      price: 29.99,
      image: "GE Lighting Smart LED Light Bulbs.jpg",
      category: "smartlighting",
      manufacturer: "GE",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Govee Smart Recessed Lighting 4 Inch",
      name: "Govee Smart Recessed Lighting 4 Inch",
      price: 25.99,
      image: "Govee Smart Recessed Lighting 4 Inch.jpg",
      category: "smartlighting",
      manufacturer: "Govee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Govee Smart Recessed Lighting 6 Inch",
      name: "Govee Smart Recessed Lighting 6 Inch",
      price: 45.99,
      image: "Govee Smart Recessed Lighting 6 Inch.jpg",
      category: "smartlighting",
      manufacturer: "Govee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Philips White LED Smart Candle",
      name: "Philips White LED Smart Candle",
      price: 50.99,
      image: "Philips White LED Smart Candle.jpg",
      category: "smartlighting",
      manufacturer: "Philips",
      condition: "New",
      discount: 15.0
    },
    {
      id: "philips LED Smart Bulb",
      name: "philips LED Smart Bulb",
      price: 30.99,
      image: "philips LED Smart Bulb.jpg",
      category: "smartlighting",
      manufacturer: "Philips",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Amazon Basics Electronic Keypad",
      name: "Amazon Basics Electronic Keypad",
      price: 50.99,
      image: "Amazon Basics Electronic Keypad.jpg",
      category: "smartdoorlock",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Amazon Basics Electronic Touchscreen",
      name: "Amazon Basics Electronic Touchscreen",
      price: 99.99,
      image: "Amazon Basics Electronic Touchscreen.jpg",
      category: "smartdoorlock",
      manufacturer: "Amazon",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Kwikset Bluetooth Keypad Doorlock",
      name: "Kwikset Bluetooth Keypad Doorlock",
      price: 25.99,
      image: "Kwikset Bluetooth Keypad Doorlock.jpg",
      category: "smartdoorlock",
      manufacturer: "Kwikset",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Kwikset Keyless Electronic Touchpad",
      name: "Kwikset Keyless Electronic Touchpad",
      price: 45.99,
      image: "Kwikset Keyless Electronic Touchpad.jpg",
      category: "smartdoorlock",
      manufacturer: "Kwikset",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Yale Assure Smart Lock",
      name: "Yale Assure Smart Lock",
      price: 50.99,
      image: "Yale Assure Smart Lock.jpg",
      category: "smartdoorlock",
      manufacturer: "Yale",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Yale Security Electronic Push Button",
      name: "Yale Security Electronic Push Button",
      price: 30.99,
      image: "Yale Security Electronic Push Button.jpg",
      category: "smartthermostat",
      manufacturer: "Yale",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Ecobee New Smart Thermostat",
      name: "Ecobee New Smart Thermostat",
      price: 150.99,
      image: "Ecobee New Smart Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Ecobee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Ecobee Smart Thermostat",
      name: "Ecobee Smart Thermostat",
      price: 199.99,
      image: "Ecobee Smart Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Ecobee",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Google Nest Learning Thermostat",
      name: "Google Nest Learning Thermostat",
      price: 125.99,
      image: "Google Nest Learning Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Google Nest Thermostat",
      name: "Google Nest Thermostat",
      price: 145.99,
      image: "Google Nest Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Google",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Honeywell Home Wi-Fi Smart Thermostat",
      name: "Honeywell Home Wi-Fi Smart Thermostat",
      price: 150.99,
      image: "Honeywell Home Wi-Fi Smart Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Honeywell",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Honeywell Wi-Fi Programmable Thermostat",
      name: "Honeywell Wi-Fi Programmable Thermostat",
      price: 130.99,
      image: "Honeywell Wi-Fi Programmable Thermostat.jpg",
      category: "smartthermostat",
      manufacturer: "Honeywell",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Bose Portable Smart Speaker",
      name: "Bose Portable Smart Speaker",
      price: 89.99,
      image: "Bose Portable Smart Speaker.jpg",
      category: "smartspeaker",
      manufacturer: "Bose",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Bose SoundLink Bluetooth Speaker",
      name: "Bose SoundLink Bluetooth Speaker",
      price: 99.99,
      image: "Bose SoundLink Bluetooth Speaker.jpg",
      category: "smartspeaker",
      manufacturer: "Bose",
      condition: "New",
      discount: 20.0
    },
    {
      id: "Echo Dot with clock",
      name: "Echo Dot with clock",
      price: 59.99,
      image: "Echo Dot with clock.jpg",
      category: "smartspeaker",
      manufacturer: "Echo",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Echo Studio",
      name: "Echo Studio",
      price: 89.99,
      image: "Echo Studio.jpg",
      category: "smartspeaker",
      manufacturer: "Echo",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Sony Bluetooth Speaker",
      name: "Sony Bluetooth Speaker",
      price: 50.99,
      image: "Sony Bluetooth Speaker.jpg",
      category: "smartspeaker",
      manufacturer: "Sony",
      condition: "New",
      discount: 15.0
    },
    {
      id: "Sony Wireless Bluetooth Speaker",
      name: "Sony Wireless Bluetooth Speaker",
      price: 110.99,
      image: "Sony Wireless Bluetooth Speaker.jpg",
      category: "smartspeaker",
      manufacturer: "Sony",
      condition: "New",
      discount: 15.0
    },
    {
      id: "5 Pack Doorbell Removal Pin",
      name: "5 Pack Doorbell Removal Pin",
      price: 9.99,
      image: "5 Pack Doorbell Removal Pin.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Adapter Transformer Compatible",
      name: "Adapter Transformer Compatible",
      price: 10.99,
      image: "Adapter Transformer Compatible.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Arlo Wired Smart Video Doorbell",
      name: "Arlo Wired Smart Video Doorbell",
      price: 49.99,
      image: "Arlo Wired Smart Video Doorbell.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Cabel Doorbell Transformer",
      name: "Cabel Doorbell Transformer",
      price: 19.99,
      image: "Cabel Doorbell Transformer.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "charger",
      name: "charger",
      price: 19.99,
      image: "charger1.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Camera Angle Mount",
      name: "Doorbell Camera Angle Mount",
      price: 15.99,
      image: "Doorbell Camera Angle Mount.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Removal Pin Release Key",
      name: "Doorbell Removal Pin Release Key",
      price: 9.99,
      image: "Doorbell Removal Pin Release Key.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Doorbell Screws",
      name: "Doorbell Screws",
      price: 9.99,
      image: "Doorbell Screws.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Electronic Door Chime Kit",
      name: "Electronic Door Chime Kit",
      price: 89.99,
      image: "Electronic Door Chime Kit.png",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Entry sensor",
      name: "Entry sensor",
      price: 29.99,
      image: "Entry sensor.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Hardwired Transformer",
      name: "Hardwired Transformer",
      price: 19.99,
      image: "Hardwired Transformer.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
      id: "Lithium Coin Cell Battery",
      name: "Lithium Coin Cell Battery",
      price: 89.99,
      image: "Lithium Coin Cell Battery.jpg",
      category: "accessory",
      manufacturer: "Google",
      condition: "New",
      discount: 40.0
    },
    {
        id: "Newhouse Hardware Door Chime",
        name: "Newhouse Hardware Door Chime",
        price: 89.99,
        image: "Newhouse Hardware Door Chime.jpg",
        category: "accessory",
        manufacturer: "Google",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Wireless Doorbells for Home Compatible",
        name: "Wireless Doorbells for Home Compatible",
        price: 89.99,
        image: "Wireless Doorbells for Home Compatible.jpg",
        category: "accessory",
        manufacturer: "Lorex",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Extension Cable Video Doorbell",
        name: "Extension Cable Video Doorbell",
        price: 89.99,
        image: "Extension Cable Video Doorbell.jpg",
        category: "accessory",
        manufacturer: "Lorex",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Power Adapter for Video Doorbell",
        name: "Power Adapter for Video Doorbell",
        price: 89.99,
        image: "Pwer Adapter for Video Doorbell.jpg",
        category: "accessory",
        manufacturer: "Ring",
        condition: "New",
        discount: 40.0
      },
      {
        id: "Siding Nailer Adapter Kit",
        name: "Siding Nailer Adapter Kit",
        price: 89.99,
        image: "Siding Nailer Adapter Kit.jpg",
        category: "accessory",
        manufacturer: "Ring",
        condition: "New",
        discount: 40.0
      }
];*/

export default all_product;