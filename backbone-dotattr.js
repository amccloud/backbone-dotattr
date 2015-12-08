(function(_, Backbone) {
    _.extend(Backbone.Model.prototype, {
        get: function(key) {
            return typeof this.attributes[key] != 'undefined'
                ? this.attributes[key]
                : _.reduce(key.split('.'), function (attr, key) {
                if (attr instanceof Backbone.Model)
                    return attr.attributes[key];
                return attr[key];
            }, this.attributes);
        }
    });
})(window._, window.Backbone);
