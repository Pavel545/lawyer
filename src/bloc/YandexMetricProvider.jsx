// src/components/YandexMetricProvider.js
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { initYandexMetric, hitPage, getCurrentDomain, getMetricConfig } from '../utils/metrics';

export const YandexMetricProvider = ({ children }) => {
  const location = useLocation();
  
  // Инициализация метрики при первом рендере
  useEffect(() => {
    try {
      const counterId = initYandexMetric();
      const domain = getCurrentDomain();
      const config = getMetricConfig();
      
      console.log('=== Yandex Metric initialized ===', {
        domain,
        counterId,
        config
      });
    } catch (error) {
      console.error('Error initializing Yandex Metric:', error);
    }
  }, []); // Пустой массив зависимостей - только при монтировании
  
  // Отслеживаем изменение роутов в SPA
  useEffect(() => {
    try {
      // Отправляем просмотр страницы при изменении URL
      const fullUrl = window.location.pathname + window.location.search + window.location.hash;
      hitPage(fullUrl);
    } catch (error) {
      console.error('Error sending page hit:', error);
    }
  }, [location]); // Зависит от location
  
  return React.createElement(React.Fragment, null, children);
};