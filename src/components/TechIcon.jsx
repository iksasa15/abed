import {
  SiApple,
  SiFigma,
  SiMongodb,
  SiOpenapiinitiative,
  SiPython,
  SiReact,
  SiSqlite,
  SiSwift,
} from 'react-icons/si'
import {
  HiOutlineCloud,
  HiOutlineCodeBracket,
  HiOutlineCpuChip,
  HiOutlineLightBulb,
  HiOutlinePaintBrush,
  HiOutlineServerStack,
  HiOutlineSparkles,
  HiOutlineUserGroup,
  HiOutlineChatBubbleLeftRight,
  HiOutlineAcademicCap,
  HiOutlineEye,
} from 'react-icons/hi2'

const iconMap = {
  // Brands / tech
  Swift: SiSwift,
  SwiftUI: SiSwift,
  'Swift و SwiftUI': SiSwift,
  Python: SiPython,
  MongoDB: SiMongodb,
  SQL: SiSqlite,
  Figma: SiFigma,
  Apple: SiApple,
  React: SiReact,
  API: SiOpenapiinitiative,
  'API Integration': SiOpenapiinitiative,
  'Backend و APIs': SiOpenapiinitiative,
  Backend: HiOutlineServerStack,

  // AI / product
  AI: HiOutlineSparkles,
  'Artificial Intelligence': HiOutlineSparkles,
  'الذكاء الاصطناعي': HiOutlineSparkles,
  'Machine Learning': HiOutlineCpuChip,
  'تعلم الآلة': HiOutlineCpuChip,
  'Computer Vision': HiOutlineEye,
  'الرؤية الحاسوبية': HiOutlineEye,

  // Design
  'UX/UI': HiOutlinePaintBrush,
  'UX/UI Design': HiOutlinePaintBrush,
  'تصميم UX/UI': HiOutlinePaintBrush,
  'Product Design': HiOutlineLightBulb,
  'Design Systems': HiOutlinePaintBrush,
  'أنظمة التصميم': HiOutlinePaintBrush,
  'Design Thinking': HiOutlineLightBulb,

  // Soft / cloud
  'Cloud Computing Basics': HiOutlineCloud,
  'أساسيات الحوسبة السحابية': HiOutlineCloud,
  'Backend & APIs': SiOpenapiinitiative,
  'Swift & SwiftUI': SiSwift,
  'Problem Solving': HiOutlineLightBulb,
  'حل المشكلات': HiOutlineLightBulb,
  Communication: HiOutlineChatBubbleLeftRight,
  التواصل: HiOutlineChatBubbleLeftRight,
  Leadership: HiOutlineAcademicCap,
  القيادة: HiOutlineAcademicCap,
  Teamwork: HiOutlineUserGroup,
  'العمل الجماعي': HiOutlineUserGroup,
}

const colorMap = {
  Swift: '#F05138',
  SwiftUI: '#F05138',
  'Swift و SwiftUI': '#F05138',
  Python: '#3776AB',
  MongoDB: '#47A248',
  SQL: '#003B57',
  Figma: '#F24E1E',
  Apple: '#000000',
  React: '#61DAFB',
  AI: '#8B6CFF',
  'الذكاء الاصطناعي': '#8B6CFF',
  'تعلم الآلة': '#5EC8F2',
  'Computer Vision': '#FF5A9A',
  'UX/UI': '#FF5A9A',
  'تصميم UX/UI': '#FF5A9A',
  'Product Design': '#8B6CFF',
  Backend: '#0A1A33',
  'Backend و APIs': '#0A1A33',
  'API Integration': '#0A1A33',
}

export default function TechIcon({ name, className = '' }) {
  const Icon = iconMap[name] || HiOutlineCodeBracket
  const color = colorMap[name]

  return (
    <span className={`tech-icon ${className}`} style={color ? { color } : undefined} aria-hidden="true">
      <Icon />
    </span>
  )
}

export function TechChip({ label, className = '' }) {
  return (
    <li className={`tech-chip ${className}`}>
      <TechIcon name={label} />
      <span>{label}</span>
    </li>
  )
}

// Featured tech row for skills section
export const featuredTech = [
  { label: 'Swift', name: 'Swift' },
  { label: 'Python', name: 'Python' },
  { label: 'MongoDB', name: 'MongoDB' },
  { label: 'Figma', name: 'Figma' },
  {
    label: 'Academy',
    name: 'Apple Academy',
    logo: '/logos/apple-academy.png',
  },
]
