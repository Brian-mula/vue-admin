import{r as x,B as p,c as $,w as a,_ as k,o as y,a as e,b as S,d as U,h as B,u as s,f,C as F,D as m,E as u,G as C,H as c,S as _,i as V,I as b,J as D,K as M,L as v}from"./index.0cc9c209.js";import{_ as i,a as d}from"./FormField.9802eb60.js";import{_ as O}from"./FormFilePicker.6dc96569.js";import{a as E,_ as T}from"./SectionBottomOtherPages.deaa0c01.js";const g=V("Forms"),j=V(" Custom elements "),N={__name:"FormsView",setup(q){const w=x(["Admin","Forms"]),r=[{id:1,label:"Business development"},{id:2,label:"Marketing"},{id:3,label:"Sales"}],t=p({name:"John Doe",email:"john.doe@example.com",phone:"",department:r[0],subject:"",question:""}),n=p({checkbox:["lorem"],radio:"one",switch:["one"],file:null}),h=()=>{};return(A,l)=>(y(),$(k,null,{default:a(()=>[e(S,{"title-stack":w.value},null,8,["title-stack"]),e(U,null,{default:a(()=>[g]),_:1}),e(_,null,{default:a(()=>[e(B,{icon:s(b),title:"Forms example"},null,8,["icon"]),e(f,{title:"Forms",icon:s(D),form:"",onSubmit:F(h,["prevent"])},{default:a(()=>[e(i,{label:"Grouped with icons"},{default:a(()=>[e(m,{modelValue:t.name,"onUpdate:modelValue":l[0]||(l[0]=o=>t.name=o),icon:s(M)},null,8,["modelValue","icon"]),e(m,{modelValue:t.email,"onUpdate:modelValue":l[1]||(l[1]=o=>t.email=o),type:"email",icon:s(v)},null,8,["modelValue","icon"])]),_:1}),e(i,{label:"With help line",help:"Do not enter the leading zero"},{default:a(()=>[e(m,{modelValue:t.phone,"onUpdate:modelValue":l[2]||(l[2]=o=>t.phone=o),type:"tel",placeholder:"Your phone number"},null,8,["modelValue"])]),_:1}),e(i,{label:"Dropdown"},{default:a(()=>[e(m,{modelValue:t.department,"onUpdate:modelValue":l[3]||(l[3]=o=>t.department=o),options:r},null,8,["modelValue"])]),_:1}),e(u),e(i,{label:"Question",help:"Your question. Max 255 characters"},{default:a(()=>[e(m,{type:"textarea",placeholder:"Explain how we can help you"})]),_:1}),e(u),e(C,null,{default:a(()=>[e(c,{type:"submit",color:"info",label:"Submit"}),e(c,{type:"reset",color:"info",outline:"",label:"Reset"})]),_:1})]),_:1},8,["icon","onSubmit"])]),_:1}),e(E,null,{default:a(()=>[j]),_:1}),e(_,null,{default:a(()=>[e(f,{title:"Custom elements",icon:s(b)},{default:a(()=>[e(i,{label:"Checkbox","wrap-body":""},{default:a(()=>[e(d,{modelValue:n.checkbox,"onUpdate:modelValue":l[4]||(l[4]=o=>n.checkbox=o),name:"sample-checkbox",options:{lorem:"Lorem",ipsum:"Ipsum",dolore:"Dolore"}},null,8,["modelValue"])]),_:1}),e(u),e(i,{label:"Radio","wrap-body":""},{default:a(()=>[e(d,{modelValue:n.radio,"onUpdate:modelValue":l[5]||(l[5]=o=>n.radio=o),name:"sample-radio",type:"radio",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(u),e(i,{label:"Switch"},{default:a(()=>[e(d,{modelValue:n.switch,"onUpdate:modelValue":l[6]||(l[6]=o=>n.switch=o),name:"sample-switch",type:"switch",options:{one:"One",two:"Two"}},null,8,["modelValue"])]),_:1}),e(u),e(O,{modelValue:n.file,"onUpdate:modelValue":l[7]||(l[7]=o=>n.file=o)},null,8,["modelValue"])]),_:1},8,["icon"])]),_:1}),e(T)]),_:1}))}};export{N as default};
