// DATA SIMULASI — bukan data resmi Desa Lanto. Ganti dengan API Laravel nantinya.
export const rp=n=>'Rp'+Math.round(n||0).toLocaleString('id-ID');
export const sum=(a,k)=>a.reduce((s,x)=>s+Number(x[k]||0),0);
const M=1e6;let i=0;
const P=(tahun,bidang,nama,a,r)=>({id:++i,tahun,bidang,nama,anggaran:a*M,realisasi:r*M});
export const seed={
programs:[
P(2026,'Pemerintahan','Operasional Pemerintahan & Penghasilan Tetap',310,214),
P(2026,'Pembangunan','Rabat Beton Jalan Dusun & Perbaikan Jaringan Air',520,301),
P(2026,'Kemasyarakatan','Posyandu, Pembinaan Pemuda & Kegiatan Adat',140,88),
P(2026,'Pemberdayaan','Pelatihan Tenun, Perikanan & Pertanian',190,97),
P(2026,'Kebencanaan','Dana Darurat & Penanganan Bencana',90,40),
P(2025,'Pemerintahan','Operasional Pemerintahan & Penghasilan Tetap',295,288),
P(2025,'Pembangunan','Pembangunan Drainase & Talud Pantai',480,471),
P(2025,'Kemasyarakatan','Posyandu, Pembinaan Pemuda & Kegiatan Adat',135,130),
P(2025,'Pemberdayaan','Pelatihan Tenun & Perikanan',185,176),
P(2025,'Kebencanaan','Dana Darurat',85,80)],
pendapatan:[
{tahun:2026,nama:'Dana Desa',anggaran:720*M,realisasi:430*M},{tahun:2026,nama:'Alokasi Dana Desa',anggaran:380*M,realisasi:230*M},
{tahun:2026,nama:'Pendapatan Asli Desa (termasuk bagi hasil BUMDes Rp25 juta)',anggaran:60*M,realisasi:38*M},{tahun:2026,nama:'Bagi Hasil Pajak & Retribusi',anggaran:90*M,realisasi:54*M},
{tahun:2025,nama:'Dana Desa',anggaran:690*M,realisasi:690*M},{tahun:2025,nama:'Alokasi Dana Desa',anggaran:360*M,realisasi:360*M},
{tahun:2025,nama:'Pendapatan Asli Desa',anggaran:45*M,realisasi:43*M},{tahun:2025,nama:'Bagi Hasil Pajak & Retribusi',anggaran:85*M,realisasi:82*M}],
units:[{id:1,nama:'Unit Air Bersih',pendapatan:54*M,biaya:38*M},{id:2,nama:'Unit Es Balok & Hasil Laut',pendapatan:61*M,biaya:49*M},{id:3,nama:'Unit Kerajinan Tenun',pendapatan:22*M,biaya:17*M}],
gangguan:[{id:1,wilayah:'Dusun I',status:'Normal',ket:'Distribusi lancar'},{id:2,wilayah:'Dusun II',status:'Normal',ket:'Distribusi lancar'},{id:3,wilayah:'Dusun III',status:'Gangguan',ket:'Pipa utama bocor, perbaikan dijadwalkan'},{id:4,wilayah:'Dusun IV',status:'Perbaikan',ket:'Penggantian meteran air'}],
layanan:[
{id:1,nama:'Surat Keterangan Domisili',biaya:0,estimasi:'1 hari kerja',syarat:'Fotokopi KTP; Fotokopi KK; Surat pengantar RT'},
{id:2,nama:'Surat Keterangan Tidak Mampu',biaya:0,estimasi:'2 hari kerja',syarat:'Fotokopi KTP; Fotokopi KK; Surat pengantar RT'},
{id:3,nama:'Surat Keterangan Usaha',biaya:5000,estimasi:'2 hari kerja',syarat:'Fotokopi KTP; Foto tempat usaha; Surat pengantar RT'},
{id:4,nama:'Surat Pengantar SKCK',biaya:0,estimasi:'1 hari kerja',syarat:'Fotokopi KTP; Fotokopi KK; Pas foto 4x6'}],
berita:[
{id:1,judul:'Contoh: Musyawarah Desa Penyusunan Program 2026',kategori:'Berita',tanggal:'2026-03-12',ringkas:'Simulasi kegiatan musyawarah desa yang membahas prioritas pembangunan.'},
{id:2,judul:'Contoh: Perbaikan Pipa Air Dusun III Dijadwalkan',kategori:'Pengumuman',tanggal:'2026-09-28',ringkas:'Simulasi pengumuman gangguan distribusi air sementara.'},
{id:3,judul:'Contoh: Pelatihan Tenun untuk Kelompok Perempuan',kategori:'Program',tanggal:'2026-05-20',ringkas:'Simulasi program pemberdayaan pengrajin tenun desa.'},
{id:4,judul:'Contoh: Jadwal Posyandu Bulan Oktober',kategori:'Pengumuman',tanggal:'2026-10-05',ringkas:'Simulasi jadwal pelayanan posyandu balita dan lansia.'}],
dokumen:[
{id:1,judul:'Contoh Laporan Realisasi APBDes Semester I 2026',kategori:'Keuangan',tahun:2026},{id:2,judul:'Contoh APBDes 2026',kategori:'Keuangan',tahun:2026},
{id:3,judul:'Contoh Laporan Keuangan BUMDes 2026',kategori:'BUMDes',tahun:2026},{id:4,judul:'Contoh Laporan Realisasi APBDes 2025',kategori:'Keuangan',tahun:2025}],
tickets:[
{id:'DEMO-0001',jenis:'Aspirasi',judul:'Contoh: Perbaikan lampu jalan dusun',kategori:'Infrastruktur',status:'Diproses',tanggal:'2026-10-02'},
{id:'DEMO-0002',jenis:'Air',judul:'Contoh: Air tidak mengalir pagi hari',kategori:'Air Bersih',status:'Selesai',tanggal:'2026-09-20'},
{id:'DEMO-0003',jenis:'Layanan',judul:'Contoh: Permohonan Surat Domisili',kategori:'Surat Keterangan Domisili',status:'Diterima',tanggal:'2026-10-15'}]};
export const bulanan=['Jan','Feb','Mar','Apr','Mei','Jun','Jul','Agu','Sep'].map((b,k)=>({bulan:b,pendapatan:[13,14,15,15,16,16,15,16,17][k]*M,biaya:[10,10,11,11,12,12,12,12,14][k]*M,laba:([13,14,15,15,16,16,15,16,17][k]-[10,10,11,11,12,12,12,12,14][k])*M}));
