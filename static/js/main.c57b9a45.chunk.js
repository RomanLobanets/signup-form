(this["webpackJsonpsighup-form"]=this["webpackJsonpsighup-form"]||[]).push([[0],{27:function(e,t,a){e.exports={enter:"fadePopUp_enter__1Tvyi",enterActive:"fadePopUp_enterActive__3_Isq",exit:"fadePopUp_exit__28YMv",exitActive:"fadePopUp_exitActive__8V2G3"}},3:function(e,t,a){e.exports={enter:"errorPopUp_enter__37KkF",enterActive:"errorPopUp_enterActive__27QQh",exit:"errorPopUp_exit__3c2kO",exitActive:"errorPopUp_exitActive__1mfcP"}},31:function(e,t,a){e.exports=a(73)},36:function(e,t,a){},37:function(e,t,a){},4:function(e,t,a){e.exports={container:"Form_container__1wTMq",title:"Form_title__1CRhv",slideintitle:"Form_slideintitle__c-ihh",titlecontainer:"Form_titlecontainer__2AWGe",line:"Form_line__1Fc_n",slideinline:"Form_slideinline__3XnNk",form:"Form_form__3AigA",inputcontainer:"Form_inputcontainer__1qDEg",slideinput:"Form_slideinput__tjPEi",inputname:"Form_inputname__PByVP",inputemail:"Form_inputemail__183j5",inputaccount:"Form_inputaccount__3ansx",inputmessage:"Form_inputmessage__1UvrQ",label:"Form_label__3xLUx",input:"Form_input__1JJD1",textarea:"Form_textarea__39QHX",button:"Form_button__3j2QS",slidebutton:"Form_slidebutton__1BAQ9",buttonhelper:"Form_buttonhelper__2-2lc",error:"Form_error__3jzQK",errorEmail:"Form_errorEmail__15Teh",submited:"Form_submited__1PEp6",flexcontainer:"Form_flexcontainer__35p7G",switchcontainer:"Form_switchcontainer__10EyR",labelswitch:"Form_labelswitch__19pXC",toggle:"Form_toggle__1d2Kx",togglestate:"Form_togglestate__mWQ9e",indicator:"Form_indicator__1K82g"}},5:function(e,t,a){e.exports={container:"Form2_container__hQHyF",title:"Form2_title__20nCD",slideintitle:"Form2_slideintitle__6O29e",titlecontainer:"Form2_titlecontainer__25nYu",line:"Form2_line__2V_4x",slideinline:"Form2_slideinline__1dj2T",form:"Form2_form__1pxhR",inputcontainer:"Form2_inputcontainer__214ws",slideinput:"Form2_slideinput__gy_G5",inputname:"Form2_inputname__bjIJl",inputemail:"Form2_inputemail__1TYis",inputaccount:"Form2_inputaccount__TyGHT",inputmessage:"Form2_inputmessage__1yupt",label:"Form2_label__3Fy5I",input:"Form2_input__3ltgL",textarea:"Form2_textarea__1aUya",button:"Form2_button__3Rixd",slidebutton:"Form2_slidebutton__wbU5B",buttonhelper:"Form2_buttonhelper__3oJOI",error:"Form2_error__2rEiV",errorEmail:"Form2_errorEmail__3yFcH",submited:"Form2_submited__1SSf1",flexcontainer:"Form2_flexcontainer__39I_9",switchcontainer:"Form2_switchcontainer__1sfkT",labelswitch:"Form2_labelswitch__1Y_Ek",toggle:"Form2_toggle__3P5PC",togglestate:"Form2_togglestate__1xvk8",indicator:"Form2_indicator__1C9l6"}},73:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(2),o=a.n(r),l=(a(36),a(9)),c=a(25),m=a(26),s=a(29),u=a(28),_=a(4),p=a.n(_),d=a(5),f=a.n(d),E=(a(37),a(76)),b=a(27),v=a.n(b),g=a(3),F=a.n(g),h=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={accounts:[],active:!1,activeStyle:!1,name:"",email:"",acountType:"",comment:"",error:!1,erroremail:!1,errorunique:!1,submited:!1},e.selectorHandler=function(t){document.querySelector(".selected").textContent=t.target.textContent,e.setState({active:!1})},e.handleSubmit=function(t){if(e.state.name.length<2||e.state.email.length<2||e.state.acountType.length<2)return e.setState({error:!0}),t.preventDefault(),e.setState({name:"",email:"",acountType:"",comment:""}),void setTimeout((function(){e.setState((function(){return{error:!1}}))}),3e3);if(!e.state.email.includes("@"))return t.preventDefault(),e.setState({erroremail:!0}),e.setState({email:""}),void setTimeout((function(){e.setState((function(){return{erroremail:!1}}))}),3e3);t.preventDefault();var a={name:e.state.name,email:e.state.email,acountType:e.state.acountType,comment:e.state.comment};e.setState((function(t){return e.state.accounts.find((function(t){return t.email===e.state.email}))?(setTimeout((function(){e.setState((function(){return{errorunique:!1}}))}),3e3),{errorunique:!0,accounts:Object(l.a)(t.accounts)}):(setTimeout((function(){e.setState((function(){return{submited:!1}}))}),3e3),{submited:!0,accounts:[].concat(Object(l.a)(t.accounts),[a])})})),e.setState({name:"",email:"",acountType:"",comment:""})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){JSON.parse(localStorage.getItem("style"))&&this.setState({activeStyle:JSON.parse(localStorage.getItem("style"))})}},{key:"render",value:function(){var e=this,t=null;return t=this.state.activeStyle?f.a:p.a,i.a.createElement("div",{className:t.container},i.a.createElement(E.a,{in:this.state.error,timeout:500,classNames:F.a,unmountOnExit:!0},i.a.createElement("div",{className:t.error},"all fields are required")),i.a.createElement(E.a,{in:this.state.errorunique,timeout:500,classNames:F.a,unmountOnExit:!0},i.a.createElement("div",{className:t.error},"Email exist in system")),i.a.createElement(E.a,{in:this.state.submited,timeout:500,classNames:F.a,unmountOnExit:!0},i.a.createElement("div",{className:t.submited},"Your Form is submited")),i.a.createElement("div",{className:t.titlecontainer},i.a.createElement("h2",{className:t.title},"JOIN CURRENT TODAY")),i.a.createElement("div",{className:t.line}),i.a.createElement("div",{className:t.switchcontainer},i.a.createElement("label",{className:t.labelswitch},i.a.createElement("div",{className:t.toggle},i.a.createElement("input",{onClick:function(){e.setState((function(e){return{activeStyle:!e.activeStyle}})),localStorage.setItem("style",!e.state.activeStyle)},className:t.togglestate,id:"toggle",type:"checkbox",defaultChecked:"true"===localStorage.getItem("style")?"true":""}),i.a.createElement("div",{className:t.indicator})))),i.a.createElement("form",{className:t.form},i.a.createElement("div",{className:t.flexcontainer},i.a.createElement("div",{className:"".concat(t.inputcontainer," ").concat(t.inputname)},i.a.createElement("label",{className:t.label},"Your Name "),i.a.createElement("input",{value:this.state.name,onChange:function(t){e.setState({name:t.target.value})},className:t.input,placeholder:"Who are you?",id:"name",type:"name"})),i.a.createElement("div",{className:"".concat(t.inputcontainer," ").concat(t.inputemail)},i.a.createElement("label",{className:t.label},"Your Email "),i.a.createElement(E.a,{in:this.state.erroremail,timeout:500,classNames:F.a,unmountOnExit:!0},i.a.createElement("div",{className:t.errorEmail},"Wrong Email")),i.a.createElement("input",{className:t.input,placeholder:"you@gmail.com",id:"email",type:"email",value:this.state.email,onChange:function(t){e.setState({email:t.target.value})}})),i.a.createElement("div",{className:"".concat(t.inputcontainer," ").concat(t.inputaccount)},i.a.createElement("label",{className:"label"},"Account "),i.a.createElement("div",{className:"containerselect"},i.a.createElement("div",{onClick:function(){e.setState({active:!0})},className:"selected"},"Individual"),i.a.createElement(E.a,{in:this.state.active,timeout:500,classNames:v.a,unmountOnExit:!0},i.a.createElement("div",{className:"selectedbox"},i.a.createElement("div",{className:"optioncontainer active"},i.a.createElement("div",{onClick:function(t){e.selectorHandler(t),e.setState({acountType:t.target.textContent})},className:"option"},i.a.createElement("input",{type:"radio",className:"radio",id:"auto",name:"category"}),i.a.createElement("label",null,"Individual")),i.a.createElement("div",{onClick:function(t){e.selectorHandler(t),e.setState({acountType:t.target.textContent})},className:"option"},i.a.createElement("input",{type:"radio",className:"radio",id:"man",name:"category"}),i.a.createElement("label",null,"Parent")),i.a.createElement("div",{onClick:function(t){e.selectorHandler(t),e.setState({acountType:t.target.textContent})},className:"option"},i.a.createElement("input",{type:"radio",className:"radio",id:"body",name:"category"}),i.a.createElement("label",null,"Teen"))))))),i.a.createElement("div",{className:"".concat(t.inputcontainer," ").concat(t.inputmessage)},i.a.createElement("label",{className:t.label},"Message"),i.a.createElement("textarea",{value:this.state.comment,onChange:function(t){e.setState({comment:t.target.value})},className:t.textarea,rows:"4",cols:"50",name:"comment",form:"usrform",placeholder:"How did you hear about Current?"}))),i.a.createElement("button",{onClick:function(t){e.handleSubmit(t),e.props.optimListener()},type:"submit",className:t.button},i.a.createElement("span",{className:t.buttonhelper}),"Sign Up")))}}]),a}(n.Component),y=a(77),N=a(6),x=Object(N.createInstance)({sdkKey:"BuXTiBzwwhu6VHskSjbMV"});function S(){return i.a.createElement(N.OptimizelyProvider,{optimizely:x,user:{id:Object(y.a)()}},i.a.createElement(N.OptimizelyFeature,{feature:"SubmitForm"},(function(e,t){return"style1"===t.stylingform?(p.a,localStorage.setItem("style","false")):(f.a,localStorage.setItem("style","true")),i.a.createElement(h,{optimListener:function(){return x.track("submit")}})})))}function T(){return i.a.createElement(S,null)}o.a.render(i.a.createElement(T,null),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.c57b9a45.chunk.js.map