function submitData(userName, userEmail){
    return(
        fetch(`http://localhost:3000/users`,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify({
                name:userName,
                email:userEmail
            })
        }).then((res) => res.json()).then((result)=>{
            console.log(result)
            const userID = result.id
            console.log(userID) 
            //document.createElement("p") -- this is in memory only
            const userIdPTag = document.createElement("p")
            userIdPTag.textContent = userID
            document.body.append(userIdPTag)

        }).catch(function(error){
            console.log(error.message),
            document.body.append(error.message)

        })

    )
}
