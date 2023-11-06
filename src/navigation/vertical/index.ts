// ** Icon imports
import { Home } from "../../@core/layouts/components/icons/Home"
import { Building } from "../../@core/layouts/components/icons/Building"
import { Rocket } from "../../@core/layouts/components/icons/Rocket"
import { Investors } from "../../@core/layouts/components/icons/Investors"
import { Alerts } from "../../@core/layouts/components/icons/Alerts"
import { Data } from "../../@core/layouts/components/icons/Data"
import { Downloads } from "../../@core/layouts/components/icons/Downloads"
import { Funding } from "../../@core/layouts/components/icons/Funding"
import { Management } from "../../@core/layouts/components/icons/Management"
import { MEA } from "../../@core/layouts/components/icons/MEA"
import { Reports } from "../../@core/layouts/components/icons/Reports"
import { Hubs } from "../../@core/layouts/components/icons/Hubs"


// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: Home,
      path: '/'
    },
    {
      title: 'Startups',
      icon: Rocket,
      path: '/startups'
    },
    {
      title: 'Founders',
      icon: Building,
      path: '/founders'
    },
    {
      title: 'Investors',
      icon: Investors,
      path: '/investors'
    },
    {
      title: 'Funding Rounds',
      icon: Funding,
      path: '/funding-rounds'
    },
    {
      title: 'M&A',
      icon: MEA,
      path: '/mea'
    },
    {
      title: 'Hubs',
      icon: Hubs,
      path: '/hubs'
    },
    {
      title: 'Reports',
      icon: Reports,
      path: '/reports'
    },
    {
      title: 'My Downloads',
      icon: Downloads,
      path: '/my-downloads'
    },
    {
      title: 'Alerts',
      icon: Alerts,
      path: '/alerts'
    },
    {
      title: 'Management',
      icon: Management,
      path: '/account-settings'
    },
    {
      title: 'Data',
      icon: Data,
      path: '/data'
    },

    // {
    //   sectionTitle: 'Gestão'
    // },
    // {
    //   title: 'Transações',
    //   icon: Cash,
    //   path: '/transactions',
    // },
    // {
    //   title: 'Register',
    //   icon: AccountPlusOutline,
    //   path: '/pages/register',
    //   openInNewTab: true
    // },
    // {
    //   title: 'Error',
    //   icon: AlertCircleOutline,
    //   path: '/pages/error',
    //   openInNewTab: true
    // },
    // {
    //   sectionTitle: 'User Interface'
    // },
    // {
    //   title: 'Typography',
    //   icon: FormatLetterCase,
    //   path: '/typography'
    // },
    // {
    //   title: 'Icons',
    //   path: '/icons',
    //   icon: GoogleCirclesExtended
    // },
    // {
    //   title: 'Cards',
    //   icon: CreditCardOutline,
    //   path: '/cards'
    // },
    // {
    //   title: 'Tables',
    //   icon: Table,
    //   path: '/tables'
    // },
    // {
    //   icon: CubeOutline,
    //   title: 'Form Layouts',
    //   path: '/form-layouts'
    // }
  ]
}

export default navigation
