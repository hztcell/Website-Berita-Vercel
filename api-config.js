// Konfigurasi API untuk Portal Berita
// File ini berisi URL API dan daftar endpoint yang digunakan

const API_CONFIG = {
  // Base URL untuk API berita baru
  BASE_URL: "https://berita-indo-api-next.vercel.app/api",
  
  // Daftar endpoint/sumber berita baru
  ENDPOINTS: [
    "cnn-news",
    "kumparan-news",
    "cnbc-news",
    "antara-news/terkini"
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