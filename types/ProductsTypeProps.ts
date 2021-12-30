export interface ProductsPageCharacteristics {
    value: string
    name: string
}

export interface ProductsPageReviewModel {
    _id: string
    name: string
    title: string
    description: string
    rating: number
    createAt: Date
}

export interface ProductsPageModel {
    advantages: string
    categories: Array<string>
    characteristics: Array<ProductsPageCharacteristics>
    createdAt: Date
    credit: number
    description: string
    disAdvantages: string
    html: string
    image: string
    initialRating: number
    link: string
    oldPrice: number
    price: number
    reviewAvg?: null | number
    reviewCount: number
    reviews: Array<ProductsPageReviewModel>
    tags: Array<string>
    title: string
    updatedAt: string
    __v: number
    _id: string
}