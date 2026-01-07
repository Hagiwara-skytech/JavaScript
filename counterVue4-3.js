const Counter1 = {
    data() {
        return {
            count: 0,
            plus: false
        }
    },
    methods: {
        addCount() {
            this.count+=1;
            this.plus=(this.plus>0)?true:false;
        },
        resetCount() {
            this.count=0;
            this.plus=(this.plus>0)?true:false;
        },
        subCount() {
            if(this.count>0){
                this.count-=1;
            }
            this.plus=(this.plus>0)?true:false;
        },
    }
}
const counter = Vue.createApp(Counter1)
counter.mount('#counter')
