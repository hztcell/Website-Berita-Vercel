// Fungsi untuk menampilkan menu mobile
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (mobileMenuBtn && mobileNav) {
    mobileMenuBtn.addEventListener('click', function() {
      const isHidden = mobileNav.hasAttribute('hidden');
      
      if (isHidden) {
        mobileNav.removeAttribute('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        mobileMenuBtn.innerHTML = '✕'; 
      } else {
        mobileNav.setAttribute('hidden', '');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
      }
    });
    
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.setAttribute('hidden', '');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
      });
    });
    
    document.addEventListener('click', function(event) {
      const isClickInsideNav = mobileNav.contains(event.target);
      const isClickOnButton = mobileMenuBtn.contains(event.target);
      
      if (!isClickInsideNav && !isClickOnButton && !mobileNav.hasAttribute('hidden')) {
        mobileNav.setAttribute('hidden', '');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
      }
    });
    
    mobileMenuBtn.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && !mobileNav.hasAttribute('hidden')) {
        mobileNav.setAttribute('hidden', '');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        mobileMenuBtn.innerHTML = '☰';
        mobileMenuBtn.focus();
      }
    });
  }

    /* ---------- fungsi bantu ---------- */
  const latestBox = document.getElementById('content-latest');

  // Template untuk kartu berita
  const cardTemplate = ({ title, link, contentSnippet, isoDate, source, image }) => {
    const time = new Date(isoDate).toLocaleString('id-ID');
    return `
      <a class="card" href="${link}" target="_blank" rel="noopener">
        <img src="${image?.large || image || 'https://via.placeholder.com/400x225?text=No+Image'}"
             alt="${title}" onerror="this.style.display='none'" />
        <div class="card-body">
          <h3 class="card-title">${title}</h3>
          <p class="card-desc">${contentSnippet || ''}</p>
          <div class="card-footer">${source} · ${time}</div>
        </div>
      </a>`;
  };

  // Konfigurasi API - gunakan dari window.API_CONFIG atau default ke API baru
  const BASE_URL = window.API_CONFIG ? window.API_CONFIG.BASE_URL : 
    'https://berita-indo-api-next.vercel.app/api';
    
  const CORS_PROXY = window.API_CONFIG ? window.API_CONFIG.CORS_PROXY :
    'https://corsproxy.io/?';  
  
  const LIST = window.API_CONFIG ? window.API_CONFIG.ENDPOINTS : 
    ['cnn-news', 'kumparan-news', 'cnbc-news', 'antara-news/terkini'];

  // Filter berita hari ini
  const today = new Date();
  const start = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0);
  const end   = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 23, 59, 59);

  const isToday = iso => {
    const d = new Date(iso);
    return d >= start && d <= end;
  };

  // Fungsi untuk mengambil berita dari API dengan CORS proxy
  const fetchNews = async slug => {
    try {
      const url = `${BASE_URL}/${slug}`;
      const proxyUrl = `${CORS_PROXY}${encodeURIComponent(url)}`;
      
      const res = await fetch(proxyUrl);
      if (!res.ok) throw new Error(res.status);
      const json = await res.json();
      return (json.data || json).filter(it => isToday(it.isoDate)); // Support both formats
    } catch (e) {
      console.error('Gagal fetch', slug, e);
      return [];
    }
  };

  // Fungsi untuk memuat berita hari ini
  const loadTodayNews = async () => {
    // Tampilkan loading state
    latestBox.innerHTML = `
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
      <div class="skeleton-card"></div>
    `;
    
    const all = await Promise.all(LIST.map(fetchNews));
    const flat = all.flat();
    const top10 = flat
      .sort((a, b) => new Date(b.isoDate) - new Date(a.isoDate))
      .slice(0, 10);
      
    if (top10.length > 0) {
      latestBox.innerHTML = top10.map(cardTemplate).join('');
    } else {
      latestBox.innerHTML = '<div class="news-error">Tidak ada berita terkini hari ini.</div>';
    }
  };

  // Muat berita saat halaman siap
  loadTodayNews();
  
  // Refresh otomatis setiap 5 menit
  setInterval(loadTodayNews, 5 * 60 * 1000);
});