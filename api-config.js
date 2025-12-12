// Konfigurasi API untuk Portal Berita
// File ini berisi URL API dan daftar endpoint yang digunakan

const API_CONFIG = {
  // Base URL untuk API berita
  BASE_URL: "https://berita-indo-api.vercel.app/v1",
  
  // Daftar endpoint/sumber berita
  ENDPOINTS: [
    "cnbc-news",
    "cnn-news",
    "republika-news",
    "tempo-news",
    "antara-news"
  ],
  
  // URL lengkap untuk endpoint pertama (digunakan di home.js)
  getFirstEndpointUrl: function() {
    return `${this.BASE_URL}/${this.ENDPOINTS[0]}`;
  },
  
  // URL untuk endpoint tertentu
  getEndpointUrl: function(endpointIndex) {
    return `${this.BASE_URL}/${this.ENDPOINTS[endpointIndex]}`;
  },
  
  // Semua URL endpoint
  getAllEndpointUrls: function() {
    return this.ENDPOINTS.map(endpoint => `${this.BASE_URL}/${endpoint}`);
  }
};

// Export untuk penggunaan di browser
if (typeof window !== 'undefined') {
  window.API_CONFIG = API_CONFIG;
}