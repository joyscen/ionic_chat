startApp.factory('Common', function(){
    return {
        get_items: function(){
            var items = [
                {'img': 'email', 'name': 'Check Email', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 1},
                {'img': 'call', 'name': 'Call Me', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 2},
                {'img': 'record', 'name': 'Record album', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 3},
                {'img': 'email', 'name': 'Check Email', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 4},
                {'img': 'call', 'name': 'Call Me', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 5},
                {'img': 'record', 'name': 'Record album', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 6},
                {'img': 'email', 'name': 'Check Email', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 7},
                {'img': 'call', 'name': 'Call Me', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 8},
                {'img': 'record', 'name': 'Record album', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 9},
                {'img': 'email', 'name': 'Check Email', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 10},
                {'img': 'call', 'name': 'Call Me', 'desc': 'dfhjsk sfjdshoeklsfj', 'id': 11},
                {'img': 'record', 'name': 'Record album', 'desc': 'dfhjsk sfjdshoeklsfj sdfjgkjk', 'id': 12}
            ];
            return items;
        },
        get_item_detail: function(cid){
            var items = this.get_items();
            for(var it in items){
                var item = items[it];
                if(item.id == Number(cid)){
                    return item;
                }
            }
        }
    }
})
;


