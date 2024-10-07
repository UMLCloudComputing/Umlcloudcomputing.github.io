"use strict";(self.webpackChunkumlcloudcomputing=self.webpackChunkumlcloudcomputing||[]).push([[5282],{8167:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var s=t(4848),i=t(8453);const o={sidebar_position:4,slug:"/activities/part-1-aws-infrastructure-and-backend/4-implementing-aws-cdk-stack"},c="\ud83d\udd4b Implementing AWS CDK Stack",r={id:"activities/PhotoSky/Part 1: AWS Infrastructure and Backend/implementing-aws-cdk-stack",title:"\ud83d\udd4b Implementing AWS CDK Stack",description:"In this section, we'll implement the backend infrastructure we designed using AWS CDK (Cloud Development Kit). We'll go through the process step-by-step, explaining each part of the code and how it relates to our architecture.",source:"@site/docs/activities/PhotoSky/Part 1: AWS Infrastructure and Backend/4-implementing-aws-cdk-stack.md",sourceDirName:"activities/PhotoSky/Part 1: AWS Infrastructure and Backend",slug:"/activities/part-1-aws-infrastructure-and-backend/4-implementing-aws-cdk-stack",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/4-implementing-aws-cdk-stack",draft:!1,unlisted:!1,editUrl:"https://github.com/UMLCloudComputing/UMLCloudComputing.github.io/edit/main/docs/activities/PhotoSky/Part 1: AWS Infrastructure and Backend/4-implementing-aws-cdk-stack.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,slug:"/activities/part-1-aws-infrastructure-and-backend/4-implementing-aws-cdk-stack"},sidebar:"activitiesSidebar",previous:{title:"\u270d Designing Backend Architecture",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/3-designing-backend-architecture"},next:{title:"Creating the Lambda Function",permalink:"/docs/activities/part-1-aws-infrastructure-and-backend/5-creating-lambda-function"}},a={},d=[{value:"\ud83e\uddd0 Understanding AWS CDK",id:"-understanding-aws-cdk",level:2},{value:"\u2328\ufe0f Setting Up the CDK Project",id:"\ufe0f-setting-up-the-cdk-project",level:2},{value:"\ud83d\udcdd Initializing the AWS CDK",id:"-initializing-the-aws-cdk",level:2},{value:"\ud83d\udd28 Implementing the PhotoSky Stack",id:"-implementing-the-photosky-stack",level:2},{value:"\ud83d\udee3\ufe0f Conclusion",id:"\ufe0f-conclusion",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"-implementing-aws-cdk-stack",children:"\ud83d\udd4b Implementing AWS CDK Stack"})}),"\n",(0,s.jsx)(n.p,{children:"In this section, we'll implement the backend infrastructure we designed using AWS CDK (Cloud Development Kit). We'll go through the process step-by-step, explaining each part of the code and how it relates to our architecture."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.em,{children:"Stack"})," is a term used within this context to describe a collective definition for cloud resources specific to the application."]})}),"\n",(0,s.jsx)(n.h2,{id:"-understanding-aws-cdk",children:"\ud83e\uddd0 Understanding AWS CDK"}),"\n",(0,s.jsx)(n.p,{children:"AWS CDK allows us to define cloud infrastructure using familiar programming languages. In our case, we're using Python. CDK synthesizes our Python code into a CloudFormation template, which is then used to provision the actual AWS resources."}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-setting-up-the-cdk-project",children:"\u2328\ufe0f Setting Up the CDK Project"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["First, make sure you're in the project root directory. ",(0,s.jsx)("br",{})," If you're not already in the root folder for the project (",(0,s.jsx)(n.code,{children:"photosky-activity"}),") to do so with the following command"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd photosky-activity\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Our CDK code will live in the ",(0,s.jsx)(n.code,{children:"cdk"})," directory. Let's navigate there with the following command:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cd cdk\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Open ",(0,s.jsx)(n.code,{children:"photosky_stack.py"})," in your preferred text editor. This is where we'll define our stack."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["If you're Github Codespaces or VSCode, the file can be opened by simply clicking on ",(0,s.jsx)(n.code,{children:"cdk"})," and then ",(0,s.jsx)(n.code,{children:"photosky_stack.py"}),". This should open the file to edit."]})}),"\n",(0,s.jsx)(n.h2,{id:"-initializing-the-aws-cdk",children:"\ud83d\udcdd Initializing the AWS CDK"}),"\n",(0,s.jsxs)(n.p,{children:["Before we can use the CDK, we must initialize it. Initializing the CDK must be done within ",(0,s.jsx)(n.code,{children:"app.py"})," still within the ",(0,s.jsx)(n.code,{children:"cdk"})," directory."]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"For Github Codespace or VS Code users, double click the file to open it for editing."})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["Looking more closely at the code we can see that we import ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," within our python code. We will be creating this very stack later. First we must initialize it!"]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["To do so, place the provided code within the specified file (",(0,s.jsx)(n.code,{children:"app.py"}),").",(0,s.jsx)("br",{}),"\nBefore we do that, let's take a closer look at it!",(0,s.jsx)("br",{}),"\nWe utilize the python native ",(0,s.jsx)(n.code,{children:"os"})," import properly obtain enviornment variable data we previously initialized within our ",(0,s.jsx)(n.code,{children:".env"})," file. The ",(0,s.jsx)(n.code,{children:"dotenv"})," import enables us to assign enviornment variables with our ",(0,s.jsx)(n.code,{children:".env"})," file without having to modify them directly. ",(0,s.jsx)("br",{}),"\nMost importantly, we also import ",(0,s.jsx)(n.code,{children:"cdk"})," to properly intialize initialize our Photosky app's stack (",(0,s.jsx)(n.code,{children:"PhotoskyStack"}),"). The function call the ",(0,s.jsx)(n.code,{children:"synth()"})," is what will enable use to sythesize our infrastructure and to build a template of it's specifications and structure."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'#!/usr/bin/env python3\nimport os\nfrom dotenv import load_dotenv\nimport aws_cdk as cdk\nfrom photosky_stack import PhotoskyStack\n\nload_dotenv()\n\napp = cdk.App()\nPhotoskyStack(app, os.getenv("APP_NAME"),)\napp.synth()\n'})}),"\n",(0,s.jsx)(n.h2,{id:"-implementing-the-photosky-stack",children:"\ud83d\udd28 Implementing the PhotoSky Stack"}),"\n",(0,s.jsxs)(n.p,{children:["Let's break down the ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," class and implement it step by step:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"First, let's import the necessary modules:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"from aws_cdk import (\n    Duration,\n    Stack,\n    RemovalPolicy,\n    aws_lambda as _lambda,\n    aws_s3 as s3,\n    aws_apigateway as apigateway,\n)\nfrom constructs import Construct\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Importing these modules enables us to interact with the AWS CDK.\n",(0,s.jsx)(n.code,{children:"aws_lambda"}),", ",(0,s.jsx)(n.code,{children:"aws_s3"}),", & ",(0,s.jsx)(n.code,{children:"aws_apigateway"})," are the three primary cloud interfaces we would be using. Hence, their imports here enable us to write infrastructure as code. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["The inclusion of RemovalPolicy allows us to specify the action that should be taken if a resource stops being managed by Cloud formation. More info from the docs can be found ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/api/v2/python/aws_cdk/RemovalPolicy.html",children:"here"})]}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["The import of the ",(0,s.jsx)(n.code,{children:"Stack"})," class allows us to create our own stack, which inherits from the base ",(0,s.jsx)(n.code,{children:"Stack"})," class."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Now, let's define our stack class:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"class PhotoskyStack(Stack):\n    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:\n        super().__init__(scope, construct_id, **kwargs)\n\n        # We'll add our resources here\n"})}),"\n",(0,s.jsx)("br",{}),"\n",(0,s.jsxs)(n.p,{children:["The code above enables to define the class in a preliminary phase. ",(0,s.jsx)("br",{}),"\nNotice that is has the parameters of ",(0,s.jsx)(n.code,{children:"scope"})," and ",(0,s.jsx)(n.code,{children:"construct_id"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"scope"})," - Represents the construct's parent or owner. Our ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," is a cloudformation stack. Constructs are the building blocks of the CDK. Each construct represents one or more AWS resources and their config"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"id"})," - Represents a unique identifier within our scope. This identifier is used as a namespace for everything within the construct. This identifier is later used to create information such as resource names and CloudFormation logical IDs."]}),"\n",(0,s.jsxs)(n.li,{children:["More info from the ",(0,s.jsx)(n.a,{href:"https://docs.aws.amazon.com/cdk/v2/guide/constructs.html",children:"official docs"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Let's add our Lambda function within our ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'dockerFunc = _lambda.DockerImageFunction(\n    scope=self,\n    id=f"ID{construct_id}",\n    function_name=construct_id,\n    environment= {\n        "BUCKET_NAME": f"{construct_id.lower()}"\n    },            \n    code=_lambda.DockerImageCode.from_image_asset(\n        directory="src"\n    ),\n    timeout=Duration.seconds(300)\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This creates a Lambda function from a Docker image. The Docker image will be built from the ",(0,s.jsx)(n.code,{children:"Dockerfile"})," in the ",(0,s.jsx)(n.code,{children:"src"})," directory. ",(0,s.jsx)("br",{}),"\nNotice how we utilize the ",(0,s.jsx)(n.code,{children:"id"})," parameter within this code to specify resource names within the ",(0,s.jsx)(n.code,{children:"function_name"}),", ",(0,s.jsx)(n.code,{children:"id"}),", and ",(0,s.jsx)(n.code,{children:"envronment"})," parameters of our ",(0,s.jsx)(n.code,{children:"lambda.DockerImageFunction"})," instance."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["If you're copying the content section by section, be sure to correct indentation!\nPython is indentation sensitive. ",(0,s.jsx)("br",{}),"\nWithin VS Code this can be done using ",(0,s.jsx)(n.code,{children:"Ctrl + Shift + i"})," or by ",(0,s.jsx)(n.code,{children:"Ctrl + Shift + p"})," and then typing & clicking ",(0,s.jsx)(n.code,{children:"Format Document"}),". ",(0,s.jsx)("br",{})]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Next, let's create our API Gateway:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'api = apigateway.LambdaRestApi(self, "api",\n    handler=dockerFunc,\n    proxy=True,\n    default_cors_preflight_options={\n        "allow_origins": ["*"],\n        "allow_methods": apigateway.Cors.ALL_METHODS,\n        "allow_headers": ["*"],\n    }\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This creates an API Gateway that proxies all requests to our Lambda function. It also sets up CORS to allow requests from any origin.",(0,s.jsx)("br",{}),"\nCORS stands for Cross-Origin Resource Sharing. It enables our backend to accept uploads of pictures from our client and process downloads from the cloud itself."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Now, let's create our S3 bucket:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'bucket = s3.Bucket(\n    self, \n    id=f"id{construct_id.lower()}", \n    bucket_name=f"{construct_id.lower()}",\n    cors=[s3.CorsRule(\n        allowed_methods=[s3.HttpMethods.GET, s3.HttpMethods.POST, s3.HttpMethods.PUT, s3.HttpMethods.DELETE],\n        allowed_origins=["*"],\n        allowed_headers=["*"],\n        exposed_headers=["ETag"],\n        max_age=3000\n    )],\n    removal_policy=RemovalPolicy.DESTROY,\n    auto_delete_objects=True\n)\n'})}),"\n",(0,s.jsxs)(n.p,{children:["This creates an S3 bucket with CORS configured to allow all methods from any origin. The ",(0,s.jsx)(n.code,{children:"removal_policy"})," and ",(0,s.jsx)(n.code,{children:"auto_delete_objects"})," parameters ensure the bucket will be deleted when we destroy our stack."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Finally, let's grant our Lambda function read/write access to the S3 bucket by adding the following line of code to the very end of our ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," class:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:"bucket.grant_read_write(dockerFunc)\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Here's what the complete ",(0,s.jsx)(n.code,{children:"PhotoskyStack"})," class should look like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'class PhotoskyStack(Stack):\n    def __init__(self, scope: Construct, construct_id: str, **kwargs) -> None:\n        super().__init__(scope, construct_id, **kwargs)\n\n        dockerFunc = _lambda.DockerImageFunction(\n            scope=self,\n            id=f"ID{construct_id}",\n            function_name=construct_id,\n            environment= {\n                "BUCKET_NAME": f"{construct_id.lower()}"\n            },            \n            code=_lambda.DockerImageCode.from_image_asset(\n                directory="../src"\n            ),\n            timeout=Duration.seconds(300)\n        )\n\n        api = apigateway.LambdaRestApi(self, "api",\n            handler=dockerFunc,\n            proxy=True,\n            default_cors_preflight_options={\n                "allow_origins": ["*"],\n                "allow_methods": apigateway.Cors.ALL_METHODS,\n                "allow_headers": ["*"],\n            }\n        )\n\n        bucket = s3.Bucket(\n            self, \n            id=f"id{construct_id.lower()}", \n            bucket_name=f"{construct_id.lower()}",\n            cors=[s3.CorsRule(\n                allowed_methods=[s3.HttpMethods.GET, s3.HttpMethods.POST, s3.HttpMethods.PUT, s3.HttpMethods.DELETE],\n                allowed_origins=["*"],\n                allowed_headers=["*"],\n                exposed_headers=["ETag"],\n                max_age=3000\n            )],\n            removal_policy=RemovalPolicy.DESTROY,\n            auto_delete_objects=True\n        )\n\n        bucket.grant_read_write(dockerFunc)\n'})}),"\n",(0,s.jsx)(n.p,{children:"This code defines our entire backend infrastructure:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It creates a Lambda function, packaged as a Docker image."}),"\n",(0,s.jsx)(n.li,{children:"It sets up an API Gateway that proxies all requests to our Lambda function."}),"\n",(0,s.jsx)(n.li,{children:"It creates an S3 bucket for storing our images, with CORS configured."}),"\n",(0,s.jsx)(n.li,{children:"It grants the Lambda function read and write access to the S3 bucket."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-conclusion",children:"\ud83d\udee3\ufe0f Conclusion"}),"\n",(0,s.jsxs)(n.p,{children:["We successfully just implement our CDK stack for PhotoSky! ",(0,s.jsx)("br",{}),"\nWe can now spool resources on the cloud from the cloud as specified within our stack. ",(0,s.jsx)("br",{}),"\nThese resources will be used to handle and process our requests to the backend of PhotoSky!"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>r});var s=t(6540);const i={},o=s.createContext(i);function c(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);