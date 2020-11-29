(function(){
    async_get("get_top_1",{})
    .then(e=>{
        let index= 0;
        if (e.success){
            e.data.forEach(data=>{
                let tr = document.createElement("tr")
                let l = document.createElement("td")
                let r = document.createElement("td")
                if (index%2==1){
                    tr.className = "alt-author"
                }
                index+=1;
                l.innerText = index
                r.innerText = data.title
                tr.append(l)
                tr.append(r)

                html = document.getElementById("top-author-data")
                html.append(tr)
            })
        }
        
    })

})()