const PerformanceConfig = {
  LAZY_LOADING: {
    THRESHOLD: 0.1,
    ROOT_MARGIN: '50px',
    DEBOUNCE_TIME: 100
  },
  
  INFINITE_SCROLL: {
    NEWS_PER_PAGE: 9,
    LOAD_THRESHOLD: 200,
    SENTINEL_MARGIN: '100px',
    MIN_REQUEST_INTERVAL: 500
  },
  
  IMAGES: {
    PLACEHOLDER: 'https://via.placeholder.com/400x225?text=No+Image',
    SUPPORTED_FORMATS: ['webp', 'jpg', 'jpeg', 'png'],
    QUALITY: 80
  },
  
  CACHE: {
    API_CACHE_DURATION: 10 * 60 * 1000,
    CACHE_PREFIX: 'news_cache_'
  },
  
  // MONITORING: {
  //   ENABLE_LOGGING: true,
  //   TRACK_LOAD_TIMES: true
  // }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceConfig;
} else {
  window.PerformanceConfig = PerformanceConfig;
}