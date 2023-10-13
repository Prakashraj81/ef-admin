import {
  IconAperture, IconCopy, IconLayoutDashboard, IconLogin, IconMoodHappy, IconTypography, IconUserPlus, IconUsersGroup, 
  IconPhotoPlus, IconArticle, IconAssembly, IconCalendarEvent, IconCertificate, IconTicket, IconBuildingCommunity, IconHelpOctagon
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    navlabel: false,
    subheader: 'Home',
  },
  {
    id: uniqueId(),
    title: 'Dashboard',
    icon: IconLayoutDashboard,
    href: '/admin/Dashborad',
  },
  {
    id: uniqueId(),
    title: 'Users',
    icon: IconUsersGroup,
    href: '/admin/users/users',
  },
  {
    id: uniqueId(),
    title: 'Gallery',
    icon: IconPhotoPlus,
    href: '/admin/gallery/gallery',
  },  
  {
    navlabel: true,
    subheader: 'CONTENTS MANAGEMENT',
  },  
  {
    id: uniqueId(),
    title: 'Post',
    icon: IconArticle,
    href: '/admin/blog-post/blog-post',
  },    
  
  {
    id: uniqueId(),
    title: 'Services',
    icon: IconAssembly,
    href: '/admin/services/services',
  }, 
 
  {
    id: uniqueId(),
    title: 'Events',
    icon: IconCalendarEvent,
    href: '/admin/events/events',
  }, 
  
  {
    id: uniqueId(),
    title: 'Testimonials',
    icon: IconCertificate,
    href: '/admin/testimonials/testimonials',
  },     
  
  {
    navlabel: true,
    subheader: 'SUPPORT MANAGEMENT',
  },
  {
    id: uniqueId(),
    title: 'Enquiry',
    icon: IconTicket,
    href: '/admin/enquiry/enquiry',
  },
  {
    navlabel: true,
    subheader: 'COMPANY MANAGEMENT',
  },
  {
    id: uniqueId(),
    title: 'Company Info',
    icon: IconBuildingCommunity,
    href: '/admin/company-info/company-info',
  },
  {
    id: uniqueId(),
    title: 'FAQ',
    icon: IconHelpOctagon,
    href: '/admin/faq/faq',
  },    
];

export default Menuitems;
