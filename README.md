"# Portal Berita - Web Berita Vercel

Portal berita sederhana yang menampilkan berita terkini dari berbagai sumber berita Indonesia.

## Fitur
- **Beranda**: Menampilkan berita dari sumber utama (CNBC)
- **Halaman Terkini**: Menampilkan 10 berita terbaru hari ini dari berbagai sumber
- **Responsif**: Desain yang optimal untuk desktop dan mobile
- **Dark Mode**: Dukungan tema gelap otomatis berdasarkan preferensi sistem

## Struktur Proyek
```
Web-Berita-Vercel/
├── index.html          # Halaman beranda
├── latest.html         # Halaman berita terkini
├── vercel.json         # Konfigurasi deploy Vercel
├── api-config.js       # Konfigurasi API endpoints
├── README.md           # Dokumentasi proyek
├── script/
│   ├── home.js         # JavaScript untuk halaman beranda
│   └── latest.js       # JavaScript untuk halaman terkini
└── style/
    ├── home.css        # CSS untuk halaman beranda
    └── latest.css      # CSS untuk halaman terkini
```

## API yang Digunakan
Proyek ini menggunakan [Berita Indo API](https://github.com/satyawikananda/berita-indo-api) dengan endpoint:
- `cnbc-news`
- `cnn-news` 
- `republika-news`
- `tempo-news`
- `antara-news`

## Cara Deploy ke Vercel

### Metode 1: Deploy via CLI
1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Login ke Vercel:
   ```bash
   vercel login
   ```

3. Deploy proyek:
   ```bash
   vercel
   ```

### Metode 2: Deploy via GitHub
1. Push proyek ke repository GitHub
2. Login ke [vercel.com](https://vercel.com)
3. Pilih "Import Project"
4. Pilih repository yang sesuai
5. Vercel akan otomatis mendeteksi konfigurasi dan mendeploy

### Metode 3: Deploy via Drag & Drop
1. Login ke [vercel.com](https://vercel.com)
2. Pilih "Import Project"
3. Pilih "Drag & Drop"
4. Tarik folder proyek ke area yang disediakan

## Konfigurasi
File `vercel.json` sudah dikonfigurasi untuk:
- Static file hosting (HTML, CSS, JS)
- Routing yang benar untuk SPA-like navigation
- Cache headers untuk performa optimal

## Pengembangan Lokal
1. Clone repository
2. Buka file HTML langsung di browser atau gunakan live server:
   ```bash
   # Menggunakan Python
   python3 -m http.server 8000
   
   # Menggunakan Node.js dengan http-server
   npx http-server
   ```

## Lisensi
Proyek ini dibuat untuk tujuan edukasi dan dapat digunakan secara bebas.

## Kontribusi
Dibuat dengan ❤️ oleh Karteho"