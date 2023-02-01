export default interface Price {
  id: number,
  description: string,
  price: number,
  discountPrice: number,
  saloonPrice?: number,
  discSalonPrice?: number,
}
