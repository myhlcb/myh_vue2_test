<template>
  <section>
    <div class="loading"></div>
    <audio class="song" controls loop>
      <source src="./gdbbq.mp3" />Your browser isn't invited for super fun audio time.
    </audio>
    <div class="balloons text-center" id="b1">
      <h2 style="color:#F2B300;">挚</h2>
    </div>
    <div class="balloons text-center" id="b2">
      <h2 style="color:#0719D4;">爱</h2>
    </div>
    <div class="balloons text-center" id="b3">
      <h2 style="color:#D14D39;">一</h2>
    </div>
    <div class="balloons text-center" id="b4">
      <h2 style="color:#8FAD00;">生</h2>
    </div>
    <div class="balloons text-center" id="b5">
      <h2 style="color:#8377E4;">小</h2>
    </div>
    <div class="balloons text-center" id="b6">
      <h2 style="color:#99C96A;">鱼</h2>
    </div>
    <div class="balloons text-center" id="b7">
      <h2 style="color:#20CFB4;">儿</h2>
    </div>

    <img src="./Balloon-Border.png" width="100%" class="balloon-border" />

    <div class="container">
      <div class="row">
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_yellow"></div>
        </div>
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_red"></div>
        </div>
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_blue"></div>
        </div>
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_green"></div>
        </div>
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_pink"></div>
        </div>
        <div class="col-md-2 col-xs-2 bulb-holder">
          <div class="bulb" id="bulb_orange"></div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 text-center">
          <img src="./banner.png" class="bannar" />
        </div>
      </div>
    </div>
    <div class="row message">
      <div class="col-md-12">
        <p>Khushbu</p>
      </div>
    </div>
    <div class="row cake-cover">
      <div class="col-md-12 texr-center">
        <div class="cake">
          <div class="velas">
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
            <div class="fuego"></div>
          </div>
          <div class="cobertura"></div>
          <div class="bizcocho"></div>
        </div>
      </div>
    </div>
    <div class="row message">
      <div class="col-md-12">
        <p>感谢上天，在29年前的今天给世界送来了一个最美丽的精灵！</p>
        <p>感谢上天，在一年前让我与这个美丽的精灵产生了交集。</p>
        <p>今天是你的生日，我亲爱的瑞瑞。</p>

        <p>一句问候，一声祝福，一切如愿，一生幸福，一世平安。</p>
        <p>我想你的时候最缠绵，无论我们相距多远，前面的路有多坎坷，只想说：你是我今生最大的幸福。</p>

        <p>从相识到相知你我之间已经过去了368个日日夜夜，有苦有辣更有甜。</p>
        <p>把368天酿成一杯酒，我一饮而尽，一滴不留。只有这样我才明白今生有你已是上天给我的最大恩赐。</p>

        <p>而我应该</p>
        <p>在你生活工作不顺心的时候，张开我的胸怀，抱着你，让你忘却不快。</p>
        <p>在你生气的时候，默默地陪着你，在你的身边，守着你，伴着你。</p>
        <p>在你对前途迷茫的时候，牵着你的手，勇敢地的告诉你:相信我，跟我走!</p>

        <p>你问我，是不是为了追上你而如此，是一时还是一直</p>
        <p>我回答你 ———— 是一世。</p>
        <p>因为，我爱你</p>
        <p>一生一世到永远</p>
        <p>一生一世对你好</p>
      </div>
    </div>
    <div class="navbar navbar-fixed-bottom">
      <div class="row" id="row">
        <div class="col-md-6 text-center col-md-offset-3">
          <button class="btn btn-primary" id="turn_on">Turn On Lights</button>
          <button class="btn btn-primary" id="play">Play Music</button>
          <button class="btn btn-primary" id="bannar_coming">Let's Decorate</button>
          <button class="btn btn-primary" id="balloons_flying">Fly With Balloons</button>
          <button class="btn btn-primary" id="cake_fadein">Most Delicious Cake Ever</button>
          <button class="btn btn-primary" id="light_candle">Light Candle</button>
          <button class="btn btn-primary" id="wish_message">Happy Birthday</button>
          <button class="btn btn-primary" id="story">A mesage for you</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Birthday',
  props: {
    msg: String
  }
}
</script>
<script src="./effect.js"></script>
<style scoped src="./family.css"></style>

<style scoped src="./stylesheet.css"></style>
<style scoped src="./loading.css"></style>
<style lang="less" scoped src="./cake.less"></style>
