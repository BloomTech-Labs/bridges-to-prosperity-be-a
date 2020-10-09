exports.seed = function (knex) {
  const images = [
    {
      id: 6,
      project_code: '1017673',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49773245558/in/dateposted-public/',
    },
    {
      id: 7,
      project_code: '1009311',
      bridge_image:
        'https://live.staticflickr.com/7847/47544897212_0f50cfc0c9_z.jpg',
    },
    {
      id: 8,
      project_code: '1009445',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49651799606/in/photolist-2iDyshQ-2iDysbs-2iDvGvT-2iDvGu5-2iDysd6-2iDzRnm-2iDzRoZ-2iDysav-2iDzRnX-2iDzRn6-2iDzRqN/',
    },
    {
      id: 9,
      project_code: '1012501',
      bridge_image:
        'https://live.staticflickr.com/65535/48118493867_68bd5c7fbd_b.jpg',
    },
    {
      id: 10,
      project_code: '1013662',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49730954338/in/album-72157711084080652/',
    },
    {
      id: 11,
      project_code: '1013218',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49730589158/in/album-72157712652736878/',
    },
    {
      id: 12,
      project_code: '1013351',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50045244336/in/dateposted-public/',
    },
    {
      id: 13,
      project_code: '1012480',
      bridge_image:
        'https://live.staticflickr.com/65535/48496133332_631ed2421a_b.jpg',
    },
    {
      id: 14,
      project_code: '1012813',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49729676293/in/album-72157711719811293/',
    },
    {
      id: 15,
      project_code: '1007901',
      bridge_image:
        'https://farm1.staticflickr.com/863/26503494637_f27b0c97d4_k.jpg',
    },
    {
      id: 16,
      project_code: '1012817',
      bridge_image: 'https://flic.kr/p/2iLrXFd',
    },
    {
      id: 17,
      project_code: '1014056',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50168170702/in/dateposted-public/',
    },
    {
      id: 18,
      project_code: '1007325',
      bridge_image:
        'https://farm5.staticflickr.com/4829/44946210045_874f324731_k.jpg',
    },
    {
      id: 19,
      project_code: '1007374',
      bridge_image:
        'https://live.staticflickr.com/65535/48105851421_811fdd72bb_k.jpg',
    },
    {
      id: 20,
      project_code: '1007466',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49717267657/in/album-72157712369263133/',
    },
    {
      id: 21,
      project_code: '1007481',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50144510338/in/album-72157715087907948/',
    },
    {
      id: 22,
      project_code: '1007506',
      bridge_image:
        'https://farm8.staticflickr.com/7809/47083892931_95b1476afb_h.jpg',
    },
    {
      id: 23,
      project_code: '1007507',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/albums/72157715088179852/with/50145085686/',
    },
    {
      id: 24,
      project_code: '1012953',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49730236613/in/photolist-2iLxcRc-2iLBEAL-2iLusLD/',
    },
    {
      id: 25,
      project_code: '1012986',
      bridge_image:
        'https://live.staticflickr.com/65535/49391791211_e4ed01c87e_4k.jpg',
    },
    {
      id: 26,
      project_code: 'RW126',
      bridge_image:
        'https://farm5.staticflickr.com/4616/26805478278_e7693fbad9_k.jpg',
    },
    {
      id: 27,
      project_code: '1013457',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49951621687/in/album-72157712686144892/',
    },
    {
      id: 28,
      project_code: '1013541',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49651317298/in/photolist-2iDvYNN-2iDvYNx-2iDA8E1-2iDvYMq-2iDyJuu-2iDyJw8-2izhmJ6-2iziFLi-2izhmGY-2izeMR3/',
    },
    {
      id: 29,
      project_code: '1013658',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50041259127/in/album-72157711717160441',
    },
    {
      id: 30,
      project_code: '1007530',
      bridge_image:
        'https://farm5.staticflickr.com/4910/46352785842_4eec4e5825_b.jpg',
    },
    {
      id: 31,
      project_code: '1007535',
      bridge_image:
        'https://live.staticflickr.com/7880/33711868428_006bcb4a36_k.jpg',
    },
    {
      id: 32,
      project_code: '1007539',
      bridge_image:
        'https://live.staticflickr.com/65535/47964259988_c211e91229_h.jpg',
    },
    {
      id: 33,
      project_code: '1007544',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49652031197/in/photolist-2iDzD2E-2iDyexb-2iDyez5-2iDyewE-2iDzD2p-2itva3H/',
    },
    {
      id: 34,
      project_code: '1007525',
      bridge_image:
        'https://farm2.staticflickr.com/1902/30471057067_697cc3d94d_b.jpg',
    },
    {
      id: 35,
      project_code: '1007563',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50036962601/in/dateposted-public/',
    },
    {
      id: 36,
      project_code: '1013652',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49971656092/in/photolist-2j8PNmL-2j8PNo9-2j8PNns-2j8KNP3-2j8KNN6',
    },
    {
      id: 37,
      project_code: '1013641',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/albums/72157712689610103/page1/',
    },
    {
      id: 38,
      project_code: '1014069',
      bridge_image:
        'https://live.staticflickr.com/65535/50168196522_aa5a0d6a03_b.jpg',
    },
    {
      id: 39,
      project_code: '1007569',
      bridge_image:
        'https://farm2.staticflickr.com/1765/42914757041_9f77508c17_k.jpg',
    },
    {
      id: 40,
      project_code: '1007572',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/50045592407/in/dateposted-public/',
    },
    {
      id: 41,
      project_code: '1007580',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49970965908/in/album-72157712687924773/',
    },
    {
      id: 42,
      project_code: '1007590',
      bridge_image:
        'https://www.flickr.com/photos/bridgestoprosperity/49730547332/in/dateposted-public/',
    },
    {
      id: 43,
      project_code: '1009064',
      bridge_image:
        'https://farm2.staticflickr.com/1822/41623524530_ed1a4df0ad_k.jpg',
    },
    {
      id: 44,
      project_code: '1009067',
      bridge_image:
        'https://farm2.staticflickr.com/1816/43715978632_e7cb642a58_k.jpg',
    },
    {
      id: 45,
      project_code: '1009068',
      bridge_image:
        'https://farm5.staticflickr.com/4894/46352896712_52645ebbf1_b.jpg',
    },
    {
      id: 46,
      project_code: '1007609',
      bridge_image:
        'https://live.staticflickr.com/65535/48316927322_8abc4603e8_b.jpg',
    },
    {
      id: 47,
      project_code: 'RW127',
      bridge_image:
        'https://farm5.staticflickr.com/4619/25759469477_18db92f436_b.jpg',
    },
    {
      id: 48,
      project_code: 'RW120',
      bridge_image:
        'https://farm5.staticflickr.com/4403/36360119330_82f31cfd40_b.jpg',
    },
    {
      id: 49,
      project_code: 'RW119',
      bridge_image:
        'https://c1.staticflickr.com/5/4209/35347395971_e872865b59_k.jpg',
    },
    {
      id: 50,
      project_code: 'RW124',
      bridge_image:
        'https://farm5.staticflickr.com/4195/34945537865_fbec666999_b.jpg',
    },
    {
      id: 51,
      project_code: 'RW118',
      bridge_image:
        'https://farm5.staticflickr.com/4351/36217359632_744699633a_b.jpg',
    },
    {
      id: 52,
      project_code: 'RW123',
      bridge_image:
        'https://farm5.staticflickr.com/4351/36104826514_5a6075c901_k.jpg',
    },
    {
      id: 53,
      project_code: '1007322',
      bridge_image:
        'https://farm2.staticflickr.com/1963/45411348581_1d6b0e04b8_k.jpg',
    },
    {
      id: 54,
      project_code: 'RW125',
      bridge_image:
        'https://farm5.staticflickr.com/4577/27133593539_1e260d6642_k.jpg',
    },
    {
      id: 55,
      project_code: 'RW901',
      bridge_image:
        'https://c1.staticflickr.com/4/3904/14602769837_4a43e2b658_z.jpg',
    },
    {
      id: 56,
      project_code: 'RW902',
      bridge_image:
        'https://farm9.staticflickr.com/8288/7874332306_a975d76067_b.jpg',
    },
    {
      id: 57,
      project_code: 'RW903',
      bridge_image:
        'https://farm9.staticflickr.com/8023/7611051254_e015d6db23_b.jpg',
    },
    {
      id: 58,
      project_code: '1002618',
      bridge_image:
        'https://farm9.staticflickr.com/8250/8631882910_7f27db7609_b.jpg',
    },
    {
      id: 59,
      project_code: '1002619',
      bridge_image:
        'https://farm8.staticflickr.com/7409/12999445144_3fc219163e_b.jpg',
    },
    {
      id: 60,
      project_code: '1002620',
      bridge_image:
        'https://farm4.staticflickr.com/3686/9209247992_21e811143b_b.jpg',
    },
    {
      id: 61,
      project_code: '1002621',
      bridge_image:
        'https://farm8.staticflickr.com/7349/9417705520_1c7491b4c0_b.jpg',
    },
    {
      id: 62,
      project_code: '1002622',
      bridge_image:
        'https://farm2.staticflickr.com/1666/25079186712_b232369f71_b.jpg',
    },
    {
      id: 63,
      project_code: 'RW103',
      bridge_image:
        'https://farm8.staticflickr.com/7487/15785514465_2a7b2abdac_b.jpg',
    },
    {
      id: 64,
      project_code: 'RW101',
      bridge_image:
        'https://farm6.staticflickr.com/5556/15142419140_a2a9fb53a7_b.jpg',
    },
    {
      id: 65,
      project_code: 'RW102',
      bridge_image:
        'https://farm9.staticflickr.com/8642/15304325953_5ae4886389_b.jpg',
    },
    {
      id: 66,
      project_code: 'RW107',
      bridge_image:
        'https://farm1.staticflickr.com/545/19241811276_d2ec2b4b2a_b.jpg',
    },
    {
      id: 67,
      project_code: 'RW106',
      bridge_image:
        'https://farm8.staticflickr.com/7286/16747881349_e448792397_z.jpg',
    },
    {
      id: 68,
      project_code: 'RW104',
      bridge_image:
        'https://farm1.staticflickr.com/490/20110276622_caef85622d_b.jpg',
    },
    {
      id: 69,
      project_code: 'RW105',
      bridge_image:
        'https://farm1.staticflickr.com/376/20100672878_925d6405e0_b.jpg',
    },
    {
      id: 70,
      project_code: 'RW112',
      bridge_image:
        'https://c1.staticflickr.com/2/1660/26167028365_584e33f163_k.jpg',
    },
    {
      id: 71,
      project_code: 'RW111',
      bridge_image:
        'https://c1.staticflickr.com/6/5274/29832538850_80ca78c1e2_k.jpg',
    },
    {
      id: 72,
      project_code: 'RW109',
      bridge_image:
        'https://c1.staticflickr.com/1/689/23158149104_3d6f000d42_b.jpg',
    },
    {
      id: 73,
      project_code: 'RW108',
      bridge_image:
        'https://c1.staticflickr.com/1/778/22473973213_60dcef8ef5_k.jpg',
    },
    {
      id: 74,
      project_code: 'RW110',
      bridge_image:
        'https://c1.staticflickr.com/8/7264/26921073535_f2b49503cc_k.jpg',
    },
    {
      id: 75,
      project_code: 'RW116',
      bridge_image:
        'https://c1.staticflickr.com/9/8029/29725082235_3714a9a2d3_k.jpg',
    },
    {
      id: 76,
      project_code: 'RW114',
      bridge_image:
        'https://c1.staticflickr.com/9/8870/29324032886_912123e732_k.jpg',
    },
    {
      id: 77,
      project_code: 'RW113',
      bridge_image:
        'https://c1.staticflickr.com/9/8812/28105549930_40483cd8fb_k.jpg',
    },
    {
      id: 78,
      project_code: 'RW115',
      bridge_image:
        'https://farm5.staticflickr.com/4161/35577569916_622ac84761_b.jpg',
    },
    {
      id: 79,
      project_code: 'RW117',
      bridge_image:
        'https://farm6.staticflickr.com/5482/31253490741_aec89abf8c_b.jpg',
    },
    {
      id: 80,
      project_code: 'RW122',
      bridge_image:
        'https://farm1.staticflickr.com/675/32362868963_76aa579ed1_b.jpg',
    },
    {
      id: 81,
      project_code: 'RW121',
      bridge_image:
        'https://c1.staticflickr.com/5/4202/34962212815_0a37d9432c_k.jpg',
    },
    {
      id: 82,
      project_code: '1012457',
      bridge_image:
        'https://farm8.staticflickr.com/7842/46473935275_b08663245a_b.jpg',
    },
    {
      id: 83,
      project_code: '1011309',
      bridge_image:
        'https://live.staticflickr.com/65535/48474785987_4975fa0fb3_b.jpg',
    },
  ];
  return knex('bridges').insert(images);
};
