(function ($) {
    $.fn.barrager = function (option) {
        option = $.extend({
            close: false,
            top: 0,
            max: 10,
            speed: 1,
            color: '#fff'
        }, option || {});

        
        var time = new Date().getTime();
        var barrager_id = 'barrage_' + time;
        var id = '#' + barrager_id;
        
        
        // 动态生成HTML
        var html = $("<div class='barrage'id=" + barrager_id + "></div>");
        $(this).append(html);

        var barrage = $(id);

        var barrage_wrap = $("<div class='barrage_wrap'></div>");

        barrage.append(barrage_wrap);


        // 弹幕内容
        var info = $("<a class='info' title=''target='_blank'></a>");

        info.css('color', barrage.color);

        info.attr({
            'href': 'javascript:void(0)',
            'id': barrage.id
        }).text(option.info).appendTo(barrage_wrap);

        // 弹幕关闭按钮
        if (option.close) {
            var close = $("<div class='close'></div>")
            barrage_wrap.append(close);
        }

        // 动态设置弹幕top
        var window_width = $(window).width() + 500;
        var window_height = $(window).height() - 100;

        var this_width = (window_width > $(this).width()) ? $(this).width() : window_width;
        var this_height = (window_height > $(this).height()) ? $(this).height() : window_height;

        var top = (option.top === 0) ? Math.floor(Math.random() * this_height + 40) : option.top;
        barrage.css("top", top +'px');

        // 设置弹幕动画效果
        barrage.hover(function () {
            barrage.stop(true);
        },function(){
            floatLeft();
        });
        
        
        
        
        barrage.click(function(){
            var answer = prompt("Input your answer to this question :)");
            // 动态生成HTML
            $(this).append("<p>"+answer+"</p>").find('p').addClass('reply');

        })

        
        
        
        
        barrage.on('click', function () {
            barrage.stop(true);
            floatLeft();
        });

        barrage.find('.close').on('click', function () {
            barrage.remove();
        })

        floatLeft();

        function floatLeft() {
            barrage.animate({
                right: this_width
            }, option.speed * 3000, function () {
                barrage.remove();
            });
        }
    }

    $.fn.barrager.removeAll = function () {
        $('.barrage').remove();
    }
})(jQuery);