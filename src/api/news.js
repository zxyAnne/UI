/*
 * @Author: lbw@puoke.com 
 * @Date: 2018-03-12 19:24:27 
 * @Last Modified by: lbw@puoke.com
 * @Last Modified time: 2018-03-13 21:48:25
 */
import http from './http'
import config from '../config'
class news{
    static pullUpMoreLists(startAt=0,rows=30){
        return http.getData('/v1/news/lists',{
            "start":startAt,
            "for":"pull-up-time-line",
            rows,
            orderby:'time_line',
            sort:'desc',
            belong_to:config.BELONG_TO,
        });
    }
    static pullDownRefreshLists(startAt=0,rows=30){
        return http.getData('/v1/news/lists',{
            "start":startAt,
            "for":"pull-down-time-line",
            rows,
            orderby:'time_line',
            sort:'desc',
            belong_to:config.BELONG_TO,
        });
    }
    static getContent(id){
        return http.getData('/v1/news/get',{
            id
        });
    }
}
export default news;
