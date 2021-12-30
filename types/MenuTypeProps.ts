export interface Id {
    secondCategory: string
}

export interface MenuPage {
    alias: string
    category: string
    title: string
    _id: string
}

export interface MenuItem {
    _id: Id
    pages: Array<MenuPage>
}