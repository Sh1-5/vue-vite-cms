const rules = {
  name: [
    { required: true, message: '账号是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{5,10}$/,
      message: '账号必须是5-10位字母或者数字',
      trigger: 'blur'
    }
  ],
  password: [
    { required: true, message: '密码是必传内容', trigger: 'blur' },
    {
      pattern: /^[a-z0-9]{3,}$/,
      message: '密码必须是3位以上字母或者数字',
      trigger: 'blur'
    }
  ]
}

export default rules
