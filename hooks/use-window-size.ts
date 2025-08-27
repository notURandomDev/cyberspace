import { useState, useEffect } from 'react';

interface WindowSize {
  width: number;
  height: number;
}

/**
 * 监听窗口大小变化的钩子
 * @returns {WindowSize} 包含当前窗口宽度和高度的对象
 */
export const useWindowSize = (): WindowSize => {
  const [windowSize, setWindowSize] = useState<WindowSize>({
    width: typeof window !== 'undefined' ? window.innerWidth : 0,
    height: typeof window !== 'undefined' ? window.innerHeight : 0,
  });

  useEffect(() => {
    // 确保在客户端执行
    if (typeof window === 'undefined') return;

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // 初始设置
    handleResize();

    // 监听窗口大小变化
    window.addEventListener('resize', handleResize);

    // 清理监听器
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

/**
 * 判断是否为小屏幕的钩子
 * @param {number} breakpoint - 断点宽度，默认为1024px
 * @returns {boolean} 是否为小屏幕
 */
export const useIsSmallScreen = (breakpoint: number = 1024): boolean => {
  const { width } = useWindowSize();
  return width < breakpoint;
};