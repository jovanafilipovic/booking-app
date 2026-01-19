// const db = require("./db");
// const Sport = require("../models/sportModel");
// const Location = require("../models/locationModel");
// const Court = require("../models/courtModel");
// const TimeSlot = require("../models/timeSlotModel");

// const sports = [
//   { _id: "11", name: "Fudbal" },
//   { _id: "12", name: "Mali fudbal" },
//   { _id: "13", name: "Košarka" },
//   { _id: "14", name: "Odbojka" },
//   { _id: "15", name: "Tenis" },
// ];

// const locations = [
//   { _id: "21", name: "Vračar" },
//   { _id: "22", name: "Voždovac" },
//   { _id: "23", name: "Zvezdara" },
//   { _id: "24", name: "Stari grad" },
//   { _id: "25", name: "Palilula" },
//   { _id: "26", name: "Čukarica" },
//   { _id: "27", name: "Savski venac" },
//   { _id: "28", name: "Rakovica" },
//   { _id: "29", name: "Zemun" },
//   { _id: "30", name: "Novi Beograd" },
// ];

// const courts = [
//   {
//     name: "Balon za fudbal Woodball house",
//     address: "Kneza Višeslava 72, 11030 Beograd",
//     price: "2000din/h",
//     location: "26",
//     sports: ["11"],
//     images: [
//       "https://www.balonizafudbal.com/wp-content/uploads/2013/11/Milvol-00.jpg",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLJ6dUBJCFaDo3xBqTWwHrSbndCqxI2cbx7Q&s",
//     ],
//   },
//   {
//     name: "Tenis klub Monolith",
//     address: "Južni bulevar 69, 11118 Beograd",
//     price: "800din/h",
//     location: "21",
//     sports: ["15"],
//     images: [
//       "https://fastly.4sqi.net/img/general/600x600/43099226_Dvago9raaQpxkZzoD3s-t89k6S4HHjxDYDJNP0aG4oo.jpg",
//       "https://scontent.fbeg5-1.fna.fbcdn.net/v/t39.30808-6/305541045_500200732110951_872766401743681695_n.png?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=gjytLSoLruoQ7kNvgGZg5kD&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYC2jl8kvt88dBbB206uPjXC7ND3_4UAZpYugFYjEIE0Mg&oe=66735DF4",
//       "https://scontent.fbeg5-1.fna.fbcdn.net/v/t1.18169-9/17361962_1859340547689125_2201144786887532831_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=VOOqz5xzFdYQ7kNvgERxbdV&_nc_ht=scontent.fbeg5-1.fna&oh=00_AYDocVpNWDyNMPYjsaEzVtqvs-Zkl1ePn3zOmkdr8IhmnA&oe=6694EB7D",
//     ],
//   },
//   {
//     name: "Balon za mali fudbal Bubamara",
//     address: "Hajduk Stankova 2, 11050 Beograd",
//     price: "1800din/h",
//     location: "23",
//     sports: ["12"],
//     images: [
//       "https://www.balon-bubamara.rs/wp-content/uploads/2014/12/terten_balon_za_mali_fudbal_bubamara_mirijevo_14.jpg",
//       "https://www.balon-bubamara.rs/wp-content/uploads/2014/12/terten_balon_za_mali_fudbal_bubamara_olimp_21.jpg",
//     ],
//   },
//   {
//     name: "Teniski klub Gemax",
//     address: "Rajka Mitića 28B, 11040 Beograd",
//     price: "800din/h",
//     location: "25",
//     sports: ["15"],
//     images: [
//       "https://www.nadjidom.com/images/photos/large/2015/esdj4fzeqz-4.png",
//       "https://www.politika.rs/thumbs//upload/Article/Image/2021_06///757z468_GEMAX-GOOGLE.jpg",
//     ],
//   },
//   {
//     name: "Teniski klub SA&NI",
//     address: "Čarlija Čaplina 39, 11108 Beograd",
//     price: "800din/h",
//     location: "25",
//     sports: ["15"],
//     images: [
//       "https://www.sanitennis.com/upload/Gallery/Galleries/2015-06/Sani_Tennis_27.jpg",
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR78EjdFrAGCc9PRkYvYTrfPkp5QtphvFiag&s",
//     ],
//   },
//   {
//     name: "Teniski klub Aradinović",
//     address: "Pante Srećkovića bb, 11060 Beograd",
//     price: "800din/h",
//     location: "23",
//     sports: ["15"],
//     images: [
//       "https://www.kolubarske.rs/images/cms-image-000001332.jpg",
//       "https://www.mojaekipa.com/wp-content/uploads/2017/04/aradinovic-1-768x499.gif",
//     ],
//   },
//   {
//     name: "Omladinski teniski klub Beograd",
//     address: "Dragoslava Srejovića 1B, 11060 Beograd",
//     price: "800din/h",
//     location: "25",
//     sports: ["15"],
//     images: [
//       "https://www.mojaekipa.com/wp-content/uploads/2017/04/sm1-768x499.gif",
//     ],
//   },
//   {
//     name: "Teniski centar Akademija Tipsarević - Olimp",
//     address: "Vjekoslava Kovača 11, 11000 Beograd",
//     price: "800din/h",
//     location: "23",
//     sports: ["15"],
//     images: [
//       "https://tereni.rs/wp-content/uploads/2020/11/tipsy2.jpg",
//       "https://tereni.rs/wp-content/uploads/2020/11/tipsy3.jpg",
//     ],
//   },
//   {
//     name: "Sportski centar Agrimes",
//     address: "Marka Čelebonovića 2, 11077 Beograd",
//     price: "800din/h",
//     location: "30",
//     sports: ["15"],
//     images: [
//       "https://www.tenisklubagrimes.rs/uploaded/prva-strana/046.jpg",
//       "https://www.tenisklubagrimes.rs/uploaded/prva-strana/029.jpg",
//       "https://www.tenisklubagrimes.rs/uploaded/prva-strana/004.jpg",
//     ],
//   },
//   {
//     name: "Teniski centar Novak",
//     address: "Tadeuša Košćuška 63A, 11158 Beograd",
//     price: "800din/h",
//     location: "24",
//     sports: ["15"],
//     images: [
//       "https://www.simsic.rs/uploaded_pictures/content/articles/600x450/tenis-centar-novak-89.jpg",
//       "https://i0.wp.com/belgradespots.com/wp-content/uploads/job-manager-uploads/main_image/2018/03/novak-djokovic-tennis-center-belgrade-spots-4.jpg?fit=960%2C635&ssl=1",
//     ],
//   },
//   {
//     name: "Košarkaški tereni Partizan",
//     address: "Kalemegdan gornji grad bb, 11158 Beograd",
//     price: "800din/h",
//     location: "24",
//     sports: ["13"],
//     images: [
//       "https://fastly.4sqi.net/img/general/600x600/14046601_Juwu3dtRojBIHjCaT8A-3RuvJ5K5BprUdvXBlv36gUo.jpg",
//       "https://www.011info.com/uploads/Magazin/2021/09/02/1387/Teren%20KK%20Partizan%20-%20Milena%20Arseni%C4%87.jpg",
//       "https://www.danas.rs/wp-content/uploads/2017/06/partizan-2.jpg",
//     ],
//   },
// ];

// const fixedTimeSlots = [
//   "08:00 - 09:00",
//   "09:00 - 10:00",
//   "10:00 - 11:00",
//   "11:00 - 12:00",
//   "12:00 - 13:00",
//   "13:00 - 14:00",
//   "14:00 - 15:00",
//   "15:00 - 16:00",
//   "16:00 - 17:00",
//   "17:00 - 18:00",
//   "18:00 - 19:00",
//   "19:00 - 20:00",
//   "20:00 - 21:00",
//   "21:00 - 22:00",
// ];

// async function insertData() {
//   try {
//     await db.connect();

//     await Sport.deleteMany({});
//     await Location.deleteMany({});
//     await Court.deleteMany({});
//     await TimeSlot.deleteMany({});

//     await Sport.insertMany(sports);
//     await Location.insertMany(locations);
//     const insertedCourts = await Court.insertMany(courts);

//     for (const court of insertedCourts) {
//       //definisemo termine za narednih 10 dana
//       for (let dayOffSet = 0; dayOffSet < 10; dayOffSet++) {
//         const date = new Date();
//         date.setDate(date.getDate() + dayOffSet);
//         const dateString = date.toISOString().split("T")[0];

//         const timeSlots = fixedTimeSlots.map((slot) => ({
//           time: slot,
//           available: true,
//         }));

//         await TimeSlot.create({
//           courtId: court._id,
//           date: dateString,
//           slots: timeSlots,
//         });
//       }
//     }

//     console.log("Data inserted into the database");
//   } catch (error) {
//     console.error("Error inserting data:", error);
//   } finally {
//     await db.close();
//   }
// }

// insertData();

// module.exports = { sports, locations, insertData };
