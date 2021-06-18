function createCalculator(){
  return {
    display: document.querySelector('.display'),



      start(){
        this.clickButtons();
      },

      clickButtons(){
        document.addEventListener('click' , e =>{
          const el = e.target;
          if(el.classList.contains('btn-num')){
            this.toDisplay(el.innerText);
          }
          if(el.classList.contains('btn-clear')){
            this.clear();
          }
          if(el.classList.contains('btn-del')){
            this.deleteLastEnt();
          }

          if(el.classList.contains('btn-eq')){
           this.submitResp();
          }
        });
      },

      toDisplay(valor){
        this.display.value += valor;
      },

      clear(){
        this.display.value = '';
      },

      submitResp(){
        let resp = this.display.value;
        try{
          const result = eval(resp);
          this.display.value = result;
        }catch(e){
          alert('Error.');
        }
      },

      deleteLastEnt(){
      this.display.value = this.display.value.slice(0, -1);
      }
  };
}
const createCalc = createCalculator();
createCalc.start();