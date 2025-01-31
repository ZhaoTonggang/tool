// 严格模式
"use strict";
// 获取基础信息
const title = document.title;
const url = window.location.href;
const topbt = document.getElementById("cd-top");
let timeout = null;
if (!navigator.share) {
	document.getElementById("fxbz").style.display = "none";
}
// 载入数据
const ldata = (eid, datas) => {
	const appid = document.getElementById(eid);
	let itemdata = "";
	let data = datas[eid];
	for (let j = 0; j < data.length; j++) {
		itemdata += '<a target="_blank" title="' + data[j].e + '"href="' + data[j].u +
			'"<div class="link_item"><div class="content">' + '<img class="logo" src="./heheda/img/fav/' + data[j]
			.i + '.png" alt="' + data[j].n + '" loading=lazy></div>' + '<h2 class="item_h2">' + data[j].n +
			'</h2>' + '<p class="item_p">' + data[j].e + '</p></div></a>'
	}
	appid.innerHTML = itemdata;
}
fetch('./heheda/list.json', {
		methods: 'GET',
		cache: 'force-cache',
		mode: 'same-origin'
	})
	.then(response => {
		return response.json();
	})
	.then(datas => {
		//填充列表
		ldata('yyst', datas);
		ldata('yxyl', datas);
		ldata('yqcy', datas);
		ldata('jyxx', datas);
		ldata('cygj', datas);
		//移除加载遮罩
		document.body.classList.remove('is-loading');
	})
	.catch(err => {
		console.error('[404]错误日志：', err);
	})
// 评论功能
new Valine({
	el: '#vcomments',
	serverURLs: 'https://api-valine.heheda.top',
	appId: 'sLz1YGx1KO43eapCDo5LREE9-MdYXbMMI',
	appKey: 'mL0otwz7tEuTmPlA1xjzzteS',
	placeholder: '请留下你来过的足迹！！！',
	avatar: 'wavatar',
	meta: ['nick', 'mail', 'link'],
	requiredFields: ['nick', 'mail'],
	pageSize: 5,
	lang: 'zh-CN',
	visitor: true,
	highlight: true,
	recordIP: true,
	enableQQ: true
});
// 点击邮件中的链接跳转至相应评论
// if (window.location.hash) {
// 	let checkExist = setInterval(function() {
// 		if ($(window.location.hash).length) {
// 			$('html, body').animate({
// 				scrollTop: $(window.location.hash).offset().top - 90
// 			}, 1000);
// 			clearInterval(checkExist);
// 		}
// 	}, 100);
// }
// 网站标题自动判断
window.addEventListener('visibilitychange', () => {
	if (document.hidden) {
		//当窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//当窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout(() => {
			document.title = title;
		}, 3000);
	}
})
// 分享按钮
const call = () => {
	navigator.share({
		title: title,
		url: url,
		text: '一个有趣的的工具箱'
	});
}
// 监听屏幕滚动
window.addEventListener('scroll', () => {
	if (timeout !== null) {
		clearTimeout(timeout);
	}
	timeout = setTimeout(() => {
		let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		// 返回顶部
		if (scrollTop > 100) {
			topbt.style.visibility = "visible";
		} else {
			topbt.style.visibility = "hidden";
		};
	}, 500);
});
const cdTop = () => {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
// 鼠标点击效果
(function() {
	let balls = [];
	let longPressed = false;
	let multiplier = 0;
	let longPress, width, height, origin, normal, ctx;
	const colours = ["#F73859", "#14FFEC", "#00E0FF", "#FF99FE", "#FAF15D"];
	const canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	canvas.setAttribute("style",
		"width: 100%; height: 100%; top: 0; left: 0; z-index: 99999; position: fixed; pointer-events: none;"
	);
	const pointer = document.createElement("span");
	pointer.classList.add("pointer");
	document.body.appendChild(pointer);

	const updateSize = () => {
		canvas.width = window.innerWidth * 2;
		canvas.height = window.innerHeight * 2;
		canvas.style.width = window.innerWidth + 'px';
		canvas.style.height = window.innerHeight + 'px';
		ctx.scale(2, 2);
		width = (canvas.width = window.innerWidth);
		height = (canvas.height = window.innerHeight);
		origin = {
			x: width / 2,
			y: height / 2
		};
		normal = {
			x: width / 2,
			y: height / 2
		};
	}

	const randBetween = (min, max) => {
		return Math.floor(Math.random() * max) + min;
	}

	class Ball {
		constructor(x = origin.x, y = origin.y) {
			this.x = x;
			this.y = y;
			this.angle = Math.PI * 2 * Math.random();
			if (longPressed == true) {
				this.multiplier = randBetween(14 + multiplier, 15 + multiplier);
			} else {
				this.multiplier = randBetween(6, 12);
			}
			this.vx = (this.multiplier + Math.random() * 0.5) * Math.cos(this.angle);
			this.vy = (this.multiplier + Math.random() * 0.5) * Math.sin(this.angle);
			this.r = randBetween(8, 12) + 3 * Math.random();
			this.color = colours[Math.floor(Math.random() * colours.length)];
		}
		update() {
			this.x += this.vx - normal.x;
			this.y += this.vy - normal.y;
			normal.x = -2 / window.innerWidth * Math.sin(this.angle);
			normal.y = -2 / window.innerHeight * Math.cos(this.angle);
			this.r -= 0.3;
			this.vx *= 0.9;
			this.vy *= 0.9;
		}
	}

	const pushBalls = (count = 1, x = origin.x, y = origin.y) => {
		for (let i = 0; i < count; i++) {
			balls.push(new Ball(x, y));
		}
	}

	const removeBall = () => {
		for (let i = 0; i < balls.length; i++) {
			let b = balls[i];
			if (b.x + b.r < 0 || b.x - b.r > width || b.y + b.r < 0 || b.y - b.r > height || b.r < 0) {
				balls.splice(i, 1);
			}
		}
	}

	const loop = () => {
		ctx.fillStyle = "rgba(255, 255, 255, 0)";
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		for (let i = 0; i < balls.length; i++) {
			let b = balls[i];
			if (b.r < 0) continue;
			ctx.fillStyle = b.color;
			ctx.beginPath();
			ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, false);
			ctx.fill();
			b.update();
		}
		if (longPressed == true) {
			multiplier += 0.2;
		} else if (!longPressed && multiplier >= 0) {
			multiplier -= 0.4;
		}
		removeBall();
		requestAnimationFrame(loop);
	}
	if (canvas.getContext && window.addEventListener) {
		ctx = canvas.getContext("2d");
		updateSize();
		window.addEventListener('resize', updateSize(), false);
		loop();
		window.addEventListener("mousedown", function(e) {
			pushBalls(randBetween(10, 20), e.clientX, e.clientY);
			document.body.classList.add("is-pressed");
			longPress = setTimeout(function() {
				document.body.classList.add("is-longpress");
				longPressed = true;
			}, 500);
		}, false);
		window.addEventListener("mouseup", function(e) {
			clearInterval(longPress);
			if (longPressed == true) {
				document.body.classList.remove("is-longpress");
				pushBalls(randBetween(50 + Math.ceil(multiplier), 100 + Math.ceil(multiplier)), e
					.clientX, e
					.clientY);
				longPressed = false;
			}
			document.body.classList.remove("is-pressed");
		}, false);
		window.addEventListener("mousemove", function(e) {
			let x = e.clientX;
			let y = e.clientY;
			pointer.style.top = y + "px";
			pointer.style.left = x + "px";
		}, false);
	} else {
		console.log("canvas 或 addEventListener 不受支持！");
	}
}())
// 花瓣效果
let PF = {};
(function() {
	function pf(option) {
		if (!option) {
			option = {};
		}
		this._plist = [];
		this._path = "./heheda/img/header/huaban.png"
		this._img = null;
		this._win = {
			w: window.innerWidth,
			h: window.innerHeight,
		}
		this._index = option.index || 99999;
		this.box = null;
		this.stage = null;
		this._anmition = null;
		this._time = null;
		this._maxtime = option.life || 30;
	}
	PF = pf;
	pf.prototype.init = function() {
		if (this.box) {
			return;
		}
		this._img = document.createElement("img");
		this._img.src = this._path;
		this.box = document.createElement("canvas");
		this.box.width = this._win.w;
		this.box.height = this._win.h;
		this.box.style.cssText =
			"display: block;position: fixed;top: 0;left: 0;margin: 0;padding: 0;border: none;background: none;pointer-events: none;";
		this.box.style.zIndex = this._index;
		document.body.appendChild(this.box);
		this.stage = this.box.getContext("2d");
	}
	pf.prototype.reSize = function() {
		this._win.w = window.innerWidth;
		this._win.h = window.innerHeight;
		this.box.width = this._win.w;
		this.box.height = this._win.h;
	}
	pf.prototype.action = function() {
		for (let i = 0; i < this._plist.length; i++) {
			this._plist[i].life--;
			if (this._plist[i].life <= 0) {
				this._plist.splice(i, 1);
				i--;
				continue;
			}
			this._plist[i].x += this._plist[i].vx;
			this._plist[i].y += this._plist[i].vy;
			this._plist[i]._rotate += this._plist[i].vr;
			this._plist[i]._alpha += this._plist[i].va;
		}
	}
	pf.prototype.render = function(k) {
		this.action();
		if (this._time++ >= this._maxtime) {
			this._time = 0;
			this.addImg();
			this.addImg();
		}
		this.stage.clearRect(0, 0, this.box.width, this.box.height);
		for (let i = 0; i < this._plist.length; i++) {
			this.drawImg(this._plist[i]);
		}
		if (k) {
			this._anmition = requestAnimationFrame(function() {
				this.render(1);
			}.bind(this));
		}
	}
	pf.prototype.addImg = function() {
		let px, py;
		if (Math.random() >= 0.5) {
			px = 0;
			py = Math.floor(Math.random() * this._win.h)
		} else {
			py = 0;
			px = Math.floor(Math.random() * this._win.w)
		}
		if (px > 0 && py > 0) {
			debugger
		}
		this._plist.push({
			x: px,
			y: py,
			_alpha: 0.8,
			_rotate: 0,
			_scale: Math.random() * 0.5 + 0.5,
			vx: Math.random() * 2 + 0.2,
			vy: Math.random() + 0.2,
			va: -0.0002,
			vr: -(Math.random() * 1 + 1),
			life: Math.floor(Math.random() * 200) + 800,
		})
	}
	pf.prototype.start = function() {
		for (let i = 0; i < 4; i++) {
			this.addImg();
		}
		this.render(1);
	}
	pf.prototype.stop = function() {
		cancelAnimationFrame(this._anmition);
	}
	pf.prototype.drawImg = function(param) {
		let img_w = this._img.width * param._scale;
		let img_h = this._img.height * param._scale;
		this.stage.translate(param.x + img_w / 2, param.y + img_h / 2);
		this.stage.globalAlpha = param._alpha;
		this.stage.rotate(-(Math.PI / 180 * param._rotate));
		this.stage.drawImage(this._img, 0 - img_w, 0 - img_h, img_w, img_h);
		this.stage.rotate(Math.PI / 180 * param._rotate);
		this.stage.globalAlpha = 1;
		this.stage.translate(-(param.x + img_w / 2), -(param.y + img_h / 2));
	}
})();
const pf = new PF({
	life: 30,
});
pf.init();
pf.start();
window.onresize = () => {
	pf.reSize();
}
// 版权信息
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c网页开发或其他商务合作%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");