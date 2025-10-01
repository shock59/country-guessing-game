const mottos = [
  {
    iso: "AL",
    countryName: "Albania",
    motto: "You, Albania, give me honour, give me the name Albanian",
    censoredMotto: "You, *****, give me honour, give me the name *****",
  },
  {
    iso: "DZ",
    countryName: "Algeria",
    motto: "By the people and for the people",
  },
  {
    iso: "AD",
    countryName: "Andorra",
    motto: "Strength united is stronger",
  },
  {
    iso: "AO",
    countryName: "Andorra",
    motto: "Virtue is stronger when united",
  },
  {
    iso: "AG",
    countryName: "Antigua and Barbuda",
    motto: "Each endeavouring, all achieving",
  },
  {
    iso: "AM",
    countryName: "Armenia",
    motto: "One Nation, One Culture",
  },
  {
    iso: "BS",
    countryName: "The Bahamas",
    motto: "Forward, Upward, Onward Together",
  },
  {
    iso: "BB",
    countryName: "Barbados",
    motto: "Pride and Industry",
  },
  {
    iso: "BE",
    countryName: "Belgium",
    motto: "Unity makes strength",
  },
  {
    iso: "BZ",
    countryName: "Belize",
    motto: "Under the shade I flourish",
  },
  {
    iso: "BJ",
    countryName: "Benin",
    motto: "Fellowship, Justice, Labour",
  },
  {
    iso: "BO",
    countryName: "Bolivia",
    motto: "Unity makes strength",
  },
  {
    iso: "BW",
    countryName: "Botswana",
    motto: "Rain",
  },
  {
    iso: "BR",
    countryName: "Brazil",
    motto: "Order and progress",
  },
  {
    iso: "BN",
    countryName: "Brunei",
    motto: "Always in service with God's guidance",
  },
  {
    iso: "BF",
    countryName: "Burkina Faso",
    motto: "Fatherland or death, we shall triumph!",
  },
  {
    iso: "BI",
    countryName: "Burundi",
    motto: "Unity, Work, Progress",
  },
  {
    iso: "KH",
    countryName: "Cambodia",
    motto: "Nation, Religion, King",
  },
  {
    iso: "CM",
    countryName: "Cameroon",
    motto: "Peace, Work, Fatherland",
  },
  {
    iso: "CA",
    countryName: "Canada",
    motto: "From sea to sea",
  },
  {
    iso: "CF",
    countryName: "Central African Republic",
    motto: "Unity, Dignity, Work",
  },
  {
    iso: "CL",
    countryName: "Chile",
    motto: "Through reason or by force",
  },
  {
    iso: "CO",
    countryName: "Colombia",
    motto: "Freedom and order",
  },
  {
    iso: "KM",
    countryName: "Comoros",
    motto: "Unity, Solidarity, Development",
  },
  {
    iso: "CD",
    countryName: "Democratic Republic of the Congo",
    motto: "Justice, Peace, Work",
  },
  {
    iso: "CU",
    countryName: "Cuba",
    motto: "Fatherland or death, we shall overcome!",
  },
  {
    iso: "CZ",
    countryName: "Czechia",
    motto: "Truth prevails",
  },
  {
    iso: "DK",
    countryName: "Czechia",
    motto: "United, committed, for the Kingdom of Denmark",
    censoredMotto: "United, committed, for the Kingdom of *****",
  },
  {
    iso: "DJ",
    countryName: "Djibouti",
    motto: "Unity, Equality, Peace",
  },
  {
    iso: "DM",
    countryName: "Dominica",
    motto: "After God, the Earth",
  },
  {
    iso: "DO",
    countryName: "Dominican Republic",
    motto: "God, Fatherland, Liberty",
  },
  {
    iso: "TL",
    countryName: "Timor-Leste",
    motto: "Unity, Action, Progress",
  },
  {
    iso: "EC",
    countryName: "Ecuador",
    motto: "God, homeland, and freedom",
  },
  {
    iso: "SV",
    countryName: "El Salvador",
    motto: "God, Union, Liberty",
  },
  {
    iso: "GQ",
    countryName: "Equatorial Guinea",
    motto: "Unity, Peace, Justice",
  },
  {
    iso: "ER",
    countryName: "Eritrea",
    motto: "Victory to the Masses!",
  },
  {
    iso: "SZ",
    countryName: "Eswatini",
    motto: "We are the fortress",
  },
  {
    iso: "FJ",
    countryName: "Fiji",
    motto: "Fear God and honour the King",
  },
  {
    iso: "FR",
    countryName: "France",
    motto: "Liberty, equality, fraternity",
  },
  {
    iso: "GA",
    countryName: "Gabon",
    motto: "Union, Work, Justice",
  },
  {
    iso: "GM",
    countryName: "The Gambia",
    motto: "Progress, Peace, Prosperity",
  },
  {
    iso: "GH",
    countryName: "Ghana",
    motto: "Freedom and Justice",
  },
  {
    iso: "GR",
    countryName: "Greece",
    motto: "Freedom or Death",
  },
  {
    iso: "GD",
    countryName: "Grenada",
    motto: "Ever Conscious of God We Aspire, Build and Advance as One People",
  },
  {
    iso: "GT",
    countryName: "Guatemala",
    motto: "Grow Free and Fertile",
  },
  {
    iso: "GN",
    countryName: "Guinea",
    motto: "Work, Justice, Solidarity",
  },
  {
    iso: "GW",
    countryName: "Guinea-Bissau",
    motto: "Unity, Struggle, Progress",
  },
  {
    iso: "GY",
    countryName: "Guyana",
    motto: "One People, One Nation, One Destiny",
  },
  {
    iso: "HN",
    countryName: "Honduras",
    motto: "Free, sovereign and independent",
  },
  {
    iso: "IN",
    countryName: "India",
    motto: "Truth alone triumphs",
  },
  {
    iso: "ID",
    countryName: "Indonesia",
    motto: "Unity in diversity",
  },
  {
    iso: "IQ",
    countryName: "Iraq",
    motto: "God is the Greatest",
  },
  {
    iso: "CI",
    countryName: "Ivory Coast",
    motto: "Unity, Discipline, Labor",
  },
  {
    iso: "JM",
    countryName: "Jamaica",
    motto: "Out of many, One People",
  },
  {
    iso: "JO",
    countryName: "Jordan",
    motto: "God, Homeland, King",
  },
  {
    iso: "KE",
    countryName: "Kenya",
    motto: "All pull together",
  },
  {
    iso: "KI",
    countryName: "Kiribati",
    motto: "Health, Peace and Prosperity",
  },
  {
    iso: "KP",
    countryName: "North Korea",
    motto: "Strong and Prosperous Nation",
  },
  {
    iso: "KR",
    countryName: "South Korea",
    motto: "To broadly benefit the human world",
  },
  {
    iso: "KW",
    countryName: "Kuwait",
    motto: "God, Nation, The Emir",
  },
  {
    iso: "LA",
    countryName: "Laos",
    motto: "Peace, independence, democracy, unity and prosperity",
  },
  {
    iso: "LB",
    countryName: "Lebanon",
    motto: "We are all for the Country, the Sublime and the Flag",
  },
  {
    iso: "LS",
    countryName: "Lesotho",
    motto: "Peace, Rain, Prosperity",
  },
  {
    iso: "LR",
    countryName: "Liberia",
    motto: "The love of liberty brought us here",
  },
  {
    iso: "LI",
    countryName: "Liechtenstein",
    motto: "For God, Prince and Fatherland",
  },
  {
    iso: "LU",
    countryName: "Luxembourg",
    motto: "We want to remain what we are",
  },
  {
    iso: "MG",
    countryName: "Madagascar",
    motto: "Love, Ancestral-land, Progress",
  },
  {
    iso: "MW",
    countryName: "Malawi",
    motto: "Unity and Freedom",
  },
  {
    iso: "MY",
    countryName: "Malaysia",
    motto: "Unity is strength",
  },
  {
    iso: "ML",
    countryName: "Mali",
    motto: "One people, one goal, one faith",
  },
  {
    iso: "MT",
    countryName: "Malta",
    motto: "Virtuous strength and consistency",
  },
  {
    iso: "MH",
    countryName: "Marshall Islands",
    motto: "Accomplishment/Achievement through Joint Effort",
  },
  {
    iso: "MH",
    countryName: "Marshall Islands",
    motto: "Accomplishment/Achievement through Joint Effort",
  },
  {
    iso: "MR",
    countryName: "Mauritania",
    motto: "Honor, Fraternity, Justice",
  },
  {
    iso: "MU",
    countryName: "Mauritius",
    motto: "Star and key of the Indian Ocean",
  },
  {
    iso: "FM",
    countryName: "Micronesia",
    motto: "Peace, Unity, Liberty",
  },
  {
    iso: "MC",
    countryName: "Monaco",
    motto: "With God's help",
  },
  {
    iso: "NA",
    countryName: "Namibia",
    motto: "Unity, liberty, justice",
  },
  {
    iso: "NR",
    countryName: "Nauru",
    motto: "God's will first",
  },
  {
    iso: "NP",
    countryName: "Nepal",
    motto: "Mother and motherland are greater than heaven",
  },
  {
    iso: "NL",
    countryName: "Netherlands",
    motto: "I will maintain",
  },
  {
    iso: "NE",
    countryName: "Niger",
    motto: "Fraternity, Work, Progress",
  },
  {
    iso: "NG",
    countryName: "Nigeria",
    motto: "Unity and Faith, Peace and Progress",
  },
  {
    iso: "OM",
    countryName: "Oman",
    motto: "God, Nation, Sultan",
  },
  {
    iso: "PK",
    countryName: "Pakistan",
    motto: "Faith, Unity, Discipline",
  },
  {
    iso: "PA",
    countryName: "Panama",
    motto: "For the benefit of the world",
  },
  {
    iso: "PY",
    countryName: "Paraguay",
    motto: "Peace and justice",
  },
  {
    iso: "PH",
    countryName: "Philippines",
    motto: "For God, for the people, for nature and for the country",
  },
  {
    iso: "PT",
    countryName: "Portugal",
    motto: "This is my blissful beloved homeland",
  },
  {
    iso: "RW",
    countryName: "Rwanda",
    motto: "Unity, Work, Patriotism",
  },
  {
    iso: "KN",
    countryName: "Saint Kitts and Nevis",
    motto: "Country Above Self",
  },
  {
    iso: "LC",
    countryName: "Saint Lucia",
    motto: "The land, the people, the light",
  },
  {
    iso: "WS",
    countryName: "Samoa",
    motto: "God be the Foundation of Samoa",
    censoredMotto: "God be the Foundation of *****",
  },
  {
    iso: "SM",
    countryName: "San Marino",
    motto: "Liberty",
  },
  {
    iso: "ST",
    countryName: "Sao Tome and Principe",
    motto: "Unity, Discipline, Work",
  },
  {
    iso: "SA",
    countryName: "Saudi Arabia",
    motto: "There is no god but God, Muhammad is the Messenger of God",
  },
  {
    iso: "SA",
    countryName: "Saudi Arabia",
    motto: "There is no god but God, Muhammad is the Messenger of God",
  },
  {
    iso: "SC",
    countryName: "Seychelles",
    motto: "The end crowns the work",
  },
  {
    iso: "SL",
    countryName: "Sierra Leone",
    motto: "Unity, freedom, justice",
  },
  {
    iso: "SG",
    countryName: "Singapore",
    motto: "Onward Singapore",
    censoredMotto: "Onward *****",
  },
  {
    iso: "SB",
    countryName: "Solomon Islands",
    motto: "To lead is to serve",
  },
  {
    iso: "SS",
    countryName: "South Sudan",
    motto: "Justice, Liberty, Prosperity",
  },
  {
    iso: "ES",
    countryName: "Spain",
    motto: "Further beyond",
  },
  {
    iso: "SD",
    countryName: "Sudan",
    motto: "Victory is Ours",
  },
  {
    iso: "SR",
    countryName: "Suriname",
    motto: "Justice, piety, loyalty",
  },
  {
    iso: "TJ",
    countryName: "Tajikistan",
    motto: "Independence, Freedom, Homeland!",
  },
  {
    iso: "TZ",
    countryName: "Tanzania",
    motto: "Freedom and Unity",
  },
  {
    iso: "TG",
    countryName: "Togo",
    motto: "Work, Liberty, Homeland",
  },
  {
    iso: "TO",
    countryName: "Tonga",
    motto: "God and Tonga are my Inheritance",
    censoredMotto: "God and ***** are my Inheritance",
  },
  {
    iso: "TT",
    countryName: "Trinidad and Tobago",
    motto: "Together we aspire, together we achieve",
  },
  {
    iso: "TN",
    countryName: "Tunisia",
    motto: "Freedom, Order, Justice",
  },
  {
    iso: "TR",
    countryName: "Turkey",
    motto: "Discover the Potential",
  },
  {
    iso: "TV",
    countryName: "Tuvalu",
    motto: "Tuvalu for the Almighty",
    censoredMotto: "***** for the Almighty",
  },
  {
    iso: "UG",
    countryName: "Uganda",
    motto: "For God and My Country",
  },
  {
    iso: "US",
    countryName: "United States",
    motto: "In God We Trust",
  },
  {
    iso: "UY",
    countryName: "Uruguay",
    motto: "Liberty or Death",
  },
  {
    iso: "UZ",
    countryName: "Uzbekistan",
    motto: "The Strength is in The Justice!",
  },
  {
    iso: "VU",
    countryName: "Vanuatu",
    motto: "In God we stand",
  },
  {
    iso: "VN",
    countryName: "Vietnam",
    motto: "Independence, Liberty, Happiness",
  },
  {
    iso: "YE",
    countryName: "Yemen",
    motto: "God, Homeland, Revolution, Unity",
  },
  {
    iso: "ZM",
    countryName: "Zambia",
    motto: "One Zambia, One Nation",
    censoredMotto: "One *****, One Nation",
  },
  {
    iso: "ZW",
    countryName: "Yemen",
    motto: "Unity, Freedom, Work",
  },
];
