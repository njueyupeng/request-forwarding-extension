window.onload = function () {
    new Vue({
        el: '#app',
        data: function () {
            return {
                visible: false
            }
        },
        methods: {
            show: function () {
                this.visible = true;
            },
            transfer:function(){
                console.log('trdstart')
                 chrome.runtime.sendMessage('Hello',function(response){
                     document.write(response) 
                 })
            }
        }
    })
}