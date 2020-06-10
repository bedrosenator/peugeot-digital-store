export type TError = {
  status: number,
  statusText: string,
} | null;

export interface IModel {
  code: string,
  imageUrl: string,
  name: string,
  priceFrom: string,
}

export interface IColor {
  name: string,
  imageUrl: string,
  price: number,
  iconUrl: string,
}

export interface ICheckoutModel {
  modelName: string,
  colorName: string,
  trimName: string,
}

export interface ITrim {
  colors: IColor[],
  name: string,
  price: string,
}

export interface IModelDetails {
  code: string,
  name: string,
  trims: ITrim[],
}
