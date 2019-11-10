import {get,post} from './http'

//获取频道
export const getSquare = p => get("/api/v2/channel/square?access_key=bdf3e1ec03c4d6f99d69055dd9899da1&actionKey=appkey&appkey=27eb53fc9058f8c3&auto_refresh=&build=8930&device=phone&fnval=16&fnver=0&fourk=1&mobi_app=iphone&platform=ios&qn=80&sign=754b60f3aa099f30147f0c119427b62d&spmid=traffic.channel-square.0.0&statistics=%7B%22appId%22%3A1%2C%22version%22%3A%225.49%22%2C%22abtest%22%3A%22890%22%2C%22platform%22%3A1%7D&ts=1573096255",p)