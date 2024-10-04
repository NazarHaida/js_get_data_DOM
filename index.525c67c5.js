var e=document.querySelectorAll(".population"),n=document.querySelector(".total-population"),r=document.querySelector(".average-population"),o=[];e.forEach(function(e){o.push(parseInt(e.innerHTML.replace(/,/g,"")))});var t=o.reduce(function(e,n){return e+n});n.innerHTML=t.toLocaleString();var a=Math.round(t/o.length);r.innerHTML=a.toLocaleString();
//# sourceMappingURL=index.525c67c5.js.map
