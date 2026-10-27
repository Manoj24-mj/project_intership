export interface StateTourismStat {
  sNo: number;
  stateUT: string;
  domestic2017: number;
  foreign2017: number;
  domestic2018: number;
  foreign2018: number;
  growthDomestic: number;
  growthForeign: number;
}

export interface ForeignTourismDemo {
  region: string;
  country: string;
  arrivals: number;
  age0_14: number;
  age15_24: number;
  age25_34: number;
  age35_44: number;
  age45_54: number;
  age55_64: number;
  age65Plus: number;
}

export const STATE_TOURISM_STATS: StateTourismStat[] = [
  { sNo: 1, stateUT: 'Andaman & Nicobar Island', domestic2017: 471919, foreign2017: 15313, domestic2018: 498279, foreign2018: 15242, growthDomestic: 5.59, growthForeign: -0.46 },
  { sNo: 2, stateUT: 'Andhra Pradesh', domestic2017: 165433898, foreign2017: 271362, domestic2018: 194767874, foreign2018: 281083, growthDomestic: 17.73, growthForeign: 3.58 },
  { sNo: 3, stateUT: 'Arunachal Pradesh', domestic2017: 444005, foreign2017: 7147, domestic2018: 512436, foreign2018: 7653, growthDomestic: 15.41, growthForeign: 7.08 },
  { sNo: 4, stateUT: 'Assam', domestic2017: 6052667, foreign2017: 21760, domestic2018: 5856282, foreign2018: 36846, growthDomestic: -3.24, growthForeign: 69.33 },
  { sNo: 5, stateUT: 'Bihar', domestic2017: 32414063, foreign2017: 1082705, domestic2018: 33621613, foreign2018: 1087971, growthDomestic: 3.73, growthForeign: 0.49 },
  { sNo: 6, stateUT: 'Chandigarh', domestic2017: 1425781, foreign2017: 31832, domestic2018: 1538796, foreign2018: 39681, growthDomestic: 7.93, growthForeign: 24.66 },
  { sNo: 7, stateUT: 'Chhattisgarh', domestic2017: 17350030, foreign2017: 6701, domestic2018: 19329501, foreign2018: 14399, growthDomestic: 11.41, growthForeign: 114.88 },
  { sNo: 8, stateUT: 'Dadra & Nagar Haveli', domestic2017: 614182, foreign2017: 1908, domestic2018: 609435, foreign2018: 1608, growthDomestic: -0.77, growthForeign: -15.72 },
  { sNo: 9, stateUT: 'Daman & Diu', domestic2017: 858131, foreign2017: 5535, domestic2018: 898824, foreign2018: 5694, growthDomestic: 4.74, growthForeign: 2.87 },
  { sNo: 10, stateUT: 'Delhi', domestic2017: 29114423, foreign2017: 2740502, domestic2018: 29114423, foreign2018: 2740502, growthDomestic: 0, growthForeign: 0 },
  { sNo: 11, stateUT: 'Goa', domestic2017: 6895234, foreign2017: 842220, domestic2018: 7081559, foreign2018: 933841, growthDomestic: 2.7, growthForeign: 10.88 },
  { sNo: 12, stateUT: 'Gujarat', domestic2017: 48343121, foreign2017: 448853, domestic2018: 54369873, foreign2018: 513113, growthDomestic: 12.47, growthForeign: 14.32 },
  { sNo: 13, stateUT: 'Haryana', domestic2017: 6050325, foreign2017: 193381, domestic2018: 4888952, foreign2018: 73977, growthDomestic: -19.2, growthForeign: -61.75 },
  { sNo: 14, stateUT: 'Himachal Pradesh', domestic2017: 19130541, foreign2017: 470992, domestic2018: 16093935, foreign2018: 356568, growthDomestic: -15.87, growthForeign: -24.29 },
  { sNo: 15, stateUT: 'Jharkhand', domestic2017: 33723185, foreign2017: 170987, domestic2018: 35408822, foreign2018: 175801, growthDomestic: 5, growthForeign: 2.82 },
  { sNo: 16, stateUT: 'Jammu & Kashmir', domestic2017: 14235473, foreign2017: 79765, domestic2018: 17076315, foreign2018: 139520, growthDomestic: 19.96, growthForeign: 74.91 },
  { sNo: 17, stateUT: 'Karnataka', domestic2017: 179980191, foreign2017: 498148, domestic2018: 214306456, foreign2018: 543716, growthDomestic: 19.07, growthForeign: 9.15 },
  { sNo: 18, stateUT: 'Kerala', domestic2017: 14673520, foreign2017: 1091870, domestic2018: 15604661, foreign2018: 1096407, growthDomestic: 6.35, growthForeign: 0.42 },
  { sNo: 19, stateUT: 'Lakshadweep', domestic2017: 6620, foreign2017: 1027, domestic2018: 10435, foreign2018: 1313, growthDomestic: 57.63, growthForeign: 27.85 },
  { sNo: 20, stateUT: 'Madhya Pradesh', domestic2017: 78038522, foreign2017: 359119, domestic2018: 83969799, foreign2018: 375476, growthDomestic: 7.6, growthForeign: 4.55 },
  { sNo: 21, stateUT: 'Maharashtra', domestic2017: 119191539, foreign2017: 5078514, domestic2018: 119191539, foreign2018: 5078514, growthDomestic: 0, growthForeign: 0 },
  { sNo: 22, stateUT: 'Manipur', domestic2017: 153454, foreign2017: 3497, domestic2018: 176109, foreign2018: 6391, growthDomestic: 14.76, growthForeign: 82.76 },
  { sNo: 23, stateUT: 'Meghalaya', domestic2017: 990856, foreign2017: 12051, domestic2018: 1198340, foreign2018: 18114, growthDomestic: 20.94, growthForeign: 50.31 },
  { sNo: 24, stateUT: 'Mizoram', domestic2017: 67772, foreign2017: 1155, domestic2018: 76551, foreign2018: 967, growthDomestic: 12.95, growthForeign: -16.28 },
  { sNo: 25, stateUT: 'Nagaland', domestic2017: 63362, foreign2017: 4166, domestic2018: 101588, foreign2018: 5010, growthDomestic: 60.33, growthForeign: 20.26 },
  { sNo: 26, stateUT: 'Odisha', domestic2017: 14011229, foreign2017: 100014, domestic2018: 15208540, foreign2018: 110818, growthDomestic: 8.55, growthForeign: 10.8 },
  { sNo: 27, stateUT: 'Puducherry', domestic2017: 1531972, foreign2017: 131407, domestic2018: 1616660, foreign2018: 141133, growthDomestic: 5.53, growthForeign: 7.4 },
  { sNo: 28, stateUT: 'Punjab', domestic2017: 40293352, foreign2017: 1108635, domestic2018: 44595061, foreign2018: 1200969, growthDomestic: 10.68, growthForeign: 8.33 },
  { sNo: 29, stateUT: 'Rajasthan', domestic2017: 45916573, foreign2017: 1609963, domestic2018: 50235643, foreign2018: 1754348, growthDomestic: 9.41, growthForeign: 8.97 },
  { sNo: 30, stateUT: 'Sikkim', domestic2017: 1375854, foreign2017: 49111, domestic2018: 1426127, foreign2018: 71172, growthDomestic: 3.65, growthForeign: 44.92 },
  { sNo: 31, stateUT: 'Tamil Nadu', domestic2017: 345061140, foreign2017: 4860455, domestic2018: 385909376, foreign2018: 6074345, growthDomestic: 11.84, growthForeign: 24.97 },
  { sNo: 32, stateUT: 'Telangana', domestic2017: 85266596, foreign2017: 251846, domestic2018: 92878329, foreign2018: 318154, growthDomestic: 8.93, growthForeign: 26.33 },
  { sNo: 33, stateUT: 'Tripura', domestic2017: 398669, foreign2017: 69899, domestic2018: 414388, foreign2018: 102861, growthDomestic: 3.94, growthForeign: 47.16 },
  { sNo: 34, stateUT: 'Uttar Pradesh', domestic2017: 233977619, foreign2017: 3556204, domestic2018: 285079848, foreign2018: 3780752, growthDomestic: 21.84, growthForeign: 6.31 },
  { sNo: 35, stateUT: 'Uttarakhand', domestic2017: 34359989, foreign2017: 133725, domestic2018: 35609650, foreign2018: 151320, growthDomestic: 3.64, growthForeign: 13.16 },
  { sNo: 36, stateUT: 'West Bengal', domestic2017: 79630345, foreign2017: 1574915, domestic2018: 85657365, foreign2018: 1617105, growthDomestic: 7.57, growthForeign: 2.68 }
];

export const FOREIGN_DEMO_STATS: ForeignTourismDemo[] = [
  { region: 'North America', country: 'Canada', arrivals: 335439, age0_14: 14.9, age15_24: 6.7, age25_34: 11.5, age35_44: 16.8, age45_54: 19.2, age55_64: 15.6, age65Plus: 15.3 },
  { region: 'North America', country: 'U.S.A', arrivals: 1376919, age0_14: 19.7, age15_24: 7.1, age25_34: 10, age35_44: 16.1, age45_54: 21, age55_64: 14.6, age65Plus: 11.5 },
  { region: 'Western Europe', country: 'France', arrivals: 249620, age0_14: 5.9, age15_24: 8.2, age25_34: 15.7, age35_44: 18, age45_54: 21.2, age55_64: 17.8, age65Plus: 13.1 },
  { region: 'Western Europe', country: 'Germany', arrivals: 269380, age0_14: 4.4, age15_24: 7.5, age25_34: 17.3, age35_44: 18.2, age45_54: 26.1, age55_64: 17.2, age65Plus: 9.3 },
  { region: 'Western Europe', country: 'U.K.', arrivals: 986296, age0_14: 11.7, age15_24: 6.1, age25_34: 12.1, age35_44: 19.4, age45_54: 20, age55_64: 17.3, age65Plus: 13.5 },
  { region: 'Eastern Europe', country: 'Russian Fed.', arrivals: 278904, age0_14: 6.3, age15_24: 7, age25_34: 33.2, age35_44: 22.4, age45_54: 17.7, age55_64: 10.8, age65Plus: 2.7 },
  { region: 'South Asia', country: 'Bangladesh', arrivals: 2156557, age0_14: 7.1, age15_24: 9.5, age25_34: 21.7, age35_44: 25.6, age45_54: 20.2, age55_64: 11.3, age65Plus: 4.6 },
  { region: 'South Asia', country: 'Sri Lanka', arrivals: 303590, age0_14: 5.1, age15_24: 7.8, age25_34: 14.4, age35_44: 17.7, age45_54: 20.1, age55_64: 21, age65Plus: 13.9 },
  { region: 'South East Asia', country: 'Malaysia', arrivals: 322126, age0_14: 8, age15_24: 11, age25_34: 19.9, age35_44: 19.9, age45_54: 18.8, age55_64: 15.6, age65Plus: 6.8 },
  { region: 'East Asia', country: 'China', arrivals: 247235, age0_14: 1.4, age15_24: 7.2, age25_34: 40.2, age35_44: 26.9, age45_54: 15.3, age55_64: 6.1, age65Plus: 3 },
  { region: 'East Asia', country: 'Japan', arrivals: 222527, age0_14: 3.4, age15_24: 5.8, age25_34: 18, age35_44: 23.7, age45_54: 26.7, age55_64: 14.7, age65Plus: 7.6 },
  { region: 'Australasia', country: 'Australia', arrivals: 324243, age0_14: 20, age15_24: 6.7, age25_34: 17.3, age35_44: 22.4, age45_54: 15.5, age55_64: 11.1, age65Plus: 7 }
];
