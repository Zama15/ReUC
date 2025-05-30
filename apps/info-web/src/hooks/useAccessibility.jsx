// src/hooks/useAccessibility.js
import { useState, useEffect, useMemo } from 'react';
import darkColorVariablesObject from "./dark";
import lightColorVariablesObject from "./light";

const useAccessibility = () => {
  // State for all accessibility features
  const [accessibilityState, setAccessibilityState] = useState(() => {
    const savedState = localStorage.getItem('accessibilityState');
    return savedState ? JSON.parse(savedState) : {
      lightMode: false,
      fontSize: 100, // percentage
      fontFamily: 'inter', // 'inter', 'arial', 'serif', 'mono'
      visionMode: 'normal', // 'normal', 'protanopia', 'deuteranopia', 'tritanopia'

      contrastMode: false,
      showImages: true,
      underlineLinks: false
    };
  });

  // Vision mode filters
  const visionFilters = useMemo(() => ({
    normal: 'none',
    protanopia: 'contrast(1.2) saturate(0.8) hue-rotate(10deg)',
    deuteranopia: 'contrast(1.1) saturate(0.7) hue-rotate(-10deg)',
    tritanopia: 'contrast(1.3) saturate(0.6) hue-rotate(30deg)'
  }), []);

  // Font family options
  const fontFamilies = useMemo(() => ({
    inter: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
    arial: 'Arial, Helvetica, sans-serif',
    serif: 'Georgia, "Times New Roman", serif',
    mono: 'Monaco, Menlo, "Courier New", monospace'
  }), []);

  // Color scheme variables for light/dark mode
  const colorSchemes = useMemo(() => ({
    dark: darkColorVariablesObject,
    light: lightColorVariablesObject,
  }), []);

  // Apply accessibility settings to the document
  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;

    // Update color scheme variables
    const scheme = accessibilityState.lightMode ? 'light' : 'dark';
    const schemeVars = colorSchemes[scheme];
    
    Object.entries(schemeVars).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    // Font size
    root.style.setProperty('--accessibility-font-scale', `${accessibilityState.fontSize / 100}`);

    // Font family
    root.style.setProperty('--accessibility-font-family', fontFamilies[accessibilityState.fontFamily]);

    // Vision mode filter
    root.style.setProperty('--accessibility-vision-filter', visionFilters[accessibilityState.visionMode]);

    // High contrast mode
    if (accessibilityState.contrastMode) {
      body.classList.add('accessibility-contrast');
    } else {
      body.classList.remove('accessibility-contrast');
    }

    // Hide images
    if (!accessibilityState.showImages) {
      body.classList.add('accessibility-hide-images');
    } else {
      body.classList.remove('accessibility-hide-images');
    }

    // Underline links
    if (accessibilityState.underlineLinks) {
      body.classList.add('accessibility-underline-links');
    } else {
      body.classList.remove('accessibility-underline-links');
    }

  }, [accessibilityState, visionFilters, fontFamilies, colorSchemes]);

  // Individual control functions
  const togglelightMode = () => {
    setAccessibilityState(prev => {
      const newState = {
        ...prev,
        lightMode: !prev.lightMode
      };
      localStorage.setItem('accessibilityState', JSON.stringify(newState));
      return newState;
    });
  };

  const increaseFontSize = () => {
    setAccessibilityState(prev => {
      const newState = {
        ...prev,
        fontSize: Math.min(prev.fontSize + 10, 200)
      };
      localStorage.setItem('accessibilityState', JSON.stringify(newState));
      return newState;
    });
  };

  const decreaseFontSize = () => {
    setAccessibilityState(prev => {
      const newState = {
        ...prev,
        fontSize: Math.max(prev.fontSize - 10, 70)
      };
      localStorage.setItem('accessibilityState', JSON.stringify(newState));
      return newState;
    });
  };

  const cycleFontFamily = () => {
    const families = Object.keys(fontFamilies);
    const currentIndex = families.indexOf(accessibilityState.fontFamily);
    const nextIndex = (currentIndex + 1) % families.length;

    setAccessibilityState(prev => {
      const newState = {
        ...prev,
        fontFamily: families[nextIndex]
      };
      localStorage.setItem('accessibilityState', JSON.stringify(newState));
      return newState;
    });
  };

  const setVisionMode = (mode) => {
    setAccessibilityState(prev => ({
      ...prev,
      visionMode: mode
    }));
  };

  const toggleImages = () => {
    setAccessibilityState(prev => ({
      ...prev,
      showImages: !prev.showImages
    }));
  };

  const toggleContrastMode = () => {
    setAccessibilityState(prev => ({
      ...prev,
      contrastMode: !prev.contrastMode
    }));
  };

  const toggleUnderlineLinks = () => {
    setAccessibilityState(prev => ({
      ...prev,
      underlineLinks: !prev.underlineLinks
    }));
  };

  const resetAccessibility = () => {
    setAccessibilityState({
      lightMode: false,
      fontSize: 100,
      fontFamily: 'inter',
      visionMode: 'normal',

      contrastMode: false,
      showImages: true,
      underlineLinks: false
    });
  };

  // Control mapping for easy access
  const controls = {
    'toggle-light': togglelightMode,
    'text-toggle': increaseFontSize,
    'reduce-text': decreaseFontSize,
    'toggle-font': cycleFontFamily,
    'reset-accessibility': resetAccessibility,

    'toggle-contrast': toggleContrastMode,
    'toggle-images': toggleImages,
    'toggle-underline': toggleUnderlineLinks,
  };

  return {
    accessibilityState,
    controls,
    setVisionMode,
    visionFilters: Object.keys(visionFilters)
  };
};

export default useAccessibility;
