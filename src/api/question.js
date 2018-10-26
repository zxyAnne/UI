/*
 * @Author: lixiaohua@puoke.com 
 * @Date: 2018-06-04 14:31:26 
 * @Last Modified by: li.xiaohua
 * @Last Modified time: 2018-06-04 16:27:06
 */

import http from './http'
import config from '../config'
const API_PATH = '/v1/expertquestion/lists';
class question {
    //获取领域问答列表数据
    static getQuestionAllListData(obj = {page:1,classify_ids:''}){
        let {page,classify_ids} = obj;
        return http.getData(API_PATH,{
            page,
            rows:20,
            classify_ids,
            orderby:'answer_id',
            flag_order:'t',
        });
    }
    //获取领域问答推荐列表数据
    static getQuestionRecommendListData(obj = {page:1,classify_ids:''}){
        let {page,classify_ids} = obj;
        return http.getData(API_PATH,{
            page,
            rows:20,
            classify_ids,
            orderby:'answer_id',
            flag_order:'t',
            flag:'r',
        });
    }
    //获取列表类别数据
    static getClassifyListData(obj = {page:1,classify_ids:''}) {
        let {page,classify_ids} = obj;
        return http.getData('/v1/expertclassify/lists',{
            page,
            rows:20,
            classify_ids,
        })
    }
}
export default question;