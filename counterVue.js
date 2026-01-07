const Counter1 = {
    data() {
        return {
            count: 0
        }
    },
    methods: {
        addCount() {
            this.count+=1
        },
        resetCount() {
            this.count=0
        },
        subCount() {
            if(this.count>0){
                this.count-=1
            }
        },
    }
}
const counter = Vue.createApp(Counter1)
counter.mount('#counter')
