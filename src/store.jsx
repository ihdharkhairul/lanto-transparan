import {createContext,useContext,useState,useEffect} from 'react';import {seed} from './data/mock';
const K='lanto-demo-data-v1',C=createContext();
const load=()=>{try{const s=localStorage.getItem(K);return s?{...seed,...JSON.parse(s)}:seed}catch{return seed}};
export function Store({children}){const [d,setD]=useState(load);
useEffect(()=>{try{localStorage.setItem(K,JSON.stringify(d))}catch{}},[d]);
const set=(k,fn)=>setD(p=>({...p,[k]:fn(p[k])}));
const reset=()=>{try{localStorage.removeItem(K)}catch{}setD(seed)};
return <C.Provider value={{d,set,reset}}>{children}</C.Provider>}
export const useStore=()=>useContext(C);
