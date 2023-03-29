getTodo()

function addTodo(){
    let text = prompt("สิ่งที่ต้องทำ")
    let date = Number(Date.now())
    setCookie(date,text)
    getTodo()
}

function setCookie(id, message){
    document.cookie = `${id}=${message};max-age=31536000;path=/`;
}

function getTodo(){
    $("#ft_list").html("")
    let cookies = document.cookie;
    let cookiesArray = cookies.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
        let data = (cookiesArray[i]).split("=");
        let id = (data[0].replace(/\s/g, ""))
        let msg = data[1]
        if(id){
            $("#ft_list").html(`<div onclick='deleteCookie(${id},"${msg}")'>${msg}</div>`+ $("#ft_list").html())
        }
    }
}

function deleteCookie(delid,delmsg) {
    console.log(`${delmsg}${delid}`)
    if(confirm(`แน่ใจที่จะลบ ${delmsg}`)==true){
        document.cookie = delid + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        window.location.reload()
    }
}