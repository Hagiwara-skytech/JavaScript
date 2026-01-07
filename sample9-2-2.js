    var str2="Global"
    function func12(){
        let str2="func1"
        document.write("func1:str2= " + str2 + '<br>');
    }
    function func22(){
        let str2="func2"
        document.write("func2:str2= " + str2 + '<br>');
    }
    function func32(str2){
        document.write("func3:str2= " + str2 + '<br>');
    }
    function func42(){
        document.write("func4:str2= " + str2 + '<br>');
        str2 = "func4"
        document.write("func4:str2= " + str2 + '<br>');
    }
    function func52(str2){
        let str5 = str2
        document.write("func5:str5= " + str5 + '<br>');
        str2 = str2
        document.write("func5:str2= " + str2 + '<br>');
        this.str2 = "func5"
        document.write("func5:this.str2= " + this.str2 + '<br>');
    }
    document.write('----------------------------------------<br>');
    func12();
    func22();
    func32("arg3");
    func42();
    func52("arg5");
    document.write("Global:str2=" + str2 + '<br>');
