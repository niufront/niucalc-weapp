Page({
  data: {
    username: '',
    password: '',
    confirmPassword: '',
    phone: '',
    email: ''
  },
  handleInput(e) {
    const field = e.currentTarget.dataset.field;
    let value = e.detail.value;
    // 使用正则表达式过滤，只保留字母和数字
    value = value.replace(/[^a-zA-Z0-9]/g, '');
    this.setData({
      [field]: value
    });
  },
  handlePhoneInput(e) {
    const field = e.currentTarget.dataset.field;
    let value = e.detail.value;
    // 手机号只允许输入数字
    value = value.replace(/\D/g, '');
    this.setData({
      [field]: value
    });
  },
  handleSubmit() {
    const { username, password, confirmPassword, phone, email } = this.data;
    // 简单的表单验证
    if (!username) {
      wx.showToast({ title: '请输入用户名', icon: 'none' });
      return;
    }
    if (!password) {
      wx.showToast({ title: '请输入密码', icon: 'none' });
      return;
    }
    if (password!== confirmPassword) {
      wx.showToast({ title: '两次输入的密码不一致', icon: 'none' });
      return;
    }
    if (!phone) {
      wx.showToast({ title: '请输入手机号', icon: 'none' });
      return;
    }
    if (!email) {
      wx.showToast({ title: '请输入邮箱', icon: 'none' });
      return;
    }
    // 这里可以添加注册逻辑，比如发送请求到服务器
    wx.showToast({ title: '注册成功', icon:'success' });
  }
});