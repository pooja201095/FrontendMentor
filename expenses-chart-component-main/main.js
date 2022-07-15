function main(){
    function getData() {
        let chart ='';
        fetch("./data.json",{
            mode: 'cors',
            headers: {
              'Access-Control-Allow-Origin':'*'
            }
          })
    .then(response => {
       return response.json();
    })
    .then(jsondata => {
        let max = Math.max(...jsondata.map(e=>e.amount));
        jsondata.forEach((ele)=>{

            chart +=`<div class="chart-element"><div class="${ele.amount==max ? 'blue bar': 'bar'}" data-style-type=$${ele.amount} style="height:${ele.amount*3}px"></div>
            <div class="day">${ele.day}</div></div>`
        });
        document.getElementById('chart').innerHTML += chart;
    }).then(function(){
        Array.from(document.getElementsByClassName('bar')).forEach((bar)=>{
            bar.addEventListener('mouseover',function(){
                this.style.setProperty('--content',"abc" );
                this.parentElement.classList.add('show');
            });
            bar.addEventListener('mouseout',function(){
                this.parentElement.classList.remove('show');
            });
        });
        
    });
    }
    getData();

    

}

window.onload =  main();