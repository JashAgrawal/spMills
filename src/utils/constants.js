import BF1 from "@/assests/suryaprakash silk mills/BOMBAY FILAFIL/i1.jpg";
import BF2 from "@/assests/suryaprakash silk mills/BOMBAY FILAFIL/i2.jpg";
import F1 from "@/assests/suryaprakash silk mills/FILAFIL/i1.jpg";
import F2 from "@/assests/suryaprakash silk mills/FILAFIL/i2.jpg";
import F3 from "@/assests/suryaprakash silk mills/FILAFIL/i3.jpg";
import FP1 from "@/assests/suryaprakash silk mills/FILAFIL PLUS/i1.jpg";
import FP2 from "@/assests/suryaprakash silk mills/FILAFIL PLUS/i2.jpg";
import FD1 from "@/assests/suryaprakash silk mills/FILAFIL DOTS/i1.jpg";
import FD2 from "@/assests/suryaprakash silk mills/FILAFIL DOTS/i2.jpg";
import FPR1 from "@/assests/suryaprakash silk mills/FILAFIL PRO/I1.jpg";
import FPR2 from "@/assests/suryaprakash silk mills/FILAFIL PRO/I2.jpg";
import FPR3 from "@/assests/suryaprakash silk mills/FILAFIL PRO/I3.jpg";
import FS1 from "@/assests/suryaprakash silk mills/FOUR SEASON/i1.jpg";
import SM1 from "@/assests/suryaprakash silk mills/SAMRAY/SAMRAY.jpg";
import SG1 from "@/assests/suryaprakash silk mills/SIGNATURE/I1.jpg";
import SG2 from "@/assests/suryaprakash silk mills/SIGNATURE/I2.jpg";
import SG3 from "@/assests/suryaprakash silk mills/SIGNATURE/I3.jpg";
import SP1 from "@/assests/suryaprakash silk mills/SUPREMO/I1.jpg";
import SP2 from "@/assests/suryaprakash silk mills/SUPREMO/I2.png";
import SP3 from "@/assests/suryaprakash silk mills/SUPREMO/I3.jpg";
import Founder from "@/assests/prakash.jpeg";
import logo from "@/assests/logoo.jpeg";
import sales from "@/assests/salesOffice.jpeg";
import mills from "@/assests/mill.jpeg";
const constants = {
  mobile: 9665996865,
  name: "Surya Prakash Silk Mills",
  link: "https://suryaprakashsilkmills.com/",
  address: "",
  email: "suryaprakashsilkmills7@gmail.com",
  logo: logo,
  founderImg: Founder,
  founderName: "Prakash Vaktavarmal Jain",
  founderQuote:
    "सब कुछ खोने से भी बुरा होता है उस उम्मीद को खोना जिसके बलबुते हम वो सब कुछ वापस हासिल कर सकते है ।",
};
export const productCategories = [
  {
    categoryID: "1",
    image: BF1,
    title: "BOMBAY FILAFIL",
    // path: `/garments`,
    otherImages: [BF1, BF2],
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
    activeIndex: 0,
  },
  {
    categoryID: "2",
    image: F3,
    title: "FILAFIL",
    // path: `/yarn`,
    otherImages: [F1, F2, F3],
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
    activeIndex: 2,
  },
  {
    categoryID: "3",
    image: FP2,
    title: "FILAFIL PLUS",
    // path: `/fabric`,
    otherImages: [FP1, FP2],
    details: "2/80 Pc + 80/300 Dyed x 40pc Dyed + 80/300 Dyed",
    activeIndex: 1,
  },
  {
    categoryID: "4",
    image: FD1,
    title: "FILAFIL DOTS",
    // path: `/home-textile`,
    otherImages: [FD1, FD2],
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
    activeIndex: 0,
  },
  {
    categoryID: "5",
    image: FPR1,
    title: "FILAFIL PRO",
    // path: `/organic`,
    otherImages: [FPR1, FPR2, FPR3],
    activeIndex: 0,
    details: "2/80 Pc + 80/300 Dyed x 40pc white ",
  },
  {
    categoryID: "6",
    image: FS1,
    title: "FOUR SEASON",
    // path: `/organic`,
    otherImages: [FS1],
    activeIndex: 0,
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
  },
  {
    categoryID: "7",
    image: SM1,
    title: "SAMRAY",
    // path: `/organic`,
    otherImages: [SM1],
    activeIndex: 0,
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
  },
  {
    categoryID: "8",
    image: SG2,
    title: "SIGNATURE",
    // path: `/organic`,
    otherImages: [SG1, SG2, SG3],
    activeIndex: 1,
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
  },
  {
    categoryID: "9",
    image: SP2,
    title: "SUPREMO",
    // path: `/organic`,
    otherImages: [SP1, SP2, SP3],
    activeIndex: 1,
    details: "2/80 Pc + 80/300 Dyed x 40pc white + 80/300 Dyed",
  },
];
export const address = [
  {
    image: mills,
    name: "Factory Address",
    map: "https://www.google.com/maps/place/Surya+Prakash+Silk+Mills./@19.2980683,73.0431323,15z/data=!4m6!3m5!1s0x3be7bd7b0681264b:0x5b88da93e1b2e7bb!8m2!3d19.2980683!4d73.0431323!16s%2Fg%2F11qg1485vz?hl=en-GB",
    address:
      "898, Kariwali Rd, Subhash Nagar, Kariwali, Bhiwandi, Maharashtra 421308",
  },
  {
    image: sales,
    name: "Sales Office Address",
    map: "https://www.google.com/maps/place/Anmol+Textile+Market/@19.2721822,73.0401276,15z/data=!4m15!1m8!3m7!1s0x3be7bc4d4c691129:0x34650c3d32a25b16!2sAnmol+Textile+Market!8m2!3d19.2721822!4d73.0401276!10e5!16s%2Fg%2F1pyqv_pym!3m5!1s0x3be7bc4d4c691129:0x34650c3d32a25b16!8m2!3d19.2721822!4d73.0401276!16s%2Fg%2F1pyqv_pym?hl=en-GB",
    address: "Agra Rd, Anjurphata, Bhiwandi, Maharashtra 421302",
  },
];
export const toEmail = "suryaprakashsilkmills@gmail.com";
export default constants;
