import {create} from 'zustand';

interface AppStatusState {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

const useAppStatusStore = create<AppStatusState>()(set => ({
  isLoading: false,
  setLoading: (isLoading: boolean) => set({isLoading}),
}));

export default useAppStatusStore;
