/**
 * Created by GreedyJay on 2017/4/12.
 */
Hash=function () {}
    Hash.prototype ={
        constructor:Hash,
        add:function (k,v) {
            if(!this.hasOwnProperty(k)){
                this[k]=v;
            }
        },
        remove:function (k) {
            if(this.hasOwnProperty(k)){
                delete this[k];
            }
        },
        update:function (k,v) {
            this[k]=v;
        },
        has:function (k) {
            var type = typeof k;
            if (type === 'string' || type === 'number') {
                return this.hasOwnProperty(k);
            } else if (type === 'function' && this.some(k)) {
                return true;
            }
            return false;
        },
        empty: function () {
            for (var k in this) {
                if (this.hasOwnProperty(k)) {
                    return false;
                }
            }
            return true;
        },
        each: function (fn) {
            for (var k in this) {
                if (this.hasOwnProperty(k)) {
                    fn.call(this, this[k], k, this);
                }
            }
        },
        map: function (fn) {
            var hash = new Hash;
            for (var k in this) {
                if (this.hasOwnProperty(k)) {
                    hash.add(k, fn.call(this, this[k], k, this));
                }
            }
            return hash;
        },
        find: function (k) {
            var type = typeof k;
            if (type === 'string' || type === 'number' && this.has(k)) {
                return this[k];
            } else if (type === 'function') {
                for (var _k in this) {
                    if (this.hasOwnProperty(_k) && k.call(this, this[_k], _k, this)) {
                        return this[_k];
                    }
                }
            }
            return null;
        }
    };