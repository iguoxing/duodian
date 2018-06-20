<template>
  <div class="index">
        <header class="navbar cleared top clearfix active">
            <div class="container containerHead">
                <div class="bar-item left"><span class="icon-logo left logo">
                        <img src="https://admore-cas.oss-cn-hangzhou.aliyuncs.com/duodian/assets/img/logo.png">
                    </span></div>
            </div>
        </header>

        <div class="mtBack"></div>

        <div class="mtIndexTitle">
            <p class="bigTitle">多点科技，多点未来</p>
            <p class="smallTitle">致力于未来数字社群生态
            </p>
        </div>

        <div class="footer-aboutUs">
            <a href="/about">
                <label class="btn btn-primary btn-radius login tmClickAboutUs">关于我们</label>
            </a>
        </div>

        <footer class="footer active">
            <div class="bar-item copy-right">@2018 MoreTech Inc.</div>
        </footer>

    </div>
</template>

<style scoped>
@import "../../assets/pc/css/style.css";

.mtIndexTitle {
    margin-top: -93px;
}

.container{    width: 1160px;}

.mtBack {
    position: absolute;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    z-Index: 0;
    border: none;
    opacity: 0.75;
    background: url("../../assets/pc/img/backImage.jpg") no-repeat 0px 0px;
    background-size: cover;
}
</style>
