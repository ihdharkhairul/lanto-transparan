import {useState,useEffect} from 'react';import {NavLink,Link,Outlet,useLocation} from 'react-router-dom';import {Menu,X} from 'lucide-react';
const L=[['/','Beranda'],['/keuangan','Keuangan'],['/bumdes','BUMDes'],['/air-bersih','Air Bersih'],['/layanan','Layanan'],['/aspirasi','Aspirasi'],['/berita','Berita']];
export const Banner=()=>null;
export const Hdr=({t,s})=><section className="phead"><div className="wrap"><h1>{t}</h1><p>{s}</p></div></section>;
export const Empty=({t='Data tidak ditemukan.'})=><div className="empty">{t}</div>;
export const Peta=()=>{const q=encodeURIComponent('Desa Lanto, Mawasangka Tengah, Buton Tengah, Sulawesi Tenggara');
return <section><h2>Lokasi Desa Lanto</h2><div className="card map"><div style={{position:'relative',width:'100%',height:320,background:'#e8f0ea',borderRadius:10,overflow:'hidden',marginBottom:12}}>
<iframe title="Peta Desa Lanto" src={`https://www.google.com/maps?q=${q}&z=14&output=embed`} style={{position:'absolute',inset:0,width:'100%',height:'100%',border:0}} referrerPolicy="no-referrer-when-downgrade" allowFullScreen/></div>
<div className="row sp"><span>Kec. Mawasangka Tengah, Kab. Buton Tengah, Sulawesi Tenggara</span><a className="btn sm" target="_blank" rel="noreferrer" href={`https://www.google.com/maps/search/?api=1&query=${q}`}>Buka di Google Maps</a></div></div></section>}
export function Layout(){const [o,setO]=useState(false);const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0)},[pathname]);
return <><header className="nav"><div className="wrap navin"><Link to="/" className="brand"><img src="/images/logo-lanto.png" alt="Logo Lanto Transparan"/><small>Desa Lanto<br/>Mawasangka Tengah</small></Link>
<nav className={o?'open':''}>{L.map(([t,n])=><NavLink key={t} to={t} end={t==='/'} onClick={()=>setO(false)}>{n}</NavLink>)}<Link to="/admin" className="btn sm" onClick={()=>setO(false)}>Admin</Link></nav>
<button className="burger" aria-label="Menu" onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></div></header>
<main key={pathname} className="page"><Outlet/></main>
<footer><div className="wrap foot"><img src="/images/logo-lanto.png" alt="Logo Lanto Transparan"/><div><b>Desa Lanto</b><p>Kec. Mawasangka Tengah, Kab. Buton Tengah, Sulawesi Tenggara</p></div><div>{L.slice(1).map(([t,n])=><Link key={t} to={t}>{n}</Link>)}</div></div>
<div className="wrap copy">© 2026 Project By Muhammad Khairul Ihdhar - Arul Lianabanggai - Simulasi Website Lanto Transparan</div></footer></>}
export function Form({fields,onSubmit,btn='Kirim',init={},chk}){const [v,setV]=useState(init),[e,setE]=useState({}),[m,setM]=useState('');
const sub=ev=>{ev.preventDefault();const er={};fields.forEach(f=>{const x=String(v[f.n]??'').trim();if(f.req&&!x)er[f.n]='Wajib diisi';else if(f.min&&x.length<f.min)er[f.n]=`Minimal ${f.min} karakter`;else if(f.t==='number'&&x&&(isNaN(+x)||+x<0))er[f.n]='Harus angka ≥ 0'});
if(!Object.keys(er).length&&chk){const c=chk(v);if(c)setM('!'+c)}setE(er);if(Object.keys(er).length||(chk&&chk(v)))return;
const r=onSubmit(v);setM(r||'');if(!(r&&r[0]==='!')&&!Object.keys(init).length)setV({})};
return <form className="form" onSubmit={sub} noValidate>{fields.map(f=><label key={f.n}>{f.l}{f.req&&' *'}
{f.opts?<select value={v[f.n]??''} onChange={x=>setV({...v,[f.n]:x.target.value})}><option value="">Pilih…</option>{f.opts.map(o=><option key={o}>{o}</option>)}</select>
:f.t==='area'?<textarea rows="4" value={v[f.n]??''} onChange={x=>setV({...v,[f.n]:x.target.value})}/>
:f.t==='file'?<input type="file" onChange={x=>setV({...v,[f.n]:x.target.files[0]?.name||''})}/>
:<input autoCapitalize="none" autoCorrect="off" type={f.t==='password'?'password':'text'} inputMode={f.t==='number'?'numeric':undefined} value={v[f.n]??''} onChange={x=>setV({...v,[f.n]:x.target.value})}/>}
{e[f.n]&&<em>{e[f.n]}</em>}</label>)}
<button className="btn" type="submit">{btn}</button>{m&&<p className={m[0]==='!'?'err':'ok'} role="status">{m[0]==='!'?m.slice(1):m}</p>}</form>}