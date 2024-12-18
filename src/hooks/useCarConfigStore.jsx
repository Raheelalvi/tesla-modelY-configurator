import { create } from "zustand";

const useCarConfigStore = create((set) => ({
  exteriorColor: "Grey",
  interiorColor: "Dark",
  wheels: "Standard",
  fullSelfDriving: false,
  performancePackage: false,
  centerConsoleTray: false,
  sunShade: false,
  interiorLiners: false,
  totalPrice: 0,

  setExteriorColor: (color) =>
    set(() => ({
      exteriorColor: color,
    })),

  setInteriorColor: (color) =>
    set(() => ({
      interiorColor: color,
    })),
  setWheels: (wheels) =>
    set(() => ({
      wheels,
    })),
  toggleFullSelfDriving: () =>
    set((state) => ({
      fullSelfDriving: !state.fullSelfDriving,
    })),
  togglePerformancePackage: () =>
    set((state) => ({ performancePackage: !state.performancePackage })),
  toggleCenterConsoleTray: () =>
    set((state) => ({ centerConsoleTray: !state.centerConsoleTray })),
  toggleSunshade: () => set((state) => ({ sunShade: !state.sunShade })),
  toggleinteriorLiners: () =>
    set((state) => ({ interiorLiners: !state.interiorLiners })),
  setTotalPrice: (price) => set({ totalPrice: price }),
}));

export default useCarConfigStore;
