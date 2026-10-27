import { TouristPlace } from '../types';

export const INITIAL_DESTINATIONS: TouristPlace[] = [
  // 1. Taj Mahal
  {
    id: 'taj-mahal',
    name: 'Taj Mahal',
    hindiName: 'ताज महल',
    state: 'Uttar Pradesh',
    city: 'Agra',
    zone: 'North',
    category: 'Heritage & Culture',
    description: 'An immense mausoleum of white marble, commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favourite wife, Mumtaz Mahal. It stands as the jewel of Muslim art in India and one of the universally admired masterpieces of the world\'s heritage.',
    historicalSignificance: 'Constructed over a 22-year period utilizing 20,000 artisans and master craftsmen from across the empire, Persia, and Central Asia. Inscribed as a UNESCO World Heritage Site in 1983.',
    bestTimeToVisit: {
      season: 'Winter & Early Spring',
      months: 'October to March',
      weatherDesc: 'Pleasant daytime temperatures ranging from 12°C to 25°C, ideal for walking the extensive gardens without harsh summer heat.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: 'Sunrise to Sunset (Approx. 6:00 AM – 6:30 PM). Closed on Fridays.',
    entryFee: {
      domestic: '₹50 (additional ₹200 for main mausoleum dome)',
      foreign: '₹1,100 (additional ₹200 for main mausoleum dome)',
      cameraFee: 'Tripods prohibited; basic mobile photography free',
      notes: 'Entry is free for children below 15 years. Night viewing available on full moon nights and 2 days before/after.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Taj+Mahal,+Agra,+Uttar+Pradesh',
      lat: 27.1751,
      lng: 78.0421,
      address: 'Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001'
    },
    images: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1585135497273-1a86b09fe70e?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Agra Fort', distance: '2.5 km', type: 'Mughal Fortress & Palace' },
      { name: 'Mehtab Bagh', distance: '7.0 km', type: 'Sunset Garden View Across Yamuna' },
      { name: 'Fatehpur Sikri', distance: '36 km', type: 'Ancient Mughal Capital' }
    ],
    howToReach: {
      airport: 'Agra Airport (Kheria) - 12 km; IGI New Delhi - 220 km (Yamuna Expressway)',
      railway: 'Agra Cantt Railway Station (connected via Gatimaan & Vande Bharat Express)',
      road: 'Well connected via the 6-lane Yamuna Expressway from Delhi (approx. 3.5 hours)'
    },
    localCuisine: ['Agra Petha (Petha sweets)', 'Bedmi Puri with Aloo Sabzi', 'Mughlai Gosht & Kebabs'],
    highlights: ['UNESCO World Heritage Site', 'New 7 Wonders of the World', 'Pietra Dura Inlay Art'],
    tips: [
      'Book tickets online through ASI Archaeological portal to skip long queues.',
      'Enter via East or West gates at sunrise for the best ethereal morning light and lowest crowds.',
      'Security is strict: avoid large backpacks, food items, lighters, or commercial recording gear.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.tajmahal.gov.in',
    idealTripDuration: 'Half Day to 1 Day',
    unescoSite: true
  },

  // 2. Hampi Monuments
  {
    id: 'hampi-monuments',
    name: 'Group of Monuments at Hampi',
    hindiName: 'हम्पी स्मारक',
    state: 'Karnataka',
    city: 'Hampi, Vijayanagara',
    zone: 'South',
    category: 'Heritage & Culture',
    description: 'The spectacular capital of the medieval Vijayanagara Empire situated on the banks of the Tungabhadra River. The dramatic boulder-strewn topography is studded with over 1,600 surviving monuments, stone temples, royal pavilions, and stepped tanks.',
    historicalSignificance: 'Between the 14th and 16th centuries, Hampi was one of the largest and wealthiest metropolises in the world, described by Persian and Portuguese travelers as comparable to Rome.',
    bestTimeToVisit: {
      season: 'Autumn to Late Winter',
      months: 'October to February',
      weatherDesc: 'Comfortable sunny days with cool evenings (15°C to 28°C), making it pleasant to cycle or walk between spread-out temple clusters.',
      peakMonths: ['November', 'December', 'January']
    },
    timings: '6:00 AM – 6:00 PM (Virupaksha Temple opens at 6:00 AM)',
    entryFee: {
      domestic: '₹40 (covers Vittala Temple & Lotus Mahal complex)',
      foreign: '₹600',
      cameraFee: '₹25 for video camera; mobile photography free',
      notes: 'Most outer complexes like Virupaksha Temple, Hemakuta Hill, and Achyutaraya are free.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Hampi,+Karnataka',
      lat: 15.3350,
      lng: 76.4600,
      address: 'Vijayanagara District, Hampi, Karnataka 583239'
    },
    images: [
      'https://images.unsplash.com/photo-1600100397608-f010e42e12cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144822-0d127df9cb51?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Vittala Temple & Stone Chariot', distance: '2.5 km', type: 'Iconic Vijayanagara Architecture' },
      { name: 'Matanga Hill', distance: '1.2 km', type: '360° Sunrise Vantage Point' },
      { name: 'Sanapur Lake & Hippie Island', distance: '6.0 km', type: 'Coracle Boats & Granite Cliffs' }
    ],
    howToReach: {
      airport: 'Hubli Airport (165 km) or Jindal Vijaynagar Airport, Bellary (40 km)',
      railway: 'Hosapete Junction (HPT) - 13 km, connects directly to Bengaluru and Goa',
      road: 'Well serviced by KSRTC sleeper buses from Bengaluru, Hyderabad, and Pune'
    },
    localCuisine: ['Karnataka Thali with Jolada Roti', 'Bisi Bele Bath', 'Mysore Pak', 'Benne Dosa'],
    highlights: ['UNESCO World Heritage Site', 'Monolithic Stone Chariot', 'Musical Granite Pillars'],
    tips: [
      'Rent a bicycle or moped in Hampi Bazaar to traverse the wide 26 sq km complex easily.',
      'Climb Matanga Hill by 5:30 AM for a legendary sunrise above the temple towers and boulder plains.',
      'Wear sturdy walking shoes as the granite stones become warm by afternoon.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://karnatakatourism.org/tour-item/hampi',
    idealTripDuration: '2 to 3 Days',
    unescoSite: true
  },

  // 3. Varanasi Ghats & Kashi Vishwanath
  {
    id: 'varanasi-ghats',
    name: 'Varanasi Ghats & Sacred Ganga',
    hindiName: 'वाराणसी के घाट',
    state: 'Uttar Pradesh',
    city: 'Varanasi (Kashi)',
    zone: 'North',
    category: 'Religious & Spiritual',
    description: 'One of the world\'s oldest continually inhabited cities, Varanasi is the spiritual capital of India. Along the sacred crescent-shaped bank of the holy River Ganga stretch 88 ancient stone ghats where pilgrims perform dawn ablutions, prayers, and evening illuminated aartis.',
    historicalSignificance: 'Celebrated in classical Sanskrit epics and the Rigveda, Kashi has been a center of philosophical discourse, music, and spiritual contemplation for over three millennia.',
    bestTimeToVisit: {
      season: 'Winter Season',
      months: 'October to March',
      weatherDesc: 'Crisp morning river breezes with mild temperatures (10°C to 24°C), ideal for exploring the labyrinthine alleyways and morning boat rides.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: 'Open 24 hours. Ganga Aarti starts at sunset (~6:30 PM in summer, ~6:00 PM in winter).',
    entryFee: {
      domestic: 'Free (Boat rides approx ₹300-₹800 per person)',
      foreign: 'Free',
      notes: 'Kashi Vishwanath Temple corridor entry is free; special Sugam Darshan passes available online.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Dashashwamedh+Ghat,+Varanasi',
      lat: 25.3076,
      lng: 83.0107,
      address: 'Dashashwamedh Ghat, Varanasi, Uttar Pradesh 221001'
    },
    images: [
      'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1571536802807-30451e3955d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Kashi Vishwanath Corridor', distance: '0.4 km', type: 'Sacred Jyotirlinga Shrine' },
      { name: 'Sarnath Deer Park', distance: '10.5 km', type: 'Buddha First Sermon Site & Museum' },
      { name: 'Manikarnika & Assi Ghats', distance: '1.5 km', type: 'Historic Ritual Ghats' }
    ],
    howToReach: {
      airport: 'Lal Bahadur Shastri International Airport (VNS) - 25 km from city centre',
      railway: 'Varanasi Junction (BSB) and Pt. Deen Dayal Upadhyaya Junction (DDU)',
      road: 'National Highways NH 19 and NH 31 connect smoothly across northern India'
    },
    localCuisine: ['Banarasi Paan', 'Kachori Jalebi breakfast', 'Malaiyo (winter saffron froth)', 'Tamatar Chaat'],
    highlights: ['Grand Evening Maha Aarti', 'Dawn Wooden Boat Cruise', 'Banarasi Silk Weaving Colonies'],
    tips: [
      'Take a sunrise boat cruise from Assi Ghat to Dashashwamedh to observe morning rituals and temple silhouette.',
      'Arrive at Dashashwamedh Ghat at least 45 minutes before sunset to secure prime seating for Ganga Aarti.',
      'Boutique silk purchases are best made at weaver cooperatives in Madanpura rather than tout shops.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://varanasi.nic.in/tourism/',
    idealTripDuration: '2 to 3 Days',
    unescoSite: false
  },

  // 4. Amer Fort & Jaipur Old City
  {
    id: 'amer-fort-jaipur',
    name: 'Amer Fort & The Pink City',
    hindiName: 'आमेर किला एवं जयपुर',
    state: 'Rajasthan',
    city: 'Jaipur',
    zone: 'West',
    category: 'Heritage & Culture',
    description: 'Crowning the rugged Aravalli crest overlooking Maota Lake, Amer Fort is a formidable fortress-palace constructed from yellow and pink sandstone. Renowned for its artistic Rajput-Mughal architectural synthesis, including the Sheesh Mahal (Mirror Palace) where a single candle flame illuminates the entire hall.',
    historicalSignificance: 'Built by Raja Man Singh I in the late 16th century, Amer served as the royal citadel of the Kachwaha clan before Sawai Jai Singh II founded the planned capital of Jaipur in 1727.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Sunny, pleasant days with cool nights. Summers in Rajasthan often exceed 42°C and are best avoided for fort exploration.',
      peakMonths: ['November', 'December', 'January']
    },
    timings: '8:00 AM – 5:30 PM (Day) & 6:30 PM – 9:15 PM (Night Viewing & Sound/Light Show)',
    entryFee: {
      domestic: '₹100 (composite heritage ticket ₹300)',
      foreign: '₹550 (composite ticket ₹1,000)',
      cameraFee: '₹100 for still camera',
      notes: 'Composite tickets include entry to Hawa Mahal, Jantar Mantar, and Albert Hall.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Amer+Fort,+Jaipur,+Rajasthan',
      lat: 26.9855,
      lng: 75.8513,
      address: 'Devisinghpura, Amer, Jaipur, Rajasthan 302001'
    },
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1609137144822-0d127df9cb51?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Jaigarh Fort & Jaivana Cannon', distance: '1.2 km', type: 'Military Fort' },
      { name: 'Hawa Mahal (Palace of Winds)', distance: '10.5 km', type: 'Honeycomb Rajput Façade' },
      { name: 'Jantar Mantar Astronomical Observatory', distance: '11.0 km', type: 'UNESCO Monument' }
    ],
    howToReach: {
      airport: 'Jaipur International Airport (JAI) - 22 km',
      railway: 'Jaipur Junction (JP) with daily Shatabdi, Double Decker, and Vande Bharat to Delhi',
      road: 'Delhi-Mumbai Expressway / NH 48 connects Delhi in just 3.5 to 4 hours'
    },
    localCuisine: ['Dal Baati Churma with Ghee', 'Ghevar Sweet', 'Laal Maas', 'Pyaaz Kachori at Rawat'],
    highlights: ['Sheesh Mahal (Glass Palace)', 'UNESCO World Heritage Hill Fort', 'Diwan-e-Aam Carved Pillars'],
    tips: [
      'Take an authorized government audio guide at the entrance for rich contextual stories.',
      'Climb up to Jaigarh Fort via the subterranean tunnel for magnificent panoramas of the valley.',
      'Stay for the evening sound and light show narrated by Amitabh Bachchan.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.tourism.rajasthan.gov.in',
    idealTripDuration: '1 to 2 Days',
    unescoSite: true
  },

  // 5. Pangong Tso & Nubra Valley
  {
    id: 'pangong-tso-ladakh',
    name: 'Pangong Tso & High Himalaya Passes',
    hindiName: 'पैंगोंग त्सो, लद्दाख',
    state: 'Ladakh',
    city: 'Leh',
    zone: 'North',
    category: 'Adventure & Hill Stations',
    description: 'An endorheic high-altitude saltwater lake situated at an elevation of 4,225 metres (13,862 ft), extending 134 km from India into the Tibetan Plateau. Celebrated for its extraordinary color shifts across shades of deep cobalt, turquoise, and emerald under clear Himalayan skies.',
    historicalSignificance: 'Located along ancient trans-Himalayan trade routes; accessible via Chang La pass (17,688 ft), one of the highest motorable road passes on Earth.',
    bestTimeToVisit: {
      season: 'Summer to Early Autumn',
      months: 'May to September',
      weatherDesc: 'Warm daytime sunlight (15°C to 20°C) with brisk freezing night temperatures. Roads and mountain passes remain open during these months.',
      peakMonths: ['June', 'July', 'August']
    },
    timings: 'Accessible 24 hours; overnight eco-camps available along Spangmik and Lukung.',
    entryFee: {
      domestic: '₹400 Inner Line Permit (ILP) + ₹20 Wildlife fee',
      foreign: '₹600 Protected Area Permit (PAP)',
      notes: 'Permits easily obtained online via the Leh LAHDC official portal or local tour agents.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Pangong+Tso,+Ladakh',
      lat: 33.7595,
      lng: 78.6674,
      address: 'Changthang Plateau, Leh District, Ladakh 194101'
    },
    images: [
      'https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1595815771614-ade9d652a65d?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1626014303757-6564477577f1?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Khardung La Pass', distance: '140 km', type: '17,982 ft Mountain Pass' },
      { name: 'Diskit Monastery & Giant Buddha', distance: '150 km', type: 'Nubra Valley Gompa' },
      { name: 'Hunder Sand Dunes', distance: '160 km', type: 'Double-Humped Bactrian Camels' }
    ],
    howToReach: {
      airport: 'Kushok Bakula Rimpochee Airport (IXL) in Leh - 140 km drive across Chang La pass',
      railway: 'Nearest railhead is Jammu Tawi (700 km); best approached by flight to Leh',
      road: 'Accessible via Manali-Leh Highway or Srinagar-Leh Highway between June and October'
    },
    localCuisine: ['Thukpa Noodle Soup', 'Tingmo Steamed Bread', 'Ladakhi Butter Tea (Gur Gur Chai)', 'Chhurpi Cheese'],
    highlights: ['Color-Changing Glacial Waters', 'Breathtaking Chang La Crossing', 'Milky Way Stargazing Under Zero Light Pollution'],
    tips: [
      'Mandatory acclimatization: spend at least 48 hours resting in Leh before traveling to Pangong.',
      'Carry essential warm thermal wear and windbreakers, even during peak summer.',
      'Single-use plastic bottles are restricted; carry reusable thermal flasks.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://ladakh.nic.in/tourism/',
    idealTripDuration: '2 Days / 1 Night',
    unescoSite: false
  },

  // 6. Alleppey (Alappuzha) Backwaters
  {
    id: 'alleppey-backwaters',
    name: 'Alleppey Backwaters & Kettuvallam',
    hindiName: 'अलप्पुझा बैकवाटर्स',
    state: 'Kerala',
    city: 'Alappuzha',
    zone: 'South',
    category: 'Nature & Wildlife',
    description: 'Often called the "Venice of the East", Alappuzha features an intricate web of canals, lagoons, and lakes parallel to the Arabian Sea coast. Traditional wooden houseboats (Kettuvallams) glide through mirror-like waterways framed by coconut groves, paddy fields below sea level, and pastoral village life.',
    historicalSignificance: 'Houseboats were originally grain barges crafted from Anjili wood and coir rope without using a single iron nail. Today, transformed into luxurious floating suites serving freshly caught Karimeen fish.',
    bestTimeToVisit: {
      season: 'Winter & Post-Monsoon',
      months: 'September to March',
      weatherDesc: 'Comfortable tropical breezes (22°C to 30°C) with vibrant green vegetation after the southwest monsoon rains.',
      peakMonths: ['October', 'November', 'December', 'January', 'February']
    },
    timings: 'Day cruises: 11:30 AM – 5:30 PM. Overnight cruises check in at 12:00 PM.',
    entryFee: {
      domestic: 'Day cruise ₹4,000–₹8,000 / houseboat; Govt Ferry from ₹20',
      foreign: 'Same rates apply; luxury private houseboats range ₹10,000–₹25,000/night',
      notes: 'State Water Transport Department operates public scenic ferries for budget travelers.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Alappuzha+Backwaters,+Kerala',
      lat: 9.4981,
      lng: 76.3388,
      address: 'Finishing Point Jetty, Alappuzha, Kerala 688013'
    },
    images: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Marari Beach', distance: '14 km', type: 'Quiet White Sand Fisherman Beach' },
      { name: 'Kumarakom Bird Sanctuary', distance: '32 km', type: 'Migratory Bird Wetlands' },
      { name: 'Krishnapuram Palace', distance: '47 km', type: 'Gajendra Moksha Mural Painting' }
    ],
    howToReach: {
      airport: 'Cochin International Airport (COK) - 85 km (approx. 2 hours via NH 66)',
      railway: 'Alappuzha Railway Station (ALLP) within city limits',
      road: 'Extensive KSRTC bus service connecting Kochi, Trivandrum, and Munnar'
    },
    localCuisine: ['Karimeen Pollichathu (Pearl Spot in banana leaf)', 'Kerala Sadya', 'Appam with Stew', 'Tapioca & Fish Curry'],
    highlights: ['Vembanad Lake - Longest lake in India', 'Nehru Trophy Snake Boat Race (August)', 'Authentic Ayurvedic Massages'],
    tips: [
      'Book authorized houseboats accredited with green/gold palm certifications by Kerala Tourism.',
      'Try the local government public ferry from Alleppey to Kottayam for a budget panoramic tour under ₹40.',
      'Watch the sunset over Vembanad Lake while anchored near Punnamada.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.keralatourism.org/destination/alappuzha-backwaters/11',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  },

  // 7. Double Decker Living Root Bridge (Cherrapunji) - OFFBEAT / HIDDEN GEM
  {
    id: 'nongriat-root-bridge',
    name: 'Nongriat Double Decker Living Root Bridge',
    hindiName: 'नोंगरियाट डबल डेकर रूट ब्रिज, मेघालय',
    state: 'Meghalaya',
    city: 'Cherrapunji (Sohra)',
    zone: 'North-East',
    category: 'Offbeat & Hidden Gems',
    description: 'Deep in the verdant rainforests of Meghalaya lies an extraordinary feat of bio-engineering created by the indigenous Khasi and Jaintia tribes. Aerial roots of the Ficus elastica tree are guided across roaring torrential rivers through hollowed betel nut trunks, growing stronger with every passing decade.',
    historicalSignificance: 'These bio-bridges have endured for over 250 years. Unlike concrete or steel bridges that rust and deteriorate in extreme precipitation, living root bridges become sturdier as the root network matures.',
    bestTimeToVisit: {
      season: 'Dry Winter & Post-Monsoon',
      months: 'October to April',
      weatherDesc: 'Clear hiking trails with temperatures between 10°C and 22°C. Rains recede, ensuring safe descent down the 3,500 stone stairs.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '6:00 AM – 5:00 PM (Trek starts early morning from Tyrna village)',
    entryFee: {
      domestic: '₹50 per person + ₹20 camera fee',
      foreign: '₹100 per person',
      notes: 'Local village council fees go directly toward trail maintenance and plastic cleanup.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Double+Decker+Living+Root+Bridge,+Nongriat,+Meghalaya',
      lat: 25.2505,
      lng: 91.6710,
      address: 'Nongriat Village, Sohra Sub-Division, East Khasi Hills, Meghalaya 793108'
    },
    images: [
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618245318763-a15156d6b23c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Rainbow Falls', distance: '1.5 hours hike', type: 'Perpetual Rainbow Plunge Pool' },
      { name: 'Nohkalikai Falls', distance: '12 km drive', type: 'Tallest Plunge Waterfall in India (340m)' },
      { name: 'Mawsmai & Arwah Caves', distance: '15 km', type: 'Prehistoric Limestone Caverns' }
    ],
    howToReach: {
      airport: 'Umroi Airport, Shillong (85 km) or Lokpriya Gopinath Bordoloi, Guwahati (160 km)',
      railway: 'Guwahati Railway Station (GHY) - 150 km, well linked across India',
      road: 'Drive from Shillong to Tyrna village (2.5 hours); trek 3,500 steps down to Nongriat'
    },
    localCuisine: ['Jadoh (Khasi rice and meat dish)', 'Tungrymbai fermented beans', 'Dohneiiong', 'Red Rice'],
    highlights: ['Living Bio-Engineering Wonder', 'Natural Turquoise Jungle Pools', 'UNESCO Tentative Heritage List'],
    tips: [
      'The trek involves ~3,500 steep concrete and stone stairs each way; physical fitness is recommended.',
      'Stay overnight in Nongriat village homestay to relax and explore the stunning Rainbow Falls nearby.',
      'Carry trekking poles and hydrate well with fresh lime juice sold by local villagers along the path.'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://meghalayatourism.in',
    idealTripDuration: 'Full Day / Overnight Stay',
    unescoSite: false
  },

  // 8. Gandikota - The Grand Canyon of India - OFFBEAT / HIDDEN GEM
  {
    id: 'gandikota-grand-canyon',
    name: 'Gandikota Gorge & Fort',
    hindiName: 'गंडीकोटा घाटी एवं किला',
    state: 'Andhra Pradesh',
    city: 'Kadapa District',
    zone: 'South',
    category: 'Offbeat & Hidden Gems',
    description: 'Known as the "Grand Canyon of India", Gandikota is a breathtaking gorge carved by the Penna River through the red granite Erramala hills. Atop the precipice rests a historic 12th-century stone fort with Madhavaraya temple, Jamia Masjid, and panoramic cliffs.',
    historicalSignificance: 'Founded in 1123 CE by Kapa Raja, Gandikota was fortified by Pemmasani Nayaks and later held by the Qutb Shahi dynasty. The dramatic sandstone cliffs provided an impregnable natural defense.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to February',
      weatherDesc: 'Cool mornings and moderate sunshine (18°C to 30°C). Avoid sweltering summer months when rock temperatures spike.',
      peakMonths: ['November', 'December', 'January']
    },
    timings: '6:00 AM – 6:00 PM (Cliffs accessible for sunrise from 5:30 AM)',
    entryFee: {
      domestic: 'Free entry to fort and canyon',
      foreign: 'Free',
      cameraFee: 'None',
      notes: 'Kayaking in Penna river is available during post-monsoon months (₹200-₹300).'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Gandikota+Fort,+Andhra+Pradesh',
      lat: 14.8143,
      lng: 78.2863,
      address: 'Gandikota, Jammalamadugu Mandal, YSR Kadapa District, Andhra Pradesh 516434'
    },
    images: [
      'https://images.unsplash.com/photo-1626290026388-0056973e7215?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42e12cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Belum Caves', distance: '60 km', type: 'Longest Underground Cave System in India' },
      { name: 'Madhavaraya Temple', distance: '0.2 km', type: 'Intricately Carved Vijayanagara Gopuram' },
      { name: 'Rayalaseema Wind Farms', distance: '12 km', type: 'Windmill Plateau Scenery' }
    ],
    howToReach: {
      airport: 'Tirupati Airport (220 km) or Bengaluru Kempegowda Airport (280 km)',
      railway: 'Jammalamadugu (18 km) or Muddanuru Railway Station (40 km)',
      road: 'Scenic drive from Bengaluru (approx. 5.5 hours) via NH 44 and NH 67'
    },
    localCuisine: ['Rayalaseema Ragi Mudde with Natu Kodi Pulusu', 'Andhra Spicy Gongura Chutney', 'Potharekulu'],
    highlights: ['Precipitous 300-ft Gorge Over Penna River', 'Secluded Cliffside Sunset', 'Stargazing Camps'],
    tips: [
      'Camp at the designated cliff-edge campsite for spectacular golden hour sunsets and starlit nights.',
      'Combine your trip with the underground stalactite corridors of Belum Caves (1.5 hours away).',
      'Wear grippy shoes as walking on the natural red granite boulders requires careful footing.'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://tourism.ap.gov.in',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  },

  // 9. Kaziranga National Park - Wildlife & Nature
  {
    id: 'kaziranga-national-park',
    name: 'Kaziranga National Park',
    hindiName: 'काजीरंगा राष्ट्रीय उद्यान',
    state: 'Assam',
    city: 'Golaghat & Nagaon',
    zone: 'North-East',
    category: 'Nature & Wildlife',
    description: 'A sanctuary in the Brahmaputra floodplains hosting two-thirds of the great one-horned rhinoceros population on Earth. Its elephant-grass meadows, marshland bheels, and dense tropical forests shelter royal Bengal tigers, Asian elephants, wild water buffalo, and swamp deer.',
    historicalSignificance: 'Established in 1905 upon the initiative of Lady Curzon; declared a UNESCO World Heritage Site in 1985 and a Tiger Reserve in 2006 for its exemplary conservation record.',
    bestTimeToVisit: {
      season: 'Winter & Spring',
      months: 'November to April',
      weatherDesc: 'Mild dry weather (13°C to 25°C). The park remains strictly closed during monsoon flooding (May to October).',
      peakMonths: ['December', 'January', 'February', 'March']
    },
    timings: 'Morning Jeep Safari: 7:30 AM – 11:00 AM; Afternoon Jeep Safari: 1:30 PM – 4:30 PM',
    entryFee: {
      domestic: '₹100 entry + ₹2,000 to ₹3,500 per Jeep safari (up to 6 persons)',
      foreign: '₹650 entry + Jeep safari costs',
      cameraFee: '₹100 for still camera, ₹500 for professional gear',
      notes: 'Elephant safari available in Central and Western ranges (advance morning booking required).'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Kaziranga+National+Park,+Assam',
      lat: 26.5775,
      lng: 93.1711,
      address: 'Bokakhat, Golaghat District, Assam 785612'
    },
    images: [
      'https://images.unsplash.com/photo-1618245318763-a15156d6b23c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Kaziranga National Orchid & Biodiversity Park', distance: '2 km', type: 'Over 500 Wild Orchid Species' },
      { name: 'Kakochang Waterfalls', distance: '13 km', type: 'Forest Waterfall & Trek' },
      { name: 'Majuli River Island', distance: '90 km + Ferry', type: 'World Largest River Island' }
    ],
    howToReach: {
      airport: 'Jorhat Airport (97 km) or Guwahati LGBI Airport (217 km)',
      railway: 'Furkating Junction (75 km) or Guwahati Junction',
      road: 'Located right along National Highway 715 (NH 37) with regular luxury bus services'
    },
    localCuisine: ['Assamese Thali with Khar', 'Masor Tenga (tangy river fish curry)', 'Pitha rice cakes', 'Assam Orthodox Tea'],
    highlights: ['Home to 2,600+ Greater One-horned Rhinos', 'Highest Tiger Density in Protected Areas', 'Eastern Swamp Deer Haven'],
    tips: [
      'Book safaris across both the Central (Kohora) and Western (Bagori) ranges for distinct wildlife sightings.',
      'Central range is known for bird watching and rhinos; Western range is best for close elephant herds and wild buffalo.',
      'Visit the nearby Orchid Park in the evening to enjoy authentic tribal Bihu folk dance performances.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://kaziranga.assam.gov.in',
    idealTripDuration: '2 to 3 Days',
    unescoSite: true
  },

  // 10. Golden Temple (Harmandir Sahib)
  {
    id: 'golden-temple-amritsar',
    name: 'Sri Harmandir Sahib (Golden Temple)',
    hindiName: 'श्री हरिमंदिर साहिब (स्वर्ण मंदिर)',
    state: 'Punjab',
    city: 'Amritsar',
    zone: 'North',
    category: 'Religious & Spiritual',
    description: 'The holiest Gurdwara of Sikhism, bathed in real gold leaf and surrounded by the serene Amrit Sarovar (Pool of Nectar). Designed with four entrances signifying universal brotherhood regardless of religion, caste, or background, Harmandir Sahib operates the world\'s largest free community kitchen (Langar).',
    historicalSignificance: 'Conceived by Guru Arjan Dev Ji in the late 16th century and overlaid with gilded copper foil by Maharaja Ranjit Singh in 1830. Houses the sacred scripture, Guru Granth Sahib.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Crisp and pleasant days (10°C to 24°C). The illuminated reflection of the golden sanctum over the shimmering night sarovar is magical.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: 'Open 24 hours daily, 365 days a year.',
    entryFee: {
      domestic: 'Free entry for all humanity',
      foreign: 'Free entry',
      notes: 'The Langar serves over 100,000 free hot nutritious vegetarian meals daily without discrimination.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Golden+Temple,+Amritsar,+Punjab',
      lat: 31.6200,
      lng: 74.8765,
      address: 'Golden Temple Road, Atta Mandi, Katra Ahluwalia, Amritsar, Punjab 143006'
    },
    images: [
      'https://images.unsplash.com/photo-1609137144822-0d127df9cb51?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Jallianwala Bagh Memorial', distance: '0.4 km', type: 'Historic National Monument' },
      { name: 'Wagah Border Beating Retreat Ceremony', distance: '30 km', type: 'Patriotic Military Border Ceremony' },
      { name: 'Partition Museum', distance: '0.8 km', type: 'World First Museum on 1947 Partition' }
    ],
    howToReach: {
      airport: 'Sri Guru Ram Dass Jee International Airport (ATQ) - 12 km with direct domestic & global flights',
      railway: 'Amritsar Junction (ASR) - major junction connecting all Indian metros',
      road: 'Grand Trunk Road (NH 44); smooth 7-hour express highway run from Delhi'
    },
    localCuisine: ['Amritsari Kulcha with Chole', 'Guru ka Langar Dal & Kheer', 'Lassi in clay glasses', 'Karah Prasad'],
    highlights: ['Gilded 24-Karat Gold Sanctum', 'World Largest Free Community Kitchen', 'Live Gurbani Kirtan 24/7'],
    tips: [
      'Head covering is mandatory for everyone (scarves provided free at entrance); remove shoes at shoe depositories.',
      'Volunteer (kar seva) in the langar kitchen—peeling garlic or washing dishes—for an uplifting spiritual experience.',
      'Witness the Palki Sahib ceremony around 9:30 PM (carrying Guru Granth Sahib to the Akal Takht).'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://sgpc.net',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  },

  // 11. Khajuraho Group of Monuments
  {
    id: 'khajuraho-temples',
    name: 'Khajuraho Group of Monuments',
    hindiName: 'खजुराहो स्मारक समूह',
    state: 'Madhya Pradesh',
    city: 'Khajuraho, Chhatarpur',
    zone: 'Central',
    category: 'Heritage & Culture',
    description: 'A world-famous ensemble of Hindu and Jain temples renowned for their nagara-style architectural symbolism and intricate sculptural artistry depicting everyday medieval life, celestial apsaras, musicians, warriors, and passionate erotic motifs celebrating the cosmic union of nature and spirit.',
    historicalSignificance: 'Built between 950 and 1050 CE by the Chandela dynasty. Of the original 85 temples spread over 20 square kilometers, 25 survive today in exceptional preservation.',
    bestTimeToVisit: {
      season: 'Winter Season',
      months: 'October to March',
      weatherDesc: 'Comfortable sunny weather (12°C to 26°C), perfect for admiring the thousands of intricate sandstone carvings.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: 'Western Group: Sunrise to Sunset (6:00 AM – 6:00 PM). Eastern and Southern groups open freely.',
    entryFee: {
      domestic: '₹40 (covers Western Group)',
      foreign: '₹600',
      cameraFee: '₹25 for video camera',
      notes: 'Sound and light show tickets available in Hindi and English every evening (₹250).'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Khajuraho+Temples,+Madhya+Pradesh',
      lat: 24.8318,
      lng: 79.9199,
      address: 'Rajnagar Road, Khajuraho, Chhatarpur District, Madhya Pradesh 471606'
    },
    images: [
      'https://images.unsplash.com/photo-1609946850401-2e69450c266f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Kandariya Mahadeva Temple', distance: '0.1 km', type: 'Highest Pinnacle of Chandela Architecture' },
      { name: 'Raneh Falls & Canyon', distance: '21 km', type: 'Crystalline Granite Canyon & Waterfall' },
      { name: 'Panna National Park', distance: '40 km', type: 'Tiger Reserve & Diamond Mines' }
    ],
    howToReach: {
      airport: 'Khajuraho Airport (HJR) - 4 km from Western Group of Temples',
      railway: 'Khajuraho Railway Station (KURJ) - 6 km; Mahoba (63 km) & Jhansi (175 km)',
      road: 'Connected via good state highways to Jhansi, Gwalior, and Bhopal'
    },
    localCuisine: ['Dal Bafla with Churma', 'Bhopali Gosht Korma', 'Bhutte ka Kees', 'Mawa Jalebi'],
    highlights: ['UNESCO World Heritage Site', 'Kandariya Mahadeva Temple', 'Annual Khajuraho Classical Dance Festival (February)'],
    tips: [
      'Hire a certified ASI guide at the Western Group entrance to appreciate the philosophical iconography and architectural symbolism.',
      'Visit Raneh Falls during late afternoon to witness the multi-colored pink and green volcanic rock formations.',
      'Plan your trip in late February to witness the famous Khajuraho Dance Festival against illuminated temple façades.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.mptourism.com/destination-khajuraho.html',
    idealTripDuration: '2 Days',
    unescoSite: true
  },

  // 12. Radhanagar Beach (Havelock Island)
  {
    id: 'radhanagar-beach-andaman',
    name: 'Radhanagar Beach (Beach No. 7)',
    hindiName: 'राधानगर बीच, हैवलॉक',
    state: 'Andaman & Nicobar Islands',
    city: 'Swaraj Dweep (Havelock Island)',
    zone: 'Islands & UTs',
    category: 'Beaches & Coastal',
    description: 'Voted multiple times as Asia\'s Best Beach by Time Magazine, Radhanagar Beach boasts powdered white sands, turquoise crystal-clear waters, and lush tropical Mahua forest backdrops. With gentle waves and zero underwater coral drop-offs, it provides the safest and most idyllic swimming in India.',
    historicalSignificance: 'Located on Swaraj Dweep, named in honor of Subhash Chandra Bose who unfurled the first Indian flag of freedom on Andaman soil in 1943.',
    bestTimeToVisit: {
      season: 'Autumn to Spring',
      months: 'October to May',
      weatherDesc: 'Sunny skies with calm seas, gentle ocean breezes, and pleasant temperatures (23°C to 30°C), ideal for swimming and watersports.',
      peakMonths: ['November', 'December', 'January', 'February', 'March']
    },
    timings: 'Open sunrise to sunset (approx. 5:30 AM – 6:00 PM). Night swimming prohibited for marine safety.',
    entryFee: {
      domestic: 'Free entry',
      foreign: 'Free entry',
      notes: 'Eco-showers and lockers available at modest charge of ₹20-₹50.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Radhanagar+Beach,+Havelock+Island,+Andaman',
      lat: 11.9846,
      lng: 92.9515,
      address: 'Radhanagar Beach No. 7, Swaraj Dweep, South Andaman 744211'
    },
    images: [
      'https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Elephant Beach', distance: '8 km + Boat trek', type: 'Vibrant Live Coral Snorkeling & Sea Walk' },
      { name: 'Kalapathar Beach', distance: '12 km', type: 'Black Volcanic Rocks & Sunrise Point' },
      { name: 'Neil Island (Shaheed Dweep)', distance: '1 hour ferry', type: 'Natural Rock Bridge & Laxmanpur' }
    ],
    howToReach: {
      airport: 'Veer Savarkar International Airport, Port Blair (IXZ) - direct flights from Kolkata, Chennai, Delhi',
      railway: 'No rail connectivity (Island territory)',
      road: 'High-speed catamaran ferries (Makruzz, Nautika, Green Ocean) take 90 minutes from Port Blair to Havelock'
    },
    localCuisine: ['Fresh Grilled Red Snapper & Lobster', 'Coconut Prawn Curry', 'Tandoori Crab', 'Tropical Fruit Smoothies'],
    highlights: ['Blue Flag Eco-Certified Beach', 'Spectacular Andaman Sunset', 'Zero Undertow Safe Swimming Waters'],
    tips: [
      'Reach the beach by 4:00 PM to secure a peaceful spot under the mahua canopy for sunset photography.',
      'Rent a two-wheeler at Havelock jetty (approx. ₹400-₹500/day) to explore both Radhanagar and Kalapathar beaches.',
      'Book private catamaran ferry tickets in advance, especially during the peak December-January holiday season.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.andamantourism.gov.in',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  },

  // 13. Ziro Valley - OFFBEAT / HIDDEN GEM
  {
    id: 'ziro-valley-arunachal',
    name: 'Ziro Valley & Apatani Plateau',
    hindiName: 'ज़िरो घाटी, अरुणाचल प्रदेश',
    state: 'Arunachal Pradesh',
    city: 'Lower Subansiri',
    zone: 'North-East',
    category: 'Offbeat & Hidden Gems',
    description: 'An idyllic high-altitude plateau surrounded by pine-clad mist mountains, famous for its indigenous Apatani tribe who practice an ingenious sustainable wet-rice and fish co-cultivation system without cattle or machinery. Renowned worldwide for tribal wooden architecture and the outdoor Ziro Festival of Music.',
    historicalSignificance: 'Nominated on the UNESCO Tentative World Heritage List for its unique cultural landscape and harmonious community forestry stewardship spanning centuries.',
    bestTimeToVisit: {
      season: 'Spring to Autumn',
      months: 'March to October (Festival in late September)',
      weatherDesc: 'Pleasant alpine mountain climate (15°C to 24°C). Lush green paddy fields in July-August turn to shimmering gold in September-October.',
      peakMonths: ['April', 'May', 'September', 'October']
    },
    timings: 'Open throughout daylight hours; village walks conducted respectfully.',
    entryFee: {
      domestic: 'Inner Line Permit (ILP) ₹100',
      foreign: 'Protected Area Permit (PAP) $50 (approx ₹4,200)',
      notes: 'Permits easily applied online through Arunachal Tourism portal.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Ziro+Valley,+Arunachal+Pradesh',
      lat: 27.5950,
      lng: 93.8340,
      address: 'Old Ziro, Lower Subansiri District, Arunachal Pradesh 791120'
    },
    images: [
      'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1618245318763-a15156d6b23c?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Kardo Shiva Lingam', distance: '4 km', type: 'Natural 25-ft Monolithic Stone Lingam' },
      { name: 'Talle Valley Wildlife Sanctuary', distance: '30 km', type: 'Clouded Leopard Habitat & Trekking' },
      { name: 'Hong & Hari Villages', distance: '3 km', type: 'Traditional Apatani Bamboo Architecture' }
    ],
    howToReach: {
      airport: 'Hollongi Airport, Itanagar (110 km) or Lilabari Airport, Assam (123 km)',
      railway: 'Naharlagun Railway Station (100 km) with direct trains from Guwahati and Delhi',
      road: 'Scenic drive from Naharlagun / Itanagar taking approximately 3.5 to 4.5 hours'
    },
    localCuisine: ['Pika Pila (bamboo shoot & pork fat pickle)', 'Lukter dried meat with chili', 'Marua millet beer', 'Apong'],
    highlights: ['UNESCO Tentative World Heritage Site', 'Apatani Tribal Agro-Ecology', 'Annual Ziro Music Festival'],
    tips: [
      'Hire a local Apatani guide when walking through Hong and Hari villages to understand customs respectfully.',
      'Always ask for permission before photographing village elders.',
      'Book homestays 3 to 4 months in advance if visiting during the famous Ziro Music Festival (late September).'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://arunachaltourism.com',
    idealTripDuration: '2 to 3 Days',
    unescoSite: false
  },

  // 14. Konark Sun Temple
  {
    id: 'konark-sun-temple',
    name: 'Sun Temple of Konark (Black Pagoda)',
    hindiName: 'कोणार्क सूर्य मंदिर, ओडिशा',
    state: 'Odisha',
    city: 'Konark, Puri',
    zone: 'East',
    category: 'Heritage & Culture',
    description: 'A monumental 13th-century temple engineered as a colossal chariot for Surya, the Sun God, with 24 carved stone wheels pulled by seven horses. Located near the Bay of Bengal coast, the temple wheels act as sundials capable of calculating exact time down to the minute through the shadow of their spokes.',
    historicalSignificance: 'Commissioned by King Narasimhadeva I of the Eastern Ganga Dynasty in 1250 CE using 1,200 artisans over 12 years. Inscribed as a UNESCO World Heritage Site in 1984.',
    bestTimeToVisit: {
      season: 'Winter Season',
      months: 'October to March',
      weatherDesc: 'Comfortable coastal weather (16°C to 28°C) accompanied by refreshing breezes from Chandrabhaga beach.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '6:00 AM – 8:00 PM daily. Evening light and sound show begins after dusk.',
    entryFee: {
      domestic: '₹40',
      foreign: '₹600',
      cameraFee: '₹25 for video camera; mobile photography free',
      notes: 'Entry free for children below 15 years.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Konark+Sun+Temple,+Odisha',
      lat: 19.8876,
      lng: 86.0945,
      address: 'Konark, Puri District, Odisha 752111'
    },
    images: [
      'https://images.unsplash.com/photo-1627916607164-7b20241db935?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42e12cb?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Chandrabhaga Beach', distance: '3 km', type: 'Blue Flag Certified Clean Beach & Sunrise' },
      { name: 'Jagannath Temple, Puri', distance: '35 km', type: 'Sacred Char Dham Pilgrimage Site' },
      { name: 'Chilika Lake (Satapada)', distance: '75 km', type: 'Irrawaddy Dolphin Lagoon' }
    ],
    howToReach: {
      airport: 'Biju Patnaik International Airport (BBI), Bhubaneswar - 65 km (1.5 hours drive)',
      railway: 'Puri Railway Station (PURI) - 35 km; Bhubaneswar Railway Station (BBS) - 65 km',
      road: 'Marine Drive Highway from Puri to Konark is one of the most scenic coastal drives in India'
    },
    localCuisine: ['Chhena Poda (baked cottage cheese dessert)', 'Dalma with steamed rice', 'Puri Khaja', 'Machha Besara'],
    highlights: ['UNESCO World Heritage Site', '24 Precision Astronomical Stone Sundials', 'Annual Konark Dance Festival (December)'],
    tips: [
      'Take an authorized guide to demonstrate how the stone spokes calculate the time of day using sunlight shadow casting.',
      'Combine the visit with a morning walk at Chandrabhaga Blue Flag beach just 3 km away.',
      'December 1-5 features the iconic Konark Dance Festival with classical Odissi recitals against the illuminated temple.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://odishatourism.gov.in',
    idealTripDuration: 'Half Day to 1 Day',
    unescoSite: true
  },

  // 15. Ajanta & Ellora Caves
  {
    id: 'ajanta-ellora-caves',
    name: 'Ajanta & Ellora Rock-Cut Caves',
    hindiName: 'अजंता एवं एलोरा गुफाएँ, महाराष्ट्र',
    state: 'Maharashtra',
    city: 'Chhatrapati Sambhajinagar (Aurangabad)',
    zone: 'West',
    category: 'Heritage & Culture',
    description: 'Masterpieces of religious art carved into sheer volcanic basalt cliffs. Ajanta contains 30 Buddhist rock-cut monuments with world-celebrated frescoes dating back to the 2nd century BCE. Nearby Ellora features 34 monolithic cave temples of Buddhist, Hindu, and Jain traditions, crowned by the staggering Kailash Temple—the largest monolithic rock excavation in the world.',
    historicalSignificance: 'The Kailash Temple (Cave 16) at Ellora was carved top-down from a single volcanic basalt cliff, removing an estimated 200,000 tonnes of solid rock over multiple decades under Rashtrakuta kings.',
    bestTimeToVisit: {
      season: 'Autumn to Late Winter',
      months: 'October to March',
      weatherDesc: 'Pleasant temperatures (15°C to 28°C). Post-monsoon months also feature cascading waterfalls along the Ajanta horseshoe ravine.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '9:00 AM – 5:30 PM. Note: Ajanta is closed on Mondays; Ellora is closed on Tuesdays.',
    entryFee: {
      domestic: '₹40 each (Ajanta ₹40, Ellora ₹40)',
      foreign: '₹600 each',
      cameraFee: '₹25 for video camera; flash photography strictly prohibited at Ajanta to protect ancient frescoes',
      notes: 'Entry free for children under 15 years.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Ellora+Caves,+Maharashtra',
      lat: 20.0268,
      lng: 75.1770,
      address: 'Ellora Cave Road, Aurangabad District, Maharashtra 431102'
    },
    images: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42e12cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Kailash Temple (Cave 16)', distance: 'Inside Ellora', type: 'Colossal Monolithic Marvel' },
      { name: 'Daulatabad Fort', distance: '15 km', type: 'Impregnable Medieval Hill Fortress' },
      { name: 'Bibi Ka Maqbara', distance: '28 km', type: '17th Century Taj of the Deccan' }
    ],
    howToReach: {
      airport: 'Chhatrapati Sambhajinagar Airport (IXU) - 30 km to Ellora, 100 km to Ajanta',
      railway: 'Aurangabad Railway Station (AWB) well linked to Mumbai, Hyderabad, and Pune',
      road: 'Smooth expressways connect from Mumbai (approx. 5.5 hours) and Pune (4.5 hours)'
    },
    localCuisine: ['Naan Qalia', 'Hurda with Thecha', 'Puran Poli', 'Maharashtrian Thali'],
    highlights: ['UNESCO World Heritage Sites', 'Monolithic Kailash Temple (Largest in World)', 'Ancient Jataka Tales Murals'],
    tips: [
      'Plan separate days for Ajanta and Ellora, as Ajanta is located 100 km northeast of the city.',
      'Remember the closing days: Ajanta is closed on Mondays, Ellora on Tuesdays.',
      'Carry a small pocket torch to examine the intricate ceiling frescoes inside Cave 1 and 2 at Ajanta without flash.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.maharashtratourism.gov.in',
    idealTripDuration: '2 to 3 Days',
    unescoSite: true
  },

  // 16. Lonar Crater Lake - OFFBEAT / SCIENTIFIC WONDER
  {
    id: 'lonar-crater-lake',
    name: 'Lonar Meteorite Impact Lake',
    hindiName: 'लोनार उल्कापिंड झील, महाराष्ट्र',
    state: 'Maharashtra',
    city: 'Buldhana District',
    zone: 'West',
    category: 'Offbeat & Hidden Gems',
    description: 'A National Geo-Heritage Monument formed roughly 52,000 years ago when a hyper-velocity meteor crashed into the Deccan volcanic basalt plains. It is the only known hyper-velocity impact crater in basaltic rock anywhere on Earth, creating an endorheic saline-alkaline lake surrounded by dense forest, wildlife, and 1,000-year-old Hemadpanthi temples.',
    historicalSignificance: 'Mentioned in ancient Indian literature like the Padma Purana and Ain-i-Akbari. Studied internationally by NASA and geological institutes for its basaltic planetary geology similar to lunar and Martian craters.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Comfortable day trekking temperatures (15°C to 28°C) with migratory birds such as flamingos, shelducks, and shovellers inhabiting the lake rim.',
      peakMonths: ['November', 'December', 'January']
    },
    timings: 'Open throughout daylight hours (6:00 AM – 6:00 PM).',
    entryFee: {
      domestic: 'Free entry',
      foreign: 'Free entry',
      notes: 'Designated as a Ramsar Wetland site in 2020.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Lonar+Crater+Lake,+Maharashtra',
      lat: 19.9757,
      lng: 76.5064,
      address: 'Lonar, Buldhana District, Maharashtra 443302'
    },
    images: [
      'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Daitya Sudan Temple', distance: '1.2 km', type: '11th Century Hemadpanthi Sun Temple' },
      { name: 'Gomukh Temple & Spring', distance: '0.8 km', type: 'Perennial Sweet Water Spring' },
      { name: 'Kamalja Devi Temple', distance: 'Crater Basin', type: 'Lakeside Sanctuary' }
    ],
    howToReach: {
      airport: 'Chhatrapati Sambhajinagar Airport (140 km) or Nagpur Airport (350 km)',
      railway: 'Jalna Railway Station (90 km) or Malkapur (100 km)',
      road: 'Well connected by MSRTC buses and state highways from Aurangabad and Jalna'
    },
    localCuisine: ['Jowar Bhakri with Pitla & Thecha', 'Varhadi Rassa', 'Shegaon Kachori'],
    highlights: ['Only Hyper-Velocity Impact Crater in Basalt on Earth', 'Dual Saline-Alkaline Lake Ecology', 'Ramsar Wetland Site'],
    tips: [
      'Trek down the crater rim via the trail starting near Gomukh Temple; the descent takes roughly 30 minutes.',
      'Wear sturdy hiking footwear as loose basalt pebbles can be slippery on the descent.',
      'Do not swim in the crater water due to high chemical salinity and alkaline mud.'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://www.maharashtratourism.gov.in',
    idealTripDuration: '1 Day',
    unescoSite: false
  },

  // 17. Shekhawati Open-Air Art Gallery - OFFBEAT / HIDDEN GEM
  {
    id: 'shekhawati-havelis',
    name: 'Shekhawati Painted Havelis',
    hindiName: 'शेखावाटी की हवेलियाँ, राजस्थान',
    state: 'Rajasthan',
    city: 'Mandawa & Nawalgarh',
    zone: 'West',
    category: 'Offbeat & Hidden Gems',
    description: 'Dubbed the "World\'s Largest Open-Air Art Gallery", the Shekhawati region is dotted with hundreds of grand grand merchant mansions (havelis) completely covered from floor to ceiling with hand-painted fresco murals. These frescoes depict mythological scenes, royal parades, and early 20th-century European technological inventions like motorcars, airplanes, and gramophones.',
    historicalSignificance: 'Prospering as key trading hubs along the Silk and caravan trade corridors in the 18th and 19th centuries, Marwari merchant families competed with each other to commission the most elaborate fresco decorations.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Dry, crisp desert air (12°C to 26°C), perfect for heritage walking tours through the historic towns of Mandawa, Nawalgarh, and Fatehpur.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '9:00 AM – 5:30 PM for museum havelis; street architecture viewable at all hours.',
    entryFee: {
      domestic: '₹100 to ₹150 for preserved museum havelis (e.g., Poddar Haveli, Murmuria)',
      foreign: '₹200 to ₹300',
      notes: 'Walking along the lanes to observe exterior frescoes is free.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Mandawa,+Shekhawati,+Rajasthan',
      lat: 28.0554,
      lng: 75.1485,
      address: 'Mandawa Town, Jhunjhunu District, Rajasthan 333704'
    },
    images: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Dr. Ramnath A. Poddar Haveli Museum', distance: 'Nawalgarh (25 km)', type: 'Over 750 Restored Frescoes' },
      { name: 'Mandawa Castle', distance: 'Center of town', type: 'Converted Heritage Hotel' },
      { name: 'Fatehpur Fresco Trail', distance: '22 km', type: 'Nadine Le Prince Cultural Centre' }
    ],
    howToReach: {
      airport: 'Jaipur International Airport (JAI) - 170 km (approx. 3.5 hours drive)',
      railway: 'Jhunjhunu (28 km) or Mukundgarh (14 km) on Sikar-Loharu railway line',
      road: 'Smooth highway from Delhi (approx. 5.5 hours) or Jaipur (3 hours)'
    },
    localCuisine: ['Ker Sangri (desert bean preparation)', 'Dal Baati Churma', 'Petha & Ghevar', 'Bajra Roti with Garlic Chutney'],
    highlights: ['World Largest Open-Air Art Gallery', 'Intricate Fresco Pigments Made with Natural Herbs & Minerals', 'Heritage Haveli Stays'],
    tips: [
      'Stay in a restored heritage haveli hotel in Mandawa or Nawalgarh for an authentic regal atmosphere.',
      'Look closely at the frescoes on Murmuria Haveli to spot portraits of the Wright Brothers\' aeroplane and Venetian gondolas painted by local artists who had never traveled abroad!',
      'Carry a telephoto zoom lens or binoculars to see the delicate upper-story window cornice details.'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://www.tourism.rajasthan.gov.in',
    idealTripDuration: '2 Days',
    unescoSite: false
  },

  // 18. Orchha Historic Citadel - OFFBEAT / HIDDEN GEM
  {
    id: 'orchha-citadel-mp',
    name: 'Orchha Palaces & Chhatris',
    hindiName: 'ओरछा के महल एवं छतरियाँ, मध्य प्रदेश',
    state: 'Madhya Pradesh',
    city: 'Niwari (near Jhansi)',
    zone: 'Central',
    category: 'Offbeat & Hidden Gems',
    description: 'A frozen-in-time medieval fortress capital founded in the 16th century along the boulder-strewn banks of the Betwa River. Orchha features grand stone architecture including the Raja Mahal, Jahangir Mahal, multi-tiered cenotaphs (Chhatris), and the Chaturbhuj Temple which resembles a high Gothic cathedral.',
    historicalSignificance: 'Founded by the Bundela chieftain Rudra Pratap Singh in 1501. The Raja Ram Temple here is the only temple in India where Lord Rama is venerated with regular police gun salutes as a sovereign King.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Pleasant temperatures (14°C to 27°C). The Betwa river flows clear and calm, perfect for river kayaking and sunset watching.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '9:00 AM – 5:00 PM for Fort Complex; Chhatris accessible until dusk.',
    entryFee: {
      domestic: '₹40 (valid for all monuments in Orchha)',
      foreign: '₹400',
      cameraFee: '₹25 for video camera',
      notes: 'Tickets can be purchased at the main Raja Mahal entrance.'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Orchha+Fort,+Madhya+Pradesh',
      lat: 25.3508,
      lng: 78.6432,
      address: 'Orchha Fort Complex, Niwari District, Madhya Pradesh 472246'
    },
    images: [
      'https://images.unsplash.com/photo-1609946850401-2e69450c266f?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Jahangir Mahal', distance: 'Inside Fort', type: 'Bundela-Mughal Fusion Palace' },
      { name: 'Chhatris on Betwa River', distance: '1.2 km', type: '14 Royal Memorial Cenotaphs' },
      { name: 'Chaturbhuj Temple', distance: '0.5 km', type: 'Spire Reaching 344 Feet Height' }
    ],
    howToReach: {
      airport: 'Gwalior Airport (125 km) or Khajuraho Airport (170 km)',
      railway: 'Jhansi Junction (VGLJ) - just 16 km away, connected via Shatabdi & Rajdhani',
      road: 'Quick 25-minute auto-rickshaw or taxi ride from Jhansi Railway Station'
    },
    localCuisine: ['Bundelkhandi Thali', 'Dal Bafla', 'Mawa Jalebi', 'Kadai Dudh'],
    highlights: ['UNESCO Tentative World Heritage Site', 'Ram Raja Temple Gun Salutes', 'Sunset Reflections at Betwa Cenotaphs'],
    tips: [
      'Walk down to the river bridge around 5:30 PM to photograph the silhouette of the 14 Chhatris mirrored in the Betwa River.',
      'Climb the upper balconies of Jahangir Mahal for views of the surrounding wildlife sanctuary.',
      'Unlike crowded tourist hubs, Orchha is unhurried, making it one of India\'s best slow-travel escapes.'
    ],
    isOffbeat: true,
    verified: true,
    officialWebsite: 'https://www.mptourism.com/destination-orchha.html',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  },

  // 19. Munnar Tea Highlands - HILL STATION & NATURE
  {
    id: 'munnar-tea-hills',
    name: 'Munnar Tea Estates & Anamudi',
    hindiName: 'मुन्नार चाय बागान, केरल',
    state: 'Kerala',
    city: 'Idukki District',
    zone: 'South',
    category: 'Adventure & Hill Stations',
    description: 'Perched at the confluence of three mountain rivers in the Western Ghats (1,600m above sea level), Munnar is South India\'s premier hill station. Endless rolling hills draped in emerald tea carpets, cool mist, and home to Anamudi (2,695m)—the highest mountain peak in India south of the Himalayas.',
    historicalSignificance: 'Developed as a summer resort by British tea planters in the late 19th century. Also the native sanctuary of the endangered Nilgiri Tahr and the Neelakurinji flower that blooms once every 12 years.',
    bestTimeToVisit: {
      season: 'Autumn to Spring',
      months: 'September to March',
      weatherDesc: 'Chilly, invigorating weather (10°C to 20°C). Clear views of deep valleys and crisp morning mist blanketed over tea gardens.',
      peakMonths: ['October', 'November', 'December', 'January', 'February']
    },
    timings: 'Tea gardens viewable all day; Eravikulam National Park: 7:30 AM – 4:00 PM.',
    entryFee: {
      domestic: '₹200 for Eravikulam National Park (includes shuttle bus)',
      foreign: '₹500 for Eravikulam National Park',
      notes: 'Tea Museum entry ₹125 (includes tea tasting session).'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Munnar,+Kerala',
      lat: 10.0889,
      lng: 77.0595,
      address: 'Munnar, Idukki District, Kerala 685612'
    },
    images: [
      'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Eravikulam National Park', distance: '12 km', type: 'Endangered Nilgiri Tahr Habitat' },
      { name: 'Mattupetty Dam & Echo Point', distance: '13 km', type: 'Boating & Mountain Reservoir' },
      { name: 'Top Station', distance: '32 km', type: 'Panoramic Views into Tamil Nadu Valley' }
    ],
    howToReach: {
      airport: 'Cochin International Airport (COK) - 110 km (approx. 3.5 hours scenic mountain drive)',
      railway: 'Aluva Railway Station (110 km) or Ernakulam Junction (130 km)',
      road: 'Scenic drive along NH 85 with multiple roadside waterfalls (Cheeyappara, Valara)'
    },
    localCuisine: ['Kerala Parotta with Veg/Beef Curry', 'Cardamom & Spiced Chai', 'Puttu with Kadala Curry', 'Banana Fritters'],
    highlights: ['Endless Tea Carpet Landscapes', 'Anamudi Peak (Highest in South India)', 'Endangered Nilgiri Tahr Sanctuary'],
    tips: [
      'Eravikulam National Park closes for calving season from February to March each year; check before planning.',
      'Visit the Lockhart Tea Factory for a guided plucking-to-packaging tea tasting tour.',
      'Wake up early to catch sunrise at Kolukkumalai (accessible by 4x4 Jeep), the highest organic tea estate in the world.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://www.keralatourism.org/destination/munnar/202',
    idealTripDuration: '2 to 3 Days',
    unescoSite: false
  },

  // 20. Meenakshi Amman Temple - SPIRITUAL & HERITAGE
  {
    id: 'meenakshi-amman-temple',
    name: 'Meenakshi Amman Temple, Madurai',
    hindiName: 'मीनाक्षी अम्मन मंदिर, मदुरै',
    state: 'Tamil Nadu',
    city: 'Madurai',
    zone: 'South',
    category: 'Religious & Spiritual',
    description: 'A historic Hindu temple complex located on the southern bank of the Vaigai River in Madurai, Tamil Nadu. Dedicated to Meenakshi (a form of Parvati) and her consort Sundareswarar (Shiva), the complex boasts 14 magnificent gopuram towers sculpted with thousands of multicolored stucco gods, demons, and celestial beings.',
    historicalSignificance: 'Mentioned in Tamil Sangam literature dating back to the 6th century BCE, rebuilt and expanded by the Nayak rulers in the 16th and 17th centuries. Famous for the Hall of Thousand Pillars, each intricately carved from solid granite.',
    bestTimeToVisit: {
      season: 'Winter & Autumn',
      months: 'October to March',
      weatherDesc: 'Pleasant temperatures (20°C to 30°C). April-May features the legendary 10-day Chithirai Festival with over a million pilgrims.',
      peakMonths: ['November', 'December', 'January', 'February']
    },
    timings: '5:00 AM – 12:30 PM & 4:00 PM – 10:00 PM',
    entryFee: {
      domestic: 'Free entry; Special Darshan ticket ₹50-₹100',
      foreign: 'Free entry; Hall of Thousand Pillars museum ₹50',
      notes: 'Strict dress code: traditional Indian attire (dhoti/pant for men, saree/churidar for women; shorts prohibited).'
    },
    location: {
      mapUrl: 'https://maps.google.com/?q=Meenakshi+Amman+Temple,+Madurai',
      lat: 9.9195,
      lng: 78.1193,
      address: 'Madurai Main, Madurai, Tamil Nadu 625001'
    },
    images: [
      'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600100397608-f010e42e12cb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=1200&q=80'
    ],
    nearbyAttractions: [
      { name: 'Thirumalai Nayakkar Palace', distance: '1.5 km', type: 'Indo-Saracenic Palace & Light Show' },
      { name: 'Gandhi Memorial Museum', distance: '4 km', type: 'Historic Freedom Struggle Museum' },
      { name: 'Alagar Kovil', distance: '21 km', type: 'Vishnu Temple in Alagar Hills' }
    ],
    howToReach: {
      airport: 'Madurai International Airport (IXM) - 12 km from temple',
      railway: 'Madurai Junction (MDU) - 1.5 km away with direct trains to Chennai, Bengaluru, Delhi',
      road: 'NH 44 and NH 38 link smoothly across Tamil Nadu and southern states'
    },
    localCuisine: ['Madurai Kari Dosa', 'Jigarthanda cold beverage', 'Idli with varieties of Chutney', 'Paruthi Paal'],
    highlights: ['14 Sculpted Multicolored Gopurams', 'Hall of Thousand Pillars', 'Night Palanquin Ceremony (Palli Arai)'],
    tips: [
      'Mobile phones and cameras are prohibited inside the sanctum area; deposit them safely at temple locker stalls.',
      'Attend the evening Palli Arai ceremony around 9:00 PM when the icon of Lord Sundareswarar is carried to the chamber of Meenakshi accompanied by chanting and drums.',
      'Cool off with the famous Madurai beverage "Famous Jigarthanda" sold right outside the East Gate.'
    ],
    isOffbeat: false,
    verified: true,
    officialWebsite: 'https://maduraimeenakshi.hrce.tn.gov.in',
    idealTripDuration: '1 to 2 Days',
    unescoSite: false
  }
];
