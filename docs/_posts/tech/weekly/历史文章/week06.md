---
title: 周报第六期
---

## 技巧T
微信小程序地图<br />[https://blog.csdn.net/weixin_48145150/article/details/125874166](https://blog.csdn.net/weixin_48145150/article/details/125874166)<br />git clone https://gitee.com/susuhhhhhh/wxmini_demo.git
```json
// app.json
{
  "permission": {
    "scope.userLocation": {
      "desc": "你的位置信息将用于小程序定位"
    }
  },
  "requiredPrivateInfos": [
    "chooseLocation",
    "getLocation"
  ],
  "requiredBackgroundModes": [
    "location"
  ],
  "sitemapLocation": "sitemap.json"
}
```

```html
<map
  id="mapId"
  class="map"
  latitude="{{latitude}}"
  longitude="{{longitude}}"
></map>
```

```javascript
Page({
  data: {
    latitude: 30.21284,
    longitude: 120.213381,
    detail: '',
  },
  onLoad: function () {
    wx.showNavigationBarLoading();
  },
  onShow() {
      this.mapCtx = wx.createMapContext('mapId');
      this.addMarkers();
  },
	// 选择地址
  onChooseLocation() {
    this.setData({ fromLocation: true });
    const { latitude, longitude } = this.data.addressInfo;
    const _this = this;
    wx.chooseLocation({
      latitude,
      longitude,
      success: (res) => {
        if (res.address != '' && res.name != '') {
          const { address, latitude, longitude } = res;

          _this.setData({
            addressInfo: {
              address: address, // `${name}(${address})`,
              latitude,
              longitude,
            },
          });
        }
      },
    });
  },
  addMarkers() {
    const content = this.data.detail;
    const marker = {
      iconPath: '/images/location02.png',
      id: 1,
      width: 40,
      height: 40,
      title: content,
      // label: {
      //   display: 'BYCLICK',
      //   width: 140,
      //   anchorX: 20,
      //   anchorY: -70,
      //   borderWidth: 1,
      //   borderRadius: 10,
      //   padding: 10,
      //   bgColor: '#ffffff',
      //   content
      // }
    };

    const { latitude, longitude } = this.data;
    const positions = [
      {
        latitude,
        longitude,
      },
    ];
    const markers = [];
    positions.forEach((p, i) => {
      const newMarker = Object.assign(marker, p);
      newMarker.id = i + 1;
      markers.push(newMarker);

      this.mapCtx.addMarkers({
        markers,
        clear: false,
        complete(res) {
          console.log('addMarkers', res);
        },
      });
    });
  },

  onMarkerTap(e) {
    console.log(e, 'sign');
  },
});
```

## 分享S



[Highlight｜开源 Web 应用监控方案](https://www.highlight.io/)<br />外部应用监控服务，主打 session replay 功能，能够回放用户操作记录还提供了全面的搜索能力

[Faro｜ Grafana 开源的 Web 前端可观测性工具](https://grafana.com/oss/faro/)<br />通过简单配置就可以在web前端应用中采集日志、异常、自定义事件等数据，可以和 Grafana 可视化套件配合观测应用运行状态。

[Laudspeaker｜开源的客户旅程自动化平台](https://laudspeaker.com/)<br />客户旅程包括企业与客户间的所有消息，例如销售、营销、交易、访问网站等，通过 Laudspeaker 可以把类似流程通过可视化拖拽的方式编排为工作流，并对结果进行分析统计。

[独立软件承包商怎么收费？](https://news.ycombinator.com/item?id=32701769)<br />如果不知道市场合理价格，那就先定一个能够接受的每小时价格，然后直接翻一倍报价。只有这样才能知道真正的价格天花板在哪里。





