// src/hooks/useDomainContent.js
import { useMemo } from 'react';
import { getCurrentDomain } from '../utils/metrics';

// Конфигурация контента для разных доменов
const contentConfig = {
  'xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    city: {
      in: 'Ульяновске',     // в Ульяновске
      from: 'Ульяновска',  // из Ульяновска
      name: 'Ульяновск',   // Ульяновск
    },
    logo:{
      logoG:"/img/logo/logo4.png",
      logoV:"/img/logo/logo2.png",
    }

  },

  'xn--80adxhks.xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    city: {
      in: 'Москве',
      from: 'Москвы',
      name: 'Москва',
    },
     logo:{
      logoG:"/img/anivia/logo-g.png",
      logoV:"/img/anivia/logo-v.png",
    }
  }
};

// Дефолтный контент (если домен не найден)
const defaultContent = contentConfig['xn----8sboiek0ahdgfjqv0l.xn--p1ai'];

export const useDomainContent = () => {
  const currentDomain = getCurrentDomain();

  const content = useMemo(() => {
    return contentConfig[currentDomain] || defaultContent;
  }, [currentDomain]);

  const replaceTemplate = (text = '') => {
    return text.replace(/\{\{(.*?)\}\}/g, (_, key) => {
      const keys = key.trim().split('.');
      let value = content;

      for (const k of keys) {
        value = value?.[k];
      }

      return value || '';
    });
  };

  return {
    ...content,
    replaceTemplate,
  };
};