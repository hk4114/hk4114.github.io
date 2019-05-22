const requestUserProfile = function (uidList) {  
    // uidList 是一个数组，最大接受 100 个 uid
    // 这个方法的实现不能修改
  
    /** 先去重 */
    uidList = uidList || [];
    let _tmp = {};
    const _uidList = [];
    uidList.forEach(function (uid) {
      if (!_tmp[uid]) {
        _tmp[uid] = 1;
        _uidList.push(uid);
      }
    });
    _tmp = null;
    uidList = null;
  
    return Promise.resolve().then(function () {
      return new Promise(function (resolve, reject) {
        setTimeout(function () { // 模拟 ajax 异步，1s 返回
          resolve();
        }, 1000);
      }).then(function () {
        const profileList = _uidList.map(function (uid) {
          if (uid < 0) {  // 模拟 uid 传错，服务端异常，获取不到部分 uid 对应的 profile 等异常场景
            return null;
          } else {
            return {
              uid: uid,
              nick: uid + 'Nick',
              age: 18
            }
          }
        });
        return profileList.filter(function (profile) {
          return profile !== null;
        });
      });
    });
  };
  
  // 现在我们有很多业务都需要根据 uid 获取 userProfile , 大多数业务的需求都是给一个 uid，获取 profile 。为了性能，我们需要把这个单个的请求合并成批量请求。
  
  // 例如，现在页面上 A 模块需要获取 uid 为 1 的 profile，B 模块需要 uid 为 2 的 profile， C 模块需要获取 uid 为 1 的profile
  // 这三个模块会单独调用下面这个方法获取 profile，假设这三次调用的时间非常接近(100ms 以内)，最终要求只发送一个 ajax 请求（只调用一次 requestUserProfile )，拿到这三个模块需要的 profile
  
  // 完成以下方法，接收一个参数 uid，返回一个 Promise，当成功请求到 profile 的时候， resolve 对应的profile , 请求失败 reject
  // 例如  getUserProfile(1).then(function(profile){ console.log(profile.uid === 1) // true });  // 假设请求成功了。
  
  // 带参数函数节流
  // 1. 函数节流 delay 100ms
  // 2. 合并参数
  // 3. 返回 promise

  // 节流
  const throttle = (callback, delay)=> {
    var count = null
    var start = null
    return function() {
        var now = +new Date()
        var context = this
        var args = arguments
        if ( !start ) {
            start = now
        }
        if ( now - start > delay ) {
            count && clearTimeout(count)
            start = now
            callback.apply(this, args)
        } else {
            count && clearTimeout(count)
            count = setTimeout(function(){
                callback.apply(this, args)
            }, delay)
        }
    }
}

const getUserProfile =(num)=>{
    // 合并参数
    let list = []
    return throttle(function(num){
        list.push({nick:num})
        // 返回promise
        return new Promise((resolve,reject)=>{
            requestUserProfile(list)
            .then(res=>resolve(res))
            .catch(err=>reject(err))
        })
    },1000)
}
  



  // 以下为测试代码
  console.time('单个');
  getUserProfile(1).then(function (profile) {
    if (profile.uid !== 1) {
      throw new Error('fuck');
    }
    console.timeEnd('单个');
  }).catch(err => {
    console.error(err)
  });
  
  console.time('20个不同的');
  Promise.all(
    Array.from({length: 20}).map((u, idx) => idx).map(getUserProfile)
  ).then(function (profile) {
    // 这个profile的内容是前面20个的集合
    console.log(profile);
    console.timeEnd('20个不同的');
  }).catch(err => {
    console.error(err)
  });
  
  console.time('110个不同的');
  Promise.all(
    Array.from({length: 110}).map((u, idx) => idx).map(getUserProfile)
  ).then(function (profile) {
    console.log(profile);
    console.timeEnd('110个不同的');
  }).catch(err => {
    console.error(err)
  });
  
  
  
  // 如果看到这里是看得不清楚，我大概说下我想要的东西，如下函数连续执行
  getUserProfile(1)
  getUserProfile(2)
  getUserProfile(3)
    .then((profiles) => {
    // 由于在100ms内连续发出1，2，3请求，按照题目的意思，这3个会合并成1个requestUserProfile， 返回一个promise，所以这里的profiles为[{nick: 1}, {nick:2}, {nick: 3}]
    console.log("profiles", profiles)
  })



  function throttle(method, delay, mustRunDelay) {
    var timer = null, args = arguments;
    var start = 0, now = 0;
    return function () {
        var context = this;
        now= Date.now();
        if(!start){
            start = now;
        }
        if(now - start >= mustRunDelay){
            method.apply(context, args);
            start = Date.now();
        }else {
            clearTimeout(timer);
            timer = setTimeout(function () {
                method.apply(context, args);
            }, delay);
        }
    }
}
obj.onmousemove = throttle(myFun, 50, 500);