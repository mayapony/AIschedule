var language = 'zh'
var table0 = new CourseTable(2021, 84)
var unitCount = 12
var index = 0
var activity = null
var teachers = [{ id: 660, name: '陈凤民', lab: false }]
var actTeachers = [{ id: 660, name: '陈凤民', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','), // teacherId
  actTeacherName.join(','), // teacherName
  '5224(11311111.94)', // courseId
  '大学英语（1）(11311111.94)', // courseName
  '29', // roomId
  '6J105(东校区)', // roomName
  '00000111111111111110000000000000000000000000000000000', // validWeeks
  null, // taskId
  null, // remark
  assistantName, // assistantName
  '',
  ''
)
index = 2 * unitCount + 2
table0.activities[index][table0.activities[index].length] = activity
index = 2 * unitCount + 3
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 660, name: '陈凤民', lab: false }]
var actTeachers = [{ id: 660, name: '陈凤民', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '5224(11311111.94)',
  '大学英语（1）(11311111.94)',
  '29',
  '6J105(东校区)',
  '00000010101010101010000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 0 * unitCount + 0
table0.activities[index][table0.activities[index].length] = activity
index = 0 * unitCount + 1
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 660, name: '陈凤民', lab: false }]
var actTeachers = [{ id: 660, name: '陈凤民', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '5224(11311111.94)',
  '大学英语（1）(11311111.94)',
  '460',
  '9J101(东校区)',
  '00000101010101010100000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 0 * unitCount + 0
table0.activities[index][table0.activities[index].length] = activity
index = 0 * unitCount + 1
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 256, name: '张雷', lab: false }]
var actTeachers = [{ id: 256, name: '张雷', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '6185(12329520.01)',
  '宪法(12329520.01)',
  '107',
  '5J305(东校区)',
  '00000111111111100000000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 4 * unitCount + 0
table0.activities[index][table0.activities[index].length] = activity
index = 4 * unitCount + 1
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 256, name: '张雷', lab: false }]
var actTeachers = [{ id: 256, name: '张雷', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '6185(12329520.01)',
  '宪法(12329520.01)',
  '432',
  '5J206(东校区)',
  '00000111111111100000000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 1 * unitCount + 5
table0.activities[index][table0.activities[index].length] = activity
index = 1 * unitCount + 6
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 499, name: '邓琼', lab: false }]
var actTeachers = [{ id: 499, name: '邓琼', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '9621(12329830.01)',
  '法理学（一）(12329830.01)',
  '513',
  '6J404(东校区)',
  '00000001111111111100000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 0 * unitCount + 2
table0.activities[index][table0.activities[index].length] = activity
index = 0 * unitCount + 3
table0.activities[index][table0.activities[index].length] = activity
index = 0 * unitCount + 4
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 268, name: '刘昆笛', lab: false }]
var actTeachers = [{ id: 268, name: '刘昆笛', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '9(16311010.52)',
  '思想道德修养与法律基础(16311010.52)',
  '31',
  '6J107(东校区)',
  '00000011111111111110000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''function scheduleHtmlProvider(iframeContent = '', frameContent = '', dom = document) {
    let res = ''
    getIds(ids => {
      console.log(ids)
      res = postCourseTableForStd(ids)
    })
    return res
  }
  
  function postCourseTableForStd(ids) {
    let res = request(
      'POST',
      `ignoreHead=1&setting.kind=std&startWeek=&project.id=1&semester.id=81&ids=${ids}`,
      'courseTableForStd!courseTable.action'
    ).replace(/[\r\n]/g, '')
  //   console.log(res)
    res = res.match(/\/\/ function CourseTable in TaskActivity\.js.+<\/script>/)[0]
  //   console.log(res)
    return res
  }
  
  function getIds(callback) {
    let xhr
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest()
    } else {
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState + ' ' + xhr.status)
      if (xhr.readyState == 4 && xhr.status == 200) {
        let ids = xhr.responseText.match(/"ids","\d+"/)[0].match(/\d+/)[0]
        callback(ids)
      }
    }
    xhr.open('GET', 'courseTableForStd.action', false)
    xhr.send()
  }
  
  function request(tag, data, url) {
    let res = ''
    var xhr
    if (window.XMLHttpRequest) {
      // code for IE7+, Firefox, Chrome, Opera, Safari
      xhr = new XMLHttpRequest()
    } else {
      // code for IE6, IE5
      xhr = new ActiveXObject('Microsoft.XMLHTTP')
    }
    xhr.onreadystatechange = function () {
      console.log(xhr.readyState + ' ' + xhr.status)
      if ((xhr.readyState == 4 && xhr.status == 200) || xhr.status == 304) {
        res = xhr.responseText
      }
    }
    xhr.open(tag, url, false)
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(data)
    return res
  }
  
)
index = 1 * unitCount + 2
table0.activities[index][table0.activities[index].length] = activity
index = 1 * unitCount + 3
table0.activities[index][table0.activities[index].length] = activity
index = 1 * unitCount + 4
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 663, name: '周梁', lab: false }]
var actTeachers = [{ id: 663, name: '周梁', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '5134(07311120.01)',
  '大学计算机基础(07311120.01)',
  '117',
  '6J113(东校区)',
  '00000001111111111100000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 3 * unitCount + 5
table0.activities[index][table0.activities[index].length] = activity
index = 3 * unitCount + 6
table0.activities[index][table0.activities[index].length] = activity
index = 3 * unitCount + 7
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 325, name: '杜蓓蕾', lab: false }]
var actTeachers = [{ id: 325, name: '杜蓓蕾', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '4477(12319380.01)',
  '法学专业导论(12319380.01)',
  '95',
  '5J205(东校区)',
  '00000001111111100000000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 3 * unitCount + 0
table0.activities[index][table0.activities[index].length] = activity
index = 3 * unitCount + 1
table0.activities[index][table0.activities[index].length] = activity
var teachers = [{ id: 751, name: '吉萌', lab: false }]
var actTeachers = [{ id: 751, name: '吉萌', lab: false }]
var assistant = _.filter(actTeachers, function (actTeacher) {
  return (
    _.where(teachers, { id: actTeacher.id, name: actTeacher.name, lab: actTeacher.lab }).length == 0 &&
    actTeacher.lab == true
  )
})
var assistantName = ''
if (assistant.length > 0) {
  assistantName = assistant[0].name
  actTeachers = _.reject(actTeachers, function (actTeacher) {
    return _.where(assistant, { id: actTeacher.id }).length > 0
  })
}
var actTeacherId = []
var actTeacherName = []
for (var i = 0; i < actTeachers.length; i++) {
  actTeacherId.push(actTeachers[i].id)
  actTeacherName.push(actTeachers[i].name)
}
activity = new TaskActivity(
  actTeacherId.join(','),
  actTeacherName.join(','),
  '3574(16312021.30)',
  '形势与政策1(16312021.30)',
  '151',
  '5J111(东校区)',
  '00000000000000011110000000000000000000000000000000000',
  null,
  null,
  assistantName,
  '',
  ''
)
index = 3 * unitCount + 0
table0.activities[index][table0.activities[index].length] = activity
index = 3 * unitCount + 1
table0.activities[index][table0.activities[index].length] = activity
table0.marshalTable(2, 1, 19)
fillTable(table0, 7, 12, 0)
