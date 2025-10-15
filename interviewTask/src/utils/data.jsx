import { ChevronRight } from "lucide-react";
import mobilephoneIcon from "../assets/images/mobilephone.png";
import apiBankingIcon from "../assets/images/api-banking.png";
import payoutsIcon from "../assets/images/payouts.png";
import bulkPaymentsIcon from "../assets/images/bulk-payments.png";



export const carouselContent = {
  heading: "End-to-End Payout & Payroll Solutions for Digital Era.",
  description: "Optimize transactions and payouts with our secure, efficient payment gateway solution, ensuring smooth operations.",
  buttons: [
    { label: "Pay Smart. Pay Fast", className: "btn btn-primary" },
    { label: "Reach out", className: "btn btn-primary-typ2" },
    { label: "Get Started", className: "btn btn-primary-typ3" }
  ],
   tags: [
    "Sales Product Screening",
    "Payout process",
    "Transactions"
  ]
};



export const menuItems = [
  { label: "Home",link:"/" },
  {
    label: "Ai Banking",
    submenu: ["Overview", "Features", "Pricing", ]
  },
  { label: "Payments" },
  { label: "Payouts" },
  { label: "Payroll" },
  { label: "Contact Us" }
];


export const buttonData = [
  { label: "Pay Smart. Pay Fast", className: "btn btn-primary", type: "button" },
  { label: "Reach out", className: "btn btn-primary-typ2", type: "button", icon: <ChevronRight /> },
  { label: "Get Started", className: "btn btn-primary-typ3", type: "button", icon: <ChevronRight /> }
];


export const CardDetails = [
  {
  heading: "UPI Autopay",
  description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
  icon: mobilephoneIcon
},
{
  heading: "API Banking",
  description: "Integrate financial services seamlessly into your applications with our robust API banking solutions.",
  icon:apiBankingIcon
},
{
  heading: "Payouts",
  description: "Deliver payouts swiftly and securely, ensuring timely disbursement to employees, partners, or clients.",
  icon:payoutsIcon
},
{
  heading: "Bulk Payments",
  description: "Process multiple payments at once, saving time and reducing errors with bulk payment options.",
  icon:bulkPaymentsIcon
},
 {
  heading: "UPI Autopay",
  description: "Automate your payments with UPI Autopay, ensuring timely transactions without manual effort.",
  icon: mobilephoneIcon
}
]

export default {
  carouselContent,
  menuItems,
  buttonData,
  CardDetails
};  