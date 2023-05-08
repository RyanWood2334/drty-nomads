const sequelize = require("../config/connection");

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
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/video/upload/v1683347057/samples/elephants.mp4",
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347052/samples/landscapes/nature-mountains.jpg",
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347049/samples/landscapes/beach-boat.jpg",
  },
  {
    photo_url:
      "https://res.cloudinary.com/duaznt4wg/image/upload/v1683347042/samples/animals/reindeer.jpg",
  },
];

const places = [
  {
    name: "Afghanistan",
    subregion: "Southern Asia",
    languages: ["Pashto", "Dari"],
  },
  { name: "Albania", subregion: "Southern Europe", languages: ["Albanian"] },
  { name: "Algeria", subregion: "Northern Africa", languages: ["Arabic"] },
  { name: "Andorra", subregion: "Southern Europe", languages: ["Catalan"] },
  { name: "Angola", subregion: "Middle Africa", languages: ["Portuguese"] },
  {
    name: "Antigua and Barbuda",
    subregion: "Caribbean",
    languages: ["English"],
  },
  { name: "Argentina", subregion: "South America", languages: ["Spanish"] },
  { name: "Armenia", subregion: "Western Asia", languages: ["Armenian"] },
  {
    name: "Australia",
    subregion: "Australia and New Zealand",
    languages: ["English"],
  },
  { name: "Austria", subregion: "Western Europe", languages: ["German"] },
  { name: "Azerbaijan", subregion: "Western Asia", languages: ["Azerbaijani"] },
  { name: "Bahamas", subregion: "Caribbean", languages: ["English"] },
  { name: "Bahrain", subregion: "Western Asia", languages: ["Arabic"] },
  { name: "Bangladesh", subregion: "Southern Asia", languages: ["Bengali"] },
  { name: "Barbados", subregion: "Caribbean", languages: ["English"] },
  {
    name: "Belarus",
    subregion: "Eastern Europe",
    languages: ["Belarusian", "Russian"],
  },
  {
    name: "Belgium",
    subregion: "Western Europe",
    languages: ["Dutch", "French", "German"],
  },
  {
    name: "Belize",
    subregion: "Central America",
    languages: ["English", "Spanish"],
  },
  { name: "Benin", subregion: "Western Africa", languages: ["French"] },
  { name: "Bhutan", subregion: "Southern Asia", languages: ["Dzongkha"] },
  {
    name: "Bolivia",
    subregion: "South America",
    languages: ["Spanish", "Quechua", "Aymara"],
  },
  {
    name: "Bosnia and Herzegovina",
    subregion: "Southern Europe",
    languages: ["Bosnian", "Croatian", "Serbian"],
  },
  {
    name: "Botswana",
    subregion: "Southern Africa",
    languages: ["English", "Tswana"],
  },
  { name: "Brazil", subregion: "South America", languages: ["Portuguese"] },
  { name: "Brunei", subregion: "South-Eastern Asia", languages: ["Malay"] },
  { name: "Bulgaria", subregion: "Eastern Europe", languages: ["Bulgarian"] },
  { name: "Burkina Faso", subregion: "Western Africa", languages: ["French"] },
  {
    name: "Burundi",
    subregion: "Eastern Africa",
    languages: ["Kirundi", "French"],
  },
  { name: "Cambodia", subregion: "South-Eastern Asia", languages: ["Khmer"] },
  {
    name: "Cameroon",
    subregion: "Middle Africa",
    languages: ["French", "English"],
  },
  {
    name: "Canada",
    subregion: "Northern America",
    languages: ["English", "French"],
  },
  {
    name: "Cape Verde",
    subregion: "Western Africa",
    languages: ["Portuguese"],
  },
  {
    name: "Central African Republic",
    subregion: "Middle Africa",
    languages: ["Sango", "French"],
  },
  { name: "Chad", subregion: "Middle Africa", languages: ["French", "Arabic"] },
  { name: "Chile", subregion: "South America", languages: ["Spanish"] },
  { name: "China", subregion: "Eastern Asia", languages: ["Chinese"] },
  { name: "Colombia", subregion: "South America", languages: ["Spanish"] },
  {
    name: "Comoros",
    subregion: "Eastern Africa",
    languages: ["Comorian", "Arabic", "French"],
  },
  { name: "Congo", subregion: "Middle Africa", languages: ["French"] },

  { name: "Costa Rica", subregion: "Central America", languages: ["Spanish"] },

  { name: "Côte d'Ivoire", subregion: "Western Africa", languages: ["French"] },

  { name: "Croatia", subregion: "Southern Europe", languages: ["Croatian"] },

  { name: "Cuba", subregion: "Caribbean", languages: ["Spanish"] },
  {
    name: "Cyprus",
    subregion: "Western Asia",
    languages: ["Greek", "Turkish"],
  },
  { name: "Czech Republic", subregion: "Eastern Europe", languages: ["Czech"] },
  { name: "Denmark", subregion: "Northern Europe", languages: ["Danish"] },
  {
    name: "Djibouti",
    subregion: "Eastern Africa",
    languages: ["French", "Arabic"],
  },
  { name: "Dominica", subregion: "Caribbean", languages: ["English"] },
  {
    name: "Dominican Republic",
    subregion: "Caribbean",
    languages: ["Spanish"],
  },
  {
    name: "East Timor",
    subregion: "South-Eastern Asia",
    languages: ["Portuguese", "Tetum"],
  },
  { name: "Ecuador", subregion: "South America", languages: ["Spanish"] },
  { name: "Egypt", subregion: "Northern Africa", languages: ["Arabic"] },
  { name: "El Salvador", subregion: "Central America", languages: ["Spanish"] },
  {
    name: "Equatorial Guinea",
    subregion: "Middle Africa",
    languages: ["Spanish", "French", "Portuguese"],
  },
  {
    name: "Eritrea",
    subregion: "Eastern Africa",
    languages: ["Tigrinya", "Arabic", "English"],
  },
  { name: "Estonia", subregion: "Northern Europe", languages: ["Estonian"] },
  {
    name: "Eswatini",
    subregion: "Southern Africa",
    languages: ["Swazi", "English"],
  },
  { name: "Ethiopia", subregion: "Eastern Africa", languages: ["Amharic"] },
  {
    name: "Fiji",
    subregion: "Melanesia",
    languages: ["English", "Fijian", "Hindi", "Urdu"],
  },
  {
    name: "Finland",
    subregion: "Northern Europe",
    languages: ["Finnish", "Swedish"],
  },
  { name: "France", subregion: "Western Europe", languages: ["French"] },
  { name: "French Guiana", subregion: "South America", languages: ["French"] },
  { name: "French Polynesia", subregion: "Polynesia", languages: ["French"] },
  { name: "Gabon", subregion: "Middle Africa", languages: ["French"] },
  { name: "Gambia", subregion: "Western Africa", languages: ["English"] },
  { name: "Georgia", subregion: "Western Asia", languages: ["Georgian"] },
  { name: "Germany", subregion: "Western Europe", languages: ["German"] },
  { name: "Ghana", subregion: "Western Africa", languages: ["English"] },
  { name: "Gibraltar", subregion: "Southern Europe", languages: ["English"] },
  { name: "Greece", subregion: "Southern Europe", languages: ["Greek"] },
  {
    name: "Greenland",
    subregion: "Northern America",
    languages: ["Greenlandic", "Danish"],
  },
  { name: "Grenada", subregion: "Caribbean", languages: ["English"] },
  { name: "Guadeloupe", subregion: "Caribbean", languages: ["French"] },
  { name: "Guam", subregion: "Micronesia", languages: ["English", "Chamorro"] },
  { name: "Guatemala", subregion: "Central America", languages: ["Spanish"] },
  {
    name: "Guernsey",
    subregion: "Northern Europe",
    languages: ["English", "French"],
  },
  { name: "Guinea", subregion: "Western Africa", languages: ["French"] },
  {
    name: "Guinea-Bissau",
    subregion: "Western Africa",
    languages: ["Portuguese"],
  },
  { name: "Guyana", subregion: "South America", languages: ["English"] },
  {
    name: "Haiti",
    subregion: "Caribbean",
    languages: ["French", "Haitian Creole"],
  },
  { name: "Honduras", subregion: "Central America", languages: ["Spanish"] },
  {
    name: "Hong Kong",
    subregion: "Eastern Asia",
    languages: ["Chinese", "English"],
  },
  { name: "Hungary", subregion: "Eastern Europe", languages: ["Hungarian"] },
  { name: "Iceland", subregion: "Northern Europe", languages: ["Icelandic"] },
  {
    name: "India",
    subregion: "Southern Asia",
    languages: ["Hindi", "English"],
  },
  {
    name: "Indonesia",
    subregion: "South-Eastern Asia",
    languages: ["Indonesian"],
  },
  {
    name: "Iran (Islamic Republic of)",
    subregion: "Southern Asia",
    languages: ["Persian"],
  },
  { name: "Iraq", subregion: "Western Asia", languages: ["Arabic", "Kurdish"] },
  {
    name: "Ireland",
    subregion: "Northern Europe",
    languages: ["Irish", "English"],
  },
  {
    name: "Isle of Man",
    subregion: "Northern Europe",
    languages: ["English", "Manx"],
  },
  {
    name: "Israel",
    subregion: "Western Asia",
    languages: ["Hebrew", "Arabic"],
  },
  { name: "Italy", subregion: "Southern Europe", languages: ["Italian"] },
  { name: "Jamaica", subregion: "Caribbean", languages: ["English"] },
  { name: "Japan", subregion: "Eastern Asia", languages: ["Japanese"] },
  { name: "Jordan", subregion: "Western Asia", languages: ["Arabic"] },
  {
    name: "Kazakhstan",
    subregion: "Central Asia",
    languages: ["Kazakh", "Russian"],
  },
  {
    name: "Kenya",
    subregion: "Eastern Africa",
    languages: ["Swahili", "English"],
  },
  {
    name: "Kiribati",
    subregion: "Micronesia",
    languages: ["English", "Gilbertese"],
  },
  { name: "Kuwait", subregion: "Western Asia", languages: ["Arabic"] },
  {
    name: "Kyrgyzstan",
    subregion: "Central Asia",
    languages: ["Kyrgyz", "Russian"],
  },
  { name: "Laos", subregion: "South-Eastern Asia", languages: ["Lao"] },
  { name: "Latvia", subregion: "Northern Europe", languages: ["Latvian"] },
  { name: "Lebanon", subregion: "Western Asia", languages: ["Arabic"] },
  {
    name: "Lesotho",
    subregion: "Southern Africa",
    languages: ["Sesotho", "English"],
  },
  { name: "Liberia", subregion: "Western Africa", languages: ["English"] },
  { name: "Libya", subregion: "Northern Africa", languages: ["Arabic"] },
  { name: "Liechtenstein", subregion: "Western Europe", languages: ["German"] },
  {
    name: "Lithuania",
    subregion: "Northern Europe",
    languages: ["Lithuanian"],
  },
  {
    name: "Luxembourg",
    subregion: "Western Europe",
    languages: ["French", "German", "Luxembourgish"],
  },
  {
    name: "Macedonia (the former Yugoslav Republic of)",
    subregion: "Southern Europe",
    languages: ["Macedonian"],
  },
  {
    name: "Madagascar",
    subregion: "Eastern Africa",
    languages: ["Malagasy", "French"],
  },
  {
    name: "Malawi",
    subregion: "Eastern Africa",
    languages: ["Chichewa", "English"],
  },
  { name: "Malaysia", subregion: "South-Eastern Asia", languages: ["Malay"] },
  { name: "Maldives", subregion: "Southern Asia", languages: ["Dhivehi"] },
  { name: "Mali", subregion: "Western Africa", languages: ["French"] },
  {
    name: "Malta",
    subregion: "Southern Europe",
    languages: ["Maltese", "English"],
  },
  {
    name: "Marshall Islands",
    subregion: "Micronesia",
    languages: ["Marshallese", "English"],
  },
  { name: "Mauritania", subregion: "Western Africa", languages: ["Arabic"] },
  {
    name: "Mauritius",
    subregion: "Eastern Africa",
    languages: ["English", "French"],
  },
  { name: "Mexico", subregion: "Central America", languages: ["Spanish"] },
  {
    name: "Micronesia (Federated States of)",
    subregion: "Micronesia",
    languages: ["English"],
  },
  {
    name: "Moldova (Republic of)",
    subregion: "Eastern Europe",
    languages: ["Moldovan", "Russian"],
  },
  { name: "Monaco", subregion: "Western Europe", languages: ["French"] },
  { name: "Mongolia", subregion: "Eastern Asia", languages: ["Mongolian"] },
  { name: "Montenegro", subregion: "Southern Europe", languages: ["Serbian"] },
  {
    name: "Morocco",
    subregion: "Northern Africa",
    languages: ["Arabic", "Berber"],
  },
  {
    name: "Mozambique",
    subregion: "Eastern Africa",
    languages: ["Portuguese"],
  },
  { name: "Myanmar", subregion: "South-Eastern Asia", languages: ["Burmese"] },
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
  { name: "United Kingdom", subregion: "Northern Europe", language: "English" },
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
  },
  {
    destination_name: "Belize",
    destination_notes:
      "Belize was incredible! On our first scuba dive of the day we saw a Whale Shark!!!",
  },
  {
    destination_name: "Canada",
    destination_notes:
      "Canada was phenomenal! We hiked in British Columbia, saw bears, and ate poutine!",
  },
  {
    destination_name: "Egypt",
    destination_notes:
      "Egypt was a spectacle! We sailed the Nile and saw the pyramids, and probably didnt come back with a curse from an ancient mummy...probably",
  },
  {
    destination_name: "Iceland",
    destination_notes:
      "Iceland was the most picture-esque place I've ever been! The weather wasn't great, but it didnt matter! it looks like a different planet!",
  },
  {
    destination_name: "Laos",
    destination_notes:
      "Amazing country-side! I rode my motorcycle all the way though the country, the people are so nice, and the food is amaze-balls!",
  },
  {
    destination_name: "Portugal",
    destination_notes:
      "I visited the island off the coast of portugal named Madeira and went running in the cloud mountains! absolutely unreal!!",
  },
];
