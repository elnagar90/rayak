var CPX_APP_ID="";
var u=document.getElementById('u'),a=document.getElementById('age'),t=document.getElementById('tos'),b=document.getElementById('go'),w=document.getElementById('wall');
function chk(){b.disabled=!(a.checked&&t.checked&&/^[A-Za-z0-9]{3,30}$/.test(u.value));}
[u,a,t].forEach(function(e){e.addEventListener('input',chk);e.addEventListener('change',chk);});
b.addEventListener('click',function(){w.style.display='block';
if(!CPX_APP_ID){w.innerHTML='<p class="note">قريباً: الاستطلاعات هتظهر هنا.</p>';return;}
var f=document.createElement('iframe');f.src='https://offers.cpx-research.com/index.php?app_id='+encodeURIComponent(CPX_APP_ID)+'&ext_user_id='+encodeURIComponent(u.value);f.title='الاستطلاعات';w.innerHTML='';w.appendChild(f);});
