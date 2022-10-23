import { defineStore } from 'pinia';
import type { ModalConfig } from '@/types/modal.interface';

export const useModalStore = defineStore('modal', () => {
  const modals: Record<string, ModalConfig> = {};

  const openModal = (key: string, modalConfig: ModalConfig) => {
    modals[key] = modalConfig;
  };

  return {
    modals,
    openModal,
  };
});
