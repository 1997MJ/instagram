document.addEventListener("DOMContentLoaded",



function(e){

// 아이디 변경
    let EditProfileIdButton = document.querySelector("#profile_id i")
    let IdName= document.querySelector("#profile_id span")

    EditProfileIdButton.addEventListener("click",
    function(e){
        IdName.textContent=prompt("새로운 아이디를 입력하세요")
        if (IdName.textContent===""){
            IdName.textContent ="아이디를 변경해주세요"
        }
    })

    //프로필 내용 변경

    let EditProfileStoryButton= document.querySelector("#profile_info button")
    let ProfileName=document.querySelector("#profile_name")
    let ProfileJob=document.querySelector("#profile_job")
    let ProfileAddress=document.querySelector("#profile_address")
    let changing= false

    EditProfileStoryButton.addEventListener("click",
    function(e){
        
        if(changing){
            
            let _ProfileName = ProfileName.querySelector("input").value
            let _ProfileJob = ProfileJob.querySelector("input").value
            let _ProfileAddress = ProfileAddress.querySelector("input").value

            ProfileName.innerHTML=_ProfileName
            ProfileJob.innerHTML=_ProfileJob

            if(_ProfileAddress.startsWith("http")){
                _ProfileAddress="<a href="+_ProfileAddress+">"+_ProfileAddress+"</a>"
            }
            ProfileAddress.innerHTML=_ProfileAddress

            e.target.textContent="프로필 편집"
            changing=false
        }
        else{
            let _ProfileName=ProfileName.textContent
            let _ProfileJob=ProfileJob.textContent
            let _ProfileAddress=ProfileAddress.textContent

            ProfileName.innerHTML="<input value="+_ProfileName +" >  </input>"
            ProfileJob.innerHTML="<input value="+_ProfileJob +" >  </input>"
            ProfileAddress.innerHTML="<input value="+_ProfileAddress +" >  </input>"

            e.target.textContent="프로필 편집 완료"
            changing=true


        }



    })
    //프로필 사진 변경

    let ProfileImg= document.querySelector(".profile_pic .circle_pic")
    

    ProfileImg.addEventListener("click",
    function(e){

        ProfileImg.setAttribute("src",prompt("이미지 url을 입력해주세요"))


    })

    




}

)