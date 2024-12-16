import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

/**
 * api 호출 내역을을 전역으로 관리하는 store
 *
 * - 호출 내역은 DB에 저장해야하는데, 따로 없으므로 로컬스토리지를 persist로 사용
 */

interface HistoryStore {
  historyList: ApiHistoryData[];
  add: (history: ApiHistoryData) => void;
  bookmark: (historyId: number) => void;
  undoBookmark: (hisotryId: number) => void;
}

const useHistoryStore = create<HistoryStore>()(
  persist(
    (set) => ({
      historyList: [],
      /** 호출 내역 추가 */
      add: (history) =>
        set((state) => ({
          historyList: [...state.historyList, history],
        })),
      /** 북마크 추가 */
      bookmark: (historyId) =>
        set((state) => ({
          historyList: state.historyList.map((item) =>
            item.historyId === historyId ? { ...item, isBookmarked: true } : item,
          ),
        })),
      /** 북마크 해제 */
      undoBookmark: (historyId) =>
        set((state) => ({
          historyList: state.historyList.map((item) =>
            item.historyId === historyId ? { ...item, isBookmarked: false } : item,
          ),
        })),
    }),
    {
      name: "history-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);

export default useHistoryStore;
