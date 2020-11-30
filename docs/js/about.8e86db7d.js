(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"108c":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-6"},[s("div",{staticClass:"tabs is-centered is-fullwidth"},[s("ul",[s("li",{class:{"is-active":t.addTab},on:{click:function(e){t.addTab=!0}}},[s("a",[t._v("Add Workout")])]),s("li",{class:{"is-active":!t.addTab},on:{click:function(e){t.addTab=!1}}},[s("a",[t._v("Workout History")])])])]),t.addTab?s("AddWorkout",{staticClass:"mx-4"}):t._e(),t.addTab?t._e():s("WorkoutHistory",{staticClass:"mx-4"})],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Workout")]),s("div",{staticClass:"control"},[s("div",{staticClass:"select"},[s("select",{attrs:{id:"type"}},t._l(t.workoutTypes,(function(e){return s("option",{key:e.type},[t._v(" "+t._s(e.name)+" ")])})),0)])])]),t._m(0),t._m(1)])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Time in Minutes ")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-danger",attrs:{type:"text",placeholder:"Total time in minutes"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-stopwatch"})])]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid time.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field is-grouped"},[s("button",{staticClass:"button is-success"},[s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-check"})]),s("span",[t._v("Save Workout")])])])}],l=s("4fa8"),c={data:function(){return{workoutTypes:l["b"]}}},o=c,u=s("2877"),d=Object(u["a"])(o,r,n,!1,null,null,null),f=d.exports,m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",t._l(t.users[0].workouts,(function(t,e){return s("WorkoutPost",{key:e,attrs:{user:t,date:t.date,type:t.type,time:t.time}})})),1)},p=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("article",{staticClass:"message"},[s("div",{staticClass:"message-header"},[s("p",[t._v(t._s(t.date))])]),s("div",{staticClass:"message-body"},[s("div",{staticClass:"columns"},[s("div",{staticClass:"column"},[t._v(t._s(t.type))]),s("div",{staticClass:"column"},[t._v(t._s(t.time))])])])])},h=[],C={props:{date:Object,type:Object,time:Object}},g=C,_=Object(u["a"])(g,v,h,!1,null,null,null),b=_.exports,y=s("bea6"),E={data:function(){return{users:y["users"]}},components:{WorkoutPost:b}},x=E,D=Object(u["a"])(x,m,p,!1,null,null,null),w=D.exports,k={data:function(){return{addTab:!0}},methods:{},components:{AddWorkout:f,WorkoutHistory:w}},N=k,U=Object(u["a"])(N,a,i,!1,null,null,null);e["default"]=U.exports},3530:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"mx-6"},[s("div",{staticClass:"tabs is-centered is-fullwidth"},[s("ul",[s("li",{class:{"is-active":t.firstTab},on:{click:function(e){t.firstTab=!0}}},[s("a",[t._v("Manage Exercises")])]),s("li",{class:{"is-active":!t.firstTab},on:{click:function(e){t.firstTab=!1}}},[s("a",[t._v("Manage Users")])])])]),t.firstTab?s("AdminExerciseManage",{staticClass:"mx-4"}):t._e(),t.firstTab?t._e():s("AdminUserManage",{staticClass:"mx-4"})],1)},i=[],r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"buttons has-addons is-centered"},[s("button",{staticClass:"button is-link",on:{click:function(e){t.isAddingExercise=!0}}},[t._m(0),s("span",[t._v("Add Exercise")])])]),t._l(t.workoutTypes,(function(t,e){return s("AdminExerciseCard",{key:e,attrs:{workoutType:t,name:t.name,type:t.type}})})),s("div",{staticClass:"modal",class:{"is-active":t.isAddingExercise}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isAddingExercise=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Adding Exercise")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isAddingExercise=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminExerciseAdd")],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success"},[t._v("Add Exercise")]),s("button",{staticClass:"button",on:{click:function(e){t.isAddingExercise=!1}}},[t._v(" Cancel ")])])])])],2)},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-plus"})])}],l=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box has-background-dark has-text-white"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-3"},[s("span",{staticClass:"has-text-weight-medium is-size-5",attrs:{id:"name"}},[t._v(t._s(t.name))]),s("br"),s("span",{staticClass:"has-text-weight-medium is-size-5",attrs:{id:"type"}},[t._v(t._s(t.type))])]),s("div",{staticClass:"column is-6"},[s("div",{staticClass:"buttons is-centered"},[s("button",{staticClass:"button is-link",on:{click:function(e){t.isEditingExercise=!0}}},[t._m(0),s("span",[t._v("Edit Exercise")])])])]),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"field is-grouped is-grouped-right"},[s("button",{staticClass:"button is-danger",on:{click:function(e){t.isDeletingExercise=!0}}},[t._m(1),s("span",[t._v("Delete Exercise")])])])])]),s("div",{staticClass:"modal",class:{"is-active":t.isEditingExercise}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isEditingExercise=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Editing "+t._s(t.name))]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isEditingExercise=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminExerciseEdit")],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-success"},[t._v("Save Changes")]),s("button",{staticClass:"button",on:{click:function(e){t.isEditingExercise=!1}}},[t._v(" Cancel ")])])])]),s("div",{staticClass:"modal",class:{"is-active":t.isDeletingExercise}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isDeletingExercise=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Deleting "+t._s(t.name))]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isDeletingExercise=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminExerciseDelete")],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button is-danger"},[t._v("Delete Exercise")]),s("button",{staticClass:"button",on:{click:function(e){t.isDeletingExercise=!1}}},[t._v(" Cancel ")])])])])])},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-times"})])}],o=(s("a9e3"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"control"},[s("label",{staticClass:"label"},[t._v("Change Exercise Type")]),s("div",{staticClass:"select"},[s("select",t._l(t.workoutDataTypes,(function(e){return s("option",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])])])}),u=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change Exercise Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-danger",attrs:{type:"text",placeholder:"Enter new exercise name"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-edit"})])]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid exercise name.")])])}],d=s("4fa8"),f={data:function(){return{workoutDataTypes:d["a"]}}},m=f,p=s("2877"),v=Object(p["a"])(m,o,u,!1,null,null,null),h=v.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v('Type "delete" to confirm deletion.')]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-danger",attrs:{type:"text"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-times"})])])])])}],_={},b=_,y=Object(p["a"])(b,C,g,!1,null,null,null),E=y.exports,x={data:function(){return{isEditingExercise:!1,isDeletingExercise:!1}},components:{AdminExerciseEdit:h,AdminExerciseDelete:E},props:{name:Object,type:Number}},D=x,w=Object(p["a"])(D,l,c,!1,null,null,null),k=w.exports,N=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"control"},[s("label",{staticClass:"label"},[t._v("Exercise Type")]),s("div",{staticClass:"select"},[s("select",t._l(t.workoutDataTypes,(function(e){return s("option",{key:e},[t._v(" "+t._s(e)+" ")])})),0)])])])},U=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Exercise Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input is-danger",attrs:{type:"text",placeholder:"Enter exercise name"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-plus"})])]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid exercise name.")])])}],O={data:function(){return{workoutDataTypes:d["a"]}}},T=O,A=Object(p["a"])(T,N,U,!1,null,null,null),P=A.exports,$={data:function(){return{isAddingExercise:!1,workoutTypes:d["b"]}},components:{AdminExerciseCard:k,AdminExerciseAdd:P}},L=$,j=Object(p["a"])(L,r,n,!1,null,null,null),S=j.exports,F=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"buttons has-addons is-centered"},[s("button",{staticClass:"button is-link",on:{click:function(e){t.isAddingUser=!0}}},[t._m(0),s("span",[t._v("Add User")])])]),t._l(t.list,(function(t,e){return s("AdminUserCard",{key:e,attrs:{user:t,userData:t}})})),s("div",{staticClass:"modal",class:{"is-active":t.isAddingUser}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isAddingUser=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Adding User")]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isAddingUser=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminUserAdd")],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",on:{click:function(e){t.isAddingUser=!1}}},[t._v("Close")])])])])],2)},I=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-user-plus"})])}];s("96cf"),s("d3b7");function B(t,e,s,a,i,r,n){try{var l=t[r](n),c=l.value}catch(o){return void s(o)}l.done?e(c):Promise.resolve(c).then(a,i)}function R(t){return function(){var e=this,s=arguments;return new Promise((function(a,i){var r=t.apply(e,s);function n(t){B(r,a,i,n,l,"next",t)}function l(t){B(r,a,i,n,l,"throw",t)}n(void 0)}))}}var M=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box has-background-dark has-text-white"},[s("div",{staticClass:"columns is-centered"},[s("div",{staticClass:"column is-3"},[s("span",{staticClass:"has-text-weight-medium is-size-5"},[t._v(t._s(t.userData.id))]),t._v(" "),s("br"),s("span",{staticClass:"has-text-weight-medium is-size-5"},[t._v(t._s(t.userData.FirstName))]),t._v(" "),s("br"),s("span",{staticClass:"has-text-weight-medium is-size-5"},[t._v(" "+t._s(t.userData.LastName)+" ")]),t._v(" "),s("br"),s("span",{staticClass:"has-text-weight-medium is-size-5"},[t._v(" "+t._s(t.userData.DOB)+" ")]),t._v(" "),s("br"),s("span",{staticClass:"has-text-weight-medium is-size-5"},[t._v(" "+t._s(t.userData.PrimaryEmail)+" ")]),t._v(" "),s("br"),8==t.User_Type?s("span",{staticClass:"has-text-weight-medium has-text-warning is-size-5"},[t._v(" Admin ")]):t._e()]),s("div",{staticClass:"column is-6"},[s("div",{staticClass:"buttons is-centered"},[s("button",{staticClass:"button is-link",on:{click:function(e){t.isEditingUser=!0}}},[t._m(0),s("span",[t._v("Edit User")])])])]),s("div",{staticClass:"column is-3"},[s("div",{staticClass:"field is-grouped is-grouped-right"},[s("button",{staticClass:"button is-danger",on:{click:function(e){t.isDeletingUser=!0}}},[t._m(1),s("span",[t._v("Delete User")])])])])]),s("div",{staticClass:"modal",class:{"is-active":t.isEditingUser}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isEditingUser=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Editing "+t._s(t.FirstName))]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isEditingUser=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminUserEdit",{attrs:{userData:t.userData}})],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",on:{click:function(e){t.isEditingUser=!1}}},[t._v("Cancel")])])])]),s("div",{staticClass:"modal",class:{"is-active":t.isDeletingUser}},[s("div",{staticClass:"modal-background",on:{click:function(e){t.isDeletingUser=!1}}}),s("div",{staticClass:"modal-card"},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v("Deleting "+t._s(t.FirstName))]),s("button",{staticClass:"delete",attrs:{"aria-label":"close"},on:{click:function(e){t.isDeletingUser=!1}}})]),s("section",{staticClass:"modal-card-body"},[s("AdminUserDelete",{attrs:{id:t.userData.id}})],1),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",on:{click:function(e){t.isDeletingUser=!1}}},[t._v("Cancel")])])])])])},G=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small"},[s("i",{staticClass:"fas fa-user-slash"})])}],W=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change First Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.thisUserData.FirstName,expression:"thisUserData.FirstName"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:t.userData.FirstName},domProps:{value:t.thisUserData.FirstName},on:{input:function(e){e.target.composing||t.$set(t.thisUserData,"FirstName",e.target.value)}}}),t._m(0)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid first name.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change Last Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.thisUserData.LastName,expression:"thisUserData.LastName"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:t.userData.LastName},domProps:{value:t.thisUserData.LastName},on:{input:function(e){e.target.composing||t.$set(t.thisUserData,"LastName",e.target.value)}}}),t._m(1)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid last name.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change DOB")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.thisUserData.DOB,expression:"thisUserData.DOB"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:t.userData.DOB},domProps:{value:t.thisUserData.DOB},on:{input:function(e){e.target.composing||t.$set(t.thisUserData,"DOB",e.target.value)}}}),t._m(2)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid DOB.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change Primary Email")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.thisUserData.PrimaryEmail,expression:"thisUserData.PrimaryEmail"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:t.userData.PrimaryEmail},domProps:{value:t.thisUserData.PrimaryEmail},on:{input:function(e){e.target.composing||t.$set(t.thisUserData,"PrimaryEmail",e.target.value)}}}),t._m(3)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid email.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Change User Type")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.thisUserData.User_Type,expression:"thisUserData.User_Type"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:t.userData.User_Type},domProps:{value:t.thisUserData.User_Type},on:{input:function(e){e.target.composing||t.$set(t.thisUserData,"User_Type",e.target.value)}}}),t._m(4)]),s("p",{staticClass:"help is-danger"},[t._v(' Please enter "8" for admin, "9" for regular user. ')])]),s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.editUser(e)}}},[t._v(" Save Changes ")])])},z=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])}],J=s("bea6"),V={data:function(){return{thisUserData:{id:Number,FirstName:String,LastName:String,DOB:String,PrimaryEmail:String,User_Type:Number}}},props:{userData:{id:Number,FirstName:String,LastName:String,DOB:String,PrimaryEmail:String,User_Type:Number}},methods:{editUser:function(){var t=this;return R(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(J["b"])(t.thisUserData);case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))()}}},Y=V,H=Object(p["a"])(Y,W,z,!1,null,null,null),X=H.exports,q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v('Type "delete" to confirm deletion.')]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmDelete,expression:"confirmDelete"}],staticClass:"input is-danger",attrs:{type:"text"},domProps:{value:t.confirmDelete},on:{input:function(e){e.target.composing||(t.confirmDelete=e.target.value)}}}),t._m(0)])]),s("button",{staticClass:"button is-danger",on:{click:function(e){return e.preventDefault(),t.deleteUser(e)}}},[t._v(" Delete User "+t._s(t.id)+" ")])])},K=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-slash"})])}],Q={data:function(){return{confirmDelete:""}},methods:{deleteUser:function(){var t=this;return R(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if("delete"!=t.confirmDelete){e.next=5;break}return e.next=3,Object(J["a"])(t.id);case 3:return s=e.sent,e.abrupt("return",s);case 5:case"end":return e.stop()}}),e)})))()}},props:{id:Number}},Z=Q,tt=Object(p["a"])(Z,q,K,!1,null,null,null),et=tt.exports,st={data:function(){return{isEditingUser:!1,isDeletingUser:!1}},components:{AdminUserEdit:X,AdminUserDelete:et},props:{userData:{id:Number,FirstName:String,LastName:String,DOB:String,PrimaryEmail:String,User_Type:Number}}},at=st,it=Object(p["a"])(at,M,G,!1,null,null,null),rt=it.exports,nt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("First Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.FirstName,expression:"userData.FirstName"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"FirstName"},domProps:{value:t.userData.FirstName},on:{input:function(e){e.target.composing||t.$set(t.userData,"FirstName",e.target.value)}}}),t._m(0)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid first name.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Last Name")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.LastName,expression:"userData.LastName"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"LastName"},domProps:{value:t.userData.LastName},on:{input:function(e){e.target.composing||t.$set(t.userData,"LastName",e.target.value)}}}),t._m(1)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid last name.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("DOB")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.DOB,expression:"userData.DOB"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"DOB"},domProps:{value:t.userData.DOB},on:{input:function(e){e.target.composing||t.$set(t.userData,"DOB",e.target.value)}}}),t._m(2)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid DOB.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Primary Email")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.PrimaryEmail,expression:"userData.PrimaryEmail"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"PrimaryEmail"},domProps:{value:t.userData.PrimaryEmail},on:{input:function(e){e.target.composing||t.$set(t.userData,"PrimaryEmail",e.target.value)}}}),t._m(3)]),s("p",{staticClass:"help is-danger"},[t._v("Please enter a valid email.")])]),s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("User Type")]),s("div",{staticClass:"control has-icons-left has-icons-right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.userData.User_Type,expression:"userData.User_Type"}],staticClass:"input is-danger",attrs:{type:"text",placeholder:"User_Type"},domProps:{value:t.userData.User_Type},on:{input:function(e){e.target.composing||t.$set(t.userData,"User_Type",e.target.value)}}}),t._m(4)]),s("p",{staticClass:"help is-danger"},[t._v(' Please enter "8" for admin, "9" for regular user. ')])]),s("button",{staticClass:"button is-success",on:{click:function(e){return e.preventDefault(),t.registerUser(e)}}},[t._v(" Add User ")])])},lt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user-edit"})])}],ct={data:function(){return{userData:{FirstName:"",LastName:"",DOB:"",PrimaryEmail:"",User_Type:""}}},methods:{registerUser:function(){var t=this;return R(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(J["d"])(t.userData);case 2:return s=e.sent,e.abrupt("return",s);case 4:case"end":return e.stop()}}),e)})))()}}},ot=ct,ut=Object(p["a"])(ot,nt,lt,!1,null,null,null),dt=ut.exports,ft={data:function(){return{isAddingUser:!1,list:[]}},created:function(){var t=this;return R(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(J["c"])();case 2:t.list=e.sent;case 3:case"end":return e.stop()}}),e)})))()},components:{AdminUserCard:rt,AdminUserAdd:dt}},mt=ft,pt=Object(p["a"])(mt,F,I,!1,null,null,null),vt=pt.exports,ht={data:function(){return{firstTab:!0}},methods:{},components:{AdminExerciseManage:S,AdminUserManage:vt}},Ct=ht,gt=Object(p["a"])(Ct,a,i,!1,null,null,null);e["default"]=gt.exports},"4fa8":function(t,e,s){"use strict";s.d(e,"a",(function(){return a})),s.d(e,"b",(function(){return i}));var a=["time"],i=[{name:"Jump Rope",type:"time"},{name:"Jumping Jacks",type:"time"}]},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,s){var a=s("1d80"),i=s("5899"),r="["+i+"]",n=RegExp("^"+r+r+"*"),l=RegExp(r+r+"*$"),c=function(t){return function(e){var s=String(a(e));return 1&t&&(s=s.replace(n,"")),2&t&&(s=s.replace(l,"")),s}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,s){var a=s("861d"),i=s("d2bb");t.exports=function(t,e,s){var r,n;return i&&"function"==typeof(r=e.constructor)&&r!==s&&a(n=r.prototype)&&n!==s.prototype&&i(t,n),t}},"96cf":function(t,e,s){var a=function(t){"use strict";var e,s=Object.prototype,a=s.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},r=i.iterator||"@@iterator",n=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function c(t,e,s){return Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(P){c=function(t,e,s){return t[e]=s}}function o(t,e,s,a){var i=e&&e.prototype instanceof h?e:h,r=Object.create(i.prototype),n=new O(a||[]);return r._invoke=w(t,s,n),r}function u(t,e,s){try{return{type:"normal",arg:t.call(e,s)}}catch(P){return{type:"throw",arg:P}}}t.wrap=o;var d="suspendedStart",f="suspendedYield",m="executing",p="completed",v={};function h(){}function C(){}function g(){}var _={};_[r]=function(){return this};var b=Object.getPrototypeOf,y=b&&b(b(T([])));y&&y!==s&&a.call(y,r)&&(_=y);var E=g.prototype=h.prototype=Object.create(_);function x(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function D(t,e){function s(i,r,n,l){var c=u(t[i],t,r);if("throw"!==c.type){var o=c.arg,d=o.value;return d&&"object"===typeof d&&a.call(d,"__await")?e.resolve(d.__await).then((function(t){s("next",t,n,l)}),(function(t){s("throw",t,n,l)})):e.resolve(d).then((function(t){o.value=t,n(o)}),(function(t){return s("throw",t,n,l)}))}l(c.arg)}var i;function r(t,a){function r(){return new e((function(e,i){s(t,a,e,i)}))}return i=i?i.then(r,r):r()}this._invoke=r}function w(t,e,s){var a=d;return function(i,r){if(a===m)throw new Error("Generator is already running");if(a===p){if("throw"===i)throw r;return A()}s.method=i,s.arg=r;while(1){var n=s.delegate;if(n){var l=k(n,s);if(l){if(l===v)continue;return l}}if("next"===s.method)s.sent=s._sent=s.arg;else if("throw"===s.method){if(a===d)throw a=p,s.arg;s.dispatchException(s.arg)}else"return"===s.method&&s.abrupt("return",s.arg);a=m;var c=u(t,e,s);if("normal"===c.type){if(a=s.done?p:f,c.arg===v)continue;return{value:c.arg,done:s.done}}"throw"===c.type&&(a=p,s.method="throw",s.arg=c.arg)}}}function k(t,s){var a=t.iterator[s.method];if(a===e){if(s.delegate=null,"throw"===s.method){if(t.iterator["return"]&&(s.method="return",s.arg=e,k(t,s),"throw"===s.method))return v;s.method="throw",s.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var i=u(a,t.iterator,s.arg);if("throw"===i.type)return s.method="throw",s.arg=i.arg,s.delegate=null,v;var r=i.arg;return r?r.done?(s[t.resultName]=r.value,s.next=t.nextLoc,"return"!==s.method&&(s.method="next",s.arg=e),s.delegate=null,v):r:(s.method="throw",s.arg=new TypeError("iterator result is not an object"),s.delegate=null,v)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function U(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function T(t){if(t){var s=t[r];if(s)return s.call(t);if("function"===typeof t.next)return t;if(!isNaN(t.length)){var i=-1,n=function s(){while(++i<t.length)if(a.call(t,i))return s.value=t[i],s.done=!1,s;return s.value=e,s.done=!0,s};return n.next=n}}return{next:A}}function A(){return{value:e,done:!0}}return C.prototype=E.constructor=g,g.constructor=C,C.displayName=c(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"===typeof t&&t.constructor;return!!e&&(e===C||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c(t,l,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},x(D.prototype),D.prototype[n]=function(){return this},t.AsyncIterator=D,t.async=function(e,s,a,i,r){void 0===r&&(r=Promise);var n=new D(o(e,s,a,i),r);return t.isGeneratorFunction(s)?n:n.next().then((function(t){return t.done?t.value:n.next()}))},x(E),c(E,l,"Generator"),E[r]=function(){return this},E.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var s in t)e.push(s);return e.reverse(),function s(){while(e.length){var a=e.pop();if(a in t)return s.value=a,s.done=!1,s}return s.done=!0,s}},t.values=T,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(U),!t)for(var s in this)"t"===s.charAt(0)&&a.call(this,s)&&!isNaN(+s.slice(1))&&(this[s]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var s=this;function i(a,i){return l.type="throw",l.arg=t,s.next=a,i&&(s.method="next",s.arg=e),!!i}for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r],l=n.completion;if("root"===n.tryLoc)return i("end");if(n.tryLoc<=this.prev){var c=a.call(n,"catchLoc"),o=a.call(n,"finallyLoc");if(c&&o){if(this.prev<n.catchLoc)return i(n.catchLoc,!0);if(this.prev<n.finallyLoc)return i(n.finallyLoc)}else if(c){if(this.prev<n.catchLoc)return i(n.catchLoc,!0)}else{if(!o)throw new Error("try statement without catch or finally");if(this.prev<n.finallyLoc)return i(n.finallyLoc)}}}},abrupt:function(t,e){for(var s=this.tryEntries.length-1;s>=0;--s){var i=this.tryEntries[s];if(i.tryLoc<=this.prev&&a.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var n=r?r.completion:{};return n.type=t,n.arg=e,r?(this.method="next",this.next=r.finallyLoc,v):this.complete(n)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.finallyLoc===t)return this.complete(s.completion,s.afterLoc),U(s),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var s=this.tryEntries[e];if(s.tryLoc===t){var a=s.completion;if("throw"===a.type){var i=a.arg;U(s)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(t,s,a){return this.delegate={iterator:T(t),resultName:s,nextLoc:a},"next"===this.method&&(this.arg=e),v}},t}(t.exports);try{regeneratorRuntime=a}catch(i){Function("r","regeneratorRuntime = r")(a)}},a55b:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("form",{staticClass:"mx-5 my-3"},[s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left has-icons-right"},[s("input",{staticClass:"input",attrs:{type:"username",placeholder:"Username"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-user"})])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control has-icons-left"},[s("input",{staticClass:"input",attrs:{type:"password",placeholder:"Password"}}),s("span",{staticClass:"icon is-small is-left"},[s("i",{staticClass:"fas fa-lock"})])])]),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("button",{staticClass:"button is-success"},[t._v("Login")])])])])}],r={},n=r,l=s("2877"),c=Object(l["a"])(n,a,i,!1,null,null,null);e["default"]=c.exports},a9e3:function(t,e,s){"use strict";var a=s("83ab"),i=s("da84"),r=s("94ca"),n=s("6eeb"),l=s("5135"),c=s("c6b6"),o=s("7156"),u=s("c04e"),d=s("d039"),f=s("7c73"),m=s("241c").f,p=s("06cf").f,v=s("9bf2").f,h=s("58a8").trim,C="Number",g=i[C],_=g.prototype,b=c(f(_))==C,y=function(t){var e,s,a,i,r,n,l,c,o=u(t,!1);if("string"==typeof o&&o.length>2)if(o=h(o),e=o.charCodeAt(0),43===e||45===e){if(s=o.charCodeAt(2),88===s||120===s)return NaN}else if(48===e){switch(o.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+o}for(r=o.slice(2),n=r.length,l=0;l<n;l++)if(c=r.charCodeAt(l),c<48||c>i)return NaN;return parseInt(r,a)}return+o};if(r(C,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var E,x=function(t){var e=arguments.length<1?0:t,s=this;return s instanceof x&&(b?d((function(){_.valueOf.call(s)})):c(s)!=C)?o(new g(y(e)),s,x):y(e)},D=a?m(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;D.length>w;w++)l(g,E=D[w])&&!l(x,E)&&v(x,E,p(g,E));x.prototype=_,_.constructor=x,n(i,C,x)}},bea6:function(t,e,s){"use strict";s.d(e,"c",(function(){return c})),s.d(e,"d",(function(){return o})),s.d(e,"b",(function(){return u})),s.d(e,"a",(function(){return d}));s("d3b7");var a=Object({NODE_ENV:"production",BASE_URL:""}).API_ROOT||"http://localhost:3001/";function i(t){return fetch(a+t).then((function(t){return t.json()}))}function r(t,e){return fetch(a+t,{method:"POST",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))}function n(t,e){return fetch(a+t,{method:"PUT",cache:"no-cache",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(t){return t.json()}))}function l(t){return fetch(a+t,{method:"DELETE"}).then((function(t){return t.json()}))}function c(){return i("users")}function o(t){return r("users",t)}function u(t,e){return n("users/"+t,e)}function d(t){return l("users/"+t)}},f820:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"about"},[s("h1",[t._v("Made for a web development course at SUNY New Paltz.")]),s("a",{attrs:{href:"https://github.com/marleauk1/CPS493-ExerciseApp"}},[t._v(" Check out our source code. ")])])}],r=s("2877"),n={},l=Object(r["a"])(n,a,i,!1,null,null,null);e["default"]=l.exports}}]);
//# sourceMappingURL=about.8e86db7d.js.map