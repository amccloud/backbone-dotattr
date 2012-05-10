(function(_, Backbone) {
    _.extend(Backbone.Model.prototype, {
        get: function(key) {
            return _.reduce(key.split('.'), function(attr, key) {
                if (attr instanceof Backbone.Model)
                    return attr.attributes[key];

                return attr[key];
            }, this.attributes);
        }
    });
})(window._, window.Backbone);
