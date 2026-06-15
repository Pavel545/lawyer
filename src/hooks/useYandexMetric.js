// src/hooks/useYandexMetric.js
import { useCallback } from 'react';
import { reachGoal, hitPage, getCurrentDomain, getMetricConfig } from '../utils/metrics';

export const useYandexMetric = () => {
  const sendGoal = useCallback((target, params = {}) => {
    reachGoal(target, params);
  }, []);
  
  const sendHit = useCallback((url) => {
    hitPage(url);
  }, []);
  
  const getDomain = useCallback(() => {
    return getCurrentDomain();
  }, []);
  
  const getConfig = useCallback(() => {
    return getMetricConfig();
  }, []);
  
  return {
    reachGoal: sendGoal,
    hitPage: sendHit,
    getCurrentDomain: getDomain,
    getConfig: getConfig
  };
};