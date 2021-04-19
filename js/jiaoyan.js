// 登录验证
$(function () {
    $("#form2")
        .bootstrapValidator({
            message: "This value is not valid",
            feedbackIcons: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh",
            },
            fields: {
                email: {
                    message: "邮箱验证失败",
                    validators: {
                        notEmpty: {
                            message: "用户邮箱不能为空",
                        },
                        stringLength: {
                            min: 8,
                            max: 20,
                            // message: '请输入正确邮箱格式'
                        },
                        regexp: {
                            regexp: /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/,
                            message: "请注意邮箱格式",
                        },
                    },
                },
                password: {
                    validators: {
                        notEmpty: {
                            message: "密码不能为空",
                        },
                        stringLength: {
                            min: 6,
                            max: 20,
                            message: "密码不能小于6位",
                        },
                    },
                },
            },
        })
        .on("success.form.bv", function (e) {
            //点击提交之后

            alert("验证成功登陆跳转。。。");
            return;

            // Use Ajax to submit form data 提交至form标签中的action，result自定义
            $.post("", "", function (result) {
                //do something...
            });
        });
    $("#form1")
        .bootstrapValidator({
            message: "This value is not valid",
            feedbackIcons: {
                valid: "glyphicon glyphicon-ok",
                invalid: "glyphicon glyphicon-remove",
                validating: "glyphicon glyphicon-refresh",
            },
            fields: {
                phone: {
                    message: "手机验证失败",
                    validators: {
                        notEmpty: {
                            message: "手机号不能为空",
                        },
                        stringLength: {
                            min: 11,
                            max: 11,
                            // message: '请输入正确手机格式'
                        },
                        regexp: {
                            regexp: /^((13[0-9])|(17[0-1,6-8])|(15[^4,\\D])|(18[0-9]))\d{8}$/,
                            message: "请注意手机格式",
                        },
                    },
                },
                // 注册密码校验
                password1: {
                    validators: {
                        identical: {
                            field: "password2",
                        },
                        notEmpty: {
                            message: "密码不能为空",
                        },
                        stringLength: {
                            min: 6,
                            max: 20,
                            message: "密码不能小于6位",
                        },
                    },
                },

                password2: {
                    validators: {
                        identical: {
                            field: "password1",
                            message: "两次输入的密码不相符",
                        },
                        notEmpty: {
                            // message: '密码不能为空'
                        },

                        stringLength: {
                            min: 6,
                            max: 20,
                        },
                    },
                },
                // 单选框的校验
                Fruit: {
                    validators: {
                        notEmpty: {
                            message: "不为空"
                        }
                    }

                }


            },
        })
        .on("success.form.bv", function (e) {
            //点击提交之后

            alert("验证成功登陆跳转。。。");
            return;

            // Use Ajax to submit form data 提交至form标签中的action，result自定义
            $.post("", "", function (result) {
                //do something...
            });
        });
});
