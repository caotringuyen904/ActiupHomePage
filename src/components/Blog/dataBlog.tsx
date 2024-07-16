interface BlogCategory {
    id: string;
    cat_name: string;
    img_url: string;
    description: string;
    title: string;
    date: string;
  }
  
  const blogCategories: BlogCategory[] = [
    {
      id: '',
      cat_name: 'Tat ca',
      img_url: 'path/to/img_tat_ca.jpg',
      description: 'All categories',
      title: 'Tat ca',
      date: '2024-07-11'
    },
    {
      id: '5da59c821c04e45fe44a4477',
      cat_name: 'Road Running',
      img_url: 'path/to/img_road_running.jpg',
      description: 'All about road running events and news',
      title: 'Road Running',
      date: '2024-07-11'
    },
    {
      id: '5dac1a27d274a435fe01e8c9',
      cat_name: 'Trail Running',
      img_url: 'path/to/img_trail_running.jpg',
      description: 'Discover trail running events and stories',
      title: 'Trail Running',
      date: '2024-07-11'
    },
    {
      id: '5ee8f246bb48884ae15b9e65',
      cat_name: 'Mountain Bike',
      img_url: 'path/to/img_mountain_bike.jpg',
      description: 'Explore mountain bike events and news',
      title: 'Mountain Bike',
      date: '2024-07-11'
    },
    {
      id: '60111ad5b6a9a779af274aa4',
      cat_name: 'Marathon',
      img_url: 'path/to/img_marathon.jpg',
      description: 'Latest marathon events and updates',
      title: 'Marathon',
      date: '2024-07-11'
    },
    {
      id: '612edeef05acae4d252ae664',
      cat_name: 'Triathlon',
      img_url: 'path/to/img_triathlon.jpg',
      description: 'All about triathlon events and stories',
      title: 'Triathlon',
      date: '2024-07-11'
    },
    {
      id: '613598c014f91c60294fc5f4',
      cat_name: 'Duathlon',
      img_url: 'path/to/img_duathlon.jpg',
      description: 'Discover duathlon events and news',
      title: 'Duathlon',
      date: '2024-07-11'
    },
    {
      id: '6207c5b54063d32ce5486585',
      cat_name: 'Aqualon',
      img_url: 'path/to/img_aqualon.jpg',
      description: 'Latest aqualon events and updates',
      title: 'Aqualon',
      date: '2024-07-11'
    },
    {
      id: '62350dafb994366a1e296776',
      cat_name: 'Half Marathon',
      img_url: 'path/to/img_half_marathon.jpg',
      description: 'Explore half marathon events and news',
      title: 'Half Marathon',
      date: '2024-07-11'
    },
    {
      id: '63843b2833da5a295c0d9e1a',
      cat_name: 'Swim',
      img_url: 'path/to/img_swim.jpg',
      description: 'Discover swimming events and updates',
      title: 'Swim',
      date: '2024-07-11'
    }
  ];
  
  export { blogCategories };
  