import {create} from 'zustand';

interface SelectedTabState {
  activeTab: number;
  setActiveTab: (activeTab: number) => void;
}

const useSelectedTabStore = create<SelectedTabState>()(set => ({
  activeTab: 1,
  setActiveTab: (activeTab: number) => set({activeTab}),
}));

export default useSelectedTabStore;
