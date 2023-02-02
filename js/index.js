// 顶部导航栏
$('#gwc-bar').on({
    mouseenter:function(){$('.gwc-tab').slideDown(300);$('#gwc').css({'background':'white','color':'#ff6700'})},
    mouseleave:function(){$('.gwc-tab').slideUp(300);$('#gwc').css({'background':'#424242','color':'#b0b0b0'})}
    });

//--------------------------------------------------------------------------------------
//头部部分-搜索框
var headerSeachRanger = (function () {
    return{
        init:function () {
            $('#header .search').focus('click',function () {
                $('#header .search').css('border','1px solid #ff6700');
                $('#header .btn').css('border','1px solid #ff6700');
            });
            $('#header .search').blur('click',function () {
                $('#header .search').css('border','1px solid #e0e0e0');
                $('#header .btn').css('border','1px solid #e0e0e0');
            });
        }
    }
})()
headerSeachRanger.init();
//头部部分-上部选项卡
var headerTabTopRanger = (function () {
    return{
        init:function () {
            tab ();
            function tab (){
                var t;
                var jasonHeader = {小米12:['xiaomi12.png','Xiaomi 12'],红米11:['xiaomired.png','Redmi Note 11 5G'],平板:['xiaomipad.jpg','小米平板5']};
                $('#header-tab-bar li:eq(8)'). mouseenter(function () {
                    //加定时器让鼠标悬停0.15s才执行
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['小米12'][0] + '')
                        $('#header-tab .name').html(jasonHeader['小米12'][1])
                        $('#header-tab strong').html('3999')
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});

                $('#header-tab-bar li:eq(7)'). mouseenter(function () {
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['红米11'][0] + '');
                        $('#header-tab .name').html(jasonHeader['红米11'][1]);
                        $('#header-tab strong').html('1999')
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});
                $('#header-tab-bar li:eq(4)'). mouseenter(function () {
                    t = setTimeout(function () {
                        $('#header-tab').slideDown(250);
                        $('#header-tab img').attr('src', './imgs/' + jasonHeader['平板'][0] + '');
                        $('#header-tab .name').html(jasonHeader['平板'][1]);
                        $('#header-tab strong').html('2999')
                    }, 150);
                }).mouseleave(function(){
                    clearTimeout(t);});
            }

            $('#header-tab-bar ul').on({
                mouseleave:function(){ $('#header-tab').slideUp(250);}
            });
            $('#header-tab').mouseenter(function () {
                $(this).stop();
            });
            $('#lunbo').mouseenter(function () {
                $('#header-tab').slideUp(250);
            });

        }
    }
})()
headerTabTopRanger.init();


//--------------------------------------------------------------------------------------
//主体部分-轮播图
var mainTabRanger = (function () {
    return {
        init:function () {
            function lunbo(arrImg) {
                var num = 0;
                var timer=null;
                for(var i=0;i<arrImg.length;i++){
                    $('#imgbox').append($('<a href="#"><img src="" alt=""></a> '));
                    $('#imgbox img').eq(i).attr('src',arrImg[i]);
                    $('#ballbox').append($('<li></li>'));
                }

                $('img:eq(0)').css('display','block');
                $('#lunbo li').attr('class','gray');
                $('#lunbo li').eq(num).attr('class','active');
                //图片往前切换函数
                move();
                function move() {
                    if(num<arrImg.length-1){
                        num++;
                    }else{num=0};
                    $('#lunbo img').css('display','none');
                    $('#lunbo img').eq(num).fadeIn();
                    $('#lunbo li').attr('class','gray');
                    $('#lunbo li').eq(num).attr('class','active');
                    // alert(num)
                }
                $('#next').click(function () {
                    move();
                });
                $('#last').click(function () {
                    if(num>0){
                        num--;
                    }else{num=arrImg.length-1};
                    $('#lunbo img').css('display','none');
                    $('#lunbo img').eq(num).fadeIn();
                    $('#lunbo li').attr('class','gray');
                    $('#lunbo li').eq(num).attr('class','active');
                });
                $('#ballbox').on('click','li',function () {
                    if(num!=$(this).index()){
                        num = $(this).index();
                        $('#lunbo li').attr('class','gray');
                        $(this).attr('class','active');
                        $('#lunbo img').css('display','none');
                        $('#lunbo img').eq(num).fadeIn();
                    }
                });
                function auto() {
                    timer = window.setInterval(function () {
                        move();
                    },3000);
                }
                auto();
                $('#lunbo').mouseover(function () {
                    window.clearInterval(timer);
                });
                $('#lunbo').mouseout(function () {
                    timer = window.setInterval(function () {
                        move();
                    },3000);
                });
                $('#lunbo .lunbo-move').mouseenter(function () {
                    // alert(1)
                    $('#lunbo .lunbo-move').fadeTo(100,0.8);
                });
                $('#lunbo .lunbo-move').mouseleave(function () {
                    // alert(1)
                    $('#lunbo .lunbo-move').fadeTo(100,0.1);
                });
            }
            lunbo(['./imgs/bg1.jpg','./imgs/bg2.jpg','./imgs/bg3.jpg']);
        }
    }
})()
mainTabRanger.init();
//主体部分-侧边选项卡
var headerTabRanger = (function () {
    return{
        init:function () {
            var arrHeader = {小米12:['小米12','mi12.webp'],小米电视:['小米电视','midianshi.webp'],小米笔记本:['笔记本','mibijiben.webp'],小米冰箱:['小米冰箱','miice.webp'],小米手表:['小米手表','miwatch.webp'],小米打印:['小米打印','miprint.jpg']}
            $('.lunbo-tab-content span').css('color','white');
            $('.lunbo-tab-content li').eq(0).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米12'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米12'][1]+'');
            });
            $('.lunbo-tab-content li').eq(1).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米电视'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米电视'][1]+'');
            });
            $('.lunbo-tab-content li').eq(2).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米笔记本'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米笔记本'][1]+'');
            });
            $('.lunbo-tab-content li').eq(3).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米冰箱'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米冰箱'][1]+'');
            });
            $('.lunbo-tab-content li').eq(4).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米手表'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米手表'][1]+'');
            });
            $('.lunbo-tab-content li').eq(5).mouseenter(function () {
                $('.lunbo-tab-div').css('display','block');
                $('.lunbo-tab-div span').html(''+arrHeader['小米打印'][0]+'');
                $('.lunbo-tab-div img').attr('src','./imgs/'+arrHeader['小米打印'][1]+'');
            });
            $('.lunbo-tab-content ').mouseleave(function () {
                $('.lunbo-tab-div').css('display','none');
            });
            $('.lunbo-tab-content ').mouseenter(function () {
                $('#header-tab').slideUp(250);
            });
            $('.lunbo-tab-div').mouseenter(function () {
                $(this).css('display','block');
            });
            $('.lunbo-tab-div ').mouseleave(function () {
                $('.lunbo-tab-div').css('display','none');
            });
        }
    }
})()
headerTabRanger.init();


//--------------------------------------------------------------------------------------
//灰色背景区
//商品展示-切换
var dpRanger = (function () {
    return{
        init:function () {
            $('#dp .hd-box .ejyx-a').mouseenter(function () {
                $('#dp .dy').css('display','none');
                $('#dp .ejyx').css('display','block');
                $('#dp .hd-box .dy-a').css({'color':'black','borderColor':'transparent'});
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });
            $('#dp .hd-box .ejyx-a').mouseleave(function () {
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });
            $('#dp .hd-box .dy-a').mouseenter(function () {
                $('#dp .ejyx').css('display','none');
                $('#dp .dy').css('display','block');
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
                $('#dp .hd-box .ejyx-a').css({'color':'black','borderColor':'transparent'});
            });
            $('#dp .hd-box .dy-a').mouseleave(function () {
                $(this).css({'color':'#ff6700','borderColor':'#ff6700'});
            });

        }
    }
})()
dpRanger.init();

