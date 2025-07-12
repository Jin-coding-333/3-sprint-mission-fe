"use client";

import { useState } from 'react';

/**
 * 컴포넌트의 열림/닫힘 상태를 관리하는 커스텀 훅
 * 모달, 드롭다운, 사이드바, 툴팁 등 다양한 컴포넌트에서 사용 가능
 * @param {boolean} initialState - 초기 상태값 (기본값: false)
 * @returns {object} - { isOpen, open, close, toggle }
 */
export const useOpen = (initialState = false) => {
  const [isOpen, setIsOpen] = useState(initialState);

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const toggle = () => setIsOpen(prev => !prev);

  return {
    isOpen,
    open,
    close,
    toggle
  };
};