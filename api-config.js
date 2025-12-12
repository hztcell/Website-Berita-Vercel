const API_CONFIG = {
  BASE_URL: "https://berita-indo-api-next.vercel.app/api",
  
  CORS_PROXY: "https://api.allorigins.win/raw?url=",
  
  ENDPOINTS: [
    "cnn-news",
    "kumparan-news",
    "cnbc-news",
    "antara-news/terkini"
  ],
  
  getFirstEndpointUrl: function() {
    return `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${this.ENDPOINTS[0]}`)}`;
  },
  
  getEndpointUrl: function(endpointIndex) {
    return `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${this.ENDPOINTS[endpointIndex]}`)}`;
  },
  
  getAllEndpointUrls: function() {
    return this.ENDPOINTS.map(endpoint => 
      `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${endpoint}`)}`
    );
  },
  
  getUrl: function(endpoint, useProxy = true) {
    const url = `${this.BASE_URL}/${endpoint}`;
    return useProxy ? 
      `${this.CORS_PROXY}${encodeURIComponent(url)}` : 
      url;
  }
};

if (typeof window !== 'undefined') {
  window.API_CONFIG = API_CONFIG;
}