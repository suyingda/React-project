const config ='//demo-api-mall-care.mvc.pub/'



const querystring = require('querystring');
const path={
    user:{
        goodsGet(page, size) { return myFetch('/wap/index/goods.Get', { page, size }); },
        changeNumPost(pid, skuId, buyQuantity) { return myFetch('/user/cart/changeNum.Post', { pid, skuId, buyQuantity }); },
    }
}
function myFetch(url,params){
    return new Promise((resolve, reject) => {
         fetch(config+url,{
            method: 'POST',
            mode:"cros",
            headers: {  
                "Content-Type": "application/x-www-form-urlencoded"  
            },  
            body:querystring.stringify(params)
         })
        .then(res => {
            if(res.ok){
                return res.json()
            }
            else{
                throw "network error";
            }
        })
        .then( json => {
             resolve(json);
            // [reject, resolve][0]({json});
            // return json.ret.data
            // if(json.ret === true){
            //      alert(1)
            //      return json.data;
            // }
            // else{
            //      throw "request error";
            // }
        })
        .catch( err => console.log(err))
    });
  
}
export default path;
