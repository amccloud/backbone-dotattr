(function(_, Backbone) {
    _.extend(Backbone.Model.prototype, {
        get: function(key) {
           return _.reduce(key.split('.'), function(attr, key) {
                if(key==='*') {
					if(attr instanceof Backbone.Model) attr = attr.attributes;
					return _.filter(attr, function(val, key, obj) {
						return (obj instanceof Backbone.Model) ? obj.attributes[key] : obj[key];
					});
                } else {
					return (attr instanceof Backbone.Model) ? attr.attributes[key] : attr[key];
                }
            }, this.attributes);
        }
    });
})(window._, window.Backbone);