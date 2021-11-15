
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd0f90c5H1FcY88UK/QyRTp', 'player');
// script/player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0
  },
  runJumpAction: function runJumpAction() {
    // 跳跃上升
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); // 下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); // 创建一个缓动，按 jumpUp、jumpDown 的顺序执行动作

    var tween = cc.tween().sequence(jumpUp, jumpDown); // 不断重复

    return cc.tween().repeatForever(tween);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  //update 会在场景加载后每帧调用一次，我们一般把需要经常计算或及时更新的逻辑内容放在 update 中。
  //根据键盘输入获得加速度方向后，就需要每帧在 update 中计算主角的速度和位置
  update: function update(dt) {
    // 根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } // 限制主角的速度不能超过最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } // 根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  onLoad: function onLoad() {
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start();
    this.accLeft = false;
    this.accRight = false; // 主角当前水平方向速度

    this.xSpeed = 0; // 初始化键盘输入监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    // 取消键盘输入监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxwbGF5ZXIuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJqdW1wSGVpZ2h0IiwianVtcER1cmF0aW9uIiwibWF4TW92ZVNwZWVkIiwiYWNjZWwiLCJydW5KdW1wQWN0aW9uIiwianVtcFVwIiwidHdlZW4iLCJieSIsInkiLCJlYXNpbmciLCJqdW1wRG93biIsInNlcXVlbmNlIiwicmVwZWF0Rm9yZXZlciIsIm9uS2V5RG93biIsImV2ZW50Iiwia2V5Q29kZSIsIm1hY3JvIiwiS0VZIiwiYSIsImFjY0xlZnQiLCJkIiwiYWNjUmlnaHQiLCJvbktleVVwIiwidXBkYXRlIiwiZHQiLCJ4U3BlZWQiLCJNYXRoIiwiYWJzIiwibm9kZSIsIngiLCJvbkxvYWQiLCJqdW1wQWN0aW9uIiwidGhlbiIsInN0YXJ0Iiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUUsQ0FESjtBQUVSQyxJQUFBQSxZQUFZLEVBQUUsQ0FGTjtBQUdSQyxJQUFBQSxZQUFZLEVBQUUsQ0FITjtBQUlSQyxJQUFBQSxLQUFLLEVBQUU7QUFKQyxHQUhQO0FBU0xDLEVBQUFBLGFBVEssMkJBU1k7QUFDYjtBQUNBLFFBQUlDLE1BQU0sR0FBR1QsRUFBRSxDQUFDVSxLQUFILEdBQVdDLEVBQVgsQ0FBYyxLQUFLTixZQUFuQixFQUFpQztBQUFDTyxNQUFBQSxDQUFDLEVBQUUsS0FBS1I7QUFBVCxLQUFqQyxFQUF1RDtBQUFDUyxNQUFBQSxNQUFN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QUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTNDLEVBQW1ELEtBQUtqQixPQUF4RCxFQUFpRSxJQUFqRTtBQUNILEdBekVJO0FBMEVMa0IsRUFBQUEsU0ExRUssdUJBMEVRO0FBQ1Q7QUFDQTVDLElBQUFBLEVBQUUsQ0FBQ3NDLFdBQUgsQ0FBZU8sR0FBZixDQUFtQjdDLEVBQUUsQ0FBQ3dDLFdBQUgsQ0FBZUMsU0FBZixDQUF5QkMsUUFBNUMsRUFBc0QsS0FBS3pCLFNBQTNELEVBQXNFLElBQXRFO0FBQ0FqQixJQUFBQSxFQUFFLENBQUNzQyxXQUFILENBQWVPLEdBQWYsQ0FBbUI3QyxFQUFFLENBQUN3QyxXQUFILENBQWVDLFNBQWYsQ0FBeUJFLE1BQTVDLEVBQW9ELEtBQUtqQixPQUF6RCxFQUFrRSxJQUFsRTtBQUNILEdBOUVJO0FBK0VMVyxFQUFBQSxLQS9FSyxtQkErRUksQ0FFUixDQWpGSSxDQW1GTDs7QUFuRkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGp1bXBIZWlnaHQ6IDAsXHJcbiAgICAgICAganVtcER1cmF0aW9uOiAwLFxyXG4gICAgICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgICAgICBhY2NlbDogMCxcclxuICAgIH0sXHJcbiAgICBydW5KdW1wQWN0aW9uICgpIHtcclxuICAgICAgICAvLyDot7Pot4PkuIrljYdcclxuICAgICAgICB2YXIganVtcFVwID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwge3k6IHRoaXMuanVtcEhlaWdodH0sIHtlYXNpbmc6ICdzaW5lT3V0J30pO1xyXG4gICAgICAgIC8vIOS4i+iQvVxyXG4gICAgICAgIHZhciBqdW1wRG93biA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHt5OiAtdGhpcy5qdW1wSGVpZ2h0fSwge2Vhc2luZzogJ3NpbmVJbid9KTtcclxuICAgICAgICAvLyDliJvlu7rkuIDkuKrnvJPliqjvvIzmjIkganVtcFVw44CBanVtcERvd24g55qE6aG65bqP5omn6KGM5Yqo5L2cXHJcbiAgICAgICAgdmFyIHR3ZWVuID0gY2MudHdlZW4oKS5zZXF1ZW5jZShqdW1wVXAsIGp1bXBEb3duKVxyXG4gICAgICAgIC8vIOS4jeaWremHjeWkjVxyXG4gICAgICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gICAgfSxcclxuICAgIG9uS2V5RG93biAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NSaWdodCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25LZXlVcCAoZXZlbnQpIHtcclxuICAgICAgICBzd2l0Y2goZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICAgICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5hY2NMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBjYy5tYWNyby5LRVkuZDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL3VwZGF0ZSDkvJrlnKjlnLrmma/liqDovb3lkI7mr4/luKfosIPnlKjkuIDmrKHvvIzmiJHku6zkuIDoiKzmiorpnIDopoHnu4/luLjorqHnrpfmiJblj4rml7bmm7TmlrDnmoTpgLvovpHlhoXlrrnmlL7lnKggdXBkYXRlIOS4reOAglxyXG4gICAgLy/moLnmja7plK7nm5jovpPlhaXojrflvpfliqDpgJ/luqbmlrnlkJHlkI7vvIzlsLHpnIDopoHmr4/luKflnKggdXBkYXRlIOS4reiuoeeul+S4u+inkueahOmAn+W6puWSjOS9jee9rlxyXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgICAgICAvLyDmoLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcclxuICAgICAgICBpZiAodGhpcy5hY2NMZWZ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMueFNwZWVkIC09IHRoaXMuYWNjZWwgKiBkdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDpmZDliLbkuLvop5LnmoTpgJ/luqbkuI3og73otoXov4fmnIDlpKflgLxcclxuICAgICAgICBpZiAoTWF0aC5hYnModGhpcy54U3BlZWQpID4gdGhpcy5tYXhNb3ZlU3BlZWQpIHtcclxuICAgICAgICAgICAgdGhpcy54U3BlZWQgPSB0aGlzLm1heE1vdmVTcGVlZCAqIHRoaXMueFNwZWVkIC8gTWF0aC5hYnModGhpcy54U3BlZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g5qC55o2u5b2T5YmN6YCf5bqm5pu05paw5Li76KeS55qE5L2N572uXHJcbiAgICAgICAgdGhpcy5ub2RlLnggKz0gdGhpcy54U3BlZWQgKiBkdDtcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudGhlbihqdW1wQWN0aW9uKS5zdGFydCgpXHJcblxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICAvLyDkuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcclxuICAgICAgICB0aGlzLnhTcGVlZCA9IDA7XHJcblxyXG4gICAgICAgIC8vIOWIneWni+WMlumUruebmOi+k+WFpeebkeWQrFxyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9uKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfVVAsIHRoaXMub25LZXlVcCwgdGhpcyk7IFxyXG4gICAgfSxcclxuICAgIG9uRGVzdHJveSAoKSB7XHJcbiAgICAgICAgLy8g5Y+W5raI6ZSu55uY6L6T5YWl55uR5ZCsXHJcbiAgICAgICAgY2Muc3lzdGVtRXZlbnQub2ZmKGNjLlN5c3RlbUV2ZW50LkV2ZW50VHlwZS5LRVlfRE9XTiwgdGhpcy5vbktleURvd24sIHRoaXMpO1xyXG4gICAgICAgIGNjLnN5c3RlbUV2ZW50Lm9mZihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19