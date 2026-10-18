import React,{Component} from 'react';import {createRoot} from 'react-dom/client';import {BrowserRouter} from 'react-router-dom';import App from './App';import {Store} from './store';import './styles.css';
class EB extends Component{state={e:null};static getDerivedStateFromError(e){return {e}}
render(){return this.state.e?<pre style={{padding:20,whiteSpace:'pre-wrap',color:'#b3372e'}}>{String(this.state.e.stack||this.state.e)}</pre>:this.props.children}}
createRoot(document.getElementById('root')).render(<BrowserRouter><EB><Store><App/></Store></EB></BrowserRouter>);