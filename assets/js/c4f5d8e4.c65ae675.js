"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[2634],{7785:(e,t,n)=>{var r=n(4994);t.A=void 0;var o=r(n(2032)),i=n(4848);t.A=(0,o.default)((0,i.jsx)("path",{d:"m19 1-5 5v11l5-4.5zM1 6v14.65c0 .25.25.5.5.5.1 0 .15-.05.25-.05C3.1 20.45 5.05 20 6.5 20c1.95 0 4.05.4 5.5 1.5V6c-1.45-1.1-3.55-1.5-5.5-1.5S2.45 4.9 1 6m22 13.5V6c-.6-.45-1.25-.75-2-1v13.5c-1.1-.35-2.3-.5-3.5-.5-1.7 0-4.15.65-5.5 1.5v2c1.35-.85 3.8-1.5 5.5-1.5 1.65 0 3.35.3 4.75 1.05.1.05.15.05.25.05.25 0 .5-.25.5-.5z"}),"AutoStories")},9486:(e,t,n)=>{var r=n(4994);t.A=void 0;var o=r(n(2032)),i=n(4848);t.A=(0,o.default)((0,i.jsx)("path",{d:"M10.27 12h3.46c.93 0 1.63-.83 1.48-1.75l-.3-1.79C14.67 7.04 13.44 6 12 6S9.33 7.04 9.09 8.47l-.3 1.79c-.15.91.55 1.74 1.48 1.74m-8.61-.89c-.13.26-.18.57-.1.88.16.69.76 1.03 1.53 1h1.95c.83 0 1.51-.58 1.51-1.29 0-.14-.03-.27-.07-.4-.01-.03-.01-.05.01-.08.09-.16.14-.34.14-.53 0-.31-.14-.6-.36-.82-.03-.03-.03-.06-.02-.1.07-.2.07-.43.01-.65-.16-.43-.55-.72-.99-.74-.03 0-.05-.01-.07-.03-.17-.21-.48-.35-.83-.35-.3 0-.57.1-.75.26-.03.03-.06.03-.09.02-.14-.06-.3-.09-.46-.09-.65 0-1.18.49-1.24 1.12 0 .02-.01.04-.03.06-.29.26-.46.65-.41 1.05.03.22.12.43.25.6.03.02.03.06.02.09m14.58 2.54c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9C6.68 14.13 6 15.21 6 16.39V17c0 .55.45 1 1 1h10c.55 0 1-.45 1-1v-.61c0-1.18-.68-2.26-1.76-2.74m-15.02.93C.48 14.9 0 15.62 0 16.43V17c0 .55.45 1 1 1h3.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58m21.56 0c-.85-.37-1.79-.58-2.78-.58-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V18H23c.55 0 1-.45 1-1v-.57c0-.81-.48-1.53-1.22-1.85M22 11v-.5c0-1.1-.9-2-2-2h-2c-.42 0-.65.48-.39.81l.7.63c-.19.31-.31.67-.31 1.06 0 1.1.9 2 2 2s2-.9 2-2"}),"Groups2Rounded")},4269:(e,t,n)=>{var r=n(4994);t.A=void 0;var o=r(n(2032)),i=n(4848);t.A=(0,o.default)((0,i.jsx)("path",{d:"M5 13.18v4L12 21l7-3.82v-4L12 17zM12 3 1 9l11 6 9-4.91V17h2V9z"}),"School")},6435:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var r=n(6540),o=n(4625),i=n(4586),a=n(8774),s=n(5293),l=n(2007),c=n(7733),u=n(6132),d=n(7859),m=n(7512),p=n(8168),h=n(8587),b=n(4164),g=n(9069),v=n(7245),f=n(4111),x=n(9369),j=n(8610),w=n(3049),A=n(9599),y=n(1264);const _=(e,t,n)=>{const r=e.keys[0];if(Array.isArray(t))t.forEach(((t,r)=>{n(((t,n)=>{r<=e.keys.length-1&&(0===r?Object.assign(t,n):t[e.up(e.keys[r])]=n)}),t)}));else if(t&&"object"==typeof t){(Object.keys(t).length>e.keys.length?e.keys:(o=e.keys,i=Object.keys(t),o.filter((e=>i.includes(e))))).forEach((o=>{if(-1!==e.keys.indexOf(o)){const i=t[o];void 0!==i&&n(((t,n)=>{r===o?Object.assign(t,n):t[e.up(o)]=n}),i)}}))}else"number"!=typeof t&&"string"!=typeof t||n(((e,t)=>{Object.assign(e,t)}),t);var o,i};function k(e){return e?`Level${e}`:""}function S(e){return e.unstable_level>0&&e.container}function $(e){return function(t){return`var(--Grid-${t}Spacing${k(e.unstable_level)})`}}function C(e){return function(t){return 0===e.unstable_level?`var(--Grid-${t}Spacing)`:`var(--Grid-${t}Spacing${k(e.unstable_level-1)})`}}function N(e){return 0===e.unstable_level?"var(--Grid-columns)":`var(--Grid-columns${k(e.unstable_level-1)})`}const G=({theme:e,ownerState:t})=>{const n=$(t),r={};return _(e.breakpoints,t.gridSize,((e,o)=>{let i={};!0===o&&(i={flexBasis:0,flexGrow:1,maxWidth:"100%"}),"auto"===o&&(i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"}),"number"==typeof o&&(i={flexGrow:0,flexBasis:"auto",width:`calc(100% * ${o} / ${N(t)}${S(t)?` + ${n("column")}`:""})`}),e(r,i)})),r},E=({theme:e,ownerState:t})=>{const n={};return _(e.breakpoints,t.gridOffset,((e,r)=>{let o={};"auto"===r&&(o={marginLeft:"auto"}),"number"==typeof r&&(o={marginLeft:0===r?"0px":`calc(100% * ${r} / ${N(t)})`}),e(n,o)})),n},M=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=S(t)?{[`--Grid-columns${k(t.unstable_level)}`]:N(t)}:{"--Grid-columns":12};return _(e.breakpoints,t.columns,((e,r)=>{e(n,{[`--Grid-columns${k(t.unstable_level)}`]:r})})),n},O=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=C(t),r=S(t)?{[`--Grid-rowSpacing${k(t.unstable_level)}`]:n("row")}:{};return _(e.breakpoints,t.rowSpacing,((n,o)=>{var i;n(r,{[`--Grid-rowSpacing${k(t.unstable_level)}`]:"string"==typeof o?o:null==(i=e.spacing)?void 0:i.call(e,o)})})),r},z=({theme:e,ownerState:t})=>{if(!t.container)return{};const n=C(t),r=S(t)?{[`--Grid-columnSpacing${k(t.unstable_level)}`]:n("column")}:{};return _(e.breakpoints,t.columnSpacing,((n,o)=>{var i;n(r,{[`--Grid-columnSpacing${k(t.unstable_level)}`]:"string"==typeof o?o:null==(i=e.spacing)?void 0:i.call(e,o)})})),r},D=({theme:e,ownerState:t})=>{if(!t.container)return{};const n={};return _(e.breakpoints,t.direction,((e,t)=>{e(n,{flexDirection:t})})),n},P=({ownerState:e})=>{const t=$(e),n=C(e);return(0,p.A)({minWidth:0,boxSizing:"border-box"},e.container&&(0,p.A)({display:"flex",flexWrap:"wrap"},e.wrap&&"wrap"!==e.wrap&&{flexWrap:e.wrap},{margin:`calc(${t("row")} / -2) calc(${t("column")} / -2)`},e.disableEqualOverflow&&{margin:`calc(${t("row")} * -1) 0px 0px calc(${t("column")} * -1)`}),(!e.container||S(e))&&(0,p.A)({padding:`calc(${n("row")} / 2) calc(${n("column")} / 2)`},(e.disableEqualOverflow||e.parentDisableEqualOverflow)&&{padding:`${n("row")} 0px 0px ${n("column")}`}))},U=e=>{const t=[];return Object.entries(e).forEach((([e,n])=>{!1!==n&&void 0!==n&&t.push(`grid-${e}-${String(n)}`)})),t},B=(e,t="xs")=>{function n(e){return void 0!==e&&("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e&&e>0)}if(n(e))return[`spacing-${t}-${String(e)}`];if("object"==typeof e&&!Array.isArray(e)){const t=[];return Object.entries(e).forEach((([e,r])=>{n(r)&&t.push(`spacing-${e}-${String(r)}`)})),t}return[]},F=e=>void 0===e?[]:"object"==typeof e?Object.entries(e).map((([e,t])=>`direction-${e}-${t}`)):[`direction-xs-${String(e)}`];var L=n(4848);const W=["className","children","columns","container","component","direction","wrap","spacing","rowSpacing","columnSpacing","disableEqualOverflow","unstable_level"],H=(0,y.A)(),I=(0,x.A)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>t.root});function q(e){return(0,j.A)({props:e,name:"MuiGrid",defaultTheme:H})}var R=n(1848),V=n(3541);const J=function(e={}){const{createStyledComponent:t=I,useThemeProps:n=q,componentName:o="MuiGrid"}=e,i=r.createContext(void 0),a=t(M,z,O,G,D,P,E),s=r.forwardRef((function(e,t){var s,l,c,u,d,m,x,j;const y=(0,w.A)(),_=n(e),k=(0,A.A)(_),S=r.useContext(i),{className:$,children:C,columns:N=12,container:G=!1,component:E="div",direction:M="row",wrap:O="wrap",spacing:z=0,rowSpacing:D=z,columnSpacing:P=z,disableEqualOverflow:H,unstable_level:I=0}=k,q=(0,h.A)(k,W);let R=H;I&&void 0!==H&&(R=e.disableEqualOverflow);const V={},J={},K={};Object.entries(q).forEach((([e,t])=>{void 0!==y.breakpoints.values[e]?V[e]=t:void 0!==y.breakpoints.values[e.replace("Offset","")]?J[e.replace("Offset","")]=t:K[e]=t}));const T=null!=(s=e.columns)?s:I?void 0:N,Y=null!=(l=e.spacing)?l:I?void 0:z,X=null!=(c=null!=(u=e.rowSpacing)?u:e.spacing)?c:I?void 0:D,Q=null!=(d=null!=(m=e.columnSpacing)?m:e.spacing)?d:I?void 0:P,Z=(0,p.A)({},k,{level:I,columns:T,container:G,direction:M,wrap:O,spacing:Y,rowSpacing:X,columnSpacing:Q,gridSize:V,gridOffset:J,disableEqualOverflow:null!=(x=null!=(j=R)?j:S)&&x,parentDisableEqualOverflow:S}),ee=((e,t)=>{const{container:n,direction:r,spacing:i,wrap:a,gridSize:s}=e,l={root:["root",n&&"container","wrap"!==a&&`wrap-xs-${String(a)}`,...F(r),...U(s),...n?B(i,t.breakpoints.keys[0]):[]]};return(0,f.A)(l,(e=>(0,v.Ay)(o,e)),{})})(Z,y);let te=(0,L.jsx)(a,(0,p.A)({ref:t,as:E,ownerState:Z,className:(0,b.A)(ee.root,$)},K,{children:r.Children.map(C,(e=>{var t;return r.isValidElement(e)&&(0,g.A)(e,["Grid"])?r.cloneElement(e,{unstable_level:null!=(t=e.props.unstable_level)?t:I+1}):e}))}));return void 0!==R&&R!==(null!=S&&S)&&(te=(0,L.jsx)(i.Provider,{value:R,children:te})),te}));return s.muiName="Grid",s}({createStyledComponent:(0,R.Ay)("div",{name:"MuiGrid2",slot:"Root",overridesResolver:(e,t)=>t.root}),componentName:"MuiGrid2",useThemeProps:e=>(0,V.A)({props:e,name:"MuiGrid2"})}),K=J;var T=n(4269),Y=n(7785),X=n(9486),Q=n(467),Z=n(5697);function ee(e){return String(parseFloat(e)).length===String(e).length}function te(e){return parseFloat(e)}function ne(e){return(t,n)=>{const r=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(r===n)return t;let o=te(t);"px"!==r&&("em"===r||"rem"===r)&&(o=te(t)*te(e));let i=o;if("px"!==n)if("em"===n)i=o/te(e);else{if("rem"!==n)return t;i=o/te(e)}return parseFloat(i.toFixed(5))+n}}function re({lineHeight:e,pixels:t,htmlFontSize:n}){return t/(e*n)}var oe=n(8379),ie=n(4765);const ae=JSON.parse('[{"profile_image":"https://avatars.githubusercontent.com/u/44274319?v=4","name":"Martin Marwad","subtitle":"Founder, Alumni Advisor, 10x Dev","details":"Martin talented developer with a plethora of knowledge and an incredible skill to lead","github":"https://github.com/MartinMarwad"},{"profile_image":"https://avatars.githubusercontent.com/u/136134023?v=4","name":"Alvin Yu","subtitle":"President, UniBot Founder, 10x Dev","details":"Alvin is one of the most activate and inspirational members of the club","github":"https://github.com/ultralapse"},{"profile_image":"https://avatars.githubusercontent.com/u/81245965?v=4","name":"Nick Bottari","subtitle":"Vice President, UniPath.io General Lead","details":"Nick is one of the creative masterminds behind the club","github":"https://github.com/nbottari9"},{"profile_image":"https://avatars.githubusercontent.com/u/60888380?v=4","name":"Christopher Coco","subtitle":"Secretary, Attendance Bot Lead","details":"AKA CJ, a capable and focused developer","github":"https://github.com/cjcocokrisp"},{"profile_image":"https://media.licdn.com/dms/image/v2/D4E03AQEnHtWDIh-mBg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700494525950?e=1729728000&v=beta&t=SsM6J2qHqALo4otJYYdKUKOAMrcliF-dMXpmEUzC2pw","name":"Gurpreet Singh","subtitle":"Treasurer, Club Website Lead","details":"AKA Preet, one of the leads behind this website","github":"https://github.com/Gurpranked"},{"profile_image":"https://avatars.githubusercontent.com/u/109564679?v=4","name":"Rahul Rajesh","subtitle":"Former VP, UniPath.io Dev","details":"Rahul holds passion in hardware focused development, specifically within linux","github":"https://github.com/rajeshrah22"},{"profile_image":"https://media.licdn.com/dms/image/v2/D4E03AQGZblBKFmKCmg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1703034903861?e=1729728000&v=beta&t=lcd6aBE3hfJ7sx4_y_sGEcAcyLTnxZ6JXsHzN8Sn9DA","name":"Noah Shayne","subtitle":"UniPath.io Dev, UniBot Dev","details":"A charming developer with an interest in digital forensics and cybersecurity","github":"https://github.com/noahshayne"}]');var se=n(2616),le=n(9993),ce=n(973);function ue(e){let{ProfileImage:t,Name:n,Subtitle:r,Details:o,Github:i}=e;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("div",{className:"card__header",children:(0,L.jsxs)("div",{className:"avatar avatar--vertical",children:[(0,L.jsx)("img",{className:"avatar__photo avatar__photo--xl",src:t}),(0,L.jsxs)("div",{className:"avatar__intro",children:[(0,L.jsx)("div",{className:"avatar__name",children:n}),(0,L.jsx)("small",{className:"avatar__subtitle",children:r})]})]})}),(0,L.jsx)("div",{className:"card__body",children:(0,L.jsx)("small",{children:o})}),(0,L.jsx)("div",{className:"card__footer",children:(0,L.jsx)(a.A,{className:"button button--secondary button--block",to:i,children:"Github"})})]})}const de=function(e){let{member:t}=e;const[n,o]=r.useState(!1);return(0,L.jsxs)("div",{children:[(0,L.jsxs)("div",{className:"avatar",onClick:()=>o(!0),children:[(0,L.jsx)("img",{className:"avatar__photo avatar__photo--lg",src:t.profile_image}),(0,L.jsxs)("div",{className:"avatar_intro",children:[(0,L.jsxs)("div",{className:"avatar__name",children:[" ",t.name," "]}),(0,L.jsxs)("small",{className:"avatar__subtitle",children:[" ",t.subtitle," "]})]})]}),(0,L.jsx)(se.A,{"aria-labelledby":"modal-modal-title","aria-describedby":"modal-modal-description",open:n,disableScrollLock:!0,onClose:()=>o(!1),closeAfterTransition:!0,style:{backdropFilter:"blur(5px)"},slots:{backdrop:le.A},slotProps:{backdrop:{timeout:500}},children:(0,L.jsx)(ce.A,{in:n,children:(0,L.jsx)(c.A,{className:"card",sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",boxShadow:25},children:(0,L.jsx)(ue,{ProfileImage:t.profile_image,Name:t.name,Subtitle:t.subtitle,Details:t.details,Github:t.github})})})})]})};let me=(0,Q.A)();function pe(){const{siteConfig:e}=(0,i.A)(),{colorMode:t}=(0,s.G)(),n="dark"===t,[a,p]=(0,r.useState)(0);return(0,r.useEffect)((()=>{const e=setInterval((()=>{p((e=>e+.6))}),30);return()=>clearInterval(e)}),[]),(0,L.jsx)(c.A,{component:"header",sx:{backgroundImage:n?`linear-gradient(${a}deg, #7b5caa, #CD7672)`:`linear-gradient(${a}deg, #9dcbfc, white)`,borderRadius:"16px",filter:n?"drop-shadow(0 0.4rem 0.3rem rgba(123, 123, 123, 0.5))":"drop-shadow(0 0.4rem 0.3rem rgba(0,0,0,0.5))",transition:"background-image 0.5s ease",backgroundSize:"cover",backgroundPosition:"center",textAlign:"center",py:10,color:n?"white":"#707070"},children:(0,L.jsxs)(u.A,{maxWidth:"md",children:[(0,L.jsxs)(ie.a,{theme:me,children:[(0,L.jsx)(d.A,{variant:"h1",component:"h1",className:"animate__animated animate__fadeInDown",children:e.title}),(0,L.jsx)(d.A,{variant:"h5",component:"p",sx:{mt:2},className:"animate__animated animate__fadeInUp",children:e.tagline})]}),(0,L.jsxs)(l.A,{sx:{mt:4},direction:"row",justifyContent:"center",alignItems:"center",spacing:2,children:[(0,L.jsx)(m.A,{variant:"contained",sx:{mt:4},color:"primary",component:o.N_,to:"docs/tutorials/welcome",startIcon:(0,L.jsx)(T.A,{}),children:"Explore Tutorials"}),(0,L.jsx)(m.A,{variant:"contained",sx:{mt:2,ml:2},color:"primary",component:o.N_,to:"docs/projects/welcome",endIcon:(0,L.jsx)(Y.A,{}),children:"View Projects"})]}),(0,L.jsx)(m.A,{variant:"contained",sx:{mt:2,ml:2},color:"primary",component:o.N_,to:"docs/About Us",endIcon:(0,L.jsx)(X.A,{}),children:"About Us"})]})})}me=function(e,t={}){const{breakpoints:n=["sm","md","lg"],disableAlign:r=!1,factor:o=2,variants:i=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,a=(0,p.A)({},e);a.typography=(0,p.A)({},a.typography);const s=a.typography,l=ne(s.htmlFontSize),c=n.map((e=>a.breakpoints.values[e]));return i.forEach((e=>{const t=s[e];if(!t)return;const n=parseFloat(l(t.fontSize,"rem"));if(n<=1)return;const i=n,a=1+(i-1)/o;let{lineHeight:u}=t;if(!ee(u)&&!r)throw new Error((0,Z.A)(6));ee(u)||(u=parseFloat(l(u,"rem"))/parseFloat(n));let d=null;r||(d=e=>function({size:e,grid:t}){const n=e-e%t,r=n+t;return e-n<r-e?n:r}({size:e,grid:re({pixels:4,lineHeight:u,htmlFontSize:s.htmlFontSize})})),s[e]=(0,p.A)({},t,function({cssProperty:e,min:t,max:n,unit:r="rem",breakpoints:o=[600,900,1200],transform:i=null}){const a={[e]:`${t}${r}`},s=(n-t)/o[o.length-1];return o.forEach((n=>{let o=t+s*n;null!==i&&(o=i(o)),a[`@media (min-width:${n}px)`]={[e]:`${Math.round(1e4*o)/1e4}${r}`}})),a}({cssProperty:"fontSize",min:a,max:i,unit:"rem",breakpoints:c,transform:d}))})),a}(me);const he=e=>{let{Header:t,Content:n,footerButton:r}=e;return(0,L.jsxs)("div",{class:"card",children:[(0,L.jsx)("div",{class:"card__header text--center",children:(0,L.jsx)("h3",{children:t})}),(0,L.jsx)("div",{class:"card__body text--center",children:(0,L.jsx)("p",{children:n})}),(0,L.jsx)("div",{class:"card__footer",children:r})]})};function be(){const e={"about us":(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"/docs/About Us",children:"See More"}),"join us":(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"https://discord.gg/WC2NdqYtDt",children:"Discord"}),"our projects":(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"/docs/projects/welcome",children:"Project Docs"})};return(0,L.jsx)(u.A,{sx:{pb:4},children:(0,L.jsxs)(K,{container:!0,spacing:4,children:[(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"About Us",Content:"We are a student-led organization dedicated to exploring cloud computing and its applications through hands-on learning, projects, and industry connections.",footerButton:e["about us"]})}),(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"Join Us",Content:"Open to all UMass Lowell students, faculty, and staff. Join us at our weekly meetings to learn, build, and connect.",footerButton:e["join us"]})}),(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"Our Projects",Content:"We work on our various projects including UniPath.io, UniBot, the UML-Now-CLI, react mui resume, and more. Contribute and gain practical experience.",footerButton:e["our projects"]})})]})})}function ge(){const e={resources:(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"/docs/resources/welcome",children:"Resources"}),meetings:(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"/docs/current-schedule",children:"Meetings"}),"collaborative projects":(0,L.jsx)(a.A,{class:"button button--secondary button--block",to:"https://github.com/UMLCloudComputing",children:"Github"})};return(0,L.jsx)(u.A,{sx:{pb:4},children:(0,L.jsxs)(K,{container:!0,spacing:4,children:[(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"Hands-On Learning",Content:"Engage in hands-on learning experiences with cloud computing technologies like AWS, Docker, Kubernetes, and more.",footerButton:e.resources})}),(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"Industry Connections",Content:"Connect with industry professionals through guest lectures, workshops, and networking events.",footerButton:e.meetings})}),(0,L.jsx)(K,{item:!0,xs:12,sm:4,children:(0,L.jsx)(he,{Header:"Collaborative Work",Content:"Work on real-world projects and collaborate with peers to develop practical cloud computing skills.",footerButton:e["collaborative projects"]})})]})})}function ve(){return(0,L.jsx)(c.A,{wrap:"nowrap",sx:{display:"block",overflowX:"auto",py:4,pl:4,"&::-webkit-scrollbar":{display:"none"},"-ms-overflow-style":"none","scrollbar-width":"none"},children:(0,L.jsx)(K,{container:!0,wrap:"nowrap",children:ae.map(((e,t)=>(0,L.jsx)(K,{item:!0,sx:{minWidth:"430px"},children:(0,L.jsx)(de,{member:e})},t)))})})}function fe(){return(0,L.jsxs)(oe.A,{title:"Welcome",description:"Join the UMass Lowell Cloud Computing Club to explore the world of cloud computing.",children:[(0,L.jsx)(pe,{}),(0,L.jsxs)("main",{children:[(0,L.jsx)(ve,{}),(0,L.jsx)(be,{}),(0,L.jsx)(ge,{})]})]})}}}]);