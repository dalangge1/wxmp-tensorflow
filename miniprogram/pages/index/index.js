Page({
  data: {
    pages: [
      {
        title: 'Blazeface',
        href: '/pages/blazeface/blazeface',
      },
      {
        title: 'FaceLandMarks',
        href: '/pages/face-landmarks/face-landmarks',
      },
      {
        title: 'PoseNet',
        href: '/pages/posenet/posenet',
      },
      {
        title: 'HandPose',
        href: '/pages/handpose/handpose',
      },
      {
        title: 'MoveNet Lightning',
        href: '/pages/movenet/movenet',
      },
    ],
  },
  onBtnClick(e) {
    const { item } = e.target.dataset;
    wx.navigateTo({ url: item.href });
  },
});
