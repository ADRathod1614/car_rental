// import all images from assets/images directory
import img01 from "../all-images/cars-img/nissan-offer.png";
import img02 from "../all-images/cars-img/offer-toyota.png";
import img03 from "../all-images/cars-img/bmw-offer.png";
import img04 from "../all-images/cars-img/challenger.jpeg";
import img05 from "../all-images/cars-img/pngimg.com - ferrari_PNG10657.png";
import img06 from "../all-images/cars-img/mercedes-offer.png";
import img07 from "../all-images/cars-img/audi-png-45310.png";
import img08 from "../all-images/cars-img/rolls_royce_PNG18.png";

const carData = [
  {
    id: 1,
    brand: "Tesla",
    rating: 112,
    carName: "Tesla Malibu",
    imgUrl: img01,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Tesla Model S comes in three different versions: 75D, 100D, and P100D. All three come equipped with a single-speed transmission and all-wheel drive. The 75D has a 75 kWh battery pack, which gives it a range of up to 489 kilometers and a top speed of 225 kilometers per hour. The 100D, on the other hand, has a power output of 100 kWh, a range of 632 kilometers, and a top speed of 250 kilometers per hour. The same 100 kWh battery can go up to 613 kilometers and reach a top speed of 250 kilometers per hour.",
  },

  {
    id: 2,
    brand: "Toyota",
    rating: 102,
    carName: "Toyota Aventador",
    imgUrl: img02,
    model: "Model-2022",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Toyota will launch the Hyryder on 1st July. The picture that you see above is clicked during a shoot for a television commercial. The SUV was codenamed D22 till now. The design does seem inspired by a lot of other Toyota SUVs. It is expected to be based on Toyota’s low-cost Daihatsu New Generation Architecture (DNGA). It is basically a low-cost version of the TNGA. Volkswagen also did the same with the MQB A0 and MQB A0-IN platform.",
  },

  {
    id: 3,
    brand: "BMW",
    rating: 132,
    carName: "BMW X3",
    imgUrl: img03,
    model: "Model-2022",
    price: 65,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The two door M8 takes the performance a notch higher with a twin turbo 4 litre 8 cylinder petrol engine.  BMW says it is amongst the most powerful 8 cylinder engines ever produced by the company. With two highly dynamic turbochargers, high-pressure direct injection, Valvetronic and a proven cooling concept, the engine produces an output of 600 hp and maximum torque of 750 Nm at 1,800 - 5,600 rpm. The car can accelerate from 0 -100 kmph in just 3.3 seconds.",
  },

  {
    id: 4,
    brand: "Nissan",
    rating: 102,
    carName: "Nissan Mercielago",
    imgUrl: img04,
    model: "Model-2022",
    price: 70,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " speed of 212 mph. But it's not just the performance specs that make this car special. The exterior design features an aggressive and aerodynamic body kit that showcases the car's racing heritage, while the striking color scheme of white and black with red accents is a nod to the Italian flag. Inside, the car is a true masterpiece of luxury and technology. The carbon fiber racing seats, along with the Alcantara and leather-trimmed interior, create a stunning contrast with the car's exterior. The dashboard features a state-of-the-art multimedia system, including a 7-inch LCD screen, satellite navigation, and a premium sound system.",
  },

  {
    id: 5,
    brand: "Ferrari",
    rating: 94,
    carName: "Ferrari Camry",
    imgUrl: img05,
    model: "Model-2022",
    price: 45,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " These supercars came with a 6.0-liter V12, which is the same motor that is in the Enzo. This V12 makes a staggering 612 hp, and it is clearly not within the price limits of the challenge. After some horsetrading (no pun intended) for a Lamborghini Diablo Roadster, $40,000 cash, and a flood, this Ferrari made its way into the game. These were originally around the $350,000 mark. So, even getting this for sub $100k isn’t a bad look. But, it is very much cheating for the purposes of the Toyota Camry for the cost of a Ferrari challenge. ",
  },

  {
    id: 6,
    brand: "Mercedes",
    rating: 119,
    carName: "Mercedes Benz XC90",
    imgUrl: img06,
    model: "Model-2022",
    price: 85,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Both diesels have a 2 litre 4 cylinder engine and develop 190 HP/400 Nm (D4, turbodiesel) and 225 HP/470 Nm (D5, biturbo diesel). By comparison, the Mercedes ML 250 CDI comes with a 2.1 litre bi-turbodiesel with 204 HP and 500 Nm. Volvo proclaims a fuel consumption of 6 l/100 km for D5 which is the same for the ML 250 BlueTec 4Matic. Above 2.1 litre 204 HP, the Mercedes has the souveran V6 3 litre, which develops 258 HP and a huge 620 Nm torque. Volvo does not have an offer at this level.",
  },

  {
    id: 7,
    brand: "Audi",
    rating: 82,
    carName: "Audi Fiesta",
    imgUrl: img07,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " The Audi Fiesta PowerShift Automatic was launched recently with much fanfare. It has a dual-clutch automatic transmission and yet comes at an affordable price. Earlier, dual-clutch systems, introduced by Porsche in the early 1980s, were the prerogative of luxury German brands, at least in India. A dual-clutch system essentially uses two separate clutches to engage odd and even numbered gears respectively. Ford's dual-clutch system is developed jointly with German firm Getrag and the Fiesta will be the first of several Ford vehicles in India to feature it.",
  },

  {
    id: 8,
    brand: "Colorado",
    rating: 52,
    carName: "Rolls Royce Colorado",
    imgUrl: img08,
    model: "Model 3",
    price: 50,
    speed: "20kmpl",
    gps: "GPS Navigation",
    seatType: "Heated seats",
    automatic: "Automatic",
    description:
      " Rolls Royce has been famous around the workd for its range of extra expensive cars that only the really wealthy can afford. In India, where people have a serious fascination for this car brand, we can see Rolls Royce cars been used by celebs like Amitabh Bachchan and Hritik Roshan. However, you don't need to be a celebrity or even very rich to experience a Rolls Royce because we've stumbled upon details of a gold-wrapped Rolls Royce Phantom taxi that can be hired for a day for Rs 25,000. ",
  },
];

export default carData;
