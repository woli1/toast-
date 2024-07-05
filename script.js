const successMsg='<i class="fa-solid fa-circle-check"></i>Successfully sumbmitted';
const errorMsg='<i class="fa-solid fa-circle-xmark"></i>Please fix the error!';
const invalidMsg='<i class="fa-solid fa-circle-exclamation"></i>Invalid input,check again';
const toast=document.getElementById('toastBox');
    function showToast(msg){
        const toast=document.createElement('div');
        toast.classList.add('toast');
        toast.innerHTML=msg;
        toastBox.appendChild(toast);
        if(msg.includes('error')){
            toast.classList.add('error');
        }
        else if(msg.includes('Invalid')){
            toast.classList.add("Invalid");
        }
        setTimeout(()=>{
            toast.remove();
        },6000);

        console.log('mohamed');
        //

    }
//git push <remote-name> <local-branch-name>:<remote-branch-name>
//git push origin main:development