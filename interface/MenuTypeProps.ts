import {TopLevelCategory} from "./PageTypeProps";

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

export interface FirstLevelMenuItem {
    route: string
    name: string
    icon: JSX.Element
    id: TopLevelCategory
}