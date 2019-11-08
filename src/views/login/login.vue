<!-- 登陆页面 -->
<template>
  <!-- 访问登陆页 -->
  <div class="login-wrap">
    <div class="ms-login">
      <div class="ms-title">国泰安AVR智慧教学系统</div>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
        <el-form-item prop="userName">
          <el-input v-model="ruleForm.userName" placeholder="请输入用户名或邮箱">
            <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
          </el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="ruleForm.pwd"
            @keyup.enter.native="submitForm('ruleForm')"
          >
            <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
          </el-input>
        </el-form-item>
        <div class="login-btn">
          <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
        </div>
      </el-form>
    </div>
    <!-- 二维码 -->
    <div class="qr_code">
      <div class="slide-code-ios">
        <img class="slideImgcode-ios" src="../../assets/img/resizeApi.png" alt="二维码" />
      </div>
      <!-- iosCode -->
      <div class="iosCode">
        <img class="img_ios" src="../../assets/img/qr_ios_img.png" />
      </div>
    </div>
  </div>
</template>

<script>
import mutations from "vuex";
export default {
  data: function() {
    return {
      tenantId: null,
      userId: null,
      realName: null,
      imgUrl: null,
      type: null,
      gender: null,
      phone: null,
      dfsServer: null,
      smsServer: null,
      ruleForm: {
        userName: null,
        pwd: null
      },
      //校验
      rules: {
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        pwd: [{ required: true, message: "请输入密码", trigger: "blur" }]
      }
    };
  },
  methods: {
    //login
    submitForm(formName) {
      var that = this;
      that.$refs[formName].validate(valid => {
        /* if (that.ruleForm.pwd != null) {
          let encryptor = new JSEncrypt();
          //公钥(base64-1024)
          let publicKey = `MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCjD4SagZAntpQOUSr5077y88rwxEcBNiyNTpsgb9FFLCxsj0vUbSJ6F/28f13a4MbD1DDPQambAc5ptQc6ql8R3Jfk+QDAG4klUxXo7AKxSJDe7pWK3IyN3znFLJyKYVVNxcHs8qX4/0Z9bM7Ga76Q1kvZqZS1OE8lSep3PSLA9wIDAQAB`;
          encryptor.setPublicKey(publicKey);
          that.ruleForm.pwd = encryptor.encrypt(that.ruleForm.pwd);
          // encryptor.setPrivateKey(privateKey);
          // let getWord = encryptor.decrypt(rsaPassWord);     
        } */
        if (valid) {
          //sessionStorage仅在当前会话下有效，关闭页面或浏览器后被清除
          //localStorage生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除localStorage信息，否则这些信息将永远存在。
          localStorage.setItem("ms_username", that.ruleForm.userName);
          this.$axios({
            method: "post",
            url: that.$store.state.baseUrl + "/ar-textbook/userInfo/login",
            data: {
              userName: that.ruleForm.userName,
              pwd: that.ruleForm.pwd
            }
          })
            .then(result => {
              if (result.data.returnMsg === "请求成功") {
                that.$store.state.tenantId = result.data.data.tenantId; //住户ID
                that.$store.state.userId = result.data.data.userId; //用户ID
                that.$store.state.imgUrl = result.data.data.imgUrl; //头像路径,全路径
                that.$store.state.dfsServer = result.data.data.dfsServer; //文件服务器地址前缀;
                //暂时用户相关图像拼接同步赛名师前缀使用smsServer
                that.$store.state.smsServer = result.data.data.smsServer; //正式环境,赛名师服务器地址前缀
                // 监听页面传值定义
                localStorage.setItem("userId", result.data.data.userId);
                localStorage.setItem("tenantId", result.data.data.tenantId);
                localStorage.setItem("imgUrl", result.data.data.imgUrl);
                localStorage.setItem("dfsServer", result.data.data.dfsServer);
                localStorage.setItem("smsServer", result.data.data.smsServer);
                this.realName = result.data.data.realName; //用户名称
                this.type = result.data.data.type; //类型
                this.gender = result.data.data.gender; //性别
                this.phone = result.data.data.phone; //手机
                this.$router.push("/");
              } else if (result.data.returnCode === 40005) {
                alert("用户或密码不正确");
              } else if (
                result.data.returnCode === 50001 ||
                result.data.returnCode === 500
              ) {
                alert("服务端异常" + result.data.returnCode);
              } else {
                alert("失败" + result.data.returnCode);
              }
            })
            .catch(reject => {
              console.log(reject);
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}

.rt_sta_link {
  right: 0;
  bottom: 100px;
  z-index: 10000;
}

/* .qr_code {
  width: 250px;
  height: 50px;
  background: rgba(212, 201, 201, 0.979);
} */

.qr_code .slide-code-ios .slideImgcode-ios {
  width: 80px;
  height: 80px;
}
.login-wrap .qr_code .iosCode .img_ios {
  display: none;
  width: 300px;
  height: 300px;
}
.login-wrap .qr_code:hover .iosCode .img_ios {
  display: block;
}

/* .qr_code .AndroidImage .AndroidImage_qr_img {
  width: 50px;
  height: 50px;
}
.login-wrap .qr_code .AndroidCode .qr_Android {
  display: none;
  width: 300px;
  height: 300px;
}
.login-wrap .qr_code:hover .AndroidCode .qr_Android {
  display: block;
} */

.qr_code {
  width: 170px;
  height: 107px;
  background: rgba(212, 201, 201, 0.979);
}
.slide-code-ios {
  width: 169px;
  height: 106px;
  background: url(../../assets/img/slide-codebg.png) no-repeat;
  background-size: 100% 100%;
  /*  margin: 8px auto 0; */
}
.slide-code-ios .slideImgcode-ios {
  width: 95px;
  height: 87px;
  float: right;
  margin: 22px 8px 0px 0px;
}
</style>
