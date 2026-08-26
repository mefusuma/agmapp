const SERVICE_AUTOMATION_DATA = {
  "schedules": {
    "50": [
      "first_50h",
      "layn_check_alignment"
    ],
    "100": [
      "periodic"
    ],
    "250": [
      "periodic",
      "valve_clearance",
      "injector_test"
    ],
    "500": [
      "periodic",
      "cooler_cleaning",
      "seawater_pump_overhaul",
      "injector_test",
      "valve_clearance"
    ],
    "1000": [
      "periodic",
      "cooler_cleaning",
      "seawater_pump_overhaul",
      "injector_test",
      "valve_clearance",
      "layn_check_alignment",
      "diagnostic"
    ]
  },
  "engineParts": {
    "D1-13": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 5,
          "price": 0
        }
      ],
      "interval_1000": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Cooler Gasket Set",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 5,
          "price": 0
        }
      ],
      "interval_250": [
        {
          "partNumber": "",
          "description": "",
          "quantity": 1,
          "price": 0
        }
      ]
    },
    "D1-20": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 5,
          "price": 0
        }
      ]
    },
    "D1-30": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3.5,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3.5,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 6,
          "price": 0
        }
      ]
    },
    "D2-40": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 0
        }
      ]
    },
    "D2-50": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 0
        },
        {
          "partNumber": "Sarf Malzeme",
          "description": "Sarf Malzeme",
          "quantity": 1,
          "price": 100
        }
      ]
    },
    "D2-55": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 0
        }
      ]
    },
    "D2-60": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 0
        }
      ]
    },
    "D2-75": {
      "interval_50": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        }
      ],
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 7.4,
          "price": 12
        },
        {
          "partNumber": "3840525",
          "description": "Yağ Filtresi (Oil Filter)",
          "quantity": 1,
          "price": 27.29
        },
        {
          "partNumber": "861477",
          "description": "Yakıt Filtresi (Fuel Filter)",
          "quantity": 1,
          "price": 38.7
        },
        {
          "partNumber": "3809924",
          "description": "Hava Filtresi (Air Filter)",
          "quantity": 1,
          "price": 88.6
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 0
        }
      ]
    },
    "D3-110": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi (Air Cleaner)",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi (Air Cleaner)",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "30731809",
          "description": "Drive Belt",
          "quantity": 1,
          "price": 82
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-130": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-150": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-170": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-190": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-200": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D3-220": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi (Air Cleaner)",
          "quantity": 1,
          "price": 150
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13,
          "price": 12
        },
        {
          "partNumber": "30788490",
          "description": "Yağ Filtresi Kit",
          "quantity": 1,
          "price": 29.8
        },
        {
          "partNumber": "21139810",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 54.5
        },
        {
          "partNumber": "21379288",
          "description": "Hava Filtresi (Air Cleaner)",
          "quantity": 1,
          "price": 150
        },
        {
          "partNumber": "30731809",
          "description": "Drive Belt",
          "quantity": 1,
          "price": 82
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 16,
          "price": 0
        }
      ]
    },
    "D4-225": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 20,
          "price": 0
        }
      ]
    },
    "D4-260": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 20,
          "price": 0
        }
      ]
    },
    "D4-300": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 20,
          "price": 0
        }
      ]
    },
    "D4-320": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 13.5,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 20,
          "price": 0
        }
      ]
    },
    "D6-330": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D6-350": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D6-370": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "22030852",
          "description": "By-pass Yağ Filtresi",
          "quantity": 1,
          "price": 46.3
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D6-400": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D6-435": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D6-440": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 30,
          "price": 12
        },
        {
          "partNumber": "22030848",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 47.1
        },
        {
          "partNumber": "24215091",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 70.3
        },
        {
          "partNumber": "21702999",
          "description": "Hava Filtresi Insert",
          "quantity": 1,
          "price": 73.1
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Crankcase Breather Filter",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 0
        }
      ]
    },
    "D8-550": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 55,
          "price": 0
        }
      ]
    },
    "D8-600": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 55,
          "price": 0
        }
      ]
    },
    "D8-700": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 38,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 55,
          "price": 0
        }
      ]
    },
    "D11-670": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 42,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 42,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 65,
          "price": 0
        }
      ]
    },
    "D11-725": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 42,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 42,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 65,
          "price": 0
        }
      ]
    },
    "D13-800": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 80,
          "price": 0
        }
      ]
    },
    "D13-900": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 80,
          "price": 0
        }
      ]
    },
    "D13-1000": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        }
      ],
      "interval_500": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 52,
          "price": 12
        },
        {
          "partNumber": "VERIFY",
          "description": "Major Filter Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VERIFY",
          "description": "Impeller Kit",
          "quantity": 1,
          "price": 0
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 80,
          "price": 0
        }
      ]
    },
    "1GM10": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 2.4,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 4,
          "price": 8
        }
      ]
    },
    "2YM15": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3.1,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 5,
          "price": 8
        }
      ]
    },
    "3YM20": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3.4,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 6,
          "price": 8
        }
      ]
    },
    "3YM30AE": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 3.4,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 6,
          "price": 8
        }
      ]
    },
    "3JH40": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 5.5,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 7,
          "price": 8
        }
      ]
    },
    "4JH3E": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 6.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 8
        }
      ]
    },
    "4JH4E": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 6.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 8
        }
      ]
    },
    "4JH45": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 6.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 8
        }
      ]
    },
    "4JH57": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 6.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 10,
          "price": 8
        }
      ]
    },
    "4JH80": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 8.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 14,
          "price": 8
        }
      ]
    },
    "4JH110": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 8.7,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 14,
          "price": 8
        }
      ]
    },
    "4LH-DTE": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 11,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 14,
          "price": 8
        }
      ]
    },
    "4LH-STE": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 11,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 14,
          "price": 8
        }
      ]
    },
    "4LH-HTE": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 11,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 14,
          "price": 8
        }
      ]
    },
    "6LY260": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 22,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 30,
          "price": 8
        }
      ]
    },
    "6LY330": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 22,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 30,
          "price": 8
        }
      ]
    },
    "6LY400": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 22,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 30,
          "price": 8
        }
      ]
    },
    "6LY440": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 22,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 30,
          "price": 8
        }
      ]
    },
    "6CX-GT": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 28,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 8
        }
      ]
    },
    "6CX-GTE": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 28,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 38,
          "price": 8
        }
      ]
    },
    "8LV-320": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 32,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 40,
          "price": 8
        }
      ]
    },
    "8LV-350": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 32,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 40,
          "price": 8
        }
      ]
    },
    "6BY220": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 18,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 26,
          "price": 8
        }
      ]
    },
    "6BY260": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 18,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 26,
          "price": 8
        }
      ]
    },
    "8LV370": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 24,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 40,
          "price": 8
        }
      ]
    },
    "4LV150": {
      "interval_100": [
        {
          "partNumber": "15W-40",
          "description": "Motor Yağı (15W-40)",
          "quantity": 15,
          "price": 12
        },
        {
          "partNumber": "YANMAR-OIL",
          "description": "Yağ Filtresi",
          "quantity": 1,
          "price": 25
        },
        {
          "partNumber": "YANMAR-FUEL",
          "description": "Yakıt Filtresi",
          "quantity": 1,
          "price": 20
        },
        {
          "partNumber": "YANMAR-IMP",
          "description": "Impeller",
          "quantity": 1,
          "price": 55
        },
        {
          "partNumber": "VCS-2",
          "description": "Coolant (Yellow)",
          "quantity": 20,
          "price": 8
        }
      ]
    }
  },
  "engineLabor": {
    "D1-13": {
      "interval_50": 2.5,
      "interval_100": 3,
      "interval_500": 6,
      "interval_1000": 12
    },
    "D1-20": {
      "interval_50": 2.5,
      "interval_100": 3,
      "interval_500": 6
    },
    "D1-30": {
      "interval_50": 2.5,
      "interval_100": 3
    },
    "D2-40": {
      "interval_50": 2.5,
      "interval_100": 3
    },
    "D2-50": {
      "interval_50": 2.5,
      "interval_100": 3
    },
    "D2-55": {
      "interval_100": 3
    },
    "D2-60": {
      "interval_100": 3
    },
    "D2-75": {
      "interval_50": 2.5,
      "interval_100": 3
    },
    "D3-110": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-130": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-150": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-170": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-190": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-200": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D3-220": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D4-225": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D4-260": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D4-300": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D4-320": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-330": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-350": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-370": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-400": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-435": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D6-440": {
      "interval_100": 3,
      "interval_500": 6
    },
    "D8-550": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D8-600": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D8-700": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D11-670": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D11-725": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D13-800": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D13-900": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "D13-1000": {
      "interval_100": 4.5,
      "interval_500": 8
    },
    "1GM10": {
      "interval_100": 3
    },
    "2YM15": {
      "interval_100": 3
    },
    "3YM20": {
      "interval_100": 3
    },
    "3YM30AE": {
      "interval_100": 3
    },
    "3JH40": {
      "interval_100": 3
    },
    "4JH3E": {
      "interval_100": 3
    },
    "4JH4E": {
      "interval_100": 3
    },
    "4JH45": {
      "interval_100": 3
    },
    "4JH57": {
      "interval_100": 3
    },
    "4JH80": {
      "interval_100": 3
    },
    "4JH110": {
      "interval_100": 3
    },
    "4LH-DTE": {
      "interval_100": 3
    },
    "4LH-STE": {
      "interval_100": 3
    },
    "4LH-HTE": {
      "interval_100": 3
    },
    "6LY260": {
      "interval_100": 4.5
    },
    "6LY330": {
      "interval_100": 4.5
    },
    "6LY400": {
      "interval_100": 4.5
    },
    "6LY440": {
      "interval_100": 4.5
    },
    "6CX-GT": {
      "interval_100": 4.5
    },
    "6CX-GTE": {
      "interval_100": 4.5
    },
    "8LV-320": {
      "interval_100": 4.5
    },
    "8LV-350": {
      "interval_100": 4.5
    },
    "6BY220": {
      "interval_100": 3
    },
    "6BY260": {
      "interval_100": 3
    },
    "8LV370": {
      "interval_100": 4.5
    },
    "4LV150": {
      "interval_100": 3
    }
  },
  "engineHp": {
    // HP degerleri model kodundan turetildi (D2-75 -> 75, 6LY440 -> 440).
    // null olanlarda HP kodda gecmiyor; iscilik kovasi secilemez, sihirbaz uyarir.
    // Dogrulanmasi gereken deger varsa buradan duzeltin.
    "1GM10": 10,
    "2YM15": 15,
    "3JH40": 40,
    "3YM20": 20,
    "3YM30AE": 30,
    "4JH110": 110,
    "4JH3E": null,
    "4JH45": 45,
    "4JH4E": null,
    "4JH57": 57,
    "4JH80": 80,
    "4LH-DTE": null,
    "4LH-HTE": null,
    "4LH-STE": null,
    "4LV150": 150,
    "6BY220": 220,
    "6BY260": 260,
    "6CX-GT": null,
    "6CX-GTE": null,
    "6LY260": 260,
    "6LY330": 330,
    "6LY400": 400,
    "6LY440": 440,
    "8LV-320": 320,
    "8LV-350": 350,
    "8LV370": 370,
    "D1-13": 13,
    "D1-20": 20,
    "D1-30": 30,
    "D11-670": 670,
    "D11-725": 725,
    "D13-1000": 1000,
    "D13-800": 800,
    "D13-900": 900,
    "D2-40": 40,
    "D2-50": 50,
    "D2-55": 55,
    "D2-60": 60,
    "D2-75": 75,
    "D3-110": 110,
    "D3-130": 130,
    "D3-150": 150,
    "D3-170": 170,
    "D3-190": 190,
    "D3-200": 200,
    "D3-220": 220,
    "D4-225": 225,
    "D4-260": 260,
    "D4-300": 300,
    "D4-320": 320,
    "D6-330": 330,
    "D6-350": 350,
    "D6-370": 370,
    "D6-400": 400,
    "D6-435": 435,
    "D6-440": 440,
    "D8-550": 550,
    "D8-600": 600,
    "D8-700": 700,
  },
  "partsLibrary": [],
  "workshopPackages": {
    "elektrik": [
      {
        "id": "ep_1",
        "name": "Servis Aküsü Değişimi",
        "description": "2 adet 100Ah AGM Servis Aküsü değişimi ve kutup başı temizliği",
        "items": [
          { "partNumber": "V-100AGM", "description": "Varta 100Ah AGM Akü", "quantity": 2, "price": 210, "type": "malzeme" },
          { "partNumber": "LAB-EL01", "description": "Akü Değişim İşçiliği", "quantity": 1, "price": 60, "type": "iscilik" }
        ]
      },
      {
        "id": "ep_2",
        "name": "VHF Telsiz Montajı",
        "description": "VHF marin telsiz ve anten montajı, hat çekimi",
        "items": [
          { "partNumber": "RAY-53", "description": "Raymarine Ray53 VHF Telsiz", "quantity": 1, "price": 450, "type": "malzeme" },
          { "partNumber": "ANT-VHF", "description": "Glomex VHF Anten 1.5m", "quantity": 1, "price": 95, "type": "malzeme" },
          { "partNumber": "LAB-EL02", "description": "Kablo Çekim ve Montaj İşçiliği", "quantity": 3, "price": 50, "type": "iscilik" }
        ]
      }
    ],
    "doseme": [
      {
        "id": "dp_1",
        "name": "Bimini Tente Yenileme",
        "description": "Sunbrella kumaş ile bimini tente dikimi ve montajı",
        "items": [
          { "partNumber": "KUM-SUN", "description": "Sunbrella Tente Kumaşı (Metre)", "quantity": 8, "price": 45, "type": "malzeme" },
          { "partNumber": "LAB-DOS01", "description": "Tente Dikim ve Şablon İşçiliği", "quantity": 1, "price": 350, "type": "iscilik" }
        ]
      }
    ],
    "tesisat": [
      {
        "id": "tp_1",
        "name": "Maceratör Pompa Değişimi",
        "description": "Pis su maceratör pompası değişimi ve hortum kelepçe kontrolü",
        "items": [
          { "partNumber": "JAB-37010", "description": "Jabsco Maceratör Pompa 12V", "quantity": 1, "price": 280, "type": "malzeme" },
          { "partNumber": "LAB-TES01", "description": "Pompa Sökme-Takma İşçiliği", "quantity": 2, "price": 60, "type": "iscilik" }
        ]
      }
    ],
    "polyester": [
      {
        "id": "pop_1",
        "name": "Gövde Jelkot Çizik Tamiri",
        "description": "Borda veya karina üzerindeki lokal jelkot hasarlarının giderilmesi",
        "items": [
          { "partNumber": "JK-WHITE", "description": "Marin Jelkot Beyaz (Kg)", "quantity": 1, "price": 35, "type": "malzeme" },
          { "partNumber": "LAB-POL01", "description": "Jelkot Yama, Zımpara ve Pasta İşçiliği", "quantity": 4, "price": 50, "type": "iscilik" }
        ]
      }
    ]
  },
  "workshopJobs": {
    "elektrik": [
      { "name": "Elektrik Arıza Tespit & Kablolama", "unit": "Saat", "price": 60 },
      { "name": "Servis Aküsü Montajı (Grup)", "unit": "Adet", "price": 80 },
      { "name": "İnvertör / Şarj Cihazı Kurulumu", "unit": "Adet", "price": 150 }
    ],
    "doseme": [
      { "name": "Kışlık Tente Sökme / Takma", "unit": "Adet", "price": 120 },
      { "name": "Döşeme Temizliği & Koruyucu Uygulama", "unit": "Saat", "price": 40 },
      { "name": "Yelken Bakım & Dikiş Kontrolü", "unit": "Adet", "price": 200 }
    ],
    "tesisat": [
      { "name": "Sintine Pompası Yenileme", "unit": "Adet", "price": 75 },
      { "name": "Pis Su Deposu Maceratör Bakımı", "unit": "Adet", "price": 110 },
      { "name": "Tatlı Su Hidrofor Kurulumu", "unit": "Adet", "price": 90 }
    ],
    "polyester": [
      { "name": "Ozmoz Kontrolü & Jelkot Tamiri", "unit": "Metrekare", "price": 180 },
      { "name": "Fiberglas Gövde Çatlak Onarımı", "unit": "Saat", "price": 70 },
      { "name": "Polyester Kaide Mukavemet Güçlendirme", "unit": "Adet", "price": 250 }
    ]
  }
};
// Model kodundan marka etiketi: D+rakam ile başlayanlar Volvo Penta (D1-13...D8-700),
// diğer seriler Yanmar (GM, YM, JH, LH, LV, BY, CX, LY).
function engineBrandLabel(model) {
  return (/^D\d/.test(model) ? 'Volvo Penta ' : 'Yanmar ') + model;
}

// ─────────────────────────────────────────────────────────────────────────
// İŞÇİLİK ORAN TABLOLARI — KAYIT DEFTERİ
//
// YENİ KONU EKLEMEK: aşağıya bir kayıt ekleyin, hepsi bu. Otomasyon ekranı
// bölümü kendiliğinden çizer, teklif sihirbazı okur. Başka yere dokunmayın.
//
//   { key:  'jenerator',            <- kod içinde kullanılan ad (benzersiz)
//     ad:   'Jeneratör Servisi',    <- ekranda görünen başlık
//     ikon: '🔌',
//     eksen:'HP',                   <- kovaların neye göre ayrıldığı (HP / LOA / ...)
//     oranlar: { '5-10 kW': 250, '11-20 kW': null } }
//
// null = oran girilmemiş. 0 YAZMAYIN: 0 geçerli bir fiyat sayılır ve
// teklife "işçilik 0 €" diye sessizce girer.
// ─────────────────────────────────────────────────────────────────────────
const MATRIX_DEFS = [
  {
    key: 'ana_makina', ad: 'Ana Makina Periyodik Bakım', ikon: '⚙️', eksen: 'HP',
    oranlar: { "10-30 HP":280, "40-55 HP":380, "56-75 HP":460, "76-110 HP":560, "111-150 HP":650, "151-230 HP":780, "231-350 HP":950, "351-500 HP":null, "501-750 HP":null, "751-1000 HP":null }
  },
  {
    key: 'impeller', ad: 'İmpeller Değişimi', ikon: '🔄', eksen: 'HP',
    oranlar: { "10-30 HP":60, "40-55 HP":80, "56-75 HP":90, "76-110 HP":110, "111-150 HP":130, "151-230 HP":160, "231-350 HP":200, "351-500 HP":null, "501-750 HP":null, "751-1000 HP":null }
  },
  {
    key: 'pasta_cila', ad: 'Pasta & Cila', ikon: '✨', eksen: 'LOA',
    oranlar: { "≤25 ft":100, "26-30 ft":150, "31-35 ft":250, "36-40 ft":350, "41-45 ft":450, "46-50 ft":550, "51-55 ft":650, "56-60 ft":800 }
  },
  {
    key: 'zehirli', ad: 'Zehirli Boya', ikon: '⚓', eksen: 'LOA',
    oranlar: { "≤25 ft":170, "26-30 ft":250, "31-35 ft":280, "36-40 ft":350, "41-45 ft":450, "46-50 ft":550, "51-55 ft":650, "56-60 ft":800 }
  }
];

// Kayıt defterinden türetilir; kod bunu {key: {kova: fiyat}} olarak kullanır.
const WIZ_PRICE_DEFAULTS = MATRIX_DEFS.reduce((a, d) => (a[d.key] = { ...d.oranlar }, a), {});

// Bir tablonun tanımı. Bilinmeyen key için güvenli varsayılan döner.
function matrisTanim(key) {
  return MATRIX_DEFS.find(d => d.key === key) || { key, ad: key, ikon: '•', eksen: '' };
}

// Kaydedilmiş oranları varsayılanla birleştirir: yeni eklenen kovalar kaybolmaz,
// kullanıcının girdiği değerler korunur.
function loadWizPricesFrom(storageKey) {
  const prices = JSON.parse(JSON.stringify(WIZ_PRICE_DEFAULTS));
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey || 'wiz_prices') || 'null');
    if (saved) for (const k in prices) if (saved[k]) prices[k] = { ...prices[k], ...saved[k] };
  } catch (e) {}
  return prices;
}

// Oran girilmiş mi? null/undefined/0/boş hepsi "girilmemiş".
function oranGirilmis(v) {
  return !(v === null || v === undefined || v === '' || v === 0);
}
