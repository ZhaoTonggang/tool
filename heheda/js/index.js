// 评论功能
new Valine({
	el: '#vcomments',
	serverURLs: 'https://slz1ygx1.api.lncldglobal.com',
	appId: 'sLz1YGx1KO43eapCDo5LREE9-MdYXbMMI',
	appKey: 'mL0otwz7tEuTmPlA1xjzzteS',
	placeholder: '请留下你来过的足迹！！！',
	avatar: 'wavatar',
	meta: ['nick', 'mail', 'link'],
	requiredFields: ['nick'],
	pageSize: 10,
	lang: 'zh-CN',
	visitor: true,
	highlight: true,
	recordIP: true,
	enableQQ: true
});

// 点击邮件中的链接跳转至相应评论
if (window.location.hash) {
	var checkExist = setInterval(function() {
		if ($(window.location.hash).length) {
			$('html, body').animate({
				scrollTop: $(window.location.hash).offset().top - 90
			}, 1000);
			clearInterval(checkExist);
		}
	}, 100);
}

// 落叶效果
jQuery(document).ready(function($) {
	$('body').wpSuperSnow({
		flakes: ['./heheda/image/007.png', './heheda/image/006.png', './heheda/image/004.png',
			'./heheda/image/005.png', './heheda/image/001.png', './heheda/image/003.png',
			'./heheda/image/002.png', './heheda/image/008.png'
		],
		totalFlakes: 100,
		zIndex: 999999999,
		maxSize: 30,
		maxDuration: 50,
		useFlakeTrans: false
	});
});

// 网站标题自动判断
var title = document.title;

function istitle() {
	var isHidden = document.hidden;
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
var nativeShare = new NativeShare()
var shareData = {
	title: '赵彤刚的工具箱',
	desc: '是一个值得探索的新世界！',
	// 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
	link: 'https://tool.heheda.top/',
	icon: './heheda/img/icon/512.png',
	// 不要过于依赖以下两个回调，很多浏览器是不支持的
	// success: function() {
	//     alert('success')
	// },
	// fail: function() {
	//     alert('fail')
	// }
}
nativeShare.setShareData(shareData)

function call(command) {
	try {
		nativeShare.call(command)
	} catch (err) {
		// 如果不支持，你可以在这里做降级处理
		// alert(err.message)
		alert("分享失败，请手动分享！")
	}
}

function setTitle(title) {
	nativeShare.setShareData({
		title: title,
	})
}
