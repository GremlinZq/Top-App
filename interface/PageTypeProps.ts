export enum TopLevelCategory {
    Courses,
    Services,
    Books,
    Products
}

export interface TopPageHhData {
    count: number
    juniorSalary: number
    middleSalary: number
    seniorSalary: number
    updatedAt: Date
    _id: string
}

export interface TopPageAdvantages {
    _id: string
    title: string
    description: string
}

export interface TopPageModel {
    addresses: []
    advantages: Array<TopPageAdvantages>
    alias: string
    category: string
    categoryOn: string
    createdAt: Date
    firstCategory: 0
    hh: Array<TopPageHhData>
    metaDescription: string
    metaTitle: string
    qas: []
    secondCategory: string
    tags: Array<string>
    tagsTitle: string
    title: string
    updatedAt: Date
}