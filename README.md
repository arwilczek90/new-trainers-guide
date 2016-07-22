# new-trainers-guide
A new Trainers Guide for Pokemon Go


# How to develop for this project.
If you are just looking to add information and have no programming experience and don't want any, feel free to make an
 issue and someone will get to it. If you do want to help develop keep reading!
 
# How to develop for this project
This site is a static site that is generated with [Gatsby](https://github.com/gatsbyjs/gatsby). When adding things 
please make a feature branch and submit a pull request. 

To install the requirements you need:
```shell
npm install -g gatsby
npm install
```

Then you can run the dev server with:
```shell
gatsby develop
```

This will run a dev server that will give you live changes on port 8000
You gan make new pages in the pages folder, this is also where any sass or js files go. Pages can be written in 
markdown, plain html, react components, and anything else that gatsby supports. 

Once your changes are made and ready for production, you need to run:
```shell
gatsby build --prefix-links
```
Then copy files from the public folder to the root directory. Overwrite if asked.