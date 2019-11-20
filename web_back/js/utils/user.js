// 第三次 正式模块化

// 模块化登陆

var baseUrl = 'http://localhost:8000/'
var user = {
                                            // 加上回调
    login: function (userName, userPassword, callback) {
        // console.log('随便写的', userName, userPassword)
        $.post(baseUrl + 'admin/login',
            {
                user_name: userName,
                password: userPassword

            },

            // 使用回调后
            function (res) {
                callback(res)
            }
        )


        // 第三次  及使用回调前的代码   star
        // function (res) {
        //     // console.log(res);
        //     if (res.code === 200) {
        //         // alert('登陆成功')
        //         location.href = 'index.html'
        //         // location.assign('index.html') 同上一样的效果，可以后退
        //     } else {
        //         // alert(res.msg)
        //         $('#myInfo').text(res.msg)
        //         $('#myModal').modal('show')
        //     }
        // })
        // 使用回调前                   end
                
    },


    // 退出登陆
    // 参数：当请求成功的时候调用的函数

    logout: function ( callback) {

        $.post(baseUrl + 'admin/logout', function (res) {

            callback(res)
            // console.log(res);
            // // 回去登录页
            // if (res.code === 200) {
            //     location.href = 'login.html'
            // }
        })
    },


    // 获取用户信息
    getInfo:function (callback) {
        $.get(baseUrl+'admin/getuser',function (res) {
                callback(res)
        })
    }






}

// 模块化退出
// var user ={
//     logout:function(){

//              $.post('http://localhost:8000/admin/logout',function(res){

//             console.log(res);
//             // 回去登录页
//             if(res.code===200){
//                 location.href='login.html'
//             }


//         })

//     }
// }

