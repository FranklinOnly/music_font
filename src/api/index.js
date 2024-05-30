import {instance} from "./request"

export function loginApi(data){
    return instance({
        method:"post",
        url:"/user/login",
        data:data
    })
}

export function logoutApi(data){
    return instance({
        method:"post",
        url:"/user/logout",
        data:data
    })
}

export function registerApi(data){
    return instance({
        method:"post",
        url:"/user/register",
        data:data
    })
}

export function playSongApi(data){
    return instance({
        method:"get",
        url:"/static/"+data.url,
        headers: {
            'Content-Disposition':'audio/mpeg',
          },
    })
}

export function UserFindApi(data){
    return instance({
        method:"get",
        url:"/user/find",
        data:data
    })
}

export function UserDeleteApi(data){
    return instance({
        method:"delete",
        url:"/user/delete/"+data,
    })
}

export function SongFindApi(data){
    return instance({
        method:"get",
        url:"/songList/find",
        data:data
    })
}

export function SongFindIdApi(data){
    return instance({
        method:"get",
        url:"/songList/find/"+data,
        // params:data
    })
}

export function SongFindNameApi(data){
    return instance({
        method:"get",
        url:"/songList/findName?name="+data,
        // params:data
    })
}

export function SongFindCategoryApi(data){
    return instance({
        method:"get",
        url:"/songList/findCategory?category="+data,
        // params:data
    })
}

export function SongAddApi(data){
    return instance({
        method:"post",
        url:"/songList/add",
        data:data
    })
}

export function SongUploadApi(data){
    return instance({
        method:"post",
        url:"/upload",
        data:data,
        headers: {
            'Content-Type': 'multipart/form-data',
          },
    })
}