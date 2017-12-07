// JavaScript Document


//scroll dynamic effect
(function ($) {
	var status = false;
	$.fn.scrollQ = function(options) {
		var defaults = {
			line:6,
			scrollNum: 1,
			scrollTime: 2000
		};
		var options = jQuery.extend(defaults, options);
		var _self = this;
		return this.each(function() {
			$("li", this).each(function() {
				$(this).css("display", "none");
			});
			$("li:lt(" + options.line + ")", this).each(function() {
				$(this).css("display", "block");
			});

			function scroll() {
				for (i = 0; i < options.scrollNum; i++) {
					var start = $("li:first", _self);
					start.fadeOut(100);
					start.css("display", "none");
					start.appendTo(_self);
					$("li:eq(" + (options.line - 1) + ")", _self).each(function() {
						$(this).fadeIn(500);
						$(this).css("display", "block");
					});
				}
			}

			var timer;
			timer = setInterval(scroll, options.scrollTime);
			_self.bind("mouseover", function() {
				clearInterval(timer);
			});
			_self.bind("mouseout", function() {
				timer = setInterval(scroll, options.scrollTime);
			});

		});
	};
})(jQuery);

$(document).ready(function () {
	$("#itemlist").scrollQ();
});
		
//pie dynamic effect
$(function () {
	$('#container').highcharts({
		chart: {
			type: 'pie',
			backgroundColor:'rgba(5, 14, 29, 0)',
			options3d: {
				enabled: true,
				alpha: 45,
			}
		},
		credits:{
			enabled:false
				 },
				 exporting: {
			enabled:false
				 },
				 
		title: {
			text: '消费用户排名',
			style:{color:'#fff'}
		},
		subtitle: {
			text: '数据来源: 来自自动售货柜大数据平台',
			style:{color:'#a6a6a6'}
		},
		plotOptions: {
			pie: {
				innerSize: 100,
				depth: 45,
				dataLabels: {
				enabled: true,
				color: '#fff',
				connectorColor: '#fff',
				format: '<b>{point.name}</b>: {point.percentage:.1f} %',
			  }
			}
		},
		series: [{
			name: '消费金额',
			data: [
				['杨先森', 8],
				['崔师傅', 3],
				['大肃然', 1],
				['薄楚', 6],
				['本旺', 8],
				['郑姐', 4],
				['姚卫东', 4],
				['Jack', 1],
				['鹏宇', 1]
			]
		}]
	});
});

//line_chart dynamic effect
var chart = new Highcharts.Chart('container1', {
	chart: {
			backgroundColor:'rgba(5, 14, 29, 0)'
			},
	title: {
		text: '单月日销售额对比',
		x: -20,
		style:{color:'#fff'}
	},
	colors: ['#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	credits:{
	  enabled:false
		   },
		   exporting: {
	  enabled:false
		   },
	subtitle: {
		text: '数据来源: 来自自动售货柜大数据平台',
		x: -20,
		style:{color:'#a6a6a6'}
	},
	xAxis: {
		 labels:{
            style:{
                color:'#d9d9d9'
            }
        },
		categories: ['1日','2日','3日','4日','5日','6日','7日','8日','9日','10日','11日','12日','13日','14日','15日','16日','17日','18日','19日','20日','21日','22日','23日','24日','25日','26日','27日','28日','29日','30日','31日' ]
	},
	yAxis: {
		labels:{
            style:{
                color:'#d9d9d9'
            }
        },
		title: {
			text: '交易额 (元)',
			style:{color:'#d9d9d9'}
		},
		plotLines: [{
			value: 0,
			width: 1,
			color: '#808080'
		}]
	},
	tooltip: {
		valueSuffix: '元'
	},
	legend: {
		layout: 'vertical',
		align: 'right',
		verticalAlign: 'middle',
		borderWidth: 0,
		itemStyle:{
            color:'#d9d9d9'
        }
	},
	series: [{
		name: '5月',
		data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6,6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5]
	}, {
		name: '6月',
		data: [2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5,-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8]
	}, {
		name: '7月',
		data: [4, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0,-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6]
	}]
});

//column dynamic effect
$('#container2').highcharts({
	chart: {
		type: 'column',
		backgroundColor:'rgba(5, 14, 29, 0)'
	},
	credits:{
	  enabled:false
		   },
		   exporting: {
	  enabled:false
		   },
	title: {
		text: '商品月销售额对比',
		style:{color:'#fff'}
	},
	colors: ['#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
	subtitle: {
		text: '数据来源: 来自自动售货柜大数据平台',
		style:{color:'#a6a6a6'}
	},
	xAxis: {
		labels:{
            style:{
                color:'#d9d9d9'
            }
        },
		categories: [
			'一月',
			'二月',
			'三月',
			'四月',
			'五月',
			'六月',
			'七月',
			'八月',
			'九月',
			'十月',
			'十一月',
			'十二月'
		],
		crosshair: true
	},
	yAxis: {
		labels:{
            style:{
                color:'#d9d9d9'
            }
        },
		min: 0,
		title: {
			text: '销售额 (元)',
			style:{color:'#d9d9d9'}
		}
	},
	legend: {
		itemStyle:{
            color:'#d9d9d9'
        }
	},
	tooltip: {
		headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
		pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
		'<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
		footerFormat: '</table>',
		shared: true,
		useHTML: true
	},
	plotOptions: {
		column: {
			pointPadding: 0.2,
			borderWidth: 0
		}
	},
	series: [{
		name: '2015',
		data: [219.9, 71.5, 206.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
	}, {
		name: '2016',
		data: [223.6, 178.8, 98.5, 193.4, 106.0, 184.5, 105.0, 204.3, 91.2, 83.5, 106.6, 92.3]
	}, {
		name: '2017',
		data: [248.9, 138.8, 139.3, 141.4, 147.0, 148.3, 159.0, 159.6, 152.4, 65.2, 159.3, 251.2]
	}]
});
		
		
//time  dynamic effect
function showLocale(objD) {
	var str, colorhead, colorfoot;
	var yy = objD.getYear();
	if (yy < 1900) yy = yy + 1900;
	var MM = objD.getMonth() + 1;
	if (MM < 10) MM = '0' + MM;
	var dd = objD.getDate();
	if (dd < 10) dd = '0' + dd;
	var hh = objD.getHours();
	if (hh < 10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if (mm < 10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if (ss < 10) ss = '0' + ss;
	var ww = objD.getDay();
	if (ww == 0) colorhead = "<font color=\"#FFFFFF\">";
	if (ww > 0 && ww < 6) colorhead = "<font color=\"#FFFFFF\">";
	if (ww == 6) colorhead = "<font color=\"#FFFFFF\">";
	if (ww == 0) ww = "星期日";
	if (ww == 1) ww = "星期一";
	if (ww == 2) ww = "星期二";
	if (ww == 3) ww = "星期三";
	if (ww == 4) ww = "星期四";
	if (ww == 5) ww = "星期五";
	if (ww == 6) ww = "星期六";
	colorfoot = "</font>";
	//str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + ww + colorfoot;
	str = colorhead + yy + "-" + MM + "-" + dd + " " + hh + ":" + mm + ":" + ss + "  " + colorfoot;
	return (str);
}
function tick() {
	var today;
	today = new Date();
	document.getElementById("localtime").innerHTML = showLocale(today);
	window.setTimeout("tick()", 1000);
}
tick();

		

//sale today dynamic effect
$(function() {
	setInterval(function() {
		var num = Math.floor(Math.random() * 10);
		var num1 = Math.floor(Math.random() * 10);
		var num2 = Math.floor(Math.random() * 10);
		var num3 = Math.floor(Math.random() * 10);
		var num4 = Math.floor(Math.random() * 10);

		$("#Transaction1").html(num);
		$("#Transaction2").html(num1);
		$("#Transaction3").html(num2);
		$("#Transaction4").html(num3);
		$("#Transaction5").html(num4);
		$("#Transaction6").html(num4);
	}, 1000);
});





