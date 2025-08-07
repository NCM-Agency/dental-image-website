export const siteData = {
  name: "Dental Image Therapy Centres",
  tagline: "We Build Confidence",
  description: "Modern dental care in Winnipeg. Two convenient locations offering general, cosmetic, and emergency dentistry.",
  
  locations: [
    {
      id: "st-vital",
      name: "St. Vital Centre",
      address: "110-1225 St. Mary's Road",
      city: "Winnipeg, MB",
      postalCode: "R2M 5E5",
      phone: "204-809-3604",
      description: "St. Vital Centre, south entrance, next to Cineplex SilverCity",
      mapUrl: "https://maps.google.com/?q=Dental+Image+St+Vital+Winnipeg",
      bookingUrl: "https://widget.carecru.com/widgets/?id=S5YUXeIRX7",
      owner: "Dr. Patrick McManus",
      doctors: ["Dr. Jodie Heinrich", "Dr. Christopher Bao", "Dr. Reem Atout"],
      hours: {
        "Monday-Thursday": "7:00 AM - 9:00 PM",
        Friday: "7:00 AM - 2:00 PM",
        Saturday: "8:00 AM - 3:00 PM",
        Sunday: "Closed"
      }
    },
    {
      id: "garden-city",
      name: "Garden City",
      address: "211-2305 McPhillips Street",
      city: "Winnipeg, MB",
      postalCode: "R2V 3E1",
      phone: "204-800-2709",
      description: "Garden City Shopping Centre",
      mapUrl: "https://maps.google.com/?q=Dental+Image+Garden+City+Winnipeg",
      bookingUrl: "https://widget.carecru.com/widgets/?id=S5YUXeIRX7",
      owners: ["Dr. Donald Dziewit", "Dr. Linda Simpson"],
      doctors: ["Dr. Roland DeBrouwere", "Dr. Mariam Nesseim", "Dr. Patricia Zoleta", "Dr. Lisa Deng", "Dr. Isabella Sarzynski", "Dr. Jessica Gonzales", "Dr. Deji Omotayo"],
      hours: {
        "Monday-Thursday": "7:00 AM - 9:00 PM",
        Friday: "7:00 AM - 2:00 PM",
        Saturday: "8:00 AM - 3:00 PM",
        Sunday: "Closed"
      }
    }
  ],
  
  services: {
    general: [
      {
        id: "emergency",
        name: "Emergency Dental Care",
        description: "Walk-ins and emergency appointments available. We're here when you need us most.",
        icon: "AlertCircle"
      },
      {
        id: "cleanings",
        name: "Cleanings & Exams",
        description: "Regular checkups and professional cleanings to maintain optimal oral health.",
        icon: "Sparkles"
      },
      {
        id: "fillings",
        name: "Fillings",
        description: "Common cavity treatment to restore tooth structure and prevent further decay.",
        icon: "Shield"
      },
      {
        id: "root-canal",
        name: "Root Canal Therapy",
        description: "Save infected teeth without removal through modern, comfortable procedures.",
        icon: "Heart"
      },
      {
        id: "extractions",
        name: "Extractions",
        description: "Safe removal of severely damaged or infected teeth when necessary.",
        icon: "Activity"
      }
    ],
    cosmetic: [
      {
        id: "invisalign",
        name: "Invisalign®",
        description: "Straighten teeth discreetly without traditional metal braces.",
        icon: "Smile"
      },
      {
        id: "whitening",
        name: "Zoom! Whitening",
        description: "Professional teeth whitening for a brighter, more confident smile.",
        icon: "Sun"
      },
      {
        id: "veneers",
        name: "Lumineers/Veneers",
        description: "Natural-looking smile restoration with minimal tooth preparation.",
        icon: "Star"
      },
      {
        id: "implants",
        name: "Dental Implants",
        description: "Permanent tooth replacement with titanium posts as artificial roots.",
        icon: "Anchor"
      },
      {
        id: "crowns",
        name: "Crowns & Bridges",
        description: "Rebuild damaged teeth and fill gaps from missing teeth.",
        icon: "Crown"
      }
    ],
    specialty: [
      {
        id: "cerec",
        name: "CEREC Technology",
        description: "Digital impressioning for one-appointment restorations.",
        icon: "Cpu"
      },
      {
        id: "sedation",
        name: "IV Sedation",
        description: "Deep relaxation during procedures for anxious patients.",
        icon: "Moon"
      },
      {
        id: "childrens",
        name: "Children's Dentistry",
        description: "Gentle, friendly care designed specifically for young patients.",
        icon: "Baby"
      },
      {
        id: "dentures",
        name: "Dentures",
        description: "Custom-fitted replacements for missing teeth.",
        icon: "Layers"
      }
    ]
  },
  
  testimonials: [
    {
      name: "Jeff B",
      location: "Garden City",
      rating: 5,
      text: "Awesome! Secretarial staff is extremely courteous and efficient, and both dental hygienists and dentists do exceptionally high-quality work while making you feel at ease."
    },
    {
      name: "Lisa C",
      location: "St. Vital",
      rating: 5,
      text: "I have been going to Dental Image for 25 years. The staff are caring, kind and friendly."
    },
    {
      name: "Janice B",
      location: "St. Vital",
      rating: 5,
      text: "Dr. McManus is, in my opinion, the best dentist around, hands down!!! He is gentle, makes sure I'm pain free, and extremely competent!!"
    },
    {
      name: "Lois B",
      location: "Garden City",
      rating: 5,
      text: "I felt completely safe and comfortable at Dental Image this morning. Everyone was so gracious and Cathy is the best hygienist, for me!!"
    }
  ],
  
  stats: {
    yearsInService: "30+",
    patientsServed: "50,000+",
    locations: "2",
    rating: "4.9"
  }
}