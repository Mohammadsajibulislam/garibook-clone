// Centralized content for the Garibook homepage recreation.
// Keeps copy/data out of components so markup stays presentational.

export const navLinks = [
  { label: "About Us", href: "#freedom" },
  { label: "Earn With Garibook", href: "#driver" },
  { label: "Garibook Business", href: "#services" },
  { label: "Garibook Club", href: "#services" },
  { label: "Campaign", href: "#news" },
  { label: "Blogs", href: "#blogs" },
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
  { value: 300000, suffix: "+", label: "Trip Requests" },
  { value: 850000, suffix: "+", label: "Total Customers" },
  { value: 35000, suffix: "+", label: "Active Drivers" },
  { value: 64, suffix: "", label: "District Covered" },
];

export const platformCards = [
  {
    title: "Intercity Car Rental",
    desc: "Travel between cities with comfort and confidence.",
    image: "/assets/images/cars/intercity_car_rental.svg",
    active: true,
  },
  {
    title: "Ride share",
    desc: "Go anywhere in the city, quickly and easily.",
    image: "/assets/images/cars/rideshare.svg",
  },
  {
    title: "Airport Rental",
    desc: "Whether you’re flying abroad or returning home, enjoy a comfortable and worry-free airport journey.",
    image: "/assets/images/cars/airport_rental.svg",
  },
  {
    title: "Hourly Rental",
    desc: "Rent a car by the hour, tailored to your needs.",
    image: "/assets/images/cars/hourly_rental.svg",
  },
];

export const serviceTabs = [
  { key: "rides", label: "Rides" },
  { key: "business", label: "Garibook Business" },
  { key: "club", label: "Garibook Club" },
  { key: "vms", label: "VMS" },
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
    title: "Choose the Car",
    desc: "Pick what suits your comfort.",
  },
  {
    icon: "/assets/icon/drive.svg",
    title: "Choose the Driver",
    desc: "Based on ratings and reviews.",
  },
  {
    icon: "/assets/icon/price.svg",
    title: "Choose the Fare",
    desc: "Select the bid that fits your budget.",
  },
];

export const peopleTogetherCards = [
  {
    title: "Airport Rentals",
    image: "/assets/images/services/Airport Rental_Webp.webp",
  },
  {
    title: "Family Trips",
    image: "/assets/images/services/family_trips.webp",
  },
  {
    title: "Long Tours",
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
  },
  {
    date: "December 04, 2024",
    title: 'Digital App to offer "Chander Gari"',
    excerpt:
      "For the first time in Bangladesh, tourists can now book the iconic Chander Gari through an online platform.",
    source: "Dhaka Tribune",
    image: "/assets/images/services/busines.jpeg",
    imageAlt: "Business traveler working on a laptop in the back seat",
  },
  {
    date: "December 04, 2024",
    title: "বাংলাদেশে প্রথমবার ‘চান্দের গাড়ি’ গাড়িবুক অ্যাপে",
    excerpt:
      "বাংলাদেশের প্রতিটি জেলায় জনপ্রিয় ভ্রমণের গাড়ি ‘চান্দের গাড়ি’ এবার বুক হবে অনলাইনে। চান্দের গাড়ি ভ্রমণপ্রেমীদের জন্য এক বিশেষ খবর।",
    source: "কালের কণ্ঠ",
    image: "/assets/images/services/explore.jpeg",
    imageAlt: "Garibook app services overview on a phone screen",
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
      "রাইড শেয়ারিংয়ে বদলে যাচ্ছে বাংলাদেশের শহরে পরিবহন ব্যবস্থা",
    image: "/assets/images/services/family_trips.webp",
    imageAlt: "Riders sharing a city commute",
    href: "https://garibook.com/blogs/%E0%A6%B0%E0%A6%BE%E0%A6%87%E0%A6%A1-%E0%A6%B6%E0%A7%87%E0%A7%9F%E0%A6%BE%E0%A6%B0%E0%A6%BF%E0%A6%82%E0%A7%9F%E0%A7%87-%E0%A6%AC%E0%A6%A6%E0%A6%B2%E0%A7%87-%E0%A6%AF%E0%A6%BE%E0%A6%9A%E0%A7%8D%E0%A6%9B%E0%A7%87-%E0%A6%AC%E0%A6%BE%E0%A6%82%E0%A6%B2%E0%A6%BE%E0%A6%A6%E0%A7%87%E0%A6%B6%E0%A7%87%E0%A6%B0-%E0%A6%B6%E0%A6%B9%E0%A7%80%E0%A6%B0%E0%A7%87-%E0%A6%AA%E0%A6%B0%E0%A6%BF%E0%A6%AC%E0%A6%B9%E0%A6%A8-%E0%A6%AC%E0%A7%8D%E0%A6%AF%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    date: "September 20, 2026",
    title: "সিলেটের দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    excerpt: "সিলেটের-দর্শনীয়-স্থান",
    image: "/assets/images/services/explore.jpeg",
    imageAlt: "Scenic river landscape in Sylhet",
    href: "https://garibook.com/blogs/%E0%A6%B8%E0%A6%BF%E0%A6%B2%E0%A7%87%E0%A6%9F%E0%A7%87%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%8F%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
  {
    date: "September 20, 2026",
    title: "নঙ্গার দর্শনীয় স্থান সমূহ, খাবার ও থাকার ব্যবস্থা",
    excerpt: "নঙ্গার দর্শনীয় স্থান সমূহ",
    image: "/assets/images/services/Group Tour_Webp.webp",
    imageAlt: "Historic ruins at a travel destination",
    href: "https://garibook.com/blogs/%E0%A6%A8%E0%A6%97%E0%A6%97%E0%A6%BE%E0%A6%81%E0%A6%B0-%E0%A6%A6%E0%A6%B0%E0%A7%8D%E0%A6%B6%E0%A6%A8%E0%A7%80%E0%A7%9F-%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE%E0%A6%A8-%E0%A6%B8%E0%A6%AE%E0%A7%82%E0%A6%B9-%E0%A6%96%E0%A6%BE%E0%A6%AC%E0%A6%BE%E0%A6%B0-%E0%A6%93-%E0%A6%A5%E0%A6%BE%E0%A6%95%E0%A6%BE%E0%A6%B0-%E0%A6%AC%E0%A7%8D%E0%A6%8F%E0%A6%AC%E0%A6%B8%E0%A7%8D%E0%A6%A5%E0%A6%BE",
  },
];

export const footerLinks = {
  garibook: [
    { label: "About Us", href: "#freedom" },
    { label: "Customer Reviews", href: "#reviews" },
    { label: "Career", href: "#driver" },
    { label: "Newsroom", href: "#news" },
    { label: "Garibook Map", href: "https://map.garibook.com/" },
  ],
  services: [
    { label: "Intercity Rental", href: "#services" },
    { label: "Airport Pick and Drop", href: "#booking" },
    { label: "Hourly Rental", href: "#services" },
    { label: "Vehicle Management System (VMS)", href: "#services" },
  ],
  partner: [
    { label: "Become a Smart Driver", href: "#driver" },
    { label: "Become a member of Garibook Club", href: "#services" },
    { label: "Garibook Business for Corporate Travel", href: "#services" },
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
