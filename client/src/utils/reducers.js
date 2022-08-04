import {
  useReducer
} from "react";
import {
  UPDATE_PRODUCTS,
  UPDATE_EXERCISES,
  ADD_TO_CART,
  UPDATE_CART_QUANTITY,
  REMOVE_FROM_CART,
  ADD_TO_FAVORITE,
  ADD_MULTIPLE_TO_CART,
  ADD_MULTIPLE_TO_FAVORITES,
  REMOVE_FROM_FAVORITE,
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_PRODUCTS:
      return {
        ...state,
        products: [...action.products],
      };

    case ADD_TO_CART:
      return {
        ...state,
        cartOpen: true,
        cart: [...state.cart, action.product],
    };

    case ADD_TO_FAVORITE:
      return {
        ...state,
        favorite: [...state.favorite, action.product],
    };

    case ADD_MULTIPLE_TO_CART:
      return {
        ...state,
        cart: [...state.cart, ...action.products],
    };

    case ADD_MULTIPLE_TO_FAVORITES:
      return {
        ...state,
        favorite: [...state.favorite, ...action.products],
      };

    case UPDATE_CART_QUANTITY:
      return {
        ...state,
        cartOpen: true,
          cart: state.cart.map(product => {
            if (action._id === product._id) {
              product.purchaseQuantity = action.purchaseQuantity
            }
            return product
          })
      };

    case REMOVE_FROM_CART:
      let newState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        cartOpen: newState.length > 0,
          cart: newState
    };

    case REMOVE_FROM_FAVORITE:
      let anotherState = state.cart.filter(product => {
        return product._id !== action._id;
      });

      return {
        ...state,
        favorite: anotherState
    };
    
    case UPDATE_EXERCISES:
      return {
        ...state,
        exercises: [...action.exercises],
      };

    case UPDATE_CATEGORIES:
      return {
        ...state,
        categories: [...action.categories],
      };

    case UPDATE_CURRENT_CATEGORY:
      return {
        ...state,
        currentCategory: action.currentCategory
      }

      default:
        return state;
  }
};

export function useProductReducer(initialState) {
  return useReducer(reducer, initialState)
}