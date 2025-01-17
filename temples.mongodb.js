// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

// The current database to use.
use('teamProject');

// Create a new document in the collection.
db.getCollection('temples').insertMany([
  {
    _id: {
      $oid: '61a921f6028954d4f0319e6d',
    },
    temple_id: 1,
    additionalInfo: false,
    name: 'Aba Nigeria Temple',
    location: 'Aba, Abia, Nigeria',
    dedicated: '7 August 2005',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e6e',
    },
    temple_id: 2,
    additionalInfo: false,
    name: 'Abidjan Ivory Coast Temple',
    location: 'Abidjan, Ivory Coast',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e6f',
    },
    temple_id: 3,
    additionalInfo: false,
    name: 'Accra Ghana Temple',
    location: 'Accra, Greater Accra, Ghana',
    dedicated: '11 January 2004',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e70',
    },
    temple_id: 4,
    additionalInfo: false,
    name: 'Adelaide Australia Temple',
    location: 'Marden, South Australia, Australia',
    dedicated: '15 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e71',
    },
    temple_id: 5,
    additionalInfo: false,
    name: 'Alabang Philippines Temple',
    location: 'Manila, Philippines',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e72',
    },
    temple_id: 6,
    additionalInfo: false,
    name: 'Albuquerque New Mexico Temple',
    location: 'Albuquerque, New Mexico, United States',
    dedicated: '5 March 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e73',
    },
    temple_id: 7,
    additionalInfo: false,
    name: 'Anchorage Alaska Temple',
    location: 'Anchorage, Alaska, United States',
    dedicated: '9 January 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e74',
    },
    temple_id: 8,
    additionalInfo: false,
    name: 'Antananarivo Madagascar Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e75',
    },
    temple_id: 9,
    additionalInfo: false,
    name: 'Antofagasta Chile Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e76',
    },
    temple_id: 10,
    additionalInfo: false,
    name: 'Apia Samoa Temple',
    location: 'Apia, Pesega, Samoa',
    dedicated: '5 August 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e77',
    },
    temple_id: 11,
    additionalInfo: false,
    name: 'Arequipa Peru Temple',
    location: 'Arequipa, Peru',
    dedicated: '15 December 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e78',
    },
    temple_id: 12,
    additionalInfo: false,
    name: 'Asunción Paraguay Temple',
    location: 'Asunción, Alto Paraguay, Paraguay',
    dedicated: '19 May 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e79',
    },
    temple_id: 13,
    additionalInfo: false,
    name: 'Atlanta Georgia Temple',
    location: 'Sandy Springs, Georgia, United States',
    dedicated: '1 June 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7a',
    },
    temple_id: 14,
    additionalInfo: false,
    name: 'Auckland New Zealand Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7b',
    },
    temple_id: 15,
    additionalInfo: false,
    name: 'Bacolod Philippines Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7c',
    },
    temple_id: 16,
    additionalInfo: false,
    name: 'Bahía Blanca Argentina Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7d',
    },
    temple_id: 17,
    additionalInfo: false,
    name: 'Bangkok Thailand Temple',
    location: 'Bangkok, Thailand',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7e',
    },
    temple_id: 18,
    additionalInfo: false,
    name: 'Barranquilla Colombia Temple',
    location: 'Barranquilla, Colombia',
    dedicated: '9 December 2018',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e7f',
    },
    temple_id: 19,
    additionalInfo: false,
    name: 'Baton Rouge Louisiana Temple',
    location: 'Baton Rouge, Louisiana, United States',
    dedicated: '16 July 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e80',
    },
    temple_id: 20,
    additionalInfo: false,
    name: 'Beira Mozambique Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e81',
    },
    temple_id: 21,
    additionalInfo: false,
    name: 'Belém Brazil Temple',
    location: 'Belém Brazil',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e82',
    },
    temple_id: 22,
    additionalInfo: false,
    name: 'Belo Horizonte Brazil Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e83',
    },
    temple_id: 23,
    additionalInfo: false,
    name: 'Bengaluru India Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e84',
    },
    temple_id: 24,
    additionalInfo: false,
    name: 'Benin City Nigeria Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e85',
    },
    temple_id: 25,
    additionalInfo: false,
    name: 'Bentonville Arkansas Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e86',
    },
    temple_id: 26,
    additionalInfo: false,
    name: 'Bern Switzerland Temple',
    location: 'Zollikofen, Bern, Switzerland',
    dedicated: '11 September 1955',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e87',
    },
    temple_id: 27,
    additionalInfo: false,
    name: 'Billings Montana Temple',
    location: 'Billings, Montana, United States',
    dedicated: '20 November 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e88',
    },
    temple_id: 28,
    additionalInfo: false,
    name: 'Birmingham Alabama Temple',
    location: 'Gardendale, Alabama, United States',
    dedicated: '3 September 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e89',
    },
    temple_id: 29,
    additionalInfo: false,
    name: 'Bismarck North Dakota Temple',
    location: 'Bismarck, North Dakota, United States',
    dedicated: '19 September 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8a',
    },
    temple_id: 30,
    additionalInfo: false,
    name: 'Bogotá Colombia Temple',
    location: 'Bogotá, Distrito Capital, Colombia',
    dedicated: '24 April 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8b',
    },
    temple_id: 31,
    additionalInfo: false,
    name: 'Boise Idaho Temple',
    location: 'Boise, Idaho, United States',
    dedicated: '25 May 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8c',
    },
    temple_id: 32,
    additionalInfo: false,
    name: 'Boston Massachusetts Temple',
    location: 'Belmont, Massachusetts, United States',
    dedicated: '1 October 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8d',
    },
    temple_id: 33,
    additionalInfo: false,
    name: 'Bountiful Utah Temple',
    location: 'Bountiful, Utah, United States',
    dedicated: '8 January 1995',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8e',
    },
    temple_id: 34,
    additionalInfo: false,
    name: 'Brasília Brazil Temple',
    location: 'Brasilia, Brazil',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e8f',
    },
    temple_id: 35,
    additionalInfo: false,
    name: 'Brigham City Utah Temple',
    location: 'Brigham City, Utah, United States',
    dedicated: '23 September 2012',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e90',
    },
    temple_id: 36,
    additionalInfo: false,
    name: 'Brisbane Australia Temple',
    location: 'Kangaroo Point, Queensland, Australia',
    dedicated: '15 June 2003',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e91',
    },
    temple_id: 37,
    additionalInfo: false,
    name: 'Brussels Belgium Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e92',
    },
    temple_id: 38,
    additionalInfo: false,
    name: 'Budapest Hungary Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e93',
    },
    temple_id: 39,
    additionalInfo: false,
    name: 'Buenos Aires Argentina Temple',
    location: 'Ciudad Evita, Buenos Aires, Argentina',
    dedicated: '17 January 1986',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e94',
    },
    temple_id: 40,
    additionalInfo: false,
    name: 'Burley Idaho Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e95',
    },
    temple_id: 41,
    additionalInfo: false,
    name: 'Cagayan de Oro Philippines Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e96',
    },
    temple_id: 42,
    additionalInfo: false,
    name: 'Calgary Alberta Temple',
    location: 'Calgary, Alberta, Canada',
    dedicated: '28 October 2012',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e97',
    },
    temple_id: 43,
    additionalInfo: false,
    name: 'Cali Colombia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e98',
    },
    temple_id: 44,
    additionalInfo: false,
    name: 'Campinas Brazil Temple',
    location: 'Campinas, Sao Paulo, Brazil',
    dedicated: '17 May 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e99',
    },
    temple_id: 45,
    additionalInfo: false,
    name: 'Cape Town South Africa Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9a',
    },
    temple_id: 46,
    additionalInfo: false,
    name: 'Caracas Venezuela Temple',
    location: 'Caracas, Dependencias Federales, Venezuela',
    dedicated: '20 August 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9b',
    },
    temple_id: 47,
    additionalInfo: false,
    name: 'Cardston Alberta Temple',
    location: 'Cardston, Alberta, Canada',
    dedicated: '26 August 1923',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9c',
    },
    temple_id: 48,
    additionalInfo: false,
    name: 'Casper Wyoming Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9d',
    },
    temple_id: 49,
    additionalInfo: false,
    name: 'Cebu City Philippines Temple',
    location: 'Cebu City, Cebu, Philippines',
    dedicated: '13 June 2010',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9e',
    },
    temple_id: 50,
    additionalInfo: false,
    name: 'Cedar City Utah Temple',
    location: 'Cedar City, Utah, United States',
    dedicated: '10 December 2017',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319e9f',
    },
    temple_id: 51,
    additionalInfo: false,
    name: 'Chicago Illinois Temple',
    location: 'Glenview, Illinois, United States',
    dedicated: '9 August 1985',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea0',
    },
    temple_id: 52,
    additionalInfo: false,
    name: 'Ciudad Juárez Mexico Temple',
    location: 'Ciudad Juárez, Chihuahua, Mexico',
    dedicated: '26 February 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea1',
    },
    temple_id: 53,
    additionalInfo: false,
    name: 'Cobán Guatemala Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea2',
    },
    temple_id: 54,
    additionalInfo: false,
    name: 'Cochabamba Bolivia Temple',
    location: 'Alto Queru Queru, Cochabamba, Bolivia',
    dedicated: '30 April 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea3',
    },
    temple_id: 55,
    additionalInfo: false,
    name: 'Cody Wyoming Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea4',
    },
    temple_id: 56,
    additionalInfo: false,
    name: 'Colonia Juárez Chihuahua Mexico Temple',
    location: 'Colonia Juárez, Chihuahua, Mexico',
    dedicated: '6 March 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea5',
    },
    temple_id: 57,
    additionalInfo: false,
    name: 'Columbia River Washington Temple',
    location: 'Richland, Washington, United States',
    dedicated: '18 November 2001',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea6',
    },
    temple_id: 58,
    additionalInfo: false,
    name: 'Columbia South Carolina Temple',
    location: 'Hopkins, South Carolina, United States',
    dedicated: '16 October 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea7',
    },
    temple_id: 59,
    additionalInfo: false,
    name: 'Columbus Ohio Temple',
    location: 'Columbus, Ohio, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea8',
    },
    temple_id: 60,
    additionalInfo: false,
    name: 'Concepción Chile Temple',
    location: 'Concepcion, Chile',
    dedicated: '28 October 2018',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ea9',
    },
    temple_id: 61,
    additionalInfo: false,
    name: 'Copenhagen Denmark Temple',
    location: 'Frederiksberg, Hovedstaden, Denmark',
    dedicated: '23 May 2004',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eaa',
    },
    temple_id: 62,
    additionalInfo: false,
    name: 'Córdoba Argentina Temple',
    location: 'Córdoba, Argentina',
    dedicated: '17 May 2015',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eab',
    },
    temple_id: 63,
    additionalInfo: false,
    name: 'Culiacán México Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eac',
    },
    temple_id: 64,
    additionalInfo: false,
    name: 'Curitiba Brazil Temple',
    location: 'Curitiba, Parana, Brazil',
    dedicated: '1 June 2008',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ead',
    },
    temple_id: 65,
    additionalInfo: false,
    name: 'Dallas Texas Temple',
    location: 'Dallas, Texas, United States',
    dedicated: '19 October 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eae',
    },
    temple_id: 66,
    additionalInfo: false,
    name: 'Davao Philippines Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eaf',
    },
    temple_id: 67,
    additionalInfo: false,
    name: 'Denver Colorado Temple',
    location: 'Centennial, Colorado, United States',
    dedicated: '24 October 1986',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb0',
    },
    temple_id: 68,
    additionalInfo: false,
    name: 'Deseret Peak Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb1',
    },
    temple_id: 69,
    additionalInfo: false,
    name: 'Detroit Michigan Temple',
    location: 'Bloomfield Hills, Michigan, United States',
    dedicated: '23 October 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb2',
    },
    temple_id: 70,
    additionalInfo: false,
    name: 'Draper Utah Temple',
    location: 'Draper, Utah, United States',
    dedicated: '20 March 2009',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb3',
    },
    temple_id: 71,
    additionalInfo: false,
    name: 'Dubai United Arab Emirates Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb4',
    },
    temple_id: 72,
    additionalInfo: false,
    name: 'Durban South Africa Temple',
    location: 'Durban, South Africa',
    dedicated: '16 February 2020',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb5',
    },
    temple_id: 73,
    additionalInfo: false,
    name: 'Edmonton Alberta Temple',
    location: 'Edmonton, Alberta, Canada',
    dedicated: '11 December 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb6',
    },
    temple_id: 74,
    additionalInfo: false,
    name: 'Elko Nevada Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb7',
    },
    temple_id: 75,
    additionalInfo: false,
    name: 'Ephraim Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb8',
    },
    temple_id: 76,
    additionalInfo: false,
    name: 'Farmington New Mexico Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eb9',
    },
    temple_id: 77,
    additionalInfo: false,
    name: 'Feather River California Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eba',
    },
    temple_id: 78,
    additionalInfo: false,
    name: 'Fort Collins Colorado Temple',
    location: 'Fort Collins, Colorado, United States',
    dedicated: '16 October 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ebb',
    },
    temple_id: 79,
    additionalInfo: false,
    name: 'Fort Lauderdale Florida Temple',
    location: 'Davie, Florida, United States',
    dedicated: '4 May 2014',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ebc',
    },
    temple_id: 80,
    additionalInfo: false,
    name: 'Fort Worth Texas Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ebd',
    },
    temple_id: 81,
    additionalInfo: false,
    name: 'Fortaleza Brazil Temple',
    location: 'Fortaleza, Ceará, Brazil',
    dedicated: '2 June 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ebe',
    },
    temple_id: 82,
    additionalInfo: false,
    name: 'Frankfurt Germany Temple',
    location: 'Friedrichsdorf, Hessen, Germany',
    dedicated: '28 August 1987',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ebf',
    },
    temple_id: 83,
    additionalInfo: false,
    name: 'Freetown Sierra Leone Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec0',
    },
    temple_id: 84,
    additionalInfo: false,
    name: 'Freiberg Germany Temple',
    location: 'Freiberg, Sachsen, Germany',
    dedicated: '29 June 1985',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec1',
    },
    temple_id: 85,
    additionalInfo: false,
    name: 'Fresno California Temple',
    location: 'Fresno, California, United States',
    dedicated: '9 April 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec2',
    },
    temple_id: 86,
    additionalInfo: false,
    name: 'Fukuoka Japan Temple',
    location: 'Fukuoka-shi, Fukuoka, Japan',
    dedicated: '11 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec3',
    },
    temple_id: 87,
    additionalInfo: false,
    name: 'Gilbert Arizona Temple',
    location: 'Gilbert, Arizona, United States',
    dedicated: '2 March 2014',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec4',
    },
    temple_id: 88,
    additionalInfo: false,
    name: 'Grand Junction Colorado Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec5',
    },
    temple_id: 89,
    additionalInfo: false,
    name: 'Greater Guatemala City Guatemala Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec6',
    },
    temple_id: 90,
    additionalInfo: false,
    name: 'Guadalajara Mexico Temple',
    location: 'Zapopan, Jalisco, Mexico',
    dedicated: '29 April 2001',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec7',
    },
    temple_id: 91,
    additionalInfo: false,
    name: 'Guatemala City Guatemala Temple',
    location: 'Guatemala City, Guatemala, Guatemala',
    dedicated: '14 December 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec8',
    },
    temple_id: 92,
    additionalInfo: false,
    name: 'Guayaquil Ecuador Temple',
    location: 'Guayaquil, Guayas, Ecuador',
    dedicated: '1 August 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ec9',
    },
    temple_id: 93,
    additionalInfo: false,
    name: 'Halifax Nova Scotia Temple',
    location: 'Dartmouth, Nova Scotia, Canada',
    dedicated: '14 November 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eca',
    },
    temple_id: 94,
    additionalInfo: false,
    name: 'Hamilton New Zealand Temple',
    location: 'Hamilton, Auckland, New Zealand',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ecb',
    },
    temple_id: 95,
    additionalInfo: false,
    name: 'Harare Zimbabwe Temple',
    location: 'Harare, Zimbabwe',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ecc',
    },
    temple_id: 96,
    additionalInfo: false,
    name: 'Hartford Connecticut Temple',
    location: 'Farmington, Connecticut, United States',
    dedicated: '20 November 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ecd',
    },
    temple_id: 97,
    additionalInfo: false,
    name: 'Heber Valley Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ece',
    },
    temple_id: 98,
    additionalInfo: false,
    name: 'Helena Montana Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ecf',
    },
    temple_id: 99,
    additionalInfo: false,
    name: 'Helsinki Finland Temple',
    location: 'Espoo, Uusimaa, Finland',
    dedicated: '22 October 2006',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed0',
    },
    temple_id: 100,
    additionalInfo: false,
    name: 'Hermosillo Sonora Mexico Temple',
    location: 'Hermosillo, Sonora, Mexico',
    dedicated: '27 February 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed1',
    },
    temple_id: 101,
    additionalInfo: false,
    name: 'Hong Kong China Temple',
    location: 'Kowloon Tong, Kowloon City, Hong Kong',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed2',
    },
    temple_id: 102,
    additionalInfo: false,
    name: 'Houston Texas Temple',
    location: 'Spring, Texas, United States',
    dedicated: '26 August 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed3',
    },
    temple_id: 103,
    additionalInfo: true,
    name: 'Idaho Falls Idaho Temple',
    location: 'Idaho Falls, Idaho, United States',
    dedicated: '23 September 1945',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed4',
    },
    temple_id: 104,
    additionalInfo: false,
    name: 'Indianapolis Indiana Temple',
    location: 'Carmel, Indiana, United States',
    dedicated: '23 August 2015',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed5',
    },
    temple_id: 105,
    additionalInfo: false,
    name: 'Johannesburg South Africa Temple',
    location: 'Johannesburg, Gauteng, South Africa',
    dedicated: '24 August 1985',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed6',
    },
    temple_id: 106,
    additionalInfo: false,
    name: 'Jordan River Utah Temple',
    location: 'South Jordan, Utah, United States',
    dedicated: '16 November 1981',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed7',
    },
    temple_id: 107,
    additionalInfo: false,
    name: 'Kananga Democratic Republic of the Congo Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed8',
    },
    temple_id: 108,
    additionalInfo: true,
    name: 'Kansas City Missouri Temple',
    location: 'Kansas City, Missouri, United States',
    dedicated: '6 May 2012',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ed9',
    },
    temple_id: 109,
    additionalInfo: true,
    name: 'Oklahoma City Oklahoma Temple',
    dedicated: '30 July 2000',
    location: 'Yukon, Oklahoma, United States',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eda',
    },
    temple_id: 110,
    additionalInfo: false,
    name: 'Kaohsiung Taiwan Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319edb',
    },
    temple_id: 111,
    additionalInfo: false,
    name: 'Kinshasa Democratic Republic of the Congo Temple',
    location: 'Kinshasa, Democratic Republic of the Congo',
    dedicated: '14 April 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319edc',
    },
    temple_id: 112,
    additionalInfo: false,
    name: 'Kona Hawaii Temple',
    location: 'Kailua-Kona, Hawaii, United States',
    dedicated: '23 January 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319edd',
    },
    temple_id: 113,
    additionalInfo: false,
    name: 'Kumasi Ghana Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ede',
    },
    temple_id: 114,
    additionalInfo: false,
    name: 'Kyiv Ukraine Temple',
    location: 'Kyevo-Sviatoshyns’ky Rayon, Kyiv, Ukraine',
    dedicated: '29 August 2010',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319edf',
    },
    temple_id: 115,
    additionalInfo: false,
    name: 'La Paz Bolivia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee0',
    },
    temple_id: 116,
    additionalInfo: false,
    name: 'Lagos Nigeria Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee1',
    },
    temple_id: 117,
    additionalInfo: false,
    name: 'Laie Hawaii Temple',
    location: 'Laie, Hawaii, United States',
    dedicated: '27 November 1919',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee2',
    },
    temple_id: 118,
    additionalInfo: false,
    name: 'Las Vegas Nevada Temple',
    location: 'Las Vegas, Nevada, United States',
    dedicated: '16 December 1989',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee3',
    },
    temple_id: 119,
    additionalInfo: false,
    name: 'Layton Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee4',
    },
    temple_id: 120,
    additionalInfo: false,
    name: 'Lima Peru Los Olivos Temple',
    location: 'Los Olivos, Lima, Peru',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee5',
    },
    temple_id: 121,
    additionalInfo: false,
    name: 'Lima Peru Temple',
    location: 'La Molina, Lima, Peru',
    dedicated: '10 January 1986',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee6',
    },
    temple_id: 122,
    additionalInfo: false,
    name: 'Lindon Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee7',
    },
    temple_id: 123,
    additionalInfo: false,
    name: 'Lisbon Portugal Temple',
    location: 'Lisbon, Portugal',
    dedicated: '15 September 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee8',
    },
    temple_id: 124,
    additionalInfo: false,
    name: 'Logan Utah Temple',
    location: 'Logan, Utah, United States',
    dedicated: '17 May 1884',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ee9',
    },
    temple_id: 125,
    additionalInfo: false,
    name: 'London England Temple',
    location: 'Newchapel, Surrey, England',
    dedicated: '7 September 1958',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eea',
    },
    temple_id: 126,
    additionalInfo: false,
    name: 'Los Angeles California Temple',
    location: 'Los Angeles, California, United States',
    dedicated: '11 March 1956',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eeb',
    },
    temple_id: 127,
    additionalInfo: false,
    name: 'Louisville Kentucky Temple',
    location: 'Crestwood, Kentucky, United States',
    dedicated: '19 March 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eec',
    },
    temple_id: 128,
    additionalInfo: false,
    name: 'Lubbock Texas Temple',
    location: 'Lubbock, Texas, United States',
    dedicated: '21 April 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eed',
    },
    temple_id: 129,
    additionalInfo: false,
    name: 'Lubumbashi Democratic Republic of the Congo Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eee',
    },
    temple_id: 130,
    additionalInfo: false,
    name: 'Madrid Spain Temple',
    location: 'Madrid, Madrid, Spain',
    dedicated: '19 March 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eef',
    },
    temple_id: 131,
    additionalInfo: false,
    name: 'Managua Nicaragua Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef0',
    },
    temple_id: 132,
    additionalInfo: false,
    name: 'Manaus Brazil Temple',
    location: 'Manaus, Amazonas, Brazil',
    dedicated: '10 June 2012',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef1',
    },
    temple_id: 133,
    additionalInfo: false,
    name: 'Manhattan New York Temple',
    location: 'New York, New York, United States',
    dedicated: '13 June 2004',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef2',
    },
    temple_id: 134,
    additionalInfo: false,
    name: 'Manila Philippines Temple',
    location: 'Quezon City, Metro Manila, Philippines',
    dedicated: '25 September 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef3',
    },
    temple_id: 135,
    additionalInfo: false,
    name: 'Manti Utah Temple',
    location: 'Manti, Utah, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef4',
    },
    temple_id: 136,
    additionalInfo: false,
    name: 'McAllen Texas Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef5',
    },
    temple_id: 137,
    additionalInfo: false,
    name: 'Medford Oregon Temple',
    location: 'Central Point, Oregon, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef6',
    },
    temple_id: 138,
    additionalInfo: false,
    name: 'Melbourne Australia Temple',
    location: 'Wantirna South, Victoria, Australia',
    dedicated: '16 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef7',
    },
    temple_id: 139,
    additionalInfo: false,
    name: 'Memphis Tennessee Temple',
    location: 'Bartlett, Tennessee, United States',
    dedicated: '23 April 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef8',
    },
    temple_id: 140,
    additionalInfo: false,
    name: 'Mendoza Argentina Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319ef9',
    },
    temple_id: 141,
    additionalInfo: false,
    name: 'Mérida Mexico Temple',
    location: 'Mérida, Yucatan, Mexico',
    dedicated: '8 July 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319efa',
    },
    temple_id: 142,
    additionalInfo: false,
    name: 'Meridian Idaho Temple',
    location: 'Meridian, Idaho, United States',
    dedicated: '19 November 2017',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319efb',
    },
    temple_id: 143,
    additionalInfo: false,
    name: 'Mesa Arizona Temple',
    location: 'Mesa, Arizona, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319efc',
    },
    temple_id: 144,
    additionalInfo: false,
    name: 'Mexico City Mexico Temple',
    location: 'México, Distrito Federal, Mexico',
    dedicated: '2 December 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319efd',
    },
    temple_id: 145,
    additionalInfo: false,
    name: 'Monrovia Liberia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319efe',
    },
    temple_id: 146,
    additionalInfo: false,
    name: 'Monterrey Mexico Temple',
    location: 'Monterrey, Nuevo Leon, Mexico',
    dedicated: '28 April 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319eff',
    },
    temple_id: 147,
    additionalInfo: false,
    name: 'Montevideo Uruguay Temple',
    location: 'Carrasco, Montevideo, Uruguay',
    dedicated: '18 March 2001',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f00',
    },
    temple_id: 148,
    additionalInfo: false,
    name: 'Monticello Utah Temple',
    location: 'Monticello, Utah, United States',
    dedicated: '26 July 1998',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f01',
    },
    temple_id: 149,
    additionalInfo: false,
    name: 'Montreal Quebec Temple',
    location: 'Longueuil, Quebec, Canada',
    dedicated: '4 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f02',
    },
    temple_id: 150,
    additionalInfo: false,
    name: 'Moses Lake Washington Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f03',
    },
    temple_id: 151,
    additionalInfo: false,
    name: 'Mount Timpanogos Utah Temple',
    location: 'American Fork, Utah, United States',
    dedicated: '13 October 1996',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f04',
    },
    temple_id: 152,
    additionalInfo: false,
    name: 'Nairobi Kenya Temple',
    location: 'Nairobi, Kenya',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f05',
    },
    temple_id: 153,
    additionalInfo: false,
    name: 'Nashville Tennessee Temple',
    location: 'Franklin, Tennessee, United States',
    dedicated: '21 May 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f06',
    },
    temple_id: 154,
    additionalInfo: false,
    name: 'Nauvoo Illinois Temple',
    location: 'Nauvoo, Illinois, United States',
    dedicated: '27 June 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f07',
    },
    temple_id: 155,
    additionalInfo: false,
    name: 'Neiafu Tonga Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f08',
    },
    temple_id: 156,
    additionalInfo: false,
    name: 'Newport Beach California Temple',
    location: 'Newport Beach, California, United States',
    dedicated: '28 August 2005',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f09',
    },
    temple_id: 157,
    additionalInfo: false,
    name: "Nuku'alofa Tonga Temple",
    location: 'Liahona, Tongatapu, Tonga',
    dedicated: '9 August 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0a',
    },
    temple_id: 158,
    additionalInfo: false,
    name: 'Oakland California Temple',
    location: 'Oakland, California, United States',
    dedicated: '17 November 1964',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0b',
    },
    temple_id: 159,
    additionalInfo: false,
    name: 'Oaxaca Mexico Temple',
    location: 'Oaxaca, Oaxaca, Mexico',
    dedicated: '11 March 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0c',
    },
    temple_id: 160,
    additionalInfo: false,
    name: 'Ogden Utah Temple',
    location: 'Ogden, Utah, United States',
    dedicated: '18 January 1972',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0d',
    },
    temple_id: 161,
    additionalInfo: false,
    name: 'Okinawa Japan Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0e',
    },
    temple_id: 162,
    additionalInfo: false,
    name: 'Oklahoma City Oklahoma Temple',
    location: 'Yukon, Oklahoma, United States',
    dedicated: '30 July 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f0f',
    },
    temple_id: 163,
    additionalInfo: false,
    name: 'Oquirrh Mountain Utah Temple',
    location: 'South Jordan, Utah, United States',
    dedicated: '21 August 2009',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f10',
    },
    temple_id: 164,
    additionalInfo: false,
    name: 'Orem Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f11',
    },
    temple_id: 165,
    additionalInfo: false,
    name: 'Orlando Florida Temple',
    location: 'Windermere, Florida, United States',
    dedicated: '9 October 1994',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f12',
    },
    temple_id: 166,
    additionalInfo: false,
    name: 'Oslo Norway Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f13',
    },
    temple_id: 167,
    additionalInfo: false,
    name: 'Pago Pago American Samoa Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f14',
    },
    temple_id: 168,
    additionalInfo: false,
    name: 'Palmyra New York Temple',
    location: 'Palmyra, New York, United States',
    dedicated: '6 April 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f15',
    },
    temple_id: 169,
    additionalInfo: false,
    name: 'Panama City Panama Temple',
    location: 'Corozal, Ancon, Panamá, Panama',
    dedicated: '10 August 2008',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f16',
    },
    temple_id: 170,
    additionalInfo: false,
    name: 'Papeete Tahiti Temple',
    location: 'Papeete, Tahiti, French Polynesia',
    dedicated: '27 October 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f17',
    },
    temple_id: 171,
    additionalInfo: false,
    name: 'Paris France Temple',
    location: 'Le Chesnay, France',
    dedicated: '21 May 2017',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f18',
    },
    temple_id: 172,
    additionalInfo: false,
    name: 'Payson Utah Temple',
    location: 'Payson, Utah, United States',
    dedicated: '7 June 2015',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f19',
    },
    temple_id: 173,
    additionalInfo: false,
    name: 'Perth Australia Temple',
    location: 'Yokine, Western Australia, Australia',
    dedicated: '20 May 2001',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1a',
    },
    temple_id: 174,
    additionalInfo: false,
    name: 'Philadelphia Pennsylvania Temple',
    location: 'Philadelphia, Pennsylvania, United States',
    dedicated: '18 September 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1b',
    },
    temple_id: 175,
    additionalInfo: false,
    name: 'Phnom Penh Cambodia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1c',
    },
    temple_id: 176,
    additionalInfo: false,
    name: 'Phoenix Arizona Temple',
    location: 'Phoenix, Arizona, United States',
    dedicated: '16 November 2014',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1d',
    },
    temple_id: 177,
    additionalInfo: false,
    name: 'Pittsburgh Pennsylvania Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1e',
    },
    temple_id: 178,
    additionalInfo: false,
    name: 'Pocatello Idaho Temple',
    location: 'Pocatello, Idaho, United States',
    dedicated: '7 November 2021',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f1f',
    },
    temple_id: 179,
    additionalInfo: false,
    name: 'Port Moresby Papua New Guinea Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f20',
    },
    temple_id: 180,
    additionalInfo: false,
    name: 'Port Vila Vanuatu Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f21',
    },
    temple_id: 181,
    additionalInfo: false,
    name: 'Port-au-Prince Haiti Temple',
    location: 'Port-au-Prince, Haiti',
    dedicated: '1 September 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f22',
    },
    temple_id: 182,
    additionalInfo: false,
    name: 'Portland Oregon Temple',
    location: 'Lake Oswego, Oregon, United States',
    dedicated: '19 August 1989',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f23',
    },
    temple_id: 183,
    additionalInfo: false,
    name: 'Porto Alegre Brazil Temple',
    location: 'Porto Alegre, Rio Grande do Sul, Brazil',
    dedicated: '17 December 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f24',
    },
    temple_id: 184,
    additionalInfo: false,
    name: 'Praia Cape Verde Temple',
    location: 'Praia, Cape Verde',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f25',
    },
    temple_id: 185,
    additionalInfo: false,
    name: 'Preston England Temple',
    location: 'Chorley, Lancashire, England',
    dedicated: '7 June 1998',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f26',
    },
    temple_id: 186,
    additionalInfo: false,
    name: 'Provo City Center Temple',
    location: 'Provo, Utah, United States',
    dedicated: '20 March 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f27',
    },
    temple_id: 187,
    additionalInfo: false,
    name: 'Provo Utah Temple',
    location: 'Provo, Utah, United States',
    dedicated: '9 February 1972',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f28',
    },
    temple_id: 188,
    additionalInfo: false,
    name: 'Puebla Mexico Temple',
    location: 'Puebla, Puebla, Mexico',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f29',
    },
    temple_id: 189,
    additionalInfo: false,
    name: 'Querétaro Mexico Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2a',
    },
    temple_id: 190,
    additionalInfo: false,
    name: 'Quetzaltenango Guatemala Temple',
    location: 'Quetzaltenango, Quezaltenango, Guatemala',
    dedicated: '11 December 2011',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2b',
    },
    temple_id: 191,
    additionalInfo: false,
    name: 'Quito Ecuador Temple',
    location: 'Quito, Equador',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2c',
    },
    temple_id: 192,
    additionalInfo: false,
    name: 'Raleigh North Carolina Temple',
    location: 'Apex, North Carolina, United States',
    dedicated: '18 December 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2d',
    },
    temple_id: 193,
    additionalInfo: false,
    name: 'Recife Brazil Temple',
    location: 'Recife, Pernambuco, Brazil',
    dedicated: '15 December 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2e',
    },
    temple_id: 194,
    additionalInfo: false,
    name: 'Red Cliffs Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f2f',
    },
    temple_id: 195,
    additionalInfo: false,
    name: 'Redlands California Temple',
    location: 'Redlands, California, United States',
    dedicated: '14 September 2003',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f30',
    },
    temple_id: 196,
    additionalInfo: false,
    name: 'Regina Saskatchewan Temple',
    location: 'Regina, Saskatchewan, Canada',
    dedicated: '14 November 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f31',
    },
    temple_id: 197,
    additionalInfo: false,
    name: 'Reno Nevada Temple',
    location: 'Reno, Nevada, United States',
    dedicated: '23 April 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f32',
    },
    temple_id: 198,
    additionalInfo: true,
    name: 'Rexburg Idaho Temple',
    location: 'Rexburg, Idaho, United States',
    dedicated: '10 February 2008',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f33',
    },
    temple_id: 199,
    additionalInfo: false,
    name: 'Rexburg North Idaho Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f34',
    },
    temple_id: 200,
    additionalInfo: false,
    name: 'Richmond Virginia Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f35',
    },
    temple_id: 201,
    additionalInfo: false,
    name: 'Rio de Janeiro Brazil Temple',
    location: 'Rio de Janeiro, Brazil',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f36',
    },
    temple_id: 202,
    additionalInfo: false,
    name: 'Rome Italy Temple',
    location: 'Rome, Roma, Italy',
    dedicated: '10 March 2019',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f37',
    },
    temple_id: 203,
    additionalInfo: false,
    name: 'Russia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f38',
    },
    temple_id: 204,
    additionalInfo: false,
    name: 'Sacramento California Temple',
    location: 'Rancho Cordova, California, United States',
    dedicated: '3 September 2006',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f39',
    },
    temple_id: 205,
    additionalInfo: false,
    name: 'Salt Lake Temple',
    location: 'Salt Lake City, Utah, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3a',
    },
    temple_id: 206,
    additionalInfo: false,
    name: 'Salta Argentina Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3b',
    },
    temple_id: 207,
    additionalInfo: false,
    name: 'Salvador Brazil Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3c',
    },
    temple_id: 208,
    additionalInfo: false,
    name: 'San Antonio Texas Temple',
    location: 'San Antonio, Texas, United States',
    dedicated: '22 May 2005',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3d',
    },
    temple_id: 209,
    additionalInfo: false,
    name: 'San Diego California Temple',
    location: 'San Diego, California, United States',
    dedicated: '25 April 1993',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3e',
    },
    temple_id: 210,
    additionalInfo: false,
    name: 'San José Costa Rica Temple',
    location: 'Belén, Heredia, Costa Rica',
    dedicated: '4 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f3f',
    },
    temple_id: 211,
    additionalInfo: false,
    name: 'San Juan Puerto Rico Temple',
    location: 'San Juan, Puerto Rico',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f40',
    },
    temple_id: 212,
    additionalInfo: false,
    name: 'San Pedro Sula Honduras Temple',
    location: 'Location Not Available',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f41',
    },
    temple_id: 213,
    additionalInfo: false,
    name: 'San Salvador El Salvador Temple',
    location: 'Antiguo Cuscatlán, La Libertad, El Salvador',
    dedicated: '21 August 2011',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f42',
    },
    temple_id: 214,
    additionalInfo: false,
    name: 'Santa Cruz Bolivia Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f43',
    },
    temple_id: 215,
    additionalInfo: false,
    name: 'Santiago Chile Temple',
    location: 'Providencia, Santiago, Chile',
    dedicated: '15 September 1983',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f44',
    },
    temple_id: 216,
    additionalInfo: false,
    name: 'Santiago West Chile Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f45',
    },
    temple_id: 217,
    additionalInfo: false,
    name: 'Santo Domingo Dominican Republic Temple',
    location: 'Santo Domingo, Distrito Nacional, Dominican Republic',
    dedicated: '17 September 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f46',
    },
    temple_id: 218,
    additionalInfo: false,
    name: 'São Paulo Brazil Temple',
    location: 'São Paulo, Sao Paulo, Brazil',
    dedicated: '30 October 1978',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f47',
    },
    temple_id: 219,
    additionalInfo: false,
    name: 'São Paulo East Brazil Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f48',
    },
    temple_id: 220,
    additionalInfo: false,
    name: 'Sapporo Japan Temple',
    location: 'Atsubetsu-ku Sapporo, Hokkaido, Japan',
    dedicated: '21 August 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f49',
    },
    temple_id: 221,
    additionalInfo: false,
    name: 'Saratoga Springs Utah Temple',
    location: 'Saratoga Springs, Utah, United States',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4a',
    },
    temple_id: 222,
    additionalInfo: false,
    name: 'Seattle Washington Temple',
    location: 'Bellevue, Washington, United States',
    dedicated: '17 November 1980',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4b',
    },
    temple_id: 223,
    additionalInfo: false,
    name: 'Seoul Korea Temple',
    location: 'Seoul, Seoul-teukbyeolsi, South Korea',
    dedicated: '14 December 1985',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4c',
    },
    temple_id: 224,
    additionalInfo: false,
    name: 'Shanghai People’s Republic of China Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4d',
    },
    temple_id: 225,
    additionalInfo: false,
    name: 'Singapore Republic of Singapore Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4e',
    },
    temple_id: 226,
    additionalInfo: false,
    name: 'Smithfield Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f4f',
    },
    temple_id: 227,
    additionalInfo: false,
    name: 'Snowflake Arizona Temple',
    location: 'Snowflake, Arizona, United States',
    dedicated: '3 March 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f50',
    },
    temple_id: 228,
    additionalInfo: false,
    name: 'Spokane Washington Temple',
    location: 'Spokane, Washington, United States',
    dedicated: '21 August 1999',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f51',
    },
    temple_id: 229,
    additionalInfo: false,
    name: 'St. George Utah Temple',
    location: 'St. George, Utah, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f52',
    },
    temple_id: 230,
    additionalInfo: false,
    name: 'St. Louis Missouri Temple',
    location: 'St. Louis, Missouri, United States',
    dedicated: '1 June 1997',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f53',
    },
    temple_id: 231,
    additionalInfo: false,
    name: 'St. Paul Minnesota Temple',
    location: 'Oakdale, Minnesota, United States',
    dedicated: '9 January 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f54',
    },
    temple_id: 232,
    additionalInfo: false,
    name: 'Star Valley Wyoming Temple',
    location: 'Afton, Wyoming, United States',
    dedicated: '30 October 2016',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f55',
    },
    temple_id: 233,
    additionalInfo: false,
    name: 'Stockholm Sweden Temple',
    location: 'Vasterhaninge, Sweden',
    dedicated: '2 July 1985',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f56',
    },
    temple_id: 234,
    additionalInfo: false,
    name: 'Suva Fiji Temple',
    location: 'Samabula, Suva, Fiji',
    dedicated: '18 June 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f57',
    },
    temple_id: 235,
    additionalInfo: false,
    name: 'Sydney Australia Temple',
    location: 'Carlingford, New South Wales, Australia',
    dedicated: '20 September 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f58',
    },
    temple_id: 236,
    additionalInfo: false,
    name: 'Syracuse Utah Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f59',
    },
    temple_id: 237,
    additionalInfo: false,
    name: 'Tacloban City Philippines Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5a',
    },
    temple_id: 238,
    additionalInfo: false,
    name: 'Taipei Taiwan Temple',
    location: 'Taipei, Taipei, Taiwan',
    dedicated: '17 November 1984',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5b',
    },
    temple_id: 239,
    additionalInfo: false,
    name: 'Tallahassee Florida Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5c',
    },
    temple_id: 240,
    additionalInfo: false,
    name: 'Tampico Mexico Temple',
    location: 'Ciudad Madero, Tamaulipas, Mexico',
    dedicated: '20 May 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5d',
    },
    temple_id: 241,
    additionalInfo: false,
    name: 'Tarawa Kiribati Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5e',
    },
    temple_id: 242,
    additionalInfo: false,
    name: 'Taylorsville Utah Temple',
    location: 'Taylorsville, Utah, United States',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f5f',
    },
    temple_id: 243,
    additionalInfo: false,
    name: 'Tegucigalpa Honduras Temple',
    location: 'Comayagüela, Francisco Morazán, Honduras',
    dedicated: '17 March 2013',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f60',
    },
    temple_id: 244,
    additionalInfo: false,
    name: 'The Gila Valley Arizona Temple',
    location: 'Central, Arizona, United States',
    dedicated: '23 May 2010',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f61',
    },
    temple_id: 245,
    additionalInfo: false,
    name: 'The Hague Netherlands Temple',
    location: 'Zoetermeer, Zuid-Holland, Netherlands',
    dedicated: '8 September 2002',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f62',
    },
    temple_id: 246,
    additionalInfo: false,
    name: 'Tijuana Mexico Temple',
    location: 'Tijuana, Baja California, Mexico',
    dedicated: '13 December 2015',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f63',
    },
    temple_id: 247,
    additionalInfo: false,
    name: 'Tokyo Japan Temple',
    location: 'Minato-ku, Tokyo, Japan',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f64',
    },
    temple_id: 248,
    additionalInfo: false,
    name: 'Toronto Ontario Temple',
    location: 'Brampton, Ontario, Canada',
    dedicated: '25 August 1990',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f65',
    },
    temple_id: 249,
    additionalInfo: false,
    name: 'Torreón Mexico Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f66',
    },
    temple_id: 250,
    additionalInfo: false,
    name: 'Trujillo Peru Temple',
    location: 'Trujillo, La Libertad, Peru',
    dedicated: '21 June 2015',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f67',
    },
    temple_id: 251,
    additionalInfo: false,
    name: 'Tucson Arizona Temple',
    location: 'Tucson, Arizona, United States',
    dedicated: '13 August 2017',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f68',
    },
    temple_id: 252,
    additionalInfo: false,
    name: 'Tuxtla Gutiérrez Mexico Temple',
    location: 'Tuxtla Gutiérrez, Chiapas, Mexico',
    dedicated: '12 March 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f69',
    },
    temple_id: 253,
    additionalInfo: false,
    name: 'Twin Falls Idaho Temple',
    location: 'Twin Falls, Idaho, United States',
    dedicated: '24 August 2008',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6a',
    },
    temple_id: 254,
    additionalInfo: false,
    name: 'Urdaneta Philippines Temple',
    location: 'Urdaneta, Pangasinan, Philippines',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6b',
    },
    temple_id: 255,
    additionalInfo: false,
    name: 'Vancouver British Columbia Temple',
    location: 'Langley, British Columbia, Canada',
    dedicated: '2 May 2010',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6c',
    },
    temple_id: 256,
    additionalInfo: false,
    name: 'Veracruz Mexico Temple',
    location: 'Boca del Rio, Veracruz, Mexico',
    dedicated: '9 July 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6d',
    },
    temple_id: 257,
    additionalInfo: false,
    name: 'Vernal Utah Temple',
    location: 'Vernal, Utah, United States',
    dedicated: '2 November 1997',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6e',
    },
    temple_id: 258,
    additionalInfo: false,
    name: 'Vienna Austria Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f6f',
    },
    temple_id: 259,
    additionalInfo: false,
    name: 'Villahermosa Mexico Temple',
    location: 'Villahermosa, Tabasco, Mexico',
    dedicated: '21 May 2000',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f70',
    },
    temple_id: 260,
    additionalInfo: false,
    name: 'Vitória Brazil Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f71',
    },
    temple_id: 261,
    additionalInfo: false,
    name: 'Washington D.C. Temple',
    location: 'Kensington, Maryland, United States',
    dedicated: 'Renovation',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f72',
    },
    temple_id: 262,
    additionalInfo: false,
    name: 'Willamette Valley Oregon Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f73',
    },
    temple_id: 263,
    additionalInfo: false,
    name: 'Winnipeg Manitoba Temple',
    location: 'Winnipeg, Manitoba, Canada',
    dedicated: '31 October 2021',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f74',
    },
    temple_id: 264,
    additionalInfo: false,
    name: 'Winter Quarters Nebraska Temple',
    location: 'Omaha, Nebraska, United States',
    dedicated: '22 April 2001',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f75',
    },
    temple_id: 265,
    additionalInfo: false,
    name: 'Yigo Guam Temple',
    location: 'Yigo, Guam',
    dedicated: 'Construction',
  },
  {
    _id: {
      $oid: '61a921f6028954d4f0319f76',
    },
    temple_id: 266,
    additionalInfo: false,
    name: 'Yorba Linda California Temple',
    location: 'Location Not Available',
    dedicated: 'Announced',
  },
]);
