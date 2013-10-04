(function($){
    $.fn.OnPositionChange = function(callback) {
        var previous_left = $(this).position().left;
        var previous_top = $(this).position().top;
        var element = this;

        function loopy() {
            setTimeout(function() {
                var left = element.position().left;
                var top = element.position().top;

                if(left !== previous_left || top != previous_top) {
                    previous_left = left;
                    previous_top = top;
                    callback.apply(element);
                }

                loopy();
            }, 100);
        }

        loopy();
    }
})(jQuery);