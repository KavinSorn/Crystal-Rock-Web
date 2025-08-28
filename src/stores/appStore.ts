import { create } from 'zustand'
import { PageType, Hostel } from '@/types'

interface AppState {
  currentPage: PageType
  modalData: Hostel | null
  isMenuOpen: boolean
  currentTestimonial: number
  setCurrentPage: (page: PageType) => void
  setModalData: (data: Hostel | null) => void
  setIsMenuOpen: (isOpen: boolean) => void
  setCurrentTestimonial: (index: number) => void
  toggleMenu: () => void
  closeModal: () => void
}

export const useAppStore = create<AppState>((set) => ({
  currentPage: 'home',
  modalData: null,
  isMenuOpen: false,
  currentTestimonial: 0,
  
  setCurrentPage: (page) => set({ currentPage: page }),
  setModalData: (data) => set({ modalData: data }),
  setIsMenuOpen: (isOpen) => set({ isMenuOpen: isOpen }),
  setCurrentTestimonial: (index) => set({ currentTestimonial: index }),
  
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
  closeModal: () => set({ modalData: null }),
}))
