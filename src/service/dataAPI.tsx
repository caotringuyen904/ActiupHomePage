interface EventCategory {
  cat_name: string;
  event_category_id: string;
}

const sportCategories: EventCategory[] = [
  { cat_name: "Tat ca", event_category_id: "" },
  { cat_name: "Road Running", event_category_id: "5da59c821c04e45fe44a4477" },
  { cat_name: "Trail Running", event_category_id: "5dac1a27d274a435fe01e8c9" },
  { cat_name: "Mountain Bike", event_category_id: "5ee8f246bb48884ae15b9e65" },
  { cat_name: "Duathlon", event_category_id: "613598c014f91c60294fc5f4" },
  { cat_name: "Aqualon", event_category_id: "6207c5b54063d32ce5486585" },
];

const attractionCategories: EventCategory[] = [
  { cat_name: "Tat ca", event_category_id: "" },
  { cat_name: "Khach san", event_category_id: "6229ad616109b976416657f5" },
  {
    cat_name: "Vui choi & Giai tri",
    event_category_id: "63f825585ee075d8d2056853",
  },
  {
    cat_name: "Su kien am nhac",
    event_category_id: "6424499fcbd5a65483023d62",
  },
  { cat_name: "Anh chay bo", event_category_id: "6406da0d79fd58cb280d5502" },
];

export { sportCategories, attractionCategories };
