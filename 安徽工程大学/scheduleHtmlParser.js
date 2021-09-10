function scheduleHtmlParser(js) {
  let courseInfos
  try {
    courseInfos = main(js)
  } catch (err) {
    console.info(err)
    courseInfos = errInfo()
  }
  console.info(courseInfos)
  return {
    courseInfos,
  }
}

function main(js) {
  allTeachersStr = js.match(/var teachers = \[{id:\d+,name:"\D+",lab:false}\];/gm)
  allMoreInfoStr = js.match(/\d+\(\d+\.\d+\)",".+?","\d+","\d\D\d{3}\(\D+\)","\d+?"/gm)
  allIndexInfoStr = js.match(
    /(			index =\d\*unitCount\+\d;			table0\.activities\[index]\[table0.activities\[index]\.length]=activity;)+/gm
  )
  fillTableInfo = js.match(/\(\d,\d+?,\d+\)/)[0].match(/\d+/g)
  let courseInfos = []
  for (let i = 0; i < allTeachersStr.length; i++)
    courseInfos.push(getCourseInfo(allTeachersStr[i], allMoreInfoStr[i], allIndexInfoStr[i], fillTableInfo))
  console.info(courseInfos)
  return courseInfos
}

function getCourseInfo(teachersStr, moreInfoStr, indexInfoStr, fillTableInfo) {
  moreInfoStr.replace(/"/g, '')
  let teacher = getTeacherName(teachersStr)
  let position = getPosition(moreInfoStr)
  let name = getName(moreInfoStr)
  let weeks = getWeeks(moreInfoStr, fillTableInfo)
  let sectionsAndDay = getSectionsAndDay(indexInfoStr)
  return {
    teacher,
    position,
    name,
    weeks,
    sections: sectionsAndDay.sections,
    day: sectionsAndDay.day,
  }
}

function getSectionsAndDay(indexInfoStr) {
  const unitCount = 12
  let sections = []
  let indexArr = indexInfoStr.match(/index =\d+\*unitCount\+\d+/g)
  let index = 0
  indexArr.forEach(item => {
    eval(item)
    sections.push({
      section: (index % unitCount) + 1,
    })
  })
  let day = parseInt(index / (unitCount - 1) + 1)
  return {
    sections,
    day,
  }
}

function getWeeks(moreInfoStr, fillTableInfo) {
  let startWeek = parseInt(fillTableInfo[1])
  let from = parseInt(fillTableInfo[0])
  let weeksStr = moreInfoStr.split(',')[4]
  let weeks = []
  for (let i = 0; i < weeksStr.length; i++) if (weeksStr[i] == '1') weeks.push(i + startWeek - from)
  return weeks
}

function getName(moreInfoStr) {
  // return moreInfoStr.split(',')[1].split('(')[0].replaceAll('"', '')
  return moreInfoStr.split(',')[1].split('(')[0].replace(/"/g, '')
}

function getPosition(moreInfoStr) {
  // return moreInfoStr.split(',')[3].replaceAll('"', '')
  return moreInfoStr.split(',')[3].replace(/"/g, '')
}

function getTeacherName(teachersStr) {
  // return teachersStr.match(/"[^"]*"/)[0].replaceAll('"', '')
  return teachersStr.match(/"[^"]*"/)[0].replace(/"/g, '')
}

function deleteBracket(str) {
  return str.replace(/\(|\)/g, '')
}

function errInfo() {
  return [
    {
      day: 1,
      name: '错误请联系开发人员',
      position: 'QQ: 1327909321',
      sections: [{ section: 1 }, { section: 2 }, { section: 3 }],
      teacher: '@maya',
      weeks: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
    },
  ]
}
