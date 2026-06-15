
// Конфигурация метрик для разных доменов
const metricsConfig = {
  // Основной домен
  'xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    counterId: '106349009', // Замените на ваш ID счетчика
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true,
      ut: 'noindex'
    }
  },
  // Поддомен
  'xn--80adxhks.xn----8sboiek0ahdgfjqv0l.xn--p1ai': {
    counterId: '108708899', // Замените на ID счетчика для поддомена
    options: {
      clickmap: true,
      trackLinks: true,
      accurateTrackBounce: true,
      webvisor: true,
      trackHash: true,
      ut: 'noindex'
    }
  }
};

// Получить текущий домен
export const getCurrentDomain = () => {
  if (typeof window === 'undefined') return null;
  return window.location.hostname;
};

// Получить конфигурацию метрики для текущего домена
export const getMetricConfig = () => {
  const domain = getCurrentDomain();
  const config = metricsConfig[domain];
  
  if (!config) {
    console.warn(`No metric config found for domain: ${domain}, using default`);
    // fallback на основной домен
    return metricsConfig['xn----8sboiek0ahdgfjqv0l.xn--p1ai'];
  }
  
  return config;
};

// Инициализация метрики
export const initYandexMetric = () => {
  const config = getMetricConfig();
  if (!config || !config.counterId) {
    console.warn('No counterId found for current domain');
    return null;
  }
  
  // Проверяем, не инициализирована ли уже метрика
  if (window.ym) {
    console.log('Yandex Metric already initialized');
    return config.counterId;
  }
  
  // Оригинальный код Яндекс.Метрики, но без ошибок ESLint
  (function(m, e, t, r, i, k, a) {
    m[i] = m[i] || function() {
      (m[i].a = m[i].a || []).push(arguments);
    };
    m[i].l = 1 * new Date();
    k = e.createElement(t);
    a = e.getElementsByTagName(t)[0];
    k.async = 1;
    k.src = r;
    if (a && a.parentNode) {
      a.parentNode.insertBefore(k, a);
    }
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js', 'ym');
  
  // Инициализируем счетчик
  window.ym(config.counterId, 'init', config.options);
  
  console.log(`Yandex Metric initialized with counter: ${config.counterId} for domain: ${getCurrentDomain()}`);
  
  return config.counterId;
};

// Отправка цели
export const reachGoal = (target, params = {}) => {
  const config = getMetricConfig();
  if (!config || !config.counterId) {
    console.warn('Cannot send goal: no counterId');
    return;
  }
  
  if (window.ym) {
    window.ym(config.counterId, 'reachGoal', target, params);
    console.log(`Goal sent: ${target}`, params);
  } else {
    console.warn('Yandex Metric not initialized yet');
  }
};

// Отправка просмотра страницы (для SPA)
export const hitPage = (url) => {
  const config = getMetricConfig();
  if (!config || !config.counterId) return;
  
  if (window.ym) {
    window.ym(config.counterId, 'hit', url);
    console.log(`Page hit: ${url}`);
  }
};