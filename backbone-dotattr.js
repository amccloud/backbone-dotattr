(function(_, Backbone, undefined) {
    _.extend(Backbone.Model.prototype, {
        get: function(key) {
            try {
                return _.reduce(key.split('.'), function(attr, key) {
                    if (attr instanceof Backbone.Model)
                        return attr.attributes[key];

                    return attr[key];
                }, this.attributes);
            } catch (e) {
                return undefined;
            }
        }
    });
})(window._, window.Backbone);
