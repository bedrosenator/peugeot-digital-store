export type TError = {
  status: number,
  statusText: string,
};

export type TModel = {
  code: string,
  imageUrl: string,
  name: string,
  priceFrom: string,
};

export type TModelsList = {
  data: TModel[]
}

export interface IColor {
  name: string,
  imageUrl: string,
  price: number,
  iconUrl: string,
}

export interface ITrim {
  colors: IColor[],
  name: string,
  price: string,
}

export interface IModelDetails {
  code: string,
  // imageUrl: string,
  name: string,
  // priceFrom: string,
  trims: ITrim[]
};
