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
  "partsLibrary": []
};
// Model kodundan marka etiketi: D+rakam ile başlayanlar Volvo Penta (D1-13...D8-700),
// diğer seriler Yanmar (GM, YM, JH, LH, LV, BY, CX, LY).
function engineBrandLabel(model) {
  return (/^D\d/.test(model) ? 'Volvo Penta ' : 'Yanmar ') + model;
}
