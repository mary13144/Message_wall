import Mock from 'mockjs'

const note = Mock.mock({
	"data|3-30": [{
		//类型
		"type|0-1": 0,
		//创建时间
		"moment": '@date(\'yyyy-MM-dd\')',
		//id
		"id|+1": 1,
		//userId
		"userId|+1": 101,
		//内容
		"message": "@cword(24,96)",
		//label
		"labelIndex|0-10": 0,
		//name
		"name": "@cname",
		//like
		"loveNumber|0-120": 0,
		//评论
		"commentNumber|0-30": 0,
		//背景色
		"imgUrl|0-4": 0,
		//是否撤销
		"revoke|0-20": 0,
		//是否举报
		"report|0-20": 0,
	}]
})

export default note;