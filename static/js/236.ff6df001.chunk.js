"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[236],{8236:function(e,r,s){s.r(r),s.d(r,{default:function(){return h}});var a=s(6907),n=s(1413),i=s(9439),t=s(9434),o=s(8724),l=s(7428),u=s(7989),d=s(2641),m=s(3329),c=function(){var e=l.Z.useForm(),r=(0,i.Z)(e,1)[0],s=(0,t.I0)(),a=(0,t.v9)((function(e){return e.auth})),c=a.isLoading,h=a.error;return(0,m.jsxs)(l.Z,(0,n.Z)((0,n.Z)({},{labelCol:{span:24},wrapperCol:{span:24}}),{},{form:r,name:"register",onFinish:function(e){var a=e.name,n=e.email,i=e.password;i===e.confirm&&(s((0,o.z2)({name:a,email:n,password:i})),!c&&!h&&r.resetFields())},size:"default",initialValues:{residence:["zhejiang","hangzhou","xihu"],prefix:"86"},style:{width:300},scrollToFirstError:!0,children:[(0,m.jsx)(l.Z.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:(0,m.jsx)(u.Z,{})}),(0,m.jsx)(l.Z.Item,{name:"password",label:"Password",rules:[{required:!0,message:"Please input your password!"}],hasFeedback:!0,children:(0,m.jsx)(u.Z.Password,{})}),(0,m.jsx)(l.Z.Item,{name:"confirm",label:"Confirm Password",dependencies:["password"],hasFeedback:!0,rules:[{required:!0,message:"Please confirm your password!"},function(e){var r=e.getFieldValue;return{validator:function(e,s){return s&&r("password")!==s?Promise.reject(new Error("The new password that you entered do not match!")):Promise.resolve()}}}],children:(0,m.jsx)(u.Z.Password,{})}),(0,m.jsx)(l.Z.Item,{name:"name",label:"Name",tooltip:"What do you want others to call you?",rules:[{required:!0,message:"Please input your name!",whitespace:!0}],children:(0,m.jsx)(u.Z,{})}),(0,m.jsx)(l.Z.Item,(0,n.Z)((0,n.Z)({},{wrapperCol:{xs:{span:24,offset:0},sm:{span:16,offset:4}}}),{},{children:(0,m.jsx)(d.ZP,{type:"primary",htmlType:"submit",children:"Register"})}))]}))};function h(){return(0,m.jsx)(a.B6,{children:(0,m.jsxs)("div",{children:[(0,m.jsx)(a.ql,{children:(0,m.jsx)("title",{children:"Registration"})}),(0,m.jsx)(c,{})]})})}}}]);
//# sourceMappingURL=236.ff6df001.chunk.js.map