function global(){
    let a=10;
    function grandParent(){
        function parent(){
            function child(){
                console.log(a)
            }
            child()
        }
        parent()
    }
    grandParent()
}
global()