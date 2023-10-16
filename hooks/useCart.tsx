import { create } from 'zustand';
import { toast } from 'react-hot-toast';
import { persist, createJSONStorage } from "zustand/middleware";

interface Product {
  id: number,
  title: string,
  price: number,
  description: string,
  img: string,
  createdAt: string,
  categoryId: number,
  archived: boolean,
  featured: boolean,
  sizeId: number,
  storeId: string
};

interface CartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (id: number) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<CartStore>((set, get) => ({
    items: [],
    addItem: (data: Product) => {
      const currentItems = get().items;
      const existingItem = currentItems.find((item) => item.id === data.id);

      if (existingItem) {
        return toast('Item already in cart.');
      }

      set({ items: [...get().items, data] });
      toast.success('Item added to cart.');
    },
    removeItem: (id: number) => {
      set({ items: [...get().items.filter((item) => item.id !== id)] });
      toast.success('Item removed from cart.');
    },
    removeAll: () => set({ items: [] }),
  }), {
    name: 'cart-storage',
    storage: createJSONStorage(() => localStorage)
  }));

export default useCart;