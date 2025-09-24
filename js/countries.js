const countries = [
  {
    iso: "AF",
    countryName: "Afghanistan",
  },
  {
    iso: "AL",
    countryName: "Albania",
  },
  {
    iso: "DZ",
    countryName: "Algeria",
  },
  {
    iso: "AD",
    countryName: "Andorra",
  },
  {
    iso: "AO",
    countryName: "Angola",
  },
  {
    iso: "AG",
    countryName: "Antigua and Barbuda",
  },
  {
    iso: "AR",
    countryName: "Argentina",
  },
  {
    iso: "AM",
    countryName: "Armenia",
  },
  {
    iso: "AU",
    countryName: "Australia",
  },
  {
    iso: "AT",
    countryName: "Austria",
  },
  {
    iso: "AZ",
    countryName: "Azerbaijan",
  },
  {
    iso: "BH",
    countryName: "Bahrain",
  },
  {
    iso: "BD",
    countryName: "Bangladesh",
  },
  {
    iso: "BB",
    countryName: "Barbados",
  },
  {
    iso: "BY",
    countryName: "Belarus",
  },
  {
    iso: "BE",
    countryName: "Belgium",
  },
  {
    iso: "BZ",
    countryName: "Belize",
  },
  {
    iso: "BJ",
    countryName: "Benin",
  },
  {
    iso: "BT",
    countryName: "Bhutan",
  },
  {
    iso: "BO",
    countryName: "Bolivia",
  },
  {
    iso: "BA",
    countryName: "Bosnia and Herzegovina",
  },
  {
    iso: "BW",
    countryName: "Botswana",
  },
  {
    iso: "BR",
    countryName: "Brazil",
  },
  {
    iso: "BN",
    countryName: "Brunei",
  },
  {
    iso: "BG",
    countryName: "Bulgaria",
  },
  {
    iso: "BF",
    countryName: "Burkina Faso",
  },
  {
    iso: "BI",
    countryName: "Burundi",
  },
  {
    iso: "CV",
    countryName: "Cabo Verde",
  },
  {
    iso: "KH",
    countryName: "Cambodia",
  },
  {
    iso: "CM",
    countryName: "Cameroon",
  },
  {
    iso: "CA",
    countryName: "Canada",
  },
  {
    iso: "CF",
    countryName: "Central African Republic",
  },
  {
    iso: "TD",
    countryName: "Chad",
  },
  {
    iso: "CL",
    countryName: "Chile",
  },
  {
    iso: "CN",
    countryName: "China",
  },
  {
    iso: "CO",
    countryName: "Colombia",
  },
  {
    iso: "KM",
    countryName: "Comoros",
  },
  {
    iso: "CR",
    countryName: "Costa Rica",
  },
  {
    iso: "HR",
    countryName: "Croatia",
  },
  {
    iso: "CU",
    countryName: "Cuba",
  },
  {
    iso: "CY",
    countryName: "Cyprus",
  },
  {
    iso: "CZ",
    countryName: "Czechia",
  },
  {
    iso: "CD",
    countryName: "Democratic Republic of the Congo",
  },
  {
    iso: "DK",
    countryName: "Denmark",
  },
  {
    iso: "DJ",
    countryName: "Djibouti",
  },
  {
    iso: "DM",
    countryName: "Dominica",
  },
  {
    iso: "DO",
    countryName: "Dominican Republic",
  },
  {
    iso: "EC",
    countryName: "Ecuador",
  },
  {
    iso: "EG",
    countryName: "Egypt",
  },
  {
    iso: "SV",
    countryName: "El Salvador",
  },
  {
    iso: "GQ",
    countryName: "Equatorial Guinea",
  },
  {
    iso: "ER",
    countryName: "Eritrea",
  },
  {
    iso: "EE",
    countryName: "Estonia",
  },
  {
    iso: "SZ",
    countryName: "Eswatini",
  },
  {
    iso: "ET",
    countryName: "Ethiopia",
  },
  {
    iso: "FJ",
    countryName: "Fiji",
  },
  {
    iso: "FI",
    countryName: "Finland",
  },
  {
    iso: "FR",
    countryName: "France",
  },
  {
    iso: "GA",
    countryName: "Gabon",
  },
  {
    iso: "GE",
    countryName: "Georgia",
  },
  {
    iso: "DE",
    countryName: "Germany",
  },
  {
    iso: "GH",
    countryName: "Ghana",
  },
  {
    iso: "GR",
    countryName: "Greece",
  },
  {
    iso: "GD",
    countryName: "Grenada",
  },
  {
    iso: "GT",
    countryName: "Guatemala",
  },
  {
    iso: "GN",
    countryName: "Guinea",
  },
  {
    iso: "GW",
    countryName: "Guinea-Bissau",
  },
  {
    iso: "GY",
    countryName: "Guyana",
  },
  {
    iso: "HT",
    countryName: "Haiti",
  },
  {
    iso: "HN",
    countryName: "Honduras",
  },
  {
    iso: "HU",
    countryName: "Hungary",
  },
  {
    iso: "IS",
    countryName: "Iceland",
  },
  {
    iso: "IN",
    countryName: "India",
  },
  {
    iso: "ID",
    countryName: "Indonesia",
  },
  {
    iso: "IR",
    countryName: "Iran",
  },
  {
    iso: "IQ",
    countryName: "Iraq",
  },
  {
    iso: "IE",
    countryName: "Ireland",
  },
  {
    iso: "IL",
    countryName: "Israel",
  },
  {
    iso: "IT",
    countryName: "Italy",
  },
  {
    iso: "CI",
    countryName: "Ivory Coast",
  },
  {
    iso: "JM",
    countryName: "Jamaica",
  },
  {
    iso: "JP",
    countryName: "Japan",
  },
  {
    iso: "JO",
    countryName: "Jordan",
  },
  {
    iso: "KZ",
    countryName: "Kazakhstan",
  },
  {
    iso: "KE",
    countryName: "Kenya",
  },
  {
    iso: "KI",
    countryName: "Kiribati",
  },
  {
    iso: "XK",
    countryName: "Kosovo",
  },
  {
    iso: "KW",
    countryName: "Kuwait",
  },
  {
    iso: "KG",
    countryName: "Kyrgyzstan",
  },
  {
    iso: "LA",
    countryName: "Laos",
  },
  {
    iso: "LV",
    countryName: "Latvia",
  },
  {
    iso: "LB",
    countryName: "Lebanon",
  },
  {
    iso: "LS",
    countryName: "Lesotho",
  },
  {
    iso: "LR",
    countryName: "Liberia",
  },
  {
    iso: "LY",
    countryName: "Libya",
  },
  {
    iso: "LI",
    countryName: "Liechtenstein",
  },
  {
    iso: "LT",
    countryName: "Lithuania",
  },
  {
    iso: "LU",
    countryName: "Luxembourg",
  },
  {
    iso: "MG",
    countryName: "Madagascar",
  },
  {
    iso: "MW",
    countryName: "Malawi",
  },
  {
    iso: "MY",
    countryName: "Malaysia",
  },
  {
    iso: "MV",
    countryName: "Maldives",
  },
  {
    iso: "ML",
    countryName: "Mali",
  },
  {
    iso: "MT",
    countryName: "Malta",
  },
  {
    iso: "MH",
    countryName: "Marshall Islands",
  },
  {
    iso: "MR",
    countryName: "Mauritania",
  },
  {
    iso: "MU",
    countryName: "Mauritius",
  },
  {
    iso: "MX",
    countryName: "Mexico",
  },
  {
    iso: "FM",
    countryName: "Micronesia",
  },
  {
    iso: "MD",
    countryName: "Moldova",
  },
  {
    iso: "MC",
    countryName: "Monaco",
  },
  {
    iso: "MN",
    countryName: "Mongolia",
  },
  {
    iso: "ME",
    countryName: "Montenegro",
  },
  {
    iso: "MA",
    countryName: "Morocco",
  },
  {
    iso: "MZ",
    countryName: "Mozambique",
  },
  {
    iso: "MM",
    countryName: "Myanmar",
  },
  {
    iso: "NA",
    countryName: "Namibia",
  },
  {
    iso: "NR",
    countryName: "Nauru",
  },
  {
    iso: "NP",
    countryName: "Nepal",
  },
  {
    iso: "NL",
    countryName: "Netherlands",
  },
  {
    iso: "NZ",
    countryName: "New Zealand",
  },
  {
    iso: "NI",
    countryName: "Nicaragua",
  },
  {
    iso: "NE",
    countryName: "Niger",
  },
  {
    iso: "NG",
    countryName: "Nigeria",
  },
  {
    iso: "KP",
    countryName: "North Korea",
  },
  {
    iso: "MK",
    countryName: "North Macedonia",
  },
  {
    iso: "NO",
    countryName: "Norway",
  },
  {
    iso: "OM",
    countryName: "Oman",
  },
  {
    iso: "PK",
    countryName: "Pakistan",
  },
  {
    iso: "PW",
    countryName: "Palau",
  },
  {
    iso: "PS",
    countryName: "Palestine",
  },
  {
    iso: "PA",
    countryName: "Panama",
  },
  {
    iso: "PG",
    countryName: "Papua New Guinea",
  },
  {
    iso: "PY",
    countryName: "Paraguay",
  },
  {
    iso: "PE",
    countryName: "Peru",
  },
  {
    iso: "PH",
    countryName: "Philippines",
  },
  {
    iso: "PL",
    countryName: "Poland",
  },
  {
    iso: "PT",
    countryName: "Portugal",
  },
  {
    iso: "QA",
    countryName: "Qatar",
  },
  {
    iso: "CG",
    countryName: "Republic of the Congo",
  },
  {
    iso: "RO",
    countryName: "Romania",
  },
  {
    iso: "RU",
    countryName: "Russia",
  },
  {
    iso: "RW",
    countryName: "Rwanda",
  },
  {
    iso: "KN",
    countryName: "Saint Kitts and Nevis",
  },
  {
    iso: "LC",
    countryName: "Saint Lucia",
  },
  {
    iso: "VC",
    countryName: "Saint Vincent and the Grenadines",
  },
  {
    iso: "WS",
    countryName: "Samoa",
  },
  {
    iso: "SM",
    countryName: "San Marino",
  },
  {
    iso: "ST",
    countryName: "Sao Tome and Principe",
  },
  {
    iso: "SA",
    countryName: "Saudi Arabia",
  },
  {
    iso: "SN",
    countryName: "Senegal",
  },
  {
    iso: "RS",
    countryName: "Serbia",
  },
  {
    iso: "SC",
    countryName: "Seychelles",
  },
  {
    iso: "SL",
    countryName: "Sierra Leone",
  },
  {
    iso: "SG",
    countryName: "Singapore",
  },
  {
    iso: "SK",
    countryName: "Slovakia",
  },
  {
    iso: "SI",
    countryName: "Slovenia",
  },
  {
    iso: "SB",
    countryName: "Solomon Islands",
  },
  {
    iso: "SO",
    countryName: "Somalia",
  },
  {
    iso: "ZA",
    countryName: "South Africa",
  },
  {
    iso: "KR",
    countryName: "South Korea",
  },
  {
    iso: "SS",
    countryName: "South Sudan",
  },
  {
    iso: "ES",
    countryName: "Spain",
  },
  {
    iso: "LK",
    countryName: "Sri Lanka",
  },
  {
    iso: "SD",
    countryName: "Sudan",
  },
  {
    iso: "SR",
    countryName: "Suriname",
  },
  {
    iso: "SE",
    countryName: "Sweden",
  },
  {
    iso: "CH",
    countryName: "Switzerland",
  },
  {
    iso: "SY",
    countryName: "Syria",
  },
  {
    iso: "TW",
    countryName: "Taiwan",
  },
  {
    iso: "TJ",
    countryName: "Tajikistan",
  },
  {
    iso: "TZ",
    countryName: "Tanzania",
  },
  {
    iso: "TH",
    countryName: "Thailand",
  },
  {
    iso: "BS",
    countryName: "The Bahamas",
  },
  {
    iso: "GM",
    countryName: "The Gambia",
  },
  {
    iso: "TL",
    countryName: "Timor-Leste",
  },
  {
    iso: "TG",
    countryName: "Togo",
  },
  {
    iso: "TO",
    countryName: "Tonga",
  },
  {
    iso: "TT",
    countryName: "Trinidad and Tobago",
  },
  {
    iso: "TN",
    countryName: "Tunisia",
  },
  {
    iso: "TR",
    countryName: "Turkey",
  },
  {
    iso: "TM",
    countryName: "Turkmenistan",
  },
  {
    iso: "TV",
    countryName: "Tuvalu",
  },
  {
    iso: "UG",
    countryName: "Uganda",
  },
  {
    iso: "UA",
    countryName: "Ukraine",
  },
  {
    iso: "AE",
    countryName: "United Arab Emirates",
  },
  {
    iso: "GB",
    countryName: "United Kingdom",
  },
  {
    iso: "US",
    countryName: "United States",
  },
  {
    iso: "UY",
    countryName: "Uruguay",
  },
  {
    iso: "UZ",
    countryName: "Uzbekistan",
  },
  {
    iso: "VU",
    countryName: "Vanuatu",
  },
  {
    iso: "VA",
    countryName: "Vatican City",
  },
  {
    iso: "VE",
    countryName: "Venezuela",
  },
  {
    iso: "VN",
    countryName: "Vietnam",
  },
  {
    iso: "YE",
    countryName: "Yemen",
  },
  {
    iso: "ZM",
    countryName: "Zambia",
  },
  {
    iso: "ZW",
    countryName: "Zimbabwe",
  },
];
