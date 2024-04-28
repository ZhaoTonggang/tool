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
		itemdata +=
			'<div class="link_item" onclick="window.open(\'' + data[j].u + '\',\'_blank\')" title="' + data[j]
			.e + '"><div class="content">' +
			'<img class="logo" src="./heheda/img/fav/' + data[j].i + '.png" alt="' + data[j].n +
			'" loading=lazy></div>' +
			'<h2 class="item_h2">' + data[j].n + '</h2>' +
			'<p class="item_p">' + data[j].e + '</p></div>'
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
//网页飘落效果
const pf = new PF({
	life: 30,
});
pf.init();
pf.start();
window.onresize = () => {
	pf.reSize();
}
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
// 版权信息
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c网页开发或其他商务合作%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");