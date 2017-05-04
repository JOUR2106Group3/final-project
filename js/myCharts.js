$(function () {
	var myChart1 = echarts.init(document.getElementById('main1'));

	var xAxisData = ['Less than once/week', '1day/week', '2days/week', {
		value: 'On Weekends:',
		textStyle: {
			color: 'red'
		}
	}, 'Less than once/week', '1-2days/week', '3-4days/week', '5days/week', {
			value: 'On Weekdays:',
			textStyle: {
				color: 'red'
			}
		}];
	var data01 = [];
	var data02 = [];
	// for (var i = 9; i < 19; i++) {
	//     data01.push(Math.round(Math.random() * 5) + 2);
	//     data02.push(Math.round(Math.random() * 6) + 1);
	// }
	option = {
		title: {
			text: 'Frequency of People Using Their Own Bicycles',
			x: 'center',
			subtext: 'Data of 3 Months from Travel Characteristics Survey 2011 Final Report(2014)\n(Unit: Precentage%)',
			x: 'center'
		},
		legend: {
			bottom: 20,
			data: ['For Businesss, Commuting or School Trips', 'For Other Purposes']
		},
		xAxis: {
			axisLabel: {
				show: false
			},
			splitLine: {
				show: false
			},
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		},
		yAxis: [{
			data: xAxisData,
			axisLabel: {
				inside: true,
				textStyle: {
					color: '#03a9f4'
				}
			},
			axisLine: {
				show: true,
				lineStyle: {
					color: 'rgba(96, 236, 236)',
					type: 'dashed'
				}
			},
			splitLine: {
				show: false
			},
			axisTick: {
				show: false
			},
		}],
		series: [{
			name: 'For Other Purposes',
			type: 'bar',
			stack: '总量',
			barWidth: 10,
			label: {
				normal: {
					show: true,
					position: 'right',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			},
			data: [19.7, 14.0, 8.6, 0, 8.0, 10.0, 4.5, 5.5, 0],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
						offset: 0,
						color: 'transparent'
					}, {
						offset: 0.4,
						color: 'rgba(239, 126, 45, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(239, 126, 45, 0.7)'
					}, {
						offset: 1,
						color: 'rgba(239, 126, 45, 1)'
					}])
				}
			}
		}, {
			name: 'For Businesss, Commuting or School Trips',
			type: 'bar',
			stack: '总量',
			label: {
				normal: {
					show: true,
					position: 'left',
					formatter: function (obj) {
						return Math.abs(obj.value) + '%';
					}
				}
			},
			data: [-1.7, -3.8, -2.0, -0, -0.9, -2.7, -1.7, -7.1, {
				value: -20,
				itemStyle: {
					normal: {
						color: 'rgba(255, 255, 255, 0)'
					}
				}
			}],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
						offset: 0,
						color: 'transparent'
					}, {
						offset: 0.4,
						color: 'rgba(244, 194, 66, 0.3)'
					}, {
						offset: 0.8,
						color: 'rgba(244, 194, 66, 0.7)'
					}, {
						offset: 1,
						color: 'rgba(244, 194, 66, 1)'
					}])
				}
			}
		}]
	};
	myChart1.setOption(option);
});

// precentage shown by bar charts
$(function () {
	var myChart2 = echarts.init(document.getElementById('main2'));

	option = {
		title: {
			text: 'Overall Precentage of Bicycles Usages (On Weekdays)',
			x: 'center'
		},
		legend: {
			bottom: 15,
			data: ['For Business, Commuting or School Trips', 'For Other Purposes', 'Not Owning Bicycles']
		},
		xAxis: {
			data: [],
			type: 'value',
			show: false,
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			show: false,
			axisTick: {
				show: false
			}
		},
		series: [{
			type: 'bar',
			name: 'For Business, Commuting or School Trips',
			data: [12.4],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}, {
			type: 'bar',
			name: 'For Other Purposes',
			data: [28.0],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}, {
			type: 'bar',
			name: 'Not Owning Bicycles',
			data: [59.6],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}]
	};
	myChart2.setOption(option);
});
//on weekends
$(function () {
	var myChart3 = echarts.init(document.getElementById('main3'));

	option = {
		title: {
			text: 'Overall Precentage of Bicycles Usages (On Weekends)',
			x: 'center'
		},
		legend: {
			bottom: 15,
			data: ['For Businesss, Commuting or School Trips', 'For Other Purposes', 'Not Owning Bicycles']
		},
		xAxis: {
			data: [],
			type: 'value',
			show: false,
			axisTick: {
				show: false
			}
		},
		yAxis: {
			type: 'category',
			show: false,
			axisTick: {
				show: false
			}
		},
		series: [{
			type: 'bar',
			name: 'For Businesss, Commuting or School Trips',
			data: [7.5],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}, {
			type: 'bar',
			name: 'For Other Purposes',
			data: [42.3],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}, {
			type: 'bar',
			name: 'Not Owning Bicycles',
			data: [100 - 42.3 - 7.5],
			stack: 'income',
			barWidth: 30,
			label: {
				normal: {
					show: true,
					position: 'inside',
					formatter: function (obj) {
						return obj.value + '%';
					}
				}
			}
		}]
	};
	myChart3.setOption(option);
});



//law enforcement
$(function () {
	var myChart4 = echarts.init(document.getElementById('main4'));

	option = {
		title: {
			text: 'Support of Potential Legal & Enforcement Measures on Cycling \n by Whether Respondents Knew How to Ride a Bicycle',
			x: 'center',
			subtext: 'Propotion of Support: % (Red for Respondents Knew How to Ride a Bike)',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: function (params, ticket, callback) {
				var res = params.seriesName;
				res += '<br/>' + params.name + ' : ' + params.percent + '%';
				return res;
			}
		},
		grid: {
			bottom: 60
		},
		xAxis: [{
			type: 'category',
			axisLine: {
				show: false
			},
			axisTick: {
				show: false
			},
			axisLabel: {
				interval: 0
			},
			data: ['Bike Registration', 'License for aged 11+', 'Helmets (on cycle tracks)', 'Helmets (on carriageways)']
		}],
		yAxis: [{
			show: false
		}],
		series: [{
			name: 'Registration of bicycles',
			center: [
				'20.0%',
				'30%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 39,
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 61,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Cyclists aged 11+ to apply for cycling licence',
			center: [
				'40.0%',
				'30%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 40,
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 60,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Compulsory wearing of safety helmets when cycling on cycle tracks',
			center: [
				'60.0%',
				'30%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 74,
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 26,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Compulsory wearing of safety helmets when cycling on carriageways',
			center: [
				'80.0%',
				'30%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 89,
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 11,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Registration of bicycles',
			center: [
				'20.0%',
				'70%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 49,
				itemStyle: {
					normal: {
						color: 'blue'
					}
				},
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 51,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Cyclists aged 11+ to apply for cycling licence',
			center: [
				'40.0%',
				'70%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 51,
				itemStyle: {
					normal: {
						color: 'blue'
					}
				},
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 49,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Compulsory wearing of safety helmets when cycling on cycle tracks',
			center: [
				'60.0%',
				'70%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 86,
				itemStyle: {
					normal: {
						color: 'blue'
					}
				},
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 14,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}, {
			name: 'Compulsory wearing of safety helmets when cycling on carriageways',
			center: [
				'80.0%',
				'70%'
			],
			radius: [
				'20%',
				'25%'
			],
			type: 'pie',
			labelLine: {
				normal: {
					show: false
				}
			},
			data: [{
				value: 90,
				itemStyle: {
					normal: {
						color: 'blue'
					}
				},
				name: 'Propotion of Support',
				label: {
					normal: {
						formatter: '{d} %',
						position: 'center',
						show: true,
						textStyle: {
							fontSize: '16',
							fontWeight: 'bold',
							color: '#000'
						}
					}
				}
			}, {
				value: 10,
				name: '',
				tooltip: {
					show: false
				},
				itemStyle: {
					normal: {
						color: '#aaa'
					},
					emphasis: {
						color: '#aaa'
					}
				},
				hoverAnimation: false
			}]
		}]
	};
	myChart4.setOption(option);
});

// chart for frequency of renting a bike
$(function () {
	var myChart5 = echarts.init(document.getElementById('main5'));


	option = {
		title: {
			text: 'Frequency of People Renting Bicycles for Recreation / Leisure Purposes',
			subtext: 'Precentage: %',
			x: 'center'
		},
		tooltip: {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		legend: {
			top: 60,
			orient: 'vertical',
			left: 'left',
			data: ['3-5days/week', '1-2days/week', '1day/month ~ 1day/week', 'less than 1day/month', '1-2days/week(On weekends)', '1day/month ~ 1day/week(On weekends)', 'less than 1day/month(On weekends)', 'never rent a bike']
		},
		series: [{
			name: '访问来源',
			type: 'pie',
			radius: '55%',
			center: ['50%', '60%'],
			data: [{
				value: 0.6,
				name: '3-5days/week'
			}, {
				value: 0.9,
				name: '1-2days/week'
			}, {
				value: 0.7,
				name: '1day/month ~ 1day/week'
			}, {
				value: 1.3,
				name: 'less than 1day/month'
			}, {
				value: 0.7,
				name: '1-2days/week(On weekends)'
			}, {
				value: 1.7,
				name: '1day/month ~ 1day/week(On weekends)'
			}, {
				value: 3.9,
				name: 'less than 1day/month(On weekends)'
			}, {
				value: 90.3,
				name: 'never rent a bike'
			}],
			itemStyle: {
				emphasis: {
					shadowBlur: 10,
					shadowOffsetX: 0,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			}
		}]
	};
	myChart5.setOption(option);
});