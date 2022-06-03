// 获取基础信息
let title = document.title;
if (!navigator.share) {
	document.getElementById("fxbz").style.display = "none";
}

// 评论功能
new Valine({
	el: '#vcomments',
	serverURLs: 'https://slz1ygx1.api.lncldglobal.com',
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
if (window.location.hash) {
	let checkExist = setInterval(function() {
		if ($(window.location.hash).length) {
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - 90
			}, 1000);
			clearInterval(checkExist);
		}
	}, 100);
}

// 网站标题自动判断
function istitle() {
	let isHidden = document.hidden;
	if (isHidden) {
		//当窗口不可见
		document.title = '(つ ェ ⊂)我藏好了哦~';
	} else {
		//当窗口可见
		document.title = '(*゜ロ゜)ノ被发现了~';
		setTimeout("document.title=title", 3000);
	}
};
document.addEventListener('visibilitychange', istitle);

// 分享按钮
function call() {
	navigator.share({
		title: title,
		url: window.location.href,
		text: '赵彤刚的工具箱'
	});
}

//返回顶部
window.onscroll = function() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("cd-top").style.visibility = "visible";
	} else {
		document.getElementById("cd-top").style.visibility = "hidden";
	}
}

function cdTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

// 版权信息
console.log("%c赵彤刚%c版权所有", "font-size:15px;padding:3px;color:white;background:#023047",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
console.log("%c本人寻求一份前端开发的工作，有意者请联系%c\n%cTEL:15327682114%c\n%c微信:16699352957",
	"font-size:15px;padding:3px;color:white;background:#023047", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC", "",
	"font-size:15px;padding:3px;color:white;background:#219EBC");
