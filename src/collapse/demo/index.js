Page({
  data: {
    collapseData: [{
      title: '这是一个title1',
      showArrow: false,
      contentItems: ['这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分']
    }, {
      title: '这是一个title2',
      isActive: true,
      contentItems: ['这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分']
    }, {
      title: '这是一个title1',
      contentItems: ['这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分', '这是一个content的部分']
    }]
  },

  onChange(evt) {
    console.log('collapse is changed evt: ', evt);
  }
});