
export interface iCategory {
  label: string
  icon: string
  color: string
}
export interface iCategory {
  _id: string
  color: string
  description: string
  icon: string
  label: string
  name: string
}

export interface iTransaction {
  _id: string
  amount: number
  category: iCategory
  date: string
  description: string
  user: string
}

