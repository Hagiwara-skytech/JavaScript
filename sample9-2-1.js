    let str="Global"
    function func1(){
        let str="func1"
        document.write("func1:str= " + str + '<br>');
    }
    function func2(){
        let str="func2"
        document.write("func2:str= " + str + '<br>');
    }
    function func3(str){
        document.write("func3:str= " + str + '<br>');
    }
    function func4(){
        document.write("func4:str= " + str + '<br>');
        str = "func4"
        document.write("func4:str= " + str + '<br>');
    }
    function func5(str){
        let str5 = str
        document.write("func5:str5= " + str5 + '<br>');
        str = str
        document.write("func5:str= " + str + '<br>');
        this.str = "func5"
        document.write("func5:this.str= " + this.str + '<br>');
    }
    document.write('----------------------------------------<br>');
    func1();
    func2();
    func3("arg3");
    func4();
    func5("arg5");
    document.write("Global:str=" + str + '<br>');
