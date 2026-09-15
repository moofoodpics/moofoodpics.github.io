import {useEffect,useRef,useState} from 'react';
import type {City,Review} from './types';
export default function DestinationPicker({cities,reviews,value,onChange}:{cities:City[];reviews:Review[];value:string;onChange:(id:string)=>void}){
 const [open,setOpen]=useState(false),[search,setSearch]=useState('');
 const root=useRef<HTMLDivElement>(null),trigger=useRef<HTMLButtonElement>(null),input=useRef<HTMLInputElement>(null);
 const current=cities.find(c=>c.id===value);
 useEffect(()=>{if(!open)return;input.current?.focus();const outside=(e:PointerEvent)=>{if(!root.current?.contains(e.target as Node))setOpen(false)};document.addEventListener('pointerdown',outside);return()=>document.removeEventListener('pointerdown',outside)},[open]);
 const choose=(id:string)=>{onChange(id);setOpen(false);setSearch('');trigger.current?.focus()};
 const available=cities.filter(c=>c.id!=='world'&&reviews.some(r=>r.city===c.id)&&`${c.name} ${c.country}`.toLowerCase().includes(search.toLowerCase()));
 return <div className="destination-control" ref={root} onKeyDown={e=>{if(e.key==='Escape'&&open){e.stopPropagation();setOpen(false);trigger.current?.focus()}}} onBlur={e=>{if(!e.currentTarget.contains(e.relatedTarget))setOpen(false)}}>
 <button ref={trigger} className="destination-trigger" aria-expanded={open} aria-controls="destination-menu" onClick={()=>setOpen(!open)}><span><small>EXPLORE</small><strong>{current?.name||'Everywhere'}</strong></span><span className={open?'chevron open':'chevron'} aria-hidden="true">⌄</span></button>
 {open&&<div id="destination-menu" className="destination-menu"><label className="destination-search"><input ref={input} placeholder="Country or city…" aria-label="Search countries and cities" value={search} onChange={e=>setSearch(e.target.value)}/></label><div className="destination-options"><button className="destination-option" aria-pressed={value==='world'} onClick={()=>choose('world')}>Everywhere <span>{reviews.length}</span></button>{[...new Set(available.map(c=>c.country))].sort().map(country=><section key={country}><h3>{country}</h3>{available.filter(c=>c.country===country).map(c=><button key={c.id} className="destination-option" aria-pressed={value===c.id} onClick={()=>choose(c.id)}>{c.name}<span>{reviews.filter(r=>r.city===c.id).length}</span></button>)}</section>)}{!available.length&&<p className="destination-empty">No matching destinations.</p>}</div></div>}
 </div>
}
