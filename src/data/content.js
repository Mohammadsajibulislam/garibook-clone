// Centralized content for the Garibook homepage recreation.
// Text fields use { en, bn } so components can pick via useI18n().pick().

export const navLinks = [
  { label: { en: "About Us", bn: "আমাদের সম্পর্কে" }, href: "#freedom" },
  { label: { en: "Earn With Garibook", bn: "গাড়িবুকের সাথে আয় করুন" }, href: "#driver" },
  { label: { en: "Garibook Business", bn: "গাড়িবুক বিজনেস" }, href: "#services" },
  { label: { en: "Garibook Club", bn: "গাড়িবুক ক্লাব" }, href: "#services" },
  { label: { en: "Campaign", bn: "ক্যাম্পেইন" }, href: "#news" },
  { label: { en: "Blogs", bn: "ব্লগ" }, href: "#blogs" },
];

export const APP_DOWNLOAD_URL =
  "https://onelink.to/gbweb?utm_source=Website&utm_medium=Webpage&utm_campaign=Homepage&utm_term=web&utm_content=page";

export const DRIVER_APP_URL =
  "https://play.google.com/store/search?q=garibook%20smart%20driver&c=apps";

// Typing headlines — segments let us highlight a word while typing.
export const heroTitles = [
  [
    { text: "Assurance of Effortless " },
    { text: "Travel", accent: true },
  ],
  [
    { text: "Luxury " },
    { text: "Trips", accent: true },
    { text: " with Comfort" },
  ],
  [
    { text: "Your " },
    { text: "Journey", accent: true },
    { text: " Starts Here ..." },
  ],
];

export const heroTitlesBn = [
  [
    { text: "নির্বিঘ্ন " },
    { text: "ভ্রমণের", accent: true },
    { text: " নিশ্চয়তা" },
  ],
  [
    { text: "আরামে " },
    { text: "বিলাসবহুল", accent: true },
    { text: " যাত্রা" },
  ],
  [
    { text: "আপনার " },
    { text: "যাত্রা", accent: true },
    { text: " এখানেই শুরু ..." },
  ],
];

export const carTypes = [
  "Sedan",
  "Sedan Premium",
  "Sedan Economy",
  "Noah",
  "HiAce",
];

export const airports = [
  "Hazrat Shahjalal International Airport (DHK)",
  "Osmani International Airport (ZYL)",
  "Shah Amanat International Airport (CGP)",
  "Jashore Airport (JSR)",
];

export const stats = [
  { value: 300000, suffix: "+", labelKey: "stats.trips" },
  { value: 850000, suffix: "+", labelKey: "stats.customers" },
  { value: 35000, suffix: "+", labelKey: "stats.drivers" },
  { value: 64, suffix: "", labelKey: "stats.districts" },
];

export const platformCards = [
  {
    title: { en: "Intercity Car Rental", bn: "ইন্টারসিটি কার রেন্টাল" },
    desc: {
      en: "Travel between cities with comfort and confidence.",
      bn: "আরাম ও আত্মবিশ্বাসের সাথে শহরে শহরে ভ্রমণ করুন।",
    },
    image: "/assets/images/cars/intercity_car_rental.svg",
  },
  {
    title: { en: "Ride share", bn: "রাইড শেয়ার" },
    desc: {
      en: "Go anywhere in the city, quickly and easily.",
      bn: "শহরের যেকোনো জায়গায় দ্রুত ও সহজে যান।",
    },
    image: "/assets/images/cars/rideshare.svg",
  },
  {
    title: { en: "Airport Rental", bn: "এয়ারপোর্ট রেন্টাল" },
    desc: {
      en: "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
      bn: "বিদেশ যাচ্ছেন নাকি দেশে ফিরছেন — আরামদায়ক ও নির্ভয়ে এয়ারপোর্ট যাত্রা উপভোগ করুন।",
    },
    image: "/assets/images/cars/airport_rental.svg",
  },
  {
    title: { en: "Hourly Rental", bn: "ঘণ্টা ভিত্তিক ভাড়া" },
    desc: {
      en: "Rent a car by the hour, tailored to your needs.",
      bn: "আপনার প্রয়োজন অনুযায়ী ঘণ্টা হিসেবে গাড়ি ভাড়া নিন।",
    },
    image: "/assets/images/cars/hourly_rental.svg",
  },
];

export const serviceTabs = [
  { key: "rides", labelKey: "services.tab.rides" },
  { key: "business", labelKey: "services.tab.business" },
  { key: "club", labelKey: "services.tab.club" },
  { key: "vms", labelKey: "services.tab.vms" },
];

export const servicePanels = {
  business: {
    title: "Modern Car Rentals\nfor Business",
    desc: "Simplify your corporate transportation, ensure on-time team mobility, and gain control with our VMS.",
    image: "/assets/images/services/busines.jpeg",
    href: "#business",
  },
  club: {
    title: "Turn Your Car into Earnings with Garibook Club",
    desc: "Garibook Club is more than just a community. Join a vibrant network of car enthusiasts, all fueled by the same passion: the open road and the thrill of making money doing what they love.",
    image: "/assets/images/services/garibook_club.jpg",
    href: "#club",
  },
  vms: {
    title: "Vehicle Management System - VMS",
    desc: "Just like Garibook Business makes traveling easy for your team, our Vehicle Management System (VMS) helps you take care of your own cars. VMS is a great tool that works with Garibook Business to make sure your vehicles are used the best way possible.",
    image: "/assets/images/vms/Frame_1000001473.png",
    href: "#vms",
  },
};

export const chooseSteps = [
  {
    icon: "/assets/icon/car.svg",
    title: { en: "Choose the Car", bn: "গাড়ি বেছে নিন" },
    desc: { en: "Pick what suits your comfort.", bn: "আপনার আরাম অনুযায়ী বেছে নিন।" },
  },
  {
    icon: "/assets/icon/drive.svg",
    title: { en: "Choose the Driver", bn: "ড্রাইভার বেছে নিন" },
    desc: { en: "Based on ratings and reviews.", bn: "রেটিং ও রিভিউ অনুযায়ী।" },
  },
  {
    icon: "/assets/icon/price.svg",
    title: { en: "Choose the Fare", bn: "ভাড়া বেছে নিন" },
    desc: { en: "Select the bid that fits your budget.", bn: "আপনার বাজেটের উপযুক্ত অফার বেছে নিন।" },
  },
];

export const peopleTogetherCards = [
  {
    title: { en: "Airport Rentals", bn: "এয়ারপোর্ট রেন্টাল" },
    image: "/assets/images/services/Airport Rental_Webp.webp",
  },
  {
    title: { en: "Family Trips", bn: "পারিবারিক ভ্রমণ" },
    image: "/assets/images/services/family_trips.webp",
  },
  {
    title: { en: "Long Tours", bn: "দীর্ঘ ভ্রমণ" },
    image: "/assets/images/services/Group Tour_Webp.webp",
  },
];

export const bookingArrivalCards = [
  {
    image: "/assets/images/services/explore.jpeg",
    alt: "Explore various ride services on the Garibook app",
    span: "lg:col-span-8",
  },
  {
    image: "/assets/images/services/freedom.jpg",
    alt: "Choose your fare, vehicle and driver",
    span: "lg:col-span-4",
  },
  {
    image: "/assets/images/services/safe_travel.svg",
    alt: "Safe travel with route map",
    span: "lg:col-span-4",
  },
  {
    image: "/assets/images/services/prefarred_car.jpg",
    alt: "Choose your preferred car",
    span: "lg:col-span-4",
  },
  {
    image: "/assets/images/services/smooth.jpg",
    alt: "Smooth booking experience",
    span: "lg:col-span-4",
  },
];

export const newsFeatures = [
  {
    date: "December 05, 2024",
    title: "গাড়িবুক: বাংলাদেশের ইন্টারসিটি ভ্রমণে স্বাধীনতার নতুন পথচলা",
    excerpt:
      "বাংলাদেশে ইন্টারসিটি ভ্রমণ সহজ ও সাশ্রয়ী করার লক্ষ্যে একটি অত্যাধুনিক অ্যাপ ‘গাড়িবুক’। কোনো কমিশন ছাড়াই ইন্টারসিটি কার ভাড়ার পরিষেবা এনেছে গাড়িবুক দেশের প্রথম শের একার মাঠে।",
    source: "প্রথম আলো",
    image: "/assets/images/services/family_trips.webp",
    imageAlt: "Family enjoying a trip together in a Garibook car",
    href: "https://www.prothomalo.com/",
  },
  {
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
    excerpt:
      "For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.",
    source: "Dhaka Tribune",
    image: "/assets/images/services/busines.jpeg",
    imageAlt: "Business traveler working on a laptop in the back seat",
    href: "https://www.dhakatribune.com/business/365516/digital-app-garibook-to-offer-%E2%80%98chander-gari%E2%80%99",
  },
  {
    date: "December 04, 2024",
    title: "বাংলাদেশে প্রথমবার ‘চান্দের গাড়ি’ গাড়িবুক অ্যাপে",
    excerpt:
      "বাংলাদেশের প্রতিটি জেলায় জনপ্রিয় ভ্রমণের গাড়ি ‘চান্দের গাড়ি’ এবার বুক হবে অনলাইনে। চান্দের গাড়ি ভ্রমণপ্রেমীদের জন্য এক বিশেষ খবর।",
    source: "কালের কণ্ঠ",
    image: "/assets/images/services/explore.jpeg",
    imageAlt: "Garibook app services overview on a phone screen",
    href: "https://www.kalerkantho.com/",
  },
];

export const testimonials = [
  {
    name: "Atif Haider",
    role: "Banker",
    image: "https://img.youtube.com/vi/JsBwaJ_VIcA/maxresdefault.jpg",
    videoUrl: "https://youtu.be/JsBwaJ_VIcA?si=VIH00mRjhASm4L2a",
  },
  {
    name: "Mohammad Habibur Rahman",
    role: "Banker",
    image: "https://img.youtube.com/vi/CsxeEof1T3M/maxresdefault.jpg",
    videoUrl: "https://youtu.be/CsxeEof1T3M?si=YG04NloduV-YtDhY",
  },
  {
    name: "Sadia Afrin",
    role: "Service Holder",
    image: "https://img.youtube.com/vi/8ma9XEGhi5s/maxresdefault.jpg",
    videoUrl: "https://youtu.be/8ma9XEGhi5s?si=PVAnnkI5PAzJEmdX",
  },
  {
    name: "Rafiqul Islam",
    role: "Business Owner",
    image: "/assets/images/services/freedom.jpg",
    videoUrl: "",
  },
];

export const blogPosts = [
  {
    date: "September 15, 2026",
    title: "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহরে পরিবহন ব্যবস্থা",
    excerpt:
      "শেয়ার রাইড মডেলে শহরের যানজট কমানো যায়, খরচ ভাগ হয় এবং নিরাপদ ভ্রমণের নতুন সম্ভাবনা তৈরি হচ্ছে দেশের মেট্রোপলিটন এলাকায়।",
    image: "/assets/images/services/family_trips.webp",
    imageAlt: "Riders sharing a city commute",
    href: "https://garibook.com/blogs/%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%A1-%E0%A6%B6%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%82%E0%A7%9F%E0%A7%87-%E0%A6%AC%E0%A6%A6%E0%A6%B2%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%B9%E0%A7%80%E0%A6%B0%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%B9%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    date: "September 20, 2026",
    title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    excerpt: "পাহাড়, চা-বাগান ও স্থানীয় রান্না — সিলেট ভ্রমণের জন্য প্রয়োজনীয় গাইড।",
    image: "/assets/images/services/explore.jpeg",
    imageAlt: "Scenic river landscape in Sylhet",
    href: "https://garibook.com/blogs/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    date: "September 20, 2026",
    title: "নঙ্গার দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    excerpt: "নদীপথ, ট্রেকিং ও স্থানীয় খাবার — নঙ্গার যাত্রা পরিকল্পনার সংক্ষিপ্ত কর্মসূচি।",
    image: "/assets/images/services/Group Tour_Webp.webp",
    imageAlt: "Historic ruins at a travel destination",
    href: "https://garibook.com/blogs/%E0%A6%A8%E0%A6%97%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
];

export const footerLinks = {
  garibook: [
    { labelKey: "footer.about", href: "#freedom" },
    { labelKey: "footer.reviews", href: "#reviews" },
    { labelKey: "footer.career", href: "#driver" },
    { labelKey: "footer.newsroom", href: "#news" },
    { labelKey: "footer.map", href: "https://map.garibook.com/" },
  ],
  services: [
    { labelKey: "footer.intercity", href: "#services" },
    { labelKey: "footer.airport", href: "#booking" },
    { labelKey: "footer.hourly", href: "#services" },
    { labelKey: "footer.vms", href: "#services" },
  ],
  partner: [
    { labelKey: "footer.smartDriver", href: "#driver" },
    { labelKey: "footer.club", href: "#services" },
    { labelKey: "footer.corporate", href: "#services" },
  ],
  contacts: [
    { label: "support@garibook.com", href: "mailto:support@garibook.com" },
    {
      label:
        "Police Plaza Concord Tower -01, 13th Floor, Plot-02, Road- 144, Gulshan, Dhaka-1212",
      href: null,
    },
    { label: "+88 09 678 11 22 33", href: "tel:09678112233" },
  ],
};
