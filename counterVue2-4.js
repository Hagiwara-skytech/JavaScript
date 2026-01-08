const Counter1 = {
    data() {
        return {
            count: 0,
            plus: false
        }
    },
    methods: {
        addCount() {
            this.count+=1
            this.plus=true
        },
        resetCount() {
            this.count=0
            this.plus=false
        },
        subCount() {
            if(this.count>0){
                this.count-=1
            }
            if(this.count<1){
                this.plus=false
            }
        },
    }
}
const counter = Vue.createApp(Counter1)
counter.mount('#counter')
