// import {Router} from 'express';
// import * as request from 'request';
// import {apiEndPOints} from './config';
// import { pipe } from 'rxjs';

const router = require('express');
const request  = require('request');
// const apiEndPoints = require('./config');
const pipe = require('rxjs');
const apiEndPOints = {
    search:'https://api.themoviedb.org/3/search/movie',
    trending:'https://api.themoviedb.org/3/discover/movie',
    details:'https://api.themoviedb.org/3/movie/'
}
const api = router();

api.use((req,res,next) => {
    console.log('Movie search app request by action :' + req.url )
    next()
})

api.get('/api/trending', (req,res) => {
    const tempArr =[];
    let str='';
    for(const key in req.query){
        tempArr.push(`${key}=${req.query[key]}`);
    }
    str = tempArr.join('&');
    request.get(`${apiEndPoints.trending}?${(str)}`).pipe(res)
})

// export default api