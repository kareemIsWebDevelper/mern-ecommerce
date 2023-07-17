import React, {SetStateAction} from "react";

export interface Category {
  name: string;
  description: string;
  image: string;
}

export interface Product {
  name: string;
  categoryId: string;
  description: string;
  quantity: string;
  price: string;
  discount: string;
  color: string;
  image: string;
}

export interface Products {
  _id: string
  name: string;
  categoryId: string;
  description: string;
  quantity: string;
  price: string;
  discount: string;
  color: string;
  image: string;
  category: {
    _id: string;
    name: string;
    description: string;
  }
}

export interface CartI {
  _id: string;
  product: {
    _id: string;
    name: string;
    category: string;
    description: string;
    quantity: string;
    price: string;
    discount: string;
    color: string;
    image: string;
  };
}

export interface CartProduct {
  _id: string;
  name: string;
  category: string;
  description: string;
  discount: number;
  image: string;
  price: number;
  quantity: number;
}

export interface CategoryInterface {
  _id: string;
  name: string;
  description: string;
  image: string;
}


export interface CheckoutButtonProps {
  toggleCheckoutList: boolean;
  setToggleCheckoutList: React.Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
}

export interface CheckoutCardProps {
  totalDiscount: number;
  toggleCheckoutList: boolean;
  setToggleCheckoutList: React.Dispatch<SetStateAction<boolean>>;
}