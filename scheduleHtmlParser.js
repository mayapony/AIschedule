function scheduleHtmlParser(html) {
  // console.info(html)
  const $ = cheerio.load(html, { decodeEntities: false })
  let p = $('p')
  console.info(p)

  let courseInfos = []
  for (let i = 0; i < p.length; i++) {
    console.log(p[i]);
    let children = p[i].children // 获取p节点的子节点 
    
    let str = children[0].data + ' ' + children[3].data // 获取文本数据
    
    let arr = str.trim().split(/\s+/) // 将文本数据按空格分开

    let courseInfo = {} //课程相关信息
    courseInfo.teacher = '' // 课程所属教师为空

    if (arr.length == 5) {
      courseInfo.name = arr[0]
      courseInfo.position = arr[1] 
      courseInfo.weeks = getWeeks(arr[2])
      courseInfo.day = Number(arr[3])
      courseInfo.sections = getSections(arr[4]);

    } else if (arr.length === 4) { //当未安排教室时2
      console.log(arr)
      courseInfo.name = arr[0]
      courseInfo.position = '暂未安排教室' //未安排教室
      courseInfo.weeks = getWeeks(arr[1])
      courseInfo.day = Number(arr[2])
      courseInfo.sections = getSections(arr[3]);
    }

    courseInfos.push(courseInfo)
  }

  let sectionTimes = [
    {
      section: 1,
      startTime: '8:00',
      endTime: '8:45'
    },
    {
      section: 2,
      startTime: '8:50',
      endTime: '9:35'
    },
    {
      section: 3,
      startTime: '9:40',
      endTime: '10:35'
    },
    {
      section: 4,
      startTime: '10:40',
      endTime: '11:25'
    },
    {
      section: 5,
      startTime: '11:30',
      endTime: '12:15'
    },
    {
      section: 6,
      startTime: '14:30',
      endTime: '15:15'
    },
    {
      section: 7,
      startTime: '15:20',
      endTime: '16:05'
    },
    {
      section: 8,
      startTime: '16:10',
      endTime: '16:55'
    },
    {
      section: 9,
      startTime: '17:00',
      endTime: '17:45'
    },
    {
      section: 10,
      startTime: '17:50',
      endTime: '18:35'
    }
  ]

  console.info({
    courseInfos,
    sectionTimes
  })
  
  return { courseInfos: courseInfos,  sectionTimes: sectionTimes }
}

function getWeeks(s) {
  let weekArr = s.match(/\d+(.\d+)?/g)[0].split('~') // 获取是1~10
  let begin = weekArr[0]
  let end = weekArr[1]
  let weeks = []
  for (let i = Number(begin); i <= Number(end); i++) {
    weeks.push(i)
  }
  return weeks;
}

function getSections(s) {
  let sections = []
  let sectionArr = s.slice(1, s.length-1).split(',')
  for (let i = 0; i < sectionArr.length; i++) {
    let temp = {}
    temp.section = Number(sectionArr[i])
    sections.push(temp)
  }
  return sections
}
