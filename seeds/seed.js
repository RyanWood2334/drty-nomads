const sequelize = require("../config/connection");
const { User, Stamp, Place, Photo } = require("../models");

const users = [
  {
    first_name: "Ry",
    last_name: "Wood",
    user_name: "ryan_wood",
    password: "password",
    profile_pic:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683407406/mike-evans-pic-for-challenge-2_hm5xcb.jpg",
    user_age: "31",
    user_home: "washington",
    about_me: "I like to code and play pickleball!",
  },
  {
    first_name: "D",
    last_name: "Jules",
    user_name: "dj_jules",
    password: "password",
    profile_pic:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347049/samples/landscapes/beach-boat.jpg",
    user_age: "36",
    user_home: "new york",
    about_me: "I like to code and design things!",
  },
  {
    first_name: "Tanya",
    last_name: "Silyutina",
    user_name: "tanya_silyutina",
    password: "password",
    profile_pic:
      "https://res.cloudinary.com/duaznt4wg/video/upload/v1683347057/samples/elephants.mp4",
    user_age: "27",
    user_home: "washington",
    about_me:
      "I like to code and am really good at working on client-side problems!",
  },
  {
    first_name: "Yamini",
    last_name: "Vk",
    user_name: "yamini_vk",
    password: "password",
    profile_pic:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347052/samples/landscapes/nature-mountains.jpg",
    user_age: "27",
    user_home: "India",
    about_me:
      "I like to code and am really good at working on server side problems!",
  },
];

const photos = [
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683407406/mike-evans-pic-for-challenge-2_hm5xcb.jpg",
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347063/cld-sample-2.jpg",
    stampId: 1,
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/video/upload/v1683347057/samples/elephants.mp4",
    stampId: 2,
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347052/samples/landscapes/nature-mountains.jpg",
    stampId: 3,
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347049/samples/landscapes/beach-boat.jpg",
    stampId: 5,
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347042/samples/animals/reindeer.jpg",
    stampId: 4,
  },
];

const places = [
  {
    name: "Afghanistan",
    subregion: "Southern Asia",
    language: "Pashto",
  },
  { name: "Albania", subregion: "Southern Europe", language: "Albanian" },
  { name: "Algeria", subregion: "Northern Africa", language: "Arabic" },
  { name: "Andorra", subregion: "Southern Europe", language: "Catalan" },
  { name: "Angola", subregion: "Middle Africa", language: "Portuguese" },
  {
    name: "Antigua and Barbuda",
    subregion: "Caribbean",
    language: "English",
  },
  { name: "Argentina", subregion: "South America", language: "Spanish" },
  { name: "Armenia", subregion: "Western Asia", language: "Armenian" },
  {
    name: "Australia",
    subregion: "Australia and New Zealand",
    language: "English",
  },
  { name: "Austria", subregion: "Western Europe", language: "German" },
  { name: "Azerbaijan", subregion: "Western Asia", language: "Azerbaijani" },
  { name: "Bahamas", subregion: "Caribbean", language: "English" },
  { name: "Bahrain", subregion: "Western Asia", language: "Arabic" },
  { name: "Bangladesh", subregion: "Southern Asia", language: "Bengali" },
  { name: "Barbados", subregion: "Caribbean", language: "English" },
  {
    name: "Belarus",
    subregion: "Eastern Europe",
    language: "Belarusian",
  },
  {
    name: "Belgium",
    subregion: "Western Europe",
    language: "Dutch",
  },
  {
    name: "Belize",
    subregion: "Central America",
    language: "English",
  },
  { name: "Benin", subregion: "Western Africa", language: "French" },
  { name: "Bhutan", subregion: "Southern Asia", language: "Dzongkha" },
  {
    name: "Bolivia",
    subregion: "South America",
    language: "Quechua",
  },
  {
    name: "Bosnia and Herzegovina",
    subregion: "Southern Europe",
    language: "Bosnian",
  },
  {
    name: "Botswana",
    subregion: "Southern Africa",
    language: "Tswana",
  },
  { name: "Brazil", subregion: "South America", language: "Portuguese" },
  { name: "Brunei", subregion: "South-Eastern Asia", language: "Malay" },
  { name: "Bulgaria", subregion: "Eastern Europe", language: "Bulgarian" },
  { name: "Burkina Faso", subregion: "Western Africa", language: "French" },
  {
    name: "Burundi",
    subregion: "Eastern Africa",
    language: "Kirundi",
  },
  { name: "Cambodia", subregion: "South-Eastern Asia", language: "Khmer" },
  {
    name: "Cameroon",
    subregion: "Middle Africa",
    language: "French",
  },
  {
    name: "Canada",
    subregion: "Northern America",
    language: "English",
  },
  {
    name: "Cape Verde",
    subregion: "Western Africa",
    language: "Portuguese",
  },
  {
    name: "Central African Republic",
    subregion: "Middle Africa",
    language: "Sango",
  },
  { name: "Chad", subregion: "Middle Africa", language: "French" },
  { name: "Chile", subregion: "South America", language: "Spanish" },
  { name: "China", subregion: "Eastern Asia", language: "Chinese" },
  { name: "Colombia", subregion: "South America", language: "Spanish" },
  {
    name: "Comoros",
    subregion: "Eastern Africa",
    language: "Comorian",
  },
  { name: "Congo", subregion: "Middle Africa", language: "French" },

  { name: "Costa Rica", subregion: "Central America", language: "Spanish" },

  { name: "Côte d'Ivoire", subregion: "Western Africa", language: "French" },

  { name: "Croatia", subregion: "Southern Europe", language: "Croatian" },

  { name: "Cuba", subregion: "Caribbean", language: "Spanish" },
  {
    name: "Cyprus",
    subregion: "Western Asia",
    language: "Greek",
  },
  { name: "Czech Republic", subregion: "Eastern Europe", language: "Czech" },
  { name: "Denmark", subregion: "Northern Europe", language: "Danish" },
  {
    name: "Djibouti",
    subregion: "Eastern Africa",
    language: "Arabic",
  },
  { name: "Dominica", subregion: "Caribbean", language: "English" },
  {
    name: "Dominican Republic",
    subregion: "Caribbean",
    language: "Spanish",
  },
  {
    name: "East Timor",
    subregion: "South-Eastern Asia",
    language: "Tetum",
  },
  { name: "Ecuador", subregion: "South America", language: "Spanish" },
  { name: "Egypt", subregion: "Northern Africa", language: "Arabic" },
  { name: "El Salvador", subregion: "Central America", language: "Spanish" },
  {
    name: "Equatorial Guinea",
    subregion: "Middle Africa",
    language: "Spanish",
  },
  {
    name: "Eritrea",
    subregion: "Eastern Africa",
    language: "Tigrinya",
  },
  { name: "Estonia", subregion: "Northern Europe", language: "Estonian" },
  {
    name: "Eswatini",
    subregion: "Southern Africa",
    language: "Swazi",
  },
  { name: "Ethiopia", subregion: "Eastern Africa", language: "Amharic" },
  {
    name: "Fiji",
    subregion: "Melanesia",
    language: "Fijian",
  },
  {
    name: "Finland",
    subregion: "Northern Europe",
    language: "Finnish",
  },
  { name: "France", subregion: "Western Europe", language: "French" },
  { name: "French Guiana", subregion: "South America", language: "French" },
  { name: "French Polynesia", subregion: "Polynesia", language: "French" },
  { name: "Gabon", subregion: "Middle Africa", language: "French" },
  { name: "Gambia", subregion: "Western Africa", language: "English" },
  { name: "Georgia", subregion: "Western Asia", language: "Georgian" },
  { name: "Germany", subregion: "Western Europe", language: "German" },
  { name: "Ghana", subregion: "Western Africa", language: "English" },
  { name: "Gibraltar", subregion: "Southern Europe", language: "English" },
  { name: "Greece", subregion: "Southern Europe", language: "Greek" },
  {
    name: "Greenland",
    subregion: "Northern America",
    language: "Greenlandic",
  },
  { name: "Grenada", subregion: "Caribbean", language: "English" },
  { name: "Guadeloupe", subregion: "Caribbean", language: "French" },
  { name: "Guam", subregion: "Micronesia", language: "Chamorro" },
  { name: "Guatemala", subregion: "Central America", language: "Spanish" },
  {
    name: "Guernsey",
    subregion: "Northern Europe",
    language: "English",
  },
  { name: "Guinea", subregion: "Western Africa", language: "French" },
  {
    name: "Guinea-Bissau",
    subregion: "Western Africa",
    language: "Portuguese",
  },
  { name: "Guyana", subregion: "South America", language: "English" },
  {
    name: "Haiti",
    subregion: "Caribbean",
    language: "Haitian Creole",
  },
  { name: "Honduras", subregion: "Central America", language: "Spanish" },
  {
    name: "Hong Kong",
    subregion: "Eastern Asia",
    language: "Chinese",
  },
  { name: "Hungary", subregion: "Eastern Europe", language: "Hungarian" },
  { name: "Iceland", subregion: "Northern Europe", language: "Icelandic" },
  {
    name: "India",
    subregion: "Southern Asia",
    language: "Hindi",
  },
  {
    name: "Indonesia",
    subregion: "South-Eastern Asia",
    language: "Indonesian",
  },
  {
    name: "Iran (Islamic Republic of)",
    subregion: "Southern Asia",
    language: "Persian",
  },
  { name: "Iraq", subregion: "Western Asia", language: "Arabic" },
  {
    name: "Ireland",
    subregion: "Northern Europe",
    language: "Irish",
  },
  {
    name: "Isle of Man",
    subregion: "Northern Europe",
    language: "English",
  },
  {
    name: "Israel",
    subregion: "Western Asia",
    language: "Hebrew",
  },
  { name: "Italy", subregion: "Southern Europe", language: "Italian" },
  { name: "Jamaica", subregion: "Caribbean", language: "English" },
  { name: "Japan", subregion: "Eastern Asia", language: "Japanese" },
  { name: "Jordan", subregion: "Western Asia", language: "Arabic" },
  {
    name: "Kazakhstan",
    subregion: "Central Asia",
    language: "Kazakh",
  },
  {
    name: "Kenya",
    subregion: "Eastern Africa",
    language: "Swahili",
  },
  {
    name: "Kiribati",
    subregion: "Micronesia",
    language: "Gilbertese",
  },
  { name: "Kuwait", subregion: "Western Asia", language: "Arabic" },
  {
    name: "Kyrgyzstan",
    subregion: "Central Asia",
    language: "Kyrgyz",
  },
  { name: "Laos", subregion: "South-Eastern Asia", language: "Lao" },
  { name: "Latvia", subregion: "Northern Europe", language: "Latvian" },
  { name: "Lebanon", subregion: "Western Asia", language: "Arabic" },
  {
    name: "Lesotho",
    subregion: "Southern Africa",
    language: "Sesotho",
  },
  { name: "Liberia", subregion: "Western Africa", language: "English" },
  { name: "Libya", subregion: "Northern Africa", language: "Arabic" },
  { name: "Liechtenstein", subregion: "Western Europe", language: "German" },
  {
    name: "Lithuania",
    subregion: "Northern Europe",
    language: "Lithuanian",
  },
  {
    name: "Luxembourg",
    subregion: "Western Europe",
    language: "Luxembourgish",
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    subregion: "Southern Europe",
    language: "Macedonian",
  },
  {
    name: "Madagascar",
    subregion: "Eastern Africa",
    language: "Malagasy",
  },
  {
    name: "Malawi",
    subregion: "Eastern Africa",
    language: "Chichewa",
  },
  { name: "Malaysia", subregion: "South-Eastern Asia", language: "Malay" },
  { name: "Maldives", subregion: "Southern Asia", language: "Dhivehi" },
  { name: "Mali", subregion: "Western Africa", language: "French" },
  {
    name: "Malta",
    subregion: "Southern Europe",
    language: "Maltese",
  },
  {
    name: "Marshall Islands",
    subregion: "Micronesia",
    language: "Marshallese",
  },
  { name: "Mauritania", subregion: "Western Africa", language: "Arabic" },
  {
    name: "Mauritius",
    subregion: "Eastern Africa",
    language: "English",
  },
  { name: "Mexico", subregion: "Central America", language: "Spanish" },
  {
    name: "Micronesia (Federated States of)",
    subregion: "Micronesia",
    language: "English",
  },
  {
    name: "Moldova (Republic of)",
    subregion: "Eastern Europe",
    language: "Moldovan",
  },
  { name: "Monaco", subregion: "Western Europe", language: "French" },
  { name: "Mongolia", subregion: "Eastern Asia", language: "Mongolian" },
  { name: "Montenegro", subregion: "Southern Europe", language: "Serbian" },
  {
    name: "Morocco",
    subregion: "Northern Africa",
    language: "Arabic",
  },
  {
    name: "Mozambique",
    subregion: "Eastern Africa",
    language: "Portuguese",
  },
  { name: "Myanmar", subregion: "South-Eastern Asia", language: "Burmese" },
  {
    name: "Oman",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "Pakistan",
    subregion: "Southern Asia",
    language: "Urdu",
  },
  {
    name: "Palau",
    subregion: "Micronesia",
    language: "Palauan",
  },
  {
    name: "Palestine, State of",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "Panama",
    subregion: "Central America",
    language: "Spanish",
  },
  {
    name: "Papua New Guinea",
    subregion: "Melanesia",
    language: "English",
  },
  {
    name: "Paraguay",
    subregion: "South America",
    language: "Spanish",
  },
  {
    name: "Peru",
    subregion: "South America",
    language: "Spanish",
  },
  {
    name: "Philippines",
    subregion: "South-Eastern Asia",
    language: "Filipino",
  },
  {
    name: "Poland",
    subregion: "Eastern Europe",
    language: "Polish",
  },
  {
    name: "Portugal",
    subregion: "Southern Europe",
    language: "Portuguese",
  },
  {
    name: "Russia",
    subregion: "Eastern Europe",
    language: "Russian",
  },
  {
    name: "Rwanda",
    subregion: "Eastern Africa",
    language: "Kinyarwanda",
  },
  {
    name: "Romania",
    subregion: "Eastern Europe",
    language: "Romanian",
  },
  {
    name: "Republic of Moldova",
    subregion: "Eastern Europe",
    language: "Romanian",
  },
  {
    name: "Saint Lucia",
    subregion: "Caribbean",
    language: "English",
  },
  {
    name: "Samoa",
    subregion: "Polynesia",
    language: "Samoan",
  },
  {
    name: "San Marino",
    subregion: "Southern Europe",
    language: "Italian",
  },
  {
    name: "Sao Tome and Principe",
    subregion: "Middle Africa",
    language: "Portuguese",
  },
  {
    name: "Saudi Arabia",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "Senegal",
    subregion: "Western Africa",
    language: "French",
  },
  {
    name: "Serbia",
    subregion: "Southern Europe",
    language: "Serbian",
  },
  {
    name: "Seychelles",
    subregion: "Eastern Africa",
    language: "Seychellois Creole",
  },
  {
    name: "Sierra Leone",
    subregion: "Western Africa",
    language: "English",
  },
  {
    name: "Singapore",
    subregion: "South-Eastern Asia",
    language: "English",
  },
  {
    name: "Slovakia",
    subregion: "Central Europe",
    language: "Slovak",
  },
  {
    name: "Slovenia",
    subregion: "Southern Europe",
    language: "Slovenian",
  },
  {
    name: "Solomon Islands",
    subregion: "Melanesia",
    language: "English",
  },
  {
    name: "Somalia",
    subregion: "Eastern Africa",
    language: "Somali",
  },
  {
    name: "South Africa",
    subregion: "Southern Africa",
    language: "English",
  },
  {
    name: "South Sudan",
    subregion: "Eastern Africa",
    language: "English",
  },
  {
    name: "Spain",
    subregion: "Southern Europe",
    language: "Spanish",
  },
  {
    name: "Sri Lanka",
    subregion: "Southern Asia",
    language: "Sinhalese",
  },
  {
    name: "Sudan",
    subregion: "Northern Africa",
    language: "Arabic",
  },
  {
    name: "Suriname",
    subregion: "South America",
    language: "Dutch",
  },
  {
    name: "Sweden",
    subregion: "Northern Europe",
    language: "Swedish",
  },
  {
    name: "Switzerland",
    subregion: "Western Europe",
    language: "German",
  },
  {
    name: "Syrian Arab Republic",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "Tajikistan",
    subregion: "Central Asia",
    language: "Tajik",
  },
  {
    name: "Tanzania",
    subregion: "Eastern Africa",
    language: "Swahili",
  },
  {
    name: "Thailand",
    subregion: "South-Eastern Asia",
    language: "Thai",
  },
  {
    name: "Timor-Leste",
    subregion: "South-Eastern Asia",
    language: "Portuguese",
  },
  {
    name: "Togo",
    subregion: "Western Africa",
    language: "French",
  },
  {
    name: "Tonga",
    subregion: "Polynesia",
    language: "Tongan",
  },
  {
    name: "Trinidad and Tobago",
    subregion: "Caribbean",
    language: "English",
  },
  {
    name: "Tunisia",
    subregion: "Northern Africa",
    language: "Arabic",
  },
  {
    name: "Turkey",
    subregion: "Western Asia",
    language: "Turkish",
  },
  {
    name: "Turkmenistan",
    subregion: "Central Asia",
    language: "Turkmen",
  },
  {
    name: "Tuvalu",
    subregion: "Polynesia",
    language: "Tuvaluan",
  },
  { name: "Uganda", subregion: "Eastern Africa", language: "English" },
  { name: "Ukraine", subregion: "Eastern Europe", language: "Ukrainian" },
  {
    name: "United Arab Emirates",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "United Kingdom",
    subregion: "Northern Europe",
    language: "English",
  },
  {
    name: "United States of America",
    subregion: "Northern America",
    language: "English",
  },
  { name: "Uruguay", subregion: "South America", language: "Spanish" },
  { name: "Uzbekistan", subregion: "Central Asia", language: "Uzbek" },
  {
    name: "Vanuatu",
    subregion: "Melanesia",
    language: "Bislama",
  },
  {
    name: "Vatican City",
    subregion: "Southern Europe",
    language: "Italian",
  },
  {
    name: "Venezuela",
    subregion: "South America",
    language: "Spanish",
  },
  {
    name: "Vietnam",
    subregion: "South-Eastern Asia",
    language: "Vietnamese",
  },
  {
    name: "Wallis and Futuna",
    subregion: "Polynesia",
    language: "French",
  },
  {
    name: "Western Sahara",
    subregion: "Northern Africa",
    language: "Arabic",
  },
  {
    name: "Yemen",
    subregion: "Western Asia",
    language: "Arabic",
  },
  {
    name: "Zambia",
    subregion: "Eastern Africa",
    language: "English",
  },
  {
    name: "Zimbabwe",
    subregion: "Eastern Africa",
    language: "English",
  },
  { name: "Alabama", subregion: "South", language: "English" },
  { name: "Alaska", subregion: "West", language: "English" },
  { name: "Arizona", subregion: "West", language: "English" },
  { name: "Arkansas", subregion: "South", language: "English" },
  { name: "California", subregion: "West", language: "English" },
  { name: "Colorado", subregion: "West", language: "English" },
  { name: "Connecticut", subregion: "Northeast", language: "English" },
  { name: "Delaware", subregion: "South", language: "English" },
  { name: "Florida", subregion: "South", language: "English" },
  { name: "Georgia", subregion: "South", language: "English" },
  { name: "Hawaii", subregion: "West", language: "English, Hawaiian" },
  { name: "Idaho", subregion: "West", language: "English" },
  { name: "Illinois", subregion: "Midwest", language: "English" },
  { name: "Indiana", subregion: "Midwest", language: "English" },
  { name: "Iowa", subregion: "Midwest", language: "English" },
  { name: "Kansas", subregion: "Midwest", language: "English" },
  { name: "Kentucky", subregion: "South", language: "English" },
  { name: "Louisiana", subregion: "South", language: "English, French" },
  { name: "Maine", subregion: "Northeast", language: "English" },
  { name: "Maryland", subregion: "South", language: "English" },
  { name: "Massachusetts", subregion: "Northeast", language: "English" },
  { name: "Michigan", subregion: "Midwest", language: "English" },
  { name: "Minnesota", subregion: "Midwest", language: "English" },
  { name: "Mississippi", subregion: "South", language: "English" },
  { name: "Missouri", subregion: "Midwest", language: "English" },
  { name: "Montana", subregion: "West", language: "English" },
  { name: "Nebraska", subregion: "Midwest", language: "English" },
  { name: "Nevada", subregion: "West", language: "English" },
  { name: "New Hampshire", subregion: "Northeast", language: "English" },
  { name: "New Jersey", subregion: "Northeast", language: "English" },
  { name: "New Mexico", subregion: "West", language: "English, Spanish" },
  { name: "New York", subregion: "Northeast", language: "English" },
  { name: "North Carolina", subregion: "South", language: "English" },
  { name: "North Dakota", subregion: "Midwest", language: "English" },
  { name: "Ohio", subregion: "Midwest", language: "English" },
  { name: "Oklahoma", subregion: "South", language: "English" },
  { name: "Oregon", subregion: "West", language: "English, Spanish" },
  { name: "Pennsylvania", subregion: "Northeast", language: "English" },
  { name: "Rhode Island", subregion: "Northeast", language: "English" },
  { name: "South Carolina", subregion: "South", language: "English" },
  { name: "South Dakota", subregion: "Midwest", language: "English" },
  { name: "Tennessee", subregion: "South", language: "English" },
  { name: "Texas", subregion: "South", language: "English, Spanish" },
  { name: "Utah", subregion: "West", language: "English" },
  { name: "Vermont", subregion: "Northeast", language: "English" },
  { name: "Virginia", subregion: "South", language: "English" },
  { name: "Washington", subregion: "West", language: "English, Spanish" },
  { name: "West Virginia", subregion: "South", language: "English" },
  { name: "Wisconsin", subregion: "Midwest", language: "English" },
  { name: "Wyoming", subregion: "West", language: "English" },
];

const stamps = [
  {
    destination_name: "Austria",
    destination_notes:
      "Austria was amazing, we drank lots of beer and skied some tall mountains!",
    UserId: 1,
    Photos: [1],
  },
  {
    destination_name: "Belize",
    destination_notes:
      "Belize was incredible! On our first scuba dive of the day we saw a Whale Shark!!!",
    UserId: 3,
    Photos: [3],
  },
  {
    destination_name: "Canada",
    destination_notes:
      "Canada was phenomenal! We hiked in British Columbia, saw bears, and ate poutine!",
    UserId: 2,
    Photos: [5],
  },
  {
    destination_name: "Egypt",
    destination_notes:
      "Egypt was a spectacle! We sailed the Nile and saw the pyramids, and probably didnt come back with a curse from an ancient mummy...probably",
    UserId: 2,
    Photos: [2],
  },
  {
    destination_name: "Iceland",
    destination_notes:
      "Iceland was the most picture-esque place I've ever been! The weather wasn't great, but it didnt matter! it looks like a different planet!",
    UserId: 1,
    Photos: [6],
  },
  {
    destination_name: "Laos",
    destination_notes:
      "Amazing country-side! I rode my motorcycle all the way though the country, the people are so nice, and the food is amaze-balls!",
    UserId: 4,
    Photos: [4],
  },
  {
    destination_name: "Portugal",
    destination_notes:
      "I visited the island off the coast of portugal named Madeira and went running in the cloud mountains! absolutely unreal!!",
    UserId: 4,
    Photos: [],
  },
];

const seedDatabase = async () => {
  try {
    await sequelize.sync({ force: false });

    const userData = await User.bulkCreate(users, {
      individualHooks: true,
      returning: true,
    });
    const photoData = await Photo.bulkCreate(photos);

    const placeData = await Place.bulkCreate(places);

    const stampData = await Stamp.bulkCreate(stamps);

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

seedDatabase();
