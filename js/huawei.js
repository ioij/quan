            var btns = document.querySelectorAll('.quan>p'); //获取左右按钮标签
            var lis = document.querySelectorAll('.pip>li'); //获取照片li
            var dian = document.querySelectorAll('.diand>ul>li'); //获取小圆点
            console.log(btns, lis, dian)
            var i = 0;
            //右按钮
            btns[1].onclick = function() {
            	i++;
            	if(i >= lis.length) {
            		i = 0
            	};

            	for(var n = 0; n < lis.length; n++) {
            		lis[n].style = '';
            		dian[n].style = '';
            	}
            	lis[i].style = 'opacity:1;';
            	dian[i].style = 'background-color: #FFF;';
            }
            //左按钮
            btns[0].onclick = function() {
            	i--;
            	if(i < 0) {
            		i = lis.length - 1
            	};

            	for(var n = 0; n < lis.length; n++) {
            		lis[n].style = '';
            		dian[n].style = '';
            	}
            	lis[i].style = 'opacity:1;';
            	dian[i].style = 'background-color: #FFF;';
            }
            //小点点
            for(var m = 0; m < dian.length; m++) {
            	dian[m].ind = m;
            	dian[m].onclick = function() {
            		for(var n = 0; n < lis.length; n++) {
            			lis[n].style = '';
            			dian[n].style = '';
            		}
            		lis[this.ind].style = 'opacity:1;';
            		dian[this.ind].style = 'background-color: #FFF;';
            		i=this.ind;
            	}
            }
            var  a=0;
            var t = setInterval(function() { //设置一个定时器
            	a++;
//          	console.log(a)
            	if(a >= lis.length) {
            		a = 0
            	}; //设置i的长度小于等于lis的长度
            	
            	for(var n = 0; n < lis.length; n++) { //设置n的长度小于等于lis的长度               
            		lis[n].style = ''; //清除lis的样式     
            		dian[n].style = ''; //清除点的样式
            	}
            	lis[a].style = 'opacity:1;'; //改变lis的样式
            	dian[a].style = 'background-color: #FFF;'; //改变点的样式     		

            }, 2000)

            //事件渲染

            var prr = [{
            		"mm": "热卖",
            		"img": "img1/0286mp.png",
            		"jssp": "新品首销 限时直降10元",
            		"mcjs": "华为手环 3e 跑步精灵",
            		"jg": "￥99",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/0281mp.png",
            		"jssp": "标配版领券最高优惠200",
            		"mcjs": "荣耀畅玩8C",
            		"jg": "￥999",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/584mp.png",
            		"jssp": "新品首销 多重好礼",
            		"mcjs": "HUAWEI FreeBuds 2系列",
            		"jg": "￥799",
            	},
            	{
            		"mm": "免息",
            		"img": "img1/9309mp.png",
            		"jssp": "12.12最高直降600元",
            		"mcjs": "荣耀MagicBook 锐龙版",
            		"jg": "￥3688",
            	},
            	{
            		"mm": "最高优惠",
            		"img": "img1/878mp.png",
            		"jssp": "标配版领券最高优惠200",
            		"mcjs": "FlyPods Pro无线耳机",
            		"jg": "￥999",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/243364035mp.png",
            		"jssp": "限时最高降120元",
            		"mcjs": "荣耀平板5",
            		"jg": "￥1279",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/819mp.png",
            		"jssp": "64GB版下单减200元",
            		"mcjs": "华为畅享 MAX",
            		"jg": "￥1699",
            	},
            	{
            		"mm": "免息",
            		"img": "img1/192mp.png",
            		"jssp": "限时优惠11 赠礼包",
            		"mcjs": "荣耀手表魔法系列",
            		"jg": "￥888",
            	},
            	{
            		"mm": "直降",
            		"img": "img1/066mp.png",
            		"jssp": "直降100+增配件",
            		"mcjs": "华为畅享8",
            		"jg": "￥1199",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/0389mp.png",
            		"jssp": "稀缺货源 限量发售",
            		"mcjs": "HUAWEI WATCH GT ",
            		"jg": "￥1488",
            	},
            	{
            		"mm": "赠双倍积分",
            		"img": "img1/0678mp.png",
            		"jssp": "小巧全屏",
            		"mcjs": "荣耀畅玩7",
            		"jg": "￥599",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/12925.png",
            		"jssp": "智能声控 大屏娱乐",
            		"mcjs": "华为平板 M5 青春版",
            		"jg": "￥1749",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/12417mp.png",
            		"jssp": "专业降噪通话 待机10天",
            		"mcjs": "华为运动蓝耳耳机",
            		"jg": "￥249",
            	},
            	{
            		"mm": "爆款",
            		"img": "img1/367943mp.png",
            		"jssp": "彩屏健康手环",
            		"mcjs": "华为手环 B5",
            		"jg": "￥1109",
            	},
            	{
            		"mm": "爆款",
            		"img": "img1/2730.png",
            		"jssp": "64GB版降200 送A2手环",
            		"mcjs": "荣耀9i",
            		"jg": "￥1199",
            	},

            	{
            		"mm": "爆款",
            		"img": "img1/68mp.png",
            		"jssp": "健身减脂必备",
            		"mcjs": "华为智能体脂秤",
            		"jg": "￥129",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/4232.png",
            		"jssp": "丹拿音质 声纹识别",
            		"mcjs": "华为AI音箱",
            		"jg": "￥369",
            	},
            	{
            		"mm": "爆款",
            		"img": "img1/828647mp.png",
            		"jssp": "爆款限时优惠4元",
            		"mcjs": "荣耀手环4",
            		"jg": "￥195",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/64mp.png",
            		"jssp": "支持Mate 20 Pro及iPhone X系列充电  ",
            		"mcjs": "华为无线充电器",
            		"jg": "￥99",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/08952mp.png",
            		"jssp": "赠价值248元豪华礼包",
            		"mcjs": "荣耀Note 10",
            		"jg": "￥2699",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/09057mp.png",
            		"jssp": "限时直降50元",
            		"mcjs": "荣耀Waterplay 8英寸",
            		"jg": "￥1449",
            	},
            	{
            		"mm": "限时优惠70元",
            		"img": "img1/1864mp.png",
            		"jssp": "BIA测脂/高精准传感",
            		"mcjs": "荣耀智能体脂秤",
            		"jg": "￥99",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/811.png",
            		"jssp": "4G全网通 高清拍照",
            		"mcjs": "华为儿童手表 3 Pro",
            		"jg": "￥888",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/28793.png",
            		"jssp": "10.1英寸大屏",
            		"mcjs": "华为畅享平板",
            		"jg": "￥1199",
            	},
            	{
            		"mm": "首发",
            		"img": "img1/664mp.png",
            		"jssp": "限时优惠2元",
            		"mcjs": "荣耀路由X2",
            		"jg": "￥147",
            	},
            	{
            		"mm": "免息",
            		"img": "img1/52328mp.png",
            		"jssp": "2K高清屏",
            		"mcjs": "HUAWEI MATEBook X",
            		"jg": "￥8688",
            	},
            	{
            		"mm": "免息",
            		"img": "img1/482mp.png",
            		"jssp": "2K高清触摸屏",
            		"mcjs": "HUAWEI MATEBook E",
            		"jg": "￥4288",
            	},
            	{
            		"mm": "新品",
            		"img": "img1/3534179.png",
            		"jssp": "1T大容量",
            		"mcjs": "华为备咖存储",
            		"jg": "￥599",
            	},
            	{
            		"mm": "特惠",
            		"img": "img1/5890mp.png",
            		"jssp": "50米防水 专业睡眠检测",
            		"mcjs": "荣耀手环3",
            		"jg": "￥129",
            	},
            	{
            		"mm": "限时优惠20元",
            		"img": "img1/1432470mp.png",
            		"jssp": "OLED大屏，防水防尘",
            		"mcjs": "荣耀畅玩手环 A2",
            		"jg": "￥129",
            	},
            ]
            var listss = document.querySelectorAll('.erz>ul')[0];

            function pill(arr) {
            	for(i = 0; i < arr.length; i++) {
            		var lis = document.createElement('li');
            		var dis = document.createElement('div');
            		var dips1 = document.createElement('p');
            		var dips2 = document.createElement('p');
            		var dips3 = document.createElement('p');
            		var ips1 = document.createElement('p');
            		var ips2 = document.createElement('p');

            		dips1.innerText = arr[i].mm;
            		dips2.style = "background:url(" + arr[i].img + ");background-size:cover;"
            		dips3.innerText = arr[i].jssp;
            		ips1.innerText = arr[i].mcjs;
            		ips2.innerText = arr[i].jg;

            		listss.appendChild(lis);
            		lis.appendChild(dis);
            		lis.appendChild(ips1);
            		lis.appendChild(ips2);
            		dis.appendChild(dips1);
            		dis.appendChild(dips2);
            		dis.appendChild(dips3);

            		listss.style.width = lis * arr[ind]

            	}

            }
            pill(prr)

            //图片的左右轮播
            
            var yo = document.getElementById('you')
            var zu = document.getElementById('zuo')
            var liss = document.querySelectorAll('.erz>ul>li')
            var ind = 0;
            timer = null, flag = true, autoTimer = null;

            //左
            zu.addEventListener('click', function() {
            	zov()
            }, false)

            // 右
            yo.addEventListener('click', function() {
            	yov()
            }, false)
            //  console.log(ppp)
            function yov() {
            	if(flag) {
            		var cd = liss.length / 5;
            		cd = Math.ceil(cd);
            		if(ind < cd - 1) {
            			ind++;
            			flag = false;
            			timer = setInterval(function() {
            				var poleft = parseInt(getStyle(listss, 'left'));
            				console.log(poleft)
            				if(poleft == (-1200 * ind)) {
            					//  				if(ind==cd){
            					//  					ind=0;
            					//  					listss.style.left=0+'px';
            					//  				}
            					flag = true;
            					clearInterval(timer);
            				} else {
            					listss.style.left = poleft - 200 + 'px';
            				}
            			}, 100)
            		}
            	}
            	console.log(flag)
            }

            function zov() {
            	if(flag) {
            		var cd = liss.length / 5;
            		cd = Math.ceil(cd);
            		//  		if(ind==0){
            		//  			ind==cd;
            		//  			listss.style.left=(1200)*ind+'px';
            		//  		}
            		var poleft = parseInt(getStyle(listss, 'left'));
            		if(poleft != 0) {
            			ind--;
            			flag = false;
            			timer = setInterval(function() {
            				var poleft = parseInt(getStyle(listss, 'left'));
            				if(poleft == (-1200 * ind)) {
            					//  				if(ind==cd){
            					//  					ind=0;
            					//  					listss.style.left=0+'px';
            					//  				}
            					flag = true;
            					clearInterval(timer);
            				} else {
            					listss.style.left = poleft + 200 + 'px';
            				}
            			}, 100)
            		}
            	}
            }
            var lils = document.querySelectorAll('.heng>#zpi>li')
            var disn = document.querySelectorAll('.heng>#dii>li')
            console.log(lils)
            for(var p = 0; p < disn.length; p++) {
            	disn[p].ind = p;
            	disn[p].onclick = function() {
            		for(var n = 0; n < lils.length; n++) {
            			lils[n].style = '';
            			disn[n].style = '';
            		}
            		lils[this.ind].style = 'opacity:1;';
            		disn[this.ind].style = 'background-color: #FFF;';
            		p=this.ind;
            	}
            }
            var b=0;
            var t = setInterval(function() { //设置一个定时器
            	b++;
            	console.log(b)
            	if(b >= lils.length) {
            		b = 0;
            	}; //设置i的长度小于等于lis的长度
            	for(var n = 0; n < lils.length; n++) { //设置n的长度小于等于lis的长度               
            		lils[n].style = ''; //清除lis的样式     
            		disn[n].style = ''; //清除点的样式
            	}
            	lils[b].style = 'opacity:1;'; //改变lis的样式
            	disn[b].style = 'background-color: #FFF;'; //改变点的样式     		
            }, 1600)
//          第三块
            var qrr = [
            
		    {
			"bt": "新品",
			"img": "img3/4287mp.png",
			"name": "HUAWEI nova 3",
			"jies": "领卷最高减 200+赠保护壳",
			"jiag": "￥2799",
		    },
		    {
			"bt": "新品",
			"img": "img3/5638mp.png",
			"name": "荣耀8X Max",
			"jies": "64GB版送A2手环 ",
			"jiag": "￥1499",
		    },
		    
		    {
			"bt": "新品",
			"img": "img3/227mp.png",
			"name": "HUAWEI nova 3i",
			"jies": "最高直降200",
			"jiag": "￥1899",
		    },
		    {
			"bt": "特惠",
			"img": "img3/7477mp.png",
			"name": "荣耀9青春版",
			"jies": "尊享版降600  ",
			"jiag": "￥999",
		    },
		    {
			"bt": "新品",
			"img": "img3/4219mp.png",
			"name": "华为畅享 MAX",
			"jies": "64GB下单减100 ",
			"jiag": "￥1699",
		    },
		    {
			"bt": "爆款",
			"img": "img3/165.png",
			"name": "荣耀9i",
			"jies": "最高优惠200 ",
			"jiag": "￥1199",
		    },
		    {
			"bt": "新品",
			"img": "img3/425mp.png",
			"name": "HUAWEI Mate 10 Pro",
			"jies": "领券立减200+赠好礼  ",
			"jiag": "￥3999",
		    },
		    {
			"bt": "新品",
			"img": "img3/4251mp.png",
			"name": "荣耀畅玩8C",
			"jies": "32GB版优惠100 ",
			"jiag": "￥999",
		    },
		    {
			"bt": "新品",
			"img": "img3/42pp.png",
			"name": "HUAWEI Mate 20 RS",
			"jies": "保时捷设计",
			"jiag": "￥12999",
		    },
		    {
			"bt": "新品",
			"img": "img3/428m.png",
			"name": "荣耀畅玩7A",
			"jies": "限时优惠100 ",
			"jiag": "￥699",
		    },
		    {
			"bt": "直降",
			"img": "img3/889po.png",
			"name": "华为畅享8",
			"jies": "领券立减100+赠配件好礼  ",
			"jiag": "￥1199",
		    },
		    {
			"bt": "新品",
			"img": "img3/4285.png",
			"name": "荣耀畅玩7X",
			"jies": "最高优惠300",
			"jiag": "￥999",
		    },
		    {
			"bt": "新品",
			"img": "img3/433.png",
			"name": "HUAWEI 麦芒7",
			"jies": "限量赠豪华配件礼包",
			"jiag": "￥2199",
		    },
		    {
			"bt": "新品",
			"img": "img3/490.png",
			"name": "荣耀畅玩7C",
			"jies": "优惠100 ",
			"jiag": "￥799",
		    }
		    
            ]
             var list = document.querySelectorAll('.xis>ul')[0];

            function qill(arr) {
            	for(i = 0; i < arr.length; i++) {
            		var lis = document.createElement('li');
            		var pis = document.createElement('p');
            		var is = document.createElement('i');
            		var h4s = document.createElement('h4');
            		var ias1 = document.createElement('a');
            		var ias2 = document.createElement('a');

            		pis.innerText = arr[i].bt;
            		is.style = "background:url(" + arr[i].img + ");background-size:cover;"
            		h4s.innerText = arr[i].name;
            		ias1.innerText = arr[i].jies;
            		ias2.innerText = arr[i].jiag;

            		list.appendChild(lis);
            		lis.appendChild(pis);
            		lis.appendChild(is);
                    lis.appendChild(h4s);
                    lis.appendChild(ias1);
            		lis.appendChild(ias2);
            		list.style.width = lis * arr[ind]

            	}

            }
            qill(qrr)
            
//          第四块
            var srr = [
            {
            "bt": "免息",
			"img": "img2/4444.png",
			"name": "荣耀MagicBook",
			"jies": "购机享6期免息  ",
			"jiag": "￥4999",	
            },
            {
            "bt": "新品",
			"img": "img2/911.png",
			"name": "HUAWEI MateBook D（2018版）",
			"jies": "限量赠华为双肩包  ",
			"jiag": "￥5188",	
            },
            {
            "bt": "免息",
			"img": "img2/6511.png",
			"name": "荣耀MagicBook 锐龙版",
			"jies": "高性能金属轻薄本 ",
			"jiag": "￥3999",	
            },
            {
            "bt": "免息",
			"img": "img2/3123.jpg",
			"name": "HUAWEI MateBook X",
			"jies": "6期免息+赠配件礼包 ",
			"jiag": "￥6188",	
            },
            {
            "bt": "免息",
			"img": "img2/8854.png",
			"name": "HUAWEI MateBook E",
			"jies": "享6期免息",
			"jiag": "￥4288",	
            },
            {
            "bt": "免息",
			"img": "img2/6511.png",
			"name": "荣耀MagicBook 锐龙星云紫版",
			"jies": "紫星云新品100订金抵300  ",
			"jiag": "￥4599",	
            },
            {
            "bt": "新品",
			"img": "img2/321.png",
			"name": "HUAWEI MateBook X Pro",
			"jies": "享6期免息 ",
			"jiag": "￥8699",	
            },
            {
            "bt": "免息",
			"img": "img2/123.png",
			"name": "荣耀MagicBook 锐龙触屏版",
			"jies": "touch触控 随心而动 ",
			"jiag": "￥4599",	
            },
            {
            "bt": "新品",
			"img": "img2/3123.jpg",
			"name": "HUAWEI MateBook D",
			"jies": "限量赠双肩包",
			"jiag": "￥6488",	
            },
             ]
             var list = document.querySelectorAll('.sis>ul')[0];

            function qill(arr) {
            	for(i = 0; i < arr.length; i++) {
            		var lis = document.createElement('li');
            		var pis = document.createElement('p');
            		var is = document.createElement('i');
            		var h4s = document.createElement('h4');
            		var ias1 = document.createElement('a');
            		var ias2 = document.createElement('a');

            		pis.innerText = arr[i].bt;
            		is.style = "background:url(" + arr[i].img + ");background-size:cover;"
            		h4s.innerText = arr[i].name;
            		ias1.innerText = arr[i].jies;
            		ias2.innerText = arr[i].jiag;

            		list.appendChild(lis);
            		lis.appendChild(pis);
            		lis.appendChild(is);
                    lis.appendChild(h4s);
                    lis.appendChild(ias1);
            		lis.appendChild(ias2);
            		list.style.width = lis * arr[ind]

            	}

            }
            qill(srr)
//          第五块
            var wrr = [
            {
            "bt": "新品",
			"img": "img2/j8v.png",
			"name": "华为平板 M5 青春版",
			"jies": "购机享3期免息  ",
			"jiag": "￥1899",	
            },
            {
            "bt": "新品",
			"img": "img2/4266.png",
			"name": "荣耀Waterplay",
			"jies": "防水影音平板",
			"jiag": "￥1688",	
            },
            {
            "bt": "免息",
			"img": "img2/j8v.png",
			"name": "华为畅享平板",
			"jies": "享3期免息 ",
			"jiag": "￥1299",	
            },
            {
            "bt": "免息",
			"img": "img2/4988.png",
			"name": "荣耀畅玩平板2 9.6英寸",
			"jies": "6期免息+赠配件礼包 ",
			"jiag": "￥1099",	
            },
            {
            "bt": "免息",
			"img": "img2/42666.png",
			"name": "华为平板 M5 8.4英寸",
			"jies": "哈曼卡顿调音 ",
			"jiag": "￥2088",	
            },
            {
            "bt": "免息",
			"img": "img2/42oi.png",
			"name": "荣耀Waterplay 8英寸",
			"jies": "IP67级防尘防水 ",
			"jiag": "￥1499",	
            },
            {
            "bt": "新品",
			"img": "img2/5656.png",
			"name": "华为平板 M5 10.8英寸",
			"jies": "2K高清屏 ",
			"jiag": "￥2488",	
            },
            {
            "bt": "免息",
			"img": "img2/6668.png",
			"name": "荣耀畅玩平板2 8英寸",
			"jies": "大电池长续航 ",
			"jiag": "￥999",	
            },
            {
            "bt": "新品",
			"img": "img2/2323.png",
			"name": "华为平板 M5 Pro",
			"jies": "赠平板支架",
			"jiag": "￥3488",	
            },
             ]
            var list = document.querySelectorAll('.wis>ul')[0];

            function qill(arr) {
            	for(i = 0; i < arr.length; i++) {
            		var lis = document.createElement('li');
            		var pis = document.createElement('p');
            		var is = document.createElement('i');
            		var h4s = document.createElement('h4');
            		var ias1 = document.createElement('a');
            		var ias2 = document.createElement('a');

            		pis.innerText = arr[i].bt;
            		is.style = "background:url(" + arr[i].img + ");background-size:cover;"
            		h4s.innerText = arr[i].name;
            		ias1.innerText = arr[i].jies;
            		ias2.innerText = arr[i].jiag;

            		list.appendChild(lis);
            		lis.appendChild(pis);
            		lis.appendChild(is);
                    lis.appendChild(h4s);
                    lis.appendChild(ias1);
            		lis.appendChild(ias2);
            		list.style.width = lis * arr[ind]

            	}

            }
            qill(wrr)
//          置顶
            var zd = document.getElementById('gd');
            zd.addEventListener('click',function(){
            	timer = setInterval(function(){
            		if(getScroll().y==0){
            			clearInterval(timer)
            		}
            		scrollBy(0,-55)
            	},10)
            })