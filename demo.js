var vue = new Vue({
    el: '#app',
    data: {
        text: '',
        list: [
            {text: '待办第1点', done: false},
            {text: '待办第2点', done: false},
            {text: '待办第3点', done: false},
        ],
    },
    methods: {
        add: function() {
            if (!this.text.replace(/\s/g, '')) {
                alert('请输入内容');
                return false;
            }
            this.list.push({text: this.text, done: false});
            this.text = '';
        },
        finish: function(item) {
            item.done = true;
        },
        unfinish: function(item) {
            item.done = false;
        },
        del: function(item) {
            this.list.splice(this.list.indexOf(item), 1);
        },
    },
    computed: {
        todoNum: function() {
            return this.list.filter(function(item) {
                return !item.done;
            }).length;
        },
        finishNum: function() {
            return this.list.filter(function(item) {
                return item.done;
            }).length;
        },
    },
});
