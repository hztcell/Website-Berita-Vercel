// Konfigurasi API untuk Portal Berita
// File ini berisi URL API dan daftar endpoint yang digunakan

const API_CONFIG = {
  // Base URL untuk API berita baru dengan CORS proxy
  BASE_URL: "https://berita-indo-api-next.vercel.app/api",
  
  // CORS proxy untuk menghindari masalah CORS di browser
  CORS_PROXY: "https://corsproxy.io/?",
  
  // Daftar endpoint/sumber berita baru
  ENDPOINTS: [
    "cnn-news",
    "kumparan-news",
    "cnbc-news",
    "antara-news/terkini"
  ],
  
  // URL lengkap untuk endpoint pertama dengan CORS proxy
  getFirstEndpointUrl: function() {
    return `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${this.ENDPOINTS[0]}`)}`;
  },
  
  // URL untuk endpoint tertentu dengan CORS proxy
  getEndpointUrl: function(endpointIndex) {
    return `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${this.ENDPOINTS[endpointIndex]}`)}`;
  },
  
  // Semua URL endpoint dengan CORS proxy
  getAllEndpointUrls: function() {
    return this.ENDPOINTS.map(endpoint => 
      `${this.CORS_PROXY}${encodeURIComponent(`${this.BASE_URL}/${endpoint}`)}`
    );
  },
  
  // Fungsi untuk mendapatkan URL dengan atau tanpa proxy
  getUrl: function(endpoint, useProxy = true) {
    const url = `${this.BASE_URL}/${endpoint}`;
    return useProxy ? 
      `${this.CORS_PROXY}${encodeURIComponent(url)}` : 
      url;
  }
};

// Export untuk penggunaan di browser
if (typeof window !== 'undefined') {
  window.API_CONFIG = API_CONFIG;
}