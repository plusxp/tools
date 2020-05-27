(function($) {

  var app = $.sammy('#app', function() {
    this.use('Template');

    this.around(function(callback) {
      var context = this;
      this.load('data/articles.json')
          .then(function(items) {
            context.items = items;
          })
          .then(callback);
    });

    this.get('#/', function(context) {
      context.app.swap('');
      $.each(this.items, function(i, item) {
        context.render('templates/article.template', {id: i, item: item})
               .appendTo(context.$element());
      });
    });

    this.get('#/2', function(context) {
      context.app.swap('');
      $.each(this.items, function(i, item) {
        context.render('templates/article2.template', {id: i, item: item})
               .appendTo(context.$element());
      });
    });
    
    this.get('#/about/', function(context) {
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/about.template', {})
               .appendTo(context.$element());
    });

    this.get('#/about2/', function(context) {
        var str=location.href.toLowerCase();
        context.app.swap('');
        context.render('templates/about2.template', {})
               .appendTo(context.$element());
    });

    this.get('#/article/:id', function(context) {
      this.item = this.items[this.params['id']];
      if (!this.item) { return this.notFound(); }
      this.partial('templates/article-detail.template');
    });

    this.get('#/article2/:id', function(context) {
      this.item = this.items[this.params['id']];
      $("html, body").animate({ scrollTop: 0 }, 0);
      if (!this.item) { return this.notFound(); }
      this.partial('templates/article-detail2.template');
    });


    this.before('.*', function() {

        var hash = document.location.hash;
        $("nav").find("a").removeClass("current");
        $("nav").find("a[href='"+hash+"']").addClass("current");
   });

  });

  $(function() {
    app.run('#/about/');
  });

})(jQuery);