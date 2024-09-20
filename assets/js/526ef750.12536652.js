"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[7915],{8020:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(4848),i=s(8453);const o={sidebar_position:5},r="Commits",c={id:"resources/Git Version Control/Basics/Commit",title:"Commits",description:"Git-Staging-Diagram-2",source:"@site/docs/resources/Git Version Control/Basics/Commit.md",sourceDirName:"resources/Git Version Control/Basics",slug:"/resources/Git Version Control/Basics/Commit",permalink:"/docs/resources/Git Version Control/Basics/Commit",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/resources/Git Version Control/Basics/Commit.md",tags:[],version:"current",lastUpdatedBy:"Alex",lastUpdatedAt:1726836964e3,sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"resourcesSidebar",previous:{title:"Staging Area",permalink:"/docs/resources/Git Version Control/Basics/Staging Area"},next:{title:"Branch",permalink:"/docs/resources/Git Version Control/Basics/Branch"}},a={},d=[{value:"Git Commits without staging",id:"git-commits-without-staging",level:3}];function l(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"commits",children:"Commits"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Git-Staging-Diagram-2",src:s(8524).A+"",width:"4096",height:"2856"})}),"\n",(0,n.jsxs)(t.p,{children:["Commits keep track of progress and changes as we work. Git treats each ",(0,n.jsx)(t.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:(0,n.jsx)(t.code,{children:"commit"})}),' as a "save point". It\'s a point in the project which can be reverted to if a bug is found, or you want to make a change.']}),"\n",(0,n.jsxs)(t.p,{children:["Whenever performing a ",(0,n.jsx)(t.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#commit",children:(0,n.jsx)(t.code,{children:"commit"})}),", ",(0,n.jsx)(t.strong,{children:"always"})," include a commit ",(0,n.jsx)(t.strong,{children:"message"}),".\nFollowing this practice improves the comprehension of your code and subsequently improves your project's maintainability."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'[user@localhost] $ git commit -m "init commit"\n[master (root-commit) d3d38f6] init commit\n 3 files changed, 23 insertions(+)\n create mode 100644 README.md\n create mode 100644 index.html\n create mode 100644 styles.css\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"git commit"})," performs a commit and the ",(0,n.jsx)(t.code,{children:"-m "}),(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:'"message"'})})," adds a message to the commit. ",(0,n.jsx)("br",{}),'\nNow the staging area has been committed to the repository with the message "init commit".']}),"\n",(0,n.jsxs)(t.p,{children:["There are general ",(0,n.jsx)(t.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"guidelines"})," for writing git commit message which are common in industry. It's ",(0,n.jsx)(t.strong,{children:"highly valuable"})," to be aware of these practices to write effective and informative commit messages."]}),"\n",(0,n.jsx)(t.h3,{id:"git-commits-without-staging",children:"Git Commits without staging"}),"\n",(0,n.jsxs)(t.p,{children:["Sometimes when small changes are made, the staging area can seem like a hassle. Hence, it's convienient to commit directly and avoid the staging area. ",(0,n.jsx)("br",{}),"\nBy using the ",(0,n.jsx)(t.code,{children:"-a"})," option on ",(0,n.jsx)(t.code,{children:"git commit"}),", it's possible to stage every changed and already tracked file."]}),"\n",(0,n.jsxs)(t.p,{children:["To show this let's update ",(0,n.jsx)(t.code,{children:"index.html"})," slightly:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-html",children:'<!DOCTYPE html>\n<html>\n    <head>\n        <title>Hello World!</title>\n        <link rel="stylesheet" href="styles.css">\n    </head>\n\n    <body>\n        <h1>Hello world!</h1>\n        <p>This is the first file in my new Git Repo.</p>\n        <p>A new line within our page!</p>\n    </body>\n</html>\n'})}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.p,{children:["Recall, to open a file to edit in your working directory with ",(0,n.jsx)(t.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#vim",children:"Vim"}),", enter the command ",(0,n.jsx)(t.code,{children:"vim "}),(0,n.jsx)(t.em,{children:(0,n.jsx)(t.code,{children:"filename"})})," and enter insert mode (",(0,n.jsx)(t.code,{children:"I"})," key on the keyboard). To save and exit enter normal mode (",(0,n.jsx)(t.code,{children:"esc"})," key) and enter the command ",(0,n.jsx)(t.code,{children:":wq"})," (write and quit)."]})}),"\n",(0,n.jsxs)(t.p,{children:["Now let's check the status of our ",(0,n.jsx)(t.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#repository-repo",children:"repo"}),", however with the ",(0,n.jsx)(t.code,{children:"--short"})," option to get a more compact response:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"[user@localhost] $ git status --short\nM index.html\n"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Note: The ",(0,n.jsx)(t.code,{children:"--short"})," option on ",(0,n.jsx)(t.code,{children:"git status"})," is also synonymous with ",(0,n.jsx)(t.code,{children:"-s"}),". Hence, either ",(0,n.jsx)(t.code,{children:"git status -s"})," or ",(0,n.jsx)(t.code,{children:"git status --short"})," can be used to perform the same action."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Here's some valuable ",(0,n.jsx)(t.a,{href:"/docs/resources/Git%20Version%20Control/Basics/#git-status-short",children:"information"})," about short git status flags."]}),"\n",(0,n.jsx)(t.p,{children:"Now let's commit directly:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'[user@localhost] $ git commit -a -m "feat: Added a new line in index.html"\nfeat: Added a new line in index.html\n 1 file changed, 1 insertion(+)\n'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["Notice how the commit message follows the ",(0,n.jsx)(t.a,{href:"https://www.conventionalcommits.org/en/v1.0.0/",children:"conventional commits"})," structure."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsx)(t.p,{children:"Warning: It's typically not best practice to skip the staging area since it's possible to accidentally commit unwanted changes. Commit carefully."})}),"\n",(0,n.jsxs)(t.p,{children:["In order to view the commit history of your repository, use the ",(0,n.jsx)(t.code,{children:"log"})," command:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"[user@localhost] $ git log\ncommit c4c4abe5c0156a5626cdafc1e5722d5b2b23e833 (HEAD -> master)\nAuthor: example user <user@example.com>\nDate:   Sun Jul 21 14:12:35 2024 -0400\n\n    feat: Added a new line in index.html\n\ncommit d3d38f65bb0bde98b47a6747d8d02b2e53bd0bcb\nAuthor: example user <user@example.com>\nDate:   Sun Jul 21 13:46:57 2024 -0400\n\n    init commit\n"})})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8524:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/git-workflow-2-811003cae57895fc8459a9748b437057.png"},8453:(e,t,s)=>{s.d(t,{R:()=>r,x:()=>c});var n=s(6540);const i={},o=n.createContext(i);function r(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);