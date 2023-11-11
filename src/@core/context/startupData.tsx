// ** React Imports
import { createContext, useState, ReactNode, useEffect } from 'react'



export type Row = {
  investmentStage: string
  id: string
  imageUrl: string
  description: string
  orgName: string
  operatingStatus: string
  contactEmail: string
  companyPhone: string
  totalFundingAmountCurrency: string
  totalFundingAmount: number
  similarCompanies: string
  shortDescription: string
  twitter: string
  website: string
  linkedin: string
  country: string
  hqLocation: string
  industries: string[]
  founders: string
  foundedDate: Date
  employeesRange: string
  headquartersRegions: string
  estimatedRevenueRange: number
  fundingStatus: string
  lastFundingDate: string
  lastFundingType: string
  numberOfInvestiments: number
  stockExchange: string
  ipoStatus: string
  ipoDate: string
  transactionName: string
  acquiredBy: string
  announcedDate: string
  priceCurrencyInUsd: number
  lastLeadershipHiringDate: string
  lastLayoffDate: string
  activelyHiring: string
  numberOfArticles: string
  hubTags: string
  numberOfFounders: number
  numberOfFundingRounds: number
  stockSymbol: string
  monthlyVisits: number
  monthlyVisitsGrowth: number
  patentsGranted: number
  mostPopularPatentClass: string
  numberOfApps: number
  downloadLastThirtyDays: number
}


export type Filters = {
  orgName: string[]
  operatingStatus: string[]
  website: string[]
  linkedin: string[]
  country: string[]
  hqLocation: string[]
  industries: string[]
  founders: string[]
  foundedDate: string[]
  employeesRange: string[]
  headquartersRegions: string[]
  estimatedRevenueRange: number[]
  fundingStatus: string[]
  lastFundingDate: string[]
  lastFundingType: string[]
  numberOfInvestiments: number[]
  stockExchange: string[]
  ipoStatus: string[]
  ipoDate: string[]
  transactionName: string[]
  acquiredBy: string[]
  announcedDate: string[]
  priceCurrencyInUsd: number[]
  lastLeadershipHiringDate: string[]
  lastLayoffDate: string[]
  activelyHiring: string[]
  numberOfArticles: string[]
  hubTags: string[]
  numberOfFounders: number[]
  numberOfFundingRounds: number[]
  stockSymbol: string[]
  monthlyVisits: number[]
  monthlyVisitsGrowth: number[]
  patentsGranted: number[]
  mostPopularPatentClass: string[]
  numberOfApps: number[]
  downloadLastThirtyDays: number[]
}

export type StartupsData = {
  data: Row[]
  limit: number
  page: number
  total: number
  totalPages: number
}

export type StartupContextValue = {
  startupsData: StartupsData
  searchText: string
  filteredData: StartupsData
  selectedData: StartupsData
  saveFiltered: (filtered: StartupsData) => void
  filterData: (filter: string) => void
  saveSearchText: (search: string) => void
  clearFilters: () => void
  saveSelected: (selected: StartupsData) => void
  saveData: (updatedRows: StartupsData) => void
  searchData: (searchValue: string, page:number) => void
  multipleFilterSearch: (filter: any) => Row[]
  cleanFilteredData: (filterField?: any) => void,
  filters: Filters,
}



const defaultFilters: Filters = {
  orgName: [],
  operatingStatus: [],
  website: [],
  linkedin: [],
  country: [],
  hqLocation: [],
  industries: [],
  founders: [],
  foundedDate: [],
  employeesRange: [],
  headquartersRegions: [],
  estimatedRevenueRange: [],
  fundingStatus: [],
  lastFundingDate: [],
  lastFundingType: [],
  numberOfInvestiments: [],
  stockExchange: [],
  ipoStatus: [],
  ipoDate: [],
  transactionName: [],
  acquiredBy: [],
  announcedDate: [],
  priceCurrencyInUsd: [],
  lastLeadershipHiringDate: [],
  lastLayoffDate: [],
  activelyHiring: [],
  numberOfArticles: [],
  hubTags: [],
  numberOfFounders: [],
  numberOfFundingRounds: [],
  stockSymbol: [],
  monthlyVisits: [],
  monthlyVisitsGrowth: [],
  patentsGranted: [],
  mostPopularPatentClass: [],
  numberOfApps: [],
  downloadLastThirtyDays: []
}




// ** Create Context
export const StartupContext = createContext<StartupContextValue>({
  saveData: () => null,
  filterData: () => null,
  saveSearchText: () => null,
  searchData: () => null,
  saveFiltered: () => null,
  saveSelected: () => null,
  multipleFilterSearch: () => [],
  cleanFilteredData: () => null,
  clearFilters: () => null,
  searchText:"",
  startupsData: {
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  },
  filteredData: {
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  },
  selectedData: {
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  },
  filters: defaultFilters,
})


export const StartupProvider = ({ children }: { children: ReactNode }) => {
  // ** State

  const [searchText, setSearchText] = useState("")
  const [startupsData, setStartupsData] = useState<StartupsData>({
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  });
  const [filteredData, setFilteredData] = useState<StartupsData>({
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  });
  const [selectedData, setSelectedData] = useState<StartupsData>({
    data: [],
    limit: 0,
    page: 0,
    total: 0,
    totalPages: 0
  });
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const saveData = (updatedRows: StartupsData) => {
    setStartupsData(updatedRows)
  }

  const saveFiltered = (filtered: StartupsData) => {
    setFilteredData(filtered)
  }

  const saveSearchText = (search: string) => {
    setSearchText(search)
  }

  const saveSelected = (selected: StartupsData) => {
    setSelectedData(selected)
  }

  useEffect(() => {
    getData({ page: "1", limit: "8" })
  }, [])


  const getData = (pagination: { page: string, limit: string }): any => {
    const { page, limit } = pagination
    fetch(`https://app.n-sights.ai/backend-api/enterprises?limit=${limit}&page=${page}`)
      .then(response => response.json())
      .then(data => {
        saveData(data)
        setFilteredData(data)
      })
  }

  const searchData = (searchValue: string, page:number) => {
    
    const searchPage = page + 1
    if (searchValue.length===0) {
      fetch(`https://app.n-sights.ai/backend-api/enterprises?limit=8&page=1`)
      .then(response => response.json())
      .then(data => {
        saveData(data)
        setFilteredData(data)
      })
      
return
    }

    fetch(`https://app.n-sights.ai/backend-api/enterprises/search?string=${searchValue}&limit=8&page=${searchPage}`)
      .then(response => response.json())
      .then(data => {
        saveData(data)
        setFilteredData(data)
      })
  };

  const filterData = (filter: string) => {
    const sanitizedString = filter.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
    const searchRegex = new RegExp(`\\.*${sanitizedString}.*`, "ig");
    const filteredRows = startupsData.data.filter((o: any) => {
      return Object.keys(o).some((k: any) => {
        return searchRegex.exec(o[k].toString().trim());
      });
    });
    setFilteredData({ ...filteredData, data: filteredRows })
  };

  const multipleFilterSearch = (filter: any) => {
    const newFilter: Filters = Object.assign({}, filters, filter)
    setFilters(newFilter)
    const filteredRows = startupsData.data.filter((row) => {
      return Object.keys(row).some((k) => {
        if (newFilter[k as keyof Filters] === undefined || !newFilter[k as keyof Filters].includes(row[k as keyof Row].toString() as never)) {
          return false
        }

        return true
      });
    });

    return filteredRows
  }

  const cleanFilteredData = (filterField?: any) => {

    if (filterField) {
      const filter = { [filterField]: [] }
      const dataToSave = multipleFilterSearch(filter)
      if (dataToSave.length === 0) {
        saveFiltered({ ...startupsData })

        return
      }
      saveFiltered({ ...startupsData, data: dataToSave })

      return
    }
    setStartupsData(startupsData);
  };

  const clearFilters = () => {
    setFilters(defaultFilters)
  }

  return <StartupContext.Provider value={{ saveSelected, filterData, clearFilters, selectedData, saveFiltered, filteredData, startupsData, filters,searchText, saveData, saveSearchText, searchData, cleanFilteredData, multipleFilterSearch }}>{children}</StartupContext.Provider>
}

export const StartupConsumer = StartupContext.Consumer
