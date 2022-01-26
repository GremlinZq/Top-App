export interface MenuPage {
    alias: string
    category: string
    title: string
    _id: string
}

export interface MenuItem {
    _id: {
        secondCategory: string
    }
    pages: Array<MenuPage>
}